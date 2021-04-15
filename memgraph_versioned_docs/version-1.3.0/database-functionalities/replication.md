---
id: replication
title: How to set up replication on a small cluster (Enterprise)
sidebar_label: Replication (Enterprise)
---

This article is a part of a series intended to showcase Memgraph's features
and bring the user up to speed on developing with Memgraph.

We highly recommend checking out the other articles from this series which
are listed in our [database functionalities section](./database-functionalities.md).

## Introduction

This example demonstrates how to create a simple cluster of nodes running
Memgraph instances, and set up replication. We'll demonstrate the use and
behavior of the available synchronization modes.

## Cluster topology

The cluster consists of four nodes, a single main and three replicas:

* the main node, containing the original data to be replicated to other nodes,
* a node that will be replicated to using the sync mode,
* a node that will be replicated to using the async mode,
* a node that will be replicated to using the semi-sync mode.

## Configuring the cluster

We'll use Docker to set up and run the cluster on your local machine, so make
sure you have it installed and ready, and grab your Memgraph docker image.
Look [here](../getting-started/installation/docker-installation.md) for instructions.
We assume you have already set up a client for running queries like [mgconsole](https://github.com/memgraph/mgconsole) installed.
You can also use any of the supported drivers like [mgclient](https://github.com/memgraph/mgclient) or any of the Neo4j drivers.

We fire up the terminal, and for each Memgraph instance (node)  we have to start, we'll
run:

```plaintext
docker run --rm memgraph:1.3.0-enterprise
```

The above commands will start a Memgraph node, and assign it its own IP address. 

Now, to set up the cluster, we'll have to start an mg_client or mgconsole
instance for every running Memgraph node, and connect to it. To do this, we
have to figure out their IP addresses. Running

```plaintext
docker ps
```

will list all the running docker processes, along with their "CONTAINER ID" and
"NAME". Running

```plaintext
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id
```

where "container_name_or_id" is either the "CONTAINER ID" or "NAME" listed by
`docker ps`, we can get the IP addresses of all the nodes. Once we have them, we
can start setting up the replication. Let's say the ip addresses are as follows:
* main:                      172.17.0.2
* sync replica:              172.17.0.3
* async replica:             172.17.0.4
* semi-sync replica:         172.17.0.5 .

Let's assume we're using mgconsole to connect to and query the nodes. Firstly,
we have to set up the replicas. We connect to a replica by running

```plaintext
mgconsole --host REPLICA_IP_ADDRESS --use-ssl=false
```

where REPLICA_IP_ADDRESS is the address we found in the previous step. Once
we're connected to a replica, we set its replication role to "REPLICA" by
issuing

```plaintext
SET REPLICATION ROLE TO REPLICA WITH PORT 10000;
```

Note that the port 10000 is arbitrary, and any available port number may be used
instead. We repeat the process for all replicas.

Now, it's time to set up the main. Again, we connect to the main using
mgconsole:

```plaintext
mgconsole --host 172.17.0.2 --use-ssl=false
```

Then, for every replica, we issue the query that registers it:

```plaintext
REGISTER REPLICA r1 SYNC TO "172.17.0.3:10000";
REGISTER REPLICA r2 ASYNC TO "172.17.0.4:10000";
REGISTER REPLICA r3 SYNC WITH TIMEOUT 1 TO "172.17.0.5:10000";
```

Now we can create some nodes and edges on the main, and observe them replicate
to the replicas. Firstly, we switch to the mgconsole instance connected to the
main, and then issue:

```plaintext
CREATE (n:N {p: "This is going to be replicated!"});
```

After that, we can switch to any replica and try to match this node:

```plaintext
MATCH (n:N) RETURN n;
```
Lo and behold, we get:

```plaintext
+---------------------------------------------+
| n                                           |
+---------------------------------------------+
| (:N {p: "This is going to be replicated!"}) |
+---------------------------------------------+
```

Now, go on and have fun with more complex graphs! Happy hacking!

## Where to next?

To learn more about replication in Memgraph, visit the **[Reference guide](../reference-guide/replication.md)**.
For real-world examples of how to use Memgraph, we strongly suggest going through one of the available **[Tutorials](../tutorials/tutorials.md)**.
