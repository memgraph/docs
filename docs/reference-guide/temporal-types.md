---
id: temporal-types
title: Temporal types
sidebar_label: Temporal types
---

Temporal types can be stored as properties of a vertex or edge. The user can use Cypher queries or procedures to read or write these properties. The following table summarizes the temporal types that Memgraph currently supports:

name|description|
:-:|:-:
Duration|Data type that represents a period of time.|/
Date|Data type that represents a date with year, month and day.|/
LocalTime|Data type that represents time within a day without timezone.|/
LocalDateTime|Data type that represents a date and local time.|/

Note, that all the types excluding Durations are ISO 8601 compliant.

## Duration
You can create `Duration` from a string or a map by calling the function `duration`.

For strings, the duration format is:

`P[nD]T[nH][nM][nS]` where `n` stands for number and the capital letters are used as a separator with each field in `[]` marked optional. For strings Memgraph only allows the last field to be a double, e.g, `P2DT2.5H`. However, for maps, every field can be a double, an int or a mixture of both. Note, we support negative durations.

name|description
:-:|:-:
D|Days|/
H|Hours|/
M|Minutes|/
S|Seconds|/

Example:
```cypher
CREATE (:F1Laps {lap : duration("PT2M2.33S")})
```

Maps can contain the following six fields: `day`, `hour`, `minute`, `second`, `millisecond` and `microsecond`.

Example:
```cypher
CREATE (:F1Laps {lap : duration({minute:2, seconds:2, microseconds:33})})
```

At this point, it must be pointed out that durations internally hold microseconds. Each of the fields specified above is first converted to microseconds and then reduced by addition to a single value. This has an interesting use case:

```cypher
CREATE (:F1Laps {lap : duration({minute:2, seconds:-2, microseconds:-33})})
```
This converts `minutes`, `seconds` to `microseconds` and effectively produces the following equation: `minutes - seconds - microseconds`.

Each of the individual fields of a duration can be accessed through its properties as follows:

name|description
:-:|:-:
day|This converts all the microseconds to days and returns them.|/
hour|This subtracts days and returns the leftover as hours.|/
minute|This subtracts the days and returns the leftover as minutes.|/
second|This subtracts the days and returns the leftover as seconds.|/
millisecond|This subtracts the days and returns the leftover as milliseconds.|/
microsecond|This subtracts the days and returns the leftover as microseconds.|/
nanosecond|This subtracts the days and returns the leftover as nanoseconds.|/

Example:
```cypher
MATCH (f:F1Laps) RETURN f.lap.minute
```

## Date
You can create `Date` from a string or map by calling the function `Date`. For strings, the date format is specified by the ISO 8601:

`YYYY-MM-DD` or `YYYYMMDD` or `YYYY-MM`

name|description
:-:|:-:
Y|Year|/
M|Month|/
D|Day|/

The smallest year is `0` and the highest is `9999`.

Example:
```cypher
CREATE (:Person {birthday : date("1947-07-30")})
```

For maps, three fields are available: `year`, `month`, `day`.

Example:
```cypher
CREATE (:Person {birthday: date({year:1947, month:7, day:30})})
```

You can access the individual fields of a date through its properties:

name|description
:-:|:-:
year|Returns the year field|/
month|Returns the month field|/
day|Returns the day field|/

Example:
```cypher
MATCH (b:Person) RETURN b.birthday.year
```
## LocalTime
You can create `LocalTime` from a string or map by calling the function `localtime`. For strings, the local time format is specified by the ISO 8601:

`[T]hh:mm:ss` or `[T]hh:mm` or `[T]hhmmss` or `[T]hhmm` or `[T]hh`

name|description
:-:|:-:
|h|hours|
|m|minutes|
|s|seconds|

`seconds` can be defined as decimal fractions with up to 6 digits. The first 3 digits represent milliseconds and the last 3 digits microseconds. For example the string `T22:10:32.300600` specifies `300` milliseconds and `600` microseconds.

Example:
```cypher
CREATE (:School {Calculus : LocalTime("09:15:00")})
```

For maps there are 5 fields available: `hour`, `minute`, `second`, `millisecond` and `microsecond`.

Example:
```cypher
CREATE (:School {Calculus : LocalTime({hour:9, minute:15})})
```

You can access the individual fields of a LocalTime through its properties:

name|description
:-:|:-:
hour|Returns the hour field|/
minute|Returns the minute field|/
second|Returns the second field|/
millisecond|Returns the millisecond field|/
microsecond|Returns the microsecond field|/

Example:
```cypher
MATCH (s:School) RETURN s.Calculus.hour
```
## LocalDateTime
You can create `LocalDateTime` from a string or map by calling the function `localdatetime`. For strings, the local time format is specified by the ISO 8601:

`YYYY-MM-DDThh:mm:ss` or `YYYY-MM-DDThh:mm` or `YYYYMMDDThhmmss` or `YYYYMMDDThhmm` or `YYYYMMDDThh`

name|description
:-:|:-:
|Y|Year|/
|M|Month|/
|D|Day|/
|h|Hours|/
|m|Minutes|/
|s|Seconds|/

Example:
```cypher
CREATE (:Flights {AIR123 : LocalDateTime("2021-10-05T14:15:00")})
```
For maps the following fields are available: `year`, `month`, `day`, `hour`, `minute`, `second`, `millisecond` and `microsecond`

Example:
```cypher
CREATE (:Flights {AIR123 : LocalDateTime(year:2021, month:10, day:5, hour:14, minute:15)})
```

You can access the individual fields of LocalDateTime through its properties:

name|description
:-:|:-:
year|Returns the year field|/
month|Returns the month field|/
day|Returns the day field|/
hour|Returns the hour field|/
minute|Returns the minute field|/
second|Returns the second field|/
millisecond|Returns the millisecond field|/
microsecond|Returns the microsecond field|/

Example:
```cypher
MATCH (f:Flights) RETURN f.AIR123.year
```
## Temporal types arithmetic

Temporal types support native arithmetic and the operations are summarized in the following table:

Duration operations:

op|result
:-:|:-:
duration + duration|duration|/
duration - duration|duration|/
-duration|duration|/

Date operations:

op|result
:-:|:-:
date + duration|date|/
duration + date|date|/
date - duration|date|/
date - date|duration|/

LocalTime operations:

op|result
:-:|:-:
localtime + duration|localtime|/
duration + localtime|localtime|/
localtime - duration|localtime|/
localtime - localtime|duration|/

LocalDateTime operations:

operation|result
:-:|:-:
localdatetime + duration|localdatetime|/
duration + localdatetime| + localdatetime/
localdatetime - duration|localdatetime|/
localdatetime - localdatetime|duration|/

## Procedures API
Temporal types can also be used within query modules, you can find the documentation on the [Pyhon API](/reference-guide/query-modules/api/python-api.md) and [C API](/reference-guide/query-modules/api/c-api.md) pages.
