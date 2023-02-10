---
id: java
title: Java quick start
sidebar_label: Java
---

At the end of this guide, you will have created a simple Java console **`Hello,
World!`** program that connects to the Memgraph database and executes simple
queries.

## Prerequisites

For this guide you will need:

- A **running Memgraph instance**. If you need to set up Memgraph, take a look
  at the [Installation guide](/installation/overview.mdx).
  :::caution
    In order for this driver to work, you need [modify configuration
    setting](/docs/memgraph/how-to-guides/config-logs)
    `--bolt-server-name-for-init`. When running Memgraph, set
    `--bolt-server-name-for-init=Neo4j/`.
  :::
- Java 8, 11, 17 or 19 installed.

## Basic Setup

We'll be using Eclipse IDE 2022-12 on MacOS to connect a simple Java
console application to a running Memgraph instance using **Maven**. If you're
using a different IDE, the steps might be slightly different, but the code is
probably the same or very similar.<br />

Let's jump in and connect a simple program to Memgraph.

**1.** Open **Eclipse** and create a new **Maven project**.<br /> **2.** Select
the **Create a simple project** option.<br /> **3.** For the **Group Id** field
put `com.memgraph.app` and for **Artifact Id** put `my-app` . Afterwards, click
the **Finish** button.<br /> **4.** Open the `pom.xml` file and add the
dependencies inside your project:

```java
<dependencies>
	<dependency>
	  <groupId>org.neo4j.driver</groupId>
	  <artifactId>neo4j-java-driver</artifactId>
	  <version>5.4.0</version>
	</dependency>
  </dependencies>
```

**5.** Create the `HelloWorld.java` program and copy the following code:

```java
import org.neo4j.driver.AuthTokens;
import org.neo4j.driver.Driver;
import org.neo4j.driver.GraphDatabase;
import org.neo4j.driver.Query;

import static org.neo4j.driver.Values.parameters;

public class HelloWorld implements AutoCloseable
{
    private final Driver driver;

    public HelloWorld( String uri, String user, String password )
    {
        driver = GraphDatabase.driver( uri, AuthTokens.basic( user, password ) );
    }

    public void close() throws Exception
    {
        driver.close();
    }

    public void printGreeting( final String message )
    {
    	
    	try (var session = driver.session()) {
    		var hello = session.executeWrite( transaction -> {
    		var query = new Query("CREATE (a:Greeting) SET a.message = $message RETURN 'Node ' + id(a) + ': ' + a.message", parameters("message", message));
    		var result = transaction.run(query);
    		return result.single().get(0).asString();
    		});
    		System.out.println(hello);
    	}
    }
    
    public static void main( String... args ) throws Exception
    {
        try ( HelloWorld greeter = new HelloWorld( "bolt://localhost:7687", "", "" ) )
        {
            greeter.printGreeting( "Hello, World!" );
        }
    }
}
```

Once you run the program, you should see an output similar to the following:

```
Node 1: Hello, World!
```

:::info
Memgraph created [Bolt Java Driver](https://github.com/memgraph/bolt-java-driver) which can be used to connect to a running Memgraph instance. We still recommend you use the above mentioned driver.
:::

## Where to next?

For real-world examples of how to use Memgraph, we suggest you take a look at
the **[Tutorials](/tutorials/overview.md)** page. You can also browse through
the **[How-to guides](/how-to-guides/overview.md)** section to get an overview
of all the functionalities Memgraph offers.
