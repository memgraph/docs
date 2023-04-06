---
id: go
title: Go quick start
sidebar_label: Go
---

At the end of this guide, you will have created a simple Go **`Hello, World!`**
program that connects to the Memgraph database and executes simple queries.

:::note Go driver

You can find the official Go driver on
[GitHub](https://github.com/neo4j/neo4j-go-driver).

:::

:::note Go Object Modeled Graph (OMG)

If you are looking for something similar to the Object Graph Mapper for Go, check out [`gograph`](https://github.com/prahaladd/gograph). This project aims to provide a mechanism to interact with any graph database using a unified and minimalistic API layer for the core operations on a graph database. It is an open-source project not maintained by the Memgraph team.

:::

## Prerequisites

To follow this guide, you will need:

- A **running Memgraph instance**. If you need to set up Memgraph, take a look
  at the [Installation guide](/installation/overview.mdx).
- A basic understanding of graph databases and the property graph model.
- The newest version of **Go** [installed](https://golang.org/doc/install).

## Basic Setup

We'll be using a simple Go application to demonstrate how to connect to a
running Memgraph instance.

Let's jump in and create our application.

**1.** Create a new directory for your app, for example `/MyApp` and position
yourself in it.<br /> **2.** Create a `program.go` file and add the following
code:

```go
package main

import (
    "fmt"
    "github.com/neo4j/neo4j-go-driver/v5/neo4j"
)

func main() {
    dbUri := "bolt://localhost:7687"
    driver, err := neo4j.NewDriver(dbUri, neo4j.BasicAuth("", "", ""))
    if err != nil {
        panic(err)
    }
    // Handle driver lifetime based on your application lifetime requirements  driver's lifetime is usually
    // bound by the application lifetime, which usually implies one driver instance per application
    defer driver.Close()
    item, err := insertItem(driver)
    if err != nil {
        panic(err)
    }
    fmt.Printf("%v\n", item.Message)
}

func insertItem(driver neo4j.Driver) (*Item, error) {
    // Sessions are short-lived, cheap to create and NOT thread safe. Typically create one or more sessions
    // per request in your web application. Make sure to call Close on the session when done.
    // For multi-database support, set sessionConfig.DatabaseName to requested database
    // Session config will default to write mode, if only reads are to be used configure session for
    // read mode.
    session := driver.NewSession(neo4j.SessionConfig{})
    defer session.Close()
    result, err := session.WriteTransaction(createItemFn)
    if err != nil {
        return nil, err
    }
    return result.(*Item), nil
}

func createItemFn(tx neo4j.Transaction) (interface{}, error) {
    records, err := tx.Run(
        "CREATE (a:Greeting) SET a.message = $message RETURN 'Node ' + id(a) + ': ' + a.message",
        map[string]interface{}{"message": "Hello, World!"})
    // In face of driver native errors, make sure to return them directly.
    // Depending on the error, the driver may try to execute the function again.
    if err != nil {
        return nil, err
    }
    record, err := records.Single()
    if err != nil {
        return nil, err
    }
    // You can also retrieve values by name, with e.g. `id, found := record.Get("n.id")`
    return &Item{
        Message: record.Values[0].(string),
    }, nil
}

type Item struct {
    Message string
}
```

**3.** Create a `go.mod` file by running:

```
go mod init example.com/hello
```

**4.** Add the **Bolt driver** with the command:

```
go get github.com/neo4j/neo4j-go-driver/v5
```

**5.** Run the app with the following command:

```
go run ./program.go
```

You should see an output similar to the following:

```
Node 0: Hello, World!
```

## Where to next?

For real-world examples of how to use Memgraph, we suggest you take a look at
the **[Tutorials](/tutorials/overview.md)** page. You can also browse through
the **[How-to guides](/how-to-guides/overview.md)** section to get an overview
of all the functionalities Memgraph offers.
