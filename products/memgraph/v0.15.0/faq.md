# Frequently Asked Questions

1. ##### What is Memgraph?

Memgraph is a native fully distributed in-memory graph database built to handle real-time use-cases at enterprise scale. Memgraph supports strongly-consistent ACID transactions; and uses the standardized openCypher query language for structuring, manipulating, and exploring data.

2. ##### Does being in-memory mean that Memgraph will lose all data upon system failure or restart?

No. Memgraph uses RAM as the primary storage for data. However, Memgraph continuously backs up data to disk with transaction logs and periodic snapshots. On restart, Memgraph uses the snapshot and log files to recover its state to what it was before shutting down.

3. ##### How far have you scaled your system?

It depends on the dataset and the queries, in other words, the workload. On a single machine, Memgraph scales up to the size of the main memory or disk space where properties could be stored on disk. In a distributed system, the graph is automatically repartitioned in the background to improve query execution time and scalability.

4. ##### Can Memgraph be deployed in the cloud?

Yes, Memgraph can be deployed in the cloud. Memgraph is designed to be portable, but currently available only on the x86_64 architecture. All standard Linux distributions like CentOS, Debian, Ubuntu, RedHat are supported. Memgraph is also available on Docker. For any other platforms, please drop us an email at [tech@memgraph.com](mailto:tech@memgraph.com) or get in touch with our team on our [Slack Channel](https://memgraph.com/slack/).

5. ##### What does the hardware footprint look like?

Memgraph uses ~50GB to store 100M nodes and 100M edges with one label and one property per each node and an edge type and one property per edge.

6. ##### Is Memgraph highly available?

High Availability (HA) based on the RAFT protocol will be available in Q4 of 2018.

7. ##### Does Memgraph offer a cloud graph database as a service?

We currently don’t have plans to offer Memgraph on our infrastructure as a service. But, Memgraph can be easily deployed on any major cloud provider such as AWS, Azure or Google Cloud.

8. ##### What languages can I use to work with Memgraph?

Any programming language. For all popular programming languages there is an open source Bolt driver.

9. ##### Do you support Tinkerpop API stacks?

Memgraph doesn’t support the Tinkerpop API stack because Tinkerpop is highly dependent on the Java stack. Memgraph is implemented in C/C++/Assembly with openCypher and the Bolt protocol as an interface. We have considered Tinkerpop integration, but at the moment it’s not one of our highest priorities.

10. ##### How do you interface with the system?

Memgraph supports the [openCypher](http://www.opencypher.org) query language to query the database. It’s a declarative query language designed to query graphs. Communication between clients and the database is done via the [Bolt protocol](https://boltprotocol.org). In any programming language ([Python](https://github.com/neo4j/neo4j-python-driver), [Java](https://github.com/neo4j/neo4j-java-driver), [C#](https://github.com/neo4j/neo4j-dotnet-driver), [JS](https://github.com/neo4j/neo4j-javascript-driver), [C/C++](https://neo4j-client.net), etc.), there is a library (aka driver) which can be used to run queries against the database.

11. ##### How do you upgrade?

To do software upgrades the whole cluster has to go down. Before that data has to be migrated to a cluster with the newer version of Memgraph. At the moment, we offer no downtime upgrades, but that’s a feature which is high on our priority list. What we do offer is support when the upgrade is needed.
