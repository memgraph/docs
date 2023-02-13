---
id: rust
title: Rust quick start
sidebar_label: Rust
---

At the end of this guide, you will have created a Rust program that connects to the Memgraph database and executes simple
queries.

## Prerequisites

To follow this guide, you will need:

- A **running Memgraph instance**. If you need to set up Memgraph, take a look
  at the [Installation guide](/installation/overview.mdx).
- A locally installed [**rsmgclient
  driver**](https://github.com/memgraph/rsmgclient).


## Basic setup

Let's jump in and connect a simple program to connect to Memgraph.

**1.** Create a new Rust project with the name **memgraph_rust** by running the
following command:

```
cargo new memgraph_rust --bin
```

**2.** Add the following line to the `Cargo.toml` file under the line
`[dependencies]` :

```
rsmgclient = "2.0.0"
```

**3.** To create the actual program, add the following code to the `src/main.rs`
file:

```rust
use rsmgclient::{ConnectParams, Connection, MgError, Value, SSLMode};

fn execute_query() -> Result<(), MgError> {
    // Connect to Memgraph.
    let connect_params = ConnectParams {
        host: Some(String::from("localhost")),
        port: 7687,
        sslmode: SSLMode::Disable,
        ..Default::default()
    };
    let mut connection = Connection::connect(&connect_params)?;

    // Create simple graph.
    connection.execute_without_results(
        "CREATE (p1:Person {name: 'Alice'})-[l1:Likes]->(m:Software {name: 'Memgraph'}) \
         CREATE (p2:Person {name: 'John'})-[l2:Likes]->(m);",
    )?;

    // Fetch the graph.
    let columns = connection.execute("MATCH (n)-[r]->(m) RETURN n, r, m;", None)?;
    println!("Columns: {}", columns.join(", "));
    for record in connection.fetchall()? {
        for value in record.values {
            match value {
                Value::Node(node) => print!("{}", node),
                Value::Relationship(edge) => print!("-{}-", edge),
                value => print!("{}", value),
            }
        }
        println!();
    }
    connection.commit()?;

    Ok(())
}

fn main() {
    if let Err(error) = execute_query() {
        panic!("{}", error)
    }
}
```

**4.** Open a terminal, position yourself in the project root directory `/memgraph_rust` and run:
``` 
cargo build
```
and after that:
```
cargo run
```

You should see an output similar to the following:

```
Columns: n, r, m
(:Person {'name': 'Alice'})-[:Likes {}]-(:Software {'name': 'Memgraph'})
(:Person {'name': 'John'})-[:Likes {}]-(:Software {'name': 'Memgraph'})
```

## Where to next?

For real-world examples of how to use Memgraph, we suggest you take a look at
the **[Tutorials](/tutorials/overview.md)** page. You can also browse through
the **[How-to guides](/how-to-guides/overview.md)**
section to get an overview of all the functionalities Memgraph offers.
