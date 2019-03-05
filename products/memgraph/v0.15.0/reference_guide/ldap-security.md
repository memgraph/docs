## LDAP Security

Memgraph supports authentication and (optional) authorization using LDAP.  The
two supported operation modes are:
- authentication only (LDAP bind request)
- authentication and authorization (LDAP bind and search requests)

When Memgraph is switched to use LDAP authentication its internal users are
automatically disabled. All users are authenticated only using LDAP, existing
local users are ignored (unless they also exist in the LDAP directory).

### Authentication

In this mode Memgraph will only perform authentication (verification of
username and password) using the LDAP server.  All user to role mappings and
user and role permissions are managed through Memgraph.

When using LDAP authentication Memgraph builds the DN used for authentication
using the user specified username and the following formula:
```plaintext
DN = prefix + username + suffix
```
In most common situations the `prefix` will be `cn=` and the `suffix` will be
`,dc=example,dc=com`. With an example username `alice` that would yield a DN
equal to `cn=alice,dc=example,dc=com` which will then be used for the LDAP bind
operation with the user specified password.

When a user that has never logged in to the database passes authentication
using LDAP, a user object is created for that user. The user can then be seen
using the following query:
```opencypher
SHOW USERS;
```
This behavior can be changed to disable login to users that don't have an
explicitly created user account.

### Authorization

In this mode Memgraph will perform authentication and authorization using the
LDAP server.  The authorization supported is in the form of determining the
user to role mapping using the LDAP server.  User and role permissions are
still managed through Memgraph.

Authentication is performed in the same way as above. After the user is
authenticated, Memgraph searches through the role mapping root DN object that
contains role mappings.  A role mapping object that has the current bound user
as its member is used as the user's role. The role that is mapped to the user
is the CN of the role mapping object.

When a user that has a role that doesn't yet exist in the database logs in to
the database, a role object is created for that user and assigned to that user.
The role can then be seen using the following query:
```opencypher
SHOW ROLES;
```
This behavior can be changed to disable login to users that don't have an
explicitly created role.

Note: When searching for a role in directories that have thousands of roles,
the search process could take a long time. That could cause long login times.

### Flags

This section contains the list of flags that are used to configure the LDAP
authentication and authorization mechanisms used by Memgraph.

 Flag                               | Description
------------------------------------|------------
 `--auth-ldap-enabled`              | Enables the LDAP integration.
 `--auth-ldap-issue-starttls`       | Controls whether Memgraph should issue STARTTLS at the beginning of communication with the LDAP server.
 `--auth-ldap-prefix`               | Prefix used when forming the DN used for authentication.
 `--auth-ldap-suffix`               | Suffix used when forming the DN used for authentication.
 `--auth-ldap-host`                 | Host used to connect to the LDAP server.
 `--auth-ldap-port`                 | Port used to connect to the LDAP server.
 `--auth-ldap-create-user`          | Controls whether users should be implicitly created on first login or they should be explicitly created manually.
 `--auth-ldap-create-role`          | Controls whether roles should be implicitly created on first appearance or they should be explicitly created manually.
 `--auth-ldap-role-mapping-root-dn` | Specifies the root LDAP object that holds all role objects as its children.
