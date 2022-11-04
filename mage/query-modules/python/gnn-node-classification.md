---
id: node-classification-with-gnn
title: node-classification-with-gnn
sidebar_label: node-classification-with-gnn
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


### About the query module

This query module contains all necessary functions user should need to train GNN model on Memgraph. User first fills Memgraph nodes and edges, either with prepared dataset or made by its own. 

In this module you can find support for the following features:
- **graph can be heterogeneous or homogeneous**
    - multiple node and edge labels are allowed
- **no restrictions on dataset size**
- **multiple model architectures** to work on (inductive learning)
    - GAT with Jumping Knowledge
    - multiple version of GAT
    - GraphSAGE
- model **training** which includes saving of last `n` models, early stopping and metrics calculations
- **predictions** for specific node
- **saving** models and **loading** models


If you want to explore our implementation, jump to **[github/memgraph/mage](https://github.com/memgraph/mage)** and find
`python/node_classification.py`. You can also jump to the [download
page](https://memgraph.com/download), download **Memgraph Platform** and fire up
**Node Classification**. We have prepared an homogenous graph **Yelp-Fraud (Multi-relational Graph Dataset for Yelp Spam Review Detection)** dataset on which you can
explore node classification using a **[Jupyter
Notebook](https://github.com/memgraph/jupyter-memgraph-tutorials)** and other Memgraph **home-made** heterogeneous graph fraud detection dataset.

Feel free to open a **[GitHub issue](https://github.com/memgraph/mage/issues)**
or start a discussion on **[Discord](https://discord.gg/memgraph)** if you want
to speed up development.

## Usage
Load dataset in Memgraph, call `set_model_parameters`, and start training your model. When training is done, query module will save models. 
Afterwards, you can test modules on other data (which model has not already seen for example) and inspect the results!
The module reports the [mean average precision](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.average_precision_score.html)
for every batch `training` or `evaluation` epoch.


To **summarize** basic node classification workflow is as follows:

- load data to Memgraph
- set parameters by calling `set_model_parameters()` function. Be sure that **node_features** property on nodes are in place.
- call `train()` function
- inspect training results (optional) by calling `get_training_data()` function
- optionally use `save_model()` and `load_model()` if you want
- predict node class by calling `predict()` procedure


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

In this example, network tries to find frauds in Heterogeneous Graph Insurance Dataset.

TODO explain dataset
First, load the following `insurance.cypherl` file to memgraph. It can be done easily by running
TODO upload insurance.cypherl file
```
mgconsole < /PATH_TO_FILE/insurance.cypherl
```

After, it is recommended to load the module:
```cypher
CALL mg.load("node_classification");
```

Before models are trained, set default parameters.
Note: be careful to write correct `class_name` and `features_name`. Line `PROCEDURE MEMORY UNLIMITED` is not necessary here, it is used for bigger datasets.

```cypher
CALL node_classification.set_model_parameters({layer_type: "GATJK", learning_rate: 0.001, hidden_features_size: [16,16], class_name: "fraud", features_name: "embedding", batch_size: 10}) PROCEDURE MEMORY UNLIMITED YIELD * RETURN *;
```

Memgraph returns default parameters:

```
"aggregator": "mean",
"checkpoint_freq": 5,
"console_log_freq": 5,
"device_type": "cpu",
"hidden_features_size": [
  16,
  16
],
"layer_type": "GATJK",
"learning_rate": 0.001,
"metrics": [
  "loss",
  "accuracy",
  "f1_score",
  "precision",
  "recall",
  "num_wrong_examples"
],
"node_id_property": "id",
"num_epochs": 100,
"path_to_model": "/home/mateo/memgraph_with_fraud_detection_demo/torch_models/model_GATJK_",
"split_ratio": 0.8,
"weight_decay": 0.0005
```

(Optional)
If there are no node features, you can make them with Memgraph's already implemented Node2Vec query module!
```cypher
CALL node2vec.set_embeddings() YIELD *;
```

Let the training begin!
```cypher
CALL node_classification.train() YIELD *;
```

After training, you can obtain training data with the following function
```cypher
CALL node_classification.get_training_data() YIELD *;
```
This is example of one row in Memgraph output:
```
{
  'epoch': 5, 
  'loss': 0.11469734972342849, 
  'train_log': 
    {
      'accuracy': 0.9618644118309021, 
      'f1_score': 0.9618643522262573, 
      'precision': 0.9618644118309021, 
      'recall': 0.9618644118309021
    }, 
  'val_log': 
    {
      'accuracy': 0.9655172228813171, 
      'f1_score': 0.9655172228813171, 
      'precision': 0.9655172228813171, 
      'recall': 0.9655172228813171
    }, 
  'val_loss': 0.10837011535962422
}
```
Finally, you can find out if CLAIM was fraud or not.
```cypher
MATCH (n:CLAIM {amount: 265.32}) CALL node_classification.predict(n) YIELD * RETURN predicted_class;
```
Memgraph will output `0`, which means model doesn't recognize this CLAIM as fraud.
