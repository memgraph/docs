---
id: link-prediction-algorithm
title: Link Prediction
sidebar_label: Link Prediction
---

## Description

Link prediction is the process of predicting the probability of merging two nodes that were not previously merged in a graph. From the topic itself, it is evident that a wide range of different solutions can be applied to such a problem.

The problem is of great importance in referral systems, co-authorship prediction, and drug discovery.

Solving methods range from traditional to machine learning.

Traditional methods are mostly based either on a neighborhood cross-section, and say a link between two nodes is more likely to exist if there are many common neighbors. These are:
1. Jaccard similarity
2. Overlap similarity
3. Adamic-Adar index

On the other hand, such a prediction can be learned from the nodes by looking at similarity metrics. The more similar the nodes, the greater the likelihood of connectivity. Cosine similarity and Euclidian distance are one example of such.

Then, there are the most advanced models so far and they are based on graph embeddings, which serve as features for further classification tasks. Likewise, it is possible to drive Graph neural network methods for the same task.
