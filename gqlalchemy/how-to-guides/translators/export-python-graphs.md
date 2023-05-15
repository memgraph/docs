---
id: export-python-graphs
title: How to export from Memgraph into Python graphs
sidebar_label: Export from Memgraph into Python graphs
slug: /how-to-guides/export-python-graphs
---

GQLAlchemy holds translators that can export Memgraph graphs into Python graphs ([NetworkX](https://networkx.org/), [PyG](https://pytorch-geometric.readthedocs.io/en/latest/) or [DGL](https://www.dgl.ai/) graphs). These translators create Python graph instance from the graph stored in Memgraph. 

[![docs-source](https://img.shields.io/badge/source-examples-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/gqlalchemy/tree/main/tests/transformations/translators)
[![docs-source](https://img.shields.io/badge/source-translators-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/gqlalchemy/tree/main/gqlalchemy/transformations/translators)
[![Related - Under the
hood](https://img.shields.io/static/v1?label=Related&message=Under%20the%20hood&color=orange&style=for-the-badge)](/under-the-hood/python-graph-translators.md)
