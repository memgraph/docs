---
id: reference-guide
title: Reference guide overview
sidebar_label: Reference guide overview
slug: /reference-guide
---

**Memgraph** supports most of the commonly used constructs of the language. The
reference guide contains the details of implemented features. Additionally,
not yet supported features of the language are listed.

## [Cypher query language](../../cypher-manual/overview)

**Cypher** is a declarative graph query language that allows for expressive and efficient data querying in a property graph. It aims to be intuitive and easy to learn while
providing a powerful interface for working with graph-based data. 

## [Configuration settings](./configuration.md)

Memgraph can be configured by editing the Memgraph configuration file or by including another configuration file. 

## [Indexing](./indexing.md)

An index stores additional information on certain types of data, so that retrieving said data becomes more efficient.

## [Built-in graph algorithms](./graph-algorithms.md)

Memgraph comes with custom-built algorithms that are implemented using C++: **Filtering variable-length paths**, **Breadth-first search**, and **Weighted shortest path**.

## [Query modules](./query-modules)

Memgraph supports extending the query language with user-written procedures. 
These procedures are grouped into modules, which can then be loaded either on startup or later on.

## [NetworkX](./networkx)

Memgraph includes a set of Python query modules based on the [NetworkX](https://networkx.github.io/) library of algorithms.
You can find more information about all the available algorithms in the [NetxorkX reference guide](./networkx).

## [Machine learning](./tensorflow.md)

Memgraph TensorFlow op wraps the high-performance Memgraph client for use with TensorFlow, 
allowing natural data transfer between Memgraph and TensorFlow at any point of the model.

### [Backup](./backup.md)

Memgraph comes with a couple of queries that allow you to safely make a backup of the files containing its data.

## [User privileges](./security.md)

Memgraph comes with the option of granting, denying, or revoking a certain set of privileges to users or groups of users.

## Authentication and authorization

Memgraph supports authentication and (optional) authorization using a custom-built external auth module.
To learn more visit:
* **[Auth module](./auth-module.md)**
* **[LDAP security](./ldap-security.md)**

## [Audit log](./audit-log.md)

Memgraph supports all query audit logging. When enabled, the audit log contains records of all queries executed on the database.

## [Replication](./replication.md)


Memgraph comes with a couple of queries that allow you to safely make a backup of the files containing its data. 
Memgraph supports replication and allows you to create a cluster of nodes running Memgraph instances. 
