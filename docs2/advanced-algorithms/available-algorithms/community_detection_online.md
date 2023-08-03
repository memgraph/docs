---
id: community-detection-online
title: community_detection_online
sidebar_label: community_detection_online
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

This query module implements the [LabelRankT](https://arxiv.org/abs/1305.2006)
dynamic community detection algorithm.

LabelRankT belongs to the *label propagation* family of community detection
algorithms and thus rests upon the idea that individual nodes learn from their
neighbors what community they belong to.

Being *dynamic* and *efficient*, the algorithm is suitable for large-scale
graphs. It runs in *O(m)* time and guarantees *O(mn)* space complexity, where
*m* and *n* are the counts of vertices and edges in the graph, respectively.

Dynamic algorithms such as LabelRankT are especially suited for graph streaming
solutions such as Memgraph. As updates arrive in a stream, it avoids redundant
work by only processing the portion of the graph modified by the update.

Furthermore, the algorithm improves upon earlier label propagation methods by
being deterministic; its results are replicable. Taking into account edge weight
and directedness generally yields better community quality than similar methods,
and it extends LabelRankT’s compatibility to a wider set of graphs.

[^1] [LabelRankT: Incremental Community Detection in Dynamic Networks via Label
Propagation](https://arxiv.org/abs/1305.2006), Xie, Jierui et al.

[![docs-source](https://img.shields.io/badge/source-community_detection_online-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/cpp/community_detection_module/community_detection_online_module.cpp)

| Trait               | Value                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>                                                        |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>                                                              |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight> / <Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**weighted**</Highlight> / <Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight>                                                       |

## Procedures

<RunOnSubgraph/>

### `set(directed, weighted, similarity_threshold, exponent, min_value, weight_property, w_selfloop, max_iterations, max_updates)`

Performs dynamic community detection using the LabelRankT algorithm.

The default values of the `similarity_threshold`, `exponent` and `min_value`
parameters are not universally applicable, and the actual values should be
determined experimentally. This is especially pertinent to setting the
`min_value` parameter. For example, with the default ***1/10*** value, vertices
of degree greater than 10 are at risk of not being assigned to any community and
the user should check if that is indeed the case.

#### Input:

* `directed: boolean (default=False)` ➡ Specifies whether the graph is directed. If not set,
  the graph is treated as undirected.
* `weighted: boolean (default=False)` ➡ Specifies whether the graph is weighted. If not set,
  the graph is considered unweighted.
* `similarity_threshold: double (default=0.7)` ➡ Maximum similarity between node’s and
   its neighbors’ communities for the node to be updated in the ongoing
   iteration.
* `exponent: double (default=4)` ➡ Power which community probability vectors are raised
  elementwise to.
* `min_value: double (default=0.1)` ➡ Smallest community probability that is not pruned
  between iterations.
* `weight_property: string (default="weight")` For directed graphs, the values at the given
   edge property are used as weights in the community detection algorithm.
* `w_selfloop: double (default=1)` ➡ Each vertex has a self-loop added to smooth the
   label propagation. This parameter specifies the weight assigned to the
   self-loops. If the graph is unweighted, this value is ignored.


* `max_iterations: integer (default=100)` ➡ Maximum number of iterations to run.
* `max_updates: integer (default=5)` ➡ Maximum number of updates to any node’s community
  probabilities.

#### Output:

* `node: Vertex` ➡ Graph node.
* `community_id: integer` ➡ Community ID. If the node is not associated with any
  community, defaults to ***-1***.

#### Usage:

```cypher
CALL community_detection_online.set(False, False, 0.7, 4.0, 0.1, "weight", 1, 100, 5)
YIELD node, community_id;
```

### `get()`

Returns the latest previously calculated community detection results. If there
are none, defaults to calling `set()` with default parameters.

#### Output:

* `node: Vertex` ➡ Graph node.
* `community_id: integer` ➡ Community ID. Defaults to ***-1*** if the node does not belong to any community.

#### Usage:

```cypher
CALL community_detection_online.get()
YIELD node, community_id;
```

### `update(createdVertices, createdEdges, updatedVertices, updatedEdges, deletedVertices, deletedEdges)`

Dynamically updates previously calculated community detection results based on
changes applied in the latest graph update and returns the results.

#### Input:

* `createdVertices: mgp.List[mgp.Vertex]` ➡ Vertices created in the latest graph
  update.
* `createdEdges: mgp.List[mgp.Edge]` ➡ Edges created in the latest graph update.
* `updatedVertices: mgp.List[mgp.Vertex]` ➡ Vertices updated in the latest graph
  update.
* `updatedEdges: mgp.List[mgp.Edge]` ➡ Edges updated in the latest graph update.
* `deletedVertices: mgp.List[mgp.Vertex]` ➡ Vertices deleted in the latest graph
  update.
* `deletedEdges: mgp.List[mgp.Edge]` ➡ Edges deleted in the latest graph update.

#### Output:

* `node: Vertex` ➡ Graph node.
* `community_id: integer` ➡ Community ID. If the node is not associated with any
  community, defaults to ***-1***.

#### Usage:

As there are a total of six complex obligatory parameters, setting the
parameters by hand might be cumbersome. The recommended use of this method is to
call it within a
[trigger](https://memgraph.com/docs/memgraph/database-functionalities/triggers),
making sure beforehand that all [predefined
variables](https://memgraph.com/docs/memgraph/database-functionalities/triggers/#predefined-variables)
are available:

```cypher
CREATE TRIGGER sample_trigger BEFORE COMMIT
EXECUTE CALL community_detection_online.update(createdVertices, createdEdges, updatedVertices, updatedEdges, deletedVertices, deletedEdges) YIELD node, community_id;
```

Communities calculated by `update()` are also accessible by subsequently calling
`get()`:

```cypher
CREATE TRIGGER sample_trigger BEFORE COMMIT
EXECUTE CALL community_detection_online.update(createdVertices, createdEdges, updatedVertices, updatedEdges, deletedVertices, deletedEdges) YIELD *;

CALL community_detection_online.get()
YIELD node, community_id
RETURN node.id AS node_id, community_id
ORDER BY node_id;
```

### `reset()`

Resets the algorithm to its initial state.

#### Output:

* `message: string` ➡ Reports whether the algorithm was successfully reset.

#### Usage:

```cypher
CALL community_detection_online.reset() YIELD message;
```

## Example

<Tabs
  groupId="example"
  defaultValue="visualization"
  values={[
    {label: 'Step 1: Input graph', value: 'visualization'},
    {label: 'Step 2: Set trigger', value: 'cypher-preset'},
    {label: 'Step 3: Load commands', value: 'cypher-load'},
    {label: 'Step 4: Running command', value: 'run'},
    {label: 'Step 5: Results', value: 'result'},
  ]
}>
  <TabItem value="visualization">

  <img src={require('../../data/query-modules/cpp/community-detection-online/community-detection-online-1.png').default}/>

  </TabItem>
  <TabItem value="cypher-preset">

```cypher
CREATE TRIGGER community_detection_online_trigger BEFORE COMMIT
EXECUTE CALL community_detection_online.update(createdVertices, createdEdges, updatedVertices, updatedEdges, deletedVertices, deletedEdges) YIELD node, community_id
SET node.community_id = community_id;
```
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
CALL community_detection_online.get()
YIELD node, community_id
RETURN node.id AS node_id, community_id
ORDER BY node_id;
```

  </TabItem>
  <TabItem value="result">

```plaintext
+-------------------------+-------------------------+
| node_id                 | community_id            |
+-------------------------+-------------------------+
| 0                       | 1                       |
| 1                       | 1                       |
| 2                       | 1                       |
| 3                       | 2                       |
| 4                       | 2                       |
| 5                       | 2                       |
+-------------------------+-------------------------+
```

  </TabItem>
</Tabs>
