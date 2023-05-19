---
id: data-types
title: Data types
sidebar_label: Data types
---

import Tabs from "@theme/Tabs"; import TabItem from "@theme/TabItem";

Since Memgraph is a graph database management system, data is stored in the form
of graph elements: nodes and relationships. Each graph element can contain
various types of data. This page describes which data types are supported in
Memgraph.

## Node labels & relationship types

**Nodes** can have labels that are used to label or group nodes. A label is of
the type `String`, and each node can have none or multiple labels. Labels can be
changed at any time.

**Relationships** have a type, also represented in the form of a `String`.
Unlike nodes, relationships must have exactly one relationship type and once it
is set upon creation, it can never be modified again.

## Property types

Nodes and relationships can store various properties. Properties are similar to
mappings or tables containing property names and their accompanying values.
Property names are represented as text, while values can be of different types.

Each property can store a single value, and it is not possible to have multiple
properties with the same name on a single graph element. But, the same property
names can be found across multiple graph elements.

Also, there are no restrictions on the number of properties that can be stored
in a single graph element. The only restriction is that the values must be of
the supported types. Below is a table of supported data types.

| Type                              | Description                                                                                         |
| --------------------------------- | --------------------------------------------------------------------------------------------------- |
| `Null`                            | Property has no value, which is the same as if the property doesn't exist.                          |
| `String`                          | A character string (text).                                                                          |
| `Boolean`                         | A boolean value, either `true` or `false`.                                                          |
| `Integer`                         | An integer number.                                                                                  |
| `Float`                           | A floating-point number (real number).                                                              |
| `List`                            | A list containing any number of property values of any supported type under a single property name. |
| `Map`                             | A mapping of string keys to values of any supported type.                                           |
| [`Duration`](#duration)           | A period of time.                                                                                   |
| [`Date`](#date)                   | A date with year, month, and day.                                                                   |
| [`LocalTime`](#localtime)         | Time without the time zone.                                                                         |
| [`LocalDateTime`](#localdatetime) | Date and time without the time zone.                                                                |

:::note

If you want to modify `List` and `Map` property values, you need to replace them
entirely.

The following queries are valid:

```cypher
CREATE (:Node {property: [1, 2, 3]});
CREATE (:Node {property: {key: "value"}});
```

But these are not:

```cypher
MATCH (n:Node) SET n.property[0] = 0;
MATCH (n:Node) SET n.property.key = "other value";
```

:::

## Maps

The Cypher query language supports constructing and working with map values.

### Literal maps

It is possible to explicitly construct maps by stating key-value pairs:

<Tabs
  groupId="literal_map"
  defaultValue="cypher"
  values={[
    {label: 'Query', value: 'cypher'},
    {label: 'Result', value: 'result'},
  ]
}>
  <TabItem value="cypher">

  ```cypher
  RETURN {key: 'Value', listKey: [{inner: 'Map1'}, {inner: 'Map2'}]}
  ```

  </TabItem>

  <TabItem value="result">

```plaintext
┌─────────────────────────────────────────────────────────────┐
│ {key: 'Value', listKey: [{inner: 'Map1'}, {inner: 'Map2'}]} │
├─────────────────────────────────────────────────────────────┤
│ {Map} 2 properties                                          │
│ {                                                           │
│   "key": "Value",                                           │
│   "listKey": [                                              │
│       {                                                     │
│         "inner": "Map1"                                     │
│       },                                                    │
│       {                                                     │
│         "inner": "Map2"                                     │
│       }                                                     │
│   ]                                                         │
│ }                                                           │
└─────────────────────────────────────────────────────────────┘
```

  </TabItem>

</Tabs>

### Map projection

Cypher’s **map projection** syntax allows for easily constructing map
projections from nodes, relationships, other map values, and all other values
that have properties.

A map projection begins with the variable bound to the graph entity that’s to
be projected from, and contains a body of comma-separated map elements enclosed
by `{` and `}`.

```cypher
map_variable {map_element, [, ...n]}
```

A map element projects one or more key-value pairs to the map projection. There
are four different types of map projection elements:

* Property selector: Projects the property name as the key, and the value of
  `map_variable.property` as the value for the projection.
* All-properties selector: Projects all key-value pairs from the `map_variable`
  value.
* Literal entry: This is a key-value pair, with the value being an arbitrary
  expression: `key: <expression>`.
* Variable selector: Projects a variable: the variable name is the key, and the
  value it is pointing to is the value of the projection: `<variable>`.

The following conditions apply:

* If `map_variable` points to a null value, its projected values will be null.
* As with literal maps, key names must be strings.

#### Examples

The following graph is used by all examples here:

<Tabs
  groupId="example"
  defaultValue="visualization"
  values={[
    {label: 'Graph', value: 'visualization'},
    {label: 'Load queries', value: 'cypher'},
  ]
}>
  <TabItem value="visualization">

  <img src={require('../data/how-to-guides/map-projection-example.png').default}/>

  </TabItem>

  <TabItem value="cypher">

  ```cypher
  MATCH (n) DETACH DELETE n;
  CREATE
  (bradley:Person {name: 'Bradley Cooper', oscars: 0}),
  (jennifer:Person {name: 'Jennifer Lawrence', oscars: 1}),
  (slp:Movie {title: 'Silver Linings Playbook', released: 2012}),
  (amhu:Movie {title: 'American Hustle', released: 2013}),
  (joy:Movie {title: 'Joy', released: 2015}),
  (asib:Movie {title: 'A Star Is Born', released: 2018}),
  (dlu:Movie {title: 'Don’t Look Up', released: 2021}),
  (bradley)-[:ACTED_IN]->(slp),
  (bradley)-[:ACTED_IN]->(amhu),
  (bradley)-[:ACTED_IN]->(joy),
  (bradley)-[:ACTED_IN]->(asib),
  (jennifer)-[:ACTED_IN]->(slp),
  (jennifer)-[:ACTED_IN]->(amhu),
  (jennifer)-[:ACTED_IN]->(joy),
  (jennifer)-[:ACTED_IN]->(dlu);
  ```

  </TabItem>

</Tabs>

Find Jennifer Lawrence and return data about her and the movies she’s acted in.
This example contains a map projection with a literal entry, which in turn also
uses map projection inside `collect()`.

<Tabs
  groupId="ex1"
  defaultValue="cypher"
  values={[
    {label: 'Query', value: 'cypher'},
    {label: 'Result', value: 'result'},
  ]
}>
  <TabItem value="cypher">

  ```cypher
  MATCH (actor:Person {name: 'Jennifer Lawrence'})-[:ACTED_IN]->(movie:Movie)
  WITH actor, collect(movie {.title, .year}) AS movies
  RETURN actor {.name, roles: movies} AS jennifer
  ```

  </TabItem>

  <TabItem value="result">

```plaintext
┌─────────────────────────────────────────────────────────────┐
│ jennifer                                                    │
├─────────────────────────────────────────────────────────────┤
│ {Map} 3 properties                                          │
│ {                                                           │
│   "name": "Jennifer Lawrence",                              │
│   "roles": [                                                │
│       {                                                     │
│         "year": 2012,                                       │
│         "title": "Silver Linings Playbook"                  │
│       },                                                    │
│       {                                                     │
│         "year": 2013,                                       │
│         "title": "American Hustle"                          │
│       },                                                    │
│       {                                                     │
│         "year": 2015,                                       │
│         "title": "Joy"                                      │
│       },                                                    │
│       {                                                     │
│         "year": 2021,                                       │
│         "title": "Don’t Look Up"                            │
│       }                                                     │
│   ]                                                         │
│ }                                                           │
└─────────────────────────────────────────────────────────────┘
```

  </TabItem>

</Tabs>

The below query finds all `Person` nodes that have one or more relationships
of type `ACTED_IN` connected to `Movie` nodes and returns the number of movies
each `Person` has starred in. This example introduces the variable selector and
uses it to project the movie count.

<Tabs
  groupId="ex2"
  defaultValue="cypher"
  values={[
    {label: 'Query', value: 'cypher'},
    {label: 'Result', value: 'result'},
  ]
}>
  <TabItem value="cypher">

  ```cypher
  MATCH (actor:Person)-[:ACTED_IN]->(movie:Movie)
  WITH actor, count(movie) AS nMovies
  RETURN actor {.name, nMovies}
  ```

  </TabItem>

  <TabItem value="result">

```plaintext
┌─────────────────────────────────────────────────────────────┐
│ actor {.name, nMovies}                                      │
├─────────────────────────────────────────────────────────────┤
│ {Map} 2 properties                                          │
│ {                                                           │
│    "name": "Jennifer Lawrence",                             │
│    "nMovies": 4                                             │
│ }                                                           │
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┤
│ {Map} 2 properties                                          │
│ {                                                           │
│    "name": "Bradley Cooper",                                │
│    "nMovies": 4                                             │
│ }                                                           │
└─────────────────────────────────────────────────────────────┘
```

  </TabItem>

</Tabs>

Finally, the next query returns all properties from the Bradley Cooper node. It
uses an all-properties selector to project node properties, and in addition
explicitly projects the `dateOfBirth` property. Since this property does not
exist, a null value is projected in its place.

<Tabs
  groupId="ex3"
  defaultValue="cypher"
  values={[
    {label: 'Query', value: 'cypher'},
    {label: 'Result', value: 'result'},
  ]
}>
  <TabItem value="cypher">

  ```cypher
  MATCH (actor:Person {name: 'Bradley Cooper'})
  RETURN actor {.*, .dateOfBirth} as bradley
  ```

  </TabItem>

  <TabItem value="result">

```plaintext
┌─────────────────────────────────────────────────────────────┐
│ bradley                                                     │
├─────────────────────────────────────────────────────────────┤
│ {Map} 3 properties                                          │
│ {                                                           │
│   "dateOfBirth": null,                                      │
│   "name": "Bradley Cooper",                                 │
│   "oscars": 0                                               │
│ }                                                           │
└─────────────────────────────────────────────────────────────┘
```

  </TabItem>

</Tabs>

## Temporal types

### Duration

You can create a property of temporal type `Duration` from a string or a map by
calling the function `duration`.

For strings, the duration format is: `P[nD]T[nH][nM][nS]` where `n` stands for
a number, and the capital letters are used as a separator with each field in `[]`
marked optional. For strings, Memgraph only allows the last field to be a
double, e.g., `P2DT2.5H`. However, for maps, every field can be a double, an int
or a mixture of both. Memgraph also supports negative durations.

| name | description |
| :--: | :---------: |
|  D   |    Days     |
|  H   |    Hours    |
|  M   |   Minutes   |
|  S   |   Seconds   |

Example:

```cypher
CREATE (:F1Laps {lap: duration("PT2M2.33S")});
```

Maps can contain the following six fields: `day`, `hour`, `minute`, `second`,
`millisecond` and `microsecond`.

Example:

```cypher
CREATE (:F1Laps {lap: duration({minute:2, second:2, microsecond:33})});
```

At this point, it must be pointed out that durations internally hold
microseconds. Each of the fields specified above is first converted to
microseconds and then reduced by addition to a single value. This has an
interesting use case:

```cypher
CREATE (:F1Laps {lap: duration({minute:2, second:-2, microsecond:-33})});
```

This converts `minutes`, `seconds` to `microseconds` and effectively produces
the following equation: `minutes - seconds - microseconds`.

Each of the individual fields of a duration can be accessed through its
properties as follows:

|    name     |                            description                             |
| :---------: | :----------------------------------------------------------------: |
|     day     | Converts all the microseconds back to days and returns the value.  |
|    hour     |      Subtracts days and returns the leftover value as hours.       |
|   minute    |   Subtracts the days and returns the leftover value as minutes.    |
|   second    |   Subtracts the days and returns the leftover value as seconds.    |
| millisecond | Subtracts the days and returns the leftover value as milliseconds. |
| microsecond | Subtracts the days and returns the leftover value as microseconds. |
| nanosecond  | Subtracts the days and returns the leftover value as nanoseconds.  |

Example:

```cypher
CREATE (:F1Laps {lap: duration({day:1, hour: 2, minute:3, second:4})});
```

```cypher
MATCH (f:F1Laps) RETURN f.lap.day;
// Result
>> 1
```

```cypher
MATCH (f:F1Laps) RETURN f.lap.hour;
// Result
>> 2
```

```cypher
MATCH (f:F1Laps) RETURN f.lap.minute;
// Result
>> 123 // The value without days is 2 hours and 3  minutes, that is 123 minutes
```

```cypher
MATCH (f:F1Laps) RETURN f.lap.second;
// Result
>> 7384 // The value without days is 2 hours, 3 minutes and 4 seconds, that is 7384 minutes
```

### Date

You can create a property of temporal type `Date` from a string or map by
calling the function `Date`. For strings, the date format is specified by the
ISO 8601: `YYYY-MM-DD` or `YYYYMMDD` or `YYYY-MM`.

| name | description |
| :--: | :---------: |
|  Y   |    Year     |
|  M   |    Month    |
|  D   |     Day     |

The smallest year is `0` and the highest is `9999`.

You can call `date` without arguments. This effectively sets the date field to
the current date of the calendar (UTC clock).

Example:

```cypher
CREATE (:Person {birthday: date("1947-07-30")});
```

For maps, three fields are available: `year`, `month`, `day`.

Example:

```cypher
CREATE (:Person {birthday: date({year:1947, month:7, day:30})});
```

You can access the individual fields of a date through its properties:

| name  |       description       |
| :---: | :---------------------: |
| year  | Returns the year field  |
| month | Returns the month field |
|  day  |  Returns the day field  |

Example:

```cypher
MATCH (b:Person) RETURN b.birthday.year;
```

### LocalTime

You can create a property of temporal type `LocalTime` from a string or map by
calling the function `localTime`. For strings, the local time format is
specified by the ISO 8601: `[T]hh:mm:ss` or `[T]hh:mm` or `[T]hhmmss` or
`[T]hhmm` or `[T]hh`.

| name | description |
| :--: | :---------: |
|  h   |    Hours    |
|  m   |   Minutes   |
|  s   |   Seconds   |

`seconds` can be defined as decimal fractions with up to 6 digits. The first 3
digits represent milliseconds, and the last 3 digits microseconds. For example,
the string `T22:10:32.300600` specifies `300` milliseconds and `600`
microseconds.

You can call `localTime` without arguments. This effectively sets the time field
to the current time of the calendar (UTC clock).

Example:

```cypher
CREATE (:School {Calculus: localTime("09:15:00")});
```

For maps, there are 5 fields available: `hour`, `minute`, `second`,
`millisecond` and `microsecond`.

Example:

```cypher
CREATE (:School {Calculus: localTime({hour:9, minute:15})});
```

You can access the individual fields of a LocalTime through its properties:

|    name     |          description          |
| :---------: | :---------------------------: |
|    hour     |    Returns the hour field     |
|   minute    |   Returns the minute field    |
|   second    |   Returns the second field    |
| millisecond | Returns the millisecond field |
| microsecond | Returns the microsecond field |

Example:

```cypher
MATCH (s:School) RETURN s.Calculus.hour;
```

### LocalDateTime

You can create a property of temporal type `LocalDateTime` from a string or map
by calling the function `localDateTime`. For strings, the local time format is
specified by the ISO 8601: `YYYY-MM-DDThh:mm:ss` or `YYYY-MM-DDThh:mm` or
`YYYYMMDDThhmmss` or `YYYYMMDDThhmm` or `YYYYMMDDThh`.

| name | description |
| :--: | :---------: |
|  Y   |    Year     |
|  M   |    Month    |
|  D   |     Day     |
|  h   |    Hours    |
|  m   |   Minutes   |
|  s   |   Seconds   |

You can call `localDateTime` without arguments. This effectively sets the date
and time fields to the current date and time of the calendar (UTC clock).
Example:

```cypher
CREATE (:Flights {AIR123: localDateTime("2021-10-05T14:15:00")});
```

For maps the following fields are available: `year`, `month`, `day`, `hour`,
`minute`, `second`, `millisecond` and `microsecond`.

Example:

```cypher
CREATE (:Flights {AIR123: localDateTime({year:2021, month:10, day:5, hour:14, minute:15})});
```

You can access the individual fields of LocalDateTime through its properties:

|    name     |          description          |
| :---------: | :---------------------------: |
|    year     |    Returns the year field     |
|    month    |    Returns the month field    |
|     day     |     Returns the day field     |
|    hour     |    Returns the hour field     |
|   minute    |   Returns the minute field    |
|   second    |   Returns the second field    |
| millisecond | Returns the millisecond field |
| microsecond | Returns the microsecond field |

Example:

```cypher
MATCH (f:Flights) RETURN f.AIR123.year;
```

## Temporal types arithmetic

Temporal types `Duration`, `Date`, `LocalTime` and `LocalDateTime` support
native arithmetic, and the operations are summarized in the following table:

Duration operations:

|         op          |  result  |
| :-----------------: | :------: |
| Duration + Duration | Duration |
| Duration - Duration | Duration |
|     - Duration      | Duration |

Date operations:

|       op        |  result  |
| :-------------: | :------: |
| Date + Duration |   Date   |
| Duration + Date |   Date   |
| Date - Duration |   Date   |
|   Date - Date   | Duration |

LocalTime operations:

|          op           |  result   |
| :-------------------: | :-------: |
| LocalTime + Duration  | LocalTime |
| Duration + LocalTime  | LocalTime |
| LocalTime - Duration  | LocalTime |
| LocalTime - LocalTime | Duration  |

LocalDateTime operations:

|           operation           |    result     |
| :---------------------------: | :-----------: |
|   LocalDateTime + Duration    | LocalDateTime |
|   Duration + LocalTateTime    | LocalDateTime |
|   LocalDateTime - Duration    | LocalDateTime |
| LocalDateTime - LocalDateTime |   Duration    |

## Procedures API

Data types are also used within query modules. Check out the documentation for the [Python API](/reference-guide/query-modules/implement-custom-query-modules/api/python-api.md), [C API](/reference-guide/query-modules/implement-custom-query-modules/api/c-api.md) and [C++ API](/reference-guide/query-modules/implement-custom-query-modules/api/cpp-api.md).
