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

## Managing transactions

Starting with Memgraph v2.7.0 you can check running transactions and terminate them.

### Show transactions

To see what transactions are running at the moment use the following command:

```cypher
SHOW TRANSACTIONS;
```

The command will show only the transactions you started or transactions for which you have the necessary [privilege](#privileges-needed-to-manage-all-transactions).

<img src={require('../data/how-to-guides/manage-transactional-queue/show_transactions.png').default}/>

### Terminate transactions

To terminate one or more transactions, you need to open a new session and use the following query:

```cypher
TERMINATE TRANSACTIONS "tid", "<tid2>", "<tid3>", ... ;
```

The `tid` is the transactional ID that can be seen using the `SHOW TRANSACTIONS;` query.

The `TERMINATE TRANSACTIONS` query signalizes to the thread executing the transaction that it should stop the execution. No violent interruption will happen, and the whole system will stay in a consistent state.
To terminate the transaction you haven't started, you need to have the necessary [privilege](#privileges-needed-to-manage-all-transactions).

#### Terminating custom procedures

If you want to be able to [terminate custom
procedures](/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example.md),
crucial parts of the code, such as `while` and `until` loops, or similar points
where the procedure might become costly, need to be preceded with
CheckMustAbort() function.

#### New session with Docker

If you are using **Memgraph Lab**, you can vertically split screens and open another
Query Execution section. 

If you are using **mgconsole** on an instance running in a Docker container:

1. Open a new terminal and find the CONTAINER ID of the Memgraph Docker container: 

  ```
  docker ps
  ```

2. Enter the container with the following command: 

  ```
  docker exec -it CONTAINER ID bash
  ```
3. Execute `mgconsole` command to run the client

4. Run the `SHOW TRANSACTIONS;` and `TERMINATE TRANSACTIONS tid;`

### Example

The output of the `SHOW TRANSACTIONS` command shows that an infinite query is currently being run as part of the transaction ID "9223372036854775809".

To terminate the transaction, run the following query:

```cypher
TERMINATE TRANSACTIONS "9223372036854775809";
```

Upon the transaction termination, the following confirmation will appear: 

<img src={require('../data/how-to-guides/manage-transactional-queue/terminate_transactions.png').default}/>

The following message will appear in the session in which the infinite query was being run:

<img src={require('../data/how-to-guides/manage-transactional-queue/transaction_aborted_message.png').default}/>

### Privileges needed to manage all transactions

By default, the users can see and terminate only the transactions they started. For all other transactions, the user must have the **TRANSACTION_MANAGEMENT** privilege which the admin assigns with the following query:

```cypher
GRANT TRANSACTION_MANAGEMENT TO user;
```

The privilege to see all the transactions running in Memgraph is revoked using the following query:

```cypher
REVOKE TRANSACTION_MANAGEMENT FROM user;
```

:::info
When Memgraph is first started there is only one explicit super-admin user that has all privileges, including the **TRANSACTION_MANAGEMENT**. The super-admin user is able to see all transactions.
:::

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


You can only change the isolation level when Memgraph is running in the
[`IN_MEMORY_TRANSACTIONAL` mode](/reference-guide/storage-modes.md).

## Storage modes

Memgraph can work in `IN_MEMORY_ANALYTICAL` or `IN_MEMORY_TRANSACTIONAL`
[storage mode](/reference-guide/storage-modes.md). `IN_MEMORY_TRANSACTIONAL` is
the default mode in which Memgraph runs on startup.

`IN_MEMORY_TRANSACTIONAL` mode offers all mentioned isolation levels and all
ACID guarantees. `IN_MEMORY_ANALYTICAL` offers no isolation levels and no ACID
guarantees. Multiple transactions can write data to Memgraph simultaneously. One
transaction can therefore see all the changes from other transactions.

There can't be any active transactions if you want to switch from one mode to
another. Memgraph will log a warning message if it finds any active
transactions, so set the log level to `WARNING` to see them. No other
transactions will take place during the switch between modes.
