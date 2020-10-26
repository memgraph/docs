# nxalg.all_shortest_paths


### nxalg.all_shortest_paths(ctx: mgp.ProcCtx, source: mgp.Vertex, target: mgp.Vertex, weight: mgp.Nullable.str = None, method: str = 'dijkstra')
Compute all shortest simple paths in the graph.


* **Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **source** (*mgp.Vertex*) – Starting node for the path.


    * **target** (*mgp.Vertex*) – Ending node for the path.


    * **weight** (*mgp.Nullable[str]*) – (default=None)
    If None, every edge has weight/distance/cost 1.
    If a string, use this edge attribute as the edge weight.
    Any edge attribute not present defaults to 1.


    * **method** (*str*) – (default=’dijkstra’)
    The algorithm to use to compute the path lengths.
    Supported options: ‘dijkstra’, ‘bellman-ford’.
    Other inputs produce a ValueError.
    If `weight` is None, unweighted graph methods are used, and this
    suggestion is ignored.



* **Returns**

    A generator of all paths between source and target.



* **Return type**

    mgp.Record(paths=mgp.List[mgp.List[mgp.Vertex]])
