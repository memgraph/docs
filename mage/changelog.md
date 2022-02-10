---
id: changelog
title: Changelog
sidebar_label: Changelog
---

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
