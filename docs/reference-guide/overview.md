---
id: overview
title: Reference guide overview
sidebar_label: Reference guide overview
slug: /reference-guide
---

The **Memgraph** reference guide contains the details of implemented features.

## [Built-in graph algorithms](/reference-guide/graph-algorithms.md)

Memgraph comes with custom-built algorithms that are implemented using C++:
**Depth-first search**, **Breadth-first search**, **Weighted
shortest path**, **All shortest paths**.

## [Configuration settings](/reference-guide/configuration.md)

Memgraph can be configured by editing the Memgraph configuration file or by
including another configuration file.

## [Data durability and backup](/reference-guide/backup.md)

Memgraph uses snapshots and WAL to ensure the durability of the stored data and
it comes with a couple of queries that allow you to safely make a backup of
these files.

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

## [Replication](/reference-guide/replication.md)

Memgraph comes with a couple of queries that allow you to safely make a backup
of the files containing its data. Memgraph supports replication and allows you
to create a cluster of nodes running Memgraph instances.

## [Server stats](/reference-guide/server-stats.md)

Get information about the running instance. 

## [Streams](/reference-guide/streams/overview.md)

Memgraph can connect to existing **Kafka**, **Pulsar** and **Redpanda** streams.
The streams are using user-defined transformations to produce Cypher queries
based on the received messages. To learn more about streams and transformations
take a look at the following pages:

- [Streams overview](/reference-guide/streams/overview.md)
- [Transformation
  modules](/reference-guide/streams/transformation-modules/overview.md)

## [Transactions](/reference-guide/transactions.md)

All Cypher queries are run within transactions. Check how to create explicit
transaction to run multiple queries within one transaction, and isolation levels
available in Memgraph.

## [Triggers](/reference-guide/triggers.md)

Memgraph enables running openCypher statements after a certain event happens
during transaction execution, i.e., triggers.

----

## [Enterprise features](/reference-guide/enabling-enterprise.md)

Features available for the Enterprise edition of Memgraph.

### [Audit log](/reference-guide/audit-log.md)

Memgraph supports all query audit logging. When enabled, the audit log contains
records of all queries executed on the database.

### Authentication and authorization

Memgraph supports authentication and (optional) authorization using a
custom-built external auth module. To learn more, visit:

- **[Auth module](/reference-guide/auth-module.md)**
- **[LDAP security](/reference-guide/ldap-security.md)**

### [Runtime settings](/reference-guide/runtime-settings.md)

Check the settings that can be modified during runtime. 

### [Security - user privileges](/reference-guide/security.md)

Memgraph comes with the option of granting, denying, or revoking a certain set
of privileges to users or groups of users.
