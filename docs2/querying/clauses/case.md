Conditional expressions can be expressed in the Cypher language with the `CASE`
expression. A simple form is used to compare an expression against multiple
predicates. For the first matched predicate result of the expression provided
after the `THEN` keyword is returned. If no expression is matched value
following `ELSE` is returned is provided, or `null` if `ELSE` is not used:

```cypher
MATCH (n)
RETURN CASE n.currency WHEN "DOLLAR" THEN "$" WHEN "EURO" THEN "€" ELSE "UNKNOWN" END;
```

In generic form, you don't need to provide an expression whose value is compared
to predicates, but you can list multiple predicates and the first one that
evaluates to true is matched:

```cypher
MATCH (n)
RETURN CASE WHEN n.height < 30 THEN "short" WHEN n.height > 300 THEN "tall" END;
```

Most expressions that take `null` as input will produce `null`. This includes boolean expressions that are used as
predicates. In this case, anything that is not true is interpreted as being false. This also concludes that logically `null!=null`.
