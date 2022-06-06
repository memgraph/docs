---
id: gss-functions
title: Graph Style Script built-in functions
sidebar_label: GSS functions
---

Graph Style Script has a large number of built-in functions. With these
functions, you can achieve the right style for your graph.

## Color functions

### `Darker(color)`

Returns a darker version of the given color.

Example:

- `color-hover: Darker(#dd2222)` will make the hover event color darker.

Inputs:

- `color: Color`

Outputs:

- `Color`

### `Lighter(color)`

Returns a lighter version of the given color.

Example:

- `color-hover: Lighter(#dd2222)` sets a lighter on hover event color.

Inputs:

- `color: Color`

Outputs:

- `Color`

### `Mix(color1, color2)`

Mixes given colors (performs linear interpolation).

Example:

- `Mix(#1B5E20, orange)`

Inputs:

- `color1: Color`
- `color2: Color`

Outputs:

- `Color`

### `Red(color)`

Returns the red component of a given color. The value will be between 0 and 255
(both inclusive).

Examples:

- `Red(mediumseagreen)` will return the value 60.
- `Red(#6a0dad)` will return the value 106.

Inputs:

- `color: Color`

Outputs:

- `number`

### `Green(color)`

Returns the green component of a given color. The value will be between 0 and
255 (both inclusive).

Examples:

- `Green(mediumseagreen)` will return the value 179.
- `Green(#6a0dad)` will return the value 13.

Inputs:

- `color: Color`

Outputs:

- `number`

### `Blue(color)`

Returns the blue component of a given color. The value will be between 0 and 255
(both inclusive).

Examples:

- `Blue(mediumseagreen)` will return the value 113.
- `Blue(#6a0dad)` will return the value 173.

Inputs:

- `color: Color`

Outputs:

- `number`

### `RGB(red, green, blue)`

Creates a new color with given components.

Example:

- `RGB (128, 159, 255)` will return the color that has value #809fff.

Inputs:

- `red: number`
- `green: number`
- `blue: number`

Outputs:

- `Color`

## Conditional functions

### `And(value...)`

Returns `True` if all the given values are `Truthy`. Returns False otherwise.
Expressions after the first expression that evaluates to `Falsy` are not
evaluated.

In GSS, there are six `Falsy` values: `False` , `0` , `""` , `Null` , `[]`
(empty array), and `{}` (empty map). Everything else is considered `Truthy`.

Example:

- `And(HasProperty(node, "a"), HasProperty(node, "b"))` will return `True` if
  node has properties `a` and `b`.

Inputs:

- `value1: any`
- `value2: any`
- `valueN: any`

Outputs:

- `boolean`

### `Or(value...)`

Returns `True` if any of the given values is `Truthy`. Returns `False`
otherwise. Expressions after the first expression that evaluates to `Truthy` are
not evaluated.

In GSS, there are six `Falsy` values: `False` , `0` , `""` , `Null` , `[]`
(empty array), and `{}` (empty map). Everything else is considered `Truthy`.

Example:

- `Or(Less(Property(node, "age"),20), Greater(Property(node, "age"),40))`
  returns `True` if the node's `age` property is either less than 20 or greater
  than 40.

Inputs:

- `value1: any`
- `value2: any`
- `valueN: any`

Outputs:

- `boolean`

### `Not(value)`

Returns `True` if the value is `Falsy` and returns `False` if the value is
`Truthy`.

In GSS, there are six `Falsy` values: `False` , `0` , `""` , `Null` , `[]`
(empty array), and `{}` (empty map). Everything else is considered `Truthy`.

Example:

- `@NodeStyle Not(HasProperty(node, "count")) {...}` will apply the defined
  styles to the nodes without the `count` property.

Inputs:

- `value: any`

Outputs:

- `boolean`

### `Equals(value1, value2)`

Returns `True` if given values are equal, `False` otherwise. Numbers, Strings
and Booleans are compared by value, Arrays and Maps by the content, Nodes and
Edges are compared by identity.

Example:

- `Equals(Property(edge, "category"), "Food")` checks if `edge.category` equals
  to text "Food".
- `Equals(Property(node, "name"), "Jon Snow")` returns `True` if the condition
  is met.

Inputs:

- `value1: any`
- `value2: any`

Outputs:

- `boolean`

### `Greater(value1, value2)`

Returns `True` if `value1` is greater than `value2`, `False` otherwise.

