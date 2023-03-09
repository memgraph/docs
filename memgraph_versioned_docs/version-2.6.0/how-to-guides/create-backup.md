---
id: create-backup
title: How to backup and restore data
sidebar_label: Backup and restore data
---

While running, Memgraph generates various files in its
[data directory](/docs/memgraph/reference-guide/backup),
including the **durability files**: snapshots and WALs that contain Memgraph's
data in a recoverable format. On startup, it searches for previously saved
durability files and uses them to recreate the most recent DB state.

Snapshots are created periodically based on the value defined with the
`--storage-snapshot-interval-sec` configuration flag in the configuration file.
If you need help adjusting the configuration, check out the [how-to guide on
changing the configuration](/docs/memgraph/how-to-guides/config-logs).

[![Related - Reference Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/backup.md)

## Create backup

To create a backup, follow the steps below:

### 1. Create a snapshot

If necessary, create a snapshot of the current database state by running the
following query in `mgconsole` or Memgraph Lab:

```cypher
CREATE SNAPSHOT;
```

### 2. Lock the data directory

Durability files are deleted when an event is triggered, for example, exceeding
the maximum number of snapshots.

To disable this behavior, run the following query in `mgconsole` or Memgraph
Lab:

```cypher
LOCK DATA DIRECTORY;
```

### 3. Copy the data directory and unlock it

Copy the data directory or a single WAL or snapshot file to a backup location.

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

If you need help copying the files from the Docker container, check out the
[Working with docker
guide](/how-to-guides/work-with-docker.md##how-to-copy-files-from-and-to-a-docker-container).

Then, run the following query in `mgconsole` or Memgraph Lab to unlock the
directory:

```cypher
UNLOCK DATA DIRECTORY;
```

Memgraph will delete the files which should have been deleted before locking and
allow any future deletion of the durability files.

## Restore data

To restore data from a backup: 

### 1. Lock the data directory

To disable changes in the data directory, run the following query in `mgconsole` or Memgraph
Lab:

```cypher
LOCK DATA DIRECTORY;
```

### 2. Copy the snapshot into the data directory

Copy the data directory or, empty the directory, then copy a single WAL or
snapshot file into it.

If you need help copying the files from the Docker container, check out the
[Working with docker
guide](/how-to-guides/work-with-docker.md##how-to-copy-files-from-and-to-a-docker-container).

### 3. Unlock the directory

Run the following query in `mgconsole` or Memgraph Lab to unlock the
directory:

```cypher
UNLOCK DATA DIRECTORY;
```

Memgraph should restore the data from the files in the data directory. 