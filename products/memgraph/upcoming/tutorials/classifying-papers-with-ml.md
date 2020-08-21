## Classifying papers (with ML)

This article is a part of a series intended to show how to use Memgraph
on real-world data to retrieve some interesting and useful
information.

We highly recommend checking out the other articles from this series:

- [Backpacking Through Europe](backpacking-through-europe.md)
- [Analyzing TED Talks](analyzing-TED-talks.md)
- [Graphing the Premier League](graphing-the-premier-league.md)
- [Movie Recommendation System](movie-recommendation.md)
- [Exploring the European Road Network](exploring-the-european-road-network.md)
- [Marvel Comic Universe Social Network](marvel-universe.md)
- [Backpacking Through Europe](backpacking-through-europe.md)

### Introduction

In the last few years, a subset of artificial intelligence called machine
learning started to develop rapidly. Today, there's a small chance that you
haven't at least heard someone mention it. Even though the field isn't
completely new, faster development of the hardware enabled machine learning
to tackle new challenges that were nearly impossible before.

For now, machine learning has had the most success in the computer vision field.
Because of the insane amount of information contained in a single image, it was
hard to develop algorithms that achieve high accuracy and speed.
With machine learning, we can finally solve various problems by sending
the data to the model and letting the machine find any patterns present in the
images.

Computer vision isn't the only field reaping the benefits of machine learning.
Email filtering, detection of malware, translations, sentiment analysis, and
recommendation systems all use machine learning in some way.

The most important thing is the data. Every day, we generate an insane amount
of data, and, for many different things, there exists some connection
between the data. That kind of data can be represented with graphs.
Nodes by itself can contain a certain amount of data, i.e., nodes are defined
by their features. With edges, the amount of information we have about a
single node increases because we can use nodes and edges in its neighborhood.
Considering all that, we can say that machine learning is something
that could work well with graphs.

Lately, many papers about graph machine learning emerged with a lot
of interesting problems being solved using it, e.g., node classification
and link prediction that tries to find missing connections in the graph.

