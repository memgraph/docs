# WHERE

The `RETURN` clause defines which data should be included in the resulting set. 

1. Returning nodes
2. Returning relationships
3. Returning properties
4. Returning multiple elements
5. Returning all elements
6. Handling uncommon character
7. Returning element with alias
8. Optional properties
9. Returning expressions
10. Returning unique results


## 1. Returning nodes

The node variable needs to be added to the `RETURN` statement.

```openCypher
MATCH (c:Country { name: 'United Kingdom'})
RETURN c
```

## 2. Returning relationships

The relationship variable needs to be added to the `RETURN` statement.

```openCypher
MATCH (c:Country { name: 'United Kingdom'})-[r]-(:City { name: 'London'})
RETURN r
```

## 3. Returning properties

The property of a node or a relationship can be returned by using the dot separator.

```openCypher
MATCH (c:Country { name: 'United Kingdom'})
RETURN c.name
```

## 4. Returning multiple elements

To return multiple elements seperate them with a comma character.

```openCypher
MATCH (c:Country { name: 'United Kingdom'})
RETURN c.name, c.population, c.continent
```

# 5. Returning all elements

To return all the elements from a query use the `*` symbol.

```openCypher
MATCH (c:Country { name: 'United Kingdom'})-[r]-(:City { name: 'London'})
RETURN *
```

# 6. Handling uncommon character

Uncommon character are handled using placeholder variables enclosed with the symbol `\``.

```openCypher
MATCH (`An uncommon variable!`)
WHERE `An uncommon variable!`.name = 'A'
RETURN `An uncommon variable!`.value
```

# 7. Returning element with alias

You can specify an alias for a element in the `RETURN` statement using `AS`.

```openCypher
MATCH (c:Country { name: 'United Kingdom'})
RETURN c.name AS Name
```

# 8. Optional properties

If the property being returned does not exist, `null` will be returned.

```openCypher
MATCH (c:Country { name: 'United Kingdom'})
RETURN c.color
```

# 9. Returning expressions

 Expressions can be included in the RETURN statement.

```openCypher
MATCH (c:Country { name: 'United Kingdom'})
RETURN c.population > 1000, "Literal"
```

# 10. Returning unique results

The `RETURN` statement can be followed by the `DISTINCT` operator, which will remove duplicate results.

```openCypher
MATCH (c1:Country)-[:BORDERS]-(c2:Country)
RETURN DISTINCT c1, c2
```