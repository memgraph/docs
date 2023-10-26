---
id: querying
title: Querying
sidebar_label: Querying
---


**Cypher** is the most widely adopted, fully-specified, and open query language
for property graph databases. It provides an intuitive way to work with property
graphs.

## Quick start

If you are new to the **Cypher** query language, take a look at what you can do
with a few simple commands. You will use our sandbox that we have already filled
with sample data. There is no need for you to install anything at this point.
Simply open Game of Thrones Deaths dataset on [**Memgraph
playground**](https://playground.memgraph.com/sandbox/game-of-thrones-deaths).
You will find some predefined queries there that will help you to get a glimpse
of what you can accomplish with Cypher.

:::info

Playground supports only read operations. If you'd like to modify the dataset,
you will need to [install and run Memgraph](../memgraph/installation) on your
computer.

:::

:::tip

Check out our free [**Cypher e-mail 
course**](https://memgraph.com/learn-cypher-query-language) and learn the Cypher
query language in 10 days.

:::

## What is Cypher?

Cypher is a declarative query language specifically designed to handle querying
graph data efficiently. With Cypher, you express what to retrieve but not how to
retrieve it. This allows you to focus on the problem domain instead of worrying
about the syntax.

Cypher was designed to be easy to learn but very powerful when it comes to graph
analytics. This means that you can use Cypher to write complex queries
relatively easily. 

You can think of Cypher as mapping English language sentence structure to
patterns in a graph. In most cases, the nouns are nodes of the graph, the verbs
are the relationships in the graph, and the adjectives and adverbs are the
properties.

In the following image, you can see one such example. We have a graph that
consists of two nodes and one relationship:

![](data/cypher-query-language/graph-example.png)

We can interpret this graph by using the said method of mapping patterns to
language structures: 

```nocopy
A person named Harry is married to a person named Anna.
```

## Cypher styling and syntax

Same as other languages, Cypher has its own set of syntax rules and styling
recommendations. And as always, it is sensible to add comments to code as you
write it.

### Comments

To specify a comment in Cypher, place the characters `//` before the line you
want to be a comment:

```cypher
// This is a Cypher comment
CREATE (p1:Person {name: 'Harry'}), (p2:Person  {name: 'Anna'})
CREATE (p1)-[r:MARRIED_TO]->(p2)
RETURN r;
```

### Naming convention

**Node labels** should be written using CamelCase and start with an upper-case
letter. Node labels are case-sensitive. 

```nocopy
(:Country)
(:City)
(:CapitalCity)
```

**Property keys**, **variables**, **parameters**, **aliases**, and **functions**
are camelCase and begin with a lower-case letter. These components are
case-sensitive. 

```cypher
dateOfBirth // Property key
largestCountry // Variable
size() // Function
countryOne // Alias
```

**Relationship types** are styled upper-case and use the underscore character
`_` to separate multiple words. Relationship types are case-sensitive and you
cannot use the `-` character in a relationship type.

```cypher
[:LIVES_IN]
(:BORDERS_WITH)
```

Aside from clauses, there is a number of **keywords** that should be styled with
capital letters even though they are not case sensitive. These include:
`DISTINCT`, `IN`, `STARTS WITH`, `CONTAINS`, `NOT`, `AND`, `OR` and `AS`.

```cypher
MATCH (c:Country)
WHERE c.name CONTAINS 'United' AND c.population > 9000000
RETURN c AS Country;
```

### Indentations and line breaks

Sometimes it's helpful to separate new clauses with an indent. Even though they
are in a new line, subqueries should be indented to ensure readability. If there
are multiple subqueries, they can be further grouped with curly brackets.

```cypher
//Indent 2 spaces on lines with ON CREATE or ON MATCH subqueries
MATCH (p:Person {name: 'Helga'})
MERGE (c:Country {name: 'UK'})
MERGE (p)-[l:LIVES_IN]->(c)
  ON CREATE SET l.movedIn = date({year: 2020})
  ON MATCH SET l.modified = date()
RETURN p, l, c;

```

An exception to this rule would be a one-line subquery where you don't need to
use a new line or an indent.

### Quotes

When it comes to quotes, a simple rule is to use whichever provides the fewest
escaped characters in the string. If escaped characters are not needed, or their
number is the same for single and double quotes, then single quotes should be
favored. 

```cypher
// Bad syntax
RETURN 'Memgraph\'s mission is: ', "A very famous quote is: \"Astra inclinant, sed non obligant.\""

// Recommended syntax
RETURN "Memgraph's mission is: ", 'A very famous quote is: "Astra inclinant, sed non obligant."'
```
