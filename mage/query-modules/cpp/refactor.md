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

### `categorize(original_prop_key, rel_type, is_outgoing, new_label, new_prop_name_key, copy_props_list)`

Generates new category nodes based on a specific property key from the existing nodes in the graph. It then creates relationships between the original nodes and the new category nodes to organize the graph based on these categories.

#### Input:

- `original_prop_key: string` ➡  the property key on the existing nodes used to determine the category.
- `rel_type: string` ➡ the type of relationship to be created between the original nodes and the new category nodes.
- `is_outgoing: bool` ➡ determines the direction of the new relationships. If 'true', relationships will be created from the original node to the category node. If 'false', they'll be created from the category node to the original node.
- `new_label: string` ➡ the label to be assigned to the new category nodes.
- `new_prop_name_key: string` ➡ the key for the new category node's property whose value will be the same as `original_prop_key` value.
- `copy_props_list: List[string] (default = [])` ➡ an array of property keys from the original nodes to be copied to the new category nodes.


#### Output:

- `status: string` ➡ "success" if no errors were generated.

#### Usage:

```cypher
CALL refactor.categorize('genre', 'GENRE', false, "Genre", "name") YIELD status RETURN status;
```

```plaintext
+----------------------------+
| status                     |
+----------------------------+
| success                    |
+----------------------------+
```


### `clone_nodes(nodes, clone_rels, skip_props)`

Clones specific nodes in the graph, preserving their original labels, properties and optionally relationships. Offers the flexibility to exclude specific node properties during the cloning process.

#### Input:

- `nodes: List[Node]` ➡  a list of nodes intended for duplication.
- `clone_rels: bool (default = false)` ➡  if set to true, the function will also clone the relationships of the original nodes, connecting them to the cloned nodes in the same manner.
- `skip_props: List[string] (default = [])` ➡  a list of property keys, properties associated with these keys will be skipped during the cloning process.


#### Output:

- `cloned_node_id: int` ➡ ID of the original node which was cloned.
- `new_node: Node` ➡ new cloned node.

#### Usage:

```cypher
MATCH (a:Person {name: "Ana", age: 22, id:0})
CALL refactor.clone_nodes([a], False, ["age", "id"]) 
YIELD cloned_node_id, new_node RETURN cloned_node_id, new_node;
```

```plaintext
+----------------------------+----------------------------+
| cloned_node_id             | new_node                   |
+----------------------------+----------------------------+
| 0                          | {                          |
|                            |     "id": 1,               |
|                            |     "labels": [            |
|                            |        "Person"            |
|                            |     ],                     |
|                            |     "properties": {        |
|                            |        name: "Ana"         |
|                            |     },                     |
|                            |     "type": "node"         |
|                            | }                          |
+----------------------------+----------------------------+
```


### `clone_subgraph(nodes, rels, config)`

Clones the subgraph by cloning the given list of nodes and relationships. If no relationships are provided, all existing relationships between the given nodes will be cloned.

#### Input:

- `nodes: List[Node]` ➡  a list of nodes which form the subgraph intended for duplication.
- `rels: List[Relationship] (default = [])` ➡  a list of relationships intended for duplication. If this list is empty or not provided, all existing relationships between the given nodes will be cloned.
- `config: Map (default = {})` ➡  configuration parameters explained below.

#### Parameters:

 | Name 	            | Type  | Default	| Description 	                                                |
 |-	                  |-	    |-	      |-	                                                            |
 | skipProperties     | List  | [ ]	    | A list of property keys. Properties associated with these keys will be skipped during the cloning process therefore new nodes will not have them.|
 | standinNodes       | List	| [ ]  	  | A list of pairs (lists with only two elements) where: 1) The first element is the original node (from the input nodes list) that you're planning to clone. 2) The second element is an existing node in the graph that will "stand in" or replace the clone of the original node in the resultant subgraph.	|


#### Output:

- `cloned_node_id: int` ➡ ID of the original node which was cloned.
- `new_node: Node` ➡ new cloned node.

#### Usage:

