# nxalg.descendants


### nxalg.descendants(ctx: mgp.ProcCtx, source: mgp.Vertex)
Returns all nodes reachable from `source` in `G`.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **source** (*node*) – A node in `G`.



**Returns**

The descendants of `source` in `G`.



**Return type**

mgp.Record(descendants=mgp.List[mgp.Vertex])