Example:

- `Greater(Size(Labels(node)), 0)`

Inputs:

- `value1: number`
- `value2: number`

Outputs:

- `boolean`

### `Less(number1, number2)`

Returns `True` if `value1` is less than `value2`, `False` otherwise.

Example:

- `Less(Property(node, "age"),40)` will return `True` if given `node.age` is
  less than 40.

Inputs:

- `value1: number`
- `value2: number`

Outputs:

- `boolean`

### `If(condition, then, else)`

If condition is `Truthy` returns the `then` value, otherwise returns the `else`
value.

In GSS, there are six `Falsy` values: `False` , `0` , `""` , `Null` , `[]`
(empty array), and `{}` (empty map). Everything else is considered `Truthy`.

Example:

- `label: If(HasProperty(node, "name"), Property(node, "name"), "No name")`
  returns the property `name` as label if the node has one, or `No name` if the
  node doesn't have it.

Inputs:

- `condition: any`
- `then: any`
- `else: any`

Outputs:

- `any`

## Graph functions

### `HasLabel(node, label)`

Returns `True` if the given graph node has a label, `False` otherwise.

Example:

- `HasLabel(node, "Category")` will return `True` if a node has a label with the
  name `Category`.

Inputs:

- `node: Node`
- `label: string`

Outputs:

- `boolean`

### `HasProperty(nodeOrEdge, propertyName)`

Returns `True` if a given graph node or relationship has the property
`propertyName`.

Example:

- `HasProperty(node, "City")` will return `True` if a node has a property with
  the name `City`.

Inputs:

- `nodeOrEdge: Node | Relationship`
- `propertyName: string`

Outputs:

- `boolean`

### `Id(nodeOrEdge)`

Returns the ID of a given graph `node` or `edge`.

Example:

- `label: AsText(Id(node))` sets the label to be the node ID.

Inputs:

- `nodeOrEdge: Node | Relationship`

Outputs:

- `number`

### `Identity(nodeOrEdge)`

Returns the ID of a given graph `node` or `edge`.

Example:

- `label: AsText(Identity(node))` sets the label to be the node ID.

Inputs:

- `nodeOrEdge: Node | Relationship`

Outputs:

- `number`

### `Labels(node)`

Returns the list of labels of the given graph node.

Example:

- `label: Labels(node)` sets the label to be a list of all the node's labels.

Inputs:

- `node: Node`

Outputs:

- `List[string]`

### `Property(nodeOrEdge, propertyName)`

Returns the property with the name `propertyName` of given graph node or
relationship.

Example:

- `label: AsText(Property(node, "name"))` creates a label using the node's
  `name` property.

Inputs:

- `nodeOrEdge: Node | Relationship`
- `propertyName: string`

Outputs:

- `any`

### `Type(edge)`

Returns the type of a given graph relationship.

Example:

- `label: Type(edge)` sets the label to the relationship type.

Inputs:

- `edge: Relationship`

Outputs:

- `string`

### `InEdges(node)`

Returns the list of inbound edges from a given graph node.

Example:

- `size: Size(InEdges(node))` sets the size to be equal to the count of inbound
  edges.

Inputs:

- `node: Node`

Outputs:

- `List[Relationship]`

### `OutEdges(node)`

Returns the list of outbound edges from a given graph node.

Example:

- `size: Size(OutEdges(node))` sets the size to be equal to the count of
  outbound edges.

Inputs:

- `node: Node`

Outputs:

- `List[Relationship]`

### `Edges(node)`

Returns the list of inbound and outbound edges from a given graph node.

Example:

- `size: Size(Edges(node))` sets the size to be equal to the count of inbound
  and outbound edges.

Inputs:

- `node: Node`

Outputs:

- `List[Relationship]`

### `AdjacentNodes(node)`

Returns the list of adjacent nodes for a given graph node. An adjacent node is a
node connected directly with a single edge, inbound or outbound.

Example:

- `size: Size(AdjacentNodes(node))` sets the size to be equal to the count of
  adjacent nodes.

Inputs:

- `node: Node`

Outputs:

- `List[Node]`

### `StartNode(edge)`

Returns the start (source) node for a given graph edge.

Example:

- `label: AsText(Id(StartNode(edge)))` sets the label of the edge to be the
  start node ID.

Inputs:

- `edge: Relationship`

Outputs:

- `Node`

### `EndNode(edge)`

