---
id: docker-installation
title: Install Memgraph on Windows with Docker
sidebar_label: Docker 🐳
slug: /install-memgraph-on-windows-docker
---

This article briefly outlines the basic steps necessary to install and run
Memgraph on Windows with Docker.

## Prerequisites

Before you proceed with the installation guide make sure that you have:

- Installed **Docker**. Instructions on how to do this can be found on the
  [official Docker website](https://docs.docker.com/get-docker/).
- Installed Linux subsystem. Instructions on [Microsoft Windows Docs](https://docs.microsoft.com/en-gb/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package)
- Enable the experimental flag in Docker under "Settings -> Docker Engine"
- Downloaded the latest **Memgraph Docker Image** which can be [found
  here](https://memgraph.com/download/).

:::info
Memgraph's Docker image was built with **Docker version `1.12`** and
should be compatible with all newer versions.
:::

## Installation guide {#installation-guide}

If you installed Docker and downloaded the latest Memgraph Docker image, import
the image by entering the following command in `CMD` or `Windows PowerShell`:

```console
docker load -i /path/to/memgraph-<version>-docker.tar.gz
```

To start Memgraph, use the following command:

```console
docker run -p 7687:7687 memgraph
```

:::info Docker Volumes
Docker containers don’t persist data by default (all changes are lost when the
container is stopped). You need to use local volumes to store the data
permanently which is why Memgraph is started with the `-v` flags. More
information on Docker Volumes can be found
[here](https://docs.docker.com/storage/volumes/).
:::

If successful, you should see a message similar to the following:

```console
You are running Memgraph vX.X.X-community
```

If you want to start Memgraph with different configuration settings, check out
the [section below](#configuration). At this point, Memgraph is ready for you to [submit Cypher
queries](/connect-to-memgraph/overview.mdx).

:::info
The username and password for connecting to the database are empty by default.
:::

### Stopping Memgraph

To stop a Memgraph database instance, run the following command in `CMD` or `Windows PowerShell`:

```console
docker stop CONTAINER_NAME
```

You can find the name of the container (`CONTAINER_NAME`) by running:

```console
docker ps
```

### Configuration

The Memgraph configuration is available in Docker's named volume `mg_etc`. On
Linux systems, it should be in
`/var/lib/docker/volumes/mg_etc/_data/memgraph.conf`. Keep in mind that this way
of specifying configuration options is only valid if Memgraph was started [using
volumes](#installation-guide).

When using Docker, you can also specify the configuration options in the `docker
run` command:

```console
docker run -p 7687:7687 memgraph --bolt-port=7687
```

To learn about
all the configuration options, check out the [Reference
guide](/reference-guide/configuration.md).

### Named volumes

If it happens that the named volumes are reused between different Memgraph
versions, Docker will overwrite a folder within the container with existing data
from the host machine. If a new file is introduced, or two versions of Memgraph
are not compatible, some features might not work or Memgraph might not be able
to work correctly. We strongly advise you to use different named volumes for
different Memgraph versions, or to remove the existing volume from the host with
the following command:

```
docker volume rm <volume_name>
```

## Where to next?

If you need more information on working with Docker, check out **[this
guide](/database-functionalities/work-with-docker.md)**.<br/>
To learn how to query the database, take a look at the
**[Querying](/connect-to-memgraph/overview.mdx)** guide or **[Memgraph
Playground](https://playground.memgraph.com/)** for interactive tutorials.<br/>
Visit the **[Building
applications](/connect-to-memgraph/methods/drivers.md)**
page if you need to connect to the database programmatically.

## Getting help

If you run into problems during the installation process, check out our
**[installation troubleshooting
guide](/installation/windows/windows-installation-troubleshooting.md)** to see if
have already covered the topic. For more information on the installation process
and for additional questions, visit the **[Getting
help](/help-center)** page.
