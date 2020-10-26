# nxalg.k_components


### nxalg.k_components(ctx: mgp.ProcCtx, density: mgp.Number = 0.95)
Returns the approximate k-component structure of a graph `G`.

A k-component is a maximal subgraph of a graph `G` that has, at least,
node connectivity `k`: we need to remove at least `k` nodes to break it
into more components. k-components have an inherent hierarchical
structure because they are nested in terms of connectivity: a connected
graph can contain several 2-components, each of which can contain
one or more 3-components, and so forth.

This implementation is based on the fast heuristics to approximate
the k-component structure of a graph. Which, in turn, it is based on
a fast approximation algorithm for finding good lower bounds of the number
of node independent paths between two nodes.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **min_density** (*mgp.Number*) – (default=0.95)
    Density relaxation threshold.



**Returns**

    Dictionary with connectivity level `k` as key and a list of
    sets of nodes that form a k-component of level `k` as values.



**Return type**

    mgp.Record(k=int, components=mgp.List[mgp.List[mgp.Vertex]])
