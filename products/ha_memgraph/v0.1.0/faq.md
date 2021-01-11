## Frequently Asked Questions

##### What is HA Memgraph?

HA Memgraph is an ACID compliant, highly available, transactional in-memory
graph database management system based on the Raft protocol.

##### Does being in-memory mean that HA Memgraph will lose all data upon system failure or restart?

No. HA Memgraph uses RAM as the primary storage for data. However, HA Memgraph
needs to replicate each change on the majority of the cluster and implicitly
persists data to disk.  On restart, from the machine perspective, HA Memgraph
uses snapshot created from the previous run, if any, and persisted Raft logs to
recover its state to what it was before shutting down. After re-joining the
cluster, additional syncing takes place to ensure data integrity.

From the user perspective, a leader failover will occur on system failure or
restart, and the user will not be affected with the failure, and the state of
the data will stay the same as long as a majority of the cluster is alive.

##### How far have you scaled your system?

It depends on the dataset and the queries, in other words, the workload. HA
Memgraph scales up to the size of the main memory and disk space.

##### Can HA Memgraph be deployed in the cloud?

Yes, HA Memgraph can be deployed in the cloud. HA Memgraph is designed to be
portable, but currently available only on the x86_64 architecture. All standard
Linux distributions like CentOS, Debian, Ubuntu, RedHat are supported. HA
Memgraph is also available on Docker. For any other platforms, please drop us an
email at [tech@memgraph.com](mailto:tech@memgraph.com).

##### What does the hardware footprint look like?

HA Memgraph uses ~50GB of the main memory to store 100M nodes and 100M edges
with one label and one property per each node and an edge type and one property
per edge.

Note that HA Memgraph also increases disk usage because of persistency
requirements. HA Memgraph disk usage can be tuned regarding the Raft algorithm.
Without the Raft log compaction, HA Memgraph consumes around ~1MB of disk space
for 1000 log entries.
See more about the `log_size_snapshot_threshold` parameter.

##### Does HA Memgraph offer a cloud graph database as a service?

We currently don’t have plans to offer HA Memgraph on our infrastructure as a
service. But, HA Memgraph can be easily deployed on any major cloud provider
such as AWS, Azure or Google Cloud.

##### What languages can I use to work with HA Memgraph?

Any programming language. For all popular programming languages there is an open
source Bolt driver.

##### Do you support Tinkerpop API stacks?

HA Memgraph doesn’t support the Tinkerpop API stack because Tinkerpop is highly
dependent on the Java stack. HA Memgraph is implemented in C/C++/Assembly with
openCypher and the Bolt protocol as an interface. We have considered Tinkerpop
integration, but at the moment it’s not one of our highest priorities.

##### How do you interface with the system?

HA Memgraph supports the [openCypher](http://www.opencypher.org) query language to
query the database. It’s a declarative query language designed to query graphs.
Communication between clients and the database is done via the [Bolt
protocol](https://boltprotocol.org). In any programming language
([Python](https://github.com/neo4j/neo4j-python-driver),
[Java](https://github.com/neo4j/neo4j-java-driver),
[C#](https://github.com/neo4j/neo4j-dotnet-driver),
[JS](https://github.com/neo4j/neo4j-javascript-driver),
[C/C++](https://neo4j-client.net), etc.), there is a library (aka driver) which
can be used to run queries against the database.

##### How do you upgrade?

To do software upgrades the whole cluster has to go down. Before that data has
to be migrated to a cluster with the newer version of HA Memgraph. At the moment,
we offer no downtime upgrades, but that’s a feature which is high on our
priority list. What we do offer is support when the upgrade is needed.
