# Install MAGE graph algorithm library

:::note

The **Docker Hub** and **Docker build** installation methods only require you to
[install Docker](https://docs.docker.com/get-docker/) while the **Build from
source on Linux** method requires the installation of additional dependencies.

:::

## Memgraph compatibility

With changes in Memgraph API, MAGE started to track version numbers. Check out
the table below which will reveal MAGE compatibility with Memgraph versions.

| MAGE version | Memgraph version  |
|--------------|-------------------|
| >= 1.6       | >= 2.5.2          |
| >= 1.4       | >= 2.4.0          |
| >= 1.0       | >= 2.0.0          |
| ^0           | >= 1.4.0 <= 1.6.1 |

## Docker

MAGE has prepared a Docker image on [**Docker
Hub**](https://hub.docker.com/r/memgraph/memgraph-mage) :whale: ready to be
pulled from
[memgraph/memgraph-mage](https://hub.docker.com/r/memgraph/memgraph-mage).

Install MAGE:

**1.** This is the only command you will need to make it run in your
environment:

```shell
docker run -p 7687:7687 memgraph/memgraph-mage:latest
```

:::info

You can download a specific version of MAGE. For example, if you want to
download version `1.1`, you should run the following command:

```shell
docker run -p 7687:7687 memgraph/memgraph-mage:1.1
```

You can also download a MAGE image equipped for development inside of Docker
containers:

```shell
docker run -p 7687:7687 memgraph/memgraph-mage:1.1-dev
```

By running this command, you will get an image with the following tools
installed: Python3, Rust, Clang, Make, and CMake. This way, you can copy files
to the container, build them inside and import query modules in Memgraph.

If you want to develop your own query modules, be sure to check the [Development
process for MAGE with
Docker](https://github.com/memgraph/mage#developing-mage-with-docker).

:::

## Docker build

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
git clone --recurse-submodules https://github.com/memgraph/mage.git && cd mage
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

## MAGE × NVIDIA cuGraph

Follow this guide to install Memgraph with [**NVIDIA
cuGraph**](https://github.com/rapidsai/cugraph) GPU-powered graph algorithms.

### Prerequisites

:::info

To be able to run cuGraph analytics, make sure you have compatible
infrastructure first. The exact system requirements are available at the
[**NVIDIA RAPIDS site**](https://rapids.ai/start.html#requirements), and include
an NVIDIA Pascal (or better) GPU and up-to-date CUDA & NVIDIA drivers.

:::

**Docker requirements :whale:**

If running MAGE × NVIDIA cuGraph in Docker, the following applies:

- Official [**NVIDIA driver**](https://www.nvidia.com/download/index.aspx) for
  your operating system. 
- To run on NVIDIA-powered GPUs, RAPIDS requires Docker CE v19.03+ and
  [**nvidia-container-toolkit**](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#docker)
  installed.
- Legacy Docker CE v17-18 users require the installation of the
  [**nvidia-docker2**](<https://github.com/NVIDIA/nvidia-docker/wiki/Installation-(version-2.0)>)
  package.

**Local build requirements:**

If building MAGE × NVIDIA cuGraph locally, these requirements apply (tested on
Ubuntu):

- Official [**NVIDIA driver**](https://www.nvidia.com/download/index.aspx) for
  your operating system. 
- [**CMake**](https://cmake.org/) version above 3.20
- [**NVIDIA CUDA developer toolkit**](https://developer.nvidia.com/cuda-toolkit)
  – CUDA version 11.6
- System dependencies: `libblas-dev`, `liblapack-dev`, `libboost-all-dev`
- [**NVIDIA NCCL communications library**](https://developer.nvidia.com/nccl)

## Installing the Docker image from Docker Hub

The simplest way of starting Memgraph with cuGraph GPU analytics is to download
the image from Docker Hub. Just pull the image, and get it running with these
simple commands:

```shell
docker run --rm --gpus all -p 7687:7687 -p 7444:7444 memgraph/memgraph-mage:1.3-cugraph-22.02-cuda-11.5
```

Depending on your environment, different versions of MAGE/cuGraph/CUDA can be
installed:

```shell
docker run --gpus all -p 7687:7687 -p 7444:7444 memgraph/memgraph-mage:${MAGE_VERSION}-cugraph-${CUGRAPH_VERSION}-cuda-${CUDA_VERSION}
```

To see the available versions, explore our Docker Hub organization and look for
the images tagged
[**memgraph-mage**](https://hub.docker.com/r/memgraph/memgraph-mage/tags).

:::info

The development image with cuGraph support is not available yet. If you want to
develop cuGraph-powered query modules in Docker, do not hesitate to [contact
us](https://memgraph.com/community) about it.

:::

### Building MAGE with NVIDIA cuGraph locally with Docker

1.  Download the MAGE source code from
    [GitHub](https://github.com/memgraph/mage):

    ```shell
    git clone https://github.com/memgraph/mage.git && cd mage
    ```

2.  Build the **MAGE × cuGraph**-tagged Docker image:

    ```shell
    docker build -f Dockerfile.cugraph -t memgraph-mage .
    ```

3.  Start Memgraph-MAGE with the following command:
    ```shell
    docker run --rm --gpus all -p 7687:7687 -p 7444:7444 --name mage memgraph-mage
    ```

:::info

You can now query Memgraph from querying platforms such as [Memgraph
Lab](https://memgraph.com/product/lab) or
[mgconsole](https://github.com/memgraph/mgconsole).

If you made any changes while the Docker container was running, you need to stop
the container and rebuild the image. For a workaround, check [Development
process for MAGE with
Docker](/installation/docker-build.md#developing-mage-with-docker).

:::

### Installing MAGE natively from the source

:::warning

Make sure you have installed all prerequisites and dependencies before building
the MAGE × NVIDIA cuGraph from source. 

:::

1. Download the MAGE source code from
   [**GitHub**](https://github.com/memgraph/mage) and run the `setup` script. It
   will generate a `dist` directory with all the needed files:
   ```shell
   python3 setup build --gpu
   ```

  :::info

  The `--gpu` flag enables building the cuGraph dependencies and creating the
  shared library with cuGraph algorithms that are loaded into Memgraph.

  :::

2. Copy the contents of the newly created `dist` directory to
   `/usr/lib/memgraph/query_modules`:

  :::info

  To speed the installation up, you can specify a path for the setup script to
  copy the built executables:

  ```shell
  python3 setup build -p /usr/lib/memgraph/query_modules --gpu
  ```

  :::

3. Start Memgraph and enjoy MAGE × cuGraph!

  :::info 

  If your Memgraph instance was already running, execute the following query
  inside one of the [**querying
  platforms**](https://memgraph.com/docs/memgraph/connect-to-memgraph) to reload
  the modules:

  ```
  CALL mg.load_all();
  ```

  If the modules are still missing, restart the instance by running `systemctl
  stop memgraph` and then `systemctl start memgraph`.

  For more about loading query modules, consult [**this
  guide**](/usage/loading-modules.md).

  :::

  ## Install MAGE on Linux from source

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

To install MAGE from source, first [install Rust and Cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html). 

Then set up the machine by running the following commands: 

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

The command above will also copy the contents of the newly created `dist` directory to
`/usr/lib/memgraph/query_modules`.  Memgraph loads query modules from this directory. 

**If something isn't installed properly, the `setup` script will stop the installation process. If you have any 
questions, contact us on [Discord](https://discord.gg/memgraph).**

:::warning

Be sure you cloned the `mage` GitHub repository using the `--recurse-submodules` flag since it has incorporated Memgraph inside:

```shell
git clone --recurse-submodules https://github.com/memgraph/mage.git
```

if you didn't, you can run following command to update submodules:

```shell
git submodule update --init --recursive
```
:::


**2.** Start Memgraph and enjoy **MAGE**!

:::warning 
Query modules are loaded into Memgraph on startup, so if your instance
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

### Advanced configuration

#### 1. Set a different `query_modules` directory

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
