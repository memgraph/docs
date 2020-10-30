# nxalg.is_tournament


### nxalg.is_tournament(ctx: mgp.ProcCtx)
Returns True if and only if `G` is a tournament.

A *tournament* is a directed graph, with neither self-loops nor
multi-edges, in which there is exactly one directed edge joining
each pair of distinct nodes.


**Parameters**

    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

Whether the given graph is a tournament graph.



**Return type**

mgp.Record(is_tournament=bool)
