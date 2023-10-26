---
id: foreach
title: FOREACH clause
sidebar_label: FOREACH
---

`FOREACH` iterates over a list of elements. Each element is stored inside a
variable which can optionally be used inside the update clauses. All update
clauses are executed per iteration of the list.

```cypher
  FOREACH ( <variable name> IN <expression> | <update clauses> )
```

|     Option     |                                                  Description                                                  |
| :------------: | :-----------------------------------------------------------------------------------------------------------: |
| variable name  |                                  The variable name that stores each element                                   |
|   expression   |                                     Any expression that results in a list                                     |
| update clauses | One or more Cypher update clauses: `SET`, `REMOVE`, `CREATE`, `MERGE`, `DELETE` including `FOREACH` extension |

It must be noted that if the result `<expression>` is null, then `FOREACH`
will not fail but rather skip the execution of `<update clauses>`
altogether.

Examples:

```cypher
  FOREACH ( i IN [1, 2, 3] | CREATE (n {id : i}) )
```

Creates 3 nodes, each with the id property set to 1, 2 and 3 respectively.

```cypher
  CREATE (n { prop : [[1, 2], [3, 4]]);

  MATCH (n) FOREACH ( inner_list IN n.prop | FOREACH ( j IN inner_list | CREATE (u { prop : j }) ) );
```

Creates 4 nodes, each with the id property set to 1, 2, 3 and 4 respectively.

:::note 

Similarly, the rest of the clauses mentioned in the table above can be
used. 

:::

One more important detail of FOREACH, is that it supports shadowing of variables
names. For example, the query below:

```cypher
  CREATE (n { prop : 0 });

  MATCH (n) FOREACH ( i IN [1] | FOREACH ( i IN [3] |  SET n.prop = i ) );
```

will end up setting the property **prop** of the created node to 3.