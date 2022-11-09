---
id: changelog
title: Changelog
sidebar_label: Changelog
---

## v1.4 - Dec 13, 2021

### Major Features and Improvements

### Bug Fixes


## v1.3.2 - Oct 10, 2022

### Major Features and Improvements
- Allow restricting community detection to subgraphs.
  [#152](https://github.com/memgraph/mage/pull/152)
- Implement Degree centrality algorithm.
  [#162](https://github.com/memgraph/mage/pull/162)
- Update Memgraph version.
  [#171](https://github.com/memgraph/mage/pull/171)

### Bug Fixes
- Dynamic betweenness centrality bugfix by @antepusic in https://github.com/memgraph/mage/pull/147

## v1.3.1 - Jul 14, 2022

### Major Features and Improvements
- Update MG version.
  [#154](https://github.com/memgraph/mage/pull/154)
- Introduce E2E group testing.
  [#145](https://github.com/memgraph/mage/pull/145)

## v1.3 - May 23, 2022

### Major Features and Improvements
- Add integration between cuGraph and Memgraph integration.
  [#99](https://github.com/memgraph/mage/pull/99)

### Bug Fixes
- Fix node deletion.
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
- Bump the version of Black formatter.
  [#132](https://github.com/memgraph/mage/pull/132)

### Bug Fixes
- Fix IsSubset checking for unordered set.
  [#135](https://github.com/memgraph/mage/pull/135)
- Fix Continuous integration.
  [#133](https://github.com/memgraph/mage/pull/133)
- Fix E2E testing.
  [#128](https://github.com/memgraph/mage/pull/128)
- Fix ID validity check.
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
