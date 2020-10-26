# nxalg.lowest_common_ancestor


### nxalg.lowest_common_ancestor(ctx: mgp.ProcCtx, node1: mgp.Vertex, node2: mgp.Vertex)
Compute the lowest common ancestor of the given pair of nodes.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **node1** (*mgp.Vertex*) – A node in the graph.


    * **node2** (*mgp.Vertex*) – A node in the graph.



**Returns**

The lowest common ancestor of `node1` and `node2`,
    or default if they have no common ancestors.



**Return type**

mgp.Record(ancestor=mgp.Nullable[mgp.Vertex])
