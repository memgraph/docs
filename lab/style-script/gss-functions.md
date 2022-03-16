---
id: gss-functions
title: Graph Style Script functions
sidebar_label: GSS functions
---

## Built-in functions

Graph Style Script has a large number of built-in functions. With these
functions, you can achieve the right style for your graph.

### `Add(value1, [value2, value3,...])`

- `value1`, `value2`, `value3`, `...`: `Number`
- Returns: `Number`

Returns the sum of given values.

Example:
- `Add(10, Property(node, "age"))` will give node.age + 10 if age is defined (as
  a number).

### `And(value1, [value2, value3,...])`

- `value1`, `value2`, `value3`, `...`: `Boolean`
- Returns: `Boolean`

Returns `True` if all of the given values are `True`. Returns `False` otherwise.
Expressions after the first expression that evaluates to `False` are not
evaluated.

Example:
- `And(HasProperty?(node, "a"), HasProperty?(node, "b"))` will return `True` if
  node has properties `a` and `b`.

### `Array([value1, value2,...])`

- `value1`, `value2`, `...`: `Any`
- Returns: `Array`

Creates and returns an array of given values.

Example:
- `Array("Alfa", "Bravo", "Charlie", "Delta", "Echo")`

### `AsNumber(value)`

- `value`: `String`
- Returns: `Number`

Parses the given string and returns a number. The string should contain only one
number in base 10 and nothing else.

Example: 
- `AsNumber("8")` will return number 8.

### `AsText(value)`

- `value`: `Any`
- Returns: `String`

Example: 
- `AsText(Property(node, "age"))` will return `node.age` as string.

Returns a textual representation of a given value.

### `Blue(color)`

- `color`: `Color`
- Returns: `Number`

Returns the blue component of a given color. The value will be between 0 and 255
(both inclusive).

Examples:
- `Blue(mediumseagreen)` will return value 113.
- `Blue(#6a0dad)` will return value 173.

### `Contains?(array, value)`

- `array`: `Array`
- `value`: `Any`
- Returns: `Boolean` 

Returns `True` if `array` contains `value`, `False` otherwise.

Example:
- `Contains?(Array(2,7,8,9),2)` will return `True`.

### `Concat(string1, [string2, string3,...])`

- `string1`, `string2`, `string3`, `...`: `String`
- Returns: `String`

Concatenates given strings.

Example:
- `Concat("City", " ", "of", " ", "London")` will return `City of London`.

### `Darker(color)`

- `color`: `Color`
- Returns: `Color`

Returns a darker version of the given color.

Example:
- `color-hover: Darker(#dd2222)` will make the hover event color darker.

### `Define(name, value)`

- `name`: `Name`
- `value`: `Any`

Binds the given value to the given name. Names cannot be redefined.

Example:
- `Define(city, "London")` will set the value of the `city` to `London`.


### `Div(value1, value2)`

- `value1`: `Number`
- `value2`: `Number`
- Returns: `Number`

Returns `value1` divided by `value2`.

Example:
- `Div(Property(node, "population"), 2)` will divide `node.population` with 2 if
  population is defined (as a number).

### `Equals?(value1, value2)`

- `val1`: `Any`
- `val2`: `Any`
- Returns: `Any`

Returns `True` if given values are equal, `False` otherwise. `Number`s,
`String`s and `Boolean`s are compared by value, while objects of all other types
are compared by identity.

Example:
-  `Equals?(Property(edge, "category"),"Food")` checks if `edge.category` equals
   to text "Food".

### `Exp(value)`

- `value`: `Number`
- Returns: `Number`

Returns 2.71828... raised to the power `value`.

Example:
- `Exp(2)` will return the number 7.38905609893  

### `Format(formatString, [val1, val2,...])`

- `formatString`: `String`
- `val1`, `val2`, `...`: `Any`
- Returns: `String``

Substitutes occurrences of curly brace pairs in `formatString` with textual
representations of given values. The first occurrence is substituted with the
first value, the second occurrence with the second value and so on.

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

Examples:
- `Get(Array(3,6,7,3), 2)` returns number 7.
- `Get(Property(node, "map"), "year") will get the property `year` from the map
  of node properties. 


