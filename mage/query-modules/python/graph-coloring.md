---
id: graph-coloring
title: The graph_coloring module
sidebar_label: graph_coloring
---

## ` color_graph(context, parameters, edge_property)`

A procedure that performs the graph coloring algorithm.

**Parameters**

    
* **context** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **parameters** (*mgp.Map*) – (default={})
    A dictionary that specifies the algorithm configuration. Configuration parameters are explained in the table below.

| Name 	| Type 	| Default 	| Description 	|
|-	|-	|-	|-	|
| algorithm 	| String 	| QA 	| An optimization strategy used to find graph coloring. 	|
| no_of_colors 	| Integer 	| 10 	| The number of colors used to color the nodes of the graph. 	|
| no_of_processes 	| Integer 	| 1 	| The number of processes used to execute the algorithm in parallel. 	|
| population_size 	| Integer 	| 15 	| The number of different solutions that are improved through iterations. 	|
| population_factory 	| String 	| ChainChunkFactory 	| The name of a function that generates an initial population. 	|
| init_algorithms 	| List[String] 	| [SDO, LDO] 	| Contains algorithms used to initialize the solutions.  	|
| error 	| String 	| ConflictError 	| The name of an error function that is minimized by an optimization strategy. 	|
| max_iterations 	| Integer 	| 10 	| The maximum number of iterations of an algorithm. 	|
| iteration_callbacks 	| List[String] 	| [] 	| Contains iteration callbacks. Iteration callback is called after each iteration of the iterative algorithm. Iteration callback saves certain population information and calls specified actions if certain conditions are met. 	|
| communication_delay 	| Integer 	| 10 	| The number of iterations that must pass for neighboring parts to exchange solutions. 	|
| logging_delay 	| Integer 	| 10 	| The number of iteration after the algorithm information is logged. 	|
| QA_temperature 	| Float 	| 0.035 	| The temperature parameter of the quantum annealing algorithm. 	|
| QA_max_steps 	| Float 	| 10 	| The maximum number of steps in one iteration. 	|
| conflict_err_alpha 	| Float 	| 0.1 	| The number that scales the sum of the conflicting edges in the error function formula.  	|
| conflict_err_beta 	| Float 	| 0.001 	| The number that scales the correlation between solutions in the error function formula.   |
| mutation 	| String 	| SimpleMutation 	| The name of a function that changes the solutions. 	|
| multiple_mutation_no_of_nodes 	| Integer 	| 2 	| The number of nodes that will change color. 	|
| random_mutation_probability 	| Float 	| 0.1 	| The probability that the color of the random node (it does not have to be conflicting) will be changed. 	|
| simple_tunneling_mutation 	| String 	| MultipleMutation 	| The name of a mutation function. 	|
| simple_tunneling_probability 	| Float 	| 0.5 	| The probability of changing an individual. 	|
| simple_tunneling_error_correction 	| Float 	| 2 	| The mutated individual is accepted only if its error is less than the error of the old individual multiplied by this parameter. 	|
| simple_tunneling_max_attempts 	| Integer 	| 25 	| The maximum number of mutation attempts until the individual is accepted. 	|
| convergence_callback_tolerance 	| Integer 	| 500 	| The maximum number of iterations in which if the algorithm does not find a better solution convergence occurs and defined actions are called. 	|
| convergence_callback_actions 	| String 	| [SimpleTunneling] 	| Actions that are called when convergence is detected.|


* **edge_property** (*str*) – (default="weight")
    A string that determines the edge attribute that stores the edge weight.
    Any edge attribute not present defaults to 1.


**Returns**

The return value of the procedure is a map that contains the mapping of nodes to colors.

**Return type**

mgp.Record(node=str, color=str)

**Example**

The procedure can be invoked in Cypher using the following query:
```cypher
CALL graph_coloring.color_graph() YIELD *;
```

## ` color_subgraph(context, vertices, edges, parameters, edge_property)`

A procedure that performs graph coloring algorithm on the given subgraph.