Also, something that will surely help the advancement of the graph-based
machine learning is a library supporting it. The library that we will be using
throughout the tutorial and recommend is [StellarGraph](https://github.com/stellargraph/stellargraph).
StellarGraph contains a significant number of algorithms and methods that enable
easier definitions of the machine learning models that use graphs in any way.
It's straightforward to use, and it offers excellent integration with Keras.

In this tutorial, we will mostly follow StellarGraph's tutorial for the node
classification using the Cora dataset and [GCN](https://arxiv.org/pdf/1703.06103.pdf). The purpose of this tutorial is to
show how, through modules, you can easily train a model and get predictions
using the data saved in the Memgraph database.

### Data Model

For our tutorial, we will be using the Cora dataset. The dataset consists of
2708 scientific papers classified into one of seven classes where
each class represents the subject of the paper. 5429 links represent
citation. Even though the original dataset is a directed graph, we will ignore
the edge direction.

Each paper is defined with a 0/1 word vector where each field of the
vector represents the absence/presence of the corresponding word from the
dictionary, which consists of 1433 unique words.

### Importing the Snapshot

We have prepared a database snapshot for this example, so the user can easily
import it when starting Memgraph using the `--data-directory` option and we
will define a directory that will contain our query module.

```plaintext
  /usr/lib/memgraph/memgraph --data-directory /usr/share/memgraph/examples/Cora \
    --storage-snapshot-interval-sec=0 --storage-wal-enabled=false \
    --storage-snapshot-on-exit=false --storage-properties-on-edges=true
    --query-modules-directory=StellarGraphModules
```

When using Memgraph installed from a Debian or RPM package,
the currently running Memgraph server needs to be stopped before
importing the example, using the following command:

```plaintext
systemctl stop memgraph
```

### Initial setup
First, we need to create our Python script that will contain the procedures.
Let's create in our query modules directory a file named `cora_ml.py`.

At the beginning of the file, we will add all the necessary imports:

```python
import mgp
import datetime

import stellargraph as sg
from stellargraph.mapper import FullBatchNodeGenerator
from stellargraph.layer import GCN

import pandas as pd
import numpy as np

import tensorflow as tf
from tensorflow.keras import layers, optimizers, losses, metrics, Model
from sklearn import preprocessing, model_selection

from collections import defaultdict
```

### Loading and preparing the data

To use anything StellarGraph provides, we need to convert our data
to a `StellarGraph` object. So, let's define a method that does that.
Our method will create a `StellarGraph` from a Memgraph graph. Also,
we will return the subjects of each paper using `pandas.Series`.

```python
def _get_stellar_graph(context: mgp.ProcCtx):
    features = []
    index = []
    node_subjects = {}

    for v in context.graph.vertices:
        index.append(v.id)
        features.append(v.properties['features'])
        node_subjects[v.id] = v.properties['subject']

    nodes = sg.IndexedArray(np.array(features), index=index)

    edges = {
        'source': [],
        'target': []
    }
    for v in context.graph.vertices:
        context.check_must_abort()
        for e in v.out_edges:
            edges['source'].append(e.from_vertex.id)
            edges['target'].append(e.to_vertex.id)
    edges = pd.DataFrame(edges)

    G = sg.StellarGraph(nodes=nodes, edges=edges)
    G.check_graph_for_ml()

    return G, pd.Series(node_subjects)
```

### Training a model

Now that we have a way to transform our graph to a `StellarGraph` object we
can easily use everything the StellarGraph provides.
Let's start defining the procedure that will train a model on our data.
We will name the procedure `train`, and it will return the `test_acc` and
`test_loss` measured after the training.

```python
@mgp.read_proc
def train(context: mgp.ProcCtx
          ) -> mgp.Record(test_acc=float, test_loss=float):
    G, node_subjects = _get_stellar_graph(context)
```

Like in every correct training of the ML model, we need to split our data in
three sets: train, validation, and test. We will use `sklearn` to split our nodes
paired with their targets.

```python
    train_subjects, test_subjects = model_selection.train_test_split(
        node_subjects, train_size=140, test_size=None, stratify=node_subjects
    )

    val_subjects, test_subjects = model_selection.train_test_split(
        test_subjects, train_size=500, test_size=None, stratify=test_subjects
    )
```

To train our model we need to represent our targets differently. For our model,
every subject will be represented using One-Hot encoding. We can easily
achieve that by using `LabelBinarizer` also from `sklearn`.

```python
    target_encoding = preprocessing.LabelBinarizer()

    train_targets = target_encoding.fit_transform(train_subjects)
    val_targets = target_encoding.transform(val_subjects)
    test_targets = target_encoding.transform(test_subjects)
```

Let's save our encoding mappings so that we can transform our model's output in
different procedures:

```python
    with open('/home/memgraph/class_encodings', 'w+') as encodings:
        encodings.write(','.join(target_encoding.classes_))
```

During the training of the model we need to feed our data somehow. As we said
before, we will be using GCN model which is a full-batch model. `stellargraph`
provides different [generators](https://stellargraph.readthedocs.io/en/v1.1.0/api.html#module-stellargraph.mapper) for different models and tasks.
We will be using `FullBatchNodeGenerator` which takes a `StellarGraph` object
as its first argument. We can also send the name of the method we will be
using, `gcn`, which will adapt the data for that specific method.

```python
    generator = FullBatchNodeGenerator(G, method='gcn')
```

Now, we can use that generator for our three sets. We need our training data
first:

```python
    train_gen = generator.flow(train_subjects.index, train_targets)
```

The next thing we need to do is to define the model. StellarGraph contains
`GCN` class which stacks a set amount of [graph convolution](https://stellargraph.readthedocs.io/en/latest/api.html#stellargraph.layer.gcn.GraphConvolution) and [dropout](https://www.tensorflow.org/api_docs/python/tf/keras/layers/Dropout) layers.
We will be using two GCN layers with 16 units each. The activation applied to
each GCN layer's output will be ReLU, and the rate of dropout is 50%.

```python
    gcn = GCN(
        layer_sizes=[
            16,
            16],
        activations=[
            'relu',
            'relu'],
        generator=generator,
        dropout=0.5)
```

To create a Keras model we need input and output tensors of the GCN model.
We can get that via the `GCN.in_out_tensors`:

```python
    x_inp, x_out = gcn.in_out_tensors()
```

`x_out` is a TensorFlow tensor that holds a 16-dimensional vector for each
node. Using that, we need to compute our class prediction. We can use a dense layer
that has 7 units (number of classes) and applies softmax activation to its
outputs. Softmax ensures that the output consists of the probabilities for
each class, and the class with the highest probability is our predicted value.

```python
    predictions = layers.Dense(
        units=train_targets.shape[1],
        activation='softmax')(x_out)
```

Now the only thing left to do is creating the Keras model which takes `x_inp`
as the input tensor and the output tensors are the predictions from the final
dense layer. Because there are 7 possible classes, we will be using
categorical cross-entropy loss function.

```python
    model = Model(inputs=x_inp, outputs=predictions)
    model.compile(
        optimizer=optimizers.Adam(lr=0.01),
        loss=losses.categorical_crossentropy,
        metrics=['acc']
    )
```

We would also like to keep an eye on the model's generalization performance.
We will use our validation set, and the first thing we need to do is create a
generator:

```python
val_gen = generator.flow(val_subjects.index, val_targets)
```

We can use everything Keras offers for our training. We will stop our training
if the validation accuracy stops improving by using `EarlyStopping`.

```python
    from tensorflow.keras.callbacks import EarlyStopping

    es_callback = EarlyStopping(
        monitor='val_acc',
        patience=50,
        restore_best_weights=True)
```

Also, we would like to use [TensorBoard](https://www.tensorflow.org/tensorboard), so we can monitor
our training.

```python
    current_datetime = datetime.datetime.now().strftime('%Y%m%d-%H%M%S')
    log_dir = '/home/memgraph/logs/' + current_datetime
    tb_callback = tf.keras.callbacks.TensorBoard(
        log_dir=log_dir, histogram_freq=1)
```

We can finally start training our model using the model's `fit` method.

```python
    history = model.fit(
        train_gen,
        epochs=200,
        validation_data=val_gen,
        verbose=2,
        shuffle=False,
        callbacks=[es_callback, tb_callback]
    )
```

Let's also save our model so we can use it later:

```python
model.save('/home/memgraph/cora-model')
```

We would like to know how our model performs on the data that wasn't used in
any way for the training. We have our test set, and we will check the model
against it. As always, we need to create our generator first:

```python
test_gen = generator.flow(test_subjects.index, test_targets)
```

To evaluate our model we simply call the model's `evaluate` method:

```python
test_metrics = model.evaluate(test_gen)
```

And let's return the metrics as the output of the procedure:

```python
return mgp.Record(test_acc=test_metrics[1], test_loss=test_metrics[0])
```

Now, let's start the training of the model!

```opencypher
CALL cora_ml.train()
YIELD *;
```

### Classifying our data

Now that we have trained our model and saved it, we would like to use it to
classify our data. To avoid creating the `StellarGraph` and loading
of the model for every single procedure call let's define a helper procedure
that will create a `StellarGraph` from the Memgraph graph and store it
globally. We will do the same for our trained model.

The procedure for creating the `StellarGraph` object should look like this:

```python
stellar_graph = None


@mgp.read_proc
def load_stellar_graph(context: mgp.ProcCtx) -> mgp.Record():
    global stellar_graph
    stellar_graph, _ = _get_stellar_graph(context)
    return mgp.Record()
```

and the procedure for loading the model:

```python
prediction_model = None


@mgp.read_proc
def load_model(context: mgp.ProcCtx) -> mgp.Record():
    global prediction_model
    prediction_model = tf.keras.models.load_model(
        '/home/memgraph/cora-model',
        custom_objects=sg.custom_keras_layers)
    return mgp.Record()
```

We can notice StellarGraph's `custom_keras_layers` which enables loading
of the Keras models containing StellarGraph's layers.

Let's call them now:

```opencypher
CALL cora_ml.load_stellar_graph();
CALL cora_ml.load_model();
```

After everything is loaded, we can start classifying our vertices by defining
a procedure that calls model's `predict` method. We need to load our class
encodings so that we can return our prediction in a nicer, more understandable
form.

```python
@mgp.read_proc
def predict(context: mgp.ProcCtx,
            vertex: mgp.Vertex) -> mgp.Record(prediction=str,
                                              gt=str):
    with open('/home/memgraph/class_encodings', 'r') as encodings_file:
        encodings = encodings_file.read().split(',')

    if stellar_graph is None:
        raise Exception("Stellar graph needs to be loaded")
    if prediction_model is None:
        raise Exception("Model needs to be loaded")
    generator = FullBatchNodeGenerator(stellar_graph, 'gcn')
    vertex_flow = generator.flow([vertex.id])
    prediction = prediction_model.predict(vertex_flow)

    return mgp.Record(prediction=encodings[np.argmax(
        prediction)], gt=vertex.properties['subject'])
```

Let's classify 50 vertices, print their ID, predicted subject and their correct
subject:

```opencypher
MATCH (n)
WITH n
LIMIT 50
CALL cora_ml.predict(n)
YIELD *
RETURN n.id, prediction, gt;
```

### Why GCN?

You're probably wondering why did we use GCN layers in our models. You can
easily define a model that can classify the papers by only using their
features.
Let's try to do that!

We will define a model that's almost identical to the previous model, the
only difference is that we will replace the GCN layers with the dense layers
that have the same number of units and the same activation function. We will
split our dataset into three groups using the same group sizes used for the
training of the GCN model.

```python
@mgp
def train_without_gcn(context: mgp.ProcCtx
                      ) -> mgp.Record(test_acc=float, test_loss=float):

    features = np.array([v.properties['features']
                         for v in context.graph.vertices])
    subjects = np.array([v.properties['subject']
                         for v in context.graph.vertices])

    subjects = preprocessing.LabelBinarizer().fit_transform(subjects)

    x_train, x_test, y_train, y_test = model_selection.train_test_split(
        features, subjects, train_size=140, test_size=None, stratify=subjects
    )

    x_val, x_test, y_val, y_test = model_selection.train_test_split(
        x_test, y_test, train_size=500, test_size=None, stratify=y_test
    )

    model = tf.keras.Sequential()

    model.add(
        tf.keras.layers.Dense(
            16,
            activation='relu',
            input_shape=features[0].shape))
    model.add(tf.keras.layers.Dense(16, activation='relu'))
    model.add(tf.keras.layers.Dense(7, activation='softmax'))

    model.compile(
        optimizer=optimizers.Adam(lr=0.01),
        loss=losses.categorical_crossentropy,
        metrics=['acc']
    )

    from tensorflow.keras.callbacks import EarlyStopping

    es_callback = EarlyStopping(
        monitor='val_acc',
        patience=50,
        restore_best_weights=True)

    model.fit(
        x_train,
        y_train,
        batch_size=32,
        epochs=200,
        validation_data=(x_val, y_val),
        verbose=2,
        shuffle=False,
        callbacks=[es_callback]
    )

    test_metrics = model.evaluate(x_test, y_test)

    return mgp.Record(test_acc=test_metrics[1], test_loss=test_metrics[0])
```

Now let's see call the procedure and see the results:

```opencypher
CALL cora_ml.train_without_gcn()
YIELD *;
```

Using the GCN layers, we got 80% accuracy on the test data. When we replaced GCN
layers with dense layers, the accuracy drops to 53%.

Our training set consists only of 140 nodes, so it's a relatively small set and
it shouldn't come as a surprise that most models would struggle to learn
something useful from it.  Even though our GCN model used a training set of the
same size, it adds the information about the node's neighborhood, which
drastically improves our results.

### Conclusion

Graphs provide a significant amount of information that can definitely be useful
for machine learning models for some classic problems like classification. We
can also use them to solve some problems unique to the graph-structured data.
Examples of this would be:
* Link prediction - inferring missing or finding hidden relationships between
  entities
* Community detection - inferring communities or clusters of nodes
* Graph classification - classifying the graph as a one single unit

We recommend you to read "[Knowing Your Neighbours: Machine Learning on Graphs](https://medium.com/stellargraph/knowing-your-neighbours-machine-learning-on-graphs-9b7c3d0d5896)"
to get a nice overview of machine learning using graphs.

Also, we encourage you to visit [StellarGraph's site](https://www.stellargraph.io/).
It's a great library that is continuously being improved following the latest
innovations in machine learning. The most important thing is the excellent
integration with the TensorFlow enabling you, if you are already familiar with
machine learning, to start immediately experimenting with models that use
graphs.

The field is relatively new, and more useful applications alongside performance
improvements are guaranteed to come. At Memgraph, we're aware of the potential
of the machine learning applied to graphs, and we're always open to any
suggestions that would make our database better to use in the said field.
