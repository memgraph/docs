# nxalg.node_expansion


### nxalg.node_expansion(ctx: mgp.ProcCtx, s: mgp.List.mgp.Vertex)
Returns the node expansion of the set `S`.

The *node expansion* is the quotient of the size of the node
boundary of `S` and the cardinality of `S`.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **s** (*mgp.List[mgp.Vertex]*) – A sequence of nodes in `G`.



**Returns**

The node expansion of the set `S`.



**Return type**

mgp.Record(node_expansion=mgp.Number)
