---
id: reference-guide
title: Graph Style Script reference guide
sidebar_label: GSS reference guide
---

The main building blocks of Graph Style Script (GSS) are expressions and
directives. GSS files are a sequence of expressions and directives.

## Expressions

Expressions are used to combine values to create new values using functions. For
example, the expression:

```
Add(2, 5)
  -> 7
```

creates a new value 7 from values 2 and 5. There are a lot of functions built
into Graph Style Script so there are even more ways to combine values. There is
even a function to create new functions.

When expressions are evaluated, values are created. There are several types of
Graph Style Script values: `Boolean`, `Color`, `Number`, `String`, `Array`,
`Dictionary`, `Function`and `Null`.

An expression can be either literal expressions, name expressions or function
applications. Literal expressions exist for `Color`s, `Number`s and `String`s.

This is a literal expression for `String`s.

```
"Hello"
  -> Hello
```

It evaluates to the value `"Hello"` of the type `String`. The newline character
and double quotes can be escaped in strings using \\ (backslash).

```
"In the end he said: \"I am Iron Man!\""
  -> In the end he said: "I am Iron Man!"
```

These are literal expressions for `Number`s.

```
123
  -> 123
3.14159
  -> 3.14159
```

Literal expressions for colors are hex strings starting with '#'. This is a
literal expression for the color red.

```
#ff0000
  -> #ff0000
```

Name expressions are names that can be evaluated if there are values bound to
them in the environment (lexical scope). Names can start with any of the lower
case or upper case letters of the English alphabet and apart from those can
contain digits and the following characters: -, \_. Names can be defined using
the `Define` function.

```
Define(superhero, "Iron Man")
superhero
  -> Iron Man
```

In the previous example the value `"Iron Man"` was bound to the name
`superhero`. After that name expression `superhero` evaluates the value `"Iron
Man"` to type `String`.

There are many built-in names that are bound to useful values. Most used are
boolean values which are bound to `True` and `False` and null value which is
bound to `Null`. Also, all the CSS web colors are bound to their names.

```
dodgerblue
  -> #1e90ff
forestgreen
  -> #228b22
```

The third type of expressions are function application expressions. A function
can be applied to the list of expressions (arguments) in the following way.

```
Concat("Agents", " ", "of", " ", "S.H.I.E.L.D.")
  -> Agents of S.H.I.E.L.D.
```

Here the function `Concat` was applied to the list of string literal expressions
to produce their concatenation. Any expression can be an argument.

Not all expressions have to be evaluated. For example, when calling `If`
function one argument will not be evaluated.

```
Define(mood, "happy")
Define(name, "Happy Hogan")
If(Equals(mood, "happy"),
   Format("{} is happy today.", name),
   Format("{} is not happy today.", name))
  -> Happy Hogan is happy today.
```

In the previous example expression `Format("{} is not happy today", name)` will
not be evaluated because its value is not needed.

Some other function will not evaluate their arguments because they are
interested in their names and not values. For example, when creating a new
function argument names aren't evaluated, but are remembered to be later bound
to the function arguments when the function is called.

```
Define(square, Function(x, Mul(x, x)))
square(2)
  -> 4
```

In the previous example the name `x` isn't evaluated in the first line, and
neither is the expression `Mul(x, x)`. In the second line when the function
`square` is called number 2 will be bound to the name `x` and only then will
`Mul(x, x)` be evaluated.

## Directives

Directives are the second building block of style script. Directive names start
with '@'. The name is followed by the optional expression (filter) which is
followed by an opening curly brace, directive body and a closing curly brace.
The directive body is a list of pairs of property names and expressions.
Property names and expressions are separated by a colon and after every
expression, a new line must follow. The directive structure is the following.

```
@<DirectiveName> <expression> {
  <property-name-1>: <expression-1>
  ...
  ...
  <property-name-n>: <expression-n>
}
```

Like in CSS, directives defined later override properties of the previous
directives.

Graph Style Script currently has four directives:

* `@NodeStyle` - for defining the visual style of graph nodes.
* `@EdgeStyle` - for defining the visual style of graph relationships.
* `@ViewStyle` - for defining the general graph style properties.
* `@ViewStyle.Map` - for defining the graph style properties when map
  is in the background.

An example of a directive is `@NodeStyle` directive which can be used to specify
style properties of a graph node.

```
@NodeStyle {
  border-width: 2
  color: #abcdef
  label: "Hello, World!"
}
```

### `@NodeStyle`

The `@NodeStyle` directive is used for defining style properties of a graph
node. It is possible to filter the nodes to which the directive applies by
providing an optional predicate after the directive name and before the opening
curly brace.

Before any expressions are evaluated (including the predicate) the name `node`
is bound to the graph node for which the directive is being evaluated. Graph
node is of type `Dictionary` and has all information about the node (properties,
labels).

Here is an example of a `@NodeStyle` directive that is applied to all graph
nodes with the label superhero:

```
@NodeStyle HasLabel(node, vehicle) {
  label: Format("{}, horsepower: {}",
                Property(node, "model"),
                Property(node, "horsepower"))
}
```

