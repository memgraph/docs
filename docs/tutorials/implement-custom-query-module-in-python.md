---
id: implement-custom-query-module-in-python
title: Implement a custom query module in Python
sidebar_label: Implement a custom query module in Python
---

This tutorial will give you a basic idea how to develop a custom query module in
Python with Memgraph Lab and use it on a dataset. 

In short, query modules allow you to expand the Cypher query module with various
procedures. Procedures can be written in Python or C languages. Our MAGE library
has various modules dealing with complex graph algorithms, but you can implement
your own procedures gathered in query modules to optimise your queries. If you
need more information about what query modules are, please read our [reference
guide on query modules](/reference-guide/query-modules/overview.md).

## Prerequisites 

In order to start developing a custom query you will need:
* [Memgraph Platform](/installation/overview.md)
* Visual Studio Code or a code editor of your choice

## Data model

For this tutorial we will use the Europe backpacking data model with the data
from The European Backpacker Index (2018). The data set contains information
about 56 cities from 36 European countries, such as what cities are close, what
countries border each other, various pricing and recommended accommodation.

![Backpacking](../data/backpacking_metagraph.png)

<details>
  <summary>Detailed explanation of the data model</summary>

Nodes:

* `Country` - country with the following properties (example of the value):
    *  `id` - country's id (`5`)
    *  `name` - country's name (`"Spain"`)
    
* `City` - city with the following properties (example of the value):
    * `name` - city's name (`"Barcelona"`)
    * `country` - country's name (`"Spain"`)
    * `cheapest_hostel` - the cheapest hostel in the city (`"Amistat Beach Hostel Barcelona"`)
    * `hostel_url` - URL of the cheapest hostel in the city (`"https://www.priceoftravel.com/ABarcelonaHostel"`)
    * `rank` - the cheapest hostel's rank according to The European Backpacker Index (`38`)
    * `local_currency` - the name of the local currency (`"Euro"`)
    * `local_currency_code` - ISO3 code of the local currency (`"EUR"`)
    * `total_USD` - total daily cost including accommodation, attractions, meals/drinks and transportation in USD (`80.104`)
    * `cost_per_night_USD` - daily cost of the cheapest hostel per night in USD (`23.684`)
    * `attractions_USD` - daily cost of the attractions in USD (`16.12`)
    * `meals_USD` - daily cost of the meals in USD (`23.808`)
    * `drinks_USD` - daily cost of the drinks in USD (`11.16`)
    * `transportation_USD` - daily cost of the transportation in USD (`5.332`)
  
Relationships:

* `:Inside` - connects `City` node to the `Country` node if the city is within the country
* `:CloseTo` - connects two `City` nodes if cities are from the same or neighboring countries
  * `eu_border` - relationship property that indicates whether the EU border needs to be crossed to reach the other city (`true`)
* `:Borders` - connects two `Country` nodes if they are neighboring countries. 
  * `eu_border` - relationship property that indicates whether the EU border needs to be crossed to reach the other country (`true`)
  
</details>

In this tutorial we will mostly focus on the two nodes, `:City` and `:Country`,
and their `:Inside` relationship.

## Preparing Memgraph

Let's open Memgraph Lab where we will import the dataset, write and use the
procedures from our query module.

If you have successfully installed Memgraph Platform, you should be able to open
Memgraph Lab in browser at `http://localhost:3000/`. Navigate to the **Datasets**
tab, click on the **Europe backpacking** dataset to import it into Memgraph. 

Go to the **Query Execution** tab and try running a test query that will show the
city Vienna and all its relationships:

```Cypher
MATCH p=(:City {name: "Vienna"})-[]-() RETURN (p);
```

You can click on the `:City` nodes to check the nodes' properties and get better
acquainted with the dataset. We will come back to this tab every time we want to
test our query modules in making.

