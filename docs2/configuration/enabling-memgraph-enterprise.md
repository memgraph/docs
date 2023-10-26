---
id: enabling-memgraph-enterprise
title: Enabling Memgraph Enterprise
sidebar_label: Enabling Memgraph Enterprise
---

Some of Memgraph's features are only available in Enterprise Edition. They are
present in the same binary but protected by a license key.

If you're interested in Memgraph Enterprise, you need to fill out the following
[form](https://docs.google.com/forms/d/e/1FAIpQLSddH_XV000h58MhwJwwrUu2L3uTkejEDPqvstl6eMou_AW-yw/viewform) where one of the fields is the organization name.

After getting your license key, set the `organization.name` to the same
organization name you used for the license key, and the `enterprise.license` to
the license key you received by running the following queries: 

```
SET DATABASE SETTING 'organization.name' TO 'Organzation';
SET DATABASE SETTING 'enterprise.license' TO 'License';
```

To check the set values run: 

```opencypher
SHOW DATABASE SETTING 'organization.name';
SHOW DATABASE SETTING 'enterprise.license';
```

or:

```opencypher
SHOW DATABASE SETTINGS;
```