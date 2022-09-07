---
id: encryption
title: How to use SSL encryption
sidebar_label: Use SSL encryption
---

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
