# nxalg.immediate_dominators


### nxalg.immediate_dominators(ctx: mgp.ProcCtx, start: mgp.Vertex)
Returns the immediate dominators of all nodes of a directed graph.

> The immediate dominator of a node is the unique node that
> Strictly dominates a node `n` but does not strictly dominate any other node
> That dominates `n`.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **start** (*mgp.Vertex*) – The start node of dominance computation.



**Returns**

A dictionary containing the immediate dominators of each node reachable from
    `start`.



**Return type**

mgp.Record(node=mgp.Vertex, dominator=mgp.Vertex)
