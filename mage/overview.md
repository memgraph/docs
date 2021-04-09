---
id: overview
title: MAGE - Memgraph Advanced Graph Extensions 
sidebar_label: Overview
slug: /
---

:::info
This page is under construction.
:::

This open-source repository contains all available query modules written by the team behind Memgraph and its users. You can find and contribute implementations of various algorithms in multiple programming languages, all runnable inside Memgraph. This project aims to give everyone the tools they need to tackle the most challenging graph problems. 

## MAGE Query modules & Procedures

Memgraph introduces the concept of **query modules**, user-defined procedures that extend the Cypher query language. These procedures are grouped into modules that can be loaded into Memgraph. You can find more information on query modules in the official [documentation](https://docs.memgraph.com/memgraph/database-functionalities/query-modules).

Query modules implemented in Python:
* [nxalg](https://github.com/memgraph/mage/blob/main/python/nxalg.py): A module that provides NetworkX integration with Memgraph and implements many NetworkX algorithms.  
* [graph_analyzer.py](https://github.com/memgraph/mage/blob/main/python/graph_analyzer.py): This Graph Analyzer query module offers insights about the stored graph or a subgraph.
* [distance_calculator.py](https://github.com/memgraph/mage/blob/main/python/distance_calculator.py): Module for finding the geographical distance between two points defined with 'lng' and 'lat' coordinates.
* [tsp.py](https://github.com/memgraph/mage/blob/main/python/tsp.py): An algorithm for finding the shortest possible route that visits each vertex exactly once.
* [set_cover.py](https://github.com/memgraph/mage/blob/main/python/set_cover.py): The algorithm for finding minimum cost subcollection of sets that covers all elements of a universe.
* [collapse.py](https://github.com/memgraph/mage/blob/main/python/collapse.py): Module for collapsing specifically connected graph nodes into different subgraphs.

Query modules implemented in C/C++:
* [connectivity_module.cpp](https://github.com/memgraph/mage/blob/main/cpp/connectivity_module/connectivity_module.cpp): A module that finds weakly connected components in a graph.