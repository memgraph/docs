---
id: changelog
title: Changelog
sidebar_label: Changelog
---

## v1.6 - Jan 30, 2023

### Major Features and Improvements

- The `setup` script now halts if the build fails on C++ or Rust side. [#194](https://github.com/memgraph/mage/pull/194)
- With the `meta_util.schema()` procedure, you can generate a graph schema as a graph result. [#187](https://github.com/memgraph/mage/pull/187)
- The execution of the `single` method multiple times has been improved by rewriting the distance calculator from Python to C++. [#191](https://github.com/memgraph/mage/pull/191)
- Dynamic graph analytics have been ported to C++ to improve performance. [#182](https://github.com/memgraph/mage/pull/182)
- New module `elastic_search_serialization` enables developers to serialize Memgraph into Elasticsearch instance using basic authentication. [#170](https://github.com/memgraph/mage/pull/170)

## v1.5.1 - Jan 20, 2023

### Major Features and Improvements

- The version of MemgraphDB that will be used in the Docker image has been updated to 2.5.1.
  [#193](https://github.com/memgraph/mage/pull/193)

## v1.5 - Dec 20, 2022

### Major Features and Improvements

- Now you can find ancestors (all the nodes from which a path exists ) and descendants (all nodes to which a path exists) starting from a certain node, sort directed acyclic graph in a way that a node which appears before others is first, return a subgraph from nodes using `connect_nodes` method, and create relationships between nodes in a list using the `chain_nodes` method.
  [#180](https://github.com/memgraph/mage/pull/180)
- C++ API is now aligned with Memgraph 2.5
  [#184](https://github.com/memgraph/mage/pull/184)
- Graph Coloring no longer outputs strings but vertices and integers. This allows you to use the result of graph coloring directly in Memgraph Lab.
  [#177](https://github.com/memgraph/mage/pull/177)

### Bug Fixes
- By enabling module reset, you can now train and evaluate the model without shutting down the database.
  Class labels can now start from 0 or negative numbers.
  The low limit of the early stopping flag no longer prematurely stops the training of the model while running the Node classification module.
  [#173](https://github.com/memgraph/mage/pull/173)

## v1.4 - Nov 15, 2022

### Major Features and Improvements

- Implemented Link prediction with [DGL](https://www.dgl.ai/).
  [#160](https://github.com/memgraph/mage/pull/160)
- Implemented Node classification with PyTorch.
  [#161](https://github.com/memgraph/mage/pull/161)
- Added igraph support.
  [#150](https://github.com/memgraph/mage/pull/150)
- Added _k_-means embedding clustering algorithm.
  [#105](https://github.com/memgraph/mage/pull/105)
- Added better support for C++ API.
  [#174](https://github.com/memgraph/mage/pull/174)

### Bug Fixes
- Enable module reset to be able to train and evaluate without shutting down database, enable working with class labels which don't start from 0, and fix potential early stopping due to low limit in the Node classification module.
  [#173](https://github.com/memgraph/mage/pull/173)

## v1.3.2 - Oct 10, 2022

### Major Features and Improvements
- Allowed restricting community detection to subgraphs.
  [#152](https://github.com/memgraph/mage/pull/152)
- Implemented the degree centrality algorithm.
  [#162](https://github.com/memgraph/mage/pull/162)
- Updated Memgraph version.
  [#171](https://github.com/memgraph/mage/pull/171)

### Bug Fixes
- Dynamic betweenness centrality bugfix.
  [#147](https://github.com/memgraph/mage/pull/147)

## v1.3.1 - Jul 14, 2022

### Major Features and Improvements
- Updated Memgraph version.
  [#154](https://github.com/memgraph/mage/pull/154)
- Introduced E2E group testing.
  [#145](https://github.com/memgraph/mage/pull/145)

## v1.3 - May 23, 2022

### Major Features and Improvements
- Added integration between cuGraph and Memgraph integration.
  [#99](https://github.com/memgraph/mage/pull/99)

### Bug Fixes
- Fixed node deletion.
  [#141](https://github.com/memgraph/mage/pull/141)

## v1.2 - Apr 20, 2022

### Major Features and Improvements

- Implemented Temporal graph networks.
  [#121](https://github.com/memgraph/mage/pull/121)
- Implemented Dynamic Betweenness Centrality.
  [#127](https://github.com/memgraph/mage/pull/127)
- Implemented Dynamic Katz Centrality.
  [#117](https://github.com/memgraph/mage/pull/117)
- Implemented Louvain Community Detection.
  [#48](https://github.com/memgraph/mage/pull/48)
- Implemented Maximum Flow.
  [#125](https://github.com/memgraph/mage/pull/125)
- Implemented Static Katz Centrality.
  [#117](https://github.com/memgraph/mage/pull/117)
- Added utility Import/Export module (JSON).
  [#100](https://github.com/memgraph/mage/pull/100)
- Bumped the version of Black formatter.
  [#132](https://github.com/memgraph/mage/pull/132)

### Bug Fixes
- Fixed IsSubset checking for unordered set.
  [#135](https://github.com/memgraph/mage/pull/135)
- Fixed Continuous integration.
  [#133](https://github.com/memgraph/mage/pull/133)
- Fixed E2E testing.
  [#128](https://github.com/memgraph/mage/pull/128)
- Fixed ID validity check.
  [#129](https://github.com/memgraph/mage/pull/129)

## v1.1 - Dec 13, 2021

### Major Features and Improvements

- Updated rsmgp-sys to the new MGP API.
  [#78](https://github.com/memgraph/mage/pull/78)
- Add temporal type to rsmgp-sys.
  [#82](https://github.com/memgraph/mage/pull/82)
- Implemented node2vec. [#81](https://github.com/memgraph/mage/pull/81)
- Updated GraphView abstraction. [#85](https://github.com/memgraph/mage/pull/85)
- Implemented approximative streaming PageRank.
  [#69](https://github.com/memgraph/mage/pull/69)
- Implemented weighted graph methods built for dynamic community detection.
  [#89](https://github.com/memgraph/mage/pull/89)
- Implemented LabelRankT dynamic community detection algorithm.
  [#66](https://github.com/memgraph/mage/pull/66)

### Bug Fixes

- Fixed memory leakage. [#77](https://github.com/memgraph/mage/pull/77)
- Solved dependency vulnerability.
  [#83](https://github.com/memgraph/mage/pull/83)
- Fixed `set_cover.greedy` result type bug.
  [#76](https://github.com/memgraph/mage/pull/76)
- Fixed MAGE installation on Linux based distro.
  [#92](https://github.com/memgraph/mage/pull/92)
