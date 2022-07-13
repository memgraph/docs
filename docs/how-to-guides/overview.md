---
id: overview
title: How-to guides overview
sidebar_label: How-to guides overview
slug: /how-to-guides
---

How-to guides within this section serve as a cookbook for getting things done as
fast as possible. These guides tend to provide a step-by-step guide on using
certain Memgraph features or solving a particular problem.

## Streams

Memgraph can connect to existing **Kafka**, **Pulsar** and **Redpanda** streams.
The streams use user-defined transformations to produce Cypher queries based on
the received messages. To learn more about streams and transformations take a
look at the following pages:

- **Kafka**
  - [Managing Kafka streams](/how-to-guides/streams/kafka/kafka-streams.md)
  - [Implement transformation
    modules](/how-to-guides/streams/kafka/implement-transformation-module.md)
- **Pulsar**
  - [Managing Pulsar streams](/how-to-guides/streams/pulsar/pulsar-streams.md)
  - [Implement transformation
    modules](/how-to-guides/streams/pulsar/implement-transformation-module.md)

## Inspect and profile Cypher queries

Memgraph also enables you to inspect and profile the execution of a query and
get a detailed report on how the query's plan behaved. Take a look at the
guides:

- [Inspecting
  queries](/reference-guide/optimizing-queries/inspecting-queries.md)
- [Profiling queries](/reference-guide/optimizing-queries/profiling-queries.md)

## Constraints

 Memgraph has two types of constraints. Take a look how to enforce them:

- [Existence constraint](/how-to-guides/constraints/existence-constraint.md)
- [Uniqueness constraint](/how-to-guides/constraints/uniqueness-constraint.md)


## Change configuration and access logs

Take a look how to change configuration settings and access log files:

- [Change configuration and access logs](/how-to-guides/config-logs.md)

## Query modules

Memgraph supports extending the query language with user-written procedures.
These procedures are grouped into modules, which can then be loaded either on
startup or later on. To learn more about query modules take a look at the
following guides:

- [Query modules](/how-to-guides/query-modules.md)

## Utilize the NetworkX library

Memgraph currently provides three query modules
that utilize the NetworkX library. Take a look how to use the NetworkX library with Memgraph:

- [Utilize the NetworkX library](/how-to-guides/networkx.md)

## TensorFlow Op

A TensorFlow op (operation) is a fundamental building block of all TensorFlow
models. Learn how to setup Memgraph TensorFlow Op:

- [TensorFlow Op](/how-to-guides/tensorflow-setup.md)

## Working with indexes

A database index is a data structure used to improve the speed of data retrieval
within a database. Take a look how to enable them:

- [Working with indexes](/how-to-guides/indexes.md)

## Replication

Memgraph supports replication and the following guide demonstrates how to create
a simple cluster of nodes running Memgraph instances:

- [Replication](/how-to-guides/replication.md)

## Backup

Memgraph comes with a couple of queries that allow you to safely make a backup
of the files containing its data:

- [How to create a backup?](/how-to-guides/create-backup.md)


## User privileges

Memgraph comes with the option of granting, denying, or revoking a certain set
of privileges to users or groups of users. To learn more visit:

- [User privileges (Enterprise)](/how-to-guides/manage-user-privileges.md)

## Authentication and authorization

Memgraph supports authentication and (optional) authorization using a
custom-built external auth module. To learn more visit:

- [Authentication and authorization
  (Enterprise)](/how-to-guides/manage-users-using-ldap.md)

## Work with Docker

If you are new to Docker, this how-to guide will help you get a grasp of Docker and
make it easier to accomplish tasks within Memgraph:

- [Work with Docker](/how-to-guides/work-with-docker.md)


## Work with Triggers

Memgraph supports database triggers that can be executed if a particular type of event occurs. Events are related to changes in data, such as created, updated, and deleted nodes or relationships. 

- [Work with Triggers](/how-to-guides/work-with-triggers.md)

## Use Font Awesome icons for node images

Font Awesome is a popular icon library. You can't
use those icons directly or SVG file as background images. Tak a look at  workaround for this: 

- [Use Font Awesome icons for node images](/how-to-guides/font-awesome-for-node-images.md)
