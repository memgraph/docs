---
id: memgraph-lab-faq
title: Memgraph Lab - Frequently asked questions
sidebar_label: Memgraph Lab
slug: /faq/memgraph-lab
---

### What is Memgraph Lab?

Memgraph Lab is a visual interface for exploring and interacting with data
stored in Memgraph.

If you prefere to query using command-line tool use
[mgconsole](https://memgraph.com/docs/memgraph/connect-to-memgraph/mgconsole). 

### Can I only use Memgraph Lab?

No. Memgraph Lab needs a running Memgraph instance in the background to be able to
connect to it. After you have [installed Memgraph
platform](/memgraph/installation) and started it, you can head over to Memgraph
Lab and start querying your graph.

### How to install Memgraph Lab on Windows?

Memgraph Lab cannot be installed natively on Windows devices but can be installed
using **Docker** or through the **Windows Subsystem for Linux (WSL)**. Docker
enables us to run Memgraph virtually on any system without having to worry about
compatibility issues. You don't have to be familiar with Docker to try out
Memgraph so [install Docker](https://docs.docker.com/get-docker/) without fear.

You can either [install Memgraph
Platform](https://memgraph.com/docs/memgraph/install-memgraph-on-windows-docker)
which includes both Memgraph and Memgraph Lab, or [Memgraph
Lab](https://memgraph.com/docs/memgraph-lab/installation/windows) by itself, but
please remember you need a running Memgraph instance to connect to. 

### How to install Memgraph Lab on macOS?

Memgraph Lab cannot be installed natively on macOS devices but can be installed
using **Docker**. Docker enables us to run Memgraph virtually on any system
without having to worry about compatibility issues. You don't have to be
familiar with Docker to try out Memgraph so [install
Docker](https://docs.docker.com/get-docker/) without fear.

You can either [install Memgraph
Platform](https://memgraph.com/docs/memgraph/install-memgraph-on-windows-docker)
which includes both Memgraph and Memgraph Lab, or [Memgraph
Lab](https://memgraph.com/docs/memgraph-lab/installation/windows) by itself, but
please remember you need a running Memgraph instance to connect to. 

### What is Style script language?

Style script is a language for customizing the visual display of graphs. It
allows you to stylize labels and colors of nodes and relationships. Check out
the [Style script
guide](https://memgraph.com/docs/memgraph-lab/style-script/quick-start) for more
information.