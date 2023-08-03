---
id: replication
title: Replication
sidebar_label: Replication
---

:::caution

Memgraph 2.9 introduced a new configuration flag
`--replication-restore-state-on-startup` which is `false` by default.

If you want instances to remember their role and configuration in a replication
cluster upon restart, the `--replication-restore-state-on-startup` needs to be
set to `true` when first initializing the instances and remain `true` throughout
the instances' lifetime. 

When reinstating a cluster it is advised to first initialize the MAIN
instance, then the REPLICA instances. 

:::

When distributing data across several instances, Memgraph uses replication to
provide a satisfying ratio of the following properties, known from the CAP theorem:

1.  **Consistency** (C) - every node has the same view of data at a given point in
    time
2.  **Availability** (A) - all clients can find a replica of the data, even in the
    case of a partial node failure
3.  **Partition tolerance** (P) - the system continues to work as expected despite a
    partial network failure

In the replication process, the data is replicated from one storage (MAIN
instance) to another (REPLICA instances).

:::info

From version 2.4 it is no longer possible to specify a timeout when registering
a sync replica. To mimic this behavior in higher releases, please use ASYNC
replication instead.

:::


[![Related - How
to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/how-to-guides/replication.md)
[![Related - Under the
Hood](https://img.shields.io/static/v1?label=Related&message=Under%20the%20hood&color=orange&style=for-the-badge)](/under-the-hood/replication.md)
[![Related - Blog
Post](https://img.shields.io/static/v1?label=Related&message=Blog%20post&color=9C59DB&style=for-the-badge)](https://memgraph.com/blog/implementing-data-replication)


## Data replication implementation basics

In Memgraph, all instances are MAIN upon starting. When creating a replication
cluster, one instance has to be chosen as the MAIN instance. The rest of the
instances have to be demoted to REPLICA roles and have a port defined using a
Cypher query. 

If you want instances to remember their role and configuration in a replication
cluster upon restart, they need to be initialized with the
`--replication-restore-state-on-startup` set to `true` and remain `true`
throughout the instances' lifetime. Otherwise and by default, restarted
instances will start as MAIN instances disconnected from any replication
cluster. 

Once demoted to REPLICA instances, they will no longer accept write queries. In
order to start the replication, each REPLICA instance needs to be registered
from the MAIN instance by setting [a replication
mode](/under-the-hood/replication.md#replication-modes) (SYNC or ASYNC) and
specifying the REPLICA instance's socket address.

The replication mode defines the terms by which the MAIN instance can commit the
changes to the database, thus modifying the system to prioritize either
consistency or availability:

- **SYNC** - After committing a transaction, the MAIN instance will communicate
the changes to all REPLICA instances running in SYNC mode and wait until it
receives a response or information that a timeout is reached. SYNC mode ensures
consistency and partition tolerance (CP), but not availability for writes. If
the primary database has multiple replicas, the system is highly available for
reads. But, when a replica fails, the MAIN instance can't process the write due
to the nature of synchronous replication.

- **ASYNC** - The MAIN instance will commit a transaction without receiving
  confirmation from REPLICA instances that they have received the same
  transaction. ASYNC mode ensures system availability and partition tolerance (AP),
  while data can only be eventually consistent. 

Once the REPLICA instances are registered, data storage of the MAIN instance is
replicated and synchronized using transaction timestamps and durability files
(snapshot files and WALs). Memgraph does not support replication of
authentication configurations, query and authentication modules, and audit logs.

By using the timestamp, the MAIN instance knows the current state of the
REPLICA. If the REPLICA is not synchronized with the MAIN instance, the MAIN
instance sends the correct data for synchronization kept as deltas within WAL
files. Deltas are the smallest possible updates of the database, but they carry
enough information to synchronize the data on a REPLICA. Memgraph stores only
`remove` actions as deltas, for example, `REMOVE key:value ON node_id`.

If the REPLICA is so far behind the MAIN instance that the synchronization using
WAL files and deltas within it is impossible, Memgraph will use snapshots to
synchronize the REPLICA to the state of the MAIN instance. 

## Running multiple instances

When running multiple instances, each on its own machine, run Memgraph as you
usually would.

If you are exploring replication and running multiple instances on one machine,
you can run Memgraph with Docker. Check [Docker run options for Memgraph
images](/memgraph/how-to-guides/work-with-docker#run-a-memgraph-docker-image) to
set up ports and volumes properly, if necessary.

## Assigning roles

Each Memgraph instance has the role of the MAIN instance when it is first
started.

Also, by default, each crashed instance restarts as a MAIN instance disconnected
from any replication cluster. To change this behavior, set the
`--replication-restore-state-on-startup` to `true` when first initializing the
instance.

### Assigning the REPLICA role

Once you decide what instance will be the MAIN instance, all the other instances
that will serve as REPLICA instances need to be demoted and have the port set
using the following query:

```plaintext
SET REPLICATION ROLE TO REPLICA WITH PORT <port_number>;
```

If you set the port of each REPLICA instance to `10000`, it will be easier to
register replicas later on because the query for registering replicas uses port
10000 as the default one.

Otherwise, you can use any unassigned port between 1000 and 10000.

### Assigning the MAIN role

The replication cluster should only have one MAIN instance in order to avoid
errors in the replication system. If the original MAIN instance fails, you can
promote a REPLICA instance to be the new MAIN instance by running the following
query:

```plaintext
SET REPLICATION ROLE TO MAIN;
```

If the original instance was still alive when you promoted a new MAIN, you need
to resolve any conflicts and manage replication manually.

If you demote the new MAIN instance back to the REPLICA role, it will not
retrieve its original function. You need to [drop
it](#dropping-a-replica-instance) from the MAIN and register it again.

If the crashed MAIN instance goes back online once a new MAIN is already
assigned, it cannot reclaim its previous role. It can be cleaned and
demoted to become a REPLICA instance of the new MAIN instance. 

### Checking the assigned role

To check the replication role of an instance, run the following query:

```plaintext
SHOW REPLICATION ROLE;
```

## Registering REPLICA instances

Once all the nodes in the cluster are assigned with appropriate roles, you can
enable replication in the MAIN instance by registering REPLICA instances,
setting a replication mode (SYNC and ASYNC), and specifying
the REPLICA instance's socket address. Memgraph doesn't support chaining REPLICA
instances, that is, a REPLICA instance cannot be replicated on another REPLICA
instance.

If you want to register a REPLICA instance with a SYNC replication mode, run the following query:

```plaintext
REGISTER REPLICA name SYNC TO <socket_address>;
```

If you want to register a REPLICA instance with an ASYNC replication mode, run
the following query:

```plaintext
REGISTER REPLICA name ASYNC TO <socket_address>;
```

The socket address must be a string value as follows:

```plaintext
"IP_ADDRESS:PORT_NUMBER"
```

where `IP_ADDRESS` is a valid IP address, and `PORT_NUMBER` is a valid port
number, for example:

```plaintext
"172.17.0.4:10050"
```

The default value of the `PORT_NUMBER` is `10000`, so if you set REPLICA roles
using that port, you can define the socket address specifying only the valid IP
address:

```plaintext
"IP_ADDRESS"
```

Example of a `<socket_address>` using only `IP_ADDRESS`:

```plaintext
"172.17.0.5"
```

When a REPLICA instance is registered, it will start replication in ASYNC mode
until it synchronizes to the current state of the database. Upon
synchronization, REPLICA instances will either continue working in the ASYNC
mode or reset to SYNC mode.

### Listing all registered REPLICA instances

You can check all the registered REPLICA instances and their details by running
the following query:

```plaintext
SHOW REPLICAS;
```

### Dropping a REPLICA instance

To drop a replica, run the following query:

```plaintext
DROP REPLICA <name>;
```

## MAIN and REPLICA synchronization

By comparing timestamps, the MAIN instance knows when a REPLICA instance is not
synchronized and is missing some earlier transactions. The REPLICA instance is
then set into a RECOVERY state, where it remains until it is [fully synchronized
with the MAIN instance](/under-the-hood/replication.md#synchronizing-instances).

The missing data changes can be sent as snapshots or WAL files. Snapshot files
represent an image of the current state of the database and are much larger than
the WAL files, which only contain the changes, deltas. Because of the difference
in file size, Memgraph favors the WAL files.

While the REPLICA instance is in the RECOVERY state, the MAIN instance
calculates the optimal synchronization path based on the REPLICA instance's
timestamp and the current state of the durability files while keeping the
overall size of the files necessary for synchronization to a minimum.

## Set up a replication cluster

In the replication process, the data is replicated from one storage (MAIN
instance) to another (REPLICA instances), thus providing a combination of
consistency, availability and partition tolerance when distributing data over
several instances.

[![Related - Reference
Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/replication.md)
[![Related - Under the
Hood](https://img.shields.io/static/v1?label=Related&message=Under%20the%20hood&color=orange&style=for-the-badge)](/under-the-hood/replication.md)
[![Related - Blog
Post](https://img.shields.io/static/v1?label=Related&message=Blog%20post&color=9C59DB&style=for-the-badge)](https://memgraph.com/blog/implementing-data-replication)

This example demonstrates how to create a simple cluster of nodes running
Memgraph instances, and set up replication using various replication modes.

### Cluster topology

The cluster will consist of three nodes, one MAIN instance and two REPLICA
instances. In order to showcase the creation of REPLICA instances with different
replication modes, we will create:

- The MAIN instance - contains the original data that will be replicated to
  REPLICA instances
- REPLICA instance 1 - replication in the SYNC mode
- REPLICA instance 2 - replication in the ASYNC mode

### How to run multiple instances?

If you are running multiple instances, each on its own machine, run Memgraph as
you usually would.

If you are exploring replication and running multiple instances on one machine, run Memgraph Platform with Docker.

Memgraph 2.9 introduced a new configuration flag
`--replication-restore-state-on-startup` which is `false` by default.

If you want instances to remember their role and configuration in a replication
cluster upon restart, the `--replication-restore-state-on-startup` needs to be
set to `true` when first initializing the instances and remain `true` throughout
the instances' lifetime. 

The MAIN instance:

```
docker run -it -p 3000:3000 memgraph/memgraph-platform
```

REPLICA instance 1:

```
docker run -it -p 3001:3000 memgraph/memgraph-platform
```

REPLICA instance 2:

```
docker run -it -p 3002:3000 memgraph/memgraph-platform
```

You can connect to each instance with the [Memgraph Lab](/memgraph-lab)
in-browser application at:

- the MAIN instance - `localhost:3000`
- REPLICA instance 1 - `localhost:3001`
- REPLICA instance 2 - `localhost:3002`

If you need to define additional ports or volumes, check [Docker run options for Memgraph images](/memgraph/how-to-guides/work-with-docker#run-a-memgraph-docker-image). 

### How to demote an instance to a REPLICA role?

Run the following query in both REPLICA instances to demote them to the
REPLICA role:

```
SET REPLICATION ROLE TO REPLICA WITH PORT 10000;
```

If you set the port of each REPLICA instance to `10000`, it will be easier to
register replicas later on because the query for registering replicas uses port
`10000` as the default one.

Otherwise, you can use any unassigned port between 1000 and 10000.

### How to register REPLICA instances?

To register a REPLICA instance, you need to find out the IP address of each
instance.

The IP addresses will probably be:

- the MAIN instance - `172.17.0.2`
- REPLICA instance 1 - `172.17.0.3`
- REPLICA instance 2 - `172.17.0.4`

If they are not, please change the IP addresses in the following queries to
match the [IP addresses on your cluster](/memgraph/how-to-guides/work-with-docker#how-to-retrieve-a-docker-container-ip-address).

Then, run the following queries from the MAIN instance to register REPLICA
instances:

1. REPLICA instance 1 at `172.17.0.3`

   ```
   REGISTER REPLICA REP1 SYNC TO "172.17.0.3";
   ```

   REPLICA instance 1 is called REP1, its replication mode is SYNC, and it is
   located at IP address `172.17.0.3.` with port `10000`.

   Once the MAIN instance commits a transaction, it will communicate the changes
   to all REPLICA instances running in SYNC mode and wait until it receives a response that the changes have been applied to the REPLICAs or that a timeout has been reached.

   If you used any port other than `10000` while demoting a REPLICA instance,
   you will need to specify it like this: "172.17.0.3:5000"

2. REPLICA instance 2 at `172.17.0.4`

   ```
   REGISTER REPLICA REP2 ASYNC TO "172.17.0.4";
   ```

   REPLICA instance 2 is called REP2, its replication mode is ASYNC, and it is
   located at IP address `172.17.0.4.` with port `10000`.

   When the REPLICA instance is running in ASYNC mode the MAIN instance will
   commit a transaction without receiving confirmation from REPLICA instances
   that they have received the same transaction. ASYNC mode ensures system
   availability and partition tolerance.

   If you used any port other than `10000` while demoting a REPLICA instance,
   you will need to specify it like this: "172.17.0.4:5000"

### How to check info about registered REPLICA instances?

Check REPLICA instances by running the following query from the MAIN
instance:

```
SHOW REPLICAS;
```

### How to drop a REPLICA instance?

To drop a replica, run the following query:

```plaintext
DROP REPLICA <name>;
```

### How to promote a REPLICA instance to MAIN?

To promote a REPLICA instance to MAIN, run the following query:

```plaintext
SET REPLICATION ROLE TO MAIN;
```


## Look under the hood of Memgraph's replication

Uninterrupted data and operational availability in production systems are
critical and can be achieved in many ways. In Memgraph we opted for replication.

[![Related - How
to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/how-to-guides/replication.md)
[![Related - Reference
Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/replication.md)
[![Related - Blog
Post](https://img.shields.io/static/v1?label=Related&message=Blog%20post&color=9C59DB&style=for-the-badge)](https://memgraph.com/blog/implementing-data-replication)

In distributed systems theory the CAP theorem, also named Brewer's theorem,
states that any distributed system can simultaneously guarantee two out of the
three properties:

1. **Consistency** (C) - every node has the same view of data at a given point in
   time
2. **Availability** (A) - all clients can find a replica of the data, even in the
   case of a partial node failure
3. **Partition tolerance** (P) - the system continues to work as expected despite a
   partial network failure

<img src={require('../data/replication/memgraph-replication-CAP-theorem.png').default} className={"imgBorder"}/>

Most of the Memgraph use-cases do not benefit from well-known algorithms that
strive to achieve all three CAP properties, such as Raft, because due to their
complexity they produce performance issues. Memgraph use-cases are based on
running analytical graph workloads on real-time data, demanding a simpler
concept such as **replication**.

Replication consists of replicating data from one storage to one or several
other storages. The downside of its simplicity is that only two out of three CAP
properties can be achieved.

### Replication implementation in Memgraph

To enable replication, there must be at least two instances of Memgraph in a
cluster. Each instance has one of two roles: MAIN or REPLICA. The MAIN instance
accepts read and write queries to the database and REPLICA instances accept only
read queries.

The changes or state of the MAIN instance are replicated to the REPLICA
instances in a SYNC or ASYNC mode. The SYNC mode ensures consistency and
partition tolerance (CP), but not availability for writes. The ASYNC mode
ensures system availability and partition tolerance (AP), while data can only be
eventually consistent. 

By using the timestamp, the MAIN instance knows the current state of the
REPLICA. If the REPLICA is not synchronized with the MAIN instance, the MAIN
instance sends the correct data for synchronization as WAL files. 

If the REPLICA is so far behind the MAIN instance that the synchronization using
WAL files is impossible, Memgraph will use snapshots.

### Replication modes

:::info

From version 2.4 it is no longer possible to specify a timeout when registering
a SYNC replica. To mimic this behavior in higher releases, please use ASYNC
replication instead.

:::

Replication mode defines the terms by which the MAIN instance can commit the
changes to the database, thus modifying the system to prioritize either
consistency or availability. There are two possible replication modes
implemented in Memgraph replication:

- SYNC
- ASYNC

<img src={require('../data/replication/memgraph-replication-async-sync.png').default} className={"imgBorder"}/>

When a REPLICA instance is registered and added to the cluster, it will start
replicating in ASYNC mode. That will allow it to catch up to the current state
of the MAIN instance. When the REPLICA instance synchronizes with the MAIN
instance, the replication mode will change according to the mode defined during
registration.

#### SYNC replication mode

SYNC mode is the most straightforward replication mode in which the main storage
thread waits for the response and cannot continue until the response is
received or a timeout is reached.

The following diagrams express the behavior of the MAIN instance in cases when
SYNC REPLICA doesn't answer within the expected timeout.

##### SYNC REPLICA going down when creating index, uniqueness constraint or existence constraint

![sync-replicas-down-when-creating-index-or-constraints](data/replication/workflow_diagram_data_definition_creation.drawio.png)


##### SYNC REPLICA going down when dropping index, uniqueness constraint or existence constraint

![sync-replicas-down-when-dropping-index-or-constraints](data/replication/workflow_diagram_data_definition_dropping.drawio.png)


##### SYNC REPLICA going down adding/updating/deleting data

![sync-replicas-down-when-modifying-data](data/replication/workflow_diagram_data_manipulation.drawio.png)

#### ASYN replication mode

In the ASYNC replication mode, the MAIN instance will commit a transaction
without receiving confirmation from REPLICA instances that they have received
the same transaction. This means that the MAIN instance does not wait for the
response from the REPLICA instances in the main thread but in some other thread.

A new thread can be created every time a transaction needs to be replicated to
the REPLICA instance, but because transactions are committed often and use a lot
of resources, each REPLICA instance has one permanent thread connecting it with
the MAIN instance. Using this background thread, the MAIN instance pushes
replication tasks to the REPLICA instance, creates a custom thread pool pattern,
and receives confirmations of successful replication from the REPLICATION
instance.

<img src={require('../data/replication/memgraph-replication-async.png').default} className={"imgBorder"}/>

ASYNC mode ensures system availability and partition tolerance.

### Synchronizing instances

By comparing timestamps, the MAIN instance knows when a REPLICA instance is not
synchronized and is missing some earlier transactions. The REPLICA instance is
then set into a RECOVERY state, where it remains until it is fully synchronized
with the MAIN instance.

The missing data changes can be sent as snapshots or WAL files. Snapshot files
represent an image of the current state of the database and are much larger than
the WAL files, which only contain the changes, deltas. Because of the difference
in file size, Memgraph favors the WAL files.

While the REPLICA instance is in the RECOVERY state, the MAIN instance
calculates the optimal synchronization path based on the REPLICA instance's
timestamp and the current state of the durability files while keeping the
overall size of the files necessary for synchronization to a minimum.

<img src={require('../data/replication/memgraph-replication-sync-process.png').default} className={"imgBorder"}/>

Imagine there were 5 changes made to the database. Each change is saved in a WAL
file, so there are 5 WAL files, and the snapshot was created after 2 changes.
The REPLICA instance can be synchronized using a snapshot and the 3 latest WAL
files or using 5 WAL files. Both options would correctly synchronize the
instances, but 5 WAL files are much smaller.

The durability files are constantly being created, deleted, and updated. Also,
each replica could need a different set of files to sync. There are several ways
to ensure that the necessary files persist and that instances can read the WAL
files currently being updated without affecting the performance of the rest of
the database.

#### Locking durability files

Durability files are also used for recovery and are periodically deleted to
eliminate redundant data. The problem is that they can be deleted while they are
being used to synchronize a REPLICA with the MAIN instance.

To delay the file deletion, Memgraph uses a file retainer that consists of
multiple lockers. Threads can store and lock the files they found while
searching for the optimal recovery path in the lockers, thus ensuring the files
will still exist once they are sent to the REPLICA instance as a part of the
synchronization process. If some other part of the system sends a deletion
request for a certain file, the file retainer first checks if that file is
locked in a locker. If it is not, it is deleted immediately. If the file is
locked, the file retainer adds the file to the deletion queue. The file retainer
will periodically clean the queue by deleting the files that are no longer
locked inside the locker.

#### Writing and reading files simultaneously

Memgraph internal file buffer is used when writing deltas to WAL files, and
mid-writing, the content of one WAL file can be divided across two locations. If
at that point that WAL file is used to synchronize the REPLICA instance, once
the data is being read from the internal buffer, the buffer can be flushed, and
the REPLICA could receive an invalid WAL file because it is missing a chunk of
data. It could also happen that the WAL file is sent before all the transactions
are written to the internal buffer.

To avoid these issues, flushing of that internal buffer is disabled while the
current WAL is sent to a REPLICA instance. To get all the data necessary for the
synchronization, the replication thread reads the content directly from the WAL
file, then reads how many bytes are written in the buffer and copies the data to
another location. Then the flushing is enabled again, and the transaction is
replicated using the copied buffer. Because the access to the internal buffer
was not blocked, new data can be written. The content of the buffer (including
any new data) is then written in a new WAL file that will be sent in the next
synchronization process.

<img src={require('../data/replication/memgraph-replication-buffer.png').default} className={"imgBorder"}/>

#### Fixing timestamp consistency

Timestamps are used to compare the state of the REPLICA instance in comparison
to the MAIN instance.

At first, we used the current timestamp without increasing its value for global
operations, like creating an index or creating a constraint. By using a single
timestamp, it was impossible to know which operations the REPLICA had applied
because sequential global operations had the same timestamp. To avoid this
issue, a unique timestamp is assigned to each global operation.

As replicas allow read queries, each of those queries was assigned with its own
timestamp. Those timestamps caused issues when the replicated write transactions
were assigned an older timestamp. A read transaction would return different data
from the same read query if a transaction was replicated between those two read
transactions which obstructed the snapshot isolation. To avoid this problem, the
timestamp on REPLICA instances isn't increased because the read transactions
don't produce any changes, so no deltas need to be timestamped.

#### Incompatible instances

To avoid issues when the durability files of two different database instances
are stored in the same folder, a unique ID is assigned to each storage instance.
The same ID is then assigned to the durability files. Replication uses the
instance ID to validate that the files and the database are compatible.

A unique ID `epoch_id` is also assigned each time an instance is run as the MAIN
instance in the replication cluster to check if the data is compatible for
replication. The `epoch_id` is necessary when the original MAIN instance fails,
a REPLICA instance becomes a new MAIN, and after some time, the original MAIN
instance is brought back online. If no transactions were run on the original
MAIN instance, the difference in timestamps will indicate that it is behind the
new MAIN, and it would be impossible to set the original MAIN-REPLICA
relationship. But if the transactions were run on the original MAIN after it was
brought back online, the timestamp would be of no help, but the `epoch_id` would
indicate incomparability, thus preventing the original MAIN from reclaiming its
original role.

<img src={require('../data/replication/memgraph-replication-ids.png').default} className={"imgBorder"}/>
