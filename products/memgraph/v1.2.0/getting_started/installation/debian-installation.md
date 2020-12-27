## Install Memgraph on Debian/Ubuntu

This article briefly outlines the basic steps necessary to install the Memgraph Debian package.

### Prerequisites
Before you proceed with the installation guide make sure that you have:
* Downloaded the latest **Memgraph Debian Package** which can be [found here](https://memgraph.com/download/).

### Installation guide {#installation-guide}

After downloading Memgraph as a Debian package, install it by running the
following:

```
dpkg -i /path/to/memgraph_<version>.deb
```

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

```plaintext
apt-get install -f
```

The above command will install all missing dependencies and will finish
configuring the Memgraph package.

On successful installation, Memgraph should already be running. To
confirm it, you can start it explicitly as follows:

```plaintext
systemctl start memgraph
```

To verify that Memgraph is running, run the following:

```plaintext
journalctl --unit memgraph
```

If successful, you should receive an output similar to the following:

```plaintext
Nov 23 13:40:13 hostname memgraph[14654]: BoltS server is fully armed and operational
Nov 23 13:40:13 hostname memgraph[14654]: BoltS listening on 0.0.0.0 at 7687
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