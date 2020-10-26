# nxalg.is_edge_cover


### nxalg.is_edge_cover(ctx: mgp.ProcCtx, cover: mgp.List.mgp.Edge)
Decides whether a set of edges is a valid edge cover of the graph.

Given a set of edges, whether it is an edge covering can
be decided if we just check whether all nodes of the graph
has an edge from the set, incident on it.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **cover** (*mgp.List[mgp.Edge]*) – A list of edges to be checked.



**Returns**

    Whether the set of edges is a valid edge cover of the graph.



**Return type**

    mgp.Record(is_edge_cover=bool)
