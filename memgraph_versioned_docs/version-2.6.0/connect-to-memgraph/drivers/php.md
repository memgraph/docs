---
id: php
title: PHP quick start
sidebar_label: PHP
---

At the end of this guide, you will have created a simple PHP **`Hello, World!`**
program that connects to the Memgraph database and executes simple queries.

## Prerequisites

To follow this guide, you will need:

- A **running Memgraph instance**. If you need to set up Memgraph, take a look
  at the [Installation guide](/installation/overview.mdx).
- A basic understanding of graph databases and the property graph model.
- **Composer**, a tool for dependency management in PHP. Instructions on how to
  install Composer can be found [here](https://getcomposer.org/doc/00-intro.md).

:::note

We recommend using the **[Bolt driver](https://github.com/neo4j-php/Bolt)** for
PHP.

:::

## Basic Setup

We'll be using a very simple **PHP script** in combination with **Composer** to
demonstrate how to connect to a running Memgraph instance.

Let's jump in and connect a simple program to Memgraph.

**1.** Create a new directory for your application, for example `/MyApp` and
position yourself in it.<br /> **2.** Create a `index.php` file and add the
following code to it:

```php
<?php
require_once __DIR__ . '/vendor/autoload.php';

// Create a connection class and specify target host and port, default is localhost.
$conn = new \Bolt\connection\Socket();
// Create a new Bolt instance and provide connection object.
$bolt = new \Bolt\Bolt($conn);
// Set available Bolt versions for Memgraph.
$bolt->setProtocolVersions(4.1, 4, 3);
// Build and get protocol version instance which creates connection and executes handshake.
$protocol = $bolt->build();
// Login to database with credentials.
$protocol->hello(\Bolt\helpers\Auth::basic('username', 'password'));

// Pipeline two messages. One to execute query with parameters and second to pull records.
$protocol
    ->run('CREATE (a:Greeting) SET a.message = $message RETURN id(a) AS nodeId, a.message AS message', ['message' => 'Hello, World!'])
    ->pull();

// Server responses are waiting to be fetched through iterator.
$rows = iterator_to_array($protocol->getResponses(), false);
// Get content from requested record.
$row = $rows[1]->getContent();

echo 'Node ' . $row[0] . ' says: ' . $row[1];
```

If you need SSL connection you have to replace `Socket` instance with `StreamSocket` and enable SSL with additional method.

```php
$conn = new \Bolt\connection\StreamSocket('URI or IP', 7687);
$conn->setSslContextOptions([
    'verify_peer' => true
]);
```

If you want to connect to Memgraph Cloud you have to set these parameters.

```php
$conn = new \Bolt\connection\StreamSocket('URI or IP', 7687);
$conn->setSslContextOptions([
    'peer_name' => 'Memgraph DB',
    'allow_self_signed' => true
]);
```

**3.** Run a composer command to get the required library:

```sh
composer require stefanak-michal/memgraph-bolt-wrapper
```

It will auto create `composer.json` file.

**4.** Start the application with the following command:

```
php -S localhost:4000
```

Open you browser, enter `localhost:4000` as URL and you should see an output similar to the following:

```
Node 1 says: Hello, World!
```

## Where to next?

Check out the [PHP Bolt driver repository](https://github.com/neo4j-php/Bolt) to learn more about using the PHP Bolt library.

You can simplify usage of this library with wrapper [Memgraph Bolt wrapper](https://github.com/stefanak-michal/memgraph-bolt-wrapper).

For real-world examples of how to use Memgraph, we suggest you take a look at
the **[Tutorials](/tutorials/overview.md)** page. You can also browse through
the **[How-to guides](/how-to-guides/overview.md)** section to get an overview
of all the functionalities Memgraph offers.
