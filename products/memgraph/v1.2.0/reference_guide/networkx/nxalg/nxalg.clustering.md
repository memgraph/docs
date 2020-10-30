# nxalg.clustering


### nxalg.clustering(ctx: mgp.ProcCtx, nodes: mgp.Nullable.mgp.List.mgp.Vertex = None, weight: mgp.Nullable.str = None)
Compute the clustering coefficient for nodes.

A *clustering coefficient* is a measure of the degree to which nodes
in a graph tend to cluster together.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **nodes** (*mgp.Nullable[mgp.List[mgp.Vertex]]*) – (default=None)
    Compute clustering for nodes in this container.


    * **weight** (*mgp.Nullable[str]*) – (default=None)
    The edge attribute that holds the numerical value used as a weight.
    If `None`, then each edge has weight 1.



**Returns**

Clustering coefficient at specified nodes.



**Return type**

mgp.Record(node=mgp.Vertex, clustering=mgp.Number)
