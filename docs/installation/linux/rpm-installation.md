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

```console
yum --nogpgcheck localinstall /path/to/memgraph-<version>.rpm
```

:::info
**NOTE:** Please take care of the SELinux config. The easiest way of running
Memgraph is to disable SELinux by executing `setenforce 0`. If that's not an
option, please configure system properly.
:::

After successful installation, Memgraph can be started as a service using the
following command:

```console
systemctl start memgraph
```

To verify that Memgraph is running, run the following command:

```console
journalctl --unit memgraph
```

If successful, you should receive an output similar to the following:

```console
Nov 23 13:40:13 hostname memgraph[14654]: BoltS server is fully armed and operational
Nov 23 13:40:13 hostname memgraph[14654]: BoltS listening on 0.0.0.0 at 7687
```

If you want the Memgraph service to start automatically on each startup, run the
following command:

```console
systemctl enable memgraph
```

At this point, Memgraph is ready for you to [submit
queries](/connect-to-memgraph/overview.md).

### Configuration

The Memgraph configuration is available in `/etc/memgraph/memgraph.conf`. If the
configuration file is altered, Memgraph needs to be restarted. To learn about
all the configuration options, check out the [Reference
guide](/reference-guide/configuration.md).

### Stopping Memgraph

To shut down the Memgraph server, issue the following command:

```console
systemctl stop memgraph
```

## Where to next?

To learn how to query the database, take a look at the
**[Querying](/connect-to-memgraph/overview.md)** guide or **[Memgraph
Playground](https://playground.memgraph.com/)** for interactive tutorials.<br/>
Visit the **[Building
applications](/connect-to-memgraph/methods/drivers.md)**
page if you need to connect to the database programmatically.

## Getting help

If you run into problems during the installation process, check out our
**[installation troubleshooting
guide](/installation/linux/linux-installation-troubleshooting.md)** to see if
have already covered the topic. For more information on the installation process
and for additional questions, visit the **[Getting
help](/help-center)** page.