---
id: ssl-encryption
title: SSL encryption
---

import Tabs from "@theme/Tabs"; 
import TabItem from "@theme/TabItem";

Memgraph uses SSL (Secure Sockets Layer) protocol for establishing an
authenticated and encrypted connection to a database instance.

[![Related -
How-to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/how-to-guides/encryption.md)

Achieving a secure connection is a three-step process that requires

1. Owning a SSL certificate
2. Configuring the server
3. Enabling SSL connection

For any errors that might come up, check out [the Help center page on
errors](/errors/memgraph/ssl).

## SSL certificate

SSL certificate is a pair of `.pem` documents issued by self-signing, or by a
Certification Authority. Memgraph contains a self-signed testing certificate
(`cert.pem` and `key.pem`) located at `/etc/memgraph/ssl/`.

If you are using Docker and want to use your own certificates, you need to [copy
them into a Docker
container](/how-to-guides/work-with-docker.md#how-to-copy-files-from-and-to-a-docker-container)
in order to utilize them.

## Configure the server

To use a certain SSL certificate, change the configuration file to include the
`--bolt-cert-file` and `--bolt-key-file` flags and set them to the location of
the certification files.

If you are using the Memgraph self-signed certificate, set the configuration
flags to:

```
--bolt-cert-file=/etc/memgraph/ssl/cert.pem
--bolt-key-file=/etc/memgraph/ssl/key.pem
```

When using Linux, be sure that the user `memgraph` has permissions (400) to
access the files.

Once the flags are included in the configuration, you cannot establish an
insecure connection.

## Enable SSL connection

<Tabs
  groupId="connectiontype"
  defaultValue="lab"
  values={[
    {label: 'Memgraph Lab', value: 'lab'},
    {label: 'mgconsole', value: 'mgconsole'},
    {label: 'Drivers', value: 'drivers'},
    {label: 'WebSocket', value: 'websocket'},]}>
  <TabItem value="lab">

To enable SSL connection in Memgraph Lab, switch to **Connect Manually** view
and turn the SSL on.

<img src={require('../data/encryption/memgraph_lab_ssl.png').default} className={"imgBorder"}/>

When Memgraph Lab is connected to MemgraphDB using SSL encryption, logs cannot
be viewed inside the Lab.

  </TabItem>
  <TabItem value="mgconsole">

When starting mgconsol include the `--use-ssl=true` flag. Flag can also be
explicitly set to `false` if needed.

When working with Memgraph Platform, you should pass configuration flags inside
of environment variables as a part of the `docker run` command, for example:

```
docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -e MGCONSOLE="--use-ssl=true" memgraph/memgraph-platform
```

In all other cases passed them on as regular configuration flags.

For example, if you are starting mgconsole on Linux:

```
mgconsole --host 127.0.0.1 --port 7687 --use-ssl=true
```

or if you are using `memgraph` or `memgraph-mage` Docker images:

```
docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph memgraph/memgraph-mage --use-ssl=true
```

  </TabItem>
  <TabItem value="drivers">

**Javascript**

Use [Neo4j driver for JavaScript](https://neo4j.com/developer/javascript/), and
add `+ssc` to the UNI when defining a `MEMGRAPH_URI` constant: <br/>
<code>MEMGRAPH_URI = 'bolt+ssc://18.196.53.118:7687'</code>.
<p>
</p>

**Python**

Use [pymgclient](https://github.com/memgraph/pymgclient), and add
`sslmode=mgclient.MG_SSLMODE_REQUIRE` to the `mgclient.connect`.

**C/C++**

Use [mgclient](https://github.com/memgraph/mgclient), and add set the
`params.use_ssl` to `true` or `false`.

**Go**

Use the [Neo4j driver for Go](https://neo4j.com/developer/go/), and add `+ssc`
to the UNI: `"bolt+ssc://18.196.53.118:7687"`.

**PHP**

Use the [Bolt protocol library by
stefanak-michal](https://github.com/neo4j-php/Bolt) and add the following code

```python
$conn->setSslContextOptions([
 'passphrase' => 'bolt',
 'allow_self_signed' => true,
 'verify_peer' => false,
 'verify_peer_name' => false
]);
```

**C#**

Use the [Neo4j.Driver.Simple](https://neo4j.com/developer/dotnet/), and add
`+ssc` to the UNI: `"bolt+ssc://18.196.53.118:7687"`.

**Java**

Use the [Neo4j driver for Java](https://neo4j.com/developer/java/) and add
`+ssc` to the UNI: `"bolt+ssc://18.196.53.118:7687"`.

**Rust**

Use [mgclient](https://github.com/memgraph/mgclient), and add `sslmode:
SSLMode::Require` to the `ConnectParams`.

  </TabItem> 
  <TabItem value="websocket">

WebSocket over SSL is currently not supported in Memgraph.

  </TabItem>
</Tabs>

## How to set up SSL encryption

Memgraph uses SSL (Secure Sockets Layer) protocol for establishing an
authenticated and encrypted connection to a database instance.

[![Related - Reference
Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/encryption.md)

## Docker

1. Start a Memgraph instance with `docker run` command including the `-v
   mg_lib:/var/lib/memgraph` and `-v mg_etc:/etc/memgraph` volumes.

2. [Copy the SSL certificate inside of the Docker
   container](/how-to-guides/work-with-docker.md#how-to-copy-files-from-and-to-a-docker-container)
   or use Memgraph self-signed certificates (`cert.pem` and `key.pem`) located
   at `/etc/memgraph/ssl/`.

3. [Change the configuration file](/how-to-guides/config-logs.md#file) to
   include the following configuration flags:

   ```
   --bolt-cert-file=<path>
   --bolt-key-file=<path>
   ```

4. Set the flags to the paths of your SSL certificate.

   If you are using the Memgraph self-signed certificate, set the configuration
   flags to:

   ```
   --bolt-cert-file=/etc/memgraph/ssl/cert.pem
   --bolt-key-file=/etc/memgraph/ssl/key.pem
   ```

5. [Stop the Docker container](/how-to-guides/work-with-docker.md#stop-image),
   then start it again, including the volumes you used in step 1.

   If you are running `memgraph-platform` image, pass the configuration flag
   <code>MGCONSOLE="--use-ssl=true"</code>:

   ```
   docker run -it -p 7687:7687 -p 3000:3000 -p 7444:7444 -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -e MGCONSOLE="--use-ssl=true" memgraph/memgraph-platform
   ```

6. Open Memgraph Lab and switch to **Connect Manually** view, turn the **SSL
   On** and connect.

   <img src={require('../data/encryption/memgraph_lab_ssl.png').default}
   className={"imgBorder"}/>

7. If you are using [pymgclient](https://github.com/memgraph/pymgclient) to
   query the database with Python, add `sslmode=mgclient.MG_SSLMODE_REQUIRE` to
   the `mgclient.connect`

For other ways of connecting to Memgraph DB using SSL encryption, check the
[reference guide](/reference-guide/encryption.md).

## Linux

1. Run Memgraph.

2. Open the configuration file available at `/etc/memgraph/memgraph.conf`.

3. Change the configuration file to include the following configuration flags:

   ```
   --bolt-cert-file=<path>
   --bolt-key-file=<path>
   ```

4. Set the flags to the paths of your SSL certificate, or use Memgraph
   self-signed certificates (`cert.pem` and `key.pem`) located at
   `/etc/memgraph/ssl/`:

   ```
   --bolt-cert-file=/etc/memgraph/ssl/cert.pem
   --bolt-key-file=/etc/memgraph/ssl/key.pem
   ```

5. Restart Memgraph.

6. Open Memgraph Lab and switch to **Connect Manually** view, turn the **SSL
   On** and connect.

7. If you are using [pymgclient](https://github.com/memgraph/pymgclient) to
   query the database with Python, add `sslmode=mgclient.MG_SSLMODE_REQUIRE` to
   the `mgclient.connect`

For other ways of connecting to Memgraph DB using SSL encryption, check the
[reference guide](/reference-guide/encryption.md).
