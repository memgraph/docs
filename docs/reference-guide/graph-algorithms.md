---
id: graph-algorithms
title: Built-in graph algorithms
sidebar_label: Built-in graph algorithms
---

Graph algorithms are a set of instructions that traverse (visits nodes of) a
graph and find specific nodes, paths or a path between two nodes. Some of these
algorithms are built into Memgraph and don't require any additional libraries:

  * [Depth-first search (DFS)](#depth-first-search)
  * [Breadth-first search (BFS)](#breadth-first-search)
  * [Weighted shortest path (WSP)](#weighted-shortest-path)

Memgraph has a lot more graph algorithms to offer besides these three and they
are all a part of [MAGE](/mage) - Memgraph Advanced Graph Extensions, an
open-source repository that contains graph algorithms and modules written in the
form of query modules that can be used to tackle the most interesting and
challenging graph analytics problems.

## Depth-first search

Depth-first search (DFS) is an algorithm for traversing through the graph. The
algorithm starts at the root node and explores each neighboring node as far as
possible. The moment it reaches a dead-end, it backtracks until it finds a new,
undiscovered nodes, then traverses from that node to find more undiscovered
nodes. In that way, the algorithm visits each node in the graph.

DFS in Memgraph has been implemented based on the relationship expansion syntax.
Below are several examples how to use the DFS in Memgraph.

### Getting various results

The following query will show all the paths between nodes `n` and `m`:

```cypher
MATCH path=(n {id: 0})-[*]-(m {id: 8}) 
RETURN path;
```

To get the list of all relationships, add a variable in the square brackets and
return it as a result:

```cypher
MATCH (n {id: 0})-[relationships *]-(m {id: 8}) 
RETURN relationships;
```

To get the list of nodes of the path use the `nodes` function:

```cypher
MATCH path=(n {id: 0})-[*]-(m {id: 8}) 
RETURN nodes(path);
```

### Filtering by relationships type and direction

You can filter relationships by type by defining the type after the list
variable, and you decide the direction by changing the dash into an arrow:

```cypher
MATCH (n {id: 0})-[relationships:Type *]->(m {id: 8}) 
RETURN relationships;
```

### Constraining the length of the path

The constraints on the path length is defined after the asterisk sign. The
following query will return all the results when the path is shorter than 10
hops:

```cypher
MATCH (n {id: 0})-[relationships:Type * ..10]-(m {id: 8}) 
RETURN relationships;
```

This query will return all the paths that are longer than 3, and
shorter than 10 hops:

```cypher
MATCH (n {id: 0})-[relationships:Type * 3..10]-(m {id: 8}) 
RETURN relationships;
```

### Constraining the expansion based on property values

Depth-first expansion allows an arbitrary expression filter that determines if
an expansion is allowed over a certain relationship to a certain node. The
filter is defined as a lambda function over `r` and `n`, which denote the
relationship expanded over and node expanded to in the breadth first search. 

In the following example, expansion is allowed over edges with an `x` property
greater than `12` and to nodes with an `y` property less than `3`:

```cypher
MATCH path=(a {id: 0})-[* (r, n | r.x > 12 AND n.y < 3)]-(m {id: 8}) 
RETURN path;
```

## Breadth-first search

In breadth-first search traversal starts from a single node and the order of
visited nodes is decided based on nodes' breadth (distance from the source
node). This means that when a certain node is visited, it can be safely assumed
that all nodes that are fewer relationships away from the source node have
already been visited resulting in the shortest path from the source node to the
newly visited node. 

BFS in Memgraph has been implemented based on the relationship expansion syntax.
There are a few benefits of the breadth-first expansion approach, as opposed to
a specialized function. For one, it is possible to inject expressions that
filter nodes and relationships along the path itself, not just the final
destination node. Furthermore, it's possible to find multiple paths to multiple
destination nodes. Also, it is possible to simply go through a node's
neighborhood in breadth-first manner.

Currently, it isn't possible to get all shortest paths to a single node using
Memgraph's breadth-first expansion. Below are several examples how to use the BFS
in Memgraph.

### Getting various results

The following query will show the shortest path between nodes `n` and `m` as a
graph result.

```cypher
MATCH path=(n {id: 0})-[*BFS]-(m {id: 8}) 
RETURN path;
```

To get the list of relationships, add a variable before the `*BFS` and return
it as a result:

```cypher
MATCH (n {id: 0})-[relationships *BFS]-(m {id: 8}) 
RETURN relationships;
```

To get a list of nodes of the path use the `nodes` function. You can then return
the results as list, or use the `UNWIND` clause to return individual nodes:

```cypher
MATCH path=(n {id: 0})-[relationships:Type *BFS]-(m {id: 8}) 
UNWIND (nodes(path)) AS node
RETURN node.id;
```

### Filtering by relationships type and direction

You can filter relationships by type by defining the type after the list
variable, and you decide the direction by changing the dash into an arrow:

```cypher
MATCH (n {id: 0})-[relationships:Type *BFS]->(m {id: 8}) 
RETURN relationships;
```

### Constraining the length of the path

The constraints on the path length is defined after the *BFS. The following
query will return a result only if the path is shorter than 10 hops:

```cypher
MATCH (n {id: 0})-[relationships:Type *BFS ..10]-(m {id: 8}) 
RETURN relationships;
```

Result will be return only if the path is longer than 3, and
shorter than 10 hops:

```cypher
MATCH (n {id: 0})-[relationships:Type *BFS 3..10]-(m {id: 8}) 
RETURN relationships;
```

### Constraining the expansion based on property values

Breadth-first expansion allows an arbitrary expression filter that determines if
an expansion is allowed over a certain relationship to a certain node. The
filter is defined as a lambda function over `r` and `n`, which denote the
relationship expanded over and node expanded to in the breadth first search. 

In the following example, expansion is allowed over edges with an `x` property
greater than `12` and to nodes with an `y` property less than `3`:

```cypher
MATCH path=(a {id: 0})-[*BFS (r, n | r.x > 12 AND n.y < 3)]-(m {id: 8}) 
RETURN path;
```

## Weighted Shortest Path

In graph theory, weighted shortest path problem is the problem of finding a path
between two nodes in a graph such that the sum of the weights of relationships
connecting nodes on the path is minimized.

One of the most important algorithms for finding weighted shortest paths is
**Dijkstra's algorithm**. Below are several examples how to use the BFS
in Memgraph.

### Getting various results

To find the weighted shortest path between nodes and return the result as graph
use the the weighted shortest path expansion.

```cypher
MATCH path=(a {id: 0})-[*WSHORTEST (r, n | r.weight)]-(b {id: 9})
RETURN path;
```

In the above example, the weight is a property of a relationship, but you can also
use weight of some node property:

```cypher
MATCH path=(a {id: 0})-[*WSHORTEST (r, n | n.weight)]-(b {id: 9})
RETURN path;
```

To get the list of relationships, add a variable before the `*WSHORTEST` and
return it as a result:

```cypher
MATCH path=(a {id: 0})-[relationships *WSHORTEST (r, n | r.weight)]-(b {id: 9})
RETURN relationships;
```

To get the nodes of the path use the `nodes` function. You can then return the
results as list, or use the `UNWIND` clause to return individual nodes:

```cypher
MATCH path=(a {id: 0})-[relationships:Type *WSHORTEST (r, n | r.weight)]-(b {id: 9})
UNWIND (nodes(path)) AS node
RETURN node.id;
```

To get the total weight, add a variable at the end of the expression: 

```cypher
MATCH path=(a {id: 0})-[relationships *WSHORTEST (r, n | r.weight) total_weight]-(b {id: 9})
RETURN relationships, total_weight;
```

Remember that in the case when weight is taken from the node property, the value
of the last node is not taken into the total weight. 

### Filtering by relationships type and direction

You can filter relationships by type by defining the type after the list
variable, and you decide the direction by changing the dash into an arrow:

```cypher
MATCH path=(a {id: 0})-[relationships:Type *WSHORTEST (r, n | r.weight)]-(b {id: 9})
RETURN relationships;
```

### Constraining the length of the path

Memgraph's implementation of the Dijkstra's algorithm uses a modified version of
this algorithm that can handle length restriction and based on the relationship
expansion syntax. The length restriction parameter is optional and when it's not
set it could increase the complexity of the algorithm. It is important to note
that the term "length" in this context denotes the number of traversed
relationships and not the sum of their weights.

The following example will find the shortest path of length up to 10 nodes between
nodes `a`  and `b`. 

```cypher
MATCH (a {id: 0})-[*WSHORTEST 10 (r, n | r.weight) total_weight]-(b {id: 9})
RETURN *;
```

### Constraining the expansion based on property values

Weighted shortest path expansion allows an arbitrary expression filter that
determines if an expansion is allowed over a certain relationship to a certain
node. The filter is defined as a lambda function over `r` and `n`, which denote
the relationship expanded over and node expanded to in the breadth first search. 

In the following example, expansion is allowed over edges with an `x` property
greater than `12` and to nodes with an `y` property less than `3`:

```cypher
MATCH (a {id: 0})-[*WSHORTEST (r, n | r.weight) total_weight (r, n | r.x > 12 AND n.y < 3)]-(b {id: 9})
RETURN total_weight;
```