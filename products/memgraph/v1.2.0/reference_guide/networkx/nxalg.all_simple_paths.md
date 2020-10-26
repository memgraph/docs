# nxalg.all_simple_paths


### nxalg.all_simple_paths(ctx: mgp.ProcCtx, source: mgp.Vertex, target: mgp.Vertex, cutoff: mgp.Nullable.int = None)
Generate all simple paths in the graph `G` from source to target.

A simple path is a path with no repeated nodes.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **source** (*mgp.Vertex*) – Starting node for the path.


    * **target** (*mgp.Vertex*) – Ending node for the path.


    * **cutoff** (*mgp.Nullable[int]*) – (default=None)
    Depth to stop the search. Only paths of `length <= cutoff` are returned.



**Returns**

A generator that produces lists of simple paths. If there are no paths
    between the source and target within the given cutoff the generator
    produces no output.



**Return type**

mgp.Record(paths=mgp.List[mgp.List[mgp.Vertex]])
