---
id: finance-application
title: Finance
sidebar_label: Finance
---

## Introduction

Finance, like many other industries, is exposed to social interactions. Such a
nature of the domain requires processing an **enormous amount of data** and
building a system resistant to such requirements. Therefore, the foundations of
technology used in the beginnings of the financial industry are still used
today. For the same reason, this industry is **not subject to agile and
large-scale changes**.

However, some of these changes are becoming ubiquitous nowadays. Thus, for
example, by modeling the previously mentioned interactions, **graphs** enter the
world of the financial industry.

By analyzing the connections between users and resources, we can get an insight
that we would not have the opportunity to see using standard technologies such
as **relational data containers**. In addition, the advantage of graph data is
the ability to faster analyze and use the tools available particularly for
graphs.

![memgraph-graph-algorithm-applications-finance](../data/applications/memgraph-graph-algorithm-applications-finance.jpg)

## Applying graphs

### Data Management

Within the financial industry, special emphasis is placed on **data security**.
Thus, it is necessary to monitor when and under what conditions the data were
moved from one system to another. [**Data
lineage**](https://en.wikipedia.org/wiki/Data_lineage) is taken quite seriously.

Therefore, implementation via graphs makes it easier to monitor data, not only
within the storage structure but also visually. Using the **shortest path**, it
is possible to track how a resource has behaved over time and see which channels
it passed through before reaching the current one.

### Fraud Detection

Fraud is an unwanted side effect in financial systems and needs to be prevented.
Due to the high number of processed data per day, it is difficult to catch which
of them are suspicious and which are not. Fraudsters use methods that are based
on certain patterns of behavior. Such patterns can be identified using graphs.

#### Transaction data

Transaction data is easy to model as a directional graph that knows the
**sender** and **receiver**. Such a system is simple in structure and can be
used to detect potential fraud. Users otherwise behave according to similar
principles and patterns of behavior. However, when any deviation from this
behavior is noticed, for example, a **closed circle of recently created
accounts** that transfer money, it needs to be detected and reported.

#### Insurance

Modeled structures in the insurance industry are much more complex than in
common finance. These include damages, insured persons, accomplices in the
accident, contacts, telephone numbers, medical institutions, their employees,
etc.

What can help us greatly are investigation units that have previously
encountered scams and have marked previously caught scammers. The magnitude of
such scams can be in the millions.

By using features such as **closeness** to previous scams, **centrality**,
**community detection**, and many others, it is possible to make inferences over
newly arrived data and thus discover whether a new data point is a fraud. Such
models are sensitive to change and often miss in their judgment. That is why it
is important to have a team of people trained on such cases who can make an
educational assessment.

### Money Laundering

Money launderers are becoming more sophisticated every year, therefore making
them difficult to track. Manual investigation on such cases can take up years.
Money laundering is detected via **suspicious payment chains**. These structures
are easy to investigate and operate with graphs, and therefore making them the
most efficient technology to tackle this kind of fraud.

## Where to next?

This text is a **summary** of one area that fits perfectly with the application
of graphs. Therefore, we would like to have you with us when **implementing**
some of these solutions. Share **opinions**, **experiences** and **problems**
you encounter when working with **Memgraph** on our [Discord
server](https://discord.gg/memgraph). We are here for you and we will help you
along the way.
