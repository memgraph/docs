---
id: graph-util
title: graph_util
sidebar_label: graph_util
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

**Graph util** is a collection of Memgraph's utility graph algorithms. The algorithms that are included in this module
are the ones that may suit a developer's day-to-day job while prototyping new
solutions, with various graph manipulation tools to accelerate development. 

[![docs-source](https://img.shields.io/badge/source-graph_util-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/cpp/graph_util_module)

| Trait               | Value                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**module**</Highlight>                                                         |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>                                                           |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight>/<Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**unweighted**</Highlight>/<Highlight color="#FB6E00">**weighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight>                                                   |

### Procedures

<RunOnSubgraph/>

### `ancestors(node)`

Find the ancestor nodes of the input node. Ancestor nodes are all the nodes from which
there exists a path to the input node.

#### Input:

- `node: Vertex` ➡ node for which we want to find ancestors


#### Output:

- `ancestors: List[Vertex]` ➡ List of ancestors from which a path to the source node exists

#### Usage:

```cypher
MATCH (n {id:1})
CALL graph_util.ancestors(n)
YIELD ancestors
UNWIND ancestors AS ancestor
RETURN ancestor;
```

### `chain_nodes(nodes, edge_type)`

Creates a relationship between each of the neighboring nodes in the input list, `nodes`. Each of the relationships
gets the edge type from the second input parameter `edge_type`.

#### Input:

- `nodes: List[Vertex]` ➡ List of nodes between which we want to create corresponding relationships between them
- `edge_type: String` ➡ The name of the relationship that will be created between nodes.


#### Output:

- `connections: List[Edge]` ➡ List of relationships that connect the nodes. Each node is connected with the node following it in the input list, using the relationship type specified as the second input parameter.

#### Usage:

```cypher
MATCH (n)
WITH collect(n) AS nodes
CALL graph_util.chain_nodes(nodes, "MY_EDGE")
YIELD connections
RETURN nodes, connections;
```

### `connect_nodes(nodes)`

Returns a list of relationships that connect the list of inputted nodes. 
Typically used to create a subgraph from returned nodes.
#### Input:

- `nodes: List[Vertex]` ➡ List of nodes for which we want to find corresponding connections, i.e., relationships between them


#### Output:

- `connections: List[Edge]` ➡ List of relationships that connect the starting graph's input nodes

#### Usage:

```cypher
MATCH (n)
WITH collect(n) AS nodes
CALL graph_util.connect_nodes(nodes)
YIELD connections
RETURN nodes, connections;
```

### `descendants(node)`

Find the descendant nodes of the input node. Descendant nodes are all the nodes to which
there exists a path from the input node.

#### Input:

- `node: Vertex` ➡ node for which we want to find descendants


#### Output:

- `descendants: List[Vertex]` ➡ List of descendants to which a path from the source node exists

#### Usage:

```cypher
MATCH (n {id:1})
CALL graph_util.descendants(n)
YIELD descendants
UNWIND descendants AS descendant
RETURN descendant;
```

### `topological_sort()`

The topological sort algorithm takes a directed graph and returns an array of the nodes where each node appears before all the nodes it points to. The ordering of the nodes in the array is called a topological ordering.

#### Input:

- there is no input to this graph. The sort is done either on the whole graph, or a graph projection.


#### Output:

- `sorted_nodes: List[Vertex]` ➡ Node ordering in which each node appears before all nodes to which it points

#### Usage:

Usage on the whole graph:
```cypher
CALL graph_util.topological_sort() YIELD sorted_nodes
UNWIND sorted_nodes AS nodes
RETURN nodes.name;
```

Usage on a graph projection:
```cypher
MATCH p=(sl:SomeLabel)-[*bfs]->(al:AnotherLabel)
WITH project(p) AS graph
CALL graph_util.topological_sort(graph) YIELD sorted_nodes
UNWIND sorted_nodes AS nodes
RETURN nodes.name;
```

