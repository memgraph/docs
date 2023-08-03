# Directive properties

## `@ViewStyle` directive

`@ViewStyle` directive is used for defining style properties of a general
graph view: link distance, view, physics, repel force, etc. You can read more about
each property in the following sections.

### `@ViewStyle`

Here is the list of all properties that can be defined in the `@ViewStyle` directive,
along with their expected types.

#### `collision-radius: number`

Sets the margin radius for each node from its centre. If node `size` is `10` and
`collision-radius` is set to `20`, it means there will be `10` spaces left around each
node. No other node can be in that space.

The default `collision-radius` is `15`.

Example:

- `collision-radius: 15` sets the margin radius for each node from its centre to `15`.

#### `repel-force: number`

Sets the strength of repel force between all nodes. If positive, it adds a force that
moves nodes away from each other, if negative, it moves nodes towards each other.

The default `repel-force` is `-100`.

Example:

- `repel-force: -100` sets the repel force between all nodes to `-100`.

#### `link-distance: number`

Sets the minimum required distance between two connected nodes from their centres.

The default `link-distance` is `30`. If node sizes are `20` and link distance is `30`,
nodes might overlap because the minimum distance from one node centre to another is
`20 + 20 = 40`.

Example:

- `link-distance: 30` sets the minimum required distance to `30`.

#### `physics-enabled: boolean`

Enables or disables physics which is a real-time simulation for graph node positions.
When physics is enabled, the graph is not static anymore.

Examples:

- `physics-enabled: True` enables the physics.
- `physics-enabled: Greater(NodeCount(graph), 100)` enables the physics for graphs with more than 100 nodes.

#### `background-color: Color`

Sets the background color of the canvas.

Examples:

- `background-color: #DDDDDD` sets the background color of the canvas to light gray.
- `background-color: black` sets the background color of the canvas to black.

####  `view: string: "default" | "map"`

Sets the current graph view that can be either `"default"` or `"map"`. The `"default"` view is
a graph visualization on a blank background. The `"map"` view is a graph visualization with a map
as a background where each node needs to provide `latitude` and `longitude` to be positioned
on the map.

The default `view` is `"default"`.

Examples:

- `view: "default"` sets the view to the default view.
- `view: "map"` sets the view to the map view that will be shown only if at least one node has
  required geo information: `latitude` and `longitude`.

## `@ViewStyle.Map` directive

`@ViewStyle.Map` directive is a subset of `@ViewStyle` because it defines
additional style properties for a graph view when there is a map background. 
Style properties of the `@ViewStyle.Map` directive are used to style the 
background map.

### `@ViewStyle.Map`

Here is the list of all properties that can be defined in the `@ViewStyle.Map`
directive, along with their expected types.

#### 1. `tile-layer: string: "detailed" | "light" | "dark" | "basic" | "satellite"`

Sets the map tile for the map background. The default map tile is `"light"`.

Examples:
- `tile-layer: "dark"` sets the map tile to be type `"dark"`.

## `@EdgeStyle`

Here is the list of all properties that can be defined in the `@EdgeStyle`
directive, along with their expected types.

### `arrow-size`: `Number`

Sets the size of the arrow on the relationship line end.

Examples:

- `arrow-size: 10` sets the arrow size to be 10 pixels.

### `color`: `Color`

Sets the background color of an element.

Examples:

- `color: #FF0000` sets the background color of the element to red.
- `color: limegreen` sets the background color of the element to lime green.

### `color-hover`: `Color`

Sets the background color of an element on mouse hover event.

Examples:

- `color-hover: #FF0000` sets the background color of the shape to red on mouse
  hover event.
- `color-hover: limegreen` sets the background color of the shape to lime green
  on mouse hover event.

### `color-selected`: `Color`

Sets the background color of an element on mouse select event.

Examples:

- `color-selected: #FF0000` sets the background color of the shape to red on
  mouse select event.
- `color-selected: limegreen` sets the background color of the shape to lime
  green on mouse select event.

### `font-background-color`: `Color`

Sets the background color of an element's label (text). Text can be defined with
property `label`.

Examples:

- `font-background-color: #FF0000` sets the text background color to red.
- `font-background-color: limegreen` sets the text background color to lime
  green.

### `font-color`: `Color`

Sets the color of the element's label (text). Text can be defined with property
`label`.

