---
id: isolation-levels
title: Isolation levels
sidebar_label: Isolation levels
---

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
