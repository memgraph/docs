---
id: backup
title: Data durability and backup
sidebar_label: Data durability and backup
---

Memgraph uses two mechanisms to ensure the durability of the stored data:

  * write-ahead logging (WAL)
  * periodic snapshots

Memgraph saves these periodically generated **durability files** in the
**data directory**, and they can be used to recover the database. 

[![Related - How-to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/how-to-guides/create-backup.md)

## Durability mechanisms

In write-ahead logging, all database modifications are recorded in a log file
before being applied to the database. WAL ensures that all operations are done
atomically and provides steps needed to reconstruct the database state.

Snapshots are taken periodically during the entire runtime of Memgraph. When
a snapshot is triggered, the whole data storage is written to disk. The
snapshot file provides a quicker way to restore the database state.

On startup, database is recovered from the most recent snapshot file. The
timestamp on the snapshot is compared to the most recent update logged in the
WAL file, and if the snapshot is older, the database will be fully recovered
using the WAL file as well. 

Some events, such as exceeding the maximum number of snapshots, trigger deletion
of older files. 

Behavior of these mechanisms can be tweaked in the configuration file
(`/etc/memgraph/memgraph.conf`) by changing values of various flags regarding
storage.

Check the configuration reference guide for the [possible storage configuration
settings](../reference-guide/configuration#storage) and if you need
help changing the configuration, check out the how-to guide on [configuration
management](/how-to-guides/config-logs.md). 

:::caution
Snapshot and WAL files are (currently) not compatible between Memgraph
versions.
:::

## Backup

Snapshots of the Memgraph instance are created periodically based on the time
defined with the `--storage-snapshot-interval-sec` configuration flag. If you
want to generate a snapshot for the current database state instantly, use the
following query:

```opencypher
CREATE SNAPSHOT;
```

To create a backup of the instance, disable deletion of durability files, then
copy the **data directory** or individual WAL or snapshot files to a backup
location. 

To disable deletion, run the following query:
```opencypher
LOCK DATA DIRECTORY;
```

To enable deletion of the files, run the following query:
```opencypher
UNLOCK DATA DIRECTORY;
```