Examples:

- `font-color: #FF0000` sets the text color to red.
- `font-color: limegreen` sets the text color to lime green.

### `font-family`: `String`

Sets a font family for the element's text. Text can be defined with property
`label`.

Examples:

- `font-family: "sans-serif"` sets the text family font to sans-serif.
- `font-family: "cursive"` sets the text family font to cursive.

### `font-size`: `Number`

Sets the size of the element's text. Text can be defined with property `label`.

Example:

- `font-size: 10` sets the size of the font to 10 pixels.

### `label`: `String`

Sets the element's text label. The text is shown below the element (node or
relationship).

Examples:

- `label: "Text"` sets the text "Text" as a label for every single element.
- `label: Property(edge, "quantity")` sets the text for the element's label
  dynamically by using the `edge` property `"quantity"`.

### `shadow-color`: `Color`

Sets the color of the element's shadow.

Examples:

- `shadow-color: #FF0000` sets the shadow color to red.
- `shadow-color: limegreen` sets the shadow color to lime green.

### `shadow-size`: `Number`

Sets the blur size of the element's shadow. If the value is 0, the shadow will
be a solid color defined by the property `shadow-color`.

Examples:

- `shadow-size: 5` indicates that the shadow will be diffused across 5 pixels.

### `shadow-offset-x`: `Number`

Sets the horizontal offset of the element's shadow. A positive value puts the
shadow on the right side of the shape, a negative value puts the shadow on the
left side of the shape.

Examples:

- `shadow-offset-x: 0` indicates that the shadow is exactly behind the shape.
- `shadow-offset-x: 20` indicates that the shadow starts 20 pixels to the right.

### `shadow-offset-y`: `Number`

Sets the vertical offset of the element's shadow. A positive value puts the
shadow below the shape, a negative value puts the shadow above the shape.

Examples:

- `shadow-offset-y: 0` indicates that the shadow is exactly behind the shape.
- `shadow-offset-y: 20` indicates that the shadow starts 20 pixels below the
  shape position.

### `width`: `Number`

Sets the width of the relationship line.

Example:

- `width: 2` indicates that the width of the relationship line will be 2 pixels
  wide.

### `width-hover`: `Number`

Sets the width of the relationship line on mouse hover event.

Example:

- `width-hover: 2` indicates that the width of the relationship will be 2 pixels
  wide on mouse hover event.

### `width-selected`: `Number`

Sets the width of the relationship line on mouse select event.

Examples:

- `width-selected: 2` indicates that the width of the relationship will be 2
  pixels wide on mouse select event.

### `z-index: number`

Sets the stack order of an element, similar to the CSS `z-index`. The element with the
highest `z-index` will be rendered on top of every other element.

Example:
- `z-index: 100` sets the element's z-index.

## `@NodeStyle`

Here is the list of all properties that can be defined in the `@NodeStyle`
directive, along with their expected types.

### `border-color`: `Color`

Sets a border color.

Examples:

- `border-color: #FF0000` sets the border color to red.
- `border-color: limegreen` sets the border color to lime green.

### `border-color-hover`: `Color`

Sets a border color that is applied on mouse hover event.

Examples:

- `border-color-hover: #FF0000` sets the border color to red on mouse hover
  event.
- `border-color-hover: limegreen` sets the border color to lime green on mouse
  hover event.

### `border-color-selected`: `Color`

Sets a border color that is applied on mouse select event.

Examples:

- `border-color-selected: #FF0000` sets the border color to red on mouse select
  event.
- `border-color-selected: limegreen` sets the border color to lime green on
  mouse select event.

### `border-width`: `Number`

Sets the border width.

Example:

- `border-width: 2` sets the border width to 2 pixels.

### `border-width-selected`: `Number`

Sets the border width that is applied on mouse select event.

Example:

- `border-width-selected: 10` sets the border width to 10 pixels on mouse select
  event.

### `color`: `Color`

Sets the background color of an element.

Examples:

- `color: #FF0000` sets the background color of the element to red.
- `color: limegreen` sets the background color of the element to lime green.

### `color-hover`: `Color`

Sets the background color of an element on mouse hover event.

Examples:

- `color-hover: #FF0000` sets the background color of the element to red on
  mouse hover event.
- `color-hover: limegreen` sets the background color of the element to lime
  green on mouse hover event.

