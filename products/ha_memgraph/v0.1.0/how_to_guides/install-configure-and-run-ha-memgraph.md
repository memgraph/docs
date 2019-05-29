## How to Install, Configure and Run HA Memgraph?

High availability (HA) is a characteristic of a system which aims to ensure a
certain level of operational performance for a higher-than-normal period.
Although there are multiple ways to design highly-available systems, HA Memgraph
strives to achieve HA by elimination of single points of failure. In essence,
this implies adding redundancy to the system so that a failure of a component
does not imply the failure of the entire system. To ensure this, HA Memgraph
implements the [Raft Consensus Algorithm](https://raft.github.io/).

### Installation

Memgraph HA is currently only available as a Debian package for Debian 9
(Stretch).

It is important to note that newer versions of Memgraph HA are currently not
backward compatible with older versions.

To install the Memgraph HA Debian package run the following command:

```bash
dpkg -i /path/to/memgraph_ha_<version>.deb
```

At this point, Memgraph HA is *not* yet ready for startup. Before starting the
database, you should have installed the Debian package on your whole cluster
and you should proceed to the [Cluster setup](#cluster-setup) section.

Most likely, you will use [Memgraph HA Proxy](#memgraph-ha-proxy-setup) to
execute queries on Highly Available Memgraph. Memgraph HA Proxy is also only
available as a Debian package for Debian 9 (Stretch). You can install the
Memgraph HA Proxy package by running the following command:

```bash
dpkg -i /path/to/memgraph_ha_proxy_<version>.deb
```

### Cluster Setup

In order to successfully use HA Memgraph, you need to install the
`memgraph_ha` package on each machine in your cluster. We recommend running this
feature on an odd-sized cluster. The most commonly used cluster size is 3 and
all examples throughout this guide will assume that.

In order to run the `memgraph_ha` server, we need to specify a couple of things
in advance. Each server within the cluster should be given a unique ID value
between 1 and `cluster_size`. Since we are dealing with a cluster of 3 machines,
their ID values will be 1, 2 and 3.

After you have installed the `memgraph_ha` package, you should first finish the
configuration of the cluster before attempting to start the cluster.

There are two main things that need to be configured in order for the cluster
to be able to run:
1. You have to edit the main configuration file and specify the unique node ID
   to each server in the cluster
2. You have to create a file that describes all IP addresses of all servers
   that will be used in the cluster

The `memgraph_ha` binary loads all configuration parameters from
`/etc/memgraph/memgraph_ha.conf`. On each node of the cluster, you should
uncomment the `--server-id=0` parameter and change the value to the `server_id`
of that node (1, 2 or 3). All nodes *must* have a unique value for this field
in the configuration.

The last step before starting the server is to create a `coordination`
configuration file. That file is already present as an example in
`/etc/memgraph/coordination.json.example` and you have to copy it to
`/etc/memgraph/coordination.json` and edit it according to your cluster
configuration. The file contains coordination info consisting of a list of
`server_id`, `ip_address` and `rpc_port` lists. The assumed contents of the
`coordination.json` file are:

```plaintext
[
  [1, "192.168.0.1", 10000],
  [2, "192.168.0.2", 10000],
  [3, "192.168.0.3", 10000]
]
```

Here, each line corresponds to coordination of one server. The first entry is
that server's ID, the second is its IP address and the third is the RPC port it
listens to. This port should not be confused with the port used for client
interaction via the Bolt protocol.

The `ip_address` entered for each `server_id` *must* match the exact IP address
that belongs to that server and that will be used to communicate to other nodes
in the cluster. The coordination configuration file *must* be identical on all
nodes in the cluster.

After you have set the `server_id` on each node in
`/etc/memgraph/memgraph_ha.conf` and provided the same
`/etc/memgraph/coordination.json` file to each node in the cluster you can
start the Memgraph HA service by issuing the following command on each node in
the cluster:

```
systemctl start memgraph_ha
```

### Raft configuration parameters

All Raft configuration parameters can be controlled by modifying
`/etc/memgraph/raft.json`.  The assumed contents of the `raft.json` file are:

```plaintext
{
  "election_timeout_min": 750,
  "election_timeout_max": 1000,
  "heartbeat_interval": 100,
  "replication_timeout": 20000,
  "log_size_snapshot_threshold": 50000
}
```

The meaning behind each entry is demistified in the following table:

Flag                          | Description
------------------------------|------------
`election_timeout_min`        | Lower bound for the randomly sampled reelection timer given in milliseconds
`election_timeout_max`        | Upper bound for the randomly sampled reelection timer given in milliseconds
`heartbeat_interval`          | Time interval between consecutive hearbeats given in milliseconds
`replication_timeout`         | Time interval allowed for data replication given in milliseconds
`log_size_snapshot_threshold` | Allowed number of entries in Raft log before its compaction

### Memgraph HA Proxy Setup

The Bolt protocol that is exposed by each Memgraph HA node is an extended
version of the standard Bolt protocol. In order to be able to communicate with
the highly available cluster of Memgraph HA nodes, the client must have some
logic implemented in itself so that it can communicate correctly with all nodes
in the cluster. To facilitate a faster start with the HA cluster we have built
the Memgraph HA proxy binary that communicates with all nodes in the HA cluster
using the extended Bolt protocol and itself exposes a standard Bolt protocol to
the user. All standard Bolt clients (libraries and custom systems) can
communicate with the Memgraph HA proxy without any code modifications.

The HA proxy should be deployed on each client machine that is used to
communicate with the cluster. It can't be deployed on the Memgraph HA nodes!

When using the Memgraph HA proxy, the communication flow is described in the
following diagram:
```plaintext
Memgraph HA node 1 -----+
                        |
Memgraph HA node 2 -----+ Memgraph HA proxy <---> any standard Bolt client (C, Java, PHP, Python, etc.)
                        |
Memgraph HA node 3 -----+
```

To setup the Memgraph HA proxy you should install the `memgraph_ha_proxy`
package.

After you have installed the `memgraph_ha_proxy` package, you should first
enter all endpoints of the Memgraph HA cluster servers into the configuration
before attempting to start the Memgraph HA proxy server.

The Memgraph HA proxy server loads all of its configuration from
`/etc/memgraph/memgraph_ha_proxy.conf`. Assuming that the cluster is set up
like in the previous examples, you should uncomment and enter the following
value into the `--endpoints` parameter:
```
--endpoints=192.168.0.1:7687,192.168.0.2:7687,192.168.0.3:7687
```

Note that the IP addresses used in the example match the individual cluster
nodes IP addresses, but the ports used are the Bolt server ports exposed by
each node (currently the default value of `7687`).  We also assume that the
clients access the cluster through the same IP address that the cluster itself
uses to communicate within itself. If you have a more advanced network setup,
you should specify the IP addresses of the nodes that can be reached by all
clients that will use the database cluster.

After you have entered the Memgraph HA cluster nodes endpoints, you can start
the Memgraph HA proxy using the following command:
```
systemctl start memgraph_ha_proxy
```

After the Memgraph HA proxy is started you can query the Memgraph HA cluster by
connecting to the Memgraph HA proxy IP address using your favorite Bolt client.
