---
id: overview
title: Import data
sidebar_label: Overview
---

There are three main methods for importing data into Memgraph:
* **[CSV Import Tool](/reference-guide/import-data/csv-import-tool.md)**: Memgraph includes the CSV Import Tool which allows you to import nodes and relationships from multiple CSV files.
* **[LOAD CSV Clause](/reference-guide/import-data/load-csv-clause.md)**: You can also use the Cypher clause `LOAD CSV` to load data from CSV files.
* **[Importing Cypher queries](/reference-guide/import-data/cypherl.md)**: If your data is saved in the form of Cypher queries (we call this `.cypherl` format) then this is the right approach for you.