---
id: create-backup
title: How to create a backup
sidebar_label: Create a backup
---

[![Related - Reference Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/backup.md)

While running, Memgraph generates several different files in its data directory.
This is the location where Memgraph saves all permanent data. The default data
directory is `/var/lib/memgraph` and you can change it in the main [Memgraph
configuration file](/docs/memgraph/reference-guide/configuration).

The data directory includes multiple different subdirectories, one of them being
the storage directory, which contains the durability files. In that directory,
Memgraph periodically generates [snapshots and WAL
files](/docs/memgraph/under-the-hood/storage) that contain Memgraph's data in a
recoverable format.

Snapshot is created periodically based on the time defined with the
`--storage-snapshot-interval-sec` config in the [Memgraph configuration
file](/docs/memgraph/how-to-guides/config-logs).

## 1. Creating a snapshot

If you want to trigger creating a snapshot of the current database state, run
the following query in `mgconsole` or Memgraph Lab:

```cypher
CREATE SNAPSHOT;
```

## 2. Locking the data directory

Creating a backup of a Memgraph instance would consist of simply copying the
data directory. This is impossible without additional help because the
durability files can be deleted when an event is triggered (the number of
snapshots exceeded the maximum allowed number).

To disable this behavior, you can use the following query in `mgconsole` or
Memgraph Lab:

```cypher
LOCK DATA DIRECTORY;
```

## 3. Copying data directory and unlocking

The deletion of every file contained in the data directory is delayed until you
unlock it again. You can safely copy the data directory or a single snapshot to
another location without worrying that it will be deleted during copying.

<details>
  <summary>Copy files if you are using Memgraph on Linux</summary>
  
If you are using Linux to run Memgraph, here are the steps for copying files:

<br/><br/>

**1.** Start your Memgraph instance.

**2.** Open a new Linux terminal and check the location of the permanent data
directory:

```bash
grep -A 1 'permanent data' /etc/memgraph/memgraph.conf
```

If you are getting a permission error, execute the `sudo su` command to get
access privileges and then try to change the working directory again.

Your output should look something like this:

```nocopy
# Path to directory in which to save all permanent data. [string]
--data-directory=/var/lib/memgraph
```

As you can see, the path is the default one: `/var/lib/memgraph`.

**3.** Locate the files that you want to backup. Let's say that you want to copy
the latest snapshot, list the content of the snapshot directory and then copy
the latest file.

```bash
ls -l /var/lib/memgraph/snapshots/
```

```nocopy
total 35920
-rw-r----- 1 memgraph memgraph  7185673 Mar 25 13:52 20220325125206991975_timestamp_2622
-rw-r----- 1 memgraph memgraph 12521724 Mar 25 13:52 20220325125237040637_timestamp_3028
-rw-r----- 1 memgraph memgraph 17064381 Mar 25 13:53 20220325125308366007_timestamp_3380
```

**4.** Copy a file from the snapshot directory to the backup folder:

```bash
cp /var/lib/memgraph/snapshots/20220325125308366007_timestamp_3380 ~/backup/
```

</details>

To allow the deletion of the files, run the following query in `mgconsole` or
Memgraph Lab::

```cypher
UNLOCK DATA DIRECTORY;
```

Memgraph will delete the files which should have been deleted before and allow
any future deletion of the files contained in the data directory.
