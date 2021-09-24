---
id: data-normalization
title: Data normalization for graph databases
sidebar_label: Data normalization
---

Data normalization is a process of eliminating and reducing data redundancy
usually found in relational databases. The goal of normalization is to make sure
that relational schema are easy to modify, extend and supportive of various
query patterns. Basic idea of normalization is to break up tables with duplicate
information.

For graph databases, normalization is closely related to the decision whether we
will model an attribute as a property or a relationship. But that sole decision
doesn’t guarantee us a fully optimized graph model.

To achieve an optimized graph, we can set up a set of rules that will transform
the schema without losing any information in the process. By applying a
combination of these rules, you can simplify the semantics and improve the
usability of your graph model.

### Rule 1: Renaming properties and labels

Names for properties and labels should be natural and logical. Any component of
the graph schema can be renamed, so long as the new name doesn’t refer to an
already existing component.

![Renaming properties and labels](https://hackmd.io/_uploads/SyVHWczzu.jpg)

### Rule 2: Reversing relationship direction

Any relationship can be reversed as long as it is either a self loop or there is
no relationship type with the same label in the opposite direction. If we are
reversing the relationship, we need to reverse the cardinality type of a
relationship. This is most commonly used on inheritance type of relationships.

Following illustration showcases rules 1 and 2. When the direction of the
 relationship is reversed, it is natural to rename the label on it. In our
 example, `Parent` relationship gets reversed and then renamed to `Child`. Note
 that the applying of rules can be done in different order - sometimes renaming
 the label results in changing the direction of the relationship. ![Reversing
 relationship direction](https://hackmd.io/_uploads/SJsbWqzfd.jpg)

### Rule 3: Relationship promotion

A relationship can be promoted to a node by adding two out-going relationships
to the end-points.

### Rule 4: Property promotion

Any group of properties can be promoted to a node with those properties. The new
node is then connected to all of the nodes that include that property group.
This is most commonly used on properties that are repeated multiple times but
are not specific enough.

Rules 3 and 4 are closely related to the aforementioned property or relationship
decision before.

![Property and relationship promotion](https://hackmd.io/_uploads/HkQ0x5fMd.jpg)

### Rule 5: Specialisation and generalisation

Any relationship or node can be divided into two disjoint components of the same
type. Specialisation and generalisation are two reverse operations. If we want a
more detailed schema, with diverse node or relationship types, we will design
more specialized components.   However, there are instances where differences
are very minor that there’s no need for specialized components so we connect
those components together to generalize them.

This rule is useful for increasing or reducing the complexity of the schema. It
is better to use specialisation rules because that will allow more versatile
graph schema and will embrace different behavior in terms of properties and
adjacency.

![Specialisation and generalisation](https://hackmd.io/_uploads/rJAhecGMd.jpg)

### Rule 6: Property expansion

A property of a node that represents a list of values can be moved into separate
node types containing each value. In directed graphs, newly made nodes will have
in-going relationships from the nodes we extracted values from. Even though we
support lists as valid types for properties, the choice of expansion is on the
designer.

Property expansion rule is tied to specialization and generalization rule. If
the list of properties represent values that can be further used in queries , we
should take the list apart and make the individual nodes out of listed values.

![Property expansion](https://hackmd.io/_uploads/SkDFecff_.jpg)

## Summary

A graph model designer can use these rules to refine their graph schema not only
to perform better, but also to look better. They can help improve the
performance, usability and efficiency of the model itself. In that sense, a
designer can achieve the original goals for normalization - designing easily
modified and extendable schemas which are informative to users and support
various query patterns.
