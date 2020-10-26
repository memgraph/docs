# nxalg.bfs_predecessors


### nxalg.bfs_predecessors(ctx: mgp.ProcCtx, source: mgp.Vertex, depth_limit: mgp.Nullable.int = None)
Returns an iterator of predecessors in breadth-first-search from source.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **source** (*mgp.Vertex*) – Specify starting node for breadth-first search.


    * **depth_limit** (*mgp.Nullable[int]*) – (default=None)
    Specify the maximum search depth.



**Returns**

    (node, predecessors) iterator where predecessors is the list of
    predecessors of the node.



**Return type**

    mgp.Record(node=mgp.Vertex, predecessor=mgp.Vertex)
