# nxalg.strongly_connected_components


### nxalg.strongly_connected_components(ctx: mgp.ProcCtx)
Returns nodes in strongly connected components of a graph.


**Parameters**

    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

A list of lists of nodes, one for each strongly connected
    component of `G`.



**Return type**

mgp.Record(components=mgp.List[mgp.List[mgp.Vertex]])
