---
id: gss-viewstyle-map-directive
title: Graph Style Script @ViewStyle.Map directive properties
sidebar_label: ViewStyle.Map directive properties
---

`@ViewStyle.Map` directive is a subset of `@ViewStyle` because it defines
additional style properties for a graph view when there is a map background. 
Style properties of the `@ViewStyle.Map` directive are used to style the 
background map.

## `@ViewStyle.Map`

Here is the list of all properties that can be defined in the `@ViewStyle.Map`
directive, along with their expected types.

### 1. `tile-layer: string: "detailed" | "light" | "dark" | "basic" | "satellite"`

Sets the map tile for the map background. The default map tile is `"light"`.

Examples:
- `tile-layer: "dark"` sets the map tile to be type `"dark"`.
