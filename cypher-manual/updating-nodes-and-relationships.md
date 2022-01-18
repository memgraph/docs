---
id: updating-nodes-and-relationships
title: Updating nodes and relationships
sidebar_label: Updating nodes and relationships
---

## SET

The `SET` clause is used to update labels and properties of already existing
data.

Example. Incrementing everyone's age by 1.

```cypher
MATCH (n :Person) SET n.age = n.age + 1;
```

Click
[here](./clauses/set.md)
for a more detailed explanation on what can be done with `SET`.

OpenCypher supports combining multiple reads and writes using the
`WITH` clause. In addition to combining, the `MERGE` clause is provided which
may create patterns if they do not exist.
