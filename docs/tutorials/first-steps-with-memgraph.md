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

Since this is a fresh install there are no nodes and relationships in your database. We have prepared more than 20 datasets that you can use for testing and learning. You will now import of of those datasets. In the sidebar click **Datasets**. Next go to **Capital cities and borders** and click **Load Dataset**.

<img src={require('../data/tutorials/getting-started/memgraph-lab-datasets.png').default} className={"imgBorder"}/>

You will see the warning that a new dataset will overwrite current data in the database. This is not a problem for you since you don't have any data in your database but in future be careful when importing data. Go ahead and click **Confirm**. Once the import is click **Run Sample Query**.

## 4. Run query

You can see the the sample query in **Cypher Editor**. The graph is visible in **Graph results** tab.

<img src={require('../data/tutorials/getting-started/memgraph-lab-cypher-editor.png').default} className={"imgBorder"}/>

You will now modify that query so that you can see the all of the capital cities that are up to three steps away from Madrid. Just copy paste this cove over the existing one. Don't worry about exact semantics of this query for now. We have great learning materials for Cypher. You can check them out latter.


```cypher

MATCH p = (paris:City { name: "Madrid" })-[e * bfs ..3]-(:City)
RETURN p;


```

## Style your graph

Change the map style to **Detailed**.

```


@NodeStyle {
  image-url: Property(node, "flag")
  size: 10
  color: #DD2222
  color-hover: Lighter(#DD2222)
  color-selected: Lighter(#DD2222)
  border-width: 1.8
  border-color: #1d1d1d
  font-size: 7
}

@NodeStyle HasLabel?(node, "City") {
  color: #DD2222
  color-hover: Lighter(#DD2222)
  color-selected: Lighter(#DD2222)
}

@NodeStyle Greater?(Size(Labels(node)), 0) {
  label: Format(":{}", Join(Labels(node), " :"))
}

@NodeStyle HasProperty?(node, "name") {
  label: AsText(Property(node, "name"))
}

@EdgeStyle {
  color: #ff0000
  color-hover: #1d1d1d
  color-selected: #1d1d1d
  width: 0.9
  width-hover: 2.7
  width-selected: 2.7
  font-size: 7
  label: Type(edge)
}

```

## Where to next?

In this tutorial, you've learned how to install Memgraph, use Memgraph Lab to
import dataset, run queries and style your graph. We hope that you had fun going
through this tutorial! You can continue checkout [some of the
tutorials](overview.md) that web have prepared for you.

