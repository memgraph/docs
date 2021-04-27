---
id: overview
title: MAGE - Memgraph Advanced Graph Extensions 🔮
sidebar_label: Overview
slug: /
---

**MAGE**, also known as **Memgraph Advanced Graph Extensions**, is an
open-source repository that contains all available query modules written by the
team behind Memgraph and its users. You can find and contribute implementations
of various algorithms in multiple programming languages, all runnable inside
Memgraph. This project aims to give everyone the tools they need to tackle the
most interesting and challenging graph analytics problems. 

:::info GitHub repository 
You can find the official GitHub repository here: **[MAGE on GitHub
](https://github.com/memgraph/mage)**.
:::

## MAGE query modules

Memgraph introduces the concept of **query modules**, user-defined procedures
that extend the **Cypher query language**. These procedures are grouped into
modules that can be loaded into Memgraph. You can find more information on query
modules in the official [Memgraph
documentation](https://docs.memgraph.com/memgraph/database-functionalities/query-modules/built-in-query-modules).

## Spellbook 📖 - Currently available modules

Query modules implemented in **Python**:
* **[nxalg](/query-modules/python/nxalg.md)**: A module that provides NetworkX
  integration with Memgraph and implements many NetworkX algorithms.  
* **[graph_analyzer](/query-modules/python/graph-analyzer.md)**: This Graph
  Analyzer query module offers insights about the stored graph or a subgraph.
* **[graph_coloring](/query-modules/python/graph-analyzer.md)**: Algorithm for
  assigning labels to the graph elements subject to certain constraints. In this
  form, it is a way of coloring the graph vertices such that no two adjacent
  vertices are of the same color.
* **[distance_calculator](/query-modules/python/distance-calculator.md)**:
  Module for finding the geographical distance between two points defined with
  'lng' and 'lat' coordinates.
* **[tsp](/query-modules/python/tsp.md)**: An algorithm for finding the shortest
  possible route that visits each vertex exactly once.
* **[set_cover](/query-modules/python/set-cover.md)**: The algorithm for finding
  minimum cost subcollection of sets that covers all elements of a universe.

Query modules implemented in **C/C++**:
* **[connectivity_module](https://github.com/memgraph/mage/tree/main/cpp/connectivity_module)**:
  A module that finds weakly connected components in a graph.
* **[biconnected_components_module](https://github.com/memgraph/mage/tree/main/cpp/biconnected_components_module)**:
  Module for finding biconnected components of the graph.
