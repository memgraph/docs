---
id: biconnected-components
title: biconnected_components
sidebar_label: biconnected_components
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

Finding biconnected components means finding a maximal biconnected subgraph. Subgraph is biconnected if:

- It is possible to go from each node to another within a biconnected subgraph
- First scenario remains true even after removing any vertex in the subgraph

The algorithm works by finding articulation points, and then traversing from these articulation points toward other nodes, which all together form one biconnected component.

[![docs-source](https://img.shields.io/badge/source-biconnected_components-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/cpp/biconnected_components_module/biconnected_components_module.cpp)

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

* `bcc_id` ➡ Biconnected component identifier. There is no order of nodes within one biconnected component.
* `node_from` ➡ First node of an edge contained in biconnected component.
* `node_to` ➡ Second node of an edge contained in biconnected component

#### Usage:
```cypher
CALL biconnected_components.get()
YIELD bcc_id, node_from, node_to;
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

  <img src={require('../../data/query-modules/cpp/biconnected-components/biconnected-components-1.png').default}/>

  </TabItem>


  <TabItem value="cypher">

```cypher
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 6}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 5}) MERGE (b:Node {id: 6}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 5}) MERGE (b:Node {id: 7}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 5}) MERGE (b:Node {id: 8}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 7}) MERGE (b:Node {id: 8}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 8}) MERGE (b:Node {id: 9}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 10}) MERGE (b:Node {id: 11}) CREATE (a)-[:RELATION]->(b);
```

  </TabItem>

  <TabItem value="run">

```cypher
CALL biconnected_components.get()
YIELD bcc_id, node_from, node_to
WITH bcc_id, node_from, node_to
MATCH (node_from)-[edge]-(node_to)
RETURN bcc_id, edge, node_from, node_to;
```

  </TabItem>


  <TabItem value="result">

```plaintext
+------------------+------------------+------------------+------------------+
| bcc_id           | edge             | node_from        | node_to          |
+------------------+------------------+------------------+------------------+
| 0                | [:RELATION]      | (:Node {id: 2})  | (:Node {id: 4})  |
| 0                | [:RELATION]      | (:Node {id: 3})  | (:Node {id: 4})  |
| 0                | [:RELATION]      | (:Node {id: 1})  | (:Node {id: 3})  |
| 0                | [:RELATION]      | (:Node {id: 2})  | (:Node {id: 3})  |
| 0                | [:RELATION]      | (:Node {id: 1})  | (:Node {id: 2})  |
| 1                | [:RELATION]      | (:Node {id: 8})  | (:Node {id: 9})  |
| 2                | [:RELATION]      | (:Node {id: 5})  | (:Node {id: 8})  |
| 2                | [:RELATION]      | (:Node {id: 7})  | (:Node {id: 8})  |
| 2                | [:RELATION]      | (:Node {id: 5})  | (:Node {id: 7})  |
| 3                | [:RELATION]      | (:Node {id: 0})  | (:Node {id: 6})  |
| 3                | [:RELATION]      | (:Node {id: 5})  | (:Node {id: 6})  |
| 3                | [:RELATION]      | (:Node {id: 1})  | (:Node {id: 5})  |
| 3                | [:RELATION]      | (:Node {id: 0})  | (:Node {id: 1})  |
| 4                | [:RELATION]      | (:Node {id: 10}) | (:Node {id: 11}) |
+------------------+------------------+------------------+------------------+
```

  </TabItem>

</Tabs>
