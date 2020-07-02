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

For example, to index nodes which are labeled as `:Person` and have a property
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
SHOW INDEX INFO;
```
The results of this query will be all of the labels and label-property pairs
that Memgraph currently indexes.

Created indexes can also be deleted by using the following syntax:
```opencypher
DROP INDEX ON :Label(property);
```
