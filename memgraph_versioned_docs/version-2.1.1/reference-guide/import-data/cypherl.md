---
id: cypherl
title: Importing Cypher queries (.cypherl format)
sidebar_label: Cypher queries (.cypherl format)
---

When Memgraph is running, cypher queries are imported by running
[mgconsole](/connect-to-memgraph/mgconsole.md) in non-interactive mode.
The user can import queries saved in e.g. `queries.cypherl` by issuing the
following shell command:

```plaintext
mgconsole < queries.cypherl
```

If you installed the Memgraph image using Docker, you will need to run the
client using the following command:

```plaintext
docker run -i --entrypoint=mgconsole memgraph/memgraph-platform --host HOST < queries.cypherl
```

Remember to replace `HOST` with valid IP of the container (see [Note for Docker
users](/how-to-guides/work-with-docker.md#docker-container-ip-address)).

For more information about `mgconsole` options run:

```plaintext
mgconsole --help
```
