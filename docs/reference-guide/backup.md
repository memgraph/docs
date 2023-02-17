---
id: backup
title: Data durability and backup
sidebar_label: Data durability and backup
---

Memgraph uses two mechanisms to ensure the durability of stored data and make
disaster recovery possible:

* write-ahead logging (WAL)
* periodic snapshot creation

These mechanisms generate **durability files** and save them in the
**data directory** so that one can use them to recover the database.

[![Related - How-to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/how-to-guides/create-backup.md)

## Durability mechanisms

The durability mechanisms are configurable; the relevant settings are in the
[configuration reference](/docs/memgraph/reference-guide/configuration#storage).
To configure Memgraph, you can use the configuration management
[how-to guide](/how-to-guides/config-logs.md).

### Write-ahead logging

Write-ahead logging (WAL) is a technique applied in providing **atomicity** and
**durability** to database systems. Each database modification is recorded in a
log file before being written to the DB and therefore the log file contains all
steps needed to reconstruct the DB’s most recent state.

Memgraph has WAL enabled by default. To switch it on and off, use the boolean
`storage-wal-enabled` flag. Other WAL-related flags are
`storage-wal-file-flush-every-n-tx` and `storage-wal-file-size-kib`; their uses
are described [here](/docs/memgraph/how-to-guides/config-logs).

### Snapshots

Snapshots provide a faster way to restore the states of your database. Memgraph
periodically takes snapshots during runtime. When a snapshot is triggered, the
entire data storage is written to the drive.
On startup, the database state is recovered from the most recent snapshot file.
The timestamp of the snapshot is compared with the latest update recorded in
the WAL file and, if the snapshot is less recent, the state of the DB will be
recovered using the WAL file.

Memgraph has snapshot creation enabled by default. You can configure the exact
snapshot creation behavior by defining the relevant flags
([reference](/docs/memgraph/reference-guide/configuration#storage)).
Alternatively, you can make one directly by running the following query:

```opencypher
CREATE SNAPSHOT;
```

:::caution
Snapshots and WAL files are presently not compatible between Memgraph versions.
:::

### Data directory

The data directory is the location where Memgraph saves write-ahead logs and
snapshots; it functions as the dedicated site for permanent data.

The default data directory path is `var/lib/memgraph`. You can change the path
by setting the `data-dir` configuration flag
([reference](/docs/memgraph/reference-guide/configuration#other)).

## Backup and restore

You can easily back up Memgraph by following a three-step process:

1. Create a snapshot
2. Lock the data directory
3. Copy the snapshot to the backup location and unlock the directory

To restore from back-up:

1. Lock the data directory
2. Copy the backed up snapshot into the directory
3. Unlock the directory

The following queries lock and unlock the data directory:

```opencypher
UNLOCK DATA DIRECTORY;
LOCK DATA DIRECTORY;
```

A detailed guide is available
[here](/docs/memgraph/how-to-guides/create-backup).

## Database dump

The database dump contains a record of the database state in the form of Cypher
queries; it’s equivalent to the SQL dump in relational DBs.
You can run the queries constituting the dump to recreate the state of the DB
as it was at the time of the dump.

To dump the Memgraph DB, run the following query:

```opencypher
DUMP DATABASE;
```
