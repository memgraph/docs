---
id: work-with-triggers
title: How to work with triggers
sidebar_label: Work with triggers
---

Memgraph supports *database triggers* that can be executed if a particular type of event occurs. Events are related to changes in data, such as created, updated, and deleted nodes or relationships. 

[![Related - Reference Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/triggers.md) 


## How to create a trigger?

If you need a trigger after the node(vertex) has been created, you can set up the following trigger: 

```cypher
CREATE TRIGGER createVertex
ON CREATE AFTER COMMIT EXECUTE
UNWIND createdVertices AS createdVertex
SET createdVertex.created = timestamp()
```

Here the trigger's name is `createdVertex`,  `ON CREATE` defines what operation will trigger execute. `AFTER COMMIT EXECUTE` means the trigger will be executed after changes have been committed to the database. For the sake of ease of use, triggers have a set o *predefined variables*. One is `createdVertices`, a list of all created nodes (vertices). To find a complete list of predefined variables, supported operations, and configuration details, look at triggers [reference guide](https://memgraph.com/docs/memgraph/reference-guide/triggers).

The trigger for updates on the nodes is almost the same. Notice different predefined variable and `ON UPDATE` command:  

```cypher
CREATE TRIGGER updateVertex
ON UPDATE AFTER COMMIT EXECUTE
UNWIND updatedVertices AS updatedVertex
SET updatedVertex.updated_at = timestamp()

```

If you want to create the trigger that will be executed on the creation of a node or relationship, you can do it by using the predefined variable `createdObjects`.  

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

Variable `createdObjects` is list of  maps that contains `edge` or `vertex` and `event_type` property. Both depend on 
what object has been created. If your Query is creating multiple nodes and relationships, they will be in a separate created objects maps. 


## How to create trigger for Python query module? 

Triggers can be used for executing query modules. In this sample trigger will call `query_module.new_edge(edge)` on each new 
relationship (edge) creation:

```cypher
CREATE TRIGGER newEdge
ON CREATE BEFORE COMMIT EXECUTE
UNWIND createdEdges AS edge
CALL query_module.new_edge(edge) YIELD *;
```

Make sure that your function accepts proper Memgraph type, `mgp.Edge` in this case: 

```python
def new_edge(
    context: mgp.ProcCtx,
    edge: mgp.Edge
)
```
If you are not sure where `mgp.Edge` comes from, feel free to check the reference guide on [Python API](https://memgraph.com/docs/memgraph/reference-guide/query-modules/api/python-api)

## How to create a trigger for dynamic algorithms? 

Dynamic algorithms are often designed for dataset updates. With a trigger, you can ensure that any dataset is up to date and consistent. The sample code below is setting trigger by using the MAGE `pagerank_online` algorithm. For more details on dynamic algorithms, visit [MAGE docs](https://memgraph.com/docs/mage/query-modules/available-queries). In this case, you pass all created or deleted objects from the database transaction to the trigger. After each transaction that has created or deleted objects, the trigger will automatically execute the page rank algorithm and update the rank property. This will ensure data consistency and lead to performance benefits. 

```cypher
CREATE TRIGGER pagerank_trigger 
BEFORE COMMIT 
EXECUTE CALL pagerank_online.update(createdVertices, createdEdges, deletedVertices, deletedEdges) 
YIELD node, rank
SET node.rank = rank;
```
