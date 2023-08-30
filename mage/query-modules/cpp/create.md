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

- `labels: List[string]` ➡ list of all the labels to be added to the new node.
- `properties: Map` ➡ map with key/value pairs to be added as new node's properties.

#### Output:

- `node: Node` ➡ new node which is added to the graph.

#### Usage:

```cypher
CALL create.node(["Person", "Programmer"], {name: "Ana", age: 20}) YIELD node RETURN node;
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


### `nodes(labels, properties)`

Create nodes with given labels and properties. For each property map, a separate node is created.

#### Input:

- `labels: List[string]` ➡ the list with labels of the new nodes.
- `properties: List[Map]` ➡ the list of property maps for new nodes, for each map, a separate node is created.


#### Output:

- `node: Node` ➡ created node(s).

#### Usage:

```cypher
CALL create.nodes(["Human", "Soldier"], [{branch: "Marines", MOS: "Gunner"}, {branch: "Army", MOS: "Paratrooper"}]) YIELD node RETURN node;
```

```plaintext
+---------------------------------------------------------------------------------------------------------------------+
| node                                                                                                                |
+---------------------------------------------------------------------------------------------------------------------+
| {"id": 0, "labels": ["Human", "Soldier"], "properties": {"MOS": "Gunner", "branch": "Marines"}, "type": "node}      |
+---------------------------------------------------------------------------------------------------------------------+
| {"id": 1, "labels": ["Human", "Soldier"], "properties": {"MOS": "Paratrooper", "branch": "Army"}, "type": "node"}   |
+---------------------------------------------------------------------------------------------------------------------+
```


### `set_property(nodes, key, value)`

Sets the property of the input node(s), based on the provided key-value pair. If the property doesn't exist, creates a new one. Input node(s) can be a single node, node ID, or a list of nodes and node IDs. Otherwise, an exception is thrown.

#### Input:

- `nodes: any` ➡ input node(s). Can be a node, node's ID, or a list of nodes and IDs.
- `key: string` ➡ name of the property which is about to be set.
- `value: any` ➡ new value of the property.


#### Output:

- `node: Node` ➡ node(s) with modified property.

#### Usage:

```cypher
CREATE (d:Dog),(h:Human);
MATCH (d:Dog), (h:Human)
CALL create.set_property([d,id(h)],"property", 50) YIELD node RETURN node;
```

```plaintext
+---------------------------------------------------------------------------------------------------------------------+
| node                                                                                                                |
+---------------------------------------------------------------------------------------------------------------------+
| {"id": 18, "labels": ["Dog"], "properties": {"property": 50}, "type": "node"}                                       |
+---------------------------------------------------------------------------------------------------------------------+
| {"id": 19, "labels": ["Human"], "properties": {"property": 50},"type": "node"}                                      |
+---------------------------------------------------------------------------------------------------------------------+
```

### `set_properties(input_nodes, input_keys, input_values)`

Adds the provided properties to the node(s).

#### Input:

- `input_nodes: Any` ➡ node, node's id or a list of nodes and nodes' ids.
- `input_keys: List[string]` ➡ list of all the property keys to be added to the node(s).
- `input_values: List[Any]` ➡ list of all the corresponding property values to be added to the node(s).

#### Output:

- `node: Node` ➡ node(s) with new properties.

#### Usage:

```cypher
CREATE (:Student {name: "Ana"});
CREATE (:Student {name: "Maria"});
MATCH (s:Student) CALL create.set_properties(s, ["age", "grade"], [20, "1st"]) YIELD node RETURN node;
```

```plaintext
+----------------------------+
| node                       |
+----------------------------+
| {                          |
|     "id": 1,               |
|     "labels": [            |
|        "Student"           |
|     ],                     |
|     "properties": {        |
|       name: "Ana",         |
|       age: 20,             |
|       grade: "1st"         |
|     },                     |
|     "type": "node"         |
| }                          |
+----------------------------+
| {                          |
|     "id": 2,               |
|     "labels": [            |
|        "Student"           |
|     ],                     |
|     "properties": {        |
|       name: "Maria",       |
|       age: 20,             |
|       grade: "1st"         |
|     },                     |
|     "type": "node"         |
| }                          |
+----------------------------+
```

### `remove_properties(nodes, list_keys)`

Removes all the properties of the given node(s). Input node(s) can be a single node, node ID, or a list of nodes and node IDs. Otherwise, an exception is thrown.
#### Input:

- `nodes: any` ➡ input node(s). Can be a node, node's ID, or a list of nodes and IDs.
- `list_keys: List[string]` ➡ list of properties which are to be removed.


#### Output:

- `node: Node` ➡ node(s) with removed properties.

#### Usage:

```cypher
CREATE (d:Dog {property: 30, property2: 50}),(h:Human {property: 80});
MATCH (d:Dog), (h:Human)
CALL create.remove_properties([d,id(h)],["property", "property2"]) YIELD node RETURN node;
```

```plaintext
+---------------------------------------------------------------------------------------------------------------------+
| node                                                                                                                |
+---------------------------------------------------------------------------------------------------------------------+
| {"id": 120, "labels": ["Dog"], "properties": {}, "type": "node"}                                                    |
+---------------------------------------------------------------------------------------------------------------------+
| {"id": 121, "labels": ["Human"], "properties": {}, "type": "node"}                                                  |
+---------------------------------------------------------------------------------------------------------------------+
```

### `set_rel_property(input_rel, input_key, input_value)`

Adds the provided property to the relationship(s).

#### Input:

- `input_rel: Any` ➡ relationship, relationship's id or a list of relationships and relationships' ids.
- `input_key: string` ➡ property key to be added to the relationship(s).
- `input_value: Any` ➡ corresponding property value to be added to the relationship(s).

#### Output:

- `relationship: Relationship` ➡ relationship(s) with new property.

#### Usage:

```cypher
MERGE (s1:Student) MERGE (s2:Student) CREATE (s1)-[k:KNOWS]->(s2);
MATCH (:Student)-[k:KNOWS]->(:Student) CALL create.set_rel_property(k, "since", 2020) 
YIELD relationship RETURN relationship;
```

```plaintext
+----------------------------+
| relationship               |
+----------------------------+
| {                          |
|     "id": 1,               |
|     "start": 1,            |
|     "end": 2,              |
|     "label": "KNOWS",      |
|     "properties": {        |
|       since: 2020          |
|     },                     |
|     "type": "relationship" |
| }                          |
+----------------------------+
```

### `remove_labels(labels, nodes)`

Removes the provided labels from the node(s).

#### Input:

- `nodes: Any` ➡ node, node's id or a list of nodes and nodes' ids.
- `labels: List[string]` ➡ list of labels to be removed (if exist) from the nodes(s).

#### Output:

- `nodes: Node` ➡ node(s) without provided labels.

#### Usage:

```cypher
CREATE (:Person:Student:Programmer {name: "Ana"});
MATCH (p:Person) CALL create.remove_labels(p, ["Student", "Engineer"]) YIELD nodes RETURN nodes;
```

```plaintext
+----------------------------+
| nodes                      |
+----------------------------+
| {                          |
|     "id": 1,               |
|     "labels": [            |
|        "Person",           |
|        "Programmer",       |
|     ],                     |
|     "properties": {        |
|       name: "Ana"          |
|     },                     |
|     "type": "node"         |
| }                          |
+----------------------------+
```
