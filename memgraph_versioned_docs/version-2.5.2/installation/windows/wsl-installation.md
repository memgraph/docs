---
id: wsl-installation
title: Install MemgraphDB on Windows with WSL
sidebar_label: Windows Subsystem for Linux
slug: /install-memgraph-on-windows-wsl
pagination_prev: installation/overview
pagination_next: connect-to-memgraph/overview
---

[![Related - Tutorial](https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge)](/tutorials/install-memgraph-on-windows-10.md)

This article briefly outlines the basic steps necessary to install and run
Memgraph on Windows with the Windows Subsystem for Linux.

:::caution

Newer versions of Memgraph **might not be backward compatible** with older
versions and you might not be able to load storage snapshots between different
versions. In that case, please [contact the Memgraph
team](mailto:tech@memgraph.com) and we'll help with the migration as much as
possible.

:::

## Prerequisites

Before you proceed with the installation guide make sure that you have:

- The latest **Memgraph Ubuntu package** which can be downloaded from the
  [Memgraph download hub](https://memgraph.com/download/).
- Installed **Windows Subsystem for Linux (WSL)**. For detailed instructions,
  refer to the [Microsoft
  documentation](https://docs.microsoft.com/en-us/windows/wsl/install).

## Installation guide {#installation-guide}

**1.** Start WSL by running the following command from **PowerShell**:

```console
wsl
```

**2.** Install MemgraphDB using the latest Memgraph Ubuntu package and by running the
following command in the Ubuntu terminal:

```console
sudo dpkg -i /mnt/<drive>/Users/<windows username>/Downloads/memgraph_<version>.deb
```

**3.** Start the Memgraph server by issuing the following command:

```
sudo runuser -l memgraph -c '/usr/lib/memgraph/memgraph'
```

If successful, you should receive an output similar to the following:

```
You are running Memgraph vX.X.X
```

If you want to start Memgraph with different configuration settings, check out
the [Configuration section](#configuration).<br/>
At this point, Memgraph is ready for you
to [submit queries](/connect-to-memgraph/overview.mdx).

:::caution
Potential installation error You could get errors while installing the package
with the above commands if you don't have all of Memgraph's dependencies
installed. The issues mostly look like the following:

```
dpkg: error processing package memgraph (--install):
 dependency problems - leaving unconfigured
Errors were encountered while processing:
 memgraph
```

To install missing dependencies and finish the installation of the Memgraph
package, just issue the following command:

```
sudo apt-get install -f
```

The above command will install all missing dependencies and will finish
configuring the Memgraph package.
:::

## Configuration

The Memgraph configuration file is available at `/etc/memgraph/memgraph.conf`. If the
configuration file is altered, Memgraph needs to be restarted. 

To learn about
all the configuration options, check out the [Reference
guide](/reference-guide/configuration.md).

## Where to next?

To learn how to query the database, take a look at the
**[querying](/connect-to-memgraph/overview.mdx)** guide or **[Memgraph
Playground](https://playground.memgraph.com/)** for interactive tutorials.<br/>
Visit the **[Drivers overview](/connect-to-memgraph/drivers/overview.md)**
page if you need to connect to the database programmatically.

## Getting help

If you run into problems during the installation process, check out our
**[installation troubleshooting
guide](/installation/windows/windows-installation-troubleshooting.md)** to see
if we have already covered the topic. For more information on the installation
process and for additional questions, visit the **[Help Center](/help-center)**
page.
