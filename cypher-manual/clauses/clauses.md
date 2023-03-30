---
id: clauses
title: Cypher clauses overview
sidebar_label: Clauses overview
slug: /clauses
---

The **Cypher** language enables users to perform standard database operations by using the following clauses:

  * [`CALL`](call.md) - calls a subquery inside the query
  * [`CREATE`](create.md) - creates new nodes and relationships
  * [`DELETE`](delete.md) - deletes nodes and relationships
  * [`EXPLAIN`](explain.md) - 
  * [`LOAD CSV`](load-csv.md) - loads data from CSV file
  * [`MATCH`](match.md) - searches for patterns
  * [`MERGE`](merge.md) - creates patterns if they don't exist
  * [`OPTIONAL MATCH`](optional-match.md) - behaves the same as [`MATCH`](match.md), but when it fails to find the pattern it fills missing parts of the pattern with null values
  * [`PROFILE`](profile.md) - 
  * [`REMOVE`](remove.md) - removes labels and properties
  * [`RETURN`](return.md) - defines what will be presented to the user in the result set
  * [`SET`](set.md) - adds new or updates existing labels and properties
  * [`UNION`](union.md) and [`UNION ALL`](union.md) - combines results from multiple queries
  * [`UNWIND`](unwind.md) - unwinds a list of values as individual rows
  * [`WHERE`](where.md) - filters the matched data
  * [`WITH`](with.md) - combines multiple reads and writes
