---
id: replication
title: How to set up replication on a small cluster?
sidebar_label: Set up replication
---

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

## Cluster topology

The cluster will consist of three nodes, one MAIN instance and two REPLICA
instances. In order to showcase the creation of REPLICA instances with different
replication modes, we will create:

- The MAIN instance - contains the original data that will be replicated to
  REPLICA instances
- REPLICA instance 1 - replication in the SYNC mode
- REPLICA instance 2 - replication in the ASYNC mode

## How to run multiple instances?

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

## How to demote an instance to a REPLICA role?

Run the following query in both REPLICA instances to demote them to the
REPLICA role:

```
SET REPLICATION ROLE TO REPLICA WITH PORT 10000;
```

If you set the port of each REPLICA instance to `10000`, it will be easier to
register replicas later on because the query for registering replicas uses port
`10000` as the default one.

Otherwise, you can use any unassigned port between 1000 and 10000.

## How to register REPLICA instances?

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

## How to check info about registered REPLICA instances?

Check REPLICA instances by running the following query from the MAIN
instance:

```
SHOW REPLICAS;
```

## How to drop a REPLICA instance?

To drop a replica, run the following query:

```plaintext
DROP REPLICA <name>;
```

## How to promote a REPLICA instance to MAIN?

To promote a REPLICA instance to MAIN, run the following query:

```plaintext
SET REPLICATION ROLE TO MAIN;
```
