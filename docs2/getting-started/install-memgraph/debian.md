---
id: debian
title: Install Memgraph on Debian
sidebar_label: Debian
---

This article briefly outlines the basic steps necessary to install and run
Memgraph on Debian.

import BackwardCompatibilityWarning from '../../templates/_backward_compatibility_warning.mdx';

<BackwardCompatibilityWarning/>

## Prerequisites

Before you proceed with the installation guide make sure that you have:
* The latest **Memgraph Debian Package** which can be downloaded from the
  [Memgraph download hub](https://memgraph.com/download/).

:::note

Memgraph packages are available for:
- **Debian 10**
- **Debian 11**

:::

You can also use [direct download](../direct-download-links.md) links to get the
latest Memgraph packages. 

## Installation guide {#installation-guide}

After downloading Memgraph as a Debian package, install it by running the
following:

```console
sudo dpkg -i /path-to/memgraph_<version>.deb
```

:::note Why use sudo?
In order to perform some actions on your operating system
like installing new software, you may need **superuser** privileges (commonly
called **root**). 
:::

:::caution Potential installation error
You could get errors while installing
the package with the above command if you don't have all of Memgraph's
dependencies installed. The issues mostly look like the following:

```console
dpkg: error processing package memgraph (--install):
 dependency problems - leaving unconfigured
Errors were encountered while processing:
 memgraph
```

To install missing dependencies and finish the installation of the Memgraph
package, just issue the following command:

```console
sudo apt-get install -f
```

The above command will install all missing dependencies and will finish
configuring the Memgraph package.
:::

To verify that Memgraph is running, run the following:

```console
sudo journalctl --unit memgraph
```

If successful, you should receive an output similar to the following:

```console
You are running Memgraph vX.X.X
```

If the Memgraph database instance is not running, you can start it explicitly:

```console
sudo systemctl start memgraph
```

If you want to start Memgraph with different configuration settings, check out
the [Configuration section](#configuration). At this point, Memgraph is ready for you
to [submit queries](/connect-to-memgraph/overview.mdx).

## Stopping Memgraph

To shut down the Memgraph server, issue the following command:

```console
sudo systemctl stop memgraph
```

## Configuration

The Memgraph configuration is available in `/etc/memgraph/memgraph.conf`. If the
configuration file is altered, Memgraph needs to be restarted. To learn about
all the configuration options, check out the [Reference
guide](/reference-guide/configuration.md).

## Troubleshooting

### Unable to install the Memgraph package with `dpkg`

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

### Multiple notes when starting Memgraph

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

For more information on the installation process and for additional questions,
visit the **[Help Center](/help-center)** page.

## Where to next?

To learn how to query the database, take a look at the
**[querying](/connect-to-memgraph/overview.mdx)** guide or **[Memgraph
Playground](https://playground.memgraph.com/)** for interactive tutorials.<br/>
Visit the **[Drivers overview](/connect-to-memgraph/drivers/overview.md)**
page if you need to connect to the database programmatically.