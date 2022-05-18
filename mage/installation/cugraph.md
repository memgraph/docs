---
id: cugraph
title: Install MAGE × NVIDIA cuGraph
sidebar_label: MAGE × NVIDIA cuGraph
---

Follow this guide to install Memgraph with [**NVIDIA cuGraph**](https://github.com/rapidsai/cugraph) GPU-powered graph
algorithms.

### Prerequisites

:::info
To be able to run cuGraph analytics, make sure you have compatible infrastructure first. The exact system requirements
are available at the [**NVIDIA RAPIDS site**](https://rapids.ai/start.html#requirements), and include an NVIDIA Pascal 
(or better) GPU and up-to-date CUDA & NVIDIA drivers.
:::

**Docker requirements :whale:**

If running MAGE × NVIDIA cuGraph in Docker, the following applies:

- To run on NVIDIA-powered GPUs, RAPIDS requires Docker CE v19.03+ and
  [**nvidia-container-toolkit**](https://github.com/NVIDIA/nvidia-docker#quickstart) installed.
- Legacy Docker CE v17-18 users require the installation of the
  [**nvidia-docker2**](https://github.com/NVIDIA/nvidia-docker/wiki/Installation-(version-2.0)) package.

**Local build requirements:**

If building MAGE × NVIDIA cuGraph locally, these requirements apply (tested on Ubuntu):

- [**CMake**](https://cmake.org/) version above 3.20
- [**NVIDIA CUDA developer toolkit**](https://developer.nvidia.com/cuda-toolkit) – CUDA version 11.6
- System dependencies: `libblas-dev`, `liblapack-dev`, `libboost-all-dev`
- [**NVIDIA NCCL communications library**](https://developer.nvidia.com/nccl)

## Pulling the Docker image from DockerHub

```shell
docker run -p 7444:7444 memgraph/memgraph-mage:1.3-cugraph-22.02-cuda-11.5
```

* Depending on your environment, different versions of MAGE/cuGraph/CUDA can be installed:
```shell
docker run -p 7444:7444 memgraph/memgraph-mage:${MAGE_VERSION}-cugraph-${CUGRAPH_VERSION}-cuda-${CUDA_VERSION}
```

:::info
The development image with cuGraph support is not available yet. If you want to develop cuGraph-powered query
modules in Docker, do not hesitate to [contact us](https://memgraph.com/community) about it.
:::

## Installing MAGE with NVIDIA cuGraph for Docker

1.  Download the MAGE source code from [GitHub](https://github.com/memgraph/mage):
    ```shell
    git clone https://github.com/memgraph/mage.git && cd mage
    ```

2.  Build the **MAGE × cuGraph**-tagged Docker image:
    ```shell
    docker build -f Dockerfile.cugraph -t memgraph-mage .
    ```

3.  Start Memgraph-MAGE with the following command:
    ```shell
    docker run --rm -p 7444:7444 --name mage memgraph-mage
    ```

:::info
You can now query Memgraph from querying platforms such as [Memgraph Lab](https://memgraph.com/product/lab) or
[mgconsole](https://github.com/memgraph/mgconsole).

If you made any changes while the Docker container was running, you need to stop the container and rebuild the image.
For a workaround, check
[Development process for MAGE with Docker](https://github.com/memgraph/mage#developing-mage-with-docker).
:::

## Installing MAGE natively from the source

:::warning
Make sure you have installed all prerequisites and dependencies before building the MAGE × NVIDIA cuGraph from the
source.
:::

1. Download the MAGE source code from [**GitHub**](https://github.com/memgraph/mage) and run the `setup` script. It will
   generate a `dist` directory with all the needed files:
    ```shell
    python3 setup build --gpu
    ```

:::info
The `--gpu` flag enables building the cuGraph dependencies and creating the shared library with cuGraph algorithms that
is loaded into Memgraph.
:::

2. Copy the contents of the newly created `dist` directory to `/usr/lib/memgraph/query_modules`:

:::info
To speed the installation up, you can specify a path for the setup script to copy the built executables:
```shell
python3 setup build -p /usr/lib/memgraph/query_modules --gpu
```
:::

3. Start Memgraph and enjoy MAGE × cuGraph!

:::info
If your Memgraph instance was already running, execute the following query inside one of the 
[**querying platforms**](https://memgraph.com/docs/memgraph/connect-to-memgraph) to reload the modules:
```
CALL mg.load_all();
```

If the modules are still missing, restart the instance by running `systemctl stop memgraph` and then
`systemctl start memgraph`.

For more about loading query modules, consult the [**guide**](/usage/loading-modules.md).
:::
