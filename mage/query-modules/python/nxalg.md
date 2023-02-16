---
id: nxalg
title: nxalg
sidebar_label: nxalg
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

This module, named **nxalg**, provides a comprehensive set of thin wrappers around most of the algorithms present in the [NetworkX](https://networkx.org/) package. The wrapper functions now have the capability to create a NetworkX compatible graph-like object that can stream the native database graph directly saving on memory usage significantly.

[![docs-source](https://img.shields.io/badge/source-nxalg-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/nxalg.py)

| Trait               | Value                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**module**</Highlight>                                                         |
| **Implementation**  | <Highlight color="#FB6E00">**Python**</Highlight>                                                         |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight>/<Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**weighted**</Highlight>/<Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight>                                                     |

:::tip

If you are not satisfied with the performance of algorithms from the nxalg
module, check Memgraph's native implementation of algorithms such as PageRank,
betweenness centrality, and others written in C++

:::

## Procedures

<RunOnSubgraph/>

### `all_shortest_paths(source, target, weight, method)`

Compute all shortest simple paths in the graph. A simple path is a path with no repeated nodes.

#### Input:

* `source: Vertex` ➡ Starting node for the path.
* `target: Vertex` ➡ Ending node for the path.
* `weight: string (default=NULL)` ➡ If `NULL`, every edge has weight/distance/cost 1. If a string, use this edge attribute as the edge weight. Any edge attribute not present defaults to 1.
* `method: string (default="dijkstra")` ➡ The algorithm to use to compute the path lengths. Supported options: ‘dijkstra’, ‘bellman-ford’. Other inputs produce a ValueError. If `weight` is `None`, unweighted graph methods are used, and this suggestion is ignored.

#### Output:

* `paths: List[Vertex]` ➡ List of vertices for a certain path.

#### Usage:
```cypher
MATCH (n:Label), (m:Label)
CALL nxalg.all_shortest_paths(n, m) YIELD *
RETURN paths;
```

### `all_simple_paths(source, target, cutoff)`

Returns all simple paths in the graph `G` from source to target. A simple path is a path with no repeated nodes.

#### Input:

* `source: Vertex` ➡ Starting node for the path.
* `target: Vertex` ➡ Ending node for the path.
* `cutoff: List[integer] (default=NULL)` ➡ Depth to stop the search. Only paths of `length <= cutoff` are returned.

#### Output:

* `paths: List[Vertex]` ➡ List of vertices for a certain path. If there are no paths between the source and target within the given cutoff there is no output.

#### Usage:
```cypher
MATCH (n:Label), (m:Label)
CALL nxalg.all_simple_paths(n, m, 5) YIELD *
RETURN paths;
```

### `ancestors(source)`

Returns all nodes having a path to `source` in `G`.

#### Input:

* `source: Vertex` ➡ Starting node. Calculates all nodes that have a path to `source`

#### Output:

* `ancestors: List[Vertex]` ➡ List of vertices that have a path toward source node

#### Usage:
```cypher
MATCH (n:Label)
CALL nxalg.ancestors(n) YIELD *
RETURN ancestors;
```

### `betweenness_centrality(k, normalized, weight, endpoints, seed)`

Compute the shortest-path betweenness centrality for nodes. *Betweenness centrality* is a measure of centrality in a graph based on shortest paths. Centrality identifies the most important nodes within a graph.

#### Input:

* `k: string (default=NULL)` ➡ If `k` is not `None`, use `k` node samples to estimate betweenness. The value of `k <= n` where `n` is the number of nodes in the graph. Higher values give a better approximation.
* `normalized: boolean (default=True)` ➡  If `True` the betweenness values are normalized by `2/((n-1)(n-2))` for graphs, and `1/((n-1)(n-2))` for directed graphs where `n` is the number of nodes in `G`.
* `weight: string (default=NULL)` ➡  If `None`, all edge weights are considered equal. Otherwise holds the name of the edge attribute used as weight.
* `endpoints: boolean (default=False)` ➡  If `True`, includes the endpoints in the shortest path counts.
* `seed: integer (default=NULL)` ➡  Indicator of random number generation state. Note that this is only used if `k` is not `None`.

#### Output:

* `node: Vertex` ➡ Graph vertex for betweenness calculation
* `betweenness: double` ➡ Value of betweenness for a given node

#### Usage:
```cypher
CALL nxalg.betweenness_centrality(20, True) YIELD *
RETURN node, betweenness;
```

### `bfs_edges(source, reverse, depth_limit)`

Iterate over edges in a breadth-first-search starting at source.

#### Input:

* `source: Vertex` ➡  Specify starting node for breadth-first search; this function iterates over only those edges in the component reachable from this node.
* `reverse: boolean (default=False)` ➡   If `True`, traverse a directed graph in the reverse direction.
* `depth_limit: integer (default=NULL)` ➡  Specify the maximum search depth.

#### Output:

* `edges: List[Edge]` ➡ List of edges in the breadth-first search.

#### Usage:
```cypher
MATCH (n:Label)
CALL nxalg.bfs_edges(n, False) YIELD *
RETURN edges;
```


### `bfs_predecessors(source, depth_limit)`

Returns an iterator of predecessors in breadth-first-search from source.
#### Input:

* `source: Vertex` ➡  Specify starting node for breadth-first search.
* `depth_limit: integer (default=NULL)` ➡  Specify the maximum search depth.

#### Output:

* `node: Vertex` ➡ Node in a graph
* `predecessors: List[Vertex]` ➡ List of predecessors of given node

#### Usage:
```cypher
MATCH (n:Label)
CALL nxalg.bfs_predecessors(n, 10) YIELD *
RETURN node, predecessors;
```

### `bfs_successors(source, depth_limit)`

Returns an iterator of successors in breadth-first-search from source.

#### Input:

* `source: Vertex` ➡  Specify starting node for breadth-first search.
* `depth_limit: integer (default=NULL)` ➡  Specify the maximum search depth.

#### Output:

* `node: Vertex` ➡ Node in a graph
* `successors: List[Vertex]` ➡ List of successors of given node

#### Usage:
```cypher
MATCH (n:Label)
CALL nxalg.bfs_successors(n, 5) YIELD *
RETURN node, successors;
```

### `bfs_tree(source, reverse, depth_limit)`
Returns an oriented tree constructed from of a breadth-first-search starting at `source`.


#### Input:

* `source: Vertex` ➡  Specify starting node for breadth-first search.
* `reversed: boolean (default=False)` ➡  If `True`, traverse a directed graph in the reverse direction.
* `depth_limit: integer (default=NULL)` ➡  Specify the maximum search depth.

#### Output:

* `tree: List[Vertex]` ➡ An oriented tree in a list format.

#### Usage:
```cypher
MATCH (n:Label)
CALL nxalg.bfs_tree(n, True, 3) YIELD *
RETURN n, tree;
```


### `biconnected_components()`

Returns a list of sets of nodes, one set for each biconnected
component of the graph

*Biconnected components* are maximal subgraphs such that the removal of a
node (and all edges incident on that node) will not disconnect the
subgraph. Note that nodes may be part of more than one biconnected
component.  Those nodes are articulation points or cut vertices.  The
removal of articulation points will increase the number of connected
components of the graph.

Notice that by convention a dyad is considered a biconnected component.

#### Output:

* `components: List[List[Vertex]]` ➡ A list of sets of nodes, one set for each biconnected component.

#### Usage:
```cypher
CALL nxalg.biconnected_components() YIELD *
RETURN components;
```


### `bridges(root)`

Returns all bridges in a graph.

A *bridge* in a graph is an edge whose removal causes the number of
connected components of the graph to increase.  Equivalently, a bridge is an
edge that does not belong to any cycle.

#### Input:

* `root: Vertex (default=NULL)` ➡   A node in the graph `G`. If specified, only the bridges in the connected components containing this node will be returned.

#### Output:

* `bridges: List[Edge]` ➡  A list of edges in the graph whose removal disconnects the graph (or causes the number of connected components to increase).

#### Usage:
```cypher
CALL nxalg.bridges() YIELD *
RETURN bridges;
```

### `center()`

Returns the center of the graph `G`.

The *center* is the set of nodes with eccentricity equal to the radius.

#### Output:

* `center: List[Vertex]` ➡ List of nodes in center.

#### Usage:
```cypher
CALL nxalg.center() YIELD *
RETURN center;
```

### `chain_decomposition(root)`

Returns the chain decomposition of a graph.

The *chain decomposition* of a graph with respect to a depth-first
search tree is a set of cycles or paths derived from the set of
fundamental cycles of the tree in the following manner. Consider
each fundamental cycle with respect to the given tree, represented
as a list of edges beginning with the non tree edge oriented away
from the root of the tree. For each fundamental cycle, if it
overlaps with any previous fundamental cycle, just take the initial
non-overlapping segment, which is a path instead of a cycle. Each
cycle or path is called a *chain*.

#### Input:

* `root: Vertex[NULL]` ➡   Optional. A node in the graph `G`. If specified, only the chain decomposition for the connected component containing this node will be returned. This node indicates the root of the depth-first Search tree.

#### Output:

* `chains: List[List[Edge]]` ➡ A list of edges representing a chain. There is no guarantee on the orientation of the edges in each chain (for example, if a chain includes the edge joining nodes 1 and 2, the chain may include either (1, 2) or (2, 1)).

#### Usage:
```cypher
MATCH (n:Label)
CALL nxalg.chain_decomposition(n) YIELD *
RETURN chains;
```
### `check_planarity()`

Check if a graph is planar.

A graph is planar if it can be drawn in a plane without
any edge intersections.

#### Output:

* `is_planar: boolean` ➡ `True` if the graph is planar.

#### Usage:
```cypher
CALL nxalg.check_planarity() YIELD *
RETURN is_planar;
```
### `clustering(nodes, weight)`
Compute the clustering coefficient for nodes.

A *clustering coefficient* is a measure of the degree to which nodes
in a graph tend to cluster together.


#### Input:

* `nodes: List[Vertex] (default=NULL)` ➡  Compute clustering for nodes in this container.
* `weight: string (default=NULL)` ➡  The edge attribute that holds the numerical value used as a weight. If `None`, then each edge has weight 1.

#### Output:

* `node: Vertex` ➡ Node in graph for calculation of clustering
* `clustering: double` ➡ Clustering coefficient at specified nodes.

#### Usage:
```cypher
MATCH (n:SpecificLabel)
WITH COLLECT(n) AS cluster_nodes
CALL nxalg.clustering(cluster_nodes) YIELD *
RETURN node, clustering;
```
### `communicability()`

Returns communicability between all pairs of nodes in `G`.

The *communicability* between pairs of nodes in `G` is the sum of
closed walks of different lengths starting at node `u` and ending at node `v`.

#### Output:

* `node1: Vertex` ➡ First value in communicability calculation
* `node2: Vertex` ➡ Second value in communicability calculation
* `communicability: double` ➡ Value of communicability between two values.

#### Usage:
```cypher
CALL nxalg.communicability() YIELD *
RETURN node1, node2, communicability
ORDER BY communicability DESC;
```
### `core_number()`
Returns the core number for each vertex.

A *k-core* is a maximal subgraph that contains nodes of degree `k` or more.

The core number of a node is the largest value `k` of a k-core containing
that node.


#### Output:

* `node: Vertex` ➡ Node to calculate k-core for
* `core: integer` ➡ Largest value `k` of a k-core

#### Usage:
```cypher
CALL nxalg.core_number() YIELD *
RETURN node, core
ORDER BY core DESC;
```
### `degree_assortativity_coefficient(x, y, weight, nodes)`
Compute degree assortativity of a graph.

*Assortativity* measures the similarity of connections
in the graph with respect to the node degree.


#### Input:

* `x: string (default="out")` ➡  The degree type for source node (directed graphs only). Can be "in" or "out".
* `y: string (default="in")` ➡  The degree type for target node (directed graphs only). Can be "in" or "out".
* `weight: string (default=NULL)` ➡  The edge attribute that holds the numerical value used as a weight.  If `None`, then each edge has weight 1. The degree is the sum of the edge weights adjacent to the node.
* `nodes: List[Vertex] (default=NULL)` ➡  Compute degree assortativity only for nodes in a container. The default is all nodes.

#### Output:

* `assortativity: double` ➡ Assortativity of graph by degree.

#### Usage:
```cypher
CALL nxalg.degree_assortativity_coefficient('out', 'in') YIELD *
RETURN assortativity;
```
### `descendants(source)`

Returns all nodes reachable from `source` in `G`.


#### Input:

* `source: Vertex` ➡  A node in `G`.

#### Output:

* `descendants: List[Vertex]` ➡ The descendants of `source` in `G`.

#### Usage:
```cypher
MATCH (source:Label)
CALL nxalg.descendants(source) YIELD *
RETURN descendants;
```
### `dfs_postorder_nodes(source, depth_limit)`

Returns nodes in a depth-first-search post-ordering starting at source.

#### Input:

* `source: Vertex` ➡  Specify the maximum search depth.
* `depth_limit: integer (default=NULL)` ➡  Specify the maximum search depth.

#### Output:

* `nodes: List[Vertex]` ➡ A list of nodes in a depth-first-search post-ordering.

#### Usage:
```cypher
MATCH (source:Label)
CALL nxalg.dfs_postorder_nodes(source, 10) YIELD *
RETURN source, nodes;
```
### `dfs_predecessors(source, depth_limit)`

Returns a dictionary of predecessors in depth-first-search from source.

#### Input:

* `source: Vertex` ➡  Specify the maximum search depth.
* `depth_limit: integer (default=NULL)` ➡  Specify the maximum search depth.

#### Output:

* `node: Vertex` ➡ Node we are looking a predecessor for.
* `predecessor: Vertex` ➡ predecessor of a given node.

#### Usage:
```cypher
MATCH (source:Label)
CALL nxalg.dfs_predecessors(source, 10) YIELD *
RETURN node, predecessor;
```
### `dfs_preorder_nodes(source, depth_limit)`

Returns nodes in a depth-first-search pre-ordering starting at source.

#### Input:

* `source: Vertex` ➡  Specify starting node for depth-first search and return nodes in the component reachable from this node.
* `depth_limit: integer (default=NULL)` ➡  Specify the maximum search depth.

#### Output:

* `nodes: List[Vertex]` ➡ A list of nodes in a depth-first-search pre-ordering.

#### Usage:
```cypher
MATCH (source:Label)
CALL nxalg.dfs_preorder_nodes(source, 10) YIELD *
RETURN source, nodes AS preoder_nodes;
```
### `dfs_successors(source, depth_limit)`

Returns a dictionary of successors in depth-first-search from source.

#### Input:

* `source: Vertex` ➡  Specify starting node for depth-first search and return nodes in the component reachable from this node.
* `depth_limit: integer (default=NULL)` ➡  Specify the maximum search depth.

#### Output:

* `node: Vertex` ➡ Node to calculate successors
* `successors: List[Vertex]` ➡ Successors of a given nodes

#### Usage:
```cypher
MATCH (source:Label)
CALL nxalg.dfs_successors(source, 5) YIELD *
RETURN node, successors;
```
### `dfs_tree(source, depth_limit)`

Returns an oriented tree constructed from a depth-first-search from source.

#### Input:

* `source: Vertex` ➡  Specify starting node for depth-first search.
* `depth_limit: integer (default=NULL)` ➡  Specify the maximum search depth.

#### Output:

* `tree: List[Vertex]` ➡ An oriented tree in a form of a list.

#### Usage:
```cypher
MATCH (source:Label)
CALL nxalg.dfs_tree(source, 7) YIELD *
RETURN tree;
```
### `diameter()`
Returns the diameter of the graph `G`.

The diameter is the maximum eccentricity.

#### Output:

* `diameter: integer` ➡ Diameter of graph.

#### Usage:
```cypher
CALL nxalg.diameter() YIELD *
RETURN diameter;
```
### `dominance_frontiers(start)`

Returns the dominance frontiers of all nodes of a directed graph.

The *dominance frontier* of a node `d` is the set of all
nodes such that `d` dominates an immediate
predecessor of a node, but `d` does not strictly dominate that node.

#### Input:

* `start: Vertex` ➡  The start node of dominance computation.

#### Output:

* `node: Vertex` ➡ Node to calculate frontier.
* `frontier: List[Vertex]` ➡ Dominance frontier for a given node.

#### Usage:
```cypher
MATCH (source:Label)
CALL nxalg.dominance_frontiers(source) YIELD *
RETURN node, frontier;
```
### `dominating_set(start)`
Finds a dominating set for the graph `G`.

A *dominating set* for a graph with node set `V` is a subset `D` of
`V` such that every node not in `D` is adjacent to at least one
member of `D`.


#### Input:

* `start: Vertex` ➡  Node to use as a starting point for the algorithm.

#### Output:

* `dominating_set: List[Vertex]` ➡ A dominating set for `G`.

#### Usage:
```cypher
MATCH (source:Label)
CALL nxalg.dominating_set(source) YIELD *
RETURN dominating_set;
```
### `edge_bfs(source, orientation)`
A directed, breadth-first-search of edges in `G`, beginning at `source`.

Return the edges of `G` in a breadth-first-search order continuing until
all edges are generated.


#### Input:

* `source: Vertex` ➡  The node from which the traversal begins. If `None`, then a source is chosen arbitrarily and repeatedly until all edges from each node in the graph are searched.
* `orientation: string (default=NULL)` ➡  For directed graphs and directed multigraphs, edge traversals need not respect the original orientation of the edges. When set to ‘reverse’, every edge is traversed in the reverse direction. When set to ‘ignore’, every edge is treated as undirected. When set to ‘original’, every edge is treated as directed. In all three cases, the returned edge tuples add a last entry to indicate the direction in which that edge was traversed. If `orientation` is `None`, the returned edge has no direction indicated. The direction is respected, but not reported.

#### Output:

* `edges: List[Edges]` ➡ A directed edge indicating the path taken by the breadth-first-search. For graphs, edge is of the form `(u, v)` where `u` and `v` are the tail and head of the edge as determined by the traversal. For multigraphs, edge is of the form `(u, v, key)`, where `key` is the key of the edge. When the graph is directed, then u and `v` are always in the order of the actual directed edge. If `orientation` is not `None` then the edge tuple is extended to include the direction of traversal (‘forward’ or ‘reverse’) on that edge.

#### Usage:
```cypher
MATCH (source:Label)
CALL nxalg.edge_bfs(source, 'ignore') YIELD *
RETURN source, edges;
```
### `edge_dfs(source, orientation)`

A directed, depth-first-search of edges in `G`, beginning at `source`.

Return the edges of `G` in a depth-first-search order continuing until
all edges are generated.

#### Input:

* `source: Vertex (default=NULL)` ➡  The node from which the traversal begins. If `None`, then a source is chosen arbitrarily and repeatedly until all edges from each node in the graph are searched.
* `orientation: string (default=NULL)` ➡  For directed graphs and directed multigraphs, edge traversals
need not respect the original orientation of the edges.
When set to ‘reverse’, every edge is traversed in the reverse direction.
When set to ‘ignore’, every edge is treated as undirected.
When set to ‘original’, every edge is treated as directed.
In all three cases, the returned edge tuples add a last entry to
indicate the direction in which that edge was traversed.
If `orientation` is `None`, the returned edge has no direction indicated.
The direction is respected, but not reported.

#### Output:

* `edges: List[Edge]` ➡ A directed edge indicating the path taken by the depth-first traversal.
For graphs, edge is of the form `(u, v)` where `u` and `v`
are the tail and head of the edge as determined by the traversal.
For multigraphs, edge is of the form `(u, v, key)`, where `key` is
the key of the edge. When the graph is directed, then `u` and `v`
are always in the order of the actual directed edge.
If `orientation` is not `None` then the edge tuple is extended to include
the direction of traversal (‘forward’ or ‘reverse’) on that edge.

#### Usage:
```cypher
MATCH (source:Label)
CALL nxalg.edge_dfs(source, 'original') YIELD *
RETURN source, edges;
```
### `find_cliques()`

Returns all maximal cliques in an undirected graph.

For each node `v`, a *maximal clique* for `v` is the largest complete
subgraph containing `v`. The largest maximal clique is sometimes
called the *maximum clique*.

This function returns an iterator over cliques, each of which is a
list of nodes. It is an iterative implementation, so should not
suffer from recursion depth issues.

#### Output:

* `cliques: List[List[Vertex]]` ➡ An iterator over maximal cliques, each of which is a list of
nodes in `G`. The order of cliques is arbitrary.

#### Usage:
```cypher
CALL nxalg.find_cliques() YIELD *
RETURN cliques;
```
### `find_cycle(source, orientation)`

Returns a cycle found via depth-first traversal.

A *cycle* is a closed path in the graph.
The orientation of directed edges is determined by `orientation`.

#### Input:

* `source: List[Vertex] (default=NULL)` ➡  The node from which the traversal begins. If `None`, then a source is chosen arbitrarily and repeatedly until all edges from each node in the graph are searched.
* `orientation: string (default=NULL)` ➡  For directed graphs and directed multigraphs, edge traversals
need not respect the original orientation of the edges. When set to ‘reverse’ every edge is traversed in the reverse direction. When set to ‘ignore’, every edge is treated as undirected. When set to ‘original’, every edge is treated as directed. In all three cases, the yielded edge tuples add a last entry to indicate the direction in which that edge was traversed. If `orientation` is `None`, the yielded edge has no direction indicated. The direction is respected, but not reported.

#### Output:

* `   ` ➡ A list of directed edges indicating the path taken for the loop. If no cycle is found, then an exception is raised. For graphs, an edge is of the form `(u, v)` where `u` and `v` are the tail and the head of the edge as determined by the traversal. For multigraphs, an edge is of the form `(u, v, key)`, where `key` is the key of the edge. When the graph is directed, then `u` and `v` are always in the order of the actual directed edge. If `orientation` is not `None` then the edge tuple is extended to include the direction of traversal (‘forward’ or ‘reverse’) on that edge.

#### Usage:
```cypher
MATCH (source:Label)
CALL nxalg.find_cycle(source) YIELD *
RETURN source, edges;
```

### `flow_hierarchy(weight)`

Returns the flow hierarchy of a directed network.

*Flow hierarchy* is defined as the fraction of edges not participating in cycles in a directed graph.

#### Input:

* `weight: string (default=NULL)` ➡  Attribute to use for node weights. If `None`, the weight defaults to 1.

#### Output:

* `flow_hierarchy: double` ➡  Flow hierarchy value.

#### Usage:
```cypher
CALL nxalg.flow_hierarchy() YIELD *
RETURN flow_hierarchy;
```
### `global_efficiency()`

Returns the average global efficiency of the graph. The *efficiency* of a pair of nodes in a graph is the multiplicative inverse of the shortest path distance between the nodes. The *average global efficiency* of a graph is the average efficiency of all pairs of nodes.

#### Output:

* `global_efficiency: double` ➡  The average global efficiency of the graph.

#### Usage:
```cypher
CALL nxalg.global_efficiency() YIELD *
RETURN global_efficiency;
```
### `greedy_color(strategy, interchange)`
Color a graph using various strategies of greedy graph coloring. Attempts to color a graph using as few colors as possible, where no neighbors of a node can have the same color as the node itself. The given strategy determines the order in which nodes are colored.


#### Input:

* `strategy` ➡  The parameter `function(G,colors)` is a function (or a string representing a function) that provides the coloring strategy, by returning nodes in the order they should be colored. `G` is the graph, and `colors` is a dictionary of the currently assigned colors, keyed by nodes. The function must return an iterable over all the nodes in `G`. If the strategy function is an iterator generator (a function with
`yield` statements), keep in mind that the `colors` dictionary will be updated after each `yield`, since this function chooses colors greedily. If `strategy` is a string, it must be one of the following, each of which represents one of the built-in strategy functions.
`'largest_first'`
`'random_sequential'`
`'smallest_last'`
`'independent_set'`
`'connected_sequential_bfs'`
`'connected_sequential_dfs'`
`'connected_sequential'` (alias for the previous strategy)
`'saturation_largest_first'`
`'DSATUR'` (alias for the previous strategy)
* `interchange: boolean (default=False)` ➡  Will use the color interchange algorithm if set to `True`. Note that `saturation_largest_first` and `independent_set` do not work with interchange. Furthermore, if you use interchange with your own strategy function, you cannot rely on the values in the `colors` argument.
#### Output:

* `node: Vertex` ➡ Vertex to color.
* `color: integer` ➡ Color index of a certain node.

#### Usage:
```cypher
CALL nxalg.greedy_color('connected_sequential_bfs') YIELD *
RETURN node, color;
```
### `has_eulerian_path()`

 An *Eulerian path* is a path in a graph that uses each edge of a graph exactly once.
 A directed graph has an Eulerian path if:
* at most one vertex has `out_degree - in_degree = 1`,
* at most one vertex has `in_degree - out_degree = 1`,
* every other vertex has equal in_degree and out_degree,
* and all of its vertices with nonzero degree belong to a single connected component of the underlying undirected graph.
 An undirected graph has an Eulerian path if exactly zero or two vertices have an odd degree and all of its vertices with nonzero degrees belong to a single connected component.

#### Output:

* `has_eulerian_path: boolean` ➡ `True` if `G` has an eulerian path.

#### Usage:
```cypher
CALL nxalg.has_eulerian_path() YIELD *
RETURN has_eulerian_path;
```


### `has_path(source, target)`

Returns `True` if `G` has a path from `source` to `target`.

#### Input:

* `source: Vertex` ➡  Starting node for the path.
* `target: Vertex` ➡  Ending node for the path.

#### Output:

* `has_path: boolean` ➡  `True` if `G` has a path from `source` to `target`.

#### Usage:
```cypher
MATCH (n:Label), (m:Label)
CALL nxalg.has_path(n, m) YIELD *
RETURN has_path;
```

### `immediate_dominators(start)`

Returns the immediate dominators of all nodes of a directed graph. The immediate dominator of a node is the unique node that Strictly dominates a node `n` but does not strictly dominate any other node That dominates `n`.

#### Input:

* `start: Vertex` ➡  The start node of dominance computation.

#### Output:

* `node: Vertex` ➡  Vertex to calculate dominator for.
* `dominator: Vertex` ➡  Dominator node for certain vertex.

#### Usage:
```cypher
MATCH (n:Label)
CALL nxalg.immediate_dominators(n) YIELD *
RETURN node, dominator;
```

### `is_arborescence()`

Returns `True` if `G` is an arborescence. An *arborescence* is a directed tree with maximum in-degree equal to 1.

#### Output:

* `is_arborescence: boolean` ➡  A boolean that is `True` if `G` is an arborescence.

#### Usage:
```cypher
CALL nxalg.is_arborescence() YIELD *
RETURN is_arborescence;
```

### `is_at_free()`

Check if a graph is AT-free. The method uses the find_asteroidal_triple method to recognize an AT-free graph. If no asteroidal triple is found, the graph is AT-free and `True` is returned. If at least one asteroidal triple is found, the graph is not AT-free and `False` is returned.

#### Output:

* `is_at_free: boolean` ➡  `True` if `G` is AT-free and `False` otherwise.

#### Usage:
```cypher
CALL nxalg.is_at_free() YIELD *
RETURN is_at_free;
```
### `is_bipartite()`

Returns `True` if graph `G` is bipartite, `False` if not. A *bipartite graph* (or bigraph) is a graph whose vertices can be divided into two disjoint and independent sets `u` and `v` and such that every edge connects a vertex in `u` one in `v`.

#### Output:

* `is_bipartite: boolean` ➡  `True` if `G` is bipartite and `False` otherwise.

#### Usage:
```cypher
CALL nxalg.is_bipartite() YIELD *
RETURN is_bipartite;
```

### `is_branching()`

Returns `True` if `G` is a branching. A *branching* is a directed forest with maximum in-degree equal to 1.

#### Output:

* `is_branching: boolean` ➡   A boolean that is `True` if `G` is a branching.

#### Usage:
```cypher
CALL nxalg.is_branching() YIELD *
RETURN is_branching;
```

### `is_chordal()`

Checks whether `G` is a chordal graph. A graph is *chordal* if every cycle of length at least 4 has a chord (an edge joining two nodes not adjacent in the cycle).

#### Output:

* `is_chordal: boolean` ➡  `True` if `G` is a chordal graph and `False` otherwise.

#### Usage:
```cypher
CALL nxalg.is_chordal() YIELD *
RETURN is_chordal;
```

### `is_distance_regular()`

Returns `True` if the graph is distance regular, `False` otherwise. A connected graph `G` is distance-regular if for any nodes `x,y` and any integers `i,j=0,1,...,d` (where `d` is the graph diameter), the number of vertices at distance `i` from `x` and distance `j` from `y` depends only on `i,j` and the graph distance between `x` and `y`, independently of the choice of `x` and `y`.

#### Output:

* `is_distance_regular: boolean` ➡  `True` if the graph is Distance Regular, `False` otherwise.

#### Usage:
```cypher
CALL nxalg.is_distance_regular() YIELD *
RETURN is_distance_regular;
```
### `is_edge_cover(cover)`

Decides whether a set of edges is a valid edge cover of the graph. Given a set of edges, it can be decided whether the set is an *edge covering* if checked whether all nodes of the graph have an edge from the set incident on it.
#### Input:

* `cover: List[Edge]` ➡   A list of edges to be checked.

#### Output:

* `is_edge_cover: boolean` ➡  Whether the set of edges is a valid edge cover of the graph.

#### Usage:
```cypher
MATCH (n)-[e]-(m)
WITH COLLECT(e) AS cover
CALL nxalg.is_edge_cover(cover) YIELD *
RETURN is_edge_cover;
```

### `is_eulerian()`

Returns `True` if and only if `G` is Eulerian. A graph is *Eulerian* if it has an Eulerian circuit. An *Eulerian circuit* is a closed walk that includes each edge of a graph exactly once.

#### Output:

* `is_eulerian: boolean` ➡  `True` if `G` is Eulerian.

#### Usage:
```cypher
CALL nxalg.is_eulerian() YIELD *
RETURN is_eulerian;
```
### `is_forest()`

Returns `True` if `G` is a forest. A *forest* is a graph with no undirected cycles.
 For directed graphs, `G` is a forest if the underlying graph is a forest. The underlying graph is obtained by treating each directed edge as a single undirected edge in a multigraph.
#### Output:

* `is_forest: boolean` ➡  A boolean that is `True` if `G` is a forest.

#### Usage:
```cypher
CALL nxalg.is_forest() YIELD *
RETURN is_forest;
```

### `is_isolate(n)`

Determines whether a node is an isolate.
 An *isolate* is a node with no neighbors (that is, with degree zero). For directed graphs, this means no in-neighbors and no out-neighbors.

#### Input:

* `n: Vertex` ➡  A node in `G`.

#### Output:

* `is_isolate: boolean` ➡  `True` if and only if `n` has no neighbors.

#### Usage:
```cypher
MATCH (n)
CALL nxalg.is_isolate(n) YIELD *
RETURN is_isolate;
```
### `is_isomorphic(nodes1, edges1, nodes2, edges2)`

Returns `True` if the graphs `G1` and `G2` are isomorphic and `False` otherwise. The two graphs `G1` and `G2` must be the same type.

#### Input:

* `nodes1: List[Vertex]` ➡  Nodes in `G1`.
* `edges1: List[Edge]` ➡  Edges in `G1`.
* `nodes2: List[Vertex]` ➡  Nodes in `G2`.
* `edges2: List[Edge]` ➡   Edges in `G2`.

#### Output:

* `is_isomorphic: boolean` ➡  `True` if the graphs `G1` and `G2` are isomorphic and `False` otherwise.

#### Usage:
```cypher
MATCH (n:Label1)-[e]-(), (r:Label2)-[f]-()
WITH
COLLECT(n) AS nodes1
COLLECT(e) AS edges1
COLLECT(r) AS nodes2
COLLECT(f) AS edges2
CALL nxalg.is_isomorphic(nodes1, edges1, nodes2, edges2) YIELD *
RETURN is_isomorphic;
```

### `is_semieulerian()`

Returns `True` if `G` is semi-Eulerian.

`G` is semi-Eulerian if it has an Eulerian path but no Eulerian circuit.

#### Output:

* `is_semieulerian: boolean` ➡  `True` if `G` is semi-Eulerian.

#### Usage:
```cypher
CALL nxalg.is_semieulerian() YIELD *
RETURN is_semieulerian;
```
### `is_simple_path(nodes)`

Returns `True` if and only if the given nodes form a simple path in
`G`.
 A *simple path* in a graph is a nonempty sequence of nodes in which no node appears more than once in the sequence and each adjacent pair of nodes in the sequence is adjacent in the graph.

#### Input:

* `nodes: List[Vertex]` ➡  A list of one or more nodes in the graph `G`.

#### Output:

* `is_simple_path: boolean` ➡  Whether the given list of nodes represents a simple path in `G`.

#### Usage:
```cypher
MATCH (n:Label)
WITH COLLECT(n) AS nodes
CALL nxalg.is_simple_path(nodes) YIELD *
RETURN is_simple_path;
```

### `is_strongly_regular()`

Returns `True` if and only if the given graph is strongly regular.
 An undirected graph is *strongly regular* if:


* it is regular,


* each pair of adjacent vertices has the same number of neighbors in common,


* each pair of nonadjacent vertices has the same number of neighbors in common.
 Each strongly regular graph is a distance-regular graph. Conversely, if a distance-regular graph has a diameter of two, then it is a strongly regular graph.

#### Output:

* `is_strongly_regular: boolean` ➡   Whether `G` is strongly regular.

#### Usage:
```cypher
CALL nxalg.is_strongly_regular() YIELD *
RETURN is_strongly_regular;
```

### `is_tournament()`
Returns `True` if and only if `G` is a tournament.
 A *tournament* is a directed graph, with neither self-loops nor multi-edges, in which there is exactly one directed edge joining each pair of distinct nodes.

#### Output:

* `is_tournament: boolean` ➡   Whether the given graph is a tournament graph.

#### Usage:
```cypher
CALL nxalg.is_tournament() YIELD *
RETURN is_tournament;
```
### `is_tree()`

Returns `True` if `G` is a tree.
 A *tree* is a connected graph with no undirected cycles.
 For directed graphs, `G` is a tree if the underlying graph is a tree. The underlying graph is obtained by treating each directed edge as a single undirected edge in a multigraph.

#### Output:

* `is_tree: boolean` ➡   A boolean that is `True` if `G` is a tree.

#### Usage:
```cypher
CALL nxalg.is_tree() YIELD *
RETURN is_tree;
```
### `isolates()`
Returns a list of isolates in the graph.
 An *isolate* is a node with no neighbors (that is, with degree zero). For directed graphs, this means no in-neighbors and no out-neighbors.
#### Output:

* `isolates: List[Vertex]` ➡   A list of isolates in `G`.
#### Usage:
```cypher
CALL nxalg.isolates() YIELD *
RETURN isolates;
```
### `jaccard_coefficient(ebunch)`
Compute the Jaccard coefficient of all node pairs in `ebunch`.

*Jaccard coefficient* compares members of two sets to see which members are shared and which are distinct.
#### Input:

* `ebunch: List[List[Vertex]] (default=NULL)` ➡  Jaccard coefficient will be computed for each pair of nodes given in the iterable. The pairs must be given as 2-tuples
`(u, v)` where `u` and `v` are nodes in the graph. If `ebunch` is `None` then all non-existent edges in the graph will be used.

#### Output:

* `u: Vertex` ➡  First node in pair.
* `v: Vertex` ➡  Second node in pair.
* `coef: Vertex` ➡  Jaccard coefficient.

#### Usage:
```cypher
CALL nxalg.jaccard_coefficient() YIELD *
RETURN u, v, coef;
```
### `k_clique_communities(k, cliques)`
Find k-clique communities in a graph using the percolation method.
 A *k-clique community* is the union of all cliques of size `k` that can be reached through adjacent (sharing `k-1` nodes) k-cliques.
#### Input:

* `k: integer` ➡  Size of the smallest clique.
* `cliques: List[List[Vertex]] (default=NULL)` ➡  Precomputed cliques (use networkx.find_cliques(G)).

#### Output:

* `communities: List[List[Vertex]]` ➡   Sets of nodes, one for each k-clique community.

#### Usage:
```cypher
CALL nxalg.k_clique_communities(3) YIELD *
RETURN communities;
```
### `k_components(density)`
Returns the approximate k-component structure of a graph `G`.
 A *k-component* is a maximal subgraph of a graph `G` that has, at least, node connectivity `k`: we need to remove at least `k` nodes to break it into more components. k-components have an inherent hierarchical structure because they are nested in terms of connectivity: a connected graph can contain several 2-components, each of which can contain one or more 3-components, and so forth.
 This implementation is based on the fast heuristics to approximate the k-component structure of a graph. This, in turn, is based on a fast approximation algorithm for finding good lower bounds of the number of node independent paths between two nodes.
#### Input:

* `min_density: double (default=0.95)` ➡   Density relaxation threshold.

#### Output:

* `k: integer` ➡  Connectivity level k
* `components: List[List[Vertex]]` ➡  List of sets of nodes that form a k-component of level `k` as values.

#### Usage:
```cypher
CALL nxalg.k_components(0.8) YIELD *
RETURN k, components;
```
### `k_edge_components(k)`
Returns nodes in each maximal k-edge-connected component in `G`.
A connected graph is *k-edge-connected* if it remains connected whenever fewer than k edges are removed. The edge-connectivity of a graph is the largest k for which the graph is k-edge-connected.
#### Input:

* `k: integer` ➡  Desired edge connectivity.

#### Output:

* `components: List[List[Vertex]]` ➡   A list of k-edge-ccs. Each set of returned nodes will have k-edge-connectivity in the graph `G`.

#### Usage:
```cypher
CALL nxalg.k_edge_components(3) YIELD *
RETURN components;
```
### `local_efficiency()`
Returns the average local efficiency of the graph.
 The *efficiency* of a pair of nodes in a graph is the multiplicative inverse of the shortest path distance between the nodes. The *local efficiency* of a node in the graph is the average global efficiency of the subgraph induced by the neighbors of the node. The *average local efficiency* is the average of the local efficiencies of each node.
#### Output:

* `local_efficiency: double` ➡   The average local efficiency of the graph.

#### Usage:
```cypher
CALL nxalg.local_efficiency() YIELD *
RETURN local_efficiency;
```
### `lowest_common_ancestor(node1, node2)`
Compute the lowest common ancestor of the given pair of nodes.
#### Input:

* `node1: Vertex` ➡  A node in the graph.
* `node2: Vertex` ➡  A node in the graph.

#### Output:

* `ancestor: Vertex` ➡  The lowest common ancestor of `node1` and `node2`, or default if they have no common ancestors.
#### Usage:
```cypher
MATCH (n), (m)
WHERE n != m
CALL nxalg.lowest_common_ancestor(n, m) YIELD *
RETURN n, m, ancestor;
```
### `maximal_matching()`
 A *matching* is a subset of edges in which no node occurs more than once. A *maximal matching* cannot add more edges and still be a matching.

#### Output:

* `edges: List[Edge]` ➡   A maximal matching of the graph.

#### Usage:
```cypher
CALL nxalg.maximal_matching() YIELD *
RETURN edges;
```
### `minimum_spanning_tree(weight, algorithm, ignore_nan)`
Returns a minimum spanning tree or forest on an undirected graph `G`.
 A *minimum spanning tree* is a subset of the edges of a connected, undirected graph that connects all of the vertices together without any cycles.
#### Input:

* `weight: string (default="weight")` ➡  Data key to use for edge weights.
* `algorithm: string (default="kruskal")` ➡  The algorithm to use when finding a minimum spanning tree. Valid choices are ‘kruskal’, ‘prim’, or ‘boruvka’.
* `ignore_nan: boolean (default=False)` ➡  If `NaN` is found as an edge weight normally an exception is raised. If `ignore_nan` is `True` then that edge is ignored.

#### Output:

* `node: List[Vertex]` ➡  A minimum spanning tree or forest.
* `edges: List[Edge]` ➡  A minimum spanning tree or forest.

#### Usage:
```cypher
CALL nxalg.minimum_spanning_tree("weight", "prim", TRUE) YIELD *
RETURN node, edges;
```
### `multi_source_dijkstra_path(sources, cutoff, weight)`
Find shortest weighted paths in G from a given set of source nodes.

Compute shortest path between any of the source nodes and all other reachable nodes for a weighted graph.
#### Input:

* `sources: List[Vertex]` ➡  Starting nodes for paths. If this is a set containing a single node, then all paths computed by this function will start from that node. If there are two or more nodes in the set, the computed paths may begin from any one of the start nodes.
* `cutoff: integer (default=NULL)` ➡   Depth to stop the search. Only return paths with `length <= cutoff`.
* `weight: string` ➡  If this is a string, then edge weights will be accessed via the edge attribute with this key (that is, the weight of the edge joining `u` to `v` will be `G.edges[u, v][weight]`). If no such edge attribute exists, the weight of the edge is assumed to be one. If this is a function, the weight of an edge is the value returned by the function. The function must accept exactly three positional arguments: the two endpoints of an edge and the dictionary of edge attributes for that edge. The function must return a number.

#### Output:

* `target: Vertex` ➡ Target key for shortest path
* `path: List[Vertex]` ➡  Shortest path in a list

#### Usage:
```cypher
MATCH (n:Label)
COLLECT (n) AS sources
CALL nxalg.multi_source_dijkstra_path(sources, 7) YIELD *
RETURN target, path;
```
### `multi_source_dijkstra_path_length(sources, cutoff, weight)`
Find shortest weighted path lengths in `G` from a given set of source nodes.

Compute the shortest path length between any of the source nodes and all other reachable nodes for a weighted graph.
#### Input:

* `sources: List[Vertex]` ➡  Starting nodes for paths. If this is a set containing a single node, then all paths computed by this function will start from that node. If there are two or more nodes in the set, the computed paths may begin from any one of the start nodes.
* `cutoff: integer (default=NULL)` ➡  Depth to stop the search. Only return paths with `length <= cutoff`.
* `weight: string` ➡  If this is a string, then edge weights will be accessed via the edge attribute with this key (that is, the weight of the edge joining `u` to `v` will be `G.edges[u, v][weight]`). If no such edge attribute exists, the weight of the edge is assumed to be one. If this is a function, the weight of an edge is the value returned by the function. The function must accept exactly three positional arguments: the two endpoints of an edge and the dictionary of edge attributes for that edge. The function must return a number.

#### Output:

* `target: Vertex` ➡ Target key for shortest path
* `length: double` ➡  Shortest path length


#### Usage:
```cypher
MATCH (n:Label)
COLLECT (n) AS sources
CALL nxalg.multi_source_dijkstra_path_length(sources, 5) YIELD *
RETURN target, length;
```
### `node_boundary(nbunch1, bunch2)`
Returns the node boundary of `nbunch1`.
 The *node boundary* of a set `S` with respect to a set `T` is the set of nodes `v` in `T` such that for some `u` in `S`, there is an edge joining `u` to `v`. If `T` is not specified, it is assumed to be the set of all nodes not in `S`.
#### Input:

* `nbunch1: List[Vertex]` ➡  List of nodes in the graph representing the set of nodes whose node boundary will be returned. (This is the set `S` from the definition above.)
* `nbunch2: List[Vertex] (default=NULL)` ➡  List of nodes representing the target (or “exterior”) set of nodes. (This is the set `T` from the definition above.) If not specified, this is assumed to be the set of all nodes in `G` not in `nbunch1`.

#### Output:

* `boundary: List[Vertex]` ➡   The node boundary of `nbunch1` with respect to `nbunch2`.

#### Usage:
```cypher
MATCH (n:Label)
COLLECT (n) AS sources1
CALL nxalg.node_boundary(sources1) YIELD *
RETURN boundary;
```
### `node_connectivity(source, target)`
Returns an approximation for node connectivity for a graph or digraph `G`.

*Node connectivity* is equal to the minimum number of nodes that must be removed to disconnect `G` or render it trivial. By Menger’s theorem, this is equal to the number of node independent paths (paths that share no nodes other than `source` and `target`).
 If `source` and `target` nodes are provided, this function returns the local node connectivity: the minimum number of nodes that must be removed to break all paths from source to `target` in `G`.
 This algorithm is based on a fast approximation that gives a strict lower bound on the actual number of node independent paths between two nodes. It works for both directed and undirected graphs.
#### Input:

* `source: Vertex (default=NULL)` ➡  Source node.
* `target: Vertex (default=NULL)` ➡  Target node.

#### Output:

* `connectivity: integer` ➡  Node connectivity of `G`, or local node connectivity if `source` and `target` are provided.

#### Usage:
```cypher
MATCH (n:Label), (m:Label)
CALL nxalg.node_connectivity(n, m) YIELD *
RETURN connectivity;
```
### `node_expansion(s)`
Returns the node expansion of the set `S`.
 The *node expansion* is the quotient of the size of the node boundary of `S` and the cardinality of `S`.
#### Input:

* `s: List[Vertex]` ➡  A sequence of nodes in `G`.

#### Output:

* `node_expansion: double` ➡   The node expansion of the set `S`.

#### Usage:
```cypher
MATCH (n:Label)
WITH COLLECT(n) AS s
CALL nxalg.node_expansion(s) YIELD *
RETURN node_expansion;
```
### `non_randomness(k)`
Compute the non-randomness of graph `G`.
The first returned value `non_randomness` is the sum of non-randomness values of all edges within the graph (where the non-randomness of an edge tends to be small when the two nodes linked by that edge are from two different communities).
The second computed value `relative_non_randomness` is a relative measure that indicates to what extent graph `G` is different from random graphs in terms of probability. When it is close to 0, the graph tends to be more likely generated by an Erdos Renyi model.
#### Input:

* `k: integer (default=NULL)` ➡  The number of communities in `G`. If `k` is not set, the function will use a default community detection algorithm to set it.

#### Output:

* `non_randomness: double` ➡  Non-randomness of a graph
* `relative_non_randomness: double` ➡  Relative non-randomness of a graph

#### Usage:
```cypher
CALL nxalg.non_randomness() YIELD *
RETURN non_randomness, relative_non_randomness;
```
### `pagerank(alpha, personalization, max_iter, tol, nstart, weight, dangling)`
Returns the PageRank of the nodes in the graph.

PageRank computes a ranking of the nodes in the graph G based on the structure of the incoming links. It was originally designed as an algorithm to rank web pages.
#### Input:

* `alpha: double (default=0.85)` ➡  Damping parameter for PageRank.
* `personalization: string (default=NULL)` ➡  The “personalization vector” consisting of a dictionary with a subset of graph nodes as a key and maps personalization value for each subset. At least one personalization value must be non-zero. If not specified, a nodes personalization value will be zero. By default, a uniform distribution is used.
* `max_iter: integer (default=100)` ➡  Maximum number of iterations in power method eigenvalue solver.
* `tol: double (default=1e-06)` ➡  Error tolerance used to check convergence in power method solver.
* `nstart: string (default=NULL)` ➡ Starting value of PageRank iteration for each node.
* `weight: string (default="weight")` ➡  Edge data key to use as weight. If `None`, weights are set to 1.
* `dangling: string (default=NULL)` ➡  The outedges to be assigned to any “dangling” nodes, i.e., nodes without any outedges. The dict key is the node the outedge points to and the dict value is the weight of that outedge. By default, dangling nodes are given outedges according to the personalization vector (uniform if not specified). This must be selected to result in an irreducible transition matrix. It may be common to have the dangling dict to be the same as the personalization dict.

#### Output:

* `node: Vertex` ➡ Vertex to calculate PageRank for.
* `rank: double` ➡ Node PageRank.

#### Usage:
```cypher
CALL nxalg.pagerank() YIELD *
RETURN node, rank;
```
### `reciprocity(nodes)`
Compute the reciprocity in a directed graph.
The *reciprocity* of a directed graph is defined as the ratio of the number of edges pointing in both directions to the total number of edges in the graph.
The reciprocity of a single node `u` is defined similarly, it is the ratio of the number of edges in both directions to the total number of edges attached to node `u`.
#### Input:

* `nodes: List[Vertex]` ➡  Compute reciprocity for nodes in this container.

#### Output:

* `node: Vertex` ➡ Node to calculate reciprocity.
* `reciprocity: double` ➡ Reciprocity value

#### Usage:
```cypher
MATCH(n:Label)
WITH COLLECT(n) AS nodes
CALL nxalg.reciprocity(nodes) YIELD *
RETURN node, reciprocity;
```
### `shortest_path(source, target, weight, method)`
Compute shortest paths in the graph.
#### Input:

* `source: Vertex (default=NULL)` ➡  Starting node for the path. If not specified, compute shortest path lengths using all nodes as source nodes.
* `target: Vertex (default=NULL)` ➡  Ending node for the path. If not specified, compute shortest path lengths using all nodes as target nodes.
* `weight: string (default=NULL)` ➡  If `None`, every edge has weight/distance/cost 1. If a string, use this edge attribute as the edge weight. Any edge attribute not present defaults to 1.
* `method: string (default="dijkstra")` ➡  The algorithm to use to compute the path length. Supported options: ‘dijkstra’, ‘bellman-ford’. Other inputs produce a ValueError. If `weight` is `None`, unweighted graph methods are used and this suggestion is ignored.

#### Output:

* `source: Vertex` ➡   Source node.
* `target: Vertex` ➡   Target node.
* `path: List[Vertex]` ➡   All returned paths include both the `source` and `target` in the path. If the `source` and `target` are both specified, return a single list of nodes in a shortest path from the `source` to the `target`. If only the `source` is specified, return a dictionary keyed by targets with a list of nodes in a shortest path from the `source` to one of the targets. If only the `target` is specified, return a dictionary keyed by sources with a list of nodes in a shortest path from one of the sources to the `target`. If neither the `source` nor `target` are specified return a dictionary of dictionaries with `path[source][target]=[list of nodes in path]`.

#### Usage:
```cypher
MATCH (n:Label), (m:Label)
CALL nxalg.shortest_path(n, m) YIELD *
RETURN source, target, path;
```
### `shortest_path_length(source, target, weight, method)`
Compute shortest path lengths in the graph.
#### Input:

* `source: Vertex (default=NULL)` ➡  Starting node for the path. If not specified, compute shortest path lengths using all nodes as source nodes.
* `target: Vertex (default=NULL)` ➡  Ending node for the path. If not specified, compute shortest path lengths using all nodes as target nodes.
* `weight: string (default=NULL)` ➡  If `None`, every edge has weight/distance/cost 1. If a string, use this edge attribute as the edge weight. Any edge attribute not present defaults to 1.
* `method: string (default="dijkstra")` ➡  The algorithm to use to compute the path length. Supported options: ‘dijkstra’, ‘bellman-ford’. Other inputs produce a ValueError. If `weight` is `None`, unweighted graph methods are used and this suggestion is ignored.

#### Output:

* `source: Vertex` ➡   Source node.
* `target: Vertex` ➡   Target node.
* `length: double` ➡   If the `source` and `target` are both specified, return the length of the shortest path from the `source` to the `target`. If only the `source` is specified, return a dict keyed by `target` to the shortest path length from the `source` to that `target`. If only the `target` is specified, return a dict keyed by `source` to the shortest path length from that `source` to the `target`. If neither the `source` nor `target` are specified, return an iterator over (source, dictionary) where dictionary is keyed by `target` to shortest path length from `source` to that `target`.

#### Usage:
```cypher
MATCH (n:Label), (m:Label)
CALL nxalg.shortest_path_length(n, m) YIELD *
RETURN source, target, length;
```
### `simple_cycles()`
Find simple cycles (elementary circuits) of a directed graph.
 A *simple cycle*, or *elementary circuit*, is a closed path where no node appears twice. Two elementary circuits are distinct if they are not cyclic permutations of each other.
 This is a nonrecursive, iterator/generator version of Johnson’s algorithm. There may be better algorithms for some cases.

#### Output:

* `cycles: List[List[Vertex]]` ➡  A list of elementary cycles in the graph. Each cycle is represented by a list of nodes in the cycle.

#### Usage:
```cypher
CALL nxalg.simple_cycles() YIELD *
RETURN cycles;
```

### `strongly_connected_components()`
Returns nodes in strongly connected components of a graph.
#### Output:

* `components: List[List[Vertex]]` ➡   A list of lists of nodes, one for each strongly connected component of `G`.

#### Usage:
```cypher
CALL nxalg.strongly_connected_components() YIELD *
RETURN components;
```
### `topological_sort()`
Returns nodes in topologically sorted order.
 A *topological sort* is a non unique permutation of the nodes such that an edge from `u` to `v` implies that `u` appears before `v` in the topological sort order.
#### Output:

* `nodes: List[Vertex]` ➡   A list of nodes in topological sorted order.

#### Usage:
```cypher
CALL nxalg.topological_sort() YIELD *
RETURN nodes;
```
### `triadic_census()`
Determines the triadic census of a directed graph. The *triadic census* is a count of how many of the 16 possible types of triads are present in a directed graph.

#### Output:

* `triad: string` ➡  Triad name.
* `count: integer` ➡  Number of occurrences as value.

#### Usage:
```cypher
CALL nxalg.triadic_census() YIELD *
RETURN triad, count;
```
### `voronoi_cells(center_nodes, weight)`
Returns the Voronoi cells centered at center_nodes with respect to the shortest-path distance metric.
 If `C` is a set of nodes in the graph and `c` is an element of `C`, the *Voronoi cell* centered at a node `c` is the set of all nodes
`v` that are closer to `c` than to any other center node in `C` with respect to the shortest-path distance metric.
 For directed graphs, this will compute the “outward” Voronoi cells in which distance is measured from the center nodes to the target node.

#### Input:

* `center_nodes: List[Vertex]` ➡  A nonempty set of nodes in the graph `G` that represent the centers of the Voronoi cells.
* `weight: string (default=NULL)` ➡  The edge attribute (or an arbitrary function) representing the weight of an edge. This keyword argument is as described in the documentation for `networkx.multi_source_dijkstra_path`, for example.

#### Output:

* `center: Vertex` ➡ Vertex value of center_nodes.
* `cell: List[Vertex]` ➡  Partition of `G` closer to that center node.

#### Usage:
```cypher
MATCH (n)
WITH COLLECT(n) AS center_nodes
CALL nxalg.voronoi_cells(center_nodes) YIELD *
RETURN center, cell;
```
### `wiener_index(weight)`
Returns the Wiener index of the given graph.
 The *Wiener index* of a graph is the sum of the shortest-path distances between each pair of reachable nodes. For pairs of nodes in undirected graphs, only one orientation of the pair is counted.
#### Input:

* `weight: string (default=NULL)` ➡ The edge attribute to use as distance when computing shortest-path distances. This is passed directly to the
`networkx.shortest_path_length` function.

#### Output:

* `wiener_index: double` ➡  The Wiener index of the graph `G`.

#### Usage:
```cypher
CALL nxalg.voronoi_cells() YIELD *
RETURN wiener_index;
```