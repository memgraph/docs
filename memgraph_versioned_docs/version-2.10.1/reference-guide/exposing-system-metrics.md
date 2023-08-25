---
id: exposing-system-metrics
title: Exposing system metrics (Enterprise)
sidebar_label: Exposing system metrics
---

In production systems, monitoring of applications is crucial, and that includes databases as well. 
Memgraph allows tracking information about transactions, query latencies, snapshot recovery latencies, 
triggers, bolt messages, indexes, streams, and many more using an HTTP server.

Exposing metrics is a Memgraph Enterprise feature and therefore needs a valid Memgraph Enterprise license key.
After successfully entering the license key, Memgraph needs to be restarted in order to start the metrics HTTP server.

## Configuring the HTTP endpoint

The default address and port for the metrics server is `0.0.0.0:9091`, and can be configured using [configuration flags](/reference-guide/configuration.md)
`--metrics-address` and `--metrics-port`. If you need help changing the configuration follow [the how-to guide](/how-to-guides/config-logs.md).

## System metrics

All system metrics measuring different parts of the system can be divided into three different types:
- **Gauge** - a single value of some variable in the system (e.g. memory usage)
- **Counter (uint64_t)** - a value that can be incremented or decremented (e.g. number of active transactions in the system)
- **Histogram (uint64_t)** - distribution of measured values (e.g. certain percentile of query latency on N measured queries)

### General metrics

 | Name           | Type             | Description                                                 |
 | -------------- | ---------------- | ----------------------------------------------------------- |
 | vertex_count   | Gauge (uint64_t) | Number of nodes stored in the system.                       |
 | edge_count     | Gauge (uint64_t) | Number of relationships stored in the system.               |
 | average_degree | Gauge (double)   | Average number of relationships of a single node.           |
 | memory_usage   | Gauge (uint64_t) | Amount of RAM used reported by the OS (in bytes).           |
 | disk_usage     | Gauge (uint64_t) | Amount of disk space used by the [data directory](/reference-guide/backup.md) (in bytes). |

### Index metrics

 | Name                       | Type    | Description                                            |
 | -------------------------- | ------- | ------------------------------------------------------ |
 | ActiveLabelIndices         | Counter | Number of active label indices in the system.          |
 | ActiveLabelPropertyIndices | Counter | Number of active label property indices in the system. |

### Operator metrics

