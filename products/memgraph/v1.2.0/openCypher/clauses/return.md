# RETURN

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

## Data Set

```openCypher
MATCH (n) DETACH DELETE n;

CREATE (c1:Country { name: 'Germany'});
CREATE (c2:Country { name: 'France'});
CREATE (c3:Country { name: 'United Kingdom'});

MATCH (c1),(c2)
WHERE c1.name= 'Germany' AND c2.name = 'France'
CREATE (c2)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'John' })-[:LIVING_IN { date_of_start: 2014 }]->(c1);

MATCH (c)
WHERE c.name= 'United Kingdom'
CREATE (c)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'Harry' })-[:LIVING_IN { date_of_start: 2013 }]->(c);

MATCH (p1),(p2)
WHERE p1.name = 'John' AND p2.name = 'Harry'
CREATE (p1)-[:FRIENDS_WITH { date_of_start: 2011 }]->(p2);

MATCH (p1),(p2)
WHERE p1.name = 'John' AND p2.name = 'Harry'
CREATE (p1)<-[:FRIENDS_WITH { date_of_start: 2012 }]-(:Person { name: 'Anna' })-[:FRIENDS_WITH { date_of_start: 2014 }]->(p2);

MATCH (p),(c1),(c2)
WHERE p.name = 'Anna' AND c1.name = 'United Kingdom' AND c2.name = 'Germany'
CREATE (c2)<-[:LIVING_IN { date_of_start: 2014 }]-(p)-[:LIVING_IN { date_of_start: 2014 }]->(c1);

MATCH (n)-[r]->(m) RETURN n,r,m;
```

## 1. Returning nodes

The node variable needs to be added to the `RETURN` statement.

```openCypher
MATCH (c:Country { name: 'United Kingdom'})
RETURN c
```

## 2. Returning relationships

The relationship variable needs to be added to the `RETURN` statement.

```openCypher
MATCH (c:Country { name: 'United Kingdom'})-[r]-(:Person { name: 'Harry'})
RETURN type(r)
```

## 3. Returning properties

The property of a node or a relationship can be returned by using the dot separator.

```openCypher
MATCH (c:Country { name: 'United Kingdom'})
RETURN c.name
```

## 4. Returning multiple elements

To return multiple elements separate them with a comma character.

```openCypher
MATCH (c:Country { name: 'United Kingdom'})
RETURN c.name, c.population, c.continent
```

# 5. Returning all elements

To return all the elements from a query use the `*` symbol.

```openCypher
MATCH (:Country { name: 'United Kingdom'})-[]-(p:Person)
RETURN *
```

# 6. Handling uncommon character

Uncommon characters are handled using placeholder variables enclosed with the symbol `\``.

```openCypher
MATCH (`An uncommon variable!`)
WHERE `An uncommon variable!`.name = 'A'
RETURN `An uncommon variable!`.value
```

# 7. Returning element with alias

You can specify an alias for an element in the `RETURN` statement using `AS`.

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

 Expressions can be included in the `RETURN` statement.

```openCypher
MATCH (c:Country { name: 'United Kingdom'})
RETURN c.name = 'United Kingdom', "Literal"
```

# 10. Returning unique results

The `RETURN` statement can be followed by the `DISTINCT` operator, which will remove duplicate results.

```openCypher
MATCH ()-[:LIVING_IN]->(c)
RETURN DISTINCT c
```