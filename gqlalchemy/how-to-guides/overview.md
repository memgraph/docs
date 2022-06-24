---
id: overview
title: How-to guides overview
sidebar_label: How-to guides overview
slug: /how-to-guides
---

This section will teach you how to use object graph mapper (OGM) and query
builder from the GQLAlchemy. Here you will find step-by-step guides for the most
common usage of OGM and query builder, depending on the current GQLAlchemy
capabilities. If you are a Python developer not that familiar with Cypher query
language, you will find the how-to guides very useful.

## Object graph mapper

Object graph mapper (OGM) in GQLAlchemy maps Python classes to nodes and
relationships in graph database and converts function calls to Cypher queries.
To learn more about how to use OGM, take a look at the following pages:

- [**Map nodes and
  relationships**](/how-to-guides/ogm/map-nodes-and-relationships.md)
- [**Save nodes and
  relationships**](/how-to-guides/ogm/save-nodes-and-relationships.md)
- [**Load nodes and
  relationships**](/how-to-guides/ogm/load-nodes-and-relationships.md)
- [**Index labels and
  properties**](/how-to-guides/ogm/index-labels-and-properties.md)

## Query builder

When working with GQLAlchemy, you can connect to the database and execute Cypher
queries using the query builder. To learn more about how to create a query using
query builder, check out the following how-to guide:

- [**Create nodes and
  relationships**](/how-to-guides/query-builder/create-nodes-relationships.md)
- [**Return results**](/how-to-guides/query-builder/return-results.md)
- [**Filter data**](/how-to-guides/query-builder/filter-data.md)
- [**Call query module
  procedures**](/how-to-guides/query-builder/call-procedures.md)
- [**Delete and remove
  objects**](/how-to-guides/query-builder/delete-remove-objects.md)
- [**Set or update objects**](/how-to-guides/query-builder/set-or-update-objects.md)

## Stream & trigger support

You can create streams and database triggers directly from GQLAlchemy. Check out
the following guides:

- [**Kafka streams**](/how-to-guides/streams/kafka-streams.md)
- [**Pulsar streams**](/how-to-guides/streams/pulsar-streams.md)
- [**Triggers**](/how-to-guides/triggers/triggers.md)

## Import data from different sources

You can translate table data from a file to graph data and import it to
Memgraph. Currently, we support reading of CSV, Parquet, ORC and
IPC/Feather/Arrow file formats via the PyArrow package.

You can use `loaders.py` which implements loading data from the local file
system, as well as Azure Blob and Amazon S3 remote file systems:

- **[Import table data to a graph
  database](/how-to-guides/loaders/import-table-data-to-graph-database.md)**

The other way to import data is to implement a custom file system importer:

- **[Implement a custom file system
  importer](/how-to-guides/loaders/make-a-custom-file-system-importer.md)**
  
## Instance runner

There are two ways of managing a Memgraph instance with the `instance_runner`
module:

- **[Manage a Memgraph instance with
Docker](/how-to-guides/instance-runner/memgraph-docker-instance.md)**
- **[Manage a Memgraph instance from a
  binary](/how-to-guides/instance-runner/memgraph-binary-instance.md)**

## On-disk storage

Since Memgraph is an in-memory graph database, the GQLAlchemy library provides
an on-disk storage solution for large properties that don’t need to be used in
any of the graph algorithms. Learn how to use on-disk storage in the following
guide:

- [**On-disk storage**](/how-to-guides/on-disk-storage/on-disk-storage.md)
