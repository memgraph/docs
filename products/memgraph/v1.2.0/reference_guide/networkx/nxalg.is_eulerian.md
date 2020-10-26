# nxalg.is_eulerian


### nxalg.is_eulerian(ctx: mgp.ProcCtx)
Returns True if and only if `G` is Eulerian.

A graph is *Eulerian* if it has an Eulerian circuit. An *Eulerian
circuit* is a closed walk that includes each edge of a graph exactly
once.


**Parameters**

    **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

True if `G` is Eulerian.



**Return type**

mgp.Record(is_eulerian=bool)
