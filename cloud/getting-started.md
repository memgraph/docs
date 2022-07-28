---
id: getting-started
title: Getting started with Memgraph Cloud
sidebar_label: Getting started
slug: /
---

[Memgraph Cloud](https://cloud.memgraph.com/) is a cloud service fully managed
on AWS and available in 26 geographic regions around the world. Memgraph Cloud
allows you to create projects with Enterprise instances of MemgraphDB from your
browser. The instances can use up to 32 GB of RAM and you can connect to them
using [Memgraph Lab](cloud-connect#connect-with-memgraph-lab),
[mgconsole](cloud-connect#connect-with-mgconsole) or various
[drivers](cloud-connect#connect-with-drivers). All connections use SSL
encryption with a self-signed certificate. 

<img src={require('./data/cloud.png').default}/>

Use Memgraph Cloud to stream data into Memgraph in real-time and run complex
graph algorithms and modules developed within the [MAGE](/docs/mage) repository,
such as
[PageRank](/docs/mage/algorithms/traditional-graph-analytics/pagerank-algorithm),
[Community
detection](/docs/mage/algorithms/traditional-graph-analytics/community-detection-algorithm)
or [Betweenness
centrality](/docs/mage/algorithms/traditional-graph-analytics/betweenness-centrality-algorithm).
You can also extend the Cypher query language by developing your own procedures
within query modules in Memgraph Lab.

Instances can be easily paused to save resources, backed up and cloned by
creating snapshots, and they all use the Enterprise edition of Memgraph which
includes the [role-base access control](cloud-projects/#role-base-access-control).

As a new user, try out Memgraph Cloud in a 14-days free trial and provide us
with feedback on [Discord](https://discord.com/invite/memgraph):

1. Go to [Memgraph Cloud](https://cloud.memgraph.com).
2. Log in with a Google account or create a Memgraph Cloud account.
3. Give your project a name and provide a password. 
4. Your project is up and running - connect to the instance, import data and
   start querying!

Below is a demo video made for the launch that will take you through it's
features: 

[<img alt="memgraph_cloud" src={require('./data/cloud-login.png').default} style={{width:'50%'}}/>](https://youtu.be/Tt5KPKylU8k?t=683 "Get started with Memgraph Cloud")

On the documentation pages, you can find everything you want to know about:

* [Managing your Cloud account](cloud-account)
* [Managing your projects within the Memgraph Cloud](cloud-projects)
* [Connecting to the Memgraph instance running in the Cloud](cloud-connect)
* [Payment rates and methods](payment)
