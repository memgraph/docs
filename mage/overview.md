---
id: overview
title: MAGE - Memgraph Advanced Graph Extensions 🔮
sidebar_label: Getting started
slug: /
---

**Memgraph Advanced Graph Extensions**, **MAGE** to friends, is an open-source
repository that contains **graph algorithms** and **modules** written by the
team behind Memgraph and its users in the form of **query modules**. The project
aims to give everyone the tools they need to tackle the most interesting and
challenging **graph analytics** problems.

[**Query
module**](https://memgraph.com/docs/memgraph/database-functionalities/query-modules/built-in-query-modules)
is a concept introduced by Memgraph and it referes to user-defined procedures,
grouped into modules, that extend the **Cypher query language**. Procedures are
implementations of various algorithms in multiple programming languages and they
are all runnable inside Memgraph.

## Quick start

Start utilizing the power of MAGE with these simple steps.

### 1. Install MAGE

Install MAGE using a prepared image from the [Docker Hub](/installation/docker-hub.md) or by [building a Docker
image](/installation/docker-build.md) from the [official MAGE GitHub
repository](https://github.com/memgraph/mage). On Linux, you can also [install
MAGE from source]((/installation/source.md)) but be aware you will also need to install additional
dependencies.

### 2. Load query modules

To use certain procedures, first you need to [load the query modules](/usage/loading-modules.md) to the
appropriate directory. 

### 3. Call procedures

You are ready to [call procedures](/usage/calling-procedures.md) within queries and tackle that graph analytics
problem that's been keeping you awake. 

## What to do next?

### Browse the spellbook of query modules

Spellbook has been written by high MAGEs to help you utilize all the [currently
available query modules](/query-modules/available-queries.md).

### Create query modules

If you need some assistance in creating and running your own Python and C++
query modules [How-to guides](/how-to-guides/create-a-new-module-cpp.md) are here for you. 

### Learn about algorithms and their usage

There are so many
[algorithms](/algorithms/traditional-graph-analytics/betweenness-centrality-algorithm.md)
to benefit from. Browse through them and see how they can be applied in [use
cases](/use-cases/bioinformatics) from various fields, such as bioinformatics or
transportation. 

### Contribute

Make MAGE even better by [contributing](/contributing.md) your own algorithm implementations and ideas or reporting pesky bugs. 

