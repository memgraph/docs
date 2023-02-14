---
id: getting-started
title: Getting started with GQLAlchemy
sidebar_label: Getting started
slug: /
---

[![GQLAlchemy](https://img.shields.io/badge/source-GQLAlchemy-FB6E00?style=for-the-badge&logo=github&logoColor=white)](https://github.com/memgraph/gqlalchemy)

**GQLAlchemy** is an open-source Python library and an **Object Graph Mapper** (OGM) - a link between graph database objects and Python objects. GQLAlchemy supports **Memgraph** and **Neo4j**.

An Object Graph Mapper or OGM provides a developer-friendly workflow that allows for writing object-oriented notation to communicate to a graph database. Instead of writing Cypher queries, you can write object-oriented code, which the OGM will automatically translate into Cypher queries.

## Quick start

### 1. Install GQLAlchemy

Either install GQLAlchemy through [pip](/installation.md#pip) or [build it from
source](/installation.md#source). If you are using [Conda](https://docs.conda.io/en/latest/) for Python environment management, you can install GQLAlchemy through [pip](/installation.md#pip).

:::caution
GQLAlchemy can't be installed with Python 3.11 [(#203)](https://github.com/memgraph/gqlalchemy/issues/203) and on Windows with Python > 3.9 [(#179)](https://github.com/memgraph/gqlalchemy/issues/179). If this is currently a blocker for you, please let us know by commenting on opened issues.
:::

### 2. Learn how to use the OGM

With the help of the [OGM
guide](/how-to-guides/ogm.md) you can learn how to map Python classes to graph objects, save them into the database and load them from the database.

### 3. Learn how to use the query builder

There is no need to learn the Cypher query language when you can use the [query
builder](/how-to-guides/query-builder/create-nodes-relationships.md) in GQLAlchemy to perform
the same tasks.
