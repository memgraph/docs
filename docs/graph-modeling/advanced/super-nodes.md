---
id: super-nodes
title: Super nodes
sidebar_label: Super nodes
---

A super node is a node with a high number of relationships. While they are not
common in the natural graphs, they show frequently in the graph theory. The
reason for that is that super nodes are connected to many other nodes and
therefore they exist on many paths in the graph. Examples of super nodes can be
found in networking (peer-to-peer systems) and social network celebrities
(celebrities with high number of followers). In some extreme situations, it’s
impossible to visualize the super nodes - all we would be able to see is a mess
of color with too many overlapping lines.

## How do super nodes happen?

They are the result of either of two things: they arise from the domain or they
arise depending on our modeling choices for the domain. From the domain: Densely
connected graphs, like social graphs of celebrities or big corporate bank
accounts. From modeling choices: properties that became nodes due to modeling
choice.

## Why are they an issue?

The biggest issue of supernodes is the rate of their growth. They branch out
fast and give us many different path options which can hurt the performance of
read functionality. Supernodes can slow down other reads and writes.

For example, if we want to find a path between two nodes that have a supernode
in between them, when our query hits said supernode, it will have to go through
all of the connections that supernode has to find the one that leads towards our
destination. The number of paths between two nodes will explode which will cause
the performance to suffer a lot.

Encountering a supernode on our path slows down both read and write operations.
If a query is filtering through multiple steps, any step could pass through
supernode and then have to scan every connection it has. When trying to add a
new relationship on the supernode, the database can slow down while calculating
the position that the r

## How to handle them?

The answer to that question depends on the domain we are working in. The goal is
to either help the database consider less data (relationships) while querying
the database or try to eliminate the super nodes in the first place. Here is an
overview of some techniques that can help us achieve that:

### Relationship directionality

Using the directed paths cuts down the amount of relationships queries consider.
Knowing the directionality of the relationship can drastically change the amount
of results query yields. This is useful in social network graphs when we want to
transverse paths between users or celebrities. Celebrities usually have a high
number (millions) of followers but they themselves follow a largely less amount
(maybe thousands) of people. Results for query `(:User)-[:FOLLOWS]-(:User {
name: "Taylor Swift" })` and  `(:User)<-[:FOLLOWS]-(:User { name: "Taylor Swift"
})` are different by 2 orders of magnitude. So, wherever possible, use the
directed paths to cut down the number of relationships your query has to
consider.

### Node and relationship segregation

Even though super nodes look and act like the rest of the graph, in reality,
they are special cases. They don’t always show up and are relatively small in
quantity (depending on the domain). Another approach to the problem is to treat
super nodes like that - special cases and segregate them in some way. We can use
node segregation and label super nodes differently. In the case of social
networks, we can use labels like PublicFigure or VerifiedUser to isolate super
nodes. Segregation like that makes traversals much easier and graphs are more
readable. Same thing can be applied to relationships. Instead of labeling the
nodes differently, we can label the relationships.

A drawback of this approach is that it only works in naturally densely connected
graphs like social networks where it's easy to segregate node types. This
doesn’t work if the label describes a category.

### Super node refactoring

Super node refactoring would mean breaking down a super node into multiple
nodes. This represents a very tough approach and should be used carefully and as
a last resort strategy. It causes a large amount of data redundancy. Breaking
down a node requires the appearance of equivalence relationships which have a
strategy for distributing information between the “node clones”. This solution
is not really scalable because we need to define a breaking point for the node
as super nodes attract more relationships over time.
