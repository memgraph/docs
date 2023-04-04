---
id: in-memory-transactional
title: In-memory transactional
sidebar_label: In-memory transactional
slug: /reference-guide/storage-modes/in-memory-transactional
---

`IN_MEMORY_TRANSACTIONAL` mode offers all ACID guarantees. There are `WAL` files created, periodic snapshots and user can create snapshot manually. 

In `IN_MEMORY_TRANSACTIONAL` mode, during updates, there are [delta](../../under-the-hood/storage.md#delta-memory-layout) objects created for each change of data. Such concept is backbone for 
Memgraph to provide atomicity, consistency, isolation and durability - ACID. Using `deltas`, Memgraph creates write-ahead-logs (durabilty), provides isolation and consistency, and atomicity (either everything is executed or nothing).

`IN_MEMORY_TRANSACTIONAL` enables creation of `deltas` in order to provide all the ACID guarantees.


## Transactions

As there are ACID guarantees. Depending on transaction `ISOLATION LEVEL` other transactions may see changes from your transaction. Read more about transactions [here](../transactions.md).

## WAL

As mentioned, there are write-ahead-logs created during `IN_MEMORY_TRANSACTIONAL` mode. You can read more about write-ahead-logging [here](../backup.md#write-ahead-logging).

## Snapshots

Snapshots capture database state, and store it on disk. By creating snapshost is possible later to recover database from stored snapshot if configuration flag is set [--storage-recover-on-startup](../configuration.md#storage). 


There are two possible ways how snapshots are created in Memgraph, with periodic snapshots or with manually created snapshots.

### Periodic snapshots

Periodic snapshots are enabled in `IN_MEMORY_TRANSACTIONAL` mode. During periodic snapshot creation, it is not possible to manually start snapshot creation.


### Manually created snapshots

When `CREATE SNAPSHOT` transaction is started, in `IN_MEMORY_TRANSACTIONAL` mode Memgraph enables that other transactions present in system.

