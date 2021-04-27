---
id: module
title: mgclient module
sidebar_label: mgclient module
---

The module interface respects the DB-API 2.0 standard defined in [**PEP 249**](https://www.python.org/dev/peps/pep-0249).

## `mgclient.connect(host=None, address=None, port=None, username=None, password=None, client_name=None, sslmode=0, sslcert=None, sslkey=None, trust_callback=None, lazy=False)`

Makes a new connection to the database server and returns a
`Connection` object.

Currently recognized parameters are:

* `host`: DNS resolvable name of host to connect to. Exactly one of host and
address parameters must be specified.

* `address`: Numeric IP address of host to connect to. This should be in the standard IPv4 address format. You can also use IPv6 if your machine supports it. Exactly one of host and address parameters must be specified.

* `port`: Port number to connect to at the server host.

* `username`: Username to connect as.

* `password`: Password to be used if the server demands password authentication.

* `client_name`: Alternate name and version of the client to send to server. Default is set by the underlying mgclient library.

* `sslmode`: This option determines whether a secure connection will be negotiated with the server. There are 2 possible values:

    * `mgclient.MG_SSLMODE_DISABLE`: Only try a non-SSL connection (default).
    * `mgclient.MG_SSLMODE_REQUIRE`: Only try an SSL connection.

* `sslcert`: This parameter specifies the file name of the client SSL certificate. It is ignored in case an SSL connection is not made.

* `sslkey`: This parameter specifies the location of the secret key used for the client certificate. This parameter is ignored in case an SSL connection is not made.

* `trust_callback`: A callable taking four arguments. After performing the SSL handshake, `connect()` will call this callable providing the hostname, IP address, public key type and fingerprint. If the function returns `False` SSL connection will immediately be terminated. This can be used to implement TOFU (trust on first use) mechanism.

* `lazy`: If this is set to `True`, a lazy connection is made. Default is `False`. See Lazy connections section to learn about advantages and limitations of using the `lazy` parameter.

## Module constants {#module-constants}

DB-API 2.0 requires the following constants to be defined:

* `mgclient.apilevel()`:
String constant stating the supported DB API level. For `mgclient` it
is `2.0`.

* `mgclient.threadsafety()`:
Integer constant stating the level of thread safety the interface supports.
For `mgclient` it is 1, meaning that threads may share the module, but
not connections.

* `mgclient.paramstyle()`:
String constant stating the type of parameter marker formatting expected by
the interface. For `mgclient` it is `cypher`, which is not a valid
value by DB-API 2.0 specification. See Passing parameters section for more
details.

## Exceptions {#exceptions}

By DB-API 2.0 specification, the module makes all error information available
through these exceptions or subclasses thereof:

* `exception mgclient.Warning()`
Exception raised for important warnings.

* `exception mgclient.Error()`
Base class of all other error exceptions.

* `exception mgclient.InterfaceError()`
Exception raised for errors related to the database interface rather than the database itself.

* `xception mgclient.DatabaseError()`
Exception raised for errors related to the database.

* `exception mgclient.DataError()`
Exception raised for errors that are due to problems with the processed data.

* `exception mgclient.OperationalError()`
Exception raised for errors related to the database’s operation, not necessarily under the control of the programmer (e.g. unexpected disconnect, failed allocation).

* `exception mgclient.IntegrityError()`
Exception raised when the relational integrity of the database is affected.

* `exception mgclient.InternalError()`
Exception raised when the database encounters an internal error.

* `exception mgclient.ProgrammingError()`
Exception raised for programming errors (e.g. syntax error, invalid parameters)

* `exception mgclient.NotSupportedError()`
Exception raised in a case a method or database API was used which is not supported by the database.

:::note
In the current state, `OperationalError` is raised for all errors
obtained from the database. This will probably be improved in the future.
:::

## Graph type objects {#graph-type-objects}

### `class mgclient.Node()`

A node in the graph with optional properties and labels.

* `id()`
Unique node identifier (within the scope of its origin graph).

* `labels()`
A list of node labels.

* `properties()`
A dictionary of node properties.

### `class mgclient.Relationship()`

A directed, typed connection between two nodes with optional properties.

* `id()`
Unique relationship identifier (within the scope of its origin graph).

* `start_id()`
Identifier of relationship start node (or -1 if it was not supplied by the database).

* `end_id()`
Identifier of relationship end node (or -1 if it was not supplied by the database).

* `type()`
Relationship type.

* `properties()`
A dictionary of relationship properties.

### `class mgclient.Path()`
A sequence of alternating nodes and relationships corresponding to a walk
in the graph.

* `nodes()`
A list of nodes in the order they appear in the path. It has one element
more than the `relationships` list.

* `relationships()`
A list of relationships in the order they appear in the path. It has one
element less than the `nodes` list.
