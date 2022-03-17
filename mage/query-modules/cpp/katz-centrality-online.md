---
id: katz-centrality-online
title: katz_centrality_online
sidebar_label: katz_centrality_online
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

[![docs-source](https://img.shields.io/badge/source-pagerank_online-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/cpp/pagerank_module/pagerank_online_module.cpp)

## Abstract

Because of its simplicity, **Katz Centrality** has become one of the most established
centrality measurements. The definition of Katz centrality is that it presents 
the amount of influence by summing all walks starting from the node of interest
and weighting walks by some attenuation factor smaller than 1. 

Just as the other centrality measures got their instances of dynamic update algorithms,
so is **Katz Centrality**. Reduction of computations needed to update already calculated
results offers a substantially large speedups compared to static algorithm runs. 

The algorithm is based on the work of Alexander van der Grinten et. al.  called
[Scalable Katz Ranking Computation in Large Static and Dynamic Graphs](https://arxiv.org/pdf/1807.03847.pdf). Author
proposes estimation method that computes Katz centrality by iteratively improving
upper and lower bounds on the centrality scores. The computed scores may differ
from the real values, but the algorithm has the guarantee of preserving the rankings. 

### Usage

Online Katz centrality should be used in a specific way. To set the parameters, the
user should call a `set()` procedure. This function also sets the context of a
streaming algorithm. `get()` function only returns the resulting values stored
in a cache. Therefore, if you try to get values before first calling `set()`,
the run will fail with a proper message.

To make the incremental flow, you should set the proper trigger. For that, we'll
use the `update()` function:

```cypher
CREATE TRIGGER katz_trigger
(BEFORE | AFTER) COMMIT
EXECUTE CALL katz_centrality_online.update(createdVertices, createdEdges, deletedVertices, deletedEdges) YIELD *
SET node.rank = rank;
```

Finally, the `reset()` function resets the context and enables the user to start
new runs.

[^1] [Scalable Katz Ranking Computation in Large Static and Dynamic Graphs](https://arxiv.org/pdf/1807.03847.pdf),
Alexander van der Grinten et. al.

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight>   |
| **Edge weights**    | <Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

## Procedures

### `set(alpha, epsilon)`

#### Input:

* `alpha: double(0.2)` ➡ Exponential decay factor defining the walk length importance. 
* `epsilon: double(1e-2)` ➡ Convergence tolerance. Minimal difference in two adjacent pairs of nodes in final ranking.

#### Output:

* `node` ➡ Node in the graph, for which Katz Centrality is calculated.
* `rank` ➡ Normalized ranking of a node. Expresses the centrality value after bound convergence

#### Usage:

```cypher
CALL pagerank.set(100, 0.2)
YIELD node, rank;
```

### `get()`

\* This should be used if the trigger has been set or a `set` function has
been called before adding changes to the graph.

#### Output:

* `node` ➡ Node in the graph, for which Katz Centrality is calculated.
* `rank` ➡ Normalized ranking of a node. Expresses the centrality value after bound convergence

#### Usage:

```cypher
CALL pagerank.get()
YIELD node, rank;
```

### `update(created_vertices, created_edges, deleted_vertices, deleted_edges)`

#### Input:

- `created_vertices` ➡ Vertices that were created in the last transaction.
- `created_edges` ➡ Edges created in a period from the last transaction.
- `deleted_vertices` ➡ Vertices deleted from the last transaction.
- `deleted_edges` ➡ Edges deleted from the last transaction.

#### Output:

* `node` ➡ Node in the graph, for which Katz Centrality is calculated.
* `rank` ➡ Normalized ranking of a node. Expresses the centrality value after bound convergence

#### Usage:

```cypher
CREATE TRIGGER katz_trigger
(BEFORE | AFTER) COMMIT
EXECUTE CALL katz_centrality_online.update(createdVertices, createdEdges, deletedVertices, deletedEdges) YIELD *
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
CALL katz_centrality_online.set() YIELD *;

CREATE TRIGGER katz_trigger
BEFORE COMMIT
EXECUTE CALL katz_trigger.update(createdVertices, createdEdges, deletedVertices, deletedEdges) YIELD *
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
