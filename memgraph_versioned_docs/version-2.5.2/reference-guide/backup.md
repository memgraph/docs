---
id: backup
title: Data durability and backup
sidebar_label: Data durability and backup
---
import Tabs from "@theme/Tabs"; import TabItem from "@theme/TabItem";

Memgraph uses two mechanisms to ensure the durability of stored data and make
disaster recovery possible:

* write-ahead logging (WAL)
* periodic snapshot creation

These mechanisms generate **durability files** and save them in the respective
`wal` and `snapshots` folders in the **data directory**. Data directory stores
permanent data on-disk. 

The default data directory path is `var/lib/memgraph` but the path can be
changed by [modifying the `data-dir` configuration
flag](/memgraph/reference-guide/configuration#other).

To encrypt the data directory, use
[LUKS](https://gitlab.com/cryptsetup/cryptsetup/) as it works with Memgraph out
of the box and is undetectable from the applications perspective so it shouldn't
break any existing applications. 

[![Related - How-to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/how-to-guides/create-backup.md)

## Durability mechanisms

To configure the durability mechanisms check their respective configuration
flags in the [configuration reference
guide](/memgraph/reference-guide/configuration#storage). 

If you need help configuring Memgraph, check out the configuration [how-to
guide](/how-to-guides/config-logs.md).

### Write-ahead logging

Write-ahead logging (WAL) is a technique applied in providing **atomicity** and
**durability** to database systems. Each database modification is recorded in a
log file before being written to the DB and therefore the log file contains all
steps needed to reconstruct the DB’s most recent state.

Memgraph has WAL enabled by default. To switch it on and off, use the boolean
`storage-wal-enabled` flag. For other WAL-related flags check the [configuration
reference guide](/memgraph/reference-guide/configuration#storage).

WAL files are usually located at `/var/lib/memgraph/wal`.

### Snapshots

Snapshots provide a faster way to restore the states of your database. Memgraph
periodically takes snapshots during runtime and upon exit. When a snapshot is
triggered, the entire data storage is written to the drive. On startup, the
database state is recovered from the most recent snapshot file. The timestamp of
the snapshot is compared with the latest update recorded in the WAL file and, if
the snapshot is less recent, the state of the DB will be recovered using the WAL
file.

Memgraph has snapshot creation enabled by default. You can configure the exact
snapshot creation behavior by [defining the relevant flags](/memgraph/reference-guide/configuration#storage).
Alternatively, you can make one directly by running the following query:

```opencypher
CREATE SNAPSHOT;
```
Snapshot files are saved inside the `snapshots` directory located in the data directory
(`var/lib/memgraph`). 

:::caution
Snapshots and WAL files are presently not compatible between Memgraph versions.
:::

## Backup and restore

<Tabs
  groupId="backup"
  defaultValue="docker"
  values={[
    {label: 'Docker 🐳', value: 'docker'},
    {label: 'Linux', value: 'linux'}
  ]}>
<TabItem value='docker'>

You can easily back up Memgraph by following a four-step process:

1. Lock the data directory with the `LOCK DATA DIRECTORY;` query.
2. Create a snapshot with the `CREATE SNAPSHOT;` query.
3. Copy the snapshot from the `snapshots` directory to a backup location.
4. Unlock the directory with the `UNLOCK DATA DIRECTORY;` query.

Locking the data directory ensures that no files are deleted by the system. 

To restore from back-up:

1. Start an instance by adding a `-v ~/snapshots:/var/lib/memgraph/snapshots`
    flag to the `docker run` command, where the `~/snapshots` represents a path to
    the local directory with the back-up snapshot, for example: 

    ```
    docker run -p 7687:7687 -p 7444:7444 -v ~/snapshots:/var/lib/memgraph/snapshots memgraph/memgraph
    ```

</TabItem>
<TabItem value='linux'>

You can easily back up Memgraph by following a four-step process:

1. Lock the data directory with the `LOCK DATA DIRECTORY;` query.
2. Create a snapshot with the `CREATE SNAPSHOT;` query.
3. Copy the snapshot from the `snapshots` directory to a backup location.
4. Unlock the directory with the `UNLOCK DATA DIRECTORY;` query.

Locking the data directory ensures that no files are deleted by the system. 

To restore from back-up:

1. Copy the backed up snapshot into the `snapshots` directory.
2. Ensure that the snapshot file you want to use to restore the data is the only
   snapshot file in the `snapshots` directory and that the `wal` directory is
   empty.
3. Start the database. 

</TabItem>
</Tabs>

Check out [a detailed guide](/how-to-guides/create-backup.md).

## Database dump

The database dump contains a record of the database state in the form of Cypher
queries. It’s equivalent to the SQL dump in relational DBs. 

You can run the queries constituting the dump to recreate the state of the DB as
it was at the time of the dump.

To dump the Memgraph DB, run the following query:

```opencypher
DUMP DATABASE;
```
If you are using Memgraph Lab, you can dump the database, that is, the queries
to recreate it, to a CYPHERL file in the `Import & Export` section of the Lab.

