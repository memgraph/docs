---
id: community-detection-algorithm
title: Community Detection
sidebar_label: Community Detection
---

## Description

The notion of community in a graph is analogous to the real-world notion of 
community. Social circles are an example that is easy to see both on graphs and
in the real world.
A graph **community** can be defined as a partition of a graph, i.e. a
set of nodes. [M.
Girvan](https://scholar.google.com/citations?user=npKBI-oAAAAJ&hl=en) and 
[M. E. J. Newman](http://www-personal.umich.edu/~mejn/) argue that within a 
community, nodes are more strongly connected (more edges) to one another than
to nodes in different communities.

<img src="https://i.imgur.com/1kNLj8B.png" alt="drawing"/>

> Community detection assigns each node to a community. In this graph, each
> community's nodes are labelled with a distinct color.

There are several approaches to community detection. Among the most common
algorithms there are:
* [Louvain community detection](https://en.wikipedia.org/wiki/Louvain_method) -
  based on modularity optimization; measures network connectivity within a
  community,
* [Leiden community
  detection](https://www.nature.com/articles/s41598-019-41695-z) - adjustment
  of the Louvain algorithm that introduces one level of refinement and brings
  together strongly connected communities,
* [Label
  propagation](https://en.wikipedia.org/wiki/Label_propagation_algorithm) - a
  machine learning technique that assigns labels to unmarked nodes and modifies 
  them with respect to neighbors.

## Materials

### Implementation

[![Community
Detection](https://img.shields.io/badge/Community_Detection-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](https://github.com/memgraph/mage/blob/main/cpp/community_detection_module/community_detection_module.cpp)

[![Community
Detection](https://img.shields.io/badge/Community_Detection-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/cpp/community-detection)

**Dynamic Community Detection** with the Louvain algorithm is implemented as part 
of the [**MAGE**](https://github.com/memgraph/mage) project. Be sure to check it
out at the above link. :point_up:

## Use cases

[![Finance](https://img.shields.io/badge/Finance-Application-8A477F?style=for-the-badge)](/use-cases/finance.md)

A natural usage of community detection is in the finance industry.
Fraudsters often think alike, and act in criminal *rings*, which enables them to 
be more efficient. However, such rings can easily be discovered with community
detection methods from their interactions and shared traits/resources.

[![Social
networks](https://img.shields.io/badge/Social_networks-Application-8A477F?style=for-the-badge)](/use-cases/social-media.md)

One major threat to freedom are terrorist groups. Such groups can organize their
activities through social media channels. Once one of the users is exposed as a
potential threat, others can be revealed by analyzing their community on social
networks.

Interests are usually shared within the community. To target a specific
audience, community detection can be used to recommend certain products among
users that are sharing interests.

[![Retail](https://img.shields.io/badge/Retail-Application-8A477F?style=for-the-badge)](/use-cases/social-media.md)

The methods stated above under **Social networks application** can be applied in
the retail industry. Targeting a product lineup to like-minded consumers has been
crucial in retail marketing.
