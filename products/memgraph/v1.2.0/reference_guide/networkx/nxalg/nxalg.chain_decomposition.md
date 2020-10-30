# nxalg.chain_decomposition


### nxalg.chain_decomposition(ctx: mgp.ProcCtx, root: mgp.Nullable.mgp.Vertex = None)
Returns the chain decomposition of a graph.

The *chain decomposition* of a graph with respect a depth-first
search tree is a set of cycles or paths derived from the set of
fundamental cycles of the tree in the following manner. Consider
each fundamental cycle with respect to the given tree, represented
as a list of edges beginning with the non tree edge oriented away
from the root of the tree. For each fundamental cycle, if it
overlaps with any previous fundamental cycle, just take the initial
non-overlapping segment, which is a path instead of a cycle. Each
cycle or path is called a *chain*.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **root** (*mgp.Nullable[mgp.Vertex]*) – (default=None)
    Optional. A node in the graph `G`. If specified, only the chain
    decomposition for the connected component containing this node
    will be returned. This node indicates the root of the depth-first
    search tree.



**Returns**

A list of edges representing a chain. There is no guarantee on
    the orientation of the edges in each chain (for example, if a
    chain includes the edge joining nodes 1 and 2, the chain may
    include either (1, 2) or (2, 1)).



**Return type**

mgp.Record(chains=mgp.List[mgp.List[mgp.Edge]])
