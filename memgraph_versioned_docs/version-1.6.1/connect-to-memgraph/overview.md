---
id: overview
title: Overview
sidebar_label: Overview
slug: /connect-to-memgraph
---

Memgraph supports the [openCypher](https://www.opencypher.org) query language
which has been developed by [Neo4j](http://neo4j.com).
It is a declarative language developed specifically
for interaction with graph databases, which is currently going through a
vendor-independent standardization process.

There are multiple ways of executing openCypher queries against Memgraph and you can learn more about them below.

## Choose your connection method

Memgraph supports three main options for querying the platform:
* **[mgconsole](/connect-to-memgraph/methods/mgconsole.md)**: A command-line interface for querying Memgraph.
* **[Memgraph Lab](/memgraph-lab)**: An interactive GUI application for querying and visualizing your graphs.
* **[Programatically - Drivers](/connect-to-memgraph/methods/drivers.md)**: Connect to Memgraph from your favorite programming language. We support a wide range of drivers.

## Telemetry

Telemetry is an automated process by which data is collected at a remote point.
At Memgraph, we use telemetry for the sole purpose of improving our product,
thereby collecting data about the machine that executes the database (CPU,
memory, OS, and kernel information) as well as data about the database runtime
(CPU usage, memory usage, vertices, and edges count).

Here at Memgraph, we care deeply about the privacy of our users and do not
collect any sensitive information. If you wish to disable Memgraph's telemetry
features, you can do so easily, either by altering the line in
`/etc/memgraph/memgraph.conf` that enables telemetry (set
`--telemetry-enabled=true` to the following `--telemetry-enabled=false`), or by
including `--telemetry-enabled=false` as a command-line argument when running
the executable.

To learn more about telemetry in Memgraph, visit the [concept page](/concepts/telemetry.md).

## Where to next?

To learn more about the **Cypher** language, visit the **[Cypher manual](/cypher-manual)** or **[Memgraph Playground](https://playground.memgraph.com/)** for interactive guides.
For real-world examples of how to use Memgraph, we strongly suggest going through one of the available **[Tutorials](/tutorials/overview.md)**.
Details on what can be stored in Memgraph can be found in the article about **[Data storage](/concepts/storage.md)**.
