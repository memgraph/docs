---
id: changelog
title: Changelog
sidebar_label: Changelog
---

## v1.3 - Jun 14, 2022

## v1.2 - Apr 12, 2022

:::warning

### Breaking Changes

- Ordering query results as in GQLAlchemy older than 1.2 will not be possible.
- `where()`, `and_where()` and `or_where()` methods can't be used as in
  GQLAlchemy older than 1.2.
- Setting up the `bootstrap_servers` argument when creating a stream as in
  GQLAlchemy older than 1.2 will not be possible.

:::

### Major Features and Improvements

- Improved `where()`, `and_where()`, `or_where()` and `xor_where()` methods. [#114](https://github.com/memgraph/gqlalchemy/pull/114)
- Added `where_not()`, `and_not()`, `or_not()` and `xor_not()` methods. [#114](https://github.com/memgraph/gqlalchemy/pull/114)
- Improved `order_by()` method from query builder by changing its argument types. [#114](https://github.com/memgraph/gqlalchemy/pull/114)
- Added Docker and Binary Memgraph instance runners. [#91](https://github.com/memgraph/gqlalchemy/pull/91)
- Added methods for dropping all indexes (`drop_all_indexes()`) and dropping all triggers (`drop_all_triggers()`). [#100](https://github.com/memgraph/gqlalchemy/pull/100)
- Added table to graph importer and Amazon S3 importer. [#100](https://github.com/memgraph/gqlalchemy/pull/100)
- Added Azure Blob and local storage importers. [#104](https://github.com/memgraph/gqlalchemy/pull/104)
- Added an option to create a label index. [#113](https://github.com/memgraph/gqlalchemy/pull/113)
- Added batch save methods for saving nodes (`save_nodes()`) and saving relationships (`save_relationships()`). [#106](https://github.com/memgraph/gqlalchemy/pull/106)
- Added label filtering in `where()` method in query builder. [#103](https://github.com/memgraph/gqlalchemy/pull/103)
- Added support for creating a trigger without `ON` keyword in query builder. [#90](https://github.com/memgraph/gqlalchemy/pull/90)
- Added `execute()` option in query builder. [#92](https://github.com/memgraph/gqlalchemy/pull/92)
- Added `load_csv()` and `xor_where()` methods to query builder. [#90](https://github.com/memgraph/gqlalchemy/pull/90)

### Bug fixes

- Fixed `save_node_with_id()` signature in the `save_node()` method. [#109](https://github.com/memgraph/gqlalchemy/pull/109)
- Constraints and indexes defined in `Field` now work correctly. Before, when they were added to the `Field` of the property, they were always set to `True`, regardless of their actual value. [#90](https://github.com/memgraph/gqlalchemy/pull/90)
- Fixed label inheritance to get all labels of base class. [#105](https://github.com/memgraph/gqlalchemy/pull/105)
- Removed extra argument called `optional` from the `Merge` class. [#118](https://github.com/memgraph/gqlalchemy/pull/118)
- Removed unnecessary quotes from the `bootstraps_servers` argument when creating a stream. [#98](https://github.com/memgraph/gqlalchemy/pull/98)

## v1.1 - Jan 19, 2022

### Major Features and Improvements

- Added graph schema definition and validation.
- Added new methods to the query builder: `merge()`, `create()`,
  `unwind()`,`with_()`, `return_()`, `yield_()`, `order_by()`, `limit()`,
  `skip()`, `call()`, `delete()` and `remove()`.
- Added on-disk storage for large properties that don't need to be stored in the
  graph database.
- Added support for managing streams and database triggers.
