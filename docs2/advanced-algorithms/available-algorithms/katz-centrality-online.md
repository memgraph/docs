---
id: katz-centrality-online
title: katz_centrality_online
sidebar_label: katz_centrality_online
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

Because of its simplicity, **Katz Centrality** has become one of the most
established centrality measurements. The definition of Katz centrality is that
it presents the amount of influence by summing all walks starting from the node
of interest and weighting walks by some attenuation factor smaller than 1.

Just as the other centrality measures got their dynamic algorithm
implementations, so did **Katz Centrality**. The implementation results in a
reduction of computations needed to update already calculated results. The
algorithm offers substantially large speedups compared to static algorithm runs.

The algorithm is based on the work of Alexander van der Grinten et. al. called
[Scalable Katz Ranking Computation in Large Static and Dynamic
Graphs](https://arxiv.org/pdf/1807.03847.pdf)[^1]. The author proposes an
estimation method that computes Katz's centrality by iteratively improving upper
and lower bounds on the centrality scores. The computed scores may differ from
the real values, but the algorithm has the guarantee of preserving the rankings.

[^1] [Scalable Katz Ranking Computation in Large Static and Dynamic
Graphs](https://arxiv.org/pdf/1807.03847.pdf), Alexander van der Grinten et. al.

### Usage

Online Katz centrality should be used in a specific way. To set the parameters,
the user should call a `set()` procedure. This function also sets the context of
a streaming algorithm. `get()` function only returns the resulting values stored
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

[![docs-source](https://img.shields.io/badge/source-katz_centrality_online-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/cpp/katz_centrality_module/katz_centrality_online_module.cpp)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight>   |
| **Edge weights**    | <Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

## Procedures

<RunOnSubgraph/>

### `set(alpha, epsilon)`

#### Input:

- `alpha: double (default=0.2)` ➡ Exponential decay factor defining the walk length
  importance.
- `epsilon: double (default=1e-2)` ➡ Convergence tolerance. Minimal difference in two
  adjacent pairs of nodes in the final ranking.

#### Output:

- `node` ➡ Node in the graph, for which Katz Centrality is calculated.
- `rank` ➡ Normalized ranking of a node. Expresses the centrality value after
  bound convergence.

#### Usage:

```cypher
CALL katz_centrality_online.set(0.2, 0.01)
YIELD node, rank;
```

### `get()`

\* This should be used if the trigger has been set or a `set` function has been
called before adding changes to the graph.

#### Output:

- `node` ➡ Node in the graph, for which Katz Centrality is calculated.
- `rank` ➡ Normalized ranking of a node. Expresses the centrality value after
  bound convergence.

#### Usage:

```cypher
CALL katz_centrality_online.get()
YIELD node, rank;
```

### `update(created_vertices, created_edges, deleted_vertices, deleted_edges)`

#### Input:

- `created_vertices` ➡ Vertices that were created in the last transaction.
- `created_edges` ➡ Edges created in a period from the last transaction.
- `deleted_vertices` ➡ Vertices deleted from the last transaction.
- `deleted_edges` ➡ Edges deleted from the last transaction.

#### Output:

- `node` ➡ Node in the graph, for which Katz Centrality is calculated.
- `rank` ➡ Normalized ranking of a node. Expresses the centrality value after
  bound convergence.

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

<img src={require('../../data/query-modules/cpp/katz-centrality/memgraph-katz.png').default}/>

  </TabItem>
  <TabItem value="cypher-preset">

```cypher
CALL katz_centrality_online.set(0.2) YIELD *;

CREATE TRIGGER katz_trigger
BEFORE COMMIT
EXECUTE CALL katz_centrality_online.update(createdVertices, createdEdges, deletedVertices, deletedEdges) YIELD *
SET node.rank = rank;
```

 </TabItem>
  <TabItem value="cypher-load">

```cypher
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 8}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 4}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 4}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 5}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 5}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 6}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 7}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 8}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 8}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 9}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 10}) MERGE (b:Node {id: 9}) CREATE (a)-[:RELATION]->(b);
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
+---------+---------+
| node_id | rank    |
+---------+---------+
| 1       | 0.408   |
| 0       | 0.28    |
| 10      | 1.864   |
| 2       | 1.08    |
| 8       | 0.408   |
| 3       | 0       |
| 4       | 0       |
| 5       | 0       |
| 6       | 0       |
| 7       | 0       |
| 9       | 0.544   |
+---------+---------+
```

  </TabItem>
</Tabs>
