---
id: laberrors
title: Connection Troubleshooting
sidebar_label: Connection Troubleshooting
---

# Connection troubleshoot


### Memgraph instance not running or wrong port entered
```
Unable to connect to memgraph. Please check whether host and port parameters are correct and make sure Memgraph is running.
```

This error might appear in two different scenarios:
1. Memgraph instance not running
2. Wrong port was entered

To avoid this error from appearing, make sure Memgraph instance is running. That is indiciated by the following message in the terminal
```
You are running Memgraph v1.4.0-community!
```

If the error persist, it could mean that the assigned port is different. Check your configuration for correct port.

If you are a Docker user, you might have started your Memgraph instance with `docker run memgraph` command. Even though this command will start the instance, it is necessery to map the port when starting Memgraph. Correct command would therefore be:

```
docker run -p 7687:7687 memgraph
```

### Wrong host
```
Unable to connect to Memgraph. Please check that the Host contains IP or hostname (without protocol)
```

This error might appear if wrong host was entered. To avoid this issue, enter either `localhost`or `127.0.0.1` in `Endpoint` field or check your configuration for the correct port. 

### Enabling encryption
```
Unknown connection error. Please contact Memgraph support!
```

As of v1.2, Memgraph comes with SSL turned off by default. 