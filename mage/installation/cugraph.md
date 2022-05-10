---
id: cugraph
title: Install NVIDIA accelerated MAGE
sidebar_label: Install NVIDIA accelerated MAGE
---

In this step, we'll show how to prepare the MAGE to work with NVIDIA accelerated graph algorithms
called [cuGraph](https://github.com/rapidsai/cugraph). cuGraph is part of  [RAPIDS](https://rapids.ai/) - GPU Data Science library developed by NVIDIA.

### Prerequisites
:::info 
To successfully run NVIDIA powered graph analytics make sure that you have a compatible infrascture which includes **NVIDIA GPU**. More about system requirements can be found on [**RAPIDS requirements**](https://rapids.ai/start.html#requirements) pages. Make sure to have the right hardware and the right CUDA versions as well as NVIDIA drivers. 
:::

Except for the hardware requirements, there is another checklist depending on the installation source:

**1. Docker requirements :whale::**
- To be able to run on NVIDIA powered GPUs, RAPIDS requires Docker CE v19.03+ and [**nvidia-container-toolkit**](https://github.com/NVIDIA/nvidia-docker#quickstart) installed.
- Legacy Docker CE v17-18 users require the installation of [**nvidia-docker2**](https://github.com/NVIDIA/nvidia-docker/wiki/Installation-(version-2.0)) package  

**2. Local build requirements:**

To be able to locally build NVIDIA support, make sure to enable these requirements, written and tested on the Ubuntu system:

- [CMake](https://cmake.org/) version above 3.20
- [CUDA](https://developer.nvidia.com/cuda-toolkit) Developer toolkit 
- System dependencies: `libblas-dev`, `liblapack-dev`, `libboost-all-dev`
- NVIDIA [NCCL](https://developer.nvidia.com/nccl) - Communications library

## Pull Docker image from DockerHub

**1.** Depending on your environment, different versions of cuGraph can be installed:

```shell
# docker run -p 7687:7687 memgraph/memgraph-mage:${MAGE_VERSION}-cugraph-${CUGRAPH_VERSION}-cuda-${CUDA_VERSION}
docker run -p 7687:7687 memgraph/memgraph-mage:1.3-cugraph-22.02-cuda-11.5
```

*NOTE*: Development image for cuGraph support is not available at this moment, send us a question if you want to develop modules with the support of NVIDIA analytics on Docker.
## Installing MAGE with NVIDIA cuGraph for Docker

**1.** Download the MAGE source code from
**[GitHub](https://github.com/memgraph/mage)**:

```shell
git clone https://github.com/memgraph/mage.git && cd mage
```

**2.** Build the **MAGE** with **cuGraph** tagged Docker image with the following command:

```shell
docker build -f Dockerfile.cugraph -t memgraph-mage .
```

**3.** Start Memgraph-MAGE with the following command:

```shell
docker run --rm -p 7687:7687 -p7444:7444 --name mage memgraph-mage
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

## Installing MAGE natively from source

**1.** Download the MAGE source code from
**[GitHub](https://github.com/memgraph/mage)** and run the `setup` script. It
will generate a `dist` directory with all the needed files:

```shell
python3 setup build --gpu
```

:::info
The **--gpu** flag will enable building the cuGraph dependencies and creating the shared library with **cuGraph** algorithms ready to be loaded into Memgraph. 
:::

**2.** Copy the contents of the newly created `dist` directory to
`/usr/lib/memgraph/query_modules`:

:::info

If you want to be quicker, you can specify a path for setup script to copy the
built executables:

```shell
python3 setup build -p /usr/lib/memgraph/query_modules --gpu
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

