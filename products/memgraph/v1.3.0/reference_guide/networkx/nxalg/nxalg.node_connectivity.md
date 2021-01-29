# nxalg.node_connectivity


### nxalg.node_connectivity(ctx: mgp.ProcCtx, source: mgp.Nullable.mgp.Vertex = None, target: mgp.Nullable.mgp.Vertex = None)
Returns an approximation for node connectivity for a graph or digraph `G`.

*Node connectivity* is equal to the minimum number of nodes that
must be removed to disconnect `G` or render it trivial. By Menger’s theorem,
this is equal to the number of node independent paths (paths that
share no nodes other than `source` and `target`).

If `source` and `target` nodes are provided, this function returns the
local node connectivity: the minimum number of nodes that must be
removed to break all paths from source to `target` in `G`.

This algorithm is based on a fast approximation that gives a strict lower
bound on the actual number of node independent paths between two nodes.
It works for both directed and undirected graphs.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **source** (*mgp.Nullable[mgp.Vertex]*) – (default=None)
    Source node.


    * **target** (*mgp.Nullable[mgp.Vertex]*) – (default=None)
    Target node.



**Returns**

Node connectivity of `G`, or local node connectivity if `source`
    and `target` are provided.



**Return type**

mgp.Record(connectivity=int)
