---
id: gnn-node-classification
title: gnn-node-classification
sidebar_label: gnn-node-classification
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
{children}
</span>
);

[![docs-source](https://img.shields.io/badge/source-node_classification-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/T515-IN-node-classification-with-pyg/python/node_classification.py)

## Abstract

Intuitively, node classification is problem where one has to determine labelling of samples from other neighbours’ labels.
Little more formally, let $G=(V,E)$ be a graph, S set of all labels, and $f : V → S$ vertex labelling function which returns true labels. From given partial function $g : V’ ⊆ V → S$ (training examples) node classification model aims to learn function $g’ : V → S$ which tries to predict as many true labels as possible. It is motivated by sociological concept of “homophily”: individual nodes tend to associate and bond with each other because they probably have similar labels.

## User story

Set $V$ in this case can be a lot of things, the most common are scientific publications, proteins, Reddit posts etc. In the same respective order, set $E$ can be citation of publications, protein connections or connection of posts commented by same user. Therefore, if user wants to classify publication relevant to its field, find if protein is helpful to curing new diseases, or simply find out to which subreddit its post naturally belongs, it should try out this approach. Given any not completely labeled graph, this problem will find all nodes’ labels.

In this query module, we will concentrate on one very important use case of node classification: **Fraud detection**.

Fraud Detection is a vital topic that applies to many industries including the financial sectors, banking, government agencies, insurance, and law enforcement, and more. Fraud endeavors have detected a radical rise in current years, creating this topic more critical than ever. Despite struggles on the part of the troubled organizations, hundreds of millions of dollars are wasted to fraud each year. Because nearly a few samples confirm fraud in a vast community, locating these can be complex. Data mining and statistics help to predict and immediately distinguish fraud and take immediate action to minimize costs.

### About the query module

This query module contains all necessary functions user should need to train GNN model on Memgraph. User first fills Memgraph nodes and edges, either with prepared dataset or made by its own. 

In this query module these are some of functionalities that can be used:

 1. **graph can be heterogeneous or homogeneous**
    - multiple node and edge labels are allowed
 2. **no restrictions on dataset size** 
    - implemented data loader
 3.  **multiple model architectures** to work on (inductive learning)
    - GAT with Jumping Knowledge
    - multiple version of GAT
    - GraphSAGE
 4. model **training**
    1. saving of last $n$ models
    2. early stopping
    3. metrics calculations
 5. **predict** on one node
 6. **saving** models
 7. **loading** models


If you want to explore our implementation, jump to
**[github/memgraph/mage](https://github.com/memgraph/mage)** and find
`python/node_classification.py`. You can also jump to the [download
page](https://memgraph.com/download), download **Memgraph Platform** and fire up
**Node Classification**. We have prepared an homogenouse graph **Yelp-Fraud (Multi-relational Graph Dataset for Yelp Spam Review Detection)** dataset on which you can
explore node classification using a **[Jupyter
Notebook](https://github.com/memgraph/jupyter-memgraph-tutorials)** and other Memgraph **home-made** heterogeneous graph fraud detection dataset.

Feel free to open a **[GitHub issue](https://github.com/memgraph/mage/issues)**
or start a discussion on **[Discord](https://discord.gg/memgraph)** if you want
to speed up development.

How should **you** use the following module? Load dataset, call `set_model_parameters`, and let the training begin! When training is finished, models are saved. You can test them on other data (which model has not already seen!) and check the results!
The module reports the [mean average
precision](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.average_precision_score.html)
for every batch _training_ or _evaluation_ done.

### Usage

The following procedure is expected when using **Node classification**:

- fill Memgraph with data using Cypher, CSV, or easily with our already prepared datasets
- you should first set parameters by calling `set_model_parameters()` function
  - you should probably set **node features** label
- now call `train()` function
- take a look of training data with `get_training_data()` function
- optionally use `save_model()` and `load_model()` if you want
- use `predict()` for predicting classes on **not already seen** nodes




:::info

This **MAGE** module is still in its early stage. We intend to use it only for
**learning** activities. If you wish to make it production-ready, make sure
to either open a **[GitHub issue](https://github.com/memgraph/mage/issues)** or
drop us a comment on **[Discord](https://discord.gg/memgraph)**. Also, consider
throwing us a :star: so we can continue to do even better work.

:::

## Procedures

### `set_model_parameters(params)`

The purpose of this function is to initialize all global variables. _You_ can change those via **params** dictionary. It checks if variables in **params** are defined appropriately. If so, map of default global parameters is overriden with user defined dictionary params.
After that it executes previously defined functions declare_globals and
declare_model_and_data and sets each global variable to some value.

#### Input:
- `ctx: (mgp.ProcCtx)`: current context,
- `params: (mgp.Map, optional)`: user  defined parameters from query module. Defaults to {}

#### Exceptions:
- `Exception`: exception is raised if some variable in dictionary params is not defined as it should be

#### Return values
`mgp.Record` of:

- `hidden_features_size (list)`: list of hidden features
- `layer_type (str)`: type of layer
- `aggregator (str)`: type of aggregator
- `learning_rate (float)`: learning rate
- `weight_decay (float)`: weight decay
- `split_ratio (float)`: ratio between training and validation data
- `metrics (list)`: list of metrics to be calculated
- `node_id_property (str)`: name of nodes id property
- `num_epochs (int)`: number of epochs
- `console_log_freq (int)`: frequency of logging metrics
- `checkpoint_freq (int)`: frequency of saving models
- `device_type (str)`: cpu or cuda
- `path_to_model (str)`: path where model is load and saved

#### Usage:

```cypher
  CALL node_classification.set_model_parameters(
    {layer_type: "GATJK", learning_rate: 0.001, hidden_features_size: [16,16], class_name: "fraud", features_name: "embedding"}
  ) PROCEDURE MEMORY UNLIMITED YIELD * RETURN in_channels;
```

### train(ctx: mgp.ProcCtx, no_epochs: int = 100)

This function performs training of model. It first declares data, model, optimizer and criterion. Then it performs training.
#### Input

- `ctx (mgp.ProcCtx)`: context of process
- `no_epochs (int, optional)`: number of epochs. Defaults to 100.

#### Exceptions
- `Exception`: raised if graph is empty

#### Return values
`list` of `mgp.Record` of:
- `epoch (int)`: epoch number
- `loss (float)`: loss of model on training data
- `val_loss (float)`: loss of model on validation data
- `train_log (list)`: list of metrics on training data
- `val_log (list)`: list of metrics on validation data

#### Usage
```cypher
  CALL node_classification.train(10) YIELD *;
```

### get_training_data()
This function is used so user can see logged data from training.

#### Return values

`mgp.Record` of:
- `epoch (int)`: epoch number of record of logged data row
- `loss (float)`: loss in logged data row
- `train_log (mgp.Any)`: training parameters of record of logged data row
- `val_log (mgp.Any)`: validation parameters of record of logged data row

#### Usage
```cypher
  CALL node_classification.get_training_data() YIELD *;
```

### save_model()

This function saves model to model saving folder. If there are already total of **max_models_to_keep** models in model saving folder, oldest model is deleted.

#### Exception
- `Exception`: raised if model is not initialized or defined

#### Return values
`mgp.Record` of

- `path (str)`: path to saved model
- `status (str)`: status of saving model

#### Usage
```cypher
  CALL node_classification.save_model() YIELD *;
```

### load_model(num: int = 0)

This function loads model from defined folder for saved models.

#### Input

- `num (int, optional)`: ordinary number of model to load from default map. Defaults to 0 (newest model).

#### Return values
`mgp.Record` of 
- path (str): path to loaded model

#### Usage

```cypher
  CALL node_classification.load_model() YIELD *;
```

### predict(ctx: mgp.ProcCtx, vertex: mgp.Vertex)

This function predicts metrics on one node. It is suggested that user previously
loads unseen test data to predict on it.
    
#### Input

- `ctx (mgp.ProcCtx)`: proc context
- `vertex (mgp.Vertex)`: node to predict on

#### Return values
`mgp.Record` of 
- `predicted_class (int)`: predicted class

#### Usage:
```cypher
MATCH (n {id: 1}) CALL node_classification.predict(n) YIELD * RETURN predicted_value;
```
- note: if node with property *id = 1* doesn't exist, query module won't be called

### reset()
This function resets all variables to default values.

#### Return values
`mgp.Record` of 
- `status (str)`: status of reset

#### Usage:
```cypher
  CALL node_classification.reset() YIELD *;
```

## Example

<Tabs
groupId="example"
defaultValue="visualization"
values={[
{label: 'Step 1: Input graph', value: 'visualization'},
{label: 'Step 2: Set parameters', value: 'cypher-param-set'},
{label: 'Step 3: Set trigger', value: 'cypher-trigger-set'},
{label: 'Step 4: Load training batch', value: 'cypher-train-load'},
{label: 'Step 5: Change mode', value: 'cypher-mode-change'},
{label: 'Step 6: Load evaluation batch', value: 'cypher-eval-load'},
{label: 'Step 7: Train epochs', value: 'cypher-epoch-train'},
{label: 'Step 8: Run', value: 'run'},
{label: 'Step 9: Results', value: 'result'},
]
}>
<TabItem value="visualization">

<img src={require('../../data/query-modules/python/tgn/graph_visualization.png').default}/>

  </TabItem>
  <TabItem value="cypher-param-set">

```cypher
CALL tgn.set_params({learning_type:'self_supervised', batch_size:2, num_of_layers:1,
                      layer_type:'graph_attn',memory_dimension:100, time_dimension:100,
                      num_edge_features:20, num_node_features:20, message_dimension:100,
                      num_neighbors:10, edge_message_function_type:'identity',
                      message_aggregator_type:'last', memory_updater_type:'gru', num_attention_heads:1});
```

  </TabItem>
  <TabItem value="cypher-trigger-set">

```cypher
CREATE TRIGGER create_embeddings ON --> CREATE BEFORE COMMIT
EXECUTE CALL tgn.update(createdEdges) RETURN 1;
```

  </TabItem>
  <TabItem value="cypher-train-load">

```cypher
MERGE (n:Node {id: 1}) MERGE (m:Node {id: 6}) CREATE (n)-[:RELATION]->(m);
MERGE (n:Node {id: 2}) MERGE (m:Node {id: 6}) CREATE (n)-[:RELATION]->(m);
MERGE (n:Node {id: 10}) MERGE (m:Node {id: 5}) CREATE (n)-[:RELATION]->(m);
MERGE (n:Node {id: 5}) MERGE (m:Node {id: 2}) CREATE (n)-[:RELATION]->(m);
MERGE (n:Node {id: 9}) MERGE (m:Node {id: 7}) CREATE (n)-[:RELATION]->(m);
MERGE (n:Node {id: 7}) MERGE (m:Node {id: 3}) CREATE (n)-[:RELATION]->(m);
MERGE (n:Node {id: 3}) MERGE (m:Node {id: 6}) CREATE (n)-[:RELATION]->(m);
MERGE (n:Node {id: 9}) MERGE (m:Node {id: 8}) CREATE (n)-[:RELATION]->(m);
```

  </TabItem>
  <TabItem value="cypher-mode-change">

```cypher
CALL tgn.set_eval() YIELD *;

```

  </TabItem>
  <TabItem value="cypher-eval-load">

```cypher
MERGE (n:Node {id: 8}) MERGE (m:Node {id: 4}) CREATE (n)-[:RELATION]->(m);
MERGE (n:Node {id: 4}) MERGE (m:Node {id: 6}) CREATE (n)-[:RELATION]->(m);
```

  </TabItem>
  <TabItem value="cypher-epoch-train">

```cypher
 CALL tgn.train_and_eval(5) YIELD *
```

  </TabItem>
  <TabItem value="run">

```cypher
 CALL tgn.get_results() YIELD  epoch_num, batch_num, average_precision, batch_process_time, batch_type
 RETURN epoch_num, batch_num, average_precision, batch_type, batch_process_time;
```

  </TabItem>
  <TabItem value="result">

```plaintext
+--------------------+--------------------+--------------------+--------------------+--------------------+
| epoch_num          | batch_num          | average_precision  | batch_type         | batch_process_time |
+--------------------+--------------------+--------------------+--------------------+--------------------+
| 1                  | 1                  | 0.5                | "Train"            | 0.05               |
| 1                  | 2                  | 0.42               | "Eval"             | 0.02               |
| 2                  | 1                  | 0.83               | "Train"            | 0.03               |
| 2                  | 2                  | 0.5                | "Train"            | 0.04               |
| 2                  | 3                  | 0.5                | "Train"            | 0.04               |
| 2                  | 4                  | 0.58               | "Train"            | 0.04               |
| 2                  | 5                  | 0.83               | "Eval"             | 0.02               |
| 3                  | 1                  | 0.5                | "Train"            | 0.03               |
| 3                  | 2                  | 0.75               | "Train"            | 0.03               |
| 3                  | 3                  | 0.83               | "Train"            | 0.03               |
| 3                  | 4                  | 1                  | "Train"            | 0.04               |
| 3                  | 5                  | 0.83               | "Eval"             | 0.02               |
| 4                  | 1                  | 0.5                | "Train"            | 0.03               |
| 4                  | 2                  | 0.58               | "Train"            | 0.03               |
| 4                  | 3                  | 1                  | "Train"            | 0.03               |
| 4                  | 4                  | 1                  | "Train"            | 0.04               |
| 4                  | 5                  | 1                  | "Eval"             | 0.02               |
| 5                  | 1                  | 0.83               | "Train"            | 0.03               |
| 5                  | 2                  | 0.58               | "Train"            | 0.03               |
| 5                  | 3                  | 1                  | "Train"            | 0.03               |
| 5                  | 4                  | 1                  | "Train"            | 0.03               |
| 5                  | 5                  | 0.83               | "Eval"             | 0.02               |
| 6                  | 1                  | 0.58               | "Train"            | 0.03               |
| 6                  | 2                  | 0.83               | "Train"            | 0.03               |
| 6                  | 3                  | 1                  | "Train"            | 0.03               |
| 6                  | 4                  | 1                  | "Train"            | 0.03               |
| 6                  | 5                  | 1                  | "Eval"             | 0.01               |
+--------------------+--------------------+--------------------+--------------------+--------------------+
```

  </TabItem>
</Tabs>
