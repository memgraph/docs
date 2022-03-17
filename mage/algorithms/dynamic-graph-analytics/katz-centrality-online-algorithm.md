---
id: katz-centrality-online-algorithm
title: Dynamic Katz Centrality
sidebar_label: Dynamic Katz Centrality
---

## Description

Because of its simplicity, **Katz Centrality** has become one of the most established
centrality measurements. The definition of Katz centrality is that it presents 
the amount of influence by summing all walks starting from the node of interest
and weighting walks by some attenuation factor smaller than 1. 

Many today's real-world networks evolve over time at a great pace. Dynamic updates have
the 

<img src="https://i.imgur.com/mTBJCul.png" alt="drawing"/>

There are also some disadvantages of this approach, and that is that such an
approach does not guarantee an explicitly correct solution but its
**approximation**. Such a trade-off is common in computer science but allows
fast execution and guarantees that at a **large scale** such an approximation
approaches the correct result.

Valuable work explaining how to quickly calculate these values was developed by
[**Bahmani et.
al.**](https://scholar.google.com/citations?user=v-hyE4MAAAAJ&hl=en), engineers
from [Stanford](http://snap.stanford.edu/) and
[Twitter](https://twitter.com/home?lang=en). The paper is worth reading at [Fast
Incremental and Personalized
PageRank](http://snap.stanford.edu/class/cs224w-readings/bahmani10pagerank.pdf)
:book:.

## Materials

### Implementation

[![Dynamic Katz Centrality](https://img.shields.io/badge/Dynamic_Pagerank-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](https://github.com/memgraph/mage/blob/main/cpp/pagerank_module/pagerank_online_module.cpp)

[![Dynamic
Pagerank](https://img.shields.io/badge/Dynamic_Pagerank-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/cpp/pagerank-online)

**Dynamic PageRank** is implemented as part of the
[**MAGE**](https://github.com/memgraph/mage) project. Be sure to check it out in
the link above. :point_up:

### Blog posts

[![Dynamic
PageRank](https://img.shields.io/badge/Dynamic_Pagerank_on_Streaming_Data-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white)](https://memgraph.com/blog/dynamic-page-rank-on-streaming-data)

> _An obvious and trivial solution to the previous problem would be: whenever a
> new data point or connection comes into our platform, simply recalculate the
> influence measurement with the PageRank algorithm. This is very simple, and it
> works. However, the story changes over time when your business becomes more
> popular. You begin to have more work and therefore datapoints keep coming at a
> faster pace, accumulated data keeps rising in size and your algorithm fails to
> deliver valuable information efficiently._

[![It's the most wonderful time of the year - Dynamic PageRank and a Twitter
Network](https://img.shields.io/badge/Dynamic_PageRank_and_a_Twitter_Network-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white)](https://memgraph.com/blog/twitter-analysis-with-dynamic-pagerank)

> PageRank is the perfect tool with which we can find the most Christmassy
> person. The person that is going to win is the one that got retweeted by other
> Christmassy people. As data comes at high speed, fortunately, MAGE has
> upgraded the good old PageRank in its garage and prepared a dynamic version -
> Dynamic Pagerank.

## Use cases

Although PageRank can be used in a variety of ways, the need for its dynamic
implementation lies in systems that use **temporal graphs**.

[![Social
networks](https://img.shields.io/badge/Social_networks-Application-8A477F?style=for-the-badge)](/use-cases/social-media.md)

One of the most dynamic environments is definitely social networks. Every
moment, events arrive that contain the creation of new users, posts, messages,
and the graph itself grows at an enormous rate. Therefore, the need for an
incremental measure of influence is high in companies such as:
[Meta](https://about.facebook.com/meta/), [Twitter](https://twitter.com/home) or
[Pinterest](https://www.pinterest.com/).

[![Internet
Network](https://img.shields.io/badge/Internet_Network-Application-8A477F?style=for-the-badge)](/use-cases/telecommunication.md)

Importance analysis can be highlighted as crucial at the moment when internet
traffic is analyzed. If we have some kind of internal, supervised system,
PageRank can find out in which nodes the most information flows, and where to
place the most important elements of the system resistant to large amounts of
traffic.
