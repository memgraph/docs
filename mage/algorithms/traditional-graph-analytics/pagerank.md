---
id: pagerank-algorithm
title: PageRank
sidebar_label: PageRank
---

## Description

In the domain of centrality measurements, [**PageRank**](https://en.wikipedia.org/wiki/PageRank) is arguably the most popular tool. Today, the most popular search engine in the world, [**Google**](https://en.wikipedia.org/wiki/Google#Early_years), owes its popularity solely to this algorithm, developed in the early days by its founders.

If we present nodes as pages and directed edges between them as links the **PageRank** algorithm outputs a probability distribution used to represent the likelihood that a person randomly clicking on links will arrive at any particular page.

PageRank can be used as a measure of influence that can be used on a variety of applications, not just on website rankings. A popular type of PageRank is [Personalized PageRank](https://dl.acm.org/doi/10.1145/2488388.2488433), which is extremely useful in recommendation systems.

<img src="https://i.imgur.com/VnqqFAy.png" alt="drawing" width="600"/>

> PageRank on a simple network. The biggest vertex points to adjacent vertex and therefore making it more important.
## Materials

### Implementation

[![PageRank](https://img.shields.io/badge/PageRank-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](/mage/query-modules/cpp/pagerank)

[![PageRank](https://img.shields.io/badge/PageRank-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/cpp/pagerank)

**PageRank** is implemented within project [**MAGE**](https://github.com/memgraph/mage). Be sure to check it out in the link above. :point_up:


### Blog posts
[![PageRank](https://img.shields.io/badge/Influencers_among_computer_scientists-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](https://memgraph.com/blog/influencers-among-computer-scientists)

### Playground examples

## Use cases

[![Internet](https://img.shields.io/badge/Internet-Application-8A477F?style=for-the-badge)](/mage/query-modules/python/node-similarity)

The most interesting and famous application of PageRank is certainly the one on the Google where it enables the ranking of search results. Such a graph is based on whether there exist links between pages.

[![Social Network](https://img.shields.io/badge/Social_Network-Application-8A477F?style=for-the-badge)](/mage/query-modules/python/node-similarity)

As mentioned, Twitter uses PageRank to recommend to users who to follow online. Such an application is based on a derivative of PageRank called Personalized PageRank. The starting point is the node for which a recommendation needs to be found, while then slightly different calculation techniques are used.

[![Pharmaceutical](https://img.shields.io/badge/Pharmaceutical-Application-8A477F?style=for-the-badge)](/mage/query-modules/python/node-similarity)

By developing knowledge graphs, it is possible to display all acquired knowledge in an application such as drug discovery. The application of PageRnak on such examples can lead to influential entities and conclusions to which many researches lead, which especially plays a role when new information enters the system.
