---
id: faq
title: Frequently asked questions
sidebar_label: FAQ
---

### What is Memgraph?

Memgraph is a **streaming graph application platform** that helps you wrangle
your streaming data, build sophisticated models that you can query in real-time,
and develop applications you never thought possible in days, not months.
Memgraph is powered by a fully distributed in-memory graph database built to
handle real-time use-cases at enterprise scale. Memgraph supports
strongly-consistent ACID transactions; and uses the standardized Cypher query
language for structuring, manipulating, and exploring data.

### Does being in-memory mean that Memgraph will lose all data upon system failure or restart?

No. Memgraph uses RAM as the primary storage for data. However, Memgraph
continuously backs up data to disk with transaction logs and periodic snapshots.
On restart, Memgraph uses the snapshot and log files to recover its state to
what it was before shutting down.

### How to install Memgraph on macOS?

Memgraph cannot be installed natively on macOS devices but can be installed
using **Docker**. Docker is an open platform for developing, shipping, and
running applications. Docker enables us to run Memgraph virtually on any system
without having to worry about compatibility issues. You don't have to be
familiar with Docker to try out Memgraph. Just [install
Docker](https://docs.docker.com/get-docker/) and head over to our [installation
instructions for macOS](/memgraph/install-memgraph-on-macos-docker).

### How to install Memgraph on Windows?

Memgraph cannot be installed natively on Windows devices but can be installed
using **Docker** or through the **Windows Subsystem for Linux (WSL)**. Docker is
an open platform for developing, shipping, and running applications. Docker
enables us to run Memgraph virtually on any system without having to worry about
compatibility issues. You don't have to be familiar with Docker to try out
Memgraph. Just [install Docker](https://docs.docker.com/get-docker/) and head
over to our [installation instructions for
Windows](/memgraph/install-memgraph-on-windows-docker).

### Can I only use Memgraph Lab?

Memgraph Lab is a visual interface for exploring and interacting with data
stored in Memgraph. This means that Memgraph Lab needs a running Memgraph
instance in the background to be able to connect to it. After you have
[installed](/memgraph/installation) and started Memgraph, you can head over to
Memgraph Lab and start querying your graph.

### How far have you scaled your system?

It depends on the dataset and the queries, in other words, the workload. On a
single machine, Memgraph scales up to the size of the main memory. In a
distributed system, the graph is automatically repartitioned in the background
to improve query execution time and scalability.

### Can Memgraph be deployed in the cloud?

Yes, Memgraph can be deployed in the cloud. Memgraph is designed to be portable,
but currently available only on the x86_64 architecture. All standard Linux
distributions like CentOS, Debian, Ubuntu, RedHat are supported. Memgraph is
also available on Docker. For any other platforms, please drop us an email at
[tech@memgraph.com](mailto:tech@memgraph.com) or get in touch with our team on
our [Forum](https://discourse.memgraph.com/).

### What does the hardware footprint look like?

Memgraph uses ~50GB to store 100M nodes and 100M edges with one label and one
property per each node and an edge type and one property per edge.

### Does Memgraph offer a cloud graph database as a service?

Yes, we offer fully-managed Memgraph on our cloud infrastructure as a service.
For more details please visit our [cloud pages](https://cloud.memgraph.com/). In
addition, [Memgraph Playground](https://playground.memgraph.com/) is a testing
environment where you can play with various graph datasets.

### Do you support Tinkerpop API stacks?

Memgraph doesn’t support the Tinkerpop API stack because Tinkerpop is highly
dependent on the Java stack. Memgraph is implemented in C/C++/Assembly with
openCypher and the Bolt protocol as an interface. We have considered Tinkerpop
integration, but at the moment it’s not one of our highest priorities.

### How do you interface with the system?

Memgraph supports the [openCypher](http://www.opencypher.org) query language to
query the database instance. It’s a declarative query language designed to query
graphs. Communication between clients and the database is done via the [Bolt
protocol](https://boltprotocol.org). For the list of supported programming
languages please take a look
[here](/memgraph/getting-started/connecting-applications).

### How do you upgrade?

To do software upgrades the whole cluster has to go down. Before that data has
to be migrated to a cluster with the newer version of Memgraph. At the moment,
we offer no downtime upgrades, but that’s a feature which is high on our
priority list. What we do offer is support when the upgrade is needed.

### Can you implement custom Cypher procedures?

Memgraph supports extending the query language with user-written procedures.
These procedures are grouped into modules, which can then be loaded on startup.
Query modules can be implemented by using the Python API or C API. Take a look
at our guide [Implement custom query
modules](/memgraph/database-functionalities/query-modules/implement-query-modules).

### Why is my Memgraph instance relatively slow?

Label indexing is not enabled by default in Memgraph, i.e., Memgraph will not
automatically index labeled data. Therefore, it is up to the user to perform the
indexing explicitly. Visit the [Reference
guide](/memgraph/reference-guide/indexing) to find out more about creating
indexes.

### What are the Cypher implementation differences compared to Neo4j?

Although we try to implement openCypher query language as closely to the
language reference as possible, we had to make some changes to enhance the user
experience. You can find the differences listed in the [Cypher
manual](/cypher-manual/differences).

### Can you change the log level in Memgraph?

You can change the log level easily by using the `--log-level` flag. The allowed
values are `TRACE`, `DEBUG`, `INFO`, `WARNING`, `ERROR`, and `CRITICAL`. For
more information about using configuration flags, check out the [reference
guide](/memgraph/reference-guide/configuration).

### Can you change the memory limit for Memgraph?

You can change the memory limit by using the `--memory-limit` flag. If you want
to allocate 2GB for Memgraph then you would use --memory-limit=2000. For more
information about using configuration flags, check out the [reference
guide](/memgraph/reference-guide/configuration).

### How to change the directory where snapshots are stored?

You can change the directory where snapshots are stored by using the
`--data-directory` flag. For more information about using configuration flags,
check out the [reference guide](/memgraph/reference-guide/configuration).

### How to change the directory where log files are stored?

You can change the directory where log files are stored by using the
`--log-file` flag. For more information about using configuration flags, check
out the [reference guide](/memgraph/reference-guide/configuration).

### How to change the directory where query modules are stored?

You can change the directory where query modules are stored by using the
`--query-modules-directory` flag. For more information about using configuration
flags, check out the [reference guide](/memgraph/reference-guide/configuration).
