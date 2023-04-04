---
id: overview
title: Storage modes overview
sidebar_label: Storage modes overview
slug: /reference-guide/storage-modes/overview
---

Memgraph supports two different storage modes:
* `IN_MEMORY_TRANSACTIONAL` - the default database mode that favors
    strongly-consistent ACID transactions using WAL files and snapshots,
    but requires more time and resources during data import and analysis.
* `IN_MEMORY_ANALYTICAL` - speeds up import and data analysis but offers no ACID
    guarantees besides manually created snapshots.


If you are running enterprise version of Memgraph, in order to change storage mode, user needs to have `STORAGE_MODE` permission. You can read here more about [auth module](../auth-module.md).

You can switch between modes within the session using the following query:

```cypher
STORAGE MODE IN_MEMORY_{TRANSACTIONAL|ANALYTICAL};
```

When switching modes, Memgraph will wait untill all other transactions are done. If there are some other transactions running in your system, it will write warning message, so make sure you have `WARNING` level set in [configuration file](../configuration.md#other) to see such log message.


## Usage

As Memgraph is fully [ACID complient](https://memgraph.com/docs/memgraph/reference-guide/backup), during updates happening inside database it creates for each update one [Delta](../../under-the-hood/storage.md#delta-memory-layout) object. During import phase, it could happen that memory spikes. In such cases, users can switch storage mode to `IN_MEMORY_ANALYTICAL`, and import lot of data in a single run. Afterwards, user can switch back to `IN_MEMORY_TRANSACTIONAL` and continue with regular work on database. 