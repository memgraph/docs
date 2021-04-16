---
id: tsp
title: The tsp module
sidebar_label: tsp
---

## `solve(context, points, method)`

The tsp_module solver returns 2 fields whose elements at indexes are correlated
* `sources` - elements from 1st to n-1th element
* `destinations` - elements from 2nd to nth element

The pairs of them represent individual edges between 2 nodes in the graph.

The required argument is the list of cities one wants to find the path from. The
optional argument `method` is by default 'greedy'. Other arguments that can be
specified are '2-approx' and '1.5-approx'

The procedure can be invoked in openCypher using the following calls:

```cypher 
MATCH (n:Point)
WITH collect(n) as points
CALL tsp_module.solve(points) YIELD sources, destinations;
```