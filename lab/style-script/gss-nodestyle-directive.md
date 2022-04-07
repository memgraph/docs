---
id: gss-nodestyle-directive
title: Graph Style Script @NodeStyle directive properties
sidebar_label: NodeStyle directive properties
---

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

Sets the element's background to be an image from the image URL. It will
override the value defined with the property `color`.

Examples:

- `image-url: "https://download.memgraph.com/asset/images/memgraph-logo.png"`
  sets the element's background to be an image of the Memgraph logo.
- `image-url: Property(node, "profile_image")` sets the element's background to
  be an image from the URL that is fetched from the `node` property
  `"profile_image"`.

### `image-url-selected`: `String`

Sets the element's background to be an image from the image URL on mouse select
event. It will override the value defined with the property `color-selected`.

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
