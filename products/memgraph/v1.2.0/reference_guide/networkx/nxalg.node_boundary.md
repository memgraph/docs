# nxalg.node_boundary


### nxalg.node_boundary(ctx: mgp.ProcCtx, nbunch1: mgp.List.mgp.Vertex, nbunch2: mgp.Nullable.mgp.List.mgp.Vertex = None)
Returns the node boundary of `nbunch1`.

The *node boundary* of a set `S` with respect to a set `T` is the
set of nodes `v` in `T` such that for some `u` in `S`, there is an
edge joining `u` to `v`. If `T` is not specified, it is assumed to
be the set of all nodes not in `S`.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **nbunch1** (*mgp.List[mgp.Vertex]*) – List of nodes in the graph representing the set of nodes
    whose node boundary will be returned. (This is the set `S` from
    the definition above.)


    * **nbunch2** (*mgp.Nullable[mgp.List[mgp.Vertex]]*) – List of nodes representing the target (or “exterior”) set of
    nodes. (This is the set `T` from the definition above.) If not
    specified, this is assumed to be the set of all nodes in `G`
    not in `nbunch1`.



**Returns**

    The node boundary of `nbunch1` with respect to `nbunch2`.



**Return type**

    mgp.Record(boundary=mgp.List[mgp.Vertex])
