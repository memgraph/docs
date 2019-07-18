## How to Enforce Constraints

Memgraph strives to allow users the power to enforce certain constraints across
their graph data model. The specifics of those constraints are laid out in the
remainder of this document.

### Uniqueness constraint

Uniqueness constraint enforces that each label-property pair has a unique
value. This constraint can be enforced using the following language construct:

```opencypher
CREATE CONSTRAINT ON (n:label) ASSERT n.property IS UNIQUE;
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

You should get the result similar to this:

```plaintext
+-----------------+-----------------+-----------------+
| constraint type | label           | properties      |
+-----------------+-----------------+-----------------+
| unique          | Employee        | email           |
+-----------------+-----------------+-----------------+
```

Trying to modify the database in a way that violates the constraint will
yield an error `Node couldn't be updated due to unique constraint violation!`.

Constraints can also be dropped using the `DROP` keyword. For example,
dropping the previously created constraint can be done by the following
query:

```opencypher
DROP CONSTRAINT ON (n:Employee) ASSERT n.email IS UNIQUE;
```

Now, `SHOW CONSTRAINT INFO;` yields an empty set. 
