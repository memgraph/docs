---
id: cypher-query-language
title: Cypher query language
sidebar_label: Cypher query language
---

:::info

This page will serve as an introduction to Cypher.

The content on this page is just a place holder so that you can see what is
proposed structure.

:::

## What is Cypher?

Cypher is a declarative query language specifically designed to efficiently
handle querying graph data. With Cypher you expresses what to retrieve, but not
how to retrieve it. This allows you to focus on the problem domain instead of
having to worry about the syntax.

Cypher was designed to be easy to learn but very powerful when it comes to graph
analytics. This mean that complex queries can relatively easily be written with
Cypher. Being a declarative language, Cypher expresses what to retrieve and not
how to retrieve it.

You can think of Cypher as mapping English language sentence structure to
patterns in a graph. For example, the nouns are nodes of the graph, the verbs
are the relationships in the graph, and the adjectives and adverbs are the
properties.

On the following image you can see one such example. We have a graph that
consists of two nodes and one relationship

![](data/cypher-query-language/graph-example.png)

We can interpret this graph by using the said method of mapping patterns to language
structures: 

> *A person named Harry is married to a person named Anna.*
