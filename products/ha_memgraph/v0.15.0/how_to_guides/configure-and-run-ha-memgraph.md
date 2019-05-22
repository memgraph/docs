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

In order to successfully use HA Memgraph, you need to run the
`memgraph_ha` binary on each machine in your cluster. We recommend running this
feature on an odd-sized cluster. The most commonly used cluster size is 3 and
all examples throughout this guide will assume that.

In order to run the `memgraph_ha` binary, we need to specify a couple of things
in advance. Each server within the cluster should be given a unique ID value
between 1 and `cluster_size`. Since we are dealing with a cluster of 3 machines,
their ID values will be 1, 2 and 3.

We also need to specify two `.json` files. One of them (`raft_config_file`)
defines some constants which are internal to the Raft protocol. The other one
(`coordination_config_file`) contains coordination info consisting of
`server_id`, `ip_address` and `rpc_port`.

Therefore, we can run the `memgraph_ha` binary on the first (`ID=1`) server by
issuing the following command:

```plaintext
  ./memgraph_ha --server_id 1 \
                --coordination_config_file="coordination.json" \
                --raft_config_file="raft.json"
```

The assumed contents of the `coordination.json` file are:

```plaintext
[
  [1, "1.0.0.1", 7001],
  [2, "2.0.0.2", 7002],
  [3, "3.0.0.3", 7003]
]
```

Here, each line corresponds to coordination of one server. The first entry is
that server's ID, the second is its IP address and the third is the RPC port it
listens to. This port should not be confused with the port used for client
interaction via the bolt protocol. Since we haven't provided the `--port` flag,
HA Memgraph will use the default value for that port which is `7687`.

The assumed contents of the `raft.json` file are:

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
