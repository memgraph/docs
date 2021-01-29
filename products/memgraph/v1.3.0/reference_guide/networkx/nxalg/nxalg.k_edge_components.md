# nxalg.k_edge_components


### nxalg.k_edge_components(ctx: mgp.ProcCtx, k: int)
Returns nodes in each maximal k-edge-connected component in `G`.

A connected graph is *k-edge-connected* if it remains connected
whenever fewer than k edges are removed. The edge-connectivity of
a graph is the largest k for which the graph is k-edge-connected.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **k** (*int*) – Desired edge connectivity.



**Returns**

A list of k-edge-ccs. Each set of returned nodes
    will have k-edge-connectivity in the graph `G`.



**Return type**

mgp.Record(components=mgp.List[mgp.List[mgp.Vertex]])
