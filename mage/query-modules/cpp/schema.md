---
id: schema
title: schema
sidebar_label: schema
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


The `schema` module offers procedures that allow you to interact with and retrieve information about the database schema.

[![docs-source](https://img.shields.io/badge/source-schema-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/tree/main/cpp/schema_module)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**util**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

### Procedures

### `node_type_properties()`

This procedure returns schema information about nodes and their properties in the graph. For every property in a node, a separate row is created.

#### Output:

- `labels: List[string]` ➡ a list of node labels.
- `mandatory: boolean` ➡ a boolean which is `True` if the node has properties, `False` if the node has no properties.
- `property_name: string` ➡ property name.
- `property_type: string` ➡ property type.

#### Usage:

Cypher query used to create the graph used to showcase the procedure:

```cypher
CREATE (d:Dog {name: "Rex", age: 5})-[l:LOVES {how_much: "very"}]->(h:Human:Owner {name: "Carl", age: 90});
CREATE (n:NonManadatoryNode);
```
Cypher usage of the procedure:

```cypher
CALL schema.rel_type_properties() YIELD mandatory, property_name, property_type, rel_type RETURN mandatory, property_name, property_type, rel_type;
```

```plaintext
+-------------------------------------------------------------------+
| labels                | mandatory | property_name | property_type |
+-------------------------------------------------------------------+
| ["Dog"]               | true      | age           | Int           |
+-------------------------------------------------------------------+
| ["Dog"]               | true      | name          | String        |
+-------------------------------------------------------------------+
| ["Human", "Owner"]    | true      | age           | Int           |
+-------------------------------------------------------------------+
| ["Human", "Owner"]    | true      | name          | String        |
+-------------------------------------------------------------------+
| ["NonManadatoryNode"] | false     |               |               |
+-------------------------------------------------------------------+
```


### `rel_type_properties()`

Returns schema information about relationships and their properties in the graph. For every property in a relationship, a separate row is created.

#### Output:

- `rel_type: string` ➡ relationship type.
- `mandatory: boolean` ➡ a boolean which is `True` if the node has properties, `False` if the node has no properties.
- `property_name: string` ➡ property name.
- `property_type: string` ➡ property type.

#### Usage:

Cypher query used to create the graph used to showcase the procedure:

```cypher
CREATE (d:Dog)-[r:RUNS_AND_PLAYS_IN {speed: 100, duration: "5 hours" }]->(p:Park);
CREATE (b:Bird)-[f:FLIES_TO]->(s:Sky);
```
Cypher usage of the procedure:

```cypher
CALL schema.rel_type_properties() YIELD rel_type, mandatory, property_name, property_type RETURN rel_type, mandatory, property_name, property_type;
```

```plaintext
+-------------------------------------------------------------------+
| labels                | mandatory | property_name | property_type |
+-------------------------------------------------------------------+
| RUNS_AND_PLAYS_IN     | true      | duration      | String        |
+-------------------------------------------------------------------+
| RUNS_AND_PLAYS_IN     | true      | speed         | Int           |
+-------------------------------------------------------------------+
| FLIES_TO              | false     |               |               |
+-------------------------------------------------------------------+

```
