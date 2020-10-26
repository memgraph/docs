# nxalg.find_cycle


### nxalg.find_cycle(ctx: mgp.ProcCtx, source: mgp.Nullable.mgp.List.mgp.Vertex = None, orientation: mgp.Nullable.str = None)
Returns a cycle found via depth-first traversal.

The cycle is a list of edges indicating the cyclic path.
The orientation of directed edges is controlled by `orientation`.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **source** (*mgp.Nullable[mgp.List[mgp.Vertex]]*) – (default=None)
    The node from which the traversal begins. If None, then a source
    is chosen arbitrarily and repeatedly until all edges from each node in
    the graph is searched.


    * **orientation** (*mgp.Nullable[str]*) – (default=None)
    For directed graphs and directed multigraphs, edge traversals need not
    respect the original orientation of the edges.
    When set to ‘reverse’ every edge is traversed in the reverse direction.
    When set to ‘ignore’, every edge is treated as undirected.
    When set to ‘original’, every edge is treated as directed.
    In all three cases, the yielded edge tuples add a last entry to
    indicate the direction in which that edge was traversed.
    If `orientation` is None, the yielded edge has no direction indicated.
    The direction is respected, but not reported.



**Returns**

    A list of directed edges indicating the path taken for the loop.
    If no cycle is found, then an exception is raised.
    For graphs, an edge is of the form `(u, v)` where `u` and `v`
    are the tail and head of the edge as determined by the traversal.
    For multigraphs, an edge is of the form `(u, v, key)`, where `key` is
    the key of the edge. When the graph is directed, then `u` and `v`
    are always in the order of the actual directed edge.
    If `orientation` is not None then the edge tuple is extended to include
    the direction of traversal (‘forward’ or ‘reverse’) on that edge.



**Return type**

    mgp.Record(cycle=mgp.Nullable[mgp.List[mgp.Edge]])
