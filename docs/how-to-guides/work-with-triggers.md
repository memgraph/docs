---
id: work-with-triggers
title: How to work with triggers
sidebar_label: Work with triggers
---

Memgraph supports *database triggers* that can be executed if certain type of event occurs. Events are related to some type of change in data, such as created, updated and deleted nodes or relationships. 

[![Related - Reference Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/triggers.md) 


## How to create a trigger for node creation, update and delete?
Creating a trigger 
```
CREATE TRIGGER triggerName
ON CREATE AFTER COMMIT EXECUTE
UNWIND createdVertices AS createdVertex
SET createdVertex.created = timestamp()
```








## How to react on node update? 



## How to create a trigger for dynamic algorithms? 