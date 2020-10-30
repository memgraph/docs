# nxalg.reciprocity


### nxalg.reciprocity(ctx: mgp.ProcCtx, nodes: mgp.Nullable.mgp.List.mgp.Vertex = None)
Compute the reciprocity in a directed graph.

The *reciprocity* of a directed graph is defined as the ratio
of the number of edges pointing in both directions to the total
number of edges in the graph.

The reciprocity of a single node `u` is defined similarly,
it is the ratio of the number of edges in both directions to
the total number of edges attached to node `u`.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **nodes** (*mgp.Nullable[mgp.List[mgp.Vertex]]*) – (default=None)
    Compute reciprocity for nodes in this container.



**Returns**

Reciprocity keyed by node label.



**Return type**

mgp.Record(node=mgp.Nullable[mgp.Vertex], reciprocity=mgp.Nullable[float])
