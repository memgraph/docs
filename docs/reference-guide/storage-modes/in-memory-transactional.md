---
id: in-memory-transactional
title: In-memory transactional
sidebar_label: In-memory transactional
slug: /reference-guide/storage-modes/in-memory-transactional
---

`IN_MEMORY_TRANSACTIONAL` mode offers all ACID guarantees.  WAL files and periodic snapshots are created automatically, and you can also create snapshots manually. 

In the `IN_MEMORY_TRANSACTIONAL` mode, Memgraph creates a [`Delta`](/under-the-hood/storage.md#delta-memory-layout) object each time data is changed. Deltas are the backbone upon which 
Memgraph provides atomicity, consistency, isolation, and durability - ACID. By using `Deltas`, Memgraph creates write-ahead-logs for durability, provides isolation, consistency, and atomicity (by ensuring that everything is executed or nothing). 

`IN_MEMORY_TRANSACTIONAL` enables the creation of `Deltas` in order to provide all the ACID guarantees.


## Transactions

All ACID properties are guaranteed. Depending on the transaction isolation level, other transactions may see changes from other transactions. Read more about transactions [here](/reference-guide/transactions.md).

## WAL

Write-ahead logs are created in the `IN_MEMORY_TRANSACTIONAL` mode. You can read more about write-ahead-logging [here](/reference-guide/backup.md#write-ahead-logging).


## Snapshots

Snapshots capture the database state and store it on the disk. A snapshot is used to recover the database upon startup (depending on the setting of the configuration flag `--storage-recover-on-startup`, which defaults to `true`).

In Memgraph, snapshots are created periodically or manually. 

When Memgraph starts creating a periodic snapshot, it is not possible to manually create a snapshot, until the periodic snapshot is created.

Manual snapshots are created by running the `CREATE SNAPSHOT;` query. 
