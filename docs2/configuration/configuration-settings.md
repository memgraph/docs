---
id: configuration-settings
title: Configuration settings
sidebar_label: Configuration settings
---

[![Related - How-to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/how-to-guides/config-logs.md)

The main Memgraph configuration file is available in
`/etc/memgraph/memgraph.conf` . You can modify that file to suit your specific
needs. Additional configuration can be specified by including another
configuration file, in a file pointed to by the `MEMGRAPH_CONFIG` environment
variable or by passing arguments on the command line.

Each configuration setting is in the form: `--setting-name=value` .

You can check the current configuration by using the following query (privilege level `CONFIG` is required):
```opencypher
SHOW CONFIG;
```

## Bolt

| Flag           | Description    | Type           |
| -------------- | -------------- | -------------- |
| --bolt-address=0.0.0.0 | IP address on which the Bolt server should listen. | `[string]` |
| --bolt-cert-file= | Certificate file which should be used for the Bolt server. | `[string]` |
| --bolt-key-file= | Key file which should be used for the Bolt server. | `[string]` |
| --bolt-num-workers= | Number of workers used by the Bolt server. <br/>By default, this will be the number of processing units available on the machine. | `[int32]` |
| --bolt-port=7687 | Port on which the Bolt server should listen. | `[int32]` |
| --bolt-server-name-for-init= | Server name which the database should send to the client in the Bolt INIT message. | `[string]` |
| --bolt-session-inactivity-timeout=1800 | Time in seconds after which inactive Bolt sessions will be closed. | `[int32]` |

:::note

Memgraph does not limit the maximum amount of simultaneous sessions.
Transactions within all open sessions are served with a limited number of Bolt
workers simultaneously.

:::


## Query

| Flag           | Description    | Type           |
| -------------- | -------------- | -------------- |
| --query-cost-planner=true | Use the cost-estimating query planner. | `[bool]` |
| --query-execution-timeout-sec=180 | Maximum allowed query execution time. <br/>Queries exceeding this limit will be aborted. Value of 0 means no limit. | `[uint64]` |
| --query-max-plans=1000 | Maximum number of generated plans for a query. | `[uint64]` |
| --query-modules-directory=/usr/lib/memgraph/query_modules | Directory where modules with custom query procedures are stored. NOTE: Multiple comma-separated directories can be defined. | `[string]` |
| --query-plan-cache-ttl=60 | Time to live for cached query plans, in seconds. | `[int32]` |
| --query-vertex-count-to-expand-existing=10 | Maximum count of indexed vertices which provoke indexed lookup and then expand to existing, <br/>instead of a regular expand. Default is 10, to turn off use -1. | `[int64]` |

## Storage

| Flag           | Description    | Type           |
| -------------- | -------------- | -------------- |
| --storage-gc-cycle-sec=30 | Storage garbage collector interval (in seconds). | `[uint64]` |
| --storage-properties-on-edges=true | Controls whether edges have properties. | `[bool]` |
| --storage-recover-on-startup=true | Controls whether the storage recovers persisted data on startup. | `[bool]` |
| --storage-snapshot-interval-sec=300 | Storage snapshot creation interval (in seconds). Set to 0 to disable periodic snapshot creation. | `[uint64]` |
| --storage-snapshot-on-exit=true | Controls whether the storage creates another snapshot on exit. | `[bool]` |
| --storage-snapshot-retention-count=3 | The number of snapshots that should always be kept. | `[uint64]` |
| --storage-wal-enabled=true | Controls whether the storage uses write-ahead-logging. To enable WAL periodic snapshots must be enabled. | `[bool]` |
| --storage-wal-file-flush-every-n-tx=100000 | Issue a 'fsync' call after this amount of transactions are written to the WAL file. Set to 1 for fully synchronous operation. | `[uint64]` |
| --storage-wal-file-size-kib=20480 | Minimum file size of each WAL file. | `[uint64]` |
| --storage-items-per-batch=1000000 | The number of edges and vertices stored in a batch in a snapshot file. | `[uint64]` |
| --storage-recovery-thread-count= | The number of threads used to recover persisted data from disk. | `[uint64]` |
| --storage-parallel-index-recovery=false | Controls whether the index creation can be done in a multithreaded fashion during recovery. | `[bool]` |

## Streams

| Flag           | Description    | Type           |
| -------------- | -------------- | -------------- |
| --kafka-bootstrap-servers | List of Kafka brokers as a comma separated list of broker `host` or `host:port`. | `[string]` |
| --pulsar-service-url | The service URL that will allow Memgraph to locate the Pulsar cluster. | `[string]` |
| --stream-transaction-conflict-retries=30 | Number of times to retry a conflicting transaction of a stream. | `[uint32]` |
| --stream-transaction-retry-interval=500 | The interval to wait (measured in milliseconds) before retrying to execute again a conflicting transaction. | `[uint32]` |

## Other

| Flag           | Description    | Type           |
| -------------- | -------------- | -------------- |
| --allow-load-csv=true | Controls whether LOAD CSV clause is allowed in queries. | `[bool]` |
| --also-log-to-stderr=false | Log messages go to stderr in addition to logfiles. | `[bool]` |
| --data-directory=/var/lib/memgraph | Path to directory in which to save all permanent data. | `[string]` |
| --init-file | Path to the CYPHERL file which contains queries that need to be executed before the Bolt server starts, such as creating users. | `[string]` |
| --init-data-file | Path to the CYPHERL file, which contains queries that need to be executed after the Bolt server starts. | `[string]` |
| --isolation-level=SNAPSHOT_ISOLATION | Isolation level used for the transactions. Allowed values: SNAPSHOT_ISOLATION, READ_COMMITTED, READ_UNCOMMITTED. | `[string]` |
| --log-file=/var/log/memgraph/memgraph.log | Path to where the log should be stored. | `[string]` |
| --log-level=WARNING | Minimum log level. Allowed values: TRACE, DEBUG, INFO, WARNING, ERROR, CRITICAL. | `[string]` |
| --memory-limit=0 | Total memory limit in MiB. Set to 0 to use the default values which are 100% of the physical memory if the swap is enabled and 90% of the physical memory otherwise. | `[uint64]` |
| --metrics-address | Host for HTTP server for exposing metrics. | `[string]` |
| --metrics-port | Port for HTTP server for exposing metrics. | `[uint64]` |
| --memory-warning-threshold=1024 | Memory warning threshold, in MB. If Memgraph detects there is less available RAM it will log a warning. <br/>Set to 0 to disable. | `[uint64]` |
| --password-encryption-algorithm=bcrypt | Algorithm used for password encryption. Defaults to BCrypt. Allowed values: `bcrypt`, `sha256`, `sha256-multiple` (SHA256 with multiple iterations) | `[string]` |
| --replication-replica-check-delay-sec | The time duration in seconds between two replica checks/pings. If < 1, replicas will not be checked at all. The MAIN instance allocates a new thread for each REPLICA. | `[uint64]` |
| --replication-restore-state-on-startup | Set to `true` when initializing an instance to restore the replication role and configuration upon restart. | `[bool]` |
| --telemetry-enabled=true | Set to true to enable telemetry. We collect information about the running system (CPU and memory information), information about the database runtime (vertex and edge counts and resource usage), and aggregated statistics about some features of the database (e.g. how many times a feature is used) to allow for an easier improvement of the product. | `[bool]` |

## Environment variables

| Variable        | Description    | Type           |
| -------------- | -------------- | -------------- |
| MEMGRAPH_USER        | Username     | `[string]`     |
| MEMGRAPH_PASSWORD    | User password       | `[string]`     |
| MEMGRAPH_PASSFILE    | Path to file that contains username and password for creating user. Data in file should be in format `username:password` if your username or password contains  `:` just add `\` before for example `us\:ername:password` | `[string]`     |

## Additional configuration inclusion

You can define additional configuration files in the main configuration file or
within a Docker command in the terminal. Additional files are processed after
the main configuration file and they override the main configuration file.
Additional configuration files are specified with the `--flag-file` flag.

Example:

 `--flag-file=another.conf`

 ## Set configuration flags

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