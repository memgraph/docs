# nxalg.is_isolate


### nxalg.is_isolate(ctx: mgp.ProcCtx, n: mgp.Vertex)
Determines whether a node is an isolate.

An *isolate* is a node with no neighbors (that is, with degree
zero). For directed graphs, this means no in-neighbors and no
out-neighbors.


* **Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **n** (*mgp.Vertex*) – A node in `G`.



* **Returns**

    True if and only if `n` has no neighbors.



* **Return type**

    mgp.Record(is_isolate=bool)
