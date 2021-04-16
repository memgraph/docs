---
id: nxalg
title: The nxalg module
sidebar_label: nxalg
---

This module, named **nxalg**, provides a comprehensive set of thin wrappers
around most of the algorithms present in the NetworkX package.
The wrapper functions now have the capability to create a NetworkX
compatible graph-like object that can stream the native database graph
directly saving on memory usage significantly.

## `all_shortest_paths(ctx, source, target, weight, method)`
Compute all shortest simple paths in the graph.

A simple path is a path with no repeated nodes.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **source** (*mgp.Vertex*) – Starting node for the path.


* **target** (*mgp.Vertex*) – Ending node for the path.


* **weight** (*mgp.Nullable[str]*) – (default=None)
    If `None`, every edge has weight/distance/cost 1.
    If a string, use this edge attribute as the edge weight.
    Any edge attribute not present defaults to 1.


* **method** (*str*) – (default=’dijkstra’)
    The algorithm to use to compute the path lengths.
    Supported options: ‘dijkstra’, ‘bellman-ford’.
    Other inputs produce a ValueError.
    If `weight` is `None`, unweighted graph methods are used, and this
    suggestion is ignored.



**Returns**

A list of all paths between source and target.



**Return type**

mgp.Record(paths=mgp.List[mgp.List[mgp.Vertex]])



## `all_simple_paths(ctx, source, target, cutoff)`
Returns all simple paths in the graph `G` from source to target.

A simple path is a path with no repeated nodes.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **source** (*mgp.Vertex*) – Starting node for the path.


* **target** (*mgp.Vertex*) – Ending node for the path.


* **cutoff** (*mgp.Nullable[int]*) – (default=None)
    Depth to stop the search. Only paths of `length <= cutoff` are returned.



**Returns**

A list of simple path lists. If there are no paths
    between the source and target within the given cutoff there is no output.



**Return type**

mgp.Record(paths=mgp.List[mgp.List[mgp.Vertex]])



## `ancestors(ctx, source)`
Returns all nodes having a path to `source` in `G`.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **source** (*node*) – A node in `G`.



**Returns**

The ancestors of source in `G`.



**Return type**

mgp.Record(ancestors=mgp.List[mgp.Vertex])



## `betweenness_centrality(ctx, k, normalized, weight, endpoints, seed)`
Compute the shortest-path betweenness centrality for nodes.

*Betweenness centrality* is a measure of centrality in a graph based on shortest
paths. Centrality identifies the most important nodes within a graph.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **k** (*mgp.Nullable[str]*) – (default=None)
    If `k` is not `None`, use `k` node samples to estimate betweenness.
    The value of `k <= n` where `n` is the number of nodes in the graph.
    Higher values give a better approximation.


* **normalized** (*bool*) – (default=True)
    If `True` the betweenness values are normalized by `2/((n-1)(n-2))`
    for graphs, and `1/((n-1)(n-2))` for directed graphs where `n`
    is the number of nodes in `G`.


* **weight** (*mgp.Nullable[str]*) – (default=None)
    If `None`, all edge weights are considered equal.
    Otherwise holds the name of the edge attribute used as weight.


* **endpoints** (*bool*) – (default=False)
    If `True`, includes the endpoints in the shortest path counts.


* **seed** (*mgp.Nullable[int]*) – (default=None)
    Indicator of random number generation state.
    Note that this is only used if `k` is not `None`.



**Returns**

Dictionary of nodes with betweenness centrality as the value.



**Return type**

mgp.Record(node=mgp.Vertex, betweenness=mgp.Number)



## `bfs_edges(ctx, source, reverse, depth_limit)`
Iterate over edges in a breadth-first-search starting at source.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **source** (*mgp.Vertex*) – Specify starting node for breadth-first search; this function
    iterates over only those edges in the component reachable from
    this node.


* **reverse** (*bool*) – (default=False)
    If `True`, traverse a directed graph in the reverse direction.


* **depth_limit** (*mgp.Nullable[int]*) – (default=None)
    Specify the maximum search depth.



**Returns**

A list of edges in the breadth-first-search.



**Return type**

mgp.Record(edges=mgp.List[mgp.Edge])



## `bfs_predecessors(ctx, source, depth_limit)`
Returns an iterator of predecessors in breadth-first-search from source.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **source** (*mgp.Vertex*) – Specify starting node for breadth-first search.


* **depth_limit** (*mgp.Nullable[int]*) – (default=None)
    Specify the maximum search depth.



**Returns**

`(node, predecessors)` iterator where `predecessors` is the list of
    predecessors of the node.



**Return type**

mgp.Record(node=mgp.Vertex, predecessor=mgp.Vertex)



## `bfs_successors(ctx, source, depth_limit)`
Returns an iterator of successors in breadth-first-search from source.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **source** (*node*) – Specify starting node for breadth-first search.


* **depth_limit** (*int optional*) – (default=None)
    Specify the maximum search depth.



**Returns**

`(node, successors)` iterator where `successors` is the list of
    successors of the node.



**Return type**

mgp.Record(node=mgp.Vertex, successors=mgp.List[mgp.Vertex])



## `bfs_tree(ctx, source, reverse, depth_limit)`
Returns an oriented tree constructed from of a breadth-first-search
starting at `source`.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **source** (*mgp.Vertex*) – Specify starting node for breadth-first search.


* **reverse** (*bool*) – (default=False)
    If `True`, traverse a directed graph in the reverse direction.


* **depth_limit** (*mgp.Nullable[int]*) – (default=None)
    Specify the maximum search depth.



**Returns**

An oriented tree.



**Return type**

mgp.Record(tree=mgp.List[mgp.Vertex])



## `biconnected_components(ctx)`
Returns a list of sets of nodes, one set for each biconnected
component of the graph

*Biconnected components* are maximal subgraphs such that the removal of a
node (and all edges incident on that node) will not disconnect the
subgraph. Note that nodes may be part of more than one biconnected
component.  Those nodes are articulation points or cut vertices.  The
removal of articulation points will increase the number of connected
components of the graph.

Notice that by convention a dyad is considered a biconnected component.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

A list of sets of nodes, one set for each biconnected component.



**Return type**

mgp.Record(components=mgp.List[mgp.List[mgp.Vertex]])



