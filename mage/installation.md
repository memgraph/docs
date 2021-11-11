---
id: installation
title: How to install MAGE?
sidebar_label: Installation
---

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

## Prerequisites

To install MAGE through **Docker** or **Docker Hub**, you will only need
[Docker](https://docs.docker.com/get-started/#download-and-install-docker).<br/>
To install MAGE from **source**, you will need:  **Linux based distro**,
**Memgraph package**, **Python3**, **Make**, **CMake**, **Clang**, **UUID**, and
**Rust**.

<Tabs
  groupId="installation-method"
  defaultValue="docker-hub"
  values={[
    {label: 'Docker Hub', value: 'docker-hub'},
    {label: 'Docker build', value: 'docker-build'},
    {label: 'Build from source on Linux', value: 'source'},
  ]
}>
  <TabItem value="docker-hub">

## Installing with Docker Hub

MAGE has prepared a Docker image on [**Docker
Hub**](https://hub.docker.com/r/memgraph/memgraph-mage) :whale:  ready to be
pulled from
[memgraph/memgraph-mage](https://hub.docker.com/r/memgraph/memgraph-mage).

**1.** This is the only command you will need to make it run in your
environment:

```shell 
docker run -p 7687:7687 memgraph/memgraph-mage:latest
```

:::info

You can download a specific version of MAGE. For example, if you want to
download version `0.1`, you should run the following command:

```shell
docker run -p 7687:7687 memgraph/memgraph-mage:0.1
```

You can also download a MAGE image equipped for development inside of Docker
containers:

```shell
docker run -p 7687:7687 memgraph/memgraph-mage:0.1-dev
``` 

By running this command, you will get an image with the following tools
installed: Python3, Rust, Clang, Make, and CMake. This way, you can copy files
to the container, build them inside and import query modules in Memgraph.

If you want to develop your own query modules, be sure to check the [Development
process for MAGE with
Docker](https://github.com/memgraph/mage#developing-mage-with-docker).

:::

  </TabItem>
  <TabItem value="docker-build">

## Build Docker image from Github repository

This way, you will create a Docker image directly from the [MAGE Github
repository](https://github.com/memgraph/mage) and won't have to pull it from
Docker Hub. You can: 
- download a [specific release](https://github.com/memgraph/mage/releases) from
  the MAGE repository or
- clone the [repository](https://github.com/memgraph/mage) for the latest
  version.

If you downloaded a specific release, skip the first step.

**1.** Download the MAGE source code from
**[GitHub](https://github.com/memgraph/mage)**:

```shell 
git clone https://github.com/memgraph/mage.git && cd mage 
```

**2.** Build the **MAGE** tagged Docker image with the following command:

```shell 
docker build -t memgraph-mage . 
```

**3.** Start Memgraph-MAGE with the following command:

```shell 
docker run --rm -p 7687:7687 --name mage memgraph-mage 
``` 

:::info

Now you can query Memgraph with any of the querying platforms like [Memgraph
Lab](https://memgraph.com/product/lab) or
[mgconsole](https://github.com/memgraph/mgconsole).

If you made any changes while the **MAGE** Docker container was running, you
would need to stop the Docker container and rebuild whole image. If you don't
want to repeat these steps each time, be sure to check the [Development process
for MAGE with
Docker](https://github.com/memgraph/mage#developing-mage-with-docker).

:::

  </TabItem>
  <TabItem value="source">

## Install MAGE on Linux

This step is only suitable for Linux users as you need to [download and install
a Linux based Memgraph package](https://memgraph.com/download).

:::info

You should not build MAGE from source and import the modules into Memgraph
running in a Docker container. You would need to build MAGE inside the same
container where Memgraph is running due to the possibility of different
architectures on your local machine and the Docker container. If you need to
work with Docker, we have prepared a Docker image equipped for local
development. Make sure to check the `Docker build` or `Docker Hub` tab for more
information.

:::

**1.** Download the MAGE source code from
**[GitHub](https://github.com/memgraph/mage)** and run the `setup` script. It
will generate a `dist` directory with all the needed files:

```shell 
python3 setup build 
```

**2.** Copy the contents of the newly created `dist` directory to
`/usr/lib/memgraph/query_modules`:

:::info

If you want to be quicker, you can specify a path for setup script to copy the
built executables:

```shell 
python3 setup build -p /usr/lib/memgraph/query_modules 
``` 
:::

**3.** Start Memgraph and enjoy **MAGE**!

:::info

Note that query modules are loaded into Memgraph on startup, so if your instance
was already running, you would need to execute the following query to load them:

```cypher 
CALL mg.load_all(); 
```

If your changes are not loaded, make sure to restart the instance by running
`systemctl stop memgraph` and `systemctl start memgraph`.

If you want to find out more about loading query modules, visit [this
guide](/usage/loading-modules.md).

:::

## Advanced configuration

#### Set a custom `query_modules` directory

The `setup` script offers an option to set your local `mage/dist` directory as
the default one where Memgraph will search for query modules (the
`--query-modules-directory` flag defined in the configuration file
`/etc/memgraph/memgraph.conf` will be updated):

```shell
python3 setup modules_storage 
```

After running the command, restart Memgraph to load the new configuration.
Memgraph will look for query modules inside the `mage/dist` directory. You don't
need to copy the contents of `mage/dist` to the
`/usr/lib/memgraph/query_modules` directory manually anymore.

You can now build MAGE by running: 

```shell
python3 setup build 
```

  </TabItem>
</Tabs>
