---
id: graph-vs-relational
title: Relational databases vs Graph databases
sidebar_label: RDBMS vs Graph database
---

![Decision](https://hackmd.io/_uploads/SJsax9bWO.png)

Ever since the 1980s, relational databases have ruled the data storage world
which is not suprising given how well they work when data can be organized into
tables, columns, and rows. This is especially true when queries don't have to be
very join-intensive. In relational databases, the connections within the data
are in the background. The problem is that there are rich, connected domains
that relational databases aren’t so well equipped to deal with. Connections
between tables are structured at a higher level - the table definition. In
recent years, a strong contender appeared that is capable of dealing with richly
connected data, the so called graph database.

Over the course of this article, we will go through the pros and cons of both
relational and graph databases so you can choose which one suites your needs
more.

## The case for graph databases

The key difference between a graph and a relational database is that relational
databases work with sets while graph databases work with paths. Graph databases
store relationships at the individual record level and provide index-free
adjacency. This means that graph transversals can be performed with no index
lookups leading to a much better performance. When trying to emulate path
operations in relational databases, we need to recursively join multiple tables
leading to a growing latency in queries. With the growth of queries that deal
with multiple joins, memory usage grows massively as well.

Graph databases are more flexible and they allow adding new nodes and
relationships without compromising the existing structure. For relational
databases, a very much outlined database is needed for quick information
recovery. Their structure is rigid and predefined, established at the time of
database creation. Any future data should try to be anticipated as much as
possible so that the database will be able to accommodate the new requirements.

Relational databases use primary and foreign keys to maintain integrity and
connectivity. In working with relational models, foreign key constraints should
be considered when retrieving relationships, causing additional overhead.

Graph databases are much faster than relational databases for connected data.
Query latency in graph databases is proportional to how much of the graph you
choose to explore in a query and not to the amount of data stored. Graph
databases make modeling and querying easier and much more pleasant, meaning
faster development.

## Pros and cons overview


### Advantages


| Relational databases                                      | Graph databases |
| --------------------------------------------------------- | --------------- |
|Data structure - the table format is simple to understand  |Performance      |
|Multi-User access - mature management systems allow multiple database users to access data simultaneously                                         |Update data in     real-time - graph databases can perform big data updates faster|
|Transactions - optimized for transactional operations          |Flexibility - the graph schema can be changes more easily |

### Disadvantages


| Relational databases | Graph databases|
| -------- | -------- |
|Cost - costly setup and maintenance | Less mature transaction handling|
|Complex images, numbers, or multimedia items cannot be stored|Unrelated data - if data is poorly connected, graph bases are not the best fit |


### Limitations

|Relational databases                                    |Graph databases |
| ------------------------------------------------------ | -------------- |
| Rigidity - predefined and heavyweight change structure | Absence of a shared standard |

## Summary

When does it make sense to use a graph database rather than a relational
database?
1. If the data contains a number of many-to-many relationships.
2. If relationships between data change often.
3. If data has unstructured, complex but non-hierachical relationships.

Both database types have strong points to determine whether either one is more
suitable for the domain we are modeling. Relational databases are better for
highly structured and predetermined models. But if our domain relies on highly
connected data and lots of relationships, a graph model is a must. Relational
models can often be transformed into graph models and vice versa. This is
particularly useful as new information about the domain becomes known or changes
in requirements cause the model to change. Graph databases can help improve or
even dissolve performance and scaling problems. There is no single database
model that is best at everything, so it is important to analyze the model before
deciding which model will be more suited for the domain.
