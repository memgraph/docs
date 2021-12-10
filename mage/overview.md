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

| Algorithms                                                                         | Lang   | Description                                                                                                                                                                                                                       |
| ---------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [nxalg](/mage/query-modules/python/nxalg)                                          | Python | A module that provides NetworkX integration with Memgraph and implements many NetworkX algorithms                                                                                                                                 |
| [graph_analyzer](/mage/query-modules/python/graph-analyzer)                        | Python | This Graph Analyzer query module offers insights about the stored graph or a subgraph.                                                                                                                                            |
| [distance_calculator](/mage/query-modules/python/distance-calculator)              | Python | Module for finding the geographical distance between two points defined with 'lng' and 'lat' coordinates.                                                                                                                         |
| [tsp](/mage/query-modules/python/tsp)                                              | Python | An algorithm for finding the shortest possible route that visits each vertex exactly once.                                                                                                                                        |
| [set_cover](/mage/query-modules/python/set-cover)                                  | Python | The algorithm for finding minimum cost subcollection of sets that covers all elements of a universe.                                                                                                                              |
| [graph_coloring](/mage/query-modules/python/graph-coloring)                        | Python | An algorithm for assigning labels to the graph elements subject to certain constraints. In this form, it is a way of coloring the graph vertices such that no two adjacent vertices are of the same color.                           |
| [vrp](/mage/query-modules/python/vrp)                                              | Python | An algorithm for finding the shortest route possible between the central depot and places to be visited. The algorithm can be solved with multiple vehicles that represent a visiting fleet.                                         |
| [union_find](/mage/query-modules/python/union-find)                                | Python | A module with an algorithm that enables the user to check whether the given nodes belong to the same connected component.                                                                                                         |
| [node_similartiy](/mage/query-modules/python/node-similarity)                      | Python | A module that contains similarity measures for calculating the similarity between two nodes.                                                                                                                                      |
| [node2vec](/mage/query-modules/python/node2vec)                                    | Python | An algorithm for calculating node embeddings from static graph using second order walk sampling.                                                                                                                                  |
| [node2vec_online](/mage/query-modules/python/node2vec-online)                      | Python | An algorithm for calculating node embeddings from a static graph using second-order walk sampling.                                                                                                                                |
| [weakly_connected_components](/mage/query-modules/cpp/weakly-connected-components) | C++    | A module that finds weakly connected components in a graph.                                                                                                                                                                       |
| [biconnected_components](/mage/query-modules/cpp/biconnected-components)           | C++    | An algorithm for calculating maximal biconnected subgraph. A biconnected subgraph is a subgraph with a property that if any vertex were to be removed, the graph will remain connected.                                              |
| [bipartite_matching](/mage/query-modules/cpp/bipartite-matching)                   | C++    | An algorithm for calculating maximum bipartite matching, where matching is a set of nodes chosen in such a way that no two edges share an endpoint.                                                                                  |
| [cycles](/mage/query-modules/cpp/cycles)                                           | C++    | An algorithm for detecting cycles on graphs               .                                                                                                                                                                           |
| [bridges](/mage/query-modules/cpp/bridges)                                         | C++    | A bridge is an edge, which when deleted, increases the number of connected components. The goal of this algorithm is to detect edges that are bridges in a graph.                                                                 |
| [betweenness centrality](/mage/query-modules/cpp/betweenness-centrality)           | C++    | The betweenness centrality of a node is defined as the sum of the of all-pairs shortest paths that pass through the node divided by the number of all-pairs shortest paths in the graph. The algorithm has O(nm) time complexity. |
| [community_detection_online](/mage/query-modules/cpp/community-detection-online)   | C++    | A dynamic community detection algorithm suitable for large-scale graphs based upon label propagation. Runs in *O(m)* time and has *O(mn)* space complexity.                                                                         |
| [pagerank](/mage/query-modules/cpp/pagerank)                                       | C++    | An algorithm for measuring the importance of each node within the graph, based on the number of incoming relationships and the importance of the corresponding source nodes.                                                            |
| [pagerank_online](/mage/query-modules/cpp/pagerank-online)                         | C++    | A streaming algorithm made for calculating PageRank in a graph streaming scenario.                                                                                                                                                |
| [uuid_generator](/mage/query-modules/cpp/uuid-generator)                           | C++    | A module that generates a new universally unique identifier (UUID).                                                                                                                                                               |
