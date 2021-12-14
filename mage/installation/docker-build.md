---
id: docker-build
title: Build a Docker image from the MAGE repository
sidebar_label: Docker build
---

This way, you will create a Docker image directly from the [MAGE Github
repository](https://github.com/memgraph/mage) and won't have to pull it from
Docker Hub. You can:

- download a [specific release](https://github.com/memgraph/mage/releases) from
  the MAGE repository or
- clone the [repository](https://github.com/memgraph/mage) for the latest
  version.

If you downloaded a specific release, skip the first step.

## Installing MAGE

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
would need to stop the Docker container and rebuild the whole image. If you
don't want to repeat these steps each time, be sure to check the [Development
process for MAGE with
Docker](https://github.com/memgraph/mage#developing-mage-with-docker).

:::

## Developing MAGE with Docker

When developing your query module, you need to load it inside Memgraph running
inside the Docker container. You can do that by [rebuilding the whole MAGE
image](#1-rebuild-the-whole-mage-image) or by [building it inside the Docker
container](#2-build-inside-the-docker-container).

### 1. Rebuild the whole MAGE image

This command will trigger the rebuild of the whole Docker image. Make sure that
you have added Python requirements inside `python/requirements.txt` file.

**1.** Firstly, do the build of the **MAGE** image:

```
docker build -t memgraph-mage .
```

**2.** Now, start `memgraph-mage` image with the following command and enjoy
**your** own **MAGE**:

```
docker run --rm -p 7687:7687 --name mage memgraph-mage
```

### 2. Build inside the Docker container

You can build a **MAGE** Docker image equipped for development. `Rust`, `Clang`,
`Python3-pip`, and everything else necessary for development will still be
inside the running container. This means that you can copy the **MAGE**
repository to the container and do the build inside the `mage` container. There
is no need to do the whole Docker image build again.

**1.** To create `dev` **MAGE** image, run the following command:

```
docker build --target dev -t memgraph-mage:dev .
```

**2.** Then run the image with the following command:

```
docker run --rm -p 7687:7687 --name mage memgraph-mage:dev
```

**3.** Next, copy the files inside the container and do the build:

**a)** First, you need to copy the files to the container named `mage`

```
docker cp . mage:/mage/
```

**b)** Then, you need to position yourself inside the container as root:

```
docker exec -u root -it mage /bin/bash
```

:::note

Note: If you have done the build locally, make sure to delete the directory
`cpp/build` because you might be dealing with different `architectures` or
problems with `CMakeCache.txt`. To delete it, run:

`rm -rf cpp/build`

:::

**c)** After that, run build and copy `mage/dist` to
`/usr/lib/memgraph/query_modules`:

```
python3 setup build -p /usr/lib/memgraph/query_modules/
```

**d)** Everything should be ready, and you can run the following command to exit
the container:

```
exit
```

:::note

Note that query modules are loaded into Memgraph on startup, so if your instance
was already running, you would need to execute the following query inside one of
the [querying platforms](https://memgraph.com/docs/memgraph/connect-to-memgraph)
to load them:

`CALL mg.load_all();`

:::
