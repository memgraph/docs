---
id: runtime-settings
title: Runtime settings
sidebar_label: Runtime settings
---

Memgraph contains settings that can be modified during runtime using a query.
Some runtime settings are persisted between multiple runs, while others will
fallback to the value of the command-line argument. 

| Setting name   | Description    | Persistent between runs |
| -------------- | -------------- | ----------------------- |
| organization.name | Name of the organization using the instance of Memgraph (used for verifying the license key). | yes |
| enterprise.license | License key for Memgraph Enterprise. | yes |
| server.name | Bolt server name. | yes |
| query.timeout | Maximum allowed query execution time. Value of 0 means no limit. | yes |
| log.level | Minimum log level. Allowed values: TRACE, DEBUG, INFO, WARNING, ERROR, CRITICAL. | no |
| log.to_stderr | Log messages go to `stderr` in addition to `logfiles`. | no |

## Checking and modifying settings

All settings can be fetched by calling the following query:
```opencypher
SHOW DATABASE SETTINGS;
```

To check the value of a single setting you can use a slightly different query:
```opencypher
SHOW DATABASE SETTING 'setting.name';
```

If you want to change a value for a specific setting, following query should be used:
```opencypher
SET DATABASE SETTING 'setting.name' TO 'some-value';
```
