---
id: differences-in-cypher-implementations
title: Differences in Cypher implementations
sidebar_label: Differences in Cypher implementations
---

Although we try to implement the [openCypher](https://www.opencypher.org/) query
language as close to the language reference as possible, we had to make some
changes to enhance the user experience.

## Unicode codepoints in string literals

Use `\u` followed by 4 hex digits in string literals for UTF-16 codepoint and
`\U` with 8 hex digits for UTF-32 codepoint in Memgraph.

## Difference from Neo4j's Cypher implementation

The openCypher initiative stems from Neo4j's Cypher query language. Following is
a list of the most important differences between Neo's Cypher and Memgraph's
openCypher implementation for users already familiar with Neo4j. Other
differences might not be documented here (especially subtle semantic ones).

### Unsupported constructs

- Stored procedures.
- `shortestPath` and `allShortestPaths` functions. They can be expressed using
  Memgraph's depth-first search and all shortest paths expansion syntax. Among
  Memgraph's [built in
  algorithms](/memgraph/reference-guide/built-in-graph-algorithms) are also
  breadth-first search and weighted shortest path.  
- Patterns in expressions. For example, Memgraph doesn't support
  `size((n)-->())`. Most of the time, the same functionalities can be expressed
  differently in Memgraph using `OPTIONAL` expansions, function calls etc. You
  can check out [this example](#patterns-in-expressions).

### Unsupported functions

General purpose functions:

- `exists(n.property)` - This can be expressed using `n.property IS NOT NULL`.
- `length()` is named `size()` in Memgraph.

Mathematical functions:

- `percentileDisc()`
- `stDev()`
- `point()`
- `distance()`
- `degrees()`

List functions:

- `none()`

## Patterns in expressions

Patterns in expressions are supported in Memgraph in particular functions, like `exists(pattern)`.
In other cases, Memgraph does not yet support patterns in functions, e.g. `size((n)-->())`.
Most of the time, the same functionalities can be expressed differently in Memgraph
using `OPTIONAL` expansions, function calls, etc.
