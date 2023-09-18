---
id: replication
title: Replication
sidebar_label: Replication
---

When distributing data across several instances, Memgraph uses replication to
provide a satisfying ratio of the following properties:

1.  **Consistency** - every node has the same view of data at a given point in
    time
2.  **Availability** - all clients can find a replica of the data, even in the
    case of a partial node failure
3.  **Partition tolerance** - the system continues to work as expected despite a
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
Cypher query. REPLICA instances no longer accept write queries. In order to
start the replication, each REPLICA instance needs to be registered from the
MAIN instance by setting [a replication
mode](/under-the-hood/replication.md#replication-modes) (SYNC
or ASYNC) and specifying the REPLICA instance's socket address.

The replication mode defines the terms by which the MAIN instance can commit the
changes to the database, thus modifying the system to prioritize either
consistency or availability:

- **SYNC** - After committing a transaction, the MAIN instance will communicate the changes 
to all REPLICA instances running in SYNC mode and wait until it receives a response or that 
a timeout is reached.

- **ASYNC** - The MAIN instance will commit a transaction without receiving
  confirmation from REPLICA instances that they have received the same
  transaction. ASYNC mode ensures system availability and partition tolerance.

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
please install Memgraph with Docker. If you are starting instances with defined
volume flags to enable:
- data persistency (`-v mg_lib:/var/lib/memgraph`), 
- access logs (`-v mg_log:/var/log/memgraph`) and 
- configuration files (`-v mg_etc:/etc/memgraph`),

be sure to use a different volume name for each instance, for example,
`mg_lib1`, `mg_lib2`, etc.

## Assigning roles

Each Memgraph instance has the role of the MAIN instance when it is first
started.

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
retrieve its original function. You need to drop it from the MAIN and register
it again.

If the crashed MAIN instance goes back online, it cannot reclaim its previous
role. It has to be demoted and become a REPLICA instance of the new MAIN
instance.

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
