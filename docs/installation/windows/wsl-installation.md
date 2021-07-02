---
id: wsl-installation
title: Install Memgraph on Windows with WSL
sidebar_label: Windows Subsystem for Linux
slug: /install-memgraph-on-windows-wsl
---

This article briefly outlines the basic steps necessary to install and run
Memgraph on Windows with the Windows Subsystem for Linux.

## Prerequisites

Before you proceed with the installation guide make sure that you have:

- Downloaded the latest **Memgraph Debian Package** which can be [found
  here](https://memgraph.com/download/).
- **Windows Subsystem for Linux** installed. You can find instructions on how to
  install it [here](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
- The **Debian app** from the [Microsoft
  Store](https://www.microsoft.com/en-us/p/debian/9msvkqc78pk6?activetab=pivot:overviewtab).

## Installation guide {#installation-guide}

After downloading Memgraph as a Debian package and starting your Debian app,
install Memgraph by running the following:

```
sudo dpkg -i /path/to/memgraph_<version>.deb
```

:::note Where is the download directory?
Usually, you can find the download directory in this location
`/mnt/<drive>/Users/<username>`.
:::

:::note Why use sudo?
In order to perform some actions on your operating system like installing new
software, you may need **superuser** privileges (commonly called **root**). 
:::

Normally, you would start Memgraph using `systemd`, but unfortunately, this is
not an option in WSL. We can bypass this inconvenience by using the command
`runuser` which allows us to run commands with a substitute user and group ID.

Start the Memgraph server by issuing the following command:

```
sudo runuser -l memgraph -c '/usr/lib/memgraph/memgraph'
```

If Memgraph has been installed correctly, you will see something like this:

```
You are running Memgraph v1.4.0-community
```

At this point, Memgraph is ready for you to [submit
queries](/connect-to-memgraph/overview.md).

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

### Configuration

The Memgraph configuration is available in `/etc/memgraph/memgraph.conf`. If the
Memgraph configuration is altered, Memgraph needs to be restarted.

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
guide](/installation/windows/windows-installation-troubleshooting.md)** to see if
have already covered the topic. For more information on the installation process
and for additional questions, visit the **[Getting
help](/help-center)** page.
