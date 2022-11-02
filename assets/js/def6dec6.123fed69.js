"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24780],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),g=n,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||l;return r?a.createElement(m,o(o({ref:t},d),{},{components:r})):a.createElement(m,o({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},54779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={id:"python-api",title:"Query modules Python API",sidebar_label:"Python API"},o=void 0,i={unversionedId:"reference-guide/query-modules/api/python-api",id:"version-2.1.1/reference-guide/query-modules/api/python-api",title:"Query modules Python API",description:"This is the API documentation for mgp.py  which contains definitions of the",source:"@site/memgraph_versioned_docs/version-2.1.1/reference-guide/query-modules/api/python-api.md",sourceDirName:"reference-guide/query-modules/api",slug:"/reference-guide/query-modules/api/python-api",permalink:"/docs/memgraph/2.1.1/reference-guide/query-modules/api/python-api",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/reference-guide/query-modules/api/python-api.md",tags:[],version:"2.1.1",frontMatter:{id:"python-api",title:"Query modules Python API",sidebar_label:"Python API"},sidebar:"memgraph",previous:{title:"mgp_vertex_id",permalink:"/docs/memgraph/2.1.1/reference-guide/query-modules/api/c-api/classes/mgp_vertex_id"},next:{title:"Replication",permalink:"/docs/memgraph/2.1.1/reference-guide/replication"}},s={},p=[{value:"<code>class mgp.read_proc(func: Callable[[\u2026], mgp.Record])</code>",id:"class-mgpread_procfunc-callable-mgprecord",level:2},{value:"Example usage",id:"example-usage",level:3},{value:"<code>class mgp.write_proc(func: Callable[[\u2026], mgp.Record])</code>",id:"class-mgpwrite_procfunc-callable-mgprecord",level:2},{value:"Example usage",id:"example-usage-1",level:3},{value:"<code>class mgp.Properties(vertex_or_edge)</code>",id:"class-mgppropertiesvertex_or_edge",level:2},{value:"<code>get(property_name: str, default=None)</code>",id:"getproperty_name-str-defaultnone",level:3},{value:"<code>items()</code>",id:"items",level:3},{value:"<code>keys()</code>",id:"keys",level:3},{value:"<code>set(property_name: str, value: object)</code>",id:"setproperty_name-str-value-object",level:3},{value:"<code>values()</code>",id:"values",level:3},{value:"<code>class mgp.Label(name: str)</code>",id:"class-mgplabelname-str",level:2},{value:"<code>property name()</code>",id:"property-name",level:3},{value:"<code>class mgp.EdgeType(name)</code>",id:"class-mgpedgetypename",level:2},{value:"<code>property name()</code>",id:"property-name-1",level:3},{value:"<code>class mgp.Edge(edge)</code>",id:"class-mgpedgeedge",level:2},{value:"<code>property from_vertex()</code>",id:"property-from_vertex",level:3},{value:"<code>property id()</code>",id:"property-id",level:3},{value:"<code>is_valid()</code>",id:"is_valid",level:3},{value:"<code>property properties()</code>",id:"property-properties",level:3},{value:"<code>property to_vertex()</code>",id:"property-to_vertex",level:3},{value:"<code>property type()</code>",id:"property-type",level:3},{value:"<code>underlying_graph_is_mutable()</code>",id:"underlying_graph_is_mutable",level:3},{value:"<code>class mgp.Vertex(vertex)</code>",id:"class-mgpvertexvertex",level:2},{value:"<code>add_label(label: str)</code>",id:"add_labellabel-str",level:3},{value:"<code>property id()</code>",id:"property-id-1",level:3},{value:"<code>property in_edges()</code>",id:"property-in_edges",level:3},{value:"<code>is_valid()</code>",id:"is_valid-1",level:3},{value:"<code>property labels()</code>",id:"property-labels",level:3},{value:"<code>property out_edges()</code>",id:"property-out_edges",level:3},{value:"<code>property properties()</code>",id:"property-properties-1",level:3},{value:"<code>remove_label(label: str)</code>",id:"remove_labellabel-str",level:3},{value:"<code>underlying_graph_is_mutable()</code>",id:"underlying_graph_is_mutable-1",level:3},{value:"<code>class mgp.Path(starting_vertex_or_path: Union[_mgp.Path, mgp.Vertex])</code>",id:"class-mgppathstarting_vertex_or_path-union_mgppath-mgpvertex",level:2},{value:"<code>property edges()</code>",id:"property-edges",level:3},{value:"<code>expand(edge: mgp.Edge)</code>",id:"expandedge-mgpedge",level:3},{value:"<code>is_valid()</code>",id:"is_valid-2",level:3},{value:"<code>property vertices()</code>",id:"property-vertices",level:3},{value:"<code>class mgp.Record(**kwargs)</code>",id:"class-mgprecordkwargs",level:2},{value:"<code>fields()</code>",id:"fields",level:3},{value:"<code>class mgp.Vertices(graph)</code>",id:"class-mgpverticesgraph",level:2},{value:"<code>is_valid()</code>",id:"is_valid-3",level:3},{value:"<code>class mgp.Graph(graph)</code>",id:"class-mgpgraphgraph",level:2},{value:"<code>create_edge(from_vertex: mgp.Vertex, to_vertex: mgp.Vertex, edge_type: mgp.EdgeType)</code>",id:"create_edgefrom_vertex-mgpvertex-to_vertex-mgpvertex-edge_type-mgpedgetype",level:3},{value:"<code>create_vertex()</code>",id:"create_vertex",level:3},{value:"<code>delete_edge(edge: mgp.Edge)</code>",id:"delete_edgeedge-mgpedge",level:3},{value:"<code>delete_vertex(vertex: mgp.Vertex)</code>",id:"delete_vertexvertex-mgpvertex",level:3},{value:"<code>detach_delete_vertex(vertex: mgp.Vertex)</code>",id:"detach_delete_vertexvertex-mgpvertex",level:3},{value:"<code>get_vertex_by_id(vertex_id: VertexId)</code>",id:"get_vertex_by_idvertex_id-vertexid",level:3},{value:"<code>is_mutable()</code>",id:"is_mutable",level:3},{value:"<code>is_valid()</code>",id:"is_valid-4",level:3},{value:"<code>property vertices()</code>",id:"property-vertices-1",level:3},{value:"<code>class mgp.ProcCtx(graph)</code>",id:"class-mgpprocctxgraph",level:2},{value:"<code>check_must_abort()</code>",id:"check_must_abort",level:3},{value:"<code>property graph()</code>",id:"property-graph",level:3},{value:"<code>is_valid()</code>",id:"is_valid-5",level:3},{value:"<code>must_abort()</code>",id:"must_abort",level:3},{value:"<code>class mgp.Deprecated(type_)</code>",id:"class-mgpdeprecatedtype_",level:2},{value:"<code>field_type()</code>",id:"field_type",level:3},{value:"<code>class mgp._typing_to_cypher_type(type_)</code>",id:"class-mgp_typing_to_cypher_typetype_",level:2},{value:"<code>class mgp.UnsupportedTypingError(type_)</code>",id:"class-mgpunsupportedtypingerrortype_",level:2},{value:"<code>class mgp.AbortError()</code>",id:"class-mgpaborterror",level:2},{value:"<code>class mgp.InvalidContextError()</code>",id:"class-mgpinvalidcontexterror",level:2},{value:"<code>class mgp.InvalidMessageError()</code>",id:"class-mgpinvalidmessageerror",level:2},{value:"<code>class mgp.InvalidMessagesError()</code>",id:"class-mgpinvalidmessageserror",level:2},{value:"<code>class mgp.DeletedObjectError(*args: Any, **kwargs: Any)</code>",id:"class-mgpdeletedobjecterrorargs-any-kwargs-any",level:2},{value:"<code>class mgp.ImmutableObjectError(*args: Any, **kwargs: Any)</code>",id:"class-mgpimmutableobjecterrorargs-any-kwargs-any",level:2},{value:"<code>class mgp.InsufficientBufferError(*args: Any, **kwargs: Any)</code>",id:"class-mgpinsufficientbuffererrorargs-any-kwargs-any",level:2},{value:"<code>class mgp.InvalidArgumentError(*args: Any, **kwargs: Any)</code>",id:"class-mgpinvalidargumenterrorargs-any-kwargs-any",level:2},{value:"<code>class mgp.KeyAlreadyExistsError(*args: Any, **kwargs: Any)</code>",id:"class-mgpkeyalreadyexistserrorargs-any-kwargs-any",level:2},{value:"<code>class mgp.LogicErrorError(*args: Any, **kwargs: Any)</code>",id:"class-mgplogicerrorerrorargs-any-kwargs-any",level:2},{value:"<code>class mgp.OutOfRangeError(*args: Any, **kwargs: Any)</code>",id:"class-mgpoutofrangeerrorargs-any-kwargs-any",level:2},{value:"<code>class mgp.SerializationError(*args: Any, **kwargs: Any)</code>",id:"class-mgpserializationerrorargs-any-kwargs-any",level:2},{value:"<code>class mgp.UnableToAllocateError(*args: Any, **kwargs: Any)</code>",id:"class-mgpunabletoallocateerrorargs-any-kwargs-any",level:2},{value:"<code>class mgp.UnknownError(*args: Any, **kwargs: Any)</code>",id:"class-mgpunknownerrorargs-any-kwargs-any",level:2},{value:"<code>class mgp.ValueConversionError(*args: Any, **kwargs: Any)</code>",id:"class-mgpvalueconversionerrorargs-any-kwargs-any",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This is the API documentation for ",(0,n.kt)("inlineCode",{parentName:"p"},"mgp.py"),"  which contains definitions of the\npublic Python API provided by Memgraph. In essence, this is a wrapper around the\n",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/reference-guide/query-modules/api/c-api"},"C API")),". This source\nfile can be found in the Memgraph installation directory, under\n",(0,n.kt)("inlineCode",{parentName:"p"},"python_support"),". On the standard Debian installation, this will be under\n",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/python_support"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For an example of how to implement\xa0query modules in Python, check out the\n",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/2.1.1/how-to-guides/query-modules/implement-query-modules#python-api"},"Python API\nguide"),".")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you install any Python modules after running Memgraph, you'll have to\nrestart Memgraph in order to use them in query modules.")),(0,n.kt)("h2",{id:"class-mgpread_procfunc-callable-mgprecord"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.read_proc(func: Callable[[\u2026], mgp.Record])")),(0,n.kt)("p",null,"Register func as a read-only procedure of the current module."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"read_proc")," is meant to be used as a decorator function to register module\nprocedures. The registered func needs to be a callable which optionally takes\n",(0,n.kt)("inlineCode",{parentName:"p"},"ProcCtx")," as the first argument. Other arguments of func will be bound to values\npassed in the Cypher query. The full signature of func needs to be annotated with\ntypes. The return type must be ",(0,n.kt)("inlineCode",{parentName:"p"},"Record(field_name=type, \u2026)")," and the procedure must\nproduce either a complete ",(0,n.kt)("inlineCode",{parentName:"p"},"Record")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"None"),". To mark a field as deprecated, use\n",(0,n.kt)("inlineCode",{parentName:"p"},"Record(field_name=Deprecated(type), \u2026)"),". Multiple records can be produced by\nreturning an iterable of them. Registering generator functions is currently not\nsupported."),(0,n.kt)("h3",{id:"example-usage"},"Example usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"    import mgp\n\n    @mgp.read_proc\n    def procedure(context: mgp.ProcCtx,\n                required_arg: mgp.Nullable[mgp.Any],\n                optional_arg: mgp.Nullable[mgp.Any] = None\n                ) -> mgp.Record(result=str, args=list):\n        args = [required_arg, optional_arg]\n        # Multiple rows can be produced by returning an iterable of mgp.Record\n        return mgp.Record(args=args, result='Hello World!')\n")),(0,n.kt)("p",null,"The example procedure above returns 2 fields: ",(0,n.kt)("inlineCode",{parentName:"p"},"args")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"result"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"args")," is a copy of arguments passed to the procedure."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"result")," is the result of this procedure, a \u201cHello World!\u201d string.")),(0,n.kt)("p",null,"Any errors can be reported by raising an ",(0,n.kt)("inlineCode",{parentName:"p"},"Exception"),"."),(0,n.kt)("p",null,"The procedure can be invoked in Cypher using the following calls:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL example.procedure(1, 2) YIELD args, result;\nCALL example.procedure(1) YIELD args, result;\n")),(0,n.kt)("p",null,"Naturally, you may pass in different arguments or yield less fields."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Install the ",(0,n.kt)("inlineCode",{parentName:"p"},"mgp")," Python module so your editor can use typing annotations\nproperly and suggest methods and classes it contains. You can install the module\nby running ",(0,n.kt)("inlineCode",{parentName:"p"},"pip install mgp"),".")),(0,n.kt)("h2",{id:"class-mgpwrite_procfunc-callable-mgprecord"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.write_proc(func: Callable[[\u2026], mgp.Record])")),(0,n.kt)("p",null,"Register func as a writeable procedure of the current module."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"write_proc")," is meant to be used as a decorator function to register module\nprocedures. The registered func needs to be a callable which optionally takes\n",(0,n.kt)("inlineCode",{parentName:"p"},"ProcCtx")," as the first argument. Other arguments of func will be bound to values\npassed in the Cypher query. The full signature of func needs to be annotated with\ntypes. The return type must be ",(0,n.kt)("inlineCode",{parentName:"p"},"Record(field_name=type, \u2026)")," and the procedure must\nproduce either a complete ",(0,n.kt)("inlineCode",{parentName:"p"},"Record")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"None"),". To mark a field as deprecated, use\n",(0,n.kt)("inlineCode",{parentName:"p"},"Record(field_name=Deprecated(type), \u2026)"),". Multiple records can be produced by\nreturning an iterable of them. Registering generator functions is currently not\nsupported."),(0,n.kt)("h3",{id:"example-usage-1"},"Example usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\n\n@mgp.write_proc\ndef procedure(context: mgp.ProcCtx,\n    required_arg: str,\n    optional_arg: mgp.Nullable[str] = None\n    ) -> mgp.Record(result=mgp.Vertex):\n\n    vertex = context.graph.create_vertex()\n    vertex_properties = vertex.properties\n    vertex_properties[\u201crequired_arg\u201d] = required_arg\n\n    if optional_arg is not None:\n        vertex_properties[\u201coptional_arg\u201d] = optional_arg\n\n    return mgp.Record(result=vertex)\n")),(0,n.kt)("p",null,"The example procedure above returns  a newly created vertex which has at most 2\nproperties:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"required_arg")," is always present and its value is the first argument of the\nprocedure."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"optional_arg")," is present if the second argument of the procedure is not null.")),(0,n.kt)("p",null,"Any errors can be reported by raising an ",(0,n.kt)("inlineCode",{parentName:"p"},"Exception"),"."),(0,n.kt)("p",null,"The procedure can be invoked in Cypher using the following calls:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL example.procedure(\u201cproperty value\u201d, \u201canother one\u201d) YIELD result;\nCALL example.procedure(\u201csingle argument\u201d) YIELD result;\n")),(0,n.kt)("p",null,"Naturally, you may pass in different arguments."),(0,n.kt)("h2",{id:"class-mgppropertiesvertex_or_edge"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.Properties(vertex_or_edge)")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"object")),(0,n.kt)("p",null,"A collection of properties either on a Vertex or an Edge."),(0,n.kt)("h3",{id:"getproperty_name-str-defaultnone"},(0,n.kt)("inlineCode",{parentName:"h3"},"get(property_name: str, default=None)")),(0,n.kt)("p",null,"Get the value of a property with the given name or return default."),(0,n.kt)("p",null,"Raise InvalidContextError. Raise UnableToAllocateError if unable to allocate a\nmgp.Value. Raise DeletedObjectError if the object has been deleted."),(0,n.kt)("h3",{id:"items"},(0,n.kt)("inlineCode",{parentName:"h3"},"items()")),(0,n.kt)("p",null,"Iterate over the properties."),(0,n.kt)("p",null,"Doesn\u2019t return a dynamic view of the properties, but copies the current\nproperties."),(0,n.kt)("p",null,"Raise InvalidContextError. Raise UnableToAllocateError if unable to allocate an\niterator. Raise DeletedObjectError if the object has been deleted."),(0,n.kt)("h3",{id:"keys"},(0,n.kt)("inlineCode",{parentName:"h3"},"keys()")),(0,n.kt)("p",null,"Iterate over property names."),(0,n.kt)("p",null,"Doesn\u2019t return a dynamic view of the property names, but copies the name of the\ncurrent properties."),(0,n.kt)("p",null,"Raise InvalidContextError. Raise UnableToAllocateError if unable to allocate an\niterator. Raise DeletedObjectError if the object has been deleted."),(0,n.kt)("h3",{id:"setproperty_name-str-value-object"},(0,n.kt)("inlineCode",{parentName:"h3"},"set(property_name: str, value: object)")),(0,n.kt)("p",null,"Set the value of the property. When the value is None, then the property is\nremoved."),(0,n.kt)("p",null,"Raise UnableToAllocateError if unable to allocate memory for storing the\nproperty. Raise ImmutableObjectError if the object is immutable. Raise\nDeletedObjectError if the ojbect has been deleted. Raise SerializationError if\nthe object has been modified by another transaction. Raise ValueConversionError\nif value is vertex, edge or path."),(0,n.kt)("h3",{id:"values"},(0,n.kt)("inlineCode",{parentName:"h3"},"values()")),(0,n.kt)("p",null,"Iterate over property values."),(0,n.kt)("p",null,"Doesn\u2019t return a dynamic view of the property values, but copies the value of\nthe current properties."),(0,n.kt)("p",null,"Raise InvalidContextError. Raise UnableToAllocateError if unable to allocate an\niterator. Raise DeletedObjectError if the object has been deleted."),(0,n.kt)("h2",{id:"class-mgplabelname-str"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.Label(name: str)")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"object")),(0,n.kt)("p",null,"Label of a Vertex."),(0,n.kt)("h3",{id:"property-name"},(0,n.kt)("inlineCode",{parentName:"h3"},"property name()")),(0,n.kt)("h2",{id:"class-mgpedgetypename"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.EdgeType(name)")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"object")),(0,n.kt)("p",null,"Type of an Edge."),(0,n.kt)("h3",{id:"property-name-1"},(0,n.kt)("inlineCode",{parentName:"h3"},"property name()")),(0,n.kt)("h2",{id:"class-mgpedgeedge"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.Edge(edge)")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"object")),(0,n.kt)("p",null,"Edge in the graph database."),(0,n.kt)("p",null,"Access to an Edge is only valid during a single execution of a procedure in a\nquery. You should not globally store an instance of an Edge. Using an invalid\nEdge instance will raise InvalidContextError."),(0,n.kt)("h3",{id:"property-from_vertex"},(0,n.kt)("inlineCode",{parentName:"h3"},"property from_vertex()")),(0,n.kt)("p",null,"Get the source vertex."),(0,n.kt)("p",null,"Raise InvalidContextError."),(0,n.kt)("h3",{id:"property-id"},(0,n.kt)("inlineCode",{parentName:"h3"},"property id()")),(0,n.kt)("p",null,"Get the ID of the edge."),(0,n.kt)("p",null,"Raise InvalidContextError."),(0,n.kt)("h3",{id:"is_valid"},(0,n.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,n.kt)("p",null,"Return True if self is in valid context and may be used."),(0,n.kt)("h3",{id:"property-properties"},(0,n.kt)("inlineCode",{parentName:"h3"},"property properties()")),(0,n.kt)("p",null,"Get the properties of the edge."),(0,n.kt)("p",null,"Raise InvalidContextError."),(0,n.kt)("h3",{id:"property-to_vertex"},(0,n.kt)("inlineCode",{parentName:"h3"},"property to_vertex()")),(0,n.kt)("p",null,"Get the destination vertex."),(0,n.kt)("p",null,"Raise InvalidContextError."),(0,n.kt)("h3",{id:"property-type"},(0,n.kt)("inlineCode",{parentName:"h3"},"property type()")),(0,n.kt)("p",null,"Get the type of the edge."),(0,n.kt)("p",null,"Raise InvalidContextError."),(0,n.kt)("h3",{id:"underlying_graph_is_mutable"},(0,n.kt)("inlineCode",{parentName:"h3"},"underlying_graph_is_mutable()")),(0,n.kt)("p",null,"Return True if the edge can be modified."),(0,n.kt)("h2",{id:"class-mgpvertexvertex"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.Vertex(vertex)")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"object")),(0,n.kt)("p",null,"Vertex in the graph database."),(0,n.kt)("p",null,"Access to a Vertex is only valid during a single execution of a procedure in a\nquery. You should not globally store an instance of a Vertex. Using an invalid\nVertex instance will raise InvalidContextError."),(0,n.kt)("h3",{id:"add_labellabel-str"},(0,n.kt)("inlineCode",{parentName:"h3"},"add_label(label: str)")),(0,n.kt)("p",null,"Add the label to the vertex."),(0,n.kt)("p",null,"Raise InvalidContextError. Raise UnableToAllocateError if unable to allocate\nmemory for storing the label. Raise ImmutableObjectError if self is immutable.\nRaise DeletedObjectError if self has been deleted. Raise SerializationError if\nself has been modified by another transaction."),(0,n.kt)("h3",{id:"property-id-1"},(0,n.kt)("inlineCode",{parentName:"h3"},"property id()")),(0,n.kt)("p",null,"Get the ID of the vertex."),(0,n.kt)("p",null,"Raise InvalidContextError."),(0,n.kt)("h3",{id:"property-in_edges"},(0,n.kt)("inlineCode",{parentName:"h3"},"property in_edges()")),(0,n.kt)("p",null,"Iterate over inbound edges of the vertex."),(0,n.kt)("p",null,"Doesn\u2019t return a dynamic view of the edges, but copies the current inbound\nedges."),(0,n.kt)("p",null,"Raise InvalidContextError. Raise UnableToAllocateError if unable to allocate an\niterator. Raise DeletedObjectError if self has been deleted."),(0,n.kt)("h3",{id:"is_valid-1"},(0,n.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,n.kt)("p",null,"Return True if self is in valid context and may be used."),(0,n.kt)("h3",{id:"property-labels"},(0,n.kt)("inlineCode",{parentName:"h3"},"property labels()")),(0,n.kt)("p",null,"Get the labels of the vertex."),(0,n.kt)("p",null,"Raise InvalidContextError. Raise OutOfRangeError if some of the labels are\nremoved while collecting the labels. Raise DeletedObjectError if self has been\ndeleted."),(0,n.kt)("h3",{id:"property-out_edges"},(0,n.kt)("inlineCode",{parentName:"h3"},"property out_edges()")),(0,n.kt)("p",null,"Iterate over outbound edges of the vertex."),(0,n.kt)("p",null,"Doesn\u2019t return a dynamic view of the edges, but copies the current outbound\nedges."),(0,n.kt)("p",null,"Raise InvalidContextError. Raise UnableToAllocateError if unable to allocate an\niterator. Raise DeletedObjectError if self has been deleted."),(0,n.kt)("h3",{id:"property-properties-1"},(0,n.kt)("inlineCode",{parentName:"h3"},"property properties()")),(0,n.kt)("p",null,"Get the properties of the vertex."),(0,n.kt)("p",null,"Raise InvalidContextError."),(0,n.kt)("h3",{id:"remove_labellabel-str"},(0,n.kt)("inlineCode",{parentName:"h3"},"remove_label(label: str)")),(0,n.kt)("p",null,"Remove the label from the vertex."),(0,n.kt)("p",null,"Raise InvalidContextError. Raise ImmutableObjectError if self is immutable.\nRaise DeletedObjectError if self has been deleted. Raise SerializationError if\nself has been modified by another transaction."),(0,n.kt)("h3",{id:"underlying_graph_is_mutable-1"},(0,n.kt)("inlineCode",{parentName:"h3"},"underlying_graph_is_mutable()")),(0,n.kt)("p",null,"Return True if the vertex can be modified."),(0,n.kt)("h2",{id:"class-mgppathstarting_vertex_or_path-union_mgppath-mgpvertex"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.Path(starting_vertex_or_path: Union[_mgp.Path, mgp.Vertex])")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"object")),(0,n.kt)("p",null,"Path containing Vertex and Edge instances."),(0,n.kt)("h3",{id:"property-edges"},(0,n.kt)("inlineCode",{parentName:"h3"},"property edges()")),(0,n.kt)("p",null,"Edges ordered from the start to the end of the path."),(0,n.kt)("p",null,"Raise InvalidContextError if using an invalid Path instance."),(0,n.kt)("h3",{id:"expandedge-mgpedge"},(0,n.kt)("inlineCode",{parentName:"h3"},"expand(edge: mgp.Edge)")),(0,n.kt)("p",null,"Append an edge continuing from the last vertex on the path."),(0,n.kt)("p",null,"The last vertex on the path will become the other endpoint of the given edge, as\ncontinued from the current last vertex."),(0,n.kt)("p",null,"Raise InvalidContextError if using an invalid Path instance or if passed in edge\nis invalid. Raise LogicErrorError if the current last vertex in the path is not\npart of the given edge. Raise UnableToAllocateError if unable to allocate memory\nfor path extension."),(0,n.kt)("h3",{id:"is_valid-2"},(0,n.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,n.kt)("h3",{id:"property-vertices"},(0,n.kt)("inlineCode",{parentName:"h3"},"property vertices()")),(0,n.kt)("p",null,"Vertices ordered from the start to the end of the path."),(0,n.kt)("p",null,"Raise InvalidContextError if using an invalid Path instance."),(0,n.kt)("h2",{id:"class-mgprecordkwargs"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.Record(**kwargs)")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"object")),(0,n.kt)("p",null,"Represents a record of resulting field values."),(0,n.kt)("h3",{id:"fields"},(0,n.kt)("inlineCode",{parentName:"h3"},"fields()")),(0,n.kt)("h2",{id:"class-mgpverticesgraph"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.Vertices(graph)")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"object")),(0,n.kt)("p",null,"Iterable over vertices in a graph."),(0,n.kt)("h3",{id:"is_valid-3"},(0,n.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,n.kt)("p",null,"Return True if self is in valid context and may be used."),(0,n.kt)("h2",{id:"class-mgpgraphgraph"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.Graph(graph)")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"object")),(0,n.kt)("p",null,"State of the graph database in current ProcCtx."),(0,n.kt)("h3",{id:"create_edgefrom_vertex-mgpvertex-to_vertex-mgpvertex-edge_type-mgpedgetype"},(0,n.kt)("inlineCode",{parentName:"h3"},"create_edge(from_vertex: mgp.Vertex, to_vertex: mgp.Vertex, edge_type: mgp.EdgeType)")),(0,n.kt)("p",null,"Create an edge."),(0,n.kt)("p",null,"Raise ImmutableObjectError if self ","`"," is immutable. Raise UnableToAllocateError\nif unable to allocate an edge. Raise DeletedObjectError if ","`","from_vertex or\nto_vertex has been deleted. Raise SerializationError if from_vertex or to_vertex\nhas been modified by another transaction."),(0,n.kt)("h3",{id:"create_vertex"},(0,n.kt)("inlineCode",{parentName:"h3"},"create_vertex()")),(0,n.kt)("p",null,"Create a vertex."),(0,n.kt)("p",null,"Raise ImmutableObjectError if self is immutable. Raise UnableToAllocateError if\nunable to allocate a vertex."),(0,n.kt)("h3",{id:"delete_edgeedge-mgpedge"},(0,n.kt)("inlineCode",{parentName:"h3"},"delete_edge(edge: mgp.Edge)")),(0,n.kt)("p",null,"Delete an edge."),(0,n.kt)("p",null,"Raise ImmutableObjectError if self is immutable. Raise SerializationError if\nedge, its source or destination vertex has been modified by another transaction."),(0,n.kt)("h3",{id:"delete_vertexvertex-mgpvertex"},(0,n.kt)("inlineCode",{parentName:"h3"},"delete_vertex(vertex: mgp.Vertex)")),(0,n.kt)("p",null,"Delete a vertex."),(0,n.kt)("p",null,"Raise ImmutableObjectError if self is immutable. Raise LogicErrorError if vertex\nhas edges. Raise SerializationError if vertex has been modified by another\ntransaction."),(0,n.kt)("h3",{id:"detach_delete_vertexvertex-mgpvertex"},(0,n.kt)("inlineCode",{parentName:"h3"},"detach_delete_vertex(vertex: mgp.Vertex)")),(0,n.kt)("p",null,"Delete a vertex and all of its edges."),(0,n.kt)("p",null,"Raise ImmutableObjectError if self is immutable. Raise SerializationError if\nvertex has been modified by another transaction."),(0,n.kt)("h3",{id:"get_vertex_by_idvertex_id-vertexid"},(0,n.kt)("inlineCode",{parentName:"h3"},"get_vertex_by_id(vertex_id: VertexId)")),(0,n.kt)("p",null,"Return the Vertex corresponding to given vertex_id from the graph."),(0,n.kt)("p",null,"Access to a Vertex is only valid during a single execution of a procedure in a\nquery. You should not globally store the returned Vertex."),(0,n.kt)("p",null,"Raise IndexError if unable to find the given vertex_id. Raise\nInvalidContextError if context is invalid."),(0,n.kt)("h3",{id:"is_mutable"},(0,n.kt)("inlineCode",{parentName:"h3"},"is_mutable()")),(0,n.kt)("p",null,"Return True if self represents a mutable graph, thus it can be used to modify\nvertices and edges."),(0,n.kt)("h3",{id:"is_valid-4"},(0,n.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,n.kt)("p",null,"Return True if self is in valid context and may be used."),(0,n.kt)("h3",{id:"property-vertices-1"},(0,n.kt)("inlineCode",{parentName:"h3"},"property vertices()")),(0,n.kt)("p",null,"All vertices in the graph."),(0,n.kt)("p",null,"Access to a Vertex is only valid during a single execution of a procedure in a\nquery. You should not globally store the returned Vertex instances."),(0,n.kt)("p",null,"Raise InvalidContextError if context is invalid."),(0,n.kt)("h2",{id:"class-mgpprocctxgraph"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.ProcCtx(graph)")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"object")),(0,n.kt)("p",null,"Context of a procedure being executed."),(0,n.kt)("p",null,"Access to a ProcCtx is only valid during a single execution of a procedure in a\nquery. You should not globally store a ProcCtx instance."),(0,n.kt)("h3",{id:"check_must_abort"},(0,n.kt)("inlineCode",{parentName:"h3"},"check_must_abort()")),(0,n.kt)("h3",{id:"property-graph"},(0,n.kt)("inlineCode",{parentName:"h3"},"property graph()")),(0,n.kt)("p",null,"Raise InvalidContextError if context is invalid."),(0,n.kt)("h3",{id:"is_valid-5"},(0,n.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,n.kt)("h3",{id:"must_abort"},(0,n.kt)("inlineCode",{parentName:"h3"},"must_abort()")),(0,n.kt)("h2",{id:"class-mgpdeprecatedtype_"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.Deprecated(type_)")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"object")),(0,n.kt)("p",null,"Annotate a resulting Record\u2019s field as deprecated."),(0,n.kt)("h3",{id:"field_type"},(0,n.kt)("inlineCode",{parentName:"h3"},"field_type()")),(0,n.kt)("h2",{id:"class-mgp_typing_to_cypher_typetype_"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp._typing_to_cypher_type(type_)")),(0,n.kt)("p",null,"Convert typing annotation to a _mgp.CypherType instance."),(0,n.kt)("h2",{id:"class-mgpunsupportedtypingerrortype_"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.UnsupportedTypingError(type_)")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"Exception")),(0,n.kt)("p",null,"Signals a typing annotation is not supported as a _mgp.CypherType."),(0,n.kt)("h2",{id:"class-mgpaborterror"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.AbortError()")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"Exception")),(0,n.kt)("p",null,"Signals that the procedure was asked to abort its execution."),(0,n.kt)("h2",{id:"class-mgpinvalidcontexterror"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.InvalidContextError()")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"Exception")),(0,n.kt)("p",null,"Signals using a graph element instance outside of the registered procedure."),(0,n.kt)("h2",{id:"class-mgpinvalidmessageerror"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.InvalidMessageError()")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"Exception")),(0,n.kt)("p",null,"Signals using a message instance outside of the registered transformation."),(0,n.kt)("h2",{id:"class-mgpinvalidmessageserror"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.InvalidMessagesError()")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"Exception")),(0,n.kt)("p",null,"Signals using a messages instance outside of the registered transformation."),(0,n.kt)("h2",{id:"class-mgpdeletedobjecterrorargs-any-kwargs-any"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.DeletedObjectError(*args: Any, **kwargs: Any)")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"_mgp.")),(0,n.kt)("p",null,"Signals accessing an already deleted object."),(0,n.kt)("h2",{id:"class-mgpimmutableobjecterrorargs-any-kwargs-any"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.ImmutableObjectError(*args: Any, **kwargs: Any)")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"_mgp.")),(0,n.kt)("p",null,"Signals modification of an immutable object."),(0,n.kt)("h2",{id:"class-mgpinsufficientbuffererrorargs-any-kwargs-any"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.InsufficientBufferError(*args: Any, **kwargs: Any)")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"_mgp.")),(0,n.kt)("p",null,"Signals that some buffer is not big enough."),(0,n.kt)("h2",{id:"class-mgpinvalidargumenterrorargs-any-kwargs-any"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.InvalidArgumentError(*args: Any, **kwargs: Any)")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"_mgp.")),(0,n.kt)("p",null,"Signals that some of the arguments have invalid values."),(0,n.kt)("h2",{id:"class-mgpkeyalreadyexistserrorargs-any-kwargs-any"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.KeyAlreadyExistsError(*args: Any, **kwargs: Any)")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"_mgp.")),(0,n.kt)("p",null,"Signals that a key already exists in a container-like object."),(0,n.kt)("h2",{id:"class-mgplogicerrorerrorargs-any-kwargs-any"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.LogicErrorError(*args: Any, **kwargs: Any)")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"_mgp.")),(0,n.kt)("p",null,"Signals faulty logic within the program such as violating logical preconditions\nor class invariants and may be preventable."),(0,n.kt)("h2",{id:"class-mgpoutofrangeerrorargs-any-kwargs-any"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.OutOfRangeError(*args: Any, **kwargs: Any)")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"_mgp.")),(0,n.kt)("p",null,"Signals that an index-like parameter has a value that is outside its possible\nvalues."),(0,n.kt)("h2",{id:"class-mgpserializationerrorargs-any-kwargs-any"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.SerializationError(*args: Any, **kwargs: Any)")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"_mgp.")),(0,n.kt)("p",null,"Signals serialization error caused by concurrent modifications from different\ntransactions."),(0,n.kt)("h2",{id:"class-mgpunabletoallocateerrorargs-any-kwargs-any"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.UnableToAllocateError(*args: Any, **kwargs: Any)")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"_mgp.")),(0,n.kt)("p",null,"Signals failed memory allocation."),(0,n.kt)("h2",{id:"class-mgpunknownerrorargs-any-kwargs-any"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.UnknownError(*args: Any, **kwargs: Any)")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"_mgp.")),(0,n.kt)("p",null,"Signals unspecified failure."),(0,n.kt)("h2",{id:"class-mgpvalueconversionerrorargs-any-kwargs-any"},(0,n.kt)("inlineCode",{parentName:"h2"},"class mgp.ValueConversionError(*args: Any, **kwargs: Any)")),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"_mgp.")),(0,n.kt)("p",null,"Signals that the conversion failed between python and cypher values."))}c.isMDXComponent=!0}}]);