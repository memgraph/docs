---
id: source
title: Install MAGE on Linux from source
sidebar_label: Build from source on Linux
---

This step is only suitable for Linux users as you need to [download and install
a Linux based Memgraph package](https://memgraph.com/download). To build from
source, you will need **Python3**, **Make**, **CMake**, **Clang**, **UUID**
and **Rust**.

:::info

You should not build MAGE from source and import the modules into Memgraph
running in a Docker container. You would need to build MAGE inside the same
container where Memgraph is running due to the possibility of different
architectures on your local machine and the Docker container. If you need to
work with Docker, we have prepared a Docker image equipped for local
development. Make sure to check the [Docker
build](/installation/docker-build.md) or [Docker
Hub](/installation/docker-hub.md) guides.

:::

## Installing MAGE

### Prerequisits

To install MAGE from source, first set up the machine by running the following commands: 

```bash
sudo apt-get update && apt-get install -y \
    libcurl4        `memgraph` \
    libpython${PY_VERSION}   `memgraph` \
    libssl-dev       `memgraph` \
    openssl         `memgraph` \
    build-essential `mage-memgraph` \
    cmake           `mage-memgraph` \
    curl            `mage-memgraph` \
    g++             `mage-memgraph` \
    python3         `mage-memgraph` \
    python3-pip     `mage-memgraph` \
    python3-setuptools     `mage-memgraph` \
    python3-dev     `mage-memgraph` \
    clang           `mage-memgraph` \
    git             `mage-memgraph` \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
```

### Installation process
**1.** Download the MAGE source code from
**[GitHub](https://github.com/memgraph/mage)** and run the `setup` script. 

The script will generate a `dist` directory with all the needed files:

```shell
python3 setup build -p /usr/lib/memgraph/query_modules
```

This command will also copy the contents of the newly created `dist` directory to
`/usr/lib/memgraph/query_modules` where Memgraph load query modules from. 

**If something doesn't get installed properly, `setup` script will stop installation process. If you have any 
questions, contact us on [Discord](https://discord.gg/memgraph).**

:::warning

Make sure you cloned  `mage` github repository with `--recurse-submodules` flag since it has incorporated Memgraph inside:

```shell
git clone --recurse-submodules https://github.com/memgraph/mage.git
```

if you didn't, you can run following command to update submodules:

```shell
git submodule update --init --recursive
```
:::


**2.** Start Memgraph and enjoy **MAGE**!

:::warning Query modules are loaded into Memgraph on startup so if your instance
was already running you will need to execute the following query inside one of
[querying platforms](https://memgraph.com/docs/memgraph/connect-to-memgraph) to
load them:

```
CALL mg.load_all();
```

If your changes are not loaded, make sure to restart the instance by running
`systemctl stop memgraph` and `systemctl start memgraph`.

If you want to find out more about loading query modules, visit [this
guide](/usage/loading-modules.md).

:::

## Advanced configuration

### 1. Set a different `query_modules` directory

The `setup` script can set your local `mage/dist` directory or **any** other
directory as the **default** one in the Memgraph configuration file (flag
`--query-modules-directory` defined in `/etc/memgraph/memgraph.conf`). There are
a few options:

**1.** Set `<your_directory>` as the **default** one:

```
python3 setup modules_storage -p <your_directory>
```

This way Memgraph will be looking for query modules inside `<your_directory>`.

:::note

Don't forget to copy the aforementioned files from `mage/dist` to
`<your_directory>`.

:::

**2.** Set `/mage/dist` as the **default** one:

```
python3 setup modules_storage
```

If the **default** directory is `mage/dist` then you don't need to copy `*.so`
and `*.py` files from the `mage/dist` directory
to`/usr/lib/memgraph/query_modules` every time you run `build`.
