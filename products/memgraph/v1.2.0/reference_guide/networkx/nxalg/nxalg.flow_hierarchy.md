# nxalg.flow_hierarchy


### nxalg.flow_hierarchy(ctx: mgp.ProcCtx, weight: mgp.Nullable.str = None)
Returns the flow hierarchy of a directed network.

*Flow hierarchy* is defined as the fraction of edges not participating
in cycles in a directed graph.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **weight** (*mgp.Nullable[str]*) – (default=None)
    Attribute to use for node weights. If `None`, the weight defaults to 1.



**Returns**

Flow hierarchy value.



**Return type**

mgp.Record(flow_hierarchy=float)
