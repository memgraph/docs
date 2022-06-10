---
id: macos-installation-troubleshooting
title: Troubleshooting installation on macOS
sidebar_label: Installation troubleshooting
slug: /macos-installation-troubleshooting
pagination_prev: installation/overview
pagination_next: connect-to-memgraph/overview
---

## Issues when connecting to Memgraph

```console
docker run -it memgraph/memgraph-platform
```

While this command will start a Memgraph instance, not publishing the port will
cause problems when trying to connect to the database via **Memgraph Lab** or
**mgconsole**. To avoid this, you should publish the
container's port to the host using the `-p` flag and by specifying the port:

```console
docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 memgraph/memgraph-platform
```

## Issues with connecting **mgconsole** to the database

```console
docker run -it --entrypoint=mgconsole memgraph/memgraph-platform --host HOST
```

Although unlikely, sometimes there are issues with connecting **mgconsole** to
the Docker Container’s IP address because it is running on a custom IP rather
than `localhost`. This problem is most often accompanied with the following
error:

```console
Connection failure: Couldn't connect to 127.0.0.1:7687!
```

To fix this issue, just replace `HOST` from the first command with
`host.docker.internal`. To find out more about networking in Docker, take a
look at [Networking features in Docker Desktop for Mac](https://docs.docker.com/docker-for-mac/networking/) guide.

## Find the IP address of a Docker Container

Although unlikely, some users might experience minor difficulties after the
Docker installation. Instead of running on `localhost`, a Docker container for
Memgraph may be running on a custom IP address. Fortunately, that IP address can
be found as follows:

**1.** Determine the ID of the Memgraph Container by issuing the
command `docker ps`. The user should get an output similar to the following:

```console
CONTAINER ID    IMAGE       COMMAND                  CREATED
9397623cd87e    memgraph    "/usr/lib/memgraph/m…"   2 seconds ago
```

At this point, it is important to remember the container ID of the Memgraph
Image. In our case, that is `9397623cd87e`.

**2.** Use the this ID to retrieve the IP address of the Container:

```console
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 9397623cd87e
```

The command above will yield the IP address that should be used when connecting
to Memgraph via **Memgraph Lab** or **mgconsole** as described in
the [querying](/connect-to-memgraph/overview.mdx) section. Just replace
`HOST` from the following command with the appropriate IP address:

```console
docker run -it --entrypoint=mgconsole memgraph/memgraph-platform --host HOST
```