## `bridges(ctx, root)`
Returns all bridges in a graph.

A *bridge* in a graph is an edge whose removal causes the number of
connected components of the graph to increase.  Equivalently, a bridge is an
edge that does not belong to any cycle.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **root** (*mgp.Nullable[mgp.Vertex]*) – (default=None)
    A node in the graph `G`. If specified, only the bridges in the
    connected components containing this node will be returned.



**Returns**

A list of edges in the graph whose removal disconnects the graph (or
    causes the number of connected components to increase).



**Return type**

mgp.Record(bridges=mgp.List[mgp.Edge])



## `center(ctx)`
Returns the center of the graph `G`.

The *center* is the set of nodes with eccentricity equal to the radius.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

List of nodes in center.



**Return type**

mgp.Record(center=mgp.List[mgp.Vertex])



## `chain_decomposition(ctx, root)`
Returns the chain decomposition of a graph.

The *chain decomposition* of a graph with respect a depth-first
search tree is a set of cycles or paths derived from the set of
fundamental cycles of the tree in the following manner. Consider
each fundamental cycle with respect to the given tree, represented
as a list of edges beginning with the non tree edge oriented away
from the root of the tree. For each fundamental cycle, if it
overlaps with any previous fundamental cycle, just take the initial
non-overlapping segment, which is a path instead of a cycle. Each
cycle or path is called a *chain*.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **root** (*mgp.Nullable[mgp.Vertex]*) – (default=None)
    Optional. A node in the graph `G`. If specified, only the chain
    decomposition for the connected component containing this node
    will be returned. This node indicates the root of the depth-first
    search tree.



**Returns**

A list of edges representing a chain. There is no guarantee on
    the orientation of the edges in each chain (for example, if a
    chain includes the edge joining nodes 1 and 2, the chain may
    include either (1, 2) or (2, 1)).



**Return type**

mgp.Record(chains=mgp.List[mgp.List[mgp.Edge]])



## `check_planarity(ctx)`
Check if a graph is planar.

A graph is planar if it can be drawn in a plane without
any edge intersections.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

`is_planar` is `True` if the graph is planar.



**Return type**

mgp.Record(is_planar=bool)



## `clustering(ctx, nodes, weight)`
Compute the clustering coefficient for nodes.

A *clustering coefficient* is a measure of the degree to which nodes
in a graph tend to cluster together.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **nodes** (*mgp.Nullable[mgp.List[mgp.Vertex]]*) – (default=None)
    Compute clustering for nodes in this container.


* **weight** (*mgp.Nullable[str]*) – (default=None)
    The edge attribute that holds the numerical value used as a weight.
    If `None`, then each edge has weight 1.



**Returns**

Clustering coefficient at specified nodes.



**Return type**

mgp.Record(node=mgp.Vertex, clustering=mgp.Number)



## `communicability(ctx)`
Returns communicability between all pairs of nodes in `G`.

The *communicability* between pairs of nodes in `G` is the sum of
closed walks of different lengths starting at node `u` and ending at node `v`.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

Dictionary of dictionaries keyed by nodes with communicability
    as the value.



**Return type**

mgp.Record(node1=mgp.Vertex, node2=mgp.Vertex, communicability=mgp.Number)



## `core_number(ctx)`
Returns the core number for each vertex.

A *k-core* is a maximal subgraph that contains nodes of degree `k` or more.

The core number of a node is the largest value `k` of a k-core containing
that node.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

A dictionary keyed by node to the core number.



**Return type**

mgp.Record(node=mgp.Vertex, core=mgp.Number)



## `degree_assortativity_coefficient(ctx, x, y, weight, nodes)`
Compute degree assortativity of a graph.

*Assortativity* measures the similarity of connections
in the graph with respect to the node degree.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **x** (*str('in','out')*) – (default=’out’)
    The degree type for source node (directed graphs only).


* **y** (*str('in','out')*) – (default=’in’)
    The degree type for target node (directed graphs only).


* **weight** (*mgp.Nullable[str]*) – (default=None)
    The edge attribute that holds the numerical value used
    as a weight.  If `None`, then each edge has weight 1.
    The degree is the sum of the edge weights adjacent to the node.


* **nodes** (*mgp.Nullable[mgp.List[mgp.Vertex]]*) – (default=None)
    Compute degree assortativity only for nodes in a container.
    The default is all nodes.



**Returns**

Assortativity of graph by degree.



**Return type**

mgp.Record(assortativity=float)



## `descendants(ctx, source)`
Returns all nodes reachable from `source` in `G`.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **source** (*node*) – A node in `G`.



**Returns**

The descendants of `source` in `G`.



**Return type**

mgp.Record(descendants=mgp.List[mgp.Vertex])



## `dfs_postorder_nodes(ctx, source, depth_limit)`
Returns nodes in a depth-first-search post-ordering starting at source.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **source** (*mgp.Vertex*) – Specify starting node for depth-first search.


* **depth_limit** (*mgp.Nullable[int]*) – (default=None)
    Specify the maximum search depth.



**Returns**

A list of nodes in a depth-first-search post-ordering.



**Return type**

mgp.Record(nodes=mgp.List[mgp.Vertex])



## `dfs_predecessors(ctx, source, depth_limit)`
Returns a dictionary of predecessors in depth-first-search from source.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **source** (*mgp.Vertex*) – Specify starting node for depth-first search.


* **depth_limit** (*mgp.Nullable[int]*) – (default=None)
    Specify the maximum search depth.



**Returns**

A dictionary with nodes as keys and predecessor nodes as values.



**Return type**

mgp.Record(node=mgp.Vertex, predecessor=mgp.Vertex)



## `dfs_preorder_nodes(ctx, source, depth_limit)`
Returns nodes in a depth-first-search pre-ordering starting at source.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **source** (*mgp.Vertex*) – Specify starting node for depth-first search and return nodes in
    the component reachable from
    this node.


* **depth_limit** (*mgp.Nullable[int]*) – (default=None)
    Specify the maximum search depth.



**Returns**

A list of nodes in a depth-first-search pre-ordering.



**Return type**

mgp.Record(nodes=mgp.List[mgp.Vertex])



## `dfs_successors(ctx, source, depth_limit)`
Returns a dictionary of successors in depth-first-search from source.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **source** (*mgp.Vertex*) – Specify starting node for depth-first search.


