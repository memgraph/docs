# nxalg.shortest_path


### nxalg.shortest_path(ctx: mgp.ProcCtx, source: mgp.Nullable.mgp.Vertex = None, target: mgp.Nullable.mgp.Vertex = None, weight: mgp.Nullable.str = None, method: str = 'dijkstra')
Compute shortest paths in the graph.


* **Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **source** (*mgp.Nullable[mgp.Vertex]*) – (default=None)
    Starting node for the path. If not specified, compute shortest
    paths for each possible starting node.


    * **target** (*mgp.Nullable[mgp.Vertex]*) – (default=None)
    Ending node for the path. If not specified, compute shortest
    paths to all possible nodes.


    * **weight** (*mgp.Nullable[str]*) – (default=None)
    If None, every edge has weight/distance/cost 1.
    If a string, use this edge attribute as the edge weight.
    Any edge attribute not present defaults to 1.


    * **method** (*str*) – (default=’dijkstra’)
    The algorithm to use to compute the path.
    Supported options: ‘dijkstra’, ‘bellman-ford’.
    Other inputs produce a ValueError.
    If `weight` is None, unweighted graph methods are used, and this
    suggestion is ignored.



* **Returns**

    All returned paths include both the `source` and `target` in the path.

    If the `source` and `target` are both specified, return a single list
    of nodes in a shortest path from the `source` to the `target`.

    If only the `source` is specified, return a dictionary keyed by
    targets with a list of nodes in a shortest path from the `source`
    to one of the targets.

    If only the `target` is specified, return a dictionary keyed by
    sources with a list of nodes in a shortest path from one of the
    sources to the `target`.

    If neither the `source` nor `target` are specified return a dictionary
    of dictionaries with `path[source][target]=[list of nodes in path]`.




* **Return type**

    mgp.Record(source=mgp.Vertex, target=mgp.Vertex, path=mgp.List[mgp.Vertex])
