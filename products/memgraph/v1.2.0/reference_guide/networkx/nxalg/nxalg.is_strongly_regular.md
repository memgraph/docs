# nxalg.is_strongly_regular


### nxalg.is_strongly_regular(ctx: mgp.ProcCtx)
Returns `True` if and only if the given graph is strongly
regular.

An undirected graph is *strongly regular* if


* it is regular,


* each pair of adjacent vertices has the same number of neighbors in
common,


* each pair of nonadjacent vertices has the same number of neighbors
in common.

Each strongly regular graph is a distance-regular graph.
Conversely, if a distance-regular graph has a diameter of two,
then it is a strongly regular graph.


**Parameters**

    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

Whether `G` is strongly regular.



**Return type**

mgp.Record(is_strongly_regular=bool)
