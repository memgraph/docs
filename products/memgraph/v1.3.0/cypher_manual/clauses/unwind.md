# UNWIND

The `UNWIND` clause is used to unwind a list of values as individual rows.

1. [Unwinding lists](#1-unwinding-lists)
2. [Distinct list](#2-distinct-list)
3. [Expression returning lists](#3-expression-returning-lists)
4. [Unwinding lists of lists](#4-unwinding-lists-of-lists)

## 1. Unwinding lists

Use `UNWIND` to transform a literal list into rows.

```opencypher
UNWIND [1,2,3] AS listElement 
RETURN listElement;
```

Output:
```
+-------------+
| listElement |
+-------------+
| 1           |
| 2           |
| 3           |
+-------------+
```

## 2. Distinct list

The `UNWIND` clause can be used to remove duplicates from a list.

```opencypher
WITH [1,1,1,2,2,3] AS list 
UNWIND list AS listElement
WITH DISTINCT listElement
RETURN collect(listElement) AS distinctElements;
```

Output:
```
+------------------+
| distinctElements |
+------------------+
| [1, 2, 3]        |
+------------------+
```

## 3. Expression returning lists

An expression that returns a list can be used with the `UNWIND` clause.

```opencypher
WITH [1,2,3] AS listOne, [4,5,6] AS listTwo 
UNWIND (listOne + listTwo) AS list
RETURN list;
```

Output:
```
+------+
| list |
+------+
| 1    |
| 2    |
| 3    |
| 4    |
| 5    |
| 6    |
+------+
```

## 4. Unwinding lists of lists

Multiple  `UNWIND` clauses can be combined to unwind nested lists.

```opencypher
WITH [[1,2,3],[4,5,6],[7,8,9]] AS listOne
UNWIND listOne AS listOneElement
UNWIND listOneElement AS element
RETURN element;
```

Output:
```
+---------+
| element |
+---------+
| 1       |
| 2       |
| 3       |
| 4       |
| 5       |
| 6       |
| 7       |
| 8       |
| 9       |
+---------+
```
