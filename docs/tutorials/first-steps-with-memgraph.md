---
id: first-steps-with-memgraph
title: First steps with Memgraph
sidebar_label: First steps with Memgraph
---

In this tutorial, you will learn how to install Memgraph, connect to it using
Memgraph Lab, run your first query and style your graph. You will see that using
memgraph is not hard at all! 

You will use Memgraph Platform for this tutorial.

Let's get started!

## Prerequisites 

:::info

Memgraph Platform can be installed only with Docker. Instructions on how to
install Docker can be found on the [official Docker
website](https://docs.docker.com/get-docker/).

:::

## 1. Install Memgraph Platform

Downloading and installing Memgraph is super easy! All you need to do is to open
a terminal on your computer and run the following command:

```bash
docker run -it -p 7687:7687 -p 3000:3000 memgraph/memgraph-platform
```
Depending on the speed of your internet connection it may take few minutes to download Memgraph docker image.

Once the installation is done you Memgraph will see message similar to this one:

```nocopy

Status: Downloaded newer image for memgraph/memgraph-platform:latest
Memgraph Lab is running at localhost:3000

mgconsole 1.1
Connected to 'memgraph://127.0.0.1:7687'
Type :help for shell usage
Quit the shell by typing Ctrl-D(eof) or :quit
memgraph>

```

And thats it! This means that you have installed Memgraph Platform and that you have Memgraph up and running. Kudos!

## 2. Connect to MemgraphLab

MemgraphLab is running on your localhost at port 3000 so all that you need is to open your web browser and go to [`localhost:3000`](http://localhost:3000). When the Memgraph Lab loads click **Connect now**.

<img src={require('../data/tutorials/getting-started/connect-to-memgraph-lab.png').default} className={"imgBorder"}/>

That's it! You will no see Memgraph Lab Dashboard. Let's go to the next step.

<img src={require('../data/tutorials/getting-started/memgraph-lab-dashboard.png').default} className={"imgBorder"}/>

## 3. Import dataset

Import data set "Capital cities and borders"

## Run query

```cypher

MATCH p = (paris:City { name: "Paris" })-[e * bfs .. 2]->(:City)
RETURN p;

```

## Style your graph

```

@NodeStyle {
  image-url: Property(node, "flag")
}

```

## Where to next?

In this tutorial, you've learned how to install Memgraph, use Memgraph Lab to
import dataset, run queries and style your graph. We hope that you had fun going
through this tutorial! You can continue checkout [some of the
tutorials](overview.md) that web have prepared for you.

