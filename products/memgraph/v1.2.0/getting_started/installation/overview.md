## Quick Start

This article briefly outlines the basic steps necessary to install and run
Memgraph. It also introduces how to make queries using
[OpenCypher](https://www.opencypher.org).

### Installation

Memgraph is available to [download as a binary](https://memgraph.com/download/)
in the following formats:

  * [Debian package](#debian-installation)
  * [RPM package](#RPM-installation)
  * [Docker image](#docker-installation)

It is important to note that newer versions of Memgraph are currently not
backward compatible with older versions. This is mainly noticeable by being
unable to load storage snapshots between different versions.