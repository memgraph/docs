# Release notes

import VideoBySide from '@site/src/components/VideoBySide';

## Memgraph v2.9 - Jul 21, 2023

:::caution

Memgraph 2.9 introduced a new configuration flag
`--replication-restore-state-on-startup` which is `false` by default.

If you want instances to remember their role and configuration in a replication
cluster upon restart, the `--replication-restore-state-on-startup` needs to be
set to `true` when first initializing the instances and remain `true` throughout
the instances' lifetime. 

When reinstating a cluster it is advised to first initialize the MAIN
instance, then the REPLICA instances. 

:::

### New features and improvements

- The new [`ON_DISK_TRANSACTIONAL` storage
  mode](/reference-guide/storage-modes.md) allows you to store data on disk
  rather than in-memory. Check the implementation and implications in the
  reference guide. [#850](https://github.com/memgraph/memgraph/pull/850)
- Memgraph now works with all Bolt v5.2 drivers.
  [#938](https://github.com/memgraph/memgraph/pull/938)
- The [LOAD CSV clause](/import-data/files/load-csv-clause.md) has several new improvements: 
  - You can now import data from web-hosted CSV files by passing the URL as a
    file location. You can also import files compressed with `gzip` or `bzip2`
    algorithms. [#1027](https://github.com/memgraph/memgraph/pull/1027)
  - To speed up the execution of the `LOAD CSV` clause, you can add `MATCH` and
    `MERGE` entities prior to reading the rows from a CSV file. But, the `MATCH`
    or `MERGE` clause has to return just one row or Memgraph will throw an
    exception. [#916](https://github.com/memgraph/memgraph/pull/916)
  - If a certain sequence of characters in a CSV file needs to be imported as
    null, you can now specify them with the NULLIF option of the LOAD CSV
    clause. [#914](https://github.com/memgraph/memgraph/pull/914)
- You can now use `mgp::Type::Any` while developing a custom query procedure
  with [the C++
  API](/reference-guide/query-modules/implement-custom-query-modules/api/cpp-api.md)
  to specify that the argument of the procedure can be of any type.
  [#982](https://github.com/memgraph/memgraph/pull/982)
- When you need to differentiate transactions, you can now define and pass
  [transaction metadata](/reference-guide/transactions.md) via the client and check it in Memgraph by running the
  `SHOW TRANSACTIONS;` query.
  [#945](https://github.com/memgraph/memgraph/pull/945) 
- You can now create [custom batch procedures in Python and
  C++](/reference-guide/query-modules/implement-custom-query-modules/overview.md)
  that process data in batches, thus consuming less memory.  
[#964](https://github.com/memgraph/memgraph/pull/964)
- The [`ANALYZE GRAPH;` query](/reference-guide/analyze-graph.md) now includes information about the degree of all
  nodes to enhance the MERGE optimizations on supernodes.
  [#1026](https://github.com/memgraph/memgraph/pull/1026)
- The `--replication-restore-state-on-startup` configuration flag allows you to
  define whether instances in the [replication
  cluster](/reference-guide/replication.md) will regain their roles upon restart
  (`true`) or restart as disconnected "blank" MAIN instances (default setting
  `false`). This flag resolved the unwanted behavior of restarted REPLICA
  instances disconnecting from the cluster, but it also needs to be introduced
  to MAIN instances so they are not disconnected from the cluster upon restart.
  [#791](https://github.com/memgraph/memgraph/pull/791)

### Bug fixes

- `init-file` and `init-data-file` configuration flags allow the execution of
  queries from a CYPHERL file, prior to or immediately after the Bolt server
  starts and are now possible to configure in the Community Edition as well.
  [#850](https://github.com/memgraph/memgraph/pull/850)
- The IN_MEMORY_ANALYTICAL storage mode now deallocates memory as expected and
  no longer consumes memory excessively. [#1025](https://github.com/memgraph/memgraph/pull/1025) 
- When no values are returned from a map, a null is returned instead of an
  exception occurring. [#1039](https://github.com/memgraph/memgraph/pull/1039)

<VideoBySide videoSrc="https://www.youtube.com/embed/5JvBBUjpGRA">

## MAGE v1.8.0 - Jul 21, 2023

### Features and improvements

- With the [`llm_util` module](/query-modules/python/llm-util.md) you can generate a graph schema in a format best
  suited for large language models (LLMs).
  [#225](https://github.com/memgraph/mage/pull/225)
- When executing complex queries, the [`periodic`
  module](/query-modules/cpp/periodic.md) allows batching results from one query
  into another to improve execution time.
  [#221](https://github.com/memgraph/mage/pull/221)
- The [`conditional_execution`
  module](/query-modules/cpp/conditional-execution.md) which allows the
  execution of different queries depending on certain conditions being met, has
  been rewritten from Python to C++ to improve performance and it can also
  periodically iterates. [#222](https://github.com/memgraph/mage/pull/222)
- The [`migrate` module](/query-modules/python/migrate.md) has the option to get data from MySQL, SQL server, or
  Oracle DB to migrate it to Memgraph.
  [#209](https://github.com/memgraph/mage/pull/209)

## Memgraph Lab v2.7.1 - Jul 05, 2023

### Improvements

- System Default style has been renamed to System Style. 
- If you run a query that has errors in the Graph Style Script code, you can
  decide to run it using the System Style. 

### Bug fixes

- Bug that would allow multiple styles to be the default has been fixed. 
- The System Default Style now has `background-color` set to white.
- Queries selected in the Query Editor now execute as expected. 
- Creating and editing a query module as well as selecting a transformation
  module in the Streams section now work as expected. 
- All links are now linked with appropriate external resources.
- The pop-up window in the Run History that allows rerunning the query now
  closes once an option is selected.

## Memgraph Lab v2.7.0 - Jun 28, 2023

### What's new

- Now you can adjust the following settings:
  - Code completion and automatic graph rendering limits
  - The capacity of run history and its clearing
  - The limit for visible logs

  <img src={require('./data/lab-270/settings.png').default} className={"imgBorder"} style={{marginBottom:'20px'}}/>
- The new interfaces for managing saved styles enables searching and changing
  the default style in the Lab. The saved styles now also have a preview. 
  <img src={require('./data/lab-270/styles.png').default} className={"imgBorder"} style={{marginBottom:'20px'}}/>
- The run history now also tracks changes to the query, style, or both. You can
  also filter out records to show All (both queries runs and applied styles),
  Query history (only query runs), and Style history (only applied style
  changes). You can expand both the query and style to see the full Cypher or
  GSS code.
  <img src={require('./data/lab-270/run_history.png').default} className={"imgBorder"} style={{marginBottom:'20px'}}/>
  <img src={require('./data/lab-270/run_history_expand.png').default} className={"imgBorder"} style={{marginBottom:'20px'}}/>
  <img src={require('./data/lab-270/run_history_queries.png').default} className={"imgBorder"} style={{marginBottom:'20px'}}/>
- Queries inside a collection can be expanded and collapsed by clicking on their
  name.
- When testing and trying out different functions in the GSS you can use
  single-line (`// comment`) and multi-line (`/* comment */`) comments in the
  GSS code editor without losing previous state.
- Change the canvas color of the graph view with the new property
  `background-color` in [`@ViewStyle`](/style-script/gss-viewstyle-directive.md).
- Change the stack order of how nodes and edges are rendered in the graph view
  with the property `z-index` in
  [`@NodeStyle`](/style-script/gss-nodestyle-directive.md) and
  [`@EdgeStyle`](/style-script/gss-edgestyle-directive.md) directives. It works
  the same as the CSS z-index property.
- Set up transparent colors with the [new GSS
  functions](/style-script/gss-functions.md) `RGBA` and `HSLA`. You can also get
  the transparency value with the function `Alpha`.
- [New functions](/style-script/gss-functions.md) allow more customizations: `Sort`, `Coalesce`, `Reverse`,
  `IsMap`, `AsMap`, `Execute`, `Get`, `Set`, `Del`, `MapKeys`, `MapValues`,
  `AsIterator`, `IsIterator`, `Next`
- [Global and local
    variables](/memgraph-lab/graph-style-script-language#caching-results-for-faster-performance)
    make developing new styles easier:
  - Variable graph is now available outside `@NodeStyle` and `@EdgeStyle`
    context
  - Local variables can be defined with `Define` within `@NodeStyle` and
    `@EdgeStyle` context
- Memgraph Lab is now packaged as an RPM package and arm64 (M1 chip) for MacOS.

### Bug fixes

- Running a selected part of the Cypher query would just place that selected
  part in the run history. Now, the full query will be saved in the run history,
  and on its run, only the selected part will be executed again.
- Rows that would hide when scrolling the data results view now preview as expected.
- The System Default style colors all the nodes with the same label with a
  unique color.
- When showing a graph view on a map, you will no longer see a progress
  percentage which is unnecessary as each node has a fixed and known position
  due to its latitude and longitude values.
- All tables across the Lab are responsive as expected.
- Layouts no longer cause memory leaks and work as expected.
- By fixing a bug, you can now successfully connect to Memgraph using a hostname
  that contains numbers in the top-level domain.
- Markdown lists in query descriptions are indented as expected.

## Memgraph v2.8 - May 18, 2023

### New features and improvements

- Data recovery is now up to 6x faster depending on the number of available
  cores, as [snapshot loading is distributed among several
  threads](/memgraph/reference-guide/backup#snapshots).
  [#868](https://github.com/memgraph/memgraph/pull/868)
- During the recovery, indexes can also  be created using multiple threads, thus
  speeding up the process. [#882](https://github.com/memgraph/memgraph/pull/882)
- In the Enterprise Edition, Memgraph now [exposes system
  metrics](/reference-guide/exposing-system-metrics.md) via an HTTP endpoint, so
  you can get information about transactions, query latency and various other
  properties. [#940](https://github.com/memgraph/memgraph/pull/940)
- It’s now possible to use the [map projection
  syntax](/memgraph/reference-guide/data-types#maps) to create maps. Map
  projections are convenient for building maps based on existing values and they
  are used by data access tools like GraphQL.
  [#892](https://github.com/memgraph/memgraph/pull/892)
- You can now check if [the data directory](/reference-guide/backup.md) is
  (un)locked with the `DATA DIRECTORY LOCK STATUS;` query.
  [#933](https://github.com/memgraph/memgraph/pull/933)
- You can now check the current [storage
  mode](/reference-guide/storage-modes.md) and [isolation
  levels](/reference-guide/transactions.md) by running the `SHOW STORAGE INFO;`
  query. [#883](https://github.com/memgraph/memgraph/pull/883)
- Check the suspected [build type of the Memgraph
  executable](/memgraph/reference-guide/server-stats#build-information) by
  running the `SHOW BUILD INFO;` query.
  [#894](https://github.com/memgraph/memgraph/pull/894)
- Performance has been improved by optimizing the deallocation of resources in
  Memgraph's custom `PoolResource` memory allocator.
  [#898](https://github.com/memgraph/memgraph/pull/898)

</VideoBySide>

### Bug fixes

- Running Python procedures now consume less memory.
  [#932](https://github.com/memgraph/memgraph/pull/932)
- Memory allocation in LOAD CSV queries has been optimized to avoid performance
  degradation. [#877](https://github.com/memgraph/memgraph/pull/877) 
- Query profiles of the LOAD CSV queries now show the correct values of memory
  usage. [#885](https://github.com/memgraph/memgraph/pull/885)

<VideoBySide videoSrc="https://www.youtube.com/embed/kJG98VkPMGU">

## Memgraph Lab v2.6.0 - Apr 20, 2023

### What's new

- If you execute multiple Cypher queries, you can now view the result of each
  query instead of viewing just the last result.
  ![results](./data/lab-260/results.png)
- Besides exporting query results to JSON, you can also export them to CSV and
  TSV file format.
  ![download](./data/lab-260/download.png)
- If the dataset contains millions or billions nodes and relationships, their
  count in the status bar will be in the following format: X.XXM or X.XXB.
- Syntax of code blocks in the query collection description can now be
  highlighted by using one of the following language
  styles: `cypher`, `bash`, `python`, `css`, `c`, `cpp`, `json`, `sql`,
  and `yaml`. Check the examples of syntax highlighting in the [Markdown
  Guide](https://www.markdownguide.org/extended-syntax/#syntax-highlighting).
  ![markdown](./data/lab-260/markdown.png)
- [New functions of the Graph Style Script
  language](/style-script/gss-functions.md) used for customizing graph appearance
  are: `Reduce`, `Sum`, `Avg`, `Min`, `Max`, `IsArray`, `Hue`, `Saturation`,
  `Lightness`, `HSL`.
  ![gss](./data/lab-260/gss.png)

### Bug fixes

- The initial node count has been removed from the connection initialization so
  connecting to the Memgraph instance containing a huge number of nodes will no
  longer cause a timeout. 
- Run History now logs queries as expected.
- When switching between the map view and the default view the graph view no
  longer becomes unresponsive. 
- Using a new line character `\n` in the query module doesn’t result in a new
  line, but an explicit character `\n`.
- Viewing the code of multiple query modules in the split screen now
  works as expected.
- Notifications no longer mix with the Query Editor and Query Collections visual
  elements.
- Pressing CMD/CTRL + S will save a query within a query collection execution section as intended.
- The autosave in query collection is now triggered on every query run as it was
  intended.
- Running a selected portion of the query won’t remove the rest of the query
  from the query collection execution view.
- GSS `Blue` function was returning a wrong number. It is fixed now. `Lighter`
  and `Darker` functions now work correctly as well because they were depending
  on the output from the `Blue` function.

## Memgraph v2.7 - Apr 5, 2023

### New features and improvements

- You can now choose between [two different storage modes](/reference-guide/storage-modes.md):
  - Transactional mode - the default database mode that favors
    strongly-consistent ACID transactions using WAL files and periodic
    snapshots, but requires more time and resources during data import and
    analysis.
  - Analytical mode - speeds up import and data analysis but offers no ACID
    guarantees besides manually created snapshots.
  Switch between modes within the session using the `STORAGE MODE
  IN_MEMORY_{TRANSACTIONAL|ANALYTICAL};` query. [#772](https://github.com/memgraph/memgraph/pull/772)
- You can now call [subqueries](/cypher-manual/clauses/call) inside existing queries using the CALL clause.
  [#794](https://github.com/memgraph/memgraph/pull/794)
- When you want to filter data using properties that all have label:property
  indexes set, you can make Memgraph analyze the properties on all or several
  labels with the [`ANALYZE GRAPH;`
  query](/memgraph/reference-guide/indexing#analyze-graph). By calculating the
  distribution of property values, Memgraph will be able to select the optimal
  index for the query and it will execute faster.
  [#812](https://github.com/memgraph/memgraph/pull/812)
- If, for example, you are no longer interested in the results of the query you
  ran, or the procedure you built is running in an infinite loop, you can [stop
  the transaction](/memgraph/reference-guide/transactions#managing-transactions)
  with the `TERMINATE TRANSACTIONS tid;` query; Find out the transaction ID with
  `SHOW TRANSACTIONS;` query.
  [#790](https://github.com/memgraph/memgraph/pull/790)
- With the [new flag](/memgraph/reference-guide/configuration#other)
  `password-encryption-algorithm` you can choose between `bcrypt`, `sha256`, and
  `sha256-multiple` encryption algorithms. SHA256 offers better performance
  compared to the more secure but less performant bcrypt.
  [#839](https://github.com/memgraph/memgraph/pull/839)
- Import using the [LOAD CSV clause](/import-data/files/load-csv-clause.md) has
  been further improved by using a memory allocator which will reuse memory
  blocks allocated while processing the `LOAD CSV` query.
  [#825](https://github.com/memgraph/memgraph/pull/825)

</VideoBySide>

### Bug fixes

- The users who have [global visibility on the
  graph](/memgraph/reference-guide/security#label-based-access-control) will
  experience a slight improvement in performance regarding label-based access
  control as the engine no longer check privileges for each node.
  [#837](https://github.com/memgraph/memgraph/pull/837)
- The [All shortest paths
  algorithm](/memgraph/reference-guide/built-in-graph-algorithms#all-shortest-paths)
  now supports multiedges. [#832](https://github.com/memgraph/memgraph/pull/832)

## MAGE v1.7.0 - Apr 5, 2023

### Features and improvements

- The [new conditional execution
module](/query-modules/cpp/conditional-execution.md) lets you define
  conditions not expressible in Cypher and and use them to control query
  execution. [#203](https://github.com/memgraph/mage/pull/203)

## MAGE v1.6.1 - Mar 20, 2023

### Features and improvements

- With the `export_util.csv_query()` procedure, you can export query results to a CSV file or as a stream. [#199](https://github.com/memgraph/mage/pull/199)
- Similarity algorithms (`jaccard`, `overlap` and `cosine`) have been rewritten in C++ to improve performance. [#196](https://github.com/memgraph/mage/pull/196)

## Memgraph Lab v2.5.0 - Mar 17, 2023

### What's New

* If there are several Cypher queries in the query editor you can select a single query and run
  it without commenting out all the other queries.

![run-selected-query-in-the-lab](./data/lab-run-selected-demo.gif)

* You can now open multiple query executions views side by side and compare query execution speed or results.

![multiple-query-executions-in-the-lab](./data/lab-multiple-editors-demo.gif)

* Query modules are now sorted alphabetically for easier and faster browsing. A search box has also been added to query modules with more
  than 5 procedures to help narrow them down (e.g. `nxalg` query module has [49 procedures](https://memgraph.com/docs/mage/query-modules/python/nxalg)).
* When rendering a graph with more than 3,500 nodes or 8,500 relationships, which might take considerable amount of time to preview, you will be
  asked if you want to proceed with the graph visualization or switch to the data view.
* Besides manually saving changes in the Cypher query and GSS style editor in the query collections section, they will also be saved
  automatically after each query run.
* Memgraph Lab will now notify you of any product updates and offer various tips and tricks for using the Memgraph ecosystem.

### Bug Fixes

* Cypher code suggestions can now handle labels and properties of 250k nodes and 500k relationships, compared to the previous limit of
  100k nodes nad 200k relationships.
* Multiple scrollable elements of the query collections was making scrolling difficult. Now you can focus on a particular element and
  scroll through it by clicking on it.
* Browser's back button is now working as expected when using Lab as a web application.
* Data in the query results, query modules and query run history tables now loads faster making the scrolling smoother and improving
  the user experience.
* Graph schema is now generated even if the database has no relationships.
* In-progress feedback when generating graph schema and exporting datasets for graphs with more than 10M nodes
  is now previewed as expected.
* A scrolling issue with expanded results in the Data view where you couldn't see a completely expanded row because the
  scroll would jump to the next row is now fixed.
* Dataset cards no longer spread apart when conducting a search. 

## Memgraph v2.6 - Mar 07, 2023

### Major features and improvements

- Importing speed using the LOAD CSV clause has been improved due to two changes:
  -  Performance improvement in accessing values from large arrays or maps with numerous properties. [#744](https://github.com/memgraph/memgraph/pull/774)
  -  Upon creating a large number of node or relationship properties, properties are stored in a property store all at once, instead of individually. [#788](https://github.com/memgraph/memgraph/pull/788)
- Newly implemented `exists()` function allows using patterns as part of the filtering clause. Check the [Cypher Manual](/cypher-manual/clauses/where) for usage. [#818](https://github.com/memgraph/memgraph/pull/818)
- With the new [Python mock query module API](/reference-guide/query-modules/implement-custom-query-modules/api/mock-python-api.md), you can now develop and test Python query modules for Memgraph without having to run a Memgraph instance. The mock API is compatible with the Python API and thus developed modules can be added to Memgraph as-is. [#757](https://github.com/memgraph/memgraph/pull/757)
- Memgraph now supports Fedora 36 and Ubuntu 22.04 for ARM. [#787](https://github.com/memgraph/memgraph/pull/787) [#810](https://github.com/memgraph/memgraph/pull/810)

### Bug fixes

-  `torch` and `igraph` can no longer be removed from the `svs.modules` cache to avoid issues after reload. [#720](https://github.com/memgraph/memgraph/pull/720)
-  Newly created nodes now comply with the set label based authorization rules. [#755](https://github.com/memgraph/memgraph/pull/755)
-  Constructing LocalDateTime objects with invalid parameters doesn’t crash Memgraph anymore, but throws an informative exception. [#819](https://github.com/memgraph/memgraph/pull/819)
-  Error message warning about incompatible `epoch_id` between a MAIN and REPLICA instance has been improved. [#786](https://github.com/memgraph/memgraph/pull/786)

## MAGE v1.6 - Jan 30, 2023

### Major Features and Improvements

- The `setup` script now halts if the build fails on C++ or Rust side. [#194](https://github.com/memgraph/mage/pull/194)
- With the [`meta_util.schema()` procedure](/query-modules/python/meta-util.md), you can generate a graph schema as a graph result. [#187](https://github.com/memgraph/mage/pull/187)
- The execution of the `single` method multiple times has been improved by rewriting [the distance calculator](/query-modules/cpp/distance-calculator.md) from Python to C++. [#191](https://github.com/memgraph/mage/pull/191)
- [Dynamic graph analytics](/algorithms/dynamic-graph-analytics/betweenness-centrality-online-algorithm.md) have been ported to C++ to improve performance. [#182](https://github.com/memgraph/mage/pull/182)
- [New module `elastic_search_serialization`](/query-modules/python/elasticsearch-synchronization.md) enables developers to serialize Memgraph into Elasticsearch instance using basic authentication. [#170](https://github.com/memgraph/mage/pull/170)

## Memgraph v2.5.2 - Jan 26, 2023

### Bug Fixes

- Variables can be used inside nested [FOREACH clauses](/cypher-manual/extension-clauses). [#725](https://github.com/memgraph/memgraph/pull/725)
- [FOREACH clause](/cypher-manual/extension-clauses) can now use indexes if needed (e.g. in case of MERGE). [#736](https://github.com/memgraph/memgraph/pull/736)
- [C++ API](/reference-guide/query-modules/implement-custom-query-modules/api/cpp-api.md) now allows setting and getting node and relationship properties. [#732](https://github.com/memgraph/memgraph/pull/732)
- [OPTIONAL MATCH](/cypher-manual/clauses/optional-match) can now use label property indexes that are referencing the previously matched variables. [#736](https://github.com/memgraph/memgraph/pull/736)
- Iterating over all relationships in a graph now works as expected, as well as checking whether the graph contains a given relationship. [#743](https://github.com/memgraph/memgraph/pull/743)
- Implementation of the [All Shortest Paths algorithm](/memgraph/reference-guide/built-in-graph-algorithms#all-shortest-paths) was fixed so the paths are no longer duplicated when the upper bound is used. [#737](https://github.com/memgraph/memgraph/pull/737)

## MAGE v1.5.1 - Jan 20, 2023

### Major Features and Improvements

- The version of MemgraphDB that will be used in the Docker image has been updated to 2.5.1.
  [#193](https://github.com/memgraph/mage/pull/193)

## Memgraph v2.5.1 - Jan 19, 2023

### Bug Fixes

- The LOAD CSV clause now uses less RAM to load a whole CSV file. Modification
  made to improve the LOAD CSV operation, also influenced high memory usage
  operations with objects such as lists and map. Modifying or accessing elements
  inside those objects now also uses less RAM.
  [#712](https://github.com/memgraph/memgraph/pull/712)
- The logic of the `read_write_type_checker` was corrected so queries now get
  the right `rw_type`, making the replication system work as expected.
  [#709](https://github.com/memgraph/memgraph/pull/709)
- Bolt protocol has been improved by adding the server-assigned query ID (`qid`)
  as part of the transactions' metadata.
  [#721](https://github.com/memgraph/memgraph/pull/721)
- Fixed a trigger bug that would cause an error if Memgraph is configured to run
  without properties on edges. As a result of the fiy, triggers are now working
  as expected when there are no properties on edges.
  [#717](https://github.com/memgraph/memgraph/pull/717)

## MAGE v1.5 - Dec 20, 2022

### Major Features and Improvements

- Now you can find ancestors (all the nodes from which a path exists ) and descendants (all nodes to which a path exists) starting from a certain node, sort directed acyclic graph in a way that a node which appears before others is first, return a subgraph from nodes using `connect_nodes` method, and create relationships between nodes in a list using the `chain_nodes` method.
  [#180](https://github.com/memgraph/mage/pull/180)
- C++ API is now aligned with Memgraph 2.5
  [#184](https://github.com/memgraph/mage/pull/184)
- Graph Coloring no longer outputs strings but vertices and integers. This allows you to use the result of graph coloring directly in Memgraph Lab.
  [#177](https://github.com/memgraph/mage/pull/177)

### Bug Fixes
- By enabling module reset, you can now train and evaluate the model without shutting down the database.
  Class labels can now start from 0 or negative numbers.
  The low limit of the early stopping flag no longer prematurely stops the training of the model while running the Node classification module.
  [#173](https://github.com/memgraph/mage/pull/173)

## Memgraph v2.5.0 - Dec 13, 2022

### Major Features and Improvements

- `DISTINCT` operator can now be used with aggregation functions. Until now, if
  you wanted to use an aggregation function with distinct values, you had to
  write a query similar to this one `WITH DISTINCT n.prop as distinct_prop
  RETURN COUNT(distinct_prop)`. Now you can use the `DISTINCT` operator like in
  the following query, `RETURN COUNT(DISTINCT n.prop)`.
  [#654](https://github.com/memgraph/memgraph/pull/665)
- You can now create a user before the Bolt server starts using the environment
  variables `MEMGRAPH_USER` for the username, `MEMGRAPH_PASSWORD` for the
  password and `MEMGRAPH_PASSFILE` file that contains username and password for
  creating the user in the following format: `username:password`.
  [#696](https://github.com/memgraph/memgraph/pull/696)
- With the new configuration flag `init_file` you can execute queries from the
  CYPHERL file which need to be executed before the Bolt server starts and with
  the configuration flag `init_data_file` you can execute queries from the
  CYPHERL file immediately after the Bolt server starts.
  [#696](https://github.com/memgraph/memgraph/pull/696)

### Bug Fixes

- Constructors and assignment operators in the C++ query modules API now work as
  expected, and the API type check in the `ValueNumeric` method now correctly
  recognizes numeric types.
  [#688](https://github.com/memgraph/memgraph/pull/688)
- Error message support (`SetErrorMessage`) has been added to query methods that
  use the MAGE C++ API. [#688](https://github.com/memgraph/memgraph/pull/688)
- The `EmptyResult` sink operator was added to the Memgraph's planner. This
means that results produced by a query `MATCH (n) SET n.test_prop = 2` will get
exhausted which was a problem in some Bolt clients implementations, e.g in
Golang's client. [#667](https://github.com/memgraph/memgraph/pull/667)
- Fixed Python submodules reloading when calling `CALL mg.load()` and `CALL
  mg.load_all()`. Before, only the Python module would be reloaded, but now all
  dependencies get reloaded as well. This includes Python's utility submodules
  and Python packages, which means that the environment with Python packages can
  be changed without turning off the database.
  [#653](https://github.com/memgraph/memgraph/pull/653)

## Memgraph Lab v2.4.0 - Dec 2, 2022

### What's New

* Memgraph Lab now supports manual transaction workflows you can construct using transaction commands `BEGIN`, `COMMIT`, and `ROLLBACK`.
* Cypher intellisense has been updated to suggest new Cypher features from Memgraph 2.4.0 such as:
  * Privileges for user-role authorization.
  * Commands and privileges for label-based authorization.
  * Manual transaction commands: `BEGIN`, `COMMIT`, `ROLLBACK`.
  * Checking configuration with `SHOW CONFIG`.
  * All shortest path algorithm `allShortest`.
  * Graph projection function `project`.
  * Additional query module signature that accepts a projected graph as an optional first argument.
* Graph results view will check for nodes and relationships in arrays and projected graphs. It simplifies
  the visualization of a projected graph or an array of nodes/relationships without using `UNWIND`.

### Bug Fixes

* Once the table results view is selected, the results of the following query run will also preview in the table results view, instead of automatically switching to the graph view.
* Exploring a dataset's query collection now works as expected. It opens up a list of queries that can be used to explore the dataset.
* Failed queries from the rich collections now return a detailed error message.
* _Save code changes_ button in rich collections will now be enabled only if there are unsaved changes for the Cypher query 
  or GSS.
* A bug that would only show the first node label instead of all node labels in the table results view has been fixed.

## MAGE v1.4 - Nov 15, 2022

### Major Features and Improvements

- Implemented Link prediction with [DGL](https://www.dgl.ai/).
  [#160](https://github.com/memgraph/mage/pull/160)
- Implemented Node classification with PyTorch.
  [#161](https://github.com/memgraph/mage/pull/161)
- Added igraph support.
  [#150](https://github.com/memgraph/mage/pull/150)
- Added _k_-means embedding clustering algorithm.
  [#105](https://github.com/memgraph/mage/pull/105)
- Added better support for C++ API.
  [#174](https://github.com/memgraph/mage/pull/174)

### Bug Fixes
- Enable module reset to be able to train and evaluate without shutting down database, enable working with class labels which don't start from 0, and fix potential early stopping due to low limit in the Node classification module.
  [#173](https://github.com/memgraph/mage/pull/173)

## Memgraph v2.4.2 - Nov 7, 2022

### Bug Fixes

- Fixed a bug when calling `AllShortestPath` with `id` function.
  [#636](https://github.com/memgraph/memgraph/pull/636)
- Fixed bug when getting iterating over in-edges of a Node.
  [#582](https://github.com/memgraph/memgraph/pull/613)

## Memgraph Lab v2.3.1 - Nov 4, 2022

### Bug Fixes

* Writing a single-line comment in the Cypher code no longer results in an error.
* Having different map tiles (e.g. "light" map tile on one map view, but "dark" map tile on another map view) for multiple graph map views in the rich collection is enabled and works as expected.
* Graph rendering freeze when toggling the map view on/off during the graph rendering process has been fixed.
* All the information about nodes and edges on the graph schema is now previewed as expected.
* A bug that would mix query title and description when queries are reordered in the rich query collection has been fixed.
* A bug that would not reset the description field when adding a new query to the query collection has been fixed.
* Saving a new style now works as expected. The active style is saved, not the last applied one.

## Memgraph Lab v2.3.0 - Oct 24, 2022

### What's New

* Add new updates to the prepared datasets:
  * Add a search bar for searching and filtering datasets.
  * Add featured (highlighted) datasets.
  * Add rich collections with prepared queries, descriptions, and GSS for each dataset.
* Add new updates to the latest queries:
  * Change the name from "Latest queries" to "Run history" because it contains both queries and GSS changes.
  * Show GSS changes in the "Run history" section.
* Replace previous collections with "Rich collections":
  * Add more context to each collected query: title, markdown description, Cypher query, and GSS.
  * Add the ability to run multiple query executions within the query collection.
  * Add import and export functionality of a collection.
* Add a new version of GSS:
  * Add new GSS directive `@ViewStyle` to configure physics, link distance, repel force, and view type (`default` or `map`).
  * Add new GSS directive `@ViewStyle.Map` to configure map tiles for map view.
  * Add new GSS functions: `Slice`, `Split`, `Replace`, `Trim`, `Nodes`, `Edges`, `IsNumber`, `IsBoolean`, `IsString`, `IsNull`.
  * Add new GSS node properties `latitude` and `longitude` used to define the latitude and longitude of each node for the map view.
* Integrate graph visualization library `orb`.
* Add the ability to enable/disable map background view for nodes with geo information.
* Add the ability to connect to Neo4j, load datasets, and run Cypher queries.

### Bug Fixes

* Fix map view to use latitude and longitude from GSS style instead of `lat` and `lng` node properties.
* Fix the default GSS to match new the map view configuration by checking `lat` and `lng` node properties.

## MAGE v1.3.2 - Oct 10, 2022

### Major Features and Improvements
- Allowed restricting community detection to subgraphs.
  [#152](https://github.com/memgraph/mage/pull/152)
- Implemented the degree centrality algorithm.
  [#162](https://github.com/memgraph/mage/pull/162)
- Updated Memgraph version.
  [#171](https://github.com/memgraph/mage/pull/171)

### Bug Fixes
- Dynamic betweenness centrality bugfix.
  [#147](https://github.com/memgraph/mage/pull/147)

## Memgraph v2.4.1 - Oct 7, 2022

### Bug Fixes

- Fixed bug when getting EdgeType from Edge object or Label from Vertex object
  in query modules. [#582](https://github.com/memgraph/memgraph/pull/582)
- Fix a bug when changing role permissions for label based authorization, by
  passing user's instead of role's `fine_grained_access_handler`.
  [#579](https://github.com/memgraph/memgraph/pull/579)

## Memgraph v2.4.0 - Sep 15, 2022

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

## Memgraph Lab v2.2.1 - Aug 12, 2022

### What's New

* Add improved and more precise progress when importing built-in datasets.
* Add an indicator for the total count of error log messages in the sidebar.
* Change the color scheme of code snippets for query modules.
* Add a help section when Lab's connection is reconnecting.
* Add breadcrumbs for the layout titles.

### Bug Fixes

* Fix issues with query collections.
* Fix vertical layout usability when the help sidebar is opened.
* Fix various UI and UX issues across the application.
* Fix query results on the reconnected connection.

## Memgraph Lab v2.2.0 - Jul 15, 2022

### What's New

* Add a new table look and feel across the application: query results, the latest queries, modules, streams.
* Add a help section with relevant links, guides, and documentation search capability.
* Add test parameters (batch size, timeout) for testing stream transformation.
* Add new GSS functions: `Round`, `Floor`, and `Ceil`.

### Bug Fixes

* Fix various issues in graph view, streams, and query collections.

## MAGE v1.3.1 - Jul 14, 2022

### Major Features and Improvements
- Updated Memgraph version.
  [#154](https://github.com/memgraph/mage/pull/154)
- Introduced E2E group testing.
  [#145](https://github.com/memgraph/mage/pull/145)

## Memgraph Lab v2.1.2 - Jun 21, 2022

### What's New

* Add a dashboard and overview page for the better onboarding experience.
* Add environment variables for query, modules, and streams name length validator limits.
* Add logs connection status messages in the logs view.

### Bug Fixes

* Fix several bugs with the stream configuration creation.
* Fix showing the logs when connected to Memgraph via an encrypted SSL connection.

## Memgraph v2.3.1 - Jun 23, 2022

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


## Memgraph Lab v2.1.1 - May 27, 2022

### What's New

* Add tooltips and highlights throughout the application.

### Bug Fixes

* Fix several bugs with streams.

## Memgraph Lab v2.1.0 - May 25, 2022

### What's New

* Add the ability to view, create, edit, start, stop, test, and remove streams.
* Add a new connecting screen with the ability to set monitoring (logs) port.
* Add Cypher query persistence when closing/opening Cypher query editor.
* Add node label, relationship type, and node/relationship property Cypher code suggestions for small graphs (number of nodes < 100k and number of relationships < 200k).
* Add module function Cypher code suggestions.
* Add module support for adding functions along with `mgp` suggestions and documentation.
* Add new GSS graph functions: `InEdges`, `OutEdges`, `Edges`, `AdjacentNodes`, `StartNode`, `EndNode`, `NodeCount`, `EdgeCount`.
* Add new GSS array functions: `RandomOf`, `Find`, `Filter`, `Map`, `All`, `Any`, `Uniq`.

### Bug Fixes

* Fix the UI for the GSS error messages.
* Fix the Cypher code suggestion for modules with `.` in the namespace name.
* Fix several bugs with query collections.
* Fix the empty states across the application.
* Fix the import progress bar.
* Fix the graph schema for an empty database.
* Fix the responsiveness across the application.
* Add the maximum limit of five vertical layouts.
* Fix the loading issue when running multiple Cypher queries at once.

## MAGE v1.3 - May 23, 2022

### Major Features and Improvements
- Added integration between cuGraph and Memgraph integration.
  [#99](https://github.com/memgraph/mage/pull/99)

### Bug Fixes
- Fixed node deletion.
  [#141](https://github.com/memgraph/mage/pull/141)

## Memgraph v2.3.0 - Apr 27, 2022

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

## Memgraph Lab v2.0.3 - Apr 27, 2022

### Bug Fixes

* Fix the encrypted connection creation towards Memgraph.
* Fix duplicate keywords in Cypher and Python code suggestion tools.

## Memgraph Lab v2.0.2 - Apr 22, 2022

### Major Features and Improvements

- Add guides for empty states throughout the app.
- Add an ability to close hints for transformations and procedures in module view.
- Add an ability to download query results in JSON format.
- Add confirmation step for all delete actions throughout the app.
- Add the generic Cypher query as a sample query after custom dataset file import.

### Bug Fixes

- Fix the table view with a better resize functionality throughout the app.
- Change the color of the node labels and relationship types in the Cypher query editor.
- Fix the delete query collection action.
- Fix opening an external link in the browser instead of the Lab app.
- Fix the initial render of the map for geo graph results.
- Replace the toast message "Web socket stopped working" with better notice in the "Logs" view.

## MAGE v1.2 - Apr 20, 2022

### Major Features and Improvements

- Implemented Temporal graph networks.
  [#121](https://github.com/memgraph/mage/pull/121)
- Implemented Dynamic Betweenness Centrality.
  [#127](https://github.com/memgraph/mage/pull/127)
- Implemented Dynamic Katz Centrality.
  [#117](https://github.com/memgraph/mage/pull/117)
- Implemented Louvain Community Detection.
  [#48](https://github.com/memgraph/mage/pull/48)
- Implemented Maximum Flow.
  [#125](https://github.com/memgraph/mage/pull/125)
- Implemented Static Katz Centrality.
  [#117](https://github.com/memgraph/mage/pull/117)
- Added utility Import/Export module (JSON).
  [#100](https://github.com/memgraph/mage/pull/100)
- Bumped the version of Black formatter.
  [#132](https://github.com/memgraph/mage/pull/132)

### Bug Fixes

- Fixed IsSubset checking for unordered set.
  [#135](https://github.com/memgraph/mage/pull/135)
- Fixed Continuous integration.
  [#133](https://github.com/memgraph/mage/pull/133)
- Fixed E2E testing.
  [#128](https://github.com/memgraph/mage/pull/128)
- Fixed ID validity check.
  [#129](https://github.com/memgraph/mage/pull/129)

## Memgraph Lab v2.0.1 - Apr 8, 2022

### Major Features and Improvements

- Add context (graph schema, description) to each dataset template.
- Add an action to download query results.

### Bug Fixes

- Fix the bug when adding a query to the query collection.
- Fix several typos and copies.
- Fix the web socket connection issue for the manual Memgraph connect.
- Fix initial code suggestions which are dependent on the Memgraph version.

## Memgraph Lab v2.0.0 - Mar 31, 2022

### Major Features and Improvements

- Add horizontal and vertical layouts for custom layout configuration.
- Add more query information in the latest queries: runtime, status, number of
  results.
- Add query collections to structure and save favorite queries.
- Add better Cypher code suggestion for functions, modules, nodes,
  relationships, properties.
- Add Cypher code documentation on highlight.
- Add Graph Style Script code suggestion for `@NodeStyle`, `@EdgeStyle`,
  properties and functions.
- Add Graph Style Script code documentation on highlight.
- Add improved table views throughout the app.
- Add new rendering and simulation engine based on D3.js.
- Add new rendering simulation options: collision, repel force and link
  distance.
- Remove definition of query parameters when running a Cypher query with
  `$variable`.
- Add real-time logs view from Memgraph.
- Add a status tray with connection status and main Memgraph metrics.
- Add real-time connection status and automatic reconnect ability.
- Add new graph schema view with distribution of present properties in
  nodes/relationships.
- Add ability to view, edit, remove and change query modules.

## Memgraph v2.2.1 - Mar 17, 2022

### Bug Fixes

- Added CentOS 7 release by fixing the compatibility issue with the older
  version of SSL used on CentOS 7.
  [#361](https://github.com/memgraph/memgraph/pull/361)

## Memgraph v2.2.0 - Feb 18, 2022

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

## MAGE v1.1 - Dec 13, 2021

### Major Features and Improvements

- Updated rsmgp-sys to the new MGP API.
  [#78](https://github.com/memgraph/mage/pull/78)
- Add temporal type to rsmgp-sys.
  [#82](https://github.com/memgraph/mage/pull/82)
- Implemented node2vec. [#81](https://github.com/memgraph/mage/pull/81)
- Updated GraphView abstraction. [#85](https://github.com/memgraph/mage/pull/85)
- Implemented approximative streaming PageRank.
  [#69](https://github.com/memgraph/mage/pull/69)
- Implemented weighted graph methods built for dynamic community detection.
  [#89](https://github.com/memgraph/mage/pull/89)
- Implemented LabelRankT dynamic community detection algorithm.
  [#66](https://github.com/memgraph/mage/pull/66)

### Bug Fixes

- Fixed memory leakage. [#77](https://github.com/memgraph/mage/pull/77)
- Solved dependency vulnerability.
  [#83](https://github.com/memgraph/mage/pull/83)
- Fixed `set_cover.greedy` result type bug.
  [#76](https://github.com/memgraph/mage/pull/76)
- Fixed MAGE installation on Linux based distro.
  [#92](https://github.com/memgraph/mage/pull/92)

## Memgraph v2.1.1 - Dec 07, 2021

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

## Memgraph Lab v1.3.6 - Dec 3, 2021

### Bug Fixes

* Fix the bug when returning edges: `Cannot read properties of undefined (reading 'push')`.

## Memgraph v2.1.0 - Nov 22, 2021

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

## Memgraph Lab v1.3.5 - Nov 17, 2021

### What's New

* Add new Cypher stream keywords from Memgraph 2.1.0 release.

### Bug Fixes

* Fix the copy to the clipboard bug to keep new lines.

## Memgraph Lab v1.3.4 - Nov 15, 2021

### What's New

* Add quick connect for Memgraph running locally.
* Add guides on how to install Memgraph locally.

## Memgraph Lab v1.3.3 - Oct 22, 2021

### Bug Fixes

- Fixed the action of exporting the database to a `cypherl` file.
- Added support for the temporal types in query responses.

## Memgraph v2.0.1 - Oct 12, 2021

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

## Memgraph v2.0.0 - Oct 5, 2021

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

## Memgraph Lab v1.3.2 - Oct 5, 2021

### Bug Fixes

- Fixed the copy to clipboard bug with removed spaces.
- Updated the Cypher IntelliSense with the latest commands.

## Memgraph Lab v1.3.1 - Sep 27, 2021

### Major Features and Improvements

- Signed the Memgraph Lab applications for macOS and Windows.

### Bug Fixes

- Fixed the paste overwrite action in the query editor.
- Fixed the bug `Cannot read property 'class' of null`.

## Memgraph v1.6.1 - Jul 24, 2021

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

## Memgraph v1.6.0 - Jul 7, 2021

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

## Memgraph v1.5.0 - May 28, 2021

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

## Memgraph v1.4.0 - Apr 2, 2021

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

## Memgraph Lab v1.3.0 - Feb 19, 2021

### Major Features and Improvements

- Added option to show predefined datasets with the ability to import them to
  Memgraph.
- Added option to show sample query for every loaded predefined dataset.
- Added import of custom Cypher file datasets (`cypherl` format).
- Added export of current database state to Cypher file (`cypherl` format).
- Added default node label in graph view if name property is missing.
- Added default relationship type label in graph view for smaller graphs.

### Bug Fixes and Other Changes

- Fixed sidebar links in the browser Lab.
- Fixed columns in favorite queries view.
- Fixed showing large amounts of properties in a popup when viewing node details
  in the graph view.
- Fixed the label in the popup when switching between edges and nodes in the
  graph view.
- Fixed node count in the dashboard view.
- Added descriptive and better error messages when connecting to Memgraph with
  encryption on/off.
- Fixed the close button in a node popup in the graph view.
- Fixed the spacing of the close button and relationship type in a relationship
  popup in the graph view.
- Fixed storing physics and styles across multiple query runs.
- Fixed initial positioning in graph view when running query in the data view.
- Fixed graph view reset when a query on data view had no results to show.
- Fixed map disappearing when running query multiple times in a row.
- Fixed running multiple Lab instances of the application on Windows and Linux.
- Fixed node size and spacing in graph view when showing smaller graphs.
- Fixed transition state issues between graph view and data view.

## Memgraph v1.3.0 - Jan 26, 2021

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

## Memgraph Lab v1.2.0 - Nov 3, 2020

### Major Features and Improvements

- Added ability to create custom graph styling for nodes and edges in graph view
  with graph style language (similar to CSS).
- Added ability to save and load custom graph styling.
- Added ability to show map background for nodes with lat and lng numeric
  properties.
- Added ability to change map background style.
- Removed edge labels to be shown by default in graph view.
- Fixed overall UI and UX.
- Set encrypted connection to be turned off by default on login screen (Memgraph
  v1.2.0 comes with SSL off by default).

### Bug Fixes

- Added ability to hide graph view if there are no node/edge data in response.

## Memgraph v1.1.0 - Jul 1, 2020

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

## Memgraph Lab v1.1.3 - Jun 5, 2020

### Bug Fixes

* Disable hardware acceleration.

## Memgraph Lab v1.1.2 - Apr 10, 2020

### Bug Fixes

* Fix side menu documentation and support links.

## Memgraph v1.0.0 - Apr 3, 2020

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

## Memgraph Lab v1.1.1 - Apr 3, 2020

### Bug Fixes

* Fix bug showing integers in node properties as strings.

## Memgraph Lab v1.1.0

### Major Features and Improvements

- Enable explain and profile view.
- Memgraph v0.15.0 keywords support.

### Bug Fixes and Other Changes

- Fix bug with a new line in parsing multi-command queries.
- On empty data for graph redirect to data view.

## Memgraph Lab v1.0.0

### Major Features and Improvements

- Added unsecure connection option.
- Improved UX of login screen.
- Added basic tutorial that shows on the initial run.
- Added text search of history and favorite queries.
- Added storage statistics on overview screen.
- Added debug view with query explain and profile capabilities.
- Added graph schema (metagraph) generator.
- Improved query data (table) view.

## Memgraph Lab v0.1.2

### Bug Fixes and Other Changes

- Fixed app icon on MacOS.
- Improved error handling on the initial connect screen. Handle availability and
  secure connection errors.

## Memgraph Lab v0.1.1

### Major Features and Improvements

- Added overview view.
- Added query view (Monaco editor).
- Added graph, data and table data views.
- Added JSON export.
- Added electron builder packages for MacOS and Debian.

## Memgraph v0.50.0 - Dec 11, 2019

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

## Memgraph v0.15.0 - Jul 17, 2019

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

## Memgraph v0.14.1 - Jan 22, 2019

### Bug Fixes and Other Changes

- Fix bug in explicit transaction handling.
- Fix bug in edge filtering by edge type and destination.

## Memgraph v0.14.0 - Oct 30, 2018

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

## Memgraph v0.13.0 - Oct 18, 2018

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

## Memgraph v0.12.0 - Jul 4, 2018

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

## Memgraph v0.11.0 - Jun 20, 2018

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

## Memgraph v0.10.0 - Apr 24, 2018

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

## Memgraph v0.9.0 - Dec 18, 2017

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

## Memgraph v0.8.0

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

## Memgraph v0.7.0

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

## Memgraph v0.6.0

### Major Features and Improvements

- AST caching.
- Label + property index support.
- Different logging setup & format.

## Memgraph v0.5.0

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
