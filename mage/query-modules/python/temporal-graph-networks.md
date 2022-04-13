---
id: temporal-graph-networks
title: temporal_graph_networks
sidebar_label: temporal_graph_networks
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

[![docs-source](https://img.shields.io/badge/source-node2vec_online-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/tgn.py)

## Abstract

The **temporal_graph_networks (TGNs)** is a **[graph neural network (GNN)](https://distill.pub/2021/gnn-intro/)** method on dynamic graphs. 
In recent years, **GNNs** have become very popular due to their ability to perform a wide variety of machine learning
tasks on graphs, such as link prediction, node classification, and so on. This rise started with **[Graph convolutional
networks (GCN)](https://arxiv.org/pdf/1609.02907.pdf)** introduced by *Kipf et al*, followed by **[GraphSAGE](https://arxiv.org/pdf/1706.02216.pdf)** introduced by *Hamilton et al*, and in recent years new
method was presented which introduces **attention mechanism** to graphs, known as **[Graph attention networks (GAT)](https://arxiv.org/pdf/1710.10903.pdf?ref=https://githubhelp.com)**, by *Veličković
et al*. The last two methods offer a great possibility for inductive learning. But they haven't been specifically developed
to handle different events occurring on graphs, such as **node features updates**, **node deletion**, **edge deletion**
and so on. These events happen regularly on **real-world** examples such as **[Twitter network](https://twitter.com/memgraphmage)**, 
where users update their profile, delete their profile or just unfollow another user.

In their work, Rossi et al. introduce [**Temporal graph networks**](https://arxiv.org/abs/2006.10637), an architecture for machine learning on streamed graphs, a rapidly-growing ML use case.

### About the query module
What we have got in this module:
  * **link prediction** - train your **TGN** to predict new **links/edges** and **node classification** - predict labels of nodes from graph structure and **node/edge** features
  * **graph attention layer** embedding calculation and **graph sum layer** embedding layer calculation
  * **mean** and **last** as message aggregators
  * **mlp** and **identity(concatenation)** as message functions
  * **gru** and **rnn** as memory updater
  * **uniform** temporal neighborhood sampler
  * **memory** store and **raw message store**

as introduced by **[Rossi et al.](https://emanuelerossi.co.uk/)**.

Following means **you** can use **TGN** to be able to **predict edges** or  to perform **node classification** tasks, with **graph attention layer** or **graph sum layer**, by using
either **mean** or **last** as message aggregator, **mlp** or **identity** as message function, and finally  **gru** or **rnn** as memory updater.

In total that gives *you* **2\*2\*2\*2\*2 options**, in total of **32** options to explore on your graph :smile: 

To start exploring our module, **[github/memgraph/mage](https://github.com/memgraph/mage)** and start exploring our implementation, or even better, jump to 
**[download page](https://memgraph.com/download)**, Download **Memgraph platform** and start exploring **TGN**


What is **not** implemented in the module:
  * **node update/deletion events** since they occur very rarely - although we have prepared a terrain
  * **edge deletion** events 
  * **time projection** embedding calculation and **identity** embedding calculation since author mentions 
    they perform very poorly on all datasets - although it is trivial to add new layer


What we **believe** we offer instead of authors implementation from **[twitter-research GitHub repo](https://github.com/twitter-research/tgn)**:
  * Embedding calculation seems to be off. The problem seems that the author doesn't use newly calculated embeddings in new layers, but instead uses raw features from the 0th layer,
    which according to the paper is wrong. Anyway, if that is not the case, we still believe we fixed the potential bug, and offer a great possibility to explore
    **temporal graph networks** with a lot of possibilities.


How should **you** use the following module?
Prepare cypher queries, and split them in the **train** set and **eval** set. Don't forget to call method `set_mode`.
Every result will be stored so you can easily get it with the module. We will report for you **[mean average precision](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.average_precision_score.html)**
on every batch *training* or *evaluation* was done.

### Implementation details

#### Query module
Module is implemented using **[PyTorch](https://pytorch.org/)**. From `mgp.Edge` input features defined as edge label, 
we extract `edge features` and from `mgp.Vertex` input features we extract `node features`. Since we expect in *your* learning activities 
to use **triggers**, the `update` query module procedure will parse all new edges, extract information **temporal graph networks** need to do a 
batch by batch processing.

From following piece of code, *you* can see what we extract from every edge, while filling up **batch**. When our current processing
batch size reaches **predefined batch size**, predefined by calling `set` query module procedure, we `forward` extracted information to `TGN` which
extends `torch.nn.Module`.
```python
@dataclasses.dataclass
class QueryModuleTGNBatch:
    current_batch_size: int
    sources: np.array
    destinations: np.array
    timestamps: np.array
    edge_idxs: np.array
    node_features: Dict[int, torch.Tensor]
    edge_features: Dict[int, torch.Tensor]
    batch_size: int
    labels: np.array


```

#### Processing one batch


```python
        self._process_previous_batches()

        graph_data = self._get_graph_data(
            np.concatenate([sources.copy(), destinations.copy()], dtype=int),
            np.concatenate([timestamps, timestamps]),
        )

        embeddings = self.tgn_net(graph_data)

        ... process negative edges in a similar way
        
        self._process_current_batch(
            sources, destinations, node_features, edge_features, edge_idxs, timestamps
        )

```
Our `torch.nn.Module` is organized as follows:
  * processing previous batches - if you follow *[research paper](https://arxiv.org/abs/2006.10637)* this will include a new calculation of messages collected for each node in the form of 
    **message function**, aggregation of messages for each node in form of **message aggregator** and finally updating of each of the node's memory
    with **memory updater**
  * afterward we create a computation graph used by **graph attention layer** or **graph sum layer**
  * final step includes processing of current batch, creating new **interaction or node events**, updating **raw message store** with new **events**

Process repeats as we get new edges in batch, and after a batch is filled, we forward new edges again to **TGN** and so on...



:::info

This **MAGE** module is still in its early phase. We intended its use for only **learning** activities. The problem 
with the current module is that we expect **you** to know when your stream will end so you can switch **TGN** mode
from **train** to **eval**. After you do a switch, all incoming edges will be used for only **evaluation** and not
any new **training**. If you wish to make it production-ready, because you like what you see :smile: be sure to either
open **pull request** on our **[GitHub page](https://github.com/memgraph/mage)**, or drop us a comment on **[Discord](https://discord.gg/memgraph)**.
Also, if you like what you saw, consider giving us a :star: so we can continue to do even better work. 

:::
   

   

| Trait               | Value                                                          |
| ------------------- |----------------------------------------------------------------|
| **Module type**     | <Highlight color="#FB6E00">**module**</Highlight>              |
| **Implementation**  | <Highlight color="#FB6E00">**Python**</Highlight>              |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight>            |
| **Edge weights**    | <Highlight color="#FB6E00">**weighted/unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight>          |

## Procedures

### `set_params(learning_type, batch_size, num_of_layers, layer_type, memory_dimension, time_dimension, num_edge_features, num_node_features, message_dimension, num_neighbors, edge_message_function_type, message_aggregator_type, memory_updater_type, num_attention_heads, learning_rate, weight_decay)`

#### Input:

* `learning_type: str` ➡ "self_supervised" or "supervised" depending on if you want to predict edges or node labels
* `batch_size: int` ➡ size of batch to process by TGN, recommended size 200
* `num_of_layers: int` ➡ number of layers of graph neural network, 2 is optimal size, GNNs perform worse with bigger size
* `layer_type: str` ➡ "graph_attn" or "graph_sum" layer type as defined in original paper
* `memory_dimension: int`➡ dimension of memory tensor of each node
* `time_dimension : int` ➡ dimension of time vector from "time2vec" paper
* `num_edge_features : int` ➡ number of edge features we will use from each edge
* `num_node_features : int` ➡ number of expected node features
* `message_dimension : int` ➡ dimension of message, only used if you use MLP as message function type, otherwise ignored
* `num_neighbors : int` ➡ number of sampled neighbors
* `edge_message_function_type: str` ➡ message function type, "identity" for concatenation or "mlp" for projection
* `message_aggregator_type: str` ➡ message aggregator type, "mean" or "last"
* `memory_updater_type: str` ➡ memory updater type, "gru" or "rnn"
* `num_attention_heads: int` ➡ number of attention heads used if you define "graph_attn" as layer type
* `learning_rate: float` ➡ learning rate for optimizer
* `weight_decay: float` ➡ weight decay used in optimizer

#### Usage:

```cypher
CALL tgn.set_params("self_supervised", 200, 2, "graph_attn", 100, 100, 20, 20, 100, 10, "identity", "last", "gru", 1) YIELD *;
```


### `update(edges)`

#### Input:

* `edges: mgp.List[mgp.Edges]` ➡ list of edges to preprocess, and if current batch size is big enough use for training or evaluation


#### Usage:

There are a few options here. 

The best one is to create a **[trigger](https://memgraph.com/docs/memgraph/reference-guide/triggers)**, so every
time an edge is added to graph, the trigger calls a procedure and makes an
update.

```cypher
CREATE TRIGGER create_embeddings ON --> CREATE BEFORE COMMIT
EXECUTE CALL tgn.update(createdEdges) RETURN 1;
```

The second option is to add all the edges and then call the algorithm with those
edges:

```cypher
MATCH (n)-[e]->(m)
WITH COLLECT(e) as edges
CALL tgn.update(edges) RETURN 1;
```


### `get()`

#### Output:

* `node: mgp.Vertex` ➡ vertex in Memgraph database
* `embedding: mgp.List[float]` ➡ low-dimensional representation of node in form of graph embedding

#### Usage:

```cypher
CALL tgn.get() YIELD * RETURN *;
```


### `set_mode(mode)`

With this function you can change mode of **temporal graph networks** to "eval" mode. Any new edges which arrive
will **not** be used to **train** module, but to **evaluate** it's mean average precision on **evaluation** set.

If you know when your stream will end, it is good option to change mode to "eval" and test how it performs. Once stream
is done, good option will be to run training of few epochs to get best results.

#### Input:

* `mode: str` ➡ mode in which **temporal graph networks** should be working, "train" or "eval"


#### Usage:

```cypher
CALL tgn.set_mode(eval) YIELD *;
```


### `get_results()`

#### Output:

* `epoch_num=mgp.Number` ➡ number of epoch in which "training" or "evaluation" was done
* `batch_num=mgp.Number` ➡ number of batch inside of epoch in which "training" or "evaluation" was done
* `batch_process_time=mgp.Number` ➡ time needed to process batch 
* `accuracy=mgp.Number` ➡ mean average precision on current batch
* `accuracy_type=str` ➡ type of MAP performed, "train" or "eval"


#### Usage:

```cypher
CALL tgn.get_results() YIELD * RETURN *;
```


### `process_epochs(num_epochs)`

#### Input:

* `num_epochs: int` ➡ perform additional epoch training and evaluation **after** stream is done

#### Output:

* `epoch_num: int` ➡ overall epoch of batch for which performance statistics will be returned
* `batch_num: int` ➡ batch inside of epoch for which performance statistics will be returned
* `batch_process_time: float` ➡ processing time in seconds for a batch 
* `accuracy: int` ➡ **mean average precision** 
* `accuracy_type: int` ➡ **mean average precision** type, "train" or "eval"



#### Usage:

```cypher
CALL tgn.process_epochs(10) YIELD * RETURN *;
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
CALL tgn.set_params("self_supervised", 2, 1, "graph_attn", 100, 100, 20, 20, 100, 10, "identity", "last", "gru", 1) YIELD *;
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
CALL tgn.set_mode("eval") YIELD *;

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
 CALL tgn.process_epochs(5) YIELD *

```
  </TabItem>
  <TabItem value="run">

```cypher
 CALL tgn.get_results() YIELD  epoch_num, batch_num, accuracy, batch_process_time, accuracy_type
 RETURN epoch_num, batch_num, round(accuracy * 100) / 100 as accuracy, round(batch_process_time * 100) / 100 as batch_process_time;
```

  </TabItem>
  <TabItem value="result">

```plaintext
+--------------------+--------------------+--------------------+--------------------+--------------------+
| epoch_num          | batch_num          | accuracy           | accuracy_type      | batch_process_time |
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
