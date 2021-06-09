---
id: weakly-connected-components
title: Weakly connected components
sidebar_label: Weakly connected components
---

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

[![docs-source](https://img.shields.io/badge/source-weakly_connected_components-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/cpp/connectivity_module/connectivity_module.cpp)


## Algorithm

First analysis that someone would like to do on graph is usually search for disconnected components.
Algorithm implemented within this module does exactly that, it searches for different components of 
the graph. Within component, nodes have connections toward each other, while between components there
is no edge that connects nodes from separate components. 

* graph-direction :arrow_right: **undirected**
* edge-weight :arrow_right: **unweighted**
* alg-parallel :arrow_right: **sequential**

## Procedures

### `get()`

#### Output:

* `node` ➡ Vertex object with all properties which is going to be related to the component ID it belongs.
* `component_id` ➡ Component ID for each node in the graph. Components are zero-indexed and there is no rule of how they will be appointed to node. The only guarantee is that divided components will have distinct component IDs.

#### Usage:
```cypher
CALL weakly_connected_components.get() 
YIELD node, component_id;
```

## Example

#### Preparing data:

<Tabs
  groupId="example"
  defaultValue="visualization"
  values={[
    {label: 'Visualization', value: 'visualization'},
    {label: 'Cypher commands', value: 'cypher'},
  ]
}>
  <TabItem value="visualization">

  <img src="https://i.imgur.com/TB0IAkZ.png"/>

  </TabItem>


  <TabItem value="cypher">

```cypher
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);
```

  </TabItem>

</Tabs>


#### Running the query:

```cypher
CALL weakly_connected_components.get() 
YIELD node, component_id;
```

### Results:

```plaintext
+-----------------+-----------------+
| node            | component_id    |
+-----------------+-----------------+
| (:Node {id: 5}) | 1               |
| (:Node {id: 4}) | 1               |
| (:Node {id: 3}) | 1               |
| (:Node {id: 2}) | 0               |
| (:Node {id: 0}) | 0               |
| (:Node {id: 1}) | 0               |
+-----------------+-----------------+
```

