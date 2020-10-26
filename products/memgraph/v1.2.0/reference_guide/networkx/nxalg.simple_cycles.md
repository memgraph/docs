# nxalg.simple_cycles


### nxalg.simple_cycles(ctx: mgp.ProcCtx)
Find simple cycles (elementary circuits) of a directed graph.

A simple cycle, or elementary circuit, is a closed path where
no node appears twice. Two elementary circuits are distinct if they
are not cyclic permutations of each other.

This is a nonrecursive, iterator/generator version of Johnson’s
algorithm. There may be better algorithms for some cases.


**Parameters**

    **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

    A list of elementary cycles in the graph.
    Each cycle is represented by a list of nodes along the cycle.



**Return type**

    mgp.Record(cycles=mgp.List[mgp.List[mgp.Vertex]])
