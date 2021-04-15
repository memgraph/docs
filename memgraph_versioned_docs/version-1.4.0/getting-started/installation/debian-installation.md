---
id: debian-installation
title: Install Memgraph for Debian
sidebar_label: Debian GNU/Linux
---

This article briefly outlines the basic steps necessary to install the Memgraph Debian package.

## Prerequisites

Before you proceed with the installation guide make sure that you have:
* Downloaded the latest **Memgraph Debian Package** which can be [found here](https://memgraph.com/download/).

## Installation guide {#installation-guide}

After downloading Memgraph as a Debian package, install it by running the
following:

```
sudo dpkg -i /path/to/memgraph_<version>.deb
```

:::note Why use sudo?
In order to perform some actions on your operating system like installing new software, you may need **superuser** privileges (commonly called **root**). 
:::

:::caution Potential installation error
You could get errors while installing the package with the above command if you
don't have all of Memgraph's dependencies installed. The issues mostly look
like the following:

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

On successful installation, Memgraph should already be running. To
confirm it, you can start it explicitly as follows:

```
sudo systemctl start memgraph
```

To verify that Memgraph is running, run the following:

```
sudo journalctl --unit memgraph
```

If successful, you should receive an output similar to the following:

```
Apr 08 06:16:23 Going-Merry systemd[1]: Started Memgraph: High performance, in-memory, transactional graph>
Apr 08 06:16:23 Going-Merry memgraph[459969]: You are running Memgraph v1.4.0-community
```

At this point, Memgraph is ready for you to [submit queries](../querying/querying.md).

### Configuration

The Memgraph configuration is available in `/etc/memgraph/memgraph.conf`.
If the Memgraph configuration is altered, Memgraph needs to be restarted.

### Stopping Memgraph

To shut down the Memgraph server, issue the following command:

```
sudo systemctl stop memgraph
```

## Where to next?

To learn how to query the database, take a look at the **[Querying](../querying/querying.md)** guide or **[Memgraph Playground](https://playground.memgraph.com/)** for interactive tutorials.<br/>
Visit the **[Building applications](/getting-started/connecting-applications/connecting-applications.md)** page if you need to 
connect to the database programmatically.

## Getting help

Visit the **[Getting help](/getting-help/getting-help.md)** page in case you run into any kind of problem or you have additional questions.
