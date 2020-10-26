# nxalg.triadic_census


### nxalg.triadic_census(ctx: mgp.ProcCtx)
Determines the triadic census of a directed graph.

The triadic census is a count of how many of the 16 possible types of
triads are present in a directed graph.


**Parameters**

    **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

    Dictionary with triad names as keys and number of occurrences as values.



**Return type**

    mgp.Record(triad=str, count=int)
