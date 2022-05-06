---
id: cugraph
title: Install NVIDIA accelerated MAGE
sidebar_label: Install NVIDIA accelerated MAGE
---

In this step, we'll show how to prepare the MAGE to work with NVIDIA accelerated graph algorithms
called [cuGraph](https://github.com/rapidsai/cugraph). cuGraph is part of  [RAPIDS](https://rapids.ai/) - GPU Data Science library developed by NVIDIA.

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

### 1. Automatic setup of the `query_modules` directory and build

The `setup` script can change the default directory where Memgraph is looking
for query modules to the `mage/dist` directory, and will run the `build` command
to prepare all `*.so` and `*.py` files:

```
python3 setup all
```

:::note

If your changes are not loaded, make sure to restart the instance by running
`systemctl stop memgraph` and `systemctl start memgraph`.

:::

Next time you change a module, just run the following command, since you have
already set `/mage/dist` as the query modules directory:

```
python3 setup build
```

### 2. Set a different `query_modules` directory

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
