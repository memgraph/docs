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

Memgraph Platform can be installed only with Docker. Instructions on how to
install Docker can be found on the [official Docker
website](https://docs.docker.com/get-docker/).


## 1. Install Memgraph Platform

First you need to download and install Memgraph Platform! All you need to do is
to open a terminal on your computer and run the following command:

```bash
docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -v mg_lib:/var/lib/memgraph memgraph/memgraph-platform
```
Depending on the speed of your internet connection it may take few minutes to
download Memgraph docker image. At the end of this tutorial we have included
more about on working with Docker.

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

This means that you have installed Memgraph Platform and that you have Memgraph
up and running. Kudos!

## 2. Connect to MemgraphLab

MemgraphLab is running on your localhost at port 3000 so all that you need is to
open your web browser and go to [`localhost:3000`](http://localhost:3000). When
the Memgraph Lab loads click **Connect now**.

<img src={require('../data/tutorials/getting-started/connect-to-memgraph-lab.png').default} className={"imgBorder"}/>

That's it! You will no see Memgraph Lab Dashboard. Let's go to the next step.

<img src={require('../data/tutorials/getting-started/memgraph-lab-dashboard.png').default} className={"imgBorder"}/>

## 3. Import dataset

Since this is a fresh install there are no nodes and relationships in your
database. We have prepared more than 20 datasets that you can use for testing
and learning. You will now import one of those datasets. In the sidebar click
**Datasets**. Next go to **Capital cities and borders** and click **Load
Dataset**.

<img src={require('../data/tutorials/getting-started/memgraph-lab-datasets.png').default} className={"imgBorder"}/>

You will see the warning that a new dataset will overwrite current data in the
database. This is not a problem for you since you don't have any data in your
database, but in future be careful when importing data. Go ahead and click
**Confirm**. Once the import done click the **X** to close the dialog. 

<img src={require('../data/tutorials/getting-started/memgraph-lab-dataset-import.png').default} className={"imgBorder"}/>

## 4. Run query

Here is task tah you are trying to solve. Imagine that you are in Madrid. And
you want to visit other capital cities. You've decided that you want to visit
one ofe the cities that are one or two hops away from Madrid. How can you find
out which cities your possible destinations? You will use Cypher query language
to find that out.

Click the **Query Execution** in the sidebar, and then copy-and-paste the
following code into **Cypher Editor**.

```cypher

MATCH p = (madrid:City { name: "Madrid" })-[e * bfs ..2]-(:City)
RETURN p;

```
This query will show on the map all of the capital cities that are up to two
hops away from Madrid. Don't worry about exact semantics of this query for now.
We have great learning materials for Cypher. You can check them out once you are
done with this tutorial. Click **Run query** to run it. The result of the query
is visible in **Graph results** tab.

<img src={require('../data/tutorials/getting-started/memgraph-lab-cypher-editor.png').default} className={"imgBorder"}/>

The result that you can see shows all of the capital cities that are two hops
away from Madrid.

<img src={require('../data/tutorials/getting-started/memgraph-lab-graph-results.png').default} className={"imgBorder"}/>

We will not go deeper into the query at this time. We have great learning
materials for Cypher and we will link them at the end of the tutorial.

## 5. Style your graph

When your results are shown on the map you can move around the map. Go ahead and
zoom in and change the map style to **Detailed**. 

<img src={require('../data/tutorials/getting-started/memgraph-lab-map-style.png').default} className={"imgBorder"}/>

You will now use **Graph Style Editor** to change the way that nodes and
relationships are shown on the map. For each capital city we have included a
flag fo that country as a node property. You will now add one line of code to
make it appear on the graph.

Find the part of the code that looks like this

```nocopy
@NodeStyle HasLabel?(node, "City") {
  color: #DD2222
  color-hover: Lighter(#DD2222)
  color-selected: Lighter(#DD2222)
}
```
and add the line

```
  image-url: Property(node, "flag")
```

so that this block looks like this.

```nocopy
@NodeStyle HasLabel?(node, "City") {
  image-url: Property(node, "flag")
  color: #DD2222
  color-hover: Lighter(#DD2222)
  color-selected: Lighter(#DD2222)
}
```

Click **Apply** any your result should look like this.

<img
src={require('../data/tutorials/getting-started/memgraph-lab-style-editor.png').default}
className={"imgBorder"}/>

This looks great, but let's make names of the cites and nodes a little bit
bigger.

In the Graph Style Editor locate the following code

```nocopy
@NodeStyle {
  size: 6
  color: #DD2222
  color-hover: Lighter(#DD2222)
  color-selected: Lighter(#DD2222)
  border-width: 1.8
  border-color: #1d1d1d
  font-size: 7
}
```
and replace it with

```
@NodeStyle {
  size: 10
  color: #DD2222
  color-hover: Lighter(#DD2222)
  color-selected: Lighter(#DD2222)
  border-width: 1.8
  border-color: #1d1d1d
  font-size: 12
}

You have increased the size of node to 10, and font size to 12. Now you will update the styling for relationships. To make them a ticker, and when you hover over them we want them to become red. In the Graph Style Editor locate the following code

```nocopy
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
and replace it with

```
@EdgeStyle {
  color: #999999
  color-hover: #ff0000
  color-selected: #1d1d1d
  width: 2
  width-hover: 2.7
  width-selected: 2.7
  font-size: 7
  label: Type(edge)
}
```
With this code you have updated the width and hover color for the relationships.

<details>
  <summary>If you need it here is the complete Graph Style Code for this graph:</summary>

```
@NodeStyle {
  size: 10
  color: #DD2222
  color-hover: Lighter(#DD2222)
  color-selected: Lighter(#DD2222)
  border-width: 1.8
  border-color: #1d1d1d
  font-size: 12
}

@NodeStyle HasLabel?(node, "City") {
  image-url: Property(node, "flag")
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
  color: #999999
  color-hover: #ff0000
  color-selected: #1d1d1d
  width: 2
  width-hover: 2.7
  width-selected: 2.7
  font-size: 7
  label: Type(edge)
}
```  

</details>

Here is what your graph looks like now. We hope that you have enjoyed this short tutorial. Now that you have seen Memgraph in action we encourage you to keep exploring Memgraph features. Wonderful world of graphs awaits you!

<img src={require('../data/tutorials/getting-started/memgraph-lab-map-style-final.png').default} className={"imgBorder"}/>

## Where to next?

In this tutorial, you've learned how to install Memgraph, use Memgraph Lab to
import dataset, run queries and style your graph. Not bad for a start, right?

We have promised along the way some more resources, so here they are:

* [Cypher manual](/cypher-manual/)
* [Guide to Style Script script](/docs/memgraph-lab/graph-style-script-language)
* [How to work with Docker](/memgraph/how-to-work-with-docker)


We hope that you had fun going through this tutorial! You can continue checkout
[some of the tutorials](overview.md) that web have prepared for you or you can
go to [Memgraph Playground](https://playground.memgraph.com/) to go through
guided lessons, or to check out other dataset in sandbox sites.

