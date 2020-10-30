# nxalg.greedy_color


### nxalg.greedy_color(ctx: mgp.ProcCtx, strategy: str = 'largest_first', interchange: bool = False)
Color a graph using various strategies of greedy graph coloring.

Attempts to color a graph using as few colors as possible, where no
neighbours of a node can have the same color as the node itself.
The given strategy determines the order in which nodes are colored.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **strategy** (*str*) – (default=’largest_first’)
    The parameter `function(G,colors)` is a function
    (or a string representing a function) that provides
    the coloring strategy, by returning nodes in the order they
    should be colored. `G` is the graph, and `colors` is a
    dictionary of the currently assigned colors, keyed by nodes. The
    function must return an iterable over all the nodes in `G`.
    If the strategy function is an iterator generator (a function with
    `yield` statements), keep in mind that the `colors` dictionary
    will be updated after each `yield`, since
    this function chooses colors greedily.
    If `strategy` is a string, it must be one of the following,
    each of which represents one of the built-in strategy functions.
    `'largest_first'`
    `'random_sequential'`
    `'smallest_last'`
    `'independent_set'`
    `'connected_sequential_bfs'`
    `'connected_sequential_dfs'`
    `'connected_sequential'` (alias for the previous strategy)
    `'saturation_largest_first'`
    `'DSATUR'` (alias for the previous strategy)


    * **interchange** (*bool*) – (default=False)
    Will use the color interchange algorithm if set to `True`.
    Note that `saturation_largest_first` and `independent_set`
    do not work with interchange. Furthermore, if you use
    interchange with your own strategy function, you cannot rely
    on the values in the `colors` argument.



**Returns**

A dictionary with keys representing nodes and values representing
    corresponding coloring.



**Return type**

mgp.Record(node=mgp.Vertex, color=int)
