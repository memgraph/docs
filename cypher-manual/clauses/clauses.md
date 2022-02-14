---
id: clauses
title: Cypher clauses overview
sidebar_label: Clauses overview
slug: /clauses
---

The **Cypher** language enables users to perform standard database operations by using the following clauses:

  * [`CREATE`](create.md) - creates new nodes and edges;
  * [`DELETE`](delete.md) - deletes nodes and edges;
  * [`LOAD CSV`](load-csv.md) - loads data from CSV file;
  * [`MATCH`](match.md) - searches for patterns;
  * [`MERGE`](merge.md) - creates patterns if they don't exist;
  * [`OPTIONAL MATCH`](optional-match.md) - behaves the same as [`MATCH`](match.md), but when it fails to find the pattern it fills missing parts of the pattern with null values;
  * [`REMOVE`](remove.md) - removes labels and properties;
  * [`RETURN`](return.md), for defining what will be presented to the user in the result set;
  * [`SET`](set.md), for adding new or updating existing labels and properties;
  * [`UNION`](union.md) and [`UNION ALL`](union.md) for combining results from multiple queries;
  * [`UNWIND`], for unwinding a list of values as individual rows
  * [`WHERE`](where.md), for filtering the matched data;
  * [`WITH`](with.md), for combining multiple reads and writes.





 
