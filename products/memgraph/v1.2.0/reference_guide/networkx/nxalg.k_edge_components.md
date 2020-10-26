# nxalg.k_edge_components


### nxalg.k_edge_components(ctx: mgp.ProcCtx, k: int)
Generates nodes in each maximal k-edge-connected component in `G`.


* **Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **k** (*int*) – Desired edge connectivity.



* **Returns**

    A generator of k-edge-ccs. Each set of returned nodes
    will have k-edge-connectivity in the graph `G`.



* **Return type**

    mgp.Record(components=mgp.List[mgp.List[mgp.Vertex]])
