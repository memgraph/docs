---
id: katz-centrality-algorithm
title: Katz Centrality
sidebar_label: Katz Centrality
---

## Description

**Katz Centrality** is one in a row methods to estimate centrality on graph entity. 
As any other centrality measurement, this one also outputs the measurement of how
central is the node compared to the other nodes in the graph. The main difference
in the **Katz Centrality** when compared to the other centrality measurements is the
fact that ranking of this method depends on the decay factor related to the length 
of paths emerging from the node `i`. Walks of shorter length are valued at an 
exponentially higher value than longer paths. 

Some applications of real-life usage of **Katz Centrality** include the analysis of 
citation network, social network or world wide web for searching engine prioritization.
**Katz Centrality** doesn't offer the substitution for any centrality algorithm, but
rather a different approach. Depending on the use-case, user should determine whether
that is the right measurement for him.  

<img src="https://i.imgur.com/MnoO7bp.png" alt="drawing" width="600"/>

> Example of Katz Centrality - the warmer colors represent the higher values of centrality.
> It's visible that the nodes with higher centrality have large number of close connections. 

## Materials

### Implementation

[![Katz Centrality](https://img.shields.io/badge/Katz_Centrality-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](https://github.com/memgraph/mage/blob/main/cpp/katz_centrality_module/katz_centrality_module.cpp)

[![Katz Centrality](https://img.shields.io/badge/Katz_Centrality-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/cpp/katz-centrality)

**Katz Centrality** is implemented as part of the
[**MAGE**](https://github.com/memgraph/mage) project. Be sure to check it out in
the link above. :point_up:

### Blog posts
# TODO (jmatak)
[![Katz Centrality](https://img.shields.io/badge/TODO-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white)](#TODO)

>

## Use cases

[![Internet](https://img.shields.io/badge/Internet-Application-8A477F?style=for-the-badge)](/use-cases/telecommunication.md)

Like other centrality measurements, Katz Centrality can be used to rank the elements on the World Wide Web. The results wouldn't
be as refined as the ones obtained with PageRank. 


[![Pharmaceutical](https://img.shields.io/badge/Pharmaceutical-Application-8A477F?style=for-the-badge)](/use-cases/drug-discovery.md)

Because of its properties of putting emphasis on closer nodes, Katz centrality can be used in neuroscience for discovery of correlation 
between firing neurons. Identification of such processes can help in understanding the complexity behind these non-trivial mechanisms.
