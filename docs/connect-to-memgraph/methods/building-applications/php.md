---
id: php
title: PHP quick start
sidebar_label: PHP
---

At the end of this guide, you will have created a simple PHP **`Hello, World!`**
program that connects to the Memgraph database and executes simple queries.

## Prerequisites

To follow this guide, you will need:
* A **running Memgraph instance**. If you need to set up Memgraph, take a look
  at the [Installation guide](/installation/overview.md).
* A basic understanding of graph databases and the property graph model.
* **Composer**, a tool for dependency management in PHP. Instructions on how to
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

require_once __DIR__ . '/../vendor/autoload.php';

// Create new Bolt instance
$bolt = new \Bolt\Bolt(new \Bolt\connection\StreamSocket());
// Set Bolt protocol version if needed
$bolt->setProtocolVersions(4.0);
// Connect to database
$bolt->init('MyClient/1.0', '', '');

// Execute query
$res = $bolt->run(
    'CREATE (a:Greeting) SET a.message = $message RETURN id(a) AS nodeId, a.message AS message',
    ['message' => 'Hello, World!']
);
// Pull records from last query
$rows = $bolt->pull();

echo 'Node ' . $rows[0][0] . ' says: ' . $rows[0][1];
```

**3.** Create a `composer.json` file with the following contents:

```json
{
    "name": "memgraph/myapp",
    "description": "This is a simple Hello World app.",
    "require": {
        "php": ">=7.1",
        "stefanak-michal/bolt": "^2.1"
    }
}
```

**4.** Execute the next command to install the needed dependencies:

```
composer install
```

**5.** Start the application with the following command:

```
php -S localhost:4000
```

You should see an output similar to the following:

```
Node 1: Hello, World!
```

## Where to next?

For real-world examples of how to use Memgraph, we suggest you take a look at
the **[Tutorials](/tutorials/overview.md)** page. You can also browse through
the **[Database functionalities](/database-functionalities/overview.md)**
section to get an overview of all the functionalities Memgraph offers.
