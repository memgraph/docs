---
id: property-graph-model
title: The property graph model
sidebar_label: Property graph model
---

Graph data modeling is the process in which a user describes an arbitrary domain
as a connected graph of nodes and relationships with properties and labels. In
the graph world, the “property graph” style of graphing makes it possible to
rethink the representation of data models. This kind of data model is very close
to what people draw on whiteboards. They are very easy to visualize and easily
follow the thought flow.

## Mental maps

Data models like this are very close to what people draw on whiteboards. From
trying to explain concepts while holding the presentation to complex board
pins-and-red-string connections seen in detective movies, we are trying to
explain the connection between data. Connections/relationships are the most
essential part of graph databases. Because we are trying to explain them on a
whiteboard sketch, it’s easy to transfer those sketches into graph schemes. This
is what makes graph databases easy to visualize - connection to common real-life
model and application.

![Whiteboard](https://hackmd.io/_uploads/HkWNmTmz_.png)

## Describing a domain

Graph modeling starts from the domain itself. Domains come described in the form
of requirements written down by clients or during the interviews. The graph
structure is hidden within those requirements. The first step when modeling the
database is to identify key entities - nodes, labels, relationships, and
properties.

Let’s imagine the next scenario:
> Cities London and Paris are connected via flights. They are also connected by
> road. Distance between London and Paris is 340 km if we fly between and 455 km
> by road. London is located in country England, as are Liverpool and Leicester.
> Those cities are connected only by road and the distance between them is 190
> km. Paris is located in France, as are Lyon and Nice. Lyon and Nice are
> connected via flight and the distance is 290 km.

We are thrown a lot of information within this scenario. We need to take the
scenario into pieces and then connect those pieces together. Extracting data is
really simple: we need to identify nouns and verbs for the sentences.  Nouns
(cities, countries) represent nodes or labels, and verbs (are connected, is
located) represent relationships. Specific information, like London or Paris,
are properties of either nodes or relationships. Now that we’ve identified our
main entities, it is easy to piece them together to form a graph. We could take
a step back and, instead of jumping right into modeling the graph, draw a
whiteboard sketch.

**[IMAGE: The text is very hard to read.]** ![Describing a
domain](https://hackmd.io/_uploads/H1WwuY30w.jpg)


## Property or Relationship
Sometimes, there are exceptions to the rules. One of the decisions that could be
encountered is whether to model something as a property or as a relationship.
The main idea behind deciding whether something is a property or a relationship
is limiting the search as early as possible. Looping through the properties when
trying to search particular data stored in them can greatly increase memory
usage and take a toll on performance. It makes sense to create new nodes (and
relationships as a consequence)  if data stored in properties is considered
shared.
It is best to show it on an example: Let’s model the data on the Product node.
Products in stores can be fitted in different categories. If we wanted to find
out which categories Product falls into, we would need to look up what’s listed
in the category property.

`MATCH (p:Product {name: ”Milk” }) RETURN p.category;`

But it is common knowledge that certain products share the category. If we
wanted to find out which Product nodes share the same categories as Milk does,
we would need a more complex query, looping through each category in the
property array. This option would make performance take a toll, which is what we
are trying to avoid.

So, if we model our categories as separate nodes and create a relationship
between them, our model would get more complicated.

**[IMAGE: The text is hard to read.]** ![Property or
Relationship](https://hackmd.io/_uploads/H1B0rDnCP.jpg)


Choosing between setting a value as a property or a separate entity depends on
the type of analysis we want to make on the dataset. If the data serves only as
information and it’s not used in any type of analysis, the first approach can be
used. But if the data is used to find common grounds or in group analysis, then
the second approach will improve performance for those query types.
