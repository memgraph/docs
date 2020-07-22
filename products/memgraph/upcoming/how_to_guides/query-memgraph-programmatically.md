## How to Query Memgraph Programmatically?

### Supported Languages

If users wish to query Memgraph programmatically, they can do so using the
[Bolt protocol](https://boltprotocol.org). Bolt was designed for efficient
communication with graph databases and Memgraph supports
[Version 1](https://boltprotocol.org/v1) of the protocol. Bolt protocol drivers
for some popular programming languages are listed below:

  * [C/C++](https://github.com/memgraph/mgclient)
  * [Python](https://github.com/neo4j/neo4j-python-driver)
  * [Java](https://github.com/neo4j/neo4j-java-driver)
  * [C#](https://github.com/neo4j/neo4j-dotnet-driver)
  * [Node.js](https://github.com/neo4j/neo4j-javascript-driver)
  * [JavaScript](https://github.com/neo4j/neo4j-javascript-driver)
  * [Ruby](https://github.com/neo4jrb/neo4j)
  * [Haskell](https://github.com/zmactep/hasbolt)
  * [PHP](https://github.com/graphaware/neo4j-bolt-php)
  * [Go](https://github.com/neo4j/neo4j-go-driver)

### Secure Sockets Layer (SSL) {#secure-sockets-layer}

Secure connections are supported and enabled by default. The server initially
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

  * [Python](#python-example)
  * [Java](#java-example)
  * [C#](#c-sharp-example)
  * [Node.js](#node-js-example)
  * [JavaScript](#javascript-example)

Examples for the languages listed above are equivalent.

#### Python Example

Neo4j officially supports Python for interacting with an openCypher and Bolt
compliant database. For details consult the
[official documentation](http://neo4j.com/docs/api/python-driver) and the
[GitHub project](https://github.com/neo4j/neo4j-python-driver).

The code snippet below outlines a basic usage example which connects to the
database and executes a couple of elementary queries.

```python
from neo4j.v1 import GraphDatabase, basic_auth

# Initialize and configure the driver.
#   * provide the correct URL where Memgraph is reachable;
#   * use an empty user name and password.
driver = GraphDatabase.driver("bolt://localhost:7687",
                              auth=basic_auth("", ""))

# Start a session in which queries are executed.
session = driver.session()

# Execute openCypher queries.
# After each query, call either `consume()` or `data()`
session.run('CREATE (alice:Person {name: "Alice", age: 22})').consume()

# Get all the vertices from the database (potentially multiple rows).
vertices = session.run('MATCH (n) RETURN n').data()
# Assuming we started with an empty database, we should have Alice
# as the only row in the results.
only_row = vertices.pop()
alice = only_row["n"]

# Print out what we retrieved.
print("Found a vertex with labels '{}', name '{}' and age {}".format(
  alice['name'], alice.labels, alice['age'])

# Remove all the data from the database.
session.run('MATCH (n) DETACH DELETE n').consume()

# Close the session and the driver.
session.close()
driver.close()
```

#### Java Example

Details about the Java driver can be found on
[GitHub](https://github.com/neo4j/neo4j-java-driver).

The code snippet below outlines a basic usage example which connects to the
database and executes a couple of elementary queries.

```java
import org.neo4j.driver.v1.*;
import org.neo4j.driver.v1.types.*;
import static org.neo4j.driver.v1.Values.parameters;
import java.util.*;

public class JavaQuickStart {
    public static void main(String[] args) {
        // Initialize driver.
        Config config = Config.build().toConfig();
        Driver driver = GraphDatabase.driver("bolt://localhost:7687",
                                             AuthTokens.basic("",""),
                                             config);
        // Execute basic queries.
        try (Session session = driver.session()) {
            StatementResult rs1 = session.run("MATCH (n) DETACH DELETE n");
            StatementResult rs2 = session.run(
                "CREATE (alice: Person {name: 'Alice', age: 22})");
            StatementResult rs3 = session.run( "MATCH (n) RETURN n");
            List<Record> records = rs3.list();
            Record record = records.get(0);
            Node node = record.get("n").asNode();
            System.out.println(node.get("name").asString());
        } catch (Exception e) {
            System.out.println(e);
            System.exit(1);
        }
        // Cleanup.
        driver.close();
    }
}
```

#### C# Example {#c-sharp-example}

Details about the C# driver can be found on
[GitHub](https://github.com/neo4j/neo4j-dotnet-driver).

The code snipped below outlines a basic usage example which connects to the
database and executes a couple of elementary queries.

```csh
using System;
using System.Linq;
using Neo4j.Driver.V1;

public class Basic {
  public static void Main(string[] args) {
    // Initialize the driver.
    var config = Config.DefaultConfig;
    using(var driver = GraphDatabase.Driver("bolt://localhost:7687", AuthTokens.None, config))
      using(var session = driver.Session())
      {
        // Run basic queries.
        session.Run("MATCH (n) DETACH DELETE n").Consume();
        session.Run("CREATE (alice:Person {name: \"Alice\", age: 22})").Consume();
        var result = session.Run("MATCH (n) RETURN n").First();
        var alice = (INode) result["n"];
        Console.WriteLine(alice["name"]);
        Console.WriteLine(string.Join(", ", alice.Labels));
        Console.WriteLine(alice["age"]);
      }
    Console.WriteLine("All ok!");
  }
}
```

### Node.js Example {#node-js-example}

Details about the Javascript driver can be found on
[GitHub](https://github.com/neo4j/neo4j-javascript-driver).

Here is an example related to `Node.js`. Make sure to use version `^1.7.6`
of `neo4j-driver` package due to unsupported Bolt connection changes added
in later versions of the driver:

The snippet of the `package.json` file:

```json
{
  "dependencies": {
    "neo4j-driver": "^1.7.6",
  }
}
```

The code snippet below outlines a basic usage example which connects to the
database and executes a couple of elementary queries.

```javascript
const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver(
  "bolt://localhost:7687",
  neo4j.auth.basic("", ""),
);

async function main() {
  const session = driver.session();
  
  try {
    await session.run("MATCH (n) DETACH DELETE n");
    console.log("Database cleared.");

    await session.run("CREATE (alice: Person {name: 'Alice', age: 22})");
    console.log("Record created.");

    const result = await session.run("MATCH (n) RETURN n");
    console.log("Record matched:");
    const alice = result.records[0].get("n");
    console.log(alice.labels[0]);
    console.log(alice.properties["name"]);

  } catch (error) {
    console.error(error);
  } finally {
    session.close();
  }

  driver.close();
}

main();
```

#### JavaScript Example

> **Disclaimer**: Running queries directly from a web browser is **not a recommended**
**usage** because of additional requirements and possible performance issues. In other
words, we encourage users to use server-side libraries and clients for top performance.

Details about the Javascript driver can be found on
[GitHub](https://github.com/neo4j/neo4j-javascript-driver).

Memgraph doesn't have integrated support for `WebSocket` which is required
during the execution of Cypher commands in any web browser. If you want to
run `openCypher` queries from a web browser,
[websockify](https://github.com/novnc/websockify-js) has to be up and running.
Requests from web browsers are wrapped into `WebSocket` messages, and a proxy
is needed to handle the overhead. The proxy has to be configured to point out
to Memgraph's Bolt port and web browser driver has to send requests to the
proxy port. Presented with Cypher language, the communication goes like this:

```
(:Browser:Javascript)-[:CONNECTS_TO]->(:Websockify { mode: "WS" })-[:PROXY_TO]->(:Memgraph { "encryption": "off" })
```

Proxy `Websockify` runs in unencrypted HTTP (ws://) mode by default which
isn't encrypted, so to match that, Memgraph needs to be running
with encryption turned off. Check [Secure Sockets Layer (SSL)](#secure-sockets-layer)
for more details on how to run Memgraph without encryption.

The code snippet below outlines a basic usage example which executes a couple
of elementary queries. Make sure to start Websockify to proxy queries to the
database:

```bash
cd websockify
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
        await session.run("MATCH (n) DETACH DELETE n");
        console.log("Database cleared.");

        await session.run("CREATE (alice: Person {name: 'Alice', age: 22})");
        console.log("Record created.");

        const result = await session.run("MATCH (n) RETURN n");
        console.log("Record matched:");
        const alice = result.records[0].get("n");
        console.log(alice.labels[0]);
        console.log(alice.properties["name"]);

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
