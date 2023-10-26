---
id: rpm-package
title: Install Memgraph from RPM package
sidebar_label: RPM package
---

This article briefly outlines the basic steps necessary to install and run
Memgraph from a RPM package.

import BackwardCompatibilityWarning from '../../templates/_backward_compatibility_warning.mdx';

<BackwardCompatibilityWarning/>

## Prerequisites

Before you proceed with the installation guide make sure that you have:
* The latest **Memgraph RPM Package** which can be downloaded from the
  [Memgraph download hub](https://memgraph.com/download/).

:::note

Memgraph packages are available for:
- **CentOS 7**
- **CentOS 9**
- **Fedora 36**
- **RedHat 7**
- **RedHat 9**

:::

You can also use [direct download](../direct-download-links.md) links to get the
latest Memgraph packages. 

## Installation guide

After downloading the Memgraph RPM package, you can install it by issuing the
following command:

```console
sudo yum --nogpgcheck localinstall /path-to/memgraph-<version>.rpm
```

:::info
**NOTE:** Please take care of the SELinux config. The easiest way of
running Memgraph is to disable SELinux by executing `setenforce 0`. If that's
not an option, please configure system properly.
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
You are running Memgraph vX.X.X
```

If you want the Memgraph service to start automatically on each startup, run the
following command:

```console
systemctl enable memgraph
```

If you want to start Memgraph with different configuration settings, check out
the [Configuration section](#configuration). At this point, Memgraph is ready for you
to [submit queries](/connect-to-memgraph/overview.mdx).

## Stopping Memgraph

To shut down the Memgraph server, issue the following command:

```console
systemctl stop memgraph
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