**Parameters**

    
* **context** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **vertices** (*mgp.List[mgp.Vertex]*) - List of vertices in the subgraph.


* **edges** (*mgp.List[mgp.Edge]*) – List of edges in the subgraph.


* **parameters** (*mgp.Map*) – (default={})
    A dictionary that specifies the algorithm configuration. Configuration parameters are explained in the table below.

| Name 	| Type 	| Default 	| Description 	|
|-	|-	|-	|-	|
| algorithm 	| String 	| QA 	| An optimization strategy used to find graph coloring. 	|
| no_of_colors 	| Integer 	| 10 	| The number of colors used to color the nodes of the graph. 	|
| no_of_processes 	| Integer 	| 1 	| The number of processes used to execute the algorithm in parallel. 	|
| population_size 	| Integer 	| 15 	| The number of different solutions that are improved through iterations. 	|
| population_factory 	| String 	| ChainChunkFactory 	| The name of a function that generates an initial population. 	|
| init_algorithms 	| List[String] 	| [SDO, LDO] 	| Contains algorithms used to initialize the solutions.  	|
| error 	| String 	| ConflictError 	| The name of an error function that is minimized by an optimization strategy. 	|
| max_iterations 	| Integer 	| 10 	| The maximum number of iterations of an algorithm. 	|
| iteration_callbacks 	| List[String] 	| [] 	| Contains iteration callbacks. Iteration callback is called after each iteration of the iterative algorithm. Iteration callback saves certain population information and calls specified actions if certain conditions are met. 	|
| communication_delay 	| Integer 	| 10 	| The number of iterations that must pass for neighboring parts to exchange solutions. 	|
| logging_delay 	| Integer 	| 10 	| The number of iteration after the algorithm information is logged. 	|
| QA_temperature 	| Float 	| 0.035 	| The temperature parameter of the quantum annealing algorithm. 	|
| QA_max_steps 	| Float 	| 10 	| The maximum number of steps in one iteration. 	|
| conflict_err_alpha 	| Float 	| 0.1 	| The number that scales the sum of the conflicting edges in the error function formula.  	|
| conflict_err_beta 	| Float 	| 0.001 	| The number that scales the correlation between solutions in the error function formula.   |
| mutation 	| String 	| SimpleMutation 	| The name of a function that changes the solutions. 	|
| multiple_mutation_no_of_nodes 	| Integer 	| 2 	| The number of nodes that will change color. 	|
| random_mutation_probability 	| Float 	| 0.1 	| The probability that the color of the random node (it does not have to be conflicting) will be changed. 	|
| simple_tunneling_mutation 	| String 	| MultipleMutation 	| The name of a mutation function. 	|
| simple_tunneling_probability 	| Float 	| 0.5 	| The probability of changing an individual. 	|
| simple_tunneling_error_correction 	| Float 	| 2 	| The mutated individual is accepted only if its error is less than the error of the old individual multiplied by this parameter. 	|
| simple_tunneling_max_attempts 	| Integer 	| 25 	| The maximum number of mutation attempts until the individual is accepted. 	|
| convergence_callback_tolerance 	| Integer 	| 500 	| The maximum number of iterations in which if the algorithm does not find a better solution convergence occurs and defined actions are called. 	|
| convergence_callback_actions 	| String 	| [SimpleTunneling] 	| Actions that are called when convergence is detected.|


* **edge_property** (*str*) – (default="weight")
    A string that determines the edge attribute that stores the edge weight.
    Any edge attribute not present defaults to 1.


**Returns**

The return value of the procedure is a map that contains the mapping of nodes to colors.

**Return type**

mgp.Record(node=str, color=str)

**Example**

```cypher 
MATCH (a:)-[e:CLOSE_TO]->(b:)
WITH collect(a) as nodes, collect (e) as edges
CALL graph_coloring.color_subgraph(nodes, edges, {no_of_colors: 2})
YIELD color, node
RETURN color, node;
```
