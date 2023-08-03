# Data durability and backup

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

Durability files are deleted when certain events are triggered, for example,
exceeding the maximum number of snapshots.

To manage this behavior, run the following queries:

```cypher
LOCK DATA DIRECTORY;
UNLOCK DATA DIRECTORY;
```

To show the status of the data directory, run:

```cypher
DATA DIRECTORY LOCK STATUS;
```

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
periodically takes snapshots during runtime. When a snapshot creation is
triggered, the entire data storage is written to the drive. Nodes and
relationships are divided into groups called batches.

On startup, the database state is recovered from the most recent snapshot file.
Memgraph can read the data and build the indices on multiple threads, using
batches as a parallelization unit: each thread will recover one batch at a time
until there are no unhandled batches.

This means the same batch size might not be suitable for every dataset. A
smaller dataset might require a smaller batch size to utilize a multi-threaded
processor, while bigger datasets might use bigger batches to minimize the
synchronization between the worker threads. Therefore the size of batches and
the number of used threads [are
configurable](/memgraph/reference-guide/configuration#storage) similarly to
other durability related settings.

The timestamp of the snapshot is compared with the latest update recorded in the
WAL file and, if the snapshot is less recent, the state of the DB will be
recovered using the WAL file.

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

To restore from back-up you have two options:

1. Start an instance by adding a `-v ~/snapshots:/var/lib/memgraph/snapshots`
    flag to the `docker run` command, where the `~/snapshots` represents a path to
    the local directory with the back-up snapshot, for example: 

    ```
    docker run -p 7687:7687 -p 7444:7444 -v ~/snapshots:/var/lib/memgraph/snapshots memgraph/memgraph
    ```

2. Copy the backed-up snapshot file into the `snapshots` directory after creating the container and start the database. So the commands should look like this: 

    ```
    docker create -p 7687:7687 -p 7444:7444 -v `snapshots`:/var/lib/memgraph/snapshots --name memgraphDB memgraph/memgraph
    tar -cf - sample_snapshot_file | docker cp -a - memgraphDB:/var/lib/memgraph/snapshots
    ```
    The `sample_snapshot_file` is the snapshot file you want to use to restore the data. Due to the nature of Docker file ownership, you need to use `tar` to copy the file as STDIN into the non-running container. It will allow you to change the ownership of the file to the `memgraph` user inside the container.

    After that, start the database with:
    ```
    docker start -a memgraphDB
    ```
    The `-a` flag is used to attach to the container's output so you can see the logs.

    Once memgraph is started, change the snapshot directory ownership to the `memgraph` user by running the following command:
    ```
    docker exec -it -u 0 memgraphDB bash -c "chown memgraph:memgraph /var/lib/memgraph/snasphots"
    ```
    Otherwise, Memgraph will not be able to write the future snapshot files and will fail.


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

## Storage modes

Memgraph has the option to work in `IN_MEMORY_ANALYTICAL`,
`IN_MEMORY_TRANSACTIONAL` or `ON_DISK_TRANSACTIONAL` [storage
modes](/reference-guide/storage-modes.md).

Memgraph always starts in the `IN_MEMORY_TRANSACTIONAL` mode in which it creates
periodic snapshots and write-ahead logging as durability mechanisms, and also
enables creating manual snapshots.

In the `IN_MEMORY_ANALYTICAL` mode, Memgraph offers no periodic snapshots and
write-ahead logging. Users can create a snapshot with the `CREATE SNAPSHOT;`
Cypher query. During the process of snapshot creation, other transactions will
be prevented from starting until the snapshot creation is completed.

In the `ON_DISK_TRANSACTIONAL` mode, durability is supported by RocksDB since it
keeps its own
[WAL](https://github.com/facebook/rocksdb/wiki/Write-Ahead-Log-%28WAL%29) files.
Memgraph persists the metadata used in the implementation of the on-disk
storage. 

## How to create backup

While running, Memgraph generates various files in its [data
directory](/docs/memgraph/reference-guide/backup), including the **durability
files**, that is,  snapshots and WALs that contain Memgraph's data in a
recoverable format and are located in the `wal` and `snapshots` folders in the
data directory. On startup, Memgraph searches for previously saved durability
files and uses them to recreate the most recent database state.

When talking about the data directory in the context of backup and restore, we
are actually talking about two directories, `snapshots` and `wal`, which are
usually located in the `/var/lib/memgraph` directory.

Snapshots are created periodically based on the value defined with the
`--storage-snapshot-interval-sec` configuration flag, as well as upon exit based
on the configuration flag `--storage-snapshot-on-exit`, defined by the
configuration file. 

You can configure the exact snapshot creation behavior [by defining the
relevant](/memgraph/reference-guide/configuration#storage). If you need
help adjusting the configuration, check out the [how-to guide on changing the
configuration](/how-to-guides/config-logs.md).

[![Related - Reference Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/backup.md)

### Create backup

  Follow these steps to create database backup:

1. **Create a snapshot**

  If necessary, create a snapshot of the current database state by running the
  following query in `mgconsole` or Memgraph Lab:

  ```cypher
  CREATE SNAPSHOT;
  ```
  The snapshot is saved in the `snapshots` directory of the data directory
  (`/var/lib/memgraph`).

2. **Lock the data directory**

  Durability files are deleted when an event is triggered, for example, exceeding
  the maximum number of snapshots.

  To disable this behavior, run the following query in `mgconsole` or Memgraph
  Lab:

  ```cypher
  LOCK DATA DIRECTORY;
  ```

3. **Copy files**

  Copy snapshot files (from the `snapshots` directory) and any additional WAL
  files (from the `wal` directory) to a backup location.

  If you've just created a snapshot file there is no need to backup WAL files. 

  To help copying the files from the Docker container, check out the [Working with
  docker
  guide](/how-to-guides/work-with-docker.md#how-to-copy-files-from-and-to-a-docker-container).

4. **Unlock the data directory**

  Run the following query in `mgconsole` or Memgraph Lab to unlock the
  directory:

  ```cypher
  UNLOCK DATA DIRECTORY;
  ```

  Memgraph will delete the files which should have been deleted before locking and
  allow any future deletion of the durability files.

### Restore data

To restore data from a backup

<Tabs
  groupId="backup"
  defaultValue="docker"
  values={[
    {label: 'Docker 🐳', value: 'docker'},
    {label: 'Linux', value: 'linux'}
  ]}>
<TabItem value='docker'>


1. Empty the `wal` directory

  If you want to restore data only from the snapshot file, ensure that the
  `wal` directory is empty:

     - Find the container ID using a `docker ps` command, then enter the container using:

    ```
    docker exec -it CONTAINER_ID bash
    ```
     - Position yourself in the `/var/lib/memgraph/wal` directory and `rm *`

1. Stop the instance using `docker stop CONTAINER_ID`
2. Start the instance by adding a `-v ~/snapshots:/var/lib/memgraph/snapshots`
  flag to the `docker run` command, where the `~/snapshots` represents a path
  to the location of the directory with the back-up snapshot, for example: 

  ```
  docker run -p 7687:7687 -p 7444:7444 -v ~/snapshots:/var/lib/memgraph/snapshots memgraph/memgraph
  ```
4. If you want to copy both WAL and snapshot files start the instance by adding
  a `-v ~/snapshots:/var/lib/memgraph/snapshots -v ~/wal:/var/lib/memgraph/wal`
  flags to the `docker run` command, where the `~/snapshots` represents a path
  to the location of the backed-up snapshot directory, and `~/wal` represents a
  path to the location of the backed-up wal directory for example: 

  ```
  docker run -p 7687:7687 -p 7444:7444 -v ~/snapshots:/var/lib/memgraph/snapshots -v ~/wal:/var/lib/memgraph/wal memgraph/memgraph
  ```

</TabItem>
<TabItem value='linux'>

1. Before running an instance, copy the backed up snapshot into the `snapshots`
   directory, and optionally, copy the backed-up WAL files into the `wal`
   directory.
2. If you are restoring data only from the snapshot file, ensure that the file
   you want to use to restore the data is the only snapshot file in the
   `snapshots` directory and that the `wal` directory is empty. If you are
   restoring data from both the snapshot and WAL files, ensure they are the only
   files in the `snapshot` and `wal` directories. 
3. Start the database. 

</TabItem>
</Tabs>