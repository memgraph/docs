---
id: relationship
title: Struct rsmgclient::Relationship
sidebar_label: Relationship
---

## Declaration

```rust
pub struct Relationship {
    pub id: i64,
    pub start_id: i64,
    pub end_id: i64,
    pub type_: String,
    pub properties: HashMap<String, Value>,
}
```

Representation of relationship value from a labeled property graph.

Consists of a unique identifier(within the scope of its origin graph), identifiers for the start and end nodes of that relationship, a type and a map of properties.

## Fields
* `id: i64`
* `start_id: i64`
* `end_id: i64`
* `type_: String`
* `properties: HashMap<String, Value>`