Returns the end (target) node for a given graph edge.

Example:

- `label: AsText(Id(EndNode(edge)))` sets the label of the edge to be the end
  node ID.

Inputs:

- `edge: Relationship`

Outputs:

- `Node`

### `NodeCount(graph)`

Returns the total number of nodes in the graph.

Example:

- `size: NodeCount(graph)` sets the size to be the total number of nodes in the
  graph.

Inputs:

- `graph: Graph`

Outputs:

- `number`

### `EdgeCount(graph)`

Returns the total number of edges in the graph.

Example:

- `size: EdgeCount(graph)` sets the size to be the total number of edges in the
  graph.

Inputs:

- `graph: Graph`

Outputs:

- `number`

## Math functions

### `Add(value...)`

Returns the sum of given values.

Example:

- `Add(10, Property(node, "age"))` will give node.age + 10 if age is defined (as
  a number).

Inputs:

- `value1: number`
- `value2: number`
- `valueN: number`

Outputs:

- `number`

### `Div(value1, value2)`

Returns `value1` divided by `value2`.

Example:

- `Div(Property(node, "population"), 2)` will divide `node.population` with 2 if
  population is defined (as a number).

Inputs:

- `value1: number`
- `value2: number`

Outputs:

- `number`

### `Exp(value)`

Returns 2.71828... raised to the power value.

Example: -`Exp(2)` will return the number 7.38905609893

Inputs:

- `value: number`

Outputs:

- `number`

### `Log(value)`

Returns the logarithm (to the base e) of a value.

Example:

- `Log(Property(node, "sales"))`

Inputs:

- `value: number`

Outputs:

- `number`

### `Log10(value)`

Returns the logarithm (to the base 10) of a value.

Example:

- `Log10(Property(node, "sales"))`

Inputs:

- `value: number`

Outputs:

- `number`

### `Mul(value...)`

Returns the product of given values.

Example:

- `Mul(2,10,3)` returns 60 (2*10*3).

Inputs:

- `value1: number`
- `value2: number`
- `valueN: number`

Outputs:

- `number`

### `Random()`

Returns a random number between 0 (inclusive) and 1 (exclusive). All the
possible numbers are equally likely to be returned.

Example:

- `Random()`

Outputs:

- `number`

### `RandomInt(bound)`

Returns a random integer between 0 (inclusive) and bound (exclusive). All the
possible numbers are equally likely to be returned.

Example:

- `RandomInteger(Property(node, "population"))` will return an integer between 0
  and `node.population` if population is defined (as a number).

Inputs:

- `bound: number`

Outputs:

- `number`

### `Sqrt(value)`

Returns the square root of a value.

Example:

- `Sqrt(Property(node, "surface"))` will return the square root of a
  `node.surface`.

Inputs:

- `value: number`

Outputs:

- `number`

### `Sub(value1, value2)`

Subtracts `value2` from `value1`.

Example:

- `Sub(Property(node, "age"),10)` returns `node.age` - 10 if age is defined (as
  a number).

Inputs:

- `value1: number`
- `value2: number`

Outputs:

- `number`

## Text functions

### `Concat(value...)`

Concatenates given strings or arrays.

Example:

- `Concat("City", " ", "of", " ", "London")` will return `City of London`.
- `Concat(AsArray(1, 2, 3), AsArray(4, 5))` will return `[1, 2, 3, 4, 5]`.

Inputs:

- `value1: string | List[any]` - `value2: string | List[any]` - `valueN: string
| List[any]`

Outputs:

- `string | List[any]`

### `Format(formatString, value...)`

Substitutes occurrences of curly brace pairs in formatString with textual
representations of given values. The first occurrence is substituted with the
first value, the second occurrence with the second value and so on.

Examples:

- `Format("{}, {}!", "Hello", "World")` -> `"Hello, World!"`

Text inside curly braces is ignored.

- `Format("{name}: {age}", "Antun", 23)` -> `"Antun: 23"`

Inputs:

- `formatString: string`
- `value1: any`
- `valueN: any`

Outputs:

- `string`

### `Matches(text, regex)`

Returns `True` if text matches regex. The evaluation of the regex is done with
the Javascript function `RegExp.test(text)`.

Examples:

- `Matches("Graph style script", "style")` -> `True`
- `Matches("Graph style script", "st.* script")` -> `True`
- `Matches("Graph style script", "^G")` -> `True`
- `Matches("Graph style script", "GRAPH?")` -> `False`

