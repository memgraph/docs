---
id: meta
title: meta
sidebar_label: meta
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


The **meta** module provides a set of procedures for generating metadata about the database.

[![docs-source](https://img.shields.io/badge/source-util_module-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/tree/main/cpp/meta_module)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Parallelism**     | <Highlight color="#FB6E00">**parallel**</Highlight>   |

### Procedures

### `stats_online(update_stats)`

Retrieves the graph metadata in **O(1)** complexity. Requires setting up the following trigger:

 ```cypher
 CREATE TRIGGER meta_trigger BEFORE COMMIT EXECUTE CALL meta.update(createdObjects, deletedObjects, removedVertexProperties, removedEdgeProperties, setVertexLabels, removedVertexLabels);
 ```

This procedure tracks the data created/deleted/modified after the trigger was added. If you want to return the metadata about the whole graph you need to run the *stats_online* procedure with the *update_stats* flag set to true **once**. That flag will cause the procedure to traverse the whole graph to update the metadata. After that you can always run with the *update_stats* flag set to false and the procedure will return the metadata in **O(1)** complexity.

#### Input:

- `update_stats: bool (default=false)` ➡ if true traverses the whole graph to update the metadata otherwise returns the stored metadata.

#### Output:

- `labelCount: int` ➡ number of unique labels in nodes.
- `relationshipTypeCount: int` ➡ number of unique relationship types (labels).
- `nodeCount: int` ➡ number of nodes in the graph.
- `relationshipCount: int` ➡ number of relationships in the graph.
- `labels: Map[string: int]` ➡ map with the following (key, value) pairs:
  - `label` : number_of_occurrences
- `relationshipTypes: Map[string: int]` ➡ map with the following (key, value) pairs:
  - `(:label)-[:relationship_type]->()` : number_of_occurrences
  - `()-[:relationship_type]->(:label)` : number_of_occurrences
  - `()-[:relationship_type]->()` : number_of_occurrences
- `relationshipTypesCount: Map[string: int]` ➡ map with the following (key, value) pairs:
  - `relationship_type` : number_of_occurrences
- `stats` ➡ map which contains all of the above.

#### Usage:

Running stats on the following graph:
```cypher
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:Relation1]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:Relation1]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 0}) CREATE (a)-[:Relation1]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 3}) CREATE (a)-[:Relation2]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:Relation2]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 5}) CREATE (a)-[:Relation2]->(b);
```

```cypher
CALL meta.stats_online() YIELD stats;
```

```plaintext
+-------------------------------------------------------+
|     stats                                             |
+-------------------------------------------------------+
|                                                       |
|{                                                      |
|   "labelCount": 1,                                    |
|   "labels": {                                         |
|      "Node": 6                                        |
|   },                                                  |
|   "nodeCount": 6,                                     |
|   "propertyKeyCount": 1,                              |
|   "relationshipCount": 6,                             |
|   "relationshipTypeCount": 2,                         |
|   "relationshipTypes": {                              |
|      "()-[:Relation1]->()": 3,                        |
|      "()-[:Relation1]->(:Node)": 3,                   |
|      "()-[:Relation2]->()": 3,                        |
|      "()-[:Relation2]->(:Node)": 3,                   |
|      "(:Node)-[:Relation1]->()": 3,                   |
|      "(:Node)-[:Relation2]->()": 3                    |
|   },                                                  |
|   "relationshipTypesCount": {                         |
|      "Relation1": 3,                                  |
|      "Relation2": 3                                   |
|   }                                                   |
|}                                                      |
|                                                       |
+-------------------------------------------------------+
```

### `stats_offline()`

Retrieves the graph metadata by traversing the whole graph. `stats_online` should be preferred because of the better complexity unless you don't want to use triggers.

#### Output:

- `labelCount: int` ➡ number of unique labels in nodes.
- `relationshipTypeCount: int` ➡ number of unique relationship types (labels).
- `nodeCount: int` ➡ number of nodes in the graph.
- `relationshipCount: int` ➡ number of relationships in the graph.
- `labels: Map[string: int]` ➡ map with the following (key, value) pairs:
  - `label` : number_of_occurrences
- `relationshipTypes: Map[string: int]` ➡ map with the following (key, value) pairs:
  - `(:label)-[:relationship_type]->()` : number_of_occurrences
  - `()-[:relationship_type]->(:label)` : number_of_occurrences
  - `()-[:relationship_type]->()` : number_of_occurrences
- `relationshipTypesCount: Map[string: int]` ➡ map with the following (key, value) pairs:
  - `relationship_type` : number_of_occurrences
- `stats` ➡ map which contains all of the above.

#### Usage:

Running stats on the following graph:
```cypher
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:Relation1]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:Relation1]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 0}) CREATE (a)-[:Relation1]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 3}) CREATE (a)-[:Relation2]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:Relation2]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 5}) CREATE (a)-[:Relation2]->(b);
```

```cypher
CALL meta.stats_offline() YIELD stats;
```

```plaintext
+-------------------------------------------------------+
|     stats                                             |
+-------------------------------------------------------+
|                                                       |
|{                                                      |
|   "labelCount": 1,                                    |
|   "labels": {                                         |
|      "Node": 6                                        |
|   },                                                  |
|   "nodeCount": 6,                                     |
|   "propertyKeyCount": 1,                              |
|   "relationshipCount": 6,                             |
|   "relationshipTypeCount": 2,                         |
|   "relationshipTypes": {                              |
|      "()-[:Relation1]->()": 3,                        |
|      "()-[:Relation1]->(:Node)": 3,                   |
|      "()-[:Relation2]->()": 3,                        |
|      "()-[:Relation2]->(:Node)": 3,                   |
|      "(:Node)-[:Relation1]->()": 3,                   |
|      "(:Node)-[:Relation2]->()": 3                    |
|   },                                                  |
|   "relationshipTypesCount": {                         |
|      "Relation1": 3,                                  |
|      "Relation2": 3                                   |
|   }                                                   |
|}                                                      |
|                                                       |
+-------------------------------------------------------+
```
