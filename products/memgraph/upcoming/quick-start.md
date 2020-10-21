## Quick Start

This article briefly outlines the basic steps necessary to install and run
Memgraph. It also introduces how to make queries using [OpenCypher](https://www.opencypher.org).
Finally, please be aware of and understand the implications of
[telemetry](#telemetry) as used by the Memgraph team.

### Installation

Memgraph is available to [download as a binary](https://memgraph.com/download/)
in the following formats:

  * [Debian package for Debian 9 (Stretch)](#debian-installation)
  * [RPM package for CentOS 7](#RPM-installation)
  * [Docker image](#docker-installation)

It is important to note that newer versions of Memgraph are currently not
backward compatible with older versions. This is mainly noticeable by
being unable to load storage snapshots between different versions.

#### Debian Package Installation {#debian-installation}

After downloading Memgraph as a Debian package, install it by running the
following:

```plaintext
dpkg -i /path/to/memgraph_<version>.deb
```

You could get errors while installing the package with the above command if you
don't have all of Memgraph's dependencies installed. The issues mostly look
like the following:

```plaintext
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
Nov 23 13:40:13 hostname memgraph[14654]: Starting 8 BoltS workers
Nov 23 13:40:13 hostname memgraph[14654]: BoltS server is fully armed and operational
Nov 23 13:40:13 hostname memgraph[14654]: BoltS listening on 0.0.0.0 at 7687
```

At this point, Memgraph is ready for you to [submit queries](#querying).

##### Configuration
The Memgraph configuration is available in `/etc/memgraph/memgraph.conf`.


#### RPM Package Installation {#RPM-installation}

After downloading the RPM package of Memgraph, you can install it by
issuing the following command:

```plaintext
yum --nogpgcheck localinstall /path/to/memgraph-<version>.rpm
```

After successful installation, Memgraph can be started as a
service using the following command:

```plaintext
systemctl start memgraph
```

To verify that Memgraph is running, run the following command:

```plaintext
journalctl --unit memgraph
```

If successful, the you should receive an output similar to the following:

```plaintext
Nov 23 13:40:13 hostname memgraph[14654]: Starting 8 BoltS workers
Nov 23 13:40:13 hostname memgraph[14654]: BoltS server is fully armed and operational
Nov 23 13:40:13 hostname memgraph[14654]: BoltS listening on 0.0.0.0 at 7687
```

If you want the Memgraph service to start automatically on each startup, run
the following command:

```plaintext
systemctl enable memgraph
```

At this point, Memgraph is ready for you to [submit queries](#querying).

##### Configuration
The Memgraph configuration is available in `/etc/memgraph/memgraph.conf`.


#### Docker Installation {#docker-installation}

Before proceeding with installation, you should install the Docker
engine if you have not already done so. Instructions on how to do this can be found on
the [official Docker website](https://docs.docker.com/get-started/).
Memgraph's Docker image was built with Docker version `1.12` and should be
compatible with all newer versions.

After successful Docker installation, import the Memgraph
Docker image using the following command:

```plaintext
docker load -i /path/to/memgraph-<version>-docker.tar.gz
```

To start Memgraph, use the following command:

```plaintext
docker run -p 7687:7687 \
  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \
  memgraph
```

If successful, you should see the following message:

```plaintext
Starting 8 workers
Server is fully armed and operational
Listening on 0.0.0.0 at 7687
```

At this point, Memgraph is ready for you to [submit queries](#querying).


##### Configuration

The Memgraph configuration is available in Docker's named volume `mg_etc`. On
Linux systems it should be in
`/var/lib/docker/volumes/mg_etc/_data/memgraph.conf`.


##### Named Volumes
If it happens that the named volumes are reused between different Memgraph
versions, Docker will overwrite a folder within the container with existing
data from the host machine. If a new file is introduced, or two versions of
Memgraph are not compatible, some features might not work or Memgraph might
not be able to work correctly. We strongly advise you to use different
named volumes for different Memgraph versions, or to remove the existing volume
from the host with the following command:

```plaintext
docker volume rm <volume_name>
```
##### Note for OS X/macOS Users {#OSX-note}

Although unlikely, some OS X/macOS users might experience minor difficulties
after the Docker installation. Instead of running on
`localhost`, a Docker container for Memgraph may be running on a custom IP
address. Fortunately, that IP address can be found as follows:

1) Determine the container ID of the Memgraph container

By issuing the command `docker ps` the user should get an output similar to the
following:

```plaintext
CONTAINER ID        IMAGE               COMMAND                  CREATED        ...
9397623cd87e        memgraph            "/usr/lib/memgraph/m…"   2 seconds ago  ...
```

At this point, it is important to remember the container ID of the Memgraph
image.  In our case, that is `9397623cd87e`.

2) Use the container ID to retrieve an IP of the container

```plaintext
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 9397623cd87e
```

The command above should yield the IP that should be used when
connecting to Memgraph and instead of `HOST` when firing up the `mg_client`
with Docker, as described in the [querying](#querying) section.

### Querying {#querying}

Memgraph supports the [openCypher](https://www.opencypher.org) query language
which has been developed by [Neo4j](http://neo4j.com).
It is a declarative language developed specifically
for interaction with graph databases, which is currently going through a
vendor-independent standardization process.

The easiest way to execute openCypher queries against Memgraph is by using
Memgraph's command-line tool, `mg_client`, which is installed
together with Memgraph.

NOTE: `mg_client` is deprecated tool still coming within Memgraph package.
[mgconsole](https://github.com/memgraph/mgconsole) will replace `mg_client` in
the future. If possible, please use `mgconsole` instead.

If you installed Memgraph using Docker, you will need to run the client
using the following command (remember to replace `HOST` with valid IP of
the container - see [Note for OS X/macOS Users](#OSX-note)):

```plaintext
docker run -it --entrypoint=mg_client memgraph --host HOST --use-ssl=False
```

Otherwise, you can connect to the running Memgraph instance by
issuing the following shell command:

```plaintext
mg_client --use-ssl=False
```

After the client has started it should present a command prompt similar to:

```plaintext
mg_client 1.2.0-community
Type :help for shell usage
Quit the shell by typing Ctrl-D(eof) or :quit
Connected to 'memgraph://127.0.0.1:7687'
memgraph>
```

At this point it is possible to execute openCypher queries on Memgraph. Each
query needs to end with the `;` (*semicolon*) character. For example:

```opencypher
CREATE (u:User {name: "Alice"})-[:Likes]->(m:Software {name: "Memgraph"});
```

The above will create 2 nodes in the database, one labeled "User" with name
"Alice" and the other labeled "Software" with name "Memgraph". It will also
create a relationship that "Alice" *likes* "Memgraph".

To find created nodes and relationships, execute the following query:

```opencypher
MATCH (u:User)-[r]->(x) RETURN u, r, x;
```

#### Stopping Memgraph

If the Memgraph configuration is altered, Memgraph needs to be restarted.
If you installed Memgraph using Docker, to stop Memgraph, press `Ctrl-c`.

Otherwise, to shut down the Memgraph server, issue the following command:

```plaintext
systemctl stop memgraph
```

### Telemetry {#telemetry}

Telemetry is an automated process by which data is collected at
a remote point. At Memgraph, we use telemetry for the sole purpose
of improving our product, thereby collecting data about the machine
that executes the database (CPU, memory, OS and kernel information)
as well as data about the database runtime (CPU usage, memory usage,
vertices and edges count).

Here at Memgraph, we care deeply about the privacy of our users and do not
collect any sensitive information. If you wish to disable Memgraph's telemetry
features, you can do so easily, either by altering the line in
`/etc/memgraph/memgraph.conf` that enables telemetry (set `--telemetry-enabled=true`
to the following `--telemetry-enabled=false`), or by including `--telemetry-enabled=false`
as a command-line argument when running the executable.

### Where To Next?

To learn more about the openCypher language, visit our
[reference guide](reference_guide/reference-overview.md) article.
For real-world examples of how to use Memgraph, we strongly suggest reading
through the following articles:

  * [Analyzing TED Talks](tutorials/analyzing-TED-talks.md)
  * [Graphing the Premier League](tutorials/graphing-the-premier-league.md)
  * [Exploring the European Road Network](tutorials/exploring-the-european-road-network.md)

Details on what can be stored in Memgraph can be found in the article about
[Data Storage](concepts/storage.md).

We *welcome and encourage* your feedback!
