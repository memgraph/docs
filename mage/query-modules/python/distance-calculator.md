---
id: distance-calculator
title: The distance_calculator module
sidebar_label: distance_calculator
---

## `single(context, start, end, metrics)`

This distance calculator procedure  for one entry returns 1 field.

* `distance` is the final result obtained by calculating distance (in meters)
  between the 2 points who each have its latitude and longitude.

The procedure can be invoked in Cypher using the following calls:

```cypher
CALL distance_calculator.single((:Point {lat:1, lng:2}), (:Point {lat:2, lng:3.5})) 
YIELD distance;
MATCH (n1:Point), (n2:Point) 
CALL distance_calculator.procedure(n, 1) 
YIELD * 
RETURN *;
```

## `multiple(context, start_points, end_points, metrics)`

This distance calculator procedure  for multiple entries returns 1 field.

* `distances` is the final result obtained by calculating distances (in meters)
  between pairs of points who each have its latitude and longitude

The procedure can be invoked in openCypher using the following calls:

```cypher
CALL distance_calculator.multiple([(:Point {lat:1, lng:2})]), [(:Point {lat:3,lng:4.5})])) 
YIELD distances;
```