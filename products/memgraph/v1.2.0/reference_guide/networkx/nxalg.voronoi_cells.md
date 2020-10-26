# nxalg.voronoi_cells


### nxalg.voronoi_cells(ctx: mgp.ProcCtx, center_nodes: mgp.List.mgp.Vertex, weight: str = 'weight')
Returns the Voronoi cells centered at center_nodes with respect
to the shortest-path distance metric.

If `C` is a set of nodes in the graph and `c` is an element of `C`,
the *Voronoi cell* centered at a node `c` is the set of all nodes
`v` that are closer to `c` than to any other center node in `C` with
respect to the shortest-path distance metric.

For directed graphs, this will compute the “outward” Voronoi cells
in which distance is measured from the center nodes to the target node.


* **Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **center_nodes** (*mgp.List[mgp.Vertex]*) – A nonempty set of nodes in the graph `G` that represent the
    center of the Voronoi cells.


    * **weight** (*str*) – (default=’weight’)
    The edge attribute (or an arbitrary function) representing the
    weight of an edge. This keyword argument is as described in the
    documentation for `networkx.multi_source_dijkstra_path`,
    for example.



* **Returns**

    A mapping from center node to set of all nodes in the graph
    closer to that center node than to any other center node. The
    keys of the dictionary are the element of `center_nodes`, and
    the values of the dictionary form a partition of the nodes of
    `G`.



* **Return type**

    mgp.Record(center=mgp.Vertex, cell=mgp.List[mgp.Vertex])
