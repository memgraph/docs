---
id: overview
title: MAGE - Memgraph Advanced Graph Extensions 🔮
sidebar_label: Getting started
slug: /
---

import MageSpells from '../mage/templates/_mage_spells.mdx';

**MAGE**, also known as **Memgraph Advanced Graph Extensions**, is an
open-source repository that contains **graph algorithms** and **modules** in the
form of query modules written by the team behind Memgraph and its users. You can
find and contribute implementations of various algorithms in multiple
programming languages, all runnable inside Memgraph. This project aims to give
everyone the tools they need to tackle the most interesting and challenging
**graph analytics** problems.

:::info GitHub repository

You can find the official GitHub repository here: **[MAGE on
GitHub](https://github.com/memgraph/mage)**.

:::

## MAGE query modules

Memgraph introduces the concept of **query modules**, user-defined procedures
that extend the **Cypher query language**. These procedures are grouped into
modules that can be loaded into Memgraph. You can find more information on query
modules in the official [Memgraph
documentation](https://memgraph.com/docs/memgraph/database-functionalities/query-modules/built-in-query-modules).

## Memgraph compatibility

With changes in Memgraph API, MAGE started to track version numbers. Check out
the table below which will reveal MAGE compatibility with Memgraph versions.

| MAGE version | Memgraph version  |
| ------------ | ----------------- |
| >= 1.0       | >= 2.0.0          |
| ^0           | >= 1.4.0 <= 1.6.1 |

## Spellbook 📖 - Currently available modules

<MageSpells/>