---
id: overview
title: MAGE - Memgraph Advanced Graph Extensions 🔮
sidebar_label: MAGE overview
slug: /
---

**MAGE**, also known as **Memgraph Advanced Graph Extensions**, is an
open-source repository that contains **graph algorithms** and **modules** in the
form of query modules written by the team behind Memgraph and its users. You can
find and contribute implementations of various algorithms in multiple
programming languages, all runnable inside Memgraph. This project aims to give
everyone the tools they need to tackle the most interesting and challenging
**graph analytics** problems.

:::info GitHub repository

You can find the official GitHub repository here: **[MAGE on
GitHub](https://github.com/memgraph/mage)**.

:::

## MAGE query modules

Memgraph introduces the concept of **query modules**, user-defined procedures
that extend the **Cypher query language**. These procedures are grouped into
modules that can be loaded into Memgraph. You can find more information on query
modules in the official [Memgraph
documentation](https://memgraph.com/docs/memgraph/database-functionalities/query-modules/built-in-query-modules).

## Memgraph compatibility

With changes in Memgraph API, MAGE started to track version numbers. Check out
the table below which will reveal MAGE compatibility with Memgraph versions.

| MAGE version | Memgraph version  |
| ------------ | ----------------- |
| >= 1.0       | >= 2.0.0          |
| ^0           | >= 1.4.0 <= 1.6.1 |

## Spellbook 📖 - Currently available modules

| Algorithms                                                                                         | Lang   | Description                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [betweenness_centrality](cpp/betweenness_centrality_module/betweenness_centrality_module.cpp)      | C++    | The betweenness centrality of a node is defined as the sum of the of all-pairs shortest paths that pass through the node divided by the number of all-pairs shortest paths in the graph. The algorithm has O(nm) time complexity. |
| [biconnected_components](cpp/biconnected_components_module/biconnected_components_module.cpp)      | C++    | Algorithm for calculating maximal biconnected subgraph. A biconnected subgraph is a subgraph with a property that if any vertex were to be removed, the graph will remain connected.                                              |
| [bipartite_matching](cpp/bipartite_matching_module/bipartite_matching_module.cpp)                  | C++    | Algorithm for calculating maximum bipartite matching, where matching is a set of nodes chosen in such a way that no two edges share an endpoint.                                                                                  |
| [bridges](cpp/bridges_module/bridges_module.cpp)                                                   | C++    | A bridge is an edge, which when deleted, increases the number of connected components. The goal of this algorithm is to detect edges that are bridges in a graph.                                                                 |
| [community_detection_online](cpp/community_detection_module/community_detection_online_module.cpp) | C++    | A dynamic community detection algorithm suitable for large-scale graphs based upon label propagation. Runs in O(m) time and has O(mn) space complexity.                                                                           |
| [cycles](cpp/cycles_module/cycles_module.cpp)                                                      | C++    | Algorithm for detecting cycles on graphs                                                                                                                                                                                          |
| [distance_calculator](python/distance_calculator.py)                                               | Python | Module for finding the geographical distance between two points defined with 'lng' and 'lat' coordinates.                                                                                                                         |
| [graph_analyzer](python/graph_analyzer.py)                                                         | Python | This Graph Analyzer query module offers insights about the stored graph or a subgraph.                                                                                                                                            |
| [graph_coloring](python/graph_coloring.py)                                                         | Python | Algorithm for assigning labels to the graph elements subject to certain constraints. In this form, it is a way of coloring the graph vertices such that no two adjacent vertices are of the same color.                           |
| [node2vec](python/node2vec.py)                                                                     | Python | An algorithm for calculating node embeddings on static graph.                                                                                                                                                                     |
| [node2vec_online](python/node2vec_online.py)                                                       | Python | An algorithm for calculating node embeddings as new edges arrive                                                                                                                                                                  |
| [node_similarity](python/node_similarity.py)                                                       | Python | A module that contains similarity measures for calculating the similarity between two nodes.                                                                                                                                      |
| [nxalg](python/nxalg.py)                                                                           | Python | A module that provides NetworkX integration with Memgraph and implements many NetworkX algorithms                                                                                                                                 |
| [pagerank](cpp/pagerank_module/pagerank_module.cpp)                                                | C++    | Algorithm that yields the influence measurement based on the recursive information about the connected nodes influence                                                                                                            |
| [pagerank_online](cpp/pagerank_module/pagerank_online_module.cpp)                                  | C++    | A dynamic algorithm made for calculating PageRank in a graph streaming scenario.                                                                                                                                                  |
| [rust_example](cpp/pagerank_module/pagerank_online_module.cpp)                                     | Rust   | Example of a basic module with input parameters forwarding, made in Rust.                                                                                                                                                         |
| [set_cover](python/set_cover.py)                                                                   | Python | The algorithm for finding minimum cost subcollection of sets that covers all elements of a universe.                                                                                                                              |
| [tsp](python/tsp.py)                                                                               | Python | An algorithm for finding the shortest possible route that visits each vertex exactly once.                                                                                                                                        |
| [union_find](python/union_find.py)                                                                 | Python | A module with an algorithm that enables the user to check whether the given nodes belong to the same connected component.                                                                                                         |
| [uuid_generator](cpp/uuid_module/uuid_module.cpp)                                                  | C++    | A module that generates a new universally unique identifier (UUID).                                                                                                                                                               |
| [vrp](python/vrp.py)                                                                               | Python | Algorithm for finding the shortest route possible between the central depot and places to be visited. The algorithm can be solved with multiple vehicles that represent a visiting fleet.                                         |
| [weakly_connected_components](cpp/connectivity_module/connectivity_module.cpp)                     | C++    | A module that finds weakly connected components in a graph.                                                                                                                                                                       |
