---
id: reference-guide
title: Style script reference guide
sidebar_label: Reference guide
---

Style script is a language for customizing the visual display of graphs. The main 
building blocks of style script are expressions and directives. Style script 
files are a sequence of expressions and directives.

## Expressions

Expressions are used to combine values to create new values using functions. For
example expression
```
Add(2, 5) 
  -> 7
```
creates a new value 7 from values 2 and 5. There are a lot of functions built into style script so there are even more ways to combine values. There is even a
function to create new functions.

When expressions are evaluated, values are created. There are several types of 
style script values: `Boolean`, `Color`, `Number`, `String`, `Array`,
`Dictionary`, `Function`and `Null`.

An expression can be either literal expressions, name expressions or function 
applications. Literal expressions exist for `Color`s, `Number`s and `String`s. 

This is a literal expression for `String`s.
```
"Hello"
  -> Hello
```
It evaluates to the value `"Hello"` of type `String`. The newline character and 
double quotes can be escaped in strings using \\ (backslash).
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
them in the environment (lexical scope). Names can start with any of the 
lower case or upper case letters of the English alphabet and apart from those can 
contain digits and the following characters: ?, !, $, -, _, ., *. Names can be 
defined using the `Define` function.
```
Define(superhero, "Iron Man")
superhero
  -> Iron Man
```
In the previous example the value `"Iron Man"` was bound to the name 
`superhero`. After that name expression `superhero` evaluates to the value 
`"Iron Man"` fo type `String`.

There are many built-in names that are bound to useful values. Most used are 
boolean values which are bound to `True` and `False` and null value which is
bound to `Null`. Also, all the CSS web colors are bound to their names.
```
dodgerblue
  -> #1e90ff
forestgreen
  -> #228b22
```

