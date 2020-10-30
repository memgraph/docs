# nxalg.dfs_preorder_nodes


### nxalg.dfs_preorder_nodes(ctx: mgp.ProcCtx, source: mgp.Vertex, depth_limit: mgp.Nullable.int = None)
Return nodes in a depth-first-search pre-ordering starting at source.


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
