---
id: create
title: create
sidebar_label: create
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

By enabling more precise and flexible creation of nodes and relationships within the graph structure, the `create` module enhances the ability of developers to model, manipulate, and query complex graph data.

[![docs-source](https://img.shields.io/badge/source-create-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/tree/main/cpp/create_module)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight>/<Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**weighted**</Highlight>/<Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

### Procedures

### `node(labels, properties)`

Provides a more flexible way of creating nodes than Cypher’s CREATE clause.

#### Input:

- `labels: List[string]` ➡ list of all the labels to be added to the new node
- `properties: Map` ➡ map with key/value pairs to be added as new node's properties

#### Output:

- `node: Node` ➡ new node which is added to the graph

#### Usage:

```cypher
CALL create.node(["Person", "Programmer"], {name: "Ana", age: 20}) YIELD node RETURN node
```

```plaintext
+----------------------------+
| node                       |
+----------------------------+
| {                          |
|     "id": 1,               |
|     "labels": [            |
|        "Person",           |
|        "Programmer"        |
|     ],                     |
|     "properties": {        |
|       name: "Ana",         |
|       age: 20              |
|     },                     |
|     "type": "node"         |
| }                          |
+----------------------------+
```
