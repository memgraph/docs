---
id: set-up-triggers
title: How to set up triggers
sidebar_label: Set up triggers
---

Memgraph supports **database triggers** that can be executed if a particular
type of event occurs. Events are related to changes in data, such as created,
updated, and deleted nodes or relationships. 

[![Related - Reference Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/triggers.md) 


## How to create a trigger?

You can create a trigger by executing Cypher clauses. Creating a trigger will
ensure that some procedural code is executed on a certain type of event. All
created triggers are persisted on the disk, which means they will be active on
database reruns and no information is ever lost.

### Trigger execution upon node creation

Node creation is the most common event your Memgraph database can react to. For
example, you need to update some values on a created node. If you need a trigger
after the node (vertex) has been created, you can set up the following trigger: 

```cypher
CREATE TRIGGER createVertex
ON () CREATE AFTER COMMIT EXECUTE
UNWIND createdVertices AS createdVertex
SET createdVertex.created = timestamp()
```

Here the trigger's name is `createdVertex` and should be unique. Cypher clause
`ON CREATE` defines on what event will trigger be executed. `AFTER COMMIT
EXECUTE` means the trigger will be executed after changes have been committed to
the database. For the sake of ease of use, triggers have a set of **predefined
variables**. One of them is `createdVertices`, a list of all created nodes
(vertices). In this example, the list is unwound by a Cypher clause `UNWIND`. To
find a complete list of predefined variables, supported operations, and
configuration details, look at triggers [reference
guide](/reference-guide/triggers.md).

In this trigger, a node is getting a timestamp upon creation via the `SET
createdVertex.created = timestamp()` Cypher clause.

### Trigger execution upon node update

Node property updates are common in graphs, in order to react to them, you can
create a trigger for that type of event: 

```cypher
CREATE TRIGGER updateVertex
ON () UPDATE AFTER COMMIT EXECUTE
UNWIND updatedVertices AS updatedVertex
SET updatedVertex.updated_at = timestamp()

```
The trigger for node updates is almost the same as node creation. Notice
different predefined variable `updatedVertices` and `ON UPDATE` Cypher clause.

In this trigger, a node is getting a new updated timestamp via `SET
updatedVertex.updated_at = timestamp()` Cypher clause.

### Trigger execution upon node or relationship creation

You can also set up a trigger for multiple events, such as node or relationship
creation. It doesn't matter what will be created, a node or relationship, but
the event will execute the trigger. A sample query for that kind of trigger: 

```cypher
CREATE TRIGGER exampleTrigger
ON CREATE AFTER COMMIT EXECUTE
UNWIND createdObjects AS createdObject
WITH CASE
        WHEN createdObject.vertex IS NOT null THEN createdObject.vertex
        WHEN createdObject.edge IS NOT null THEN createdObject.edge
    END AS object
SET object.created_at = timestamp();
```

A predefined variable `createdObjects` is a list of dictionaries. Each
dictionary contains information about the created object, which can be either a
node or a relationship. The object's key `event_type` is set based on the
dictionary and information within it, and the value of the key `vertex` or `edge`
(depending on the type of object) is set to that created object.

In this trigger, the node or relationships property `created_at` is set to the
current timestamp value via `SET object.created_at = timestamp();` Cypher
clause. 

## How to create a trigger for Python query module? 
If you want a trigger to be activated by executing code from a Python query
module, you can call the query module from the trigger. In the example below,
the trigger will call `query_module.new_edge(edge)` each time a new relationship
(edge) is created:

```cypher
CREATE TRIGGER newEdge
ON CREATE BEFORE COMMIT EXECUTE
UNWIND createdEdges AS edge
CALL query_module.new_edge(edge) YIELD *;
```

Make sure your function accepts the proper Memgraph type, `mgp.Edge` in this
case. 

```python
def new_edge(
    context: mgp.ProcCtx,
    edge: mgp.Edge
)
```
Memgraph Python API is defined by `mgp.py` script, and in it, you can find all
supported types such as `mgp.Edge`, `mgp.Vertex` etc. If you want to explore the
API further, feel free to check the reference guide on [Python
API](/reference-guide/query-modules/implement-custom-query-modules/api/python-api.md).

## How to create a trigger for dynamic algorithms? 

Dynamic algorithms are often designed for dataset updates. With a trigger, you
can ensure that any dataset is up to date and consistent. In the sample code
below, a trigger is set to use MAGE `pagerank_online` algorithm. For more
details on dynamic algorithms, visit [MAGE
docs](/mage/query-modules/available-queries). In this
case, all created or deleted objects are passed from the database transaction to
the trigger. After each transaction that has created or deleted objects, the
trigger will automatically execute the PageRank algorithm and update the rank
property. This will ensure data consistency and lead to performance benefits. 

```cypher
CREATE TRIGGER pagerank_trigger 
BEFORE COMMIT 
EXECUTE CALL pagerank_online.update(createdVertices, createdEdges, deletedVertices, deletedEdges) 
YIELD node, rank
SET node.rank = rank;
```
