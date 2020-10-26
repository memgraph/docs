# nxalg.jaccard_coefficient


### nxalg.jaccard_coefficient(ctx: mgp.ProcCtx, ebunch: mgp.Nullable.mgp.List.mgp.List.mgp.Vertex = None)
Compute the Jaccard coefficient of all node pairs in `ebunch`.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **ebunch** (*mgp.Nullable**[**mgp.List**[**mgp.List[mgp.Vertex]**]**]*) – (default=None)
    Jaccard coefficient will be computed for each pair of nodes
    given in the iterable. The pairs must be given as 2-tuples
    (u, v) where u and v are nodes in the graph. If `ebunch` is None
    then all non-existent edges in the graph will be used.
    Default value: None.



**Returns**

An iterator of 3-tuples in the form `(u, v, p)` where `(u, v)` is a
    pair of nodes and `p` is their Jaccard coefficient.



**Return type**

mgp.Record(u=mgp.Vertex, v=mgp.Vertex, coef=float)
