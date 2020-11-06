# nxalg.dfs_postorder_nodes


### nxalg.dfs_postorder_nodes(ctx: mgp.ProcCtx, source: mgp.Vertex, depth_limit: mgp.Nullable.int = None)
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
