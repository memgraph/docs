# nxalg.immediate_dominators


### nxalg.immediate_dominators(ctx: mgp.ProcCtx, start: mgp.Vertex)
Returns the immediate dominators of all nodes of a directed graph.


* **Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **start** (*mgp.Vertex*) – The start node of dominance computation.



* **Returns**

    A dictionary containing the immediate dominators of each node reachable from
    `start`.



* **Return type**

    mgp.Record(node=mgp.Vertex, dominator=mgp.Vertex)
