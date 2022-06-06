---
sidebar_label: query_builder
title: gqlalchemy.query_builder
---

#### match

```python
def match(optional: bool = False) -> "DeclarativeBase"
```

Obtain data from the database by matching it to a given pattern.

**Arguments**:

- `optional` - A bool indicating if missing parts of the pattern will be
  filled with null values.
  

**Returns**:

  A `DeclarativeBase` instance for constructing queries.

#### merge

```python
def merge() -> "DeclarativeBase"
```

Ensure that a pattern you are looking for exists in the database.
This means that if the pattern is not found, it will be created. In a
way, this clause is like a combination of MATCH and CREATE.

**Returns**:

  A `DeclarativeBase` instance for constructing queries.

#### create

```python
def create() -> "DeclarativeBase"
```

Create nodes and relationships in a graph.

**Returns**:

  A `DeclarativeBase` instance for constructing queries.

#### call

```python
def call(procedure: str, arguments: Optional[str] = None) -> "DeclarativeBase"
```

Call a query module procedure.

**Arguments**:

- `procedure` - A string representing the name of the procedure in the
  format `query_module.procedure`.
- `arguments` - A string representing the arguments of the procedure in
  text format.
  

**Returns**:

  A `DeclarativeBase` instance for constructing queries.

#### node

```python
def node(labels: Union[str, List[str], None] = "", variable: Optional[str] = None, node: Optional["Node"] = None, **kwargs, ,) -> "DeclarativeBase"
```

Add a node pattern to the query.

**Arguments**:

- `labels` - A string or list of strings representing the labels of the
  node.
- `variable` - A string representing the name of the variable for storing
  results of the node pattern.
- `node` - A `Node` object to construct the pattern from.
- `**kwargs` - Arguments representing the properties of the node.
  

**Returns**:

  A `DeclarativeBase` instance for constructing queries.

#### to

```python
def to(relationship_type: Optional[str] = "", directed: Optional[bool] = True, variable: Optional[str] = None, relationship: Optional["Relationship"] = None, **kwargs, ,) -> "DeclarativeBase"
```

Add a relationship pattern to the query.

**Arguments**:

- `relationship_type` - A string representing the type of the relationship.
- `directed` - A bool indicating if the relationship is directed.
- `variable` - A string representing the name of the variable for storing
  results of the relationship pattern.
- `relationship` - A `Relationship` object to construct the pattern from.
- `**kwargs` - Arguments representing the properties of the relationship.
  

**Returns**:

  A `DeclarativeBase` instance for constructing queries.

#### from\_

```python
def from_(relationship_type: Optional[str] = "", directed: Optional[bool] = True, variable: Optional[str] = None, relationship: Optional["Relationship"] = None, **kwargs, ,) -> "Match"
```

Add a relationship pattern to the query.

**Arguments**:

- `relationship_type` - A string representing the type of the relationship.
- `directed` - A bool indicating if the relationship is directed.
- `variable` - A string representing the name of the variable for storing
  results of the relationship pattern.
- `relationship` - A `Relationship` object to construct the pattern from.
- `**kwargs` - Arguments representing the properties of the relationship.
  

**Returns**:

  A `DeclarativeBase` instance for constructing queries.

#### where

```python
def where(item: str, operator: str, **kwargs) -> "DeclarativeBase"
```

Creates a WHERE statement Cypher partial query.

**Arguments**:

- `item` - A string representing variable or property.
- `operator` - A string representing the operator.
  
  Kwargs:
- `literal` - A value that will be converted to Cypher value, such as int, float, string, etc.
- `expression` - A node label or property that won&#x27;t be converted to Cypher value (no additional quotes will be added).
  

**Raises**:

- `GQLAlchemyLiteralAndExpressionMissingInWhere` - Raises an error when neither literal nor expression keyword arguments were provided.
- `GQLAlchemyExtraKeywordArgumentsInWhere` - Raises an error when both literal and expression keyword arguments were provided.
  

**Returns**:

- `self` - A partial Cypher query built from the given parameters.
  

**Examples**:

  Filtering query results by the equality of `name` properties of two connected nodes.
  
- `Python` - `match().node(variable=&quot;n&quot;).to().node(variable=&quot;m&quot;).where(item=&quot;n.name&quot;, operator=&quot;=&quot;, expression=&quot;m.name&quot;).return_()`
- `Cypher` - `MATCH (n)-[]-&gt;(m) WHERE n.name = m.name RETURN *;`
  
  Filtering query results by the node label.
  
