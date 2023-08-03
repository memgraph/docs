---
id: enterprise-features
title: Enterprise features
sidebar_label: Enterprise features
---

Some of Memgraph's features are only available in Enterprise Edition. Take a
look how to use features related to authentication, authorization and user
privileges.

## Manage authentication and authorization

In large organizations it is often difficult to [manage permissions that staff
members have in the organization](/how-to-guides/manage-users-using-ldap.md).
Organizations typically use an LDAP server to hold and manage the permissions.
Because LDAP servers are already set-up in most large organizations, it is
convenient for the organization to allow all staff members to have access to the
database using the already available centralized user management system.

## Manage user privileges

Most databases have multiple users accessing and modifying data within the
database. This might pose a serious security concern for the system
administrators that wish to [grant only certain privileges to certain
users](/how-to-guides/manage-user-privileges.md). A typical example would be an
internal database of some company which tracks data about their employees.
Naturally, only certain users of the database should be able to perform queries
which modify that data.

At Memgraph, we provide the administrators with the option of granting, denying
or revoking a certain set of privileges to some users or groups of users (i.e.
users that are assigned a specific user role), thereby eliminating such security
concerns.

## Manage label-based access control

Sometimes, authorizing the database by granting and denying clause privileges is
not enough to make the database fully secure. Certain nodes and relationships
can be confidential and must be restricted from viewing and manipulating by
multiple users.

In response to the need for such authorization, Memgraph has advanced its
authorization features to [enable authorization on node labels and relationship
edge types](/how-to-guides/manage-label-based-access-control.md). By applying
authorization to graph's first class citizens, a database administrator can now
keep all the data in one database while keeping any private data secure from
those who don't have adequate permission.