---
id: rpm-installation
title: Install Memgraph from RPM package
sidebar_label: RPM package
slug: /install-memgraph-from-rpm
---

This article briefly outlines the basic steps necessary to install and run
Memgraph from a RPM package.

## Prerequisites

Before you proceed with the installation guide make sure that you have:
* Downloaded the latest **Memgraph RPM Package** which can be [found
  here](https://memgraph.com/download/).

## Installation guide
After downloading the Memgraph RPM package, you can install it by issuing the
following command:

```
yum --nogpgcheck localinstall /path/to/memgraph-<version>.rpm
```

:::info 
**NOTE:** Please take care of the SELinux config. The easiest way of running
Memgraph is to disable SELinux by executing `setenforce 0`. If that's not an
option, please configure system properly.
:::

After successful installation, Memgraph can be started as a service using the
following command:

```
systemctl start memgraph
```

To verify that Memgraph is running, run the following command:

```
journalctl --unit memgraph
```

If successful, you should receive an output similar to the following:

```
Nov 23 13:40:13 hostname memgraph[14654]: BoltS server is fully armed and operational
Nov 23 13:40:13 hostname memgraph[14654]: BoltS listening on 0.0.0.0 at 7687
```

If you want the Memgraph service to start automatically on each startup, run the
following command:

```
systemctl enable memgraph
```

At this point, Memgraph is ready for you to [submit
queries](/getting-started/querying/querying.md).

### Configuration
The Memgraph configuration is available in `/etc/memgraph/memgraph.conf`. If the
Memgraph configuration is altered, Memgraph needs to be restarted.

### Stopping Memgraph

To shut down the Memgraph server, issue the following command:

```
systemctl stop memgraph
```

## Where to next?

To learn how to query the database, take a look at the
**[Querying](/getting-started/querying/querying.md)** guide or **[Memgraph
Playground](https://playground.memgraph.com/)** for interactive tutorials.<br/>
Visit the **[Building
applications](/getting-started/connecting-applications/connecting-applications.md)**
page if you need to connect to the database programmatically.

## Getting help

Visit the **[Getting help](/getting-help/getting-help.md)** page in case you run
into any kind of problem or you have additional questions.
