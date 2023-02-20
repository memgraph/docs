---
id: betweenness-centrality-online
title: betweenness_centrality_online
sidebar_label: betweenness_centrality_online
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

Betweenness centrality is among the most common metrics in graph analytics owing
to its utility in identifying critical vertices of graphs. It is one of the
tools in _centrality analysis_, a set of techniques for measuring the importance
of nodes in networks.

The notion of [Betweenness
centrality](https://en.wikipedia.org/wiki/Betweenness_centrality) is based on
shortest paths: the shortest path between two nodes is the one consisting of the
fewest edges, or in case of weighted graphs, the one with the smallest total
edge weight. A node’s betweenness centrality is defined as the share of all
shortest paths in the graph that run through it.

This query module delivers a _fully dynamic_ betweenness centrality computation
tool using the
[iCentral](https://repository.kaust.edu.sa/bitstream/handle/10754/625935/08070346.pdf)
[^1] algorithm by Jamour, Skiadopoulos and Kalnis. iCentral saves up on
computation in two ways: it singles out the nodes whose centrality scores could
have changed and then incrementally updates their scores, making use of
previously calculated data structures where applicable.

This drives down the algorithm’s time complexity to _O_(_m′n′_) and space
complexity to _O_(_m_ + _n_), where _m_ and _n_ are the counts of edges and
vertices in the graph, _m′_ is the number of edges in the biconnected component
affected by the graph update, and _n′_ is the size of a subset of the nodes in
the biconnected component. Consequently, the algorithm is suitable for mid-scale
graphs.

Dynamic algorithms such as iCentral are especially suited for graph streaming
solutions such as Memgraph. As updates arrive in a stream, the algorithm avoids
redundant work by processing only the portion of the graph affected by the
update.

[^1] [Parallel Algorithm for Incremental Betweenness Centrality on Large
Graphs](https://repository.kaust.edu.sa/bitstream/handle/10754/625935/08070346.pdf)
(Jamour et al., 2017)

[![docs-source](https://img.shields.io/badge/source-betweenness_centrality_online-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/cpp/betweenness_centrality_module/betweenness_centrality_online_module.cpp)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**parallel**</Highlight>   |

## Procedures

<RunOnSubgraph/>

### `set(normalize, threads)`

#### Input:

- `normalize: boolean (default=True)` ➡ If `True`, the betweenness values are normalized by
  `2/((n-1)(n-2))`, where `n` is the number of nodes in the graph.
- `threads: integer (default=Nº of concurrent threads supported by the implementation)` ➡ The
  number of threads used in calculating betweenness centrality.

#### Output:

- `node: Vertex` ➡ Graph vertex.
- `betweenness_centrality: float` ➡ Betweenness centrality score of the above
  vertex.

#### Usage:

```cypher
CALL betweenness_centrality_online.set()
YIELD node, betweenness_centrality;
```

### `get(normalize)`

#### Input:

- `normalize: boolean (default=True)` ➡ If `True`, the betweenness values are normalized by
  `2/((n-1)(n-2))`, where `n` is the number of nodes in the graph.

#### Output:

- `node: Vertex` ➡ Graph vertex.
- `betweenness_centrality: float` ➡ Betweenness centrality score of the above
  vertex.

#### Usage:

```cypher
CALL betweenness_centrality_online.get()
YIELD node, betweenness_centrality;
```

### `update(created_vertices, created_edges, deleted_vertices, deleted_edges, normalize, threads)`

- `created_vertices: List[Vertex]` ➡ Vertices created in the latest graph
  update.
- `created_edges: List[Edge]` ➡ Edges created in the latest graph update.
- `updated_vertices: List[Vertex]` ➡ Vertices updated in the latest graph
  update.
- `updated_edges: List[Edge]` ➡ Edges updated in the latest graph update.
- `deleted_vertices: List[Vertex]` ➡ Vertices deleted in the latest graph
  update.
- `deleted_edges: List[Edge]` ➡ Edges deleted in the latest graph update.
- `normalize: boolean (default=True)` ➡ If `True`, the betweenness values are normalized by
  `2/((n-1)(n-2))`, where `n` is the number of nodes in the graph.
- `threads: integer (default=Nº of concurrent threads supported by the implementation)` ➡ The
  number of threads used in updating betweenness centrality.

#### Output:

- `node: Vertex` ➡ Graph vertex.
- `betweenness_centrality: float` ➡ Betweenness centrality score of the above
  vertex.

#### Usage:

As there is a total of four complex obligatory parameters, setting the
parameters by hand might be cumbersome. The recommended use of this method is to
call it within a [trigger](/memgraph/reference-guide/triggers), making sure
beforehand that all [predefined
variables](/memgraph/reference-guide/triggers/#predefined-variables) are
available:

```cypher
CREATE TRIGGER sample_trigger BEFORE COMMIT
EXECUTE CALL betweenness_centrality_online.update(createdVertices, createdEdges, deletedVertices, deletedEdges, normalize, threads) YIELD *;
```

Communities calculated by `update()` are accessible by subsequently calling
`get()`:

```cypher
CALL betweenness_centrality_online.get()
YIELD node, betweenness_centrality;
```

## Example

<Tabs
groupId="example"
defaultValue="visualization"
values={[
{label: 'Step 1: Input graph', value: 'visualization'},
{label: 'Step 2: Set trigger', value: 'cypher-trigger'},
{label: 'Step 3: Cypher load commands', value: 'cypher-load'},
{label: 'Step 4: Running command', value: 'run'},
{label: 'Step 5: Results', value: 'result'},
]}>
  <TabItem value="visualization">

<img src={require('../../data/query-modules/cpp/betweenness-centrality-online/betweenness-centrality-online-1.png').default}/>

  </TabItem>
  <TabItem value="cypher-trigger">

```cypher
CREATE TRIGGER update_bc_trigger
BEFORE COMMIT EXECUTE
  CALL betweenness_centrality_online.update(createdVertices, createdEdges, deletedVertices, deletedEdges)
  YIELD *;
```

  </TabItem>
  <TabItem value="cypher-load">

```cypher
MERGE (a: Node {id: 0}) MERGE (b: Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a: Node {id: 0}) MERGE (b: Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a: Node {id: 1}) MERGE (b: Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a: Node {id: 2}) MERGE (b: Node {id: 3}) CREATE (a)-[:RELATION]->(b);
MERGE (a: Node {id: 3}) MERGE (b: Node {id: 4}) CREATE (a)-[:RELATION]->(b);
MERGE (a: Node {id: 3}) MERGE (b: Node {id: 5}) CREATE (a)-[:RELATION]->(b);
MERGE (a: Node {id: 4}) MERGE (b: Node {id: 5}) CREATE (a)-[:RELATION]->(b);
```

  </TabItem>
  <TabItem value="run">

```cypher
CALL betweenness_centrality_online.get(True)
YIELD node, betweenness_centrality
RETURN node.id AS node_id, betweenness_centrality
ORDER BY node_id;
```

  </TabItem>
  <TabItem value="result">

```plaintext
┌─────────────────────────┬─────────────────────────┐
│ node_id                 │ betweenness_centrality  │
├─────────────────────────┼─────────────────────────┤
│ 0                       │ 0                       │
│ 1                       │ 0                       │
│ 2                       │ 0.6                     │
│ 3                       │ 0.6                     │
│ 4                       │ 0                       │
│ 5                       │ 0                       │
└─────────────────────────┴─────────────────────────┘
```

  </TabItem>
</Tabs>
