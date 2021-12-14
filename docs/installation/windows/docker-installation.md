---
id: docker-installation
title: Install Memgraph on Windows with Docker
sidebar_label: Docker 🐳
slug: /install-memgraph-on-windows-docker
---

This article briefly outlines the basic steps necessary to install and run
**Memgraph** on Windows with Docker. <br/>
There are two main Docker images that you can install:

- [**Memgraph Platform**](#memgraph-platform) which contains:
  - **Memgraph**
  - the visual user interface **Memgraph Lab**
  - the command-line interface **mgconsole**
  - the graph library **MAGE**
- [**Memgraph base image**](#memgraph-base-image): contains only Memgraph.

:::caution

**Memgraph Platform** is the **recommended** Docker image. If you insist on
using the Memgraph base image, be aware of the
[differences](#differences-between-images) when interacting with them. We
provide code snippets for working with both types of images below.

:::

## Prerequisites {#prerequisites}

Before you proceed with the installation guide, make sure that you have:

- Installed **Docker Desktop**. Instructions on how to install Docker can be
  found on the [official Docker website](https://docs.docker.com/get-docker/).

:::info

Memgraph's Docker image was built with **Docker version `1.12`** and should be
compatible with all newer versions.

:::

## Memgraph Platform {#memgraph-platform}

### Installation guide {#installation-guide}

**1.** Open the Command Prompt or PowerShell

**2.** Download and load the **Memgraph Platform Docker image** with the
following command:

```console
 docker pull memgraph/memgraph-platform
```

**3.** Create a new tag for the image so it can be called as `memgraph` instead
of `memgraph/memgraph-platform`:

```console
docker image tag memgraph/memgraph-platform memgraph
```


### Starting Memgraph Platform {#starting-memgraph-platform}

To start Memgraph, use the following command:

```console
docker run -it -p 7687:7687 -p 3000:3000 memgraph/memgraph-platform
```

:::tip Memgraph Platform

The **memgraph/memgraph-platform** Docker image contains **Memgraph**,
**Memgraph Lab** and **mgconsole**. After running the image, mgconsole will open
in the terminal while Memgraph Lab is available on `http://localhost:3000`.

:::

:::info Docker Volumes

Docker containers don’t persist data by default (all changes are lost when the
container is stopped). You need to use local volumes to store the data
permanently, which is why Memgraph is started with the `-v` flag.

```console
docker run -it -p 7687:7687 -p 3000:3000 -v mg_lib:/var/lib/memgraph memgraph/memgraph-platform
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
the [Configuration section](#configuration). At this point, Memgraph is ready
for you to [submit Cypher queries](/connect-to-memgraph/overview.mdx).

:::info

The username and password for connecting to the database are empty by default.

:::

### Stopping Memgraph Platform {#stopping-memgraph-platform}

To stop a Memgraph database instance, run the following command:

```console
docker stop CONTAINER_ID
```

You can find the name of the container (`CONTAINER_ID`) by running:

```console
docker ps
```

### Configuration {#configuration}

The Memgraph configuration is available in Docker's named volume `mg_etc`. On
Linux systems, it should be in
`/var/lib/docker/volumes/mg_etc/_data/memgraph.conf`. Keep in mind that this way
of specifying configuration options is only valid if Memgraph was started [using
volumes](#named-volumes).

When using Docker, you can also specify the configuration options in the `docker
run` command:

```console
docker run -it -p 7687:7687 -p 3000:3000 -e MEMGRAPH="--bolt-port=7687" memgraph/memgraph-platform
```

To learn about all the configuration options, check out the [Reference
guide](/reference-guide/configuration.md).

### Accessing configuration files and logs {#named-volumes}

If you need to access the Memgraph configuration file or logs, you will need to
specify the following volumes when starting Memgraph through **PowerShell**:

```console
docker run -it -p 7687:7687 -p 3000:3000 -e MEMGRAPH="--bolt-port=7687" `
  -v mg_lib:/var/lib/memgraph `
  -v mg_log:/var/log/memgraph `
  -v mg_etc:/etc/memgraph `
  memgraph/memgraph-platform
```

The volume `mg_etc` contains the configuration file while the logs will be saved
to `mg_log`. The location of the volume directories depends on your specific
setup but can usually be found in
`\\wsl$\docker-desktop-data\version-pack-data\community\docker\volumes\`.

## Memgraph base image {#memgraph-base-image}

### Installation guide {#base-installation-guide}

**1.** Download the latest **Memgraph Docker image** from the [Download
Hub](https://memgraph.com/download/).

**2.** If you installed Docker correctly, you can import the image using the
following command:

```console
docker load -i /path-to/memgraph-<version>-docker.tar.gz
```

### Starting Memgraph {#starting-memgraph}

To start Memgraph, use the following command:

```console
docker run -p 7687:7687 memgraph
```

:::info Docker Volumes

Docker containers don’t persist data by default (all changes are lost when the
container is stopped). You need to use local volumes to store the data
permanently, which is why Memgraph is started with the `-v` flag.

```console
docker run -p 7687:7687 -v mg_lib:/var/lib/memgraph memgraph
```

More information on Docker Volumes can be found
[here](https://docs.docker.com/storage/volumes/).

:::

If successful, you should see a message similar to the following:

```console
You are running Memgraph vX.X.X
To get started with Memgraph, visit https://memgr.ph/start
```

If you want to start Memgraph with different configuration settings, check out
the [Configuration section](#configuration). At this point, Memgraph is ready for you to
[submit Cypher queries](/connect-to-memgraph/overview.mdx).

:::info

The username and password for connecting to the database are empty by default.

:::

### Stopping Memgraph {#stopping-memgraph}

To stop a Memgraph database instance, run the following command:

```console
docker stop CONTAINER_ID
```

You can find the name of the container (`CONTAINER_ID`) by running:

```console
docker ps
```

### Configuration {#base-configuration}

The Memgraph configuration is available in Docker's named volume `mg_etc`. On
Linux systems, it should be in
`/var/lib/docker/volumes/mg_etc/_data/memgraph.conf`. Keep in mind that this way
of specifying configuration options is only valid if Memgraph was started [using
volumes](#named-volumes).

When using Docker, you can also specify the configuration options in the `docker
run` command:

```console
docker run -p 7687:7687 memgraph --bolt-port=7687
```

To learn about all the configuration options, check out the [Reference
guide](/reference-guide/configuration.md).

### Accessing configuration files and logs {#base-named-volumes}

If you need to access the Memgraph configuration file or logs, you will need to
specify the following volumes when starting Memgraph through **PowerShell**:

```console
docker run -p 7687:7687 `
  -v mg_lib:/var/lib/memgraph `
  -v mg_log:/var/log/memgraph `
  -v mg_etc:/etc/memgraph `
  memgraph --bolt-port=7687
```

The volume `mg_etc` contains the configuration file while the logs will be saved
to `mg_log`. The location of the volume directories depends on your specific
setup but can usually be found in
`\\wsl$\docker-desktop-data\version-pack-data\community\docker\volumes\`.

## Differences between Memgraph Docker images {#differences-between-images}

- Configuration flags need to be passed inside of environmental variables when
  working with Memgraph Platform. For example, you can start the Memgraph base
  image with `docker run memgraph --bolt-port=7687`, while `docker run -e
  MEMGRAPH="--bolt-port=7687" memgraph/memgraph-platform` is the same command
  for Memgraph Platform.

- When starting Memgraph Platform, you need to include the `-it` flag that tells
  Docker to open an interactive container instance. Otherwise, you won't have
  access to mgconsole.

- Because Memgraph Platform includes Memgraph Lab, which is a web application,
  you need to include `-p 3000:3000` in the run command so that Lab becomes
  accessible on `https://localhost:3000`.

## Where to next? {#where-to-next}

If you need more information on working with Docker, check out our **[guide on how
to work with Docker](/database-functionalities/work-with-docker.md)**.<br/>
To learn how to query the database, take a look at the
**[Querying](/connect-to-memgraph/overview.mdx)** guide or **[Memgraph
Playground](https://playground.memgraph.com/)** for interactive tutorials.<br/>
Visit the **[Building applications](/connect-to-memgraph/methods/drivers.md)**
page if you need to connect to the database programmatically.

## Getting help {#getting-help}

If you run into problems during the installation process, check out our
**[installation troubleshooting
guide](/installation/windows/windows-installation-troubleshooting.md)** to see
if we have already covered the topic. For more information on the installation
process and for additional questions, visit the **[Getting help](/help-center)**
page.
