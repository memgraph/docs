---
id: relationship-modeling
title: Relationship modeling
sidebar_label: Relationship modeling
---

One of the fundamental components of graph databases, and one which they heavily
rely on, are relationships. When describing the domain, we’ve come to the
conclusion that relationships are represented by verbs in written requirements.
But looking at them just as verbs that connect two nouns is an
oversimplification. The true purpose of relationships is the normalization of
data.

## Data normalization

What is data normalization? It’s a process of reducing and eliminating data
redundancy mainly found in relational databases. It is difficult to store and
manage data in a relational database that stores the same information in several
different places. In graph databases, data normalization happens when we decide
whether the attribute can be considered as property or if it will be modeled as
a relationship.

Each relationship has a **domain** and a **range**. The domain specifies where
the relationship is coming from while the range specifies where it's ending. In
terms of mathematical theory, we think of a relationship as a function that maps
nodes together. Considering that, there are several different types of
relationships.

### Functional

Functional relationships have a range of a single node. An example of a
functional relationship would be `[:City]-[:IS_LOCATED_IN]->[:Country]`, because
cities cannot be located in multiple countries.

### Transitive

Transitivity tells us that if A is connected with B and B is connected with C,
then A and C are connected as well. The easiest example of a transitive
relationship is a family tree. If we modeled a family tree as a graph,
relationships between each family member would simply be `IS_RELATED_TO`. My
grandmother is related to my mother. My mother is related to me. Therefore, I’m
related to my grandmother.

### Reflexive

A reflexive relationship means that a node has a connection with itself.
Relationships like that are rare in real-world graphs and are mostly found in
graph theory. An example of a reflexive relationship is `IS_EQUAL_TO`. Given
that we cannot have multiple node types with the same label, the equality
relationship would point to the same node.

### Symmetric

Symmetric relationships imply that the relationship is true in both directions.
This rule of symmetry cannot be true for relationships that symbolize possession
or represent a hierarchy.  For example, `[:City]-[:IS_LOCATED_IN]->[:Country]`
is an asymmetrical relationship because a city is located in a country, but a
country cannot be located in a city. An example of a symmetric relationship
would be `[:Person]-[:KNOWS]->[:Person]`.  If person A knows person B, person B
surely knows person A. The direction of the relationship is irrelevant.

### Composition

If a relationship is of the type `HAS_A` (or a similar syntax), it expresses the
possession of an attribute. In most cases, those relationships show there are
multiple nodes connected to the source. This principle is tightly coupled with
the aforementioned decision whether something is a property or a relationship.
When we are transforming a property into a relationship, it’ll most likely be of
the `HAS_A` type. A `Person` node would, for example, have a `Job` property. If
we wanted to transform that property into a relationship, we would connect the
`Person` node to a `Job` node via a composition relationship with the type
`HAS_A`.

### Inheritance

Inheritance relationships are symbolized with the type `IS_A` and they express a
child-parent relationship. This kind of relationship is not very common because
it is usually handled with labels. If a person is a student, then it would be
easier to model the node with two labels `(:Person:Student { name: "Anna" })`
than with an inheritance relationship `(:Person { name: "Anna"
})-[:IS_A]->(:Student)`. When you are not sure if something needs to be a
relationship or a property, think about the following. If we need to focus on
composition, we will model a relationship and if inheritance is more important,
we will model a property.
