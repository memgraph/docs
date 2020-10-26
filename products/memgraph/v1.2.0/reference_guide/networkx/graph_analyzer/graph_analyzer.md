# graph_analyzer module


### graph_analyzer.analyze(context: mgp.ProcCtx, analyses: mgp.Nullable.typing.List[str] = None)
Shows graph information.

In case of multiple results, only the first 10 will be shown.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **analyses** (*mgp.Nullable[List[str]]*) – (default=None)
    A list of graph analyses to run.
    If NULL, all available analyses are run.



**Returns**

Information about the graph.



**Return type**

mgp.Record(name=str, value=str)


### Examples

Return all information:
`CALL graph_analyzer.analyze() WITH YIELD * ;`

Call with parameter:
`CALL graph_analyzer.analyze(['nodes', 'edges']) YIELD * ;`


### graph_analyzer.analyze_subgraph(context: mgp.ProcCtx, vertices: mgp.List.mgp.Vertex, edges: mgp.List.mgp.Edge, analyses: mgp.Nullable.typing.List[str] = None)
Shows subgraph information.

In case of multiple results, only the first 10 will be shown.


**Parameters**

    
    * **ctx** (*mgp.ProcCtx*) – The context of the procedure being executed.


    * **vertices** (*mgp.List[mgp.Vertex]*) – List of vertices in the subgraph.


    * **edges** (*mgp.List[mgp.Edge]*) – List of edges in the subgraph.


    * **analyses** (*mgp.Nullable[List[str]]*) – (default=None)
    A list of graph analyses to run.
    If NULL, all available analyses are run.



**Returns**

Information about the subgraph.



**Return type**

mgp.Record(name=str, value=str)


### Examples

Return all information:
`MATCH (n)-[e]->(m) WITH
collect(n) AS nodes,
collect(e) AS edges
CALL graph_analyzer.analyze_subgraph(nodes, edges) YIELD *
RETURN name, value;`

Call with parameter:
`MATCH (n)-[e]->(m) WITH
collect(n) AS nodes,
collect(e) AS edges
CALL graph_analyzer.analyze_subgraph(nodes, edges, ['nodes', 'edges'])
YIELD *
RETURN name, value;`


### graph_analyzer.help()
Shows manual page for graph_analyzer.