Inputs:

- `text: string`
- `regex: string`

Outputs:

- `boolean`

### `LowerCase(text)`

Returns the value of a string converted to lower case.

Example:

- `AsText(LowerCase(Property(node, "name")))` will return node name in lower
  case.

Inputs:

- `text: string`

Outputs:

- `string`

### `UpperCase(text)`

Returns the value of a string converted to upper case.

Example:

- `AsText(UpperCase(Property(node, "name")))` will return the node name in upper
  case.

Inputs:

- `text: string`

Outputs:

- `string`

## Array functions

### `Join(array, delimiter)`

Returns a new string by joining array elements with the delimiter.

Example:

- `label: Join(Labels(node), ", ")` creates a label which is a string made out
  of all the labels delimited with a comma.

Inputs:

- `array: List[any]`
- `delimiter: string`

Outputs:

- `string`

### `Contains(array, value)`

Returns `True` if the array contains the defined value, `False` otherwise.

Example:

- `Contains(AsArray(2,7,8,9), 2)` will return `True`.

Inputs:

- `array: List[any]`
- `value: any`

Outputs:

- `boolean`

### `RandomOf(array)`

Returns a random element of the given array. All the elements are equally likely
to be chosen.

Example:

- `RandomOf(AsArray(1,3,5,7,11,13))` will return one of the array elements.

Inputs:

- `array: List[any]`

Outputs:

- `any | null`

### `Find(array, function)`

Returns the first element of the given array for which the function yields
`Truthy` value.

In GSS, there are six `Falsy` values: `False` , `0` , `""` , `Null` , `[]`
(empty array), and `{}` (empty map). Everything else is considered `Truthy`.

Function argument `function` has one input argument which is the `item` of the
array.

Example:

- `Find(AsArray(1, 2, 3, 4), Function(item, Greater(item, 2)))` will return
  number `3`.
- `Find(AsArray(1, 2, 1, 1), Function(item, Greater(item, 2)))` will return
  `Null`.

Inputs:

- `array: List[any]`
- `function: Function`

Outputs:

- `any | null`

### `Filter(array, function)`

Returns the new array with elements of the given array for which the function
yields `Truthy` value.

In GSS, there are six `Falsy` values: `False` , `0` , `""` , `Null` , `[]`
(empty array), and `{}` (empty map). Everything else is considered `Truthy`.

Function argument `function` has one input argument which is the `item` of the
array.

Example:

- `Filter(AsArray(1, 2, 3, 4), Function(item, Greater(item, 2)))` will return
  array `[3, 4]`.
- `Filter(AsArray(1, 2, 1, 1), Function(item, Greater(item, 2)))` will return
  `[]`.

Inputs:

- `array: List[any]`
- `function: Function`

Outputs:

- `List[any]`

### `Map(array, function)`

Returns the new array where each element of the given array is converted
(mapped) with the defined function.

Function argument `function` has one input argument which is the `item` of the
array.

Example:

- `Map(AsArray(1, 2, 3, 4), Function(item, Mul(item, 2)))` will return array
  `[2, 4, 6, 8]`.
- `Map(AdjacentNodes(node), Function(n, Property(n, "name")))` will return the
  list of names of adjacent nodes.

Inputs:

- `array: List[any]`
- `function: Function`

Outputs:

- `List[any]`

### `All(array, function)`

Returns `True` if the function yields `Truthy` value for all elements of the
given array.

In GSS, there are six `Falsy` values: `False` , `0` , `""` , `Null` , `[]`
(empty array), and `{}` (empty map). Everything else is considered `Truthy`.

Function argument `function` has one input argument which is the `item` of the
array.

Example:

- `All(AsArray(1, 2, 3, 4), Function(item, Greater(item, 2)))` will return
  `False`.
- `All(AsArray(1, 2, 1, 1), Function(item, Less(item, 3)))` will return `True`.

Inputs:

- `array: List[any]`
- `function: Function`

Outputs:

- `boolean`

### `Any(array, function)`

Returns `True` if the function yields `Truthy` value for any element of the
given array.

In GSS, there are six `Falsy` values: `False` , `0` , `""` , `Null` , `[]`
(empty array), and `{}` (empty map). Everything else is considered `Truthy`.

Function argument `function` has one input argument which is the `item` of the
array.

Example:

