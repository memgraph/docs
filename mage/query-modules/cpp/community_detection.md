---
id: community-detection
title: community_detection
sidebar_label: community_detection
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

This query module enables using the [Louvain method](https://en.wikipedia.org/wiki/Louvain_method)<sup>[1]</sup> for community
detection, using the [Grappolo](https://github.com/Exa-Graph/grappolo) parallel implementation.

The Louvain algorithm belongs to the *modularity maximization* family of community
detection algorithms. Each node is initially assigned to its own community, and the
algorithm uses a *greedy heuristic* to search for the community partition with
the highest modularity score by merging previously obtained communities.

The algorithm is suitable for large-scale graphs as it runs in *O*(*n*log*n*) time
on a graph with *n* nodes. Further performance gains are obtained by parallelization using
a distance-1 graph coloring heuristic, and a graph coarsening algorithm that aims to preserve communities.

[^1] [Fast unfolding of communities in large networks](https://arxiv.org/abs/0803.0476),
Blondel et al.

[![docs-source](https://img.shields.io/badge/source-community_detection-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/cpp/community_detection_module/community_detection_module.cpp)

| Trait                    | Value                                                                                                       |
| ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| **Module type**          | <Highlight color="#FB6E00">**algorithm**</Highlight>                                                        |
| **Implementation**       | <Highlight color="#FB6E00">**C++**</Highlight>                                                              |
| **Graph direction**      | <Highlight color="#FB6E00">**undirected**</Highlight>                                                       |
| **Relationship weights** | <Highlight color="#FB6E00">**weighted**</Highlight> / <Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**          | <Highlight color="#FB6E00">**parallel**</Highlight>                                                         |

## Procedures

<RunOnSubgraph/>

### `get(weight, coloring, min_graph_shrink, community_alg_threshold, coloring_alg_threshold)`

Computes graph communities using the Louvain method.

#### Input

* `weight: string (default=null)` ➡ Specifies the default edge weight. If not set, 
  the algorithm uses the `weight` edge attribute when present and otherwise 
  treats the graph as unweighted.
* `coloring: boolean (default=False)` ➡ If set, use the graph coloring heuristic for effective parallelization.
* `min_graph_shrink: integer (default=100000)` ➡ The graph coarsening optimization stops upon shrinking the graph to this many nodes.
* `community_alg_threshold: double (default=0.000001)` ➡ Controls how long the algorithm iterates. When the gain in modularity
  goes below the threshold, iteration is over.
  Valid values are between 0 and 1 (exclusive).
* `coloring_alg_threshold: double (default=0.01)` ➡ If coloring is enabled, controls how long the algorithm iterates. When the
  gain in modularity goes below this threshold, a final iteration is performed using the
  `community_alg_threshold` value.
  Valid values are between 0 and 1 (exclusive); this parameter's value should be higher than `community_alg_threshold`.

#### Output

* `node: Vertex` ➡ Graph node.
* `community_id: integer` ➡ Community ID. Defaults to ***-1*** if the node does not belong to any community.

#### Usage

```cypher
CALL community_detection.get()
YIELD node, community_id;
```

### `get_subgraph(subgraph_nodes, subgraph_relationships, weight, coloring, min_graph_shrink, community_alg_threshold, coloring_alg_threshold)`

Computes graph communities over a subgraph using the Louvain method.

#### Input

* `subgraph_nodes: List[Node]` ➡ List of nodes in the subgraph.
* `subgraph_relationships: List[Relationship]` ➡ List of relationships in the subgraph.
* `weight: str (default=null)` ➡ Specifies the default relationship weight. If not set,
  the algorithm uses the `weight` relationship attribute when present and otherwise
  treats the graph as unweighted.
* `coloring: bool (default=False)` ➡ If set, use the graph coloring heuristic for effective parallelization.
* `min_graph_shrink: int  (default=100000)` ➡ The graph coarsening optimization stops upon shrinking the graph to this many nodes.
* `community_alg_threshold: double  (default=0.000001)` ➡ Controls how long the algorithm iterates. When the gain in modularity
  goes below the threshold, iteration is over.
  Valid values are between 0 and 1 (exclusive).
* `coloring_alg_threshold: double  (default=0.01)` ➡ If coloring is enabled, controls how long the algorithm iterates. When the
  gain in modularity goes below this threshold, a final iteration is performed using the
  `community_alg_threshold` value.
  Valid values are between 0 and 1 (exclusive); this parameter's value should be higher than `community_alg_threshold`.

#### Output

* `node: Vertex` ➡ Graph node.
* `community_id: int` ➡ Community ID. Defaults to ***-1*** if the node does not belong to any community.

#### Usage

```cypher
MATCH (a)-[e]-(b)
WITH COLLECT(a) AS nodes, COLLECT (e) AS relationships
CALL community_detection.get_subgraph(nodes, relationships)
YIELD node, community_id;
```

## Example

<Tabs
  groupId="example"
  defaultValue="visualization"
  values={[
    {label: 'Step 1: Input graph', value: 'visualization'},
    {label: 'Step 3: Load commands', value: 'cypher-load'},
    {label: 'Step 4: Running command', value: 'run'},
    {label: 'Step 5: Results', value: 'result'},
  ]
}>
  <TabItem value="visualization">

  <img src={require('../../data/query-modules/cpp/community-detection/community-detection-1.png').default}/>

  </TabItem>

  <TabItem value="cypher-load">

```cypher
MERGE (a: Node {id: 0}) MERGE (b: Node {id: 1}) CREATE (a)-[r: Relation]->(b);
MERGE (a: Node {id: 0}) MERGE (b: Node {id: 2}) CREATE (a)-[r: Relation]->(b);
MERGE (a: Node {id: 1}) MERGE (b: Node {id: 2}) CREATE (a)-[r: Relation]->(b);
MERGE (a: Node {id: 2}) MERGE (b: Node {id: 3}) CREATE (a)-[r: Relation]->(b);
MERGE (a: Node {id: 3}) MERGE (b: Node {id: 4}) CREATE (a)-[r: Relation]->(b);
MERGE (a: Node {id: 3}) MERGE (b: Node {id: 5}) CREATE (a)-[r: Relation]->(b);
MERGE (a: Node {id: 4}) MERGE (b: Node {id: 5}) CREATE (a)-[r: Relation]->(b);
```

  </TabItem>

  <TabItem value="run">

```cypher
CALL community_detection.get()
YIELD node, community_id
RETURN node.id AS node_id, community_id
ORDER BY node_id;
```

  </TabItem>
  <TabItem value="result">

```plaintext
┌─────────────────────────┬─────────────────────────┐
│ node_id                 │ community_id            │
├─────────────────────────┼─────────────────────────┤
│ 0                       │ 1                       │
│ 1                       │ 1                       │
│ 2                       │ 1                       │
│ 3                       │ 2                       │
│ 4                       │ 2                       │
│ 5                       │ 2                       │
└─────────────────────────┴─────────────────────────┘
```

  </TabItem>
</Tabs>
