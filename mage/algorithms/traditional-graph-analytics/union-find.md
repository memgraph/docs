---
id: union-find-algorithm
title: Union Find
sidebar_label: Union Find
---

## Description

This is yet another important graph analytics algorithm. By using a [**disjoint-set**](https://en.wikipedia.org/wiki/Disjoint-set_data_structure) - a data structure that keeps track of non-overlapping sets, the algorithm enables the user to quickly check whether a pair of given nodes is in the same or different **connected component**. The benefit of having this structure is that a check on a pair of nodes is effectively executed in O(1) time.

The implementation of the disjoint-set data structure and its operations uses the union by rank and path splitting optimizations described in "Worst-case Analysis of Set Union Algorithms", developed by [Robert Tarjan](https://en.wikipedia.org/wiki/Robert_Tarjan) and [Jan van Leeuwen](https://en.wikipedia.org/wiki/Jan_van_Leeuwen).

<img src="https://i.imgur.com/R6BuXzs.png" alt="drawing"/>

> Structure of the disjoint set on the right side, and graph example on the left. When checking the components, algorithm only checks the shallow tree on left

## Materials

### Implementation

[![Union Find](https://img.shields.io/badge/Union_Find-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](https://github.com/memgraph/mage/blob/main/python/union_find.py)

[![Union Find](https://img.shields.io/badge/Union_Find-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/python/union-find)

**Union Find** is implemented within project [**MAGE**](https://github.com/memgraph/mage). Be sure to check it out in the link above. :point_up:

## Use cases

[![Social networks](https://img.shields.io/badge/Social_networks-Application-8A477F?style=for-the-badge)](/mage/applications/social-media-application)

Social graph is of enormous size. Searching through it and determining whether something is in a same component might take a lot of time. Organizing structure such is disjoint set, and using the union find algorithm, it is possible to determine this connectivity i a blink of an eye.

