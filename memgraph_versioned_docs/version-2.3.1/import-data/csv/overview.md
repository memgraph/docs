---
id: overview
title: Import data from CSV files
---

If your data is in CSV format, you can import it into the Memgraph database
using [**`LOAD CSV` Cypher clause**](./load-csv-clause.md). 

Once you have a running Memgraph instance, you can trigger data import from a
designated CSV file. Import populates the database if it is empty, or appends
new data to an existing dataset.

