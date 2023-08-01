---
id: docker-compose
title: Docker Compose
sidebar_label: Docker Compose
---

If you define an application with **Docker Compose**, you can use that
definition to run the application in CI, staging, or production environments.
Here you can find `docker-compose.yml` files necessary to run [**Memgraph
Platform**](#docker-compose-for-memgraph-platform-image), [**Memgraph
MAGE**](#docker-compose-for-memgraph-mage-image) and
[**Memgraph**](#docker-compose-for-memgraph-image) images.

[![Related - How-to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/how-to-guides/work-with-docker.md)

## Docker Compose for Memgraph Platform image

The **Memgraph Platform** image contains:

- **MemgraphDB** - the database that holds your data
- **Memgraph Lab** - visual user interface for running queries and visualizing
  graph data
- **mgconsole** - command-line interface for running queries
- **MAGE** - graph algorithms and modules library

```yaml
version: "3"
services:
  memgraph-platform:
    image: "memgraph/memgraph-platform"
    ports:
      - "7687:7687"
      - "3000:3000"
      - "7444:7444"
    volumes:
      - mg_lib:/var/lib/memgraph
      - mg_log:/var/log/memgraph
      - mg_etc:/etc/memgraph
    environment:
      - MEMGRAPH="--log-level=TRACE"
    entrypoint: ["/usr/bin/supervisord"]
volumes:
  mg_lib:
  mg_log:
  mg_etc:
```

The port `7687` is used for communication with Memgraph via Bolt protocol. The
port `3000` is exposed because Memgraph Lab will be running on `localhost:3000`,
while the port `7444` is there so that you can see logs from Memgraph inside
Memgraph Lab. We specified three useful volumes:

- `mg_lib` - directory containing data that enables data persistency
- `mg_log` - directory containing log files
- `mg_etc` - directory containing the configuration file

The exact location of the local directories depends on your specific setup.

[Configuration settings](/reference-guide/configuration.md) can be changed by
setting the value of the `MEMGRAPH` environment variable. In the above example,
you can see how to set `--log-level` to `TRACE`. Since Memgraph Platform is not
a single service, the process manager
[`supervisord`](https://docs.docker.com/config/containers/multi-service_container/)
is used as the main running process in the `entrypoint`. The MAGE library is
included in this image, so you can use the available graph algorithms.

## Docker Compose for Memgraph MAGE image

The **Memgraph MAGE** image contains:

- **MemgraphDB** - the database that holds your data
- **MAGE** - graph algorithms and modules library

```yaml
version: "3"
services:
  memgraph-mage:
    image: "memgraph/memgraph-mage"
    volumes:
      - mg_lib:/var/lib/memgraph
      - mg_log:/var/log/memgraph
      - mg_etc:/etc/memgraph
    ports:
      - "7687:7687"
      - "7444:7444"
    entrypoint: ["/usr/lib/memgraph/memgraph", "--log-level=TRACE"]
volumes:
  mg_lib:
  mg_log:
  mg_etc:
```

The port `7687` is used for communication with Memgraph via Bolt protocol, while
the port `7444` is there so that you can see logs from Memgraph inside the
Memgraph Lab application. We specified three useful volumes:

- `mg_lib` - directory containing data that enables data persistency
- `mg_log` - directory containing log files
- `mg_etc` - directory containing the configuration file

The exact location of the local directories depends on your specific setup.

[Configuration settings](/reference-guide/configuration.md) can be changed by
adding the `entrypoint`. You first need to add `/usr/lib/memgraph/memgraph` and
then the configuration setting you'd like to change. In the above example, you
can see how to set `--log-level` to `TRACE`. Since the MAGE library is included
in this image, you can use the available graph algorithms.

## Docker Compose for Memgraph image

The **Memgraph** image contains **MemgraphDB** - the database that holds your
data.

```yaml
version: "3"
services:
  memgraph:
    image: "memgraph/memgraph"
    ports:
      - "7687:7687"
      - "7444:7444"
    volumes:
      - mg_lib:/var/lib/memgraph
      - mg_log:/var/log/memgraph
      - mg_etc:/etc/memgraph
    entrypoint: ["/usr/lib/memgraph/memgraph", "--log-level=TRACE"]
volumes:
  mg_lib:
  mg_log:
  mg_etc:
```

The port `7687` is used for communication with Memgraph via Bolt protocol, while
the port `7444` is there so that you can see logs from Memgraph inside the
Memgraph Lab application. We specified three useful volumes:

- `mg_lib` - directory containing data that enables data persistency
- `mg_log` - directory containing log files
- `mg_etc` - directory containing the configuration file

The exact location of the local directories depends on your specific setup.

[Configuration settings](/reference-guide/configuration.md) can be changed by
adding the `entrypoint`. You first need to add `/usr/lib/memgraph/memgraph` and
then the configuration setting you'd like to change. In the above example, you
can see how to set `--log-level` to `TRACE`. Since this image doesn't have the
MAGE library included, you won't be able to use graph algorithms.

> Want to see applications built with Memgraph and Docker Compose? Check out
> [Memgraph's Github](https://github.com/memgraph) repositories.
