---
id: in-memory-analytical
title: In-memory analytical
sidebar_label: In-memory analytical
slug: /reference-guide/storage-modes/in-memory-analytical
---

`IN_MEMORY_ANALYTICAL` mode offers no ACID guarantees besides manually created snapshots. There are no `WAL` files created nor periodic snapshots. Users **can** create a snapshot manually. 

In the `IN_MEMORY_TRANSACTIONAL` mode, Memgraph creates a [`Delta`](/under-the-hood/storage.md#delta-memory-layout) object each time data is changed. Deltas are the backbone upon which 
Memgraph provides atomicity, consistency, isolation, and durability - ACID. By using `Deltas`, Memgraph creates write-ahead-logs for durability, provides isolation, consistency, and atomicity (by ensuring that everything is executed or nothing). 

But `Deltas` also require a lot of memory (104B per change), especially when there are a lot of changes  (for example, during import with the `LOAD CSV` clause). The `IN_MEMORY_ANALYTICAL` mode disables the creation of `Deltas` thus drastically speeding up import with lower memory consumption - up to 6 times faster import with 6 times less memory consumption.


## Transactions

As there are no ACID guarantees, other transactions can see the changes of ongoing transactions. Also, a transaction can see the changes it is doing. This means that the transactions can be committed in random orders, and the updates to the data, in the end, might not be correct. 

## WAL

As mentioned, no write-ahead logs are created in the `IN_MEMORY_ANALYTICAL` mode. When switching back to the `IN_MEMORY_TRANSACTIONAL` mode it is recommended to create a snapshot manually with `CREATE SNAPSHOT;` Cypher query. Once Memgraph switches to the `IN_MEMORY_TRANSACTIONAL` mode, for all new updates it will create a WAL if not otherwise instructed by the config file.

## Snapshots

Snapshots capture the database state and store it on the disk. A snapshot is used to recover the database upon startup (depending on the setting of the configuration flag `--storage-recover-on-startup`, which defaults to `true`).

In Memgraph, snapshots are created periodically or manually. 

 In the `IN_MEMORY_ANALYTICAL` mode, periodic snapshots are **disabled**.

Manual snapshots are created by running the `CREATE SNAPSHOT;` query. When the query is run in the `IN_MEMORY_ANALYTICAL` mode, Memgraph guarantees that it will be **the only** transaction present in the system, and all the other transactions will wait until the snapshot is created to ensure its validity.