The third type of expressions are function application expressions. A function can 
be applied to the list of expressions (arguments) in the following way.
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
If(Equals?(mood, "happy"),
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
Define(square, Fucntion(x, Mul(x, x)))
square(2)
  -> 4
```
In the previous example the name `x` isn't evaluated in the first line, and
neither is the expression `Mul(x, x)`. In the second line when the function `square`
is called number 2 will be bound to the name `x` and only then will `Mul(x, x)`
be evaluated.


## Directives

Directives are the second building block of style script. Directive names start
with '@'. The name is followed by the optional expression (filter) which is 
followed by an opening curly brace, directive body and a closing curly brace. 
The directive body is a list of pairs of property names and expressions. 
Property names and expressions are separated by a colon and after every 
expression a newline must follow. The directive structure is the following.
```
@<DirectiveName> <expression>? {
  <property-name-1>: <expression-1>
  ...
  ...
  <property-name-n>: <expression-n>
}
```
Like in CSS, directives defined later override properties of the previous 
directives. 

Style script currently has two directives: `@NodeStyle`, for defining visual 
style of graph nodes, and `@EdgeStyle` for defining visual style of graph edges.

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

`@NodeStyle` directive is used for defining style properties of a graph node. It
is possible to filter the nodes to which the directive applies by providing an
optional predicate after directive name and before the opening curly brace. 

Before any expressions are evaluated (including the predicate) the name `node` 
is bound to the graph node for which the directive is being evaluated. Graph 
node is of type `Dictionary` and has all information about the node (properties,
labels).

Here is an example of `@NodeStyle` directive that is applied to all graph nodes 
with the label superhero
```
@NodeStyle HasLabel?(node, vehicle) {
  label: Format("{}, horsepower: {}", 
                Property(node, "model"),
                Property(node, "horsepower"))
}
```
Predicate can be any expression that returns a value of type `Boolean`. It 
should depend on `node`, because if it doesn't, it will either be applied to all
nodes or to no nodes.
```
@NodeStyle And(HasProperty(node, "name"),
               Equals?(Property(node, "name"), "Tony Stark")) {
  color: gold
  shadow-color: red
  label: "You know who I am"
}
```

Here is the list of all properties that can be defined in the `@NodeStyle` 
directive, along with their expected types.

- `border-color`: `Color`
- `border-color-hover`: `Color`
- `border-color-selected`: `Color`
- `border-width`: `Number`
- `border-width-selected`: `Number`
- `color`: `Color`
- `color-hover`: `Color`
- `color-selected`: `Color`
- `font-background-color`: `Color`
- `font-color`: `Color`
- `font-family`: `String`
- `font-size`: `Number`
- `image-url`: `String`
- `image-url-selected`: `String`
- `label`: `String`
- `shadow-color`: `Color`
- `shadow-size`: `Number`
- `shadow-offset-x`: `Number`
- `shadow-offset-y`: `Number`
- `shape`: `String` (`"dot"`, `"square"`, `"diamond"`, `"triangle"`, 
  `"triangleDown"`, `"star"`)
- `size`: `Number`

### `@EdgeStyle`

`@EdgeStyle` directive is used for defining style properties of a graph edge. 
Most things work like `@NodeStyle` directive with one exception: the directive 
will bind the name `edge` to the edge for which the directive is being 
evaluated (`@NodeStyle` binds the name `node`).

Here is the list of all properties that can be defined in the `@EdgeStyle` 
directive, along with their expected types.

- `arrow-size`: `Number`
- `color`: `Color`
- `color-hover`: `Color`
- `color-selected`: `Color`
- `font-background-color`: `Color`
- `font-color`: `Color`
- `font-family`: `String`
- `font-size`: `Number`
- `label`: `String`
- `shadow-color`: `Color`
- `shadow-size`: `Number`
- `shadow-offset-x`: `Number`
- `shadow-offset-y`: `Number`
- `type`: `String` (`"straight"` or `"smooth"`)
- `width`: `Number`
- `width-hover`: `Number`
- `width-selected`: `Number`

## File Structure

Style script files are composed of expressions and directives. All expressions 
outside directives are evaluated first in the global environment. This is useful
for defining names using function `Define`. After that `@NodeStyle` and 
`@EdgeStyle` directives are evaluated for each node and edge, respectively. All 
the names in the global environment are visible while applying the directives so
they can be used for defining property values inside directives.

Example.
```
Define(square, Function(x, Mul(x, x)))
Define(maxAllowedDebt, 10000)

@NodeStyle HasLabel?(node, "BankUser") {
  size: square(Property(node, "debt"))
  color: If(Greater?(Property(node, "debt"), maxAllowedDebt),
            red,
            lightblue)
}
```
Names `square` and `maxAllowedDebt` are visible inside `@NodeStyle` directive.

## Builtin functions

### `Add(value1, [value2, value3,...])`

- `value1`, `value2`, `value3`, `...`: `Number`
- Returns: `Number`

Returns the sum of given values.

### `And(value1, [value2, value3,...])`

- `value1`, `value2`, `value3`, `...`: `Boolean`
- Returns: `Boolean`

Returns `True` if all of the given values are `True`. Returns `False` otherwise.
Expressions after first expression that evaluates to `False` are not evaluated.

### `Array([value1, value2,...])`

- `value1`, `value2`, `...`: `Any`
- Returns: `Array`

Creates and returns an array of given values.

### `AsNumber(value)`

- `value`: `String`
- Returns: `Number`

Parses the given string and returns a number. The string should contain only one 
number in base 10 and nothing else.

### `AsText(value)`

- `value`: `Any`
- Returns: `String`

Returns a textual representation of given value.

### `Blue(color)`

- `color`: `Color`
- Returns: `Number`

Returns blue component of given color. The value will be between 0 and 255 (both
inclusive).

### `Call(f, [arg1, arg2,...])`

- `f`: `Function`
- `arg1`, `arg2`, `...`: `Any`

Calls function `f` with given arguments and returns `f(arg1, arg2,...)`.

### `Contains?(array, value)`

- `array`: `Array`
- `value`: `Any`
- Returns: `Boolean`

Returns `True` if `array` contains `value`, `False` otherwise.

### `Concat(string1, [string2, string3,...])`

- `string1`, `string2`, `string3`, `...`: `String`
- Returns: `String`

Concatanetes given strings.

### `Darker(color)`

- `color`: `Color`
- Returns: `Color`

Returns a darker version of the given color.

### `Define(name, value)`

- `name`: `Name`
- `value`: `Any`

Binds the given value to the given name. Names cannot be redefined.

### `Div(value1, value2)`

- `value1`: `Number`
- `value2`: `Number`
- Returns: `Number`

Returns `value1` divided by `value2`.

### `Do(exp1, [exp2, exp3,...])`

- `exp1`, `exp2`, `exp3`, `...`: `Any`
- Returns: `Any`

Evaluates all given expressions and returns the value of last one.

### `Equals?(value1, value2)`

- `val1`: `Any`
- `val2`: `Any`
- Returns: `Any`

Returns `True` if given values are equal, `False` otherwise. `Number`s, 
`String`s and `Boolean`s are compared by value, while objects of all other types
are compared by identity.

### `Error(message)`

- `message`: `String`
- Returns: `Never`

Throws an error with the given message.

### `Exp(value)`

- `value`: `Number`
- Returns: `Number`

Returns 2.71828... raised to the power `value`.

### `Format(formatString, [val1, val2,...])`

- `formatString`: `String`
- `val1`, `val2`, `...`: `Any`
- Returns: `String``

Substitutes occurences of curly brace pairs in `formatString` with textual 
representations of given values. First occurrence is substituted with first 
value, second occurrence with second value and so on. 

Examples:

```
Format("{}, {}!", "Hello", "World") 
  -> Hello, World!
```
Text inside curly braces is ignored.
```
Format("{name}: {age}", "Antun", 23)
  -> Antun: 23
```

### `Function([arg1, arg2,...], body)`

- `arg1`, `arg2`, `...`: `Name`
- `body`: `Any`
- Returns: `Function`

Creates a function. `body` is the expression to evaluate when the function is
called. All arguments except `body` are argument names of the function to 
create. When the created function is called names `arg1`, `arg2`, `...` are 
bound to function arguments and available in the `body` expression. This 
function is most useful in combination with `Define`.

Examples:

```
Define(makeGreeting, Function(firstName,
  Format("Hello, {}!", firstName)))
makeGreeting("World")
  -> Hello, World!
```

```
Define(pow, Function(x, n, 
  If(Equals?(n, 1),
    x,
    Mul(x, pow(x, Sub(n, 1))))))
pow(2, 10)
  -> 1024
```

### `Get(obj, key)`

- `obj`: `Array` or `Dictionary`
- `key`: `Number` if `obj` is `Array`, `String` if `obj` is `Dictionary`
- Returns: `Any`

If `obj` is `Array`, returns the element with index `key` of array `obj` 
(indexing is zero based). If `obj` is `Dictionary` returns the value for key 
`key`.

### `Greater?(value1, value2)`

- `value1`: `Number`
- `value2`: `Number`
- Returns: `Boolean`

Returns `True` if `value1` is greater than `value2`, `False` otherwise.

### `Green(color)`

- `color`: `Color`
- Returns: `Number`

Returns green component of given color. The value will be between 0 and 255 
(both inclusive).

### `HasLabel?(node, label)`

- `node`: `Dictionary`
- `label`: `String`
- Returns: `Boolean`

Returns `True` if given graph node `node` has label `label`, `False` otherwise.

### `HasProperty?(nodeOrEdge, propertyName)`

- `nodeOrEdge`: `Dictionary`
- `propertyName`: `String`
- Returns: `Boolean`

Returns `True` if given graph node or graph edge `nodeOrEdge` has property
`propertyName`.

### `Identity(node)`

- `node`: `Dictionary`
- Returns: `Number`

Returns the id of the given graph node.

### `If(condition, than, else)`

- `condition`: `Boolean`
- `than`: `Any`
- `else`: `Any`
- Returns: `Any`

If `condition` is `True` returns `than`, otherwise returns `else`.

### `Labels(node)`

- `node`: `Dictionary`
- Returns: `Array`

Returns the array of labels of the given graph node.

### `Less?(value1, value2)`

- `value1`: `Number`
- `value2`: `Number`
- Returns: `Boolean`

Returns `True` if `value1` is less than `value2`, `False` otherwise.

### `Lighter(color)`

- `color`: `Color`
- Returns: `Color`

Returns a lighter version of the given color.

### `Log(value)`

- `value`: `Number`
- Returns: `Number`

Returns the logarithm (to the base `e`) of `value`.

### `Log10(value)`

- `value`: `Number`
- Returns: `Number`

Returns the logarithm (to the base 10) of `value`.

### `LowerCase(string)`

- `string`: `String`
- Returns: `String`

Returns the value of `string` converted to lower case.

### `Mix(color1, color2)`

- `color1`: `Color`
- `color2`: `Color`
- Returns: `Color`

Mixes given colors (performs linear interpolation).

### `Mul(value1, [value2, value3,...])`

- `value1`, `value2`, `value3`, `...`: `Number`
- Returns: `Number`

Returns the product of given values.

### `Not(value)`

- `value`: `Boolean`
- Returns: `Boolean`

Returns `True` if `value` is `False`, and returns `False` if `value` is `True`.

### `Or(value1, [value2, value3,...])`

- `value1`, `value2`, `value3`, `...`: `Boolean`
- Returns: `Boolean`

Returns `True` if any of the given values is `True`. Returns `False` otherwise.
Expressions after first expression that evaluates to `True` are not evaluated.

### `Print([value1, value2,...])`

- `value1`, `value2`, `...`: `Any`
- Returns: `Null`

Logs the given values to the console.

### `Property(nodeOrEdge, propertyName)`

- `nodeOrEdge`: `Dictionary`
- `propertyName`: `String`
- Returns: `Any``

Returns the property with name `propertyName` of given graph node or graph edge.

### `Random()`

- Returns: `Number`

Returns a random number between 0 (inclusive) and 1 (exclusive). All the 
possible numbers are equally likely to be returned.

### `RandomElement(array)`

- `array`: `Array`
- Returns: `Any`

Returns a random element of the given array. All the elements are equally likely
to be chosen.

### `RandomInteger(bound)`

- `bound`: `Number`
- Returns: `Number`

Returns a random integer between 0 (inclusive) and `bound` (exclusive). All the 
possible numbers are equally likely to be returned.

### `Red(color)`

- `color`: `Color`
- Returns: `Number`

Returns red component of given color. The value will be between 0 and 255 (both
inclusive).

### `RGB(red, green, blue)`

- `red`: `Number`
- `green`: `Number`
- `blue`: `Number`
- Returns: `Color`

Creates a new color with given components.

### `Size(value)`

- `value`: `Array`, `Dictionary` or `String`
- Returns: `Number`

If `value` is of type `Array` or `Dictionary`, returns its size. If `value` is 
of type `String`, returns its length;

### `Sqrt(value)`

- `value`: `Number`
- Returns: `Number`

Returns the square root of `value`.

### `Sub(value1, value2)`

- `value1`: `Number`
- `value2`: `Number`
- Returns: `Number`

Returns `value1` minus `value2`.

<!-- ### `Try(tryClause, err, catchClause)` -->

### `Type(edge)`

- `edge`: `Dictionary`
- Returns: `String`

Returns the type of the given graph edge.

### `TypeOf(value)`

- `value`: `Any`
- Returns: `String`

Returns the type of the given value.

### `UpperCase(string)`

- `string`: `String`
- Returns: `String`

Returns the value of `string` converted to upper case.
