# OPTIONAL MATCH

The `MATCH` clause can be modified by prepending the OPTIONAL keyword. `OPTIONAL MATCH` clause behaves the same as a regular `MATCH`, but when it fails to find the pattern, missing parts of the pattern will be filled with null values.

1. Get optional relationships
2. Matching with variable length relationships

## 1. Get optional relationships

Using `OPTIONAL MATCH` when returning a relationship that doesn't exist will return the default value `null` instead.

The returned property of an optional element that is `null` will also be `null`.

```openCypher
MATCH (c1:Country { name: 'France' })
OPTIONAL MATCH (c1)--(c2:Country { name: 'Japan' })
RETURN c2, c2.name
```

## 2. Optional typed and named relationship

The `OPTIONAL MATCH` clouse allows you to use the same conventions as `MATCH` when it comes to handlinig variables and relationship types.

```openCypher
MATCH (contry:Country { name: 'United Kingdom' })
OPTIONAL MATCH (contry)-[r:LIVES_IN]->()
RETURN contry.name, r
```

Because there are no outgouing relationships of type `LIVES_IN` for the node, the value of r is `null` while the value of `contry.name` is `'United Kingdom'`.