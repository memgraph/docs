---
id: go
title: Go quick start
sidebar_label: Go
---

At the end of this guide, you will have created a simple Go **`Hello, World!`** program that connects to the Memgraph database and executes simple queries.

## Prerequisites

To follow this guide, you will need:
* A **running Memgraph instance**. If you need to set up Memgraph, take a look at the [Installation guide](/getting-started/installation/installation.md).
* A basic understanding of graph databases and the property graph model.
* The newest version of **Go** [installed](https://golang.org/doc/install).

## Basic Setup

We'll be using a simple Go application to demonstrate how to connect to a running Memgraph instance.

Let's jump in and create our application.

**1.** Create a new directory for your app, for example `/MyApp` and position yourself in it.<br />  
**2.** Create a `program.go` file and add the following code: 

```Go
package main

import "github.com/neo4j/neo4j-go-driver/neo4j"
import "fmt"

func main() {
    driver, err := neo4j.NewDriver("bolt://localhost:7687", neo4j.BasicAuth("", "", ""))

	if err != nil {
		fmt.Println(err)
	}
	defer driver.Close()

	session, err := driver.Session(neo4j.AccessModeWrite)
	if err != nil {
		fmt.Println(err)
	}
	defer session.Close()

	greeting, err := session.WriteTransaction(func(transaction neo4j.Transaction) (interface{}, error) {
		result, err := transaction.Run(
			"CREATE (a:Greeting) SET a.message = $message RETURN 'Node ' + id(a) + ': ' + a.message",
			map[string]interface{}{"message": "Hello, World!"})
		if err != nil {
			return nil, err
		}

		if result.Next() {
			return result.Record().GetByIndex(0), nil
		}

		return nil, result.Err()
	})
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(greeting.(string))
}
```

**3.** Add the **Bolt driver** in the `/MyApp` directory with the command:

```
go get github.com/neo4j/neo4j-go-driver/neo4j
```

**4.** Run the app with the following command:

```
go run .\program.go
```

You should see an output similar to the following:

```
Node 1: Hello, World!
```

## Where to next?

For real-world examples of how to use Memgraph, we suggest you take a look at the **[Tutorials](/tutorials/tutorials.md)** page.  
You can also browse through the **[Database functionalities](/database-functionalities/database-functionalities.md)** section to get an overview of all the functionalities Memgraph offers.

## Getting help

Visit the **[Getting help](/getting-help/getting-help.md)** page in case you run into any kind of problem or you have additional questions.