```cypher
MATCH (ana:Ana), (marija:Marija), (ana)-[r1:KNOWS]->(marija)
CALL refactor.clone_subgraph([ana, marija], [r2, r1], {standinNodes: [[ana, marija]]})
YIELD cloned_node_id, new_node RETURN cloned_node_id, new_node;
```

```plaintext
+----------------------------+----------------------------+
| cloned_node_id             | new_node                   |
+----------------------------+----------------------------+
| 0                          | {                          |
|                            |     "id": 1,               |
|                            |     "labels": [            |
|                            |        "Person"            |
|                            |     ],                     |
|                            |     "properties": {        |
|                            |        name: "Ana"         |
|                            |     },                     |
|                            |     "type": "node"         |
|                            | }                          |
+----------------------------+----------------------------+
```

For better understanding check the examples on the bottom of the page.


### `clone_subgraph_from_paths(paths, config)`

Clones the subgraph specified by by a specific list of paths. Path is a series of nodes connected by relationships.

#### Input:

- `paths: List[Path]` ➡  a list of paths which define the subgraph intended for duplication.
- `config: Map (default = {})` ➡  configuration parameters explained below.

#### Parameters:

 | Name 	            | Type  | Default	| Description 	                                                |
 |-	                  |-	    |-	      |-	                                                            |
 | skipProperties     | List  | [ ]	    | A list of property keys. Properties associated with these keys will be skipped during the cloning process therefore new nodes will not have them.|
 | standinNodes       | List	| [ ]  	  | A list of pairs (lists with only two elements) where: 1) The first element is the original node (from the input nodes list) that you're planning to clone. 2) The second element is an existing node in the graph that will "stand in" or replace the clone of the original node in the resultant subgraph.	|


#### Output:

- `cloned_node_id: int` ➡ ID of the original node which was cloned.
- `new_node: Node` ➡ new cloned node.

#### Usage:

```cypher
MATCH (ana:Ana), (marija:Marija)
MATCH path = (ana)-[:KNOWS*]->(marija)
CALL refactor.clone_subgraph_from_paths([path], {standinNodes:[[ana, marija]]})
YIELD cloned_node_id, new_nodeRETURN cloned_node_id, new_node;
```

```plaintext
+----------------------------+----------------------------+
| cloned_node_id             | new_node                   |
+----------------------------+----------------------------+
| 0                          | {                          |
|                            |     "id": 1,               |
|                            |     "labels": [            |
|                            |        "Person"            |
|                            |     ],                     |
|                            |     "properties": {        |
|                            |        name: "Ana"         |
|                            |     },                     |
|                            |     "type": "node"         |
|                            | }                          |
+----------------------------+----------------------------+
```

For better understanding check the examples on the bottom of the page.


## Example - refactor.categorize

<Tabs
  groupId="categorize_example"
  defaultValue="input"
  values={[
    {label: 'Step 1: Cypher load commands', value: 'load'},
    {label: 'Step 2: Input graph', value: 'input'},
    {label: 'Step 3: Running command', value: 'run'},
    {label: 'Step 4: Results', value: 'result'},
  ]
}>

<TabItem value="load">

You can create a simple graph database by running the following queries:

```cypher
CREATE (a:Movie {id: 0, name: "MovieName", genre: "Drama"})
CREATE (b:Book {id: 1, name: "BookName1", genre: "Drama", propertyToCopy: "copy me"})
CREATE (c:Book {id: 2, name: "BookName2", genre: "Romance"});
```

</TabItem>

<TabItem value="input">

The image below shows the above data as a graph:

<img src={require('../../data/query-modules/cpp/refactor/categorize1.png').default}/>
    
</TabItem>

<TabItem value="run">

```cypher
CALL refactor.categorize('genre', 'GENRE', true, "Genre", "name", ["propertyToCopy"]) 
YIELD status RETURN status;
```

</TabItem>

<TabItem value="result">

The results should be identical to the ones on graph below, except for the
`id` values that depend on the internal database `id` values:

<img src={require('../../data/query-modules/cpp/refactor/categorize2.png').default}/>

</TabItem>

</Tabs>
