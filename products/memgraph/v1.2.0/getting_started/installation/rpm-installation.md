## Memgraph RPM Package Installation

This article briefly outlines the basic steps necessary to install the Memgraph RPM package.

### Prerequisites
Before you proceed with the installation guide make sure that you have:
* Downloaded the latest **Memgraph RPM Package** which can be [found here](https://memgraph.com/download/).

### Installation guide {#installation-guide}
After downloading the Memgraph RPM package, you can install it by
issuing the following command:

```
yum --nogpgcheck localinstall /path/to/memgraph-<version>.rpm
```

After successful installation, Memgraph can be started as a
service using the following command:

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

If you want the Memgraph service to start automatically on each startup, run
the following command:

```
systemctl enable memgraph
```

At this point, Memgraph is ready for you to [submit queries](#querying).

#### Configuration
The Memgraph configuration is available in `/etc/memgraph/memgraph.conf`.
If the Memgraph configuration is altered, Memgraph needs to be restarted.

#### Stopping Memgraph

To shut down the Memgraph server, issue the following command:

```plaintext
systemctl stop memgraph
```