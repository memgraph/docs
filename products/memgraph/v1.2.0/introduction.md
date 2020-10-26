# Introduction

## About Memgraph

Memgraph is an ACID compliant high performance transactional in-memory graph
database management system featuring highly concurrent data structures,
multi-version concurrency control and asynchronous IO.

## Resources

### Installation

Visit the [Quick Start](https://docs.memgraph.com/memgraph/quick-start#installation) guide to find out more about the installation process.

### Querying

Memgraph uses the openCypher query language. Learn how to query Memgraph:
* within the **command-line** by visiting the [Quick Start](https://docs.memgraph.com/memgraph/quick-start#querying) guide,
* **programmatically** by following the [How To Query Memgraph Programmatically](https://docs.memgraph.com/memgraph/how-to-guides-overview/query-memgraph-programmatically) guide.

### Importing Data

Data can be imported from CSV files using the CSV Import Tool or by using openCypher queries. 
Take a look ak the [How to Import Data](https://docs.memgraph.com/memgraph/how-to-guides-overview/import-data) guide.

### Query Modules

Memgraph supports extending the query language with user-written procedures. 
These procedures are grouped into modules, which can then be loaded either on startup or later on. 
To learn more about query modules take a look at the following guides:
* [How to Load Query Modules?](load-query-modules.md)
* [How to Call Query Module Procedures?](call-query-module-procedures.md)
* [How to Implement Query Modules?](implement-query-modules.md)
* [How to Use Query Modules Provided by Memgraph?](use-query-modules-provided-by-memgraph.md)

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