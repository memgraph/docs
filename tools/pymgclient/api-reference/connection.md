---
id: connection
title: Connection class
sidebar_label: Connection class
---

## `class mgclient.Connection()`
Encapsulates a database connection.

New instances are created using the factory function `connect()`.

Connections are not thread-safe.


### autocommit()
This read/write attribute specifies whether executed statements
have immediate effect in the database.

If `True`, every executed statement has immediate effect.

If `False`, a new transaction is started at the execution of the first
command. Transactions must be manually terminated using `commit()` or
`rollback()` methods.


### close()
Close the connection now.

The connection will be unusable from this point forward; an `InterfaceError`
will be raised if any operation is attempted with the connection. The same applies
to all `Cursor` objects trying to use the connection.

Note that closing a connection without committing the changes will cause an implicit
rollback to be performed.


### commit()
Commit any pending transaction to the database.

If auto-commit is turned on, this method does nothing.


### cursor()
Return a new `Cursor` object using the connection.


### rollback()
Roll back to the start of any pending transaction.

If auto-commit is turned on, this method does nothing.


### status()
Status of the connection.

It’s value can be one of the following macros:
* `mgclient.CONN_STATUS_READY`
The connection is currently not in a transaction and
it is ready to start executing the next command.

* `mgclient.CONN_STATUS_BAD`
Something went wrong with the connection, it cannot be
used for command execution anymore.

 * `mgclient.CONN_STATUS_CLOSED`
The connection was closed by user, it cannot be
used for command execution anymore.

* `mgclient.CONN_STATUS_IN_TRANSACTION`
The connection is currently in an implicitly started
transaction.

* `mgclient.CONN_STATUS_EXECUTING`
The connection is currently executing a query. This status
can only be seen for lazy connections.

## Lazy connections {#lazy-connections}

When a query is executed using `execute()` on a cursor, the default
`mgclient` behaviour is to wait for all of the results to be available
and store them into cursor’s internal result list. On one hand, that means that
`execute()` will block until all of the results are ready and all results
will be stored in memory at the same time. On the other hand, that also means
that result fetching methods will never block.

Sometimes, that behaviour is unwanted. Maybe we don’t need all results in
memory at the same time, because we only want to do row-by-row processing on
huge result sets. In that case, we may use a lazy connection.

A lazy connection is created by passing `True` for `lazy` parameter when
calling `connect()`. Cursors created using lazy connections will only try
to read results from the network socket when `fetchone()`,
`fetchmany()` or `fetchall()` is called. Also, they can allocate less
memory because they don’t have to store the entire result set in memory at
once.

However, lazy connections have two limitations:

1. They are always in autocommit mode. If necessary, transactions can be
explicitly managed by executing `BEGIN`, `COMMIT` or `ROLLBACK` queries.


2. At most one query can execute at a given time. Trying to execute multiple
queries at once will raise an `InterfaceError`. Before trying to execute a new query, all results of the previous query
must be fetched from its corresponding cursor (for example by calling
`fetchone()` until it returns `None`, or by calling
`fetchmany()`).

Here’s an example usage of a lazy connection:

```python
>>> import mgclient

>>> conn = mgclient.connect(host="127.0.0.1", port=7687, lazy=True)

>>> cursor = conn.cursor()

>>> cursor.execute("UNWIND range(1, 3) AS n RETURN n * n")

>>> cursor.fetchone()
(1, )

>>> cursor.fetchone()
(4, )

>>> cursor.fetchone()
(9, )

# We still didn't get None from fetchone()
>>> cursor.execute("RETURN 100")
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
mgclient.InterfaceError: cannot call execute during execution of a query

>>> cursor.fetchone()
None

# Now we can execute a new query
>>> cursor.execute("RETURN 100")
```
