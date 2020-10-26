# nxalg.core_number


### nxalg.core_number(ctx: mgp.ProcCtx)
Returns the core number for each vertex.

A k-core is a maximal subgraph that contains nodes of degree `k` or more.

The core number of a node is the largest value `k` of a k-core containing
that node.


**Parameters**

    **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

A dictionary keyed by node to the core number.



**Return type**

mgp.Record(node=mgp.Vertex, core=mgp.Number)
