---
id: patterns-in-expressions
title: Patterns in expressions
sidebar_label: Patterns in expressions
---

Patterns in expressions are not yet supported in Memgraph. For example, Memgraph
doesn't support `size((n)-->())`. Most of the time, the same functionalities can
be expressed differently in Memgraph using `OPTIONAL` expansions, function calls, 
etc.

## What is a Cypher alternative for patterns in expressions?

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
RETURN DISTINCT n
```
