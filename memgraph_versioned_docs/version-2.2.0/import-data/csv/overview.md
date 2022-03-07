---
id: overview
title: Import data from CSV files
---

If you export data into CSV files, you can import it into Memgraph using the:

- [**`LOAD CSV` Cypher clause**](./load-csv-clause.md) - invoked from a running
  Memgraph database instance it triggers data import from a designated CSV file.
  Use it if you want to add additional data to an existing dataset or to
  populate an empty database.
- [**CSV import tool**](./csv-import-tool.md) - allows you to import nodes and
  relationships from multiple CSV files at once before starting a Memgraph
  database instance. It overwrites any existing data, so use it to populate an
  empty database or overwrite the existing data. Utilize it if you are using the
  Neo4j CSV format and have a pipeline set-up for Neo4j because the tool is
  designed for that particular transition.
