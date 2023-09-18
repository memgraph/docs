---
id: rust
title: Rust quick start
sidebar_label: Rust
---

At the end of this guide, you will have created a simple Rust **`Hello, World!`** program that connects to the Memgraph database and executes simple
queries.

## Prerequisites

To follow this guide, you will need:

- A **running Memgraph instance**. If you need to set up Memgraph, take a look
  at the [Installation guide](/installation/overview.mdx).
- A basic understanding of graph databases and the property graph model.
- **Docker** installed and running. Instructions on how to setup Docker can be
  found on the [official Docker website](https://docs.docker.com/get-docker/).
- A locally installed [**rsmgclient
  driver**](https://github.com/memgraph/rsmgclient) if you are not using Docker
  to build the program.

:::info

**NOTE:** We recommend using Docker because it simplifies installing the driver
dependencies. If you don't wish to use Docker, you will need to install the
**rsmgclient driver** locally.

:::

## Basic setup

We'll use a **Dockerized Rust program** to demonstrate how to connect to a
running Memgraph database instance. If you won't use Docker, the steps
might be slightly different, but the code is either the same or very
similar.<br />

Let's jump in and connect a simple program to Memgraph.

**1.** Create a new Rust project with the name **memgraph_rust** by running the
following command:

```
cargo new memgraph_rust --bin
```

**2.** Add the following line to the `Cargo.toml` file under the line
`[dependencies]` :

```
rsmgclient = "1.0.0"
```

**3.** To create the actual program, add the following code to the `src/main.rs`
file:

```rust
use rsmgclient::{ConnectParams, Connection, SSLMode};

fn main(){
    // Parameters for connecting to database.
    let connect_params = ConnectParams {
        host: Some(String::from("172.17.0.2")),
        sslmode: SSLMode::Disable,
        ..Default::default()
    };

    // Make a connection to the database.
    let mut connection = match Connection::connect(&connect_params) {
        Ok(c) => c,
        Err(err) => panic!("{}", err)
    };

    // Execute a query.
    let query = "CREATE (u:User {name: 'Alice'})-[:Likes]->(m:Software {name: 'Memgraph'}) RETURN u, m";
    match connection.execute(query, None) {
        Ok(columns) => println!("Columns: {}", columns.join(", ")),
        Err(err) => panic!("{}", err)
    };

    // Fetch all query results.
    match connection.fetchall() {
        Ok(records) => {
            for value in &records[0].values {
                println!("{}", value);
            }
        },
        Err(err) => panic!("{}", err)
    };

    // Commit any pending transaction to the database.
    match connection.commit() {
        Ok(()) => {},
        Err(err) => panic!("{}", err)
    };
}
```

**4.** Create a new file in the project root directory `/memgraph_rust` and name
it `Dockerfile` . Add the following code to it:

```dockerfile
# Set base image (host OS)
FROM rust:1.56

# Install CMake
RUN apt-get update && \
  apt-get --yes install cmake

# Install mgclient
RUN apt-get install -y git cmake make gcc g++ libssl-dev clang && \
  git clone https://github.com/memgraph/mgclient.git /mgclient && \
  cd mgclient && \
  git checkout 5ae69ea4774e9b525a2be0c9fc25fb83490f13bb && \
  mkdir build && \
  cd build && \
  cmake .. && \
  make && \
  make install

# Set the working directory in the container
WORKDIR /code

# Copy the dependencies file to the working directory
COPY Cargo.toml .

# Copy the content of the local src directory to the working directory
RUN mkdir src
COPY src/ ./src

# Generate binary using the Rust compiler
RUN cargo build

# Command to run on container start
CMD [ "cargo", "run" ]
```

**5.** Don't forget to change the host address in your code.<br /> Find the
**`CONTAINER_ID`** with `docker ps` and use it in the following command to
retrieve the address:

```
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' CONTAINER_ID
```

**6.** To run the application, first, you need to create a Docker image with:

```
docker build -t memgraph_rust .
```

**7.** Now, you can start the application with the following command:

```
docker run memgraph_rust
```

You should see an output similar to the following:

```
Columns: u, m
(:User {'name': 'Alice'})
(:Software {'name': 'Memgraph'})
```

## Where to next?

For real-world examples of how to use Memgraph, we suggest you take a look at
the **[Tutorials](/tutorials/overview.md)** page. You can also browse through
the **[How-to guides](/how-to-guides/overview.md)**
section to get an overview of all the functionalities Memgraph offers.
