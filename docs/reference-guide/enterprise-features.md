---
id: enterprise-features
title: Enterprise features
sidebar_label: Enterprise features
---

Memgraph Enterprise Edition has features that are available only to those that
have active license key. These features are related to logging features, user
management and security.

## Enabling Memgraph Enterprise

Some of Memgraph's features are only available in Enterprise Edition. They are
present in the same binary but [protected by a license
key](/reference-guide/enabling-enterprise.md).

## Audit log

Memgraph supports all [query audit logging](/reference-guide/audit-log.md). When
enabled, the audit log contains records of all queries executed on the database.
Each executed query is one entry (one line) in the audit log. The audit log
itself is a CSV file.

## Auth module

Memgraph supports [authentication and (optional)
authorization](/reference-guide/auth-module.md) using a custom built external
auth module. The two supported operation modes are:

- authentication only (username/password verification)
- authentication and authorization (username/password verification and user to
  role mapping)

## Exposing system metrics
HTTP endpoint allows you to fetch [system metrics](/reference-guide/exposing-system-metrics.md) using a GET request.
The response contains information about bolt messages, sessions, transactions, streams, triggers, indexes, snapshots, 
query latency, and many more.


## LDAP Security

For the purpose of supporting [LDAP authentication and (optional)
authorization](/reference-guide/ldap-security.md), we have built an auth module
that is packaged with Memgraph Enterprise. 

## Security

Read more about [security features](/reference-guide/security.md) that are
incorporated into Memgraph Enterprise, including how to create and manage users,
user roles, and privileges. This includes assigning passwords and choosing
password encryption algorithms, creating user roles and assigning them
privileges, and limiting user access to nodes and relationships based on their
labels and types with label-based access control.

