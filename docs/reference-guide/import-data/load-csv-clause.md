---
id: load-csv-clause
title: LOAD CSV Cypher clause
sidebar_label: LOAD CSV Cypher clause
---

The `LOAD CSV` clause enables you to load and use data from a CSV file of your
choosing in a row-based manner, within a query. We support the Excel CSV
dialect, as it's the most commonly used one. For the syntax of the clause,
please check the [Cypher manual](/cypher-manual/clauses/load-csv)

The syntax of the clause is:

```cypher
LOAD CSV FROM <csv-file-path> ( WITH | NO ) HEADER [IGNORE BAD] [DELIMITER <delimiter-string>] [QUOTE <quote-string>] AS <variable-name>
```

* `<csv-file-path>` is a string holding the path to the CSV file. There are no
  restrictions on where in your filesystem the file can be located, as long as
  the path is valid (i.e., the file exists).

* `( WITH | NO ) HEADER ` flag specifies whether the CSV file is to be parsed as
  though it has or hasn't got a header.

* `IGNORE BAD` flag specifies whether rows containing errors should be ignored
  or not. If it's set, the parser attempts to return the first valid row from
  the CSV file. If it isn't set, an exception will be thrown on the first
  invalid row encountered.

* `DELIMITER <delimiter-string>` option enables you to specify the CSV delimiter
  character. If it isn't set, the default delimiter character `,` is assumed.

* `QUOTE <quote-string>` option enables you to specify the CSV quote character.
  If it isn't set, the default quote character `"` is assumed.

* `<variable-name>` is a symbolic name representing the variable to which the
  contents of the parsed row will be bound to, enabling access to the row
  contents later in the query.

The clause reads row by row from a CSV file and binds the contents of the parsed
row to the variable you specified.

:::info

It's important to note that the parser parses the values as strings. It's up to
the user to convert the parsed row values to the appropriate type. This can be
done using the built-in conversion functions such as `ToInteger`, `ToFloat`,
`ToBoolean` etc. Consult the documentation on the available conversion
functions.

:::


### Header options

Depending on how you set the `HEADER` option (`WITH` or `NO`), a row will be
parsed as either a map or a list.

If the `WITH HEADER` option is set, the very first line in the file will be
parsed as the header, and any remaining rows will be parsed as regular rows. The
value bound to the row variable will be a map of the form:

```plaintext
{ ( "header_field" : "row_value" )? ( , "header_field" : "row_value" )* }
```

If the `NO HEADER` option is set, then each row is parsed as a list of values.
The contents of the row can be accessed using the list index syntax. Note that
in this mode, there are no restrictions on the number of values a row contains.
This isn't recommended, as the user must manually handle the varying number of
values in a row.


### Notes about the clause

The clause can't stand on its own, meaning there has to be at least one more
clause in the query, in addition to it. In other words, the following query will
throw an exception:

```cypher
LOAD CSV FROM "file.csv" WITH HEADER AS row;
```

On the other hand, the following query is valid:

```cypher
MERGE (n:A) LOAD CSV FROM "file.csv" WITH HEADER AS row;
```

Note that the row variable doesn't have to be used in any subsequent clause.

Also, it's important to note how the `LOAD CSV` result exhaustion works. Let's
assume the following query:

```cypher
MATCH (n)
LOAD CSV FROM "file.csv" WITH HEADER as row
SET n.p = row;
```

Let's say the `MATCH (n)` clause finds five nodes, whereas the "file.csv" has
only 2 rows. Then only the first two nodes returned by the `MATCH (n)` will have
their properties set, using the two rows from the file. Similarly, if the `MATCH
(n)` clause finds two nodes, whereas the "file.csv" has five rows, the two nodes
returned by `MATCH (n)` will have their properties set with values from the
first two rows of the file. In general, the clause that exhausts its results
sooner will dictate how many times the "loop" will be executed.

Finally, note that the `LOAD CSV` clause can be used at most once per query.
Trying to use multiple `LOAD CSV` clauses within a single query will throw an
exception. In other words, queries such as

```cypher
LOAD CSV FROM "x.csv" WITH HEADER as x
LOAD CSV FROM "y.csv" WITH HEADER as y
CREATE (n:A { p1 : x, p2 : y });
```

are invalid.