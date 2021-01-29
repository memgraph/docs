# Introduction

## About Memgraph

Memgraph is an ACID-compliant high performance transactional in-memory graph
database management system featuring highly concurrent data structures,
multi-version concurrency control, and asynchronous IO.

## Resources

### Installation

Visit the [Installation](./getting_started/installation/installation.md) guide to find out more about the installation process.

### Querying the database

Memgraph uses the openCypher query language. Learn how to query Memgraph:
* within the **command-line** by visiting the [Querying](./getting_started/querying/querying.md) guide or
* visually by following the [Quick start: Memgraph Lab](../../lab/v1.2.0/quick-start.md) guide.

### Importing data

Data can be imported from CSV files using the CSV Import Tool or by using openCypher queries. 
Take a look at the [Import data](./database_functionalities/import-data.md) guide.

### Query modules

Memgraph supports extending the query language with user-written procedures. These procedures are grouped into modules, which can then be loaded either on startup or later on. 
To learn more about query modules take a look at the following guides:
* [Built-in query modules](./database_functionalities/query_modules/built-in-query-modules.md)
* [Load and call query modules](./database_functionalities/query_modules/load-call-query-modules.md)
* [Implement custom query modules](./database_functionalities/query_modules/implement-query-modules.md)

### Inspect and profile Cypher queries 

Memgraph also enables you to inspect and profile the execution of a query and get a detailed report 
on how the query's plan behaved. Take a look at the guides:
* [Inspecting queries](./database_functionalities/inspecting-queries.md)
* [Profiling queries](./database_functionalities/profiling-queries.md)

### NetworkX

Memgraph includes a set of Python query modules based on the [NetworkX](https://networkx.github.io/) library of algorithms.
You can find more information about all the available algorithms in the [NetworkX Reference guide](./reference_guide/networkx/networkx.md)

### Machine learning

Memgraph TensorFlow op wraps the high-performance Memgraph client for use with TensorFlow, 
allowing natural data transfer between Memgraph and TensorFlow at any point of the model.
If you are interested in using Memgraph for machine learning purposes  take a look at:
* [TensorFlow op setup](./database_functionalities/tensorflow-setup.md) 
* [TensorFlow op reference](./reference_guide/tensorflow.md)

### User privileges

Memgraph comes with the option of granting, denying, or revoking a certain set of privileges to users or groups of users.
To learn more visit:
* [User privileges (Enterprise)](./database_functionalities/manage-user-privileges.md)
* [Security (Enterprise)](reference_guide/security.md)

### Authentication and authorization

Memgraph supports authentication and (optional) authorization using a custom-built external auth module.
To learn more visit:
* [Authentication and authorization (Enterprise)](./database_functionalities/manage-users-using-ldap.md)
* [Auth module (Enterprise)](reference_guide/auth-module.md)
* [LDAP security (Enterprise)](reference_guide/ldap-security.md)

## Supported features

Feature                                               | Community | Enterprise
------------------------------------------------------|-----------|-----------
Hybrid In&#8209;Memory / On&#8209;Disk Storage Engine |     +     |     +
ACID Transactions                                     |     +     |     +
Optimized for Low Latency and High&#8209;Throughput   |     +     |     +
Support for Custom Query Modules (C and Python API)   |     +     |     +
CSV Import Tool                                       |     +     |     +
Development, Testing, and Evaluation Use              |     +     |     +
Query Modules with Graph Algorithms                   |     +     |     +
Production and Commercial Use                         |           |     +
Authentication                                        |           |     +
Advanced Password Policies                            |           |     +
Fine&#8209;Grained Access Control                     |           |     +
Auth Module                                           |           |     +
Full Activity Auditing                                |           |     +