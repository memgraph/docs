---
id: how-to-setup-triggers
title: How to setup triggers
sidebar_label: Triggers
---

Memgraph supports **database triggers** that can be executed if a particular type of event occurs. Events are related to changes in data, such as created, updated, and deleted nodes or relationships. 

[![Related - Reference Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/triggers.md) 


## How to create a trigger?

You can create trigger by executing cypher commands. Creating a trigger will ensure that some procedural code is executed on certain type of event. 
All triggers you will create are persisted on the disk, this means triggers will be active on database reruns and no information is lost.

### Trigger execution upon node creation

Node creation can be most common event your Memgraph database can react to. For example, you need to updated some value on created node. 
If you need a trigger after the node(vertex) has been created, you can set up the following trigger: 

```cypher
CREATE TRIGGER createVertex
ON () CREATE AFTER COMMIT EXECUTE
UNWIND createdVertices AS createdVertex
SET createdVertex.created = timestamp()
```

Here the trigger's name is `createdVertex` and should be unique. Cypher command  `ON CREATE` defines on what event will trigger be executed. `AFTER COMMIT EXECUTE` means the trigger will be executed after changes have been committed to the database. For the sake of ease of use, triggers have a set o **predefined variables**. One is `createdVertices`, a list of all created nodes (vertices). Here the list is being unwinding by cypher command `UNWIND` 
To find a complete list of predefined variables, supported operations, and configuration details, look at triggers [reference guide](https://memgraph.com/docs/memgraph/reference-guide/triggers).

In this trigger via `SET createdVertex.created = timestamp()`  command, new node is getting a timestamp after creation.

### Trigger execution upon node update

Node property updates are common in graphs,in order to react to them you can create trigger for that type of event: 

```cypher
CREATE TRIGGER updateVertex
ON () UPDATE AFTER COMMIT EXECUTE
UNWIND updatedVertices AS updatedVertex
SET updatedVertex.updated_at = timestamp()

```
The trigger for node updates is almost the same as node creation. Notice different predefined variable `updatedVertices` and `ON UPDATE` cypher command.

In this trigger via `SET updatedVertex.updated_at = timestamp()` command, node is getting new updated timestamp.

### Trigger execution upon node or relationship creation

You can also setup the trigger for multiple events, such as node or relationships creation. It does matter what will be created node or relationship, but it will execute the trigger.
Here is the sample query for the trigger: 

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

By using predefined variable `createdObjects` you are getting all created objects. Variable `createdObjects` is a list of maps where each map contains `event_type` and `edge` or `vertex` property. Both properties depends on 
what type of object has been created. If your Query is creating multiple nodes and relationships, they will be in a separate created objects maps. 

In this trigger via `SET object.created_at = timestamp();` command, node or relationships property `created_at` is set to current timestamp. 

## How to create trigger for Python query module? 

If you what to react on event by executing code from query module in Python, you can do it by calling query module from trigger. Sample trigger below will call `query_module.new_edge(edge)` on each new relationship (edge) creation:

```cypher
CREATE TRIGGER newEdge
ON CREATE BEFORE COMMIT EXECUTE
UNWIND createdEdges AS edge
CALL query_module.new_edge(edge) YIELD *;
```

Make sure that your function accepts proper Memgraph type, `mgp.Edge` in this case. 

```python
def new_edge(
    context: mgp.ProcCtx,
    edge: mgp.Edge
)
```
Memgraph Python API is defined via `mgp.py` script an there you can find all supported types and  types such as `mgp.Edge`, `mgp.Vertex` etc. If you what to explore the API further, feel free to check the reference guide on [Python API](https://memgraph.com/docs/memgraph/reference-guide/query-modules/api/python-api)

## How to create a trigger for dynamic algorithms? 

Dynamic algorithms are often designed for dataset updates. With a trigger, you can ensure that any dataset is up to date and consistent. The sample code below is setting trigger by using the MAGE `pagerank_online` algorithm. For more details on dynamic algorithms, visit [MAGE docs](https://memgraph.com/docs/mage/query-modules/available-queries). In this case, you pass all created or deleted objects from the database transaction to the trigger. After each transaction that has created or deleted objects, the trigger will automatically execute the page rank algorithm and update the rank property. This will ensure data consistency and lead to performance benefits. 

```cypher
CREATE TRIGGER pagerank_trigger 
BEFORE COMMIT 
EXECUTE CALL pagerank_online.update(createdVertices, createdEdges, deletedVertices, deletedEdges) 
YIELD node, rank
SET node.rank = rank;
```
