---
id: gss-graphstyle-directive
title: Graph Style Script @GraphStyle directive properties
sidebar_label: GraphStyle directive properties
---

## `@GraphStyle`

Here is the list of all properties that can be defined in the `@GraphStyle` directive,
along with their expected types.

### `collision-radius: number`

Sets the margin radius for each node from its centre. If node `size` is `10` and
`collision-radius` is set to 20, it means there will be `10` spaces left around each
node. No other node can be in that space.

The default `collision-radius` is `15`.

Example:

- `collision-radius: 15` sets the margin radius for each node from its centre to `15`.

### `repel-force: number`

Sets the strength of repel force between all nodes. If positive, it adds a force that
moves nodes away from each other, if negative, it moves nodes towards each other.

The default `repel-force` is `-100`.

Example:

- `repel-force: -100` sets the repel force between all nodes to `-100`.

### `link-distance: number`

Sets the minimum required distance between two connected nodes from their centres.

The default `link-distance` is `30`. If node sizes are `20` and link distance is `30`,
nodes might overlap because the minimum distance from one node centre to another is
`20 + 20 = 40`.

Example:

- `link-distance: 30` sets the minimum required distance to `30`.

### `physics-enabled: boolean`

Enables or disables physics which is a real-time simulation for graph node positions.
When physics is enabled, the graph is not static anymore.

Examples:

- `physics-enabled: True` enables the physics.
- `physics-enabled: Greater(NodeCount(graph), 100)` enables the physics for graphs with more than 100 nodes.

### `view: string: "default" | "map"`

Sets the current graph view that can be either `"default"` or `"map"`. The `"default"` view is
a graph visualization on a blank background. The `"map"` view is a graph visualization with a map
as a background where each node needs to provide `latitude` and `longitude` to be positioned
on the map.

The default `view` is `"default"`.

Examples:

- `view: "default"` sets the view to the default view.
- `view: "map"` sets the view to the map view that will be shown only if at least one node has
  required geo information: `latitude` and `longitude`.
