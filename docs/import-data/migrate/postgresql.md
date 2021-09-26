```console
import-data=# SELECT * FROM "users";
 id | name
----+------
  0 | Anna
  1 | Josh
  2 | Lisa
  3 | Troy
(4 rows)
```

```console
import-data=# SELECT * FROM user_relationships;
 user_one | user_two
----------+----------
        0 |        1
        2 |        3
(2 rows)
```

```console
memgraph> MATCH (n)-[r]-(m) RETURN n,r,m;
+--------------------------------+--------------------------------+--------------------------------+
| n                              | r                              | m                              |
+--------------------------------+--------------------------------+--------------------------------+
| (:users {id: 1, name: "Josh"}) | [:user_relationships]          | (:users {id: 0, name: "Anna"}) |
| (:users {id: 0, name: "Anna"}) | [:user_relationships]          | (:users {id: 1, name: "Josh"}) |
| (:users {id: 3, name: "Troy"}) | [:user_relationships]          | (:users {id: 2, name: "Lisa"}) |
| (:users {id: 2, name: "Lisa"}) | [:user_relationships]          | (:users {id: 3, name: "Troy"}) |
+--------------------------------+--------------------------------+--------------------------------+
4 rows in set (0.000 sec)
```
