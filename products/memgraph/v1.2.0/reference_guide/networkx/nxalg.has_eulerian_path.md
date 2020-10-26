# nxalg.has_eulerian_path


### nxalg.has_eulerian_path(ctx: mgp.ProcCtx)
Return True if `G` has an Eulerian path.

An Eulerian path is a path in a graph which uses each edge of a graph
exactly once.

A directed graph has an Eulerian path if:
at most one vertex has `out_degree - in_degree = 1`,
at most one vertex has `in_degree - out_degree = 1`,
every other vertex has equal in_degree and out_degree,
and all of its vertices with nonzero degree belong to a
single connected component of the underlying undirected graph.

An undirected graph has an Eulerian path if exactly zero or
two vertices have an odd degree and all of its vertices with
nonzero degrees belong to a single connected component.


**Parameters**

    **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

    True if `G` has an eulerian path.



**Return type**

    mgp.Record(has_eulerian_path=bool)
