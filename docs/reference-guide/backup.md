---
id: backup
title: Backup
sidebar_label: Backup
---

While running, Memgraph generates a couple of different files in its data
directory. The directory includes multiple different subdirectories, one of
them being the storage directory which contains the durability files. In that
directory, Memgraph periodically generates snapshots and WAL files that
contain Memgraph's data in a recoverable format.

Making a backup of a Memgraph instance would consist of simply copying the
data directory. This is impossible without additional help because
the durability files can be deleted when an event is triggered
(the number of snapshots exceeded the maximum allowed number).

To disable this behavior, you can use the following query:
```opencypher
LOCK DATA DIRECTORY;
```

Now, the deletion of every file contained in the data directory is delayed
until you unlock it again. You can safely copy the data directory or
a single snapshot to another location without worrying that it will be
deleted during that process.

To allow the deletion of the files, run the following query:
```opencypher
UNLOCK DATA DIRECTORY;
```

Memgraph will delete the files which should have been deleted before
and allow any future deletion of the files contained in the data
directory.

### Creating a snapshot

Snapshot is created periodically based on the time defined with the
`--storage-snapshot-interval-sec` config. If you want to generate a snapshot
instantly for the current database state, you can use the following query:
```opencypher
CREATE SNAPSHOT;
```
