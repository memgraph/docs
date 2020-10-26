# nxalg.maximal_matching


### nxalg.maximal_matching(ctx: mgp.ProcCtx)
Find a maximal matching in the graph.

A matching is a subset of edges in which no node occurs more than once.
A maximal matching cannot add more edges and still be a matching.


**Parameters**

    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

A maximal matching of the graph.



**Return type**

mgp.Record(edges=mgp.List[mgp.Edge])
