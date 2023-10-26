---
id: reading-and-modify-data
title: Read and modify data
sidebar_label: Read and modify data
---

The simplest usage of the language is to find data stored in the database. For
that, you can use one of the following clauses:

- `MATCH` which searches for patterns.
- `WHERE` for filtering the matched data.
- `RETURN` for defining what will be presented to the user in the result set.
- `UNION` and `UNION ALL` for combining results from multiple queries.
- `UNWIND` for unwinding a list of values as individual rows.

## MATCH

This clause is used to obtain data from Memgraph by matching it to a given
pattern. For example, you can use the following query to find each node in the
database:

```cypher
MATCH (node) RETURN node;
```

Finding connected nodes can be achieved by using the query:

```cypher
MATCH (node1)-[connection]-(node2) RETURN node1, connection, node2;
```

In addition to general pattern matching, you can narrow the search down by
specifying node labels and properties. Similarly, relationship types and properties can
also be specified. For example, finding each node labeled as `Person` and with
property `age` being 42, is done with the following query:

```cypher
MATCH (n:Person {age: 42}) RETURN n;
```

```tip

Each node and relationship gets a identifier generated during their initialization which is persisted through the durability mechanism.

Return it with the [`id()` function](/cypher-manual/functions#scalar-functions). 

```

You can use the following query to find their friends:

```cypher
MATCH (n:Person {age: 42})-[:FRIENDS_WITH]-(friend) RETURN friend;
```

There are cases when a user needs to find data that is connected by traversing a
path of connections, but the user doesn't know how many connections need to be
traversed. Cypher allows for designating patterns with _variable path
lengths_. Matching such a path is achieved by using the `*` (_asterisk_) symbol
inside the relationship element of a pattern. For example, traversing from `node1` to
`node2` by following any number of connections in a single direction can be
achieved with:

```cypher
MATCH (node1)-[r*]->(node2) RETURN node1, r, node2;
```

If paths are very long, finding them could take a long time. To prevent that, a
user can provide the minimum and maximum length of the path. For example, paths
of length between two and four nodes can be obtained with a query like:

```cypher
MATCH (node1)-[r*2..4]->(node2) RETURN node1, r, node2;
```

It is possible to name patterns in the query and return the resulting paths.
This is especially useful when matching variable length paths:

```cypher
MATCH path = ()-[r*2..4]->() RETURN path;
```

More details on how `MATCH` works can be found [here](./clauses/match.md).

The `MATCH` clause can be modified by prepending the `OPTIONAL` keyword.
`OPTIONAL MATCH` clause behaves the same as a regular `MATCH`, but when it fails
to find the pattern, missing parts of the pattern will be filled with `null`
values. Examples can be found [here](./clauses/optional-match.md).

## WHERE

You have already seen how to achieve simple filtering by using labels and
properties in `MATCH` patterns. When more complex filtering is desired, you can
use `WHERE` paired with `MATCH` or `OPTIONAL MATCH`. For example, finding each
person older than 20 is done with this query:

```cypher
MATCH (n:Person) WHERE n.age > 20 RETURN n;
```

Additional examples can be found [here](./clauses/where.md).

### Regular expressions

Inside `WHERE` clause, you can use regular expressions for text filtering. To
use a regular expression, you need to use the `=~` operator.

For example, finding all `Person` nodes which have a name ending with `son`:

```cypher
MATCH (n:Person) WHERE n.name =~ ".*son$" RETURN n;
```

