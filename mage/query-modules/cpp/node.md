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

### `relationship_types(node, types)`

Returns a list of distinct relationship types of the given node contained within the given list of types. If the list of types is empty returns all distinct relationship types. Relationship types can also be directed:
- \<type - ingoing relationship
- type> - outgoing relationship
- type - either way

#### Input:

- `node: Node` ➡ the given node
- `types: List[string] (default = [])` ➡ list of relationship types to filter by

#### Output:

- `relationship_types: List[string]` ➡ list of distinct relationship types contained within the given list of types

#### Usage:

```cypher
CREATE (ivan: Intern {name: 'Ivan'})
CREATE (idora: Intern {name: 'Idora'})
CREATE (matija: Intern {name: 'Matija'})
MERGE (ivan)-[:KNOWS]->(idora)
MERGE (matija)-[:HEARS]->(idora)
MERGE (matija)-[:SEES]->(ivan);
```

```cypher
MATCH (intern:Intern) CALL node.relationship_types(intern, ["<KNOWS", "SEES>", "HEARS"]) yield relationship_types return intern.name as name, relationship_types;
```

```plaintext
+--------------------------------+
| name      relationship_types   |
+--------------------------------+
| Ivan      []                   |
+--------------------------------+
| Idora     ["HEARS", "KNOWS"]   |
+--------------------------------+
| Matija    ["SEES", "HEARS"]    |
+--------------------------------+
```