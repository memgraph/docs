---
id: sslmode
title: Enum rsmgclient::SSLMode
sidebar_label: SSLMode
---

## Declaration

```rust
pub enum SSLMode {
    Disable,
    Require,
}
```

Determines whether a secure SSL TCP/IP connection will be negotiated with the server.

## Variants

* **Disable**: Only try a non-SSL connection.
* **Require**: Only try a SSL connection.