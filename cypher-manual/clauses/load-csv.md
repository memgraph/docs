---
id: load-csv
title: LOAD CSV clause
sidebar_label: LOAD CSV
---

The `LOAD CSV` clause enables you to load and use data from a CSV file of your
choosing in a row-based manner within a query. We support the Excel CSV dialect,
as it's the most commonly used one.

[![Related - How-to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/docs/memgraph/import-data/load-csv-clause)

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

Adding a `MATCH` or `MERGE` clause before the LOAD CSV allows you to match
certain entities in the graph before running LOAD CSV, which is an optimization
as matched entities do not need to be searched for every row in the CSV file.

But, the `MATCH` or `MERGE` clause can be used prior the `LOAD CSV` clause only
if the clause returns only one row. Returning multiple rows before calling the
`LOAD CSV` clause will cause a Memgraph runtime error.

:::info
It's important to note that the parser parses the values as strings.
It's up to the user to convert the parsed row values to the appropriate type.
This can be done using the built-in conversion functions such as `ToInteger`,
`ToFloat`, `ToBoolean` etc. Consult the [documentation](/functions.md) on the
available conversion functions.
:::
