---
id: overview
title: Drivers overview
sidebar_label: Drivers overview
slug: /connect-to-memgraph/drivers
---

## Quick start guides

Find out how to create a simple **`Hello, World!`** program that connects to
Memgraph and executes simple queries:

- **[Python](/connect-to-memgraph/drivers/python.md)**
- **[Rust](/connect-to-memgraph/drivers/rust.md)**
- **[C#](/connect-to-memgraph/drivers/c-sharp.md)**
- **[Java](/connect-to-memgraph/drivers/java.md)**
- **[Go](/connect-to-memgraph/drivers/go.md)**
- **[Node.js](/connect-to-memgraph/drivers/nodejs.md)**
- **[JavaScript](/connect-to-memgraph/drivers/javascript.md)**
- **[PHP](/connect-to-memgraph/drivers/php.md)**

## Supported Languages

If you want to query Memgraph programmatically, you can do so using the [Bolt
protocol](https://7687.org/). The Bolt protocol was designed for efficient
communication with graph databases and **Memgraph supports versions 1 and 4** of
the protocol. Check out the Bolt protocol drivers for the following programming
languages: 

- **[Python](https://github.com/memgraph/pymgclient)**
- **[C/C++](https://github.com/memgraph/mgclient)**
- **[Rust](https://github.com/memgraph/rsmgclient)**
- **[Node.js](https://github.com/neo4j/neo4j-javascript-driver)**
- **[C#](https://github.com/neo4j/neo4j-dotnet-driver)**
- **[Go](https://github.com/neo4j/neo4j-go-driver)**
- **[Haskell](https://github.com/zmactep/hasbolt)**
- **[Java](https://github.com/neo4j/neo4j-java-driver)**
- **[JavaScript](https://github.com/neo4j/neo4j-javascript-driver)**
- **[PHP](https://github.com/neo4j-php/Bolt)**
- **[Ruby](https://github.com/neo4jrb/neo4j)**

## Secure Sockets Layer (SSL) {#secure-sockets-layer}

Secure connections are supported and disabled by default. The server initially
ships with a self-signed testing certificate located at `/etc/memgraph/ssl/`.
You can use it by [changing the configuration](/how-to-guides/config-logs.md) and passing its path within the
following parameters:

```
--bolt-cert-file=/etc/memgraph/ssl/cert.pem
--bolt-key-file=/etc/memgraph/ssl/key.pem
```

If you are using your own certificate be sure to enter the correct path to the
certificate.

To disable SSL support and use insecure connections to the database erase or
make comments out of both parameters (`--bolt-cert-file` and
`--bolt-key-file`) by adding a hashtag in front of them.
