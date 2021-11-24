---
id: union-find
title: Union Find
sidebar_label: Union Find
---

## Description

This is yet another important graph analytics algorithm. By using a [**disjoint-set**](https://en.wikipedia.org/wiki/Disjoint-set_data_structure) - data structure that keeps track of non-overlapping sets, the algorithm enables the user to quickly check whether a pair of given nodes is in the same or different **connected component**. Benefit of having this structure is that a check on a pair of nodes is effectively executed in O(1) time.

The implementation of the disjoint-set data structure and its operations uses the union by rank and path splitting optimizations described in "Worst-case Analysis of Set Union Algorithms", developed by [Robert Tarjan](https://en.wikipedia.org/wiki/Robert_Tarjan) and [Jan van Leeuwen](https://en.wikipedia.org/wiki/Jan_van_Leeuwen).

## Materials

### Implementation

[![Union Find](https://img.shields.io/badge/Union_Find-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](/mage/query-modules/cpp/union-find)

[![Union Find](https://img.shields.io/badge/Union_Find-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/cpp/union-find)

**Union Find** is implemented within project [**MAGE**](https://github.com/memgraph/mage). Be sure to check it out in the link above. :point_up:


### Blog posts

### Playground examples

## Use cases

[![UNKNOWN](https://img.shields.io/badge/UNKNOWN-Application-8A477F?style=for-the-badge)](/mage/query-modules/python/node-similarity)

