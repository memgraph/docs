---
id: uuid-generator
title: uuid_generator
sidebar_label: uuid_generator
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

This module is used to generate string UUIDs which can be stored as properties
on nodes or edges. The underlying implementation makes use of the `uuid-dev`
library. When using the `uuid` module on Linux systems, the library can be
installed by running `sudo apt-get install uuid-dev`.

[![docs-source](https://img.shields.io/badge/source-uuid-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/cpp/uuid_module/uuid_module.cpp)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**util**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

## Procedures

<RunOnSubgraph/>

### `get()`

#### Output:

* `uuid` ➡ Returns a UUID string.


#### Usage:
```cypher
MATCH (n)
CALL uuid_generator.get() YIELD uuid
SET n.uuid = uuid
RETURN n.uuid AS node_uuid;
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

  <img src={require('../../data/query-modules/cpp/uuid-generator/uuid-generator-1.png').default} height="300px"/>

  </TabItem>


  <TabItem value="cypher">

```cypher
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);
```

  </TabItem>

  <TabItem value="run">

```cypher
MATCH (n)
CALL uuid_generator.get() YIELD uuid
SET n.uuid = uuid
RETURN n.uuid AS node_uuid;
```

  </TabItem>


  <TabItem value="result">

```plaintext
+----------------------------------------+
| node_uuid                              |
+----------------------------------------+
| "ef4722b2-628b-4f93-8667-fc91134ed980" |
| "601faade-8c61-4dc3-a68a-693fed4ad40c" |
| "dc4283b8-90d6-402e-8fc0-f37f9959b593" |
+----------------------------------------+
```

  </TabItem>

</Tabs>
