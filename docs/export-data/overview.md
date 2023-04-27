---
id: overview
title: Export data
sidebar_label: Export data
slug: /export-data
---

Memgraph allows you to export all the data from the database, or query results.

## Export database

Export database to the following file formats:
- [CYPHERL using Memgraph Lab](/memgraph-lab/user-manual#import--export)
- [JSON using the `export_util.json` procedure](/mage/query-modules/python/export-util) from MAGE - graph algorithms and modules library.

You can also export data to Elasticsearch and enable continuous data
synchronization using the [`elasticsearch_synchronization` query
module](/mage/query-modules/python/elasticsearch-synchronization) available in
MAGE - graph algorithms and modules library. 

## Export query results

Query results can be exported to a CSV, TSV and JSON file using Memgraph Lab.

To export query results from Memgraph Lab: 
1. Run a query or select results you want to export.
2. Click Export results and choose CSV.
3. Save the file locally.


Results can also be exported to a CSV file using the [`export_util.csv_query()`
procedure](/mage/query-modules/python/export-util#csv_queryquery-file_path-stream)
from MAGE - graph algorithms and modules library.