---
id: storage-modes
title: Storage modes
sidebar_label: Storage modes
---

Memgraph supports two different storage modes:
* `IN_MEMORY_TRANSACTIONAL` - the default database mode that favors
    strongly-consistent ACID transactions using WAL files and snapshots,
    but requires more time and resources during data import and analysis.
* `IN_MEMORY_ANALYTICAL` - speeds up import and data analysis but offers no ACID
    guarantees besides manually created snapshots.

You can switch between modes within the session using the following query:

```cypher
STORAGE MODE IN_MEMORY_{TRANSACTIONAL|ANALYTICAL};
```

When switching modes, Memgraph will wait until all other transactions are done. If some other transactions are running in your system, you will receive a warning message, so be sure to [set the log level to `WARNING`](/reference-guide/configuration.md#other).

If you are running the Memgraph Enterprise Edition, to change the storage mode
you to have [`STORAGE_MODE` permission](/reference-guide/auth-module.md).

## Transactional storage mode (default)

`IN_MEMORY_TRANSACTIONAL` storage mode offers all ACID guarantees. WAL files and
periodic snapshots are created automatically, and you can also create snapshots
manually. 

In the `IN_MEMORY_TRANSACTIONAL` mode, Memgraph creates a
[`Delta`](/memgraph/under-the-hood/storage#delta-memory-layout) object each time
data is changed. Deltas are the backbone upon which Memgraph provides atomicity,
consistency, isolation, and durability - ACID. By using `Deltas`, Memgraph
creates [write-ahead-logs](/memgraph/reference-guide/backup#write-ahead-logging)
for durability, provides isolation, consistency, and atomicity (by ensuring that
everything is executed or nothing). 

Depending on the transaction [isolation
level](/memgraph/reference-guide/transactions#isolation-levels), other transactions may
see changes from other transactions.

In the transactional storage mode,
[snapshots](/memgraph/reference-guide/backup#snapshots) are created periodically
or manually. They capture the database state and store it on the disk. A
snapshot is used to recover the database upon startup (depending on the setting
of the configuration flag `--storage-recover-on-startup`, which defaults to
`true`).

When Memgraph starts creating a periodic snapshot, it is not possible to
manually create a snapshot, until the periodic snapshot is created.

Manual snapshots are created by running the `CREATE SNAPSHOT;` query. 

## Analytical storage mode

In the transactional storage mode, Memgraph is fully [ACID
compliant](/reference-guide/backup.md) which could cause memory spikes during data
import because each time data is changed Memgraph creates
[`Delta`](/memgraph/under-the-hood/storage#delta-memory-layout) objects to
provides atomicity, consistency, isolation, and durability 

But `Deltas` also require a lot of memory (104B per change), especially when
there are a lot of changes  (for example, during import with the `LOAD CSV`
clause). By switching the storage mode to `IN_MEMORY_ANALYTICAL` mode disables
the creation of `Deltas` thus drastically speeding up import with lower memory
consumption - up to 6 times faster import with 6 times less memory consumption.

If you want to enable ACID compliance, you can switch back to
`IN_MEMORY_TRANSACTIONAL` and continue with regular work on the database or you
can take advantage of the low memory costs of the analytical mode to run
analytical queries that will not change the data, but be aware that no backup is
created automatically (you can create manual snapshots), and there are no ACID
guarantees besides manually created snapshots. There are no `WAL` files created
nor periodic snapshots. Users **can** create a snapshot manually. 

### Transactions

In the analytical storage mode, there are no ACID guarantees and other
transactions can see the changes of ongoing transactions. Also, a [transaction
can see the changes it is
doing](/memgraph/reference-guide/transactions#isolation-levels). This means that
the transactions can be committed in random orders, and the updates to the data,
in the end, might not be correct. 

### WAL

As mentioned, no [write-ahead
logs](/memgraph/reference-guide/backup#write-ahead-logging) are created in the
`IN_MEMORY_ANALYTICAL` mode. When switching back to the
`IN_MEMORY_TRANSACTIONAL` mode it is recommended to create a snapshot manually
with `CREATE SNAPSHOT;` Cypher query. Once Memgraph switches to the
`IN_MEMORY_TRANSACTIONAL` mode, for all new updates it will create a WAL if not
otherwise instructed by the config file.

### Snapshots

[Snapshots](/memgraph/reference-guide/backup#snapshots) capture the database
state and store it on the disk. A snapshot is used to recover the database upon
startup (depending on the setting of the configuration flag
`--storage-recover-on-startup`, which defaults to `true`).

In Memgraph, snapshots are created periodically or manually. 

In the `IN_MEMORY_ANALYTICAL` mode, periodic snapshots are **disabled**.

Manual snapshots are created by running the `CREATE SNAPSHOT;` query. When the
query is run in the `IN_MEMORY_ANALYTICAL` mode, Memgraph guarantees that it
will be **the only** transaction present in the system, and all the other
transactions will wait until the snapshot is created to ensure its validity.