* **depth_limit** (*mgp.Nullable[int]*) – (default=None)
    Specify the maximum search depth.



**Returns**

A dictionary with nodes as keys and list of successor nodes as values.



**Return type**

mgp.Record(node=mgp.Vertex, successors=mgp.List[mgp.Vertex])



## `dfs_tree(ctx, source, depth_limit)`
Returns an oriented tree constructed from a depth-first-search from source.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **source** (*mgp.Vertex*) – Specify starting node for depth-first search.


* **depth_limit** (*mgp.Nullable[int]*) – (default=None)
    Specify the maximum search depth.



**Returns**

An oriented tree.



**Return type**

mgp.Record(tree=mgp.List[mgp.Vertex])



## `diameter(ctx)`
Returns the diameter of the graph `G`.

The diameter is the maximum eccentricity.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

Diameter of graph.



**Return type**

mgp.Record(diameter=int)



## `dominance_frontiers(ctx, start)`
Returns the dominance frontiers of all nodes of a directed graph.

The *dominance frontier* of a node `d` is the set of all
nodes such that `d` dominates an immediate
predecessor of a node, but `d` does not strictly dominate that node.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **start** (*mgp.Vertex*) – The start node of dominance computation.



**Returns**

A dictionary containing the dominance frontiers of each node reachable from
    `start` as lists.



**Return type**

mgp.Record(node=mgp.Vertex, frontier=mgp.List[mgp.Vertex])



## `dominating_set(ctx, start)`
Finds a dominating set for the graph `G`.

A *dominating set* for a graph with node set `V` is a subset `D` of
`V` such that every node not in `D` is adjacent to at least one
member of `D`.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **start** (*mgp.Vertex*) – Node to use as a starting point for the algorithm.



**Returns**

A dominating set for `G`.



**Return type**

mgp.Record(dominating_set=mgp.List[mgp.Vertex])



## `edge_bfs(ctx, source, orientation)`
A directed, breadth-first-search of edges in `G`, beginning at `source`.

Return the edges of `G` in a breadth-first-search order continuing until
all edges are generated.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **source** (*mgp.Nullable[mgp.Vertex]*) – (default=None)
    The node from which the traversal begins. If `None`, then a source
    is chosen arbitrarily and repeatedly until all edges from each node in
    the graph are searched.


* **orientation** (*mgp.Nullable[str]*) – (default=None)
    For directed graphs and directed multigraphs, edge traversals
    need not respect the original orientation of the edges.
    When set to ‘reverse’, every edge is traversed in the reverse direction.
    When set to ‘ignore’, every edge is treated as undirected.
    When set to ‘original’, every edge is treated as directed.
    In all three cases, the returned edge tuples add a last entry to
    indicate the direction in which that edge was traversed.
    If `orientation` is `None`, the returned edge has no direction indicated.
    The direction is respected, but not reported.



**Returns**

A directed edge indicating the path taken by the breadth-first-search.
    For graphs, edge is of the form `(u, v)` where `u` and `v`
    are the tail and head of the edge as determined by the traversal.
    For multigraphs, edge is of the form `(u, v, key)`, where `key` is
    the key of the edge. When the graph is directed, then u and `v`
    are always in the order of the actual directed edge.
    If `orientation` is not `None` then the edge tuple is extended to include
    the direction of traversal (‘forward’ or ‘reverse’) on that edge.



**Return type**

mgp.Record(edges=mgp.List[mgp.Edge])



## `edge_dfs(ctx, source, orientation)`
A directed, depth-first-search of edges in `G`, beginning at `source`.

Return the edges of `G` in a depth-first-search order continuing until
all edges are generated.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **source** (*mgp.Nullable[mgp.Vertex]*) – The node from which the traversal begins. If `None`, then a source
    is chosen arbitrarily and repeatedly until all edges from each node in
    the graph are searched.


* **orientation** (*mgp.Nullable[str]*) – (default=None)
    For directed graphs and directed multigraphs, edge traversals
    need not respect the original orientation of the edges.
    When set to ‘reverse’, every edge is traversed in the reverse direction.
    When set to ‘ignore’, every edge is treated as undirected.
    When set to ‘original’, every edge is treated as directed.
    In all three cases, the returned edge tuples add a last entry to
    indicate the direction in which that edge was traversed.
    If `orientation` is `None`, the returned edge has no direction indicated.
    The direction is respected, but not reported.



**Returns**

A directed edge indicating the path taken by the depth-first traversal.
    For graphs, edge is of the form `(u, v)` where `u` and `v`
    are the tail and head of the edge as determined by the traversal.
    For multigraphs, edge is of the form `(u, v, key)`, where `key` is
    the key of the edge. When the graph is directed, then `u` and `v`
    are always in the order of the actual directed edge.
    If `orientation` is not `None` then the edge tuple is extended to include
    the direction of traversal (‘forward’ or ‘reverse’) on that edge.



**Return type**

mgp.Record(edges=mgp.List[mgp.Edge])



## `find_cliques(ctx)`
Returns all maximal cliques in an undirected graph.

For each node `v`, a *maximal clique* for `v` is a largest complete
subgraph containing `v`. The largest maximal clique is sometimes
called the *maximum clique*.

This function returns an iterator over cliques, each of which is a
list of nodes. It is an iterative implementation, so should not
suffer from recursion depth issues.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

An iterator over maximal cliques, each of which is a list of
    nodes in `G`. The order of cliques is arbitrary.



**Return type**

mgp.Record(cliques=mgp.List[mgp.List[mgp.Vertex]])



## `find_cycle(ctx, source, orientation)`
Returns a cycle found via depth-first traversal.

A *cycle* is a closed path in the graph.
The orientation of directed edges is determined by `orientation`.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **source** (*mgp.Nullable[mgp.List[mgp.Vertex]]*) – (default=None)
    The node from which the traversal begins. If `None`, then a source
    is chosen arbitrarily and repeatedly until all edges from each node in
    the graph are searched.


* **orientation** (*mgp.Nullable[str]*) – (default=None)
    For directed graphs and directed multigraphs, edge traversals
    need not respect the original orientation of the edges.
    When set to ‘reverse’ every edge is traversed in the reverse direction.
    When set to ‘ignore’, every edge is treated as undirected.
    When set to ‘original’, every edge is treated as directed.
    In all three cases, the yielded edge tuples add a last entry to
    indicate the direction in which that edge was traversed.
    If `orientation` is `None`, the yielded edge has no direction indicated.
    The direction is respected, but not reported.



