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

Switching from the in-memory storage mode to the on-disk storage mode is allowed
when there is only one active session and the database is empty. As Memgraph Lab
uses multiple sessions to run queries in parallel, it is currently impossible to
switch to the on-disk storage mode within Memgraph Lab. You can change the
storage mode to on-disk transactional using `mgconsole`, then connect to the
instance with Memgraph Lab and query the instance as usual.

To change the storage mode to `ON_DISK_TRANSACTIONAL`, use the following query:

```cypher
STORAGE MODE ON_DISK_TRANSACTIONAL;
```

It is forbidden to change the storage mode from `ON_DISK_TRANSACTIONAL` to any
of the in-memory storage modes while there is data in the database as it might
not fit in the RAM. To change the storage mode to any of the in-memory storages,
empty the instance and restart it. An empty database will start in the default
storage mode (in-memory transactional).

If you are running the Memgraph Enterprise Edition, you need to have
[`STORAGE_MODE` permission](/reference-guide/auth-module.md) to change the
storage mode.

You can check the current storage mode using the following query:

```cypher
SHOW STORAGE INFO;
```

An empty instance will always restart in in-memory transactional storage mode.
Upon restart, a non-empty instance in the on-disk storage mode will not change
storage mode, but the instance in an in-memory analytical storage mode will revert
to the default in-memory transactional storage mode. 

## In-memory transactional storage mode (default)

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

## In-memory analytical storage mode

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

## On-disk transactional storage mode

In the on-disk transactional storage mode, disk is used as a physical storage
which allows you to save more data than the capacity of your RAM. This helps
keep the hardware costs to a minimum, but you should except slower performance
when compared to the in-memory transactional storage mode. Keep in mind that
while executing queries, all the graph objects used in the transactions still
need to be able to fit in the RAM, or Memgraph will throw an exception. 

### Architecture

RocksDB is used as a background storage to serialize nodes and relationships
into a key-value format. The used architecture is also known as "larger than
memory" as it enables in-memory databases to save more data than the main memory
can hold, without the performance overhead caused by the buffer pool. 

The imported data is residing on the disk, while the main memory contains two
caches, one executing operations on main RocksDB instance and the other for
operations that require indices. In both cases, Memgraph's custom
`SkipList` cache is used, which allows a multithreaded read-write access pattern.

### MVCC

Concurrent execution of transactions is supported differently for on-disk
storage than for in-memory. The in-memory storage mode relies on delta objects
which store the exact versions of data at the specific moment in time.
Therefore, the in-memory storage mode uses a pessimistic approach and
immediately checks whether there is a conflict between two transactions. 

In the on-disk storage mode, the cache is used per transaction. This
significantly simplifies object management since there is no need to question
certain object's validity, but it also requires the optimistic approach for
conflict resolution between transactions. 

In the on-disk storage mode, the conflict is checked at the transaction's commit
time with the help of RocksDB's transaction support. This also implies that
deltas are cleared after each transaction, which can optimize memory usage
during execution. Deltas are still used to fully support Cypher's semantic of
the write queries. The design of the on-disk storage also simplifies the process
of garbage collection, since all the data is on disk.

### Isolation level

The on-disk storage mode supports only snapshot isolation level. Mostly because
it's the Memgraph viewpoint that snapshot isolation should be the default
isolation level for most applications relying on databases. But the snapshot
isolation level also simplifies the query's execution flow since no data is transferred to the disk until the commit of the transaction.

### Indices

The on-disk storage mode supports both label and label-property indices. They
are stored in separate RocksDB instances as key-value pairs so that the access
to the data is faster. Whenever the indexed node is accessed, it's stored into a
separate in-memory cache to maximize the reading speed.

### Constraints

The on-disk storage mode supports both existence and uniqueness constraints.
Existence constraints don't use context from the disk since the validity of
nodes can be checked by looking only at this single node. On the other side,
uniqueness constraints require a different approach. For a node to be valid, the
engine needs to iterate through all other nodes under constraint and check
whether a conflict exists. To speed up this iteration process, nodes under
constraint are stored into a separate RocksDB instance to eliminate the cost of
iterating over nodes which are not under constraint.

### Data formats

Below is the format in which data is serialized to the disk. 

Vertex format for main disk storage:
Key - `label1, label2, ... | vertex gid | commit_timestamp`
Value - `property1, property2`

Edge format for the main disk storage:
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

In the on-disk storage mode, durability is supported by RocksDB since it keeps
its own
[WAL](https://github.com/facebook/rocksdb/wiki/Write-Ahead-Log-%28WAL%29) files.
Memgraph persists the metadata used in the implementation of the on-disk
storage. 

### Memory control

If the workload is larger than memory, a single transaction must fit into the
memory. A memory tracker track all allocations happening throughout the
transaction's lifetime. Disk space also has to be carefully managed. Since the
timestamp is serialized together with the raw node and relationship data, the
engine needs to ensure that when the new version of the same node is stored, the
old one is deleted.

### Replication

At the moment, the on-disk storage doesn't support replication.