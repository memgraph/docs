---
id: set-cover
title: The set_cover module
sidebar_label: set_cover
---

## `cp_solve(context, element_vertexes, set_vertexes)`

This set cover solver method returns 1 filed
* `resulting_sets` is a minimal set of sets in which all the elements have been
  contained

The input arguments consist of
* `element_vertexes` that is a list of element nodes
* `set_vertexes` that is a list of set nodes those elements are contained in

Element and set equivalents at a certain index come in pairs so mappings between
sets and elements are consistent.

The procedure can be invoked in Cypher using the following calls, e.g.: 

```cypher 
CALL set_cover.cp_solve([(:Point), (:Point)], [(:Set), (:Set)]) 
YIELD resulting_sets;
```

The method uses constraint programming as a solving tool for obtaining a minimal
set of sets that contain all the elements.

## `greedy(context, element_vertexes, set_vertexes)`

This set cover solver method returns 1 filed
* `resulting_sets` is a minimal set of sets in which all the elements have been
  contained

The input arguments consist of
* `element_vertexes` that is a list of element nodes
* `set_vertexes` that is a list of set nodes those elements are contained in

Element and set equivalents at a certain index come in pairs so mappings between
sets and elements are consistent.

The procedure can be invoked in openCypher using the following calls, e.g.:

```cypher 
CALL set_cover.cp_solve([(:Point), (:Point)], [(:Set), (:Set)]) 
YIELD resulting_sets;
```

The method uses a greedy method as a solving tool for obtaining a minimal set of
sets that contain all the elements.