---
id: pagerank-online
title: pagerank_online
sidebar_label: pagerank_online
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

**Online PageRank** is a streaming algorithm made for calculating
[PageRank](pagerank.md) in a graph streaming scenario. Incremental- local
changes are introduced in the algorithm to prevent users from recalculating
PageRank values each time a change occurs in the graph (something is added or
deleted).

To make it as fast as possible, the online algorithm is only the approximation
of PageRank but carrying the same information - the likelihood of random walk
ending in a particular vertex. The work is based on "[Fast Incremental and
Personalized
PageRank](http://snap.stanford.edu/class/cs224w-readings/bahmani10pagerank.pdf)"
[^1], where authors are deeply focused on providing the streaming experience of
a highly popular graph algorithm.

Approximating PageRank is done simply by exploring random walks and calculating
the frequency of a node within all walks. `R` walks are sampled by using a
random walk with a stopping probability of `eps`.Therefore, on average, walks
would have a length of `1/eps`. Approximative PageRank is based on the formula
below:

```
RankApprox(v) = X_v / (n * R / eps)
```

Where `X_v` is the number of walks where the node `v` appears. The theorem
written in the paper explains that RankApprox(v) is sharply concentrated around
its expectation, which is Rank(v).

### Usage

Online PageRank should be used in a specific way. To set the parameters, the
user should call a `set()` procedure. This function also sets the context of a
streaming algorithm. `get()` function only returns the resulting values stored
in a cache. Therefore, if you try to get values before first calling `set()`,
the run will fail with a proper message.

To make the incremental flow, you should set the proper trigger. For that, we'll
use the `update()` function:

```cypher
CREATE TRIGGER pagerank_trigger
(BEFORE | AFTER) COMMIT
EXECUTE CALL pagerank_online.update(createdVertices, createdEdges, deletedVertices, deletedEdges) YIELD *
SET node.rank = rank;
```

Finally, the `reset()` function resets the context and enables the user to start
new runs.

[^1] [Fast Incremental and Personalized
PageRank](http://snap.stanford.edu/class/cs224w-readings/bahmani10pagerank.pdf),
Bahman Bahmani et al.

[![docs-source](https://img.shields.io/badge/source-pagerank_online-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/cpp/pagerank_module/pagerank_online_module.cpp)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight>   |
| **Edge weights**    | <Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

## Procedures

<RunOnSubgraph/>

### `set(walks_per_node, walk_stop_epsilon)`

#### Input:

- `walks_per_node: integer (default=10)` ➡ Number of sampled walks per node.
- `walk_stop_epsilon: double (default=0.1)` ➡ The probability of stopping when deriving
  the random walk. On average, it will create walks of length `1 /
  walk_stop_epsilon`.

#### Output:

- `node` ➡ Node in the graph, for which PageRank is calculated.
- `rank` ➡ Normalized ranking of a node. Expresses the probability that a random
  surfer will finish in a certain node by a random walk.

#### Usage:

```cypher
CALL pagerank_online.set(100, 0.2)
YIELD node, rank;
```

### `get(max_iterations, damping_factor, stop_epsilon)`

\* This should be used if the trigger has been set or a `set` function has
been called before adding changes to the graph.

#### Output:

- `node` ➡ Node in the graph, for which PageRank is calculated.
- `rank` ➡ Normalized ranking of a node. Expresses the probability that a random
  surfer will finish in a certain node by a random walk.

#### Usage:

```cypher
CALL pagerank_online.get()
YIELD node, rank;
```

### `update(created_vertices, created_edges, deleted_vertices, deleted_edges)`

#### Input:

- `created_vertices` ➡ Vertices that were created in the last transaction.
- `created_edges` ➡ Edges created in a period from the last transaction.
- `deleted_vertices` ➡ Vertices deleted from the last transaction.
- `deleted_edges` ➡ Edges deleted from the last transaction.

#### Output:

- `node` ➡ Node in the graph, for which PageRank is calculated.
- `rank` ➡ Normalized ranking of a node. Expresses the probability that a random
  surfer will finish in a certain node by a random walk.

#### Usage:

```cypher
CREATE TRIGGER pagerank_trigger
(BEFORE | AFTER) COMMIT
EXECUTE CALL pagerank_online.update(createdVertices, createdEdges, deletedVertices, deletedEdges) YIELD *
SET node.rank = rank;
```

## Example

<Tabs
groupId="example"
defaultValue="visualization"
values={[
{label: 'Step 1: Input graph', value: 'visualization'},
{label: 'Step 2: Set parameters and trigger', value: 'cypher-preset'},
{label: 'Step 3: Load commands', value: 'cypher-load'},
{label: 'Step 4: Running command', value: 'run'},
{label: 'Step 5: Results', value: 'result'},
]
}>
<TabItem value="visualization">

<img src={require('../../data/query-modules/cpp/pagerank-online/memgraph-pagerank-online.png').default}/>

  </TabItem>
  <TabItem value="cypher-preset">

```cypher
CALL pagerank_online.set(100, 0.2) YIELD *;

CREATE TRIGGER pagerank_trigger
BEFORE COMMIT
EXECUTE CALL pagerank_online.update(createdVertices, createdEdges, deletedVertices, deletedEdges) YIELD *
SET node.rank = rank;
```

 </TabItem>
  <TabItem value="cypher-load">

```cypher
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 4}) MERGE (b:Node {id: 6}) CREATE (a)-[:RELATION]->(b);
```

  </TabItem>
  <TabItem value="run">

```cypher
MATCH (node)
RETURN node.id AS node_id, node.rank AS rank;
```

  </TabItem>
  <TabItem value="result">

```plaintext
+-----------+-----------+
| node_id   | rank      |
+-----------+-----------+
| 0         | 0.225225  |
| 1         | 0.225225  |
| 2         | 0.225225  |
| 3         | 0.0675676 |
| 4         | 0.0765766 |
| 5         | 0.0585586 |
| 6         | 0.121622  |
+-----------+-----------+
```

  </TabItem>
</Tabs>
