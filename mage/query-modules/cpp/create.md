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




