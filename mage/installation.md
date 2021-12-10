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


## Developing MAGE with Docker

When you developed your own query module, you need to load it inside Memgraph running inside Docker container.

There are two options here.

### 1. Rebuild whole MAGE image

This command will trigger rebuild of whole Docker image. Make sure that you have added Python requirements inside `python/requirements.txt`
file.

**1.** Firstly, do the build of **MAGE** image:

```
docker build -t memgraph-mage .
```

**2.** Now, start `memgraph-mage` image with the following command and enjoy **your** own **MAGE**:
```
docker run --rm -p 7687:7687 --name mage memgraph-mage
```

### 2. Build inside Docker container

You can build **MAGE** Docker image equipped for development. `Rust`, `Clang`, `Python3-pip`, and everything else necessary
for development will still be inside the running container. This means that you can copy **MAGE** repository inside the container
and do build inside `mage` container. And there is no need to do the whole Docker image build again.

**1.** To create `dev` **MAGE** image, run the following command:

```
docker build --target dev -t memgraph-mage:dev .
```
**2.** Now run the image with following command:

```
docker run --rm -p 7687:7687 --name mage memgraph-mage:dev
```

**3.** Now copying files inside  container and doing build.

**a)** First you need to copy files to container with name `mage`

```
docker cp . mage:/mage/
```

**b)** Then you need to position yourself inside container as root:

```
docker exec -u root -it mage /bin/bash
```

> Note: if you have done build locally, make sure to delete folder `cpp/build` because
> you might be dealing with different `architectures` or problems with `CMakeCache.txt`.
> To delete it, run:
>
> `rm -rf cpp/build`

**c)** After that, run build and copying `mage/dist` to `/usr/lib/memgraph/query_modules`:

```
python3 setup build -p /usr/lib/memgraph/query_modules/
```
**d)** Everything is done now. Just run following command:

```
exit
```

> Note that query modules are loaded into Memgraph on startup so if your instance was already running you will need to
> execute the following query inside one of [querying platforms](https://docs.memgraph.com/memgraph/connect-to-memgraph) to load them:
```
CALL mg.load_all();
```

  </TabItem>
  <TabItem value="source">

## Install MAGE on Linux

This step is only suitable for Linux users as you need to [download and install
a Linux based Memgraph package](https://memgraph.com/download).

:::info

You should not build MAGE from the source and import the modules into Memgraph
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


:::warning
Query modules are loaded into Memgraph on startup so if your instance was already running you will need to
execute the following query inside one of [querying platforms](https://memgraph.com/docs/memgraph/connect-to-memgraph) to load them:
```
CALL mg.load_all();
```
If your changes are not loaded, make sure to restart the instance by running
`systemctl stop memgraph` and `systemctl start memgraph`.

If you want to find out more about loading query modules, visit [this
guide](/usage/loading-modules.md).

:::

## Advanced configuration

### 1. Automatic setup of query_module directory and build
By running the following command, this script will change the default directory where Memgraph is looking for query modules to your
`mage/dist` directory, and run `build` command to prepare `*.so` and `*.py` files.

```
python3 setup all
```
> Note: If your changes are not loaded, make sure to restart the instance by running `systemctl stop memgraph` and `systemctl start memgraph`.

Next time you change something, just run the following command, since we have already set up a `/mage/dist` for
query modules directory:

```
python3 setup build
```

### 2. Set different query_modules directory
`setup` script offers you to set your local `mage/dist` folder or **any** other folder as the **default** one for the Memgraph configuration file
(flag `--query-modules-directory` defined in `/etc/memgraph/memgraph.conf` file). There are few options:

**1.** Set `<your_folder>` as **default** one:
```
python3 setup modules_storage -p <your_folder>
```

This way Memgraph will be looking for query modules inside `<your_folder>`. 
> Don't forget to copy aforementioned files from `mage/dist` folder to `<your_folder>`.


**2.** Set `/mage/dist` as **default** one:

```
python3 setup modules_storage
```

If **default** folder is **mage/dist** then you don't need to copy `*.so` and `*.py` files from `mage/dist` folder to`/usr/lib/memgraph/query_modules` every time when you run `build`.



  </TabItem>
</Tabs>


