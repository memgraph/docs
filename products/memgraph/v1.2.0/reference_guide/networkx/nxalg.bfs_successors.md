# nxalg.bfs_successors


### nxalg.bfs_successors(ctx: mgp.ProcCtx, source: mgp.Vertex, depth_limit: mgp.Nullable.int = None)
Returns an iterator of successors in breadth-first-search from source.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **source** (*node*) – Specify starting node for breadth-first search.


    * **depth_limit** (*int optional*) – (default=None)
    Specify the maximum search depth.



**Returns**

    (node, successors) iterator where successors is the list of
    successors of the node.



**Return type**

    mgp.Record(node=mgp.Vertex, successors=mgp.List[mgp.Vertex])