### `Greater?(value1, value2)`

- `value1`: `Number`
- `value2`: `Number`
- Returns: `Boolean`

Returns `True` if `value1` is greater than `value2`, `False` otherwise.

Example:
- `Greater?(Size(Labels(node)), 0)`

### `Green(color)`

- `color`: `Color`
- Returns: `Number`

Returns the green component of a given color. The value will be between 0 and
255 (both inclusive).

Examples:
- `Green(mediumseagreen)` will return value 179.
- `Green(#6a0dad)` will return value 13.

### `HasLabel?(node, label)`

- `node`: `Dictionary`
- `label`: `String`
- Returns: `Boolean`

Returns `True` if given graph node `node` has label `label`, `False` otherwise.

Example:
- `HasLabel?(node, "Category")` will return `True` if a node has a label with
  the name `Category`.

### `HasProperty?(nodeOrEdge, propertyName)`

- `nodeOrEdge`: `Dictionary`
- `propertyName`: `String`
- Returns: `Boolean`

Returns `True` if given graph node or graph edge `nodeOrEdge` has property
`propertyName`.

Example:
- `HasProperty?(node, "City")` will return `True` if a node has a property with
  the name `City`.

### `Identity(node)`

- `node`: `Dictionary`
- Returns: `Number`

Returns the id of the given graph node.

 Example:
- `label: AsText(Identity(node))` sets the label to be the node ID. 


### `If(condition, than, else)`

- `condition`: `Boolean`
- `than`: `Any`
- `else`: `Any`
- Returns: `Any`

If `condition` is `True` returns `than`, otherwise returns `else`.

Example:
- `label: If(HasProperty?(node, "name"), Property(node, "name"), "No name")`
  returns the property `name` as label if the node has one, or `No name` if the
  node doesn't have it. 


### `Join (array, delimiter)`

- `array`: `Array`
- `delimiter`: `String`
- Returns: `String`

Returns a new string by joining array elements with the delimiter.

Example:  
- `label: Join(Labels(node), ", ")` creates a label which is a string made out
  of all the labels delimited with a comma. 

### `Labels(node)`

- `node`: `Dictionary`
- Returns: `Array`

Returns the array of labels of the given graph node.

Example: 
- `label: Labels(node)` sets the label to be a list of all the node's labels. 


### `Less?(value1, value2)`

- `value1`: `Number`
- `value2`: `Number`
- Returns: `Boolean`

Returns `True` if `value1` is less than `value2`, `False` otherwise.

Example:
- `Less?(Property(node, "age"),40)` will return `True` if given `node.age` is
  less than 40.


### `Lighter(color)`

- `color`: `Color`
- Returns: `Color`

Returns a lighter version of the given color.

Example:
- `color-hover: Lighter(#dd2222)` sets a lighter on hover event color.

### `Like?(text, regex)`

- `text`: `String`
- `regex`: `String`
- Returns: `Boolean`

Returns `True` if the text matches regex. The evaluation of the regex is done
with the Javascript function `RegExp.test(text)`.

Examples:
- `Like?("Graph style script", "style")` -> `True`
- `Like?("Graph style script", "st.* script")` -> `True`
- `Like?("Graph style script", "^G")` -> `True`
- `Like?("Graph style script", "GRAPH?")` -> `False`

### `Log(value)`

- `value`: `Number`
- Returns: `Number`

Returns the logarithm (to the base `e`) of `value`.

Example:
- `Log(Property(node, "sales"))`

### `Log10(value)`

- `value`: `Number`
- Returns: `Number`

Returns the logarithm (to the base 10) of `value`.

Example:
- `Log10(Property(node, "sales"))`

### `LowerCase(string)`

- `string`: `String`
- Returns: `String`

Returns the value of `string` converted to lower case.

Example:
- `AsText(LowerCase(Property(node, "name")))` will return node name in lower
  case.

### `Mix(color1, color2)`

- `color1`: `Color`
- `color2`: `Color`
- Returns: `Color`

Mixes given colors (performs linear interpolation).

