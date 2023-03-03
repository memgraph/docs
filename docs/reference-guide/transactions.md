---
id: transactions
title: Transactions
sidebar_label: Transactions
---

All Cypher queries are run within transactions, which means that all modification
made by a single query are held in memory by the transaction until the query
is successfully executed. The changes are then committed and visible to all
other transactions, users and systems. In the case of an error, the transaction
is rolled back and no changes are committed.

These automatic transactions are also called implicit transactions.

Users can also create explicit transactions to execute multiple Cypher queries
in sequence, then commit them or roll them back. 

During transaction execution, an important property of a database is the
isolation level that defines how or when the changes made by one operation
become visible to others. 

## Explicit transactions

To start a transaction, run the `BEGIN;` query. 

All the following queries will be executed as a part of a single transaction.

If any of the queries fails, further queries will no longer be successfully
executed and it won't be possible to commit the transaction.

Commit successful transactions by executing the `COMMIT;` query. 
Roll back unsuccessful transactions by executing the `ROLLBACK;` query. 

## Isolation levels

In database systems, isolation determines how transaction integrity is visible
to other users and systems.

A lower isolation level allows many users to access the same data at the same
time but increases the number of concurrency effects (such as dirty reads or
lost updates). A higher isolation level secures data consistency but requires
more system resources and increases the chances that one transaction will block
another.

Memgraph currently supports three isolation levels, from the highest to the
lowest:
 - SNAPSHOT_ISOLATION (default) - guarantees that all reads made in a
   transaction will see a consistent snapshot of the database, and the
   transaction itself will successfully commit only if no updates it has made
   conflict with any concurrent updates made since that snapshot.
 - READ_COMMITTED - guarantees that any data read was committed at the moment it
   is read.
 - READ_UNCOMMITTED - one transaction may read not yet committed changes made by
   other transactions.

### Setting the isolation level

To change the isolation level, change the `--isolation-level` configuration flag
to any of the supported values. If you need help changing the configuration,
check out [the how-to guide](/how-to-guides/config-logs.md). 

The initially set isolation level can be changed during runtime using the
following query:

```cypher
SET <scope> TRANSACTION ISOLATION LEVEL <isolation_level>
```

`<scope>` defines the scope to which the isolation level change should apply:
 - GLOBAL - apply the new isolation level globally
 - SESSION - apply the new isolation level only for the current session
 - NEXT - apply the new isolation level only for the next transaction in the current session

`<isolation_level>` defines the isolation level:
 - SNAPSHOT ISOLATION
 - READ COMMITTED
 - READ UNCOMMITTED
