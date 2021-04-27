---
id: connection
title: Struct rsmgclient::Connection
sidebar_label: Connection
---

## Declaration

```rust
pub struct Connection { /* fields omitted */ }
```

Encapsulates a database connection.

## Examples

```rust
use rsmgclient::{ConnectParams, Connection};

let connect_params = ConnectParams {
    host: Some(String::from("localhost")),
    ..Default::default()
};

let mut connection = match Connection::connect(&connect_params) {
    Ok(c) => c,
    Err(err) => panic!("{}", err)
};

let query = "CREATE (u:User {name: 'Alice'})-[:Likes]->(m:Software {name: 'Memgraph'}) RETURN u, m";
match connection.execute(query, None) {
    Ok(columns) => println!("Columns: {}", columns.join(", ")),
    Err(err) => panic!("{}", err)
};

match connection.fetchall() {
    Ok(records) => {
        for value in &records[0].values {
            println!("{}", value);
        }
    },
    Err(err) => panic!("{}", err)
};

match connection.commit() {
    Ok(()) => {},
    Err(err) => panic!("{}", err)
};
```

## Implementations - impl Connection

### `pub fn lazy(&self) -> bool`

Returns whether connection is executing lazily.

If false, queries are not executed lazily. After running `execute`, records are immediately pulled.

If true queries are executed lazily. After running `execute`, records will only get pulled until fetch functions are called.

### `pub fn autocommit(&self) -> bool`

Getter for `autocommit` field.

If true all queries are automatically committed.

If false queries are executed inside a transaction. Before executing first query, `execute` runs `begin` on database. After that user needs to commit or roll back manually, using `commit` and `rollback` functions.

### `pub fn arraysize(&self) -> u32`

Getter for `arraysize` field.

Default amount of rows to get fetched when calling `fetchmany`. Initial value is 1.

### `pub fn in_transaction(&self) -> bool`

Returns whether a connection is currently inside a transaction.

### `pub fn status(&self) -> &ConnectionStatus`

Returns current connection status.

### `pub fn summary(&self) -> Option<HashMap<String, Value>>`

Returns query summary if it is present.

Query summary is present after query has completed execution( all records have been fetched). Executing new query will remove previous query summary.

### `pub fn set_lazy(&mut self, lazy: bool)`

Setter for `lazy` field.

**Panics**
* Panics if connection is not in a `Ready` status.

### `pub fn set_autocommit(&mut self, autocommit: bool)`

Setter for `autocommit` field.

**Panics**
* Panics if connection has pending transaction or connection is not ready.

### `pub fn set_arraysize(&mut self, arraysize: u32)`

Setter for `arraysize` field.

### `pub fn connect(param_struct: &ConnectParams) -> Result<Connection, MgError>`

Creates a connection to database using provided connection parameters.

Returns `Connection` if connection to database is successfully established, otherwise returns error with explanation what went wrong.

#### Examples

```rust
use rsmgclient::{ConnectParams, Connection};

let connect_params = ConnectParams {
    host: Some(String::from("localhost")),
    ..Default::default()
};

let connection = match Connection::connect(&connect_params) {
    Ok(c) => c,
    Err(err) => panic!("{}", err)
};
pub fn execute(
    &mut self,
    query: &str,
    params: Option<&HashMap<String, QueryParam>>
) -> Result<Vec<String>, MgError>
```

Executes provided query using parameters(if provided) and returns names of columns.

After execution records need to get fetched using fetch methods. Connection needs to be in status `Ready`. Error is returned if connection is not ready, query is invalid or there was an error in communication with server.

If connection is not lazy will also fetch and store all records. If connection has autocommit set to false and is not in a transaction will also start a transaction.

### `pub fn fetchone(&mut self) -> Result<Option<Record>, MgError>`

Returns next row of query results or None if there is no more data available.

Returns error if connection is not in `Executing` status or if there was an error while pulling record from database.

### `pub fn fetchmany(&mut self, size: Option<u32>) -> Result<Vec<Record>, MgError>`

Returns next rows of query results.

The number of rows to fetch is specified either by `size` or `arraysize` attribute, `size` (if provided) overrides `arraysize`.

Returns error if connection is not in `Executing` status or if there was an error while pulling record from database.

### `pub fn fetchall(&mut self) -> Result<Vec<Record>, MgError>`

Returns all(remaining) rows of query results.

Returns error if connection is not in `Executing` status or if there was an error while pulling record from database.

### `pub fn commit(&mut self) -> Result<(), MgError>`

Commit any pending transaction to the database.

Returns error if there are queries that didn't finish executing.

If `autocommit` is set to true or there is no pending transaction this method does nothing.

### `pub fn rollback(&mut self) -> Result<(), MgError>`

Rollback any pending transaction to the database.

Returns error if there are queries that didn't finish executing.

If `autocommit` is set to true or there is no pending transaction this method does nothing.

### `pub fn close(&mut self)`

Closes the connection.

The connection will be unusable from this point forward. Any operation on connection will return error.