Now navigate to the **Query Modules** tab and click on the **New Module** and
give the new module name `backpacking` and create the module. Memgraph Lab
creates sample procedures to kick off your developing. But before we start,
let's decide how we will expand the query language.

## Goals

Before we start to write a query module and procedures within, we need goals.
How do we want to expand the query language?

**Goal 1**
We want to get a total cost of accommodation expenses for one night at the
cheapest hostel in a given city, based on the number of adults and children that
will be staying in it.

**Goal 2**
We also want to expand the data model by a given country and city. The new `City`
node should get properties that it shares with the other cities in that country,
such as `country`, `local_currency` and `local_currency_code`. 

## Python API

Python API is defined in the `mgp` module you can find in the Memgraph
installation directory `/usr/lib/memgraph/python_support`. If you are using
Docker, you can copy the file from the Docker container into your computer for a
faster access. 

<details>
  <summary>Copy the `mgp` module from a Docker container</summary>
  
  **1.** If it's not running, start your Memgraph instance using Docker.

  **2.** Open a new terminal and find the `CONTAINER ID` of the Memgraph Docker
  container:

  ```
  docker ps
  ```

  **3.** Position yourself in the local directory where you want to copy the file.

  **4.** Copy a file from the container to your current directory with the
  following command:

  ```
  docker cp <CONTAINER ID>:/usr/lib/memgraph/python_support/mgp.py mgp.py
  ```
  Be sure to enter the correct CONTAINER ID.

  Example of a command when copying the `mgp.py` file to the user's desktop:

  ```
  C:\Users\Vlasta\Desktop>docker cp 63e35:/usr/lib/memgraph/python_support/mgp.py mgp.py
  ``` 

</details>

In essence, Python API is a wrapper around the C API. If you look at row 15
of the new module we've created in Memgraph Lab, you can see you need to
import the `mgp` module at the beginning of every query module.

Below the `import mgp`, in line 17, you can see a `@read_proc` decorator. Python
API defines `@read_proc`, `@write_proc` and `@transformation_proc` decorators.
`@read_proc` decorator handles read-only procedures, the `@write_proc` decorator
handles procedures that also write in the database, and the
`@transformation_proc` decorator handles data coming from streams.

If you look at our two goals, to get the total cost of accommodation,
Memgraph only needs to read from the database to get the value of the
`cost_per_night_USD`, while to create new nodes it also needs to write in the
database. 

Feel free to examine the examples and tips available in this template, and when
you are ready to continue with the tutorial, clear the file so we start writing
our code from line 1. 

We'll start with the `@read_proc` decorator to achieve the first goal, then
we'll dive into a bit more complicated second goal and its `@write_proc`.

## Read procedure

As we established in the previous chapter, first we need to import the `mgp`
module and then use the `@read_proc` decorator. Then we will define the
procedure by giving it a name and signature, that is, what arguments it
needs to receive and what values it will return. 

The goal of this procedure is to get a total cost of accommodation expenses for
one night at the cheapest hostel in a given city, based on the number of adults
and children that will be staying in it.

So, let's name the procedure `total_cost`. The procedure needs to receive the
following arguments in order to calculate the total cost of accommodation - the
whole graph (all the nodes and relationships), the name of the city we are
interested in, the number of adults stay at the accommodation, and finally, the
number of children. The graph is passed to the procedure using the `ProcCtx`
instance. The name of the city should be a string value, the number of adults an
integer, and the number of children also an integer. Because customers can
travel with or without children, we will define the children variable as
optional by giving it a possibility to be `NULL` and setting it to default value
of `None`.

Output values are defined as arguments of the `Record` class. We want the
function to return the total cost per night as a float value, and we'll enable
the value to be NULL so that the procedure doesn't return an error if the city
doesn't have the cost of accommodation as a property and thus can't calculate
the total cost of accommodation. 

After defining the name and arguments, the code should look like this:

