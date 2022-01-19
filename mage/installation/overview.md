---
id: overview
title: How to install MAGE?
sidebar_label: Installation overview
slug: /installation
---

:::note

The **Docker Hub** and **Docker build** installation methods only require you to
[install Docker](https://docs.docker.com/get-docker/) while the **Build from
source on Linux** method requires the installation of additional dependencies.

:::

## Memgraph compatibility

With changes in Memgraph API, MAGE started to track version numbers. Check out
the table below which will reveal MAGE compatibility with Memgraph versions.

| MAGE version | Memgraph version  |
| ------------ | ----------------- |
| >= 1.0       | >= 2.0.0          |
| ^0           | >= 1.4.0 <= 1.6.1 |

There are three methods to install and use **MAGE** locally:

1. **[Docker Hub](/installation/docker-hub.md)** (recommended method ✔️)
2. **[Docker build](/installation/docker-build.md)**
3. **[Install from source on Linux](/installation/source.md)**

