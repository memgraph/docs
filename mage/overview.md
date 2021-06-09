---
id: overview
title: MAGE - Memgraph Advanced Graph Extensions 🔮
sidebar_label: Overview
slug: /
---

**MAGE**, also known as **Memgraph Advanced Graph Extensions**, is an
open-source repository that contains **graph algorithms** and **modules** in a form of query modules 
written by the team behind Memgraph and its users. You can find and contribute implementations
of various algorithms in multiple programming languages, all runnable inside
Memgraph. This project aims to give everyone the tools they need to tackle the
most interesting and challenging **graph analytics** problems. 

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

| Algorithms | Lang | Description |
| --- | --- | --- |
| [nxalg](python/nxalg.py) | Python| A module that provides NetworkX integration with Memgraph and implements many NetworkX algorithms |
| [graph_analyzer](python/graph_analyzer.py) | Python | This Graph Analyzer query module offers insights about the stored graph or a subgraph. |
| [distance_calculator](python/distance_calculator.py) | Python | Module for finding the geographical distance between two points defined with 'lng' and 'lat' coordinates. |
| [tsp](python/tsp.py) | Python | An algorithm for finding the shortest possible route that visits each vertex exactly once. |
| [set_cover](python/set_cover.py) | Python | The algorithm for finding minimum cost subcollection of sets that covers all elements of a universe. |
| [graph_coloring](python/graph_coloring.py) | Python | Algorithm for assigning labels to the graph elements subject to certain constraints. In this form, it is a way of coloring the graph vertices such that no two adjacent vertices are of the same color. |
| [weakly_connected_components](cpp/connectivity_module/connectivity_module.cpp) | C++ | A module that finds weakly connected components in a graph. |
| [biconnected_components](cpp/biconnected_components_module/biconnected_components_module.cpp) | C++ | Algorithm for calculating maximal biconnected subgraph. A biconnected subgraph is a subgraph with a property that if any vertex were to be removed, the graph will remain connected. |
| [bipartite_matching](cpp/bipartite_matching_module/bipartite_matching_module.cpp) | C++ | Algorithm for calculating maximum bipartite matching, where matching is a set of nodes chosen in such a way that no two edges share an endpoint. |
| [cycles](cpp/cycles_module/cycles_module.cpp) | C++ | Algorithm for detecting cycles on graphs |
| [bridges](cpp/bridges_module/bridges_module.cpp) | C++ | A bridge is an edge, which when deleted, increases the number of connected components. Goal of this algorithm is to detect edges which are bridges in graph. |
| [betweenness centrality](cpp/betweenness_centrality_module/betweenness_centrality_module.cpp) | C++ | The betweenness centrality of a node is defined as the sum of the of all-pairs shortest paths that pass through the node divided by the number of all-pairs shortest paths in the graph. The algorithm has O(nm) time complexity. |
