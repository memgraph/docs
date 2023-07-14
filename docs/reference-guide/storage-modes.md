---
id: storage-modes
title: Storage modes
sidebar_label: Storage modes
---

Memgraph supports three different storage modes:
* `IN_MEMORY_TRANSACTIONAL` - the default database mode that favors
    strongly-consistent ACID transactions using WAL files and snapshots,
    but requires more time and resources during data import and analysis.
* `IN_MEMORY_ANALYTICAL` - speeds up import and data analysis but offers no ACID
    guarantees besides manually created snapshots.
* `ON_DISK_TRANSACTIONAL` - supports ACID properties in a same way as `IN_MEMORY_TRANSACTIONAL`
    with the additional ability to store data on cheap media (e.g. HDD and SSD) with a lower
    performance than other two storage modes. **Experimental**


## Switching storage modes

You can switch between in-memory modes within the session using the following query:

```cypher
STORAGE MODE IN_MEMORY_{TRANSACTIONAL|ANALYTICAL};
```

When switching modes, Memgraph will wait until all other transactions are done.
If some other transactions are running in your system, you will receive a
warning message, so be sure to [set the log level to
`WARNING`](/reference-guide/configuration.md#other).

If you are running the Memgraph Enterprise Edition, you need to have
[`STORAGE_MODE` permission](/reference-guide/auth-module.md) to change the
storage mode.

Switching from the in-memory storage mode to disk mode is allowed only when
the database is empty and there is a single session active. The intention here
is to allow switching to users only upon starting Memgraph, not later. Switching from
disk mode to in-memory is forbidden since data may not fit into the memory.

To switch to disk storage mode the following query can be used:

```cypher
STORAGE MODE ON_DISK_TRANSACTIONAL;
```

You can query the current storage mode using the following query:

```cypher
SHOW STORAGE INFO;
```

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

## On-disk transactional storage mode

### Architecture

Using disk as a physical storage allows users to save much more data than
they can when using only RAM. As a background storage we use RocksDB to
serialize vertices and edges into key-value format. The architecture we used
here is in academy called "larger than memory" since it enables in-memory
databases to save more data than it fits into the main memory without having
the performance overhead of buffer pool. All committed data is residing on
the disk and the only thing that resided in the main memory are two caches,
one for doing operations on main RocksDB instance and the second one for
operations requiring the use of indices. The cache used here is our custom
SkipList which allows for multithreaded execution.

### MVCC
Support for concurrent execution of transactions is implemented differently
for on-disk storage than for in-memory. In the in-memory storage we rely on
delta objects which allow us to get to the exact versions of data at the
specific moment in time. Therefore, the in-memory storage uses pessimistic
approach in a sense that it is immediately checked whether there is a conflict
between two transactions. In on-disk storage, we use cache per transaction.
This significantly simplifies management of objects since we don't have to
think whether some object is valid or not. On the other hand, such design
change requires moving from pessimistic to an optimistic approach for conflict
resolution between transactions. This means that at the moment, conflict is
checked at the transaction's commit time with the help of RocksDB's transaction
support. This also implies that deltas are cleared after transaction ends so
you can even get more efficient execution in the terms of memory. We still
need deltas to fully support Cypher's semantic for write queries. Such design
also simplifies the process of garbage collection since then we only need to take
care about data on disk.

### Isolation level
The only isolation level we support for disk storage is snapshot isolation.
The first reason is that we believe it should be the default level for most
of the applications relying on the database. The second is that it simplifies
query's execution flow since there is no need to go on disk until the transa-
ction commits.

### Indices
Disk storage support both label and label-property indices.
They are stored in different RocksDB instances as key-value pairs.
Memgraph loads whole index to memory when user access vertex using index.

### Constraints


Vertices and edges
are saved in the same RocksDB instance and we distinguish them using the
concept called "handles". We use one RocksDB instance for supporting label
indices and another one for label-property indices. There is also an instance
used for implementing unique constraints. Three other instances are used
only to ensure that the context is saved when the database is closed. There
are two reasons why we use separate instance for indices, constraints and a
main storage. The first is that each of them logically enables some kind of
functionality which requires copying data. Specifically, indices essentially
speed up reading of nodes with higher memory usage while constraints restrict
the data that can be saved. Currently, the indices don't work optimally and
there is a lot of space for improvement by using Bloom and Ribbon filters.

Larger than memory database workload.

### Data formats

Vertex format for main disk storage:
Key - `label1, label2, ... | vertex gid`
Value - `property1, property2`

Edge format for main disk storage:
Key - `from vertex gid | to vertex gid | 0 | edge type | edge gid`
Value - `property1, property2`
`0` is a place holder for edge direction in future.

Format for label index on disk:

Key - `indexing label | vertex gid`

Value - `label1_id, label2_id, ... | property1, property2, ...`

Value does not contain `indexing label`.

Format for label-property index on disk:

Key - `indexing label | indexing property | vertex gid`

Value - `label1_id, label2_id, ... | property1, property2, ...`

Value does not contain `indexing label`.

### Durability

For on-disk storage RocksDB has its own WAL files and is responsible for durability.
Memgraph confirms COMMIT only if write to RocksDB was successful.

For in-memory storages Memgraph has it's own WAL files to which deltas (changes) are written.

### Memory control
- when will memory be reduced for disk and when for main-memory storage.
- how we implemented compaction


### Replication
Replication for disk storage isn't yet supported.


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
created automatically, and there are no ACID guarantees besides manually created
snapshots. There are no `WAL` files created nor periodic snapshots. Users
**can** create a snapshot manually.

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

## On-disk transactional storage