```
import mgp

@mgp.read_proc
def total_costs(context: mgp.ProcCtx,
               city: mgp.Any[str],
               adults: mgp.Number[int],
               children: mgp.Nullable[int] = None,
               ) -> mgp.Record(Total_cost_per_night = mgp.Nullable[float]):
```

Now we want to go through all the nodes (vertices) in our graph and find only
those nodes that have both:
1.  the property `name` with the same value as the variable `city`
2.  the property `cost_pre_night_USD` with a float value.

```
import mgp

@mgp.read_proc
def total_costs(context: mgp.ProcCtx,
              city: mgp.Any[str],
              adults: mgp.Number[int],
              children: mgp.Nullable[int] = None,
              ) -> mgp.Record(Total_cost_per_night = mgp.Nullable[float]):

  for vertex in context.graph.vertices:
    if vertex.properties["name"] == city and isinstance(vertex.properties.get("cost_per_night_USD"),float):
```

When we find those nodes, we will save the cost of accommodation per night in a
variable `cost_per_night` and multiply it with the number of adults to get the
`total_cost`.

```
import mgp

@mgp.read_proc
def total_costs(context: mgp.ProcCtx,
               city: mgp.Any[str],
               adults: mgp.Number[int],
               children: mgp.Nullable[int] = None,
               ) -> mgp.Record(Total_cost_per_night = mgp.Nullable[float]):

  for vertex in context.graph.vertices:
    if vertex.properties["name"] == city and isinstance(vertex.properties.get("cost_per_night_USD"),float):
      cost_per_night = vertex.properties.get("cost_per_night_USD")
      total_cost = cost_per_night * adults 
```

Then we need to check if the number of children was given as an argument when
calling the procedure in query, and if it was, add half the cost of
accommodation for each child. At the end we return the total cost of
accommodation per night.

```
import mgp

@mgp.read_proc
def total_costs(context: mgp.ProcCtx,
               city: mgp.Any[str],
               adults: mgp.Number[int],
               children: mgp.Nullable[int] = None,
               ) -> mgp.Record(Total_cost_per_night = mgp.Nullable[float]):

  for vertex in context.graph.vertices:
    if vertex.properties["name"] == city and isinstance(vertex.properties.get("cost_per_night_USD"),float):
      cost_per_night = vertex.properties.get("cost_per_night_USD")
      total_cost = cost_per_night * adults
      if children is not None:
        total_cost += cost_per_night / 2 * children
      return mgp.Record(Total_cost_per_night = total_cost)
```
If none of the nodes have both the property `name` with the same value as the
variable `city` nor the property `cost_pre_night_USD` with a float value, we
will set the value of `Total_cost_per_night` to `None` (that is, `NULL`) in
order to prevent the procedure generating an error. 

The finished procedure now looks like this:

```
import mgp

@mgp.read_proc
def total_costs(context: mgp.ProcCtx,
              city: mgp.Any[str],
              adults: mgp.Number[int],
              children: mgp.Nullable[int] = None,
              ) -> mgp.Record(
                              Total_cost_per_night = mgp.Nullable[float]):

  for vertex in context.graph.vertices:
    if vertex.properties["name"] == city and isinstance(vertex.properties.get("cost_per_night_USD"),float):
      cost_per_night = vertex.properties.get("cost_per_night_USD")
      total_cost = cost_per_night * adults
      if children is not None:
        total_cost += cost_per_night / 2 * children
      return mgp.Record(Total_cost_per_night = total_cost)

  return mgp.Record(Total_cost_per_night = None)
```

Save the query module, switch to **Query Execution** tab and run the following
queries, or any others you want to try out:

```
CALL backpacking.total_cost("Zagreb", 2, 3) YIELD *;
-> Total_cost_per_night = 32.129999999999995
```

```
CALL backpacking.total_cost("Vienna", 2) YIELD *;
-> Total_cost_per_night = 45.012
```

```
CALL backpacking.total_cost("Whatever", 2) YIELD *;
-> Total_cost_per_night = null
```

 