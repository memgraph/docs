---
id: overview
title: Import data
sidebar_label: Import data overview
slug: /import-data
---

There are a few methods for importing data into Memgraph:
* **[CSV Import Tool](/import-data/csv-import-tool.md)**: Memgraph includes the
  CSV Import Tool, which allows you to import nodes and relationships from
  multiple CSV files.
* **[LOAD CSV Clause](/import-data/load-csv-clause.md)**: You can also use the
  Cypher clause `LOAD CSV` to load data from CSV files.
* **[Importing Cypher queries](/import-data/cypherl.md)**: If your data is saved
  in the form of Cypher queries (we call this `.cypherl` format) then this is
  the right approach for you.
* **[Kafka streams](/import-data/kafka/overview.md)**: You can connect Memgraph
  to a Kafka stream and ingest data in real-time.

## How to import CSV files into Memgraph?

There are two options for importing CSV files into Memgraph:
1. The **[CSV Import Tool](/import-data/csv-import-tool.md)** allows you to
   import nodes and relationships from multiple CSV files at once. The import is
   done while Memgraph is not running, so it can load the data the next time it
   starts. The tool is fully compatible with the [Neo4j CSV
   format](https://neo4j.com/docs/operations-manual/current/tools/import/). If
   you already have a pipeline set-up for Neo4j, you should only replace
   `neo4j-admin import` with `mg_import_csv`.

2. The second option is the  **[LOAD CSV
   Clause](/import-data/load-csv-clause.md)** which can be invoked straight from
   a running Memgraph instance and is used as a standard Cypher clause.

## How to import streaming data from Kafka into Memgraph?

Memgraph comes with full streaming support, and you can connect directly to a
Kafka stream. Check out [this guide](/import-data/kafka/overview.md) on how to
connect to a Kafka stream and take a look at the examples with different
serialization mechanisms:
* **[JSON](/import-data/kafka/json.md)**
* **[Avro](/import-data/kafka/avro.md)**
* **[Protobuf](/import-data/kafka/protobuf.md)**

## How to import data in the form of Cypher queries?

If you have data in the form of Cypher queries (`CREATE` and `MERGE` clauses)
you can import it by using the **mgconsole** tool or **Memgraph Lab**. We call
this format `.cypherl` and you can find an example of how to import such data
[here](/import-data/cypherl.md).

## How to import data directly from an application/program?

Memgraph offers a wide range of drivers that can be used to connect directly to
the platform. You can find a list of all the supported connection methods
[here](/import-data/overview.mdx).
