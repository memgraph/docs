---
id: websocket
title: Connecting with WebSocket
sidebar_label: WebSocket
---

It is also possible to send queries and receive results via `WebSocket`
connection.

## How to set up a WebSocket connection?

First, you need to start Memgraph. You can check out
[installation](/installation/overview.mdx) pages to help you get started.

You don't need to set up anything to start using a WebSocket connection, the
only thing you need is a client that uses `WebSocket` to connect to Memgraph,
and Memgraph will automatically recognize the nature of the connection. The port
you will be connected to remains the same.

In other words, you should use Memgraph's address and the port number defined by
the configuration flag `--bolt-port` to connect to Memgraph (`7687` by default).

## WebSocket clients

To connect to memgraph via WebSocket you can use the [JavaScript
client](/connect-to-memgraph/drivers/javascript.md).

## Secure Sockets Layer (SSL)

`WebSocket` over `SSL` is currently not supported in Memgraph.
