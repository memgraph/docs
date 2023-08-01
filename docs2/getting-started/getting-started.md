---
id: getting-started
title: Getting started with Memgraph
sidebar_label: Getting started
---

Memgraph is an open source graph database built for teams who expect highly
performant, advanced analytical insights - as compatible with your current
infrastructure as Neo4j (but up to 120x faster). Memgraph is powered by an
in-memory graph database built to handle real-time use cases at enterprise
scale. Memgraph supports strongly-consistent ACID transactions and uses the
standardized Cypher query language for structuring, manipulating, and exploring
data.

If you're interested in trying out Memgraph from the comfort of your browser,
you can run an instance on [Memgraph Cloud](/memgraph-cloud) and
explore Memgraph during the 2-week trial period or you can play around with
datasets and queries on [Memgraph Playground](https://playground.memgraph.com/).

Are you eager to start working with the real thing? Read on!

## Quick start

Follow these three steps, and you will have Memgraph as a full-running graph
application platform in no time at all. Here is what you need to do:

### 1. Download and install Memgraph or run it in Cloud

Start your journey through the world of graph analytics by [downloading and
installing](/installation/overview.mdx) Memgraph. You can install Memgraph using
Docker on Windows and macOS, or natively on Linux and WSL.

For a quick start, register at [Memgraph Cloud](https://cloud.memgraph.com/) and
create a project in few easy steps!

### 2. Connect to Memgraph

Once your Memgraph instance is up and running, you are ready to [connect to
Memgraph](/connect-to-memgraph/overview.mdx). If you are a command line fan, you
can query using [mgconsole](/connect-to-memgraph/mgconsole.md). If you prefer to
query using a visual interface, go ahead and use [Memgraph Lab](/memgraph-lab).
You can also connect to Memgraph using
[drivers](/connect-to-memgraph/drivers/overview.md) for your favorite
programming language (as long as your favorite programming language is either
[Python](/connect-to-memgraph/drivers/python.md),
[Rust](/connect-to-memgraph/drivers/rust.md),
[C#](/connect-to-memgraph/drivers/c-sharp.md),
[Java](/connect-to-memgraph/drivers/java.md),
[Go](/connect-to-memgraph/drivers/go.md),
[JavaScript](/connect-to-memgraph/drivers/javascript.md) or
[PHP](/connect-to-memgraph/drivers/php.md)). The choice is yours!

### 3. Import data

Now it's time to [import your data](/import-data/overview.md) into Memgraph and
you can use different sources. Memgraph supports importing [CSV
files](/import-data/files/load-csv-clause.md), establishing [connections to data
streams](/import-data/data-streams/overview.md) with Kafka, Pulsar and Redpanda, as
well as migrating data from SQL databases like
[PostgreSQL](/import-data/migrate/postgresql.md) and
[MySQL](/import-data/migrate/mysql.md).

## What to do next?

Now that your data is safe and sound within Memgraph, it's time to discover all
the possibilities Memgraph offers.

### Dive into learning

#### Memgraph Playground

You can start your learning on [Memgraph
Playground](https://playground.memgraph.com/) where guided lessons will help you
become familiar with graph databases and Cypher queries. Lessons vary in
difficulty and datasets, so feel free to choose the topic that will keep you
extra motivated. For example, you can start with [TED-talks
lessons](https://playground.memgraph.com/dataset/ted-talks) that use real-world
data related to TED talks providing you with tips and tricks that will help you
explore your own datasets.

#### Tutorials and How-to guides

All the datasets and most of the queries used in the guided lessons can be also
explored here, in the [Tutorials](/tutorials/overview.md) section. If you are
interested in using a particular Memgraph feature or you are stuck solving a
tricky problem, try to find the solution in the [How-to
guides](/how-to-guides/overview.md). Even more tutorials dealing with specific
issues are available on our [Blog](https://memgraph.com/category/tutorials).

#### Email courses

We have created two free email courses for you. The first one covers [Cypher
query language](https://memgraph.com/learn-cypher-query-language). By the end of
the ten days, you'll have learned everything you need to start with Cypher and
graph database. The second one is a [Graph modeling
course](https://memgraph.com/learn-graph-modeling). After ten days of this
course, you will know how to model graphs.

#### Video courses

For those of you who are more visual and auditory learners, you can find the
best materials related to graphs and graphs analytics in our [list of
recommended
content](https://www.youtube.com/channel/UCZ3HOJvHGxtQ_JHxOselBYg/playlists),
most of which is free.

#### Run an example streaming application

We've built an example streaming application to get you started quickly. Pull
the code from our [GitHub
repository](https://github.com/memgraph/example-streaming-app) and get started.

### Look under the hood

If you want to know more about Memgraph and learn details of implemented
features, take a deep dive into our [Reference
guide](/reference-guide/overview.md) and look [under Memgraph's
hood](/under-the-hood/overview.md).

### Power up with MAGE

[Memgraph Advanced Graph Extensions (MAGE)](/mage) is an open-source repository that
contains graph algorithms and modules in the form of query modules written by
the team behind Memgraph and its users. It aims to help you tackle the most
interesting and challenging graph analytics problems.

### Browse through the Changelog

Want to know what's new in Memgraph? Take a look at [Changelog](/changelog.md)
to see a list of new features.
