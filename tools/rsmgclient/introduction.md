---
id: introduction
title: Introduction
sidebar_label: Introduction
slug: /
---

## Memgraph database adapter for Rust

`rsmgclient` is a Memgraph database adapter for Rust programming language.

rsmgclient crate is the current implementation of the adapter. It is implemented as a wrapper 
around [mgclient](https://github.com/memgraph/mgclient), the official Memgraph client library.

## Prerequisites

### Installation

`rsmgclient` is a wrapper around the [mgclient](https://github.com/memgraph/mgclient) Memgraph 
client library. To install it from sources you will need:
   - [Rust](https://doc.rust-lang.org/cargo/getting-started/installation.html) - 1.42.0 or above
   - A C compiler supporting C11 standard
   - [mgclient](https://github.com/memgraph/mgclient) has to be installed because `rsmgclient` statically links `mgclient`
   - [Memgraph](https://docs.memgraph.com/memgraph/quick-start)

Once prerequisites are met, if you want to use it as library for your own Rust project, you can 
install rsmgclient using `cargo` to download it from crates.io:
```
$ cargo install rsmgclient
```

### Building from source

To use `rsmgclient` for contributing or just looking closely how it is made, you will need:
   - Cloned [rsmgclient](https://github.com/memgraph/rsmgclient) repository
   - [Rust](https://doc.rust-lang.org/cargo/getting-started/installation.html) - 1.42.0-nightly or above
   - A C compiler supporting C11 standard
   - [mgclient](https://github.com/memgraph/mgclient)
   - [Memgraph](https://docs.memgraph.com/memgraph/quick-start)

Once rsmgclient is installed, you will need to build it and then you can run the test suite to verify 
it is working correctly.

```
$ cargo build
$ cargo test
```

## Code sample

Here is an example showing some of the basic commands:

```rust
use rsmgclient::{ConnectParams, Connection};

let connect_params = ConnectParams {
    host: Some(String::from("localhost")),
    ..Default::default()
};
let mut connection = Connection::connect(&connect_params)?;

let query = "CREATE (u:User {name: 'Alice'})-[l:Likes]->(m:Software {name: 'Memgraph'}) RETURN u, l, m";
let columns = connection.execute(query, None)?;
println!("Columns: {}", columns.join(", "));

let records = connection.fetchall()?;
for value in &records[0].values {
    println!("{}", value);
}

connection.commit()?;
```