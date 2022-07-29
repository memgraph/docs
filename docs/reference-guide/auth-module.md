---
id: auth-module
title: Auth module (Enterprise)
sidebar_label: Auth module
---

Memgraph supports authentication and (optional) authorization using a custom
built external auth module.  The two supported operation modes are:
- authentication only (username/password verification)
- authentication and authorization (username/password verification and user to
  role mapping)

When a user connects to Memgraph the database will forward the user's supplied
username and password to the external auth module and wait for it to deliver
the authentication and/or authorization verdict back to the database. Based on
the returned verdict, Memgraph will either close the connection to the
connected user or it will allow the connection and set-up the user and/or role
accordingly.

When Memgraph is switched to use the external auth module for authentication
its internal users are automatically disabled. All users are authenticated only
using the module, existing local users are ignored (unless they can be
authenticated using the module).

## Authentication

In this mode Memgraph will only perform authentication (verification of
username and password) using the external auth module.  All user to role
mappings and user and role permissions are managed through Memgraph.

When a user that has never logged in to the database passes authentication
using the external auth module, a user object is created for that user. The
user can then be seen using the following query:
```cypher
SHOW USERS;
```
This behavior can be changed to disable login to users that don't have an
explicitly created user account.

## Authorization

In this mode Memgraph will perform authentication and authorization using the
external auth module. The authorization supported is in the form of determining
the user to role mapping using the module.  User and role permissions are still
managed through Memgraph.

When a user that has a role that doesn't yet exist in the database logs in to
the database, a role object is created for that user and assigned to that user.
The role can then be seen using the following query:
```cypher
SHOW ROLES;
```
This behavior can be changed to disable login to users that don't have an
explicitly created role.

## Flags

This section contains the list of flags that are used to configure the external
auth module authentication and authorization mechanisms used by Memgraph.

 Flag                               | Description
------------------------------------|------------
 `--auth-module-executable`         | Path to the executable that should be used for user authentication/authorization.
 `--auth-module-create-user`        | Controls whether users should be implicitly created on first login or they should be explicitly created manually.
 `--auth-module-create-role`        | Controls whether roles should be implicitly created on first appearance or they should be explicitly created manually.
 `--auth-module-manage-roles`       | Specifies whether the module is used only for authentication (value is `false`), or it should be used for both authentication and authorization.
 `--auth-module-timeout`            | Specifies the maximum time that Memgraph will wait for a response from the external auth module.
 `--auth-password-permit-null`      | Can be set to false to disable null passwords.
 `--auth-password-strength-regex`   | The regular expression that should be used to match the entire entered password to ensure its strength.

## Communication

The external auth module can be written in any programming language. Because of
that, the communication protocol between Memgraph and the module is simple to
implement.

Memgraph uses inter-process pipes to communicate with the module. The module
will receive auth requests on file descriptor `1000` and has to return auth
responses to file descriptor `1001`. You may be wondering why we didn't just
use `stdin` and `stdout` for communication. The standard streams aren't used
because external libraries often tend to write something to `stdout` which is
difficult to turn off. By using separate file descriptors, `stdout` is left
intact and can be used freely for debugging purposes (along with `stderr`).

The protocol that is used between Memgraph and the module is as follows:
 - Each auth request is sent as a JSON encoded object in a single line that is
   terminated by a `\n`.
 - Each auth response must be sent as a JSON encoded object in a single line
   that is terminated by a `\n`.
 - Auth requests are objects that contain the following keys:
   - `username` - the user's username
   - `password` - the user's password
 - Auth responses must be objects that contain the following keys:
   - `authenticated` - a `bool` indicating whether the user is allowed to log
     in to the database
   - `role` - a `string` indicating which role the user should have (must be
     supplied even when the module is used for authentication only)

If the external auth module crashes during the processing of an auth request,
Memgraph won't allow the user to log in to the database and will automatically
restart the auth module for the next auth request. All crash logs will be seen
in Memgraph's output (typically in `systemd` logs using `journalctl`).

## Example

This very simple example auth module is written in Python, but any programming language can be used.

```python
#!/usr/bin/python3
import json
import io


def authenticate(username, password):
    return {"authenticated": True, "role": ""}


if __name__ == "__main__":
    input_stream = io.FileIO(1000, mode="r")
    output_stream = io.FileIO(1001, mode="w")
    while True:
        params = json.loads(input_stream.readline().decode("ascii"))
        ret = authenticate(**params)
        output_stream.write((json.dumps(ret) + "\n").encode("ascii"))
```

In the example you can see exactly how the communication protocol works and you
can see the function that is used for authentication (and authorization).  When
writing your own modules you just have to reimplement the `authenticate`
function according to your needs.

Because the authentication (and authorization) function has a simple signature,
it is easy (and recommended) to write unit (or integration) tests in separate
files. For example:

```python
#!/usr/bin/python3
import module

assert module.authenticate("sponge", "bob") == {"authenticated": True, "role": ""}
assert module.authenticate("CHUCK", "NORRIS") == {"authenticated": True, "role": ""}
```

## LDAP

With every Memgraph Enterprise installation we provide our own module that
supports authentication and authorization using LDAP. For more information
about how the module should be set-up see the
[reference guide](ldap-security.md).
