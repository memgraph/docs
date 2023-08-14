---
id: node
title: node
sidebar_label: node
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

The `node` module provides a comprehensive toolkit for managing graph nodes, enabling creation, deletion, updating, merging, and more.

[![docs-source](https://img.shields.io/badge/source-node-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/tree/main/cpp/node_module)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight>/<Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**weighted**</Highlight>/<Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

### Procedures

### `relationship_exists(node, pattern)`

Checks if given node has a relationship of the pattern.  

#### Input:

- `node: Node` ➡ node whose relationship existance is to be verified
- `pattern: List[string] (optional)` ➡ list of relationship types for which it will be checked if at least one of them exists; if nothing is stated, procedure checks all types of relationships

:::info

If '<' is added in front of the relationship type, only relationships coming into the node will be checked (e.g., "<KNOWS"), while if '>' is added at the end of the relationship type, only relationships coming from the node will be checked (e.g., "KNOWS>").
Furthermore, if relationship type is not relevant, it is possible to enter only "<" or ">" to check ingoing or outgoing relationships.

:::

#### Output:

- `exists: bool` ➡ whether or not provided node has a relationship of specified type

#### Usage:

```cypher
MERGE (a:Person {name: "Phoebe"}) MERGE (b:Person {name: "Joey"}) CREATE (a)-[f:FRIENDS]->(b);
MATCH (a:Person {name: "Joey"}) CALL node.relationship_exists(a, ["<FRIENDS"]) 
YIELD exists RETURN exists
```

```plaintext
+----------------------------+
| exists                     |
+----------------------------+
| True                       |
+----------------------------+
```
