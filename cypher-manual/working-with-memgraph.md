---
id: working-with-memgraph
title: Working with Memgraph
sidebar_label: Working with Memgraph
---

## What is Memgraph

[Memgraph](https://memgraph.com/) is the platform for graph computation on
streaming data. It's an end-to-end platform designed to solve complex graph
problems in real-time and accelerate graph application development.

You can [install and run
Memgraph](https://memgraph.com/docs/memgraph/installation) using Docker on
Windows and macOS, or natively on Linux and WSL. If you use Docker, Memgraph
Platform is the recommended Docker image. The Memgraph Platform Docker image
contains everything you need to start as quickly as possible: MemgraphDB,
Memgraph Lab, mgconsole and MAGE.

## How to run a query

Memgraph uses [Cypher query language](cypher-query-language.md) to work with
data. If you like command line tools you can use
[mgconsole](/docs/memgraph/connect-to-memgraph/mgconsole) to execute Cypher
queries. If you are a fan of graphical interfaces, you can use [Memgraph
Lab](/docs/memgraph-lab). On top of the execution of queries, with Memgraph Lab,
you can import, explore and visualize your data.
