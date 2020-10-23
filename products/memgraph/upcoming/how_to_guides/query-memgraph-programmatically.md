## How to Query Memgraph Programmatically?

### Supported Languages

If users wish to query Memgraph programmatically, they can do so using the
[Bolt protocol](https://7687.org/). Bolt was designed for efficient
communication with graph databases and **Memgraph supports versions 1 and 4**
of the protocol. Bolt protocol drivers for some popular programming languages
are listed below:

  * [C#](https://github.com/neo4j/neo4j-dotnet-driver)
  * [C/C++](https://github.com/memgraph/mgclient)
  * [Go](https://github.com/neo4j/neo4j-go-driver)
  * [Haskell](https://github.com/zmactep/hasbolt)
  * [Java](https://github.com/neo4j/neo4j-java-driver)
  * [JavaScript](https://github.com/neo4j/neo4j-javascript-driver)
  * [Node.js](https://github.com/neo4j/neo4j-javascript-driver)
  * [PHP](https://github.com/graphaware/neo4j-bolt-php)
  * [Python](https://github.com/memgraph/pymgclient)
  * [Ruby](https://github.com/neo4jrb/neo4j)
  * [Rust](https://github.com/memgraph/rsmgclient)

### Secure Sockets Layer (SSL) {#secure-sockets-layer}

Secure connections are supported and disabled by default. The server initially
ships with a self-signed testing certificate. The certificate can be replaced
by editing the following parameters in `/etc/memgraph/memgraph.conf`:
```
--bolt-cert-file=/path/to/ssl/certificate.pem
--bolt-key-file=/path/to/ssl/privatekey.pem
```
To disable SSL support and use insecure connections to the database you should
set both parameters (`--bolt-cert-file` and `--bolt-key-file`) to empty values.

### Examples

In this article we have included some basic usage examples for the following
supported languages:

  * [C#](#c-sharp-example)
  * [Go](#go-example)
  * [Java](#java-example)
  * [JavaScript](#javascript-example)
  * [Node.js](#node-js-example)
  * [Python](#python-example)

The code snippets below outlines a basic usage example which connects to the
database and executes a couple of elementary queries. Examples for all other
programming languages are similar.

#### Python Example

```python
import sys
from neo4j import GraphDatabase, basic_auth

driver = GraphDatabase.driver('bolt://localhost:7687',
                              auth=basic_auth('', ''),
                              encrypted=False)
session = driver.session()

session.run('MATCH (n) DETACH DELETE n').consume()
print('Database cleared.')

session.run('CREATE (alice:Person {name: "Alice", age: 22})').consume()
print('Record created.')

node = session.run('MATCH (n) RETURN n').single()['n']
print('Record matched.')

label = list(node.labels)[0]
name = node['name']
age = node['age']

if label != 'Person' or name != 'Alice' or age != 22:
    print('Data does not match')
    sys.exit(1)

print('Label: %s' % label)
print('name: %s' % name)
print('age: %s' % age)

session.close()
driver.close()

print('All ok!')
```

Details about the Python driver can be found on
[GitHub](https://github.com/neo4j/neo4j-python-driver).

#### Java Example

```java
import java.util.*;
import org.neo4j.driver.*;

public class DocsHowToQuery {
  public static void main(String[] args) {
    var config = Config.builder().withoutEncryption().build();
    var driver = GraphDatabase.driver("bolt://localhost:7687", AuthTokens.basic("", ""), config);

    try (var session = driver.session()) {
      session.run("MATCH (n) DETACH DELETE n;");
      System.out.println("Database cleared.");

      session.run("CREATE (alice:Person {name: 'Alice', age: 22});");
      System.out.println("Record created.");

      var node = session.run("MATCH (n) RETURN n;").list().get(0).get("n").asNode();
      System.out.println("Record matched.");

      var label = node.labels().iterator().next();
      var name = node.get("name").asString();
      var age = node.get("age").asInt();

      if (!label.equals("Person") || !name.equals("Alice") || age != 22) {
        System.out.println("Data doesn't match!");
        System.exit(1);
      }

      System.out.println("Label: " + label);
      System.out.println("name: " + name);
      System.out.println("age: " + age);

      System.out.println("All ok!");
    } catch (Exception e) {
      System.out.println(e);
      System.exit(1);
    }

    driver.close();
  }
}
```

Details about the Java driver can be found on
[GitHub](https://github.com/neo4j/neo4j-java-driver).

#### C# Example {#c-sharp-example}

```csh
using System;
using System.Linq;
using Neo4j.Driver;

public class Basic {
  public static void Main(string[] args) {
    using(var driver = GraphDatabase.Driver(
        "bolt://localhost:7687", AuthTokens.None,
        (ConfigBuilder builder) => builder.WithEncryptionLevel(EncryptionLevel.None)))
      using(var session = driver.Session())
      {
        session.Run("MATCH (n) DETACH DELETE n;").Consume();
        Console.WriteLine("Database cleared.");

        session.Run("CREATE (alice:Person {name: \"Alice\", age: 22});").Consume();
        Console.WriteLine("Record created.");

        var node = (INode) session.Run("MATCH (n) RETURN n;").First()["n"];
        Console.WriteLine("Record matched.");

        var label = string.Join("", node.Labels);
        var name = node["name"];
        var age = (long) node["age"];

        if (!label.Equals("Person") || !name.Equals("Alice") || !age.Equals(22)) {
          Console.WriteLine("Data doesn't match!");
          System.Environment.Exit(1);
        }

        Console.WriteLine("Label: " + label);
        Console.WriteLine("name: " + name);
        Console.WriteLine("age: " + age);
      }
    Console.WriteLine("All ok!");
  }
}
```

Details about the C# driver can be found on
[GitHub](https://github.com/neo4j/neo4j-dotnet-driver).

#### Node.js Example {#node-js-example}

```javascript
var neo4j = require('neo4j-driver');
var driver = neo4j.driver("bolt://localhost:7687",
                          neo4j.auth.basic("", ""),
                          { encrypted: 'ENCRYPTION_OFF' });
var session = driver.session();

function die() {
  session.close();
  driver.close();
  process.exit(1);
}

function run_query(query, callback) {
  var run = session.run(query, {});
  run.then(callback).catch(function (error) {
    console.log(error);
    die();
  });
}

run_query("MATCH (n) DETACH DELETE n;", function (result) {
  console.log("Database cleared.");
  run_query("CREATE (alice:Person {name: 'Alice', age: 22});", function (result) {
    console.log("Record created.");
    run_query("MATCH (n) RETURN n", function (result) {
      console.log("Record matched.");
      const alice = result.records[0].get("n");
      const label = alice.labels[0];
      const name = alice.properties["name"];
      const age = alice.properties["age"];
      if(label != "Person" || name != "Alice" || age != 22){
        console.log("Data doesn't match!");
        die();
      }
      console.log("Label: " + label);
      console.log("name: " + name);
      console.log("age: " + age);
      console.log("All ok!");
      driver.close();
    });
  });
});
```

Details about the Node driver can be found on
[GitHub](https://github.com/neo4j/neo4j-javascript-driver).

#### Go Example

```go
package main

import "github.com/neo4j/neo4j-go-driver/neo4j"
import "fmt"
import "log"

func handle_if_error(err error) {
  if err != nil {
    log.Fatal("Error occured: %s", err)
  }
}

func main() {
  configForNeo4j40 := func(conf *neo4j.Config) { conf.Encrypted = false }
  driver, err := neo4j.NewDriver("bolt://localhost:7687",
                                 neo4j.BasicAuth("", "", ""),
                                 configForNeo4j40)
  if err != nil {
    log.Fatal("An error occurred opening conn: %s", err)
  }
  defer driver.Close()

  sessionConfig := neo4j.SessionConfig{AccessMode: neo4j.AccessModeWrite}
  session, err := driver.NewSession(sessionConfig)
  if err != nil {
    log.Fatal("An error occured while creating a session: %s", err)
  }
  defer session.Close()

  result, err := session.Run("MATCH (n) DETACH DELETE n;",
                             map[string]interface{}{})
  handle_if_error(err)
  _, err = result.Consume()
  handle_if_error(err)
  fmt.Println("Database cleared.")

  result, err = session.Run(`CREATE (alice:Person {name: "Alice", age: 22});`,
                            map[string]interface{}{})
  handle_if_error(err)
  _, err = result.Consume()
  handle_if_error(err)
  fmt.Println("Record created.")

  result, err = session.Run("MATCH (n) RETURN n;", map[string]interface{}{})
  handle_if_error(err)
  if !result.Next() {
    log.Fatal("Missing result.")
  }
  node_record, has_column := result.Record().Get("n")
  if !has_column {
    log.Fatal("Wrong result returned.")
  }
  node_value := node_record.(neo4j.Node)
  fmt.Println("Record matched.")

  label := node_value.Labels()[0]
  name := node_value.Props()["name"]
  age := node_value.Props()["age"]

  if label != "Person" && name != "Alice" && age != 22 {
    log.Fatal("Data doesn't match.")
  }

  fmt.Println("Label", label)
  fmt.Println("name", name)
  fmt.Println("age", age)

  fmt.Println("All ok!")
}
```

Details about the Go driver can be found on
[GitHub](https://github.com/neo4j/neo4j-go-driver).

#### JavaScript Example

> **Disclaimer**: Running queries directly from a web browser is **not a
recommended usage** because of additional requirements and possible performance
issues. In other words, we encourage users to use server-side libraries and
clients for top performance.

Details about the Javascript driver can be found on
[GitHub](https://github.com/neo4j/neo4j-javascript-driver).

Memgraph doesn't have integrated support for `WebSocket` which is required
during the execution of Cypher commands in any web browser. If you want to run
`openCypher` queries from a web browser,
[websockify](https://github.com/novnc/websockify-js) has to be up and running.
Requests from web browsers are wrapped into `WebSocket` messages, and a proxy
is needed to handle the overhead. The proxy has to be configured to point out
to Memgraph's Bolt port and web browser driver has to send requests to the
proxy port. Presented with Cypher language, the communication goes like this:

```
(:Browser:Javascript)-[:CONNECTS_TO]->(:Websockify { mode: "WS" })-[:PROXY_TO]->(:Memgraph { "encryption": "off" })
```

Proxy `Websockify` runs in unencrypted HTTP (ws://) mode by default which isn't
encrypted, so to match that, Memgraph needs to be running with encryption
turned off. Check [Secure Sockets Layer (SSL)](#secure-sockets-layer) for more
details on how to run Memgraph without encryption.

The code snippet below outlines a basic usage example which executes a couple
of elementary queries. Make sure to start Websockify to proxy queries to the
database:

```bash
#!/bin/bash

if [ ! -d "websockify-js" ]; then
    git clone https://github.com/novnc/websockify-js.git
fi
cd websockify-js/websockify
npm install
./websockify.js 9999 :7687
```

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <title>Javascript Browser Example | Memgraph</title>
  <script src="https://cdn.jsdelivr.net/npm/neo4j-driver"></script>
</head>
<body>
  <p>Check console for Cypher query outputs...</p>
  <script>
    const driver = neo4j.driver(
      "bolt://localhost:9999",
      neo4j.auth.basic("", ""),
    );

    (async function main() {
      const session = driver.session();

      try {
        await session.run("MATCH (n) DETACH DELETE n;");
        console.log("Database cleared.");

        await session.run("CREATE (alice:Person {name: 'Alice', age: 22});");
        console.log("Record created.");

        const result = await session.run("MATCH (n) RETURN n;");
        console.log("Record matched.");
        const alice = result.records[0].get("n");
        const label = alice.labels[0]
        const name = alice.properties["name"];
        const age = alice.properties["age"];

        if (label != "Person" || name != "Alice" || age != 22) {
            console.error("Data doesn't match.");
        }

        console.log("Label: " + label);
        console.log("name: " + name);
        console.log("age: " + age);
      } catch (error) {
        console.error(error);
      } finally {
        session.close();
      }

      driver.close();
    })();
  </script>
</body>
</html>
```
