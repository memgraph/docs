---
id: connectionstatus
title: Enum rsmgclient::ConnectionStatus
sidebar_label: ConnectionStatus
---

## Declaration

```rust
pub enum ConnectionStatus {
    Ready,
    Executing,
    Closed,
    Bad,
```

Representation of current connection status.

## Variants

* **Ready**: Connection is ready to start executing.
* **Executing**: Connection has executed query and is ready to fetch records.
* **Closed**: Connection is closed and can no longer be used.
* **Bad**: There was an error with current session and connection is no longer usable.