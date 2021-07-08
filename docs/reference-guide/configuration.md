---
id: configuration
title: Configuration
sidebar_label: Configuration
---

The main Memgraph configuration file is available in `/etc/memgraph/memgraph.conf`.
You can modify that file to suit your specific needs. Additional configuration can be specified by
including another configuration file, in a file pointed to by the
`MEMGRAPH_CONFIG` environment variable or by passing arguments on the command
line.

Each configuration setting is in the form: `--setting-name=value`.


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


## Query

| Flag           | Description    | Type           |
| -------------- | -------------- | -------------- |
| --query-cost-planner=true | Use the cost-estimating query planner. | `[bool]` |
| --query-execution-timeout-sec=180 | Maximum allowed query execution time. <br/>Queries exceeding this limit will be aborted. Value of 0 means no limit. | `[uint64]` |
| --query-max-plans=1000 | Maximum number of generated plans for a query. | `[uint64]` |
| --query-modules-directory=/usr/lib/memgraph/query-modules | Directory where modules with custom query procedures are stored. NOTE: Multiple comma-separated directories can be defined. | `[string]` |
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


## Other

| Flag           | Description    | Type           |
| -------------- | -------------- | -------------- |
| --allow-load-csv | Controls whether LOAD CSV clause is allowed in queries | `[bool]` |
| --also-log-to-stderr=false | log messages go to stderr in addition to logfiles | `[bool]` |
| --data-directory=/var/lib/memgraph | Path to directory in which to save all permanent data. | `[string]` |
| --isolation-level | Default isolation level used for the transactions. Allowed values: SNAPSHOT_ISOLATION, READ_COMMITTED, READ_UNCOMMITTED | `[string]` |
| --log-file=/var/log/memgraph/memgraph.log | Path to where the log should be stored. | `[string]` |
| --kafka-bootstrap-servers | List of Kafka brokers as a comma separated list of broker host or host:port. | `[string]` |
| --log-level | Minimum log level. Allowed values: TRACE, DEBUG, INFO, WARNING, ERROR, CRITICAL | `[string]` |
| --memory-limit=0 | Total memory limit in MiB. Set to 0 to use the default values which are 100% of the physical memory if the swap is enabled and 90% of the physical memory otherwise. |  `[uint64]` |
| --memory-warning-threshold=1024 | Memory warning threshold, in MB. If Memgraph detects there is less available RAM it will log a warning. <br/>Set to 0 to disable. | `[uint64]` |
| --telemetry-enabled=true | Set to true to enable telemetry. We collect information about the running system (CPU and memory information) <br/>and information about the database runtime (vertex and edge counts and resource usage) to allow for easier improvement of the product. | `[bool]` |


## Additional configuration inclusion

You can include additional configuration files from this file. Additional
files are processed after this file. Settings that are set in the additional
files will override previously set values. Additional configuration files are
specified with the `--flag-file` flag.

Example:

`--flag-file=another.conf`
