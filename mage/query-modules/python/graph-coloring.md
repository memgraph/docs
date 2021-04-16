---
id: graph-coloring
title: The graph_coloring module
sidebar_label: graph_coloring
---

## ` color_graph(context, parameters, edge_property)`

Example:

```cypher
CALL graph_coloring.color_graph() YIELD *;
```

## ` color_subgraph(context, vertices, edges, parameters, edge_property)`

Example:

```cypher 
MATCH (a:Cell)-[e:CLOSE_TO]->(b:Cell)
WITH collect(a) as nodes, collect (e) as edges
CALL graph_coloring.color_subgraph(nodes, edges, {no_of_colors: 2})
YIELD color, node
RETURN color, node;
```