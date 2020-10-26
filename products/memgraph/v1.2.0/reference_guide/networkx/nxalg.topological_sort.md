# nxalg.topological_sort


### nxalg.topological_sort(ctx: mgp.ProcCtx)
Returns nodes in topologically sorted order.

A topological sort is a nonunique permutation of the nodes such that an
edge from u to v implies that u appears before v in the topological sort
order.


**Parameters**

    **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

    An list of nodes in topological sorted order.



**Return type**

    mgp.Record(nodes=mgp.Nullable[mgp.List[mgp.Vertex]])
