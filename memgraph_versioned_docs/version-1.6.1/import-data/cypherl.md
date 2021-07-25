---
id: cypherl
title: Importing Cypher queries
sidebar_label: Importing Cypher queries
---

When Memgraph is running, cypher queries are imported by running [mgconsole](/connect-to-memgraph/methods/mgconsole.md) in
non-interactive mode. The user can import queries saved in e.g. `queries.txt`
by issuing the following shell command:

```plaintext
mgconsole --use-ssl=False < queries.txt
```

If you installed Memgraph using Docker, you will need to run the client using
the following command:

```plaintext
docker run -i --entrypoint=mgconsole memgraph --host HOST --use-ssl=False < queries.txt
```

Remember to replace `HOST` with valid IP of the container (see
[Note for Docker users](/database-functionalities/work-with-docker.md#docker-container-ip-address)).

For more information about `mgconsole` options run:

```plaintext
mgconsole --help
```