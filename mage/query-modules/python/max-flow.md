---
id: max-flow
title: max_flow
sidebar_label: max_flow
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

The maximum flow problem consists of finding a flow through a graph such that it
is the maximum possible flow.

The algorithm implementation is based on the Ford-Fulkerson method with capacity
scaling. Ford-Fulkerson method is not itself an algorithm as it does not specify
the procedure of finding augmenting paths in a residual graph. It is a greedy
method, using augmenting paths as it comes across them. Input is a weighted
graph with a defined source and sink, representing the beginning and end of the
flow network. The algorithm begins with an empty flow and, at each step, finds a
path, called an augmenting path, from the source to the sink that generates more
flow. When flow cannot be increased anymore, the algorithm stops, and the maximum
flow has been found.

The capacity scaling is a heuristic for finding augmenting paths in such a way
that prioritizes taking edges with larger capacities, maintaining a threshold
value that is only lowered once no larger path can be found. It speeds up the
algorithm noticeably compared to a standard DFS search.

The algorithm is adapted to work with heterogeneous graphs, meaning not all
edges need to have the defined edge property used for edge flow. When an edge 
doesn't have a flow, it is skipped, and when no edges have this property, the
returning max flow value is 0.

[![docs-source](https://img.shields.io/badge/source-max_flow-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/max_flow.py)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**Python**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight> |
| **Edge weights**    |  <Highlight color="#FB6E00">**weighted**</Highlight>|
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

:::note Too slow?

If this algorithm implementation is too slow for your use case, [contact us](mailto:tech@memgraph.com) and request a rewrite to C++ !

:::

## Procedures

<RunOnSubgraph/>

### `get_flow(parameters, edge_property)`

#### Input:

* `start_v: Vertex` ➡ Source node from which the maximum flow is calculated
* `end_v: Vertex` ➡ Sink node to which the max flow is calculated
* `edge_property: string (default="weight")` ➡ Edge property which is used as the flow
  capacity of the edge

#### Output:

* `max_flow: Number` ➡ Maximum flow of the network, from source to sink

#### Usage:

```cypher
MATCH (source {id: 0}), (sink {id: 5})
CALL max_flow.get_flow(source, sink, "weight")
YIELD max_flow
RETURN max_flow;
```

### `get_paths(parameters, edge_property)`

#### Input:

* `start_v: Vertex` ➡ Source node from which the maximum flow is calculated
* `end_v: Vertex` ➡ Sink node to which the max flow is calculated
* `edge_property: string (default="weight")` ➡ Edge property which is used as the flow
  capacity of the edge

#### Output:

* `path: Path` ➡ path with a flow in a maximum flow
* `flow: Number` ➡ flow amount corresponding to that path

#### Usage:

```cypher
MATCH (source {id: 0}), (sink {id: 5})
CALL max_flow.get_paths(source, sink, "weight")
YIELD path, flow
RETURN path, flow;
```

## Example

<Tabs
  groupId="example"
  defaultValue="visualization"
  values={[
    {label: 'Step 1: Input graph', value: 'visualization'},
    {label: 'Step 2: Cypher load commands', value: 'cypher'},
    {label: 'Step 3: Running command', value: 'run'},
    {label: 'Step 4: Results', value: 'result'},
  ]
}>
  <TabItem value="visualization">

  <img src={require('../../data/query-modules/python/max-flow/max-flow-1.png').default}/>

  </TabItem>
  <TabItem value="cypher">

```cypher
MERGE (a:Node {id: "A"}) MERGE (b:Node {id: "B"}) CREATE (a)-[:RELATION {weight: 9}]->(b);
MERGE (a:Node {id: "A"}) MERGE (b:Node {id: "C"}) CREATE (a)-[:RELATION {weight: 10}]->(b);
MERGE (a:Node {id: "B"}) MERGE (b:Node {id: "E"}) CREATE (a)-[:RELATION {weight: 8}]->(b);
MERGE (a:Node {id: "C"}) MERGE (b:Node {id: "F"}) CREATE (a)-[:RELATION {weight: 7}]->(b);
MERGE (a:Node {id: "C"}) MERGE (b:Node {id: "D"}) CREATE (a)-[:RELATION {weight: 1}]->(b);
MERGE (a:Node {id: "A"}) MERGE (b:Node {id: "D"}) CREATE (a)-[:RELATION {weight: 8}]->(b);
MERGE (a:Node {id: "E"}) MERGE (b:Node {id: "D"}) CREATE (a)-[:RELATION {weight: 2}]->(b);
MERGE (a:Node {id: "D"}) MERGE (b:Node {id: "F"}) CREATE (a)-[:RELATION {weight: 11}]->(b);
MERGE (a:Node {id: "E"}) MERGE (b:Node {id: "G"}) CREATE (a)-[:RELATION {weight: 5}]->(b);
MERGE (a:Node {id: "F"}) MERGE (b:Node {id: "G"}) CREATE (a)-[:RELATION {weight: 14}]->(b);
```

  </TabItem>
  <TabItem value="run">

```cypher
MATCH (source {id: "A"}), (sink {id: "G"})
CALL max_flow.get_flow(source, sink)
YIELD max_flow
RETURN max_flow;
```

  </TabItem>
  <TabItem value="result">

```plaintext
+----------+
| max_flow |
+----------+
| 19       |
+----------+
```

  </TabItem>

</Tabs>
