# nxalg.is_bipartite


### nxalg.is_bipartite(ctx: mgp.ProcCtx)
Returns `True` if graph `G` is bipartite, `False` if not.

A *bipartite graph* (or bigraph) is a graph whose vertices can be
divided into two disjoint and independent sets\`\`u\`\` and `v` and such that
every edge connects a vertex in `u` one in `v`.


**Parameters**

    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

`True` if `G` is bipartite and `False` otherwise.



**Return type**

mgp.Record(is_bipartite=bool)
