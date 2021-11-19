---
id: pagerank-online-algorithm
title: Dynamic PageRank
sidebar_label: Dynamic PageRank
---

## Description

In the domain of estimating the importance of graph nodes, [**PageRank**](https://en.wikipedia.org/wiki/PageRank) is arguably the most popular tool. Today, the most popular search engine in the world, [**Google**](https://en.wikipedia.org/wiki/Google#Early_years), owes its popularity solely to this algorithm, developed in the early days by its founders.

If we present nodes as pages and directed edges between them as links the **PageRank** algorithm outputs a probability distribution used to represent the likelihood that a person randomly clicking on links will arrive at any particular page.

The need for its **dynamic implementation** arose at the moment when nodes and edges arrive in a short period of time. A large number of changes would result in either inconsistent information upon arrival, or restarting the algorithm over the entire graph each time the graph changes. Since such changes occur frequently, dynamic implementation allows the previously processed state to be preserved, and new changes are updated in such a way that only the neighborhood of the arriving entity is processed at a constant time. This saves time and allows us to have updated and accurate information about the new values of the **PageRank**.

// Photo of local changes

There are also some disadvantages of this approach, and that is that such an approach does not guarantee an explicitly correct solution but its **approximation**. Such a trade-off is common in computer science, but allows fast execution and guarantees that at a **large scale** such an approximation approaches the correct result.


Valuable work explaining how to quickly calculate these values was developed by [**Bahmani et. al.**](https://scholar.google.com/citations?user=v-hyE4MAAAAJ&hl=en), engineers from [Stanford](http://snap.stanford.edu/) and [Twitter](https://twitter.com/home?lang=en). The paper is worth reading at: [Fast Incremental and Personalized PageRank](http://snap.stanford.edu/class/cs224w-readings/bahmani10pagerank.pdf) :book:

## Materials

### Implementation

[![Dynamic Pagerank](https://img.shields.io/badge/Dynamic_Pagerank-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](/mage/query-modules/python/node-similarity)

[![Dynamic Pagerank](https://img.shields.io/badge/Dynamic_Pagerank-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/python/node-similarity)

Dynamic PageRank is implemented within project [**MAGE**](https://github.com/memgraph/mage). Be sure to check it out in the link above. :point_up:

## Use cases

Although pagerank can be used in a variety of ways, the need for its dynamic implementation lies in systems that use **temporal graphs**.

[![Social networks](https://img.shields.io/badge/Social_networks-Application-8A477F?style=for-the-badge)](/mage/query-modules/python/node-similarity)

One of the most dynamic environments is definitely social networks. Every moment, events arrive that contain the creation of new users, posts, messages, and the graph itself grows at an enormous rate. Therefore, the need for an incremental measure of influence is high in companies such as: [Meta](https://about.facebook.com/meta/), [Twitter](https://twitter.com/home) or [Pinterest](https://www.pinterest.com/).

[![Internet Network](https://img.shields.io/badge/Internet_Network-Application-8A477F?style=for-the-badge)](/mage/query-modules/python/node-similarity)

Importance analysis can be highlighted as crucial at the moment when internet traffic is analyzed. If we have some kind of internal, supervised system, PageRank can find out in which nodes the most information flows, and where to place the most important elements of the system resistant to large amounts of traffic.
