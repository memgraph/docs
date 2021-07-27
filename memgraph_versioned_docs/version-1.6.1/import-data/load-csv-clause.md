---
id: load-csv-clause
title: LOAD CSV Cypher clause
sidebar_label: LOAD CSV Cypher clause
---

The `LOAD CSV` clause enables you to load and use data from a CSV file of your
choosing in a row-based manner, within a query. We support the Excel CSV dialect,
as it's the most commonly used one. For the syntax of the clause, please check [Cypher Manual](cypher-manual/clauses/load-csv)

The clause reads row by row from a CSV file, and binds the contents of the
parsed row to the variable you specified.

:::info

It's important to note that the parser parses the values as strings. It's up to
the user to convert the parsed row values to the appropriate type. This can be
done using the built-in conversion functions such as `ToInteger`, `ToFloat`,
`ToBoolean` etc. Consult the documentation on the available conversion functions.

:::


### Examples

#### Header included

Depending on how you set the `HEADER` option (`WITH` or `NO`), a row will
be parsed as either a map or a list.

If the `WITH HEADER` option is set, the very first line in the file will be
parsed as the header, and any remaining rows will be parsed as regular rows.
The value bound to the row variable will be a map of the form:

```plaintext
{ ( "header_field" : "row_value" )? ( , "header_field" : "row_value" )* }
```

To access a given field, you can use the property lookup syntax. Let's assume
that the CSV file contents are as follows:

```csv
id|name|age
1|Dan|41
2|Susan|26
3|Una|29
4|Peter|19
5|Karen|36
```

The following query will load row by row from the file, and create a new node
for each row with properties based on the parsed row values:

```cypher
LOAD CSV FROM "names.csv" WITH HEADER DELIMITER "|" AS row
CREATE (n:Person {id: ToInteger(row.id), name: row.name, age: ToInteger(row.age)}) ;
```

#### Without header

If the `NO HEADER` option is set, then each row is parsed as a list of values.
The contents of the row can be accessed using the list index syntax. Note that
in this mode, there are no restrictions on the number of values a row contains.
This isn't recommended, as the user must manually handle the varying number of
values in a row.

Let's assume that the CSV file contents are as follows:

```csv
1|Olly|46
2|Alice|29
3|Josh|34
4|Fiona|28
5|Lucy|20
```

The following query will load row by row from the file, and create a new node
for each row with properties based on the parsed row values:

```cypher
LOAD CSV FROM "names.csv" NO HEADER DELIMITER "|" AS row
CREATE (n:Person {id: ToInteger(row[0]), name: row[1], age: ToInteger(row[2])}) ;
```

#### Creating relationships

With the initial nodes in place, you can now create relationships between them: 

```cypher
LOAD CSV FROM 'relationships.csv'  WITH HEADERS AS row
MATCH (p1:Person {id: row.first_person})
MATCH (p2:Person {id: row.second_person})
MERGE (p1)-[f:IS_FRIENDS_WITH]->(p2)
```

If we want to use a field from file as a property on relationship, use the following query:

```cypher
LOAD CSV FROM 'relationships.csv'  WITH HEADERS AS row
MATCH (p1:Person {id: row.first_person})
MATCH (p2:Person {id: row.second_person})
MERGE (p1)-[f:IS_FRIENDS_WITH]->(p2)
  ON CREATE SET f.date = row.date;
```

### Notes about the clause

The clause can't stand on its own, meaning there has to be at least one more
clause in the query, in addition to it. In other words, the following query will
throw an exception:

```cypher
LOAD CSV FROM "file.csv" WITH HEADER AS row ;
```

On the other hand, the following query is valid:

```cypher
MERGE (n:A) LOAD CSV FROM "file.csv" WITH HEADER AS row ;
```

Note that the row variable doesn't have to be used in any subsequent clause.

Also, it's important to note how the `LOAD CSV` result exhaustion works. Let's
assume the following query:

```cypher
MATCH (n)
LOAD CSV FROM "file.csv" WITH HEADER as row
SET n.p = row ;
```

Let's say the `MATCH (n)` clause finds five nodes, whereas the "file.csv" has
only 2 rows. Then only the first two nodes returned by the `MATCH (n)` will have
their properties set, using the two rows from the file.
Similarly, if the `MATCH (n)` clause finds two nodes, whereas the "file.csv" has
five rows, the two nodes returned by `MATCH (n)` will have their properties
set with values from the first two rows of the file.
In general, the clause that exhausts its results sooner will dictate how many
times the "loop" will be executed.

Finally, note that the `LOAD CSV` clause can be used at most once per query.
Trying to use multiple `LOAD CSV` clauses within a single query will throw an exception.
In other words, queries such as

```cypher
LOAD CSV FROM "x.csv" WITH HEADER as x
LOAD CSV FROM "y.csv" WITH HEADER as y
CREATE (n:A { p1 : x, p2 : y });
```

are invalid.
