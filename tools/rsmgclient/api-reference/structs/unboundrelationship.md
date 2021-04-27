---
id: unboundrelationship
title: Struct rsmgclient::UnboundRelationship
sidebar_label: UnboundRelationship
---

## Declaration

```rust
pub struct UnboundRelationship {
    pub id: i64,
    pub type_: String,
    pub properties: HashMap<String, Value>,
}
```

Representation of relationship from a labeled property graph.

Relationship without start and end nodes. Mainly used as a supporting type for Path.

## Fields

* `id: i64`
* `type_: String`
* `properties: HashMap<String, Value>`