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

Many today's real-world networks evolve over time at a great pace. Constant change of
information leads to the dynamic environment and creation of methods that can handle
large amount of data and provide quick results on updates. 

<img src="https://i.imgur.com/mTBJCul.png" alt="drawing"/>

> Visualization of the Katz centrality progression through time. Warmer colored nodes 
> represent the higher values for Katz centrality measurement.

Explanation of **Dynamic Katz Centrality** is presented in paper by 
[**Alexander van der Grinten et. al.**](https://dblp.org/pid/136/6023.html) and
[Twitter](https://twitter.com/home?lang=en). The paper is worth reading at 
[Scalable Katz Ranking Computation in Large Static and Dynamic Graphs](hhttps://arxiv.org/pdf/1807.03847.pdf)
:book:.

## Materials

### Implementation

[![Dynamic Katz Centrality](https://img.shields.io/badge/Dynamic_Katz_Centrality-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](https://github.com/memgraph/mage/blob/main/cpp/katz_centrality_module/katz_centrality_online_module.cpp)

[!Dynamic Katz Centrality](https://img.shields.io/badge/Dynamic_Katz_Centrality-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/cpp/katz-centrality-online)

**Dynamic Katz Centrality** is implemented as part of the [**MAGE**](https://github.com/memgraph/mage) project. Be sure 
to check it out in the link above. :point_up:

### Blog posts

[![Dynamic Katz Centrality](https://img.shields.io/badge/Dynamic_Katz_Centrality-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white)](#TODO)

> 

## Use cases

[![Social networks](https://img.shields.io/badge/Social_networks-Application-8A477F?style=for-the-badge)](/use-cases/social-media.md)

The best fit for dynamic Katz centrality is social network anaylsis. The importance and decay of walk propagation
is intuitively similar to the message propagation in social network. To work with the scale of today's social
networks like [Twitter](https://twitter.com/?lang=en) is, dynamic implementation is used. Katz centrality
gains similar level of precision in determining influence when compared to the human experts in field. 
