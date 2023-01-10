---
id: differences
title: Differences in Cypher implementations
sidebar_label: Differences in Cypher implementations
slug: /differences
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
  algorithms](/docs/reference-guide/built-in-graph-algorithms) are also
  breadth-first search and weighted shortest path.  
- Patterns in expressions. For example, Memgraph doesn't support
  `size((n)-->())`. Most of the time, the same functionalities can be expressed
  differently in Memgraph using `OPTIONAL` expansions, function calls etc. You
  can check out [this example](#patterns-in-expressions).
- Map projections such as `MATCH (n) RETURN n {.property1, .property2}`.

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

Patterns in expressions are not yet supported in Memgraph. For example, Memgraph
doesn't support `size((n)-->())`. Most of the time, the same functionalities can
be expressed differently in Memgraph using `OPTIONAL` expansions, function
calls, etc.

### What is a Cypher alternative for patterns in expressions?

For example, the following query is not valid in Memgraph:

```cypher
MATCH (n:NodeA)
WHERE NOT (n)-[]->(:NodeB)
RETURN n;
```

After executing it, you would receive an error:

```plaintext
Not yet implemented: atom expression '(n)-[]->(:NodeB)'
```

The same query can be expressed using the `OPTIONAL MATCH` clause.<br/>
The clause `OPTIONAL MATCH` behaves the same as a regular MATCH, but when it
fails to find the pattern, missing parts of the pattern will be filled with
`null` values.

The example query would look like this:

```cypher
OPTIONAL MATCH (n:NodeA)-[]->(m:NodeB)
WHERE m IS null
RETURN DISTINCT n;
```

