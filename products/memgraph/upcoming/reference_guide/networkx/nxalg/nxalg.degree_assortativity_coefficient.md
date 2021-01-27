# nxalg.degree_assortativity_coefficient


### nxalg.degree_assortativity_coefficient(ctx: mgp.ProcCtx, x: str = 'out', y: str = 'in', weight: mgp.Nullable.str = None, nodes: mgp.Nullable.mgp.List.mgp.Vertex = None)
Compute degree assortativity of a graph.

*Assortativity* measures the similarity of connections
in the graph with respect to the node degree.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **x** (*str('in','out')*) – (default=’out’)
    The degree type for source node (directed graphs only).


    * **y** (*str('in','out')*) – (default=’in’)
    The degree type for target node (directed graphs only).


    * **weight** (*mgp.Nullable[str]*) – (default=None)
    The edge attribute that holds the numerical value used
    as a weight.  If `None`, then each edge has weight 1.
    The degree is the sum of the edge weights adjacent to the node.


    * **nodes** (*mgp.Nullable[mgp.List[mgp.Vertex]]*) – (default=None)
    Compute degree assortativity only for nodes in a container.
    The default is all nodes.



**Returns**

Assortativity of graph by degree.



**Return type**

mgp.Record(assortativity=float)
