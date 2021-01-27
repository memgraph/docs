# nxalg.is_at_free


### nxalg.is_at_free(ctx: mgp.ProcCtx)
Check if a graph is AT-free.

The method uses the find_asteroidal_triple method to recognize
an AT-free graph. If no asteroidal triple is found, the graph is
AT-free and `True` is returned. If at least one asteroidal triple is
found, the graph is not AT-free and `False` is returned.


**Parameters**

    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

`True` if `G` is AT-free and `False` otherwise.



**Return type**

mgp.Record(is_at_free=bool)
