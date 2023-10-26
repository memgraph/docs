---
id: bridges
title: bridges
sidebar_label: bridges
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

A bridge in the graph can be described as an edge which if deleted, creates two disjoint graph components. This algorithm finds bridges within the graph. This algorithm has various practical usages such can be road or internet network design planning. A bridge can represent a bottleneck for many scenarios and it is valuable to have such an algorithm to detect it.

[![docs-source](https://img.shields.io/badge/source-bridges-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/cpp/bridges_module/bridges_module.cpp)

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

* `node_from` ➡ Represents the first node in bridge edge
* `node_to` ➡ Represents the second node in bridge edge

#### Usage:
```cypher
CALL bridges.get()
YIELD node_from, node_to;
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

  <img src={require('../../data/query-modules/cpp/bridges/bridges-1.png').default}/>

  </TabItem>


  <TabItem value="cypher">

```cypher
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);
```

  </TabItem>

  <TabItem value="run">

```cypher
CALL bridges.get() YIELD node_from, node_to
WITH node_from, node_to
MATCH (node_from)-[bridge]-(node_to)
RETURN bridge, node_from, node_to;
```

  </TabItem>


  <TabItem value="result">

```plaintext
+-----------------+-----------------+-----------------+
| bridge          | node_from       | node_to         |
+-----------------+-----------------+-----------------+
| [:RELATION]     | (:Node {id: 3}) | (:Node {id: 4}) |
| [:RELATION]     | (:Node {id: 0}) | (:Node {id: 3}) |
+-----------------+-----------------+-----------------+
```

  </TabItem>

</Tabs>
