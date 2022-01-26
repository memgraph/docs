---
id: changelog
title: Changelog
sidebar_label: Changelog
---

## v1.1 - Jan 19, 2022

### Major Features and Improvements

- Added graph schema definition and validation.
- Added new methods to the query builder: `merge()`, `create()`,
  `unwind()`,`with_()`, `return_()`, `yield_()`, `order_by()`, `limit()`,
  `skip()`, `call()`, `delete()` and `remove()`.
- Added on-disk storage for large properties that don't need to be stored in the
  graph database.
- Added support for managing streams and database triggers.
