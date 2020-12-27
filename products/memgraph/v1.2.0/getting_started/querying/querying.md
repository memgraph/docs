## Querying

Memgraph supports the [openCypher](https://www.opencypher.org) query language
which has been developed by [Neo4j](http://neo4j.com).
It is a declarative language developed specifically
for interaction with graph databases, which is currently going through a
vendor-independent standardization process.

The easiest way to execute openCypher queries against Memgraph is by using
Memgraph's command-line tool, `mg_client`, which is installed
together with Memgraph.

{% hint style="info" %}
NOTE: `mg_client` is a deprecated tool still coming within the Memgraph package.
[mgconsole](https://github.com/memgraph/mgconsole) will replace `mg_client` in
the future. If possible, please use `mgconsole` instead.
{% endhint %}

If you installed Memgraph using Docker, you will need to run the client
using the following command (remember to replace `HOST` with valid IP of
the container - see [Docker Note](../installation/docker-installation.md#docker-note)):

```
docker run -it --entrypoint=mg_client memgraph --host HOST --use-ssl=False
```

Otherwise, you can connect to the running Memgraph instance by
issuing the following shell command:

```
mg_client --use-ssl=False
```

After the client has started it should present a command prompt similar to:

```
Type :help for shell usage
Quit the shell by typing Ctrl-D(eof) or :quit
Connected to 'memgraph://127.0.0.1:7687'
memgraph>
```

At this point, it is possible to execute openCypher queries on Memgraph. Each
query needs to end with the `;` (*semicolon*) character. For example:

```opencypher
CREATE (u:User {name: "Alice"})-[:Likes]->(m:Software {name: "Memgraph"});
```

The above will create 2 nodes in the database, one labeled "User" with name
"Alice" and the other labeled "Software" with name "Memgraph". It will also
create a relationship that "Alice" *likes* "Memgraph".

To find created nodes and relationships, execute the following query:

```opencypher
MATCH (u:User)-[r]->(x) RETURN u, r, x;
```

### Telemetry {#telemetry}

Telemetry is an automated process by which data is collected at a remote point.
At Memgraph, we use telemetry for the sole purpose of improving our product,
thereby collecting data about the machine that executes the database (CPU,
memory, OS and kernel information) as well as data about the database runtime
(CPU usage, memory usage, vertices and edges count).

Here at Memgraph, we care deeply about the privacy of our users and do not
collect any sensitive information. If you wish to disable Memgraph's telemetry
features, you can do so easily, either by altering the line in
`/etc/memgraph/memgraph.conf` that enables telemetry (set
`--telemetry-enabled=true` to the following `--telemetry-enabled=false`), or by
including `--telemetry-enabled=false` as a command-line argument when running
the executable.

### Where To Next?

To learn more about the openCypher language, visit our [Reference
Guide](reference_guide/reference-overview.md) article.  For real-world examples
of how to use Memgraph, we strongly suggest reading through
[Tutorials](tutorials/tutorials-overview.md). Details on what can be stored in
Memgraph can be found in the article about [Data Storage](concepts/storage.md).

We *welcome and encourage* your feedback!