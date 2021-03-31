---
id: database-functionalities
title: Database functionalities overview
sidebar_label: Database functionalities overview
slug: /database-functionalities
---

Articles within this section serve as a cookbook for getting
things done as fast as possible. These articles tend to provide a step-by-step
guide on how to use certain Memgraph features or solve a particular problem.

## Import data

Data can be imported from CSV files using the CSV Import Tool or by using Cypher queries. 
To learn more visit:
* [Import data](./import-data.md)

## Query modules

Memgraph supports extending the query language with user-written procedures. 
These procedures are grouped into modules, which can then be loaded either on startup or later on. 
To learn more about query modules take a look at the following guides:
* [Built-in query modules](./query-modules/built-in-query-modules.md)
* [Load and call query modules](./query-modules/load-call-query-modules.md)
* [Implement custom query modules](./query-modules/implement-query-modules.md)

## Inspect and profile Cypher queries 

Memgraph also enables you to inspect and profile the execution of a query and get a detailed report 
on how the query's plan behaved. Take a look at the guides:
* [Inspecting queries](./inspecting-queries.md)
* [Profiling queries](./profiling-queries.md)

## Machine learning

Memgraph TensorFlow op wraps the high-performance Memgraph client for use with TensorFlow, 
allowing natural data transfer between Memgraph and TensorFlow at any point of the model.
If you are interested in using Memgraph for machine learning purposes  take a look at:
* [TensorFlow op Setup](./tensorflow-setup.md) 

## Replication

Memgraph supports replication and the following guide demonstrates how to create a simple cluster of nodes running
Memgraph instances: 
* [Replication](./replication.md)

## Backup

Memgraph comes with a couple of queries that allow you to safely make a backup of the files containing its data:
* [Backup](../reference-guide/backup.md)

## User privileges

Memgraph comes with the option of granting, denying, or revoking a certain set of privileges to users or groups of users.
To learn more visit:
* [User privileges (Enterprise)](./manage-user-privileges.md)

## Authentication and authorization

Memgraph supports authentication and (optional) authorization using a custom-built external auth module.
To learn more visit:
* [Authentication and authorization (Enterprise)](./manage-users-using-ldap.md)
