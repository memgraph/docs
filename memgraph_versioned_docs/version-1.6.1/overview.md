---
id: overview
title: Memgraph
sidebar_label: Overview
slug: /overview
---

Memgraph is a graph analytics platform based on an ACID-compliant high-performance
transactional in-memory graph database featuring highly concurrent
data structures, multi-version concurrency control, and asynchronous IO.

## Memgraph features

Supported feature                                                       | Community | Enterprise
------------------------------------------------------------------------|-----------|-----------
Hybrid In&#8209;Memory / On&#8209;Disk Storage Engine                   |     +     |     +
ACID Transactions                                                       |     +     |     +
Optimized for Low Latency and High&#8209;Throughput                     |     +     |     +
Development, Testing, and Evaluation Use                                |     +     |     +
Production use                                                          |     +     |     +
[Replication](/database-functionalities/replication.md)                 |     +     |     +
[Custom Cypher procedures](/reference-guide/query-modules/overview.md)  |     +     |     +
[Custom graph algorithms](/mage)                                        |     +     |     +
[Importing data](/import-data/overview.md)                              |     +     |     +
[Authentication](/database-functionalities/manage-users-using-ldap.md)              |           |     +
[Advanced Password Policies](/database-functionalities/manage-user-privileges.md)   |           |     +
[Fine&#8209;Grained Access Control](/reference-guide/security.md)                   |           |     +
[Auth Module](/reference-guide/auth-module.md)                                      |           |     +
[Full Activity Auditing](/reference-guide/audit-log.md)                             |           |     +

## NetworkX

Memgraph includes a set of Python query modules based on the [NetworkX](https://networkx.github.io/) library of algorithms.
You can find more information about all the available algorithms in the [NetworkX guide](/database-functionalities/networkx.md).

## Machine learning

Memgraph TensorFlow op wraps the high-performance Memgraph client for use with TensorFlow,
allowing natural data transfer between Memgraph and TensorFlow at any point of the model.
If you are interested in using Memgraph for machine learning purposes  take a look at:
* [TensorFlow op setup](/database-functionalities/tensorflow-setup.md)
* [TensorFlow op reference](/reference-guide/tensorflow.md)
