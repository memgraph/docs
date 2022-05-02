---
id: websocket
title: Connecting with WebSocket
sidebar_label: WebSocket
---

import Tabs from "@theme/Tabs"; import TabItem from "@theme/TabItem";

It is also possible to send queries and receive results via `WebSocket`
connection.

## 1. How to setup a WebSocket connection

First you need to start running Memgraph. You can check out
[installation](/installation/overview) pages to help you get started.

You don't need to setup anything to start using WebSocket connection, the only
thing you need is a client that uses `WebSocket` to connect to Memgraph,
and Memgraph will automatically recognize `the nature of connection. The port
you will be connection to remains the same.

In other words you should use the Memgraph's address and the port number defined
by the configuration flag `--bolt-port` to connect to Memgraph.

## 2. WebSocket clients

To connect to memgraph via WebSocket you can use our `JavaScript` client
[jsmgclient](https://github.com/memgraph/jsmgclient).

## Secure Sockets Layer (SSL)

`WebSocket` over `SSL` is currently not supported in Memgraph.
