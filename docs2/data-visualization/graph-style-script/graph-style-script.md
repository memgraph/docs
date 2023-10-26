---
id: graph-style-script-language
title: Graph Style Script language
sidebar_label: Graph Style Script language
slug: /graph-style-script-language
---

[![Related - Tutorial](https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge)](/memgraph/tutorials/style-your-graphs-in-memgraph-lab)

This guide will show you how to easily get started with the Graph Style Script
language. GSS is a language for customizing the visual display of graphs. For a
complete list of available features consult the [Style script
reference guide](./reference-guide.md).

## Graph example

In this guide, we will use an example graph with European countries and cities.
The data can be found
[here](https://memgraph.com/docs/memgraph/tutorials-overview/backpacking-through-europe).
Countries have the label `Country`, while cities have the label `City`. All
nodes have the property `name`. Cities have many additional properties,
including `country` (containing country) and `drinks_USD` (average drink price).

## Setting graph labels

We want to label country nodes with country names, and city nodes with city
names and containing country names. To achieve that we can use two directives.
The first one selects countries and the second one selects cities.

```cpp
@NodeStyle HasLabel(node, "Country") {
  label: Property(node, "name")
}

@NodeStyle HasLabel(node, "City") {
    label: Format("{cityName}, {countryName}",
                  Property(node, "name"),
                  Property(node, "country"))
}
```

In the case of the [`Format`](gss-functions.md#formatformatstring-val1-val2)
function, content inside the curly braces is ignored but can be helpful for
clarity.

## Setting node images

It would be nice to display flags in the country nodes. This can be achieved
using URLs of flag images. There is a website that hosts many world flags so we
can use images from [there](https://cdn.countryflags.com). Their API expects a
country name as a part of the URL path so we will make the following directive.

```cpp
@NodeStyle HasLabel(node, "Country") {
  image-url: Format("https://cdn.countryflags.com/thumbs/{}/flag-800.png",
                    LowerCase(Property(node, "name")))
}
```

Unfortunately, this won't work for all countries. Flags for England and Scotland
cannot be found on the website because they aren't real countries. So we can get
around that by providing custom directives below the general one above.

```cpp
@NodeStyle Equals(Property(node, "name"), "England") {
   image-url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png"
}

@NodeStyle Equals(Property(node, "name"), "Scotland") {
  image-url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1200px-Flag_of_Scotland.svg.png"
 }
```

Also, URLs for a country name with whitespace inside them don't so we also have
to provide custom URLs for the Czech Republic and Bosnia and Herzegovina.

```cpp
@NodeStyle Equals(Property(node, "name"), "Bosnia and Herzegovina") {
   image-url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1200px-Flag_of_Bosnia_and_Herzegovina.svg.png"
 }

 @NodeStyle Equals(Property(node, "name"), "Czech Republic") {
   image-url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/2560px-Flag_of_the_Czech_Republic.svg.png"
 }
```

Now all the country nodes have their flags displayed.

## Highlighting interesting nodes

We can highlight nodes with low drink prices in the following way. We want to
use a beer image and a bigger size along with a red shadow.

```cpp
@NodeStyle And(
     HasLabel(node, "City"),
     Less(Property(node, "drinks_USD"), 5)) {
  size: 50
  image-url: "https://www.sciencenews.org/wp-content/uploads/2020/05/050620_mt_beer_feat-1028x579.jpg"
  shadow-color: red
 }
```

## Caching results for faster performance

To normalize some value, for example, the size or width of all the
nodes or relationships in the graph, find the minimum and maximum values
of all nodes.
For example, a node labled "Person"` has the property `age` that holds the age information
of a particular person. We want the node property `size` to be 5 for the youngest person
and 20 for the oldest one in the presented graph. All other node sizes should be normalized
within that range.

One of the solutions could look like this:

```cpp
// Size range min/max variables
Define(MIN_SIZE, 5)
Define(MAX_SIZE, 20)
Define(PROP_NAME, "age")
Define(SIZE_RANGE, Sub(MAX_SIZE, MIN_SIZE))

// A set of utility functions
// Create a new array of property values from an array of nodes
Define(GetProperties, Function(nodes, propName,
  Map(nodes, Function(singleNode, Property(singleNode, propName)))
))
// Keep only the numeric values from an array of values
Define(KeepNumericValues, Function(values,
  Filter(values, Function(value, IsNumber(value)))
))

// Functions to find min and max value in the input nodes
Define(GetMaxValue, Function(nodes,
  Max(KeepNumericValues(GetProperties(nodes, PROP_NAME)))
))
Define(GetMinValue, Function(nodes,
  Min(KeepNumericValues(GetProperties(nodes, PROP_NAME)))
))

// Normalize function that receives two inputs: node (n) and
// graph (g) and returns normalized value into a range
// [MIN_SIZE, MAX_SIZE]
Define(Normalize, Function(n, g,
  Add(
    MIN_SIZE,
    Mul(
      SIZE_RANGE,
      Div(
        Sub(Property(n, PROP_NAME), GetMinValue(Nodes(g))),
        Sub(GetMaxValue(Nodes(g)), GetMinValue(Nodes(g)))
      )
    )
  )
))

// For all nodes with the label "Person" and numeric property "age"
@NodeStyle And(HasLabel(node, "Person"), IsNumber(Property(node, PROP_NAME))) {
  color: white
  size: Normalize(node, graph)
  width: Div(Normalize(node, graph), 5)
  label: Format("Age: {}", AsText(Property(node, PROP_NAME)))
}
```

![Using Graph Style Script to style different nodes by its size](../data/caching-results-gss.png)

The problem with the solution above is slow performance. The `Normalize` function is called twice
for each node in the graph view. Each `Normalize` call iterates through all nodes three times: two
times for `GetMinValue` and once for `GetMaxValue`. For small graphs, you won't see a difference
in performance but as the number of nodes rises the performance issues will follow. 

To solve this issue, cache the results by calculating outside of `@NodeStyle` and
`@EdgeStyle` directives where the variable `graph` is also available.
Inside the `@NodeStyle` directive, a local variable can be used to store the normalized
value and use it with `size` and `width` properties thus calling the `Normalize` function only once.

Check the improved GSS code below:

```cpp
// Size range min/max variables
Define(MIN_SIZE, 5)
Define(MAX_SIZE, 20)
Define(PROP_NAME, "age")
Define(SIZE_RANGE, Sub(MAX_SIZE, MIN_SIZE))

// A set of utility functions
// Create a new array of property values from an array of nodes
Define(GetProperties, Function(nodes, propName,
  Map(nodes, Function(singleNode, Property(singleNode, propName)))
))
// Keep only the numeric values from an array of values
Define(KeepNumericValues, Function(values,
  Filter(values, Function(value, IsNumber(value)))
))

// Variables MAX_VALUE and MIN_VALUE will hold the max and min
// values of all node properties.
// The If statement is used to handle errors when there are no values to calculate
// min and max from.
Define(MAX_VALUE, If(
  Greater(NodeCount(graph), 0),
  Max(KeepNumericValues(GetProperties(Nodes(graph), PROP_NAME))),
  0
))
Define(MIN_VALUE, If(
  Greater(NodeCount(graph), 0),
  Min(KeepNumericValues(GetProperties(Nodes(graph), PROP_NAME))),
  0
))

// Normalize function that receives one inputs: node and
// returns normalized value into a range [MIN_SIZE, MAX_SIZE]
Define(Normalize, Function(n,
  Add(
    MIN_SIZE,
    Mul(
      SIZE_RANGE,
      Div(
        Sub(Property(n, PROP_NAME), MIN_VALUE),
        Sub(MAX_VALUE, MIN_VALUE)
      )
    )
  )
))

// For all the nodes with label "Person" and numeric property "age"
@NodeStyle And(HasLabel(node, "Person"), IsNumber(Property(node, PROP_NAME))) {
  // Local variable used to cache a result from function Normalize
  Define(NORM, Normalize(node))

  color: white
  size: NORM
  width: Div(NORM, 5)
  label: Format("Age: {}", AsText(Property(node, PROP_NAME)))
}
```

## Main building blocks

The main building blocks of Graph Style Script (GSS) are expressions and
directives. GSS files are a sequence of expressions and directives.

### Expressions

Expressions are used to combine values to create new values using functions. For
example, the expression:

```cpp
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

```cpp
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

```cpp
123
  -> 123
3.14159
  -> 3.14159
```

Literal expressions for colors are hex strings starting with '#'. This is a
literal expression for the color red.

```cpp
#ff0000
  -> #ff0000
```

Name expressions are names that can be evaluated if there are values bound to
them in the environment (lexical scope). Names can start with any of the lower
case or upper case letters of the English alphabet and apart from those can
contain digits and the following characters: -, \_. Names can be defined using
the `Define` function.

```cpp
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

```cpp
dodgerblue
  -> #1e90ff
forestgreen
  -> #228b22
```

The third type of expressions are function application expressions. A function
can be applied to the list of expressions (arguments) in the following way.

```cpp
Concat("Agents", " ", "of", " ", "S.H.I.E.L.D.")
  -> Agents of S.H.I.E.L.D.
```

Here the function `Concat` was applied to the list of string literal expressions
to produce their concatenation. Any expression can be an argument.

Not all expressions have to be evaluated. For example, when calling `If`
function one argument will not be evaluated.

```cpp
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

```cpp
Define(square, Function(x, Mul(x, x)))
square(2)
  -> 4
```

In the previous example the name `x` isn't evaluated in the first line, and
neither is the expression `Mul(x, x)`. In the second line when the function
`square` is called number 2 will be bound to the name `x` and only then will
`Mul(x, x)` be evaluated.

### Directives

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

```cpp
@NodeStyle {
  border-width: 2
  color: #abcdef
  label: "Hello, World!"
}
```

#### `@NodeStyle`

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

```cpp
@NodeStyle HasLabel(node, vehicle) {
  label: Format("{}, horsepower: {}",
                Property(node, "model"),
                Property(node, "horsepower"))
}
```

The predicate can be any expression that returns a value of type `Boolean`. It
should depend on `node`, because if it doesn't, it will either be applied to all
nodes or to no nodes.

```cpp
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

#### `@EdgeStyle`

The `@EdgeStyle` directive is used for defining the style properties of a graph
relationship. Most things work like the `@NodeStyle` directive with one
exception: the directive will bind the name `edge` to the relationship for which
the directive is being evaluated (`@NodeStyle` binds the name `node`).

Take a look at the [GSS @EdgeStyle directive
properties](/docs/memgraph-lab/style-script/gss-edgestyle-directive) page to see
all relationship styling possibilities.

#### `@ViewStyle`

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

```cpp
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

#### `@ViewStyle.Map`

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

```cpp
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

### Built-in functions

Graph Style Script has a large number of built-in functions that can help you
with achieving the right style for your graph. Take a look at the [list of GSS
built-in functions](/docs/memgraph-lab/style-script/gss-functions).

### Built-in colors

Graph Style Script comes with built-in colors that you can use the color's name.
Take a look at the [list of built-in
colors](/docs/memgraph-lab/style-script/gss-colors).

### Built-in variables

Graph Style Script has a few built-in variables that you can use: `node`,
`edge`, and `graph`. Read more about it in the [list of built-in
variables](/docs/memgraph-lab/style-script/gss-variables).

### File Structure

Style script files are composed of expressions and directives. All expressions
outside directives are evaluated first in the global environment. This is useful
for defining names using function `Define`. After that `@NodeStyle` and
`@EdgeStyle` directives are evaluated for each node and relationship,
respectively. All the names in the global environment are visible while applying
the directives so they can be used for defining property values inside
directives.

For example:

```cpp
// These are the global variables
Define(square, Function(x, Mul(x, x)))
Define(maxAllowedDebt, 10000)

@NodeStyle HasLabel(node, "BankUser") {
  // This is a local variable
  Define(nodeDebt, Property(node, "debt"))

  size: square(nodeDebt)
  color: If(Greater(nodeDebt, maxAllowedDebt),
            red,
            lightblue)
}
```

Names `square` and `maxAllowedDebt` are visible inside `@NodeStyle` directive.