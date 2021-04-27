---
id: value
title: Enum rsmgclient::Value
sidebar_label: Value
---

## Declaration

```rust
pub enum Value {
    Null,
    Bool(bool),
    Int(i64),
    Float(f64),
    String(String),
    List(Vec<Value>),
    Map(HashMap<String, Value>),
    Node(Node),
    Relationship(Relationship),
    UnboundRelationship(UnboundRelationship),
    Path(Path),
}
```

Representation of Bolt value returned by database.

Value is can be any of the types specified by Bolt protocol.

## Variants

* **Null**
* **Bool(bool)**
* **Int(i64)**
* **Float(f64)**
* **String(String)**
* **List(Vec&#060;Value&#062;)**
* **Map(HashMap&#060;String, Value&#062;)**
* **Node(Node)**
* **Relationship(Relationship)**
* **UnboundRelationship(UnboundRelationship)**
* **Path(Path)**