---
id: cypherl
title: Importing Cypher queries
sidebar_label: Importing Cypher queries
---
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

When Memgraph is running, cypher queries are imported by running [mgconsole](/connect-to-memgraph/methods/mgconsole.md) in
non-interactive mode. The user can import queries saved in e.g. `queries.cypherl`
by issuing the following shell command:


<Tabs
  groupId="platform"
  defaultValue="docker"
  values={[
    {label: 'Docker 🐳', value: 'docker'},
    {label: 'Linux', value: 'linux'}
  ]}>
  <TabItem value="docker">

:::note
If you are using image pulled from Docker Hub, all image names (`memgraph`) should be switched with `memgraph/memgraph`.
:::

If you installed Memgraph using Docker, you will need to run the client using
the following command:

```plaintext
docker run -i --entrypoint=mgconsole memgraph --host HOST --use-ssl=False < <PATH-TO>/queries.cypherl
```

Remember to replace `HOST` with valid IP of the container (see
[Note for Docker users](/database-functionalities/work-with-docker.md#docker-container-ip-address)).

  </TabItem>
  <TabItem value= 'linux'>

```plaintext
mgconsole --use-ssl=False < <PATH-TO>/queries.cypherl
```

</TabItem>
</Tabs>

For more information about `mgconsole` options run:

```plaintext
mgconsole --help
```