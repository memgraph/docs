## Reference guide

**Memgraph** supports most of the commonly used constructs of the language. The
reference guide contains the details of implemented features. Additionally,
not yet supported features of the language are listed.

### Cypher query language
**Cypher** is a declarative graph query language that allows for expressive and efficient data querying in a property graph. It aims to be intuitive and easy to learn while
providing a powerful interface for working with graph-based data. 
{% page-ref page="../cypher_manual/cypher-manual.md" %}

### Configuration settings

Memgraph can be configured by editing the Memgraph configuration file or by including another configuration file. 
{% page-ref page="./configuration.md" %}

### Indexing

An index stores additional information on certain types of data, so that retrieving said data becomes more efficient.
{% page-ref page="./indexing.md" %}

### Built-in graph algorithms

Memgraph comes with custom-built algorithms that are implemented using C++: **Filtering variable-length paths**, **Breadth-first search**, and **Weighted shortest path**.
{% page-ref page="./graph-algorithms.md" %}

### Query modules

Memgraph supports extending the query language with user-written procedures. 
These procedures are grouped into modules, which can then be loaded either on startup or later on.
{% page-ref page="./query_modules/query-modules.md" %}

### NetworkX

Memgraph includes a set of Python query modules based on the [NetworkX](https://networkx.github.io/) library of algorithms.
You can find more information about all the available algorithms in the {% page-ref page="./networkx/networkx.md" %}

### Replication

Memgraph supports replication and allows you to create a cluster of nodes running Memgraph instances. 
{% page-ref page="./replication.md" %}

### Backup

Memgraph comes with a couple of queries that allow you to safely make a backup of the files containing its data.
{% page-ref page='./backup.md %}

### Machine learning

Memgraph TensorFlow op wraps the high-performance Memgraph client for use with TensorFlow, 
allowing natural data transfer between Memgraph and TensorFlow at any point of the model.
{% page-ref page="./tensorflow.md" %}

### User privileges

Memgraph comes with the option of granting, denying, or revoking a certain set of privileges to users or groups of users.
{% page-ref page="./security.md" %}

### Authentication and authorization

Memgraph supports authentication and (optional) authorization using a custom-built external auth module.
To learn more visit:
{% page-ref page="./auth-module.md" %}
{% page-ref page="./ldap-security.md" %}

### Audit log

Memgraph supports all query audit logging. When enabled, the audit log contains records of all queries executed on the database.
{% page-ref page="./audit-log.md" %}
