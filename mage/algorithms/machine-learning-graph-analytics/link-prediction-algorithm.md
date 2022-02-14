---
id: link-prediction-algorithm
title: Link Prediction
sidebar_label: Link Prediction
---

## Description

[Link prediction](https://www.sciencedirect.com/topics/computer-science/link-prediction) is the process of predicting the probability of connecting the two nodes that were not previously connected in a graph. A wide range of different solutions can be applied to such a problem.

The problem is of great importance in recommendation systems, co-authorship prediction, drug discovery, and many, many more.

Solving methods range from traditional to machine learning-based. Traditional methods are mostly based either on neighborhood similarity. A link between two nodes is more likely to exist if there are many common neighbors. These are:
1. [Jaccard similarity](https://en.wikipedia.org/wiki/Jaccard_index)
2. [Overlap similarity](https://en.wikipedia.org/wiki/Overlap_coefficient)
3. [Adamic-Adar index](https://en.wikipedia.org/wiki/Adamic/Adar_index)

On the other hand, such a prediction can be learned from the node endpoints by looking at similarity metrics. The more similar the nodes are, the greater the likelihood of connectivity between them. [**Cosine similarity** and **Euclidean distance**](https://www.baeldung.com/cs/euclidean-distance-vs-cosine-similarity) are one example of such.

Then, there are the most advanced models so far and they are based on [**graph embeddings**](https://towardsdatascience.com/graph-embeddings-the-summary-cc6075aba007), which serve as features for further classification tasks. Likewise, it is possible to drive **graph neural network (GNN)** methods for the same task.

<img src="https://i.imgur.com/bAKxgkB.png" alt="drawing"/>

> Predicted relationships within the certain community


## Materials

### Implementation

![Link Prediction](https://img.shields.io/badge/Not_implemented-EB3434?style=for-the-badge&logo=github&logoColor=white)

Unfortunately, **Link Prediction** is yet not implemented within the project [**MAGE**](https://github.com/memgraph/mage). Be sure to raise the issue on the GitHub repo and ping us to speed up the development. :point_up:

### Blog posts

[![Dynamic Node2Vec](https://img.shields.io/badge/Recommendation_System_Using_Online_Node2Vec-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white)](https://memgraph.com/blog/online-node2vec-recommendation-system)

> _Our little magician Memgraph MAGE has recently received one more spell - the Online Node2Vec algorithm. Since he is still too scared to use it, you, as a brave spirit, will step up and use it on a real challenge to show MAGE how it’s done. This challenge includes building an Online Recommendation System using k-means clustering and the newborn spell - Online Node2Vec algorithm._


## Use cases

[![Drug Discovery](https://img.shields.io/badge/Drug_Discovery-Application-8A477F?style=for-the-badge)](/use-cases/drug-discovery.md)

When discovering new drugs, methods of link prediction can help to determine the behavior of the new drug. Since there exists a database of already known side effects and reactions with other drugs, this knowledge can be used to predict newly constructed ones.

[![Social Networks](https://img.shields.io/badge/Social_Networks-Application-8A477F?style=for-the-badge)](/use-cases/social-media.md)

One of the most obvious tasks of link prediction is predicting new friendships/followers on social networks. This concept is based on sharing the same entities on the graph, whether they are friends, interests, or things you follow.
