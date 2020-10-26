# nxalg.dfs_tree


### nxalg.dfs_tree(ctx: mgp.ProcCtx, source: mgp.Vertex, depth_limit: mgp.Nullable.int = None)
Returns oriented tree constructed from a depth-first-search from source.


* **Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **source** (*mgp.Vertex*) – Specify starting node for depth-first search.


    * **depth_limit** (*mgp.Nullable[int]*) – (default=None)
    Specify the maximum search depth.



* **Returns**

    An oriented tree.



* **Return type**

    mgp.Record(tree=mgp.List[mgp.Vertex])
