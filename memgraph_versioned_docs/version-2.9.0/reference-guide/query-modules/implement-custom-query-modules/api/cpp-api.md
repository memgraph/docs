---
id: cpp-api
title: Query modules C++ API
sidebar_label: C++ API
slug: /reference-guide/query-modules/api/cpp-api
---

This is the API documentation for `mgp.hpp`, which contains declarations of all
functions in the C++ API for implementing query module procedures and functions.
The source file can be found in the Memgraph installation directory, under
`/usr/include/memgraph`.

:::tip

To see how to implement query modules in C++, take a look at 
[the example we provided](/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example.md#cpp-api).

:::

:::tip

If you install any C++ modules after running Memgraph, you’ll need to [load
them into Memgraph](../load-call-query-modules#loading-query-modules) or restart
Memgraph in order to use them.

:::

## Functions and procedures

With this API it’s possible to extend your Cypher queries with **functions** and **procedures** with 
`AddProcedure` and `AddFunction`.

:::tip

The API needs memory access to add procedures and functions; this can be done with `mgp::memory = memory;`.

:::

Functions are simple operations that return a single value and can be used in any expression or predicate.

Procedures are more complex computations that may modify the graph, and their output is available to
later processing steps in your query. A procedure may only be run from `CALL` clauses.
The output is a stream of **records** that is made accessible with a `YIELD` clause.

### AddProcedure

Add a procedure to your query module. The procedure is registered as `[QUERY_MODULE_NAME].[PROC_NAME]`
and can be used in Cypher queries.

```cpp
void AddProcedure(
    mgp_proc_cb callback, 
    std::string_view name,
    ProcedureType proc_type,
    std::vector<Parameter> parameters,
    std::vector<Return> returns,
    mgp_module *module,
    mgp_memory *memory);
```

#### Input

- `callback`: procedure callback
- `name`: procedure name
- `proc_type`: procedure type (read/write)
- `parameters`: vector (list) of procedure parameters
- `returns`: vector (list) of procedure return values
- `module`: the query module that the procedure is added to
- `memory`: access to memory

#### ProcedureType

Enum class for Cypher procedure types.

- `ProcedureType::Read`: read procedure
- `ProcedureType::Write`: write procedure

### AddBatchProcedure

Add a batch procedure to your query module. The procedure is registered as `[QUERY_MODULE_NAME].[PROC_NAME]`
and can be used in Cypher queries.

```cpp
void AddBatchProcedure(
    mgp_proc_cb callback, 
    mgp_proc_initializer initializer, 
    mgp_proc_cleanup cleanup,
    std::string_view name, 
    ProcedureType proc_type, 
    std::vector<Parameter> parameters,
    std::vector<Return> returns, 
    mgp_module *module, 
    mgp_memory *memory);
```

#### Input

- `callback`: procedure callback, invoked through OpenCypher
- `initializer`: procedure initializer, invoked before callback
- `cleanup`: procedure cleanup, invoked after batching is done
- `name`: procedure name
- `proc_type`: procedure type (read/write)
- `parameters`: vector (list) of procedure parameters
- `returns`: vector (list) of procedure return values
- `module`: the query module that the procedure is added to
- `memory`: access to memory

#### ProcedureType

Enum class for Cypher procedure types.

- `ProcedureType::Read`: read procedure
- `ProcedureType::Write`: write procedure

### AddFunction

Add a function to your query module. The function is registered as `[QUERY_MODULE_NAME].[FUNC_NAME]`
and can be used in Cypher queries.

```cpp
void AddFunction(
    mgp_func_cb callback, 
    std::string_view name,
    std::vector<Parameter> parameters,
    std::vector<Return> returns,
    mgp_module *module,
    mgp_memory *memory);
```

#### Input

- `callback`: function callback
- `name`: function name
- `parameters`: vector (list) of function parameters
- `returns`: vector (list) of function return values
- `module`: the query module that the procedure is added to
- `memory`: access to memory

### Parameter

Represents a procedure/function parameter. Parameters are defined by their name, type, 
and (if optional) default value.

#### Constructors

Creates a non-optional parameter with the given `name` and `type`.
```cpp
Parameter(std::string_view name, Type type)
```

Creates an optional Boolean parameter with the given `name` and `default_value`.
```cpp
Parameter(std::string_view name, Type type, bool default_value)
```

Creates an optional integer parameter with the given `name` and `default_value`.
```cpp
Parameter(std::string_view name, Type type, int default_value)
```

Creates an optional floating-point parameter with the given `name` and `default_value`.
```cpp
Parameter(std::string_view name, Type type, double default_value)
```

Creates an optional string parameter with the given `name` and `default_value`.
```cpp
Parameter(std::string_view name, Type type, std::string_view default_value)
Parameter(std::string_view name, Type type, const char *default_value)
```

Creates a non-optional list parameter with the given `name` and `item_type`.
The `list_type` parameter is organized as follows: `{Type::List, Type::[ITEM_TYPE]}`.
```cpp
Parameter(std::string_view name, std::pair<Type, Type> list_type)
```

Creates an optional list parameter with the given `name`, `item_type`, and `default_value`.
The `list_type` parameter is organized as follows: `{Type::List, Type::[ITEM_TYPE]}`.
```cpp
Parameter(std::string_view name, std::pair<Type, Type> list_type, Value default_value)
```

#### Member variables

| Name              | Type               | Description                         |
| ----------------- | ------------------ | ----------------------------------- |
| `name`            | `std::string_view` | parameter name                      |
| `type_`           | `Type`             | parameter type                      |
| `list_item_type_` | `Type`             | (list parameters) item type         |
| `optional`        | `bool`             | whether the parameter is optional   |
| `default_value`   | `Value`            | (optional parameters) default value |

### Return

Represents a procedure/function return value. Values are defined by their name and type.

#### Constructors

Creates a return value with the given `name` and `type`.
```cpp
Return(std::string_view name, Type type) 
```

Creates a return value with the given `name` and `list_type`. 
The `list_type` parameter is organized as follows: `{Type::List, Type::[ITEM_TYPE]}`.
```cpp
Return(std::string_view name, std::pair<Type, Type> list_type)
```

#### Member variables

| Name              | Type               | Description             |
| ----------------- | ------------------ | ----------------------- |
| `name`            | `std::string_view` | return name             |
| `type_`           | `Type`             | return type             |
| `list_item_type_` | `Type`             | (list values) item type |

### RecordFactory

Factory class for [`Record`](#Record).

#### Constructors

```cpp
explicit RecordFactory(mgp_result *result)
```

#### Member functions

| Name              | Description                   |
| ----------------- | ----------------------------- |
| `NewRecord`       | Adds a new result record.     |
| `SetErrorMessage` | Sets the given error message. |


##### NewRecord

Adds a new result record.

```cpp
  const Record NewRecord() const
```

##### SetErrorMessage

Sets the given error message.

```cpp
  void SetErrorMessage(const std::string_view error_msg) const
```

```cpp
  void SetErrorMessage(const char *error_msg) const
```

### Record

Represents a **record** - the building block of Cypher procedure results. Each result is a stream of records,
and a function’s record is a sequence of (field name: output value) pairs.

#### Constructors

```cpp
explicit Record(mgp_result_record *record)
```

#### Member functions

| Name     | Description                                             |
| -------- | ------------------------------------------------------- |
| `Insert` | Inserts a value of given type under field `field_name`. |

##### Insert

Inserts a value of given type under field `field_name`.

```cpp
  void Insert(const char *field_name, bool value)
```

```cpp
  void Insert(const char *field_name, std::int64_t value)
```

```cpp
  void Insert(const char *field_name, double value)
```

```cpp
  void Insert(const char *field_name, std::string_view value)
```

```cpp
  void Insert(const char *field_name, const char *value)
```

```cpp
  void Insert(const char *field_name, const List &value)
```

```cpp
  void Insert(const char *field_name, const Map &value)
```

```cpp
  void Insert(const char *field_name, const Node &value)
```

```cpp
  void Insert(const char *field_name, const Relationship &value)
```

```cpp
  void Insert(const char *field_name, const Path &value)
```

```cpp
  void Insert(const char *field_name, const Date &value)
```

```cpp
  void Insert(const char *field_name, const LocalTime value)
```

```cpp
  void Insert(const char *field_name, const LocalDateTime value)
```

```cpp
  void Insert(const char *field_name, const Duration value)
```

### Result

Represents a **result** - the single return value of a Cypher function.

#### Constructors

```cpp
explicit Result(mgp_func_result *result)
```

#### Member functions

| Name              | Description                        |
| ----------------- | ---------------------------------- |
| `SetValue`        | Sets a return value of given type. |
| `SetErrorMessage` | Sets the given error message.      |

##### SetValue

Sets a return value of given type.

```cpp
  void SetValue(bool value)
```

```cpp
  void SetValue(std::int64_t value)
```

```cpp
  void SetValue(double value)
```

```cpp
  void SetValue(std::string_view value)
```

```cpp
  void SetValue(const char *value)
```

```cpp
  void SetValue(const List &value)
```

```cpp
  void SetValue(const Map &value)
```

```cpp
  void SetValue(const Node &value)
```

```cpp
  void SetValue(const Relationship &value)
```

```cpp
  void SetValue(const Path &value)
```

```cpp
  void SetValue(const Date &value)
```

```cpp
  void SetValue(const LocalTime value)
```

```cpp
  void SetValue(const LocalDateTime value)
```

```cpp
  void SetValue(const Duration value)
```

##### SetErrorMessage

Sets the given error message.

```cpp
  void SetErrorMessage(const std::string_view error_msg) const
```

```cpp
  void SetErrorMessage(const char *error_msg) const
```

## Graph API

This section covers the interface for working with the Memgraph DB graph using the C++ API.
A description of data types is available [here](https://memgraph.com/docs/memgraph/reference-guide/data-types).

### Graph

#### Constructors

```cpp
explicit Graph(mgp_graph *graph)
```

#### Member functions

| Name                   | Description                                                                                   |
| ---------------------- | --------------------------------------------------------------------------------------------- |
| `Order`                | Returns the graph order (number of nodes).                                                    |
| `Size`                 | Returns the graph size (number of relationships).                                             |
| `Nodes` (`GraphNodes`) | Returns an iterable structure of the graph’s nodes.                                           |
| `Relationships`        | Returns an iterable structure of the graph’s relationships.                                   |
| `GetNodeById`          | Returns the graph node with the given ID.                                                     |
| `ContainsNode`         | Returns whether the graph contains the given node (accepts node or its ID).                   |
| `ContainsRelationship` | Returns whether the graph contains the given relationship (accepts relationship or its ID).   |
| `IsMutable`            | Returns whether the graph is mutable.                                                         |
| `CreateNode`           | Creates a node and adds it to the graph.                                                      |
| `DeleteNode`           | Deletes a node from the graph.                                                                |
| `DetachDeleteNode`     | Deletes a node and all its incident edges from the graph.                                     |
| `CreateRelationship`   | Creates a relationship of type `type` between nodes `from` and `to` and adds it to the graph. |
| `DeleteRelationship`   | Deletes a relationship from the graph.                                                        |

##### Order

Returns the graph order (number of nodes).

```cpp
int64_t Order() const
```

##### Size

Returns the graph size (number of relationships).

```cpp
int64_t Size() const
```

##### Nodes (GraphNodes)

Returns an iterable structure of the graph’s nodes.

```cpp
GraphNodes Nodes() const
```

##### Relationships

Returns an iterable structure of the graph’s relationships.

```cpp
GraphRelationships Relationships() const
```

##### GetNodeById

Returns the graph node with the given ID.

```cpp
Node GetNodeById(const Id node_id) const
```

##### ContainsNode

Returns whether the graph contains a node with the given ID.

```cpp
bool ContainsNode(const Id node_id) const
```

Returns whether the graph contains the given node.

```cpp
bool ContainsNode(const Node &node) const
```

##### ContainsRelationship

```cpp
bool ContainsRelationship(const Id relationship_id) const
```

```cpp
bool ContainsRelationship(const Relationship &relationship) const
```

##### IsMutable

Returns whether the graph is mutable.

```cpp
bool IsMutable() const
```

##### CreateNode

Creates a node and adds it to the graph.

```cpp
Node CreateNode();
```

##### DeleteNode

Deletes a node from the graph.

```cpp
void DeleteNode(const Node &node)
```

##### DetachDeleteNode

Deletes a node and all its incident edges from the graph.

```cpp
void DetachDeleteNode(const Node &node)
```

##### CreateRelationship

Creates a relationship of type `type` between nodes `from` and `to` and adds it to the graph.

```cpp
Relationship CreateRelationship(const Node &from, const Node &to, const std::string_view type)
```

##### DeleteRelationship

Deletes a relationship from the graph.

```cpp
void DeleteRelationship(const Relationship &relationship)
```

#### GraphNodes

Auxiliary class providing an iterable view of the nodes contained in the graph.
`GraphNodes` values may only be used for iteration to obtain the values stored within.

##### Constructors

```cpp
explicit GraphNodes(mgp_vertices_iterator *nodes_iterator)
```

##### Member variables

| Name       | Type                   | Description                              |
| ---------- | ---------------------- | ---------------------------------------- |
| `Iterator` | `GraphNodes::Iterator` | Const forward iterator for `GraphNodes`. |

##### Member functions

| Name                                      | Description                                             |
| ----------------------------------------- | ------------------------------------------------------- |
| `begin`<br/>`end`<br/>`cbegin`<br/>`cend` | Returns the beginning/end of the `GraphNodes` iterator. |

#### GraphRelationships

Auxiliary class providing an iterable view of the relationships contained in the graph.
`GraphRelationships` values may only be used for iteration to obtain the values stored within.

##### Constructors

```cpp
explicit GraphRelationships(mgp_graph *graph)
```

##### Member variables

| Name       | Type                           | Description                                      |
| ---------- | ------------------------------ | ------------------------------------------------ |
| `Iterator` | `GraphRelationships::Iterator` | Const forward iterator for `GraphRelationships`. |

##### Member functions

| Name                                      | Description                                                    |
| ----------------------------------------- | -------------------------------------------------------------- |
| `begin`<br/>`end`<br/>`cbegin`<br/>`cend` | Returns the beginning/end of the `GraphRelationship` iterator. |

### Node

Represents a node (vertex) of the Memgraph graph.

#### Constructors

Creates a Node from the copy of the given `mgp_vertex`.
```cpp
explicit Node(mgp_vertex *ptr)
explicit Node(const mgp_vertex *const_ptr)
```

Copy and move constructors:
```cpp
Node(const Node &other) noexcept
Node(Node &&other) noexcept
```

#### Member functions

| Name               | Description                                                         |
|--------------------|---------------------------------------------------------------------|
| `Id`               | Returns the node’s ID.                                              |
| `Labels`           | Returns an iterable & indexable structure of the node’s labels.     |
| `HasLabel`         | Returns whether the node has the given `label`.                     |
| `Properties`       | Returns an iterable & indexable structure of the node’s properties. |
| `InRelationships`  | Returns an iterable structure of the node’s inbound relationships.  |
| `OutRelationships` | Returns an iterable structure of the node’s outbound relationships. |
| `AddLabel`         | Adds a label to the node.                                           |
| `SetProperty`      | Set value of node's property                                        |
| `GetProperty`      | Get value of node's property                                        |

##### Id

Returns the node’s ID.

```cpp
mgp::Id Id() const
```

##### Labels

Returns an iterable & indexable structure of the node’s labels.

```cpp
class Labels Labels() const
```

##### HasLabel

Returns whether the node has the given `label`.

```cpp
bool HasLabel(std::string_view label) const
```

##### Properties

Returns an iterable & indexable structure of the node’s properties.

```cpp
std::map<std::string, mgp::Value> Properties() const
```

##### GetProperty

Gets value of node's property.

```cpp
mgp::value GetProperty(const std::string& property) const
```

##### SetProperty

Sets value of node's property.

```cpp
void SetProperty(std::string key, std::string value) const
```

##### InRelationships

Returns an iterable structure of the node’s inbound relationships.

```cpp
Relationships InRelationships() const
```

##### OutRelationships

Returns an iterable structure of the node’s outbound relationships.

```cpp
Relationships OutRelationships() const
```

##### AddLabel

Adds a label to the node.

```cpp
void AddLabel(const std::string_view label)
```

#### Operators

| Name                                          | Description                                               |
| --------------------------------------------- | --------------------------------------------------------- |
| `operator[]`                                  | Returns the value of the node’s `property_name` property. |
| `operator==`<br/>`operator!=`<br/>`operator<` | comparison operators                                      |

##### operator[]

Returns the value of the node’s `property_name` property.

```cpp
const Value operator[](std::string_view property_name) const
```

### Relationship

Represents a relationship (edge) of the Memgraph graph.

#### Constructors

Creates a Relationship from the copy of the given `mgp_edge`.
```cpp
explicit Relationship(mgp_edge *ptr)
explicit Relationship(const mgp_edge *const_ptr)
```

Copy and move constructors:
```cpp
Relationship(const Relationship &other) noexcept
Relationship(Relationship &&other) noexcept
```

#### Member functions

| Name               | Description                                                                 |
| ------------------ | --------------------------------------------------------------------------- |
| `Id`               | Returns the relationship’s ID.                                              |
| `Type`             | Returns the relationship’s type.                                            |
| `Properties`       | Returns an iterable & indexable structure of the relationship’s properties. |
| `SetProperty`      | Set value of relationship's property                                        |
| `GetProperty`      | Get value of relationship's property                                        |
| `From`             | Returns the relationship’s source node.                                     |
| `To`               | Returns the relationship’s destination node.                                |

##### Id

Returns the relationship’s ID.

```cpp
mgp::Id Id() const
```

##### Type

Returns the relationship’s type.

```cpp
std::string_view Type() const
```

##### Properties

Returns an iterable & indexable structure of the relationship’s properties.

```cpp
std::map<std::string, mgp::Value> Properties() const
```
##### GetProperty

Gets value of the relationship's property.

```cpp
mgp::value GetProperty(const std::string& property) const
```

##### SetProperty

Sets value of the relationship's property.

```cpp
void SetProperty(std::string key, std::string value) const
```

##### From

Returns the relationship’s source node.

```cpp
Node From() const
```

##### To

Returns the relationship’s source node.

```cpp
Node To() const
```

#### Operators

| Name                                          | Description                                                       |
| --------------------------------------------- | ----------------------------------------------------------------- |
| `operator[]`                                  | Returns the value of the relationship’s `property_name` property. |
| `operator==`<br/>`operator!=`<br/>`operator<` | comparison operators                                              |

##### operator[]

Returns the value of the relationship’s `property_name` property.

```cpp
const Value operator[](std::string_view property_name) const
```

#### Relationships

Auxiliary class providing an iterable view of the relationships adjacent to a node.
`Relationships` values may only be used for iteration to obtain the values stored within.

##### Constructors

```cpp
explicit Relationships(mgp_edges_iterator *relationships_iterator)
```

##### Member variables

| Name       | Type                      | Description                                 |
| ---------- | ------------------------- | ------------------------------------------- |
| `Iterator` | `Relationships::Iterator` | Const forward iterator for `Relationships`. |

##### Member functions

| Name                                      | Description                                                |
| ----------------------------------------- | ---------------------------------------------------------- |
| `begin`<br/>`end`<br/>`cbegin`<br/>`cend` | Returns the beginning/end of the `Relationships` iterator. |

### Id

Represents the unique ID possessed by all Memgraph nodes and relationships.

#### Member functions

| Name       | Description                                |
| ---------- | ------------------------------------------ |
| `FromUint` | Constructs an `Id` object from `uint64_t`. |
| `FromInt`  | Constructs an `Id` object from `int64_t`.  |
| `AsUint`   | Returns the ID value as `uint64_t`.        |
| `AsInt`    | Returns the ID value as `int64_t`.         |

##### FromUint

Constructs an `Id` object from `uint64_t`.

```cpp
static Id FromUint(uint64_t id)
```

##### FromInt

Constructs an `Id` object from `int64_t`.

```cpp
static Id FromInt(int64_t id)
```

##### AsUint

Returns the ID value as `uint64_t`.

```cpp
int64_t AsUint() const
```

##### AsInt

Returns the ID value as `int64_t`.

```cpp
int64_t AsInt() const
```

#### Operators

| Name                                          | Description          |
| --------------------------------------------- | -------------------- |
| `operator==`<br/>`operator!=`<br/>`operator<` | comparison operators |


### Labels

Represents a view of node labels.

#### Constructors

```cpp
explicit Labels(mgp_vertex *node_ptr) 
```

Copy and move constructors:
```cpp
Labels(const Labels &other) noexcept
Labels(Labels &&other) noexcept
```

#### Member variables

| Name       | Type               | Description                          |
| ---------- | ------------------ | ------------------------------------ |
| `Iterator` | `Labels::Iterator` | Const forward iterator for `Labels`. |

#### Member functions

| Name                                      | Description                                                    |
| ----------------------------------------- | -------------------------------------------------------------- |
| `Size`                                    | Returns the number of the labels, i.e. the size of their list. |
| `begin`<br/>`end`<br/>`cbegin`<br/>`cend` | Returns the beginning/end of the `Labels` iterator.            |

##### Size

Returns the number of the labels, i.e. the size of their list.

```cpp
size_t Size() const
```


#### Operators

| Name         | Description                                   |
| ------------ | --------------------------------------------- |
| `operator[]` | Returns the node’s label at position `index`. |

##### operator[]

Returns the node’s label at position `index`.

```cpp
std::string_view operator[](size_t index) const
```

### Date

Represents a date with a year, month, and day.

#### Constructors

Creates a Date object from the copy of the given `mgp_date`.
```cpp
explicit Date(mgp_date *ptr)
explicit Date(const mgp_date *const_ptr)
```

Creates a Date object from the given string representing a date in the ISO 8601 format 
(`YYYY-MM-DD`, `YYYYMMDD`, or `YYYY-MM`).
```cpp
explicit Date(std::string_view string)
```

Creates a Date object with the given `year`, `month`, and `day` properties. 
```cpp
Date(int year, int month, int day)
```

Copy and move constructors:
```cpp
Date(const Date &other) noexcept
Date(Date &&other) noexcept
```

#### Member functions

| Name        | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| `Now`       | Returns the current `Date`.                                   |
| `Year`      | Returns the date’s `year` property.                           |
| `Month`     | Returns the date’s `month` property.                          |
| `Day`       | Returns the date’s `day` property.                            |
| `Timestamp` | Returns the date’s timestamp (microseconds since Unix epoch). |

##### Now

Returns the current `Date`.

```cpp
static Date Now()
```

##### Year

Returns the date’s `year` property.

```cpp
int Year() const
```

##### Month

Returns the date’s `month` property.

```cpp
int Month() const
```

##### Day

Returns the date’s `day` property.

```cpp
int Day() const
```

##### Timestamp

Returns the date’s timestamp (microseconds since Unix epoch).

```cpp
int64_t Timestamp() const
```

#### Operators

| Name                         | Description          |
| ---------------------------- | -------------------- |
| `operator+`<br/>`operator-`  | arithmetic operators |
| `operator==`<br/>`operator<` | comparison operators |

##### operator-

```cpp
Date operator-(const Duration &dur) const
```
```cpp
Duration operator-(const Date &other) const
```

##### operator[]

Returns the value of the relationship’s `property_name` property.

```cpp
const Value operator[](std::string_view property_name) const
```

### LocalTime

Represents a time within the day without timezone information.

#### Constructors

Creates a LocalTime object from the copy of the given `mgp_local_time`.
```cpp
explicit LocalTime(mgp_local_time *ptr)
explicit LocalTime(const mgp_local_time *const_ptr)
```

Creates a LocalTime object from the given string representing a date in the ISO 8601 format 
(`[T]hh:mm:ss`, `[T]hh:mm`, `[T]hhmmss`, `[T]hhmm`, or `[T]hh`).
```cpp
explicit LocalTime(std::string_view string)
```

Creates a LocalTime object with the given `hour`, `minute`, `second`, `millisecond`, and `microsecond` properties.
```cpp
LocalTime(int hour, int minute, int second, int millisecond, int microsecond)
```

Copy and move constructors:
```cpp
LocalTime(const LocalTime &other) noexcept
LocalTime(LocalTime &&other) noexcept
```

#### Member functions

| Name          | Description                                                     |
| ------------- | --------------------------------------------------------------- |
| `Now`         | Returns the current `LocalTime`.                                |
| `Hour`        | Returns the object’s `hour` property.                           |
| `Minute`      | Returns the object’s `minute` property.                         |
| `Second`      | Returns the object’s `second` property.                         |
| `Millisecond` | Returns the object’s `millisecond` property.                    |
| `Microsecond` | Returns the object’s `microsecond` property.                    |
| `Timestamp`   | Returns the object’s timestamp (microseconds since Unix epoch). |

##### Now

Returns the current `LocalTime`.

```cpp
static LocalTime Now()
```

##### Hour

Returns the object’s `hour` property.

```cpp
int Hour() const
```

##### Minute

Returns the object’s `minute` property.

```cpp
int Minute() const
```

##### Second

Returns the object’s `second` property.

```cpp
int Second() const
```

##### Millisecond

Returns the object’s `millisecond` property.

```cpp
int Millisecond() const
```

##### Microsecond

Returns the object’s `microsecond` property.

```cpp
int Microsecond() const
```

##### Timestamp

Returns the object’s timestamp (microseconds since Unix epoch).

```cpp
int64_t Timestamp() const
```

#### Operators

| Name                         | Description          |
| ---------------------------- | -------------------- |
| `operator+`<br/>`operator-`  | arithmetic operators |
| `operator==`<br/>`operator<` | comparison operators |

##### operator-

```cpp
LocalTime operator-(const Duration &dur) const
```
```cpp
Duration operator-(const LocalDateTime &other) const
```

### LocalDateTime

Temporal type representing a date and a local time.

#### Constructors

Creates a LocalDateTime object from the copy of the given `mgp_local_date_time`.
```cpp
explicit LocalDateTime(mgp_local_date_time *ptr)
explicit LocalDateTime(const mgp_local_date_time *const_ptr)
```

Creates a LocalDateTime object from the given string representing a date in the ISO 8601 format
(`YYYY-MM-DDThh:mm:ss`, `YYYY-MM-DDThh:mm`, `YYYYMMDDThhmmss`, `YYYYMMDDThhmm`, or `YYYYMMDDThh`).
```cpp
explicit LocalDateTime(std::string_view string)
```

Creates a LocalDateTime object with the given `year`, `month`, `day`, `hour`, `minute`, `second`, `millisecond`, 
and `microsecond` properties.
```cpp
LocalDateTime(int year, int month, int day, int hour, int minute, int second, int millisecond, int microsecond)
```

Copy and move constructors:
```cpp
LocalDateTime(const LocalDateTime &other) noexcept
LocalDateTime(LocalDateTime &&other) noexcept
```

#### Member functions

| Name          | Description                                                     |
| ------------- | --------------------------------------------------------------- |
| `Now`         | Returns the current `LocalDateTime`.                            |
| `Year`        | Returns the object’s `year` property.                           |
| `Month`       | Returns the object’s `month` property.                          |
| `Day`         | Returns the object’s `day` property.                            |
| `Hour`        | Returns the object’s `hour` property.                           |
| `Minute`      | Returns the object’s `minute` property.                         |
| `Second`      | Returns the object’s `second` property.                         |
| `Millisecond` | Returns the object’s `millisecond` property.                    |
| `Microsecond` | Returns the object’s `microsecond` property.                    |
| `Timestamp`   | Returns the object’s timestamp (microseconds since Unix epoch). |

##### Now

Returns the current `LocalDateTime`.

```cpp
static LocalDateTime Now()
```

##### Year

Returns the object’s `year` property.

```cpp
int Year() const
```

##### Month

Returns the object’s `month` property.

```cpp
int Month() const
```

##### Day

Returns the object’s `day` property.

```cpp
int Day() const
```

##### Hour

Returns the object’s `hour` property.

```cpp
int Hour() const
```

##### Minute

Returns the object’s `minute` property.

```cpp
int Minute() const
```

##### Second

Returns the object’s `second` property.

```cpp
int Second() const
```

##### Millisecond

Returns the object’s `millisecond` property.

```cpp
int Millisecond() const
```

##### Microsecond

Returns the object’s `microsecond` property.

```cpp
int Microsecond() const
```

##### Timestamp

Returns the date’s timestamp (microseconds since Unix epoch).

```cpp
int64_t Timestamp() const
```

#### Operators

| Name                         | Description          |
| ---------------------------- | -------------------- |
| `operator+`<br/>`operator-`  | arithmetic operators |
| `operator==`<br/>`operator<` | comparison operators |

##### operator-

```cpp
LocalDateTime operator-(const Duration &dur) const
```
```cpp
Duration operator-(const LocalDateTime &other) const
```

### Duration

Represents a period of time in Memgraph.

#### Constructors

Creates a Duration object from the copy of the given `mgp_duration`.
```cpp
explicit Duration(mgp_duration *ptr)
explicit Duration(const mgp_duration *const_ptr)
```

Creates a Duration object from the given string in the following format: `P[nD]T[nH][nM][nS]`, where (1)
`n` stands for a number, (2) capital letters are used as a separator, (3) each field in `[]` is optional, 
and (4) only the last field may be a non-integer.
```cpp
explicit Duration(std::string_view string)
```

Creates a Duration object from the given number of microseconds.
```cpp
explicit Duration(int64_t microseconds) 
```

Creates a Duration object with the given `day`, `hour`, `minute`, `second`, `millisecond`, and `microsecond` properties.
```cpp
Duration(double day, double hour, double minute, double second, double millisecond, double microsecond)
```

Copy and move constructors:
```cpp
Duration(const Duration &other) noexcept
Duration(Duration &&other) noexcept
```

#### Member functions

| Name           | Description                           |
| -------------- | ------------------------------------- |
| `Microseconds` | Returns the duration as microseconds. |

##### Microseconds

Returns the duration as microseconds.

```cpp
int64_t Microseconds() const
```

#### Operators

| Name                         | Description          |
| ---------------------------- | -------------------- |
| `operator+`<br/>`operator-`  | arithmetic operators |
| `operator==`<br/>`operator<` | comparison operators |

##### operator-

```cpp
Duration operator-(const Duration &other) const
```
```cpp
Duration operator-() const
```

### Path

A path is a data structure consisting of alternating nodes and relationships, with the start
and end points of a path necessarily being nodes.

#### Constructors

Creates a Path from the copy of the given `mgp_path`.
```cpp
explicit Path(mgp_path *ptr)
explicit Path(const mgp_path *const_ptr)
```

Creates a Path starting with the given `start_node`.
```cpp
explicit Path(const Node &start_node)
```

Copy and move constructors:
```cpp
Path(const Path &other) noexcept
Path(Path &&other) noexcept
```

#### Member functions

| Name                | Description                                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------------------- |
| `Length`            | Returns the path length (number of relationships).                                                    |
| `GetNodeAt`         | Returns the node at the given `index`.  The `index` must be less than or equal to length of the path. |
| `GetRelationshipAt` | Returns the relationship at the given `index`. The `index` must be less than length of the path.      |
| `Expand`            | Adds a relationship continuing from the last node on the path.                                        |

##### Length

Returns the path length (number of relationships).

```cpp
size_t Length() const
```

##### GetNodeAt

Returns the node at the given `index`.  The `index` must be less than or equal to length of the path.

```cpp
Node GetNodeAt(size_t index) const
```

##### GetRelationshipAt

Returns the relationship at the given `index`.  The `index` must be less than the length of the path.

```cpp
Relationship GetRelationshipAt(size_t index) const
```

##### Expand

Adds a relationship continuing from the last node on the path.

```cpp
void Expand(const Relationship &relationship)
```

#### Operators

| Name                          | Description          |
| ----------------------------- | -------------------- |
| `operator==`<br/>`operator!=` | comparison operators |

### List

A list containing any number of values of any supported type.

#### Constructors

Creates a List from the copy of the given `mgp_list`.
```cpp
explicit List(mgp_list *ptr)
explicit List(const mgp_list *const_ptr)
```

Creates an empty List.
```cpp
explicit List()
```

Creates a List with the given `capacity`.
```cpp
explicit List(size_t capacity)
```

Creates a List from the given vector.
```cpp
explicit List(const std::vector<Value> &values)
explicit List(std::vector<Value> &&values)
```

Creates a List from the given initializer_list.
```cpp
explicit List(const std::initializer_list<Value> list)
```

Copy and move constructors:
```cpp
List(const List &other) noexcept
List(List &&other) noexcept
```

#### Member variables

| Name       | Type             | Description                                   |
| ---------- | ---------------- | --------------------------------------------- |
| `Iterator` | `List::Iterator` | Const forward iterator for `List` containers. |

#### Member functions

| Name                                      | Description                                           |
| ----------------------------------------- | ----------------------------------------------------- |
| `Size`                                    | Returns the size of the list.                         |
| `Empty`                                   | Returns whether the list is empty.                    |
| `Append`                                  | Appends the given `value` to the list.                |
| `AppendExtend`                            | Extends the list and appends the given `value` to it. |
| `begin`<br/>`end`<br/>`cbegin`<br/>`cend` | Returns the beginning/end of the `List` iterator.     |

##### Size

Returns the size of the list.

```cpp
size_t Size() const
```

##### Empty

Returns whether the list is empty.

```cpp
bool Empty() const
```

##### Append

Appends the given `value` to the list. The `value` is copied.

```cpp
void Append(const Value &value)
```

Appends the given `value` to the list. Takes ownership of `value` by moving it. 
The behavior of accessing `value` after performing this operation is undefined.

```cpp
void Append(Value &&value)
```

##### AppendExtend

Extends the list and appends the given `value` to it. The `value` is copied.

```cpp
void AppendExtend(const Value &value)
```

Extends the list and appends the given `value` to it. Takes ownership of `value` by moving it. 
The behavior of accessing `value` after performing this operation is undefined.

```cpp
void AppendExtend(Value &&value)
```

#### Operators

| Name                          | Description                             |
| ----------------------------- | --------------------------------------- |
| `operator[]`                  | Returns the value at the given `index`. |
| `operator==`<br/>`operator!=` | comparison operators                    |

##### operator[]

Returns the value at the given `index`.

```cpp
const Value operator[](size_t index) const
```

### Map

A map of key-value pairs where keys are strings, and values can be of any supported type.
The pairs are represented as [MapItems](#MapItem).

#### Constructors

Creates a Map from the copy of the given `mgp_map`.
```cpp
explicit Map(mgp_map *ptr)
explicit Map(const mgp_map *const_ptr)
```

Creates an empty Map.
```cpp
explicit Map()
```

Creates a Map from the given STL map.
```cpp
explicit Map(const std::map<std::string_view, Value> &items)
explicit Map(std::map<std::string_view, Value> &&items)
```

Creates a Map from the given initializer_list (map items correspond to initializer list pairs).
```cpp
Map(const std::initializer_list<std::pair<std::string_view, Value>> items)
```

Copy and move constructors:
```cpp
Map(const Map &other) noexcept
Map(Map &&other) noexcept
```

#### Member variables

| Name       | Type             | Description                                   |
| ---------- | ---------------- | --------------------------------------------- |
| `Iterator` | `List::Iterator` | Const forward iterator for `List` containers. |

#### Member functions

| Name                                      | Description                                        |
| ----------------------------------------- | -------------------------------------------------- |
| `Size`                                    | Returns the size of the map.                       |
| `Empty`                                   | Returns whether the map is empty.                  |
| `At`                                      | Returns the value at the given `key`.              |
| `Insert`                                  | Inserts the given `key`-`value` pair into the map. |
| `begin`<br/>`end`<br/>`cbegin`<br/>`cend` | Returns the beginning/end of the `Map` iterator.   |

##### Size

Returns the size of the map.

```cpp
size_t Size() const
```

##### Empty

Returns whether the map is empty.

```cpp
bool Empty() const
```

##### At

Returns the value at the given `key`.

```cpp
Value const At(std::string_view key) const
```

##### Insert

Inserts the given `key`-`value` pair into the map. The `value` is copied.

```cpp
void Insert(std::string_view key, const Value &value)
```
Inserts the given `key`-`value` pair into the map. Takes ownership of `value` by moving it. 
The behavior of accessing `value` after performing this operation is undefined.

```cpp
void Insert(std::string_view key, Value &&value)
```

#### Operators

| Name                          | Description                           |
| ----------------------------- | ------------------------------------- |
| `operator[]`                  | Returns the value at the given `key`. |
| `operator==`<br/>`operator!=` | comparison operators                  |

##### operator[]

Returns the value at the given `key`.

```cpp
const Value operator[](std::string_view key) const
```

#### MapItem

Auxiliary data structure representing key-value pairs where keys are strings, and values can be of any supported type.

##### Member variables

| Name    | Type               | Description                                        |
| ------- | ------------------ | -------------------------------------------------- |
| `key`   | `std::string_view` | Key for accessing the value stored in a `MapItem`. |
| `value` | `Value`            | The stored value.                                  |

##### Operators

| Name                                          | Description          |
| --------------------------------------------- | -------------------- |
| `operator==`<br/>`operator!=`<br/>`operator<` | comparison operators |

### Value

Represents a value of any type supported by Memgraph. 
The data types are described [here](https://memgraph.com/docs/memgraph/reference-guide/data-types).

#### Constructors

Creates a Value from the copy of the given `mgp_value`.
```cpp
explicit Value(mgp_value *ptr)
```

Creates a null Value.
```cpp
explicit Value()
```

Basic type constructors:
```cpp
explicit Value(const bool value)
explicit Value(const int64_t value)
explicit Value(const double value)
explicit Value(const char *value)
explicit Value(const std::string_view value)
```

Container type constructors:
```cpp
explicit Value(const List &value)
explicit Value(List &&value)
explicit Value(const Map &value)
explicit Value(Map &&value)
```

Graph element type constructors:
```cpp
explicit Value(const Node &value)
explicit Value(Node &&value)
explicit Value(const Relationship &value)
explicit Value(Relationship &&value)
explicit Value(const Path &value)
explicit Value(Path &&value)
```

Temporal type constructors:
```cpp
explicit Value(const Date &value)
explicit Value(Date &&value)
explicit Value(const LocalTime &value)
explicit Value(LocalTime &&value)
explicit Value(const LocalDateTime &value)
explicit Value(LocalDateTime &&value)
explicit Value(const Duration &value)
explicit Value(Duration &&value)
```

Copy and move constructors:
```cpp
Value(const Value &other) noexcept
Value(Value &&other) noexcept
```

#### Member functions

| Name          | Description                                 |
| ------------- | ------------------------------------------- |
| `ptr`         | Returns the pointer to the stored value.    |
| `Type`        | Returns the type of the value.              |
| `Value[TYPE]` | Returns a value of given type.              |
| `Is[TYPE]`    | Returns whether the value is of given type. |

##### Type

Returns the C API pointer to the stored value.

```cpp
mgp_value *ptr() const
```

##### Type

Returns the type of the value, i.e. the type stored in the `Value` object.

```cpp
mgp::Type Type() const
```

##### Value[TYPE]

Depending on the exact function called, returns a typed value of the appropriate type.
Throws an exception if the type stored in the `Value` object is not compatible with the function called.

```cpp
bool ValueBool() const
```

```cpp
int64_t ValueInt() const
```

```cpp
double ValueDouble const
```

```cpp
double ValueNumeric const
```

```cpp
std::string_view ValueString() const
```

```cpp
const List ValueList() const
```

```cpp
const Map ValueMap() const
```

```cpp
const Node ValueNode() const
```

```cpp
const Relationship ValueRelationship() const
```

```cpp
const Path ValuePath() const
```

```cpp
const Date ValueDate() const
```

```cpp
const LocalTime ValueLocalTime() const
```

```cpp
const LocalDateTime ValueLocalDateTime() const
```

```cpp
const Map ValueMap() const
```

##### Is[TYPE]

Returns whether the value stored in the `Value` object is of the type in the call.

```cpp
bool IsNull() const
```

```cpp
bool IsBool() const
```

```cpp
bool IsInt() const
```

```cpp
bool IsDouble() const
```

```cpp
bool IsNumeric() const
```

```cpp
bool IsString() const
```

```cpp
bool IsList() const
```

```cpp
bool IsMap() const
```

```cpp
bool IsNode() const
```

```cpp
bool IsRelationship() const
```

```cpp
bool IsPath() const
```

```cpp
bool IsDate() const
```

```cpp
bool IsLocalTime() const
```

```cpp
bool IsLocalDateTime() const
```

```cpp
bool IsDuration() const
```

#### Operators

| Name                          | Description          |
| ----------------------------- | -------------------- |
| `operator==`<br/>`operator!=` | comparison operators |

### Type

Enumerates the data types supported by Memgraph and its C++ API.
The types are listed and described [on this page](https://memgraph.com/docs/memgraph/reference-guide/data-types).

- `Type::Null`
- `Type::Any`
- `Type::Bool`
- `Type::Int`
- `Type::Double`
- `Type::String`
- `Type::List`
- `Type::Map`
- `Type::Node`
- `Type::Relationship`
- `Type::Path`
- `Type::Date`
- `Type::LocalTime`
- `Type::LocalDateTime`
- `Type::Duration`

## Exceptions

During operation, the following exceptions may be thrown.

| Exception                     | Message                                         |
| ----------------------------- | ----------------------------------------------- |
| `ValueException`              | various (handles unknown/unexpected types)      |
| `NotFoundException`           | Node with ID [ID] not found!                    |
| `NotEnoughMemoryException`    | Not enough memory!                              |
| `UnknownException`            | Unknown exception!                              |
| `AllocationException`         | Could not allocate memory!                      |
| `InsufficientBufferException` | Buffer is not sufficient to process procedure!  |
| `IndexException`              | Index value out of bounds!                      |
| `OutOfRangeException`         | Index out of range!                             |
| `LogicException`              | Logic exception, check the procedure signature! |
| `DeletedObjectException`      | Object is deleted!                              |
| `InvalidArgumentException`    | Invalid argument!                               |
| `InvalidIDException`          | Invalid ID!                                     |
| `KeyAlreadyExistsException`   | Key you are trying to set already exists!       |
| `ImmutableObjectException`    | Object you are trying to change is immutable!   |
| `ValueConversionException`    | Error in value conversion!                      |
| `SerializationException`      | Error in serialization!                         |
