# nxalg.shortest_path_length


### nxalg.shortest_path_length(ctx: mgp.ProcCtx, source: mgp.Nullable.mgp.Vertex = None, target: mgp.Nullable.mgp.Vertex = None, weight: mgp.Nullable.str = None, method: str = 'dijkstra')
Compute shortest path lengths in the graph.


* **Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **source** (*mgp.Nullable[mgp.Vertex]*) – (default=None)
    Starting node for the path.
    If not specified, compute shortest path lengths using all nodes as
    source nodes.


    * **target** (*mgp.Nullable[mgp.Vertex]*) – (default=None)
    Ending node for the path.
    If not specified, compute shortest path lengths using all nodes as
    target nodes.


    * **weight** (*mgp.Nullable[str]*) – (default=None)
    If None, every edge has weight/distance/cost 1.
    If a string, use this edge attribute as the edge weight.
    Any edge attribute not present defaults to 1.


    * **method** (*str*) – (default=’dijkstra’)
    The algorithm to use to compute the path length.
    Supported options: ‘dijkstra’, ‘bellman-ford’.
    Other inputs produce a ValueError.
    If weight is None, unweighted graph methods are used, and this
    suggestion is ignored.



* **Returns**

    If the `source` and `target` are both specified, return the length of
    the shortest path from the `source` to the `target`.

    If only the `source` is specified, return a dict keyed by `target`
    to the shortest path length from the `source` to that `target`.

    If only the `target` is specified, return a dict keyed by `source`
    to the shortest path length from that `source` to the `target`.

    If neither the `source` nor `target` are specified, return an iterator
    over (source, dictionary) where dictionary is keyed by `target` to
    shortest path length from `source` to that `target`.




* **Return type**

    mgp.Record(source=mgp.Vertex, target=mgp.Vertex, length=mgp.Number)
