---
id: data-migration
title: Data migration
sidebar_label: Data migration
---

What data do you want to import?
<!-- no toc -->
- [CSV files](#csv-files)
- [JSON files](#json-files)
- [CYPHERL files](#cypherl-files)
- [Data from a stream](#data-from-a-stream)
- [Table data](#table-data)
- [Data from an application or a program](#data-from-an-application-or-a-program)
- [Parquet, ORC or IPC/Feather/Arrow file](#parquet-orc-or-ipcfeatherarrow-file)
- [NetworkX, PyG or DGL graph](#networkx-pyg-or-dgl-graph)


:::tip

If you can choose the format of the data you want to import, the fastest way to
import data into Memgraph is from a CSV file using the [LOAD CSV
clause](/import-data/files/load-csv-clause.md). 

:::

## CSV files

To import data from CSV files into Memgraph, use the [**LOAD CSV
clause**](/import-data/files/load-csv-clause.md), which is used as a standard
Cypher clause, and can be invoked straight from a running Memgraph instance.

## JSON files

You can [import a **JSON** file into Memgraph](/import-data/files/load-json.md)
by using the **`json_util` query module**, which has procedures for loading JSON
file from a local file and from a remote address.

You can also use the **`import_util.json` procedure** to import data from a
local JSON file, but the file needs to in a specific format defined by the
procedure. 

## CYPHERL files

If your data is in the form of Cypher queries (`CREATE` and `MERGE` clauses)
within a **CYPHERL** file it can be [imported via Memgraph
Lab or mgconsole](/import-data/files/cypherl.md).

## Data from a stream

Memgraph comes with full streaming support, and you can connect directly to a
**Kafka**, **Redpanda** or **Pulsar** stream using [Cypher
queries](/import-data/data-streams/manage-streams.md) or [Memgraph
Lab](/import-data/data-streams/manage-streams-lab.md).

## MySQL, PostgreSQL or Oracle table data

You can migrate data from a [**MySQL**](/import-data/migrate/mysql.md) or
[**PostgreSQL**](/import-data/migrate/postgresql.md) database using the
[**`mgmigrate`** tool](https://github.com/memgraph/mgmigrate).

Alternatively, you can use the [`migration`
module](/mage/query-modules/python/migrate) from the [MAGE graph
library](/mage) which allows you to access data from a MySQL database, an SQL
server or an Oracle database. 

## Data from an application or a program

Memgraph offers a [**wide range of clients**](/connect-to-memgraph/drivers/overview.md) that can be used to connect directly to the platform and import data.

## Parquet, ORC or IPC/Feather/Arrow file

If you are a Python user you can import **Parquet**, **ORC** or **IPC/Feather/Arrow** file
into Memgraph [using **GQLAlchemy**](/gqlalchemy/how-to-guides/table-to-graph-importer).

## NetworkX, PyG or DGL graph

If you are a Python user you can import **NetworkX**, **PyG** or **DGL graph** into Memgraph
[using **GQLAlchemy**](/gqlalchemy/how-to-guides/import-python-graphs).

## Where to next?

You can also connect to streams and import data from CYPHERL files to an
instance running in [Memgraph Cloud](/memgraph-cloud). 

Memgraph uses two mechanisms to [ensure the durability of stored
data](/reference-guide/backup.md) and make disaster recovery possible:
write-ahead logging (WAL) and periodic snapshot creation. 

To learn more about the Cypher language, check out our [Cypher
manual](/cypher-manual) or [Memgraph
Playground](https://playground.memgraph.com/) for interactive guides.

For real-world examples of how to use Memgraph, we strongly suggest going
through one of the available [tutorials](/tutorials/overview.md).
