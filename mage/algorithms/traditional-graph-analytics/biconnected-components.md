---
id: biconnected-components-algorithm
title: Biconnected Components
sidebar_label: Biconnected Components
---

## Description

[Biconnected components](https://en.wikipedia.org/wiki/Biconnected_component) are parts of the graph important in the initial analysis. Finding biconnected components means finding a maximal biconnected subgraph. Subgraph is biconnected if:

- It is possible to go from each node to another within a biconnected subgraph
- First scenario remains true even after removing any vertex in the subgraph

The problem was solved by [John Hopcroft](https://en.wikipedia.org/wiki/John_Hopcroft) and [Robert Tarjan](https://en.wikipedia.org/wiki/Robert_Tarjan) with linear time complexity. Depending on the use case, biconnected components may help to discover hidden structures within the graph.

<img src="https://i.imgur.com/61QH06Y.png" alt="drawing" width="600"/>

> Different colors are different components. Multi-colored vertices are articulation points.

## Materials

### Implementation

[![Biconnected Components](https://img.shields.io/badge/Biconnected_components-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](https://github.com/memgraph/mage/blob/main/cpp/biconnected_components_module/biconnected_components_module.cpp)

[![Biconnected Components](https://img.shields.io/badge/Biconnected_components-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/cpp/biconnected-components)

**Biconnected Components** is implemented within project [**MAGE**](https://github.com/memgraph/mage). Be sure to check it out in the link above. :point_up:

## Use cases

Biconnected components detection is a base for many graph analytics algorithms. Therefore, it is rarely used alone. However, there are particular niche use cases where finding biconnected components might come in handy mostly because of the articulation points revealing.

[![Transportation](https://img.shields.io/badge/Transportation-Application-8A477F?style=for-the-badge)](/mage/applications/transportation-application)

Organizing the road infrastructure can be a painful task for any engineer. Finding biconnected components in the transportation network can help to reveal different zones in an urban area. Furthermore, the goal would be enlarging such zones and having as few articulation points as possible, since these are the places where there is the highest possibility of traffic congestion.
