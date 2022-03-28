---
id: changelog
title: Changelog
sidebar_label: Changelog
---

## v1.2 - Apr 12, 2022

### Major Features and Improvements

- Fixed bugs related to contraints check.
- Fixed label inheritance.
- Fixed `save_node()` method.
- Improved `where()` method in query builder.
- Added batch save methods: `save_nodes()` and `save_relationships()`.
- Added `drop_triggers` method for dropping all triggers.
- Added new methods to the query builder: `load_csv()` and `xor_where()`.
- Added support for creating a trigger without `ON`.
- Added Memgraph instance runner.
- Added Azure Blob importer.

## v1.1 - Jan 19, 2022

### Major Features and Improvements

- Added graph schema definition and validation.
- Added new methods to the query builder: `merge()`, `create()`,
  `unwind()`,`with_()`, `return_()`, `yield_()`, `order_by()`, `limit()`,
  `skip()`, `call()`, `delete()` and `remove()`.
- Added on-disk storage for large properties that don't need to be stored in the
  graph database.
- Added support for managing streams and database triggers.
