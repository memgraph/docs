# nxalg.is_forest


### nxalg.is_forest(ctx: mgp.ProcCtx)
Returns True if `G` is a forest.

A forest is a graph with no undirected cycles.

For directed graphs, `G` is a forest if the underlying graph is a forest.
The underlying graph is obtained by treating each directed edge as a single
undirected edge in a multigraph.


* **Parameters**

    **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



* **Returns**

    A boolean that is True if `G` is a forest.



* **Return type**

    mgp.Record(is_forest=bool)
