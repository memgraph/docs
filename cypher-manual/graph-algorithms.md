---
id: graph-algorithms
title: Graph algorithms
sidebar_label: Graph algorithms
---

The real power of graph databases comes from graph algorithms. In Memgraph
several algorithms are part of the query engine. This means that you can use
them directly in your Cypher queries. You can use them within
[`MATCH`](clauses/match.md) clause to obtain data from the database.

[![Related - Reference Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/docs/memgraph/reference-guide/graph-algorithms)

The built-in algorithms are:

- **Filtering Variable Length Paths** - you can filter the data through lambda functions
- **Breadth First Search** - you can use it for searching the shortest path between nodes
- **Weighted Shortest Path** - you can use it for searching the weighted shortest path between nodes

Take a look at [Graph algorithms in our reference manual](/docs/memgraph/reference-guide/graph-algorithms) for code examples. 

If Memgraph built-in algorithms are not enough for you, don't worry, we've got
you covered. We have developed [MAGE](/mage) - a graph library that extends
Memgraph with additional algorithms and utility modules. Be sure to check it
out!