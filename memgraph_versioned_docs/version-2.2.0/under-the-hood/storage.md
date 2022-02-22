---
id: storage
title: Storage
sidebar_label: Storage
---

## Durability and data recovery

Memgraph uses two mechanisms to ensure the durability of the stored data:

  * write-ahead logging (WAL)
  * periodic snapshots

In write-ahead logging, all database modifications are recorded in a log file
before being applied to the database. WAL ensures that all operations are done
atomically and provides steps needed to reconstruct the database state.

Snapshots are taken periodically during the entire runtime of Memgraph. When
a snapshot is triggered, the whole data storage is written to disk. The
snapshot file provides a quicker way to restore the database state.

Database recovery is done on startup from the most recent snapshot file. Since
the snapshot may be older than the most recent update logged in the WAL file,
the recovery process will apply the remaining state changes found in the WAL
file.

Behavior of these mechanisms can be tweaked in the configuration file,
usually found in `/etc/memgraph/memgraph.conf`.

:::caution
Snapshot and WAL files are (currently) not compatible between Memgraph
versions.
:::

## Storable data types

Since Memgraph is a graph database management system, data is stored in the form
of graph elements: nodes and relationships. Each graph element can contain
various types of data. This chapter describes which data types are supported in
Memgraph.

### Node labels & relationship types

Nodes can have labels that are used to label or group nodes. A label is a text
value, and each node can have any number of labels, even none. Labels can be
changed at any time. 

Relationships have a type, also represented as text. Unlike nodes, relationships
must have exactly one relationship type and once it is set upon creation, it can
never be modified again.

### Properties

Nodes and relationships can store various properties. Properties are similar to
mappings or tables containing property names and their accompanying values.
Property names are represented as text, while values can be of different types.
Each property can store a single value, and it is not possible to have multiple
properties with the same name on a single graph element. But, the same property
names can be found across multiple graph elements. Also, there are no
restrictions on the number of properties that can be stored in a single graph
element. The only restriction is that the values must be of the supported types.
Below is a table of supported data types.

 Type      | Description
-----------|------------
 `Null`    | Property has no value, which is the same as if the property does not exist.
 `String`  | A character string (text).
 `Boolean` | A boolean value, either `true` or `false`.
 `Integer` | An integer number.
 `Float`   | A floating-point number (real number).
 `List`    | A list containing any number of property values of any supported type under a single property name.
 `Map`     | A mapping of string keys to values of any supported type.

:::note

Even though it's possible to store `List` and `Map` property values, it is
impossible to modify them. It is, however, possible to replace them entirely.
So, the following queries are valid:

```cypher
CREATE (:Node {property: [1, 2, 3]});
CREATE (:Node {property: {key: "value"}});
```

But these are not:

```cypher
MATCH (n:Node) SET n.property[0] = 0;
MATCH (n:Node) SET n.property.key = "other value";
```

:::

### Disabling properties on relationships

If you have a use-case that doesn't use properties on relationships, you can
specify a flag in the Memgraph configuration file to disable them and reduce
memory usage.

```
--storage-properties-on-edges=false
```

You can disable properties on relationships with a non-empty database, just make
sure the relationships are without properties.

### Storage statistics

You can retrieve information and statistics about the storage of a running
Memgraph instance by using the following query.

```cypher
SHOW STORAGE INFO;
```

Example results:

 storage info      | value
-------------------|------------
 `average_degree`  | 2.872567
 `disk_usage`      | 38028
 `edge_count`      | 90674
 `memory_usage`    | 88842240
 `vertex_count`    | 63131

All of the `*_usage` results are expressed in bytes unless explicitly stated
otherwise.
