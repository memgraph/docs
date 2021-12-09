---
id: mgp_property
title: mgp_property
sidebar_label: mgp_property
---

Reference to a named property value.

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| const char * | **[name](#variable-name)** <br/>Name (key) of a property as a NULL terminated string.  |
| struct mgp_value * | **[value](#variable-value)** <br/>Value of the referenced property.  |

## Public Attributes Documentation

### variable name {#variable-name}

```cpp
const char * name;
```

Name (key) of a property as a NULL terminated string.

### variable value {#variable-value}

```cpp
struct mgp_value * value;
```

Value of the referenced property.
