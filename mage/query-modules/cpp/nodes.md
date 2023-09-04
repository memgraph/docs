---
id: nodes
title: nodes
sidebar_label: nodes
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

The `nodes` module provides a comprehensive toolkit for managing multiple graph nodes, enabling linking, updating, type deduction and more.

[![docs-source](https://img.shields.io/badge/source-nodes-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/tree/main/cpp/nodes_module)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight>/<Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**weighted**</Highlight>/<Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

### Procedures

### `relationship_types(nodes, types)`

Returns a list of distinct relationship types of the given node(s) contained within the given list of types. If the list of types is empty returns all distinct relationship types. Relationship types can also be directed:
- &lt;type - incoming relationship.
- type> - outgoing relationship.
- type - either way.

#### Input:

- `node: int|node|List[int|node]` ➡ input nodes given as nodes themselves or their IDs.
- `types: List[string] (default = [])` ➡ list of relationship types to filter by.

#### Output:

- `relationship_types: List[Map]` ➡ Each list element is a map with two keys: `node` and `types`. `node` representing the given node and `types` a list of distinct relationship types contained within the given list of types for the corresponding node.

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
MATCH (n:Intern) WITH collect(n) as interns CALL nodes.relationship_types(interns, ["<KNOWS", "SEES>", "HEARS"]) YIELD relationship_types RETURN relationship_types;
```

```plaintext
+---------------------------------------+
|   relationship_types                  |
| [                                     |
|     {                                 |
|       "node": {                       |
|          "labels": [                  |
|             "Intern"                  |
|          ],                           |
|          "properties": {              |
|             "name": "Ivan"            |
|          },                           |
|          "type": "node"               |
|       },                              |
|       "types": []                     |
|     },                                |
|     {                                 |
|        "node": {                      |
|           "labels": [                 |
|              "Intern"                 |
|          ],                           |
|           "properties": {             |
|              "name": "Idora"          |
|           },                          |
|           "type": "node"              |
|        },                             |
|       "types": [                      |
|          "HEARS",                     |
|          "KNOWS"                      |
|       ]                               |
|    },                                 |
|    {                                  |
|        "node": {                      |
|           "labels": [                 |
|             "Intern"                  |
|          ],                           |
|          "properties": {              |
|             "name": "Matija"          |
|          },                           |
|          "type": "node"               |
|        },                             |
|        "types": [                     |
|          "SEES",                      |
|          "HEARS"                      |
|       ]                               |
|    }                                  |
| ]                                     |
+---------------------------------------+
```

### `delete(nodes)`

Deletes the given node(s) from the graph. Equivalent to doing detach delete.

### Input:

- `nodes: int|node|List[int|node]` - nodes to be deleted given as nodes themselves or their IDs.

### Usage:

```cypher
CREATE (ivan: Intern {name: 'Ivan'})
CREATE (idora: Intern {name: 'Idora'})
CREATE (matija: Intern {name: 'Matija'})
MERGE (ivan)-[:KNOWS]->(idora)
MERGE (matija)-[:HEARS]->(idora)
MERGE (matija)-[:SEES]->(ivan);
```

The following query will delete all the created nodes and relationships:
```cypher
MATCH (n:Intern) WITH collect(n) as interns CALL nodes.delete(interns);
```

### `relationships_exist(nodes, relationships)`

Checks if relationships in the input list exist at the given nodes. Results are returned as a map, which contains two smaller maps. The first map represents the node, and the second map represents the relationship status map of the node. Relationships can be directed, and the syntax for direction specification is provided below:
- &lt;type - incoming relationship.
- type> - outgoing relationship.
- type - both incoming and outgoing.
- anything else results in an exception.

#### Input:

- `nodes: List[Any]` ➡ list of input nodes. Elements of the list can be either nodes themselves or their IDs.
- `relationships: List[string]` ➡ list of relationships to be checked.

#### Output:

- `result: Map` ➡ result map, containing two smaller maps. The first map represents the node, and the second represents the status of relationships checked in the function. Example of the map: `{"Node": {"id": 0, "labels": ["Dog"], "properties": {},"type": "node"}, "Relationships_exist_status": {"RUNS": false}}`

#### Usage:

```cypher
CREATE (d:Dog)-[l:LOVES]->(h:Human)-[t:TAKES_CARE_OF]->(d);
```

```cypher
MATCH (d:Dog), (h:Human) CALL nodes.relationships_exist([d,id(h)], ["<LOVES","FOLLOWS"]) YIELD result RETURN result;
```

```plaintext
+-----------------------------------------------------------------------------------------------------------------------------------------+
| result                                                                                                                                  |
+-----------------------------------------------------------------------------------------------------------------------------------------+
| {"Node": {"id": 0,"labels": ["Dog"],"properties": {},"type": "node"},"Relationships_exist_status": {"<LOVES": false,"FOLLOWS": false}}  |               
+-----------------------------------------------------------------------------------------------------------------------------------------+
| {"Node": {"id": 1,"labels": ["Human"],"properties": {},"type": "node"},"Relationships_exist_status": {"<LOVES": true,"FOLLOWS": false}} |
+-----------------------------------------------------------------------------------------------------------------------------------------+
```


### `link(nodes, type)`

Links the provided nodes sequentially with the relationship type provided in the input, essentially creating a linked list of nodes.

#### Input:

- `nodes: List[Node]` ➡ list of input nodes which are to be linked.
- `type: string` ➡ type of relationship which will be used in linking.

#### Usage:

<Tabs
groupId="example"
defaultValue="visualization"
values={[
{label: 'Step 1: Input graph without linking', value: 'visualization'},
{label: 'Step 2: Cypher example', value: 'cypher'},
{label: 'Step 3: Resulting graph', value: 'result'},
]
}>
<TabItem value="visualization">

<img src={require('../../data/query-modules/cpp/nodes/graph_before.png').default}/>

  </TabItem>

  <TabItem value="cypher">

```cypher
MATCH (h:Human), (c:Cat), (m:Mouse), (e:Elephant) CALL nodes.link([e, m, c, h, e],"IS_AFRAID_OF");
```

  </TabItem>

 <TabItem value="result">

<img src={require('../../data/query-modules/cpp/nodes/graph_after.png').default}/>

  </TabItem>

</Tabs>


