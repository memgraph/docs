---
id: isolation-levels
title: Isolation levels
sidebar_label: Isolation levels
---

In database systems, isolation determines how transaction integrity is visible
to other users and systems.

A lower isolation level increases the ability of many users to access the same
data at the same time but increases the number of concurrency effects (such as
dirty reads or lost updates) users might encounter. Conversely, a higher
isolation level reduces the types of concurrency effects that users may
encounter but requires more system resources and increases the chances that one
transaction will block another.

Isolation is typically defined at the database level as a property that defines
how or when the changes made by one operation become visible to others. 

## Supported isolation levels

Memgraph currently supports three isolation levels:
 - SNAPSHOT ISOLATION (default)
 - READ COMMITTED
 - READ UNCOMMITTED

## Setting the isolation level

The default isolation level, `SNAPSHOT ISOLATION`, can be changed using the config
or running a query.

### Configuration

Changing the `--isolation-level` configuration flag to any of the supported values will change the
initial global isolation level for every query being run on that instance.

### Query

The initially set isolation level can be changed during runtime using a query
of the following format:
```text
SET <scope> TRANSACTION ISOLATION LEVEL <isolation_level>
```

`<scope>` defines the scope to which the isolation level change should apply.
It can take any of the following values:
 - GLOBAL - apply the new isolation level globally
 - SESSION - apply the new isolation level only for the current session
 - NEXT - apply the new isolation level only for the next transaction in the current session

`<isolation_level` defines the isolation level which we want to use.
It can take any of the following values:
 - SNAPSHOT ISOLATION
 - READ COMMITTED
 - READ UNCOMMITTED
