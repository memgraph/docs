# WITH

The `WITH` is used to chain together parts of a query, piping the results from one to be used as starting points or criteria in the next.

The write part of the query cannot be simply followed by another read part. In
order to combine them, `WITH` clause must be used. The names this clause
establishes are transferred from one part to another.

For example, creating a node and finding all nodes with the same property.

```opencypher
CREATE (node {property: 42}) WITH node.property AS propValue
MATCH (n {property: propValue}) RETURN n;
```

Note that the `node` is not visible after `WITH`, since only `node.property`
was carried over.

This clause behaves very much like `RETURN`, so you should refer to features
of `RETURN`.