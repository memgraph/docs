---
id: ldap-security
title: LDAP Security (Enterprise)
sidebar_label: LDAP Security
---

[![Related - How to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/how-to-guides/manage-users-using-ldap.md)

For the purpose of supporting LDAP authentication and (optional)
authorization, we have built an auth module that is packaged with Memgraph
Enterprise. For more information about auth modules see the
[reference guide](../reference-guide/auth-module.md).

The module supports two operation modes:
- authentication only (LDAP bind request)
- authentication and authorization (LDAP bind and search requests)

## Authentication

When using LDAP authentication the module builds the DN used for authentication
using the user specified username and the following formula:
```plaintext
DN = prefix + username + suffix
```
In most common situations the `prefix` will be `cn=` and the `suffix` will be
`,dc=example,dc=com`. With an example username `alice` that would yield a DN
equal to `cn=alice,dc=example,dc=com` which will then be used for the LDAP bind
operation with the user specified password.

## Authorization

Authentication is performed in the same way as above. After the user is
authenticated, the module searches through the role mapping root DN object that
contains role mappings. A role mapping object that has the current bound user
as its `member` attribute is used as the user's role. The role that is mapped
to the user is the `CN` attribute of the role mapping object.  The attribute
that contains the user DN in the mapping object, as well as the attribute that
contains the role name, can be changed in the module configuration file to
accommodate your LDAP schema.

Note: When searching for a role in directories that have thousands of roles,
the search process could take a long time. That could cause long login times.

## Module requirements

The module is written in Python 3 and it must be installed on the server for
you to be able to use it. The Python version should be at least `3.5`.  Also,
you must have the following Python 3 libraries installed:
 - `ldap3` - used to communicate with the LDAP server
 - `PyYAML` - used to parse the configuration file

## Module configuration

The module configuration file is `/etc/memgraph/auth_module/ldap.yaml`.  An
initial example configuration file that has all settings documented and
explained is `/etc/memgraph/auth_module/ldap.example.yaml`. You can copy the
example configuration file into the module configuration file to get you up and
running quickly.

## Database configuration

In order to enable use of the LDAP authentication and authorization module you
have to specify to Memgraph to use it. You should specify the flag
`--auth-module-executable /usr/lib/memgraph/auth_module/ldap.py`.

Other flags that change the behavior of the database to module integration
can be specified according to your needs.