**Returns**

A list of directed edges indicating the path taken for the loop.
    If no cycle is found, then an exception is raised.
    For graphs, an edge is of the form `(u, v)` where `u` and `v`
    are the tail and the head of the edge as determined by the traversal.
    For multigraphs, an edge is of the form `(u, v, key)`, where `key` is
    the key of the edge. When the graph is directed, then `u` and `v`
    are always in the order of the actual directed edge.
    If `orientation` is not `None` then the edge tuple is extended to include
    the direction of traversal (‘forward’ or ‘reverse’) on that edge.



**Return type**

mgp.Record(cycle=mgp.Nullable[mgp.List[mgp.Edge]])



## `flow_hierarchy(ctx, weight)`
Returns the flow hierarchy of a directed network.

*Flow hierarchy* is defined as the fraction of edges not participating
in cycles in a directed graph.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **weight** (*mgp.Nullable[str]*) – (default=None)
    Attribute to use for node weights. If `None`, the weight defaults to 1.



**Returns**

Flow hierarchy value.



**Return type**

mgp.Record(flow_hierarchy=float)



## `global_efficiency(ctx)`
Returns the average global efficiency of the graph.

The *efficiency* of a pair of nodes in a graph is the multiplicative
inverse of the shortest path distance between the nodes. The *average
global efficiency* of a graph is the average efficiency of all pairs of
nodes.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

The average global efficiency of the graph.



**Return type**

mgp.Record(global_efficiency=float)



## `greedy_color(ctx, strategy, interchange)`
Color a graph using various strategies of greedy graph coloring.

Attempts to color a graph using as few colors as possible, where no
neighbours of a node can have the same color as the node itself.
The given strategy determines the order in which nodes are colored.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **strategy** (*str*) – (default=’largest_first’)
    The parameter `function(G,colors)` is a function
    (or a string representing a function) that provides
    the coloring strategy, by returning nodes in the order they
    should be colored. `G` is the graph, and `colors` is a
    dictionary of the currently assigned colors, keyed by nodes. The
    function must return an iterable over all the nodes in `G`.
    If the strategy function is an iterator generator (a function with
    `yield` statements), keep in mind that the `colors` dictionary
    will be updated after each `yield`, since
    this function chooses colors greedily.
    If `strategy` is a string, it must be one of the following,
    each of which represents one of the built-in strategy functions.
    `'largest_first'`
    `'random_sequential'`
    `'smallest_last'`
    `'independent_set'`
    `'connected_sequential_bfs'`
    `'connected_sequential_dfs'`
    `'connected_sequential'` (alias for the previous strategy)
    `'saturation_largest_first'`
    `'DSATUR'` (alias for the previous strategy)


* **interchange** (*bool*) – (default=False)
    Will use the color interchange algorithm if set to `True`.
    Note that `saturation_largest_first` and `independent_set`
    do not work with interchange. Furthermore, if you use
    interchange with your own strategy function, you cannot rely
    on the values in the `colors` argument.



**Returns**

A dictionary with keys representing nodes and values representing
    corresponding coloring.



**Return type**

mgp.Record(node=mgp.Vertex, color=int)



## `has_eulerian_path(ctx)`
Returns `True` if `G` has an Eulerian path.

An *Eulerian path* is a path in a graph that uses each edge of a graph
exactly once.

A directed graph has an Eulerian path if:
* at most one vertex has `out_degree - in_degree = 1`,
* at most one vertex has `in_degree - out_degree = 1`,
* every other vertex has equal in_degree and out_degree,
* and all of its vertices with nonzero degree belong to a
single connected component of the underlying undirected graph.

An undirected graph has an Eulerian path if exactly zero or
two vertices have an odd degree and all of its vertices with
nonzero degrees belong to a single connected component.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

`True` if `G` has an eulerian path.



**Return type**

mgp.Record(has_eulerian_path=bool)



## `has_path(ctx, source, target)`
Returns `True` if `G` has a path from `source` to `target`.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **source** (*mgp.Vertex*) – Starting node for the path.


* **target** (*mgp.Vertex*) – Ending node for the path.



**Returns**

`True` if `G` has a path from `source` to `target`.



**Return type**

mgp.Record(has_path=bool)



## `immediate_dominators(ctx, start)`
Returns the immediate dominators of all nodes of a directed graph.

The immediate dominator of a node is the unique node that
Strictly dominates a node `n` but does not strictly dominate any other node
That dominates `n`.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **start** (*mgp.Vertex*) – The start node of dominance computation.



**Returns**

A dictionary containing the immediate dominators of each node reachable from
    `start`.



**Return type**

mgp.Record(node=mgp.Vertex, dominator=mgp.Vertex)



## `is_arborescence(ctx)`
Returns `True` if `G` is an arborescence.

An *arborescence* is a directed tree with maximum in-degree equal to 1.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

A boolean that is `True` if `G` is an arborescence.



**Return type**

mgp.Record(is_arborescence=bool)



## `is_at_free(ctx)`
Check if a graph is AT-free.

The method uses the find_asteroidal_triple method to recognize
an AT-free graph. If no asteroidal triple is found, the graph is
AT-free and `True` is returned. If at least one asteroidal triple is
found, the graph is not AT-free and `False` is returned.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

`True` if `G` is AT-free and `False` otherwise.



**Return type**

mgp.Record(is_at_free=bool)



## `is_bipartite(ctx)`
Returns `True` if graph `G` is bipartite, `False` if not.

