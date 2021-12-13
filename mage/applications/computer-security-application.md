---
id: computer-security-application
title: Computer Security
sidebar_label: Computer Security
---

# Introduction

Our world is full of data that is constantly changing. We need to keep track of
that data and extract anything valuable from it. Relationships between different
kinds of data can tell us more than the data itself, and those relationships
help detect any anomalies in network systems. If we want to make our network
safe, we must be aware of all changes and how they affect our system as a whole.

![memgraph-graph-algorithm-applications-computer-security](../data/applications/memgraph-graph-algorithm-applications-computer-security.png)

## Applying graphs

### Data privacy

Nowadays, protecting an individual's privacy preferences is maybe more important
than ever. It is possible to track private information with graph databases and
when and how someone used that information. Also, systems that are using
specific data can be tracked. Using graph databases, the personal data
possession of some companies can be General Data Protection Requirements (GDPR)
compliant.

Besides that, data classification is the process of classifying data based on
user-configured characteristics, which represents a big part of data security
strategies. Data classification can help you find the location of sensitive and
regulated data.

### Track data lineage

Data lineage tells us more about the life cycle of our data. It shows the whole
data flow from its creation until its final form. That can be easily visualized
using a graph database. By tracking data lineage with a graph database, you can
follow any error in data processes or implement changes to some processes more
efficiently. With data lineage, you can track whether your data has been
correctly transformed and catch if some untrusted source has created the data. 

Previously mentioned data classification can be combined with data lineage.
After data classification has discovered the location of sensitive data, data
lineage finds out the whole life cycle of those files and figures all the
possible security threats.

### Data access control

Organizations can authorize certain employees to access company data securely
with data access control. In that way, the organization's access to resources
complies with the company's policies and any official regulations. There are
different types of access control. Usually, employees are divided into roles,
and each role has access to some part of the data. Graph databases come as a
perfect solution to that problem since each employee can be represented with
node, and based on their role property, they could have access (be connected
with) certain data. Another way to approach access control is data-centric
access control. Each data has a type, and different users can access data based
on the type of data they have permission to access. The third way is
context-centric access control, where everything depends on the nature of
access. For example, permissions are given based on the time of access and the
amount of data that an employee is trying to fetch. Companies usually combine
these access controls and with graph databases are able to create unique data
access control. 

### Anomaly detection in data security

Anomaly detection identifies rare occurrences or events of concern due to their
differing characteristics from the majority of the data. Detecting anomalies in
data can help organizations track security errors, structural defects, or bank
frauds. There are numerous techniques for spotting anomalies in a large set of
data, and graph algorithms on your data stored in a graph database are among
them. When you find some anomaly, you can use found features to predict future
frauds.

## Where to next?

This text is a **summary** of one area that fits perfectly with the application
of graphs. Therefore, we would like to have you with us when **implementing**
some of these solutions. Share **opinions**, **experiences** and **problems**
you encounter when working with **Memgraph** on our [Discord
server](https://discord.gg/memgraph). We are here for you and we will help you
along the way.