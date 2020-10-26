# nxalg.dfs_predecessors


### nxalg.dfs_predecessors(ctx: mgp.ProcCtx, source: mgp.Vertex, depth_limit: mgp.Nullable.int = None)
Returns dictionary of predecessors in depth-first-search from source.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **source** (*mgp.Vertex*) – Specify starting node for depth-first search.


    * **depth_limit** (*mgp.Nullable[int]*) – (default=None)
    Specify the maximum search depth.



**Returns**

A dictionary with nodes as keys and predecessor nodes as values.



**Return type**

mgp.Record(node=mgp.Vertex, predecessor=mgp.Vertex)
