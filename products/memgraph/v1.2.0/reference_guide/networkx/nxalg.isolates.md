# nxalg.isolates


### nxalg.isolates(ctx: mgp.ProcCtx)
Iterator over isolates in the graph.

An *isolate* is a node with no neighbors (that is, with degree
zero). For directed graphs, this means no in-neighbors and no
out-neighbors.


**Parameters**

    **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

    An iterator over the isolates of `G`.



**Return type**

    mgp.Record(isolates=mgp.List[mgp.Vertex])
