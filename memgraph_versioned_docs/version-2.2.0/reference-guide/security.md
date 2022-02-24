---
id: security
title: Security (Enterprise)
sidebar_label: Security
---

Before reading this article we highly recommend going through a how-to guide
on [managing user privileges](../how-to-guides/manage-user-privileges.md)
which contains more thorough explanations of the concepts behind `openCypher`
commands listed in this article.

## Users

Creating a user can be done by executing the following command:

```cypher
  CREATE USER user_name [IDENTIFIED BY 'password'];
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
`REMOVE`, `INDEX`, `AUTH`, `REPLICATION`, `READ_FILE`, `FREE_MEMORY`, `DURABILITY`,
`TRIGGER`, `STREAM`, and `CONFIG`.

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

### Streams
The user who executes the `CREATE STREAM` query is going to be the owner of the stream.
Authentication and authorization are not supported in Memgraph Community, thus
the owner will always be `Null`, and the privileges are not checked in Memgraph
Community. In Memgraph Enterprise the privileges of the owner are used when
executing the queries returned from a transformation, in other words, the
execution of the queries will fail if  the owner doesn't have the required
privileges. More information about how the owner affects the stream can be
found in the
