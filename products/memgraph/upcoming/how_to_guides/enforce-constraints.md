## How to Enforce Constraints

Memgraph strives to allow users the power to enforce certain constraints across
their graph data model. The specifics of those constraints are laid out in the
remainder of this document.

### Existence constraint

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

### Uniqueness constraint

Uniqueness constraint enforces that each `label, property_set` pair is unique.
This constraint can be enforced using the following language construct:

```opencypher
CREATE CONSTRAINT ON (n:label) ASSERT n.property1, n.property2, ..., IS UNIQUE;
```

For example, suppose you are keeping track of basic employee info in your
database. Obviously, each employee should have a unique e-mail address. You can
enforce this by issuing the following query:

```opencypher
CREATE CONSTRAINT ON (n:Employee) ASSERT n.email IS UNIQUE;
```

You can confirm that your constraint was successfully created by issuing the
following query:

```opencypher
SHOW CONSTRAINT INFO;
```

You should get a result similar to this:

```plaintext
+-----------------+-----------------+-----------------+
| constraint type | label           | properties      |
+-----------------+-----------------+-----------------+
| unique          | Employee        | email           |
+-----------------+-----------------+-----------------+
```

Trying to modify the database in a way that violates the constraint will yield
an error `Unable to commit due to unique constraint violation on
:Employee(email)`.

Naturally, you can also specifiy multiple properties when creating uniqueness
constraint. For example, we might want to enforce that all employees have a
unique `(name, surname)` pair (obviously, this would be a bad decision in real
life). This can be achieved by the following query:

```opencypher
CREATE CONSTRAINT ON (n:Employee) ASSERT n.name, n.surname IS UNIQUE;
```

At this point, `SHOW CONSTRAINT INFO;` yields the following result:

```plaintext
+-----------------+-----------------+-----------------+
| constraint type | label           | properties      |
+-----------------+-----------------+-----------------+
| unique          | Employee        | email           |
| unique          | Employee        | name, surname   |
+-----------------+-----------------+-----------------+
```

Constraints can also be dropped using the `DROP` keyword. For example,
dropping the previously created constraints can be done by the following
query:

```opencypher
DROP CONSTRAINT ON (n:Employee) ASSERT n.email IS UNIQUE;
DROP CONSTRAINT ON (n:Employee) ASSERT n.name, n.surname IS UNIQUE;
```

Now, `SHOW CONSTRAINT INFO;` yields an empty set.
