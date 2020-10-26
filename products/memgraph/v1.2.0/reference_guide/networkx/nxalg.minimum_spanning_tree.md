# nxalg.minimum_spanning_tree


### nxalg.minimum_spanning_tree(ctx: mgp.ProcCtx, weight: str = 'weight', algorithm: str = 'kruskal', ignore_nan: bool = False)
Returns a minimum spanning tree or forest on an undirected graph `G`.


* **Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **weight** (*str*) – (default=’weight’)
    Data key to use for edge weights.


    * **algorithm** (*str*) – ‘kruskal’
    The algorithm to use when finding a minimum spanning tree. Valid
    choices are ‘kruskal’, ‘prim’, or ‘boruvka’.


    * **ignore_nan** (*bool*) – (default=False)
    If a NaN is found as an edge weight normally an exception is raised.
    If ignore_nan is True then that edge is ignored instead.



* **Returns**

    A minimum spanning tree or forest.



* **Return type**

    mgp.Record(nodes=mgp.List[mgp.Vertex], edges=mgp.List[mgp.Edge])
