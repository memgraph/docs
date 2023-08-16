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

### `relationship(from, relationshipType, properties, to)`

Creates a new relationship with the given type and properties directed from->to.

#### Input:

- `from: Node` ➡ tail node
- `relationshipType: string` ➡ relationship type
- `properties: Map` ➡ properties of the new relationship(s)
- `to: Node` ➡ head node

#### Output:

- `relationship: Relationship` ➡ the new relationship(s)

#### Usage:

```cypher
CREATE (p:Person {name: "Cillian Murphy"});
CREATE (m:Movie {title:"Oppenheimer"});

MATCH (p:Person {name: "Cillian Murphy"}) MATCH (m:Movie {title: "Oppenheimer"}) CALL create.relationship(p, "ACTED_IN", {roles:['Oppenheimer']}, m) YIELD relationship RETURN relationship;
```

```plaintext
+-----------------------------+
| relationship                |
+-----------------------------+
| {                           |
|     "id": 0,                |
|     "start": 0              |
|     "end": 0                |
|     "label": "Acted_in"     |
|     "properties": {         |
|       roles: ["Oppenhimer"] |
|     },                      |
|     "type": "relationship"  |
| }                           |
+-----------------------------+
```

### `set_rel_properties(relationships, keys, values)`

Adds the provided properties to the given relationships and returns the modified relationships. If the property already exists it is modified.

#### Input:

- `relationships: int|Relationship|List[int|Relationship]` ➡ relationships to be modified given by their object or id
- `keys: List[string]` ➡ list of all the property keys to be added to the relationship(s)
- `values: List[Any]` ➡ list of all the corresponding property values to be added to the relationship(s)

#### Output:

- `relationship: Relationship` ➡ the modified relationship(s)

#### Usage:

```cypher
CREATE (idora:Person {name: "Idora"})
CREATE (ivan:Person {name: "Ivan"})
CREATE (ivan)-[:Friend {since:"long ago"}]->(idora);

MATCH (:Person)-[friends:Friend]->(:Person) CALL create.set_rel_properties(friends, ["really", "until"], [true, "forever"]) YIELD relationship RETURN relationship
```

```plaintext
+----------------------------+
| relationship               |
+----------------------------+
| {                          |
|     "id": 0,               |
|     "start": 1,            |
|     "end": 0,              |
|     "label": "Friend",     |
|     "properties": {        |
|       "really": true,      |
|       "since": "long ago", |
|       "until": "forever"  |
|     },                     |
|     "type": "relationship" |
| }                          |
+----------------------------+
```

### `remove_rel_properties(relationships, keys)`

Removes the provided properties from the given relationships and returns the modified relationships. If a property doesn't exist in the given relationship nothing happens with it.

#### Input:

- `relationships: int|Relationship|List[int|Relationship]` ➡ relationships to be modified
- `keys: List[string]` ➡ list of property names to be removed from the given relationships

#### Output:

- `relationship: Relationship` ➡ modified relationship(s)

#### Usage:

```cypher
CREATE (matija:Person {name: "Matija"})
CREATE (ivan:Person {name: "Ivan"})
CREATE (ivan)-[:Friend {since: 'forever and ever', until: 'forever'}]->(matija);

MATCH (:Person)-[friends:Friend]->(:Person) CALL create.remove_rel_properties(friends, ["until"]) YIELD relationship return relationship;

```

```plaintext
+------------------------------------+
| relationship                       |
+------------------------------------+
| {                                  |
|     "id": 0,                       |
|     "start: 1,                     |
|     "end": 0,                      |
|     "label": "Friend",             |
|     "properties": {                |
|       "since": "forever and ever"  |
|     },                             |
|     "type": "relationship"         |
| }                                  |
+------------------------------------+
```
