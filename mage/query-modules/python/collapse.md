---
id: collapse
title: The collapse module
sidebar_label: collapse
---

## `collapse(context, vertices, collapse_edge_types, collapse_pseudo_node_labels)`

Returns collapsed graph. Returned collapsed graph is a list of records:
(from_node, path, to_node).

Algorithm collapses all related vertices into a one of the top vertices. List of
top vertices is given by `vertices` parameter If edge has one of the types
defined in `collapse_edge_types` parameter, edge to_vertex will be collapsed in
the same top vertex as edge from_vertex.

`collapse_pseudo_node_labels` is optional parameter. This parameter must be used
if top vertices are connected with pseudo vertex (vertices with exactly one
input edge and exactly one output edge).

Path can contain one edge or two edges. Path contains two edges in a pseudo
vertex case.

Procedure will raise error if any of pseudo vertices defined by
`collapse_pseudo_node_labels` parameter will have more or less than one input
and one output edges.

Procedure will raise an error if collapsed groups aren't disjunctive sets.

Example call:

```cypher
MATCH (n:Plant) WITH COLLECT(n) AS nodes
CALL collapse.collapse(nodes, ["OWN"], ["Transport"])
YIELD from_vertex, path, to_vertex
RETURN from_vertex, nodes(path), to_vertex;
```

## `groups(context, vertices, collapse_edge_types, collapse_pseudo_node_labels)`

Returns top vertices with corresponding collapsed vertices. Returned list of
records are: (top_vertex, collapsed_vertices).

Algorithm collapses all related vertices into a one of the top vertices. List of
top vertices is given by `vertices` parameter. If edge has one of the types
defined in `collapse_edge_types` parameter, edge to_vertex will be collapsed in
the same top vertex as edge from_vertex.

`collapse_pseudo_node_labels` is optional parameter. This parameter must be used
if top vertices are connected with pseudo vertex (vertices with exactly one
input edge and exactly one output edge).

Path can contain one edge or two edges. Path contains two edges in a pseudo
vertex case.

Procedure will raise error if any of pseudo vertices defined by
`collapse_pseudo_node_labels` parameter will have more or less than one input
and one output edges.

Procedure will raise an error if collapsed groups aren't disjunctive sets.

Example call:

```cypher
MATCH (n:Plant) WITH COLLECT(n) AS nodes
CALL collapse.groups(nodes, ["OWN"], ["Transport"])
YIELD *
RETURN top_vertex, collapsed_vertices;
```
