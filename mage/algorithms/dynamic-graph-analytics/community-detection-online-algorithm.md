---
id: community-detection-online-algorithm
title: Dynamic Community Detection
sidebar_label: Dynamic Community Detection
---

## Description

In addressing the hidden relations among the nodes in the graph, especially 
those not connected directly, [community
detection](https://en.wikipedia.org/wiki/Community_structure) can be helpful.
This familiar graph analytics task has been solved with various methods.
However, demand for scale and speed has increased over the years and therefore
led to the construction of **dynamic community detection** algorithms. 
Community detection lends itself well to dynamic operation for two reasons:

- Locality: community changes tend to be local in scope after partial updates
- Complexity: algorithms often have high time complexity that scales with the
  number of nodes in the network

Academic research of temporal graphs yielded [LabelRankT: Incremental Community
Detection in Dynamic Networks via Label
Propagation](https://arxiv.org/abs/1305.2006) (Xie et al.).

<img src="https://i.imgur.com/NiQi7NW.png" alt="drawing"/>

> Illustration of how a dynamic community detection algorithm adapts to local
> changes

## Materials

### Implementation

[![Dynamic Community
Detection](https://img.shields.io/badge/Dynamic_Community_Detection-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](https://github.com/memgraph/mage/blob/main/cpp/community_detection_module/community_detection_online_module.cpp)

[![Dynamic Community
Detection](https://img.shields.io/badge/Dynamic_Community_Detection-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/cpp/community-detection-online)

**Dynamic Community Detection** is implemented as part of the 
[**MAGE**](https://github.com/memgraph/mage) project. Be sure to check it out at the
above link. :point_up:

### Blog posts

[![Dynamic Community
Detection](https://img.shields.io/badge/LabelRankT_–_Community_Detection_in_Dynamic_Environment-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white)](https://memgraph.com/blog/labelrankt-community-detection-in-dynamic-environment)

> _If you’re doing graph analytics, the chances are that you have run community
> detection on the dataset. Algorithms take more time to run on large graphs,
> and handling the volume of work that comes along with a large and frequently
> updated dataset is an engineering problem. It makes sense to wonder if it’s
> possible to leverage the small size of an average update to deliver a
> performance boost. We at Memgraph recognize your challenges. In this article,
> you will learn about the merits of online community detection methods and get
> acquainted with the LabelRankT algorithm by Xie et al., now available in MAGE
> 1.1._

[![Monitoring a Dynamic Contact Network with Online Community Detection
](https://img.shields.io/badge/Monitoring_a_Dynamic_Contact_Network_with_Online_Community_Detection-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white)](https://memgraph.com/blog/monitoring-dynamic-contact-network-with-online-community-detection)

> As MAGE wants to use his knowledge to help people, in this tutorial you will
> learn with him how to build a utility that monitors a dynamic contact network.
> The utility will a) use the detected communities to show rumor-spreading
> clusters and b) track the average cluster size.

## Use cases

Graphs that describe real-life networks often contain community structures. This
insight applies to use cases such as customer segmentation, contact tracing,
medical diagnostics, and quantification of environmental hazards in public
health.

[![Medical](https://img.shields.io/badge/Medical-Application-8A477F?style=for-the-badge)](/use-cases/drug-discovery.md)

Tracking the evolution of communities across time provides a way to monitor
entities such as viruses or rumors in real-time as they spread. With the
COVID-19 pandemic being a top global concern, this problem is in search of a
solution. One way to tackle it would be to pinpoint the main transmission focal
points by using dynamic community detection.

[![Retail](https://img.shields.io/badge/Retail-Application-8A477F?style=for-the-badge)](/use-cases/retail.md)

With new items being sold every day, using dynamic community detection one can
quickly follow the trends as they form and submit recommendations based on 
trends within a community. This approach enables the vendor to adapt more
flexibly to unexpected events.
