---
id: cursor
title: Cursor class
sidebar_label: Cursor class
---

## `class mgclient.Cursor()`
Allows execution of database commands.

Cursors are created by the `Connection.cursor()` method and they are
bound to the connection for the entire lifetime. Cursors created by the same
connection are not isolated, any changes done to the database by one cursor
are immediately visible by the other cursors.

Cursor objects are not thread-safe.


### `arraysize()`
This read/write attribute specifies the number of rows to fetch at a time
with `fetchmany()`. It defaults to 1 meaning to fetch a single row at
a time.


### `close()`
Close the cursor now.

The cursor will be unusable from this point forward; an `InterfaceError`
will be raised if any operation is attempted with the cursor.


### `description()`
This read-only attribute is a list of `Column` objects.

Each of those object has attributed describing one result column:

* `name`
* `type_code`
* `display_size`
* `internal_size`
* `precision`
* `scale`
* `null_ok`

Only the name attribute is set to the name of column returned by the
database. The rest are always set to `None` and are only here for
compatibility with DB-API 2.0.

This attribute will be `None` for operations that do not return rows
or if the cursor has not had an operation invoked via the `execute()`
method yet.


### `execute(params=None)`
Execute a database operation.

Parameters may be provided as a mapping and will be bound to variables in
the operation. Variables are specified with named (`$name`)
placeholders.

This method always returns `None`.


### `fetchall()`
Fetch all (remaining) rows of query results, returning them as a list of
tuples.

An `InterfaceError` is raised if the previous call to `execute()`
did not produce any results or no call was issued yet.


### `fetchmany()`
Fetch the next set of rows of query results, returning a list of tuples.
An empty list is returned when no more data is available.

The number of rows to fetch per call is specified by the parameter. If it
is not given the cursor’s `arraysize` determines the number of rows
to be fetched. Fewer rows may be returned in case there is less rows available
than requested.

An `InterfaceError` is raised if the previous call to `execute()`
did not produce any results or no call was issued yet.


### `fetchone()`
Fetch the next row of query results, returning a single tuple, or `None`
when no more data is available.

An `InterfaceError` is raised if the previous call to `execute()`
did not produce any results or no call was issued yet.


### `rowcount()`
This read-only attribute specifies the number of rows that the last
`execute()` produced.

The attribute is -1 in case no `execute()` has been performed or
the rowcount of the last operation cannot be determined by the interface.


### `setinputsizes()`
This method does nothing, but it is required by the DB-API 2.0 spec.


### `setoutputsizes()`
This method does nothing, but it is required by the DB-API 2.0 spec.

## `Column` class

`Cursor.description` list consists of instances of `Column` class.

### `class mgclient.Column()`
Description of a column returned by the query.


* **`display_size`**: always set to `None` (required by DB-API 2.0 spec, but not supported)

* **`internal_size`**: always set to `None` (required by DB-API 2.0 spec, but not supported)

* **`name`**: name of the returned column

* **`null_ok`**: always set to `None` (required by DB-API 2.0 spec, but not supported)

* **`precision`**: always set to `None` (required by DB-API 2.0 spec, but not supported)

* **`scale`**: always set to `None` (required by DB-API 2.0 spec, but not supported)

* **`type_code`**: always set to `None` (required by DB-API 2.0 spec, but not supported)
