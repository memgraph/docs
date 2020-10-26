# nxalg.find_cliques


### nxalg.find_cliques(ctx: mgp.ProcCtx)
Returns all maximal cliques in an undirected graph.

For each node `v`, a *maximal clique* for `v` is a largest complete
subgraph containing `v`. The largest maximal clique is sometimes
called the *maximum clique*.

This function returns an iterator over cliques, each of which is a
list of nodes. It is an iterative implementation, so should not
suffer from recursion depth issues.


**Parameters**

    **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

    An iterator over maximal cliques, each of which is a list of
    nodes in `G`. The order of cliques is arbitrary.



**Return type**

    mgp.Record(cliques=mgp.List[mgp.List[mgp.Vertex]])
