---
id: monitoring-server
title: Monitoring server
sidebar_label: Monitoring server
---

Memgraph allows you to connect to its monitoring server via WebSocket and
receive certain information from it.  
For example, each log will be forwarded to all the connected clients.

## Connecting

To connect to Memgraph's WebSocket Server use the following URL:

```plaintext
ws://host:port
```

The default host used is `localhost` but that can be changed using the
`--monitoring-host` configuration flag.  
The default port used is `7444` but that can be changed using the
`--monitoring-port` configuration flag.

### Connecting with a secure connection (WSS)

As for the Bolt connection, SSL is also supported. Same flags are used for both
types of connection - `--bolt-cert-file` and `--bolt-key-file`.

If both of them are set, you will need to use the following URL to connect to
the WebSocket server:

```plaintext
wss://host:port
```

## Authentication

If the authentication is used, Memgraph won't send the message to a certain
connection until it's authenticated.

To authenticate, a JSON with the credentials in the following format is
required:

```json
{
  "username": "<username>",
  "password": "<password>"
}
```

If the credentials are valid, the connection will be made, and the client will
receive the messages. As a response, the client should receive the following
message:

```json
{
  "success": true,
  "message": "User has been successfully authenticated!"
}
```

If they are invalid or the first message is in the invalid format, the
connection is dropped. As a response, the following message is sent:

```json
{
  "success": false,
  "message": "<error-message>"
}
```

:::info 

If authentication is not used (there are no users present in Memgraph),
no authentication message is expected, and no response will be returned. 

:::

### Authorization (Enterprise)

Permission for connecting through WebSocket is controlled by the `WEBSOCKET`
privilege.

## Messages

### Logs

Each log that is written to the log file is forwarded to the connected clients
in the following format:

```json
{
  event: "log",
  level: "trace"|"debug"|"info"|"warning"|"error"|"critical",
  message: "<log-message>"
}
```