The predicate can be any expression that returns a value of type `Boolean`. It
should depend on `node`, because if it doesn't, it will either be applied to all
nodes or to no nodes.

```
@NodeStyle And(HasProperty(node, "name"),
               Equals(Property(node, "name"), "Tony Stark")) {
  color: gold
  shadow-color: red
  label: "You know who I am"
}
```

Take a look at the [GSS @NodeStyle directive
properties](/docs/memgraph-lab/style-script/gss-nodestyle-directive) page to see
all node styling possibilities.

### `@EdgeStyle`

The `@EdgeStyle` directive is used for defining the style properties of a graph
relationship. Most things work like the `@NodeStyle` directive with one
exception: the directive will bind the name `edge` to the relationship for which
the directive is being evaluated (`@NodeStyle` binds the name `node`).

Take a look at the [GSS @EdgeStyle directive
properties](/docs/memgraph-lab/style-script/gss-edgestyle-directive) page to see
all relationship styling possibilities.

### `@ViewStyle`

`@ViewStyle` directive is used for defining style properties of a general
graph view: link distance, view, physics, repel force, etc. It is also
possible to use a predicate expression which acts as a filter to apply
the defined properties to the final directive output.

```
@ViewStyle <predicate expression> {
  <property-name-1>: <value expression-1>
  ...
  <property-name-n>: <value expression-n>
}
```

Similar to `@NodeStyle` and `@EdgeStyle`, `@ViewStyle` has a built-in variable
`graph` which can be used for directive filter or property assignment.

An example below shows a general directive style definition and a directive where
style properties will only be applied if there are more than 10 nodes in the graph.

```
@ViewStyle {
  collision-radius: 15
  physics-enabled: True
}

@ViewStyle Greater(NodeCount(graph), 10) {
  physics-enabled: False
  repel-force: -300
}
```

If there are less than 10 nodes in the graph, the final default graph style properties
will be:

```json
{
  "collision-radius": 15,
  "physics-enabled": true
}
```

Otherwise, if there are more than 10 nodes in the graph, the final default graph style
properties will be:

```json
{
  "collision-radius": 15,
  "physics-enabled": false,
  "repel-force": -300
}
```

Take a look at the [GSS @ViewStyle directive
properties](/docs/memgraph-lab/style-script/gss-viewstyle-directive) page to see
all styling possibilities.

### `@ViewStyle.Map`

`@ViewStyle.Map` directive is a subset of `@ViewStyle` because it defines additional style
properties for a graph view when there is a map background. The map view will be available
only if:

* `@ViewStyle` contains a property `view` set to value `"map"`.
* There is at least one node with defined `latitude` and `longitude` properties

It is also possible to use a predicate expression which acts as a filter to
apply the defined properties to the final directive output.

```
@ViewStyle.Map <predicate expression> {
  <property-name-1>: <value expression-1>
  ...
  <property-name-n>: <value expression-n>
}
```

Similar to `@ViewStyle`, `@ViewStyle.Map` also has a built-in
variable `graph` which can be used for directive filter or property assignment.

An example below shows a general directive style definition and a directive where
style properties will be only applied if there are more than 10 nodes in the graph.

```
@ViewStyle {
  view: "map"
}

@ViewStyle.Map {
  tile-layer: "detailed"
}

@ViewStyle.Map Greater(NodeCount(graph), 10) {
  tile-layer: "dark"
}
```

If there are less than 10 nodes in the graph, the final map graph style properties
will be:

```json
{
  "tile-layer": "detailed"
}
```

Otherwise, if there are more than 10 nodes in the graph, the final map graph style
properties will be:

```json
{
  "tile-layer": "dark"
}
```

Take a look at the [GSS @ViewStyle.Map directive
properties](/docs/memgraph-lab/style-script/gss-viewstyle-map-directive) page to see
all styling possibilities.

## Built-in functions

Graph Style Script has a large number of built-in functions that can help you
with achieving the right style for your graph. Take a look at the [list of GSS
built-in functions](/docs/memgraph-lab/style-script/gss-functions).

## Built-in colors

Graph Style Script comes with built-in colors that you can use the color's name.
Take a look at the [list of built-in
colors](/docs/memgraph-lab/style-script/gss-colors).

## Built-in variables

Graph Style Script has a few built-in variables that you can use: `node`,
`edge`, and `graph`. Read more about it in the [list of built-in
variables](/docs/memgraph-lab/style-script/gss-variables).

## File Structure

Style script files are composed of expressions and directives. All expressions
outside directives are evaluated first in the global environment. This is useful
for defining names using function `Define`. After that `@NodeStyle` and
`@EdgeStyle` directives are evaluated for each node and relationship,
respectively. All the names in the global environment are visible while applying
the directives so they can be used for defining property values inside
directives.

For example:

```
Define(square, Function(x, Mul(x, x)))
Define(maxAllowedDebt, 10000)

@NodeStyle HasLabel(node, "BankUser") {
  size: square(Property(node, "debt"))
  color: If(Greater(Property(node, "debt"), maxAllowedDebt),
            red,
            lightblue)
}
```

Names `square` and `maxAllowedDebt` are visible inside `@NodeStyle` directive.
