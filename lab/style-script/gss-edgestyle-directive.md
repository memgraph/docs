---
id: gss-edgestyle-directive
title: Graph Style Script @EdgeStyle directive properties
sidebar_label: EdgeStyle directive properties
---

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
- `color: limegreen` sets the background color of the element to limegreen.

### `color-hover`: `Color`
Sets the background color of an element on mouse hover event.

Examples:
- `color-hover: #FF0000` sets the background color of the shape to red on mouse hover event.
- `color-hover: limegreen` sets the background color of the shape to limegreen on mouse hover event.

### `color-selected`: `Color`
Sets the background color of an element on mouse select event.

Examples:
- `color-selected: #FF0000` sets the background color of the shape to red on mouse select event.
- `color-selected: limegreen` sets the background color of the shape to limegreen on mouse select event.

### `font-background-color`: `Color`
Sets the background color of an element's label (text). Text can be defined with property `label`.

Examples:
- `font-background-color: #FF0000` sets the text background color to red.
- `font-background-color: limegreen` sets the text background color to limegreen.

### `font-color`: `Color`
Sets the color of the element's label (text). Text can be defined with property `label`.

Examples:
- `font-color: #FF0000` sets the text color to red.
- `font-color: limegreen` sets the text color to limegreen.

### `font-family`: `String`
Sets a font family for the element's text. Text can be defined with property `label`.

Examples:
- `font-family: "sans-serif"` sets the text family font to sans-serif.
- `font-family: "cursive"` sets the text family font to cursive.

### `font-size`: `Number`
Sets the size of the element's text. Text can be defined with property `label`.

Example:
- `font-size: 10` sets the size of the font to 10 pixels.

### `label`: `String`
Sets the element's text label. The text is shown below the element (node or relationship).

Examples:
- `label: "Text"` sets the text "Text" as a label for every single element.
- `label: Property(edge, "quantity")` sets the text for the element's label
  dynamically by using the `edge` property `"quantity"`.

### `shadow-color`: `Color`
Sets the color of the element's shadow.

Examples:
- `shadow-color: #FF0000` sets the shadow color to red.
- `shadow-color: limegreen` sets the shadow color to limegreen.

### `shadow-size`: `Number`
Sets the blur size of the element's shadow. If the value is 0, the shadow will be
a solid color defined by property `shadow-color`.

Examples:
- `shadow-size: 5` indicates that the shadow will be diffused across 5 pixels.

### `shadow-offset-x`: `Number`
Sets the horizontal offset of the element's shadow. A positive value puts the shadow
on the right side of the shape, a negative value puts the shadow on the
left side of the shape.

Examples:
- `shadow-offset-x: 0` indicates that the shadow is exactly behind the shape.
- `shadow-offset-x: 20` indicates that the shadow starts 20 pixels to the right.

### `shadow-offset-y`: `Number`
Sets the vertical offset of the element's shadow. A positive value puts the shadow
below the shape, a negative value puts the shadow above the shape.

Examples:
- `shadow-offset-y: 0` indicates that the shadow is exactly behind the shape.
- `shadow-offset-y: 20` indicates that the shadow starts 20 pixels below the shape position.

### `width`: `Number`
Sets the width of the relationship line.

Example:
- `width: 2` indicates that the width of the relationship line will be 2 pixels wide.

### `width-hover`: `Number`
Sets the width of the relationship line on mouse hover event.

Example:
- `width-hover: 2` indicates that the width of the relationship
  will be 2 pixels wide on mouse hover event.

### `width-selected`: `Number`
Sets the width of the relationship line on mouse select event.

Examples:
- `width-selected: 2` indicates that the width of the relationship
  will be 2 pixels wide on mouse select event.

