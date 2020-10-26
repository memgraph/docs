# nxalg.bfs_tree


### nxalg.bfs_tree(ctx: mgp.ProcCtx, source: mgp.Vertex, reverse: bool = False, depth_limit: mgp.Nullable.int = None)
Returns an oriented tree constructed from of a breadth-first-search
starting at source.


* **Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **source** (*mgp.Vertex*) – Specify starting node for breadth-first search.


    * **reverse** (*bool*) – (default=False)
    If True traverse a directed graph in the reverse direction.


    * **depth_limit** (*mgp.Nullable[int]*) – (default=None)
    Specify the maximum search depth.



* **Returns**

    An oriented tree.



* **Return type**

    mgp.Record(tree=mgp.List[mgp.Vertex])
