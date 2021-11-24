---
id: community-detection
title: Community Detection
sidebar_label: Community Detection
---

## Description

The notion of community in a graph represents similarly to what it represents in the real world. Different social circles are examples of such communities. Analogously, in graphs, **community** represents a partition of a graph, ie a set of nodes. [M. Girvan](https://scholar.google.com/citations?user=npKBI-oAAAAJ&hl=en) and [M. E. J. Newman](http://www-personal.umich.edu/~mejn/) argue that nodes are more strongly connected within a community, i.e. there are more edges, while on the other hand, nodes are sparsely connected between communities themselves.

There are more potential candidates to address community detection. Among the more popular algorithms are:
1. [Louvain community detection](https://en.wikipedia.org/wiki/Louvain_method) - based on modularity optimization - measures network connectivity within a community
2. [Leiden community detection](https://www.nature.com/articles/s41598-019-41695-z) - repair of Louvain's algorithm that introduces one level of refinement and brings together strongly connected communities
3. [Label propagation](https://en.wikipedia.org/wiki/Label_propagation_algorithm) - a machine learning technique that assigns labels to unmarked nodes and modifies them with respect to neighbors

## Materials

### Implementation

[![Community Detection](https://img.shields.io/badge/Not_implemented-EB3434?style=for-the-badge&logo=github&logoColor=white)](/mage/query-modules/cpp/community-detection)

Unfortunately, **Community Detection** is yet not implemented within project [**MAGE**](https://github.com/memgraph/mage). Be sure to raise the issue on GitHub repo and that way notice us to speed up the development. :point_up:


### Blog posts

### Playground examples

## Use cases

[![UNKNOWN](https://img.shields.io/badge/UNKNOWN-Application-8A477F?style=for-the-badge)](/mage/query-modules/python/node-similarity)

