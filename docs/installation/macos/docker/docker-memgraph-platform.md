---
id: docker-memgraph-platform
title: Install Memgraph Platform on macOS with Docker
sidebar_label: Memgraph Platform
slug: /install-memgraph-platform-on-macos-docker
---

This article briefly outlines the basic steps necessary to install and run
**Memgraph Platform** on macOS with Docker.

## Prerequisites

Before you proceed with the installation guide make sure that you have:

- Installed **Docker Desktop**. Instructions on how to install Docker can be
  found on the [official Docker website](https://docs.docker.com/get-docker/).

:::info
Memgraph's Docker image was built with **Docker version `1.12`** and
should be compatible with all newer versions.
:::

## Installation guide {#installation-guide}

**1.** Download and load the **Memgraph Platform Docker image** with the
following command:

```console
 docker pull memgraph/memgraph-platform
```

**2.** Create a new tag for the image so it can be called as `memgraph` instead
of `memgraph/memgraph-platform`:

```console
docker image tag memgraph/memgraph-platform memgraph
```

:::tip Memgraph Platform
The **memgraph/memgraph-platform** Docker image contains **Memgraph**,
**Memgraph Lab** and **mgconsole**. After running the image, mgconsole will open
in the terminal while Memgraph Lab is available on `http://localhost:3000`.
:::

## Starting Memgraph

To start Memgraph, use the following command:

```console
docker run -it -p 7687:7687 -p 3000:3000 memgraph
```

:::info Docker Volumes 
Docker containers don’t persist data by default (all
changes are lost when the container is stopped). You need to use local volumes
to store the data permanently, which is why Memgraph is started with the `-v`
flag.

```console
docker run -it -p 7687:7687 -p 3000:3000 -v mg_lib:/var/lib/memgraph memgraph
```

More information on Docker Volumes can be found
[here](https://docs.docker.com/storage/volumes/).
:::

If successful, you should see a message similar to the following:

```console
mgconsole X.X
Connected to 'memgraph://127.0.0.1:7687'
Type :help for shell usage
Quit the shell by typing Ctrl-D(eof) or :quit
memgraph>
```

If you want to start Memgraph with different configuration settings, check out
the [section below](#configuration). At this point, Memgraph is ready for you to
[submit Cypher queries](/connect-to-memgraph/overview.mdx).

:::info
The username and password for connecting to the database are empty by default.
:::

## Stopping Memgraph

To stop a Memgraph database instance, run the following command:

```console
docker stop CONTAINER_NAME
```

You can find the name of the container (`CONTAINER_NAME`) by running:

```console
docker ps
```

## Configuration

The Memgraph configuration is available in Docker's named volume `mg_etc`. On
Linux systems, it should be in
`/var/lib/docker/volumes/mg_etc/_data/memgraph.conf`. Keep in mind that this way
of specifying configuration options is only valid if Memgraph was started [using
volumes](#named-volumes).

When using Docker, you can also specify the configuration options in the `docker
run` command:

```console
docker run -it -p 7687:7687 -p 3000:3000 -e MEMGRAPH="--bolt-port=7687" memgraph
```

To learn about all the configuration options, check out the [Reference
guide](/reference-guide/configuration.md).

## Accessing configuration files and logs

If you need to access the Memgraph configuration file or logs, you will need to
specify the following volumes when starting Memgraph:

```console
docker run -it -p 7687:7687 -p 3000:3000 -e MEMGRAPH="--bolt-port=7687" \
  -v mg_lib:/var/lib/memgraph \
  -v mg_log:/var/log/memgraph \
  -v mg_etc:/etc/memgraph \
  memgraph
```

The volume `mg_etc` contains the configuration file while the logs will be saved
to `mg_log`. The location of the volume directories depends on your specific
setup.

## Where to next?

If you need more information on working with Docker, check out **[this
guide](/database-functionalities/work-with-docker.md)**.<br/>
To learn how to query the database, take a look at the
**[Querying](/connect-to-memgraph/overview.mdx)** guide or **[Memgraph
Playground](https://playground.memgraph.com/)** for interactive tutorials.<br/>
Visit the **[Building applications](/connect-to-memgraph/methods/drivers.md)**
page if you need to connect to the database programmatically.

## Getting help

If you run into problems during the installation process, check out our
**[installation troubleshooting
guide](/installation/macos/macos-installation-troubleshooting.md)** to see
if we have already covered the topic. For more information on the installation
process and for additional questions, visit the **[Getting help](/help-center)**
page.
