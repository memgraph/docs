---
id: betweenness-centrality-algorithm
title: Betweenness Centrality
sidebar_label: Betweenness Centrality
---

## Description

Centrality analysis provides information about the node’s importance for an information flow or connectivity of the network. [Betweenness centrality](https://en.wikipedia.org/wiki/Betweenness_centrality) is one of the most used centrality metrics. Betweenness centrality measures the extent to which a node lies on paths between other nodes in the graph. Thus, nodes with high **betweenness** may have considerable influence within a network under their control over information passing between others. The calculation of betweenness centrality is not standardized, and there are many ways to solve it.

It is defined as the **number of shortest paths** in the graph that passes through the node divided by the total number of shortest paths. The implemented algorithm is described in the paper "[A Faster Algorithm for Betweenness Centrality](http://snap.stanford.edu/class/cs224w-readings/brandes01centrality.pdf)" by Ulrik Brandes of [University of Konstanz](https://www.uni-konstanz.de/en/).
It is defined as the **number of shortest paths** in the graph that passes through the node divided by the total number of shortest paths. The implemented algorithm is described in the paper "[A Faster Algorithm for Betweenness Centrality](http://snap.stanford.edu/class/cs224w-readings/brandes01centrality.pdf)" by Ulrik Brandes of [University of Konstanz](https://www.uni-konstanz.de/en/).

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Graph_betweenness.svg/1200px-Graph_betweenness.svg.png" alt="drawing" width="500"/>

> Colder colors denote the higher betweenness centrality measure. Photo from [Wikipedia](https://en.wikipedia.org/wiki/Betweenness_centrality)

## Materials

### Implementation

[![Betweenness Centrality](https://img.shields.io/badge/Betweenness_Centrality-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](/mage/query-modules/cpp/betweenness-centrality)

[![Betweenness Centrality](https://img.shields.io/badge/Betweenness_Centrality-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/cpp/betweenness-centrality)

Betweenness Centrality is implemented within project [**MAGE**](https://github.com/memgraph/mage). Be sure to check it out in the link above. :point_up:

### Blog posts

[![Betweenness Centrality](https://img.shields.io/badge/Identifying_Essential_Proteins_using_Betweenness_Centrality-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white)](https://memgraph.com/blog/identifying-essential-proteins)

> _In recent years, researchers have proved that essential proteins often have a correlation with disease genes. Therefore, the identification of essential > proteins is the foundation for disease diagnosis and treatment. Drug design methods heavily rely on detecting essential proteins to find drug targets._

### Playground

[![Betweenness Centrality](https://img.shields.io/badge/MAGE_introduction-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKOSURBVFiFtdexaxVBEAbw35mXBxoQMa2FRdAUKZJSSGNjpWChqIUoiJg6nUnhQ0T0DxBs7LUwRMEIKqigBmIgVqJWFglRlPRCcC1uI+e9y8vtJQ4svDezO/Ptt7szc0IImgwMYyGO4aZ+dmkgWZYN4yWexfEy6tKl4c5X0SnoOlHXxQSGcAOTGOiybzd4LxBo4xseYwbfcboRgF7BNwOB85gv2I/hB/YmAagTvALECBZxtmSfwdVUAO9wM4GtafzCR7RKtoe4nQrgLR5hPAHEfvTF3y2cxXy8E4dSAQxiCstYwlgCkL7IxGK8E+0tL2E883dx54MFfQt3MJfIxC+MVNm7ElEhybzCT1zZsIUQ1vEBe8rrNpMQwhqu43llsup12zEeaW/F/218wcm6DFS8jn+SVXnSE1wr6ZYi7Zdj8KepwXuBKJ7Tvk0WjWEuHknyzrcCAYexopQi/+cogiAvp7WTzA6CuIGFjVfwu+6t/h9SO8/v4O7PyI/98IZix0DgOF5gFqObzDmIA39fwU6BkL+Wz5jAXSyV7Nfw4B9daUJjEHHnn8VcL0/by2IBUycRlUBMJwJ4gYmSbkreDd2qCl4JIC4ckReQ/QkAZiPtrYJuEK/jqOycy07a8pK5KC+hfQkARuVpeznufLDWuoKDIXmzMC9vHjYK0K5EJsYj7a/rzC+W44tYCCEcCSHcDyGsZ1m2O16slSzLprsySIWEEN5E9mpJq/B7Desl+zl8xQn5x0d/CKHTy2GWZR1cwNFaCArUDcj79mMF3XuxSGnQlifdgejgVAQxK29CV9Ff8US7QDQJXvkMIxOT8mo1VGFP+jTbamTRQZIU+sZ7UXUJR0MIn5KdpSIuMbHtz/M/1FmUO4eoWSUAAAAASUVORK5CYII=&logoColor=white)](https://playground.memgraph.com/lesson/game-of-thrones-deaths-introductions-3-mage)


## Use cases

[![Social networks](https://img.shields.io/badge/Social_networks-Application-8A477F?style=for-the-badge)](/mage/applications/social-media-application)

The metric of **betweenness centrality** can be used on a **macro** and **micro** scale in social networks. On a macro scale, a high measure will indicate the position of power (due to the large flow of information). On the other hand, on a micro-scale, a high measure represents the strength of a relationship with a narrow circle of friends.

[![Bioinformatics](https://img.shields.io/badge/Bioinformatics-Application-8A477F?style=for-the-badge)](/mage/applications/bioinformatics)

To get a better insight into how proteins interact with each other, [**protein-protein interaction network**](https://www.ebi.ac.uk/training/online/courses/network-analysis-of-protein-interaction-data-an-introduction/protein-protein-interaction-networks/) was created. Betweenness centrality (and other centrality measurements) can determine the strength of the fact that particular proteins are essential.


[![Transportation](https://img.shields.io/badge/Transportation-Application-8A477F?style=for-the-badge)](/mage/applications/transportation)

Maybe the most important usage of this algorithm is **transportation**. In an [complex and urban transportation network](https://www.hindawi.com/journals/jat/2019/9024745/), centrality measurement can reveal the main bottlenecks and congestions within the system. Such can help to organize the infrastructure of a big city, as well as the amount spent in optimizing such routes.
