---
id: built-in-graph-algorithms
title: Built-in graph algorithms
sidebar_label: Built-in graph algorithms
---

Graph algorithms are a set of instructions that traverse (visits nodes of) a
graph and find specific nodes, paths, or a path between two nodes. Some of these
algorithms are built into Memgraph and don't require any additional libraries:

  * [Depth-first search (DFS)](#depth-first-search)
  * [Breadth-first search (BFS)](#breadth-first-search)
  * [Weighted shortest path (WSP)](#weighted-shortest-path)
  * [All shortest paths (ASP)](#all-shortest-paths)


Below you can find examples of how to use these algorithms, and you can try them out
in the [Playground
sandbox](https://playground.memgraph.com/sandbox/europe-backpacking) using the
Europe backpacking dataset, or adjust them to the dataset of your choice. 

:::tip

Memgraph has a lot more graph algorithms to offer besides these three, and they
are all a part of [MAGE](/mage) - Memgraph Advanced Graph Extensions, an
open-source repository that contains graph algorithms and modules written in the
form of query modules that can be used to tackle the most interesting and
challenging graph analytics problems. Check the [full list of algorithms](/mage/algorithms). 

:::

## Depth-first search

Depth-first search (DFS) is an algorithm for traversing through the graph. The
algorithm starts at the root node and explores each neighboring node as far as
possible. The moment it reaches a dead-end, it backtracks until it finds a new,
undiscovered node, then traverses from that node to find more undiscovered
nodes. In that way, the algorithm visits each node in the graph.

DFS in Memgraph has been implemented based on the relationship expansion syntax
which allows it to find multiple relationships between two nodes if such exist.
Below are several examples of how to use the DFS in Memgraph.

### Getting various results

The following query will show all the paths from node `n` to node `m`:

```cypher
MATCH path=(n {id: 0})-[*]->(m {id: 8}) 
RETURN path;
```

To get the list of all relationships, add a variable in the square brackets and
return it as a result:

```cypher
MATCH (n {id: 0})-[relationships *]->(m {id: 8}) 
RETURN relationships;
```

To get the list of path nodes, use the `nodes()` function:

```cypher
MATCH path=(n {id: 0})-[*]->(m {id: 8}) 
RETURN path,nodes(path);
```

### Filtering by relationships type and direction

You can filter relationships by type by defining the type after the relationship
list variable, and you decide the direction by adding or removing an arrow from
the dash.

In the following example, the algorithm will traverse only across `CloseTo` type
of relationships:

```cypher
MATCH path=(n {id: 0})-[relationships:CloseTo *]->(m {id: 8}) 
RETURN path,relationships;
```

You can also list multiple relationship types and allow your algorithm to traverse across any of them.

In the following example, the algorithm will traverse across any of the `CloseTo`, `Borders` or the `Inside` type
of relationship: 

```cypher
MATCH path=(n {id: 0})-[relationships:CloseTo | :Borders | :Inside *]->(m {id: 8}) 
RETURN path,relationships;
```

Be careful when using algorithms, especially DFS, without defining a direction.
Depending on the size of the dataset, the execution of the query can cause a
timeout. 

### Constraining the path's length

The constraints on the path length are defined after the asterisk sign. The
following query will return all the results when the path is equal to or shorter
than 5 hops:

```cypher
MATCH path=(n {id: 0})-[relationships * ..5]->(m {id: 8}) 
RETURN path,relationships;
```

This query will return all the paths that are equal to or longer than 3, and
equal to or shorter than 5 hops:

```cypher
MATCH path=(n {id: 0})-[relationships * 3..5]->(m {id: 8}) 
RETURN path,relationships;
```

### Constraining the expansion based on property values

Depth-first expansion allows an arbitrary expression filter that determines if
an expansion is allowed over a certain relationship to a certain node. The
filter is defined as a lambda function over `r` and `n`, which denotes the
relationship expanded over and node expanded to in the depth-first search. 

In the following example, expansion is allowed over relationships with an `eu_border`
property equal to `false` and to nodes with a `drinks_USD` property less than `15`:

```cypher
MATCH path=(n {id: 0})-[* (r, n | r.eu_border = false AND n.drinks_USD < 15)]->(m {id: 8}) 
RETURN path;
```

## Breadth-first search

In breadth-first search (BFS) traversal starts from a single node, and the order of
visited nodes is decided based on nodes' breadth (distance from the source
node). This means that when a certain node is visited, it can be safely assumed
that all nodes that are fewer relationships away from the source node have
already been visited, resulting in the shortest path from the source node to the
newly visited node. 

BFS in Memgraph has been implemented based on the relationship expansion syntax.
There are a few benefits of the breadth-first expansion approach, instead of
a specialized function. For one, it is possible to inject expressions that
filter nodes and relationships along the path itself, not just the final
destination node. Furthermore, it's possible to find multiple paths to multiple
destination nodes. Also, it is possible to simply go through a node's
neighborhood in breadth-first manner.

Currently, it isn't possible to get all the shortest paths to a single node using
Memgraph's breadth-first expansion. Below are several examples of how to use the BFS
in Memgraph.

### Getting various results

The following query will show the shortest path between nodes `n` and `m` as a
graph result.

```cypher
MATCH path=(n {id: 0})-[*BFS]->(m {id: 8}) 
RETURN path;
```

To get the list of relationships, add a variable before the `*BFS` and return
it as a result:

```cypher
MATCH (n {id: 0})-[relationships *BFS]->(m {id: 8}) 
RETURN relationships;
```

To get a list of path nodes use the `nodes()` function. You can then return the
results as a list, or use the `UNWIND` clause to return individual node
properties:

```cypher
MATCH path=(n {id: 0})-[*BFS]->(m {id: 8}) 
RETURN nodes(path);
```

### Filtering by relationships type and direction

You can filter relationships by type by defining the type after the relationship
list variable, and you decide the direction by adding or removing an arrow from
the dash.

In the following example, the algorithm will traverse only across `CloseTo` type
of relationships regardless of the direction:

```cypher
MATCH (n {id: 0})-[relationships:CloseTo *BFS]-(m {id: 8}) 
RETURN relationships;
```

### Constraining the path's length

The constraints on the path length are defined after the *BFS. The following
query will return a result only if the path is equal to or shorter than 5 hops:

```cypher
MATCH (n {id: 0})-[relationships:CloseTo *BFS ..5]->(m {id: 8}) 
RETURN relationships;
```

The result will be returned only if the path is equal to or longer than 3, and
equal to or shorter than 5 hops:

```cypher
MATCH (n {id: 0})-[relationships:CloseTo *BFS 3..5]-(m {id: 15}) 
RETURN relationships;
```

### Constraining the expansion based on property values

Breadth-first expansion allows an arbitrary expression filter that determines if
an expansion is allowed over a certain relationship to a certain node. The
filter is defined as a lambda function over `r` and `n`, which denotes the
relationship expanded over and node expanded to in the breadth-first search. 

In the following example, expansion is allowed over relationships with an `eu_border`
property equal to `false` and to nodes with a `drinks_USD` property less than `15`:

```cypher
MATCH path=(n {id: 0})-[*BFS (r, n | r.eu_border = false AND n.drinks_USD < 15)]-(m {id: 8}) 
RETURN path;
```

## Weighted shortest path

In graph theory, the weighted shortest path problem is the problem of finding a path
between two nodes in a graph such that the sum of the weights of relationships
connecting nodes, or the sum of the weight of some node property on the path, is
minimized.

One of the most important algorithms for finding weighted shortest paths is
**Dijkstra's algorithm**. In Memgraph it has been implemented based on the
relationship expansion syntax. In the brackets following the `*WSHORTEST`
algorithm definition, you need to define what relationship or node property
carries the weight, for example, `[*WSHORTEST (r, n | r.weight)]`. Below are
several examples of how to use the WSHORTEST in Memgraph.

### Getting various results

To find the weighted shortest path between nodes based on the value of the
`total_USD` node property, traversing only across `CloseTo` relationships and
return the result as a graph, use the following query:

```cypher
MATCH path=(n {id: 0})-[:CloseTo *WSHORTEST (r, n | n.total_USD)]-(m {id: 15})
RETURN path;
```

In the above example, the weight is a property of a node, but you can also
use weight of some relationship property:

```cypher
MATCH path=(n {id: 0})-[:Type *WSHORTEST (r, n | r.weight)]-(m {id: 9})
RETURN path;
```

To get the list of relationships, add a variable before the `*WSHORTEST` and
return it as a result:

```cypher
MATCH (n {id: 0})-[relationships:CloseTo *WSHORTEST (r, n | n.total_USD)]-(m {id: 9})
RETURN relationships;
```

To get the path nodes, use the `nodes()` function. You can then return the
results as a list, or use the `UNWIND` clause to return individual node
properties:

```cypher
MATCH path=(n {id: 0})-[relationships:CloseTo *WSHORTEST (r, n | n.total_USD)]-(m {id: 9})
UNWIND (nodes(path)) AS node
RETURN node.id;
```

To get the total weight, add a variable at the end of the expansion expression: 

```cypher
MATCH path=(n {id: 0})-[relationships:CloseTo *WSHORTEST (r, n | n.total_USD) total_weight]-(m {id: 9})
RETURN nodes(path), total_weight;
```

Remember that in the case when weight is taken from the node property, the value
of the last node is not taken into the total weight. 

### Filtering by relationships type and direction

You can filter relationships by type by defining the type after the relationship
list variable, and you decide the direction by adding or removing an arrow from
the dash.

In the following example, the algorithm will traverse only across `CloseTo` type
of relationships:

```cypher
MATCH path=(n {id: 0})-[relationships:CloseTo *WSHORTEST (r, n | n.total_USD)]->(m {id: 46})
RETURN relationships;
```

### Constraining the path's length

Memgraph's implementation of the Dijkstra's algorithm uses a modified version of
this algorithm that can handle length restriction and is based on the relationship
expansion syntax. The length restriction parameter is optional, and when it's not
set, it can increase the complexity of algorithm execution. It is important to note
that the term "length" in this context denotes the number of traversed
relationships and not the sum of their weights.

The following example will find the shortest path with a maximum length of 4
relationships between nodes `n` and `m`. 

```cypher
MATCH path=(n {id: 0})-[:CloseTo *WSHORTEST 4 (r, n | n.total_USD) total_weight]-(m {id: 46})
RETURN path,total_weight;
```

### Constraining the expansion based on property values

Weighted shortest path expansion allows an arbitrary expression filter that
determines if an expansion is allowed over a certain relationship to a certain
node. The filter is defined as a lambda function over `r` and `n`, which denotes
the relationship expanded over and node expanded to in finding the weighted shortest path. 

In the following example, expansion is allowed over relationships with an `eu_border`
property equal to `false` and to nodes with a `drinks_USD` property less than `15`:

```cypher
MATCH path=(n {id: 0})-[*WSHORTEST (r, n | n.total_USD) total_weight (r, n | r.eu_border = false AND n.drinks_USD < 15)]-(m {id: 46})
RETURN path,total_weight;
```

## All shortest paths

Finding all shortest paths is an expansion of the weighted shortest paths problem. The goal
of finding the shortest path is obtaining any minimum sum of weights on the path from one
node to the other. However, there could be multiple similar-weighted paths, and this algorithm
fetches them all.

Weighted shortest path implementation returns only one resulting path from one
node to the other. Commonly, multiple shortest paths are flowing through different
routes. Syntax of obtaining all shortest paths is similar to the weighted shortest path
and boils down to calling `[*ALLSHORTEST (r, n | r.weight)]` where `r` and `n` define 
the current expansion relationship and node respectively.

### Getting various results

The following query searches for all shortest paths with a default weight equal to 1:

To showcase the characteristics of all shortest paths, we'll use a default weight equal to 1 in the next example.

```cypher
MATCH path=(n {id: 0})-[:CloseTo *ALLSHORTEST (r, n | 1)]-(m {id: 15})
RETURN path;
```

The query returns multiple results, all with 4 hops meaning that there are 
multiple paths flowing from the source node to the destination node.

The following is a weighted query based on the weight property on each visited relationship:

```cypher
MATCH path=(n {id: 0})-[:Type *ALLSHORTEST (r, n | r.weight)]-(m {id: 5})
RETURN path;
```

To obtain all relationship on all shortest paths, use the `relationships` function, unwind the results, and return unique edges so there is no duplicates in our output:

```cypher
MATCH path=(n {id: 0})-[relationships:CloseTo *ALLSHORTEST (r, n | n.total_USD)]-(m {id: 51})
UNWIND (relationships(path)) AS edge
RETURN DISTINCT edge; 
```

To get the total weight, add a variable at the end of the expansion expression: 
```cypher
MATCH path=(n {id: 0})-[relationships:CloseTo *ALLSHORTEST (r, n | 1) total_weight]-(m {id: 9})
RETURN nodes(path), total_weight;
```

### Constraining the path's length

All shortest paths allows for upper bound path restriction. This addition significantly modifies the outcome of the algorithm if the unrestricted shortest path is obtained from a route with more hops than the set upper bound. Finding the all shortest paths with path restriction
boils down to finding the minimum weighted path with a maximum length of `upper_bound`. Upper bound is set to 4 just after the operator:

```cypher
MATCH path=(n {id: 0})-[:CloseTo *ALLSHORTEST 4 (r, n | n.total_USD) total_weight]-(m {id: 46})
RETURN path,total_weight;
```

### Constraining the expansion based on property values

All shortest paths algorithm enables the usage of an expansions filter. To define it, you need to write a lambda function
with a filter expression over `r` (relationship) and `n` (node) variables as parameters.

In the following example, expansion is allowed over relationships with a `eu_border`
property equal to `false` and to nodes with a `drinks_USD` property less than `20`:

```cypher
MATCH path=(n {id: 0})-[*ALLSHORTEST (r, n | n.total_USD) total_weight (r, n | r.eu_border = false AND n.drinks_USD < 20)]-(m {id: 46})
RETURN path, total_weight;
```
