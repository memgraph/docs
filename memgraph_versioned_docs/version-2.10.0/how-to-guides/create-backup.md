---
id: create-backup
title: How to backup and restore data
sidebar_label: Backup and restore data
---
import Tabs from "@theme/Tabs"; import TabItem from "@theme/TabItem";

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

## Create backup

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

## Restore data

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