## How to Manage Users Using LDAP?

In large organizations it is often difficult to manage permissions that staff
members have in the organization.  Organizations typically use an LDAP server
to hold and manage the permissions.  Because LDAP servers are already set-up in
most large organizations, it is convenient for the organization to allow all
staff members to have access to the database using the already available
centralized user management system.

For this guide let's assume that we have an LDAP server that is serving the
following data:

```plaintext
# Users root entry
dn: ou=people,dc=memgraph,dc=com
objectclass: organizationalUnit
objectclass: top
ou: people

# User dba
dn: cn=dba,ou=people,dc=memgraph,dc=com
cn: dba
objectclass: person
objectclass: top
sn: user
userpassword: dba

# User alice
dn: cn=alice,ou=people,dc=memgraph,dc=com
cn: alice
objectclass: person
objectclass: top
sn: user
userpassword: alice

# User bob
dn: cn=bob,ou=people,dc=memgraph,dc=com
cn: bob
objectclass: person
objectclass: top
sn: user
userpassword: bob

# User carol
dn: cn=carol,ou=people,dc=memgraph,dc=com
cn: carol
objectclass: person
objectclass: top
sn: user
userpassword: carol

# User dave
dn: cn=dave,ou=people,dc=memgraph,dc=com
cn: dave
objectclass: person
objectclass: top
sn: user
userpassword: dave

# Roles root entry
dn: ou=roles,dc=memgraph,dc=com
objectclass: organizationalUnit
objectclass: top
ou: roles

# Role moderator
dn: cn=moderator,ou=roles,dc=memgraph,dc=com
cn: moderator
member: cn=alice,ou=people,dc=memgraph,dc=com
objectclass: groupOfNames
objectclass: top

# Role admin
dn: cn=admin,ou=roles,dc=memgraph,dc=com
cn: admin
member: cn=carol,ou=people,dc=memgraph,dc=com
member: cn=dave,ou=people,dc=memgraph,dc=com
objectclass: groupOfNames
objectclass: top
```

To summarize, in this dataset we have the following data:
- `ou=people,dc=memgraph,dc=com` - entry that holds all users
  - `cn=dba,ou=people,dc=memgraph,dc=com` - user `dba` that will be used as the database administrator
  - `cn=alice,ou=people,dc=memgraph,dc=com` - regular user `alice`
  - `cn=bob,ou=people,dc=memgraph,dc=com` - regular user `bob`
  - `cn=carol,ou=people,dc=memgraph,dc=com` - regular user `carol`
  - `cn=dave,ou=people,dc=memgraph,dc=com` - regular user `dave`
- `ou=roles,dc=memgraph,dc=com` - entry that holds all roles
  - `cn=moderator,ou=roles,dc=memgraph,dc=com` - role `moderator` that has `alice` as its member
  - `cn=admin,ou=roles,dc=memgraph,dc=com` - role `admin` that has `carol` and `dave` as its members

For detailed information about the LDAP integration you should first see the
reference guide:
[LDAP Security](../reference_guide/ldap-security.md).

### Authentication

Before enabling LDAP authentication, Memgraph should be prepared for the
integration. Here we assume that you have an already running Memgraph instance
that doesn't have any users in its local authentication storage. For more
details on how the native authentication storage works in Memgraph you should
see: [How to Manage User Privileges?](manage-user-privileges.md).

First you should create the user that should be the database administrator.  It
is important to have in mind that the username that you create *must* exist in
the LDAP directory.  For the described LDAP directory we will connect to the
database and issue the following queries all in the same connection:
```opencypher
CREATE USER dba;
GRANT ALL PRIVILEGES TO dba;
```
After the user is created and all privileges are granted, it is safe to
disconnect from the database and proceed with LDAP integration.

To enable LDAP integration you should specify the following flags to Memgraph:
```plaintext
--auth-ldap-enabled=true
--auth-ldap-host=<LDAP_SERVER_HOSTNAME>
--auth-ldap-port=<LDAP_SERVER_PORT>
--auth-ldap-prefix="cn="
--auth-ldap-suffix=",ou=people,dc=memgraph,dc=com"
```
After setting these flags you should restart your Memgraph instance.

Now you can verify that you can still log in to the database using username
`dba` and password `dba`.

Issuing `SHOW USERS;` should list that currently only user `dba` exists.  This
is normal. It means that LDAP authentication is successfully enabled (because
you were able to log in) and no other users have yet logged in.

You should now be able to log in using username `alice` and password `alice`.
Because Alice has never before logged in to the database a new user will be
created for Alice and she won't have any privileges (yet).

Using user `dba` we modify Alice's privileges to include the `MATCH` privilege.
```opencypher
GRANT MATCH TO alice;
```

After Alice logs in again into the database (to refresh her privileges) she
will be able to execute the following query:
```opencypher
MATCH (n) RETURN n;
```

Issuing `SHOW USERS;` as `dba` should now yield both `dba` and `alice`.

Users Bob, Carol and Dave will also be able to log in to the database using
their LDAP password.  As with Alice, their users will be created and won't have
any privileges.

If automatic user account creation is disabled using the flag:
```plaintext
--auth-ldap-create-user=false
```
The database administrator (user `dba`) will first have to explicitly create
the users that he wishes to allow to connect to the database:
```opencypher
CREATE USER alice;
CREATE USER bob;
```

In this scenario only Alice and Bob will be allowed to log in to the database
because they already have existing user accounts, but users Carol and Dave
won't be able to log in.

### Authorization

In the previous example users could only authenticate using LDAP. In this
example we will explain how to set-up Memgraph to deduce the user's role using
LDAP search queries.

First, you should enable and verify that user authentication works. To enable
role mapping for the described LDAP schema, we will add the following
additional flag to Memgraph:
```plaintext
--auth-ldap-role-mapping-root-dn="ou=roles,dc=memgraph,dc=com"
```
This flag tells Memgraph that all role mapping entries are children of the
`ou=roles,dc=memgraph,dc=com` entry.

When a user logs in to the database, Memgraph will go through all role mapping
entries and will try to find out which role mapping entry has the user as its
member.

So now when Alice logs in, Memgraph will go through the following entries:
`cn=admin,ou=roles,dc=memgraph,dc=com` and
`cn=moderator,ou=roles,dc=memgraph,dc=com`.  Because Alice is a member of the
`moderator` role mapping, Memgraph will assign role moderator to Alice.

Now as the user `dba` we can issue `SHOW ROLE FOR alice;` and we will see that
indeed Alice now has the role `moderator`.

Permissions for users and roles are still managed through Memgraph, they can't
be managed through the LDAP server.

If automatic role creation is disabled using the flag:
```plaintext
--auth-ldap-create-role=false
```
The database administrator (user `dba`) will first have to explicitly create
the role for users that he wishes to allow to connect to the database:
```opencypher
CREATE ROLE moderator;
```

In this scenario only Alice and Bob will be allowed to log in. Alice will be
allowed to log in because her role (moderator) already exists. Bob will be
allowed to log in because he doesn't have any role. Carol and Dave won't be
allowed to log in because their role (administrator) doesn't exist.

If both automatic role creation and automatic user creation are disabled, then
both the user and the role must exist for a user to successfully log in to the
database.
