---
id: profiling-queries
title: Profiling queries
sidebar_label: Profiling queries
slug: /reference-guide/profiling-queries
---

Along with inspecting a query's plan as described in the [Inspecting
queries](./inspecting-queries.md) guide, it is also possible to profile the
execution of a query and get a detailed report on how the query's plan behaved.
For every logical operator the following info is provided:

- `OPERATOR` &mdash; the name of the operator, just like in the output of an
  `EXPLAIN` query.

- `ACTUAL HITS` &mdash; the number of times a particular logical operator was
  pulled from.

- `RELATIVE TIME` &mdash; the amount of time that was spent processing a
  particular logical operator, relative to the execution of the whole plan.

- `ABSOLUTE TIME` &mdash; the amount of time that was spent processing a
  particular logical operator.

A simple example to illustrate the output:

```cypher
PROFILE MATCH (n :Node)-[:Edge]-(m :Node) WHERE n.prop = 42 RETURN *;
```

```plaintext
+---------------+---------------+---------------+---------------+
| OPERATOR      | ACTUAL HITS   | RELATIVE TIME | ABSOLUTE TIME |
+---------------+---------------+---------------+---------------+
| * Produce     | 1             |   7.134628 %  |   0.003949 ms |
| * Filter      | 1             |  12.734765 %  |   0.007049 ms |
| * Expand      | 1             |   5.181460 %  |   0.002868 ms |
| * ScanAll     | 1             |   3.325061 %  |   0.001840 ms |
| * ScanAll     | 1             |  71.061241 %  |   0.039334 ms |
| * Once        | 2             |   0.562844 %  |   0.000312 ms |
+---------------+---------------+---------------+---------------+
```

## Where to next?

To learn more about Memgraph's functionalities, visit the **[Reference
guide](/reference-guide/overview.md)**. For real-world examples of how to use
Memgraph, we strongly suggest going through one of the available
**[Tutorials](/tutorials/overview.md)**.