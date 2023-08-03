---
id: node-classification-with-gnn
title: node_classification_with_gnn
sidebar_label: node_classification_with_gnn
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunOnSubgraph from '../../templates/_run_on_subgraph.mdx';

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

**Node classification** is the problem of finding out the **right label** for a **node** based on its **neighbors’ labels** and **structure similarities**.

[![docs-source](https://img.shields.io/badge/source-node_classification-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/node_classification.py)

### About the query module

This query module contains all necessary functions you need to train GNN model on Memgraph. 

The `node_classification` module supports as follows:
- homogeneous and heterogeneous graphs
- multiple-label and multi-edge-type graphs
- any-size datasets
- the following model architectures:
    - Graph Attention with Jumping Knowledge
    - multiple versions of Graph attention networks (GAT)
    - GraphSAGE
- early stopping
- calculation of various metrics
- predictions for specified nodes
- model saving and loading
- recommendation system use cases


The easiest way to test **node_classification** is by downloading [Memgraph Platform](https://memgraph.com/download)
and using some of the preloaded datasets in **Memgraph Lab**. If you want to explore our implementation, jump to **[github/memgraph/mage](https://github.com/memgraph/mage)** and find
`python/node_classification.py`. Feel free to give us a :star: if you like the code. 


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
- optionally use `save_model()` and `load_model()` 
- predict node class by calling `predict()` procedure


:::info

This **MAGE** module is still in its early stage. We intend to use it only for
**exploring or learning** about node classification. If you want it to be production-ready, make sure
to either open a **[GitHub issue](https://github.com/memgraph/mage/issues)** or
drop us a comment on **[Discord](https://discord.gg/memgraph)**.

:::

## Procedures

<RunOnSubgraph/>

### `set_model_parameters(params)`

The function initializes all global variables. _You_ can change global variables via **params** dictionary. Procedure checks if variables in **params** are defined appropriately. If so, map of default global parameters is overriden with user defined dictionary params.
After that procedure executes previously defined functions declare_globals and
declare_model_and_data and sets each global variable to some value.

#### Input:
- `params: (mgp.Map, optional)`: User defined parameters from query module. Defaults to {}.

| Name                       | Type         | Default                                                                    | Description                                                                                                                                                                           |
|----------------------------|--------------|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| hidden_features_size       | List[Int]    | [16, 16]                                                                   | Embedding dimension for each node in a new layer.                                                                                                                                       |
| layer_type                 | String       | `GATJK`                                                                    | Type of layer used, supported types: `GATJK`, `GAT`, `GRAPHSAGE`.                                                                                                                            |
| aggregator                 | String       | `mean`                                                                     | Type of aggregator used, supported type: `mean`.                                                                                                                                           |
| learning_rate              | Float        | 0.1                                                                        | Optimizer's learning rate.                                                                                                                                                            |
| weight_decay               | Float        | 5e-4                                                                       | Optimizer's weight decay.                                                                                                                                                             |
| split_ratio                | Float        | 0.8                                                                        | Ratio between training and validation data.                                                                                                                                            |
| metrics                    | List[String] | `["loss","accuracy","f1_score","precision","recall","num_wrong_examples"]` | List of metrics to report, supports any combination of "loss","accuracy","f1_score","precision","recall","num_wrong_examples".                                                         |
| node_id_property           | String       | `id`                                                                       | Property name of node features.                                                                                                                                                        |
| num_epochs                 | Integer      | 100                                                                        | The number of epochs for model training.                                                                                                                                              |
| console_log_freq           | Integer      | 5                                                                          | Specifies how often results will be printed.                                                                                                                                          |
| checkpoint_freq            | Integer      | 5                                                                          | Specifies how often the model will be saved. The model is persisted on disc.                                                                                                          |
| device_type                | String       | `cpu`                                                                      | Defines if the model will be trained using the `cpu` or `cuda`. To run on `Cuda GPU`, check if the system supports it with `torch.cuda.is_available()`, then set this flag to `cuda`. |
| path_to_model              | String       | "/tmp/torch_models"                                                        | Path for loading and storing the model.                                                                                                                                   |

#### Exceptions:
- `Exception`: Exception is raised if some variable in dictionary params is not correctly defined.

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

### `train(num_epochs)`

This procedure performs model training. Firstly it declares data, model, optimizer, and criterion. Afterward, it performs training.
#### Input
- `num_epochs (int, optional)` ➡ Number of epochs (default:100).

#### Exceptions
- `Exception`➡ Raised if graph is empty.

#### Outputs
- `epoch: int` ➡ Epoch number.
- `loss: float`➡ Loss of model on training data.
- `val_loss: float`➡ Loss of model on validation data.
- `train_log: list`➡ List of metrics on training data.
- `val_log: list`➡ List of metrics on validation data.

#### Usage
```cypher
  CALL node_classification.train() YIELD * RETURN *;
```

### `get_training_data()`
Use following procedure to get logged data from training.

#### Return values
- `epoch: int` ➡ Epoch number for current record's logged data.
- `loss: float`➡ Loss in epoch.
- `train_log: mgp.Any` ➡ Training parameters for epoch.
- `val_log: mgp.Any`➡ Validation parameters for epoch.

#### Usage
```cypher
  CALL node_classification.get_training_data() YIELD * RETURN *;
```

### `save_model()`

This function saves the model to a specified folder. If there are already **max_models_to_keep** in the folder, 
the oldest model is deleted.

#### Exception
- `Exception`: Raised if model is not initialized or defined.

#### Return values
- `path (str)`➡ Path to the stored model.
- `status (str)`➡ Status of the stored model.

#### Usage
```cypher
  CALL node_classification.save_model() YIELD * RETURN *;
```

### `load_model(num)`

This function loads the model from the specified folder.

#### Input

- `num (int, optional)`: Ordinal number of model to load from the default path on the disc (default: 0, i.e., newest model).

#### Return values
- `path: str` ➡ Path of loaded model.

#### Usage

```cypher
  CALL node_classification.load_model() YIELD * RETURN *;
```

### `predict(vertex)`

This function predicts metrics on one node. It is suggested to load the test data (data without labels) as well. Test data
won't be a part of the training or validation process.
    
#### Input
- `vertex: mgp.Vertex`➡ Prediction node.

#### Return values
- `predicted_class: int`➡ Predicted class for specified node.

#### Usage:
```cypher
MATCH (n {id: 1}) CALL node_classification.predict(n) YIELD * RETURN predicted_value;
```

### `reset()`
This function resets all variables to default values.

#### Return values
- `status (str)`: Status of reset function.

#### Usage:
```cypher
  CALL node_classification.reset() YIELD * RETURN *;
```

## Example


<Tabs
groupId="example"
defaultValue="visualization"
values={[
{label: 'Step 1: Input graph', value: 'visualization'},
{label: 'Step 2: Load commands', value: 'cypher-load'},
{label: 'Step 3: Set model parameters', value: 'set-model-parameters'},
{label: 'Step 4: Train', value: 'train'},
{label: 'Step 5: Train results', value: 'train-results'},
{label: 'Step 6: Predict', value: 'predict'},
{label: 'Step 7: Predict results', value: 'predict-results'},
]
}>


  <TabItem value="visualization">

  <img src={require('../../data/query-modules/python/gnn-node-classification/example.png').default}/>

  </TabItem>


  <TabItem value="cypher-load">

```cypher
CREATE (v1:PAPER {id: 10, features: [1, 2, 3], label:0});
CREATE (v2:PAPER {id: 11, features: [1.54, 0.3, 1.78], label:0});
CREATE (v3:PAPER {id: 12, features: [0.5, 1, 4.5], label:0});
CREATE (v4:PAPER {id: 13, features: [0.78, 0.234, 1.2], label:0});
CREATE (v5:PAPER {id: 14, features: [3, 4, 100], label:0});
CREATE (v6:PAPER {id: 15, features: [2.1, 2.2, 2.3], label:1});
CREATE (v7:PAPER {id: 16, features: [2.2, 2.3, 2.4], label:1});
CREATE (v8:PAPER {id: 17, features: [2.3, 2.4, 2.5], label:1});
CREATE (v9:PAPER {id: 18, features: [2.4, 2.5, 2.6], label:1});
MATCH (v1:PAPER {id:10}), (v2:PAPER {id:11}) CREATE (v1)-[e:CITES {}]->(v2);
MATCH (v2:PAPER {id:11}), (v3:PAPER {id:12}) CREATE (v2)-[e:CITES {}]->(v3);
MATCH (v3:PAPER {id:12}), (v4:PAPER {id:13}) CREATE (v3)-[e:CITES {}]->(v4);
MATCH (v4:PAPER {id:13}), (v1:PAPER {id:10}) CREATE (v4)-[e:CITES {}]->(v1);
MATCH (v4:PAPER {id:13}), (v5:PAPER {id:14}) CREATE (v4)-[e:CITES {}]->(v5);
MATCH (v5:PAPER {id:14}), (v6:PAPER {id:15}) CREATE (v5)-[e:CITES {}]->(v6);
MATCH (v6:PAPER {id:15}), (v7:PAPER {id:16}) CREATE (v6)-[e:CITES {}]->(v7);
MATCH (v7:PAPER {id:16}), (v8:PAPER {id:17}) CREATE (v7)-[e:CITES {}]->(v8);
MATCH (v8:PAPER {id:17}), (v9:PAPER {id:18}) CREATE (v8)-[e:CITES {}]->(v9);
MATCH (v9:PAPER {id:18}), (v6:PAPER {id:15}) CREATE (v9)-[e:CITES {}]->(v6);
```

  </TabItem>

  <TabItem value="set-model-parameters">

```cypher
CALL node_classification.set_model_parameters({layer_type: "GAT", learning_rate: 0.001, 
                                               hidden_features_size: [2,2], 
                                               class_name: "label", features_name: "features", console_log_freq:1}) YIELD * 
RETURN *;
```
  
  </TabItem>


  <TabItem value="train">

```cypher
CALL node_classification.train(5) YIELD epoch, loss RETURN *;
```

  </TabItem>

  <TabItem value="train-results">

```plaintext
+----------+----------+
| epoch    | loss     |
+----------+----------+
| 1        | 0.788709 |
| 2        | 0.765075 |
| 3        | 0.776351 |
| 4        | 0.727615 |
| 5        | 0.727735 |

```

  </TabItem>

  <TabItem value="predict"> 

```cypher
 MATCH (v1:PAPER {id: 10})
 CALL node_classification.predict(v1) YIELD predicted_class RETURN predicted_class, v1.label as correct_class;
```

  </TabItem>

  <TabItem value="predict-results">

```plaintext
+-----------------+-----------------+
| predicted_class | correct_class   |
+-----------------+-----------------+
| 0               | 0               |
+-----------------+-----------------+
```

  </TabItem>

</Tabs>

