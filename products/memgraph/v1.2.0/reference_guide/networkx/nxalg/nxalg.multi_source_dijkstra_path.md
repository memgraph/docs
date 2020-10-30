# nxalg.multi_source_dijkstra_path


### nxalg.multi_source_dijkstra_path(ctx: mgp.ProcCtx, sources: mgp.List.mgp.Vertex, cutoff: mgp.Nullable.int = None, weight: str = 'weight')
Find shortest weighted paths in `G` from a given set of source
nodes.

Compute shortest path between any of the source nodes and all other
reachable nodes for a weighted graph.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **sources** (*mgp.List[mgp.Vertex]*) – Starting nodes for paths. If this is a set containing a
    single node, then all paths computed by this function will start
    from that node. If there are two or more nodes in the set, the
    computed paths may begin from any one of the start nodes.


    * **cutoff** (*mgp.Nullable[int]*) – (default=None)
    Depth to stop the search. Only return paths with `length <= cutoff`.


    * **weight** (*string function*) – If this is a string, then edge weights will be accessed via the
    edge attribute with this key (that is, the weight of the edge
    joining `u` to `v` will be `G.edges[u, v][weight]`). If no
    such edge attribute exists, the weight of the edge is assumed to
    be one. If this is a function, the weight of an edge is the value
    returned by the function. The function must accept exactly three
    positional arguments: the two endpoints of an edge and the
    dictionary of edge attributes for that edge. The function must
    return a number.



**Returns**

A dictionary of shortest paths keyed by target.



**Return type**

mgp.Record(target=mgp.Vertex, path=mgp.List[mgp.Vertex])