- `Python` - `match().node(variable=&quot;n&quot;).where(item=&quot;n&quot;, operator=&quot;:&quot;, expression=&quot;User&quot;).return_()`
- `Cypher` - `MATCH (n) WHERE n:User RETURN *;`
  
  Filtering query results by the comparison of node property and literal.
  
- `Python` - `match().node(variable=&quot;n&quot;).where(item=&quot;n.age&quot;, operator=&quot;&gt;&quot;, literal=18).return_()`
- `Cypher` - `MATCH (n) WHERE n.age &gt; 18 RETURN *;`

#### where\_not

```python
def where_not(item: str, operator: str, **kwargs) -> "DeclarativeBase"
```

Creates a WHERE NOT statement Cypher partial query.

**Arguments**:

- `item` - A string representing variable or property.
- `operator` - A string representing the operator.
  
  Kwargs:
- `literal` - A value that will be converted to Cypher value, such as int, float, string, etc.
- `expression` - A node label or property that won&#x27;t be converted to Cypher value (no additional quotes will be added).
  

**Raises**:

- `GQLAlchemyLiteralAndExpressionMissingInWhere` - Raises an error when neither literal nor expression keyword arguments were provided.
- `GQLAlchemyExtraKeywordArgumentsInWhere` - Raises an error when both literal and expression keyword arguments were provided.
  

**Returns**:

- `self` - A partial Cypher query built from the given parameters.
  

**Examples**:

  Filtering query results by the equality of `name` properties of two connected nodes.
  
- `Python` - `match().node(variable=&quot;n&quot;).to().node(variable=&quot;m&quot;).where_not(item=&quot;n.name&quot;, operator=&quot;=&quot;, expression=&quot;m.name&quot;).return_()`
- `Cypher` - `MATCH (n)-[]-&gt;(m) WHERE NOT n.name = m.name RETURN *;`

#### and\_where

```python
def and_where(item: str, operator: str, **kwargs) -> "DeclarativeBase"
```

Creates an AND statement as a part of WHERE Cypher partial query.

**Arguments**:

- `item` - A string representing variable or property.
- `operator` - A string representing the operator.
  
  Kwargs:
- `literal` - A value that will be converted to Cypher value, such as int, float, string, etc.
- `expression` - A node label or property that won&#x27;t be converted to Cypher value (no additional quotes will be added).
  

**Returns**:

- `self` - A partial Cypher query built from the given parameters.
  

**Examples**:

  Filtering query results by node label or the comparison of node property and literal.
  
- `Python` - `match().node(variable=&quot;n&quot;).where(item=&quot;n&quot;, operator=&quot;:&quot;, expression=&quot;User&quot;).and_where(item=&quot;n.age&quot;, operator=&quot;&gt;&quot;, literal=18).return_()`
- `Cypher` - `MATCH (n) WHERE n:User AND n.age &gt; 18 RETURN *;`

#### and\_not\_where

```python
def and_not_where(item: str, operator: str, **kwargs) -> "DeclarativeBase"
```

Creates an AND NOT statement as a part of WHERE Cypher partial query.

**Arguments**:

- `item` - A string representing variable or property.
- `operator` - A string representing the operator.
  
  Kwargs:
- `literal` - A value that will be converted to Cypher value, such as int, float, string, etc.
- `expression` - A node label or property that won&#x27;t be converted to Cypher value (no additional quotes will be added).
  

**Returns**:

- `self` - A partial Cypher query built from the given parameters.
  

**Examples**:

  Filtering query results by node label or the comparison of node property and literal.
  
- `Python` - `match().node(variable=&quot;n&quot;).where(item=&quot;n&quot;, operator=&quot;:&quot;, expression=&quot;User&quot;).and_not_where(item=&quot;n.age&quot;, operator=&quot;&gt;&quot;, literal=18).return_()`
- `Cypher` - `MATCH (n) WHERE n:User AND NOT n.age &gt; 18 RETURN *;`

#### or\_where

```python
def or_where(item: str, operator: str, **kwargs) -> "DeclarativeBase"
```

Creates an OR statement as a part of WHERE Cypher partial query.

**Arguments**:

- `item` - A string representing variable or property.
- `operator` - A string representing the operator.
  
  Kwargs:
- `literal` - A value that will be converted to Cypher value, such as int, float, string, etc.
- `expression` - A node label or property that won&#x27;t be converted to Cypher value (no additional quotes will be added).
  

