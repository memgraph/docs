# nxalg.biconnected_components


### nxalg.biconnected_components(ctx: mgp.ProcCtx)
Returns a list of sets of nodes, one set for each biconnected
component of the graph

Biconnected components are maximal subgraphs such that the removal of a
node (and all edges incident on that node) will not disconnect the
subgraph. Note that nodes may be part of more than one biconnected
component.  Those nodes are articulation points or cut vertices.  The
removal of articulation points will increase the number of connected
components of the graph.

Notice that by convention a dyad is considered a biconnected component.


**Parameters**

    **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

    A list of sets of nodes, one set for each biconnected component.



**Return type**

    mgp.Record(components=mgp.List[mgp.List[mgp.Vertex]])
