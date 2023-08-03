---
id: overview
title: Import data from various file formats into Memgraph
---

At the moment, Memgraph supports importing data from:

- **CSV files** with [LOAD CSV clause](/import-data/files/load-csv-clause.md)
- **JSON files** with [`json_util` query module and `import_util.json` procedure](/import-data/files/load-json.md)  
- **CYPHERL files** via [Memgraph Lab or `mgconsole`](/import-data/files/cypherl.md)

:::tip

If you can choose the format of the data you want to import, the fastest way to
import data into Memgraph is from a CSV file using the [LOAD CSV
clause](/import-data/files/load-csv-clause.md). 

:::