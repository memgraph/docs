---
id: overview
title: Import data
sidebar_label: Import data overview
slug: /import-data
---

If you can choose the format of the data you want to import, the fastest way to
import data into Memgraph at the moment is by using the [LOAD CSV
clause](/import-data/load-csv-clause). 

What data do you want to import?
<!-- no toc -->
- [CSV files](#csv-files)
- [CYPHERL files](#cypherl-files)
- [JSON files](#json-files)
- [Data from a stream](#data-from-a-stream)
- [Table data](#table-data)
- [Data from an application or a program](#data-from-an-application-or-a-program)
- [Parquet, ORC or IPC/Feather/Arrow file](#parquet-orc-or-ipcfeatherarrow-file)
- [NetworkX, PyG or DGL graph](#networkx-pyg-or-dgl-graph)

## CSV files

To import data from CSV files into Memgraph, use the [**LOAD CSV
clause**](/import-data/files/load-csv-clause.md), which is used as a standard
Cypher clause, and can be invoked straight from a running Memgraph instance.

<!--Import tool to import CSV files in a strictly formatted CSV files
Try to compare mg_import_csv against LOAD CSV if mg_import_csv is 2x+ faster → keep it, if it’s ~10 percent faster → remove it completely-->

## CYPHERL files

If your data is in the form of Cypher queries (`CREATE` and `MERGE` clauses)
within a **CYPHERL** file it can be [imported via Memgraph
Lab or mgconsole](/import-data/files/cypherl.md).

## JSON files

You can import the **JSON** file into Memgraph by using the [**`json-util` query
module**](/import-data/files/load-json.md), which has procedures for loading JSON
file from a local file and from a remote address.

You can also use [**`import_util.json` procedure**](/import-data/files/load-json.md)
but the JSON file then needs to in a specific format defined by the procedure. 

<!--Need to add anchors on the load-json page and link from here-->

## Data from a stream

Memgraph comes with full streaming support, and you can connect directly to a
**Kafka**, **Redpanda** or **Pulsar** stream using [Cypher
queries](/import-data/data-streams/manage-streams.md) or [Memgraph
Lab](/import-data/data-streams/manage-streams-lab.md).

## Table data

You can migrate data from a [**MySQL**](/import-data/migrate/mysql.md) or
[**PostgresSQL**](/import-data/migrate/postgresql.md) database using the
[**`mgmigrate`** tool](https://github.com/memgraph/mgmigrate).

## Data from an application or a program

Memgraph offers a [**wide range of clients**](/connect-to-memgraph/drivers/overview.md) that can be used to connect directly to the platform and import data.

## Parquet, ORC or IPC/Feather/Arrow file

If you are a Python user you can import **Parquet**, **ORC** or **IPC/Feather/Arrow** file
into Memgraph [using **GQLAlchemy**](/gqlalchemy/how-to-guides/table-to-graph-importer).

## NetworkX, PyG or DGL graph

If you are a Python user you can import **NetworkX**, **PyG** or **DGL graph** into Memgraph
[using **GQLAlchemy**](/gqlalchemy/how-to-guides/networkx).

## Where to next?

You can also connect to streams and import data from CYPHERL files to an
instance running in [Memgraph Cloud](/memgraph-cloud). 

To learn more about the Cypher language, check out our [Cypher
manual](/cypher-manual) or [Memgraph
Playground](https://playground.memgraph.com/) for interactive guides.

For real-world examples of how to use Memgraph, we strongly suggest going
through one of the available [tutorials](/tutorials/overview.md).