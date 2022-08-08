---
id: overview
title: Reference guide overview
sidebar_label: Reference guide overview
slug: /reference-guide
---

The **Memgraph** reference guide contains the details of implemented features.

## [Backup](./backup.md)

Memgraph comes with a couple of queries that allow you to safely make a backup
of the files containing its data.

## [Built-in graph algorithms](./graph-algorithms.md)

Memgraph comes with custom-built algorithms that are implemented using C++:
**Filtering variable-length paths**, **Breadth-first search**, and **Weighted
shortest path**.

## [Configuration settings](./configuration.md)

Memgraph can be configured by editing the Memgraph configuration file or by
including another configuration file.

## [Cypher query language](/cypher-manual)

**Cypher** is a declarative graph query language that allows for expressive and
efficient data querying in a property graph. It aims to be intuitive and easy to
learn while providing a powerful interface for working with graph-based data.

## [Data types](/reference-guide/data-types.md)

Check what data types are supported by Memgraph. 

## [Deployment](/reference-guide/deployment/docker.md)

Deploy your application with Memgraph as a part of your [Docker Compose file](/reference-guide/deployment/docker.md)
or use a [Helm Chart](/reference-guide/deployment/kubernetes.md) to make Memgraph part of your Kubernetes cluster.

## [Indexing](./indexing.md)

An index stores additional information on certain types of data, so that
retrieving said data becomes more efficient.

## [Inspecting and optimizing queries](/reference-guide/optimizing-queries/inspecting-queries.md)

[Inspect the plan](/reference-guide/optimizing-queries/inspecting-queries.md)
for executing a query, a pipeline of operations which will be performed on the
database in order to yield the results for a given query, to gain insight into
the execution of a query or [get a detailed
report](/reference-guide/optimizing-queries//profiling-queries.md) on how the
query's plan behaved.

## [Isolation levels](./isolation-levels.md)

Isolation is a property that defines how or when the changes made by one
operation become visible to other users or systems. Check available options for
Memgraph.

## [Metadata](./metadata.md)

Bolt protocol specifies additional data (metadata) that can be sent along with
the requested results. Find out how to access it.

## [Monitoring server](/reference-guide/monitoring-server.md)

Receive logs and runtime information from Memgraph in real-time via WebSocket connection.

## [Query modules](/reference-guide/query-modules/overview.md)

Memgraph supports extending the query language with user-written procedures.
These procedures are grouped into modules, which can then be loaded either on
startup or later on. To learn more about query modules take a look at the
following guides:

- [Available query
  modules](/reference-guide/query-modules/available-query-modules.md)
- [Implement custom query
  modules](/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example.md)
- [Load and call query
  modules](/reference-guide/query-modules/load-call-query-modules.md)
- [Utility query
  module](/reference-guide/query-modules/module-file-utilities.md)

## [Replication](./replication.md)

Memgraph comes with a couple of queries that allow you to safely make a backup
of the files containing its data. Memgraph supports replication and allows you
to create a cluster of nodes running Memgraph instances.

## [Server stats](./server-stats.md)

Get information about the running instance. 

## [Streams](/reference-guide/streams/overview.md)

Memgraph can connect to existing **Kafka**, **Pulsar** and **Redpanda** streams.
The streams are using user-defined transformations to produce Cypher queries
based on the received messages. To learn more about streams and transformations
take a look at the following pages:

- [Streams overview](/reference-guide/streams/overview.md)
- [Transformation
  modules](/reference-guide/streams/transformation-modules/overview.md)

## [Triggers](./triggers.md)

Memgraph enables running openCypher statements after a certain event happens
during transaction execution, i.e., triggers.

----

## [Enterprise features](./enabling-enterprise.md)

Features available for the Enterprise edition of Memgraph.

### [Audit log](./audit-log.md)

Memgraph supports all query audit logging. When enabled, the audit log contains
records of all queries executed on the database.

### Authentication and authorization

Memgraph supports authentication and (optional) authorization using a
custom-built external auth module. To learn more, visit:

- **[Auth module](./auth-module.md)**
- **[LDAP security](./ldap-security.md)**

### [Runtime settings](./runtime-settings.md)

Check the settings that can be modified during runtime. 

### [Security - user privileges](./security.md)

Memgraph comes with the option of granting, denying, or revoking a certain set
of privileges to users or groups of users.
