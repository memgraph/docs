---
id: replication
title: How to set up replication on a small cluster?
sidebar_label: Set up replication
---

[![Related - Reference
Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/replication.md)
[![Related - Under the
Hood](https://img.shields.io/static/v1?label=Related&message=Under%20the%20hood&color=orange&style=for-the-badge)](/under-the-hood/replication.md)
[![Related - Blog
Post](https://img.shields.io/static/v1?label=Related&message=Blog%20post&color=9C59DB&style=for-the-badge)](https://memgraph.com/blog/implementing-data-replication)

In the replication process, the data is replicated from one storage (MAIN
instance) to another (REPLICA instances), thus providing a combination of
consistency, availability and partition tolerance when distributing data over
several instances.

This example demonstrates how to create a simple cluster of nodes running
Memgraph instances, and set up replication using various replication modes.

## Cluster topology

The cluster will consist of four nodes, one MAIN instance and three REPLICA
instances. In order to showcase the creation of REPLICA instances with different
replication modes, we will create:

- The MAIN instance - contains the original data that will be replicated to
  REPLICA instances
- REPLICA instance 1 - replication in the SYNC mode
- REPLICA instance 2 - replication in the SYNC WITH TIMEOUT mode
- REPLICA instance 3 - replication in the ASYNC mode

## How to run multiple instances?

If you are running multiple instances, each on its own machine, run Memgraph as
you usually would.

If you are exploring replication and running multiple instances on one machine,
please install Memgraph with Docker, and run the following `docker run`
commands:

The MAIN instance:

```
docker run -it -p 7687:7687 -p 3000:3000 -p 7444:7444 -v mg_lib:/var/lib/memgraph memgraph/memgraph-platform
```

REPLICA instance 1:

```
docker run -it -p 7688:7687 -p 3001:3000 -p 7445:7444 -v mg_lib2:/var/lib/memgraph memgraph/memgraph-platform
```

REPLICA instance 2:

```
docker run -it -p 7689:7687 -p 3002:3000 -p 7446:7444 -v mg_lib3:/var/lib/memgraph memgraph/memgraph-platform
```

REPLICA instance 3:

```
docker run -it -p 7690:7687 -p 3003:3000 -p 7447:7444 -v mg_lib4:/var/lib/memgraph memgraph/memgraph-platform
```

You can connect to each instance with the [Memgraph Lab](/memgraph-lab)
in-browser application at:

- the MAIN instance - `localhost:3000`
- REPLICA instance 1 - `localhost:3001`
- REPLICA instance 2 - `localhost:3002`
- REPLICA instance 3 - `localhost:3003`

## How to demote an instance to a REPLICA role?

Run the following query in each REPLICA instance to demote instances to the
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
- REPLICA instance 3 - `172.17.0.5`

If they are not, please change the IP addresses in the following queries to
match the IP addresses on your cluster.

Then, run the following queries from the MAIN instance to register REPLICA
instances:

1. REPLICA instance 1 at `172.17.0.3`

   ```
   REGISTER REPLICA REP1 SYNC TO "172.17.0.3";
   ```

   REPLICA instance 1 is called REP 1, its replication mode is SYNC, and it is
   located at IP address `172.17.0.3.` with port `10000`.

   When the REPLICA instance is running in SYNC mode, the MAIN instance will not
   commit a transaction until all REPLICA instances running in the SYNC mode
   confirm they have received the same transaction. SYNC mode prioritizes data
   consistency but has no tolerance for any network failures.

   If you used any port other than `10000` while demoting a REPLICA instance,
   you will need to specify it like this: "172.17.0.3:5000"

2. REPLICA instance 2 at `172.17.0.4`

   ```
   REGISTER REPLICA REP2 SYNC WITH TIMEOUT 1 TO "172.17.0.4";
   ```

   REPLICA instance 2 is called REP 2, its replication mode is SYNC WITH
   TIMEOUT, and it is located at IP address `172.17.0.4.` with port `10000`.

   When the REPLICA instance is running in SYNC WITH TIMEOUT mode the MAIN
   instance will not commit a transaction until all REPLICA instances confirm
   they have received the same transaction within a configured time interval. If
   the response from a REPLICA times out, the replication mode of that instance
   will be changed to ASYNC. SYNC WITH TIMEOUT prioritizes data consistency
   until unexpected issues force the system to prioritize availability and
   partition tolerance.

   If you used any port other than `10000` while demoting a REPLICA instance,
   you will need to specify it like this: "172.17.0.3:5000"

3. REPLICA instance 3 at `172.17.0.5`

   ```
   REGISTER REPLICA REP3 ASYNC TO "172.17.0.5";
   ```

   REPLICA instance 3 is called REP 3, its replication mode is ASYNC, and it is
   located at IP address `172.17.0.5.` with port `10000`.

   When the REPLICA instance is running in ASYNC mode the MAIN instance will
   commit a transaction without receiving confirmation from REPLICA instances
   that they have received the same transaction. ASYNC mode ensures system
   availability and partition tolerance.

   If you used any port other than `10000` while demoting a REPLICA instance,
   you will need to specify it like this: "172.17.0.3:5000"

## How to check info about registered REPLICA instances?

Check all the REPLICA instances by running the following query from the MAIN
instance:

```
SHOW REPLICAS;
```

### How to drop a REPLICA instance?

To drop a replica, run the following query:

```plaintext
DROP REPLICA <name>;
```

## How to promote a REPLICA instance to MAIN?

To promote a REPLICA instance to MAIN, run the following query:

```plaintext
SET REPLICATION ROLE TO MAIN;
```
