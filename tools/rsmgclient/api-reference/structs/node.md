---
id: node
title: Struct rsmgclient::Node
sidebar_label: Node
---

## Declaration

```rust
pub struct Node {
    pub id: i64,
    pub label_count: u32,
    pub labels: Vec<String>,
    pub properties: HashMap<String, Value>,
}
```

Representation of node value from a labeled property graph.

Consists of a unique identifier(within the scope of its origin graph), a list of labels and a map of properties.

Maximum possible number of labels allowed by Bolt protocol is UINT32_MAX

## Fields
* `id: i64`
* `label_count: u32`
* `labels: Vec<String>`
* `properties: HashMap<String, Value>`