# nxalg.bfs_edges


### nxalg.bfs_edges(ctx: mgp.ProcCtx, source: mgp.Vertex, reverse: bool = False, depth_limit: mgp.Nullable.int = None)
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
