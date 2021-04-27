---
id: path
title: Struct rsmgclient::Path
sidebar_label: Path
---

## Declaration

```rust
pub struct Path {
    pub node_count: u32,
    pub relationship_count: u32,
    pub nodes: Vec<Node>,
    pub relationships: Vec<UnboundRelationship>,
}
```

Representation of sequence of alternating nodes and relationships corresponding to a walk in a labeled property graph.

Path always begins and ends with a node. It consists of a list of distinct nodes, a list of distinct relationships and a sequence of integers describing the path traversal.

## Fields
* `node_count: u32`
* `relationship_count: u32`
* `nodes: Vec<Node>`
* `relationships: Vec<UnboundRelationship>`