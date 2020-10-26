# nxalg.is_chordal


### nxalg.is_chordal(ctx: mgp.ProcCtx)
Checks whether `G` is a chordal graph.

A graph is chordal if every cycle of length at least 4 has a chord
(an edge joining two nodes not adjacent in the cycle).


**Parameters**

    **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

True if `G` is a chordal graph and False otherwise.



**Return type**

mgp.Record(is_chordal=bool)
