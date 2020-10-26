# nxalg.has_path


### nxalg.has_path(ctx: mgp.ProcCtx, source: mgp.Vertex, target: mgp.Vertex)
Returns True if `G` has a path from `source` to `target`.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **source** (*mgp.Vertex*) – Starting node for the path.


    * **target** (*mgp.Vertex*) – Ending node for the path.



**Returns**

    True if `G` has a path from `source` to `target`.



**Return type**

    mgp.Record(has_path=bool)