A *bipartite graph* (or bigraph) is a graph whose vertices can be
divided into two disjoint and independent sets\`\`u\`\` and `v` and such that
every edge connects a vertex in `u` one in `v`.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

`True` if `G` is bipartite and `False` otherwise.



**Return type**

mgp.Record(is_bipartite=bool)



## `is_branching(ctx)`
Returns `True` if `G` is a branching.

A *branching* is a directed forest with maximum in-degree equal to 1.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

A boolean that is `True` if `G` is a branching.



**Return type**

mgp.Record(is_branching=bool)



## `is_chordal(ctx)`
Checks whether `G` is a chordal graph.

A graph is *chordal* if every cycle of length at least 4 has a chord
(an edge joining two nodes not adjacent in the cycle).


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

`True` if `G` is a chordal graph and `False` otherwise.



**Return type**

mgp.Record(is_chordal=bool)



## `is_distance_regular(ctx)`
Returns `True` if the graph is distance regular, `False` otherwise.

A connected graph `G` is distance-regular if for any nodes `x,y`
and any integers `i,j=0,1,...,d` (where `d` is the graph
diameter), the number of vertices at distance `i` from `x` and
distance `j` from `y` depends only on `i,j` and the graph distance
between `x` and `y`, independently of the choice of `x` and `y`.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

`True` if the graph is Distance Regular, `False` otherwise.



**Return type**

mgp.Record(is_distance_regular=bool)



## `is_edge_cover(ctx, cover)`
Decides whether a set of edges is a valid edge cover of the graph.

Given a set of edges, it can be decided whether the set is
an *edge covering* if checked whether all nodes of the graph
have an edge from the set incident on it.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **cover** (*mgp.List[mgp.Edge]*) – A list of edges to be checked.



**Returns**

Whether the set of edges is a valid edge cover of the graph.



**Return type**

mgp.Record(is_edge_cover=bool)



## `is_eulerian(ctx)`
Returns `True` if and only if `G` is Eulerian.

A graph is *Eulerian* if it has an Eulerian circuit. An *Eulerian
circuit* is a closed walk that includes each edge of a graph exactly
once.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

`True` if `G` is Eulerian.



**Return type**

mgp.Record(is_eulerian=bool)



## `is_forest(ctx)`
Returns `True` if `G` is a forest.

A *forest* is a graph with no undirected cycles.

For directed graphs, `G` is a forest if the underlying graph is a forest.
The underlying graph is obtained by treating each directed edge as a single
undirected edge in a multigraph.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

A boolean that is `True` if `G` is a forest.



**Return type**

mgp.Record(is_forest=bool)



## `is_isolate(ctx, n)`
Determines whether a node is an isolate.

An *isolate* is a node with no neighbors (that is, with degree
zero). For directed graphs, this means no in-neighbors and no
out-neighbors.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **n** (*mgp.Vertex*) – A node in `G`.



**Returns**

`True` if and only if `n` has no neighbors.



**Return type**

mgp.Record(is_isolate=bool)



## `is_isomorphic(ctx, nodes1, edges1, nodes2, edges2)`
Returns `True` if the graphs `G1` and `G2` are isomorphic
and `False` otherwise.

The two graphs `G1` and `G2` must be the same type.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **nodes1** (*mgp.List[mgp.Vertex]*) – Nodes in `G1`.


* **edges1** (*mgp.List[mgp.Edge]*) – Edges in `G1`.


* **nodes2** (*mgp.List[mgp.Vertex]*) – Nodes in `G2`.


* **edges2** (*mgp.List[mgp.Edge]*) – Edges in `G2`.



**Returns**

`True` if the graphs `G1` and `G2` are isomorphic
    and `False` otherwise.



**Return type**

mgp.Record(is_isomorphic=bool)



## `is_semieulerian(ctx)`
Returns `True` if `G` is semi-Eulerian.

`G` is semi-Eulerian if it has an Eulerian path but no Eulerian circuit.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

`True` if `G` is semi-Eulerian.



**Return type**

mgp.Record(is_semieulerian=bool)



## `is_simple_path(ctx, nodes)`
Returns `True` if and only if the given nodes form a simple path in
`G`.

A *simple path* in a graph is a nonempty sequence of nodes in which
no node appears more than once in the sequence and each adjacent
pair of nodes in the sequence is adjacent in the graph.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **nodes** (*mgp.List[mgp.Vertex]*) – A list of one or more nodes in the graph `G`.



**Returns**

Whether the given list of nodes represents a simple path in `G`.



**Return type**

mgp.Record(is_simple_path=bool)



## `is_strongly_regular(ctx)`
Returns `True` if and only if the given graph is strongly
regular.

An undirected graph is *strongly regular* if


* it is regular,


* each pair of adjacent vertices has the same number of neighbors in
common,


* each pair of nonadjacent vertices has the same number of neighbors
in common.

Each strongly regular graph is a distance-regular graph.
Conversely, if a distance-regular graph has a diameter of two,
then it is a strongly regular graph.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

Whether `G` is strongly regular.



**Return type**

mgp.Record(is_strongly_regular=bool)



## `is_tournament(ctx)`
Returns `True` if and only if `G` is a tournament.

A *tournament* is a directed graph, with neither self-loops nor
multi-edges, in which there is exactly one directed edge joining
each pair of distinct nodes.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

Whether the given graph is a tournament graph.



**Return type**

mgp.Record(is_tournament=bool)



## `is_tree(ctx)`
Returns `True` if `G` is a tree.

A *tree* is a connected graph with no undirected cycles.

For directed graphs, `G` is a tree if the underlying graph is a tree. The
underlying graph is obtained by treating each directed edge as a single
undirected edge in a multigraph.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

A boolean that is `True` if `G` is a tree.



**Return type**

mgp.Record(is_tree=bool)



## `isolates(ctx)`
Returns a list of isolates in the graph.

An *isolate* is a node with no neighbors (that is, with degree
zero). For directed graphs, this means no in-neighbors and no
out-neighbors.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

A list of isolates in `G`.



**Return type**

mgp.Record(isolates=mgp.List[mgp.Vertex])



## `jaccard_coefficient(ctx, ebunch)`
Compute the Jaccard coefficient of all node pairs in `ebunch`.

*Jaccard coefficient* compares members of two sets to see
which members are shared and which are distinct.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **ebunch** (*mgp.Nullable**[**mgp.List**[**mgp.List[mgp.Vertex]**]**]*) – (default=None)
    Jaccard coefficient will be computed for each pair of nodes
    given in the iterable. The pairs must be given as 2-tuples
    `(u, v)` where `u` and `v` are nodes in the graph.
    If `ebunch` is `None` then all non-existent edges in the
    graph will be used.



**Returns**

An iterator of 3-tuples in the form `(u, v, p)` where `(u, v)` is a
    pair of nodes and `p` is their Jaccard coefficient.



**Return type**

mgp.Record(u=mgp.Vertex, v=mgp.Vertex, coef=float)



## `k_clique_communities(ctx, k, cliques)`
Find k-clique communities in a graph using the percolation method.

A *k-clique community* is the union of all cliques of size `k` that
can be reached through adjacent (sharing `k-1` nodes) k-cliques.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **k** (*int*) – Size of the smallest clique.


* **cliques** (*mgp.Nullable**[**mgp.List**[**mgp.List[mgp.Vertex]**]**]*) – (default=None)
    Precomputed cliques (use networkx.find_cliques(G)).



**Returns**

Sets of nodes, one for each k-clique community.



**Return type**

mgp.Record(communities=mgp.List[mgp.List[mgp.Vertex]])



## `k_components(ctx, density)`
Returns the approximate k-component structure of a graph `G`.

A *k-component* is a maximal subgraph of a graph `G` that has, at least,
node connectivity `k`: we need to remove at least `k` nodes to break it
into more components. k-components have an inherent hierarchical
structure because they are nested in terms of connectivity: a connected
graph can contain several 2-components, each of which can contain
one or more 3-components, and so forth.

This implementation is based on the fast heuristics to approximate
the k-component structure of a graph. This, in turn, is based on
a fast approximation algorithm for finding good lower bounds of the number
of node independent paths between two nodes.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **min_density** (*mgp.Number*) – (default=0.95)
    Density relaxation threshold.



**Returns**

Dictionary with connectivity level `k` as key and a list of
    sets of nodes that form a k-component of level `k` as values.



**Return type**

mgp.Record(k=int, components=mgp.List[mgp.List[mgp.Vertex]])



## `k_edge_components(ctx, k)`
Returns nodes in each maximal k-edge-connected component in `G`.

A connected graph is *k-edge-connected* if it remains connected
whenever fewer than k edges are removed. The edge-connectivity of
a graph is the largest k for which the graph is k-edge-connected.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **k** (*int*) – Desired edge connectivity.



**Returns**

A list of k-edge-ccs. Each set of returned nodes
    will have k-edge-connectivity in the graph `G`.



**Return type**

mgp.Record(components=mgp.List[mgp.List[mgp.Vertex]])



## `local_efficiency(ctx)`
Returns the average local efficiency of the graph.

The *efficiency* of a pair of nodes in a graph is the multiplicative
inverse of the shortest path distance between the nodes. The *local
efficiency* of a node in the graph is the average global efficiency of the
subgraph induced by the neighbors of the node. The *average local
efficiency* is the average of the local efficiencies of each node.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

The average local efficiency of the graph.



**Return type**

mgp.Record(local_efficiency=float)



## `lowest_common_ancestor(ctx, node1, node2)`
Compute the lowest common ancestor of the given pair of nodes.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **node1** (*mgp.Vertex*) – A node in the graph.


* **node2** (*mgp.Vertex*) – A node in the graph.



**Returns**

The lowest common ancestor of `node1` and `node2`,
    or default if they have no common ancestors.



**Return type**

mgp.Record(ancestor=mgp.Nullable[mgp.Vertex])



## `maximal_matching(ctx)`
Find a maximal matching in the graph.

A *matching* is a subset of edges in which no node occurs more than once.
A *maximal matching* cannot add more edges and still be a matching.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

A maximal matching of the graph.



**Return type**

mgp.Record(edges=mgp.List[mgp.Edge])



## `minimum_spanning_tree(ctx, weight, algorithm, ignore_nan)`
Returns a minimum spanning tree or forest on an undirected graph `G`.

A *minimum spanning tree* is a subset of the edges of a
connected, undirected graph that connects all of the
vertices together without any cycles.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **weight** (*str*) – (default=’weight’)
    Data key to use for edge weights.


* **algorithm** (*str*) – (default=’kruskal’)
    The algorithm to use when finding a minimum spanning tree.
    Valid choices are ‘kruskal’, ‘prim’, or ‘boruvka’.


* **ignore_nan** (*bool*) – (default=False)
    If `NaN` is found as an edge weight normally an exception is raised.
    If `ignore_nan` is `True` then that edge is ignored.



**Returns**

A minimum spanning tree or forest.



**Return type**

mgp.Record(nodes=mgp.List[mgp.Vertex], edges=mgp.List[mgp.Edge])



## `multi_source_dijkstra_path(ctx, ources, cutoff, weight)`
Find shortest weighted paths in `G` from a given set of source
nodes.

Compute shortest path between any of the source nodes and all other
reachable nodes for a weighted graph.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **sources** (*mgp.List[mgp.Vertex]*) – Starting nodes for paths. If this is a set containing a
    single node, then all paths computed by this function will start
    from that node. If there are two or more nodes in the set, the
    computed paths may begin from any one of the start nodes.


* **cutoff** (*mgp.Nullable[int]*) – (default=None)
    Depth to stop the search. Only return paths with `length <= cutoff`.


* **weight** (*string function*) – If this is a string, then edge weights will be accessed via the
    edge attribute with this key (that is, the weight of the edge
    joining `u` to `v` will be `G.edges[u, v][weight]`). If no
    such edge attribute exists, the weight of the edge is assumed to
    be one. If this is a function, the weight of an edge is the value
    returned by the function. The function must accept exactly three
    positional arguments: the two endpoints of an edge and the
    dictionary of edge attributes for that edge. The function must
    return a number.



**Returns**

A dictionary of shortest paths keyed by target.



**Return type**

mgp.Record(target=mgp.Vertex, path=mgp.List[mgp.Vertex])



## `multi_source_dijkstra_path_length(ctx, sources, cutoff, weight)`
Find shortest weighted path lengths in `G` from a given set of
source nodes.

Compute the shortest path length between any of the source nodes and
all other reachable nodes for a weighted graph.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **sources** (*mgp.List[mgp.Vertex]*) – Starting nodes for paths. If this is a set containing a
    single node, then all paths computed by this function will start
    from that node. If there are two or more nodes in the set, the
    computed paths may begin from any one of the start nodes.


* **cutoff** (*mgp.Nullable[int]*) – (default=None)
    Depth to stop the search. Only return paths with `length <= cutoff`.


* **weight** (*str*) – If this is a string, then edge weights will be accessed via the
    edge attribute with this key (that is, the weight of the edge
    joining `u` to `v` will be `G.edges[u, v][weight]`). If no
    such edge attribute exists, the weight of the edge is assumed to
    be one. If this is a function, the weight of an edge is the value
    returned by the function. The function must accept exactly three
    positional arguments: the two endpoints of an edge and the
    dictionary of edge attributes for that edge. The function must
    return a number.



**Returns**

Dict keyed by node to shortest path length to nearest source.



**Return type**

mgp.Record(target=mgp.Vertex, length=mgp.Number)



## `node_boundary(ctx, nbunch1, bunch2)`
Returns the node boundary of `nbunch1`.

The *node boundary* of a set `S` with respect to a set `T` is the
set of nodes `v` in `T` such that for some `u` in `S`, there is an
edge joining `u` to `v`. If `T` is not specified, it is assumed to
be the set of all nodes not in `S`.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **nbunch1** (*mgp.List[mgp.Vertex]*) – List of nodes in the graph representing the set of nodes
    whose node boundary will be returned. (This is the set `S` from
    the definition above.)


* **nbunch2** (*mgp.Nullable[mgp.List[mgp.Vertex]]*) – List of nodes representing the target (or “exterior”) set of
    nodes. (This is the set `T` from the definition above.) If not
    specified, this is assumed to be the set of all nodes in `G`
    not in `nbunch1`.



**Returns**

The node boundary of `nbunch1` with respect to `nbunch2`.



**Return type**

mgp.Record(boundary=mgp.List[mgp.Vertex])



## `node_connectivity(ctx, source, target)`
Returns an approximation for node connectivity for a graph or digraph `G`.

*Node connectivity* is equal to the minimum number of nodes that
must be removed to disconnect `G` or render it trivial. By Menger’s theorem,
this is equal to the number of node independent paths (paths that
share no nodes other than `source` and `target`).

If `source` and `target` nodes are provided, this function returns the
local node connectivity: the minimum number of nodes that must be
removed to break all paths from source to `target` in `G`.

This algorithm is based on a fast approximation that gives a strict lower
bound on the actual number of node independent paths between two nodes.
It works for both directed and undirected graphs.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **source** (*mgp.Nullable[mgp.Vertex]*) – (default=None)
    Source node.


* **target** (*mgp.Nullable[mgp.Vertex]*) – (default=None)
    Target node.



**Returns**

Node connectivity of `G`, or local node connectivity if `source`
    and `target` are provided.



**Return type**

mgp.Record(connectivity=int)



## `node_expansion(ctx, s)`
Returns the node expansion of the set `S`.

The *node expansion* is the quotient of the size of the node
boundary of `S` and the cardinality of `S`.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **s** (*mgp.List[mgp.Vertex]*) – A sequence of nodes in `G`.



**Returns**

The node expansion of the set `S`.



**Return type**

mgp.Record(node_expansion=mgp.Number)



## `non_randomness(ctx, k)`
Compute the non-randomness of graph `G`.

The first returned value `non_randomness` is the sum of non-randomness
values of all edges within the graph (where the non-randomness of an edge
tends to be small when the two nodes linked by that edge are from two different
communities).

The second computed value `relative_non_randomness` is a relative measure
that indicates to what extent graph `G` is different from random graphs in terms
of probability. When it is close to 0, the graph tends to be more
likely generated by an Erdos Renyi model.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **k** (*mgp.Nullable[int]*) – (default=None)
    The number of communities in `G`.
    If `k` is not set, the function will use a default community
    detection algorithm to set it.



**Returns**

Non-randomness and Relative non-randomness of the graph.



**Return type**

mgp.Record(non_randomness=float, relative_non_randomness=float)



## `pagerank(ctx, alpha, personalization, max_iter, tol, nstart, weight, dangling)`
Returns the PageRank of the nodes in the graph.

*PageRank* computes a ranking of the nodes in the graph `G` based on
the structure of the incoming links. It was originally designed as
an algorithm to rank web pages.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **alpha** (*mgp.Number*) – (default=0.85)
    Damping parameter for PageRank.


* **personalization** (*mgp.Nullable[str]*) – (default=None)
    The “personalization vector” consisting of a dictionary with a
    subset of graph nodes as a key and maps personalization value
    for each subset. At least one personalization value must be non-zero.
    If not specified, a nodes personalization value will be zero.
    By default, a uniform distribution is used.


* **max_iter** (*int*) – (default=100)
    Maximum number of iterations in power method eigenvalue solver.


* **tol** (*mgp.Number*) – (default=1e-06)
    Error tolerance used to check convergence in power method solver.


* **nstart** (*mgp.Nullable[str]*) – (default=None)
    Starting value of PageRank iteration for each node.


* **weight** (*mgp.Nullable[str]*) – (default=’weight’)
    Edge data key to use as weight. If `None`, weights are set to 1.


* **dangling** (*mgp.Nullable[str]*) – (default=None)
    The outedges to be assigned to any “dangling” nodes, i.e., nodes without
    any outedges. The dict key is the node the outedge points to and the dict
    value is the weight of that outedge. By default, dangling nodes are given
    outedges according to the personalization vector (uniform if not
    specified). This must be selected to result in an irreducible transition
    matrix. It may be common to have the dangling dict to be the same as
    the personalization dict.



**Returns**

Dictionary of nodes with PageRank as value.



**Return type**

mgp.Record(node=mgp.Vertex, rank=float)



## `reciprocity(ctx, nodes)`
Compute the reciprocity in a directed graph.

The *reciprocity* of a directed graph is defined as the ratio
of the number of edges pointing in both directions to the total
number of edges in the graph.

The reciprocity of a single node `u` is defined similarly,
it is the ratio of the number of edges in both directions to
the total number of edges attached to node `u`.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **nodes** (*mgp.Nullable[mgp.List[mgp.Vertex]]*) – (default=None)
    Compute reciprocity for nodes in this container.



**Returns**

Reciprocity keyed by node label.



**Return type**

mgp.Record(node=mgp.Nullable[mgp.Vertex], reciprocity=mgp.Nullable[float])



## `shortest_path(ctx, source, target, weight, method)`
Compute shortest paths in the graph.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **source** (*mgp.Nullable[mgp.Vertex]*) – (default=None)
    Starting node for the path. If not specified, compute shortest
    paths for each possible starting node.


* **target** (*mgp.Nullable[mgp.Vertex]*) – (default=None)
    Ending node for the path. If not specified, compute shortest
    paths to all possible nodes.


* **weight** (*mgp.Nullable[str]*) – (default=None)
    If `None`, every edge has weight/distance/cost 1.
    If a string, use this edge attribute as the edge weight.
    Any edge attribute not present defaults to 1.


* **method** (*str*) – (default=’dijkstra’)
    The algorithm used to compute the path.
    Supported options: ‘dijkstra’, ‘bellman-ford’.
    Other inputs produce a ValueError.
    If `weight` is `None`, unweighted graph methods are used
    and this suggestion is ignored.



**Returns**

All returned paths include both the `source` and `target` in the path.
    If the `source` and `target` are both specified, return a single list
    of nodes in a shortest path from the `source` to the `target`.
    If only the `source` is specified, return a dictionary keyed by
    targets with a list of nodes in a shortest path from the `source`
    to one of the targets.
    If only the `target` is specified, return a dictionary keyed by
    sources with a list of nodes in a shortest path from one of the
    sources to the `target`.
    If neither the `source` nor `target` are specified return a dictionary
    of dictionaries with `path[source][target]=[list of nodes in path]`.



**Return type**

mgp.Record(source=mgp.Vertex, target=mgp.Vertex, path=mgp.List[mgp.Vertex])



## `shortest_path_length(ctx, source, target, weight, method)`
Compute shortest path lengths in the graph.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **source** (*mgp.Nullable[mgp.Vertex]*) – (default=None)
    Starting node for the path.
    If not specified, compute shortest path lengths using all nodes as
    source nodes.


* **target** (*mgp.Nullable[mgp.Vertex]*) – (default=None)
    Ending node for the path.
    If not specified, compute shortest path lengths using all nodes as
    target nodes.


* **weight** (*mgp.Nullable[str]*) – (default=None)
    If `None`, every edge has weight/distance/cost 1.
    If a string, use this edge attribute as the edge weight.
    Any edge attribute not present defaults to 1.


* **method** (*str*) – (default=’dijkstra’)
    The algorithm to use to compute the path length.
    Supported options: ‘dijkstra’, ‘bellman-ford’.
    Other inputs produce a ValueError.
    If `weight` is `None`, unweighted graph methods are used
    and this suggestion is ignored.



**Returns**

If the `source` and `target` are both specified, return the length of
    the shortest path from the `source` to the `target`.
    If only the `source` is specified, return a dict keyed by `target`
    to the shortest path length from the `source` to that `target`.
    If only the `target` is specified, return a dict keyed by `source`
    to the shortest path length from that `source` to the `target`.
    If neither the `source` nor `target` are specified, return an iterator
    over (source, dictionary) where dictionary is keyed by `target` to
    shortest path length from `source` to that `target`.



**Return type**

mgp.Record(source=mgp.Vertex, target=mgp.Vertex, length=mgp.Number)



## `simple_cycles(ctx)`
Find simple cycles (elementary circuits) of a directed graph.

A *simple cycle*, or *elementary circuit*, is a closed path where
no node appears twice. Two elementary circuits are distinct if they
are not cyclic permutations of each other.

This is a nonrecursive, iterator/generator version of Johnson’s
algorithm. There may be better algorithms for some cases.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

A list of elementary cycles in the graph.
    Each cycle is represented by a list of nodes in the cycle.



**Return type**

mgp.Record(cycles=mgp.List[mgp.List[mgp.Vertex]])



## `strongly_connected_components(ctx)`
Returns nodes in strongly connected components of a graph.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

A list of lists of nodes, one for each strongly connected
    component of `G`.



**Return type**

mgp.Record(components=mgp.List[mgp.List[mgp.Vertex]])



## `topological_sort(ctx)`
Returns nodes in topologically sorted order.

A *topological sort* is a non unique permutation of the nodes such that an
edge from `u` to `v` implies that `u` appears before `v` in the
topological sort order.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

A list of nodes in topological sorted order.



**Return type**

mgp.Record(nodes=mgp.Nullable[mgp.List[mgp.Vertex]])



## `triadic_census(ctx)`
Determines the triadic census of a directed graph.

The *triadic census* is a count of how many of the 16 possible types of
triads are present in a directed graph.


**Parameters**

* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

Dictionary with triad names as keys and number of occurrences as values.



**Return type**

mgp.Record(triad=str, count=int)



## `voronoi_cells(ctx, center_nodes, weight)`
Returns the Voronoi cells centered at center_nodes with respect
to the shortest-path distance metric.

If `C` is a set of nodes in the graph and `c` is an element of `C`,
the *Voronoi cell* centered at a node `c` is the set of all nodes
`v` that are closer to `c` than to any other center node in `C` with
respect to the shortest-path distance metric.

For directed graphs, this will compute the “outward” Voronoi cells
in which distance is measured from the center nodes to the target node.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **center_nodes** (*mgp.List[mgp.Vertex]*) – A nonempty set of nodes in the graph `G` that represent the
    center of the Voronoi cells.


* **weight** (*str*) – (default=’weight’)
    The edge attribute (or an arbitrary function) representing the
    weight of an edge. This keyword argument is as described in the
    documentation for `networkx.multi_source_dijkstra_path`,
    for example.



**Returns**

A mapping from center node to set of all nodes in the graph
    closer to that center node than to any other center node. The
    keys of the dictionary are the element of `center_nodes`, and
    the values of the dictionary form a partition of the nodes of
    `G`.



**Return type**

mgp.Record(center=mgp.Vertex, cell=mgp.List[mgp.Vertex])



## `wiener_index(ctx, weight)`
Returns the Wiener index of the given graph.

The *Wiener index* of a graph is the sum of the shortest-path
distances between each pair of reachable nodes. For pairs of nodes
in undirected graphs, only one orientation of the pair is counted.


**Parameters**

    
* **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **weight** (*mgp.Nullable[str]*) – (default=None)
    The edge attribute to use as distance when computing
    shortest-path distances. This is passed directly to the
    `networkx.shortest_path_length` function.



**Returns**

The Wiener index of the graph `G`.



**Return type**

mgp.Record(wiener_index=mgp.Number)
