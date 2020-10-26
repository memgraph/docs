# nxalg.is_distance_regular


### nxalg.is_distance_regular(ctx: mgp.ProcCtx)
Returns True if the graph is distance regular, False otherwise.

A connected graph `G` is distance-regular if for any nodes `x,y`
and any integers `i,j=0,1,...,d` (where `d` is the graph
diameter), the number of vertices at distance `i` from `x` and
distance `j` from `y` depends only on `i,j` and the graph distance
between `x` and `y`, independently of the choice of `x` and `y`.


**Parameters**

    **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



**Returns**

    True if the graph is Distance Regular, False otherwise.



**Return type**

    mgp.Record(is_distance_regular=bool)
