---
id: changelog
title: Changelog
sidebar_label: Changelog
---

## v2.5.0 - Dec 13, 2022

### Major Features and Improvements

- `DISTINCT` operator can now be used with aggregation functions. Until now, if you wanted to use an aggregation function with distinct values, you had to write a query similar to this one `WITH DISTINCT n.prop as distinct_prop RETURN COUNT(distinct_prop)`. Now you can use the `DISTINCT` operator like in the following query, `RETURN COUNT(DISTINCT n.prop)`. [#654](https://github.com/memgraph/memgraph/pull/665)
- You can now create a user before the Bolt server starts using the environment variables `MEMGRAPH_USER` for the username, `MEMGRAPH_PASSWORD` for the password and `MEMGRAPH_PASSFILE` file that contains username and password for creating the user in the following format: `username:password`. [#696](https://github.com/memgraph/memgraph/pull/696)
- With the new configuration flag `init_file` you can execute queries from the CYPHERL file which need to be executed before the Bolt server starts and with the configuration flag `init_data_file` you can execute queries from the CYPHERL file immediately after the Bolt server starts. [#696](https://github.com/memgraph/memgraph/pull/696)

### Bug Fixes

- Constructors and assignment operators in the C++ query modules API now work as expected, and the API type check in the `ValueNumeric` method now correctly recognizes numeric types. [#688](https://github.com/memgraph/memgraph/pull/688)
- Error message support (`SetErrorMessage`) has been added to query methods that use the MAGE C++ API. [#688](https://github.com/memgraph/memgraph/pull/688)
- The `EmptyResult` sink operator was added to the Memgraph's planner. This means that results produced by a query `MATCH (n) SET n.test_prop = 2` will get exhausted which was a problem in some Bolt clients implementations, e.g in Golang's client.
[#667](https://github.com/memgraph/memgraph/pull/667)
- Fixed Python submodules reloading when calling `CALL mg.load()` and `CALL mg.load_all()`. Before, only the Python module would be reloaded, but now all dependencies get reloaded as well. This includes Python's utility submodules and Python packages, which means that the environment with Python packages can be changed without turning off the database. [#653](https://github.com/memgraph/memgraph/pull/653)

## v2.4.2 - Nov 7, 2022

### Bug Fixes

- Fixed a bug when calling `AllShortestPath` with `id` function. [#636](https://github.com/memgraph/memgraph/pull/636)
- Fixed bug when getting iterating over in-edges of a Node. [#582](https://github.com/memgraph/memgraph/pull/613)

## v2.4.1 - Oct 7, 2022

### Bug Fixes

- Fixed bug when getting EdgeType from Edge object or Label from Vertex object
  in query modules. [#582](https://github.com/memgraph/memgraph/pull/582)
- Fix a bug when changing role permissions for label based authorization, by
  passing user's instead of role's `fine_grained_access_handler`.
  [#579](https://github.com/memgraph/memgraph/pull/579)

## v2.4.0 - Sep 15, 2022

### Major Features and Improvements

- Add replica state to `SHOW REPLICAS` query.
  [#379](https://github.com/memgraph/memgraph/pull/379)
- Add `current_timestamp` and `number_of_timestamp_behind_master` to `SHOW
  REPLICAS` query. [#412](https://github.com/memgraph/memgraph/pull/412)
- Query `REGISTER REPLICA replica_name SYNC` no longer supports `TIMEOUT`
  parameter. To mimic the previous behavior of `REGISTER REPLICA replica_name
  SYNC WITH TIMEOUT 1`, one should use `REGISTER REPLICA replica_name ASYNC`
  instead. [#423](https://github.com/memgraph/memgraph/pull/423)
- Make behavior more [openCypher](http://opencypher.org/) compliant regarding
  checking against `NULL` values is `CASE` expressions.
  [#432](https://github.com/memgraph/memgraph/pull/432)
- Previously registered replicas are automatically registered on restart of
  Memgraph. [#415](https://github.com/memgraph/memgraph/pull/415)
- Add new command `SHOW CONFIG` that returns the configuration of the currently
  running Memgraph instance.
  [#459](https://github.com/memgraph/memgraph/pull/459)
- Extend the shortest paths functionality with [All Shortest
  Path](/reference-guide/graph-algorithms.md#all-shortest-paths)
  query. [#409](https://github.com/memgraph/memgraph/pull/409)
- Extend the query modules C and Python API to enable logging on different
  levels. [#417](https://github.com/memgraph/memgraph/pull/417)
- Added C++ query modules API. Instead of using the C API call, C++ API calls
  significantly simplify the implementation of fast query modules.
  [#546](https://github.com/memgraph/memgraph/pull/546)
- [Enterprise] Added support for label-based authorization. In addition to
  clause-based authorization rules, each user can now be granted `NOTHING`,
  `READ`, `UPDATE`, or `CREATE_DELETE` permission on a given label or edge
  type. [#484](https://github.com/memgraph/memgraph/pull/484)
- New Cypher function `project()` creates a projected graph consisting of nodes
  and edges from aggregated paths. Any query module or algorithm can be now run
  on a subgraph, by passing the variable of the projected graph as the first
  argument of the query module procedure. [#535](https://github.com/memgraph/memgraph/pull/535)

### Bug Fixes

- Added a check to ensure two replicas cannot be registered to an identical
  end-point. [#406](https://github.com/memgraph/memgraph/pull/406)
- `toString` function is now able to accept `Date`, `LocalTime`, `LocalDateTime`
  and `Duration` data types.
  [#429](https://github.com/memgraph/memgraph/pull/429)
- Aggregation functions now return the openCypher-compliant results on `null`
  input and display the correct behavior when grouped with other operators.
  [#448](https://github.com/memgraph/memgraph/pull/448)
- Corrected inconsistencies and incorrect behavior with regards to sync
  replicas. For more detail about the behavior, please check [Under the
  hood view on replication](/under-the-hood/replication.md).
  [#435](https://github.com/memgraph/memgraph/pull/435)
- Fixed handling `ROUTE` Bolt message. Memgraph didn't handle the fields of
  `ROUTE` message properly. Therefore the session might be stuck in a state
  where even the `RESET` message did not help. With this fix, sending a `RESET`
  message will properly reset the session.
  [#475](https://github.com/memgraph/memgraph/pull/475)

## v2.3.1 - Jun 23, 2022

### Improvement

- Updated results return by [`CHECK
  STREAM`](/reference-guide/streams/overview.md#check-stream) query to group
  all queries/raw messages on single line per batch.
  [#394](https://github.com/memgraph/memgraph/pull/394)
- Add frequent replica ping. `main` instance checks state of the replicas with
  given frequency controller by `--replication-replica-check-delay-sec`. The
  check allows latest information about the state of each replica from `main`
  point of view. [#380](https://github.com/memgraph/memgraph/pull/380)
- Added `BATCH_LIMIT` and `TIMEOUT` options to [`START
  STREAM`](/reference-guide/streams/overview.md#start-a-stream) query that
  returns the raw message received by the transformation. [#392](https://github.com/memgraph/memgraph/pull/392)

### Bug Fixes

- Fix header on `SHOW REPLICATION ROLE` query and wrong timeout info on `SHOW
  REPLICAS` query. [#376](https://github.com/memgraph/memgraph/pull/376)
- Fix WebSocket connection with clients that do not use binary protocol header. [#403](https://github.com/memgraph/memgraph/pull/403)
- Fix SSL connection shutdown hanging. [#395](https://github.com/memgraph/memgraph/pull/395)
- Fix module symbol loading with python modules. [#335](https://github.com/memgraph/memgraph/pull/335)
- Fix header on `SHOW REPLICATION ROLE` query and wrong timeout info on
  `SHOW REPLICAS query`. [#376](https://github.com/memgraph/memgraph/pull/376)
- Adapted compilation flag so that the memory allocator uses JEMALLOC while
  counting allocated memory. [#401](https://github.com/memgraph/memgraph/pull/401)

## v2.3.0 - Apr 27, 2022

### Major Features and Improvements

- Added [`FOREACH`](/cypher-manual/extension-clauses) clause.
  [#351](https://github.com/memgraph/memgraph/pull/351)
- Added [Bolt over WebSocket](/connect-to-memgraph/websocket.md) support to
  Memgraph. [#384](https://github.com/memgraph/memgraph/pull/384)
- Added [user-defined Memgraph magic
  functions](/cypher-manual/functions/#user-defined-memgraph-magic-functions).
  [#345](https://github.com/memgraph/memgraph/pull/345)

### Bug Fixes

- Fixed incorrect loading of C query modules.
  [#387](https://github.com/memgraph/memgraph/pull/387)

## v2.2.1 - Mar 17, 2022

### Bug Fixes

- Added CentOS 7 release by fixing the compatibility issue with the older
  version of SSL used on CentOS 7.
  [#361](https://github.com/memgraph/memgraph/pull/361)

## v2.2.0 - Feb 18, 2022

### Major Features and Improvements

- Added support for compilation on ARM architectures (aarch64) and Docker
  support for running Memgraph on Apple M1 machines.
  [#340](https://github.com/memgraph/memgraph/pull/340)
- Added [monitoring server](/reference-guide/monitoring-server.md) that forwards
  certain information from Memgraph to the clients connected to it (e.g. logs)
  using WebSocket. [#337](https://github.com/memgraph/memgraph/pull/337)
- Added `CONFIGS` and `CREDENTIALS` options to [Kafka streams](/reference-guide/streams/overview.md/#kafka).
  [#328](https://github.com/memgraph/memgraph/pull/328)
- Added [built-in procedures used for handling Python module
  files](/reference-guide/query-modules/module-file-utilities.md).
  `mg.create_module_file`, `mg.update_module_file`, `mg.delete_module_file`,
  `mg.get_module_file`, and `mg.get_module_files` allow you to do modifications
  on your Python module files, get their content, and list all the files present
  in your query module directories directly from Memgraph.
  [#330](https://github.com/memgraph/memgraph/pull/330)
- Built-in procedures
  [`mg.procedures`](/mage/usage/loading-modules#utility-query-module) and
  [`mg.transformations`](/reference-guide/streams/transformation-modules/overview.md#utility-procedures-for-transformations)
  return additional information about the procedures and transformations
  scripts. `path` returns an absolute path to the module file containing the
  procedure, while `is_editable` returns `true` if the file can be edited using
  Memgraph or `false` otherwise.
  [#310](https://github.com/memgraph/memgraph/pull/310)
- [Added `SHOW VERSION` query](/reference-guide/server-stats.md) that returns the version of the Memgraph server
  which is being queried. [#265](https://github.com/memgraph/memgraph/pull/265)

### Bug Fixes

- The reference count is increased when `Py_None` is returned from the `_mgp`
  module. This fixes a nondeterministic fatal Python error.
  [#320](https://github.com/memgraph/memgraph/pull/320)
- Use correct error when printing warning in rebalance callback of Kafka
  consumer. [#321](https://github.com/memgraph/memgraph/pull/321)
- Fix transaction handling in streams in case of serialization error.
  Previously, a serialization error caused an exception to be thrown since
  nested transactions are not supported. After this fix, the transactions are
  handled correctly in the transaction retry logic.
  [#339](https://github.com/memgraph/memgraph/pull/339)
- Temporal types `LocalTime` and `LocalDateTime` instantiations return subsecond
  precision. Additionally, query modules `mg_local_date_time_now()` and
  `mg_local_time_now()` also return subsecond precision.
  [#333](https://github.com/memgraph/memgraph/pull/333)

## v2.1.1 - Dec 07, 2021

:::warning

### Breaking Changes

- Loading streams created by versions of Memgraph older than 2.1 is not
  possible. We suggest you extract the necessary information using the older
  version of Memgraph and recreate the streams in a newer version (Memgraph 2.1
  and newer).

:::

### Major Features and Improvements

- Added procedures for retrieving configuration information specific for each
  stream type. `mg.pulsar_stream_info` will return information about a specific
  Pulsar stream and `mg.kafka_stream_info` will return information about a
  specific Kafka stream. [#301](https://github.com/memgraph/memgraph/pull/301)
- `SHOW STREAMS` now returns default values for batch interval and batch size if
  they weren't specified. [#306](https://github.com/memgraph/memgraph/pull/306)

### Bug Fixes

- Query execution stats, returned after a Cypher query was executed, are now
  updated with the changes made in write procedures.
  [#304](https://github.com/memgraph/memgraph/pull/304)
- Loading streams created by older versions won't cause Memgraph to crash.
  [#302](https://github.com/memgraph/memgraph/pull/302)

## v2.1.0 - Nov 22, 2021

:::warning

### Breaking Changes

- Loading streams created by older versions cause Memgraph to crash. The only
  possible workaround involves **deleting the existing streams**.
  The streams can be deleted by the `DROP STREAM` query in the old versions of
  Memgraph. After upgrading to this version, the `streams` directory has to be
  deleted manually from Memgraph's data directory (on Debian-based systems, it
  is `/var/lib/memgraph` by default).
- The query for creating a Kafka stream now requires the `KAFKA` keyword. The
  previous form `CREATE STREAM ...` was changed to `CREATE KAFKA STREAM ...`.

:::

### Major Features and Improvements

- Now supporting Bolt protocol version 4.3.
  [#226](https://github.com/memgraph/memgraph/pull/226)
- Streams support for retrying conflicting transactions. When a message is
  processed from a certain stream source, a query is executed as a part of the
  transaction. If that transaction fails because of other conflicting
  transactions, the transaction is retried a set number of times. The number of
  retries and interval between each retry can be controlled with configs
  `--stream-transaction-conflict-retries` and
  `--stream-transaction-retry-interval`.
  [#294](https://github.com/memgraph/memgraph/pull/294)
- Added procedure to configure the starting offset (to consume messages from) of
  a topic (and its partitions).
  [#282](https://github.com/memgraph/memgraph/pull/282)
- Added `BOOTSTRAP_SERVERS` option to `CREATE KAFKA STREAM` which you can check
  [here](reference-guide/streams/overview.md).
  [#282](https://github.com/memgraph/memgraph/pull/282)
- Added Bolt notifications in the query summary to inform the user about results
  or to give useful tips. When a query executes successfully, sometimes is
  necessary to give users tips or extra information about the execution.
  [#285](https://github.com/memgraph/memgraph/pull/285)
- Added execution statistics in the query summary to inform user on how many
  objects were affected. E.g., when you run a query with a `CREATE` clause,
  you'll know how many nodes/edges were created by it.
  [#285](https://github.com/memgraph/memgraph/pull/285)
- Added support for connecting to Pulsar as a new stream source. For more
  details, check out our [reference pages](reference-guide/streams).
  [#293](https://github.com/memgraph/memgraph/pull/293)

### Bug Fixes

- Allow duration values to be used as weights in the [Weighted Shortest
  Path](/memgraph/reference-guide/built-in-graph-algorithms#weighted-shortest-path)
  query. [#278](https://github.com/memgraph/memgraph/pull/278)
- Fix linkage error when `mgp_local_time_get_minute` is used.
  [#273](https://github.com/memgraph/memgraph/pull/273)
- Fix crash when temporal types are used with `ORDER BY` clause.
  [#299](https://github.com/memgraph/memgraph/pull/299)

## v2.0.1 - Oct 12, 2021

### Major Features and Improvements

- Updated a startup message with a link to the [getting started
  page](getting-started.md).
  [#259](https://github.com/memgraph/memgraph/pull/259)
- Updated certain error and warning messages in the logs with links to the
  documentation explaining the problem in more detail.
  [#243](https://github.com/memgraph/memgraph/pull/243)
- Updated mgconsole to
  [v1.1.0](https://github.com/memgraph/mgconsole/releases/tag/v1.1.0).
  [#260](https://github.com/memgraph/memgraph/pull/260)

### Bug Fixes

- Graph updates made in the write procedures are now correctly registered in the
  triggers. [#262](https://github.com/memgraph/memgraph/pull/262)
- Fixed `DETACH DELETE` interaction with the triggers. Previously, vertices
  deleted by the `DETACH DELETE` would not be registered by triggers if only `ON () DELETE` trigger existed.
  [#266](https://github.com/memgraph/memgraph/pull/266)

## v2.0.0 - Oct 5, 2021

:::warning

### Breaking Changes

- Changed the `timestamp()` function to return `microseconds` instead of
  `milliseconds`.
- Most of the query modules C API functions are changed to return a `mgp_error`
  as a more fine-grained way of error reporting. The only exceptions are the
  functions that free allocated memory (`mgp_free` and `mgp_global_free`) and
  destroy objects (`mgp_value_destroy`, `mgp_list_destroy`, etc.) which
  remain the same.
- The first user created using the `CREATE USER` query will have all the
  privileges granted to him. Previously, you could've locked yourself out of
  Memgraph by creating a user and immediately disconnecting.

:::

### Major Features and Improvements

- Added support for temporal types, a feature that allows the user to manipulate
  and store time related data in the graph. For more information take a look at
  the [reference guide](/reference-guide/data-types.md)
- Added support for parameters with `CREATE` clause in the following form:
  `CREATE (n $param)`.
- Introduced settings to Memgraph that can be modified during runtime. You can
  check out more details [here](reference-guide/runtime-settings).
- Added writeable procedure support, so
  [procedures](/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example.md)
  can modify the graph by creating and deleting vertices and edges, modifying
  the labels of vertices or setting the properties of vertices and edges.

### Bug Fixes

- Fixed planning of queries with `MERGE` clause. If a previously defined symbol
  is used as property value inside the `MERGE` clause, the planner will
  correctly use the label-property index if present.
- Unused memory is correctly returned to OS when `FREE MEMORY` query is used.
  Before, Memgraph would free up the memory internally and not return it to the
  OS. Because of that Memgraph could allocate more memory from the OS than it's
  allowed.
- Fixed recovery from durability files. Because of a wrong check, Memgraph could
  crash and leave the durability files in an invalid state making recovery not
  possible.
- Fixed usage of `execute` keyword in queries. Because of the special way we
  handle the `EXECUTE` keyword from the `CREATE TRIGGER` query using that same
  keyword in other contexts caused Memgraph to crash.

## v1.6.1 - Jul 24, 2021

### Major Features and Improvements

- Added proper privilege checks for queries executed by triggers and stream
  transformations.

### Bug Fixes

- Fixed error handling in streams to make restarting streams possible after
  failing. The issue is caused by not rolling back the transaction in which the
  query failed, so when the stream was restarted and tried to process the next
  batch of messages it was still in a transaction, but it tried to start a new
  one. Now the transaction is rolled back in case of any errors during query
  execution, so a new transaction can be started during the processing of the
  next batch of messages.

## v1.6.0 - Jul 7, 2021

:::warning

### Breaking Changes

- Changed the `LOCK_PATH` permission to `DURABILITY`.

:::

### Major Features and Improvements

- Added support for consuming Kafka streams. You can connect Memgraph to a Kafka
  cluster and run queries based on the messages received. The transformation
  from Kafka to Cypher queries is done using **Transformation Modules**, a
  concept similar to Query Modules. Using our Python and C API, you can easily
  define functions that analyze Kafka messages and generate different queries
  based on them. The stream connection can be configured, tested, stopped,
  started, checked, and dropped.
- Introduced global allocators for Query Modules using C API, so the data can be
  preserved between multiple runs of the same procedure.
- Introduced new isolation levels, `READ COMMITTED` and `READ_UNCOMMITTED`. The
  isolation level can be set with a config. Also, you can set the isolation
  level for a certain session or the next transaction. The names of the
  isolation levels should be self-explanatory, unlike the `SNAPSHOT ISOLATION`
  which is still the default isolation level.
- The query timeouts are now triggered using a different method. Before, we used
  the TSC to measure the execution time. Unfortunately, this proved unreliable
  for certain CPUs (AMD Ryzen 7 and M1), which caused queries to timeout almost
  instantly. We switched to POSIX timer which **should** work on every hardware,
  while not affecting the performance.
- Added a config, `allow-load-csv`, with which you can disable `LOAD CSV`
  clause. `LOAD CSV` can read and display data from any file on the system which
  could be insecure for some systems. Because of that, we added a config that
  allows you to disable that clause in every case.
- Added `CREATE SNAPSHOT` query. Snapshots are created every few minutes, using
  this query you can trigger snapshot creation instantly.
- Increased the default query timeout to 10 minutes. The previous default amount
  of 3 minutes proved too small, especially for queries that use `LOAD CSV` with
  a large dataset.

### Bug Fixes

- Fixed parsing of certain types in Query Modules using Python API.
- Fixed a concurrency bug for Query Modules using Python API. Running the same
  procedure from multiple clients caused the Memgraph instance to crash.
- Fixed restoring triggers that call procedures. Because the triggers were
  restored before the procedures, the query trigger executes couldn't find the
  called procedure, which caused the restore to fail. Switching up the order was
  enough to fix the problem.

## v1.5.0 - May 28, 2021

### Major Features and Improvements

- Added database triggers. You can now create, delete, and print out triggers
  that execute Cypher statements. You can create custom actions whenever a node
  or an edge is created, updated, or deleted. All the triggers are persisted on
  the disk, so no information is lost between runs.
- Replaced mg_client with the mgconsole command-line interface, which ships
  directly with Memgraph. You can now install mgconsole directly on Windows and
  macOS.

### Bug Fixes

- Fixed parsing of types for Python procedures for types nested in `mgp. List`.
  For example, parsing of `mgp.List[mgp.Map]` works now.
- Fixed memory tracking issues. Some of the allocation and deallocation wasn't
  tracked during the query execution.
- Fixed reading CSV files that are using CRLF as the newline symbol.
- Fixed permission issues for `LOAD CSV`, `FREE MEMORY`, `LOCK DATA DIRECTORY`,
  and replication queries.

## v1.4.0 - Apr 2, 2021

:::warning

### Breaking Changes

- Changed `MEMORY LIMIT num (KB|MB)` clause in the procedure calls to `PROCEDURE MEMORY LIMIT num (KB|MB)`. The functionality is still the same.

:::

### Major Features and Improvements

- Added replication to community version.
- Added support for multiple query modules directories at the same time. You can
  now define multiple, comma-separated paths to directories from which the
  modules will be loaded using the `--query-modules-directory` flag.
- Added support for programatically reading in data from CSV files through the
  `LOAD CSV` clause. We support CSV files with and without a header, the
  supported dialect being Excel.
- Added a new flag `--memory-limit` which enables the user to set the maximum
  total amount of memory memgraph can allocate during its runtime.
- Added `FREE MEMORY` query which tries to free unusued memory chunks in
  different parts of storage.
- Added the memory limit and amount of currently allocated bytes in the result
  of `SHOW STORAGE INFO` query.
- Added `QUERY MEMORY LIMIT num (KB|MB)` to Cypher queries which allows you to
  limit memory allocation for the entire query. It can be added only at the end
  of the entire Cypher query.
- Added logs for the different parts of the recovery process. `INFO`, `DEBUG`
  and `TRACE` level all contain additional information that is printed out while
  the recovery is in progress.

### Bug Fixes

- Fixed garbage collector by correctly marking the oldest current timestamp
  after the database was recovered using the durability files.
- Fixed reloading of the modules with changed result names.
- Fixed profile query to show the correct name of the ScanAll operator variant.

## v1.3.0 - Jan 26, 2021

:::warning

### Breaking Changes

- Added extra information in durability files to support replication, making it
  incompatible with the durability files generated by older versions of
  Memgraph. Even though the replication is an Enterprise feature, the files are
  compatible with the Community version.

:::

### Major Features and Improvements

- Added support for data replication across a cluster of Memgraph instances.
  Supported instance types are MAIN and REPLICA. Supported replication modes are
  SYNC (all SYNC REPLICAS have to receive data before the MAIN can commit the
  transaction), ASYNC (MAIN doesn't care if data is replicated), SYNC WITH
  TIMEOUT (MAIN will wait for REPLICAS within the given timeout period, after
  timout, replication isn't aborted but the replication demotes the REPLICA to
  the ASYNC mode).
- Added support for query type deduction. Possible query types are `r` (read),
  `w` (write), `rw` (read-write). The query type is returned as a part of the
  summary.
- Improved logging capabilities by introducing granular logging levels. Added
  new flag, `--log-level`, which specifies the minimum log level that will be
  printed. E.g., it's possible to print incoming queries or Bolt server states.
- Added ability to lock the storage data directory by executing the `LOCK DATA DIRECTORY` query which delays the deletion of the files contained in the
  data directory. The data directory can be unlocked again by executing the
  `UNLOCK DATA DIRECTORY` query.

### Bug Fixes and Other Changes

- Added cleanup of query executions if not in an explicit transaction.
- Fix RPC dangling reference.

## v1.2.0 - Oct 20, 2020

:::warning

### Breaking Changes

- SSL is disabled by default (`--bolt-cert-file` and `--bolt-key-file` are
  empty). This change might only affect the client connection configuration.

:::

### Major Features and Improvements

- Added support for Bolt v4.0 and v4.1.
- Added `mgp_networkx.py` as an alternative implementation of NetworkX graph
  objects, which is useful to use Memgraph data from NetworkX algorithms
  optimally.
- Added `nxalg.py` query module as a proxy to NetworkX algorithms.
- Added plan optimization to use a label-property index where the property is
  not null. As a result, the query engine, instead of scanning all elements and
  applying the filter, performs a label-property index lookup when possible.

### Bug Fixes and Other Changes

- Fixed Cypher `ID` function `Null` handling. When the `ID` function receives
  `Null`, it will also return `Null`.
- Fixed bug that caused random crashes in SSL communication on platforms that
  use older versions of OpenSSL (< 1.1) by adding proper multi-threading
  handling.
- Fix `DISCARD` message handling. The query is now executed before discarding
  the results.

## v1.1.0 - Jul 1, 2020

### Major Features and Improvements

- Properties in nodes and edges are now stored encoded and compressed. This
  change significantly reduces memory usage. Depending on the specific dataset,
  total memory usage can be reduced up to 50%.
- Added support for rescanning query modules. Previously, the query modules
  directory was scanned only upon startup. Now it is scanned each time the user
  requests to load a query module. The functions used to load the query modules
  were renamed to `mg.load()` and `mg.load_all()` (from `mg.reload()` and
  `mg.reload_all()`).
- Improved execution performance of queries that have an IN list filter by using
  label+property indices. Example: `MATCH (n: Label) WHERE n.property IN [] ...`

- Added support for `ANY` and `NONE` openCypher functions. Previously, only
  `ALL` and `SINGLE` functions were implemented.

### Bug Fixes and Other Changes

- Fixed invalid paths returned by variable expansion when the starting node and
  destination node used the same symbol. Example: `MATCH path = (n: Person {name: "John"})-[: KNOWS*]->(n) RETURN path`

- Improved semantics of `ALL` and `SINGLE` functions to be consistent with
  openCypher when handling lists with `Null` s.
- `SHOW CONSTRAINT INFO` now returns property names as a list for unique
  constraints.
- Escaped label/property/edgetype names in `DUMP DATABASE` to support names with
  spaces in them.
- Fixed handling of `DUMP DATABASE` queries in multi-command transactions (
  `BEGIN`, ..., `COMMIT`).
- Fixed handling of various query types in explicit transactions. For example,
  constraints were allowed to be created in multi-command transactions (`BEGIN`
  , ..., `COMMIT`) but that isn't a transactional operation and as such can't
  be allowed in multi-command transactions.
- Fixed integer overflow bugs in `COUNT`, `LIMIT` and `SKIP`.
- Fixed integer overflow bugs in weighted shortest path expansions.
- Fixed various other integer overflow bugs in query execution.
- Added Marvel Comic Universe tutorial.
- Added FootballTransfers tutorial.

## v1.0.0 - Apr 3, 2020

### Major Features and Improvements

- [Enterprise Ed.] Exposed authentication username/rolename regex as a flag (
  `--auth-user-or-role-name-regex`).
- [Enterprise Ed.] Improved auth module error handling and added support for
  relative paths.
- Added support for Python query modules. This release of Memgraph supports
  query modules written using the already existing C API and the new Python API.
- Added support for unique constraints. The unique constraint is created with a
  label and one or more properties.
- Implemented support for importing CSV files (`mg_import_csv`). The importer is
  compatible with the Neo4j batch CSV importer.
- Snapshot and write-ahead log format changed (backward compatible with v0.50).
- Vertices looked up by their openCypher ID (`MATCH (n) WHERE ID(n) = ...`) will
  now find the node in O(logn) instead of O(n).
- Improved planning of BFS expansion, a faster, specific approach is now favored
  instead of a ScanAll+Filter operation.
- Added syntax for limiting memory of `CALL`.
- Exposed server name that should be used for Bolt handshake as flag (
  `--bolt-server-name-for-init`).
- Added several more functions to the query module C API.
- Implemented a storage locking mechanism that prevents the user from
  concurrently starting two Memgraph instances with the same data directory.

### Bug Fixes and Other Changes

- [Enterprise Ed.] Fixed a bug that crashed the database when granting
  privileges to a user.
- [Enterprise Ed.] Improved Louvain algorithm for community detection.
- Type of variable expansion is now printed in `EXPLAIN` (e.g. ExpandVariable,
  STShortestPath, BFSExpand, WeightedShortestPath).
- Correctly display `CALL` in `EXPLAIN` output.
- Correctly delimit arguments when printing the signature of a query module.
- Fixed a planning issue when `CALL` preceded filtering.
- Fixed spelling mistakes in the storage durability module.
- Fixed storage GC indices/constraints subtle race condition.
- Reduced memory allocations in storage API and indices.
- Memgraph version is now outputted to `stdout` when Memgraph is started.
- Improved RPM packaging.
- Reduced number of errors reported in production log when loading query
  modules.
- Removed `early access` wording from the Community Offering license.

## v0.50.0 - Dec 11, 2019

:::warning

### Breaking Changes

- [Enterprise Ed.] Remove support for Kafka streams.
- Snapshot and write-ahead log format changed (not backward compatible).
- Removed support for unique constraints.
- Label indices aren't created automatically, create them explicitly instead.
- Renamed several database flags. Please see the configuration file for a list
  of current flags.

:::

### Major Features and Improvements

- [Enterprise Ed.] Add support for auth module.
- [Enterprise Ed.] LDAP support migrated to auth module.
- Implemented new graph storage engine.
- Add support for disabling properties on edges.
- Add support for existence constraints.
- Add support for custom openCypher procedures using a C API.
- Support loading query modules implementing read-only procedures.
- Add `CALL <procedure> YIELD <result>` syntax for invoking loaded procedures.
- Add `CREATE INDEX ON :Label` for creating label indices.
- Add `DROP INDEX ON :Label` for dropping label indices.
- Add `DUMP DATABASE` clause to openCypher.
- Add functions for treating character strings as byte strings.

### Bug Fixes and Other Changes

- Fix several memory management bugs.
- Reduce memory usage in query execution.
- Fix bug that crashes the database when `EXPLAIN` is used.

## v0.15.0 - Jul 17, 2019

:::warning

### Breaking Changes

- Snapshot and write-ahead log format changed (not backward compatible).
- `indexInfo()` function replaced with `SHOW INDEX INFO` syntax.
- Removed support for unique index. Use unique constraints instead.
- `CREATE UNIQUE INDEX ON :label (property)` replaced with `CREATE CONSTRAINT ON (n:label) ASSERT n.property IS UNIQUE`.
- Changed semantics for `COUNTER` openCypher function.

:::

### Major Features and Improvements

- [Enterprise Ed.] Add new privilege, `STATS` for accessing storage info.
- [Enterprise Ed.] LDAP authentication and authorization support.
- [Enterprise Ed.] Add audit logging feature.
- Add multiple properties unique constraint which replace unique indices.
- Add `SHOW STORAGE INFO` feature.
- Add `PROFILE` clause to openCypher.
- Add `CREATE CONSTRAINT` clause to openCypher.
- Add `DROP CONSTRAINT` clause to openCypher.
- Add `SHOW CONSTRAINT INFO` feature.
- Add `uniformSample` function to openCypher.
- Add regex matching to openCypher.

### Bug Fixes and Other Changes

- Fix bug in query comment parsing.
- Fix bug in query symbol table.
- Fix OpenSSL memory leaks.
- Make authentication case insensitive.
- Remove `COALESCE` function.
- Add movie tutorial.
- Add backpacking tutorial.

## v0.14.1 - Jan 22, 2019

### Bug Fixes and Other Changes

- Fix bug in explicit transaction handling.
- Fix bug in edge filtering by edge type and destination.

## v0.14.0 - Oct 30, 2018

:::warning

### Breaking Changes

- Write-ahead log format changed (not backward compatible).

:::

### Major Features and Improvements

- [Enterprise Ed.] Reduce memory usage in distributed usage.
- Add `DROP INDEX` feature.
- Improve SSL error messages.

### Bug Fixes and Other Changes

- [Enterprise Ed.] Fix issues with reading and writing in a distributed query.
- Correctly handle an edge case with unique constraint checks.
- Fix a minor issue with `mg_import_csv`.
- Fix an issue with `EXPLAIN`.

## v0.13.0 - Oct 18, 2018

:::warning

### Breaking Changes

- Write-ahead log format changed (not backward compatible).
- Snapshot format changed (not backward compatible).

:::

### Major Features and Improvements

- [Enterprise Ed.] Authentication and authorization support.
- [Enterprise Ed.] Kafka integration.
- [Enterprise Ed.] Support dynamic worker addition in distributed.
- Reduce memory usage and improve overall performance.
- Add `CREATE UNIQUE INDEX` clause to openCypher.
- Add `EXPLAIN` clause to openCypher.
- Add `inDegree` and `outDegree` functions to openCypher.
- Improve BFS performance when both endpoints are known.
- Add new `node-label`, `relationship-type` and `quote` options to
  `mg_import_csv` tool.
- Reduce memory usage of `mg_import_csv`.

### Bug Fixes and Other Changes

- [Enterprise Ed.] Fix an edge case in distributed index creation.
- [Enterprise Ed.] Fix issues with Cartesian in distributed queries.
- Correctly handle large messages in Bolt protocol.
- Fix issues when handling explicitly started transactions in queries.
- Allow openCypher keywords to be used as variable names.
- Revise and make user visible error messages consistent.
- Improve aborting time consuming execution.

## v0.12.0 - Jul 4, 2018

:::warning

### Breaking Changes

- Snapshot format changed (not backward compatible).

:::

### Major Features and Improvements

- Improved Id Cypher function.
- Added string functions to openCypher (`lTrim`, `left`, `rTrim`, `replace`,
  `reverse`, `right`, `split`, `substring`, `toLower`, `toUpper`, `trim`
  ).
- Added `timestamp` function to openCypher.
- Added support for dynamic property access with `[]` operator.

## v0.11.0 - Jun 20, 2018

### Major Features and Improvements

- [Enterprise Ed.] Improve Cartesian support in distributed queries.
- [Enterprise Ed.] Improve distributed execution of BFS.
- [Enterprise Ed.] Dynamic graph partitioner added.
- Static nodes/edges id generators exposed through the Id Cypher function.
- Properties on disk added.
- Telemetry added.
- SSL support added.
- `toString` function added.

### Bug Fixes and Other Changes

- Document issues with Docker on OS X.
- Add BFS and Dijkstra's algorithm examples to documentation.

## v0.10.0 - Apr 24, 2018

:::warning

### Breaking Changes

- Snapshot format changed (not backward compatible).

:::

### Major Features and Improvements

- [Enterprise Ed.] Distributed storage and execution.
- `reduce` and `single` functions added to openCypher.
- `wShortest` edge expansion added to openCypher.
- Support packaging RPM on CentOS 7.

### Bug Fixes and Other Changes

- Report an error if updating a deleted element.
- Log an error if reading info on available memory fails.
- Fix a bug when `MATCH` would stop matching if a result was empty, but later
  results still contain data to be matched. The simplest case of this was the
  query: `UNWIND [1, 2, 3] AS x MATCH (n: Label {prop: x}) RETURN n`. If there
  was no node `(: Label {prop: 1})`, then the `MATCH` wouldn't even try to find
  for `x` being 2 or 3.
- Report an error if trying to compare a property value with something that
  cannot be stored in a property.
- Fix crashes in some obscure cases.
- Commit log automatically garbage collected.
- Add minor performance improvements.

## v0.9.0 - Dec 18, 2017

:::warning

### Breaking Changes

- Snapshot format changed (not backward compatible).
- Snapshot configuration flags changed, general durability flags added.

:::

### Major Features and Improvements

- Write-ahead log added.
- `nodes` and `relationships` functions added.
- `UNION` and `UNION ALL` is implemented.
- Concurrent index creation is now enabled.

### Bug Fixes and Other Changes

## v0.8.0

### Major Features and Improvements

- CASE construct (without aggregations).
- Named path support added.
- Maps can now be stored as node/edge properties.
- Map indexing supported.
- `rand` function added.
- `assert` function added.
- `counter` and `counterSet` functions added.
- `indexInfo` function added.
- `collect` aggregation now supports Map collection.
- Changed the BFS syntax.

### Bug Fixes and Other Changes

- Use \u to specify 4 digit codepoint and \U for 8 digit
- Keywords appearing in header (named expressions) keep original case.
- Our Bolt protocol implementation is now completely compatible with the
  protocol version 1 specification. (https://boltprotocol.org/v1/)
- Added a log warning when running out of memory and the
  `memory_warning_threshold` flag
- Edges are no longer additionally filtered after expansion.

## v0.7.0

### Major Features and Improvements

- Variable length path `MATCH`.
- Explicitly started transactions (multi-query transactions).
- Map literal.
- Query parameters (except for parameters in place of property maps).
- `all` function in openCypher.
- `degree` function in openCypher.
- User specified transaction execution timeout.

### Bug Fixes and Other Changes

- Concurrent `BUILD INDEX` deadlock now returns an error to the client.
- A `MATCH` preceeded by `OPTIONAL MATCH` expansion inconsistencies.
- High concurrency Antlr parsing bug.
- Indexing improvements.
- Query stripping and caching speedups.

## v0.6.0

### Major Features and Improvements

- AST caching.
- Label + property index support.
- Different logging setup & format.

## v0.5.0

### Major Features and Improvements

- Use label indexes to speed up querying.
- Generate multiple query plans and use the cost estimator to select the best.
- Snapshots & Recovery.
- Abandon old yaml configuration and migrate to gflags.
- Query stripping & AST caching support.

### Bug Fixes and Other Changes

- Fixed race condition in MVCC. Hints exp+aborted race condition prevented.
- Fixed conceptual bug in MVCC GC. Evaluate old records w.r.t. the oldest.
  transaction's id AND snapshot.
- User friendly error messages thrown from the query engine.

## Build 837

### Bug Fixes and Other Changes

- List indexing supported with preceeding IN (for example in query `RETURN 1 IN [[1, 2]][0]`).

## Build 825

### Major Features and Improvements

- RETURN _, count(_), OPTIONAL MATCH, UNWIND, DISTINCT (except DISTINCT in
  aggregate functions), list indexing and slicing, escaped labels, IN LIST
  operator, range function.

### Bug Fixes and Other Changes

- TCP_NODELAY -> import should be faster.
- Clear hint bits.

## Build 783

### Major Features and Improvements

- SKIP, LIMIT, ORDER BY.
- Math functions.
- Initial support for MERGE clause.

### Bug Fixes and Other Changes

- Unhandled Lock Timeout Exception.
