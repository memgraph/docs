---
id: neighbors
title: neighbors
sidebar_label: neighbors
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

The `neighbors` module provides tools for users to interact with and query nodes that have direct relationships to a specified node, enabling an examination of the immediate connections within the graph and thereby gaining insights into the network structure and connectivity.


[![docs-source](https://img.shields.io/badge/source-neighbors-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/tree/main/cpp/neighbors_module)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight>/<Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**weighted**</Highlight>/<Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

### Procedures

### `at_hop(node, rel_type, distance)`

Returns nodes that are at a specific distance from a given node, considering only the relationships of a specified type.

#### Input:

- `node: Node` ➡ node whose neighborhood is being analyzed
- `rel_type: List[string]` ➡ list of relationship types to travel through; if empty, it is possible to travel through all types of relationships
- `distance: int` ➡ number of hops between nodes

:::info

If '<' is added in front of the relationship type, only relationships coming into the node will be checked (e.g., "<KNOWS"), while if '>' is added at the end of the relationship type, only relationships coming from the node will be checked (e.g., "KNOWS>"). Furthermore, if the relationship type is not relevant, it is possible to enter only "<" or ">" to check ingoing or outgoing relationships.

:::

#### Output:

- `nodes: Node` ➡ nodes at a specific distance from a given node

#### Usage:

```cypher
MERGE (a:Rachel) MERGE (b:Monica) CREATE (a)-[f:FRIENDS]->(b);
MERGE (a:Monica) MERGE (b:Ross) CREATE (a)-[f:FRIENDS]->(b);
MERGE (a:Monica) MERGE (b:Chandler) CREATE (a)-[f:FRIENDS]->(b);
MERGE (a:Chandler) MERGE (b:Joey) CREATE (a)-[f:FRIENDS]->(b);
MERGE (a:Monica) MERGE (b:Phoebe) CREATE (a)-[f:FRIENDS]->(b);
MATCH (a:Joey) CALL neighbors.at_hop(a, ["FRIENDS"], 3) YIELD nodes RETURN nodes;
```

```plaintext
+----------------------------+
| removed                    |
+----------------------------+
| {"d": "ba"}                |
+----------------------------+
```


### `by_hop(node, rel_type, distance)`

Returns nodes that are at every distance (up to a specified number) from a given node, considering only the relationships of a specified type.

#### Input:

- `node: Node` ➡ node whose neighborhood is being analyzed
- `rel_type: List[string]` ➡ list of relationship types to travel through; if empty, it is possible to travel through all types of relationships
- `distance: int` ➡ maximum number of hops between nodes

:::info

If '<' is added in front of the relationship type, only relationships coming into the node will be checked (e.g., "<KNOWS"), while if '>' is added at the end of the relationship type, only relationships coming from the node will be checked (e.g., "KNOWS>"). Furthermore, if the relationship type is not relevant, it is possible to enter only "<" or ">" to check ingoing or outgoing relationships.

:::

#### Output:

- `nodes: List[Node]` ➡ list of nodes at a specific distance from a given node, starting from distance 1 up to a provided distance
