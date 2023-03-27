---
id: ubuntu-installation
title: Install Memgraph on Ubuntu
sidebar_label: Ubuntu
slug: /install-memgraph-on-ubuntu
pagination_prev: installation/overview
pagination_next: connect-to-memgraph/overview
---

This article briefly outlines the basic steps necessary to install and run
Memgraph on Ubuntu.

:::caution

Newer versions of Memgraph **might not be backward compatible** with older
versions and you might not be able to load storage snapshots between different
versions. In that case, please [contact the Memgraph
team](mailto:tech@memgraph.com) and we'll help with the migration as much as
possible.

:::

## Prerequisites

Before you proceed with the installation guide make sure that you have:
* The latest **Memgraph Ubuntu Package** which can be downloaded from the
  [Memgraph download hub](https://memgraph.com/download/).

:::note

Memgraph packages are available for:
- **Ubuntu 18.04**
- **Ubuntu 20.04**
- **Ubuntu 22.04**

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

If the Memgraph database instance is not running, you can start it explicitly::

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

## Where to next?

To learn how to query the database, take a look at the
**[querying](/connect-to-memgraph/overview.mdx)** guide or **[Memgraph
Playground](https://playground.memgraph.com/)** for interactive tutorials.<br/>
Visit the **[Drivers overview](/connect-to-memgraph/drivers/overview.md)**
page if you need to connect to the database programmatically.

## Getting help

If you run into problems during the installation process, check out our
**[installation troubleshooting
guide](/installation/linux/linux-installation-troubleshooting.md)** to see if we
have already covered the topic. For more information on the installation process
and for additional questions, visit the **[Help Center](/help-center)** page.
