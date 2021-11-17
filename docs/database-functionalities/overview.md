---
id: overview
title: Database functionalities overview
sidebar_label: Database functionalities overview
slug: /database-functionalities
---

Articles within this section serve as a cookbook for getting things done as fast
as possible. These articles tend to provide a step-by-step guide on how to use
certain Memgraph features or solve a particular problem.

## Streams

Memgraph can connect to existing **Kafka**, **Pulsar** and **Redpanda** streams.
The streams are using user-defined transformations to produce Cypher queries
based on the received messages. To learn more about streams and transformations
take a look at the following pages:
* **Kafka**
  + [Managing Kafka
    streams](/database-functionalities/streams/kafka/kafka-streams.md)
  + [Implement transformation
    modules](/database-functionalities/streams/kafka/implement-transformation-module.md)
* **Pulsar**
  + [Managing Pulsar
    streams](/database-functionalities/streams/pulsar/pulsar-streams.md)
  + [Implement transformation
    modules](/database-functionalities/streams/pulsar/implement-transformation-module.md)

## Inspect and profile Cypher queries

Memgraph also enables you to inspect and profile the execution of a query and
get a detailed report on how the query's plan behaved. Take a look at the
guides:
* [Inspecting queries](./inspecting-queries.md)
* [Profiling queries](./profiling-queries.md)

## Machine learning

Memgraph TensorFlow op wraps the high-performance Memgraph client for use with
TensorFlow, allowing natural data transfer between Memgraph and TensorFlow at
any point of the model. If you are interested in using Memgraph for machine
learning purposes  take a look at:
* [TensorFlow op Setup](./tensorflow-setup.md)

## [Query modules](/reference-guide/query-modules/overview.md)

Memgraph supports extending the query language with user-written procedures.
These procedures are grouped into modules, which can then be loaded either on
startup or later on. To learn more about query modules take a look at the
following guides:
* [Query modules basics](/database-functionalities/query-modules/overview.md)
* [Implement custom query
  modules](/database-functionalities/query-modules/implement-query-modules.md)

## Replication

Memgraph supports replication and the following guide demonstrates how to create
a simple cluster of nodes running Memgraph instances:
* [Replication](./replication.md)

## Backup

Memgraph comes with a couple of queries that allow you to safely make a backup
of the files containing its data:
* [Backup](../reference-guide/backup.md)

## User privileges

Memgraph comes with the option of granting, denying, or revoking a certain set
of privileges to users or groups of users. To learn more visit:
* [User privileges (Enterprise)](./manage-user-privileges.md)

## Authentication and authorization

Memgraph supports authentication and (optional) authorization using a
custom-built external auth module. To learn more visit:
* [Authentication and authorization (Enterprise)](./manage-users-using-ldap.md)

## Triggers

Memgraph supports running openCypher statements after a certain event happens
during transaction execution, i.e. triggers:
* [Triggers](./triggers.md)
