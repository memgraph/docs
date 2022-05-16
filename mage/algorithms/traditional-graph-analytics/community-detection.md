---
id: community-detection-algorithm
title: Community Detection
sidebar_label: Community Detection
---

## Description

The notion of community in a graph represents similarly to what it represents in
the real world. Different social circles are examples of such communities.
Analogously, in graphs, **community** represents a partition of a graph, ie a
set of nodes. [M.
Girvan](https://scholar.google.com/citations?user=npKBI-oAAAAJ&hl=en) and [M. E.
J. Newman](http://www-personal.umich.edu/~mejn/) argue that nodes are more
strongly connected within a community, i.e. there are more edges, while on the
other hand, nodes are sparsely connected between communities themselves.

<img src="https://i.imgur.com/1kNLj8B.png" alt="drawing"/>

> Community detection labels each node with a community label. Here, labels are
> colored in different colors.

There are more potential candidates to address community detection. Among the
more popular algorithms are:
1. [Louvain community detection](https://en.wikipedia.org/wiki/Louvain_method) -
   based on modularity optimization - measures network connectivity within a
   community
2. [Leiden community
   detection](https://www.nature.com/articles/s41598-019-41695-z) - adjustment
   of Louvain's algorithm that introduces one level of refinement and brings
   together strongly connected communities
3. [Label
   propagation](https://en.wikipedia.org/wiki/Label_propagation_algorithm) - a
   machine learning technique that assigns labels to unmarked nodes and modifies
   them with respect to neighbors

## Materials

### Implementation

[![Community Detection](https://img.shields.io/badge/Community_Detection-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](https://github.com/memgraph/mage/blob/main/cpp/community_detection_module/community_detection_module.cpp)

[![Community Detection](https://img.shields.io/badge/Community_Detection-Implementation-76B900?style=for-the-badge&logo=NVIDIA&logoColor=white)](https://github.com/memgraph/mage/blob/main/cpp/cugraph_module/algorithms/louvain.cu)

[![Community Detection](https://img.shields.io/badge/Community_Detection-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/cpp/community-detection)

Community Detection is implemented as part of the
[**MAGE**](https://github.com/memgraph/mage) project. Be sure to check it out in
the link above. :point_up:

## Use cases

[![Finance](https://img.shields.io/badge/Finance-Application-8A477F?style=for-the-badge)](/use-cases/finance.md)

One obvious usage of community detection is within the finance industry.
Fraudsters often think alike and act in criminal rings. That enables them to be
more efficient. However, such rings can easily be discovered with community
methods from their interactions/shared resources.

[![Social
networks](https://img.shields.io/badge/Social_networks-Application-8A477F?style=for-the-badge)](/use-cases/social-media.md)

One major threat to freedom are terrorist groups. Such groups can organize their
activities through social media  channels. Once one of the users is exposed as a
potential threat, others can be revealed by analyzing their community on social
networks.

Interests are usually shared within the community. To target a specific
audience, community detection can be used to recommend certain products among
users that are sharing interests.

[![Retail](https://img.shields.io/badge/Retail-Application-8A477F?style=for-the-badge)](/use-cases/social-media.md)

As stated above in the social networks application. Similar can be applied to
the retail industry. Targetting like-minded people to access the same products
is the crucial thing in marketing.
