---
id: docker-installation
title: Install Memgraph Platform on Linux with Docker
sidebar_label: Install Memgraph Platform (recommended)
slug: /install-memgraph-on-linux-docker
pagination_prev: installation/overview
pagination_next: connect-to-memgraph/overview
---

This article briefly outlines the basic steps necessary to install and run
**Memgraph** on Linux with Docker.

**Memgraph Platform** contains:
- **MemgraphDB** - the database that holds your data
- **Memgraph Lab** - visual user interface for running queries and visualizing
  graph data
- **mgconsole** - command-line interface for running queries
- **MAGE** - graph algorithms and modules library

:::caution

Newer versions of Memgraph **might not be backward compatible** with older
versions and you might not be able to load storage snapshots between different
versions. In that case, please [contact the Memgraph
team](mailto:tech@memgraph.com) and we'll help with the migration as much as
possible.

:::

## Prerequisites {#prerequisites}

- **Docker Desktop** - Memgraph Platform can be installed only with Docker.<br/>
  Instructions on how to install Docker can be found on the [official Docker
  website](https://docs.docker.com/get-docker/).

:::info

Memgraph's Docker image was built with **Docker version `1.12`** and should be
compatible with all newer versions.

:::

## Install and start Memgraph Platform {#installation-guide}

Open a terminal and use the following command:

```console
docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -v mg_lib:/var/lib/memgraph memgraph/memgraph-platform
```

If successful, you should see a message similar to the following:

```console
mgconsole X.X
Connected to 'memgraph://127.0.0.1:7687'
Type :help for shell usage
Quit the shell by typing Ctrl-D(eof) or :quit
memgraph>
```

Command-line tool **mgconsole** is open in the terminal, and the visual user
interface **Memgraph Lab** is available at [`http://localhost:3000`](http://localhost:3000).

User either **mgconsole**, **Memgraph Lab** or various **drivers** to [**connect to
MemgraphDB**](/connect-to-memgraph/overview.mdx).

## Stop Memgraph Platform {#stopping-memgraph-platform}

To stop a Memgraph database instance, run the following command:

```console
docker stop CONTAINER_NAME
```

You can find the name of the container (`CONTAINER_NAME`) by running the following command in a new terminal:

```console
docker ps
```

## Configuration file and logs {#named-volumes}

If you need to access the Memgraph configuration file or logs, you will need to
specify the following volumes when starting Memgraph:

```console
docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -e MEMGRAPH="--log-level=TRACE" \
  -v mg_lib:/var/lib/memgraph \
  -v mg_log:/var/log/memgraph \
  -v mg_etc:/etc/memgraph \
  memgraph/memgraph-platform
```

The configuration file is located in the `mg_etc` volume. The exact location of
the file depends on your specific setup, but usually it is
`/var/lib/docker/volumes/mg_etc/_data/memgraph.conf`. 

The logs will be saved to the `mg_log` volume, and the directories can usually be found in `/var/lib/docker/volumes/`. 

When using Docker, you can also specify the configuration options in the `docker
run` command:

```console
docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -e MEMGRAPH="--log-level=TRACE" memgraph/memgraph-platform
```

:::caution

When working with Memgraph Platform, you should pass configuration flags inside
of environment variables.

For example, you can start the MemgraphDB image with `docker run memgraph/memgraph
--bolt-port=7687 --log-level=TRACE`, but you should start Memgraph Platform with
`docker run -p 7687:7687 -p 7444:7444 -p 3000:3000 -e MEMGRAPH="--bolt-port=7687 --log-level=TRACE"
memgraph/memgraph-platform`.

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
guide](/installation/linux/linux-installation-troubleshooting.md)** to see if we
have already covered the topic. For more information on the installation process
and for additional questions, visit the **[Help Center](/help-center)** page.
