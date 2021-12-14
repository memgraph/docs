---
id: bipartite-matching-algorithm
title: Bipartite Matching
sidebar_label: Bipartite Matching
---

## Description

A bipartite graph is a graph in which we can divide vertices into **two
independent sets**, such that every edge connects vertices between these sets.
No connection can be established within the set.

Matching in bipartite graphs ([**bipartite
matching**](https://www.geeksforgeeks.org/maximum-bipartite-matching)) is
described as a set of edges that are picked in a way to **not share an
endpoint**. Furthermore, maximum matching is such matching of maximum
cardinality of the chosen edge set. The algorithm runs in **O(|V|\*|E|)** time,
where V represents a set of nodes and E represents a set of edges.

This little tool can become extremely handful when calculating assignments
between entities. Assigning stuff between two sets of entities is done in a
large number of industries, and therefore having a method to find it can make
the developing process easier.

<img src="https://i.imgur.com/eoBab7K.png" alt="drawing"/>

> Example of maximum matching between two sets of nodes in the bipartite graph

## Materials

### Implementation

[![Bipartite
Matching](https://img.shields.io/badge/Bipartite_Matching-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](https://github.com/memgraph/mage/blob/main/cpp/bipartite_matching_module/bipartite_matching_module.cpp)

[![Bipartite
Matching](https://img.shields.io/badge/Bipartite_Matching-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/cpp/bipartite-matching)

**Bipartite matching** is implemented as part of the
[**MAGE**](https://github.com/memgraph/mage) project. Be sure to check it out in
the link above. :point_up:

## Use cases

[![Transportation](https://img.shields.io/badge/Transportation-Application-8A477F?style=for-the-badge)](/mage/applications/transportation-application)

To optimize transportation in nowadays successful and widely used applications
like [Uber](https://www.uber.com/), [Lyft](https://www.lyft.com/) or
[Bolt](https://bolt.eu/en/), a crucial moment is assigning drivers with
potential passengers. To minimize the overall waiting time, the process
calculates that assignment by finding optimal matching with a bipartite graph.
