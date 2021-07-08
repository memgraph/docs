---
id: transaction-levels
title: Transaction Levels 
sidebar_label: Transaction Levels
---

### Supported transaction levels

Memgraph currently supports three transaction levels:
 - SNAPSHOT ISOLATION (default)
 - READ COMMITTED
 - READ UNCOMMITTED

### Setting the transaction level

The default transaction level, `SNAPSHOT ISOLATION`, can be changed using the config
or running a query.

#### Config

Changing the `--isolation-level` config to any of the supported values will change the
initial global isolation level for every query being run on that instance.

#### Query

The initially set isolation level can be changed during runtime using the query
of following format:
```text
SET <scope> TRANSACTION ISOLATION LEVEL <isolation_level>
```

`<scope>` defines the scope to which the isolation level change should apply.
It can take any of the following values:
 - GLOBAL - apply the new isolation level globally 
 - SESSION - apply the new isolation level only for current session
 - NEXT - apply the new isolation level only for the next transaction in the current session

`<isolation_level` defines the isolation level which we want to use.
It can take any of the following values:
 - SNAPSHOT ISOLATION
 - READ COMMITTED
 - READ UNCOMMITTED
