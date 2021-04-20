---
id: debian-installation
title: Install Memgraph on Debian
sidebar_label: Debian
slug: /install-memgraph-on-debian
---

This article briefly outlines the basic steps necessary to install and run
Memgraph on Debian.

## Prerequisites

Before you proceed with the installation guide make sure that you have:
* Downloaded the latest **Memgraph Debian Package** which can be [found
  here](https://memgraph.com/download/).

## Installation guide {#installation-guide}

After downloading Memgraph as a Debian package, install it by running the
following:

```console
sudo dpkg -i /path/to/memgraph_<version>.deb
```

:::note Why use sudo? 
In order to perform some actions on your operating system like installing new
software, you may need **superuser** privileges (commonly called **root**). 
:::

:::caution Potential installation error 
You could get errors while installing the package with the above command if you
don't have all of Memgraph's dependencies installed. The issues mostly look like
the following:

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

On successful installation, Memgraph should already be running. To confirm it,
you can start it explicitly as follows:

```console
sudo systemctl start memgraph
```

To verify that Memgraph is running, run the following:

```console
sudo journalctl --unit memgraph
```

If successful, you should receive an output similar to the following:

```console
Apr 08 06:16:23 Going-Merry systemd[1]: Started Memgraph: High performance, in-memory, transactional graph>
Apr 08 06:16:23 Going-Merry memgraph[459969]: You are running Memgraph v1.4.0-community
```

At this point, Memgraph is ready for you to [submit
queries](/getting-started/querying/querying.md).

### Configuration

The Memgraph configuration is available in `/etc/memgraph/memgraph.conf`. If the
configuration file is altered, Memgraph needs to be restarted. To learn about
all the configuration options, check out the [Reference
guide](/reference-guide/configuration.md).

### Stopping Memgraph

To shut down the Memgraph server, issue the following command:

```console
sudo systemctl stop memgraph
```

## Where to next?

To learn how to query the database, take a look at the
**[Querying](/getting-started/querying/querying.md)** guide or **[Memgraph
Playground](https://playground.memgraph.com/)** for interactive tutorials.<br/>
Visit the **[Building
applications](/getting-started/connecting-applications/connecting-applications.md)**
page if you need to connect to the database programmatically.

## Getting help

If you run into problems during the installation process, check out our
**[installation troubleshooting
guide](/installation/linux/linux-installation-troubleshooting.md)** to see if
have already covered the topic. For more information on the installation process
and for additional questions, visit the **[Getting
help](/getting-help/getting-help.md)** page.