---
id: how-to-create-backup
title: Create backup
sidebar_label: How to create backup
---

While running, Memgraph generates several different files in the data directory
it saves all permanent data. The default data directory is `/var/lib/memgraph`
and you can change it in the main [Memgraph configuration
file](/docs/memgraph/reference-guide/configuration).

The data directory includes multiple different subdirectories, one of them is
the storage directory, which contains the durability files. In that directory,
Memgraph periodically generates [snapshots and WAL
files](/docs/memgraph/under-the-hood/storage) that contain Memgraph's data in a
recoverable format.

Snapshots are created periodically based on the time defined by the
`--storage-snapshot-interval-sec` flag in the Memgraph configuration file.

## 1. Creating a snapshot instantly

:::note 

You have to run the following queries in `mgconsole` or MemgraphLab.

:::

If  you want to generate a snapshot for the current database state instantly,
run the following query:

```cypher
CREATE SNAPSHOT;
```
### 2. Locking data directory

Making a backup of a Memgraph instance would consist of simply copying the data
directory. This is impossible without additional help because the durability
files can be deleted when an event is triggered (the number of snapshots
exceeded the maximum allowed number).

To disable this behavior, run the following query:
```cypher
LOCK DATA DIRECTORY;
```

### 3. Copying data directory and unlocking

The deletion of each file in the data directory is delayed until you unlock the
data directory again. You can safely copy the data directory or a single
snapshot to another location without worrying that it will be deleted during
copying.

To allow the deletion of the files, run the following query:

```cypher
UNLOCK DATA DIRECTORY;
```

Memgraph will delete the files which should have been deleted before and allow
any future deletion of the files contained in the data directory.

