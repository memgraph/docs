## Indexing

An index stores additional information on certain types of data, so that
retrieving said data becomes more efficient. Downsides of indexing are:

  * requiring extra storage for each index and
  * slowing down writes to the database.

Carefully choosing which data to index can tremendously improve data retrieval
efficiency, and thus make index downsides negligible.

Memgraph automatically indexes labeled data. This improves queries
which fetch nodes by label:

```opencypher
MATCH (n :Label) ... RETURN n;
```

Indexing can also be applied to data with a specific combination of label and
property. These are not automatically created, instead a user needs to create
them explicitly. Creation is done using a special
`CREATE INDEX ON :Label(property)` language construct.

For example, to index nodes which is labeled as `:Person` and has a property
named `age`:

```opencypher
CREATE INDEX ON :Person(age);
```

After the index is created, retrieving those nodes will become more efficient.
For example, the following query will retrieve all nodes which have an `age`
property, instead of fetching each `:Person` node and checking whether the
property exists.

```opencypher
MATCH (n :Person {age: 42}) RETURN n;
```

Using index based retrieval also works when filtering labels and properties
with `WHERE`. For example, the same effect as in the previous example can be
done with:

```opencypher
MATCH (n) WHERE n:Person AND n.age = 42 RETURN n;
```

Since the filter inside `WHERE` can contain any kind of an expression, the
expression can be complicated enough so that the index does not get used. We
are continuously improving the recognition of index usage opportunities from a
`WHERE` expression. If there is any suspicion that an index may not be used,
we recommend putting properties and labels inside the `MATCH` pattern.

Information about available indexes can be retrieved by using the following
syntax:

```opencypher
RETURN indexInfo();
```
The result of this query will be a list of all labels and label-property pairs
that Memgraph currently indexes.

Created indexes can also be deleted by using the following syntax:
```opencypher
DROP INDEX ON :Label(property)
```

### Uniqueness constraint

Memgraph offers the ability to enforce uniqueness in property values. Uniqueness
constraint will ensure that property values are unique for all nodes with a
specific label. Nodes without the property are not included in the uniqueness
constraint. Uniqueness constraint is available only on a single property.

For example, to ensure that each `:Person` has a unique `email`, we can create
an index on the label property pair with the uniqueness constraint:
```opencypher
CREATE UNIQUE INDEX ON :Person(email);
```
