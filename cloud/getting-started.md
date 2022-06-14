---
id: getting-started
title: Getting started with Memgraph Cloud
sidebar_label: Getting started
slug: /
---

Memgraph Cloud is a fully managed cloud service that allows you to create
instances of MemgraphDB from your browser. You can create projects with
instances that can use up to 32 GB of RAM to which you can connect using
Memgraph Lab, mgconsole or various drivers. All connections are using SSL
encryption using a self-signed certificate. 

Use Memgraph Cloud to stream data into Memgraph in real time and run complex
graph algorithms and modules developed within the MAGE repository, such as
PageRank, Community detection or Betweenness centrality. You can also extend the
Cypher query language by developing your own procedures within query modules in
Memgraph Lab.

Instances can be easily paused to save resources, backed up and cloned by
creating snapshots. 

As a new user, try out Memgraph Cloud in a 14-days free trial and provide us
with feedback on X, Y, Z:

1. Go to [cloud.memgraph.com].
2. Sign up with Google or create an account.
3. Give your project a name and provide a password. 
4. Your instance is up and running - connect to it and start querying!


## How to Connect to Memgraph Cloud

To query Memgraph from the graphical user interface, please download and
install [Memgraph Lab](https://memgraph.com/download#tools).

To query Memgraph from the terminal please use [Memgraph
Console](https://github.com/memgraph/mgconsole).

To query Memgraph from your application please use one of the following client
libraries:

* [Memgraph C Client](https://github.com/memgraph/mgclient)
* [Memgraph Python Client](https://memgraph.github.io/pymgclient)
