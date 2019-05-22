## How to Configure and Run HA Memgraph?

High availability (HA) is a characteristic of a system which aims to ensure a
certain level of operational performance for a higher-than-normal period.
Although there are multiple ways to design highly-available systems, HA Memgraph
strives to achieve HA by elimination of single points of failure. In essence,
this implies adding redundancy to the system so that a failure of a component
does not imply the failure of the entire system. To ensure this, HA Memgraph
implements the [Raft Consensus Algorithm](https://raft.github.io/). For more
information on Raft internals as well as its integration with HA Memgraph, you
are advised to read [this article](../concepts/high-availability.md).

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

### Querying HA Memgraph Using the HA Client

[//]: # (TODO when HA Client is implemented)
