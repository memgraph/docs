# nxalg.wiener_index


### nxalg.wiener_index(ctx: mgp.ProcCtx, weight: mgp.Nullable.str = None)
Returns the Wiener index of the given graph.

The *Wiener index* of a graph is the sum of the shortest-path
distances between each pair of reachable nodes. For pairs of nodes
in undirected graphs, only one orientation of the pair is counted.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **weight** (*mgp.Nullable[str]*) – (default=None)
    The edge attribute to use as distance when computing
    shortest-path distances. This is passed directly to the
    `networkx.shortest_path_length` function.



**Returns**

The Wiener index of the graph `G`.



**Return type**

mgp.Record(wiener_index=mgp.Number)
