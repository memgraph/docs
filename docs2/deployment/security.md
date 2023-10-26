---
id: security
title: Security (Enterprise)
sidebar_label: Security
---

[![Related - How to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](how-to-guides/manage-user-privileges.md)

Before reading this article we highly recommend going through a how-to guide
on [managing user privileges](../how-to-guides/manage-user-privileges.md)
which contains more thorough explanations of the concepts behind `openCypher`
commands listed in this article.

## Users

Creating a user can be done by executing the following command:

```cypher
CREATE USER user_name [IDENTIFIED BY 'password'];
```

If the username is an email address, you need to enclose it in backticks (``` ` ```):

```cypher
CREATE USER `alice@memgraph.com` IDENTIFIED BY '0042'; 
``` 

If the user should authenticate themself on each session, i.e. provide their
password on each session, the part within the brackets is mandatory. Otherwise,
the password is set to `null` and the user will be allowed to log-in using
any password provided that they provide the correct username.

You can also set or alter a user's password anytime by issuing the following
command:

```cypher
SET PASSWORD FOR user_name TO 'new_password';
```

Removing a user's password, i.e. allowing the user to log-in using any
password can be done by setting it to `null` as follows:

```cypher
SET PASSWORD FOR user_name TO null;
```
To delete a user use:

```cypher
DROP USER user_name;
```

### Password encryption algorithm

You can choose between `bcrypt`, `sha256`, and `sha256-multiple` password encryption algorithms. SHA256 offers better performance compared to the more secure but less performant bcrypt. Change the encryption algorithm by setting the [`--password-encryption-algorithm`](/reference-guide/configuration.md#other) configuration option to the preferred value.

## User Roles

Each user can be assigned at most one user role. One can think of user roles
as abstractions which capture the privilege levels of a set of users. For
example, suppose that `Dominik` and `Marko` belong to upper management of
a certain company. It makes sense to grant them a set of privileges that other
users are not entitled to so, instead of granting those privileges to each
of them, we can create a role with those privileges called `manager`
which we assign to `Dominik` and `Marko`.

In other words, Each privilege that is granted to a user role is automatically
granted to a user (unless it has been explicitly denied to that user).
Similarly, each privilege that is denied to a user role is automatically denied
to a user (even if it has been explicitly granted to that user).

Creating a user role can be done by executing the following command:

```cypher
CREATE ROLE role_name;
```

Assigning a user role to a certain user can be done by the following command:

```cypher
SET ROLE FOR user_name TO role_name;
```

Removing the role from the user can be done by:

```cypher
CLEAR ROLE FOR user_name;
```

Finally, showing all users that have a certain role can be done as:

```cypher
SHOW USERS FOR role_name;
```

Similarly, querying which role a certain user has can be done as:

```cypher
SHOW ROLE FOR user_name;
```

## Privileges

At the moment, privileges are confined to users' abilities to perform certain
`OpenCypher` queries. Namely users can be given permission to execute a subset
of the following commands: `CREATE`, `DELETE`, `MATCH`, `MERGE`, `SET`,
`REMOVE`, `INDEX`, `STATS`, `AUTH`, `REPLICATION`, `READ_FILE`, `DURABILITY`,
`FREE_MEMORY`, `TRIGGER`, `STREAM`, `CONFIG`, `CONSTRAINT`, `DUMP`,
`MODULE_READ`, `MODULE_WRITE`, `WEBSOCKET`, `TRANSACTION_MANAGEMENT` and `STORAGE_MODE`.


Granting a certain set of privileges to a specific user or user role can be
done by issuing the following command:

```cypher
GRANT privilege_list TO user_or_role;
```

For example, granting `AUTH` and `INDEX` privileges to users with the role
`moderator` would be written as:

```cypher
GRANT AUTH, INDEX TO moderator:
```

Similarly, denying privileges is done using the `DENY` keyword instead of
`GRANT`.

Both denied and granted privileges can be revoked, meaning that their status is
not defined for that user or role. Revoking is done using the `REVOKE` keyword.
The users should note that, although semantically unintuitive, the level of a
certain privilege can be raised by using `REVOKE`. For instance, suppose a user
has been denied a `INDEX` privilege, but the role it belongs to is granted
that privilege. Currently, the user is unable to use indexing features,
but, after revoking the user's `INDEX` privilege, they will be able to do so.

Finally, if you wish to grant, deny or revoke all privileges and find it tedious
to explicitly list them, you can use the `ALL PRIVILEGES` construct instead.
For example, revoking all privileges from user `jdoe` can be done with the
following command:

```cypher
REVOKE ALL PRIVILEGES FROM jdoe;
```

Finally, obtaining the status of each privilege for a certain user or role can be
done by issuing the following command:

```cypher
SHOW PRIVILEGES FOR user_or_role;
```

## Owners

The privileges of the owners of
[streams](/reference-guide/streams/overview.md#creating-a-stream) and
[triggers](/reference-guide/triggers.md#owner) are propagated to the
corresponding query executions:
- in case of streams for the queries returned by the transformations
- in case of triggers for trigger statements

This means the execution of the queries will fail if the owner doesn't have the
required privileges. There are a few important details:
- If there are no existing users, no privilege check is performed similarly to
regular queries.
- If a stream or trigger is created without using a logged-in user
session, the owner will be `Null`. From the point when the first user is created
such streams and triggers will fail because the lack of owner is treated as a
user without any privileges, so no queries are allowed to be executed.
- Currently, there is no way of changing the owner. The only workaround for this
is to delete the stream or trigger and then create it again with another user.

## Streams
The user who executes the `CREATE STREAM` query is going to be the owner of the stream.
Authentication and authorization are not supported in Memgraph Community, thus
the owner will always be `Null`, and the privileges are not checked in Memgraph
Community. In Memgraph Enterprise the privileges of the owner are used when
executing the queries returned from a transformation, in other words, the
execution of the queries will fail if  the owner doesn't have the required
privileges. More information about how the owner affects the stream can be
found in the [reference guide](/reference-guide/streams/overview.md#create-a-stream).

## Label-based access control
Sometimes, disabling users from executing certain commands is too restrictive.
Label-based access control enables database administrators to disable users from 
viewing or manipulating nodes with certain labels and relationships of certain types.

[![Related - How to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/how-to-guides/manage-label-based-access-control.md)

Label-based permissions are divided into 4 hierarchical parts or levels:
- `NOTHING` - denies user visibility and manipulation over nodes and relationships
- `READ` - grants the user visibility over nodes and relationships
- `UPDATE` - grants the user visibility and the ability to edit nodes and relationships 
- `CREATE_DELETE` - grants the user visibility, editing, creation, and deletion of a node or a
relationship

### Node permissions

Granting a certain set of node permissions can be done similarly to the clause 
privileges using the following command:

```cypher
GRANT permission_level ON LABELS label_list TO user_or_role;
```

with the legend:
- `permission_level` is either `NOTHING`, `READ`, `UPDATE` or `CREATE_DELETE`
- `label_list` is a set of node labels, separated with a comma and with a colon in front of
each label (e.g. `:L1`), or `*` for specifying all labels in the graph
- `user_or_role` is the already created user or role in Memgraph

For example, granting a `READ` permission on labels `L1` and `L2` would be written as:

```cypher
GRANT READ ON LABELS :L1, :L2 TO charlie;
```

while granting both `READ` and `EDIT` permissions for all labels in the graph, would be written as:

```cypher
GRANT UPDATE ON LABELS * TO charlie;
```

For denying visibility to a node, the command would be written as:

```cypher
GRANT NOTHING ON LABELS :L1 TO charlie;
```

### Relationship permissions
Relationship permission queries are in essence the same as node permission queries, with the
one difference that the name of the relationship type is `EDGE_TYPE` and not `LABEL`.

Granting a certain set of edge type permissions can be done similarly to the
clause privileges by issuing the following command:

```cypher
GRANT permission_level ON EDGE_TYPES edge_type_list TO user_or_role;
```

with the same legend as the node permissions.

For example, granting a `READ` permission on relationship type `:CONNECTS` would be written as:

```cypher
GRANT READ ON EDGE_TYPES :CONNECTS TO charlie;
```

### Revoking label-based permissions
To revoke any of the label-based permissions, users can use one of the following commands:

```cypher
REVOKE (LABELS | EDGE_TYPES) label_or_edge_type_list FROM user_or_role
```

where:
- `label_or_edge_type_list` is a list of labels or edge types with a colon in front of each
label or edge type (or `*` for specifying all labels or edge types)
- `user_or_role` is the existing user or role in Memgraph

### Show privileges for label-based access control
To check which privileges an existing user or role has in Memgraph, it is enough to write

```cypher
SHOW PRIVILEGES FOR user_or_role;
```

and all the values of clause privileges, as well as label-based permissions will be displayed.

## Manage user privileges

:::warning
This is an Enterprise feature.
Once the Memgraph Enterprise license expires, newly created users will be granted all privileges.
The existing users' privileges will still apply but you won't be able to manage them.
:::

Most databases have multiple users accessing and modifying
data within the database. This might pose a serious security concern for the
system administrators that wish to grant only certain privileges to certain
users. A typical example would be an internal database of some company which
tracks data about their employees. Naturally, only certain users of the database
should be able to perform queries which modify that data.

At Memgraph, we provide the administrators with the option of granting,
denying or revoking a certain set of privileges to some users or groups of users
(i.e. users that are assigned a specific user role), thereby eliminating such
security concerns.

By default, anyone can connect to Memgraph and is granted all privileges.
After the first user is created, Memgraph will execute a query if and only
if either a user or its role is granted that privilege and neither the
user nor its role are denied that privilege. Otherwise, Memgraph will not
execute that specific query. Note that `DENY` is a stronger
operation than `GRANT`. This is also notable from the fact that if neither the
user nor its role are explicitly granted or denied a certain privilege, that
user will not be able to perform that specific query. This effect also is known
as a silent deny. The information above is neatly condensed in the following
table:

User Status | Role Status | Effective Status
------------|-------------|------------------
GRANT       | GRANT       | GRANT
GRANT       | DENY        | DENY
GRANT       | NULL        | GRANT
DENY        | GRANT       | DENY
DENY        | DENY        | DENY
DENY        | NULL        | DENY
NULL        | GRANT       | GRANT
NULL        | DENY        | DENY
NULL        | NULL        | DENY

All supported commands that deal with accessing or modifying users, user
roles and privileges can only be executed by users that are granted the
`AUTH` privilege. All of those commands are listed in the appropriate
[reference guide](../reference-guide/security.md).

At the moment, privileges are confined to users' abilities to perform certain
`OpenCypher` queries. Namely users can be given permission to execute a subset
of the following commands: `CREATE`, `DELETE`, `MATCH`, `MERGE`, `SET`,
`REMOVE`, `INDEX`, `STATS`, `AUTH`, `REPLICATION`, `READ_FILE`, `DURABILITY`,
`FREE_MEMORY`, `TRIGGER`, `STREAM`, `CONFIG`, `CONSTRAINT`, `DUMP`,
`MODULE_READ`, `MODULE_WRITE`, `WEBSOCKET` and `TRANSACTION_MANAGEMENT`.

We could naturally cluster those privileges into groups:

  * Privilege to access data (`MATCH`)
  * Privilege to modify data (`MERGE`, `SET`)
  * Privilege to create and delete data (`CREATE`, `DELETE`, `REMOVE`)
  * Privilege to index data (`INDEX`)
  * Privilege to obtain statistics and information from Memgraph (`STATS`)
  * Privilege to view and alter users, roles and privileges (`AUTH`)
  * Privilege to use replication queries (`REPLICATION`)
  * Privilege to access files in queries, e.g. `LOAD CSV` clause (`READ_FILE`)
  * Privilege to manage durability files (`DURABILITY`)
  * Privilege to try freeing memory (`FREE_MEMORY`)
  * Privilege to use trigger queries (`TRIGGER`)
  * Privilege to use stream queries (`STREAM`)
  * Privilege to configure Memgraph during runtime and to attain the configuration of the given Memgraph instance(`CONFIG`)
  * Privilege to read the content of Python query module files (`MODULE_READ`)
  * Privilege to modify the content of Python query modules files (`MODULE_WRITE`)
  * Privilege to connect to [Memgraph monitoring server](/reference-guide/monitoring-server.md) (`WEBSOCKET`)
  * Privilege to show and terminate transactions (`TRANSACTION_MANAGEMENT`).
  * Privilege to change storage mode (`STORAGE_MODE`).

If you are unfamiliar with any of these commands, you can look them up in our
[Cypher manual](/cypher-manual).

Similarly, the complete list of commands which can be executed under `AUTH`
privilege can be viewed in the
[appropriate article](../reference-guide/security.md) within  our reference
guide.

The remainder of this article outlines a recommended workflow of
user management within an internal database of a fictitious company.

### Creating an administrator

After the first user is created, Memgraph will grant all the privileges to them.
Therefore, let's create a user named `admin` and set its' password to `0000`.
This can be done by executing:

```cypher
CREATE USER admin IDENTIFIED BY '0000';
```

### Creating other users

Our fictitious company is internally divided into teams, and each team has
its own supervisor. All employees of the company need to access and modify
data within the database.

Creating a user account for a new hire named Alice can be done as follows:

```cypher
CREATE USER alice IDENTIFIED BY '0042';
```

If the username is an email address, you need to enclose it in backticks (``` ` ```):

```cypher
CREATE USER `alice@memgraph.com` IDENTIFIED BY '0042'; 
``` 

Alice should also be granted a privilege to access data, which can be done by
executing the following:

```cypher
GRANT MATCH, MERGE, SET TO alice;
```

### Creating user roles

Each team supervisor needs to have additional privileges that allow them to
create new data or delete existing data from the database. Instead of tediously
granting additional privileges to each supervisor using language constructs from
the previous chapter, we could do so by creating a new user role for
supervisors.

Creating a user role named `supervisor` can be done by executing the following
command:

```cypher
CREATE ROLE supervisor;
```

Granting the privilege to create and delete data to our newly created role can
be done as follows:

```cypher
GRANT CREATE, DELETE, REMOVE TO supervisor;
```

Finally, we need to assign that role to each of the supervisors. Suppose, a user
named `bob` is indeed a supervisor within the company. Assigning them that role
within the database can be done by the following command:

```cypher
SET ROLE FOR bob TO supervisor;
```

## Manage label-based access control

[![Related - Reference Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/security.md)

:::warning
This is an Enterprise feature.
Once the Memgraph Enterprise license expires, newly created users will be granted all privileges.
The existing users' privileges will still apply but you won't be able to manage them.
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
TRANSACTION_MANAGEMENT      | GRANT           | GRANTED TO USER                             
STORAGE_MODE         | GRANT           | GRANTED TO USER                             
ALL LABELS        | CREATE_DELETE   | GLOBAL LABEL PERMISSION GRANTED TO USER     
ALL EDGE_TYPES    | CREATE_DELETE   | GLOBAL EDGE_TYPE PERMISSION GRANTED TO USER 

If you want to find more about user privileges, hover over to
**[Managing user privileges](/how-to-guides/manage-user-privileges.md)**

Alice can now log in as an administrator in Memgraph with her own account. From that point on,
she can also create new users and roles in the database. The subsequently created users and roles
won't have any privileges or label-based permissions and need additional commands to be granted
permissions to the clauses and the graph.

### Granting read permissions

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

Enter label-based access control. Since Bob is not an administrator, he was not able
to see any data points in the graph. In other words, he does not have `READ` permission 
on the `DataPoint` label.

Memgraph's label-based access control is hierarchically constructed, and the first
permission one can be given on node labels or relationship edge types is `READ`.

Alice now updates Bob's permissions by executing:

```cypher
GRANT READ ON LABELS :DataPoint TO analyst;
```

Bob is now executing his queries normally and is able to get insights from the database 
with respect to all the data points in the graph!

Additionally, in the company, it was decided that all the data points would be connected 
in a time series fashion, depending on when they were ingested into the database. One 
`DataPoint` should therefore be connected to the previously inserted one. 
The relationship type is called `:NEXT`.

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

### Granting update permissions

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

GRANT MATCH, SET TO tester;

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

### Granting full access permissions

David is the data engineer for the company. He is very skilled in database systems, and he has
been assigned the task of deleting every data point in the system that's older than one year.
Alice has his account set up with the following commands:

```cypher
CREATE ROLE dataEngineer;
CREATE USER David IDENTIFIED BY 'test';
SET ROLE FOR David TO dataEngineer;

GRANT MATCH, DELETE TO dataEngineer;

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

### Denying visibility

Eve is the new senior engineer in town, and she is making excellent progress in the company.
The management therefore decided to grant her visibility and manipulation over all the nodes.
However, there are certain confidential nodes that are only for the management people to see.

Since there could be a lot of different node labels or relationship types in the database,
a shortcut can be made by granting `NOTHING` to the entity. The database administrator therefore
sets Eve's role as:

```cypher
CREATE ROLE seniorEngineer;
CREATE USER Eve IDENTIFIED BY 'test';
SET ROLE FOR Eve TO seniorEngineer;

GRANT MATCH, DELETE TO seniorEngineer;

GRANT CREATE_DELETE ON LABELS * TO seniorEngineer;
GRANT NOTHING ON LABELS :SecretLabel TO seniorEngineer;
```

When granting `NOTHING`, the user is denied both visibility and manipulation of the entity.
Eve is now able to see all the domain data while the management is happy since they have not
leaked any confidential data.

### Templates for granting privileges

To grant all privileges to a superuser (admin):

```
GRANT ALL PRIVILEGES TO admin;
GRANT CREATE_DELETE ON LABELS * TO admin;
GRANT CREATE_DELETE ON EDGE_TYPES * TO admin;
```

To grant all read and write privileges:

```
DENY ALL PRIVILEGES TO readWrite;
GRANT CREATE, DELETE, MERGE, SET, REMOVE, INDEX, MATCH, STATS TO readWrite;
GRANT CREATE_DELETE ON LABELS * TO readWrite;
GRANT CREATE_DELETE ON EDGE_TYPES * TO readWrite;
```

To grant read only privileges: 

```
DENY ALL PRIVILEGES TO readonly;
GRANT MATCH, STATS TO readonly;
GRANT READ ON LABELS * TO readonly;
GRANT READ ON EDGE_TYPES * TO readonly;
```