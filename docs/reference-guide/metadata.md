---
id: metadata
title: Metadata
sidebar_label: Metadata
---

Bolt protocol specifies additional data that can be sent along with the
requested results. Such data is called metadata and can be divided into two
groups:
 - Query Statistics,
 - Notifications.

Both of these metadata can be accessed through `summary` map that is being sent
along with the results of the query. Query statistics will be under `stats` key,
and notifications under `notifications` key.

## Query Statistics

Query statistics will be sent whenever a user performs a query that will effect
data in any way. In other words we will track the quantity of these changes
throughout the query execution and report it back to the user.

The structure of statistics is a map of string keys and integer values. Data
that is being tracked:

 - `nodes-created`
 - `nodes-deleted`
 - `relationships-created`
 - `relationships-deleted`
 - `labels-added`
 - `labels-removed`
 - `properties-set`

## Notifications

Notifications will be sent whether we want to confirm the results of query or
want to want the user of possible wrong usage. To understand what kind of
message notification can send let's look at the structure of notification:
```
{
    "severity": "...",
    "code: "...",
    "title": "...",
    "description": "..."
}
```

In order to enable users to handle these notifications however they see fit, we
will introduce possible values for severity and code notifications attributes.
Title and description values will depend on query and the query values and
should be used only as messages.

### Severity

 - `INFO`
 - `WARNING`

### Code

- `CreateConstraint`
- `CreateIndex`
- `CreateStream`
- `CheckStream`
- `CreateTrigger`
- `DropConstraint`
- `DropReplica`
- `DropIndex`
- `DropStream`
- `DropTrigger`
- `ConstraintAlreadyExists`
- `IndexAlreadyExists`
- `LoadCSVTip`
- `IndexDoesNotExist`
- `ConstraintDoesNotExist`
- `RegisterReplica`
- `ReplicaPortWarning`
- `SetReplica`
- `StartStream`
- `StartAllStreams`
- `StopStream`
- `StopAllStreams`