Example:
- `Mix(#1B5E20,orange)`

### `Mul(value1, [value2, value3,...])`

- `value1`, `value2`, `value3`, `...`: `Number`
- Returns: `Number`

Returns the product of given values.

Example:
- `Mul(2,10,3)` returns 60 (2*10*3).

### `Not(value)`

- `value`: `Boolean`
- Returns: `Boolean`

Returns `True` if `value` is `False`, and returns `False` if `value` is `True`.

Example: 
- `@NodeStyle Not(HasProperty?(node, "count")) {...}` will apply the defined
  styles to the nodes without the `count` property.

### `Or(value1, [value2, value3,...])`

- `value1`, `value2`, `value3`, `...`: `Boolean`
- Returns: `Boolean`

Returns `True` if any of the given values is `True`. Returns `False` otherwise.
Expressions after the first expression that evaluates to `True` are not
evaluated.

Example: 
- `Or(Less?(Property(node, "age"),20), Greater?(Property(node, "age"),40))`
  returns `True` if the node's `age` property is either less than 20 or greater
  than 40.


### `Property(nodeOrEdge, propertyName)`

- `nodeOrEdge`: `Dictionary`
- `propertyName`: `String`
- Returns: `Any``

Returns the property with the name `propertyName` of given graph node or graph
edge.

Example:
- `label: AsText(Property(node, "name"))` creates a label using the node's
  `name` property.

### `Random()`

- Returns: `Number`

Returns a random number between 0 (inclusive) and 1 (exclusive). All the
possible numbers are equally likely to be returned.

### `RandomElement(array)`

- `array`: `Array`
- Returns: `Any`

Example:
- `Random()`

Returns a random element of the given array. All the elements are equally likely
to be chosen.

Example:
- `RandomElement(Array(1,3,5,7,11,13))` will return one of the array elements.

### `RandomInteger(bound)`

- `bound`: `Number`
- Returns: `Number`

Returns a random integer between 0 (inclusive) and `bound` (exclusive). All the
possible numbers are equally likely to be returned.

Example:
- `RandomInteger(Property(node, "population"))` will return a integer between 0
  and `node.population` if population is defined (as a number).


### `Red(color)`

- `color`: `Color`
- Returns: `Number`

Returns the red component of a given color. The value will be between 0 and 255
(both inclusive).

Examples:
- `Red(mediumseagreen)` will return value 60.
- `Red(#6a0dad)` will return value 106.

### `RGB(red, green, blue)`

- `red`: `Number`
- `green`: `Number`
- `blue`: `Number`
- Returns: `Color`

Creates a new color with given components.

Example:
- `RGB (128, 159, 255)` will return the color that has value #809fff.

### `Size(value)`

- `value`: `Array`, `Dictionary` or `String`
- Returns: `Number`

If `value` is of type `Array` or `Dictionary`, returns its size. If `value` is
of type `String`, returns its length;

Example:
- `Size(Property(node, "name"))` returns the size of the node's `name` property. 

### `Sqrt(value)`

- `value`: `Number`
- Returns: `Number`

Returns the square root of `value`.

Example:
- `Sqrt(Property(node, "surface"))` will return the square root of a
  `node.surface`.


### `Sub(value1, value2)`

- `value1`: `Number`
- `value2`: `Number`
- Returns: `Number`

Returns `value1` minus `value2`.

Example:
- `Sub(Property(node, "age"),10)` returns `node.age` - 10 if age is defined (as
  a number).


<!-- ### `Try(tryClause, err, catchClause)` -->

### `Type(edge)`

- `edge`: `Dictionary`
- Returns: `String`

Returns the type of the given graph edge.

Example:
- `label: Type(edge)` sets the label to the relationship type.

### `TypeOf(value)`

- `value`: `Any`
- Returns: `String`

Returns the type of the given value.

Example:
- `TypeOf(Property(node, "name"))` returns `string`.

### `UpperCase(string)`

- `string`: `String`
- Returns: `String`

Returns the value of `string` converted to upper case.

Example:
- `AsText(UpperCase(Property(node, "name")))` will return the node name in upper
  case.
