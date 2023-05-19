---
id: config-logs 
title: How to change configuration settings and access log files
sidebar_label: Change configuration and access logs
---

[![Related - Reference Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/configuration.md)

import Tabs from "@theme/Tabs"; 
import TabItem from "@theme/TabItem";

This how-to guide will show you how to change [configuration settings](/reference-guide/configuration.md) for
Memgraph and check the log files.

Continue reading if you are using [Memgraph with Docker](#docker), or skip to
the [Linux chapter](#linux) if you are using MemgraphDB with **WSL**,
**Ubuntu**, **Debian**, or **RPM package**.

## Docker

Below you will find instructions on configuring Memgraph and [checking
logs](#accessing-logs) if you are using Memgraph with Docker.

### Configuring Memgraph

If you want a custom configuration to be in effect every time you run Memgraph,
[change the main configuration file](#file). 

If you want a certain configuration setting to be applied during this run only,
[pass the configuration option within the `docker run` command](#command).

#### Changing the configuration file {#file}

Begin with starting Memgraph and finding out the `CONTAINER ID`:

**1.** Start Memgraph with a `docker run` command but be sure to include the
following flag `-v mg_etc:/etc/memgraph`. 

**2.** Open a new terminal and find the `CONTAINER ID` of the Memgraph Docker
container using the following command:

```plaintext
docker ps
```

Now, you can choose to either modify the main configuration file outside of
Docker, or within Docker with a command-line text editor (such as **vim**).

<Tabs
  groupId="container"
  defaultValue="outside"
  values={[
    {label: 'Changing configuration outside the container', value: 'outside'},
    {label: 'Changing configuration inside the container', value: 'inside'},
  ]}>
    <TabItem value="outside">

To change the configuration file outside the Docker container continue with the
following steps:

**3.** Place yourself in the directory where you want to copy the configuration
file. 

**4.** Copy the file from the container to your current directory with the
command:

```plaintext
docker cp <CONTAINER ID>:/etc/memgraph/memgraph.conf memgraph.conf
```

Be sure to replace the `<CONTAINER ID>` parameter.

The example below will copy the configuration file to the user's Desktop: 

```plaintext
C:\Users\Vlasta\Desktop>docker cp bb3de2634afe:/etc/memgraph/memgraph.conf memgraph.conf
```

**5.** Open the configuration file with a text editor. 

**6.** Modify the configuration file and save the changes.

**7.** Copy the file from your current directory to the container with the
command:

```plaintext
docker cp  memgraph.conf <CONTAINER ID>:/etc/memgraph/memgraph.conf
```

Be sure to replace the `<CONTAINER ID>` parameter.

The example below will replace the configuration file with the one from the
user's Desktop: 

```plaintext
C:\Users\Vlasta\Desktop>docker cp memgraph.conf bb3de2634afe:/etc/memgraph/memgraph.conf
```

**8.** Restart Memgraph.

**9.** You can check the current configuration by running the `SHOW CONFIG;` query.
 
   </TabItem>
   <TabItem value="inside">

To change the configuration file inside the Docker container continue with the
following steps:

**3.** Enter the Docker container with the following command:

```plaintext
docker exec -it <CONTAINER ID> bash
```

**4.** Install the text editor of your choice.

**5.** Edit the configuration file located at `/etc/memgraph/memgraph.conf`

**6.** Restart Memgraph.

**7.** You can check the current configuration by running the `SHOW CONFIG;` query.

   </TabItem>
   </Tabs>

----

#### Passing configuration options within the `docker run` command {#command}

Select the image you are using to find out how to customize the configuration by
passing configuration options within the `docker run` command.

<Tabs
  groupId="platform"
  defaultValue="platform"
  values={[
    {label: 'memgraph-platform image', value: 'platform'},
    {label: 'Other images', value: 'other'},
  ]}>
    <TabItem value="platform">

If you are working with the `memgraph-platform` image, you should pass
configuration options with environment variables.

For example, if you want to limit memory usage for the whole instance to 50 MiB
and set the log level to `TRACE`, pass the configuration like this:

```
docker run -it -p 7687:7687 -p 3000:3000 -p 7444:7444 -e MEMGRAPH="--memory-limit=50 --log-level=TRACE" memgraph/memgraph-platform
```

   </TabItem>
   <TabItem value="other">

When you are working with `memgraph` or `memgraph-mage` images, you should pass
configuration options as arguments.

For example, if you want to limit memory usage for the whole instance to 50 MiB
and set the log level to `TRACE`, pass the configuration argument like this:

```
docker run -it -p 7687:7687 -p 7444:7444 memgraph/memgraph --memory-limit=50 --log-level=TRACE
```

   
   </TabItem>
   </Tabs>

You can check the current configuration by running the `SHOW CONFIG;` query. 

### Accessing logs

To access the logs of a running instance:

**1.**  Open a new terminal and find the `CONTAINER ID` of the Memgraph Docker
container:

```plaintext
docker ps
```

**2.** Run the following command:

```plaintext
docker exec -it <CONTAINER ID> bash
```

Be sure to replace the `<CONTAINER ID>` parameter.

**3.** Position yourself in the `/var/log/memgraph` directory.

```plaintext
cd /var/log/memgraph
```

**4.** List all the log files with `ls`.

**5.** List the content of the log with the `cat <memgraph_date>.log` command.

For example, if the `ls` command returned `memgraph_2022-03-04.log` you would
list the contents using the following command:

```plaintext
cat memgraph_2022-03-04.log
```

**6.** If you want to save the log to your computer, exit the container with
`CTRL+D`, place yourself in a directory where you want to save the copy and run
the following command:

```plaintext
docker cp  <memgraph_date>.log <CONTAINER ID>:/var/log/memgraph/<memgraph_date>.log
```

For example, the following command will make a copy of the
`memgraph_2022-03-04.log` file on the user's desktop:

```plaintext
C:\Users\Vlasta\Desktop>docker cp memgraph_2022-03-04.log bb3de2634afe:/var/log/memgraph/memgraph_2022-03-04.log.log
```

## Linux

This section of the how-to guide will explain how to change the configuration
file and access logs if you are using MemgraphDB with WSL, Ubuntu, Debian or
RPM package.

### Configuring Memgraph

**1.** Install and run Memgraph.

**2.** Open the configuration file available at `/etc/memgraph/memgraph.conf`.

**3.** Modify the configuration file and save the changes.

**4.** Restart Memgraph.

**5.** You can check the current configuration by running the `SHOW CONFIG;` query. 

### Accessing logs

Logs can be found in the `/var/log/memgraph` directory.
