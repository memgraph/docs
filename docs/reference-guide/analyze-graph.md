---
id: analyze-graph
title: Analyze graph
sidebar_label: Analyze graph
---

Until Memgraph v2.7, the database would choose an index solely based on the number of indexed nodes. But if the number of nodes is the only condition, in some cases the database would choose a non-optimal index. With the `ANALYZE GRAPH` query, Memgraph analyzes the distribution of property values and can select a more optimal label-property index, the one with the smallest average property value size. 

The average property value's group size directly represents the database's expected number of hits which can be used to estimate the query's cost. When the average group size is the same, the chi-squared statistic is used to measure how close the distribution of property-value group size is to the uniform distribution. The index with a distribution closest to the uniform distribution is selected.


<a href="https://latex.codecogs.com/gif.image?\dpi{110}\chi^2&space;=&space;\sum_{i}\frac{(E_i-O_i)^2}{E_i}" target="_blank"><img src="https://latex.codecogs.com/gif.image?\dpi{110}\chi^2&space;=&space;\sum_{i}\frac{(E_i-O_i)^2}{E_i}" title="Chi-squared statistic" /></a>


The `ANALYZE GRAPH;` command should be run only once after all indexes have been created and nodes inserted in the database. In rare situations when one property is set on many more nodes than another property, choosing an index based on average group size and uniform distribution would be misleading. That's why the database always selects the label-property index with >= 10x fewer nodes than the other label-property index.

The `ANALYZE GRAPH;` command analyses only label-property indices, so whenever the database contains only label indices, the information about the distribution and average group size is ignored, and the optimal index is selected based on the number of nodes it contains.

[![Related - Reference
Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/indexing.md)
[![Related - How
to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/how-to-guides/indexes.md)
[![Related - Under the
Hood](https://img.shields.io/static/v1?label=Related&message=Under%20the%20hood&color=orange&style=for-the-badge)](/under-the-hood/indexing.md)
[![Related - Blog
Post](https://img.shields.io/static/v1?label=Related&message=Blog%20post&color=9C59DB&style=for-the-badge)](https://memgraph.com/blog/implementing-data-replication)


## Calculate the statistic

Run the following query to calculate the statistics:

```cypher
ANALYZE GRAPH;
```

The query will iterate over all label-property indices in the database and calculate the average group size and chi-squared statistic for each one, then return the following output:

| label | property | num estimation nodes | num groups | avg group size | chi-squared value | 
| ----- | -------- | -------------------- | ---------- | -------------- | ----------------- |
| index's label | index's property | number of nodes used for estimation | number of distinct values the property contains | average group size of property's values | value of the chi-squared statistic |


Once the information about the average group size and the chi-squared statistic is obtained, Memgraph can choose the optimal index.
If you don't want to run analysis on all labels, you can specify which labels to use by adding the labels to the query:

```cypher
ANALYZE GRAPH ON LABELS :Label1, :Label2;
```

## Delete statistic

If you want the database to ignore information about the average group size and the chi-squared statistic, the existing statistic can be deleted by running:

```cypher
ANALYZE GRAPH DELETE STATISTICS;
```

The results will contain all label-property indices that were successfully deleted:

| label | property |
| ----- | -------- |
| index's label | index's property |

Specific labels can be specified with the construct `ON LABELS`:

```cypher
ANALYZE GRAPH ON LABELS :Label1 DELETE STATISTICS;
```