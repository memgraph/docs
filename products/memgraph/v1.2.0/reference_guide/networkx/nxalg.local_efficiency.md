# nxalg.local_efficiency


### nxalg.local_efficiency(ctx: mgp.ProcCtx)
Returns the average local efficiency of the graph.

The *efficiency* of a pair of nodes in a graph is the multiplicative
inverse of the shortest path distance between the nodes. The *local
efficiency* of a node in the graph is the average global efficiency of the
subgraph induced by the neighbors of the node. The *average local
efficiency* is the average of the local efficiencies of each node.


* **Parameters**

    **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.



* **Returns**

    The average local efficiency of the graph.



* **Return type**

    mgp.Record(local_efficiency=float)
