---
title: include/mg_procedure.h
summary: Provides API for usage in custom openCypher procedures.  

---

# include/mg_procedure.h


Provides API for usage in custom openCypher procedures. 





## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[mgp_label](Classes/structmgp__label.md)** <br>Label of a vertex.  |
| struct | **[mgp_edge_type](Classes/structmgp__edge__type.md)** <br>Type of an edge.  |
| struct | **[mgp_property](Classes/structmgp__property.md)** <br>Reference to a named property value.  |
| struct | **[mgp_vertex_id](Classes/structmgp__vertex__id.md)** <br>ID of a vertex; valid during a single query execution.  |
| struct | **[mgp_edge_id](Classes/structmgp__edge__id.md)** <br>ID of an edge; valid during a single query execution.  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum | **[mgp_value_type](Files/mg__procedure_8h.md#enum-mgp_value_type)** { MGP_VALUE_TYPE_NULL, MGP_VALUE_TYPE_BOOL, MGP_VALUE_TYPE_INT, MGP_VALUE_TYPE_DOUBLE, MGP_VALUE_TYPE_STRING, MGP_VALUE_TYPE_LIST, MGP_VALUE_TYPE_MAP, MGP_VALUE_TYPE_VERTEX, MGP_VALUE_TYPE_EDGE, MGP_VALUE_TYPE_PATH }<br>All available types that can be stored in a mgp_value.  |
| typedef void(*)(const struct mgp_list *, const struct mgp_graph *, struct mgp_result *, struct mgp_memory *) | **[mgp_proc_cb](Files/mg__procedure_8h.md#typedef-mgp_proc_cb)** <br>Entry-point for a query module procedure, invoked through openCypher.  |



## Functions

|                | Name           |
| -------------- | -------------- |
| void * | **[mgp_alloc](Files/mg__procedure_8h.md#function-mgp_alloc)**(struct mgp_memory * memory, size_t size_in_bytes) <br>Allocate a block of memory with given size in bytes.  |
| void * | **[mgp_aligned_alloc](Files/mg__procedure_8h.md#function-mgp_aligned_alloc)**(struct mgp_memory * memory, size_t size_in_bytes, size_t alignment) <br>Allocate an aligned block of memory with given size in bytes.  |
| void | **[mgp_free](Files/mg__procedure_8h.md#function-mgp_free)**(struct mgp_memory * memory, void * ptr) <br>Deallocate an allocation from mgp_alloc or mgp_aligned_alloc.  |
| void | **[mgp_value_destroy](Files/mg__procedure_8h.md#function-mgp_value_destroy)**(struct mgp_value * val) <br>Free the memory used by the given mgp_value instance.  |
| struct mgp_value * | **[mgp_value_make_null](Files/mg__procedure_8h.md#function-mgp_value_make_null)**(struct mgp_memory * memory) <br>Construct a value representing `null` in openCypher.  |
| struct mgp_value * | **[mgp_value_make_bool](Files/mg__procedure_8h.md#function-mgp_value_make_bool)**(int val, struct mgp_memory * memory) <br>Construct a boolean value.  |
| struct mgp_value * | **[mgp_value_make_int](Files/mg__procedure_8h.md#function-mgp_value_make_int)**(int64_t val, struct mgp_memory * memory) <br>Construct an integer value.  |
| struct mgp_value * | **[mgp_value_make_double](Files/mg__procedure_8h.md#function-mgp_value_make_double)**(double val, struct mgp_memory * memory) <br>Construct a double floating point value.  |
| struct mgp_value * | **[mgp_value_make_string](Files/mg__procedure_8h.md#function-mgp_value_make_string)**(const char * val, struct mgp_memory * memory) <br>Construct a character string value from a NULL terminated string.  |
| struct mgp_value * | **[mgp_value_make_list](Files/mg__procedure_8h.md#function-mgp_value_make_list)**(struct mgp_list * val) <br>Create a mgp_value storing a mgp_list.  |
| struct mgp_value * | **[mgp_value_make_map](Files/mg__procedure_8h.md#function-mgp_value_make_map)**(struct mgp_map * val) <br>Create a mgp_value storing a mgp_map.  |
| struct mgp_value * | **[mgp_value_make_vertex](Files/mg__procedure_8h.md#function-mgp_value_make_vertex)**(struct mgp_vertex * val) <br>Create a mgp_value storing a mgp_vertex.  |
| struct mgp_value * | **[mgp_value_make_edge](Files/mg__procedure_8h.md#function-mgp_value_make_edge)**(struct mgp_edge * val) <br>Create a mgp_value storing a mgp_edge.  |
| struct mgp_value * | **[mgp_value_make_path](Files/mg__procedure_8h.md#function-mgp_value_make_path)**(struct mgp_path * val) <br>Create a mgp_value storing a mgp_path.  |
| enum [mgp_value_type](Files/mg__procedure_8h.md#enum-mgp_value_type) | **[mgp_value_get_type](Files/mg__procedure_8h.md#function-mgp_value_get_type)**(const struct mgp_value * val) <br>Return the type of the value contained in mgp_value.  |
| int | **[mgp_value_is_null](Files/mg__procedure_8h.md#function-mgp_value_is_null)**(const struct mgp_value * val) <br>Return non-zero if the given mgp_value represents `null`.  |
| int | **[mgp_value_is_bool](Files/mg__procedure_8h.md#function-mgp_value_is_bool)**(const struct mgp_value * val) <br>Return non-zero if the given mgp_value stores a boolean.  |
| int | **[mgp_value_is_int](Files/mg__procedure_8h.md#function-mgp_value_is_int)**(const struct mgp_value * val) <br>Return non-zero if the given mgp_value stores an integer.  |
| int | **[mgp_value_is_double](Files/mg__procedure_8h.md#function-mgp_value_is_double)**(const struct mgp_value * val) <br>Return non-zero if the given mgp_value stores a double floating-point.  |
| int | **[mgp_value_is_string](Files/mg__procedure_8h.md#function-mgp_value_is_string)**(const struct mgp_value * val) <br>Return non-zero if the given mgp_value stores a character string.  |
| int | **[mgp_value_is_list](Files/mg__procedure_8h.md#function-mgp_value_is_list)**(const struct mgp_value * val) <br>Return non-zero if the given mgp_value stores a list of values.  |
| int | **[mgp_value_is_map](Files/mg__procedure_8h.md#function-mgp_value_is_map)**(const struct mgp_value * val) <br>Return non-zero if the given mgp_value stores a map of values.  |
| int | **[mgp_value_is_vertex](Files/mg__procedure_8h.md#function-mgp_value_is_vertex)**(const struct mgp_value * val) <br>Return non-zero if the given mgp_value stores a vertex.  |
| int | **[mgp_value_is_edge](Files/mg__procedure_8h.md#function-mgp_value_is_edge)**(const struct mgp_value * val) <br>Return non-zero if the given mgp_value stores an edge.  |
| int | **[mgp_value_is_path](Files/mg__procedure_8h.md#function-mgp_value_is_path)**(const struct mgp_value * val) <br>Return non-zero if the given mgp_value stores a path.  |
| int | **[mgp_value_get_bool](Files/mg__procedure_8h.md#function-mgp_value_get_bool)**(const struct mgp_value * val) <br>Return the contained boolean value.  |
| int64_t | **[mgp_value_get_int](Files/mg__procedure_8h.md#function-mgp_value_get_int)**(const struct mgp_value * val) <br>Return the contained integer.  |
| double | **[mgp_value_get_double](Files/mg__procedure_8h.md#function-mgp_value_get_double)**(const struct mgp_value * val) <br>Return the contained double floating-point.  |
| const char * | **[mgp_value_get_string](Files/mg__procedure_8h.md#function-mgp_value_get_string)**(const struct mgp_value * val) <br>Return the contained character string.  |
| const struct mgp_list * | **[mgp_value_get_list](Files/mg__procedure_8h.md#function-mgp_value_get_list)**(const struct mgp_value * val) <br>Return the contained list of values.  |
| const struct mgp_map * | **[mgp_value_get_map](Files/mg__procedure_8h.md#function-mgp_value_get_map)**(const struct mgp_value * val) <br>Return the contained map of values.  |
| const struct mgp_vertex * | **[mgp_value_get_vertex](Files/mg__procedure_8h.md#function-mgp_value_get_vertex)**(const struct mgp_value * val) <br>Return the contained vertex.  |
| const struct mgp_edge * | **[mgp_value_get_edge](Files/mg__procedure_8h.md#function-mgp_value_get_edge)**(const struct mgp_value * val) <br>Return the contained edge.  |
| const struct mgp_path * | **[mgp_value_get_path](Files/mg__procedure_8h.md#function-mgp_value_get_path)**(const struct mgp_value * val) <br>Return the contained path.  |
| struct mgp_list * | **[mgp_list_make_empty](Files/mg__procedure_8h.md#function-mgp_list_make_empty)**(size_t capacity, struct mgp_memory * memory) <br>Create an empty list with given capacity.  |
| void | **[mgp_list_destroy](Files/mg__procedure_8h.md#function-mgp_list_destroy)**(struct mgp_list * list) <br>Free the memory used by the given mgp_list and contained elements.  |
| int | **[mgp_list_append](Files/mg__procedure_8h.md#function-mgp_list_append)**(struct mgp_list * list, const struct mgp_value * val) <br>Append a copy of mgp_value to mgp_list if capacity allows.  |
| int | **[mgp_list_append_extend](Files/mg__procedure_8h.md#function-mgp_list_append_extend)**(struct mgp_list * list, const struct mgp_value * val) <br>Append a copy of mgp_value to mgp_list increasing capacity if needed.  |
| size_t | **[mgp_list_size](Files/mg__procedure_8h.md#function-mgp_list_size)**(const struct mgp_list * list) <br>Return the number of elements stored in mgp_list.  |
| size_t | **[mgp_list_capacity](Files/mg__procedure_8h.md#function-mgp_list_capacity)**(const struct mgp_list * list) <br>Return the total number of elements for which there's already allocated memory in mgp_list.  |
| const struct mgp_value * | **[mgp_list_at](Files/mg__procedure_8h.md#function-mgp_list_at)**(const struct mgp_list * list, size_t index) <br>Return the element in mgp_list at given position.  |
| struct mgp_map * | **[mgp_map_make_empty](Files/mg__procedure_8h.md#function-mgp_map_make_empty)**(struct mgp_memory * memory) <br>Create an empty map of character strings to mgp_value instances.  |
| void | **[mgp_map_destroy](Files/mg__procedure_8h.md#function-mgp_map_destroy)**(struct mgp_map * map) <br>Free the memory used by the given mgp_map and contained items.  |
| int | **[mgp_map_insert](Files/mg__procedure_8h.md#function-mgp_map_insert)**(struct mgp_map * map, const char * key, const struct mgp_value * value) <br>Insert a new mapping from a NULL terminated character string to a value.  |
| size_t | **[mgp_map_size](Files/mg__procedure_8h.md#function-mgp_map_size)**(const struct mgp_map * map) <br>Return the number of items stored in mgp_map.  |
| const struct mgp_value * | **[mgp_map_at](Files/mg__procedure_8h.md#function-mgp_map_at)**(const struct mgp_map * map, const char * key) <br>Return the mapped mgp_value to the given character string.  |
| const char * | **[mgp_map_item_key](Files/mg__procedure_8h.md#function-mgp_map_item_key)**(const struct mgp_map_item * item) <br>Get the key of the mapped item.  |
| const struct mgp_value * | **[mgp_map_item_value](Files/mg__procedure_8h.md#function-mgp_map_item_value)**(const struct mgp_map_item * item) <br>Get the value of the mapped item.  |
| struct mgp_map_items_iterator * | **[mgp_map_iter_items](Files/mg__procedure_8h.md#function-mgp_map_iter_items)**(const struct mgp_map * map, struct mgp_memory * memory) <br>Start iterating over items contained in the given map.  |
| void | **[mgp_map_items_iterator_destroy](Files/mg__procedure_8h.md#function-mgp_map_items_iterator_destroy)**(struct mgp_map_items_iterator * it) <br>Deallocate memory used by mgp_map_items_iterator.  |
| const struct mgp_map_item * | **[mgp_map_items_iterator_get](Files/mg__procedure_8h.md#function-mgp_map_items_iterator_get)**(const struct mgp_map_items_iterator * it) <br>Get the current item pointed to by the iterator.  |
| const struct mgp_map_item * | **[mgp_map_items_iterator_next](Files/mg__procedure_8h.md#function-mgp_map_items_iterator_next)**(struct mgp_map_items_iterator * it) <br>Advance the iterator to the next item stored in map and return it.  |
| struct mgp_path * | **[mgp_path_make_with_start](Files/mg__procedure_8h.md#function-mgp_path_make_with_start)**(const struct mgp_vertex * vertex, struct mgp_memory * memory) <br>Create a path with the copy of the given starting vertex.  |
| struct mgp_path * | **[mgp_path_copy](Files/mg__procedure_8h.md#function-mgp_path_copy)**(const struct mgp_path * path, struct mgp_memory * memory) <br>Copy a mgp_path.  |
| void | **[mgp_path_destroy](Files/mg__procedure_8h.md#function-mgp_path_destroy)**(struct mgp_path * path) <br>Free the memory used by the given mgp_path and contained vertices and edges.  |
| int | **[mgp_path_expand](Files/mg__procedure_8h.md#function-mgp_path_expand)**(struct mgp_path * path, const struct mgp_edge * edge) <br>Append an edge continuing from the last vertex on the path.  |
| size_t | **[mgp_path_size](Files/mg__procedure_8h.md#function-mgp_path_size)**(const struct mgp_path * path) <br>Return the number of edges in a mgp_path.  |
| const struct mgp_vertex * | **[mgp_path_vertex_at](Files/mg__procedure_8h.md#function-mgp_path_vertex_at)**(const struct mgp_path * path, size_t index) <br>Return the vertex from a path at given index.  |
| const struct mgp_edge * | **[mgp_path_edge_at](Files/mg__procedure_8h.md#function-mgp_path_edge_at)**(const struct mgp_path * path, size_t index) <br>Return the edge from a path at given index.  |
| int | **[mgp_path_equal](Files/mg__procedure_8h.md#function-mgp_path_equal)**(const struct mgp_path * p1, const struct mgp_path * p2) <br>Return non-zero if given paths are equal, otherwise 0.  |
| int | **[mgp_result_set_error_msg](Files/mg__procedure_8h.md#function-mgp_result_set_error_msg)**(struct mgp_result * res, const char * error_msg) <br>Set the error as the result of the procedure.  |
| struct mgp_result_record * | **[mgp_result_new_record](Files/mg__procedure_8h.md#function-mgp_result_new_record)**(struct mgp_result * res) <br>Create a new record for results.  |
| int | **[mgp_result_record_insert](Files/mg__procedure_8h.md#function-mgp_result_record_insert)**(struct mgp_result_record * record, const char * field_name, const struct mgp_value * val) <br>Assign a value to a field in the given record.  |
| void | **[mgp_properties_iterator_destroy](Files/mg__procedure_8h.md#function-mgp_properties_iterator_destroy)**(struct mgp_properties_iterator * it) <br>Free the memory used by a mgp_properties_iterator.  |
| const struct [mgp_property](Classes/structmgp__property.md) * | **[mgp_properties_iterator_get](Files/mg__procedure_8h.md#function-mgp_properties_iterator_get)**(const struct mgp_properties_iterator * it) <br>Get the current property pointed to by the iterator.  |
| const struct [mgp_property](Classes/structmgp__property.md) * | **[mgp_properties_iterator_next](Files/mg__procedure_8h.md#function-mgp_properties_iterator_next)**(struct mgp_properties_iterator * it) <br>Advance the iterator to the next property and return it.  |
| void | **[mgp_edges_iterator_destroy](Files/mg__procedure_8h.md#function-mgp_edges_iterator_destroy)**(struct mgp_edges_iterator * it) <br>Free the memory used by a mgp_edges_iterator.  |
| struct [mgp_vertex_id](Classes/structmgp__vertex__id.md) | **[mgp_vertex_get_id](Files/mg__procedure_8h.md#function-mgp_vertex_get_id)**(const struct mgp_vertex * v) <br>Get the ID of given vertex.  |
| struct mgp_vertex * | **[mgp_vertex_copy](Files/mg__procedure_8h.md#function-mgp_vertex_copy)**(const struct mgp_vertex * v, struct mgp_memory * memory) <br>Copy a mgp_vertex.  |
| void | **[mgp_vertex_destroy](Files/mg__procedure_8h.md#function-mgp_vertex_destroy)**(struct mgp_vertex * v) <br>Free the memory used by a mgp_vertex.  |
| int | **[mgp_vertex_equal](Files/mg__procedure_8h.md#function-mgp_vertex_equal)**(const struct mgp_vertex * v1, const struct mgp_vertex * v2) <br>Return non-zero if given vertices are equal, otherwise 0.  |
| size_t | **[mgp_vertex_labels_count](Files/mg__procedure_8h.md#function-mgp_vertex_labels_count)**(const struct mgp_vertex * v) <br>Return the number of labels a given vertex has.  |
| struct [mgp_label](Classes/structmgp__label.md) | **[mgp_vertex_label_at](Files/mg__procedure_8h.md#function-mgp_vertex_label_at)**(const struct mgp_vertex * v, size_t index) <br>Return [mgp_label](Classes/structmgp__label.md) in mgp_vertex at given index.  |
| int | **[mgp_vertex_has_label](Files/mg__procedure_8h.md#function-mgp_vertex_has_label)**(const struct mgp_vertex * v, struct [mgp_label](Classes/structmgp__label.md) label) <br>Return non-zero if the given vertex has the given label.  |
| int | **[mgp_vertex_has_label_named](Files/mg__procedure_8h.md#function-mgp_vertex_has_label_named)**(const struct mgp_vertex * v, const char * label_name) <br>Return non-zero if the given vertex has a label with given name.  |
| struct mgp_value * | **[mgp_vertex_get_property](Files/mg__procedure_8h.md#function-mgp_vertex_get_property)**(const struct mgp_vertex * v, const char * property_name, struct mgp_memory * memory) <br>Get a copy of a vertex property mapped to a given name.  |
| struct mgp_properties_iterator * | **[mgp_vertex_iter_properties](Files/mg__procedure_8h.md#function-mgp_vertex_iter_properties)**(const struct mgp_vertex * v, struct mgp_memory * memory) <br>Start iterating over properties stored in the given vertex.  |
| struct mgp_edges_iterator * | **[mgp_vertex_iter_in_edges](Files/mg__procedure_8h.md#function-mgp_vertex_iter_in_edges)**(const struct mgp_vertex * v, struct mgp_memory * memory) <br>Start iterating over inbound edges of the given vertex.  |
| struct mgp_edges_iterator * | **[mgp_vertex_iter_out_edges](Files/mg__procedure_8h.md#function-mgp_vertex_iter_out_edges)**(const struct mgp_vertex * v, struct mgp_memory * memory) <br>Start iterating over outbound edges of the given vertex.  |
| const struct mgp_edge * | **[mgp_edges_iterator_get](Files/mg__procedure_8h.md#function-mgp_edges_iterator_get)**(const struct mgp_edges_iterator * it) <br>Get the current edge pointed to by the iterator.  |
| const struct mgp_edge * | **[mgp_edges_iterator_next](Files/mg__procedure_8h.md#function-mgp_edges_iterator_next)**(struct mgp_edges_iterator * it) <br>Advance the iterator to the next edge and return it.  |
| struct [mgp_edge_id](Classes/structmgp__edge__id.md) | **[mgp_edge_get_id](Files/mg__procedure_8h.md#function-mgp_edge_get_id)**(const struct mgp_edge * e) <br>Get the ID of given edge.  |
| struct mgp_edge * | **[mgp_edge_copy](Files/mg__procedure_8h.md#function-mgp_edge_copy)**(const struct mgp_edge * e, struct mgp_memory * memory) <br>Copy a mgp_edge.  |
| void | **[mgp_edge_destroy](Files/mg__procedure_8h.md#function-mgp_edge_destroy)**(struct mgp_edge * e) <br>Free the memory used by a mgp_edge.  |
| int | **[mgp_edge_equal](Files/mg__procedure_8h.md#function-mgp_edge_equal)**(const struct mgp_edge * e1, const struct mgp_edge * e2) <br>Return non-zero if given edges are equal, otherwise 0.  |
| struct [mgp_edge_type](Classes/structmgp__edge__type.md) | **[mgp_edge_get_type](Files/mg__procedure_8h.md#function-mgp_edge_get_type)**(const struct mgp_edge * e) <br>Return the type of the given edge.  |
| const struct mgp_vertex * | **[mgp_edge_get_from](Files/mg__procedure_8h.md#function-mgp_edge_get_from)**(const struct mgp_edge * e) <br>Return the source vertex of the given edge.  |
| const struct mgp_vertex * | **[mgp_edge_get_to](Files/mg__procedure_8h.md#function-mgp_edge_get_to)**(const struct mgp_edge * e) <br>Return the destination vertex of the given edge.  |
| struct mgp_value * | **[mgp_edge_get_property](Files/mg__procedure_8h.md#function-mgp_edge_get_property)**(const struct mgp_edge * e, const char * property_name, struct mgp_memory * memory) <br>Get a copy of a edge property mapped to a given name.  |
| struct mgp_properties_iterator * | **[mgp_edge_iter_properties](Files/mg__procedure_8h.md#function-mgp_edge_iter_properties)**(const struct mgp_edge * e, struct mgp_memory * memory) <br>Start iterating over properties stored in the given edge.  |
| struct mgp_vertex * | **[mgp_graph_get_vertex_by_id](Files/mg__procedure_8h.md#function-mgp_graph_get_vertex_by_id)**(const struct mgp_graph * g, struct [mgp_vertex_id](Classes/structmgp__vertex__id.md) id, struct mgp_memory * memory) <br>Return the vertex corresponding to given ID.  |
| void | **[mgp_vertices_iterator_destroy](Files/mg__procedure_8h.md#function-mgp_vertices_iterator_destroy)**(struct mgp_vertices_iterator * it) <br>Free the memory used by a mgp_vertices_iterator.  |
| struct mgp_vertices_iterator * | **[mgp_graph_iter_vertices](Files/mg__procedure_8h.md#function-mgp_graph_iter_vertices)**(const struct mgp_graph * g, struct mgp_memory * memory) <br>Start iterating over vertices of the given graph.  |
| const struct mgp_vertex * | **[mgp_vertices_iterator_get](Files/mg__procedure_8h.md#function-mgp_vertices_iterator_get)**(const struct mgp_vertices_iterator * it) <br>Get the current vertex pointed to by the iterator.  |
| const struct mgp_vertex * | **[mgp_vertices_iterator_next](Files/mg__procedure_8h.md#function-mgp_vertices_iterator_next)**(struct mgp_vertices_iterator * it) <br>Advance the iterator to the next vertex and return it.  |
| const struct mgp_type * | **[mgp_type_any](Files/mg__procedure_8h.md#function-mgp_type_any)**() <br>Get the type representing any value that isn't `null`.  |
| const struct mgp_type * | **[mgp_type_bool](Files/mg__procedure_8h.md#function-mgp_type_bool)**() <br>Get the type representing boolean values.  |
| const struct mgp_type * | **[mgp_type_string](Files/mg__procedure_8h.md#function-mgp_type_string)**() <br>Get the type representing character string values.  |
| const struct mgp_type * | **[mgp_type_int](Files/mg__procedure_8h.md#function-mgp_type_int)**() <br>Get the type representing integer values.  |
| const struct mgp_type * | **[mgp_type_float](Files/mg__procedure_8h.md#function-mgp_type_float)**() <br>Get the type representing floating-point values.  |
| const struct mgp_type * | **[mgp_type_number](Files/mg__procedure_8h.md#function-mgp_type_number)**() <br>Get the type representing any number value.  |
| const struct mgp_type * | **[mgp_type_map](Files/mg__procedure_8h.md#function-mgp_type_map)**() <br>Get the type representing map values.  |
| const struct mgp_type * | **[mgp_type_node](Files/mg__procedure_8h.md#function-mgp_type_node)**() <br>Get the type representing graph node values.  |
| const struct mgp_type * | **[mgp_type_relationship](Files/mg__procedure_8h.md#function-mgp_type_relationship)**() <br>Get the type representing graph relationship values.  |
| const struct mgp_type * | **[mgp_type_path](Files/mg__procedure_8h.md#function-mgp_type_path)**() <br>Get the type representing a graph path (walk) from one node to another.  |
| const struct mgp_type * | **[mgp_type_list](Files/mg__procedure_8h.md#function-mgp_type_list)**(const struct mgp_type * element_type) <br>Build a type representing a list of values of given `element_type`.  |
| const struct mgp_type * | **[mgp_type_nullable](Files/mg__procedure_8h.md#function-mgp_type_nullable)**(const struct mgp_type * type) <br>Build a type representing either a `null` value or a value of given `type`.  |
| struct mgp_proc * | **[mgp_module_add_read_procedure](Files/mg__procedure_8h.md#function-mgp_module_add_read_procedure)**(struct mgp_module * module, const char * name, [mgp_proc_cb](Files/mg__procedure_8h.md#typedef-mgp_proc_cb) cb) <br>Register a read-only procedure with a module.  |
| int | **[mgp_proc_add_arg](Files/mg__procedure_8h.md#function-mgp_proc_add_arg)**(struct mgp_proc * proc, const char * name, const struct mgp_type * type) <br>Add a required argument to a procedure.  |
| int | **[mgp_proc_add_opt_arg](Files/mg__procedure_8h.md#function-mgp_proc_add_opt_arg)**(struct mgp_proc * proc, const char * name, const struct mgp_type * type, const struct mgp_value * default_value) <br>Add an optional argument with a default value to a procedure.  |
| int | **[mgp_proc_add_result](Files/mg__procedure_8h.md#function-mgp_proc_add_result)**(struct mgp_proc * proc, const char * name, const struct mgp_type * type) <br>Add a result field to a procedure.  |
| int | **[mgp_proc_add_deprecated_result](Files/mg__procedure_8h.md#function-mgp_proc_add_deprecated_result)**(struct mgp_proc * proc, const char * name, const struct mgp_type * type) <br>Add a result field to a procedure and mark it as deprecated.  |
| int | **[mgp_must_abort](Files/mg__procedure_8h.md#function-mgp_must_abort)**(const struct mgp_graph * graph) <br>Return non-zero if the currently executing procedure should abort as soon as possible.  |






## Types Documentation

### enum mgp_value_type


| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| MGP_VALUE_TYPE_NULL |  |   |
| MGP_VALUE_TYPE_BOOL |  |   |
| MGP_VALUE_TYPE_INT |  |   |
| MGP_VALUE_TYPE_DOUBLE |  |   |
| MGP_VALUE_TYPE_STRING |  |   |
| MGP_VALUE_TYPE_LIST |  |   |
| MGP_VALUE_TYPE_MAP |  |   |
| MGP_VALUE_TYPE_VERTEX |  |   |
| MGP_VALUE_TYPE_EDGE |  |   |
| MGP_VALUE_TYPE_PATH |  |   |



All available types that can be stored in a mgp_value. 




























### typedef mgp_proc_cb

```cpp
typedef void(* mgp_proc_cb) (const struct mgp_list *, const struct mgp_graph *, struct mgp_result *, struct mgp_memory *);
```

Entry-point for a query module procedure, invoked through openCypher. 


























Passed in arguments will not live longer than the callback's execution. Therefore, you must not store them globally or use the passed in mgp_memory to allocate global resources. 



## Functions Documentation

### function mgp_alloc

```cpp
void * mgp_alloc(
    struct mgp_memory * memory,
    size_t size_in_bytes
)
```

Allocate a block of memory with given size in bytes. 


























Unlike malloc, this function is not thread-safe. `size_in_bytes` must be greater than 0. The returned pointer must be freed with mgp_free. NULL is returned if unable to serve the requested allocation. 


### function mgp_aligned_alloc

```cpp
void * mgp_aligned_alloc(
    struct mgp_memory * memory,
    size_t size_in_bytes,
    size_t alignment
)
```

Allocate an aligned block of memory with given size in bytes. 


























Unlike malloc and aligned_alloc, this function is not thread-safe. `size_in_bytes` must be greater than 0. `alignment` must be a power of 2 value. The returned pointer must be freed with mgp_free. NULL is returned if unable to serve the requested allocation. 


### function mgp_free

```cpp
void mgp_free(
    struct mgp_memory * memory,
    void * ptr
)
```

Deallocate an allocation from mgp_alloc or mgp_aligned_alloc. 


























Unlike free, this function is not thread-safe. If `ptr` is NULL, this function does nothing. The behavior is undefined if `ptr` is not a value returned from a prior mgp_alloc or mgp_aligned_alloc call with the corresponding `memory`. 


### function mgp_value_destroy

```cpp
void mgp_value_destroy(
    struct mgp_value * val
)
```

Free the memory used by the given mgp_value instance. 




























### function mgp_value_make_null

```cpp
struct mgp_value * mgp_value_make_null(
    struct mgp_memory * memory
)
```

Construct a value representing `null` in openCypher. 


























You need to free the instance through mgp_value_destroy. NULL is returned if unable to allocate a mgp_value. 


### function mgp_value_make_bool

```cpp
struct mgp_value * mgp_value_make_bool(
    int val,
    struct mgp_memory * memory
)
```

Construct a boolean value. 


























Non-zero values represent `true`, while zero represents `false`. You need to free the instance through mgp_value_destroy. NULL is returned if unable to allocate a mgp_value. 


### function mgp_value_make_int

```cpp
struct mgp_value * mgp_value_make_int(
    int64_t val,
    struct mgp_memory * memory
)
```

Construct an integer value. 


























You need to free the instance through mgp_value_destroy. NULL is returned if unable to allocate a mgp_value. 


### function mgp_value_make_double

```cpp
struct mgp_value * mgp_value_make_double(
    double val,
    struct mgp_memory * memory
)
```

Construct a double floating point value. 


























You need to free the instance through mgp_value_destroy. NULL is returned if unable to allocate a mgp_value. 


### function mgp_value_make_string

```cpp
struct mgp_value * mgp_value_make_string(
    const char * val,
    struct mgp_memory * memory
)
```

Construct a character string value from a NULL terminated string. 


























You need to free the instance through mgp_value_destroy. NULL is returned if unable to allocate a mgp_value. 


### function mgp_value_make_list

```cpp
struct mgp_value * mgp_value_make_list(
    struct mgp_list * val
)
```

Create a mgp_value storing a mgp_list. 


























You need to free the instance through mgp_value_destroy. The ownership of the list is given to the created mgp_value and destroying the mgp_value will destroy the mgp_list. Therefore, if a mgp_value is successfully created you must not call mgp_list_destroy on the given list. NULL is returned if unable to allocate a mgp_value. 


### function mgp_value_make_map

```cpp
struct mgp_value * mgp_value_make_map(
    struct mgp_map * val
)
```

Create a mgp_value storing a mgp_map. 


























You need to free the instance through mgp_value_destroy. The ownership of the map is given to the created mgp_value and destroying the mgp_value will destroy the mgp_map. Therefore, if a mgp_value is successfully created you must not call mgp_map_destroy on the given map. NULL is returned if unable to allocate a mgp_value. 


### function mgp_value_make_vertex

```cpp
struct mgp_value * mgp_value_make_vertex(
    struct mgp_vertex * val
)
```

Create a mgp_value storing a mgp_vertex. 


























You need to free the instance through mgp_value_destroy. The ownership of the vertex is given to the created mgp_value and destroying the mgp_value will destroy the mgp_vertex. Therefore, if a mgp_value is successfully created you must not call mgp_vertex_destroy on the given vertex. NULL is returned if unable to allocate a mgp_value. 


### function mgp_value_make_edge

```cpp
struct mgp_value * mgp_value_make_edge(
    struct mgp_edge * val
)
```

Create a mgp_value storing a mgp_edge. 


























You need to free the instance through mgp_value_destroy. The ownership of the edge is given to the created mgp_value and destroying the mgp_value will destroy the mgp_edge. Therefore, if a mgp_value is successfully created you must not call mgp_edge_destroy on the given edge. NULL is returned if unable to allocate a mgp_value. 


### function mgp_value_make_path

```cpp
struct mgp_value * mgp_value_make_path(
    struct mgp_path * val
)
```

Create a mgp_value storing a mgp_path. 


























You need to free the instance through mgp_value_destroy. The ownership of the path is given to the created mgp_value and destroying the mgp_value will destroy the mgp_path. Therefore, if a mgp_value is successfully created you must not call mgp_path_destroy on the given path. NULL is returned if unable to allocate a mgp_value. 


### function mgp_value_get_type

```cpp
enum mgp_value_type mgp_value_get_type(
    const struct mgp_value * val
)
```

Return the type of the value contained in mgp_value. 




























### function mgp_value_is_null

```cpp
int mgp_value_is_null(
    const struct mgp_value * val
)
```

Return non-zero if the given mgp_value represents `null`. 




























### function mgp_value_is_bool

```cpp
int mgp_value_is_bool(
    const struct mgp_value * val
)
```

Return non-zero if the given mgp_value stores a boolean. 




























### function mgp_value_is_int

```cpp
int mgp_value_is_int(
    const struct mgp_value * val
)
```

Return non-zero if the given mgp_value stores an integer. 




























### function mgp_value_is_double

```cpp
int mgp_value_is_double(
    const struct mgp_value * val
)
```

Return non-zero if the given mgp_value stores a double floating-point. 




























### function mgp_value_is_string

```cpp
int mgp_value_is_string(
    const struct mgp_value * val
)
```

Return non-zero if the given mgp_value stores a character string. 




























### function mgp_value_is_list

```cpp
int mgp_value_is_list(
    const struct mgp_value * val
)
```

Return non-zero if the given mgp_value stores a list of values. 




























### function mgp_value_is_map

```cpp
int mgp_value_is_map(
    const struct mgp_value * val
)
```

Return non-zero if the given mgp_value stores a map of values. 




























### function mgp_value_is_vertex

```cpp
int mgp_value_is_vertex(
    const struct mgp_value * val
)
```

Return non-zero if the given mgp_value stores a vertex. 




























### function mgp_value_is_edge

```cpp
int mgp_value_is_edge(
    const struct mgp_value * val
)
```

Return non-zero if the given mgp_value stores an edge. 




























### function mgp_value_is_path

```cpp
int mgp_value_is_path(
    const struct mgp_value * val
)
```

Return non-zero if the given mgp_value stores a path. 




























### function mgp_value_get_bool

```cpp
int mgp_value_get_bool(
    const struct mgp_value * val
)
```

Return the contained boolean value. 


























Non-zero values represent `true`, while zero represents `false`. The result is undefined if mgp_value does not contain the expected type. 


### function mgp_value_get_int

```cpp
int64_t mgp_value_get_int(
    const struct mgp_value * val
)
```

Return the contained integer. 


























The result is undefined if mgp_value does not contain the expected type. 


### function mgp_value_get_double

```cpp
double mgp_value_get_double(
    const struct mgp_value * val
)
```

Return the contained double floating-point. 


























The result is undefined if mgp_value does not contain the expected type. 


### function mgp_value_get_string

```cpp
const char * mgp_value_get_string(
    const struct mgp_value * val
)
```

Return the contained character string. 


























The result is undefined if mgp_value does not contain the expected type. 


### function mgp_value_get_list

```cpp
const struct mgp_list * mgp_value_get_list(
    const struct mgp_value * val
)
```

Return the contained list of values. 


























The result is undefined if mgp_value does not contain the expected type. 


### function mgp_value_get_map

```cpp
const struct mgp_map * mgp_value_get_map(
    const struct mgp_value * val
)
```

Return the contained map of values. 


























The result is undefined if mgp_value does not contain the expected type. 


### function mgp_value_get_vertex

```cpp
const struct mgp_vertex * mgp_value_get_vertex(
    const struct mgp_value * val
)
```

Return the contained vertex. 


























The result is undefined if mgp_value does not contain the expected type. 


### function mgp_value_get_edge

```cpp
const struct mgp_edge * mgp_value_get_edge(
    const struct mgp_value * val
)
```

Return the contained edge. 


























The result is undefined if mgp_value does not contain the expected type. 


### function mgp_value_get_path

```cpp
const struct mgp_path * mgp_value_get_path(
    const struct mgp_value * val
)
```

Return the contained path. 


























The result is undefined if mgp_value does not contain the expected type. 


### function mgp_list_make_empty

```cpp
struct mgp_list * mgp_list_make_empty(
    size_t capacity,
    struct mgp_memory * memory
)
```

Create an empty list with given capacity. 


























You need to free the created instance with mgp_list_destroy. The created list will have allocated enough memory for `capacity` elements of mgp_value, but it will not contain any elements. Therefore, mgp_list_size will return 0. NULL is returned if unable to allocate a new list. 


### function mgp_list_destroy

```cpp
void mgp_list_destroy(
    struct mgp_list * list
)
```

Free the memory used by the given mgp_list and contained elements. 




























### function mgp_list_append

```cpp
int mgp_list_append(
    struct mgp_list * list,
    const struct mgp_value * val
)
```

Append a copy of mgp_value to mgp_list if capacity allows. 


























The list copies the given value and therefore does not take ownership of the original value. You still need to call mgp_value_destroy to free the original value. Return non-zero on success, or 0 if there's no capacity or memory to append the mgp_value to mgp_list. 


### function mgp_list_append_extend

```cpp
int mgp_list_append_extend(
    struct mgp_list * list,
    const struct mgp_value * val
)
```

Append a copy of mgp_value to mgp_list increasing capacity if needed. 


























The list copies the given value and therefore does not take ownership of the original value. You still need to call mgp_value_destroy to free the original value. In case of a capacity change, the previously contained elements will move in memory and any references to them will be invalid. Return non-zero on success, or 0 if there's no memory to append the mgp_value to mgp_list. 


### function mgp_list_size

```cpp
size_t mgp_list_size(
    const struct mgp_list * list
)
```

Return the number of elements stored in mgp_list. 




























### function mgp_list_capacity

```cpp
size_t mgp_list_capacity(
    const struct mgp_list * list
)
```

Return the total number of elements for which there's already allocated memory in mgp_list. 




























### function mgp_list_at

```cpp
const struct mgp_value * mgp_list_at(
    const struct mgp_list * list,
    size_t index
)
```

Return the element in mgp_list at given position. 


























NULL is returned if the index is not within mgp_list_size. 


### function mgp_map_make_empty

```cpp
struct mgp_map * mgp_map_make_empty(
    struct mgp_memory * memory
)
```

Create an empty map of character strings to mgp_value instances. 


























You need to free the created instance with mgp_map_destroy. NULL is returned if unable to allocate a new map. 


### function mgp_map_destroy

```cpp
void mgp_map_destroy(
    struct mgp_map * map
)
```

Free the memory used by the given mgp_map and contained items. 




























### function mgp_map_insert

```cpp
int mgp_map_insert(
    struct mgp_map * map,
    const char * key,
    const struct mgp_value * value
)
```

Insert a new mapping from a NULL terminated character string to a value. 


























If a mapping with the same key already exists, it is _not_ replaced. In case of insertion, both the string and the value are copied into the map. Therefore, the map does not take ownership of the original key nor value, so you still need to free their memory explicitly. Return non-zero on success, or 0 if there's no memory to insert a new mapping or a previous mapping already exists. 


### function mgp_map_size

```cpp
size_t mgp_map_size(
    const struct mgp_map * map
)
```

Return the number of items stored in mgp_map. 




























### function mgp_map_at

```cpp
const struct mgp_value * mgp_map_at(
    const struct mgp_map * map,
    const char * key
)
```

Return the mapped mgp_value to the given character string. 


























NULL is returned if no mapping exists. 


### function mgp_map_item_key

```cpp
const char * mgp_map_item_key(
    const struct mgp_map_item * item
)
```

Get the key of the mapped item. 




























### function mgp_map_item_value

```cpp
const struct mgp_value * mgp_map_item_value(
    const struct mgp_map_item * item
)
```

Get the value of the mapped item. 




























### function mgp_map_iter_items

```cpp
struct mgp_map_items_iterator * mgp_map_iter_items(
    const struct mgp_map * map,
    struct mgp_memory * memory
)
```

Start iterating over items contained in the given map. 


























The returned mgp_map_items_iterator needs to be deallocated with mgp_map_items_iterator_destroy. NULL is returned if unable to allocate a new iterator. 


### function mgp_map_items_iterator_destroy

```cpp
void mgp_map_items_iterator_destroy(
    struct mgp_map_items_iterator * it
)
```

Deallocate memory used by mgp_map_items_iterator. 




























### function mgp_map_items_iterator_get

```cpp
const struct mgp_map_item * mgp_map_items_iterator_get(
    const struct mgp_map_items_iterator * it
)
```

Get the current item pointed to by the iterator. 


























When the mgp_map_items_iterator_next is invoked, the returned pointer to mgp_map_item becomes invalid. On the other hand, pointers obtained with mgp_map_item_key and mgp_map_item_value remain valid throughout the lifetime of a map. Therefore, you can store the key as well as the value before, and use them after invoking mgp_map_items_iterator_next. NULL is returned if the end of the iteration has been reached. 


### function mgp_map_items_iterator_next

```cpp
const struct mgp_map_item * mgp_map_items_iterator_next(
    struct mgp_map_items_iterator * it
)
```

Advance the iterator to the next item stored in map and return it. 


























The previous pointer obtained through mgp_map_items_iterator_get will be invalidated, but the pointers to key and value will remain valid. NULL is returned if the end of the iteration has been reached. 


### function mgp_path_make_with_start

```cpp
struct mgp_path * mgp_path_make_with_start(
    const struct mgp_vertex * vertex,
    struct mgp_memory * memory
)
```

Create a path with the copy of the given starting vertex. 


























You need to free the created instance with mgp_path_destroy. NULL is returned if unable to allocate a path. 


### function mgp_path_copy

```cpp
struct mgp_path * mgp_path_copy(
    const struct mgp_path * path,
    struct mgp_memory * memory
)
```

Copy a mgp_path. 


























Returned pointer must be freed with mgp_path_destroy. NULL is returned if unable to allocate a mgp_path. 


### function mgp_path_destroy

```cpp
void mgp_path_destroy(
    struct mgp_path * path
)
```

Free the memory used by the given mgp_path and contained vertices and edges. 




























### function mgp_path_expand

```cpp
int mgp_path_expand(
    struct mgp_path * path,
    const struct mgp_edge * edge
)
```

Append an edge continuing from the last vertex on the path. 


























The edge is copied into the path. Therefore, the path does not take ownership of the original edge, so you still need to free the edge memory explicitly. The last vertex on the path will become the other endpoint of the given edge, as continued from the current last vertex. Return non-zero on success, or 0 if the current last vertex in the path is not part of the given edge. 0 is also returned if unable to allocate memory for path extension. 


### function mgp_path_size

```cpp
size_t mgp_path_size(
    const struct mgp_path * path
)
```

Return the number of edges in a mgp_path. 




























### function mgp_path_vertex_at

```cpp
const struct mgp_vertex * mgp_path_vertex_at(
    const struct mgp_path * path,
    size_t index
)
```

Return the vertex from a path at given index. 


























The valid index range is [0, mgp_path_size]. NULL is returned if index is out of range. 


### function mgp_path_edge_at

```cpp
const struct mgp_edge * mgp_path_edge_at(
    const struct mgp_path * path,
    size_t index
)
```

Return the edge from a path at given index. 


























The valid index range is [0, mgp_path_size - 1]. NULL is returned if index is out of range. 


### function mgp_path_equal

```cpp
int mgp_path_equal(
    const struct mgp_path * p1,
    const struct mgp_path * p2
)
```

Return non-zero if given paths are equal, otherwise 0. 




























### function mgp_result_set_error_msg

```cpp
int mgp_result_set_error_msg(
    struct mgp_result * res,
    const char * error_msg
)
```

Set the error as the result of the procedure. 


























If there's no memory for copying the error message, 0 is returned. 


### function mgp_result_new_record

```cpp
struct mgp_result_record * mgp_result_new_record(
    struct mgp_result * res
)
```

Create a new record for results. 


























The previously returned pointer to mgp_result_record is no longer valid, and you must not use it. Return NULL if unable to allocate a mgp_result_record. 


### function mgp_result_record_insert

```cpp
int mgp_result_record_insert(
    struct mgp_result_record * record,
    const char * field_name,
    const struct mgp_value * val
)
```

Assign a value to a field in the given record. 


























Return 0 if there's no memory to copy the mgp_value to mgp_result_record or if the combination of `field_name` and `val` does not satisfy the procedure's result signature. 


### function mgp_properties_iterator_destroy

```cpp
void mgp_properties_iterator_destroy(
    struct mgp_properties_iterator * it
)
```

Free the memory used by a mgp_properties_iterator. 




























### function mgp_properties_iterator_get

```cpp
const struct mgp_property * mgp_properties_iterator_get(
    const struct mgp_properties_iterator * it
)
```

Get the current property pointed to by the iterator. 


























When the mgp_properties_iterator_next is invoked, the previous [mgp_property](Classes/structmgp__property.md) is invalidated and its value must not be used. NULL is returned if the end of the iteration has been reached. 


### function mgp_properties_iterator_next

```cpp
const struct mgp_property * mgp_properties_iterator_next(
    struct mgp_properties_iterator * it
)
```

Advance the iterator to the next property and return it. 


























The previous [mgp_property](Classes/structmgp__property.md) obtained through mgp_properties_iterator_get will be invalidated, and you must not use its value. NULL is returned if the end of the iteration has been reached. 


### function mgp_edges_iterator_destroy

```cpp
void mgp_edges_iterator_destroy(
    struct mgp_edges_iterator * it
)
```

Free the memory used by a mgp_edges_iterator. 




























### function mgp_vertex_get_id

```cpp
struct mgp_vertex_id mgp_vertex_get_id(
    const struct mgp_vertex * v
)
```

Get the ID of given vertex. 


























The ID is only valid for a single query execution, you should never store it globally in a query module. 


### function mgp_vertex_copy

```cpp
struct mgp_vertex * mgp_vertex_copy(
    const struct mgp_vertex * v,
    struct mgp_memory * memory
)
```

Copy a mgp_vertex. 


























Returned pointer must be freed with mgp_vertex_destroy. NULL is returned if unable to allocate a mgp_vertex. 


### function mgp_vertex_destroy

```cpp
void mgp_vertex_destroy(
    struct mgp_vertex * v
)
```

Free the memory used by a mgp_vertex. 




























### function mgp_vertex_equal

```cpp
int mgp_vertex_equal(
    const struct mgp_vertex * v1,
    const struct mgp_vertex * v2
)
```

Return non-zero if given vertices are equal, otherwise 0. 




























### function mgp_vertex_labels_count

```cpp
size_t mgp_vertex_labels_count(
    const struct mgp_vertex * v
)
```

Return the number of labels a given vertex has. 




























### function mgp_vertex_label_at

```cpp
struct mgp_label mgp_vertex_label_at(
    const struct mgp_vertex * v,
    size_t index
)
```

Return [mgp_label](Classes/structmgp__label.md) in mgp_vertex at given index. 


























If the index is out of bounds, [mgp_label.name](Classes/structmgp__label.md#variable-name) is set to NULL. 


### function mgp_vertex_has_label

```cpp
int mgp_vertex_has_label(
    const struct mgp_vertex * v,
    struct mgp_label label
)
```

Return non-zero if the given vertex has the given label. 




























### function mgp_vertex_has_label_named

```cpp
int mgp_vertex_has_label_named(
    const struct mgp_vertex * v,
    const char * label_name
)
```

Return non-zero if the given vertex has a label with given name. 




























### function mgp_vertex_get_property

```cpp
struct mgp_value * mgp_vertex_get_property(
    const struct mgp_vertex * v,
    const char * property_name,
    struct mgp_memory * memory
)
```

Get a copy of a vertex property mapped to a given name. 


























Returned value must be freed with mgp_value_destroy. NULL is returned if unable to allocate a mgp_value. 


### function mgp_vertex_iter_properties

```cpp
struct mgp_properties_iterator * mgp_vertex_iter_properties(
    const struct mgp_vertex * v,
    struct mgp_memory * memory
)
```

Start iterating over properties stored in the given vertex. 


























The returned mgp_properties_iterator needs to be deallocated with mgp_properties_iterator_destroy. NULL is returned if unable to allocate a new iterator. 


### function mgp_vertex_iter_in_edges

```cpp
struct mgp_edges_iterator * mgp_vertex_iter_in_edges(
    const struct mgp_vertex * v,
    struct mgp_memory * memory
)
```

Start iterating over inbound edges of the given vertex. 


























The returned mgp_edges_iterator needs to be deallocated with mgp_edges_iterator_destroy. NULL is returned if unable to allocate a new iterator. 


### function mgp_vertex_iter_out_edges

```cpp
struct mgp_edges_iterator * mgp_vertex_iter_out_edges(
    const struct mgp_vertex * v,
    struct mgp_memory * memory
)
```

Start iterating over outbound edges of the given vertex. 


























The returned mgp_edges_iterator needs to be deallocated with mgp_edges_iterator_destroy. NULL is returned if unable to allocate a new iterator. 


### function mgp_edges_iterator_get

```cpp
const struct mgp_edge * mgp_edges_iterator_get(
    const struct mgp_edges_iterator * it
)
```

Get the current edge pointed to by the iterator. 


























When the mgp_edges_iterator_next is invoked, the previous mgp_edge is invalidated and its value must not be used. NULL is returned if the end of the iteration has been reached. 


### function mgp_edges_iterator_next

```cpp
const struct mgp_edge * mgp_edges_iterator_next(
    struct mgp_edges_iterator * it
)
```

Advance the iterator to the next edge and return it. 


























The previous mgp_edge obtained through mgp_edges_iterator_get will be invalidated, and you must not use its value. NULL is returned if the end of the iteration has been reached. 


### function mgp_edge_get_id

```cpp
struct mgp_edge_id mgp_edge_get_id(
    const struct mgp_edge * e
)
```

Get the ID of given edge. 


























The ID is only valid for a single query execution, you should never store it globally in a query module. 


### function mgp_edge_copy

```cpp
struct mgp_edge * mgp_edge_copy(
    const struct mgp_edge * e,
    struct mgp_memory * memory
)
```

Copy a mgp_edge. 


























Returned pointer must be freed with mgp_edge_destroy. NULL is returned if unable to allocate a mgp_edge. 


### function mgp_edge_destroy

```cpp
void mgp_edge_destroy(
    struct mgp_edge * e
)
```

Free the memory used by a mgp_edge. 




























### function mgp_edge_equal

```cpp
int mgp_edge_equal(
    const struct mgp_edge * e1,
    const struct mgp_edge * e2
)
```

Return non-zero if given edges are equal, otherwise 0. 




























### function mgp_edge_get_type

```cpp
struct mgp_edge_type mgp_edge_get_type(
    const struct mgp_edge * e
)
```

Return the type of the given edge. 




























### function mgp_edge_get_from

```cpp
const struct mgp_vertex * mgp_edge_get_from(
    const struct mgp_edge * e
)
```

Return the source vertex of the given edge. 




























### function mgp_edge_get_to

```cpp
const struct mgp_vertex * mgp_edge_get_to(
    const struct mgp_edge * e
)
```

Return the destination vertex of the given edge. 




























### function mgp_edge_get_property

```cpp
struct mgp_value * mgp_edge_get_property(
    const struct mgp_edge * e,
    const char * property_name,
    struct mgp_memory * memory
)
```

Get a copy of a edge property mapped to a given name. 


























Returned value must be freed with mgp_value_destroy. NULL is returned if unable to allocate a mgp_value. 


### function mgp_edge_iter_properties

```cpp
struct mgp_properties_iterator * mgp_edge_iter_properties(
    const struct mgp_edge * e,
    struct mgp_memory * memory
)
```

Start iterating over properties stored in the given edge. 


























The returned mgp_properties_iterator needs to be deallocated with mgp_properties_iterator_destroy. NULL is returned if unable to allocate a new iterator. 


### function mgp_graph_get_vertex_by_id

```cpp
struct mgp_vertex * mgp_graph_get_vertex_by_id(
    const struct mgp_graph * g,
    struct mgp_vertex_id id,
    struct mgp_memory * memory
)
```

Return the vertex corresponding to given ID. 


























The returned vertex must be freed using mgp_vertex_destroy. NULL is returned if unable to allocate the vertex or if ID is not valid. 


### function mgp_vertices_iterator_destroy

```cpp
void mgp_vertices_iterator_destroy(
    struct mgp_vertices_iterator * it
)
```

Free the memory used by a mgp_vertices_iterator. 




























### function mgp_graph_iter_vertices

```cpp
struct mgp_vertices_iterator * mgp_graph_iter_vertices(
    const struct mgp_graph * g,
    struct mgp_memory * memory
)
```

Start iterating over vertices of the given graph. 


























The returned mgp_vertices_iterator needs to be deallocated with mgp_vertices_iterator_destroy. NULL is returned if unable to allocate a new iterator. 


### function mgp_vertices_iterator_get

```cpp
const struct mgp_vertex * mgp_vertices_iterator_get(
    const struct mgp_vertices_iterator * it
)
```

Get the current vertex pointed to by the iterator. 


























When the mgp_vertices_iterator_next is invoked, the previous mgp_vertex is invalidated and its value must not be used. NULL is returned if the end of the iteration has been reached. 


### function mgp_vertices_iterator_next

```cpp
const struct mgp_vertex * mgp_vertices_iterator_next(
    struct mgp_vertices_iterator * it
)
```

Advance the iterator to the next vertex and return it. 


























The previous mgp_vertex obtained through mgp_vertices_iterator_get will be invalidated, and you must not use its value. NULL is returned if the end of the iteration has been reached. 


### function mgp_type_any

```cpp
const struct mgp_type * mgp_type_any()
```

Get the type representing any value that isn't `null`. 


























The ANY type is the parent type of all types. 


### function mgp_type_bool

```cpp
const struct mgp_type * mgp_type_bool()
```

Get the type representing boolean values. 




























### function mgp_type_string

```cpp
const struct mgp_type * mgp_type_string()
```

Get the type representing character string values. 




























### function mgp_type_int

```cpp
const struct mgp_type * mgp_type_int()
```

Get the type representing integer values. 




























### function mgp_type_float

```cpp
const struct mgp_type * mgp_type_float()
```

Get the type representing floating-point values. 




























### function mgp_type_number

```cpp
const struct mgp_type * mgp_type_number()
```

Get the type representing any number value. 


























This is the parent type for numeric types, i.e. INTEGER and FLOAT. 


### function mgp_type_map

```cpp
const struct mgp_type * mgp_type_map()
```

Get the type representing map values. 






**See**: 

  * [mgp_type_node](Files/mg__procedure_8h.md#function-mgp_type_node)
  * [mgp_type_relationship](Files/mg__procedure_8h.md#function-mgp_type_relationship)





















Map values are those which map string keys to values of any type. For example `{ database: "Memgraph", version: 1.42 }`. Note that graph nodes contain property maps, so a node value will also satisfy the MAP type. The same applies for graph relationship values.


### function mgp_type_node

```cpp
const struct mgp_type * mgp_type_node()
```

Get the type representing graph node values. 


























Since a node contains a map of properties, the node itself is also of MAP type. 


### function mgp_type_relationship

```cpp
const struct mgp_type * mgp_type_relationship()
```

Get the type representing graph relationship values. 


























Since a relationship contains a map of properties, the relationship itself is also of MAP type. 


### function mgp_type_path

```cpp
const struct mgp_type * mgp_type_path()
```

Get the type representing a graph path (walk) from one node to another. 




























### function mgp_type_list

```cpp
const struct mgp_type * mgp_type_list(
    const struct mgp_type * element_type
)
```

Build a type representing a list of values of given `element_type`. 


























NULL is returned if unable to allocate the new type. 


### function mgp_type_nullable

```cpp
const struct mgp_type * mgp_type_nullable(
    const struct mgp_type * type
)
```

Build a type representing either a `null` value or a value of given `type`. 


























NULL is returned if unable to allocate the new type. 


### function mgp_module_add_read_procedure

```cpp
struct mgp_proc * mgp_module_add_read_procedure(
    struct mgp_module * module,
    const char * name,
    mgp_proc_cb cb
)
```

Register a read-only procedure with a module. 


























The `name` must be a sequence of digits, underscores, lowercase and uppercase Latin letters. The name must begin with a non-digit character. Note that Unicode characters are not allowed. Additionally, names are case-sensitive.

NULL is returned if unable to allocate memory for mgp_proc; if `name` is not valid or a procedure with the same name was already registered. 


### function mgp_proc_add_arg

```cpp
int mgp_proc_add_arg(
    struct mgp_proc * proc,
    const char * name,
    const struct mgp_type * type
)
```

Add a required argument to a procedure. 


























The order of adding arguments will correspond to the order the procedure must receive them through openCypher. Required arguments will be followed by optional arguments.

The `name` must be a valid identifier, following the same rules as the procedure`name` in mgp_module_add_read_procedure.

Passed in `type` describes what kind of values can be used as the argument.

0 is returned if unable to allocate memory for an argument; if invoking this function after setting an optional argument or if `name` is not valid. Non-zero is returned on success. 


### function mgp_proc_add_opt_arg

```cpp
int mgp_proc_add_opt_arg(
    struct mgp_proc * proc,
    const char * name,
    const struct mgp_type * type,
    const struct mgp_value * default_value
)
```

Add an optional argument with a default value to a procedure. 


























The order of adding arguments will correspond to the order the procedure must receive them through openCypher. Optional arguments must follow the required arguments.

The `name` must be a valid identifier, following the same rules as the procedure `name` in mgp_module_add_read_procedure.

Passed in `type` describes what kind of values can be used as the argument.

`default_value` is copied and set as the default value for the argument. Don't forget to call mgp_value_destroy when you are done using `default_value`. When the procedure is called, if this argument is not provided, `default_value` will be used instead. `default_value` must not be a graph element (node, relationship, path) and it must satisfy the given `type`.

0 is returned if unable to allocate memory for an argument; if `name` is not valid or `default_value` does not satisfy `type`. Non-zero is returned on success. 


### function mgp_proc_add_result

```cpp
int mgp_proc_add_result(
    struct mgp_proc * proc,
    const char * name,
    const struct mgp_type * type
)
```

Add a result field to a procedure. 


























The `name` must be a valid identifier, following the same rules as the procedure `name` in mgp_module_add_read_procedure.

Passed in `type` describes what kind of values can be returned through the result field.

0 is returned if unable to allocate memory for a result field; if `name` is not valid or if a result field with the same name was already added. Non-zero is returned on success. 


### function mgp_proc_add_deprecated_result

```cpp
int mgp_proc_add_deprecated_result(
    struct mgp_proc * proc,
    const char * name,
    const struct mgp_type * type
)
```

Add a result field to a procedure and mark it as deprecated. 


























This is the same as mgp_proc_add_result, but the result field will be marked as deprecated. 


### function mgp_must_abort

```cpp
int mgp_must_abort(
    const struct mgp_graph * graph
)
```

Return non-zero if the currently executing procedure should abort as soon as possible. 


























Procedures which perform heavyweight processing run the risk of running too long and going over the query execution time limit. To prevent this, such procedures should periodically call this function at critical points in their code in order to determine whether they should abort or not. Note that this mechanism is purely cooperative and depends on the procedure doing the checking and aborting on its own. 






## Source code

```cpp
#ifndef MG_PROCEDURE_H
#define MG_PROCEDURE_H

#ifdef __cplusplus
extern "C" {
#endif

#include <stddef.h>
#include <stdint.h>


struct mgp_memory;

void *mgp_alloc(struct mgp_memory *memory, size_t size_in_bytes);

void *mgp_aligned_alloc(struct mgp_memory *memory, size_t size_in_bytes,
                        size_t alignment);

void mgp_free(struct mgp_memory *memory, void *ptr);


struct mgp_value;

struct mgp_list;

struct mgp_map;

struct mgp_vertex;

struct mgp_edge;

struct mgp_path;

enum mgp_value_type {
  // NOTE: New types need to be appended, so as not to break ABI.
  MGP_VALUE_TYPE_NULL,
  MGP_VALUE_TYPE_BOOL,
  MGP_VALUE_TYPE_INT,
  MGP_VALUE_TYPE_DOUBLE,
  MGP_VALUE_TYPE_STRING,
  MGP_VALUE_TYPE_LIST,
  MGP_VALUE_TYPE_MAP,
  MGP_VALUE_TYPE_VERTEX,
  MGP_VALUE_TYPE_EDGE,
  MGP_VALUE_TYPE_PATH,
};

void mgp_value_destroy(struct mgp_value *val);

struct mgp_value *mgp_value_make_null(struct mgp_memory *memory);

struct mgp_value *mgp_value_make_bool(int val, struct mgp_memory *memory);

struct mgp_value *mgp_value_make_int(int64_t val, struct mgp_memory *memory);

struct mgp_value *mgp_value_make_double(double val, struct mgp_memory *memory);

struct mgp_value *mgp_value_make_string(const char *val,
                                        struct mgp_memory *memory);

struct mgp_value *mgp_value_make_list(struct mgp_list *val);

struct mgp_value *mgp_value_make_map(struct mgp_map *val);

struct mgp_value *mgp_value_make_vertex(struct mgp_vertex *val);

struct mgp_value *mgp_value_make_edge(struct mgp_edge *val);

struct mgp_value *mgp_value_make_path(struct mgp_path *val);

enum mgp_value_type mgp_value_get_type(const struct mgp_value *val);

int mgp_value_is_null(const struct mgp_value *val);

int mgp_value_is_bool(const struct mgp_value *val);

int mgp_value_is_int(const struct mgp_value *val);

int mgp_value_is_double(const struct mgp_value *val);

int mgp_value_is_string(const struct mgp_value *val);

int mgp_value_is_list(const struct mgp_value *val);

int mgp_value_is_map(const struct mgp_value *val);

int mgp_value_is_vertex(const struct mgp_value *val);

int mgp_value_is_edge(const struct mgp_value *val);

int mgp_value_is_path(const struct mgp_value *val);

int mgp_value_get_bool(const struct mgp_value *val);

int64_t mgp_value_get_int(const struct mgp_value *val);

double mgp_value_get_double(const struct mgp_value *val);

const char *mgp_value_get_string(const struct mgp_value *val);

const struct mgp_list *mgp_value_get_list(const struct mgp_value *val);

const struct mgp_map *mgp_value_get_map(const struct mgp_value *val);

const struct mgp_vertex *mgp_value_get_vertex(const struct mgp_value *val);

const struct mgp_edge *mgp_value_get_edge(const struct mgp_value *val);

const struct mgp_path *mgp_value_get_path(const struct mgp_value *val);

struct mgp_list *mgp_list_make_empty(size_t capacity,
                                     struct mgp_memory *memory);

void mgp_list_destroy(struct mgp_list *list);

int mgp_list_append(struct mgp_list *list, const struct mgp_value *val);

int mgp_list_append_extend(struct mgp_list *list, const struct mgp_value *val);

size_t mgp_list_size(const struct mgp_list *list);

size_t mgp_list_capacity(const struct mgp_list *list);

const struct mgp_value *mgp_list_at(const struct mgp_list *list, size_t index);

struct mgp_map *mgp_map_make_empty(struct mgp_memory *memory);

void mgp_map_destroy(struct mgp_map *map);

int mgp_map_insert(struct mgp_map *map, const char *key,
                   const struct mgp_value *value);

size_t mgp_map_size(const struct mgp_map *map);

const struct mgp_value *mgp_map_at(const struct mgp_map *map, const char *key);

struct mgp_map_item;

const char *mgp_map_item_key(const struct mgp_map_item *item);

const struct mgp_value *mgp_map_item_value(const struct mgp_map_item *item);

struct mgp_map_items_iterator;

struct mgp_map_items_iterator *mgp_map_iter_items(const struct mgp_map *map,
                                                  struct mgp_memory *memory);

void mgp_map_items_iterator_destroy(struct mgp_map_items_iterator *it);

const struct mgp_map_item *mgp_map_items_iterator_get(
    const struct mgp_map_items_iterator *it);

const struct mgp_map_item *mgp_map_items_iterator_next(
    struct mgp_map_items_iterator *it);

struct mgp_path *mgp_path_make_with_start(const struct mgp_vertex *vertex,
                                          struct mgp_memory *memory);

struct mgp_path *mgp_path_copy(const struct mgp_path *path,
                               struct mgp_memory *memory);

void mgp_path_destroy(struct mgp_path *path);

int mgp_path_expand(struct mgp_path *path, const struct mgp_edge *edge);

size_t mgp_path_size(const struct mgp_path *path);

const struct mgp_vertex *mgp_path_vertex_at(const struct mgp_path *path,
                                            size_t index);

const struct mgp_edge *mgp_path_edge_at(const struct mgp_path *path,
                                        size_t index);

int mgp_path_equal(const struct mgp_path *p1, const struct mgp_path *p2);



struct mgp_result;
struct mgp_result_record;

int mgp_result_set_error_msg(struct mgp_result *res, const char *error_msg);

struct mgp_result_record *mgp_result_new_record(struct mgp_result *res);

int mgp_result_record_insert(struct mgp_result_record *record,
                             const char *field_name,
                             const struct mgp_value *val);


struct mgp_label {
  const char *name;
};

struct mgp_edge_type {
  const char *name;
};

struct mgp_properties_iterator;

void mgp_properties_iterator_destroy(struct mgp_properties_iterator *it);

struct mgp_property {
  const char *name;
  const struct mgp_value *value;
};

const struct mgp_property *mgp_properties_iterator_get(
    const struct mgp_properties_iterator *it);

const struct mgp_property *mgp_properties_iterator_next(
    struct mgp_properties_iterator *it);

struct mgp_edges_iterator;

void mgp_edges_iterator_destroy(struct mgp_edges_iterator *it);

struct mgp_vertex_id {
  int64_t as_int;
};

struct mgp_vertex_id mgp_vertex_get_id(const struct mgp_vertex *v);

struct mgp_vertex *mgp_vertex_copy(const struct mgp_vertex *v,
                                   struct mgp_memory *memory);

void mgp_vertex_destroy(struct mgp_vertex *v);

int mgp_vertex_equal(const struct mgp_vertex *v1, const struct mgp_vertex *v2);

size_t mgp_vertex_labels_count(const struct mgp_vertex *v);

struct mgp_label mgp_vertex_label_at(const struct mgp_vertex *v, size_t index);

int mgp_vertex_has_label(const struct mgp_vertex *v, struct mgp_label label);

int mgp_vertex_has_label_named(const struct mgp_vertex *v,
                               const char *label_name);

struct mgp_value *mgp_vertex_get_property(const struct mgp_vertex *v,
                                          const char *property_name,
                                          struct mgp_memory *memory);

struct mgp_properties_iterator *mgp_vertex_iter_properties(
    const struct mgp_vertex *v, struct mgp_memory *memory);

struct mgp_edges_iterator *mgp_vertex_iter_in_edges(const struct mgp_vertex *v,
                                                    struct mgp_memory *memory);

struct mgp_edges_iterator *mgp_vertex_iter_out_edges(const struct mgp_vertex *v,
                                                     struct mgp_memory *memory);

const struct mgp_edge *mgp_edges_iterator_get(
    const struct mgp_edges_iterator *it);

const struct mgp_edge *mgp_edges_iterator_next(struct mgp_edges_iterator *it);

struct mgp_edge_id {
  int64_t as_int;
};

struct mgp_edge_id mgp_edge_get_id(const struct mgp_edge *e);

struct mgp_edge *mgp_edge_copy(const struct mgp_edge *e,
                               struct mgp_memory *memory);

void mgp_edge_destroy(struct mgp_edge *e);

int mgp_edge_equal(const struct mgp_edge *e1, const struct mgp_edge *e2);

struct mgp_edge_type mgp_edge_get_type(const struct mgp_edge *e);

const struct mgp_vertex *mgp_edge_get_from(const struct mgp_edge *e);

const struct mgp_vertex *mgp_edge_get_to(const struct mgp_edge *e);

struct mgp_value *mgp_edge_get_property(const struct mgp_edge *e,
                                        const char *property_name,
                                        struct mgp_memory *memory);

struct mgp_properties_iterator *mgp_edge_iter_properties(
    const struct mgp_edge *e, struct mgp_memory *memory);

struct mgp_graph;

struct mgp_vertex *mgp_graph_get_vertex_by_id(const struct mgp_graph *g,
                                              struct mgp_vertex_id id,
                                              struct mgp_memory *memory);

struct mgp_vertices_iterator;

void mgp_vertices_iterator_destroy(struct mgp_vertices_iterator *it);

struct mgp_vertices_iterator *mgp_graph_iter_vertices(
    const struct mgp_graph *g, struct mgp_memory *memory);

const struct mgp_vertex *mgp_vertices_iterator_get(
    const struct mgp_vertices_iterator *it);

const struct mgp_vertex *mgp_vertices_iterator_next(
    struct mgp_vertices_iterator *it);


struct mgp_type;

const struct mgp_type *mgp_type_any();

const struct mgp_type *mgp_type_bool();

const struct mgp_type *mgp_type_string();

const struct mgp_type *mgp_type_int();

const struct mgp_type *mgp_type_float();

const struct mgp_type *mgp_type_number();

const struct mgp_type *mgp_type_map();

const struct mgp_type *mgp_type_node();

const struct mgp_type *mgp_type_relationship();

const struct mgp_type *mgp_type_path();

const struct mgp_type *mgp_type_list(const struct mgp_type *element_type);

const struct mgp_type *mgp_type_nullable(const struct mgp_type *type);


struct mgp_module;

struct mgp_proc;

typedef void (*mgp_proc_cb)(const struct mgp_list *, const struct mgp_graph *,
                            struct mgp_result *, struct mgp_memory *);

struct mgp_proc *mgp_module_add_read_procedure(struct mgp_module *module,
                                               const char *name,
                                               mgp_proc_cb cb);

int mgp_proc_add_arg(struct mgp_proc *proc, const char *name,
                     const struct mgp_type *type);

int mgp_proc_add_opt_arg(struct mgp_proc *proc, const char *name,
                         const struct mgp_type *type,
                         const struct mgp_value *default_value);

int mgp_proc_add_result(struct mgp_proc *proc, const char *name,
                        const struct mgp_type *type);

int mgp_proc_add_deprecated_result(struct mgp_proc *proc, const char *name,
                                   const struct mgp_type *type);


int mgp_must_abort(const struct mgp_graph *graph);


#ifdef __cplusplus
}  // extern "C"
#endif

#endif  // MG_PROCEDURE_H
```


-------------------------------

Updated on  5 November 2020 at 16:04:39 CET
