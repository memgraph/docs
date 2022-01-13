---
id: pagerank-algorithm
title: PageRank
sidebar_label: PageRank
---

## Description

In the domain of centrality measurements,
[**PageRank**](https://en.wikipedia.org/wiki/PageRank) is arguably the most
popular tool. Today, the most popular search engine in the world,
[**Google**](https://en.wikipedia.org/wiki/Google#Early_years), owes its
popularity solely to this algorithm, developed in the early days by its
founders.

If we present nodes as pages and directed edges between them as links, the
**PageRank** algorithm outputs a probability distribution used to represent the
likelihood that a person randomly clicking on links will arrive at any
particular page.

PageRank can be used as a measure of influence that can be used on a variety of
applications, not just on website rankings. A popular type of PageRank is
[Personalized PageRank](https://dl.acm.org/doi/10.1145/2488388.2488433), which
is extremely useful in recommendation systems.

<img src="https://i.imgur.com/VnqqFAy.png" alt="drawing" width="600"/>

> PageRank on a simple network. The biggest vertex points to an adjacent vertex
> and therefore making it more important.

## Materials

### Implementation

[![PageRank](https://img.shields.io/badge/PageRank-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](https://github.com/memgraph/mage/blob/main/cpp/pagerank_module/pagerank_module.cpp)

[![PageRank](https://img.shields.io/badge/PageRank-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/cpp/pagerank)

**PageRank** is implemented as part of the
[**MAGE**](https://github.com/memgraph/mage) project. Be sure to check it out in
the link above. :point_up:

### Blog posts

[![PageRank](https://img.shields.io/badge/Influencers_among_computer_scientists-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white)](https://memgraph.com/blog/influencers-among-computer-scientists)

> _There is no better source to determine who the most influential computer
> scientists are than looking into DBLP - computer science bibliography. It is a
> website that collects and hosts the largest amount of articles published by
> various computer scientists in different fields of expertise. There you can
> find an awesome dataset that contains information about paper citations. This
> dataset will be used to process the information about who is citing whom from
> 2018 till now._

## Use cases

[![Internet](https://img.shields.io/badge/Internet-Application-8A477F?style=for-the-badge)](/use-cases/telecommunication.md)

The most interesting and famous application of PageRank is certainly the one on
Google, where it enables the ranking of search results. Such a graph is based on
whether there exist links between pages.

[![Social
Network](https://img.shields.io/badge/Social_Network-Application-8A477F?style=for-the-badge)](/use-cases/social-media.md)

As mentioned, Twitter uses PageRank to recommend who to follow online. Such an
application is based on a derivative of PageRank called Personalized PageRank.
The starting point is the node for which a recommendation needs to be found,
while then slightly different calculation techniques are used.

[![Pharmaceutical](https://img.shields.io/badge/Pharmaceutical-Application-8A477F?style=for-the-badge)](/use-cases/drug-discovery.md)

By developing knowledge graphs, it is possible to display all acquired knowledge
in an application such as drug discovery. The application of PageRank on such
examples can lead to influential entities and conclusions to which many
researchers lead, which especially plays a role when new information enters the
system.
