---
id: weakly-connected-components
title: weakly_connected_components
sidebar_label: weakly_connected_components
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

The first analysis that is most often run on a graph is usually a search for disconnected components.
The algorithm implemented within this module does exactly that, it searches for different components of
the graph. Within components, nodes have connections toward each other, while between components there
is no edge that connects nodes from separate components.

[![docs-source](https://img.shields.io/badge/source-weakly_connected_components-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/cpp/connectivity_module/connectivity_module.cpp)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

## Procedures

<RunOnSubgraph/>

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

  <img src={require('../../data/query-modules/cpp/weakly-connected-components/weakly-connected-components-1.png').default}/>

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

  <TabItem value="run">

```cypher
CALL weakly_connected_components.get()
YIELD node, component_id
RETURN node, component_id;
```

  </TabItem>


  <TabItem value="result">

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

  </TabItem>

</Tabs>