**Returns**:

- `self` - A partial Cypher query built from the given parameters.
  

**Examples**:

  Filtering query results by node label or the comparison of node property and literal.
  
- `Python` - `match().node(variable=&quot;n&quot;).where(item=&quot;n&quot;, operator=&quot;:&quot;, expression=&quot;User&quot;).or_where(item=&quot;n.age&quot;, operator=&quot;&gt;&quot;, literal=18).return_()`
- `Cypher` - `MATCH (n) WHERE n:User OR n.age &gt; 18 RETURN *;`

#### or\_not\_where

```python
def or_not_where(item: str, operator: str, **kwargs) -> "DeclarativeBase"
```

Creates an OR NOT statement as a part of WHERE Cypher partial query.

**Arguments**:

- `item` - A string representing variable or property.
- `operator` - A string representing the operator.
  
  Kwargs:
- `literal` - A value that will be converted to Cypher value, such as int, float, string, etc.
- `expression` - A node label or property that won&#x27;t be converted to Cypher value (no additional quotes will be added).
  

**Returns**:

- `self` - A partial Cypher query built from the given parameters.
  

**Examples**:

  Filtering query results by node label or the comparison of node property and literal.
  
- `Python` - `match().node(variable=&quot;n&quot;).where(item=&quot;n&quot;, operator=&quot;:&quot;, expression=&quot;User&quot;).or_not_where(item=&quot;n.age&quot;, operator=&quot;&gt;&quot;, literal=18).return_()`
- `Cypher` - `MATCH (n) WHERE n:User OR NOT n.age &gt; 18 RETURN *;`

#### xor\_where

```python
def xor_where(item: str, operator: str, **kwargs) -> "DeclarativeBase"
```

Creates an XOR statement as a part of WHERE Cypher partial query.

**Arguments**:

- `item` - A string representing variable or property.
- `operator` - A string representing the operator.
  
  Kwargs:
- `literal` - A value that will be converted to Cypher value, such as int, float, string, etc.
- `expression` - A node label or property that won&#x27;t be converted to Cypher value (no additional quotes will be added).
  

**Returns**:

- `self` - A partial Cypher query built from the given parameters.
  

**Examples**:

  Filtering query results by node label or the comparison of node property and literal.
  
- `Python` - `match().node(variable=&quot;n&quot;).where(item=&quot;n&quot;, operator=&quot;:&quot;, expression=&quot;User&quot;).xor_where(item=&quot;n.age&quot;, operator=&quot;&gt;&quot;, literal=18).return_()`
- `Cypher` - `MATCH (n) WHERE n:User XOR n.age &gt; 18 RETURN *;`

#### xor\_not\_where

```python
def xor_not_where(item: str, operator: str, **kwargs) -> "DeclarativeBase"
```

Creates an XOR NOT statement as a part of WHERE Cypher partial query.

**Arguments**:

- `item` - A string representing variable or property.
- `operator` - A string representing the operator.
  
  Kwargs:
- `literal` - A value that will be converted to Cypher value, such as int, float, string, etc.
- `expression` - A node label or property that won&#x27;t be converted to Cypher value (no additional quotes will be added).
  

**Returns**:

- `self` - A partial Cypher query built from the given parameters.
  

**Examples**:

  Filtering query results by node label or the comparison of node property and literal.
  
- `Python` - `match().node(variable=&quot;n&quot;).where(item=&quot;n&quot;, operator=&quot;:&quot;, expression=&quot;User&quot;).xor_not_where(item=&quot;n.age&quot;, operator=&quot;&gt;&quot;, literal=18).return_()`
- `Cypher` - `MATCH (n) WHERE n:User XOR NOT n.age &gt; 18 RETURN *;`

#### unwind

```python
def unwind(list_expression: str, variable: str) -> "DeclarativeBase"
```

Unwind a list of values as individual rows.

**Arguments**:

- `list_expression` - A list of strings representing the list of values.
- `variable` - A string representing the variable name for unwinding results.
  

**Returns**:

  A `DeclarativeBase` instance for constructing queries.

#### with\_

```python
def with_(results: Optional[Dict[str, str]] = {}) -> "DeclarativeBase"
```

Chain together parts of a query, piping the results from one to be
used as starting points or criteria in the next.

**Arguments**:

- `results` - A dictionary mapping variables in the first query with
  aliases in the second query.
  

**Returns**:

  A `DeclarativeBase` instance for constructing queries.

#### union

