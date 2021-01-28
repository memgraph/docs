## Replication

This article is a part of a series intended to showcase Memgraph's features and
on realistic scenarios, and bring the user up to speed on developing with
Memgraph.

We highly recommend checking out the other articles from this series which
are listed in our [tutorial overview section](tutorials.md).

### Introduction

This example demonstrates how to create a simple cluster of nodes running
Memgraph instances, and set up replication. We'll demonstrate the use and
behavior of the available synchronization modes.

### Cluster topology

The cluster consists of four nodes, a single main and three replicas:

* the main node, containing the original data to be replicated to other
    nodes,
* a node that will be replicated to using the sync mode,
* a node that will be replicated to using the async mode,
* a node that will be replicated to using the sync-with-timeout mode .

We'll be hitting the main node with create queries, creating nodes and edges,
while running BFS on the replicas, and observing the effects of different sync
modes used. 

### Configuring the cluster

We'll use Docker to set up and run the cluster on your local machine, so make
sure you have it installed and ready, and grab your Memgraph docker image or
binary. Look [here](https://docs.memgraph.com/memgraph/getting-started/installation/docker-installation) for instructions.

We have to setup the cluster nodes' ports properly, so we'll use the following
mapping:

* the main node will have port 7687 assigned
* the sync-mode node will have port 7688 assigned
* the async-mode node will have port 7689 assigned
* the sync-with-timeout-mode node will have port 7690 assigned .

```plaintext
docker run -p 7687:7687 \
  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \
  memgraph:1.3.0-enterprise

docker run -p 7688:7687 \
  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \
  memgraph:1.3.0-enterprise

docker run -p 7689:7687 \
  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \
  memgraph:1.3.0-enterprise

docker run -p 7690:7687 \
  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \
  memgraph:1.3.0-enterprise
```

The above commands will start the Memgraph instances (nodes), and map them to
the appropriate ports on your host machine. 
