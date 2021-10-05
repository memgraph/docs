---
id: runtime-settings
title: Runtime settings
sidebar_label: Runtime settings
---

Memgraph contains settings that can be modified during runtime.
All the settings are persisted between multiple runs.

## Settings

| Setting name   | Description    |
| -------------- | -------------- |
| organization.name | Name of the organization using the instance of Memgraph (used for verifying the license key). |
| enterprise.license | License key for Memgraph Enterprise |


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
SET DATABASE SETTING 'setting.name' TO 'some-string-value';
```
