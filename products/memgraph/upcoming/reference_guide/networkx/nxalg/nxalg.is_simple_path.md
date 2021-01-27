# nxalg.is_simple_path


### nxalg.is_simple_path(ctx: mgp.ProcCtx, nodes: mgp.List.mgp.Vertex)
Returns `True` if and only if the given nodes form a simple path in
`G`.

A *simple path* in a graph is a nonempty sequence of nodes in which
no node appears more than once in the sequence and each adjacent
pair of nodes in the sequence is adjacent in the graph.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **nodes** (*mgp.List[mgp.Vertex]*) – A list of one or more nodes in the graph `G`.



**Returns**

Whether the given list of nodes represents a simple path in `G`.



**Return type**

mgp.Record(is_simple_path=bool)
