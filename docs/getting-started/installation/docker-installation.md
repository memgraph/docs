---
id: docker-installation
title: Install Memgraph with Docker
sidebar_label: Docker (Windows, Linux, macOS)
---

This article briefly outlines the basic steps necessary to install and run
Memgraph with Docker.

## Prerequisites
Before you proceed with the installation guide make sure that you have:
* Installed **Docker**. Instructions on how to do this can be found on the
 [official Docker website](https://docs.docker.com/get-docker/).
* Downloaded the latest **Memgraph Docker Image** which can be [found here](https://memgraph.com/download/).

:::info
Memgraph's Docker image was built with **Docker version `1.12`** and should be
compatible with all newer versions.
:::

## Installation guide

If you installed Docker and downloaded the latest Memgraph  Docker image, import the 
image using the following command:

```
docker load -i /path/to/memgraph-<version>-docker.tar.gz
```

To start Memgraph, use the following command:

```
docker run -p 7687:7687 memgraph
```

If successful, you should see a message similar to the following :

```
You are running Memgraph v1.3.0-community
```

At this point, Memgraph is ready for you to [submit queries](../querying/querying.md).

:::info
The username and password for connecting to the database are empty by default.
:::

### Stopping the database instance

To stop a Memgraph database instance, run the following command:

```
docker stop CONTAINER_NAME
```

You can find the name of the container (`CONTAINER_NAME`) by running:

```
docker ps
```

### Configuration

The Memgraph configuration is available in Docker's named volume `mg_etc`. On
Linux systems, it should be in
`/var/lib/docker/volumes/mg_etc/_data/memgraph.conf`.

### Named volumes

If it happens that the named volumes are reused between different Memgraph
versions, Docker will overwrite a folder within the container with existing
data from the host machine. If a new file is introduced, or two versions of
Memgraph are not compatible, some features might not work or Memgraph might
not be able to work correctly. We strongly advise you to use different
named volumes for different Memgraph versions, or to remove the existing volume
from the host with the following command:

```
docker volume rm <volume_name>
```

### Note for Docker users

Although unlikely, some OS X/macOS users might experience minor difficulties
after the Docker installation. Instead of running on
`localhost`, a Docker container for Memgraph may be running on a custom IP
address. Fortunately, that IP address can be found as follows:

1) Determine the container ID of the Memgraph container

By issuing the command `docker ps` the user should get an output similar to the
following:

```
CONTAINER ID        IMAGE               COMMAND                  CREATED        ...
9397623cd87e        memgraph            "/usr/lib/memgraph/m…"   2 seconds ago  ...
```

At this point, it is important to remember the container ID of the Memgraph
image.  In our case, that is `9397623cd87e`.

2) Use the container ID to retrieve an IP of the container

```
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 9397623cd87e
```

The command above should yield the IP that should be used when
connecting to Memgraph and instead of `HOST` when firing up the `mg_client`
with Docker, as described in the [querying](../querying/querying.md) section.

## Where to next?

If you need more information on working with Docker, check out [this guide](/database-functionalities/work-with-docker).<br/>
To learn how to query the database, take a look at the **[Querying](../querying/querying.md)** guide or **[Memgraph Playground](https://playground.memgraph.com/)** for interactive tutorials.<br/>
Visit the **[Building applications](/getting-started/connecting-applications/connecting-applications.md)** page if you need to 
connect to the database programmatically. 

## Getting help

Visit the **[Getting help](../../getting-help/getting-help.md)** page in case you run into any kind of problem or you have additional questions.
