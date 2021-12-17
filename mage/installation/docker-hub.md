---
id: docker-hub
title: Pull the MAGE image from Docker Hub
sidebar_label: Docker Hub (recommended)
---

MAGE has prepared a Docker image on [**Docker
Hub**](https://hub.docker.com/r/memgraph/memgraph-mage) :whale: ready to be
pulled from
[memgraph/memgraph-mage](https://hub.docker.com/r/memgraph/memgraph-mage).

## Installing MAGE

**1.** This is the only command you will need to make it run in your
environment:

```shell
docker run -p 7687:7687 memgraph/memgraph-mage:latest
```

:::info

You can download a specific version of MAGE. For example, if you want to
download version `1.1`, you should run the following command:

```shell
docker run -p 7687:7687 memgraph/memgraph-mage:1.1
```

You can also download a MAGE image equipped for development inside of Docker
containers:

```shell
docker run -p 7687:7687 memgraph/memgraph-mage:1.1-dev
```

By running this command, you will get an image with the following tools
installed: Python3, Rust, Clang, Make, and CMake. This way, you can copy files
to the container, build them inside and import query modules in Memgraph.

If you want to develop your own query modules, be sure to check the [Development
process for MAGE with
Docker](https://github.com/memgraph/mage#developing-mage-with-docker).

:::
