---
id: refactor
title: refactor
sidebar_label: refactor
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

The `refactor` module provides utilities for changing nodes and relationships.

[![docs-source](https://img.shields.io/badge/source-text-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/tree/main/cpp/refactor_module)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

### Procedures

### `from(relationship, new_from)`

Redirect the relationship to use a new start (from) node. 

#### Input:

- `relationship: Relationship` ➡ the relationship to be modified.
- `new_from: Node` ➡ new start (from) node.

#### Usage:

```cypher
MERGE (ivan:Person {name: "Ivan"}) MERGE (matija:Person {name: "Matija"}) MERGE (diora:Person {name:"Idora"}) CREATE (ivan)-[:Friends]->(matija);
```
The following query changes the the relationship `Ivan ➡ Matija` to `Idora ➡ Matija`.
```cypher
MATCH (:Person {name: "Ivan"})-[rel:Friends]->(:Person {name: "Matija"}) MATCH (idora: Person {name:"Idora"}) CALL refactor.from(rel, idora);
```

### `to(relationship, new_to)`

Redirect the relationship to use a new end (to) node. 

#### Input:

- `relationship: Relationship` ➡ the relationship to be modified.
- `new_to: Node` ➡ new end (to) node.

#### Usage:

```cypher
MERGE (ivan:Person {name: "Ivan"}) MERGE (matija:Person {name: "Matija"}) MERGE (diora:Person {name:"Idora"}) CREATE (ivan)-[:Friends]->(matija);
```
The following query changes the the relationship `Ivan ➡ Matija` to `Ivan ➡ Idora`.
```cypher
MATCH (:Person {name: "Ivan"})-[rel:Friends]->(:Person {name: "Matija"}) MATCH (idora: Person {name:"Idora"}) CALL refactor.to(rel, idora);
```

### `rename_label(old_label, new_label, nodes)`

Rename a label from `old_label` to `new_label` for all nodes. If `nodes` is provided renaming is applied only to the given nodes. If a node doesn't contain the `old_label` the procedure doesn't modify it.

#### Input:

- `old_label: str` ➡ old label name.
- `new_label: str` ➡ new label name.
- `nodes: List[Node]` ➡ list of nodes to be modified.

### Output:

- `nodes_changed: int` ➡ number of modified nodes.

#### Usage:

```cypher
CREATE (:Node1 {title: "Node1"}) CREATE (:Node2 {title: "Node2"}) CREATE (:Node1);
```
The following query changes the label of the first node to `Node`
```cypher
MATCH(n) WHERE n.title = 'name' WITH collect(n) AS nodes CALL refactor.rename_label("Node1", "Node3", nodes) YIELD nodes_changed RETURN nodes_changed;
```
```plaintext
+----------------------------+
| nodes_changed              |
+----------------------------+
|    1                       |
+----------------------------+
```

### `rename_node_property(old_property, new_property, nodes)`

Rename a property from `old_property` to `new_property` for all nodes. If `nodes` is provided renaming is applied only to the given nodes. If a node doesn't contain the `old_property` the procedure doesn't modify it.

#### Input:

- `old_property: str` ➡ old property name.
- `new_label: str` ➡ new property name.
- `nodes: List[Node]` ➡ list of nodes to be modified.

### Output:

- `nodes_changed: int` ➡ number of modified nodes.

#### Usage:

TODO