Before a Cypher query is executed, it is converted into an internal form suitable for execution, known as a query plan.
A query plan is a tree-like data structure describing a pipeline of operations that will be performed on the database in order to
yield the results for a given query. Every node within a plan is known as
[a logical operator](/memgraph/reference-guide/inspecting-queries#operators) and describes a particular operation.

 | Name                                | Type    | Description                                                    |
 | ----------------------------------- | ------- | -------------------------------------------------------------- |
 | OnceOperator                        | Counter | Number of times Once operator was used.                        |
 | CreateNodeOperator                  | Counter | Number of times CreateNode operator was used.                  |
 | CreateExpandOperator                | Counter | Number of times CreateExpand operator was used.                |
 | ScanAllOperator                     | Counter | Number of times ScanAll operator was used.                     |
 | ScanAllByLabelOperator              | Counter | Number of times ScanAllByLabel operator was used.              |
 | ScanAllByLabelPropertyRangeOperator | Counter | Number of times ScanAllByLabelPropertyRange operator was used. |
 | ScanAllByLabelPropertyValueOperator | Counter | Number of times ScanAllByLabelPropertyValue operator was used. |
 | ScanAllByLabelPropertyOperator      | Counter | Number of times ScanAllByLabelProperty operator was used.      |
 | ScanAllByLabelIdOperator            | Counter | Number of times ScanAllByLabelId operator was used.            |
 | ExpandOperator                      | Counter | Number of times Expand operator was used.                      |
 | ExpandVariableOperator              | Counter | Number of times ExpandVariable operator was used.              |
 | ConstructNamedPathOperator          | Counter | Number of times ConstructNamedPath operator was used.          |
 | FilterOperator                      | Counter | Number of times Filter operator was used.                      |
 | ProduceOperator                     | Counter | Number of times Produce operator was used.                     |
 | DeleteOperator                      | Counter | Number of times Delete operator was used.                      |
 | SetPropertyOperator                 | Counter | Number of times SetProperty operator was used.                 |
 | SetPropertiesOperator               | Counter | Number of times SetProperties operator was used.               |
 | SetLabelsOperator                   | Counter | Number of times SetLabels operator was used.                   |
 | RemovePropertyOperator              | Counter | Number of times RemoveProperty operator was used.              |
 | RemoveLabelsOperator                | Counter | Number of times RemoveLabels operator was used.                |
 | EdgeUniquenessFilterOperator        | Counter | Number of times EdgeUniquenessFilter operator was used.        |
 | EmptyResultOperator                 | Counter | Number of times EmptyResult operator was used.                 |
 | AccumulateOperator                  | Counter | Number of times Accumulate operator was used.                  |
 | AggregateOperator                   | Counter | Number of times Aggregate operator was used.                   |
 | SkipOperator                        | Counter | Number of times Skip operator was used.                        |
 | LimitOperator                       | Counter | Number of times Limit operator was used.                       |
 | OrderByOperator                     | Counter | Number of times OrderBy operator was used.                     |
 | MergeOperator                       | Counter | Number of times Merge operator was used.                       |
 | OptionalOperator                    | Counter | Number of times Optional operator was used.                    |
 | UnwindOperator                      | Counter | Number of times Unwind operator was used.                      |
 | DistinctOperator                    | Counter | Number of times Distinct operator was used.                    |
 | UnionOperator                       | Counter | Number of times Union operator was used.                       |
 | CartesianOperator                   | Counter | Number of times Cartesian operator was used.                   |
 | CallProcedureOperator               | Counter | Number of times CallProcedureOperator operator was used.       |
 | ForeachOperator                     | Counter | Number of times Foreach operator was used.                     |
 | EvaluatePatternFilterOperator       | Counter | Number of times EvaluatePatternFilter operator was used.       |
 | ApplyOperator                       | Counter | Number of times Apply operator was used.                       |

### Query metrics

 | Name                         | Type      | Description                                                |
 | ---------------------------- | --------- | ---------------------------------------------------------- |
 | QueryExecutionLatency_us_50p | Histogram | Query execution latency in microseconds (50th percentile). |
 | QueryExecutionLatency_us_90p | Histogram | Query execution latency in microseconds (90th percentile). |
 | QueryExecutionLatency_us_99p | Histogram | Query execution latency in microseconds (99th percentile). |

### Query type metrics

 | Name           | Type    | Description                            |
 | -------------- | ------- | -------------------------------------- |
 | ReadQuery      | Counter | Number of read-only queries executed.  |
 | WriteQuery     | Counter | Number of write-only queries executed. |
 | ReadWriteQuery | Counter | Number of read-write queries executed. |

### Session metrics

 | Name                    | Type    | Description                             |
 | ----------------------- | ------- | --------------------------------------- |
 | ActiveSessions          | Counter | Number of active connections.           |
 | ActiveBoltSessions      | Counter | Number of active Bolt connections.      |
 | ActiveTCPSessions       | Counter | Number of active TCP connections.       |
 | ActiveSSLSessions       | Counter | Number of active SSL connections.       |
 | ActiveWebSocketSessions | Counter | Number of active websocket connections. |
 | BoltMessages            | Counter | Number of Bolt messages sent.           |

### Snapshot metrics

 | Name                           | Type      | Description                                                  |
 | ------------------------------ | --------- | ------------------------------------------------------------ |
 | SnapshotCreationLatency_us_50p | Histogram | Snapshot creation latency in microseconds (50th percentile). |
 | SnapshotCreationLatency_us_90p | Histogram | Snapshot creation latency in microseconds (90th percentile)- |
 | SnapshotCreationLatency_us_99p | Histogram | Snapshot creation latency in microseconds (99th percentile). |
 | SnapshotRecoveryLatency_us_50p | Histogram | Snapshot recovery latency in microseconds (50th percentile). |
 | SnapshotRecoveryLatency_us_90p | Histogram | Snapshot recovery latency in microseconds (90th percentile). |
 | SnapshotRecoveryLatency_us_99p | Histogram | Snapshot recovery latency in microseconds (99th percentile). |


### Stream metrics

 | Name             | Type    | Description                           |
 | ---------------- | ------- | ------------------------------------- |
 | StreamsCreated   | Counter | Number of streams created.            |
 | MessagesConsumed | Counter | Number of consumed streamed messages. |

### Transaction metrics

 | Name                   | Type    | Description                                                                     |
 | ---------------------- | ------- | ------------------------------------------------------------------------------- |
 | ActiveTransactions     | Counter | Number of active transactions.                                                  |
 | CommitedTransactions   | Counter | Number of committed transactions.                                               |
 | RollbackedTransactions | Counter | Number of rollbacked transactions.                                              |
 | FailedQuery            | Counter | Number of times executing a query failed (either during parse time or runtime). |

### Trigger metrics

 | Name             | Type    | Description                  |
 | ---------------- | ------- | ---------------------------- |
 | TriggersCreated  | Counter | Number of Triggers created.  |
 | TriggersExecuted | Counter | Number of Triggers executed. |

## Example response

If there aren't any modifying configurations, by sending a GET request to `localhost:9091` in the 
local Memgraph build will result in a response similar to the one below.

```json
{
    "General": {
        "average_degree": 0.0,
        "disk_usage": 1417846,
        "edge_count": 0,
        "memory_usage": 36937728,
        "vertex_count": 0
    },
    "Index": {
        "ActiveLabelIndices": 0,
        "ActiveLabelPropertyIndices": 0
    },
    "Operator": {
        "AccumulateOperator": 0,
        "AggregateOperator": 0,
        "ApplyOperator": 0,
        "CallProcedureOperator": 0,
        "CartesianOperator": 0,
        "ConstructNamedPathOperator": 0,
        "CreateExpandOperator": 0,
        "CreateNodeOperator": 0,
        "DeleteOperator": 0,
        "DistinctOperator": 0,
        "EdgeUniquenessFilterOperator": 0,
        "EmptyResultOperator": 0,
        "EvaluatePatternFilterOperator": 0,
        "ExpandOperator": 0,
        "ExpandVariableOperator": 0,
        "FilterOperator": 0,
        "ForeachOperator": 0,
        "LimitOperator": 0,
        "MergeOperator": 0,
        "OnceOperator": 0,
        "OptionalOperator": 0,
        "OrderByOperator": 0,
        "ProduceOperator": 0,
        "RemoveLabelsOperator": 0,
        "RemovePropertyOperator": 0,
        "ScanAllByIdOperator": 0,
        "ScanAllByLabelOperator": 0,
        "ScanAllByLabelPropertyOperator": 0,
        "ScanAllByLabelPropertyRangeOperator": 0,
        "ScanAllByLabelPropertyValueOperator": 0,
        "ScanAllOperator": 0,
        "SetLabelsOperator": 0,
        "SetPropertiesOperator": 0,
        "SetPropertyOperator": 0,
        "SkipOperator": 0,
        "UnionOperator": 0,
        "UnwindOperator": 0
    },
    "Query": {
        "QueryExecutionLatency_us_50p": 0,
        "QueryExecutionLatency_us_90p": 0,
        "QueryExecutionLatency_us_99p": 0
    },
    "QueryType": {
        "ReadQuery": 0,
        "ReadWriteQuery": 0,
        "WriteQuery": 0
    },
    "Session": {
        "ActiveBoltSessions": 0,
        "ActiveSSLSessions": 0,
        "ActiveSessions": 0,
        "ActiveTCPSessions": 0,
        "ActiveWebSocketSessions": 0,
        "BoltMessages": 0
    },
    "Snapshot": {
        "SnapshotCreationLatency_us_50p": 4860,
        "SnapshotCreationLatency_us_90p": 4860,
        "SnapshotCreationLatency_us_99p": 4860,
        "SnapshotRecoveryLatency_us_50p": 628,
        "SnapshotRecoveryLatency_us_90p": 628,
        "SnapshotRecoveryLatency_us_99p": 628
    },
    "Stream": {
        "MessagesConsumed": 0,
        "StreamsCreated": 0
    },
    "Transaction": {
        "ActiveTransactions": 0,
        "CommitedTransactions": 0,
        "FailedQuery": 0,
        "RollbackedTransactions": 0
    },
    "Trigger": {
        "TriggersCreated": 0,
        "TriggersExecuted": 0
    }
}
```