# nxalg.dominance_frontiers


### nxalg.dominance_frontiers(ctx: mgp.ProcCtx, start: mgp.Vertex)
Returns the dominance frontiers of all nodes of a directed graph.

The *dominance frontier* of a node `d` is the set of all
nodes such that `d` dominates an immediate
predecessor of a node, but `d` does not strictly dominate that node.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **start** (*mgp.Vertex*) – The start node of dominance computation.



**Returns**

A dictionary containing the dominance frontiers of each node reachable from
    `start` as lists.



**Return type**

mgp.Record(node=mgp.Vertex, frontier=mgp.List[mgp.Vertex])
