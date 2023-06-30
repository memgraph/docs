---
id: c-api
title: Query modules C API
sidebar_label: C API
slug: /reference-guide/query-modules/api/c-api
---

This is the API documentation for `mg_procedure.h` that contains declarations
of all functions that can be used to implement a query module procedure. The
source file can be found in the Memgraph installation directory, under
`/usr/include/memgraph`.

:::tip

For an example of how to implement query modules in C, take a look at [the
example we
provided](/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example.md#c-api).

:::

:::tip

If you install any C modules after running Memgraph, you'll have to [load
them into Memgraph](../load-call-query-modules#loading-query-modules) or restart
Memgraph in order to use them.

:::

## Classes

| Name           | Description    |
| -------------- | -------------- |
| **[mgp_label](#mgp_label)** |  Label of a vertex.  |
| **[mgp_edge_type](#mgp_edge_type)** |  Type of an edge.  |
| **[mgp_property](#mgp_property)** |  Reference to a named property value.  |
| **[mgp_vertex_id](#mgp_vertex_id)** | ID of a vertex; valid during a single query execution.  |
| **[mgp_edge_id](#mgp_edge_id)** |  ID of an edge; valid during a single query execution.  |
| **[mgp_date_parameters](#mgp_date_parameters)** |   |
| **[mgp_local_time_parameters](#mgp_local_time_parameters)** |   |
| **[mgp_local_date_time_parameters](#mgp_local_date_time_parameters)** |   |
| **[mgp_duration_parameters](#mgp_duration_parameters)** |   |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[mgp_value_type](#enum-mgp-value-type)** { MGP_VALUE_TYPE_NULL, MGP_VALUE_TYPE_BOOL, MGP_VALUE_TYPE_INT, MGP_VALUE_TYPE_DOUBLE, MGP_VALUE_TYPE_STRING, MGP_VALUE_TYPE_LIST, MGP_VALUE_TYPE_MAP, MGP_VALUE_TYPE_VERTEX, MGP_VALUE_TYPE_EDGE, MGP_VALUE_TYPE_PATH, MGP_VALUE_TYPE_DATE, MGP_VALUE_TYPE_LOCAL_TIME, MGP_VALUE_TYPE_LOCAL_DATE_TIME, MGP_VALUE_TYPE_DURATION}<br/>All available types that can be stored in a mgp_value.  |
| typedef void(*)(struct mgp_list *, struct mgp_graph *, struct mgp_result *, struct mgp_memory *) | **[mgp_proc_cb](#typedef-mgp-proc-cb)** <br/>Entry-point for a query module read procedure, invoked through openCypher.  |
| typedef void(*)(struct mgp_list *, struct mgp_graph *, struct mgp_memory *) | **[mgp_proc_initializer](#typedef-mgp-proc-initializer)** <br/>Initialization point for a query module read procedure, invoked before procedure.  |
| typedef void(*)() | **[mgp_proc_cleanup](#typedef-mgp-proc-cleanup)** <br/>Cleanup for a query module read procedure  |
| typedef void(*)(struct mgp_messages *, struct mgp_graph *, struct mgp_result *, struct mgp_memory *) | **[mgp_trans_cb](#typedef-mgp-trans-cb)** <br/>Entry-point for a module transformation, invoked through a stream transformation.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| enum [mgp_error](#variable-mgp-error) | **[mgp_alloc](#function-mgp-alloc)**(struct mgp_memory * memory, size_t size_in_bytes, void ** result)<br/>Allocate a block of memory with given size in bytes.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_aligned_alloc](#function-mgp-aligned-alloc)**(struct mgp_memory * memory, size_t size_in_bytes, size_t alignment, void ** result)<br/>Allocate an aligned block of memory with given size in bytes.  |
| void | **[mgp_free](#function-mgp-free)**(struct mgp_memory * memory, void * ptr)<br/>Deallocate an allocation from mgp_alloc or mgp_aligned_alloc.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_global_alloc](#function-mgp-global-alloc)**(size_t size_in_bytes, void ** result)<br/>Allocate a global block of memory with given size in bytes.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_global_aligned_alloc](#function-mgp-global-aligned-alloc)**(size_t size_in_bytes, size_t alignment, void ** result)<br/>Allocate an aligned global block of memory with given size in bytes.  |
| void | **[mgp_global_free](#function-mgp-global-free)**(void * p)<br/>Deallocate an allocation from mgp_global_alloc or mgp_global_aligned_alloc.  |
| void | **[mgp_value_destroy](#function-mgp-value-destroy)**(struct mgp_value * val)<br/>Free the memory used by the given mgp_value instance.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_make_null](#function-mgp-value-make-null)**(struct mgp_memory * memory, struct mgp_value ** result)<br/>Construct a value representing `null` in openCypher.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_make_bool](#function-mgp-value-make-bool)**(int val, struct mgp_memory * memory, struct mgp_value ** result)<br/>Construct a boolean value.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_make_int](#function-mgp-value-make-int)**(int64_t val, struct mgp_memory * memory, struct mgp_value ** result)<br/>Construct an integer value.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_make_double](#function-mgp-value-make-double)**(double val, struct mgp_memory * memory, struct mgp_value ** result)<br/>Construct a double floating point value.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_make_string](#function-mgp-value-make-string)**(const char * val, struct mgp_memory * memory, struct mgp_value ** result)<br/>Construct a character string value from a NULL terminated string.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_make_list](#function-mgp-value-make-list)**(struct mgp_list * val, struct mgp_value ** result)<br/>Create a mgp_value storing a mgp_list.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_make_map](#function-mgp-value-make-map)**(struct mgp_map * val, struct mgp_value ** result)<br/>Create a mgp_value storing a mgp_map.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_make_vertex](#function-mgp-value-make-vertex)**(struct mgp_vertex * val, struct mgp_value ** result)<br/>Create a mgp_value storing a mgp_vertex.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_make_edge](#function-mgp-value-make-edge)**(struct mgp_edge * val, struct mgp_value ** result)<br/>Create a mgp_value storing a mgp_edge.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_make_path](#function-mgp-value-make-path)**(struct mgp_path * val, struct mgp_value ** result)<br/>Create a mgp_value storing a mgp_path.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_make_date](#function-mgp-value-make-date)**(struct mgp_date * val, struct mgp_value ** result)<br/>Create a mgp_value storing a mgp_date.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_make_local_time](#function-mgp-value-make-local-time)**(struct mgp_local_time * val, struct mgp_value ** result)<br/>Create a mgp_value storing a mgp_local_time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_make_local_date_time](#function-mgp-value-make-local-date-time)**(struct mgp_local_date_time * val, struct mgp_value ** result)<br/>Create a mgp_value storing a mgp_local_date_time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_make_duration](#function-mgp-value-make-duration)**(struct mgp_duration * val, struct mgp_value ** result)<br/>Create a mgp_value storing a mgp_duration.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_get_type](#function-mgp-value-get-type)**(struct mgp_value * val, enum [mgp_value_type](#enum-mgp-value-type) * result)<br/>Get the type of the value contained in mgp_value.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_is_null](#function-mgp-value-is-null)**(struct mgp_value * val, int * result)<br/>Result is non-zero if the given mgp_value represents `null`.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_is_bool](#function-mgp-value-is-bool)**(struct mgp_value * val, int * result)<br/>Result is non-zero if the given mgp_value stores a boolean.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_is_int](#function-mgp-value-is-int)**(struct mgp_value * val, int * result)<br/>Result is non-zero if the given mgp_value stores an integer.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_is_double](#function-mgp-value-is-double)**(struct mgp_value * val, int * result)<br/>Result is non-zero if the given mgp_value stores a double floating-point.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_is_string](#function-mgp-value-is-string)**(struct mgp_value * val, int * result)<br/>Result is non-zero if the given mgp_value stores a character string.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_is_list](#function-mgp-value-is-list)**(struct mgp_value * val, int * result)<br/>Result is non-zero if the given mgp_value stores a list of values.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_is_map](#function-mgp-value-is-map)**(struct mgp_value * val, int * result)<br/>Result is non-zero if the given mgp_value stores a map of values.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_is_vertex](#function-mgp-value-is-vertex)**(struct mgp_value * val, int * result)<br/>Result is non-zero if the given mgp_value stores a vertex.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_is_edge](#function-mgp-value-is-edge)**(struct mgp_value * val, int * result)<br/>Result is non-zero if the given mgp_value stores an edge.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_is_path](#function-mgp-value-is-path)**(struct mgp_value * val, int * result)<br/>Result is non-zero if the given mgp_value stores a path.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_is_date](#function-mgp-value-is-date)**(struct mgp_value * val, int * result)<br/>Result is non-zero if the given mgp_value stores a date.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_is_local_time](#function-mgp-value-is-local-time)**(struct mgp_value * val, int * result)<br/>Result is non-zero if the given mgp_value stores a local time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_is_local_date_time](#function-mgp-value-is-local-date-time)**(struct mgp_value * val, int * result)<br/>Result is non-zero if the given mgp_value stores a local date-time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_is_duration](#function-mgp-value-is-duration)**(struct mgp_value * val, int * result)<br/>Result is non-zero if the given mgp_value stores a duration.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_get_bool](#function-mgp-value-get-bool)**(struct mgp_value * val, int * result)<br/>Get the contained boolean value.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_get_int](#function-mgp-value-get-int)**(struct mgp_value * val, int64_t * result)<br/>Get the contained integer.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_get_double](#function-mgp-value-get-double)**(struct mgp_value * val, double * result)<br/>Get the contained double floating-point.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_get_string](#function-mgp-value-get-string)**(struct mgp_value * val, const char ** result)<br/>Get the contained character string.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_get_list](#function-mgp-value-get-list)**(struct mgp_value * val, struct mgp_list ** result)<br/>Get the contained list of values.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_get_map](#function-mgp-value-get-map)**(struct mgp_value * val, struct mgp_map ** result)<br/>Get the contained map of values.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_get_vertex](#function-mgp-value-get-vertex)**(struct mgp_value * val, struct mgp_vertex ** result)<br/>Get the contained vertex.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_get_edge](#function-mgp-value-get-edge)**(struct mgp_value * val, struct mgp_edge ** result)<br/>Get the contained edge.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_get_path](#function-mgp-value-get-path)**(struct mgp_value * val, struct mgp_path ** result)<br/>Get the contained path.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_get_date](#function-mgp-value-get-date)**(struct mgp_value * val, struct mgp_date ** result)<br/>Get the contained date.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_get_local_time](#function-mgp-value-get-local-time)**(struct mgp_value * val, struct mgp_local_time ** result)<br/>Get the contained local time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_get_local_date_time](#function-mgp-value-get-local-date-time)**(struct mgp_value * val, struct mgp_local_date_time ** result)<br/>Get the contained local date-time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_value_get_duration](#function-mgp-value-get-duration)**(struct mgp_value * val, struct mgp_duration ** result)<br/>Get the contained duration.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_list_make_empty](#function-mgp-list-make-empty)**(size_t capacity, struct mgp_memory * memory, struct mgp_list ** result)<br/>Create an empty list with given capacity.  |
| void | **[mgp_list_destroy](#function-mgp-list-destroy)**(struct mgp_list * list)<br/>Free the memory used by the given mgp_list and contained elements.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_list_append](#function-mgp-list-append)**(struct mgp_list * list, struct mgp_value * val)<br/>Append a copy of mgp_value to mgp_list if capacity allows.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_list_append_extend](#function-mgp-list-append-extend)**(struct mgp_list * list, struct mgp_value * val)<br/>Append a copy of mgp_value to mgp_list increasing capacity if needed.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_list_size](#function-mgp-list-size)**(struct mgp_list * list, size_t * result)<br/>Get the number of elements stored in mgp_list.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_list_capacity](#function-mgp-list-capacity)**(struct mgp_list * list, size_t * result)<br/>Get the total number of elements for which there's already allocated memory in mgp_list.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_list_at](#function-mgp-list-at)**(struct mgp_list * list, size_t index, struct mgp_value ** result)<br/>Get the element in mgp_list at given position.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_map_make_empty](#function-mgp-map-make-empty)**(struct mgp_memory * memory, struct mgp_map ** result)<br/>Create an empty map of character strings to mgp_value instances.  |
| void | **[mgp_map_destroy](#function-mgp-map-destroy)**(struct mgp_map * map)<br/>Free the memory used by the given mgp_map and contained items.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_map_insert](#function-mgp-map-insert)**(struct mgp_map * map, const char * key, struct mgp_value * value)<br/>Insert a new mapping from a NULL terminated character string to a value.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_map_size](#function-mgp-map-size)**(struct mgp_map * map, size_t * result)<br/>Get the number of items stored in mgp_map.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_map_at](#function-mgp-map-at)**(struct mgp_map * map, const char * key, struct mgp_value ** result)<br/>Get the mapped mgp_value to the given character string.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_map_item_key](#function-mgp-map-item-key)**(struct mgp_map_item * item, const char ** result)<br/>Get the key of the mapped item.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_map_item_value](#function-mgp-map-item-value)**(struct mgp_map_item * item, struct mgp_value ** result)<br/>Get the value of the mapped item.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_map_iter_items](#function-mgp-map-iter-items)**(struct mgp_map * map, struct mgp_memory * memory, struct mgp_map_items_iterator ** result)<br/>Start iterating over items contained in the given map.  |
| void | **[mgp_map_items_iterator_destroy](#function-mgp-map-items-iterator-destroy)**(struct mgp_map_items_iterator * it)<br/>Deallocate memory used by mgp_map_items_iterator.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_map_items_iterator_get](#function-mgp-map-items-iterator-get)**(struct mgp_map_items_iterator * it, struct mgp_map_item ** result)<br/>Get the current item pointed to by the iterator.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_map_items_iterator_next](#function-mgp-map-items-iterator-next)**(struct mgp_map_items_iterator * it, struct mgp_map_item ** result)<br/>Advance the iterator to the next item stored in map and return it.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_path_make_with_start](#function-mgp-path-make-with-start)**(struct mgp_vertex * vertex, struct mgp_memory * memory, struct mgp_path ** result)<br/>Create a path with the copy of the given starting vertex.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_path_copy](#function-mgp-path-copy)**(struct mgp_path * path, struct mgp_memory * memory, struct mgp_path ** result)<br/>Copy a mgp_path.  |
| void | **[mgp_path_destroy](#function-mgp-path-destroy)**(struct mgp_path * path)<br/>Free the memory used by the given mgp_path and contained vertices and edges.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_path_expand](#function-mgp-path-expand)**(struct mgp_path * path, struct mgp_edge * edge)<br/>Append an edge continuing from the last vertex on the path.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_path_size](#function-mgp-path-size)**(struct mgp_path * path, size_t * result)<br/>Get the number of edges in a mgp_path.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_path_vertex_at](#function-mgp-path-vertex-at)**(struct mgp_path * path, size_t index, struct mgp_vertex ** result)<br/>Get the vertex from a path at given index.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_path_edge_at](#function-mgp-path-edge-at)**(struct mgp_path * path, size_t index, struct mgp_edge ** result)<br/>Get the edge from a path at given index.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_path_equal](#function-mgp-path-equal)**(struct mgp_path * p1, struct mgp_path * p2, int * result)<br/>Result is non-zero if given paths are equal, otherwise 0.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_result_set_error_msg](#function-mgp-result-set-error-msg)**(struct mgp_result * res, const char * error_msg)<br/>Set the error as the result of the procedure.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_result_new_record](#function-mgp-result-new-record)**(struct mgp_result * res, struct mgp_result_record ** result)<br/>Create a new record for results.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_result_record_insert](#function-mgp-result-record-insert)**(struct mgp_result_record * record, const char * field_name, struct mgp_value * val)<br/>Assign a value to a field in the given record.  |
| void | **[mgp_properties_iterator_destroy](#function-mgp-properties-iterator-destroy)**(struct mgp_properties_iterator * it)<br/>Free the memory used by a mgp_properties_iterator.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_properties_iterator_get](#function-mgp-properties-iterator-get)**(struct mgp_properties_iterator * it, struct [mgp_property](#mgp_property) ** result)<br/>Get the current property pointed to by the iterator.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_properties_iterator_next](#function-mgp-properties-iterator-next)**(struct mgp_properties_iterator * it, struct [mgp_property](#mgp_property) ** result)<br/>Advance the iterator to the next property and return it.  |
| void | **[mgp_edges_iterator_destroy](#function-mgp-edges-iterator-destroy)**(struct mgp_edges_iterator * it)<br/>Free the memory used by a mgp_edges_iterator.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_vertex_get_id](#function-mgp-vertex-get-id)**(struct mgp_vertex * v, struct [mgp_vertex_id](#mgp_vertex_id) * result)<br/>Get the ID of given vertex.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_vertex_underlying_graph_is_mutable](#function-mgp-vertex-underlying-graph-is-mutable)**(struct mgp_vertex * v, int * result)<br/>Result is non-zero if the vertex can be modified.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_vertex_set_property](#function-mgp-vertex-set-property)**(struct mgp_vertex * v, const char * property_name, struct mgp_value * property_value)<br/>Set the value of a property on a vertex.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_vertex_add_label](#function-mgp-vertex-add-label)**(struct mgp_vertex * v, struct [mgp_label](#mgp_label) label)<br/>Add the label to the vertex.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_vertex_remove_label](#function-mgp-vertex-remove-label)**(struct mgp_vertex * v, struct [mgp_label](#mgp_label) label)<br/>Remove the label from the vertex.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_vertex_copy](#function-mgp-vertex-copy)**(struct mgp_vertex * v, struct mgp_memory * memory, struct mgp_vertex ** result)<br/>Copy a mgp_vertex.  |
| void | **[mgp_vertex_destroy](#function-mgp-vertex-destroy)**(struct mgp_vertex * v)<br/>Free the memory used by a mgp_vertex.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_vertex_equal](#function-mgp-vertex-equal)**(struct mgp_vertex * v1, struct mgp_vertex * v2, int * result)<br/>Result is non-zero if given vertices are equal, otherwise 0.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_vertex_labels_count](#function-mgp-vertex-labels-count)**(struct mgp_vertex * v, size_t * result)<br/>Get the number of labels a given vertex has.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_vertex_label_at](#function-mgp-vertex-label-at)**(struct mgp_vertex * v, size_t index, struct [mgp_label](#mgp_label) * result)<br/>Get [mgp_label](#mgp_label) in mgp_vertex at given index.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_vertex_has_label](#function-mgp-vertex-has-label)**(struct mgp_vertex * v, struct [mgp_label](#mgp_label) label, int * result)<br/>Result is non-zero if the given vertex has the given label.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_vertex_has_label_named](#function-mgp-vertex-has-label-named)**(struct mgp_vertex * v, const char * label_name, int * result)<br/>Result is non-zero if the given vertex has a label with given name.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_vertex_get_property](#function-mgp-vertex-get-property)**(struct mgp_vertex * v, const char * property_name, struct mgp_memory * memory, struct mgp_value ** result)<br/>Get a copy of a vertex property mapped to a given name.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_vertex_iter_properties](#function-mgp-vertex-iter-properties)**(struct mgp_vertex * v, struct mgp_memory * memory, struct mgp_properties_iterator ** result)<br/>Start iterating over properties stored in the given vertex.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_vertex_iter_in_edges](#function-mgp-vertex-iter-in-edges)**(struct mgp_vertex * v, struct mgp_memory * memory, struct mgp_edges_iterator ** result)<br/>Start iterating over inbound edges of the given vertex.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_vertex_iter_out_edges](#function-mgp-vertex-iter-out-edges)**(struct mgp_vertex * v, struct mgp_memory * memory, struct mgp_edges_iterator ** result)<br/>Start iterating over outbound edges of the given vertex.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_edges_iterator_underlying_graph_is_mutable](#function-mgp-edges-iterator-underlying-graph-is-mutable)**(struct mgp_edges_iterator * it, int * result)<br/>Result is non-zero if the edges returned by this iterator can be modified.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_edges_iterator_get](#function-mgp-edges-iterator-get)**(struct mgp_edges_iterator * it, struct mgp_edge ** result)<br/>Get the current edge pointed to by the iterator.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_edges_iterator_next](#function-mgp-edges-iterator-next)**(struct mgp_edges_iterator * it, struct mgp_edge ** result)<br/>Advance the iterator to the next edge and return it.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_edge_get_id](#function-mgp-edge-get-id)**(struct mgp_edge * e, struct [mgp_edge_id](#mgp_edge_id) * result)<br/>Get the ID of given edge.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_edge_underlying_graph_is_mutable](#function-mgp-edge-underlying-graph-is-mutable)**(struct mgp_edge * e, int * result)<br/>Result is non-zero if the edge can be modified.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_edge_copy](#function-mgp-edge-copy)**(struct mgp_edge * e, struct mgp_memory * memory, struct mgp_edge ** result)<br/>Copy a mgp_edge.  |
| void | **[mgp_edge_destroy](#function-mgp-edge-destroy)**(struct mgp_edge * e)<br/>Free the memory used by a mgp_edge.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_edge_equal](#function-mgp-edge-equal)**(struct mgp_edge * e1, struct mgp_edge * e2, int * result)<br/>Result is non-zero if given edges are equal, otherwise 0.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_edge_get_type](#function-mgp-edge-get-type)**(struct mgp_edge * e, struct [mgp_edge_type](#mgp_edge_type) * result)<br/>Get the type of the given edge.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_edge_get_from](#function-mgp-edge-get-from)**(struct mgp_edge * e, struct mgp_vertex ** result)<br/>Get the source vertex of the given edge.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_edge_get_to](#function-mgp-edge-get-to)**(struct mgp_edge * e, struct mgp_vertex ** result)<br/>Get the destination vertex of the given edge.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_edge_get_property](#function-mgp-edge-get-property)**(struct mgp_edge * e, const char * property_name, struct mgp_memory * memory, struct mgp_value ** result)<br/>Get a copy of a edge property mapped to a given name.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_edge_set_property](#function-mgp-edge-set-property)**(struct mgp_edge * e, const char * property_name, struct mgp_value * property_value)<br/>Set the value of a property on an edge.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_edge_iter_properties](#function-mgp-edge-iter-properties)**(struct mgp_edge * e, struct mgp_memory * memory, struct mgp_properties_iterator ** result)<br/>Start iterating over properties stored in the given edge.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_graph_get_vertex_by_id](#function-mgp-graph-get-vertex-by-id)**(struct mgp_graph * g, struct [mgp_vertex_id](#mgp_vertex_id) id, struct mgp_memory * memory, struct mgp_vertex ** result)<br/>Get the vertex corresponding to given ID, or NULL if no such vertex exists.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_graph_is_mutable](#function-mgp-graph-is-mutable)**(struct mgp_graph * graph, int * result)<br/>Result is non-zero if the graph can be modified.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_graph_create_vertex](#function-mgp-graph-create-vertex)**(struct mgp_graph * graph, struct mgp_memory * memory, struct mgp_vertex ** result)<br/>Add a new vertex to the graph.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_graph_delete_vertex](#function-mgp-graph-delete-vertex)**(struct mgp_graph * graph, struct mgp_vertex * vertex)<br/>Delete a vertex from the graph.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_graph_detach_delete_vertex](#function-mgp-graph-detach-delete-vertex)**(struct mgp_graph * graph, struct mgp_vertex * vertex)<br/>Delete a vertex and all of its edges from the graph.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_graph_create_edge](#function-mgp-graph-create-edge)**(struct mgp_graph * graph, struct mgp_vertex * from, struct mgp_vertex * to, struct [mgp_edge_type](#mgp_edge_type) type, struct mgp_memory * memory, struct mgp_edge ** result)<br/>Add a new directed edge between the two vertices with the specified label.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_graph_delete_edge](#function-mgp-graph-delete-edge)**(struct mgp_graph * graph, struct mgp_edge * edge)<br/>Delete an edge from the graph.  |
| void | **[mgp_vertices_iterator_destroy](#function-mgp-vertices-iterator-destroy)**(struct mgp_vertices_iterator * it)<br/>Free the memory used by a mgp_vertices_iterator.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_graph_iter_vertices](#function-mgp-graph-iter-vertices)**(struct mgp_graph * g, struct mgp_memory * memory, struct mgp_vertices_iterator ** result)<br/>Start iterating over vertices of the given graph.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_vertices_iterator_underlying_graph_is_mutable](#function-mgp-vertices-iterator-underlying-graph-is-mutable)**(struct mgp_vertices_iterator * it, int * result)<br/>Result is non-zero if the vertices returned by this iterator can be modified.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_vertices_iterator_get](#function-mgp-vertices-iterator-get)**(struct mgp_vertices_iterator * it, struct mgp_vertex ** result)<br/>Get the current vertex pointed to by the iterator.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_date_from_string](#function-mgp-date-from-string)**(const char * string, struct mgp_memory * memory, struct mgp_date ** date)<br/>Create a date from a string following the ISO 8601 format.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_date_from_parameters](#function-mgp-date-from-parameters)**(struct [mgp_date_parameters](#mgp_date_parameters) * parameters, struct mgp_memory * memory, struct mgp_date ** date)<br/>Create a date from mgp_date_parameter.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_date_copy](#function-mgp-date-copy)**(struct mgp_date * date, struct mgp_memory * memory, struct mgp_date ** result)<br/>Copy a mgp_date.  |
| void | **[mgp_date_destroy](#function-mgp-date-destroy)**(struct mgp_date * date)<br/>Free the memory used by a mgp_date.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_date_equal](#function-mgp-date-equal)**(struct mgp_date * first, struct mgp_date * second, int * result)<br/>Result is non-zero if given dates are equal, otherwise 0.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_date_get_year](#function-mgp-date-get-year)**(struct mgp_date * date, int * year)<br/>Get the year property of the date.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_date_get_month](#function-mgp-date-get-month)**(struct mgp_date * date, int * month)<br/>Get the month property of the date.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_date_get_day](#function-mgp-date-get-day)**(struct mgp_date * date, int * day)<br/>Get the day property of the date.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_date_timestamp](#function-mgp-date-timestamp)**(struct mgp_date * date, int64_t * timestamp)<br/>Get the date as microseconds from Unix epoch.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_date_now](#function-mgp-date-now)**(struct mgp_memory * memory, struct mgp_date ** date)<br/>Get the date representing current date.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_date_add_duration](#function-mgp-date-add-duration)**(struct mgp_date * date, struct mgp_duration * dur, struct mgp_memory * memory, struct mgp_date ** result)<br/>Add a duration to the date.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_date_sub_duration](#function-mgp-date-sub-duration)**(struct mgp_date * date, struct mgp_duration * dur, struct mgp_memory * memory, struct mgp_date ** result)<br/>Subtract a duration from the date.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_date_diff](#function-mgp-date-diff)**(struct mgp_date * first, struct mgp_date * second, struct mgp_memory * memory, struct mgp_duration ** result)<br/>Get a duration between two dates.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_time_from_string](#function-mgp-local-time-from-string)**(const char * string, struct mgp_memory * memory, struct mgp_local_time ** local_time)<br/>Create a local time from a string following the ISO 8601 format.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_time_from_parameters](#function-mgp-local-time-from-parameters)**(struct [mgp_local_time_parameters](#mgp_local_time_parameters) * parameters, struct mgp_memory * memory, struct mgp_local_time ** local_time)<br/>Create a local time from [mgp_local_time_parameters](#mgp_local_time_parameters).  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_time_copy](#function-mgp-local-time-copy)**(struct mgp_local_time * local_time, struct mgp_memory * memory, struct mgp_local_time ** result)<br/>Copy a mgp_local_time.  |
| void | **[mgp_local_time_destroy](#function-mgp-local-time-destroy)**(struct mgp_local_time * local_time)<br/>Free the memory used by a mgp_local_time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_time_equal](#function-mgp-local-time-equal)**(struct mgp_local_time * first, struct mgp_local_time * second, int * result)<br/>Result is non-zero if given local times are equal, otherwise 0.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_time_get_hour](#function-mgp-local-time-get-hour)**(struct mgp_local_time * local_time, int * hour)<br/>Get the hour property of the local time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_time_get_minute](#function-mgp-local-time-get-minute)**(struct mgp_local_time * local_time, int * minute)<br/>Get the minute property of the local time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_time_get_second](#function-mgp-local-time-get-second)**(struct mgp_local_time * local_time, int * second)<br/>Get the second property of the local time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_time_get_millisecond](#function-mgp-local-time-get-millisecond)**(struct mgp_local_time * local_time, int * millisecond)<br/>Get the millisecond property of the local time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_time_get_microsecond](#function-mgp-local-time-get-microsecond)**(struct mgp_local_time * local_time, int * microsecond)<br/>Get the microsecond property of the local time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_time_timestamp](#function-mgp-local-time-timestamp)**(struct mgp_local_time * local_time, int64_t * timestamp)<br/>Get the local time as microseconds from midnight.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_time_now](#function-mgp-local-time-now)**(struct mgp_memory * memory, struct mgp_local_time ** local_time)<br/>Get the local time representing current time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_time_add_duration](#function-mgp-local-time-add-duration)**(struct mgp_local_time * local_time, struct mgp_duration * dur, struct mgp_memory * memory, struct mgp_local_time ** result)<br/>Add a duration to the local time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_time_sub_duration](#function-mgp-local-time-sub-duration)**(struct mgp_local_time * local_time, struct mgp_duration * dur, struct mgp_memory * memory, struct mgp_local_time ** result)<br/>Subtract a duration from the local time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_time_diff](#function-mgp-local-time-diff)**(struct mgp_local_time * first, struct mgp_local_time * second, struct mgp_memory * memory, struct mgp_duration ** result)<br/>Get a duration between two local times.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_date_time_from_string](#function-mgp-local-date-time-from-string)**(const char * string, struct mgp_memory * memory, struct mgp_local_date_time ** local_date_time)<br/>Create a local date-time from a string following the ISO 8601 format.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_date_time_from_parameters](#function-mgp-local-date-time-from-parameters)**(struct [mgp_local_date_time_parameters](#mgp_local_date_time_parameters) * parameters, struct mgp_memory * memory, struct mgp_local_date_time ** local_date_time)<br/>Create a local date-time from [mgp_local_date_time_parameters](#mgp_local_date_time_parameters).  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_date_time_copy](#function-mgp-local-date-time-copy)**(struct mgp_local_date_time * local_date_time, struct mgp_memory * memory, struct mgp_local_date_time ** result)<br/>Copy a mgp_local_date_time.  |
| void | **[mgp_local_date_time_destroy](#function-mgp-local-date-time-destroy)**(struct mgp_local_date_time * local_date_time)<br/>Free the memory used by a mgp_local_date_time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_date_time_equal](#function-mgp-local-date-time-equal)**(struct mgp_local_date_time * first, struct mgp_local_date_time * second, int * result)<br/>Result is non-zero if given local date-times are equal, otherwise 0.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_date_time_get_year](#function-mgp-local-date-time-get-year)**(struct mgp_local_date_time * local_date_time, int * year)<br/>Get the year property of the local date-time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_date_time_get_month](#function-mgp-local-date-time-get-month)**(struct mgp_local_date_time * local_date_time, int * month)<br/>Get the month property of the local date-time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_date_time_get_day](#function-mgp-local-date-time-get-day)**(struct mgp_local_date_time * local_date_time, int * day)<br/>Get the day property of the local date-time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_date_time_get_hour](#function-mgp-local-date-time-get-hour)**(struct mgp_local_date_time * local_date_time, int * hour)<br/>Get the hour property of the local date-time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_date_time_get_minute](#function-mgp-local-date-time-get-minute)**(struct mgp_local_date_time * local_date_time, int * minute)<br/>Get the minute property of the local date-time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_date_time_get_second](#function-mgp-local-date-time-get-second)**(struct mgp_local_date_time * local_date_time, int * second)<br/>Get the second property of the local date-time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_date_time_get_millisecond](#function-mgp-local-date-time-get-millisecond)**(struct mgp_local_date_time * local_date_time, int * millisecond)<br/>Get the milisecond property of the local date-time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_date_time_get_microsecond](#function-mgp-local-date-time-get-microsecond)**(struct mgp_local_date_time * local_date_time, int * microsecond)<br/>Get the microsecond property of the local date-time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_date_time_timestamp](#function-mgp-local-date-time-timestamp)**(struct mgp_local_date_time * local_date_time, int64_t * timestamp)<br/>Get the local date-time as microseconds from Unix epoch.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_date_time_now](#function-mgp-local-date-time-now)**(struct mgp_memory * memory, struct mgp_local_date_time ** local_date_time)<br/>Get the local date-time representing current date and time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_date_time_add_duration](#function-mgp-local-date-time-add-duration)**(struct mgp_local_date_time * local_date_time, struct mgp_duration * dur, struct mgp_memory * memory, struct mgp_local_date_time ** result)<br/>Add a duration to the local date-time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_date_time_sub_duration](#function-mgp-local-date-time-sub-duration)**(struct mgp_local_date_time * local_date_time, struct mgp_duration * dur, struct mgp_memory * memory, struct mgp_local_date_time ** result)<br/>Subtract a duration from the local date-time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_local_date_time_diff](#function-mgp-local-date-time-diff)**(struct mgp_local_date_time * first, struct mgp_local_date_time * second, struct mgp_memory * memory, struct mgp_duration ** result)<br/>Get a duration between two local date-times.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_duration_from_string](#function-mgp-duration-from-string)**(const char * string, struct mgp_memory * memory, struct mgp_duration ** duration)<br/>Create a duration from a string following the ISO 8601 format.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_duration_from_parameters](#function-mgp-duration-from-parameters)**(struct [mgp_duration_parameters](#mgp_duration_parameters) * parameters, struct mgp_memory * memory, struct mgp_duration ** duration)<br/>Create a duration from [mgp_duration_parameters](#mgp_duration_parameters).  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_duration_from_microseconds](#function-mgp-duration-from-microseconds)**(int64_t microseconds, struct mgp_memory * memory, struct mgp_duration ** duration)<br/>Create a duration from microseconds.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_duration_copy](#function-mgp-duration-copy)**(struct mgp_duration * duration, struct mgp_memory * memory, struct mgp_duration ** result)<br/>Copy a mgp_duration.  |
| void | **[mgp_duration_destroy](#function-mgp-duration-destroy)**(struct mgp_duration * duration)<br/>Free the memory used by a mgp_duration.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_duration_equal](#function-mgp-duration-equal)**(struct mgp_duration * first, struct mgp_duration * second, int * result)<br/>Result is non-zero if given durations are equal, otherwise 0.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_duration_get_microseconds](#function-mgp-duration-get-microseconds)**(struct mgp_duration * duration, int64_t * microseconds)<br/>Get the duration as microseconds.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_duration_neg](#function-mgp-duration-neg)**(struct mgp_duration * dur, struct mgp_memory * memory, struct mgp_duration ** result)<br/>Apply unary minus operator to the duration.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_duration_add](#function-mgp-duration-add)**(struct mgp_duration * first, struct mgp_duration * second, struct mgp_memory * memory, struct mgp_duration ** result)<br/>Add two durations.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_duration_sub](#function-mgp-duration-sub)**(struct mgp_duration * first, struct mgp_duration * second, struct mgp_memory * memory, struct mgp_duration ** result)<br/>Subtract two durations.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_type_any](#function-mgp-type-any)**(struct mgp_type ** result)<br/>Get the type representing any value that isn't `null`.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_type_bool](#function-mgp-type-bool)**(struct mgp_type ** result)<br/>Get the type representing boolean values.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_type_string](#function-mgp-type-string)**(struct mgp_type ** result)<br/>Get the type representing character string values.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_type_int](#function-mgp-type-int)**(struct mgp_type ** result)<br/>Get the type representing integer values.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_type_float](#function-mgp-type-float)**(struct mgp_type ** result)<br/>Get the type representing floating-point values.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_type_number](#function-mgp-type-number)**(struct mgp_type ** result)<br/>Get the type representing any number value.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_type_map](#function-mgp-type-map)**(struct mgp_type ** result)<br/>Get the type representing map values.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_type_node](#function-mgp-type-node)**(struct mgp_type ** result)<br/>Get the type representing graph node values.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_type_relationship](#function-mgp-type-relationship)**(struct mgp_type ** result)<br/>Get the type representing graph relationship values.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_type_path](#function-mgp-type-path)**(struct mgp_type ** result)<br/>Get the type representing a graph path (walk) from one node to another.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_type_list](#function-mgp-type-list)**(struct mgp_type * element_type, struct mgp_type ** result)<br/>Build a type representing a list of values of given `element_type`.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_type_date](#function-mgp-type-date)**(struct mgp_type ** result)<br/>Get the type representing a date.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_type_local_time](#function-mgp-type-local-time)**(struct mgp_type ** result)<br/>Get the type representing a local time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_type_local_date_time](#function-mgp-type-local-date-time)**(struct mgp_type ** result)<br/>Get the type representing a local date-time.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_type_duration](#function-mgp-type-duration)**(struct mgp_type ** result)<br/>Get the type representing a duration.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_type_nullable](#function-mgp-type-nullable)**(struct mgp_type * type, struct mgp_type ** result)<br/>Build a type representing either a `null` value or a value of given `type`.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_module_add_read_procedure](#function-mgp-module-add-read-procedure)**(struct mgp_module * module, const char * name, [mgp_proc_cb](#typedef-mgp-proc-cb) cb, struct mgp_proc ** result)<br/>Register a read-only procedure to a module.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_module_add_write_procedure](#function-mgp-module-add-write-procedure)**(struct mgp_module * module, const char * name, [mgp_proc_cb](#typedef-mgp-proc-cb) cb, struct mgp_proc ** result)<br/>Register a writeable procedure to a module.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_module_add_batch_read_procedure](#function-mgp-module-add-read-procedure)**(struct mgp_module * module, const char * name, [mgp_proc_cb](#typedef-mgp-proc-cb) cb, [mgp_proc_initializer](#typedef-mgp-proc-initializer) initializer, [mgp_proc_cleanup](#typedef-mgp-proc-cleanup) cleanup, struct mgp_proc ** result)<br/>Register a read-only procedure to a module.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_module_add_batch_write_procedure](#function-mgp-module-add-write-procedure)**(struct mgp_module * module, const char * name, [mgp_proc_cb](#typedef-mgp-proc-cb) cb, [mgp_proc_initializer](#typedef-mgp-proc-initializer) initializer, [mgp_proc_cleanup](#typedef-mgp-proc-cleanup) cleanup, struct mgp_proc ** result)<br/>Register a writeable procedure to a module.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_proc_add_arg](#function-mgp-proc-add-arg)**(struct mgp_proc * proc, const char * name, struct mgp_type * type)<br/>Add a required argument to a procedure.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_proc_add_opt_arg](#function-mgp-proc-add-opt-arg)**(struct mgp_proc * proc, const char * name, struct mgp_type * type, struct mgp_value * default_value)<br/>Add an optional argument with a default value to a procedure.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_proc_add_result](#function-mgp-proc-add-result)**(struct mgp_proc * proc, const char * name, struct mgp_type * type)<br/>Add a result field to a procedure.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_proc_add_deprecated_result](#function-mgp-proc-add-deprecated-result)**(struct mgp_proc * proc, const char * name, struct mgp_type * type)<br/>Add a result field to a procedure and mark it as deprecated.  |
| int | **[mgp_must_abort](#function-mgp-must-abort)**(struct mgp_graph * graph)<br/>Return non-zero if the currently executing procedure should abort as soon as possible.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_message_payload](#function-mgp-message-payload)**(struct mgp_message * message, const char ** result)<br/>Payload is not null terminated and not a string but rather a byte array.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_message_payload_size](#function-mgp-message-payload-size)**(struct mgp_message * message, size_t * result)<br/>Get the payload size.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_message_topic_name](#function-mgp-message-topic-name)**(struct mgp_message * message, const char ** result)<br/>Get the name of topic.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_message_key](#function-mgp-message-key)**(struct mgp_message * message, const char ** result)<br/>Get the key of mgp_message as a byte array.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_message_key_size](#function-mgp-message-key-size)**(struct mgp_message * message, size_t * result)<br/>Get the key size of mgp_message.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_message_timestamp](#function-mgp-message-timestamp)**(struct mgp_message * message, int64_t * result)<br/>Get the timestamp of mgp_message as a byte array.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_messages_size](#function-mgp-messages-size)**(struct mgp_messages * message, size_t * result)<br/>Get the number of messages contained in the mgp_messages list Current implementation always returns without errors.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_messages_at](#function-mgp-messages-at)**(struct mgp_messages * message, size_t index, struct mgp_message ** result)<br/>Get the message from a messages list at given index.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_module_add_transformation](#function-mgp-module-add-transformation)**(struct mgp_module * module, const char * name, [mgp_trans_cb](#typedef-mgp-trans-cb) cb)<br/>Register a transformation with a module.  |
| enum [mgp_error](#variable-mgp-error) | **[mgp_vertices_iterator_next](#function-mgp-vertices-iterator-next)**(struct mgp_vertices_iterator * it, struct mgp_vertex ** result)<br/>Advance the iterator to the next vertex and return it.  |
| enum [mgp_error](#variable-mgp-error)| **[mgp_log](#function-mgp-log)**(mgp_log_level log_level, const char *output)<br/>Log a message on a certain level. |

## Attributes

|                | Name           |
| -------------- | -------------- |
| enum MGP_NODISCARD | **[mgp_error](#variable-mgp-error)** <br/>All functions return an error code that can be used to figure out whether the API call was successful or not.  |
| | **[MGP_ERROR_NO_ERROR](#variable-mgp-error-no-error)**  |
| | **[MGP_ERROR_UNKNOWN_ERROR](#variable-mgp-error-unknown-error)**  |
| | **[MGP_ERROR_UNABLE_TO_ALLOCATE](#variable-mgp-error-unable-to-allocate)**  |
| | **[MGP_ERROR_INSUFFICIENT_BUFFER](#variable-mgp-error-insufficient-buffer)**  |
| | **[MGP_ERROR_OUT_OF_RANGE](#variable-mgp-error-out-of-range)**  |
| | **[MGP_ERROR_LOGIC_ERROR](#variable-mgp-error-logic-error)**  |
| | **[MGP_ERROR_DELETED_OBJECT](#variable-mgp-error-deleted-object)**  |
| | **[MGP_ERROR_INVALID_ARGUMENT](#variable-mgp-error-invalid-argument)**  |
| | **[MGP_ERROR_KEY_ALREADY_EXISTS](#variable-mgp-error-key-already-exists)**  |
| | **[MGP_ERROR_IMMUTABLE_OBJECT](#variable-mgp-error-immutable-object)**  |
| | **[MGP_ERROR_VALUE_CONVERSION](#variable-mgp-error-value-conversion)**  |
| | **[MGP_ERROR_SERIALIZATION_ERROR](#variable-mgp-error-serialization-error)**  |

## Macros

**[MGP_NODISCARD](#define-mgp-nodiscard)** 

## Classes Documentation

### mgp_label

Label of a vertex.

#### Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| const char * | **[name](#variable-name)** <br/>Name of the label as a NULL terminated character string.  |

#### variable name {#variable-name}

```cpp
const char * name;
```

Name of the label as a NULL terminated character string.

### mgp_edge_type

Type of an edge.

#### Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| const char * | **[name](#variable-name)** <br/>Name of the type as a NULL terminated character string.  |

#### variable name {#variable-name}

```cpp
const char * name;
```

Name of the type as a NULL terminated character string.

### mgp_property

Reference to a named property value.

#### Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| const char * | **[name](#variable-name)** <br/>Name (key) of a property as a NULL terminated string.  |
| struct mgp_value * | **[value](#variable-value)** <br/>Value of the referenced property.  |

#### variable name {#variable-name}

```cpp
const char * name;
```

Name (key) of a property as a NULL terminated string.

#### variable value {#variable-value}

```cpp
struct mgp_value * value;
```

Value of the referenced property.

### mgp_vertex_id

ID of a vertex valid during a single query execution.

#### Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| int64_t | **[as_int](#variable-as-int)**  |

#### variable as_int {#variable-as-int}

```cpp
int64_t as_int;
```

### mgp_edge_id

ID of an edge; valid during a single query execution.

#### Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| int64_t | **[as_int](#variable-as-int)**  |

#### variable as_int {#variable-as-int}

```cpp
int64_t as_int;
```

### mgp_date_parameters

#### Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| int | **[year](#variable-year)**  |
| int | **[month](#variable-month)**  |
| int | **[day](#variable-day)**  |

#### variable year {#variable-year}

```cpp
int year;
```

#### variable month {#variable-month}

```cpp
int month;
```

#### variable day {#variable-day}

```cpp
int day;
```

### mgp_local_time_parameters

#### Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| int | **[hour](#variable-hour)**  |
| int | **[minute](#variable-minute)**  |
| int | **[second](#variable-second)**  |
| int | **[millisecond](#variable-millisecond)**  |
| int | **[microsecond](#variable-microsecond)**  |

#### variable hour {#variable-hour}

```cpp
int hour;
```


#### variable minute {#variable-minute}

```cpp
int minute;
```


#### variable second {#variable-second}

```cpp
int second;
```


#### variable millisecond {#variable-millisecond}

```cpp
int millisecond;
```


#### variable microsecond {#variable-microsecond}

```cpp
int microsecond;
```

### mgp_local_date_time_parameters

#### Public Attributes

| Type           | Name           |
| -------------- | -------------- |
| struct [mgp_date_parameters](#mgp_date_parameters) * | **[date_parameters](#variable-date-parameters)**  |
| struct [mgp_local_time_parameters](#mgp_local_time_parameters) * | **[local_time_parameters](#variable-local-time-parameters)**  |

#### variable date_parameters {#variable-date-parameters}

```cpp
struct mgp_date_parameters * date_parameters;
```


#### variable local_time_parameters {#variable-local-time-parameters}

```cpp
struct mgp_local_time_parameters * local_time_parameters;
```

### mgp_duration_parameters

#### Public Attributes

|                | Name           |
| -------------- | -------------- |
| double | **[day](#variable-day)**  |
| double | **[hour](#variable-hour)**  |
| double | **[minute](#variable-minute)**  |
| double | **[second](#variable-second)**  |
| double | **[millisecond](#variable-millisecond)**  |
| double | **[microsecond](#variable-microsecond)**  |

#### variable day {#variable-day}

```cpp
double day;
```

#### variable hour {#variable-hour}

```cpp
double hour;
```

#### variable minute {#variable-minute}

```cpp
double minute;
```

#### variable second {#variable-second}

```cpp
double second;
```

#### variable millisecond {#variable-millisecond}

```cpp
double millisecond;
```

#### variable microsecond {#variable-microsecond}

```cpp
double microsecond;
```

## Types Documentation

### enum mgp_value_type {#enum-mgp-value-type}

All available types that can be stored in a mgp_value.

| Enumerator |
| ---------- |
| MGP_VALUE_TYPE_NULL |
| MGP_VALUE_TYPE_BOOL |
| MGP_VALUE_TYPE_INT |
| MGP_VALUE_TYPE_DOUBLE |
| MGP_VALUE_TYPE_STRING |
| MGP_VALUE_TYPE_LIST |
| MGP_VALUE_TYPE_MAP |
| MGP_VALUE_TYPE_VERTEX |
| MGP_VALUE_TYPE_EDGE |
| MGP_VALUE_TYPE_PATH |
| MGP_VALUE_TYPE_DATE |
| MGP_VALUE_TYPE_LOCAL_TIME |
| MGP_VALUE_TYPE_LOCAL_DATE_TIME |
| MGP_VALUE_TYPE_DURATION |

### typedef mgp_proc_cb {#typedef-mgp-proc-cb}
### typedef mgp_proc_initializer {#typedef-mgp-proc-initializer}
### typedef mgp_proc_cleanup {#typedef-mgp-proc-cleanup}

```cpp
typedef void(* mgp_proc_cb) (struct mgp_list *, struct mgp_graph *, struct mgp_result *, struct mgp_memory *);
```

Entry-point for a query module read procedure, invoked through openCypher.

Passed in arguments will not live longer than the callback's execution. Therefore, you must not store them globally or use the passed in mgp_memory to allocate global resources.


### typedef mgp_trans_cb {#typedef-mgp-trans-cb}

```cpp
typedef void(* mgp_trans_cb) (struct mgp_messages *, struct mgp_graph *, struct mgp_result *, struct mgp_memory *);
```

Entry-point for a module transformation, invoked through a stream transformation.

Passed in arguments will not live longer than the callback's execution. Therefore, you must not store them globally or use the passed in mgp_memory to allocate global resources.



## Functions Documentation

### mgp_alloc {#function-mgp-alloc}

```cpp
enum mgp_error mgp_alloc(
    struct mgp_memory * memory,
    size_t size_in_bytes,
    void ** result
)
```

Allocate a block of memory with given size in bytes.

Unlike malloc, this function is not thread-safe. `size_in_bytes` must be greater than 0. The resulting pointer must be freed with mgp_free. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to serve the requested allocation.


### mgp_aligned_alloc {#function-mgp-aligned-alloc}

```cpp
enum mgp_error mgp_aligned_alloc(
    struct mgp_memory * memory,
    size_t size_in_bytes,
    size_t alignment,
    void ** result
)
```

Allocate an aligned block of memory with given size in bytes.

Unlike malloc and aligned_alloc, this function is not thread-safe. `size_in_bytes` must be greater than 0. `alignment` must be a power of 2 value. The resulting pointer must be freed with mgp_free. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to serve the requested allocation.


### mgp_free {#function-mgp-free}

```cpp
void mgp_free(
    struct mgp_memory * memory,
    void * ptr
)
```

Deallocate an allocation from mgp_alloc or mgp_aligned_alloc.

Unlike free, this function is not thread-safe. If `ptr` is NULL, this function does nothing. The behavior is undefined if `ptr` is not a value returned from a prior mgp_alloc or mgp_aligned_alloc call with the corresponding `memory`.


### mgp_global_alloc {#function-mgp-global-alloc}

```cpp
enum mgp_error mgp_global_alloc(
    size_t size_in_bytes,
    void ** result
)
```

Allocate a global block of memory with given size in bytes.

This function can be used to allocate global memory that persists beyond a single invocation of mgp_main. The resulting pointer must be freed with mgp_global_free. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to serve the requested allocation.


### mgp_global_aligned_alloc {#function-mgp-global-aligned-alloc}

```cpp
enum mgp_error mgp_global_aligned_alloc(
    size_t size_in_bytes,
    size_t alignment,
    void ** result
)
```

Allocate an aligned global block of memory with given size in bytes.

This function can be used to allocate global memory that persists beyond a single invocation of mgp_main. The resulting pointer must be freed with mgp_global_free. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to serve the requested allocation.


### mgp_global_free {#function-mgp-global-free}

```cpp
void mgp_global_free(
    void * p
)
```

Deallocate an allocation from mgp_global_alloc or mgp_global_aligned_alloc.

If `ptr` is NULL, this function does nothing. The behavior is undefined if `ptr` is not a value returned from a prior [mgp_global_alloc()](#function-mgp-global-alloc) or [mgp_global_aligned_alloc()](#function-mgp-global-aligned-alloc).


### mgp_value_destroy {#function-mgp-value-destroy}

```cpp
void mgp_value_destroy(
    struct mgp_value * val
)
```

Free the memory used by the given mgp_value instance.

### mgp_value_make_null {#function-mgp-value-make-null}

```cpp
enum mgp_error mgp_value_make_null(
    struct mgp_memory * memory,
    struct mgp_value ** result
)
```

Construct a value representing `null` in openCypher.

You need to free the instance through mgp_value_destroy. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to allocate a mgp_value.


### mgp_value_make_bool {#function-mgp-value-make-bool}

```cpp
enum mgp_error mgp_value_make_bool(
    int val,
    struct mgp_memory * memory,
    struct mgp_value ** result
)
```

Construct a boolean value.

Non-zero values represent `true`, while zero represents `false`. You need to free the instance through mgp_value_destroy. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to allocate a mgp_value.


### mgp_value_make_int {#function-mgp-value-make-int}

```cpp
enum mgp_error mgp_value_make_int(
    int64_t val,
    struct mgp_memory * memory,
    struct mgp_value ** result
)
```

Construct an integer value.

You need to free the instance through mgp_value_destroy. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to allocate a mgp_value.


### mgp_value_make_double {#function-mgp-value-make-double}

```cpp
enum mgp_error mgp_value_make_double(
    double val,
    struct mgp_memory * memory,
    struct mgp_value ** result
)
```

Construct a double floating point value.

You need to free the instance through mgp_value_destroy. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to allocate a mgp_value.


### mgp_value_make_string {#function-mgp-value-make-string}

```cpp
enum mgp_error mgp_value_make_string(
    const char * val,
    struct mgp_memory * memory,
    struct mgp_value ** result
)
```

Construct a character string value from a NULL terminated string.

You need to free the instance through mgp_value_destroy. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to allocate a mgp_value.


### mgp_value_make_list {#function-mgp-value-make-list}

```cpp
enum mgp_error mgp_value_make_list(
    struct mgp_list * val,
    struct mgp_value ** result
)
```

Create a mgp_value storing a mgp_list.

You need to free the instance through mgp_value_destroy. The ownership of the list is given to the created mgp_value and destroying the mgp_value will destroy the mgp_list. Therefore, if a mgp_value is successfully created you must not call mgp_list_destroy on the given list. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to allocate a mgp_value.


### mgp_value_make_map {#function-mgp-value-make-map}

```cpp
enum mgp_error mgp_value_make_map(
    struct mgp_map * val,
    struct mgp_value ** result
)
```

Create a mgp_value storing a mgp_map.

You need to free the instance through mgp_value_destroy. The ownership of the map is given to the created mgp_value and destroying the mgp_value will destroy the mgp_map. Therefore, if a mgp_value is successfully created you must not call mgp_map_destroy on the given map. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to allocate a mgp_value.


### mgp_value_make_vertex {#function-mgp-value-make-vertex}

```cpp
enum mgp_error mgp_value_make_vertex(
    struct mgp_vertex * val,
    struct mgp_value ** result
)
```

Create a mgp_value storing a mgp_vertex.

You need to free the instance through mgp_value_destroy. The ownership of the vertex is given to the created mgp_value and destroying the mgp_value will destroy the mgp_vertex. Therefore, if a mgp_value is successfully created you must not call mgp_vertex_destroy on the given vertex. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to allocate a mgp_value.


### mgp_value_make_edge {#function-mgp-value-make-edge}

```cpp
enum mgp_error mgp_value_make_edge(
    struct mgp_edge * val,
    struct mgp_value ** result
)
```

Create a mgp_value storing a mgp_edge.

You need to free the instance through mgp_value_destroy. The ownership of the edge is given to the created mgp_value and destroying the mgp_value will destroy the mgp_edge. Therefore, if a mgp_value is successfully created you must not call mgp_edge_destroy on the given edge. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to allocate a mgp_value.


### mgp_value_make_path {#function-mgp-value-make-path}

```cpp
enum mgp_error mgp_value_make_path(
    struct mgp_path * val,
    struct mgp_value ** result
)
```

Create a mgp_value storing a mgp_path.

You need to free the instance through mgp_value_destroy. The ownership of the path is given to the created mgp_value and destroying the mgp_value will destroy the mgp_path. Therefore, if a mgp_value is successfully created you must not call mgp_path_destroy on the given path. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to allocate a mgp_value.


### mgp_value_make_date {#function-mgp-value-make-date}

```cpp
enum mgp_error mgp_value_make_date(
    struct mgp_date * val,
    struct mgp_value ** result
)
```

Create a mgp_value storing a mgp_date.

You need to free the instance through mgp_value_destroy. The ownership of the date is transferred to the created mgp_value and destroying the mgp_value will destroy the mgp_date. Therefore, if a mgp_value is successfully created you must not call mgp_date_destroy on the given date. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to allocate a mgp_value.


### mgp_value_make_local_time {#function-mgp-value-make-local-time}

```cpp
enum mgp_error mgp_value_make_local_time(
    struct mgp_local_time * val,
    struct mgp_value ** result
)
```

Create a mgp_value storing a mgp_local_time.

You need to free the instance through mgp_value_destroy. The ownership of the local time is transferred to the created mgp_value and destroying the mgp_value will destroy the mgp_local_time. Therefore, if a mgp_value is successfully created you must not call mgp_local_time_destroy on the given local time. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to allocate a mgp_value.


### mgp_value_make_local_date_time {#function-mgp-value-make-local-date-time}

```cpp
enum mgp_error mgp_value_make_local_date_time(
    struct mgp_local_date_time * val,
    struct mgp_value ** result
)
```

Create a mgp_value storing a mgp_local_date_time.

You need to free the instance through mgp_value_destroy. The ownership of the local date-time is transferred to the created mgp_value and destroying the mgp_value will destroy the mgp_local_date_time. Therefore, if a mgp_value is successfully created you must not call mgp_local_date_time_destroy on the given local date-time. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to allocate a mgp_value.


### mgp_value_make_duration {#function-mgp-value-make-duration}

```cpp
enum mgp_error mgp_value_make_duration(
    struct mgp_duration * val,
    struct mgp_value ** result
)
```

Create a mgp_value storing a mgp_duration.

You need to free the instance through mgp_value_destroy. The ownership of the duration is transferred to the created mgp_value and destroying the mgp_value will destroy the mgp_duration. Therefore, if a mgp_value is successfully created you must not call mgp_duration_destroy on the given duration. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to allocate a mgp_value.


### mgp_value_get_type {#function-mgp-value-get-type}

```cpp
enum mgp_error mgp_value_get_type(
    struct mgp_value * val,
    enum mgp_value_type * result
)
```

Get the type of the value contained in mgp_value.

Current implementation always returns without errors.


### mgp_value_is_null {#function-mgp-value-is-null}

```cpp
enum mgp_error mgp_value_is_null(
    struct mgp_value * val,
    int * result
)
```

Result is non-zero if the given mgp_value represents `null`.

Current implementation always returns without errors.


### mgp_value_is_bool {#function-mgp-value-is-bool}

```cpp
enum mgp_error mgp_value_is_bool(
    struct mgp_value * val,
    int * result
)
```

Result is non-zero if the given mgp_value stores a boolean.

Current implementation always returns without errors.


### mgp_value_is_int {#function-mgp-value-is-int}

```cpp
enum mgp_error mgp_value_is_int(
    struct mgp_value * val,
    int * result
)
```

Result is non-zero if the given mgp_value stores an integer.

Current implementation always returns without errors.


### mgp_value_is_double {#function-mgp-value-is-double}

```cpp
enum mgp_error mgp_value_is_double(
    struct mgp_value * val,
    int * result
)
```

Result is non-zero if the given mgp_value stores a double floating-point.

Current implementation always returns without errors.


### mgp_value_is_string {#function-mgp-value-is-string}

```cpp
enum mgp_error mgp_value_is_string(
    struct mgp_value * val,
    int * result
)
```

Result is non-zero if the given mgp_value stores a character string.

Current implementation always returns without errors.


### mgp_value_is_list {#function-mgp-value-is-list}

```cpp
enum mgp_error mgp_value_is_list(
    struct mgp_value * val,
    int * result
)
```

Result is non-zero if the given mgp_value stores a list of values.

Current implementation always returns without errors.


### mgp_value_is_map {#function-mgp-value-is-map}

```cpp
enum mgp_error mgp_value_is_map(
    struct mgp_value * val,
    int * result
)
```

Result is non-zero if the given mgp_value stores a map of values.

Current implementation always returns without errors.


### mgp_value_is_vertex {#function-mgp-value-is-vertex}

```cpp
enum mgp_error mgp_value_is_vertex(
    struct mgp_value * val,
    int * result
)
```

Result is non-zero if the given mgp_value stores a vertex.

Current implementation always returns without errors.


### mgp_value_is_edge {#function-mgp-value-is-edge}

```cpp
enum mgp_error mgp_value_is_edge(
    struct mgp_value * val,
    int * result
)
```

Result is non-zero if the given mgp_value stores an edge.

Current implementation always returns without errors.


### mgp_value_is_path {#function-mgp-value-is-path}

```cpp
enum mgp_error mgp_value_is_path(
    struct mgp_value * val,
    int * result
)
```

Result is non-zero if the given mgp_value stores a path.

Current implementation always returns without errors.


### mgp_value_is_date {#function-mgp-value-is-date}

```cpp
enum mgp_error mgp_value_is_date(
    struct mgp_value * val,
    int * result
)
```

Result is non-zero if the given mgp_value stores a date.

Current implementation always returns without errors.


### mgp_value_is_local_time {#function-mgp-value-is-local-time}

```cpp
enum mgp_error mgp_value_is_local_time(
    struct mgp_value * val,
    int * result
)
```

Result is non-zero if the given mgp_value stores a local time.

Current implementation always returns without errors.


### mgp_value_is_local_date_time {#function-mgp-value-is-local-date-time}

```cpp
enum mgp_error mgp_value_is_local_date_time(
    struct mgp_value * val,
    int * result
)
```

Result is non-zero if the given mgp_value stores a local date-time.

Current implementation always returns without errors.


### mgp_value_is_duration {#function-mgp-value-is-duration}

```cpp
enum mgp_error mgp_value_is_duration(
    struct mgp_value * val,
    int * result
)
```

Result is non-zero if the given mgp_value stores a duration.

Current implementation always returns without errors.


### mgp_value_get_bool {#function-mgp-value-get-bool}

```cpp
enum mgp_error mgp_value_get_bool(
    struct mgp_value * val,
    int * result
)
```

Get the contained boolean value.

Non-zero values represent `true`, while zero represents `false`. Result is undefined if mgp_value does not contain the expected type. Current implementation always returns without errors.


### mgp_value_get_int {#function-mgp-value-get-int}

```cpp
enum mgp_error mgp_value_get_int(
    struct mgp_value * val,
    int64_t * result
)
```

Get the contained integer.

Result is undefined if mgp_value does not contain the expected type. Current implementation always returns without errors.


### mgp_value_get_double {#function-mgp-value-get-double}

```cpp
enum mgp_error mgp_value_get_double(
    struct mgp_value * val,
    double * result
)
```

Get the contained double floating-point.

Result is undefined if mgp_value does not contain the expected type. Current implementation always returns without errors.


### mgp_value_get_string {#function-mgp-value-get-string}

```cpp
enum mgp_error mgp_value_get_string(
    struct mgp_value * val,
    const char ** result
)
```

Get the contained character string.

Result is undefined if mgp_value does not contain the expected type. Current implementation always returns without errors.


### mgp_value_get_list {#function-mgp-value-get-list}

```cpp
enum mgp_error mgp_value_get_list(
    struct mgp_value * val,
    struct mgp_list ** result
)
```

Get the contained list of values.

Result is undefined if mgp_value does not contain the expected type. Current implementation always returns without errors.


### mgp_value_get_map {#function-mgp-value-get-map}

```cpp
enum mgp_error mgp_value_get_map(
    struct mgp_value * val,
    struct mgp_map ** result
)
```

Get the contained map of values.

Result is undefined if mgp_value does not contain the expected type. Current implementation always returns without errors.


### mgp_value_get_vertex {#function-mgp-value-get-vertex}

```cpp
enum mgp_error mgp_value_get_vertex(
    struct mgp_value * val,
    struct mgp_vertex ** result
)
```

Get the contained vertex.

Result is undefined if mgp_value does not contain the expected type. Current implementation always returns without errors.


### mgp_value_get_edge {#function-mgp-value-get-edge}

```cpp
enum mgp_error mgp_value_get_edge(
    struct mgp_value * val,
    struct mgp_edge ** result
)
```

Get the contained edge.

Result is undefined if mgp_value does not contain the expected type. Current implementation always returns without errors.


### mgp_value_get_path {#function-mgp-value-get-path}

```cpp
enum mgp_error mgp_value_get_path(
    struct mgp_value * val,
    struct mgp_path ** result
)
```

Get the contained path.

Result is undefined if mgp_value does not contain the expected type. Current implementation always returns without errors.


### mgp_value_get_date {#function-mgp-value-get-date}

```cpp
enum mgp_error mgp_value_get_date(
    struct mgp_value * val,
    struct mgp_date ** result
)
```

Get the contained date.

Result is undefined if mgp_value does not contain the expected type. Current implementation always returns without errors.


### mgp_value_get_local_time {#function-mgp-value-get-local-time}

```cpp
enum mgp_error mgp_value_get_local_time(
    struct mgp_value * val,
    struct mgp_local_time ** result
)
```

Get the contained local time.

Result is undefined if mgp_value does not contain the expected type. Current implementation always returns without errors.


### mgp_value_get_local_date_time {#function-mgp-value-get-local-date-time}

```cpp
enum mgp_error mgp_value_get_local_date_time(
    struct mgp_value * val,
    struct mgp_local_date_time ** result
)
```

Get the contained local date-time.

Result is undefined if mgp_value does not contain the expected type. Current implementation always returns without errors.


### mgp_value_get_duration {#function-mgp-value-get-duration}

```cpp
enum mgp_error mgp_value_get_duration(
    struct mgp_value * val,
    struct mgp_duration ** result
)
```

Get the contained duration.

Result is undefined if mgp_value does not contain the expected type. Current implementation always returns without errors.


### mgp_list_make_empty {#function-mgp-list-make-empty}

```cpp
enum mgp_error mgp_list_make_empty(
    size_t capacity,
    struct mgp_memory * memory,
    struct mgp_list ** result
)
```

Create an empty list with given capacity.

You need to free the created instance with mgp_list_destroy. The created list will have allocated enough memory for `capacity` elements of mgp_value, but it will not contain any elements. Therefore, mgp_list_size will return 0. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to allocate a mgp_list.


### mgp_list_destroy {#function-mgp-list-destroy}

```cpp
void mgp_list_destroy(
    struct mgp_list * list
)
```

Free the memory used by the given mgp_list and contained elements.

### mgp_list_append {#function-mgp-list-append}

```cpp
enum mgp_error mgp_list_append(
    struct mgp_list * list,
    struct mgp_value * val
)
```

Append a copy of mgp_value to mgp_list if capacity allows.

The list copies the given value and therefore does not take ownership of the original value. You still need to call mgp_value_destroy to free the original value. Return MGP_ERROR_INSUFFICIENT_BUFFER if there's no capacity. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_value.


### mgp_list_append_extend {#function-mgp-list-append-extend}

```cpp
enum mgp_error mgp_list_append_extend(
    struct mgp_list * list,
    struct mgp_value * val
)
```

Append a copy of mgp_value to mgp_list increasing capacity if needed.

The list copies the given value and therefore does not take ownership of the original value. You still need to call mgp_value_destroy to free the original value. In case of a capacity change, the previously contained elements will move in memory and any references to them will be invalid. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_value.


### mgp_list_size {#function-mgp-list-size}

```cpp
enum mgp_error mgp_list_size(
    struct mgp_list * list,
    size_t * result
)
```

Get the number of elements stored in mgp_list.

Current implementation always returns without errors.


### mgp_list_capacity {#function-mgp-list-capacity}

```cpp
enum mgp_error mgp_list_capacity(
    struct mgp_list * list,
    size_t * result
)
```

Get the total number of elements for which there's already allocated memory in mgp_list.

Current implementation always returns without errors.


### mgp_list_at {#function-mgp-list-at}

```cpp
enum mgp_error mgp_list_at(
    struct mgp_list * list,
    size_t index,
    struct mgp_value ** result
)
```

Get the element in mgp_list at given position.

MGP_ERROR_OUT_OF_RANGE is returned if the index is not within mgp_list_size.


### mgp_map_make_empty {#function-mgp-map-make-empty}

```cpp
enum mgp_error mgp_map_make_empty(
    struct mgp_memory * memory,
    struct mgp_map ** result
)
```

Create an empty map of character strings to mgp_value instances.

You need to free the created instance with mgp_map_destroy. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to allocate a mgp_map.


### mgp_map_destroy {#function-mgp-map-destroy}

```cpp
void mgp_map_destroy(
    struct mgp_map * map
)
```

Free the memory used by the given mgp_map and contained items.

### mgp_map_insert {#function-mgp-map-insert}

```cpp
enum mgp_error mgp_map_insert(
    struct mgp_map * map,
    const char * key,
    struct mgp_value * value
)
```

Insert a new mapping from a NULL terminated character string to a value.

If a mapping with the same key already exists, it is _not_ replaced. In case of insertion, both the string and the value are copied into the map. Therefore, the map does not take ownership of the original key nor value, so you still need to free their memory explicitly. Return MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to allocate for insertion. Return MGP_ERROR_KEY_ALREADY_EXISTS if a previous mapping already exists.


### mgp_map_size {#function-mgp-map-size}

```cpp
enum mgp_error mgp_map_size(
    struct mgp_map * map,
    size_t * result
)
```

Get the number of items stored in mgp_map.

Current implementation always returns without errors.


### mgp_map_at {#function-mgp-map-at}

```cpp
enum mgp_error mgp_map_at(
    struct mgp_map * map,
    const char * key,
    struct mgp_value ** result
)
```

Get the mapped mgp_value to the given character string.

Result is NULL if no mapping exists.


### mgp_map_item_key {#function-mgp-map-item-key}

```cpp
enum mgp_error mgp_map_item_key(
    struct mgp_map_item * item,
    const char ** result
)
```

Get the key of the mapped item.

### mgp_map_item_value {#function-mgp-map-item-value}

```cpp
enum mgp_error mgp_map_item_value(
    struct mgp_map_item * item,
    struct mgp_value ** result
)
```

Get the value of the mapped item.

### mgp_map_iter_items {#function-mgp-map-iter-items}

```cpp
enum mgp_error mgp_map_iter_items(
    struct mgp_map * map,
    struct mgp_memory * memory,
    struct mgp_map_items_iterator ** result
)
```

Start iterating over items contained in the given map.

The resulting mgp_map_items_iterator needs to be deallocated with mgp_map_items_iterator_destroy. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to allocate a mgp_map_items_iterator.


### mgp_map_items_iterator_destroy {#function-mgp-map-items-iterator-destroy}

```cpp
void mgp_map_items_iterator_destroy(
    struct mgp_map_items_iterator * it
)
```

Deallocate memory used by mgp_map_items_iterator.

### mgp_map_items_iterator_get {#function-mgp-map-items-iterator-get}

```cpp
enum mgp_error mgp_map_items_iterator_get(
    struct mgp_map_items_iterator * it,
    struct mgp_map_item ** result
)
```

Get the current item pointed to by the iterator.

When the mgp_map_items_iterator_next is invoked, the returned pointer to mgp_map_item becomes invalid. On the other hand, pointers obtained with mgp_map_item_key and mgp_map_item_value remain valid throughout the lifetime of a map. Therefore, you can store the key as well as the value before, and use them after invoking mgp_map_items_iterator_next. Result is NULL if the end of the iteration has been reached.


### mgp_map_items_iterator_next {#function-mgp-map-items-iterator-next}

```cpp
enum mgp_error mgp_map_items_iterator_next(
    struct mgp_map_items_iterator * it,
    struct mgp_map_item ** result
)
```

Advance the iterator to the next item stored in map and return it.

The previous pointer obtained through mgp_map_items_iterator_get will be invalidated, but the pointers to key and value will remain valid. Result is NULL if the end of the iteration has been reached.


### mgp_path_make_with_start {#function-mgp-path-make-with-start}

```cpp
enum mgp_error mgp_path_make_with_start(
    struct mgp_vertex * vertex,
    struct mgp_memory * memory,
    struct mgp_path ** result
)
```

Create a path with the copy of the given starting vertex.

You need to free the created instance with mgp_path_destroy. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to allocate a mgp_path.


### mgp_path_copy {#function-mgp-path-copy}

```cpp
enum mgp_error mgp_path_copy(
    struct mgp_path * path,
    struct mgp_memory * memory,
    struct mgp_path ** result
)
```

Copy a mgp_path.

Returned pointer must be freed with mgp_path_destroy. MGP_ERROR_UNABLE_TO_ALLOCATE is returned if unable to allocate a mgp_path.


### mgp_path_destroy {#function-mgp-path-destroy}

```cpp
void mgp_path_destroy(
    struct mgp_path * path
)
```

Free the memory used by the given mgp_path and contained vertices and edges.

### mgp_path_expand {#function-mgp-path-expand}

```cpp
enum mgp_error mgp_path_expand(
    struct mgp_path * path,
    struct mgp_edge * edge
)
```

Append an edge continuing from the last vertex on the path.

The edge is copied into the path. Therefore, the path does not take ownership of the original edge, so you still need to free the edge memory explicitly. The last vertex on the path will become the other endpoint of the given edge, as continued from the current last vertex. Return MGP_ERROR_LOGIC_ERROR if the current last vertex in the path is not part of the given edge. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate memory for path extension.


### mgp_path_size {#function-mgp-path-size}

```cpp
enum mgp_error mgp_path_size(
    struct mgp_path * path,
    size_t * result
)
```

Get the number of edges in a mgp_path.

Current implementation always returns without errors.


### mgp_path_vertex_at {#function-mgp-path-vertex-at}

```cpp
enum mgp_error mgp_path_vertex_at(
    struct mgp_path * path,
    size_t index,
    struct mgp_vertex ** result
)
```

Get the vertex from a path at given index.

The valid index range is [0, mgp_path_size]. MGP_ERROR_OUT_OF_RANGE is returned if index is out of range.


### mgp_path_edge_at {#function-mgp-path-edge-at}

```cpp
enum mgp_error mgp_path_edge_at(
    struct mgp_path * path,
    size_t index,
    struct mgp_edge ** result
)
```

Get the edge from a path at given index.

The valid index range is [0, mgp_path_size - 1]. MGP_ERROR_OUT_OF_RANGE is returned if index is out of range.


### mgp_path_equal {#function-mgp-path-equal}

```cpp
enum mgp_error mgp_path_equal(
    struct mgp_path * p1,
    struct mgp_path * p2,
    int * result
)
```

Result is non-zero if given paths are equal, otherwise 0.

### mgp_result_set_error_msg {#function-mgp-result-set-error-msg}

```cpp
enum mgp_error mgp_result_set_error_msg(
    struct mgp_result * res,
    const char * error_msg
)
```

Set the error as the result of the procedure.

Return MGP_ERROR_UNABLE_TO_ALLOCATE ff there's no memory for copying the error message.


### mgp_result_new_record {#function-mgp-result-new-record}

```cpp
enum mgp_error mgp_result_new_record(
    struct mgp_result * res,
    struct mgp_result_record ** result
)
```

Create a new record for results.

The previously obtained mgp_result_record pointer is no longer valid, and you must not use it. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_result_record.


### mgp_result_record_insert {#function-mgp-result-record-insert}

```cpp
enum mgp_error mgp_result_record_insert(
    struct mgp_result_record * record,
    const char * field_name,
    struct mgp_value * val
)
```

Assign a value to a field in the given record.

Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate memory to copy the mgp_value to mgp_result_record. Return MGP_ERROR_OUT_OF_RANGE if there is no field named `field_name`. Return MGP_ERROR_LOGIC_ERROR `val` does not satisfy the type of the field name `field_name`.


### mgp_properties_iterator_destroy {#function-mgp-properties-iterator-destroy}

```cpp
void mgp_properties_iterator_destroy(
    struct mgp_properties_iterator * it
)
```

Free the memory used by a mgp_properties_iterator.

### mgp_properties_iterator_get {#function-mgp-properties-iterator-get}

```cpp
enum mgp_error mgp_properties_iterator_get(
    struct mgp_properties_iterator * it,
    struct mgp_property ** result
)
```

Get the current property pointed to by the iterator.

When the mgp_properties_iterator_next is invoked, the previous [mgp_property](#mgp_property) is invalidated and its value must not be used. Result is NULL if the end of the iteration has been reached.


### mgp_properties_iterator_next {#function-mgp-properties-iterator-next}

```cpp
enum mgp_error mgp_properties_iterator_next(
    struct mgp_properties_iterator * it,
    struct mgp_property ** result
)
```

Advance the iterator to the next property and return it.

The previous [mgp_property](#mgp_property) obtained through mgp_properties_iterator_get will be invalidated, and you must not use its value. Result is NULL if the end of the iteration has been reached. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a [mgp_property](#mgp_property).


### mgp_edges_iterator_destroy {#function-mgp-edges-iterator-destroy}

```cpp
void mgp_edges_iterator_destroy(
    struct mgp_edges_iterator * it
)
```

Free the memory used by a mgp_edges_iterator.

### mgp_vertex_get_id {#function-mgp-vertex-get-id}

```cpp
enum mgp_error mgp_vertex_get_id(
    struct mgp_vertex * v,
    struct mgp_vertex_id * result
)
```

Get the ID of given vertex.

### mgp_vertex_underlying_graph_is_mutable {#function-mgp-vertex-underlying-graph-is-mutable}

```cpp
enum mgp_error mgp_vertex_underlying_graph_is_mutable(
    struct mgp_vertex * v,
    int * result
)
```

Result is non-zero if the vertex can be modified.

The mutability of the vertex is the same as the graph which it is part of. If a vertex is immutable, then edges cannot be created or deleted, properties and labels cannot be set or removed and all of the returned edges will be immutable also. Current implementation always returns without errors.


### mgp_vertex_set_property {#function-mgp-vertex-set-property}

```cpp
enum mgp_error mgp_vertex_set_property(
    struct mgp_vertex * v,
    const char * property_name,
    struct mgp_value * property_value
)
```

Set the value of a property on a vertex.

When the value is `null`, then the property is removed from the vertex. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate memory for storing the property. Return MGP_ERROR_IMMUTABLE_OBJECT if `v` is immutable. Return MGP_ERROR_DELETED_OBJECT if `v` has been deleted. Return MGP_ERROR_SERIALIZATION_ERROR if `v` has been modified by another transaction. Return MGP_ERROR_VALUE_CONVERSION if `property_value` is vertex, edge or path.


### mgp_vertex_add_label {#function-mgp-vertex-add-label}

```cpp
enum mgp_error mgp_vertex_add_label(
    struct mgp_vertex * v,
    struct mgp_label label
)
```

Add the label to the vertex.

If the vertex already has the label, this function does nothing. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate memory for storing the label. Return MGP_ERROR_IMMUTABLE_OBJECT if `v` is immutable. Return MGP_ERROR_DELETED_OBJECT if `v` has been deleted. Return MGP_ERROR_SERIALIZATION_ERROR if `v` has been modified by another transaction.


### mgp_vertex_remove_label {#function-mgp-vertex-remove-label}

```cpp
enum mgp_error mgp_vertex_remove_label(
    struct mgp_vertex * v,
    struct mgp_label label
)
```

Remove the label from the vertex.

If the vertex doesn't have the label, this function does nothing. Return MGP_ERROR_IMMUTABLE_OBJECT if `v` is immutable. Return MGP_ERROR_DELETED_OBJECT if `v` has been deleted. Return MGP_ERROR_SERIALIZATION_ERROR if `v` has been modified by another transaction.


### mgp_vertex_copy {#function-mgp-vertex-copy}

```cpp
enum mgp_error mgp_vertex_copy(
    struct mgp_vertex * v,
    struct mgp_memory * memory,
    struct mgp_vertex ** result
)
```

Copy a mgp_vertex.

Resulting pointer must be freed with mgp_vertex_destroy. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_vertex.


### mgp_vertex_destroy {#function-mgp-vertex-destroy}

```cpp
void mgp_vertex_destroy(
    struct mgp_vertex * v
)
```

Free the memory used by a mgp_vertex.

### mgp_vertex_equal {#function-mgp-vertex-equal}

```cpp
enum mgp_error mgp_vertex_equal(
    struct mgp_vertex * v1,
    struct mgp_vertex * v2,
    int * result
)
```

Result is non-zero if given vertices are equal, otherwise 0.

### mgp_vertex_labels_count {#function-mgp-vertex-labels-count}

```cpp
enum mgp_error mgp_vertex_labels_count(
    struct mgp_vertex * v,
    size_t * result
)
```

Get the number of labels a given vertex has.

Return MGP_ERROR_DELETED_OBJECT if `v` has been deleted.


### mgp_vertex_label_at {#function-mgp-vertex-label-at}

```cpp
enum mgp_error mgp_vertex_label_at(
    struct mgp_vertex * v,
    size_t index,
    struct mgp_label * result
)
```

Get [mgp_label](#mgp_label) in mgp_vertex at given index.

Return MGP_ERROR_OUT_OF_RANGE if the index is out of range. Return MGP_ERROR_DELETED_OBJECT if `v` has been deleted.


### mgp_vertex_has_label {#function-mgp-vertex-has-label}

```cpp
enum mgp_error mgp_vertex_has_label(
    struct mgp_vertex * v,
    struct mgp_label label,
    int * result
)
```

Result is non-zero if the given vertex has the given label.

Return MGP_ERROR_DELETED_OBJECT if `v` has been deleted.


### mgp_vertex_has_label_named {#function-mgp-vertex-has-label-named}

```cpp
enum mgp_error mgp_vertex_has_label_named(
    struct mgp_vertex * v,
    const char * label_name,
    int * result
)
```

Result is non-zero if the given vertex has a label with given name.

Return MGP_ERROR_DELETED_OBJECT if `v` has been deleted.


### mgp_vertex_get_property {#function-mgp-vertex-get-property}

```cpp
enum mgp_error mgp_vertex_get_property(
    struct mgp_vertex * v,
    const char * property_name,
    struct mgp_memory * memory,
    struct mgp_value ** result
)
```

Get a copy of a vertex property mapped to a given name.

Resulting value must be freed with mgp_value_destroy. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_value. Return MGP_ERROR_DELETED_OBJECT if `v` has been deleted.


### mgp_vertex_iter_properties {#function-mgp-vertex-iter-properties}

```cpp
enum mgp_error mgp_vertex_iter_properties(
    struct mgp_vertex * v,
    struct mgp_memory * memory,
    struct mgp_properties_iterator ** result
)
```

Start iterating over properties stored in the given vertex.

The properties of the vertex are copied when the iterator is created, therefore later changes won't affect them. The resulting mgp_properties_iterator needs to be deallocated with mgp_properties_iterator_destroy. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_properties_iterator. Return MGP_ERROR_DELETED_OBJECT if `v` has been deleted.


### mgp_vertex_iter_in_edges {#function-mgp-vertex-iter-in-edges}

```cpp
enum mgp_error mgp_vertex_iter_in_edges(
    struct mgp_vertex * v,
    struct mgp_memory * memory,
    struct mgp_edges_iterator ** result
)
```

Start iterating over inbound edges of the given vertex. When the first parameter to a procedure is a projected graph, iterating will start over the inbound edges of the given vertex in the projected graph.

The connection information of the vertex is copied when the iterator is created, therefore later creation or deletion of edges won't affect the iterated edges, however the property changes on the edges will be visible. The resulting mgp_edges_iterator needs to be deallocated with mgp_edges_iterator_destroy. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_edges_iterator. Return MGP_ERROR_DELETED_OBJECT if `v` has been deleted.


### mgp_vertex_iter_out_edges {#function-mgp-vertex-iter-out-edges}

```cpp
enum mgp_error mgp_vertex_iter_out_edges(
    struct mgp_vertex * v,
    struct mgp_memory * memory,
    struct mgp_edges_iterator ** result
)
```

Start iterating over outbound edges of the given vertex. When the first parameter to a procedure is a projected graph, iterating will start over the inbound edges of the given vertex in the projected graph.

The connection information of the vertex is copied when the iterator is created, therefore later creation or deletion of edges won't affect the iterated edges, however the property changes on the edges will be visible. The resulting mgp_edges_iterator needs to be deallocated with mgp_edges_iterator_destroy. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_edges_iterator. Return MGP_ERROR_DELETED_OBJECT if `v` has been deleted.


### mgp_edges_iterator_underlying_graph_is_mutable {#function-mgp-edges-iterator-underlying-graph-is-mutable}

```cpp
enum mgp_error mgp_edges_iterator_underlying_graph_is_mutable(
    struct mgp_edges_iterator * it,
    int * result
)
```

Result is non-zero if the edges returned by this iterator can be modified.

The mutability of the mgp_edges_iterator is the same as the graph which it belongs to. Current implementation always returns without errors.


### mgp_edges_iterator_get {#function-mgp-edges-iterator-get}

```cpp
enum mgp_error mgp_edges_iterator_get(
    struct mgp_edges_iterator * it,
    struct mgp_edge ** result
)
```

Get the current edge pointed to by the iterator.

When the mgp_edges_iterator_next is invoked, the previous mgp_edge is invalidated and its value must not be used. Result is NULL if the end of the iteration has been reached.


### mgp_edges_iterator_next {#function-mgp-edges-iterator-next}

```cpp
enum mgp_error mgp_edges_iterator_next(
    struct mgp_edges_iterator * it,
    struct mgp_edge ** result
)
```

Advance the iterator to the next edge and return it.

The previous mgp_edge obtained through mgp_edges_iterator_get will be invalidated, and you must not use its value. Result is NULL if the end of the iteration has been reached. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_edge.


### mgp_edge_get_id {#function-mgp-edge-get-id}

```cpp
enum mgp_error mgp_edge_get_id(
    struct mgp_edge * e,
    struct mgp_edge_id * result
)
```

Get the ID of given edge.

### mgp_edge_underlying_graph_is_mutable {#function-mgp-edge-underlying-graph-is-mutable}

```cpp
enum mgp_error mgp_edge_underlying_graph_is_mutable(
    struct mgp_edge * e,
    int * result
)
```

Result is non-zero if the edge can be modified.

The mutability of the edge is the same as the graph which it is part of. If an edge is immutable, properties cannot be set or removed and all of the returned vertices will be immutable also. Current implementation always returns without errors.


### mgp_edge_copy {#function-mgp-edge-copy}

```cpp
enum mgp_error mgp_edge_copy(
    struct mgp_edge * e,
    struct mgp_memory * memory,
    struct mgp_edge ** result
)
```

Copy a mgp_edge.

Resulting pointer must be freed with mgp_edge_destroy. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_edge.


### mgp_edge_destroy {#function-mgp-edge-destroy}

```cpp
void mgp_edge_destroy(
    struct mgp_edge * e
)
```

Free the memory used by a mgp_edge.

### mgp_edge_equal {#function-mgp-edge-equal}

```cpp
enum mgp_error mgp_edge_equal(
    struct mgp_edge * e1,
    struct mgp_edge * e2,
    int * result
)
```

Result is non-zero if given edges are equal, otherwise 0.

### mgp_edge_get_type {#function-mgp-edge-get-type}

```cpp
enum mgp_error mgp_edge_get_type(
    struct mgp_edge * e,
    struct mgp_edge_type * result
)
```

Get the type of the given edge.

### mgp_edge_get_from {#function-mgp-edge-get-from}

```cpp
enum mgp_error mgp_edge_get_from(
    struct mgp_edge * e,
    struct mgp_vertex ** result
)
```

Get the source vertex of the given edge.

Resulting vertex is valid until the edge is valid and it must not be used afterwards. Current implementation always returns without errors.


### mgp_edge_get_to {#function-mgp-edge-get-to}

```cpp
enum mgp_error mgp_edge_get_to(
    struct mgp_edge * e,
    struct mgp_vertex ** result
)
```

Get the destination vertex of the given edge.

Resulting vertex is valid until the edge is valid and it must not be used afterwards. Current implementation always returns without errors.


### mgp_edge_get_property {#function-mgp-edge-get-property}

```cpp
enum mgp_error mgp_edge_get_property(
    struct mgp_edge * e,
    const char * property_name,
    struct mgp_memory * memory,
    struct mgp_value ** result
)
```

Get a copy of a edge property mapped to a given name.

Resulting value must be freed with mgp_value_destroy. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_value. Return MGP_ERROR_DELETED_OBJECT if `e` has been deleted.


### mgp_edge_set_property {#function-mgp-edge-set-property}

```cpp
enum mgp_error mgp_edge_set_property(
    struct mgp_edge * e,
    const char * property_name,
    struct mgp_value * property_value
)
```

Set the value of a property on an edge.

When the value is `null`, then the property is removed from the edge. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate memory for storing the property. Return MGP_ERROR_IMMUTABLE_OBJECT if `e` is immutable. Return MGP_ERROR_DELETED_OBJECT if `e` has been deleted. Return MGP_ERROR_LOGIC_ERROR if properties on edges are disabled. Return MGP_ERROR_SERIALIZATION_ERROR if `e` has been modified by another transaction. Return MGP_ERROR_VALUE_CONVERSION if `property_value` is vertex, edge or path.


### mgp_edge_iter_properties {#function-mgp-edge-iter-properties}

```cpp
enum mgp_error mgp_edge_iter_properties(
    struct mgp_edge * e,
    struct mgp_memory * memory,
    struct mgp_properties_iterator ** result
)
```

Start iterating over properties stored in the given edge.

The properties of the edge are copied when the iterator is created, therefore later changes won't affect them. Resulting mgp_properties_iterator needs to be deallocated with mgp_properties_iterator_destroy. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_properties_iterator. Return MGP_ERROR_DELETED_OBJECT if `e` has been deleted.


### mgp_graph_get_vertex_by_id {#function-mgp-graph-get-vertex-by-id}

```cpp
enum mgp_error mgp_graph_get_vertex_by_id(
    struct mgp_graph * g,
    struct mgp_vertex_id id,
    struct mgp_memory * memory,
    struct mgp_vertex ** result
)
```

Get the vertex corresponding to given ID, or NULL if no such vertex exists. When the first parameter to a procedure is a projected graph, the vertex must also exist in the projected graph.

Resulting vertex must be freed using mgp_vertex_destroy. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate the vertex.


### mgp_graph_is_mutable {#function-mgp-graph-is-mutable}

```cpp
enum mgp_error mgp_graph_is_mutable(
    struct mgp_graph * graph,
    int * result
)
```

Result is non-zero if the graph can be modified.

If a graph is immutable, then vertices cannot be created or deleted, and all of the returned vertices will be immutable also. The same applies for edges. Current implementation always returns without errors.


### mgp_graph_create_vertex {#function-mgp-graph-create-vertex}

```cpp
enum mgp_error mgp_graph_create_vertex(
    struct mgp_graph * graph,
    struct mgp_memory * memory,
    struct mgp_vertex ** result
)
```

Add a new vertex to the graph. When the first parameter to a procedure is a projected graph, the vertex is also added to the projected graph view.

Resulting vertex must be freed using mgp_vertex_destroy. Return MGP_ERROR_IMMUTABLE_OBJECT if `graph` is immutable. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_vertex.


### mgp_graph_delete_vertex {#function-mgp-graph-delete-vertex}

```cpp
enum mgp_error mgp_graph_delete_vertex(
    struct mgp_graph * graph,
    struct mgp_vertex * vertex
)
```

Delete a vertex from the graph. When the first parameter to a procedure is a projected graph, the vertex must also exist in the projected graph.

Return MGP_ERROR_IMMUTABLE_OBJECT if `graph` is immutable. Return MGP_ERROR_LOGIC_ERROR if `vertex` has edges. Return MGP_ERROR_SERIALIZATION_ERROR if `vertex` has been modified by another transaction.


### mgp_graph_detach_delete_vertex {#function-mgp-graph-detach-delete-vertex}

```cpp
enum mgp_error mgp_graph_detach_delete_vertex(
    struct mgp_graph * graph,
    struct mgp_vertex * vertex
)
```

Delete a vertex and all of its edges from the graph. When the first parameter to a procedure is a projected graph, such an operation is not possible. 

Return MGP_ERROR_IMMUTABLE_OBJECT if `graph` is immutable. Return MGP_ERROR_SERIALIZATION_ERROR if `vertex` has been modified by another transaction.


### mgp_graph_create_edge {#function-mgp-graph-create-edge}

```cpp
enum mgp_error mgp_graph_create_edge(
    struct mgp_graph * graph,
    struct mgp_vertex * from,
    struct mgp_vertex * to,
    struct mgp_edge_type type,
    struct mgp_memory * memory,
    struct mgp_edge ** result
)
```

Add a new directed edge between the two vertices with the specified label. When the first parameter is a projected graph, it will create a new directed edge with the specified label only if both vertices are a part of the projected graph.

Resulting edge must be freed using mgp_edge_destroy. Return MGP_ERROR_IMMUTABLE_OBJECT if `graph` is immutable. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_edge. Return MGP_ERROR_DELETED_OBJECT if `from` or `to` has been deleted. Return MGP_ERROR_SERIALIZATION_ERROR if `from` or `to` has been modified by another transaction.


### mgp_graph_delete_edge {#function-mgp-graph-delete-edge}

```cpp
enum mgp_error mgp_graph_delete_edge(
    struct mgp_graph * graph,
    struct mgp_edge * edge
)
```

Delete an edge from the graph. When the first parameter to a procedure is a projected graph, the edge must also exist in the projected graph.

Return MGP_ERROR_IMMUTABLE_OBJECT if `graph` is immutable. Return MGP_ERROR_SERIALIZATION_ERROR if `edge`, its source or destination vertex has been modified by another transaction.


### mgp_vertices_iterator_destroy {#function-mgp-vertices-iterator-destroy}

```cpp
void mgp_vertices_iterator_destroy(
    struct mgp_vertices_iterator * it
)
```

Free the memory used by a mgp_vertices_iterator.

### mgp_graph_iter_vertices {#function-mgp-graph-iter-vertices}

```cpp
enum mgp_error mgp_graph_iter_vertices(
    struct mgp_graph * g,
    struct mgp_memory * memory,
    struct mgp_vertices_iterator ** result
)
```

Start iterating over vertices of the given graph.

Resulting mgp_vertices_iterator needs to be deallocated with mgp_vertices_iterator_destroy. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_vertices_iterator.


### mgp_vertices_iterator_underlying_graph_is_mutable {#function-mgp-vertices-iterator-underlying-graph-is-mutable}

```cpp
enum mgp_error mgp_vertices_iterator_underlying_graph_is_mutable(
    struct mgp_vertices_iterator * it,
    int * result
)
```

Result is non-zero if the vertices returned by this iterator can be modified.

The mutability of the mgp_vertices_iterator is the same as the graph which it belongs to. Current implementation always returns without errors.


### mgp_vertices_iterator_get {#function-mgp-vertices-iterator-get}

```cpp
enum mgp_error mgp_vertices_iterator_get(
    struct mgp_vertices_iterator * it,
    struct mgp_vertex ** result
)
```

Get the current vertex pointed to by the iterator.

When the mgp_vertices_iterator_next is invoked, the previous mgp_vertex is invalidated and its value must not be used. Result is NULL if the end of the iteration has been reached.


### mgp_date_from_string {#function-mgp-date-from-string}

```cpp
enum mgp_error mgp_date_from_string(
    const char * string,
    struct mgp_memory * memory,
    struct mgp_date ** date
)
```

Create a date from a string following the ISO 8601 format.

Resulting date must be freed with mgp_date_destroy. Return MGP_ERROR_INVALID_ARGUMENT if the string cannot be parsed correctly. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_date.


### mgp_date_from_parameters {#function-mgp-date-from-parameters}

```cpp
enum mgp_error mgp_date_from_parameters(
    struct mgp_date_parameters * parameters,
    struct mgp_memory * memory,
    struct mgp_date ** date
)
```

Create a date from mgp_date_parameter.

Resulting date must be freed with mgp_date_destroy. Return MGP_ERROR_INVALID_ARGUMENT if the parameters cannot be parsed correctly. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_date.


### mgp_date_copy {#function-mgp-date-copy}

```cpp
enum mgp_error mgp_date_copy(
    struct mgp_date * date,
    struct mgp_memory * memory,
    struct mgp_date ** result
)
```

Copy a mgp_date.

Resulting pointer must be freed with mgp_date_destroy. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_date.


### mgp_date_destroy {#function-mgp-date-destroy}

```cpp
void mgp_date_destroy(
    struct mgp_date * date
)
```

Free the memory used by a mgp_date.

### mgp_date_equal {#function-mgp-date-equal}

```cpp
enum mgp_error mgp_date_equal(
    struct mgp_date * first,
    struct mgp_date * second,
    int * result
)
```

Result is non-zero if given dates are equal, otherwise 0.

### mgp_date_get_year {#function-mgp-date-get-year}

```cpp
enum mgp_error mgp_date_get_year(
    struct mgp_date * date,
    int * year
)
```

Get the year property of the date.

### mgp_date_get_month {#function-mgp-date-get-month}

```cpp
enum mgp_error mgp_date_get_month(
    struct mgp_date * date,
    int * month
)
```

Get the month property of the date.

### mgp_date_get_day {#function-mgp-date-get-day}

```cpp
enum mgp_error mgp_date_get_day(
    struct mgp_date * date,
    int * day
)
```

Get the day property of the date.

### mgp_date_timestamp {#function-mgp-date-timestamp}

```cpp
enum mgp_error mgp_date_timestamp(
    struct mgp_date * date,
    int64_t * timestamp
)
```

Get the date as microseconds from Unix epoch.

### mgp_date_now {#function-mgp-date-now}

```cpp
enum mgp_error mgp_date_now(
    struct mgp_memory * memory,
    struct mgp_date ** date
)
```

Get the date representing current date.

Resulting date must be freed with mgp_date_destroy. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_date.


### mgp_date_add_duration {#function-mgp-date-add-duration}

```cpp
enum mgp_error mgp_date_add_duration(
    struct mgp_date * date,
    struct mgp_duration * dur,
    struct mgp_memory * memory,
    struct mgp_date ** result
)
```

Add a duration to the date.

Resulting date must be freed with mgp_date_destroy. Return MGP_ERROR_INVALID_ARGUMENT if the operation results in an invalid date. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_date.


### mgp_date_sub_duration {#function-mgp-date-sub-duration}

```cpp
enum mgp_error mgp_date_sub_duration(
    struct mgp_date * date,
    struct mgp_duration * dur,
    struct mgp_memory * memory,
    struct mgp_date ** result
)
```

Subtract a duration from the date.

Resulting date must be freed with mgp_date_destroy. Return MGP_ERROR_INVALID_ARGUMENT if the operation results in an invalid date. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_date.


### mgp_date_diff {#function-mgp-date-diff}

```cpp
enum mgp_error mgp_date_diff(
    struct mgp_date * first,
    struct mgp_date * second,
    struct mgp_memory * memory,
    struct mgp_duration ** result
)
```

Get a duration between two dates.

Resulting duration must be freed with mgp_duration_destroy. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_date.


### mgp_local_time_from_string {#function-mgp-local-time-from-string}

```cpp
enum mgp_error mgp_local_time_from_string(
    const char * string,
    struct mgp_memory * memory,
    struct mgp_local_time ** local_time
)
```

Create a local time from a string following the ISO 8601 format.

Resulting local time must be freed with mgp_local_time_destroy. Return MGP_ERROR_INVALID_ARGUMENT if the string cannot be parsed correctly. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_date.


### mgp_local_time_from_parameters {#function-mgp-local-time-from-parameters}

```cpp
enum mgp_error mgp_local_time_from_parameters(
    struct mgp_local_time_parameters * parameters,
    struct mgp_memory * memory,
    struct mgp_local_time ** local_time
)
```

Create a local time from [mgp_local_time_parameters](#mgp_local_time_parameters).

Resulting local time must be freed with mgp_local_time_destroy. Return MGP_ERROR_INVALID_ARGUMENT if the parameters cannot be parsed correctly. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_date.


### mgp_local_time_copy {#function-mgp-local-time-copy}

```cpp
enum mgp_error mgp_local_time_copy(
    struct mgp_local_time * local_time,
    struct mgp_memory * memory,
    struct mgp_local_time ** result
)
```

Copy a mgp_local_time.

Resulting pointer must be freed with mgp_local_time_destroy. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_date.


### mgp_local_time_destroy {#function-mgp-local-time-destroy}

```cpp
void mgp_local_time_destroy(
    struct mgp_local_time * local_time
)
```

Free the memory used by a mgp_local_time.

### mgp_local_time_equal {#function-mgp-local-time-equal}

```cpp
enum mgp_error mgp_local_time_equal(
    struct mgp_local_time * first,
    struct mgp_local_time * second,
    int * result
)
```

Result is non-zero if given local times are equal, otherwise 0.

### mgp_local_time_get_hour {#function-mgp-local-time-get-hour}

```cpp
enum mgp_error mgp_local_time_get_hour(
    struct mgp_local_time * local_time,
    int * hour
)
```

Get the hour property of the local time.

### mgp_local_time_get_minute {#function-mgp-local-time-get-minute}

```cpp
enum mgp_error mgp_local_time_get_minute(
    struct mgp_local_time * local_time,
    int * minute
)
```

Get the minute property of the local time.

### mgp_local_time_get_second {#function-mgp-local-time-get-second}

```cpp
enum mgp_error mgp_local_time_get_second(
    struct mgp_local_time * local_time,
    int * second
)
```

Get the second property of the local time.

### mgp_local_time_get_millisecond {#function-mgp-local-time-get-millisecond}

```cpp
enum mgp_error mgp_local_time_get_millisecond(
    struct mgp_local_time * local_time,
    int * millisecond
)
```

Get the millisecond property of the local time.

### mgp_local_time_get_microsecond {#function-mgp-local-time-get-microsecond}

```cpp
enum mgp_error mgp_local_time_get_microsecond(
    struct mgp_local_time * local_time,
    int * microsecond
)
```

Get the microsecond property of the local time.

### mgp_local_time_timestamp {#function-mgp-local-time-timestamp}

```cpp
enum mgp_error mgp_local_time_timestamp(
    struct mgp_local_time * local_time,
    int64_t * timestamp
)
```

Get the local time as microseconds from midnight.

### mgp_local_time_now {#function-mgp-local-time-now}

```cpp
enum mgp_error mgp_local_time_now(
    struct mgp_memory * memory,
    struct mgp_local_time ** local_time
)
```

Get the local time representing current time.

Resulting pointer must be freed with mgp_local_time_destroy. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_date.


### mgp_local_time_add_duration {#function-mgp-local-time-add-duration}

```cpp
enum mgp_error mgp_local_time_add_duration(
    struct mgp_local_time * local_time,
    struct mgp_duration * dur,
    struct mgp_memory * memory,
    struct mgp_local_time ** result
)
```

Add a duration to the local time.

Resulting pointer must be freed with mgp_local_time_destroy. Return MGP_ERROR_INVALID_ARGUMENT if the operation results in an invalid local time. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_date.


### mgp_local_time_sub_duration {#function-mgp-local-time-sub-duration}

```cpp
enum mgp_error mgp_local_time_sub_duration(
    struct mgp_local_time * local_time,
    struct mgp_duration * dur,
    struct mgp_memory * memory,
    struct mgp_local_time ** result
)
```

Subtract a duration from the local time.

Resulting pointer must be freed with mgp_local_time_destroy. Return MGP_ERROR_INVALID_ARGUMENT if the operation results in an invalid local time. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_date.


### mgp_local_time_diff {#function-mgp-local-time-diff}

```cpp
enum mgp_error mgp_local_time_diff(
    struct mgp_local_time * first,
    struct mgp_local_time * second,
    struct mgp_memory * memory,
    struct mgp_duration ** result
)
```

Get a duration between two local times.

Resulting pointer must be freed with mgp_duration_destroy. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_date.


### mgp_local_date_time_from_string {#function-mgp-local-date-time-from-string}

```cpp
enum mgp_error mgp_local_date_time_from_string(
    const char * string,
    struct mgp_memory * memory,
    struct mgp_local_date_time ** local_date_time
)
```

Create a local date-time from a string following the ISO 8601 format.

Resulting local date-time must be freed with mgp_local_date_time_destroy. Return MGP_ERROR_INVALID_ARGUMENT if the string cannot be parsed correctly. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_local_date_time.


### mgp_local_date_time_from_parameters {#function-mgp-local-date-time-from-parameters}

```cpp
enum mgp_error mgp_local_date_time_from_parameters(
    struct mgp_local_date_time_parameters * parameters,
    struct mgp_memory * memory,
    struct mgp_local_date_time ** local_date_time
)
```

Create a local date-time from [mgp_local_date_time_parameters](#mgp_local_date_time_parameters).

Resulting local date-time must be freed with mgp_local_date_time_destroy. Return MGP_ERROR_INVALID_ARGUMENT if the parameters cannot be parsed correctly. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_local_date_time.


### mgp_local_date_time_copy {#function-mgp-local-date-time-copy}

```cpp
enum mgp_error mgp_local_date_time_copy(
    struct mgp_local_date_time * local_date_time,
    struct mgp_memory * memory,
    struct mgp_local_date_time ** result
)
```

Copy a mgp_local_date_time.

Resulting pointer must be freed with mgp_local_date_time_destroy. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_local_date_time.


### mgp_local_date_time_destroy {#function-mgp-local-date-time-destroy}

```cpp
void mgp_local_date_time_destroy(
    struct mgp_local_date_time * local_date_time
)
```

Free the memory used by a mgp_local_date_time.

### mgp_local_date_time_equal {#function-mgp-local-date-time-equal}

```cpp
enum mgp_error mgp_local_date_time_equal(
    struct mgp_local_date_time * first,
    struct mgp_local_date_time * second,
    int * result
)
```

Result is non-zero if given local date-times are equal, otherwise 0.

### mgp_local_date_time_get_year {#function-mgp-local-date-time-get-year}

```cpp
enum mgp_error mgp_local_date_time_get_year(
    struct mgp_local_date_time * local_date_time,
    int * year
)
```

Get the year property of the local date-time.

### mgp_local_date_time_get_month {#function-mgp-local-date-time-get-month}

```cpp
enum mgp_error mgp_local_date_time_get_month(
    struct mgp_local_date_time * local_date_time,
    int * month
)
```

Get the month property of the local date-time.

### mgp_local_date_time_get_day {#function-mgp-local-date-time-get-day}

```cpp
enum mgp_error mgp_local_date_time_get_day(
    struct mgp_local_date_time * local_date_time,
    int * day
)
```

Get the day property of the local date-time.

### mgp_local_date_time_get_hour {#function-mgp-local-date-time-get-hour}

```cpp
enum mgp_error mgp_local_date_time_get_hour(
    struct mgp_local_date_time * local_date_time,
    int * hour
)
```

Get the hour property of the local date-time.

### mgp_local_date_time_get_minute {#function-mgp-local-date-time-get-minute}

```cpp
enum mgp_error mgp_local_date_time_get_minute(
    struct mgp_local_date_time * local_date_time,
    int * minute
)
```

Get the minute property of the local date-time.

### mgp_local_date_time_get_second {#function-mgp-local-date-time-get-second}

```cpp
enum mgp_error mgp_local_date_time_get_second(
    struct mgp_local_date_time * local_date_time,
    int * second
)
```

Get the second property of the local date-time.

### mgp_local_date_time_get_millisecond {#function-mgp-local-date-time-get-millisecond}

```cpp
enum mgp_error mgp_local_date_time_get_millisecond(
    struct mgp_local_date_time * local_date_time,
    int * millisecond
)
```

Get the milisecond property of the local date-time.

### mgp_local_date_time_get_microsecond {#function-mgp-local-date-time-get-microsecond}

```cpp
enum mgp_error mgp_local_date_time_get_microsecond(
    struct mgp_local_date_time * local_date_time,
    int * microsecond
)
```

Get the microsecond property of the local date-time.

### mgp_local_date_time_timestamp {#function-mgp-local-date-time-timestamp}

```cpp
enum mgp_error mgp_local_date_time_timestamp(
    struct mgp_local_date_time * local_date_time,
    int64_t * timestamp
)
```

Get the local date-time as microseconds from Unix epoch.

### mgp_local_date_time_now {#function-mgp-local-date-time-now}

```cpp
enum mgp_error mgp_local_date_time_now(
    struct mgp_memory * memory,
    struct mgp_local_date_time ** local_date_time
)
```

Get the local date-time representing current date and time.

Resulting local date-time must be freed with mgp_local_date_time_destroy. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_local_date_time.


### mgp_local_date_time_add_duration {#function-mgp-local-date-time-add-duration}

```cpp
enum mgp_error mgp_local_date_time_add_duration(
    struct mgp_local_date_time * local_date_time,
    struct mgp_duration * dur,
    struct mgp_memory * memory,
    struct mgp_local_date_time ** result
)
```

Add a duration to the local date-time.

Resulting local date-time must be freed with mgp_local_date_time_destroy. Return MGP_ERROR_INVALID_ARGUMENT if the operation results in an invalid local date-time. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_local_date_time.


### mgp_local_date_time_sub_duration {#function-mgp-local-date-time-sub-duration}

```cpp
enum mgp_error mgp_local_date_time_sub_duration(
    struct mgp_local_date_time * local_date_time,
    struct mgp_duration * dur,
    struct mgp_memory * memory,
    struct mgp_local_date_time ** result
)
```

Subtract a duration from the local date-time.

Resulting local date-time must be freed with mgp_local_date_time_destroy. Return MGP_ERROR_INVALID_ARGUMENT if the operation results in an invalid local date-time. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_local_date_time.


### mgp_local_date_time_diff {#function-mgp-local-date-time-diff}

```cpp
enum mgp_error mgp_local_date_time_diff(
    struct mgp_local_date_time * first,
    struct mgp_local_date_time * second,
    struct mgp_memory * memory,
    struct mgp_duration ** result
)
```

Get a duration between two local date-times.

Resulting duration must be freed with mgp_duration_destroy. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_local_date_time.


### mgp_duration_from_string {#function-mgp-duration-from-string}

```cpp
enum mgp_error mgp_duration_from_string(
    const char * string,
    struct mgp_memory * memory,
    struct mgp_duration ** duration
)
```

Create a duration from a string following the ISO 8601 format.

Resulting duration must be freed with mgp_duration_destroy. Return MGP_ERROR_INVALID_ARGUMENT if the string cannot be parsed correctly. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_duration.


### mgp_duration_from_parameters {#function-mgp-duration-from-parameters}

```cpp
enum mgp_error mgp_duration_from_parameters(
    struct mgp_duration_parameters * parameters,
    struct mgp_memory * memory,
    struct mgp_duration ** duration
)
```

Create a duration from [mgp_duration_parameters](#mgp_duration_parameters).

Resulting duration must be freed with mgp_duration_destroy. Return MGP_ERROR_INVALID_ARGUMENT if the parameters cannot be parsed correctly. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_duration.


### mgp_duration_from_microseconds {#function-mgp-duration-from-microseconds}

```cpp
enum mgp_error mgp_duration_from_microseconds(
    int64_t microseconds,
    struct mgp_memory * memory,
    struct mgp_duration ** duration
)
```

Create a duration from microseconds.

Resulting duration must be freed with mgp_duration_destroy. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_duration.


### mgp_duration_copy {#function-mgp-duration-copy}

```cpp
enum mgp_error mgp_duration_copy(
    struct mgp_duration * duration,
    struct mgp_memory * memory,
    struct mgp_duration ** result
)
```

Copy a mgp_duration.

Resulting pointer must be freed with mgp_duration_destroy. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_duration.


### mgp_duration_destroy {#function-mgp-duration-destroy}

```cpp
void mgp_duration_destroy(
    struct mgp_duration * duration
)
```

Free the memory used by a mgp_duration.

### mgp_duration_equal {#function-mgp-duration-equal}

```cpp
enum mgp_error mgp_duration_equal(
    struct mgp_duration * first,
    struct mgp_duration * second,
    int * result
)
```

Result is non-zero if given durations are equal, otherwise 0.

### mgp_duration_get_microseconds {#function-mgp-duration-get-microseconds}

```cpp
enum mgp_error mgp_duration_get_microseconds(
    struct mgp_duration * duration,
    int64_t * microseconds
)
```

Get the duration as microseconds.

### mgp_duration_neg {#function-mgp-duration-neg}

```cpp
enum mgp_error mgp_duration_neg(
    struct mgp_duration * dur,
    struct mgp_memory * memory,
    struct mgp_duration ** result
)
```

Apply unary minus operator to the duration.

Resulting pointer must be freed with mgp_duration_destroy. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_duration.


### mgp_duration_add {#function-mgp-duration-add}

```cpp
enum mgp_error mgp_duration_add(
    struct mgp_duration * first,
    struct mgp_duration * second,
    struct mgp_memory * memory,
    struct mgp_duration ** result
)
```

Add two durations.

Resulting pointer must be freed with mgp_duration_destroy. Return MGP_ERROR_INVALID_ARGUMENT if the operation results in an invalid duration. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_duration.


### mgp_duration_sub {#function-mgp-duration-sub}

```cpp
enum mgp_error mgp_duration_sub(
    struct mgp_duration * first,
    struct mgp_duration * second,
    struct mgp_memory * memory,
    struct mgp_duration ** result
)
```

Subtract two durations.

Resulting pointer must be freed with mgp_duration_destroy. Return MGP_ERROR_INVALID_ARGUMENT if the operation results in an invalid duration. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_duration.


### mgp_type_any {#function-mgp-type-any}

```cpp
enum mgp_error mgp_type_any(
    struct mgp_type ** result
)
```

Get the type representing any value that isn't `null`.

The ANY type is the parent type of all types. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate the new type.


### mgp_type_bool {#function-mgp-type-bool}

```cpp
enum mgp_error mgp_type_bool(
    struct mgp_type ** result
)
```

Get the type representing boolean values.

Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate the new type.


### mgp_type_string {#function-mgp-type-string}

```cpp
enum mgp_error mgp_type_string(
    struct mgp_type ** result
)
```

Get the type representing character string values.

Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate the new type.


### mgp_type_int {#function-mgp-type-int}

```cpp
enum mgp_error mgp_type_int(
    struct mgp_type ** result
)
```

Get the type representing integer values.

Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate the new type.


### mgp_type_float {#function-mgp-type-float}

```cpp
enum mgp_error mgp_type_float(
    struct mgp_type ** result
)
```

Get the type representing floating-point values.

Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate the new type.


### mgp_type_number {#function-mgp-type-number}

```cpp
enum mgp_error mgp_type_number(
    struct mgp_type ** result
)
```

Get the type representing any number value.

This is the parent type for numeric types, i.e. INTEGER and FLOAT. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate the new type.


### mgp_type_map {#function-mgp-type-map}

```cpp
enum mgp_error mgp_type_map(
    struct mgp_type ** result
)
```

Get the type representing map values.

**See**:

  * [mgp_type_node](#function-mgp-type-node)
  * [mgp_type_relationship](#function-mgp-type-relationship) Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate the new type.


Map values are those which map string keys to values of any type. For example `{ database: "Memgraph", version: 1.42 }`. Note that graph nodes contain property maps, so a node value will also satisfy the MAP type. The same applies for graph relationship values.


### mgp_type_node {#function-mgp-type-node}

```cpp
enum mgp_error mgp_type_node(
    struct mgp_type ** result
)
```

Get the type representing graph node values.

Since a node contains a map of properties, the node itself is also of MAP type. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate the new type.


### mgp_type_relationship {#function-mgp-type-relationship}

```cpp
enum mgp_error mgp_type_relationship(
    struct mgp_type ** result
)
```

Get the type representing graph relationship values.

Since a relationship contains a map of properties, the relationship itself is also of MAP type. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate the new type.


### mgp_type_path {#function-mgp-type-path}

```cpp
enum mgp_error mgp_type_path(
    struct mgp_type ** result
)
```

Get the type representing a graph path (walk) from one node to another.

Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate the new type.


### mgp_type_list {#function-mgp-type-list}

```cpp
enum mgp_error mgp_type_list(
    struct mgp_type * element_type,
    struct mgp_type ** result
)
```

Build a type representing a list of values of given `element_type`.

Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate the new type.


### mgp_type_date {#function-mgp-type-date}

```cpp
enum mgp_error mgp_type_date(
    struct mgp_type ** result
)
```

Get the type representing a date.

Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate the new type.


### mgp_type_local_time {#function-mgp-type-local-time}

```cpp
enum mgp_error mgp_type_local_time(
    struct mgp_type ** result
)
```

Get the type representing a local time.

Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate the new type.


### mgp_type_local_date_time {#function-mgp-type-local-date-time}

```cpp
enum mgp_error mgp_type_local_date_time(
    struct mgp_type ** result
)
```

Get the type representing a local date-time.

Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate the new type.


### mgp_type_duration {#function-mgp-type-duration}

```cpp
enum mgp_error mgp_type_duration(
    struct mgp_type ** result
)
```

Get the type representing a duration.

Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate the new type.


### mgp_type_nullable {#function-mgp-type-nullable}

```cpp
enum mgp_error mgp_type_nullable(
    struct mgp_type * type,
    struct mgp_type ** result
)
```

Build a type representing either a `null` value or a value of given `type`.

Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate the new type.


### mgp_module_add_read_procedure {#function-mgp-module-add-read-procedure}

```cpp
enum mgp_error mgp_module_add_read_procedure(
    struct mgp_module * module,
    const char * name,
    mgp_proc_cb cb,
    struct mgp_proc ** result
)
```

Register a read-only procedure to a module.

The `name` must be a sequence of digits, underscores, lowercase and uppercase Latin letters. The name must begin with a non-digit character. Note that Unicode characters are not allowed. Additionally, names are case-sensitive.

Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate memory for mgp_proc. Return MGP_ERROR_INVALID_ARGUMENT if `name` is not a valid procedure name. RETURN MGP_ERROR_LOGIC_ERROR if a procedure with the same name was already registered.


### mgp_module_add_write_procedure {#function-mgp-module-add-write-procedure}

```cpp
enum mgp_error mgp_module_add_write_procedure(
    struct mgp_module * module,
    const char * name,
    mgp_proc_cb cb,
    struct mgp_proc ** result
)
```

Register a writeable procedure to a module.

The `name` must be a valid identifier, following the same rules as the procedure`name` in mgp_module_add_read_procedure.

Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate memory for mgp_proc. Return MGP_ERROR_INVALID_ARGUMENT if `name` is not a valid procedure name. RETURN MGP_ERROR_LOGIC_ERROR if a procedure with the same name was already registered.


### mgp_proc_add_arg {#function-mgp-proc-add-arg}

```cpp
enum mgp_error mgp_proc_add_arg(
    struct mgp_proc * proc,
    const char * name,
    struct mgp_type * type
)
```

Add a required argument to a procedure.

The order of adding arguments will correspond to the order the procedure must receive them through openCypher. Required arguments will be followed by optional arguments.

The `name` must be a valid identifier, following the same rules as the procedure`name` in mgp_module_add_read_procedure.

Passed in `type` describes what kind of values can be used as the argument.

Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate memory for an argument. Return MGP_ERROR_INVALID_ARGUMENT if `name` is not a valid argument name. RETURN MGP_ERROR_LOGIC_ERROR if the procedure already has any optional argument.


### mgp_proc_add_opt_arg {#function-mgp-proc-add-opt-arg}

```cpp
enum mgp_error mgp_proc_add_opt_arg(
    struct mgp_proc * proc,
    const char * name,
    struct mgp_type * type,
    struct mgp_value * default_value
)
```

Add an optional argument with a default value to a procedure.

The order of adding arguments will correspond to the order the procedure must receive them through openCypher. Optional arguments must follow the required arguments.

The `name` must be a valid identifier, following the same rules as the procedure `name` in mgp_module_add_read_procedure.

Passed in `type` describes what kind of values can be used as the argument.

`default_value` is copied and set as the default value for the argument. Don't forget to call mgp_value_destroy when you are done using `default_value`. When the procedure is called, if this argument is not provided, `default_value` will be used instead. `default_value` must not be a graph element (node, relationship, path) and it must satisfy the given `type`.

Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate memory for an argument. Return MGP_ERROR_INVALID_ARGUMENT if `name` is not a valid argument name. RETURN MGP_ERROR_VALUE_CONVERSION if `default_value` is a graph element (vertex, edge or path). RETURN MGP_ERROR_LOGIC_ERROR if `default_value` does not satisfy `type`.


### mgp_proc_add_result {#function-mgp-proc-add-result}

```cpp
enum mgp_error mgp_proc_add_result(
    struct mgp_proc * proc,
    const char * name,
    struct mgp_type * type
)
```

Add a result field to a procedure.

The `name` must be a valid identifier, following the same rules as the procedure `name` in mgp_module_add_read_procedure.

Passed in `type` describes what kind of values can be returned through the result field.

Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate memory for an argument. Return MGP_ERROR_INVALID_ARGUMENT if `name` is not a valid result name. RETURN MGP_ERROR_LOGIC_ERROR if a result field with the same name was already added.


### mgp_proc_add_deprecated_result {#function-mgp-proc-add-deprecated-result}

```cpp
enum mgp_error mgp_proc_add_deprecated_result(
    struct mgp_proc * proc,
    const char * name,
    struct mgp_type * type
)
```

Add a result field to a procedure and mark it as deprecated.

This is the same as mgp_proc_add_result, but the result field will be marked as deprecated.

Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate memory for an argument. Return MGP_ERROR_INVALID_ARGUMENT if `name` is not a valid result name. RETURN MGP_ERROR_LOGIC_ERROR if a result field with the same name was already added.


### mgp_must_abort {#function-mgp-must-abort}

```cpp
int mgp_must_abort(
    struct mgp_graph * graph
)
```

Return non-zero if the currently executing procedure should abort as soon as possible.

Procedures which perform heavyweight processing run the risk of running too long and going over the query execution time limit. To prevent this, such procedures should periodically call this function at critical points in their code in order to determine whether they should abort or not. Note that this mechanism is purely cooperative and depends on the procedure doing the checking and aborting on its own.


### mgp_message_payload {#function-mgp-message-payload}

```cpp
enum mgp_error mgp_message_payload(
    struct mgp_message * message,
    const char ** result
)
```

Payload is not null terminated and not a string but rather a byte array.

You need to call [mgp_message_payload_size()](#function-mgp-message-payload-size) first, to read the size of the payload.


### mgp_message_payload_size {#function-mgp-message-payload-size}

```cpp
enum mgp_error mgp_message_payload_size(
    struct mgp_message * message,
    size_t * result
)
```

Get the payload size.

### mgp_message_topic_name {#function-mgp-message-topic-name}

```cpp
enum mgp_error mgp_message_topic_name(
    struct mgp_message * message,
    const char ** result
)
```

Get the name of topic.

### mgp_message_key {#function-mgp-message-key}

```cpp
enum mgp_error mgp_message_key(
    struct mgp_message * message,
    const char ** result
)
```

Get the key of mgp_message as a byte array.

### mgp_message_key_size {#function-mgp-message-key-size}

```cpp
enum mgp_error mgp_message_key_size(
    struct mgp_message * message,
    size_t * result
)
```

Get the key size of mgp_message.

### mgp_message_timestamp {#function-mgp-message-timestamp}

```cpp
enum mgp_error mgp_message_timestamp(
    struct mgp_message * message,
    int64_t * result
)
```

Get the timestamp of mgp_message as a byte array.

### mgp_messages_size {#function-mgp-messages-size}

```cpp
enum mgp_error mgp_messages_size(
    struct mgp_messages * message,
    size_t * result
)
```

Get the number of messages contained in the mgp_messages list Current implementation always returns without errors.

### mgp_messages_at {#function-mgp-messages-at}

```cpp
enum mgp_error mgp_messages_at(
    struct mgp_messages * message,
    size_t index,
    struct mgp_message ** result
)
```

Get the message from a messages list at given index.

### mgp_module_add_transformation {#function-mgp-module-add-transformation}

```cpp
enum mgp_error mgp_module_add_transformation(
    struct mgp_module * module,
    const char * name,
    mgp_trans_cb cb
)
```

Register a transformation with a module.

The `name` must be a sequence of digits, underscores, lowercase and uppercase Latin letters. The name must begin with a non-digit character. Note that Unicode characters are not allowed. Additionally, names are case-sensitive.

Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate memory for transformation. Return MGP_ERROR_INVALID_ARGUMENT if `name` is not a valid transformation name. RETURN MGP_ERROR_LOGIC_ERROR if a transformation with the same name was already registered.


### mgp_vertices_iterator_next {#function-mgp-vertices-iterator-next}

```cpp
enum mgp_error mgp_vertices_iterator_next(
    struct mgp_vertices_iterator * it,
    struct mgp_vertex ** result
)
```

Advance the iterator to the next vertex and return it.

The previous mgp_vertex obtained through mgp_vertices_iterator_get will be invalidated, and you must not use its value. Result is NULL if the end of the iteration has been reached. Return MGP_ERROR_UNABLE_TO_ALLOCATE if unable to allocate a mgp_vertex.

### mgp_log {#function-mgp-log}

```cpp
enum mgp_error mgp_log(
    enum mgp_log_level log_level, 
    const char *output
)
```

Log a message on a certain level.


## Attributes Documentation

### mgp_error {#variable-mgp-error}

```cpp
enum MGP_NODISCARD mgp_error;
```

All functions return an error code that can be used to figure out whether the API call was successful or not.

In case of failure, the specific error code can be used to identify the reason of the failure.


### MGP_ERROR_NO_ERROR {#variable-mgp-error-no-error}

```cpp
MGP_ERROR_NO_ERROR = 0;
```


### MGP_ERROR_UNKNOWN_ERROR {#variable-mgp-error-unknown-error}

```cpp
MGP_ERROR_UNKNOWN_ERROR;
```


### MGP_ERROR_UNABLE_TO_ALLOCATE {#variable-mgp-error-unable-to-allocate}

```cpp
MGP_ERROR_UNABLE_TO_ALLOCATE;
```


### MGP_ERROR_INSUFFICIENT_BUFFER {#variable-mgp-error-insufficient-buffer}

```cpp
MGP_ERROR_INSUFFICIENT_BUFFER;
```


### MGP_ERROR_OUT_OF_RANGE {#variable-mgp-error-out-of-range}

```cpp
MGP_ERROR_OUT_OF_RANGE;
```


### MGP_ERROR_LOGIC_ERROR {#variable-mgp-error-logic-error}

```cpp
MGP_ERROR_LOGIC_ERROR;
```


### MGP_ERROR_DELETED_OBJECT {#variable-mgp-error-deleted-object}

```cpp
MGP_ERROR_DELETED_OBJECT;
```


### MGP_ERROR_INVALID_ARGUMENT {#variable-mgp-error-invalid-argument}

```cpp
MGP_ERROR_INVALID_ARGUMENT;
```


### MGP_ERROR_KEY_ALREADY_EXISTS {#variable-mgp-error-key-already-exists}

```cpp
MGP_ERROR_KEY_ALREADY_EXISTS;
```


### MGP_ERROR_IMMUTABLE_OBJECT {#variable-mgp-error-immutable-object}

```cpp
MGP_ERROR_IMMUTABLE_OBJECT;
```


### MGP_ERROR_VALUE_CONVERSION {#variable-mgp-error-value-conversion}

```cpp
MGP_ERROR_VALUE_CONVERSION;
```


### MGP_ERROR_SERIALIZATION_ERROR {#variable-mgp-error-serialization-error}

```cpp
MGP_ERROR_SERIALIZATION_ERROR;
```



## Macros Documentation

### define MGP_NODISCARD {#define-mgp-nodiscard}

```cpp
#define MGP_NODISCARD
```


## Source code

```cpp
// Copyright 2021 Memgraph Ltd.
//
// Use of this software is governed by the Business Source License
// included in the file licenses/BSL.txt; by using this file, you agree to be bound by the terms of the Business Source
// License, and you may not use this file except in compliance with the Business Source License.
//
// As of the Change Date specified in that file, in accordance with
// the Business Source License, use of this software will be governed
// by the Apache License, Version 2.0, included in the file
// licenses/APL.txt.

#ifndef MG_PROCEDURE_H
#define MG_PROCEDURE_H

#ifdef __cplusplus
extern "C" {
#endif

#if __cplusplus >= 201703L
#define MGP_NODISCARD [[nodiscard]]
#else
#define MGP_NODISCARD
#endif

#include <stddef.h>
#include <stdint.h>


enum MGP_NODISCARD mgp_error {
  MGP_ERROR_NO_ERROR = 0,
  MGP_ERROR_UNKNOWN_ERROR,
  MGP_ERROR_UNABLE_TO_ALLOCATE,
  MGP_ERROR_INSUFFICIENT_BUFFER,
  MGP_ERROR_OUT_OF_RANGE,
  MGP_ERROR_LOGIC_ERROR,
  MGP_ERROR_DELETED_OBJECT,
  MGP_ERROR_INVALID_ARGUMENT,
  MGP_ERROR_KEY_ALREADY_EXISTS,
  MGP_ERROR_IMMUTABLE_OBJECT,
  MGP_ERROR_VALUE_CONVERSION,
  MGP_ERROR_SERIALIZATION_ERROR,
};


struct mgp_memory;

enum mgp_error mgp_alloc(struct mgp_memory *memory, size_t size_in_bytes, void **result);

enum mgp_error mgp_aligned_alloc(struct mgp_memory *memory, size_t size_in_bytes, size_t alignment, void **result);

void mgp_free(struct mgp_memory *memory, void *ptr);

enum mgp_error mgp_global_alloc(size_t size_in_bytes, void **result);

enum mgp_error mgp_global_aligned_alloc(size_t size_in_bytes, size_t alignment, void **result);

void mgp_global_free(void *p);


struct mgp_value;

struct mgp_list;

struct mgp_map;

struct mgp_vertex;

struct mgp_edge;

struct mgp_path;

struct mgp_date;

struct mgp_local_time;

struct mgp_local_date_time;

struct mgp_duration;

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
  MGP_VALUE_TYPE_DATE,
  MGP_VALUE_TYPE_LOCAL_TIME,
  MGP_VALUE_TYPE_LOCAL_DATE_TIME,
  MGP_VALUE_TYPE_DURATION,
};

void mgp_value_destroy(struct mgp_value *val);

enum mgp_error mgp_value_make_null(struct mgp_memory *memory, struct mgp_value **result);

enum mgp_error mgp_value_make_bool(int val, struct mgp_memory *memory, struct mgp_value **result);

enum mgp_error mgp_value_make_int(int64_t val, struct mgp_memory *memory, struct mgp_value **result);

enum mgp_error mgp_value_make_double(double val, struct mgp_memory *memory, struct mgp_value **result);

enum mgp_error mgp_value_make_string(const char *val, struct mgp_memory *memory, struct mgp_value **result);

enum mgp_error mgp_value_make_list(struct mgp_list *val, struct mgp_value **result);

enum mgp_error mgp_value_make_map(struct mgp_map *val, struct mgp_value **result);

enum mgp_error mgp_value_make_vertex(struct mgp_vertex *val, struct mgp_value **result);

enum mgp_error mgp_value_make_edge(struct mgp_edge *val, struct mgp_value **result);

enum mgp_error mgp_value_make_path(struct mgp_path *val, struct mgp_value **result);

enum mgp_error mgp_value_make_date(struct mgp_date *val, struct mgp_value **result);

enum mgp_error mgp_value_make_local_time(struct mgp_local_time *val, struct mgp_value **result);

enum mgp_error mgp_value_make_local_date_time(struct mgp_local_date_time *val, struct mgp_value **result);

enum mgp_error mgp_value_make_duration(struct mgp_duration *val, struct mgp_value **result);

enum mgp_error mgp_value_get_type(struct mgp_value *val, enum mgp_value_type *result);

enum mgp_error mgp_value_is_null(struct mgp_value *val, int *result);

enum mgp_error mgp_value_is_bool(struct mgp_value *val, int *result);

enum mgp_error mgp_value_is_int(struct mgp_value *val, int *result);

enum mgp_error mgp_value_is_double(struct mgp_value *val, int *result);

enum mgp_error mgp_value_is_string(struct mgp_value *val, int *result);

enum mgp_error mgp_value_is_list(struct mgp_value *val, int *result);

enum mgp_error mgp_value_is_map(struct mgp_value *val, int *result);

enum mgp_error mgp_value_is_vertex(struct mgp_value *val, int *result);

enum mgp_error mgp_value_is_edge(struct mgp_value *val, int *result);

enum mgp_error mgp_value_is_path(struct mgp_value *val, int *result);

enum mgp_error mgp_value_is_date(struct mgp_value *val, int *result);

enum mgp_error mgp_value_is_local_time(struct mgp_value *val, int *result);

enum mgp_error mgp_value_is_local_date_time(struct mgp_value *val, int *result);

enum mgp_error mgp_value_is_duration(struct mgp_value *val, int *result);

enum mgp_error mgp_value_get_bool(struct mgp_value *val, int *result);

enum mgp_error mgp_value_get_int(struct mgp_value *val, int64_t *result);

enum mgp_error mgp_value_get_double(struct mgp_value *val, double *result);

enum mgp_error mgp_value_get_string(struct mgp_value *val, const char **result);

enum mgp_error mgp_value_get_list(struct mgp_value *val, struct mgp_list **result);

enum mgp_error mgp_value_get_map(struct mgp_value *val, struct mgp_map **result);

enum mgp_error mgp_value_get_vertex(struct mgp_value *val, struct mgp_vertex **result);

enum mgp_error mgp_value_get_edge(struct mgp_value *val, struct mgp_edge **result);

enum mgp_error mgp_value_get_path(struct mgp_value *val, struct mgp_path **result);

enum mgp_error mgp_value_get_date(struct mgp_value *val, struct mgp_date **result);

enum mgp_error mgp_value_get_local_time(struct mgp_value *val, struct mgp_local_time **result);

enum mgp_error mgp_value_get_local_date_time(struct mgp_value *val, struct mgp_local_date_time **result);

enum mgp_error mgp_value_get_duration(struct mgp_value *val, struct mgp_duration **result);

enum mgp_error mgp_list_make_empty(size_t capacity, struct mgp_memory *memory, struct mgp_list **result);

void mgp_list_destroy(struct mgp_list *list);

enum mgp_error mgp_list_append(struct mgp_list *list, struct mgp_value *val);

enum mgp_error mgp_list_append_extend(struct mgp_list *list, struct mgp_value *val);

enum mgp_error mgp_list_size(struct mgp_list *list, size_t *result);

enum mgp_error mgp_list_capacity(struct mgp_list *list, size_t *result);

enum mgp_error mgp_list_at(struct mgp_list *list, size_t index, struct mgp_value **result);

enum mgp_error mgp_map_make_empty(struct mgp_memory *memory, struct mgp_map **result);

void mgp_map_destroy(struct mgp_map *map);

enum mgp_error mgp_map_insert(struct mgp_map *map, const char *key, struct mgp_value *value);

enum mgp_error mgp_map_size(struct mgp_map *map, size_t *result);

enum mgp_error mgp_map_at(struct mgp_map *map, const char *key, struct mgp_value **result);

struct mgp_map_item;

enum mgp_error mgp_map_item_key(struct mgp_map_item *item, const char **result);

enum mgp_error mgp_map_item_value(struct mgp_map_item *item, struct mgp_value **result);

struct mgp_map_items_iterator;

enum mgp_error mgp_map_iter_items(struct mgp_map *map, struct mgp_memory *memory,
                                  struct mgp_map_items_iterator **result);

void mgp_map_items_iterator_destroy(struct mgp_map_items_iterator *it);

enum mgp_error mgp_map_items_iterator_get(struct mgp_map_items_iterator *it, struct mgp_map_item **result);

enum mgp_error mgp_map_items_iterator_next(struct mgp_map_items_iterator *it, struct mgp_map_item **result);

enum mgp_error mgp_path_make_with_start(struct mgp_vertex *vertex, struct mgp_memory *memory, struct mgp_path **result);

enum mgp_error mgp_path_copy(struct mgp_path *path, struct mgp_memory *memory, struct mgp_path **result);

void mgp_path_destroy(struct mgp_path *path);

enum mgp_error mgp_path_expand(struct mgp_path *path, struct mgp_edge *edge);

enum mgp_error mgp_path_size(struct mgp_path *path, size_t *result);

enum mgp_error mgp_path_vertex_at(struct mgp_path *path, size_t index, struct mgp_vertex **result);

enum mgp_error mgp_path_edge_at(struct mgp_path *path, size_t index, struct mgp_edge **result);

enum mgp_error mgp_path_equal(struct mgp_path *p1, struct mgp_path *p2, int *result);



struct mgp_result;
struct mgp_result_record;

enum mgp_error mgp_result_set_error_msg(struct mgp_result *res, const char *error_msg);

enum mgp_error mgp_result_new_record(struct mgp_result *res, struct mgp_result_record **result);

enum mgp_error mgp_result_record_insert(struct mgp_result_record *record, const char *field_name,
                                        struct mgp_value *val);


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
  struct mgp_value *value;
};

enum mgp_error mgp_properties_iterator_get(struct mgp_properties_iterator *it, struct mgp_property **result);

enum mgp_error mgp_properties_iterator_next(struct mgp_properties_iterator *it, struct mgp_property **result);

struct mgp_edges_iterator;

void mgp_edges_iterator_destroy(struct mgp_edges_iterator *it);

struct mgp_vertex_id {
  int64_t as_int;
};

enum mgp_error mgp_vertex_get_id(struct mgp_vertex *v, struct mgp_vertex_id *result);

enum mgp_error mgp_vertex_underlying_graph_is_mutable(struct mgp_vertex *v, int *result);

enum mgp_error mgp_vertex_set_property(struct mgp_vertex *v, const char *property_name,
                                       struct mgp_value *property_value);

enum mgp_error mgp_vertex_add_label(struct mgp_vertex *v, struct mgp_label label);

enum mgp_error mgp_vertex_remove_label(struct mgp_vertex *v, struct mgp_label label);

enum mgp_error mgp_vertex_copy(struct mgp_vertex *v, struct mgp_memory *memory, struct mgp_vertex **result);

void mgp_vertex_destroy(struct mgp_vertex *v);

enum mgp_error mgp_vertex_equal(struct mgp_vertex *v1, struct mgp_vertex *v2, int *result);

enum mgp_error mgp_vertex_labels_count(struct mgp_vertex *v, size_t *result);

enum mgp_error mgp_vertex_label_at(struct mgp_vertex *v, size_t index, struct mgp_label *result);

enum mgp_error mgp_vertex_has_label(struct mgp_vertex *v, struct mgp_label label, int *result);

enum mgp_error mgp_vertex_has_label_named(struct mgp_vertex *v, const char *label_name, int *result);

enum mgp_error mgp_vertex_get_property(struct mgp_vertex *v, const char *property_name, struct mgp_memory *memory,
                                       struct mgp_value **result);

enum mgp_error mgp_vertex_iter_properties(struct mgp_vertex *v, struct mgp_memory *memory,
                                          struct mgp_properties_iterator **result);

enum mgp_error mgp_vertex_iter_in_edges(struct mgp_vertex *v, struct mgp_memory *memory,
                                        struct mgp_edges_iterator **result);

enum mgp_error mgp_vertex_iter_out_edges(struct mgp_vertex *v, struct mgp_memory *memory,
                                         struct mgp_edges_iterator **result);

enum mgp_error mgp_edges_iterator_underlying_graph_is_mutable(struct mgp_edges_iterator *it, int *result);

enum mgp_error mgp_edges_iterator_get(struct mgp_edges_iterator *it, struct mgp_edge **result);

enum mgp_error mgp_edges_iterator_next(struct mgp_edges_iterator *it, struct mgp_edge **result);

struct mgp_edge_id {
  int64_t as_int;
};

enum mgp_error mgp_edge_get_id(struct mgp_edge *e, struct mgp_edge_id *result);

enum mgp_error mgp_edge_underlying_graph_is_mutable(struct mgp_edge *e, int *result);

enum mgp_error mgp_edge_copy(struct mgp_edge *e, struct mgp_memory *memory, struct mgp_edge **result);

void mgp_edge_destroy(struct mgp_edge *e);

enum mgp_error mgp_edge_equal(struct mgp_edge *e1, struct mgp_edge *e2, int *result);

enum mgp_error mgp_edge_get_type(struct mgp_edge *e, struct mgp_edge_type *result);

enum mgp_error mgp_edge_get_from(struct mgp_edge *e, struct mgp_vertex **result);

enum mgp_error mgp_edge_get_to(struct mgp_edge *e, struct mgp_vertex **result);

enum mgp_error mgp_edge_get_property(struct mgp_edge *e, const char *property_name, struct mgp_memory *memory,
                                     struct mgp_value **result);

enum mgp_error mgp_edge_set_property(struct mgp_edge *e, const char *property_name, struct mgp_value *property_value);

enum mgp_error mgp_edge_iter_properties(struct mgp_edge *e, struct mgp_memory *memory,
                                        struct mgp_properties_iterator **result);

struct mgp_graph;

enum mgp_error mgp_graph_get_vertex_by_id(struct mgp_graph *g, struct mgp_vertex_id id, struct mgp_memory *memory,
                                          struct mgp_vertex **result);

enum mgp_error mgp_graph_is_mutable(struct mgp_graph *graph, int *result);

enum mgp_error mgp_graph_create_vertex(struct mgp_graph *graph, struct mgp_memory *memory, struct mgp_vertex **result);

enum mgp_error mgp_graph_delete_vertex(struct mgp_graph *graph, struct mgp_vertex *vertex);

enum mgp_error mgp_graph_detach_delete_vertex(struct mgp_graph *graph, struct mgp_vertex *vertex);

enum mgp_error mgp_graph_create_edge(struct mgp_graph *graph, struct mgp_vertex *from, struct mgp_vertex *to,
                                     struct mgp_edge_type type, struct mgp_memory *memory, struct mgp_edge **result);

enum mgp_error mgp_graph_delete_edge(struct mgp_graph *graph, struct mgp_edge *edge);

struct mgp_vertices_iterator;

void mgp_vertices_iterator_destroy(struct mgp_vertices_iterator *it);

enum mgp_error mgp_graph_iter_vertices(struct mgp_graph *g, struct mgp_memory *memory,
                                       struct mgp_vertices_iterator **result);

enum mgp_error mgp_vertices_iterator_underlying_graph_is_mutable(struct mgp_vertices_iterator *it, int *result);

enum mgp_error mgp_vertices_iterator_get(struct mgp_vertices_iterator *it, struct mgp_vertex **result);


struct mgp_date_parameters {
  int year;
  int month;
  int day;
};

enum mgp_error mgp_date_from_string(const char *string, struct mgp_memory *memory, struct mgp_date **date);

enum mgp_error mgp_date_from_parameters(struct mgp_date_parameters *parameters, struct mgp_memory *memory,
                                        struct mgp_date **date);

enum mgp_error mgp_date_copy(struct mgp_date *date, struct mgp_memory *memory, struct mgp_date **result);

void mgp_date_destroy(struct mgp_date *date);

enum mgp_error mgp_date_equal(struct mgp_date *first, struct mgp_date *second, int *result);

enum mgp_error mgp_date_get_year(struct mgp_date *date, int *year);

enum mgp_error mgp_date_get_month(struct mgp_date *date, int *month);

enum mgp_error mgp_date_get_day(struct mgp_date *date, int *day);

enum mgp_error mgp_date_timestamp(struct mgp_date *date, int64_t *timestamp);

enum mgp_error mgp_date_now(struct mgp_memory *memory, struct mgp_date **date);

enum mgp_error mgp_date_add_duration(struct mgp_date *date, struct mgp_duration *dur, struct mgp_memory *memory,
                                     struct mgp_date **result);

enum mgp_error mgp_date_sub_duration(struct mgp_date *date, struct mgp_duration *dur, struct mgp_memory *memory,
                                     struct mgp_date **result);

enum mgp_error mgp_date_diff(struct mgp_date *first, struct mgp_date *second, struct mgp_memory *memory,
                             struct mgp_duration **result);

struct mgp_local_time_parameters {
  int hour;
  int minute;
  int second;
  int millisecond;
  int microsecond;
};

enum mgp_error mgp_local_time_from_string(const char *string, struct mgp_memory *memory,
                                          struct mgp_local_time **local_time);

enum mgp_error mgp_local_time_from_parameters(struct mgp_local_time_parameters *parameters, struct mgp_memory *memory,
                                              struct mgp_local_time **local_time);

enum mgp_error mgp_local_time_copy(struct mgp_local_time *local_time, struct mgp_memory *memory,
                                   struct mgp_local_time **result);

void mgp_local_time_destroy(struct mgp_local_time *local_time);

enum mgp_error mgp_local_time_equal(struct mgp_local_time *first, struct mgp_local_time *second, int *result);

enum mgp_error mgp_local_time_get_hour(struct mgp_local_time *local_time, int *hour);

enum mgp_error mgp_local_time_get_minute(struct mgp_local_time *local_time, int *minute);

enum mgp_error mgp_local_time_get_second(struct mgp_local_time *local_time, int *second);

enum mgp_error mgp_local_time_get_millisecond(struct mgp_local_time *local_time, int *millisecond);

enum mgp_error mgp_local_time_get_microsecond(struct mgp_local_time *local_time, int *microsecond);

enum mgp_error mgp_local_time_timestamp(struct mgp_local_time *local_time, int64_t *timestamp);

enum mgp_error mgp_local_time_now(struct mgp_memory *memory, struct mgp_local_time **local_time);

enum mgp_error mgp_local_time_add_duration(struct mgp_local_time *local_time, struct mgp_duration *dur,
                                           struct mgp_memory *memory, struct mgp_local_time **result);

enum mgp_error mgp_local_time_sub_duration(struct mgp_local_time *local_time, struct mgp_duration *dur,
                                           struct mgp_memory *memory, struct mgp_local_time **result);

enum mgp_error mgp_local_time_diff(struct mgp_local_time *first, struct mgp_local_time *second,
                                   struct mgp_memory *memory, struct mgp_duration **result);

struct mgp_local_date_time_parameters {
  struct mgp_date_parameters *date_parameters;
  struct mgp_local_time_parameters *local_time_parameters;
};

enum mgp_error mgp_local_date_time_from_string(const char *string, struct mgp_memory *memory,
                                               struct mgp_local_date_time **local_date_time);

enum mgp_error mgp_local_date_time_from_parameters(struct mgp_local_date_time_parameters *parameters,
                                                   struct mgp_memory *memory,
                                                   struct mgp_local_date_time **local_date_time);

enum mgp_error mgp_local_date_time_copy(struct mgp_local_date_time *local_date_time, struct mgp_memory *memory,
                                        struct mgp_local_date_time **result);

void mgp_local_date_time_destroy(struct mgp_local_date_time *local_date_time);

enum mgp_error mgp_local_date_time_equal(struct mgp_local_date_time *first, struct mgp_local_date_time *second,
                                         int *result);

enum mgp_error mgp_local_date_time_get_year(struct mgp_local_date_time *local_date_time, int *year);

enum mgp_error mgp_local_date_time_get_month(struct mgp_local_date_time *local_date_time, int *month);

enum mgp_error mgp_local_date_time_get_day(struct mgp_local_date_time *local_date_time, int *day);

enum mgp_error mgp_local_date_time_get_hour(struct mgp_local_date_time *local_date_time, int *hour);

enum mgp_error mgp_local_date_time_get_minute(struct mgp_local_date_time *local_date_time, int *minute);

enum mgp_error mgp_local_date_time_get_second(struct mgp_local_date_time *local_date_time, int *second);

enum mgp_error mgp_local_date_time_get_millisecond(struct mgp_local_date_time *local_date_time, int *millisecond);

enum mgp_error mgp_local_date_time_get_microsecond(struct mgp_local_date_time *local_date_time, int *microsecond);

enum mgp_error mgp_local_date_time_timestamp(struct mgp_local_date_time *local_date_time, int64_t *timestamp);

enum mgp_error mgp_local_date_time_now(struct mgp_memory *memory, struct mgp_local_date_time **local_date_time);

enum mgp_error mgp_local_date_time_add_duration(struct mgp_local_date_time *local_date_time, struct mgp_duration *dur,
                                                struct mgp_memory *memory, struct mgp_local_date_time **result);

enum mgp_error mgp_local_date_time_sub_duration(struct mgp_local_date_time *local_date_time, struct mgp_duration *dur,
                                                struct mgp_memory *memory, struct mgp_local_date_time **result);

enum mgp_error mgp_local_date_time_diff(struct mgp_local_date_time *first, struct mgp_local_date_time *second,
                                        struct mgp_memory *memory, struct mgp_duration **result);

struct mgp_duration_parameters {
  double day;
  double hour;
  double minute;
  double second;
  double millisecond;
  double microsecond;
};

enum mgp_error mgp_duration_from_string(const char *string, struct mgp_memory *memory, struct mgp_duration **duration);

enum mgp_error mgp_duration_from_parameters(struct mgp_duration_parameters *parameters, struct mgp_memory *memory,
                                            struct mgp_duration **duration);

enum mgp_error mgp_duration_from_microseconds(int64_t microseconds, struct mgp_memory *memory,
                                              struct mgp_duration **duration);

enum mgp_error mgp_duration_copy(struct mgp_duration *duration, struct mgp_memory *memory,
                                 struct mgp_duration **result);

void mgp_duration_destroy(struct mgp_duration *duration);

enum mgp_error mgp_duration_equal(struct mgp_duration *first, struct mgp_duration *second, int *result);

enum mgp_error mgp_duration_get_microseconds(struct mgp_duration *duration, int64_t *microseconds);

enum mgp_error mgp_duration_neg(struct mgp_duration *dur, struct mgp_memory *memory, struct mgp_duration **result);

enum mgp_error mgp_duration_add(struct mgp_duration *first, struct mgp_duration *second, struct mgp_memory *memory,
                                struct mgp_duration **result);

enum mgp_error mgp_duration_sub(struct mgp_duration *first, struct mgp_duration *second, struct mgp_memory *memory,
                                struct mgp_duration **result);

enum mgp_error mgp_vertices_iterator_next(struct mgp_vertices_iterator *it, struct mgp_vertex **result);


struct mgp_type;

enum mgp_error mgp_type_any(struct mgp_type **result);

enum mgp_error mgp_type_bool(struct mgp_type **result);

enum mgp_error mgp_type_string(struct mgp_type **result);

enum mgp_error mgp_type_int(struct mgp_type **result);

enum mgp_error mgp_type_float(struct mgp_type **result);

enum mgp_error mgp_type_number(struct mgp_type **result);

enum mgp_error mgp_type_map(struct mgp_type **result);

enum mgp_error mgp_type_node(struct mgp_type **result);

enum mgp_error mgp_type_relationship(struct mgp_type **result);

enum mgp_error mgp_type_path(struct mgp_type **result);

enum mgp_error mgp_type_list(struct mgp_type *element_type, struct mgp_type **result);

enum mgp_error mgp_type_date(struct mgp_type **result);

enum mgp_error mgp_type_local_time(struct mgp_type **result);

enum mgp_error mgp_type_local_date_time(struct mgp_type **result);

enum mgp_error mgp_type_duration(struct mgp_type **result);

enum mgp_error mgp_type_nullable(struct mgp_type *type, struct mgp_type **result);


struct mgp_module;

struct mgp_proc;

/// All available log levels that can be used in mgp_log function
MGP_ENUM_CLASS mgp_log_level{
    MGP_LOG_LEVEL_TRACE, MGP_LOG_LEVEL_DEBUG, MGP_LOG_LEVEL_INFO,
    MGP_LOG_LEVEL_WARN,  MGP_LOG_LEVEL_ERROR, MGP_LOG_LEVEL_CRITICAL,
};

typedef void (*mgp_proc_cb)(struct mgp_list *, struct mgp_graph *, struct mgp_result *, struct mgp_memory *);

enum mgp_error mgp_module_add_read_procedure(struct mgp_module *module, const char *name, mgp_proc_cb cb,
                                             struct mgp_proc **result);

enum mgp_error mgp_module_add_write_procedure(struct mgp_module *module, const char *name, mgp_proc_cb cb,
                                              struct mgp_proc **result);

enum mgp_error mgp_proc_add_arg(struct mgp_proc *proc, const char *name, struct mgp_type *type);

enum mgp_error mgp_proc_add_opt_arg(struct mgp_proc *proc, const char *name, struct mgp_type *type,
                                    struct mgp_value *default_value);

enum mgp_error mgp_proc_add_result(struct mgp_proc *proc, const char *name, struct mgp_type *type);

enum mgp_error mgp_proc_add_deprecated_result(struct mgp_proc *proc, const char *name, struct mgp_type *type);


int mgp_must_abort(struct mgp_graph *graph);



struct mgp_message;

struct mgp_messages;

enum mgp_error mgp_message_payload(struct mgp_message *message, const char **result);

enum mgp_error mgp_message_payload_size(struct mgp_message *message, size_t *result);

enum mgp_error mgp_message_topic_name(struct mgp_message *message, const char **result);

enum mgp_error mgp_message_key(struct mgp_message *message, const char **result);

enum mgp_error mgp_message_key_size(struct mgp_message *message, size_t *result);

enum mgp_error mgp_message_timestamp(struct mgp_message *message, int64_t *result);

enum mgp_error mgp_messages_size(struct mgp_messages *message, size_t *result);

enum mgp_error mgp_messages_at(struct mgp_messages *message, size_t index, struct mgp_message **result);

typedef void (*mgp_trans_cb)(struct mgp_messages *, struct mgp_graph *, struct mgp_result *, struct mgp_memory *);

enum mgp_error mgp_module_add_transformation(struct mgp_module *module, const char *name, mgp_trans_cb cb);

#ifdef __cplusplus
}  // extern "C"
#endif

#endif  // MG_PROCEDURE_H
```
