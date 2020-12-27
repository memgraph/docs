## Existence constraint

Existence constraint enforces that each each vertex that has a specific `label`
also must have the specified `property`. Only one label and property can be
supplied at a time.  This constraint can be enforced using the following
language construct:

```opencypher
CREATE CONSTRAINT ON (n:label) ASSERT exists (n.property);
```

For example, suppose you are keeping track of basic employee info in your
database. Obviously, each employee should have a first name and last name. You
can enforce this by issuing the following queries:

```opencypher
CREATE CONSTRAINT ON (n:Employee) ASSERT exists (n.first_name);
CREATE CONSTRAINT ON (n:Employee) ASSERT exists (n.last_name);
```

You can confirm that your constraint were successfully created by issuing the
following query:

```opencypher
SHOW CONSTRAINT INFO;
```

You should get a result similar to this:

```plaintext
+-----------------+-----------------+-----------------+
| constraint type | label           | properties      |
+-----------------+-----------------+-----------------+
| exists          | Employee        | first_name      |
| exists          | Employee        | last_name       |
+-----------------+-----------------+-----------------+
```

Trying to modify the database in a way that violates the constraint will
yield an error.

Constraints can also be dropped using the `DROP` keyword. For example,
dropping the previously created constraints can be done by the following
query:

```opencypher
DROP CONSTRAINT ON (n:Employee) ASSERT exists (n.first_name);
DROP CONSTRAINT ON (n:Employee) ASSERT exists (n.last_name);
```

Now, `SHOW CONSTRAINT INFO;` yields an empty set.
