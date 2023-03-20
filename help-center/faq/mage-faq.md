---
id: mage-faq
title: MAGE - Frequently asked questions
sidebar_label: MAGE
slug: /faq/mage
---

### What is MAGE?

[**Memgraph Advanced Graph Extensions (MAGE)**](/mage) is an open-source repository that contains graph algorithms and utility modules. It encourages developers to share innovative and useful [query modules](/mage/query-modules/available-queries) (custom Cypher procedures) the whole community can benefit from. It corresponds to APOC in Neo4j, except it's free and open source. 

The MAGE library also includes dynamic algorithms specially designed for analyzing real-time data, NetworkX and igraph integrations, Elasticsearch synchronization module and NVIDIA GPU-powered algorithms. Check [the full list of modules](/mage/query-modules/available-queries), and if there is a specific procedure you can't find in the MAGE library which you would like to use, please [let us know](overview.md).

### What are query modules?

[Query modules](/memgraph/reference-guide/query-modules) are collections of custom Cypher procedures that extend the basic functionalities of the Cypher query language. Each query module consists of procedures connected by a common theme (for example, community detection). [MAGE graph library](/mage) gathers a number of implemented graph algorithms and utility modules. Still, if you need a specific procedure unavailable in MAGE, you can [implement it using Python or C/C++ API](/memgraph/reference-guide/query-modules/implement-custom-query-modules/overview) and [contribute to the library](/mage/contributing) or [contact us](overview.md). 