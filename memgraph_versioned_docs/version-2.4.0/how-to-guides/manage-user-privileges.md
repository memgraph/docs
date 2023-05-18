---
id: manage-user-privileges
title: How to manage user privileges (Enterprise)
sidebar_label: Manage user privileges
---

[![Related - Reference Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/security.md)

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
`MODULE_READ`, `MODULE_WRITE` and `WEBSOCKET`.

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

If you are unfamiliar with any of these commands, you can look them up in our
[Cypher manual](/cypher-manual).

Similarly, the complete list of commands which can be executed under `AUTH`
privilege can be viewed in the
[appropriate article](../reference-guide/security.md) within  our reference
guide.

The remainder of this article outlines a recommended workflow of
user management within an internal database of a fictitious company.

## Creating an administrator

After the first user is created, Memgraph will grant all the privileges to them.
Therefore, let's create a user named `admin` and set its' password to `0000`.
This can be done by executing:

```cypher
CREATE USER admin IDENTIFIED BY '0000';
```

## Creating other users

Our fictitious company is internally divided into teams, and each team has
its own supervisor. All employees of the company need to access and modify
data within the database.

Creating a user account for a new hire named Alice can be done as follows:

```cypher
CREATE USER alice IDENTIFIED BY '0042';
```

Alice should also be granted a privilege to access data, which can be done by
executing the following:

```cypher
GRANT MATCH, MERGE, SET TO alice;
```

## Creating user roles

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

## Where to next?

If you are in need for a finer granularity in authorizing your graph, visit
**[Manage label-based access control](/how-to-guides/manage-label-based-access-control.md)**
for authorizing specific nodes and relationships.

To learn more about Memgraph's functionalities, visit the **[Reference guide](/reference-guide/overview.md)**.
For real-world examples of how to use Memgraph, we strongly suggest going through one of the available **[Tutorials](/tutorials/overview.md)**.
