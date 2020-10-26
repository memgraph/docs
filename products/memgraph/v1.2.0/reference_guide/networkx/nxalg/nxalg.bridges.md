# nxalg.bridges


### nxalg.bridges(ctx: mgp.ProcCtx, root: mgp.Nullable.mgp.Vertex = None)
Generate all bridges in a graph.

A *bridge* in a graph is an edge whose removal causes the number of
connected components of the graph to increase.  Equivalently, a bridge is an
edge that does not belong to any cycle.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **root** (*mgp.Nullable[mgp.Vertex]*) – (default=None)
    A node in the graph `G`. If specified, only the bridges in the
    connected component containing this node will be returned.



**Returns**

An edge in the graph whose removal disconnects the graph (or
    causes the number of connected components to increase).



**Return type**

mgp.Record(bridges=mgp.List[mgp.Edge])
