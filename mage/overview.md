---
id: overview
title: MAGE - Memgraph Advanced Graph Extensions 🔮
sidebar_label: MAGE overview
slug: /
---

**MAGE**, also known as **Memgraph Advanced Graph Extensions**, is an
open-source repository that contains **graph algorithms** and **modules** in the form of query modules
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
documentation](https://memgraph.com/docs/memgraph/database-functionalities/query-modules/built-in-query-modules).

## Spellbook 📖 - Currently available modules

| Algorithms                                                                                | Lang   | Description                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [nxalg](/mage/query-modules/python/nxalg)                                                 | Python | A module that provides NetworkX integration with Memgraph and implements many NetworkX algorithms                                                                                                                                 |
| [graph_analyzer](/mage/query-modules/python/graph-analyzer)                               | Python | This Graph Analyzer query module offers insights about the stored graph or a subgraph.                                                                                                                                            |
| [distance_calculator](/mage/query-modules/python/distance-calculator)                     | Python | Module for finding the geographical distance between two points defined with 'lng' and 'lat' coordinates.                                                                                                                         |
| [tsp](/mage/query-modules/python/tsp)                                                     | Python | An algorithm for finding the shortest possible route that visits each vertex exactly once.                                                                                                                                        |
| [set_cover](python/set_cover.py)                                                          | Python | The algorithm for finding minimum cost subcollection of sets that covers all elements of a universe.                                                                                                                              |
| [graph_coloring](/mage/query-modules/python/graph-coloring)                               | Python | Algorithm for assigning labels to the graph elements subject to certain constraints. In this form, it is a way of coloring the graph vertices such that no two adjacent vertices are of the same color.                           |
| [vrp](/mage/query-modules/python/vrp)                                                     | Python | Algorithm for finding the shortest route possible between the central depot and places to be visited. The algorithm can be solved with multiple vehicles that represent a visiting fleet.                                         |
| [union_find](/mage/query-modules/python/union-find)                                       | Python | A module with an algorithm that enables the user to check whether the given nodes belong to the same connected component.                                                                                                         |
| [node_similartiy](/mage/query-modules/python/node-similarity)                             | Python | A module that contains similarity measures for calculating the similarity between two nodes.                                                                                                                                      |
| [node2vec_online](/mage/query-modules/python/node2vec-online)                             | Python | An algorithm for calculating node embeddings as new edges arrive                                                                                                                                                                  |
| [weakly_connected_components](/mage/query-modules/cpp/weakly-weakly_connected_components) | C++    | A module that finds weakly connected components in a graph.                                                                                                                                                                       |
| [biconnected_components](/mage/query-modules/cpp/biconnected_components)                  | C++    | Algorithm for calculating maximal biconnected subgraph. A biconnected subgraph is a subgraph with a property that if any vertex were to be removed, the graph will remain connected.                                              |
| [bipartite_matching](/mage/query-modules/cpp/bipartite_matching)                          | C++    | Algorithm for calculating maximum bipartite matching, where matching is a set of nodes chosen in such a way that no two edges share an endpoint.                                                                                  |
| [cycles](/mage/query-modules/cpp/cycles)                                                  | C++    | Algorithm for detecting cycles on graphs                                                                                                                                                                                          |
| [bridges](/mage/query-modules/cpp/bridges)                                                | C++    | A bridge is an edge, which when deleted, increases the number of connected components. The goal of this algorithm is to detect edges that are bridges in a graph.                                                                 |
| [betweenness centrality](/mage/query-modules/cpp/betweenness_centrality)                  | C++    | The betweenness centrality of a node is defined as the sum of the of all-pairs shortest paths that pass through the node divided by the number of all-pairs shortest paths in the graph. The algorithm has O(nm) time complexity. |
| [uuid_generator](/mage/query-modules/cpp/uuid_generator)                                  | C++    | A module that generates a new universally unique identifier (UUID).                                                                                                                                                               |
