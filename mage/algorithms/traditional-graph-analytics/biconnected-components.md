---
id: biconnected-components-algorithm
title: Biconnected Components
sidebar_label: Biconnected Components
---

## Description

[Biconnected components](https://en.wikipedia.org/wiki/Biconnected_component) are parts of the graph important in the initial analysis. Finding biconnected components means finding a maximal biconnected subgraph. Subgraph is biconnected if:

- It is possible to go from each node to another within a biconnected subgraph
- First scenario remains true even after removing any vertex in the subgraph

Problem was solved by [John Hopcroft](https://en.wikipedia.org/wiki/John_Hopcroft) and [Robert Tarjan](https://en.wikipedia.org/wiki/Robert_Tarjan) with linear time complexity. Depending on the use case, biconnected components may help to discover hidden structures within graph.

## Materials

### Implementation

[![Biconnected Components](https://img.shields.io/badge/Biconnected_components-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](/mage/query-modules/cpp/biconnected-components)

[![Biconnected Components](https://img.shields.io/badge/Biconnected_components-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/cpp/biconnected-components)

**Biconnected Components** is implemented within project [**MAGE**](https://github.com/memgraph/mage). Be sure to check it out in the link above. :point_up:

## Use cases

[![UNKNOWN](https://img.shields.io/badge/UNKNOWN-Application-8A477F?style=for-the-badge)](/mage/query-modules/python/node-similarity)
