# nxalg.dominating_set


### nxalg.dominating_set(ctx: mgp.ProcCtx, start: mgp.Vertex)
Finds a dominating set for the graph `G`.

A *dominating set* for a graph with node set `V` is a subset `D` of
`V` such that every node not in `D` is adjacent to at least one
member of `D`.


* **Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **start** (*mgp.Vertex*) – Node to use as a starting point for the algorithm.



* **Returns**

    A dominating set for `G`.



* **Return type**

    mgp.Record(dominating_set=mgp.List[mgp.Vertex])
