# nxalg.global_efficiency


### nxalg.global_efficiency(ctx: mgp.ProcCtx)
Returns the average global efficiency of the graph.

The *efficiency* of a pair of nodes in a graph is the multiplicative
inverse of the shortest path distance between the nodes. The *average
global efficiency* of a graph is the average efficiency of all pairs of
nodes.


**Parameters**

    **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

    The average global efficiency of the graph.



**Return type**

    mgp.Record(global_efficiency=float)