The regular expression syntax is based on the modified ECMAScript regular
expression grammar. The ECMAScript grammar can be found
[here](http://ecma-international.org/ecma-262/5.1/#sec-15.10), while the
modifications are described in [this
document](https://en.cppreference.com/w/cpp/regex/ecmascript).

## RETURN

The `RETURN` clause defines which data should be included in the resulting set.
Basic usage was already shown in the examples for `MATCH` and `WHERE` clauses.
Another feature of `RETURN` is renaming the results using the `AS` keyword.

For example:

```cypher
MATCH (n:Person) RETURN n AS people;
```

That query would display all nodes under the header named `people` instead of
`n`.

When you want to get everything that was matched, you can use the `*`
(_asterisk_) symbol.

This query:

```cypher
MATCH (node1)-[connection]-(node2) RETURN *;
```

is equivalent to:

```cypher
MATCH (node1)-[connection]-(node2) RETURN node1, connection, node2;
```

`RETURN` can be followed by the `DISTINCT` operator, which will remove duplicate
results. For example, getting unique names of people can be achieved with:

```cypher
MATCH (n:Person) RETURN DISTINCT n.name;
```

Besides choosing what will be the result and how it will be named, the `RETURN`
clause can also be used to:

- limit results with `LIMIT` sub-clause;
- skip results with `SKIP` sub-clause;
- order results with `ORDER BY` sub-clause and
- perform aggregations (such as `count`).

More details on `RETURN` can be found [here](./clauses/return.md).

### SKIP & LIMIT

These sub-clauses take a number of how many results to skip or limit. For
example, to get the first three results you can use this query:

```cypher
MATCH (n:Person) RETURN n LIMIT 3;
```

If you want to get all the results after the first 3, you can use the following:

```cypher
MATCH (n:Person) RETURN n SKIP 3;
```

The `SKIP` and `LIMIT` can be combined. So for example, to get the 2nd result,
you can do:

```cypher
MATCH (n:Person) RETURN n SKIP 1 LIMIT 1;
```

### ORDER BY

Since the patterns which are matched can come in any order, it is very useful to
be able to enforce some ordering among the results. In such cases, you can use
the `ORDER BY` sub-clause.

For example, the following query will get all `:Person` nodes and order them by
their names:

```cypher
MATCH (n:Person) RETURN n ORDER BY n.name;
```

By default, ordering will be ascending. To change the order to be descending,
you should append `DESC`.

For example, you can use this query to order people by their name descending:

```cypher
MATCH (n:Person) RETURN n ORDER BY n.name DESC;
```

You can also order by multiple variables. The results will be sorted by the
first variable listed. If the values are equal, the results are sorted by the
second variable, and so on.

For example, ordering by first name descending and last name ascending:

```cypher
MATCH (n:Person) RETURN n ORDER BY n.name DESC, n.lastName;
```

Note that `ORDER BY` sees only the variable names as carried over by `RETURN`.
This means that the following will result in an error.

```cypher
MATCH (old:Person) RETURN old AS new ORDER BY old.name;
```

Instead, the `new` variable must be used:

```cypher
MATCH (old:Person) RETURN old AS new ORDER BY new.name;
```

The `ORDER BY` sub-clause may come in handy with `SKIP` and/or `LIMIT`
sub-clauses. For example, to get the oldest person you can use the following:

```cypher
MATCH (n:Person) RETURN n ORDER BY n.age DESC LIMIT 1;
```

You can also order result before returning them. The following query will order
all the nodes according to name, and then return them in a list. 

```cypher
MATCH (n)
WITH n ORDER BY n.name DESC
RETURN collect(n.name) AS names;
```

### Aggregating

Cypher has functions for aggregating data. Memgraph currently supports the
following aggregating functions.

- `avg`, for calculating the average value.
- `sum`, for calculating the sum of numeric values.
- `collect`, for collecting multiple values into a single list or map. If
  given a single expression values are collected into a list. If given two
  expressions, values are collected into a map where the first expression
  denotes map keys (must be string values) and the second expression denotes
  map values.
- `count`, for counting the resulting values.
- `max`, for returning the maximum value.
- `min`, for returning the minimum value.

Example, calculating the average age:

```cypher
MATCH (n:Person) RETURN avg(n.age) AS averageAge;
```

Collecting items into a list:

```cypher
MATCH (n:Person) RETURN collect(n.name) AS list_of_names;
```

Collecting items into a map:

```cypher
MATCH (n:Person) RETURN collect(n.name, n.age) AS map_name_to_age;
```

Check the detailed signatures of [aggregation
functions](./functions.md#aggregation-functions).

## UNION and UNION ALL

Cypher supports combining results from multiple queries into a single result
set. That result will contain rows that belong to queries in the union
respecting the union type.

Using `UNION` will contain only distinct rows, while `UNION ALL` will keep all
rows from all given queries.

Restrictions when using `UNION` or `UNION ALL`:

- The number and the names of columns returned by queries must be the same for
  all of them.
- There can be only one union type between single queries, i.e. a query can't
  contain both `UNION` and `UNION ALL`.

For example to get distinct names that are shared between persons and movies use
the following query:

```cypher
MATCH (n:Person) RETURN n.name AS name UNION MATCH (n:Movie) RETURN n.name AS name;
```

To get all names that are shared between persons and movies (including
duplicates) do the following:

```cypher
MATCH (n:Person) RETURN n.name AS name UNION ALL MATCH (n:Movie) RETURN n.name AS name;
```

## UNWIND

The `UNWIND` clause is used to unwind a list of values as individual rows.

To produce rows out of a single list, use the following query:

```cypher
UNWIND [1,2,3] AS listElement RETURN listElement;
```

More examples can be found [here](./clauses/unwind.md).

## Traversing relationships

Patterns are used to indicate specific graph traversals given directional
relationships. How a graph is traversed for a query depends on what directions
are defined for relationships and how the pattern is specified in the `MATCH`
clause.

### Patterns in a query

Here is an example of a pattern that utilizes the `FRIENDS_WITH` relationships
from our graph:

```cypher
MATCH (p1:Person)-[r:FRIENDS_WITH]->(p2:Person {name:'Alison'})
RETURN p1, r, p2;
```

The output is:

![patterns-in-a-query](data/read-existing-data/patterns-in-a-query.png)

Because the `FRIENDS_WITH` relationship is directional, only these two nodes are
returned.

### Reversing traversals

When the relationship from the previous query is reversed, with the person
named Alison being the anchor node, the returned results are:

```cypher
MATCH  (p1:Person)-[r:FRIENDS_WITH]->(p2:Person {name:'Alison'})
RETURN p1, r, p2;
```

The output is:

![reversing-traversals](data/read-existing-data/reversing-traversals.png)

### Bidirectional traversals

We can also find out what `Person` nodes are connected with the `FRIENDS_WITH`
relationship in either direction by removing the directional arrow from the
pattern:

```cypher
MATCH  (p1:Person)-[r:FRIENDS_WITH]-(p2:Person {name:'Alison'})
RETURN p1, r, p2;
```

The output is:

![bidirectional-traversals](data/read-existing-data/bidirectional-traversals.png)

### Traversing multiple relationships

Since we have a graph, we can traverse through nodes to obtain relationships
further into the traversal.

For example, we can write a Cypher query to return all friends of friends of the
person named Alison:

```cypher
MATCH  (p1:Person {name:'Alison'})-[r1:FRIENDS_WITH]->
       (p2:Person)-[r2:FRIENDS_WITH]-(p3:Person)
RETURN p1, r1, p2, r2, p3;
```

Keep in mind that the first relationship is directional while the second one
isn't. The output is:

![traversing-multiple-relationships](data/read-existing-data/traversing-multiple-relationships.png)

## Modify data

### SET clause

Use the `SET` clause to update labels on nodes and properties on nodes and
relationships.

Click [here](./clauses/set.md) for a more detailed explanation of what can be
done with `SET`.

Cypher supports combining multiple reads and writes using the `WITH` clause.
In addition to combining, the `MERGE` clause is provided which may create
patterns if they do not exist.

#### Creating and updating properties

The `SET` clause can be used to create/update the value of a property on a node or
relationship:

```cypher
MATCH (c:City)
WHERE c.name = 'London'
SET c.population = 8900000
RETURN c;
```

The `SET` clause can be used to create/update the value of multiple properties
on nodes or relationships by separating them with a comma:

```cypher
MATCH (c:City)
WHERE c.name = 'London'
SET c.population = 8900000, c.country = 'United Kingdom'
RETURN c;
```

#### Creating and updating node labels

The `SET` clause can be used to create/update the label on a node. If the node has
a label, a new one will be added while the old one is left as is:

```cypher
MATCH (c:City:Location)
SET c:City
RETURN labels(c);
```

#### Removing a property

The `SET` clause can be used to remove the value of a property on a node or
relationship by setting it to `NULL`:

```cypher
MATCH (c:City)
WHERE c.name = 'London'
SET c.country = NULL
RETURN c;
```

#### Copy all properties

If `SET` is used to copy the properties of one node/relationship to another, all
the properties of the latter will be removed and replaced with the new ones:

```cypher
CREATE (p1:Person {name: 'Harry'}), (p2:Person {name: 'Anna'})
SET p1 = p2
RETURN p1, p2;
```

#### Bulk update

You can use `SET` clause to do a bulk update. Here is an example of how to
increment everyone's age by 1:

```cypher
MATCH (n:Person) SET n.age = n.age + 1;
```

## Delete data

### DELETE

This clause is used to delete nodes and relationships from the database.

For example, removing all relationships of a single type:

```cypher
MATCH ()-[relationship :type]-() DELETE relationship;
```

When testing the database, you often want to have a clean start by deleting
every node and relationship in the database. It is reasonable that deleting each node
should delete all relationships coming into or out of that node.

```cypher
MATCH (node) DELETE node;
```

But, Cypher prevents accidental deletion of relationships. Therefore, the above
query will report an error. Instead, you need to use the `DETACH` keyword, which
will remove relationships from a node you are deleting. The following should work and
*delete everything* in the database.

```cypher
MATCH (node) DETACH DELETE node;
```

More examples are available [here](./clauses/delete.md).

### REMOVE

The `REMOVE` clause is used to remove labels and properties from nodes and
relationships:

```cypher
MATCH (n:WrongLabel) REMOVE n:WrongLabel, n.property;
```