```python
def union(include_duplicates: Optional[bool] = True) -> "DeclarativeBase"
```

Combine the result of multiple queries.

**Arguments**:

- `include_duplicates` - A bool indicating if duplicates should be
  included.
  

**Returns**:

  A `DeclarativeBase` instance for constructing queries.

#### delete

```python
def delete(variable_expressions: List[str], detach: Optional[bool] = False) -> "DeclarativeBase"
```

Delete nodes and relationships from the database.

**Arguments**:

- `variable_expressions` - A list of strings indicating which nodes
  and/or relationships should be removed.
- `detach` - A bool indicating if relationships should be deleted along
  with a node.
  

**Returns**:

  A `DeclarativeBase` instance for constructing queries.

#### remove

```python
def remove(items: List[str]) -> "DeclarativeBase"
```

Remove labels and properties from nodes and relationships.

**Arguments**:

- `items` - A list of strings indicating which labels and/or properties
  should be removed.
  

**Returns**:

  A `DeclarativeBase` instance for constructing queries.

#### yield\_

```python
def yield_(results: Optional[Dict[str, str]] = {}) -> "DeclarativeBase"
```

Yield data from the query.

**Arguments**:

- `results` - A dictionary mapping items that are returned with alias
  names.
  

**Returns**:

  A `DeclarativeBase` instance for constructing queries.

#### return\_

```python
def return_(results: Optional[Dict[str, str]] = {}) -> "DeclarativeBase"
```

Return data from the query.

**Arguments**:

- `results` - A dictionary mapping items that are returned with alias
  names.
  

**Returns**:

  A `DeclarativeBase` instance for constructing queries.

#### order\_by

```python
def order_by(properties: Union[str, Tuple[str, Order], List[Union[str, Tuple[str, Order]]]]) -> "DeclarativeBase"
```

Creates an ORDER BY statement Cypher partial query.

**Arguments**:

- `properties` - Properties and order by which the query results will be ordered.
  

**Raises**:

- `GQLAlchemyOrderByTypeError` - Raises an error when the given ordering is of the wrong type.
- `GQLAlchemyMissingOrdering` - Raises an error when the given property is neither string nor tuple.
  

**Returns**:

- `self` - A partial Cypher query built from the given parameters.
  

**Examples**:

  Ordering query results by the property `n.name` in ascending order
  and by the property `n.last_name` in descending order:
  
- `Python` - `match().node(variable=&quot;n&quot;).return_().order_by(properties=[&quot;n.name&quot;, (&quot;n.last_name&quot;, Order.DESC)])`
- `Cypher` - `MATCH (n) RETURN * ORDER BY n.name, n.last_name DESC;`

#### limit

```python
def limit(integer_expression: str) -> "DeclarativeBase"
```

Limit the number of records when returning results.

**Arguments**:

- `integer_expression` - An integer indicating how many records to limit
  the results to.
  

**Returns**:

  A `DeclarativeBase` instance for constructing queries.

#### skip

```python
def skip(integer_expression: str) -> "DeclarativeBase"
```

Skip a number of records when returning results.

**Arguments**:

- `integer_expression` - An integer indicating how many records to skip
  in the results.
  

**Returns**:

  A `DeclarativeBase` instance for constructing queries.

#### add\_custom\_cypher

```python
def add_custom_cypher(custom_cypher: str) -> "DeclarativeBase"
```

Inject custom Cypher code into the query.

**Arguments**:

- `custom_cypher` - A string representing the Cypher code to be injected
  into the query.
  

**Returns**:

  A `DeclarativeBase` instance for constructing queries.

#### load\_csv

```python
def load_csv(path: str, header: bool, row: str) -> "DeclarativeBase"
```

Load data from a CSV file by executing a Cypher query for each row.

**Arguments**:

- `path` - A string representing the path to the CSV file.
- `header` - A bool indicating if the CSV file starts with a header row.
- `row` - A string representing the name of the variable for iterating
  over each row.
  

**Returns**:

  A `DeclarativeBase` instance for constructing queries.

#### get\_single

```python
def get_single(retrieve: str) -> Any
```

Returns a single result with a `retrieve` variable name.

**Arguments**:

- `retrieve` - A string representing the results variable to be returned.
  

**Returns**:

  An iterator of dictionaries containing the results of the query.

#### execute

```python
def execute() -> Iterator[Dict[str, Any]]
```

Executes the Cypher query and returns the results.

**Returns**:

  An iterator of dictionaries containing the results of the query.

