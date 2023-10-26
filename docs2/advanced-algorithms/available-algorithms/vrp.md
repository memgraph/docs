---
id: vrp
title: vrp
sidebar_label: vrp
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

VRP or **Vehicle Routing problem** is a generalization of the *Travelling Salesman Problem*. The goal of the problem is to find the shortest route that visits each node once, starting and finishing from the same node, called a depot, while using a fleet of vehicles. Each vehicle does not need to be at every location, it is enough that every node is visited by at least one vehicle. The problem is *NP-hard* in optimization, and therefore methods such as constraint programming, approximations or heuristics are a good approach for solving. The current implementation of VRP includes constraint programming with *GEKKO* solver which works with 1 depot and an arbitrary number of vehicles. The algorithm uses the distance calculator to determine the distance between driving points, and works only with geographical locations, meaning each node needs to have its *lat* and *lng* property.

```cypher
(location:Location {lat: 44.1194, lng: 15.2314})
```
[![docs-source](https://img.shields.io/badge/source-vrp-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/vrp.py)

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

### `route(depot_node, number_of_vehicles)`

#### Input:

* `depot_node: Vertex` ➡ Depot node with its corresponding *lat* and *lng* coordinate properties.
* `number_of_vehicles: integer = 1` ➡ Designates how many vehicles are used. Set to 1 by default

#### Output:

* `from_vertex: Vertex` ➡ Beginning point of one part of the route
* `to_vertex: Vertex` ➡ Ending point of one part of the route
* `vehicle_id: integer` ➡ Vehicle ID that will drive the corresponding path (*from_vertex*)->(*to_vertex*)
All pairs of the route represent the full route with all vehicles used.

#### Usage:
```cypher
MATCH (d:Depot)
CALL vrp.route(d) YIELD from_vertex, to_vertex, vehicle_id;
```

## Example

<Tabs
  groupId="example"
  defaultValue="visualization"
  values={[
    {label: 'Step 1: Input graph', value: 'visualization'},
    {label: 'Step 2: Cypher load commands', value: 'cypher'},
    {label: 'Step 3: Running command', value: 'run'},
    {label: 'Step 4: Graph results', value: 'result-graph'},
    {label: 'Step 5: Running command for 2 vehicles', value: 'run_2_vehicles'},
    {label: 'Step 6: Results', value: 'result_2_vehicles'},
    {label: 'Step 7: Cypher results', value: 'result-cypher'}
  ]}>
  <TabItem value="visualization">

  <img src={require('../../data/query-modules/python/vrp/vrp-1.png').default}/>

  </TabItem>

  <TabItem value="cypher">

```cypher
CREATE (:Location {lat:45.81397494712325, lng:15.977107314009686});
CREATE (:Location {lat:45.809786288641924, lng:15.969953021143715});
CREATE (:Location {lat:45.801513169575195, lng:15.979868413090431});
CREATE (:Location {lat:45.80062044456095, lng:15.971453134506456});
CREATE (:Location {lat:45.80443233736649, lng:15.993114737391515});
CREATE (:Location {lat:45.77165828306254, lng:15.943635971437576});
CREATE (:Location {lat:45.785275159565806, lng:15.947448603375522});
CREATE (:Location {lat:45.780581597098646, lng:15.935278141510148});
CREATE (:Location {lat:45.82208303601525, lng:16.019498047049822});
CREATE (:Depot {lat:45.7872369074369, lng:15.984469921454693});
```
Note: all vertices in graph need to be either Location or Depot.

  </TabItem>

  <TabItem value="run">

```cypher
MATCH (d:Depot)
CALL vrp.route(d) YIELD from_vertex, to_vertex, vehicle_id
CREATE (from_vertex)-[r:Route]->(to_vertex);

MATCH (n)-[r:Route]->(m)
RETURN n, r, m;
```

  </TabItem>

  <TabItem value="result-graph">

  <img src={require('../../data/query-modules/python/vrp/vrp-2.png').default}/>

  </TabItem>

  <TabItem value="run_2_vehicles">

```cypher
MATCH (d:Depot, 2)
CALL vrp.route(d) YIELD from_vertex, to_vertex, vehicle_id
CREATE (from_vertex)-[r:Route]->(to_vertex);

MATCH (n)-[r:Route]->(m)
RETURN n, r, m;
```

  </TabItem>

  <TabItem value="result_2_vehicles">

  <img src={require('../../data/query-modules/python/vrp/vrp-3.png').default}/>

  </TabItem>

  <TabItem value="result-cypher">

```plaintext
+------------------------------------------+------------------------------------------+------------------------------------------+
| from_vertex                              | to_vertex                                | vehicle_id                               |
+------------------------------------------+------------------------------------------+------------------------------------------+
| (:Depot {lat: 45.7872, lng: 15.9845})    | (:Location {lat: 45.7853, lng: 15.9474}) | 1                                        |
| (:Location {lat: 45.7853, lng: 15.9474}) | (:Location {lat: 45.7806, lng: 15.9353}) | 1                                        |
| (:Location {lat: 45.7806, lng: 15.9353}) | (:Location {lat: 45.7717, lng: 15.9436}) | 1                                        |
| (:Location {lat: 45.7717, lng: 15.9436}) | (:Location {lat: 45.814, lng: 15.9771})  | 1                                        |
| (:Location {lat: 45.814, lng: 15.9771})  | (:Location {lat: 45.8044, lng: 15.9931}) | 1                                        |
| (:Location {lat: 45.8044, lng: 15.9931}) | (:Location {lat: 45.8015, lng: 15.9799}) | 1                                        |
| (:Location {lat: 45.8015, lng: 15.9799}) | (:Location {lat: 45.8006, lng: 15.9715}) | 1                                        |
| (:Location {lat: 45.8006, lng: 15.9715}) | (:Location {lat: 45.8098, lng: 15.97})   | 1                                        |
| (:Location {lat: 45.8098, lng: 15.97})   | (:Depot {lat: 45.7872, lng: 15.9845})    | 1                                        |
| (:Depot {lat: 45.7872, lng: 15.9845})    | (:Location {lat: 45.8221, lng: 16.0195}) | 2                                        |
| (:Location {lat: 45.8221, lng: 16.0195}) | (:Depot {lat: 45.7872, lng: 15.9845})    | 2                                        |
+------------------------------------------+------------------------------------------+------------------------------------------+
```
  </TabItem>

</Tabs>