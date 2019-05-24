## Durability and Data Recovery

*HA Memgraph* uses the Raft protocol itself to ensure the durability of the
stored data. More specificaly, a newly spawned *HA Memgraph* instance can
recover data via the following mechanisms:

  * Entries in the Raft log (similar to Memgraph's WAL) and
  * compacted Raft logs (similar to Memgraph's snapshots).

Database recovery is done on startup from the most recently found compacted
Raft log file. Since the snapshot may be older than the most recent update
from the Raft log, the recovery process will apply the remaining committed log
entries found in the said Raft log.

The aforementioned mechanisms can be easily enabled by running the *HA Memgraph*
instance with `db-recover-on-startup=true`.

## Storable Data Types

Since *HA Memgraph* is a *graph* database management system, data is stored in
the form of graph elements: nodes and edges. Each graph element can also
contain various types of data. This chapter describes which data types are
supported in *HA Memgraph*.

### Node Labels & Edge Types

Each node can have any number of labels. A label is a text value, which can be
used to *label* or group nodes according to users' desires. A user can change
labels at any time. Similarly to labels, each edge can have a type,
represented as text. Unlike nodes, which can have multiple labels or none at
all, edges *must* have exactly one edge type. Another difference to labels, is
that the edge types are set upon creation and never modified again.

### Properties

Nodes and edges can store various properties. These are like mappings or
tables containing property names and their accompanying values. Property names
are represented as text, while values can be of different types. Each property
name can store a single value, it is not possible to have multiple properties
with the same name on a single graph element. Naturally, the same property
names can be found across multiple graph elements. Also, there are no
restrictions on the number of properties that can be stored in a single graph
element. The only restriction is that the values must be of the supported
types. Following is a table of supported data types.

 Type      | Description
-----------|------------
 `Null`    | Denotes that the property has no value. This is the same as if the property does not exist.
 `String`  | A character string, i.e. text.
 `Boolean` | A boolean value, either `true` or `false`.
 `Integer` | An integer number.
 `Float`   | A floating-point number, i.e. a real number.
 `List`    | A list containing any number of property values of any supported type. It can be used to store multiple values under a single property name.
 `Map`     | A mapping of string keys to values of any supported type.

 Note that even though it's possible to store `List` and `Map` property values, it is not possible to modify them. It is however possible to replace them completely. So, the following queries are legal:

```opencypher
CREATE (:Node {property: [1, 2, 3]});
CREATE (:Node {property: {key: "value"}});
```

However, these queries are not:

```opencypher
MATCH (n:Node) SET n.property[0] = 0;
MATCH (n:Node) SET n.property.key = "other value";
```

### Cold data on disk

Although *HA Memgraph* is an in-memory database by default, it offers an option
to store a certain amount of data on disk. More precisely, the user can pass
a list of properties they wish to keep stored on disk via the command line.
In certain cases, this might result in a significant performance boost due to
reduced memory usage. It is recommended to use this feature on large,
cold properties, i.e. properties that are rarely accessed.

For example, a user of a library database might identify author biographies
and book summaries as cold properties. In that case, the user should run
*HA Memgraph* as follows:

```bash
/usr/lib/memgraph/memgraph --properties-on-disk biography,summary
```

Note that the usage of *HA Memgraph* has not changed, i.e. durability and
data recovery mechanisms are still in place and the query language remains
the same. It is also important to note that the user cannot change the storage
location of a property while *HA Memgraph* is running. Naturally, the user can
reload their database from snapshot, provide a different list of properties on
disk and rest assured that only those properties will be stored on disk.

### Storage Statistics

A user can retrieve information and statistics from the storage of a running
HA Memgraph instance. This is done with the following query.

```opencypher
SHOW STORAGE INFO;
```

For example, the results are:

 storage info      | value
-------------------|------------
 `average_degree`  | 2.872567
 `disk_usage`      | 38028
 `edge_count`      | 90674
 `memory_usage`    | 88842240
 `vertex_count`    | 63131

All of the `*_usage` results are expressing in bytes, unless explicitly stated
otherwise.
