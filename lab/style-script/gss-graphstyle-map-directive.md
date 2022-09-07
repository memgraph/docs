---
id: gss-graphstyle-map-directive
title: Graph Style Script @GraphStyle.Map directive properties
sidebar_label: GraphStyle.Map directive properties
---

`@GraphStyle.Map` directive is a subset of `@GraphStyle` because it defines
additional style properties for a graph view when there is a map background. 
Style properties of the `@GraphStyle.Map` directive are used to style the 
background map.

## `@GraphStyle.Map`

Here is the list of all properties that can be defined in the `@GraphStyle.Map`
directive, along with their expected types.

### 1. `tile-layer: string: "detailed" | "light" | "dark" | "basic" | "satellite"`

Sets the map tile for the map background. The default map tile is `"light"`.

Examples:
- `tile-layer: "dark"` sets the map tile to be type `"dark"`.
