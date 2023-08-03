---
id: igraphalg
title: igraphalg
sidebar_label: igraphalg
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

The  **igraphalg** module provides a comprehensive set of thin wrappers around some of the algorithms present in the [igraph](https://igraph.org/) package. The wrapper functions can create an igraph compatible graph-like object that can stream the native database graph directly, significantly lowering memory usage.

[![docs-source](https://img.shields.io/badge/source-igraphalg-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/igraphalg.py)

| Trait               | Value                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**module**</Highlight>                                                         |
| **Implementation**  | <Highlight color="#FB6E00">**Python**</Highlight>                                                         |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight>/<Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**weighted**</Highlight>/<Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight>                                                     |

:::tip

If you are not satisfied with the performance of algorithms from the igraphalg
module, check Memgraph's native implementation of algorithms such as PageRank,
shortest path, and others written in C++

:::

## Procedures

<RunOnSubgraph/>

### `get_all_simple_paths(v, to, cutoff)`

Returns all simple paths in the graph `G` from source to target. A simple path is a path with no repeated nodes.

#### Input:

* `v: Vertex` ➡ Path's starting node.
* `to: Vertex` ➡ Path's ending node.
* `cutoff: int (default=-1)` ➡ Maximum length of the considered path. If negative, paths of all lengths are considered.

#### Output:

* `path: List[Vertex]` ➡ List of vertices for a certain path. If there are no paths between the source and the target within the given cutoff, there is no output.

#### Usage:
```cypher
MATCH (n:Label), (m:Label)
CALL igraphalg.get_all_simple_paths(n, m, 5) YIELD *
RETURN path;
```

### `spanning_tree(weights, directed)`
Returns a minimum spanning tree on a graph `G`.
 A *minimum spanning tree* is a subset of the edges of a connected graph that connects all of the vertices without any cycles.

#### Input:

* `weights: string (default=NULL)` ➡ Data key to use for edge weights.
* `directed: bool (default=False)` ➡ If `true` the graph is directed, otherwise it's undirected.

#### Output:

* `tree: List[List[Vertex]]` ➡ A minimum spanning tree or forest.

#### Usage:

```cypher
CALL igraphalg.spanning_tree() 
YIELD *
RETURN tree;
```

### `pagerank(damping, weights, directed,implementation)`
Returns the PageRank of the nodes in the graph.

PageRank computes a ranking of the nodes in graph G based on the structure of the incoming links. It was originally designed as an algorithm to rank web pages.

#### Input:

* `damping: double (default=0.85)` ➡ Damping parameter for PageRank.
* `weights: string (default="weight")` ➡ Edge data key to use as a weight. If `None`, weights are set to 1.
* `directed: bool (default=True)` ➡ If `true` the graph is directed, otherwise it's undirected.
* `implementation: string (default="prpack")` ➡ Algorithm used for calculating PageRank values. The algorithm can be either `prpack` or `arpack`.

#### Output:

* `node: Vertex` ➡ Vertex for which the PageRank is calculated.
* `rank: double` ➡ Node's PageRank value.

#### Usage:

```cypher
CALL igraphalg.pagerank() YIELD *
RETURN node, rank;
```

### `get_shortest_path(source, target, weights, directed)`
Compute the shortest path in the graph.

#### Input:

* `source: Vertex (default=NULL)` ➡ Path's starting node.
* `target: Vertex (default=NULL)` ➡ Path's ending node. 
* `weights: string (default=NULL)` ➡ If `None`, every edge has weight/distance/cost 1. If the value is a property name, use that property as the edge weight. If an edge doesn't have a property, the value defaults to 1.
* `directed: bool (default=True)` ➡ If `true`, the graph is directed, otherwise, it's undirected.


#### Output:
* `path: List[Vertex]` ➡  Path between `source` node and `target` node.

#### Usage:
```cypher
MATCH (n:Label), (m:Label)
CALL igraphalg.get_shortest_path(n, m) YIELD *
RETURN path;
```

### `shortest_path_length(source, target, weights, directed)`
Compute the shortest path length in the graph.

#### Input:

* `source: Vertex (default=NULL)` ➡ Path's starting node.
* `target: Vertex (default=NULL)` ➡ Path's ending node. 
* `weights: string (default=NULL)` ➡ If `None`, every edge has weight/distance/cost 1. If the value is a property name, use that property as the edge weight. If an edge doesn't have a property, the value defaults to 1.
* `directed: bool (default=True)` ➡ If `true`, the graph is directed, otherwise, it's undirected.

#### Output:

* `length: double` ➡ Shortest path length between the `source` node and `target` node. If there is no path it returns `inf`.

#### Usage:

```cypher
MATCH (n:Label), (m:Label)
CALL igraphalg.shortest_path_length(n, m) YIELD length
RETURN length;
```

### `topological_sort(mode)`
Returns nodes in topologically sorted order.
 A *topological sort* is a non-unique permutation of the nodes such that an edge from `u` to `v` implies that `u` appears before `v` in the topological sort order.

#### Input:

* `mode: string (default="out")` ➡ Specifies how to use the direction of the edges. For `out`, the sorting order ensures that each node comes before all nodes to which it has edges, so nodes with no incoming edges go first. For `in`, it is quite the opposite: each node comes before all nodes from which it receives edges. Nodes with no outgoing edges go first.

#### Output:

* `nodes: List[Vertex]` ➡ A list of nodes in topological sorted order.

#### Usage:

```cypher
CALL igraphalg.topological_sort() YIELD *
RETURN nodes;
```

### `maxflow(source, target, capacity)`
The maximum flow problem consists of finding a flow through a graph such that it is the maximum possible flow.

#### Input:

* `source: Vertex` ➡ Source node from which the maximum flow is calculated.
* `target: Vertex` ➡ Sink node to which the max flow is calculated.
* `capacity: string (default="weight")` ➡ Edge property which is used as the flow capacity of the edge.

#### Output:

* `max_flow: Number` ➡ Maximum flow of the network, from source to sink

#### Usage:

```cypher
MATCH (source {id: 0}), (sink {id: 5})
CALL igraphalg.maxflow(source, sink, "weight")
YIELD max_flow
RETURN max_flow;
```

### `mincut(source, target, capacity,directed)`
Minimum cut calculates the minimum st-cut between two vertices in a graph.

#### Input:

* `source: Vertex` ➡ Source node from which the maximum flow is calculated.
* `target: Vertex` ➡ Sink node to which the max flow is calculated.
* `capacity: string (default="weight")` ➡ Edge property which is used as the capacity of the edge.

#### Output:

* `node: Vertex` ➡ Vertex in graph.
* `partition_id: int` ➡ Id of the partition where `node` belongs after min-cut.

#### Usage:

```cypher
  MATCH (source {id: 0}), (sink {id: 5})
  CALL igraphalg.mincut(source, sink)
  YIELD node, partition_id 
  RETURN node, partition_id;
```

### `community_leiden(objective_function, weights, resolution_parameter, beta, initial_membership, n_iterations, node_weights)`
Finding community structure of a graph using the Leiden algorithm of Traag, van Eck & Waltman.

#### Input:

* `objective_function: string (default="CPM")` ➡ Whether to use the Constant Potts Model (CPM) or modularity. Must be either `CPM` or `modularity`.
* `weights: string (default=NULL)` ➡ If a string is present, use this edge attribute as the edge weight if it isn't edge weights default to 1.
* `resolution_parameter: float (default=1.0)` ➡ Higher resolutions lead to smaller communities, while lower resolutions lead to fewer larger communities.
* `beta: float (default=0.01)` ➡ Parameter affecting the randomness in the Leiden algorithm. This affects only the refinement step of the algorithm.
* `initial_membership: List[int](default=NULL)` ➡  If provided, the Leiden algorithm will try to improve this provided membership. If no argument is provided, the algorithm simply starts from the singleton partition.
* `n_iterations: int (default=2)` ➡ The number of iterations to iterate the Leiden algorithm. Each iteration may improve the partition further.
`vertex_weights: List[float] (default=NULL)` ➡ The vertex weights used in the Leiden algorithm. If this is not provided, it will be automatically determined based on the objective_function.

#### Output:

* `node: Vertex` ➡ Vertex in graph.
* `community_id: int` ➡ Id of community where `node` belongs.

#### Usage:

```cypher
    CALL igraphalg.community_leiden() 
    YIELD node, community_id
    RETURN node, community_id;
```

### `all_shortest_path_lengths( weights, directed)`
Compute all shortest path lengths in the graph.

#### Input:

* `weights: string (default=NULL)` ➡ If `None`, every edge has weight/distance/cost 1. If the value is a property name, use that property as the edge weight. If an edge doesn't have a property, the value defaults to 1.
* `directed: bool (default=True)` ➡ If `true`, the graph is directed, otherwise, it's undirected.

#### Output:

* `src_node: Vertex` ➡ `Source` node.
* `dest_node: Vertex` ➡ `Destination` node.
* `length: double` ➡ If `true`, the graph is directed, otherwise, it's undirected.

#### Usage:

```cypher
CALL igraphalg.all_shortest_path_length()
  YIELD src_node, dest_node, length
  RETURN src_node, dest_node, length;
```
