---
id: linux-installation-troubleshooting
title: Troubleshooting installation on Linux
sidebar_label: Installation troubleshooting
slug: /linux-installation-troubleshooting
pagination_prev: installation/overview
pagination_next: connect-to-memgraph/overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="operating-systems"
  defaultValue="docker"
  values={[
    {label: 'Docker 🐳', value: 'docker'},
    {label: 'Ubuntu/Debian', value: 'debian'},
  ]}>
  <TabItem value="docker">

## Issues when connecting to Memgraph

```console
docker run -it memgraph/memgraph-platform
```

While this command will start a Memgraph instance, not publishing the port will
cause problems when trying to connect to the database via **Memgraph Lab** or
**mgconsole**. To avoid this, you should publish the
container's port to the host using the `-p` flag and by specifying the port:

```console
docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 memgraph/memgraph-platform
```

## Find the IP address of a Docker Container

Although unlikely, some users might experience minor difficulties after the
Docker installation. Instead of running on `localhost`, a Docker container for
Memgraph may be running on a custom IP address. Fortunately, that IP address can
be found as follows:

**1.** Determine the ID of the Memgraph Container by issuing the
command `docker ps`. The user should get an output similar to the following:

```console
CONTAINER ID    IMAGE       COMMAND                  CREATED
9397623cd87e    memgraph    "/usr/lib/memgraph/m…"   2 seconds ago
```

At this point, it is important to remember the container ID of the Memgraph
Image. In our case, that is `9397623cd87e`.

**2.** Use the this ID to retrieve the IP address of the Container:

```console
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 9397623cd87e
```

The command above will yield the IP address that should be used when connecting
to Memgraph via **Memgraph Lab** or **mgconsole** as described in
the [querying](/connect-to-memgraph/overview.mdx) section. Just replace
`HOST` from the following command with the appropriate IP address:

```console
docker run -it --entrypoint=mgconsole memgraph/memgraph-platform --host HOST
```

  </TabItem>
  <TabItem value="debian">

## Unable to install the Memgraph package with `dpkg`

While running the following `dpkg` command:

```bash
dpkg -i /path-to/memgraph_<version>.deb
```

you may encounter errors that resemble the following:

```console
dpkg: error processing package memgraph (--install): dependency problems -
leaving unconfigured Errors were encountered while processing: memgraph
```

These errors indicate that you don’t have all of the necessary dependencies
installed. To install the missing dependencies and finish the installation,
issue the following command:

```console
sudo apt-get install -f
```

## Multiple notes when starting Memgraph

When you start a Memgraph instance, you may see the following list of notes in
your terminal:

```console
You are running Memgraph v1.4.0-community

NOTE: Please install networkx to be able to use graph_analyzer module. Using Python:
3.8.2 (default, Jul 16 2020, 14:00:26)
[GCC 9.3.0]

NOTE: Please install networkx to be able to use Memgraph NetworkX wrappers. Using Python:
3.8.2 (default, Jul 16 2020, 14:00:26)
[GCC 9.3.0]

NOTE: Please install networkx, numpy, scipy to be able to use proxied NetworkX algorithms. E.g., CALL nxalg.pagerank(...).
Using Python:
3.8.2 (default, Jul 16 2020, 14:00:26)
[GCC 9.3.0]

NOTE: Please install networkx to be able to use wcc module.
Using Python:
3.8.2 (default, Jul 16 2020, 14:00:26)
[GCC 9.3.0]
```

If you wish to work with built-in NetworkX modules in Memgraph, you need to
install the following Python libraries:
* [NumPy](https://numpy.org/)
* [SciPy](https://www.scipy.org/)
* [NetworkX](https://networkx.org/)

For more information on how to install Python libraries in Linux, follow the
[Installing Packages
guide](https://packaging.python.org/tutorials/installing-packages/). If you are
not interested in working with query modules that depend on these libraries, you
can ignore the warnings.

  </TabItem>
</Tabs>
