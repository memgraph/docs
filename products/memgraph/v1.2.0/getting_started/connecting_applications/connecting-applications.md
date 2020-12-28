## Connecting applications

### Quick start guides

The following guides describe how to create a simple **`Hello, World!`** program that connects to the Memgraph database and executes simple queries:
{% page-ref page="./python.md" %}
{% page-ref page="./rust.md" %}
{% page-ref page="./c-sharp.md" %}
{% page-ref page="./java.md" %}
{% page-ref page="./go.md" %}
{% page-ref page="./javascript.md" %}

### Supported Languages

If users wish to query Memgraph programmatically, they can do so using the
[Bolt protocol](https://7687.org/). Bolt was designed for efficient
communication with graph databases and **Memgraph supports versions 1 and 4**
of the protocol. Bolt protocol drivers for some popular programming languages are listed below:

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