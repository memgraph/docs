---
id: temporal-graph-networks
title: Temporal Graph Networks
sidebar_label: Temporal Graph Networks
---

## Description

The **temporal_graph_networks (TGNs)** are a type of **[graph neural network
(GNN)](https://distill.pub/2021/gnn-intro/)** for dynamic graphs. In recent
years, **GNNs** have become very popular due to their ability to perform a wide
variety of machine learning tasks on graphs, such as link prediction, node
classification, and so on. This rise started with **[Graph convolutional
networks (GCN)](https://arxiv.org/pdf/1609.02907.pdf)** introduced by _Kipf et
al._, followed by **[GraphSAGE](https://arxiv.org/pdf/1706.02216.pdf)**
introduced by _Hamilton et al._, and recently a new method was presented which
introduces **attention mechanism** to graphs, known as **[Graph attention
networks
(GAT)](https://arxiv.org/pdf/1710.10903.pdf?ref=https://githubhelp.com)**, by
_Veličković et al_. The last two methods offer a great possibility for inductive
learning. But they haven't been specifically developed to handle different
events occurring on graphs, such as **node features updates**, **node
deletion**, **edge deletion** and so on. These events happen regularly in
**real-world** examples such as the **[Twitter
network](https://twitter.com/memgraphmage)**, where users update their profile,
delete their profile or just unfollow another user.

In their work, Rossi et al. introduce [**Temporal graph
networks**](https://arxiv.org/abs/2006.10637), an architecture for machine
learning on streamed graphs, a rapidly-growing ML use case.

There exist two main modalities of **dynamic** graphs. Discrete-time dynamic
graphs (DTDG) represent snapshots of static graphs taken at intervals in time.
On the other hand, continuous-time dynamic graphs (CTDG) are more general and
can be represented as timestamped lists of events which may include edge
addition or deletion, node addition or deletion, and node or edge feature
transformations.

**Temporal graph networks** is a modality of **CTDG** that consists of temporal
(timestamped) events. An **interaction** event represents a temporal edge
creation, and a **nodewise** event represents node creation or feature update.

![temporal-computation-graph](../../data/algorithms/machine-learning-graph-analytics/temporal-computation-graph.png)

## Materials

- Firstly, read the **[original paper](https://arxiv.org/pdf/2006.10637.pdf)**.
- Afterward, you can also watch an explanation of **[temporal graph
  networks](https://www.youtube.com/watch?v=0tw66aTfWaI&t=1759s&ab_channel=TheAIEpiphany)**.
- Be sure to check our explanation of **[node
  embeddings](https://memgraph.com/blog/introduction-to-node-embedding)** if you
  still have a problem with understanding what node embeddings are.

And finally, we prepared an example of [**link prediction** on the Amazon
dataset](https://hackmd.io/yy1mb9CVTYadmZz78iN5Jg).

### Implementation

[![Temporal Graph
Networks](https://img.shields.io/badge/Temporal_Graph_Networks-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](https://github.com/memgraph/mage/blob/main/python/tgn.py)

[![Temporal Graph
Networks](https://img.shields.io/badge/Temporal_Graph_Networks-Documentation-FCC624?style=for-the-badge&logo=python&logoColor=white)](/mage/query-modules/python/temporal-graph-networks)

**Temporal graph networks** are implemented as part of the
[**MAGE**](https://github.com/memgraph/mage) project. Make sure to check it out
in the link above. :point_up:

## Use cases

[![Social
networks](https://img.shields.io/badge/Social_networks-Application-8A477F?style=for-the-badge)](/use-cases/social-media.md)

Temporal graph networks can be used to find communities in social networks like
[Twitter](https://twitter.com), [Facebook](https://www.facebook.com/), and so
on. To find communities, we can use **semi-supervised** learning, and from
**graph structure** and **available** labels, **TGN** will try to predict new
**labels** and find communities that way.

[![Link
prediction](https://img.shields.io/badge/Link_prediction-Application-8A477F?style=for-the-badge)](/mage/algorithms/machine-learning-graph-analytics/link-prediction-algorithm)

We can use temporal graph networks in the case of link prediction. In the link
prediction task, **TGN** needs to correctly predict which edges won't appear -
_positive samples_ and which edges will not appear - _negative samples_. We use
the edges that arrive in batches of a stream as a _positive sample_, and we
artificially create _negative samples_. The _Negative samples_ consist of nodes
that are not linked. Now, all that is left is to fire up **TGN** in
**self_supervised** mode and it will do the work for you.

[![Node
classification](https://img.shields.io/badge/Node_classification-Application-8A477F?style=for-the-badge)](/mage/algorithms/machine-learning-graph-analytics/node-classification-algorithm)

Furthermore, we can use temporal graph networks for the task of node
classification. Again, with **edge features**, **node features**, and **graph
structure**, we will try to predict labels. In social networks, labels may
indicate interests, beliefs, or demographics.
