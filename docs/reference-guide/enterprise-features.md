---
id: enterprise-features
title: Enterprise features
sidebar_label: Enterprise features
---

Memgraph Enterprise Edition has features that are available only to those that
have active license key. This features are related to logging features, user
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

## LDAP Security

For the purpose of supporting [LDAP authentication and (optional)
authorization](/reference-guide/ldap-security.md), we have built an auth module
that is packaged with Memgraph Enterprise. 

## Security

npm