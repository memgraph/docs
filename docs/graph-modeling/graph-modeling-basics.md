---
id: graph-modeling-basics
title: Graph modeling basics
sidebar_label: Graph modeling basics
---

## What is a graph database?

A **graph database** uses mathematical graph structures to represent and store
data. Graph databases are designed to treat the relationships between data as
equally important as the data itself. Those relationships allow stored data to
be linked together directly and, in many cases, retrieved with one operation.

In this guide, we will describe all the components of a graph database through
the example of students and professors in a university. The basic concepts are
that students attend courses while professors teach those same courses to the
students.

## Graph components

There are four components that every graph consists of: **nodes**, **labels**,
**relationships**, and **properties**. While only nodes and relationships are
fundamental components that need to be utilized, labels and properties are often
included as well because of the added functionalities they offer.

### Nodes

Nodes often represent entities in the graph. They hold specific data in the form
of properties represented as key-value pairs. To assign a role to each node,
nodes can be tagged with labels. When working with the model domain, nodes can
be easily identified by searching for nouns that represent entities with a
unique conceptual identity.

As you can see in the example further down, in our university model, a typical
node could represent a university student, a professor, or a course.

![Nodes](https://hackmd.io/_uploads/rJI5Y5fb_.jpg)


### Labels

Labels are used to shape the domain by **grouping nodes into sets or
categories**. Nodes with the same label belong to the same set. This way of
grouping nodes together simplifies database operations significantly. We no
longer need to select the whole graph but only the set of nodes we are
interested in. Nodes can also have multiple labels attached to them. Just as
nodes can be easily identified as nouns in the domain description, you can
identify labels by generic nouns or groups of people, places, or things.

The node in the example below demonstrates how an entity can belong to multiple
groups. A university student can at the same time have the label `Person` and
`Student`.


![Node Label](https://hackmd.io/_uploads/Sy3Q99zZd.jpg)


### Relationships

Relationships (or edges) are the lines that connect nodes to each other and
represent a defined connection between them. Every relationship has a source
node and a target node that represent in which direction the relationship works.
If this direction is important, the relationship is considered directed while
otherwise, it's undirected. Relationships can also store data in the form of
**properties**, just as nodes. In most cases, relationships store quantitative
properties such as weights, costs, distances, ratings, etc.

In our example, the relationship between a `Student` node and a `Subject` node
could be of the type `ATTENDS`, while the relationship between `Professor` and
`Subject` is represented by the type `TEACHES`.


![Node_label_relationship_simple](https://hackmd.io/_uploads/Hkf65czbO.jpg)


### Properties

Properties are key-value pairs of data stored on nodes or on relationships. They
allow you to store relevant data about the node or relationship with the entity
it describes. Properties support most standard data types like integers,
strings, booleans... and you can find a complete table in our [storage
guide](https://docs.memgraph.com/memgraph/concepts/storage/#properties). The
flexibility and simplicity of properties allow users to easily review the data
structure and update it according to their needs. Properties are also very easy
to spot. One common way would be asking yourself questions about the nodes and
relationships in your model. What information will you need in the future when
working with the graph?

In our example, the most relevant questions and their corresponding properties
would be:
* What are the names of the students, professors, and courses? - `name`
* How old are the students and the professors? - `dateOfBirth`
* What year of studies does the student attend? - `yearOfStudies`
* How to get in touch with the professor? - `email`

![Node-label-relationship-property](https://hackmd.io/_uploads/ryJ7ocMZ_.jpg)



## Use cases

Graph databases have a wide range of functionalities and therefore a numerous
variety of possible use cases. They offer agility, scalability, and performance
for managing vast amounts of dynamic and growing data.

Some of the most relevant use cases include:


*  *Social Networks Graphs* - the most common use case for a graph database,
   typical for relationship analysis between the users, community detection, or
   finding the influence of people in the network.
*  *Fraud Detection* - the scalability and agility of graph databases help to
   avoid heavy and slow queries which are causing the late detection of frauds.
*  *Network Analysis* - network management revolves around complex
   interdependencies and high connectivity.
*  *Graph Theory* - graph databases are built on the principles of graph theory
   and as such can be used to showcase and solve common problems in the area.
*  *Recommendations Systems* - real-time, sophisticated recommendation engines
   to personalize products, content, and services.
*  *Data Management* - a way to manage “data silos”, keeping the track of data
   and its usage.
*  *Telecommunications* - telecommunications are all about connections users,
   network components, devices... which makes them suitable for graph modeling.
*  *Supply Chain Management* - optimization of product flow, uncover
   vulnerabilities, and boost the overall resilience of the supply chain.

## Where to next?
While this guide only provides you a basic overview of graph database modeling,
you can take a look at the more detailed [Designing a graph database schema](/)
guide to learn more.