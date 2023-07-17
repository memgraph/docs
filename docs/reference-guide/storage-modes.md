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
* `ON_DISK_TRANSACTIONAL` - supports ACID properties in the same way as `IN_MEMORY_TRANSACTIONAL`
    with the additional ability to store data on disk (HDD or SSD) thus trading performance for lower costs. **Experimental**


## Switching storage modes

You can switch between in-memory modes within a session using the following query:

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

Switching from the in-memory storage mode to the on-disk storage mode is allowed when there is only one active session and the database is empty. As Memgraph Lab uses multiple sessions to run queries in parallel, it is currently impossible to switch to the on-disk storage mode within Memgraph Lab. You can change the storage mode to on-disk transactional using `mgconsole`, then connect to the instance with Memgraph Lab and query the instance as usual.

To change the storage mode to `ON_DISK_TRANSACTIONAL`, use the following query:

```cypher
STORAGE MODE ON_DISK_TRANSACTIONAL;

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
SkipList which allows multithreaded read-write access pattern.

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
resolution between transactions. This means that for the disk storage, the conflict is
checked at the transaction's commit time with the help of RocksDB's transaction
support. This also implies that deltas are cleared after transaction ends so
it is possible to get even more efficient execution in the terms of memory. We still
need deltas to fully support Cypher's semantic for write queries. Such design
also simplifies the process of garbage collection since then we only need to take
care about data on disk.

### Isolation level
The only isolation level we support for disk storage is snapshot isolation.
The first reason is that we believe it should be the default level for most
of the applications relying on the database. The second is that it simplifies
query's execution flow since there is no need to go on disk until the transa-
ction's commit.

### Indices
Disk-storage supports both label and label-property indices. They are stored in separate
RocksDB instances as key-value pairs so that the access to the data is faster. Whenever
the indexed vertex is accessed, it is put into the separate in-memory cache so that
the reading speed is maximized.

### Constraints

Memgraph's disk storage supports both existence and unique constraints. Existence
constraints don't use context from the disk since the validity of vertex can be checked
by looking only at this single vertex. On the other side, unique constraints require
a different approach. For vertex to be valid, we need to iterate through all other vertices
under constraint and check whether the conflict exists. To speed up this iteration 
process, vertices which are under constaint are put into the separate RocksDB instance
so that the cost of iterating over vertices which are not under constraint is mitigated.

### Data formats

Vertex format for main disk storage:
Key - `label1, label2, ... | vertex gid | commit_timestamp`
Value - `property1, property2`

Edge format for main disk storage:
Key - `from vertex gid | to vertex gid | 0 | edge type | edge gid | commit_timestamp`
Value - `property1, property2`
`0` is a placeholder for edge direction in future.

Format for label index on disk:

Key - `indexing label | vertex gid | commit_timestamp`

Value - `label1_id, label2_id, ... | property1, property2, ...`

Value does not contain `indexing label`.

Format for label-property index on disk:

Key - `indexing label | indexing property | vertex gid | commit_timestamp`

Value - `label1_id, label2_id, ... | property1, property2, ...`

Value does not contain `indexing label`.

### Durability

For on-disk storage, durability support is provided by RocksDB 
since it has its own [WAL](https://github.com/facebook/rocksdb/wiki/Write-Ahead-Log-%28WAL%29).
This leaves us with a need for persisting only metadata used in 
the implementation of disk storage.

### Memory control

In a larger than memory workload, we use the approach that a 
single transaction must fit into the memory. This is ensured 
by using a memory tracker which tracks all allocations that
happen throughout the transaction's lifetime.
The disk space must also be carefully managed. Since the
timestamp is serialized together with the raw vertex and edge
data, we have to ensure that when the new version of the same
vertex is stored, the old one is deleted. There are several ways
how to do that and we chose the one which does all the necessary work
in the commit time.  

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
