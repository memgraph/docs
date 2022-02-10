---
id: getting-started
title: Getting started with GQLAlchemy
sidebar_label: Getting started
slug: /
---

[![GQLAlchemy](https://img.shields.io/badge/source-GQLAlchemy-FB6E00?style=for-the-badge&logo=github&logoColor=white)](https://github.com/memgraph/gqlalchemy)

**GQLAlchemy** is a fully open-source Python library that aims to be the go-to
**Object Graph Mapper** (OGM) -- a link between Graph Database objects and Python
objects.

An Object Graph Mapper or OGM provides a developer-friendly workflow that allows
for writing object-oriented notation to communicate to a graph database. Instead
of writing Cypher queries, you will be able to write object-oriented code, which
the OGM will automatically translate into Cypher queries.

## Quick start

### 1. Install GQLAlchemy

Either install GQLAlchemy through [pip](/installation.md#pip) or [build it from
source](/installation.md#source).

### 2. Learn how to use the OGM

With the help of the [OGM
guide](/how-to-guides/ogm/map-nodes-and-relationships.md) you can learn how to map Python classes to graph objects, save them into the database and load them from the database.

### 3. Learn how to use the query builder

There is no need to learn the Cypher query language when you can use the [query
builder](/how-to-guides/query-builder/create-nodes-relationships.md) in GQLAlchemy to perform
the same tasks.