### `color-selected`: `Color`

Sets the background color of an element on mouse select event.

Examples:

- `color-selected: #FF0000` sets the background color of the element to red on
  mouse select event.
- `color-selected:limegreen` sets the background color of the element to lime
  green on mouse select event.

### `font-background-color`: `Color`

Sets the background color of the element's label (text). Text can be defined
with property `label`.

Examples:

- `font-background-color: #FF0000` sets the text background color to red.
- `font-background-color: limegreen` sets the text background color to lime
  green.

### `font-color`: `Color`

Sets the color of the element's label (text). Text can be defined with property
`label`.

Examples:

- `font-color: #FF0000` sets the text color to red.
- `font-color: limegreen` sets the text color to lime green.

### `font-family`: `String`

Sets a font family for the element's label (text). Text can be defined with
property `label`.

Examples:

- `font-family: "sans-serif"` sets the text family font to sans-serif.
- `font-family: "cursive"` sets the text family font to cursive.

### `font-size`: `Number`

Sets the size of the element's text. Text can be defined with property `label`.

Example:

- `font-size: 10` sets the size of the font to 10 pixels.

### `image-url`: `String`

Sets the element's background to be an image from the image URL. Supported
format are `png`, `jpeg`, `gif` (static, not dynamic), `webp` or base 64 encoded
image using `inline data:image/png;base64`.


 It will
override the value defined with the property `color`.

Examples:

- `image-url: "https://download.memgraph.com/asset/images/memgraph-logo.png"`
  sets the element's background to be an image of the Memgraph logo.
- `image-url: Property(node, "profile_image")` sets the element's background to
  be an image from the URL that is fetched from the `node` property
  `"profile_image"`.

### `image-url-selected`: `String`

Sets the element's background to be an image from the image URL on mouse select
event. Supported format are `png`, `jpeg`, `gif` (static, not dynamic), `webp`
or base 64 encoded image using `inline data:image/png;base64`. It will override
the value defined with the property `color-selected`.

Example:

- `image-url-selected:
  "https://download.memgraph.com/asset/images/memgraph-logo-5f60e83d.jpeg"` sets
  the element's background to be an image of the Memgraph logo.

Check property `image-url` for more details and examples.

### `label`: `String`

Sets the element's text label. The text is shown below the element (node or
relationship).

Examples:

- `label: "Text"` sets the text "Text" as a label for every single element.
- `label: Property(node, "name")` sets the text for the element's label
  dynamically by using the `node` property `"name"`.

### `shadow-color`: `Color`

Sets the color for the element's shadow.

Examples:

- `shadow-color: #FF0000` sets the shadow color to red.
- `shadow-color: limegreen` sets the shadow color to lime green.

### `shadow-size`: `Number`

Sets the blur size of the element's shadow. If the value is 0, the shadow will
be a solid color defined by the property `shadow-color`.

Example:

- `shadow-size: 5` indicates that the shadow will be diffused across 5 pixels.

### `shadow-offset-x`: `Number`

Sets the horizontal offset of the element's shadow. A positive value puts the
shadow on the right side of the element, a negative value puts the shadow on the
left side of the element.

Examples:

- `shadow-offset-x: 0` indicates that the shadow is exactly behind the element.
- `shadow-offset-x: 20` indicates that the shadow starts 20 pixels to the right.

### `shadow-offset-y`: `Number`

Sets the vertical offset of the element's shadow. A positive value puts the
shadow below the element, a negative value puts the shadow above the element.

Examples:

- `shadow-offset-y: 0` indicates that the shadow is exactly behind the element.
- `shadow-offset-y: 20` indicates that the shadow starts 20 pixels below the
  element position.

### `shape`: `String`

Sets the shape of the element. The default shape for the node is `"dot"`.
Possible values are: `"dot"`, `"square"`, `"diamond"`, `"triangle"`,
`"triangleDown"`, `"star"`

Examples:

- `shape: "square"` indicates that the shape of the element will be a square.

### `size`: `Number`

Sets the size of the element.

Example:

- `size: 10` indicates that the radius of the element will be 10 pixels.

### `z-index: number`

Sets the stack order of an element, similar to the CSS `z-index`. The element with the
highest `z-index` will be rendered on top of every other element.

Example:
- `z-index: 100` sets the element's z-index.