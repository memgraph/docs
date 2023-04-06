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


If you are running enterprise version of Memgraph, in order to change storage mode, user needs to have `STORAGE_MODE` permission. You can read here more about [auth module](/reference-guide/auth-module.md).

You can switch between modes within the session using the following query:

```cypher
STORAGE MODE IN_MEMORY_{TRANSACTIONAL|ANALYTICAL};
```

When switching modes, Memgraph will wait untill all other transactions are done. If some other transactions are running in your system, you will receive a warning message, so be sure to [set the log level to `WARNING`](/reference-guide/configuration.md#other).


## Usage

As Memgraph is fully [ACID complient](https://memgraph.com/docs/memgraph/reference-guide/backup), for each update that happens inside the database, it creates one [Delta](/under-the-hood/storage.md#delta-memory-layout) object. This could cause memory spikes during data import. 

To speed up import and further memory consumption, you can switch the storage mode to `IN_MEMORY_ANALYTICAL` and import a batch of data in a single run up to 6x faster. If you want to enable ACID compliance, you can switch back to `IN_MEMORY_TRANSACTIONAL` and continue with regular work on the database. You can also take advantage of the low memory costs of the analytical mode to run analytical queries that will not change the data, but be aware that no backup is created automatically (you can create manual snapshots), and there are no ACID guarantees. 