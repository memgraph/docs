---
id: docker-db-installation
title: Install MemgraphDB on macOS with Docker
sidebar_label: Install MemgraphDB
slug: /install-memgraph-db-on-macos-docker
pagination_prev: installation/overview
pagination_next: connect-to-memgraph/overview
---

This article briefly outlines the basic steps necessary to install and run
**MemgraphDB** on macOS with Docker.

import BackwardCompatibilityWarning from '../../templates/_backward_compatibility_warning.mdx';

<BackwardCompatibilityWarning/>

## Prerequisites {#prerequisites}

Before you proceed with the installation guide, make sure that you have:

- **Docker Desktop** - [Install Docker](https://docs.docker.com/get-docker/) in
order to install MemgraphDB.

:::info

Memgraph's Docker image was built with **Docker version `1.12`** and should be
compatible with all newer versions.

:::

## Install MemgraphDB {#base-installation-guide}

**1.** Download the latest **Memgraph Docker image** from the [Download
Hub](https://memgraph.com/download/).

**2.** Import the image using the following command:

```console
docker load -i /path-to/memgraph-<version>-docker.tar.gz
```

## Start MemgraphDB {#starting-memgraph}

To start Memgraph, use the following command:

```console
docker run -p 7687:7687 -p 7444:7444 -v mg_lib:/var/lib/memgraph memgraph/memgraph
```

If successful, you should see a message similar to the following:

```console
You are running Memgraph vX.X.X
To get started with Memgraph, visit https://memgr.ph/start
```

At this point, the Memgraph database is ready for you to [submit Cypher
queries](/connect-to-memgraph/overview.mdx) via a command-line tool **mgconsole**,
visual user interface **Memgraph Lab** or various **drivers**.

:::info

The username and password for connecting to the database are empty by default.

:::

## Stop MemgraphDB {#stopping-memgraph}

To stop a Memgraph database instance, run the following command:

```console
docker stop CONTAINER_NAME
```

You can find the name of the container (`CONTAINER_NAME`) by running:

```console
docker ps
```

## Configuration file and logs {#named-volumes}

If you need to access the Memgraph configuration file or logs, you will need to
specify the following volumes when starting Memgraph:

```console
docker run -p 7687:7687 -p 7444:7444 \
  -v mg_lib:/var/lib/memgraph \
  -v mg_log:/var/log/memgraph \
  -v mg_etc:/etc/memgraph \
  memgraph/memgraph --log-level=TRACE
```

The configuration file is located in the `mg_etc` volume. The exact location of
the file depends on your specific setup, but usually it is
`/var/lib/docker/volumes/mg_etc/_data/memgraph.conf`. 

The logs will be saved to the `mg_log` volume, but the location of the
directories depends on your specific setup.

When using Docker, you can also specify the configuration options in the `docker
run` command:

```console
docker run -p 7687:7687 -p 7444:7444 memgraph/memgraph --log-level=TRACE
```

:::caution

When working with MemgraphDB, you should pass configuration flags as arguments.

For example, you should start the MemgraphDB image with `docker run memgraph/memgraph
--bolt-port=7687 --log-level=TRACE`, and Memgraph Platform with `docker run -e
MEMGRAPH="--bolt-port=7687 --log-level=TRACE" memgraph/memgraph-platform`.

:::

To learn about all the configuration options, check out the [Reference
guide](/reference-guide/configuration.md).

## Where to next? {#where-to-next}

If you need more information on working with Docker, check out our **[guide on how
to work with Docker](/how-to-guides/work-with-docker.md)**.<br/>
To learn how to query the database, take a look at the
**[querying](/connect-to-memgraph/overview.mdx)** guide or **[Memgraph
Playground](https://playground.memgraph.com/)** for interactive tutorials.<br/>
Visit the **[Drivers overview](/connect-to-memgraph/drivers/overview.md)**
page if you need to connect to the database programmatically.

## Getting help {#getting-help}

If you run into problems during the installation process, check out our
**[installation troubleshooting
guide](/installation/macos/macos-installation-troubleshooting.md)** to see if we
have already covered the topic. For more information on the installation process
and for additional questions, visit the **[Help Center](/help-center)** page.
