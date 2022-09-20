---
id: overview
title: Import data
sidebar_label: Import data overview
slug: /import-data
---

There are a few methods for importing data into Memgraph and they cover:

- [How to import CSV files into Memgraph?](#how-to-import-csv-files-into-memgraph) 
- [How to import JSON files into Memgraph?](#how-to-import-json-files-into-memgraph)
- [How to import CYPHERL files with Cypher queries into Memgraph?](#how-to-import-cypherl-files-with-cypher-queries-into-memgraph)
- [How to migrate data from a relational database?](#how-to-migrate-data-from-a-relational-database)
- [How to import streaming data into Memgraph?](#how-to-import-streaming-data-into-memgraph)
- [How to import data directly from an application/program?](#how-to-import-data-directly-from-an-application-or-a-program)

## How to import CSV files into Memgraph?

To import data from CSV files into Memgraph, use the [**LOAD CSV
clause**](/import-data/files/load-csv-clause.md), which is used as a standard
Cypher clause, and can be invoked straight from a running Memgraph instance.

## How to import JSON files into Memgraph?

You can import the JSON file into Memgraph by using the [**JSON query
module**](/import-data/files/load-json.md), which has procedures for loading JSON
file from a local file  from a remote address.

## How to import CYPHERL files with Cypher queries into Memgraph?

If your data is in the form of Cypher queries (`CREATE` and `MERGE` clauses)
within a **CYPHERL** file it can be [imported via Memgraph
Lab or mgconsole](/import-data/files/cypherl.md).

## How to migrate data from a relational database?

You can migrate data from a [**MySQL**](/import-data/migrate/mysql.md) or
[**PostgresSQL**](/import-data/migrate/postgresql.md) database using the
[**`mgmigrate`** tool](https://github.com/memgraph/mgmigrate).

## How to import streaming data into Memgraph?

Memgraph comes with full streaming support, and you can connect directly to a
**Kafka**, **Redpanda** or **Pulsar** stream using [Cypher
queries](/import-data/data-streams/manage-streams.md) or [Memgraph Lab
wizard](/import-data/data-streams/manage-streams-lab.md).

## How to import data directly from an application or a program?

Memgraph offers a wide range of drivers that can be used to connect directly to
the platform. You can find a list of all the supported drivers
[here](/connect-to-memgraph/drivers/overview.md).

## Where to next?

You can also connect to streams and import data from CYPHERL files to an
instance running in [Memgraph Cloud](/memgraph-cloud). To learn more
about the Cypher language, check out our [Cypher manual](/cypher-manual) or
[Memgraph Playground](https://playground.memgraph.com/) for interactive guides.
For real-world examples of how to use Memgraph, we strongly suggest going
through one of the available [tutorials](/tutorials/overview.md).