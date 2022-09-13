---
id: manage-label-based-access-control-permissions
title: How to manage label-based access control permissions (Enterprise)
sidebar_label: Manage label-based access control permissions
---

[![Related - Reference Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/security.md)

:::warning
This is an Enterprise feature.
If the Memgraph Enterprise is not activated, all the created users will be granted
all of the privileges.
Regardless, all of the previously defined privileges will still be applied.
:::

Sometimes, authorizing the database by granting and denying clause privileges is not enough to make the
database fully secure. Certain nodes and relationships can be confidential and must be restricted from viewing
and manipulating by multiple users.

In response to the need for such authorization, Memgraph has advanced its authorization features to enable
authorization on node labels and relationship edge types. By applying authorization to graph's first class
citizens, a database administrator can now keep all the data in one database while keeping any private data
secure from those who don't have adequate permission.

This how-to-guide will walk you through label-based access control in the use case of a fictional company
doing data analytics and machine learning. 

The fictional company's day-to-day business is ingesting new data for training machine learning models.
Alice is the database administrator in the company, and she would like to set up label-based access control
inside Memgraph to make data manipulation more secure.

When she tries out Memgraph the first time, she is connected to a session with all privileges and is 
able to create users and roles and grant them privileges. As a first task, she creates the admin role,
which is automatically granted permission to write any clause and access any node or relationship.

```cypher
CREATE USER admin IDENTIFIED BY 'PaSsWoRd';
```

The user `admin` is also able to verify that she has all the privileges by writing:

```cypher
SHOW PRIVILEGES FOR admin;
```

privilege         | effective       | description                                   
------------------|-----------------|------------------------------------------------
CREATE            | GRANT           | GRANTED TO USER                             
DELETE            | GRANT           | GRANTED TO USER                             
MATCH             | GRANT           | GRANTED TO USER                             
MERGE             | GRANT           | GRANTED TO USER                             
SET               | GRANT           | GRANTED TO USER                             
REMOVE            | GRANT           | GRANTED TO USER                             
INDEX             | GRANT           | GRANTED TO USER                             
STATS             | GRANT           | GRANTED TO USER                             
AUTH              | GRANT           | GRANTED TO USER                             
CONSTRAINT        | GRANT           | GRANTED TO USER                             
DUMP              | GRANT           | GRANTED TO USER                             
REPLICATION       | GRANT           | GRANTED TO USER                             
READ_FILE         | GRANT           | GRANTED TO USER                             
DURABILITY        | GRANT           | GRANTED TO USER                             
FREE_MEMORY       | GRANT           | GRANTED TO USER                             
TRIGGER           | GRANT           | GRANTED TO USER                             
CONFIG            | GRANT           | GRANTED TO USER                             
STREAM            | GRANT           | GRANTED TO USER                             
MODULE_READ       | GRANT           | GRANTED TO USER                             
MODULE_WRITE      | GRANT           | GRANTED TO USER                             
WEBSOCKET         | GRANT           | GRANTED TO USER                             
ALL LABELS        | CREATE_DELETE   | GLOBAL LABEL PERMISSION GRANTED TO USER     
ALL EDGE_TYPES    | CREATE_DELETE   | GLOBAL EDGE_TYPE PERMISSION GRANTED TO USER 

Alice can now log in as an administrator in Memgraph with her own account. From that point on,
she can also create new users and roles in the database. The subsequently created users and roles
won't have any privileges or label-based permissions and need additional commands to be granted
permissions to the clauses and the graph.

## Granting read permissions

Bob is a data analyst for the company. He is making sure he can extract any useful insights
from the data imported into the database. For now, all the data is labeled with the `DataPoint`
label. Alice has already created a data analyst role as well as Bob's account in Memgraph with:

```cypher
CREATE ROLE analyst;
CREATE USER Bob IDENTIFIED BY 'test';
SET ROLE FOR Bob TO analyst;
```

Unfortunately, when he writes:

```cypher
MATCH (n:DataPoint) RETURN n;
```

he gets an error that he can not execute the query. Why is that?
The first problem that we encounter is that Bob can not perform `MATCH` queries,
which we must explicitly grant.

The database administrator grants him and all the data analysts the `MATCH` query
to traverse the graph with:

```cypher
GRANT MATCH TO analyst;
```

Now Bob is able to perform a match. However, by executing the same query again, he 
is not able to get any results. Now that's unfortunate. Did we do anything wrong?

Enter label-based access control. Since Bob was not an administrator, he was not able
to see any data points in the graph. In other words, he does not have read permission 
on the `DataPoint` label.

Memgraph's label-based access control is hierarchically constructed, and the first
permission one can be given is `READ`, on node labels or relationship edge types.

Alice now updates Bob's permissions by executing:

```cypher
GRANT READ ON LABELS :DataPoint TO analyst;
```

Bob is now executing his queries normally and is able to get insights from the database 
with respect to all the data points in the graph!

Additionally, in the company, it was decided that all the data points would be connected 
in a time series fashion, depending on when they were ingested into the database. One 
`DataPoint` should therefore be connected to the previously inserted one. 
The relationship edge type is called `:NEXT`.

Bob now again has problems, because when he executes:

```cypher
MATCH (n:DataPoint)-[e:NEXT]->(m:DataPoint);
```

he is not able to see the patterns. Although Bob can see all the data points, he doesn't 
have permission to view the relationships. The database administrator executes the following
command to solve the problem:

```cypher
GRANT READ ON EDGE_TYPES :NEXT TO analyst;
```

Since the users are initially constructed without any permission, they would need an explicit
grant for every new label that appears in the database. This approach is called whitelisting,
and is more secure for adding new entities in the database since confidential nodes and 
relationships are not leaked into the database before securing them.

We have now gone through the `READ` permissions for the first class graph citizens. 
Let's move on to a different role in the company.

## Granting update permissions

Charlie is a tester and customer care specialist. He is in charge of reporting bugs and fixing
issues in the database. A common problem that he is facing is updating the classes of the data
points if they are labeled incorrectly. For example, the class of one `DataPoint` might be 
'dog', while in fact it is an 'elephant', but it was wrongly selected in the rush of labeling 
many data points. Charlie needs to update the wrongly labeled data points, and he already has
the IDs of all the nodes he must update. 

Alice has already set up his account with the following commands:

```cypher
CREATE ROLE tester;
CREATE USER Charlie IDENTIFIED BY 'test';
SET ROLE FOR Charlie TO tester;
GRANT READ ON LABELS :DataPoint TO tester;
GRANT READ ON EDGE_TYPES :NEXT TO tester;
```

He now has read privileges just like all the data analysts, but when he gets an authorization
error while executing:

```cypher
MATCH (n:DataPoint {id:505}) SET n.labelY = 'elephant';
```

The error occurs because Charlie does not have permission to update the existing nodes in the
graph. The database administrator needs to update Charlie's permissions and grant him access
to update the node properties with:

```cypher
GRANT UPDATE ON LABELS :DataPoint TO tester;
```

Charlie is now able to update the labeled categories of any data point in the graph! The same 
permission applies if he needs to update a relationship property in the graph.

## Granting full access permissions

David is the data engineer for the company. He is very skilled in database systems, and he has
been assigned the task of deleting every data point in the system that's older than one year.
Alice has his account set up with the following commands:

```cypher
CREATE ROLE dataEngineer;
CREATE USER David IDENTIFIED BY 'test';
SET ROLE FOR David TO dataEngineer;
GRANT UPDATE ON LABELS :DataPoint TO dataEngineer;
GRANT UPDATE ON EDGE_TYPES :NEXT TO dataEngineer;
```

However, `UPDATE` privilege capabilities only grant manipulation of properties, not the nodes
and relationships themselves. Therefore, the query:

```cypher
MATCH (n:DataPoint) WHERE localDateTime() - n.date > Duration({day:365}) DETACH DELETE n;
```

results in an error. The permission that grants read, update, create, and delete rights over
the nodes and relationships in the graph is `CREATE_DELETE`. By executing the following commands:

```cypher
GRANT CREATE_DELETE ON LABELS :DataPoint TO dataEngineer;
GRANT CREATE_DELETE ON EDGE_TYPES :NEXT TO dataEngineer;
```

The permission is executed on relationships as well, since David needs to detach the nodes
prior to deleting them. David is now able to successfully delete the deprecated nodes.

And that's it! You successfully finished Memgraph's label-based access control how-to-guide!

## Where to next?

To learn more about Memgraph's functionalities, visit the **[Reference guide](/reference-guide/overview.md)**.
For real-world examples of how to use Memgraph, we strongly suggest going through one of the available **[Tutorials](/tutorials/overview.md)**.
