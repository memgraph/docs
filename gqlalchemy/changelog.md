---
id: changelog
title: Changelog
sidebar_label: Changelog
---

## v1.2 - Apr 12, 2022

### Major Features and Improvements

- Fixed `save_node_with_id()` signature in the `save_node()` method. [#109](https://github.com/memgraph/gqlalchemy/pull/109)
- Improved `where()` method in query builder.
- Added batch save methods: `save_nodes()` and `save_relationships()`. [#106](https://github.com/memgraph/gqlalchemy/pull/106)
- Added `drop_all_triggers()` method for dropping all triggers. [#100](https://github.com/memgraph/gqlalchemy/pull/100/files)
- Added new methods to the query builder: `load_csv()` and `xor_where()`. [#90](https://github.com/memgraph/gqlalchemy/pull/90)
- Added support for creating a trigger without `ON`. [#90](https://github.com/memgraph/gqlalchemy/pull/90)
- Added Docker and Binary Memgraph instance runners. [#91](https://github.com/memgraph/gqlalchemy/pull/91)
- Added Azure Blob importer. [#104](https://github.com/memgraph/gqlalchemy/pull/104)

### Bug fixes

- Constraints and indexes defined in `Field` now work correctly. Before, when they were added to the `Field` of the property, they were always set to `True`, regardless of their actual value. [#90](https://github.com/memgraph/gqlalchemy/pull/90)
- Fixed label inheritance to get all labels of base class. [#105](https://github.com/memgraph/gqlalchemy/pull/105)


## v1.1 - Jan 19, 2022

### Major Features and Improvements

- Added graph schema definition and validation.
- Added new methods to the query builder: `merge()`, `create()`,
  `unwind()`,`with_()`, `return_()`, `yield_()`, `order_by()`, `limit()`,
  `skip()`, `call()`, `delete()` and `remove()`.
- Added on-disk storage for large properties that don't need to be stored in the
  graph database.
- Added support for managing streams and database triggers.
