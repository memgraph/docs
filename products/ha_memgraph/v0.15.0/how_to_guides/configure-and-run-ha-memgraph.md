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
                --raft_config_file="raft.json" \
                --port 1001
```

By analogy, let's suppose that the second server will be run with `--server_id`
equal to `2` and `port` equal to `1002`. The same analogy follows for the third
server.

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
listens to. Notice that we have also provided a `--port` flag which has a value
that is different from the port in `coordination.json`. Port from
`coordination.json` is used by HA Memgraph's RPC server for communication
between machines in the cluster, while the command line argument port is used in
order to communicate with the client via the bolt protocol.


The assumed contents of the `raft.json` file are:

```plaintext
{
  "election_timeout_min": 150,
  "election_timeout_max": 300,
  "heartbeat_interval": 100,
  "replication_timeout": 10000,
  "log_size_snapshot_threshold": -1
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

### Querying HA Memgraph Without the HA Client

If you wish to use a third-party client such as `neo4j-client` you should be
aware that the client should only communicate with the leader of the cluster.

Suppose we have a cluster of 3 machines and have observed the following message
on the third machine soon after startup:

```plaintext
I0327 13:46:29.906607 8200 :590] Server 3: Transitioned to LEADER (Term: 6)
```

This lets you know that the third machine was successfully elected as a leader
and should be ready to process queries. Since we know that this machine lives
on `3.0.0.3` and listens on `1003`, we can connect to it using the
`neo4j-client` by using the following command:

```plaintext
neo4j-client -u "" -p "" --insecure 3.0.0.3 7003
```

At this point you can execute some queries on HA Memgraph.

If you have connected to the machine that is not the leader and have attempted
to execute a query, you should recieve the following error message:

```plaintext
error: HA Memgraph: Can't execute queries if not leader.
```
