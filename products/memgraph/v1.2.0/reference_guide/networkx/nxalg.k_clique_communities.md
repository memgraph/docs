# nxalg.k_clique_communities


### nxalg.k_clique_communities(ctx: mgp.ProcCtx, k: int, cliques: mgp.Nullable.mgp.List.mgp.List.mgp.Vertex = None)
Find k-clique communities in graph using the percolation method.

A k-clique community is the union of all cliques of size `k` that
can be reached through adjacent (sharing `k-1` nodes) k-cliques.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **k** (*int*) – Size of the smallest clique.


    * **cliques** (*mgp.Nullable**[**mgp.List**[**mgp.List[mgp.Vertex]**]**]*) – (default=None)
    Precomputed cliques (use networkx.find_cliques(G)).



**Returns**

    Sets of nodes, one for each k-clique community.



**Return type**

    mgp.Record(communities=mgp.List[mgp.List[mgp.Vertex]])
