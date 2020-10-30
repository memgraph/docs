# nxalg.is_isomorphic


### nxalg.is_isomorphic(ctx: mgp.ProcCtx, nodes1: mgp.List.mgp.Vertex, edges1: mgp.List.mgp.Edge, nodes2: mgp.List.mgp.Vertex, edges2: mgp.List.mgp.Edge)
Returns `True` if the graphs `G1` and `G2` are isomorphic
and `False` otherwise.

The two graphs `G1` and `G2` must be the same type.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **nodes1** (*mgp.List[mgp.Vertex]*) – Nodes in `G1`.


    * **edges1** (*mgp.List[mgp.Edge]*) – Edges in `G1`.


    * **nodes2** (*mgp.List[mgp.Vertex]*) – Nodes in `G2`.


    * **edges2** (*mgp.List[mgp.Edge]*) – Edges in `G2`.



**Returns**

`True` if the graphs `G1` and `G2` are isomorphic
    and `False` otherwise.



**Return type**

mgp.Record(is_isomorphic=bool)
