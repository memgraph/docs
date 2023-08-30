---
id: metadata
title: Metadata
sidebar_label: Metadata
---

Bolt protocol specifies additional data that can be sent along with the
requested results. Such data is called metadata and can be divided into two
groups:
 - Query Statistics
 - Notifications

Both of these metadata can be accessed through `summary` map that is being sent
along with the results of the query. Query statistics will be under `stats` key,
and notifications under `notifications` key.

## Query Statistics

Query statistics will be sent whenever a user executes a query that will affect
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

This data will refer only to the changes done by the query, thus changes made in
triggers will not affect these values.

:::caution Differences compared to triggers

It is possible that after executing a query some of these counters are not
zero, however the regarding triggers are not triggered. The reason for that is
triggers are only  triggered when there is a difference between the starting
and ending state, while the counters are also counting the not permanent
changes.

For example if the query creates and deletes nodes like
`CREATE (n) DELETE n;`, then it leaves Memgraph in the same state as before.
The value will be 1 for both `nodes-created` and `nodes-deleted`, but the
triggers will not be triggered since there is no difference between in
states before and after the query is executed.

:::

## Notifications

Notifications will be sent whether we want to confirm the results of query or
want to notify the user about possible wrong usage. Every notification is
represented as a dictionary with these possible values:

Key|Value Type
:-:|:-:
severity|String|/
code|String|/
title|String|/
description|String|/

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
