## Cypher manual

`Cypher` is the most widely adopted, fully-specified, and open query language for property graph databases.
It provides an intuitive way to work with property graphs.

### Clauses

The `Cypher` language enables users to perform standard database operations by using the following clauses:
  * [`MATCH`](clauses/match.md), which searches for patterns;
  * [`WHERE`](clauses/where.md), for filtering the matched data;
  * [`RETURN`](clauses/return.md), for defining what will be presented to the user in the result set;
  * [`UNION`](clauses/union.md) and [`UNION ALL`](clauses/union.md) for combining results from multiple queries;
  * [`CREATE`](clauses/create.md), for creating new nodes and edges;
  * [`SET`](clauses/set.md), for adding new or updating existing labels and properties;
  * [`DELETE`](clauses/delete.md), for deleting nodes and edges;
  * [`REMOVE`](clauses/remove.md), for removing labels and properties;
  * [`MERGE`](clauses/merge.md), for creating patterns if they do not exist;
  * [`WITH`](clauses/with.md), for combining multiple reads and writes.

### Functions

`Cypher` supports a large number of functions. The list can be found here: [Cypher Functions](functions.md).