---
id: triggers
title: Triggers
sidebar_label: Triggers
---

**Database triggers** are an integral part of most database systems. A trigger is a procedural code that is automatically executed in response to specific events. Events are related to some change in data, such as created, updated and deleted data records. The trigger is often used for maintaining the integrity of the information in the database. For example, in a graph database, when a new property is added to the Employee node, a new Tax, Vacation, and Salary node should be created, along with the relationships between them. Triggers can also be used to log historical data, for example, to keep track of employees' previous salaries.

[![Related -How-to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/how-to-guides/set-up-triggers.md)

## Introduction

Memgraph supports running openCypher clauses after a certain event happens
during database transaction execution, i.e. triggers.

You can **create**, **delete** and **print** triggers. All the triggers are
persisted on the disk, so no information is lost on database reruns.

## Creating a trigger

To create a new trigger, a query of the following format should be used:

```plaintext
CREATE TRIGGER trigger_name ( ON ( () | --> ) CREATE | UPDATE | DELETE )
( BEFORE | AFTER ) COMMIT
EXECUTE openCypherStatements
```
As you can see from the format, you can choose on what object event needs to happen , on `()` node or `-->` relationship. After that you can define on what type of event you what to execute the trigger `CREATE`, `UPDATE` or `DELETE`. After the `EXECUTE` is series of Cypher clauses you want to execute.

An example of a trigger would be:

```cypher
CREATE TRIGGER exampleTrigger
ON UPDATE AFTER COMMIT EXECUTE
UNWIND updatedObjects AS updatedObject
WITH CASE
        WHEN updatedObject.vertex IS NOT null THEN updatedObject.vertex
        WHEN updatedObject.edge IS NOT null THEN updatedObject.edge
    END AS object
SET object.updated_at = timestamp();
```

The query may seem complex, so let's break it down:
* `CREATE TRIGGER exampleTrigger`: This statement creates the trigger. Here the
  part `exampleTrigger` is the name of the trigger and it must be unique.
* `ON UPDATE AFTER COMMIT EXECUTE`: This statement specifies what kind of event
  should activate the execution of trigger. This one will be triggered for every update
  operation and the query below will be executed after the update event has been
  committed.
* `UNWIND updatedObjects AS updatedObject`: If multiple objects were updated,
  unwind the list and go over each one.
* `WITH CASE...`: The `CASE` expression checks what type of object was updated,
  a node (vertex) or a relationship (edge).
* `SET object.updated_at = timestamp();`: Add an `updated_at` property to the
  object indicating when the action happened.

### Trigger name
Each created trigger must have a globally unique name. This implies that you
can't have a pair of triggers with the same name, even if they apply to
different events.

### Event type
Optionally, users can define on which event a trigger should execute its
statements. The event type is defined using the following part:

```plaintext
ON ( () | --> ) CREATE | UPDATE | DELETE
```

There are three main event types:
  - CREATE
  - UPDATE
  - DELETE

For each event type, users can specify whether to execute the trigger statements
only on the events that happened on a vertex, or on an edge. Vertices are
denoted with `()`, and edges with `-->`.

Few examples would be:
* `ON CREATE` - trigger the statements only if an object (vertex and/or edge)
  was created during the transaction execution.
* `ON () UPDATE` - trigger the statements only if a vertex was updated (e.g.
  property was set on it) during the transaction execution.
* `ON --> DELETE` - trigger the statements only if an edge was deleted during
  the transaction execution.

Each event comes with certain information that can be used in the openCypher
statements the trigger executes. The information is contained in the form of
[predefined variables](#predefined-variables).

If no event type is specified, the trigger executes its statements every time,
and all the predefined variables can be used.

### Statement execution phase
A trigger can execute its statements at a specified phase, before or after
committing the transaction that triggered it. If the `BEFORE COMMIT` option is
used, the trigger will execute its statements as part of that transaction before
it's committed. If the `AFTER COMMIT` option is used, the trigger will execute
its statements asynchronously after that transaction is committed.

### Execute statements
A trigger can execute any valid openCypher query. No specific constraints are
imposed on the queries. The only way trigger queries (i.e. statements) differ
from standard queries is that a trigger query may use predefined variables,
which are based on the event type specified for the trigger.

### Predefined variables
Statements that a trigger executes can contain certain predefined variables
which contain information about the event that triggered it. Values of
predefined variables are determined by database transactions, that is, by all
the creations, updates or deletes that are part of a single transaction.

Based on the event type, the following predefined variables are available:

| Event type | Predefined variables |
| ---------- | -------------------- |
| ON CREATE  | createdVertices, createdEdges, createdObjects|
| ON () CREATE | createdVertices |
| ON --> CREATE | createdEdges |
| ON UPDATE | setVertexProperties, setEdgeProperties, removedVertexProperties, removedEdgeProperties, setVertexLabels, removedVertexLabels, updatedVertices, updatedEdges, updatedObjects |
| ON () UPDATE | setVertexProperties, removedVertexProperties, setVertexLabels, removedVertexLabels, updatedVertices |
| ON --> UPDATE | setEdgeProperties, removedEdgeProperties, updatedEdges |
| ON DELETE | deletedVertices, deletedEdges, deletedObjects |
| ON () DELETE | deletedVertices |
| ON --> DELETE | deletedEdges |
| no event type specified | All predefined variables can be used |


#### createdVertices
List of all created vertices.

#### createdEdges
List of all created edges

#### createdObjects
List of all created objects where each element is a map. If the element contains
a created vertex, it will be in the following format
```json
{
  "event_type": "created_vertex",
  "vertex": created_vertex_object
}
```

If the element contains a created edge, it will be in the following format
```json
{
  "event_type": "created_edge",
  "edge": created_edge_object
}
```

#### deletedVertices
List of all deleted vertices.

#### deletedEdges
List of all deleted edges

#### deletedObjects
List of all deleted objects where each element is a map. If the element contains
a deleted vertex, it will be in the following format
```json
{
  "event_type": "deleted_vertex",
  "vertex": deleted_vertex_object
}
```

If the element contains a deleted edge, it will be in the following format
```json
{
  "event_type": "deleted_edge",
  "edge": deleted_edge_object
}
```

#### General notes about the predefined variables for updates
Setting an element to `NULL` is counted as a removal. The changes are looked at
on the transaction level only. That means if the value under a property on the
same object was changed multiple times, only one update will be generated. The
same applies for the labels on the vertex.

#### setVertexProperties
List of all set vertex properties. Each element is in the following format:
```json
{
  "vertex": updated_vertex_object,
  "key": property_that_was_updated,
  "old": old_value_of_that_property,
  "new": new_value_of_that_property
}
```

#### setEdgeProperties
List of all set edge properties. Each element is in the following format:
```json
{
  "edge": updated_vertex_object,
  "key": property_that_was_updated,
  "old": old_value_of_that_property,
  "new": new_value_of_that_property
}
```

#### removedVertexProperties
List of all removed vertex properties. Each element is in the following format:
```json
{
  "vertex": updated_vertex_object,
  "key": property_that_was_updated,
  "old": old_value_of_that_property
}
```

#### removedEdgeProperties
List of all removed edge properties. Each element is in the following format:
```json
{
  "vertex": updated_vertex_object,
  "key": property_that_was_updated,
  "old": old_value_of_that_property
}
```

#### setVertexLabels
List of all set vertex labels. Each element is in the following format:
```json
{
  "label": label,
  "vertices": list_of_updated_vertices
}
```

#### removedVertexLabels
List of all removed vertex labels. Each element is in the following format:
```json
{
  "label": label,
  "vertices": list_of_updated_vertices
}
```

#### updatedVertices
List of updates consisting of set and removed properties, and set and removed
labels on vertices.

#### updatedEdges
List of updates consisting of set and removed properties on edges.

#### updatedObjects
List of updates consisting of set and removed properties on edges and vertices,
and set and removed labels on vertices.

#### Elements of the predefined variables for update
Each element has a similar format as the previously defined elements.

If the element contains information about a set vertex property, it's in the
following format:
```json
{
  "event_type": "set_vertex_property",
  "vertex": updated_vertex_object,
  "key": property_that_was_updated,
  "old": old_value_of_that_property,
  "new": new_value_of_that_property
}
```

If the element contains information about a removed vertex property, it's in the
following format:
```json
{
  "event_type": "removed_vertex_property",
  "vertex": updated_vertex_object,
  "key": property_that_was_updated,
  "old": old_value_of_that_property
}
```

If the element contains information about a set edge property, it's in the
following format:
```json
{
  "event_type": "set_edge_property",
  "edge": updated_edge_object,
  "key": property_that_was_updated,
  "old": old_value_of_that_property,
  "new": new_value_of_that_property
}
```

If the element contains information about a removed edge property, it's in the
following format:
```json
{
  "event_type": "removed_edge_property",
  "edge": updated_edge_object,
  "key": property_that_was_updated,
  "old": old_value_of_that_property
}
```

If the element contains information about a set vertex label, it's in the
following format:
```json
{
  "event_type": "set_vertex_label",
  "vertex": updated_vertex_object,
  "label": label
}
```

If the element contains information about a removed vertex label, it's in the
following format:
```json
{
  "event_type": "removed_vertex_label",
  "vertex": updated_vertex_object,
  "label": label
}
```
### Owner

The user who executes the create query is going to be the owner of the trigger.
Authentication and authorization are not supported in Memgraph Community, thus
the owner will always be `Null`, and the privileges are not checked in Memgraph
Community. In Memgraph Enterprise the privileges of the owner are used when
executing `openCypherStatements`, in other words, the execution of the
statements will fail if the owner doesn't have the required privileges. More
information about how the owner affects the trigger can be found in the
[reference guide](reference-guide/security.md#owners).

## Dropping a trigger
A trigger can be removed by running the following query:

```plaintext
DROP TRIGGER trigger_name;
```

## Trigger info
Users can get info about all the triggers by using the following query:

```plaintext
SHOW TRIGGERS;
```
which returns results in the following format:

|trigger name| statement | event type | phase | owner |
|----------- |---------- | -----------| ------|-------|
| name of the trigger| statement which the trigger executes | event which triggers the statement | phase at which the trigger executes its statement | owner of the trigger or `Null` |


## How to guide

Memgraph supports **database triggers** that can be executed if a particular
type of event occurs. Events are related to changes in data, such as created,
updated, and deleted nodes or relationships. 

[![Related - Reference Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/triggers.md) 


### How to create a trigger?

You can create a trigger by executing Cypher clauses. Creating a trigger will
ensure that some procedural code is executed on a certain type of event. All
created triggers are persisted on the disk, which means they will be active on
database reruns and no information is ever lost.

#### Trigger execution upon node creation

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

#### Trigger execution upon node update

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

#### Trigger execution upon node or relationship creation

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

### How to create a trigger for Python query module? 
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

### How to create a trigger for dynamic algorithms? 

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