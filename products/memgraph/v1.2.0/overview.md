# Introduction

## About Memgraph

Memgraph is an ACID compliant high performance transactional in-memory graph
database management system featuring highly concurrent data structures,
multi-version concurrency control and asynchronous IO.

## Resources

### Installation

Visit the [Quick Start](quick-start.md#installation) guide to find out more about the installation process.

### Querying

Memgraph uses the openCypher query language. Learn how to query Memgraph:
* within the **command-line** by visiting the [Quick Start](quick-start.md#querying) guide or
* **programmatically** by following the [How To Query Memgraph Programmatically](how_to_guides/query-memgraph-programmatically.md) guide.

### Importing Data

Data can be imported from CSV files using the CSV Import Tool or by using openCypher queries. 
Take a look at the [How to Import Data](how_to_guides/import-data.md) guide.

### Query Modules

Memgraph supports extending the query language with user-written procedures. 
These procedures are grouped into modules, which can then be loaded either on startup or later on. 
To learn more about query modules take a look at the following guides:
* [How to Load Query Modules?](how_to_guides/load-query-modules.md)
* [How to Call Query Module Procedures?](how_to_guides/call-query-module-procedures.md)
* [How to Implement Query Modules?](how_to_guides/implement-query-modules.md)
* [How to Use Query Modules Provided by Memgraph?](how_to_guides/use-query-modules-provided-by-memgraph.md)

### NetworkX

Memgraph includes a set of Python query modules based on the [NetworkX](https://networkx.github.io/) library of algorithms.
You can find more information about all the available algorithms in the [NetworkX Reference Guide](reference_guide/networkx/networkx.md)

### Machine Learning

Memgraph TensorFlow op wraps the high-performance Memgraph client for use with TensorFlow, 
allowing natural data transfer between Memgraph and TensorFlow at any point of the model.
If you are interested in using Memgraph for machine learning purposes  take a look at:
* [How to Setup Memgraph Tensorflow Op?](how_to_guides/tensorflow-setup.md)
* [TensorFlow Op Reference](reference_guide/tensorflow.md)

### User Privileges

Memgraph comes with the option of granting, denying or revoking a certain set of privileges to users or groups of users.
To learn more visit:
* [How to Manage User Privileges? (Enterprise)](how_to_guides/manage-user-privileges.md)
* [Security (Enterprise)](reference_guide/security.md)

### Authentication and Authorization

Memgraph supports authentication and (optional) authorization using a custom-built external auth module.
To learn more visit:
* [Auth Module (Enterprise)](reference_guide/auth-module.md)
* [LDAP Security (Enterprise)](reference_guide/ldap-security.md)

## Supported Features

Feature                                               | Community | Enterprise
------------------------------------------------------|-----------|-----------
Hybrid In&#8209;Memory / On&#8209;Disk Storage Engine |     +     |     +
ACID Transactions                                     |     +     |     +
Optimized for Low Latency and High&#8209;Throughput   |     +     |     +
Support for Custom Query Modules (C and Python API)   |     +     |     +
CSV Import Tool                                       |     +     |     +
Development, Testing and Evaluation Use               |     +     |     +
Query Modules with Graph Algorithms                   |     +     |     +
Production and Commercial Use                         |           |     +
Authentication                                        |           |     +
Advanced Password Policies                            |           |     +
Fine&#8209;Grained Access Control                     |           |     +
Auth Module                                           |           |     +
Full Activity Auditing                                |           |     +