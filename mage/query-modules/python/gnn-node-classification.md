---
id: node-classification-with-gnn
title: node_classification_with_gnn
sidebar_label: node_classification_with_gnn
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
**Node classification** is the problem of finding out the **right label** for a **node** based on its **neighbors’ labels** and **structure similarities**.

### About the query module

This query module contains all necessary functions you need to train GNN model on Memgraph. 

You can find support for the following features in **node_classification** module:
- support for both **homogeneous** and **heterogeneous** graphs
- support for multiple-label and multi-edge-type graphs
- **no restrictions on dataset size**
- **multiple model architectures** layers to work on (inductive learning):
    - **Graph attention with Jumping Knowledge**
    - multiple versions of **Graph attention network (GAT)**
    - **GraphSAGE**
- support for **early stopping**
- support for different **metrics calculations**
- **predictions** for specific node
- **saving** models and **loading** models
- its applicability to use it as a **recommendation system**


If you want to explore our implementation, jump to **[github/memgraph/mage](https://github.com/memgraph/mage)** and find
`python/node_classification.py`. Feel free to give us a :star: if you like the code. 
The easiest way to test **node_classification** is by downloading [Memgraph Platform](https://memgraph.com/download)
and using some of the preloaded datasets in **Memgraph Lab**.

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

| Name                       | Type         | Default                                                                    | Description                                                                                                                                                                           |
|----------------------------|--------------|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| hidden_features_size       | List[Int]    | [16, 16]                                                                   | Embedding dimension for each node in new layer.                                                                                                                                       |
| layer_type                 | String       | `GATJK`                                                                    | Type of layer used, supported: `GATJK`, `GAT`, `GRAPHSAGE`                                                                                                                            |
| aggregator                 | String       | `mean`                                                                     | Type of aggregator used, supported: `mean`.                                                                                                                                           |
| learning_rate              | Float        | 0.1                                                                        | Optimizer's learning rate.                                                                                                                                                            |
| weight_decay               | Float        | 5e-4                                                                       | Optimizer's weight decay.                                                                                                                                                             |
| split_ratio                | Float        | 0.8                                                                        | Ratio between training and validation data                                                                                                                                            |
| metrics                    | List[String] | `["loss","accuracy","f1_score","precision","recall","num_wrong_examples"]` | List of metrics to report, supports any of combination "loss","accuracy","f1_score","precision","recall","num_wrong_examples"                                                         |
| node_id_property           | String       | `id`                                                                       | Property name of node features                                                                                                                                                        |
| num_epochs                 | Integer      | 100                                                                        | The number of epochs for model training.                                                                                                                                              |
| console_log_freq           | Integer      | 5                                                                          | Specifies how often results will be printed.                                                                                                                                          |
| checkpoint_freq            | Integer      | 5                                                                          | Specifies how often the model will be saved. The model is persisted on disc.                                                                                                          |
| device_type                | String       | `cpu`                                                                      | Defines if the model will be trained using the `cpu` or `cuda`. To run on `Cuda GPU`, check if the system supports it with `torch.cuda.is_available()`, then set this flag to `cuda`. |
| path_to_model              | String       | "/tmp/torch_models"                                                        | Path from where model is loaded and where is stored                                                                                                                                   |

#### Exceptions:
- `Exception`: exception is raised if some variable in dictionary params is not correctly defined.

#### Output
- `mgp.Record(
    hidden_features_size=list,
    layer_type=str,
    aggregator=str,
    learning_rate=float,
    weight_decay=float,
    split_ratio=float,
    metrics=mgp.Any,
    node_id_property=str,
    num_epochs=int,
    console_log_freq=int,
    checkpoint_freq=int,
    device_type=str,
    path_to_model=str,
)` ➡ Map of parameters set for training

#### Usage:

```cypher
  CALL node_classification.set_model_parameters(
    {layer_type: "GATJK", learning_rate: 0.001, hidden_features_size: [16,16], class_name: "fraud", features_name: "embedding"}
  ) YIELD * RETURN *;
```

### train(num_epochs)

This procedure performs model training. Firstly it declares data, model, optimizer and criterion. Afterwards it performs training.
#### Input
- `num_epochs (int, optional)` ➡ number of epochs. Default set to 100.

#### Exceptions
- `Exception`➡ raised if graph is empty

#### Outputs
- `epoch: int` ➡ epoch number
- `loss: float`➡ loss of model on training data
- `val_loss: float`➡ loss of model on validation data
- `train_log: list`➡ list of metrics on training data
- `val_log: list`➡ list of metrics on validation data

#### Usage
```cypher
  CALL node_classification.train() YIELD * RETURN *;
```

### get_training_data()
Use following procedure to get logged data from training.

#### Return values
- `epoch: int` ➡ epoch number for current record's logged data
- `loss: float`➡ loss in epoch
- `train_log: mgp.Any` ➡ training parameters for epoch
- `val_log: mgp.Any`➡ validation parameters for epoch

#### Usage
```cypher
  CALL node_classification.get_training_data() YIELD * RETURN *;
```

### save_model()

This function saves model to model saving folder. If there are already total of **max_models_to_keep** models in model saving folder, 
the oldest model is deleted.

#### Exception
- `Exception`: raised if model is not initialized or defined

#### Return values
- `path (str)`➡ path to stored model
- `status (str)`➡ status of stored model

#### Usage
```cypher
  CALL node_classification.save_model() YIELD * RETURN *;
```

### load_model(num: int = 0)

This function loads model from specified folder.

#### Input

- `num (int, optional)`: ordinary number of model to load from default path on disc. Defaults to 0 (newest model).

#### Return values
- `path: str` ➡ path of loaded model

#### Usage

```cypher
  CALL node_classification.load_model() YIELD * RETURN *;
```

### predict(vertex: mgp.Vertex)

This function predicts metrics on one node. It is suggested that user previously
loads unseen test data to predict on it.
    
#### Input
- `vertex: mgp.Vertex`➡ prediction node

#### Return values
- `predicted_class: int`➡ predicted class for specified node

#### Usage:
```cypher
MATCH (n {id: 1}) CALL node_classification.predict(n) YIELD * RETURN predicted_value;
```

### reset()
This function resets all variables to default values.

#### Return values
- `status (str)`: status of reset function

#### Usage:
```cypher
  CALL node_classification.reset() YIELD * RETURN *;
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
