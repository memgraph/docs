---
id: tsp
title: tsp
sidebar_label: tsp
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

TSP or "Travelling salesman problem" is one of the well-known problems in graph theory. The goal of the problem is to find the shortest route that visits each node once, starting and finishing from the same node, given the distance between each one of them. It is an NP-hard problem in optimization and therefore there exists no exact solution. Here implemented are trivial, *greedy* and *k-approx* methods that find the solution within a *k-bound* of the optimal one. That means that solution is not going to be more than *k* times worse than the best possible. The algorithm uses the distance calculator to determine the distance between points, and works only with geographical locations, meaning each node needs to have its *lat* and *lng* property.

```cypher
(location:Location {lat: 44.1194, lng: 15.2314})
```

[![docs-source](https://img.shields.io/badge/source-tsp-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/tsp.py)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**module**</Highlight>     |
| **Implementation**  | <Highlight color="#FB6E00">**Python**</Highlight>     |
| **Graph direction** | <Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

:::note Too slow?

If this algorithm implementation is too slow for your use case, [contact us](mailto:tech@memgraph.com) and request a rewrite to C++ !

:::

## Procedures

<RunOnSubgraph/>

### `solve(points, method)`

#### Input:

* `points: List[Vertex]` ➡ List of points to calculate TSP on. Required to have *lng* and *lat* properties.
* `method: string (default=1.5_approx)` ➡ Method used for optimization. Can be either ***1.5_approx***, ***2_approx*** or ***greedy***

#### Output:

* `sources: List[Vertex]` ➡ List of elements from 1st to (n-1)-th element
* `destinations: List[Vertex]` ➡ List of elements from 2nd to n-th element
The pairs of them represent individual edges between 2 nodes in the graph.

#### Usage:
```cypher
MATCH (n:Location)
WITH COLLECT(n) as locations
CALL tsp_module.solve(points) YIELD sources, destinations;
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

  <img src={require('../../data/query-modules/python/tsp/tsp-1.png').default}/>

  </TabItem>


  <TabItem value="cypher">

```cypher
CREATE (location:Location {name: 'Zagreb', lat: 45.8150, lng: 15.9819});
CREATE (location:Location {name: 'Split', lat: 43.5081, lng: 16.4402});
CREATE (location:Location {name: 'Rijeka', lat: 45.3271, lng:  14.4422});
CREATE (location:Location {name: 'Osijek', lat: 45.5550, lng: 18.6955});
CREATE (location:Location {name: 'Zadar', lat: 44.1194, lng: 15.2314});
```

  </TabItem>

  <TabItem value="run">

```cypher
MATCH (n:Location)
WITH COLLECT(n) AS locations
CALL tsp.solve(locations, "1.5_approx") YIELD sources, destinations
WITH EXTRACT(i IN RANGE(0, SIZE(sources) - 1) | [sources[i], destinations[i]]) AS path
UNWIND path as edge
WITH edge[0] AS from, edge[1] AS to
CREATE (from)-[path:PATH]->(to)
RETURN from, to, path;
```

  </TabItem>


  <TabItem value="result">

```plaintext
+----------------------------------------------------------+----------------------------------------------------------+----------------------------------------------------------+
| from                                                     | to                                                       | path                                                     |
+----------------------------------------------------------+----------------------------------------------------------+----------------------------------------------------------+
| (:Location {lat: 45.815, lng: 15.9819, name: "Zagreb"})  | (:Location {lat: 45.555, lng: 18.6955, name: "Osijek"})  | [:PATH]                                                  |
| (:Location {lat: 45.555, lng: 18.6955, name: "Osijek"})  | (:Location {lat: 43.5081, lng: 16.4402, name: "Split"})  | [:PATH]                                                  |
| (:Location {lat: 43.5081, lng: 16.4402, name: "Split"})  | (:Location {lat: 44.1194, lng: 15.2314, name: "Zadar"})  | [:PATH]                                                  |
| (:Location {lat: 44.1194, lng: 15.2314, name: "Zadar"})  | (:Location {lat: 45.3271, lng: 14.4422, name: "Rijeka"}) | [:PATH]                                                  |
| (:Location {lat: 45.3271, lng: 14.4422, name: "Rijeka"}) | (:Location {lat: 45.815, lng: 15.9819, name: "Zagreb"})  | [:PATH]                                                  |
+----------------------------------------------------------+----------------------------------------------------------+----------------------------------------------------------+
```

  </TabItem>

</Tabs>