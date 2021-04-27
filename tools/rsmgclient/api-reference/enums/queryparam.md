---
id: queryparam
title: Enum rsmgclient::QueryParam
sidebar_label: QueryParam
---

## Declaration

```rust
pub enum QueryParam {
    Null,
    Bool(bool),
    Int(i64),
    Float(f64),
    String(String),
    List(Vec<QueryParam>),
    Map(HashMap<String, QueryParam>),
}
```

Representation of parameter value used in query.

## Variants

* **Null**
* **Bool(bool)**
* **Int(i64)**
* **Float(f64)**
* **String(String)**
* **List(Vec&#060;QueryParam&#062;)**
* **Map(HashMap&#060;String, QueryParam&#062;)**