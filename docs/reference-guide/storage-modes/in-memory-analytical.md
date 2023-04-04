---
id: in-memory-analytical
title: In-memory analytical
sidebar_label: In-memory analytical
slug: /reference-guide/storage-modes/in-memory-analytical
---

`IN_MEMORY_ANALYTICAL` mode offers no ACID guarantees besides manually created snapshots. There are no `WAL` files created, or periodic snapshots. User **can** create snapshot manually. 

In `IN_MEMORY_TRANSACTIONAL` mode, during updates, there are [delta](../../under-the-hood/storage.md#delta-memory-layout) objects created for each change of data. Such concept is backbone for 
Memgraph to provide atomicity, consistency, isolation and durability - ACID. Using `deltas`, Memgraph creates write-ahead-logs (durabilty), provides isolation and consistency, and atomicity (either everything is executed or nothing). 

One big overhead with `deltas` is that they require a lot of memory (104B per change) especially when there are a lot of changes (import, i.e. `LOAD CSV` query). `IN_MEMORY_ANALYTICAL` disables creation of `deltas` in order to provide faster import with lower memory consumption. Also, such mode creates speedup of import, and reduces memory usage drastically - up to 6 times.


## Transactions

As there are no ACID guarantees, so other transactions can see changes ongoing transactions is doing. Also, transaction can see changes it is doing.

## WAL

As mentioned, there are no write-ahead-logs created during `IN_MEMORY_ANALYTICAL` mode. When switching back to `IN_MEMORY_TRANSACTIONAL` it is recommended to create snapshot manually. After switching, `WAL` are created
if enabled with config file.

## Snapshots

There are two possible ways how snapshots are created in Memgraph, with periodic snapshots or with manually created snapshots.

### Periodic snapshots

Periodic snapshots are disabled in `IN_MEMORY_ANALYTICAL` mode.

### Manually created snapshots

Snapshots capture database state, and store it on disk. By creating snapshost is possible later to recover database from stored snapshot if configuration flag is set [--storage-recover-on-startup](../configuration.md#storage). 

When `CREATE SNAPSHOT` transaction is started, in `IN_MEMORY_ANALYTICAL` mode Memgraph guarantees that it will be **the only** transaction present in system, and all other transactions will wait until creating snapshot is done. User doesn't have to care about that, Memgraph does all the job. This way, there is no way that invalid snapshot is created.
