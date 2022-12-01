---
id: networkx
title: How to use the NetworkX library with Memgraph
sidebar_label: Utilize the NetworkX library
---

NetworkX is a Python package for the creation, manipulation, and study of the structure,
dynamics, and functions of complex networks. Memgraph has [**`nxalg`**](/docs/mage/query-modules/python/nxalg) query module, which is a wrapper around NetworkX graph algorithms. It also provides **[Graph Analyzer](/mage/query-modules/python/graph-analyzer)** query module, which utilizes the NetworkX library. Besides that, you can create a custom query module which uses the NetworkX library. Through this how-to guide, you are going to learn:

- [**How to run NetworkX algorithms**](#how-to-run-networkx-algorithms)
- [**How to implement custom NetworkX module**](#how-to-implement-custom-networkx-module)


## How to run NetworkX algorithms

NetworkX algorithms in Memgraph are query modules like any other [MAGE](/docs/mage) query module. Head over to the guide on [how to call MAGE procedures](/docs/mage/usage/calling-procedures) to learn how to call all Memgraph procedures, including those that utilize the NetworkX library.

In this how-to guide, we will show one simple example of how to call a NetworkX procedure. The prerequisite of following the example is to have a running Memgraph instance. To run Memgraph with the visual user interface, use the Memgraph Platform Docker image where Memgraph Lab is included. Run the following command:

```
docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 memgraph/memgraph-platform:latest
```

Check out the [installation guide](/docs/memgraph/installation) for other installation options.

Memgraph Lab is running at `localhost:3000`. First, head over to the **Datasets** section to load a dataset. For example, choose the **Europe backpacking dataset**. 

<img src={require('../data/how-to-guides/nxalg-how-to-1.png').default} className={"imgBorder"}/>

Once the dataset is loaded, go to the **Query Modules** section and search for `nxalg` module. Click on the arrow next to the module name to **view module details**. 

<img src={require('../data/how-to-guides/nxalg-how-to-2.png').default} className={"imgBorder"}/>

The goal is to run the [`is_bipartite()`](/docs/mage/query-modules/python/nxalg#is_bipartite) procedure to check whether the graph is bipartite. 

<img src={require('../data/how-to-guides/nxalg-how-to-3.png').default} className={"imgBorder"}/>

Copy the query, go to the **Query Execution** tab and paste the query into the **Cypher Editor**. If you need the query, here it is:

```cypher 
CALL nxalg.is_bipartite() YIELD is_bipartite;
```

By clicking on the **Run Query** button, you can see that the Europe backpacking graph is not bipartite.

<img src={require('../data/how-to-guides/nxalg-how-to-4.png').default} className={"imgBorder"}/>

In the same way, you can run other procedures from the `nxalg` module and the procedures from the `graph_analyzer` module, which can be found in the **Query Modules** section.

## How to implement custom NetworkX module

Besides using already implemented modules, you can create your own module which utilizes the NetworkX library.
To learn how to implement a custom query module, head over to the [example of query module in Python](/docs/memgraph/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example#python-api).

Since Memgraph is integrated with NetworkX, you can import NetworkX library inside your Python code and start coding. In this guide, we will create a new query module which utilizes the NetworkX library with the help of Memgraph Lab.

First, we need to have a running Memgraph instance. The easiest way to do that is by using the Memgraph Docker image. To get the visual user interface Memgraph Lab along with it, use the Memgraph Platform Docker image. Here is the command:

```
docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 memgraph/memgraph-platform:latest
```

Check out the [installation guide](/docs/memgraph/installation) for other installation options. 

Memgraph Lab is available at `localhost:3000`. First, load a dataset in the **Datasets** section by searching and loading the Karate club friendship network dataset. 

<img src={require('../data/how-to-guides/nxalg-how-to-5.png').default} className={"imgBorder"}/>

Once the dataset is loaded, go to the **Query modules** section. The goal is to create a community detection algorithm that can partition a network into multiple communities with the help of the NetworkX library. Click on the **New Module** and type in the module name, e.g., `communities`. 

<img src={require('../data/how-to-guides/nxalg-how-to-6.png').default} className={"imgBorder"}/>

There is a sample Python code on the next screen, inside the code editor. Select it, delete it and paste the following code:

```python
import mgp
import networkx as nx
from networkx.algorithms import community
from mgp_networkx import MemgraphDiGraph


@mgp.read_proc
def detect(
    ctx: mgp.ProcCtx
    ) -> mgp.Record(communities=mgp.List[mgp.List[mgp.Vertex]]):

    networkxGraph = nx.DiGraph(MemgraphDiGraph(ctx=ctx))
    communities_generator = community.girvan_newman(networkxGraph)

    return mgp.Record(communities=[
        list(s) for s in next(communities_generator)])
```

Here is what the code looks like in the code editor:

<img src={require('../data/how-to-guides/nxalg-how-to-7.png').default} className={"imgBorder"}/>

Click **Save & close**, and head over to the **Query Execution** tab. Copy and paste the following query to the **Cypher Editor**: 

```cypher
CALL communities.detect()
YIELD communities
UNWIND communities AS community
RETURN community;
```

After you click on **Run Query**, you can see the result, which consists of two lists. Each list represents one community. 

<img src={require('../data/how-to-guides/nxalg-how-to-8.png').default} className={"imgBorder"}/>


## Where to next?

If you want to learn more about how to use Memgraph with NetworkX, check out the [**Memgraph for NetworkX developers resources**](https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=docs%2Bhowtoutilize&utm_content=resources). If you are using GQLAlchemy to connect to Memgraph, learn how to import NetworkX graph into Memgraph in the [**how-to guide**](/docs/gqlalchemy/how-to-guides/networkx) on GQLAlchemy documentation.
