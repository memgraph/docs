# nxalg.edge_dfs


### nxalg.edge_dfs(ctx: mgp.ProcCtx, source: mgp.Nullable.mgp.Vertex = None, orientation: mgp.Nullable.str = None)
A directed, depth-first-search of edges in `G`, beginning at `source`.

Return the edges of `G` in a depth-first-search order continuing until
all edges are generated.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **source** (*mgp.Nullable[mgp.Vertex]*) – The node from which the traversal begins. If None, then a source
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