- `Any(AsArray(1, 2, 3, 4), Function(item, Greater(item, 2)))` will return
  `True`.
- `Any(AsArray(1, 2, 1, 1), Function(item, Greater(item, 3)))` will return
  `False`.

Inputs:

- `array: List[any]`
- `function: Function`

Outputs:

- `boolean`

### `Uniq(array)`

Returns an array of unique elements of the given array.

Example:

- `Uniq(AsArray(2,1,1,2,1,3,1))` will return `[2, 1, 3]`.
- `Uniq(AsArray("1", "1", 1, True, True, 1))` will return `["1", 1, True]`.

Inputs:

- `array: List[any]`

Outputs:

- `List[any]`

## Type functions

### `AsArray(value...)`

Creates and returns an array of given values.

Example:

- `AsArray("Alfa", "Bravo", "Charlie", "Delta", "Echo")` -> `["Alfa", "Bravo",
  "Charlie", "Delta", "Echo"]`

Inputs:

- `value1: any`
- `value2: any`
- `valueN: any`

Outputs:

- `List[any]`

### `AsNumber(value)`

Parses the given string or boolean and returns a number. The string should
contain only one number in base 10 and nothing else. Boolean `True` returns
number 1. Boolean `False` returns number 0.

Example:

- `AsNumber("8")` will return number 8.

Inputs:

- `value: string | number | boolean`

Outputs:

- `number`

### `AsText(value)`

Returns a textual representation of a given value.

Example:

- `AsText(Property(node, "age"))` will return `node.age` as string.

Inputs:

- `value: any`

Outputs:

- `string`

### `TypeOf(value)`

Returns the type of a given value. Type is returned as a string. Following types
are used in GSS:

- `"number"` - represents numbers
- `"boolean"` - represents booleans (`True` and `False`)
- `"string"` - represents textual values
- `"Null"` - represents null value (`Null`)
- `"Color"` - represents colors
- `"Node"` - represents graph node
- `"Edge"` - represents graph relationship
- `"Graph"` - represents graph
- `"List"` - represents an array object (e.g. `[1, 2, 3]`)
- `"Map"` - represents a map object (e.g. `{ "name": "GSS" }`)
- `"Function"` - represents function object

Example:

- `TypeOf(Property(node, "name"))` returns `string`.

Inputs:

- `value: any`

Outputs:

- `string`

## Utility functions

### `Define(name, value)`

Binds the given value to the given name. Names cannot be redefined.

Example:

- `Define(city, "London")` will set the value of the `city` to `London`.

Inputs:

- `name: Variable`
- `value: any`

### `Function(arg..., body)`

Creates a function. `body` is the expression to evaluate when the function is
called. All arguments except `body` are argument names of the function to
create. When the created function is called names `arg1`, `arg2`, ... are bound
to function arguments and available in the `body` expression. This function is
most useful in combination with `Define`.

Examples:

```
Define(makeGreeting, Function(firstName, Format("Hello, {}!", firstName)))
makeGreeting("World") // -> Hello, World!
```

```
Define(pow, Function(x, n, If(Equals(n, 1), x, Mul(x, pow(x, Sub(n, 1))))))
pow(2, 10) // -> 1024
```

Inputs:

- `arg1: Variable`
- `argN: Variable`
- `body: any`

Outputs:

- `Function`

### `Get(object, key)`

If `obj` is a List, returns the element with index `key` of list `obj` (indexing
is zero based). If `obj` is a Map, returns the value for key `key`. If `obj` is
a string, returns the letter with index `key` of string `obj` (indexing is zero
based). If `obj` is a Node, returns the value for key `key`. If `obj` is a
Relationship, returns the value for key `key`.

Examples:

- `Get(AsArray(3,6,7,3), 2)` returns number 7.
- `Get(Property(node, "map"), "year") will get the property `year` from the map
  of node properties.

Inputs:

- `object: List | Map | string | Node | Relationship` - `key: number | string`

Outputs:

- `any`

### `Size(value)`

If value is of type `List` or `Map`, returns its size. If value is of type
`string`, returns its length. If value is of type `Node`, returns the size of
node properties. If value is of type `Relationship`, returns the size of
relationship properties. If value is of type `Graph`, returns the size of the
graph (nodes and relationships)

Example:

- `Size(Property(node, "name"))` returns the size of the node's `name` property.

Inputs:

- `value: List | Map | string | Node | Relationship | Graph`

Outputs:

- `number`
