"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44891],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,m=u["".concat(d,".").concat(h)]||u[h]||c[h]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6004:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={id:"python-api",title:"Query modules Python API",sidebar_label:"Python API"},d=void 0,p={unversionedId:"reference-guide/query-modules/api/python-api",id:"version-1.6.0/reference-guide/query-modules/api/python-api",isDocsHomePage:!1,title:"Query modules Python API",description:"This is the API documentation for mgp.py  which contains definitions of the public Python API provided by Memgraph.",source:"@site/memgraph_versioned_docs/version-1.6.0/reference-guide/query-modules/api/python-api.md",sourceDirName:"reference-guide/query-modules/api",slug:"/reference-guide/query-modules/api/python-api",permalink:"/memgraph/1.6.0/reference-guide/query-modules/api/python-api",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.6.0/reference-guide/query-modules/api/python-api.md",version:"1.6.0",frontMatter:{id:"python-api",title:"Query modules Python API",sidebar_label:"Python API"},sidebar:"version-1.6.0/memgraph",previous:{title:"C API",permalink:"/memgraph/1.6.0/reference-guide/query-modules/api/c-api"},next:{title:"Replication",permalink:"/memgraph/1.6.0/reference-guide/replication"}},s=[{value:"<code>mgp.read_proc(func)</code>",id:"mgpread_procfunc",children:[{value:"Examples",id:"examples",children:[]}]},{value:"<code>mgp._typing_to_cypher_type()</code>",id:"mgp_typing_to_cypher_type",children:[]},{value:"<code>class mgp.Properties(vertex_or_edge)</code>",id:"class-mgppropertiesvertex_or_edge",children:[{value:"<code>get(property_name, default)</code>",id:"getproperty_name-default",children:[]},{value:"<code>items()</code>",id:"items",children:[]},{value:"<code>keys()</code>",id:"keys",children:[]},{value:"<code>values()</code>",id:"values",children:[]}]},{value:"<code>class mgp.Label(name)</code>",id:"class-mgplabelname",children:[{value:"<code>name()</code>",id:"name",children:[]}]},{value:"<code>class mgp.EdgeType(name)</code>",id:"class-mgpedgetypename",children:[{value:"<code>name()</code>",id:"name-1",children:[]}]},{value:"<code>class mgp.Edge(edge)</code>",id:"class-mgpedgeedge",children:[{value:"<code>from_vertex()</code>",id:"from_vertex",children:[]},{value:"<code>id()</code>",id:"id",children:[]},{value:"<code>is_valid()</code>",id:"is_valid",children:[]},{value:"<code>properties()</code>",id:"properties",children:[]},{value:"<code>to_vertex()</code>",id:"to_vertex",children:[]},{value:"<code>type()</code>",id:"type",children:[]}]},{value:"<code>class mgp.Vertex(vertex)</code>",id:"class-mgpvertexvertex",children:[{value:"<code>id()</code>",id:"id-1",children:[]},{value:"<code>in_edges()</code>",id:"in_edges",children:[]},{value:"<code>is_valid()</code>",id:"is_valid-1",children:[]},{value:"<code>labels()</code>",id:"labels",children:[]},{value:"<code>out_edges()</code>",id:"out_edges",children:[]},{value:"<code>properties()</code>",id:"properties-1",children:[]}]},{value:"<code>class mgp.Path(starting_vertex_or_path: Union[&lt;sphinx.ext.autodoc.importer._MockObject object at 0x7f7fbd8d6700&gt;, mgp.Vertex])</code>",id:"class-mgppathstarting_vertex_or_path-unionsphinxextautodocimporter_mockobject-object-at-0x7f7fbd8d6700-mgpvertex",children:[{value:"<code>edges()</code>",id:"edges",children:[]},{value:"<code>expand(edge)</code>",id:"expandedge",children:[]},{value:"<code>is_valid()</code>",id:"is_valid-2",children:[]},{value:"<code>vertices()</code>",id:"vertices",children:[]}]},{value:"<code>class mgp.Record(**kwargs)</code>",id:"class-mgprecordkwargs",children:[{value:"<code>fields()</code>",id:"fields",children:[]}]},{value:"<code>class mgp.Vertices(graph)</code>",id:"class-mgpverticesgraph",children:[{value:"<code>is_valid()</code>",id:"is_valid-3",children:[]}]},{value:"<code>class mgp.Graph(graph)</code>",id:"class-mgpgraphgraph",children:[{value:"<code>get_vertex_by_id(vertex_id)</code>",id:"get_vertex_by_idvertex_id",children:[]},{value:"<code>is_valid()</code>",id:"is_valid-4",children:[]},{value:"<code>vertices()</code>",id:"vertices-1",children:[]}]},{value:"<code>class mgp.ProcCtx(graph)</code>",id:"class-mgpprocctxgraph",children:[{value:"<code>check_must_abort()</code>",id:"check_must_abort",children:[]},{value:"<code>graph()</code>",id:"graph",children:[]},{value:"<code>is_valid()</code>",id:"is_valid-5",children:[]},{value:"<code>must_abort()</code>",id:"must_abort",children:[]}]},{value:"<code>class mgp.Deprecated(type_)</code>",id:"class-mgpdeprecatedtype_",children:[{value:"<code>field_type()</code>",id:"field_type",children:[]}]},{value:"<code>class mgp.UnsupportedTypingError(type_)</code>",id:"class-mgpunsupportedtypingerrortype_",children:[]},{value:"<code>class mgp.AbortError()</code>",id:"class-mgpaborterror",children:[]},{value:"<code>class mgp.InvalidContextError()</code>",id:"class-mgpinvalidcontexterror",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is the API documentation for ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.py"),"  which contains definitions of the public Python API provided by Memgraph.\nIn essence, this is a wrapper around the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/memgraph/1.6.0/reference-guide/query-modules/api/c-api"},"C API")),". This source file can be found in the Memgraph installation directory,\nunder ",(0,a.kt)("inlineCode",{parentName:"p"},"python_support"),". On the standard Debian installation, this will be under ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/python_support"),"."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"NOTE:")," This part of the documentation is still under development. An updated version will soon be available."))),(0,a.kt)("h2",{id:"mgpread_procfunc"},(0,a.kt)("inlineCode",{parentName:"h2"},"mgp.read_proc(func)")),(0,a.kt)("p",null,"Register func as a a read-only procedure of the current module."),(0,a.kt)("p",null,"read_proc is meant to be used as a decorator function to register module\nprocedures. The registered func needs to be a callable which optionally\ntakes ProcCtx as the first argument. Other arguments of func will be\nbound to values passed in the cypherQuery. The full signature of func\nneeds to be annotated with types. The return type must be\nRecord(field_name=type, \u2026) and the procedure must produce either a\ncomplete Record or None. To mark a field as deprecated, use\nRecord(field_name=Deprecated(type), \u2026). Multiple records can be\nproduced by returning an iterable of them. Registering generator functions\nis currently not supported."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"    import mgp\n\n    @mgp.read_proc\n    def procedure(context: mgp.ProcCtx,\n                required_arg: mgp.Nullable[mgp.Any],\n                optional_arg: mgp.Nullable[mgp.Any] = None\n                ) -> mgp.Record(result=str, args=list):\n        args = [required_arg, optional_arg]\n        # Multiple rows can be produced by returning an iterable of mgp.Record\n        return mgp.Record(args=args, result='Hello World!')\n")),(0,a.kt)("p",null,"The example procedure above returns 2 fields: args and result."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"args is a copy of arguments passed to the procedure.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"result is the result of this procedure, a \u201cHello World!\u201d string.")),(0,a.kt)("p",null,"Any errors can be reported by raising an Exception."),(0,a.kt)("p",null,"The procedure can be invoked in openCypher using the following calls:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CALL example.procedure(1, 2) YIELD args, result;\nCALL example.procedure(1) YIELD args, result;\n")),(0,a.kt)("p",null,"Naturally, you may pass in different arguments or yield less fields."),(0,a.kt)("h2",{id:"mgp_typing_to_cypher_type"},(0,a.kt)("inlineCode",{parentName:"h2"},"mgp._typing_to_cypher_type()")),(0,a.kt)("p",null,"Convert typing annotation to a _mgp.CypherType instance."),(0,a.kt)("h2",{id:"class-mgppropertiesvertex_or_edge"},(0,a.kt)("inlineCode",{parentName:"h2"},"class mgp.Properties(vertex_or_edge)")),(0,a.kt)("p",null,"Bases: ",(0,a.kt)("inlineCode",{parentName:"p"},"object")),(0,a.kt)("p",null,"A collection of properties either on a Vertex or an Edge."),(0,a.kt)("h3",{id:"getproperty_name-default"},(0,a.kt)("inlineCode",{parentName:"h3"},"get(property_name, default)")),(0,a.kt)("p",null,"Get the value of a property with the given name or return default."),(0,a.kt)("p",null,"Raise InvalidContextError."),(0,a.kt)("h3",{id:"items"},(0,a.kt)("inlineCode",{parentName:"h3"},"items()")),(0,a.kt)("p",null,"Raise InvalidContextError."),(0,a.kt)("h3",{id:"keys"},(0,a.kt)("inlineCode",{parentName:"h3"},"keys()")),(0,a.kt)("p",null,"Iterate over property names."),(0,a.kt)("p",null,"Raise InvalidContextError."),(0,a.kt)("h3",{id:"values"},(0,a.kt)("inlineCode",{parentName:"h3"},"values()")),(0,a.kt)("p",null,"Iterate over property values."),(0,a.kt)("p",null,"Raise InvalidContextError."),(0,a.kt)("h2",{id:"class-mgplabelname"},(0,a.kt)("inlineCode",{parentName:"h2"},"class mgp.Label(name)")),(0,a.kt)("p",null,"Bases: ",(0,a.kt)("inlineCode",{parentName:"p"},"object")),(0,a.kt)("p",null,"Label of a Vertex."),(0,a.kt)("h3",{id:"name"},(0,a.kt)("inlineCode",{parentName:"h3"},"name()")),(0,a.kt)("h2",{id:"class-mgpedgetypename"},(0,a.kt)("inlineCode",{parentName:"h2"},"class mgp.EdgeType(name)")),(0,a.kt)("p",null,"Bases: ",(0,a.kt)("inlineCode",{parentName:"p"},"object")),(0,a.kt)("p",null,"Type of an Edge."),(0,a.kt)("h3",{id:"name-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"name()")),(0,a.kt)("h2",{id:"class-mgpedgeedge"},(0,a.kt)("inlineCode",{parentName:"h2"},"class mgp.Edge(edge)")),(0,a.kt)("p",null,"Bases: ",(0,a.kt)("inlineCode",{parentName:"p"},"object")),(0,a.kt)("p",null,"Edge in the graph database."),(0,a.kt)("p",null,"Access to an Edge is only valid during a single execution of a procedure in\na query. You should not globally store an instance of an Edge. Using an\ninvalid Edge instance will raise InvalidContextError."),(0,a.kt)("h3",{id:"from_vertex"},(0,a.kt)("inlineCode",{parentName:"h3"},"from_vertex()")),(0,a.kt)("p",null,"Raise InvalidContextError."),(0,a.kt)("h3",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h3"},"id()")),(0,a.kt)("p",null,"Raise InvalidContextError."),(0,a.kt)("h3",{id:"is_valid"},(0,a.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,a.kt)("p",null,"Return True if self is in valid context and may be used."),(0,a.kt)("h3",{id:"properties"},(0,a.kt)("inlineCode",{parentName:"h3"},"properties()")),(0,a.kt)("p",null,"Raise InvalidContextError."),(0,a.kt)("h3",{id:"to_vertex"},(0,a.kt)("inlineCode",{parentName:"h3"},"to_vertex()")),(0,a.kt)("p",null,"Raise InvalidContextError."),(0,a.kt)("h3",{id:"type"},(0,a.kt)("inlineCode",{parentName:"h3"},"type()")),(0,a.kt)("p",null,"Raise InvalidContextError."),(0,a.kt)("h2",{id:"class-mgpvertexvertex"},(0,a.kt)("inlineCode",{parentName:"h2"},"class mgp.Vertex(vertex)")),(0,a.kt)("p",null,"Bases: ",(0,a.kt)("inlineCode",{parentName:"p"},"object")),(0,a.kt)("p",null,"Vertex in the graph database."),(0,a.kt)("p",null,"Access to a Vertex is only valid during a single execution of a procedure\nin a query. You should not globally store an instance of a Vertex. Using an\ninvalid Vertex instance will raise InvalidContextError."),(0,a.kt)("h3",{id:"id-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"id()")),(0,a.kt)("p",null,"Raise InvalidContextError."),(0,a.kt)("h3",{id:"in_edges"},(0,a.kt)("inlineCode",{parentName:"h3"},"in_edges()")),(0,a.kt)("p",null,"Raise InvalidContextError."),(0,a.kt)("h3",{id:"is_valid-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,a.kt)("p",null,"Return True if self is in valid context and may be used"),(0,a.kt)("h3",{id:"labels"},(0,a.kt)("inlineCode",{parentName:"h3"},"labels()")),(0,a.kt)("p",null,"Raise InvalidContextError."),(0,a.kt)("h3",{id:"out_edges"},(0,a.kt)("inlineCode",{parentName:"h3"},"out_edges()")),(0,a.kt)("p",null,"Raise InvalidContextError."),(0,a.kt)("h3",{id:"properties-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"properties()")),(0,a.kt)("p",null,"Raise InvalidContextError."),(0,a.kt)("h2",{id:"class-mgppathstarting_vertex_or_path-unionsphinxextautodocimporter_mockobject-object-at-0x7f7fbd8d6700-mgpvertex"},(0,a.kt)("inlineCode",{parentName:"h2"},"class mgp.Path(starting_vertex_or_path: Union[<sphinx.ext.autodoc.importer._MockObject object at 0x7f7fbd8d6700>, mgp.Vertex])")),(0,a.kt)("p",null,"Bases: ",(0,a.kt)("inlineCode",{parentName:"p"},"object")),(0,a.kt)("p",null,"Path containing Vertex and Edge instances."),(0,a.kt)("h3",{id:"edges"},(0,a.kt)("inlineCode",{parentName:"h3"},"edges()")),(0,a.kt)("p",null,"Edges ordered from the start to the end of the path."),(0,a.kt)("p",null,"Raise InvalidContextError if using an invalid Path instance."),(0,a.kt)("h3",{id:"expandedge"},(0,a.kt)("inlineCode",{parentName:"h3"},"expand(edge)")),(0,a.kt)("p",null,"Append an edge continuing from the last vertex on the path."),(0,a.kt)("p",null,"The last vertex on the path will become the other endpoint of the given\nedge, as continued from the current last vertex."),(0,a.kt)("p",null,"Raise ValueError if the current last vertex in the path is not part of\nthe given edge.\nRaise InvalidContextError if using an invalid Path instance or if\npassed in edge is invalid."),(0,a.kt)("h3",{id:"is_valid-2"},(0,a.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,a.kt)("h3",{id:"vertices"},(0,a.kt)("inlineCode",{parentName:"h3"},"vertices()")),(0,a.kt)("p",null,"Vertices ordered from the start to the end of the path."),(0,a.kt)("p",null,"Raise InvalidContextError if using an invalid Path instance."),(0,a.kt)("h2",{id:"class-mgprecordkwargs"},(0,a.kt)("inlineCode",{parentName:"h2"},"class mgp.Record(**kwargs)")),(0,a.kt)("p",null,"Bases: ",(0,a.kt)("inlineCode",{parentName:"p"},"object")),(0,a.kt)("p",null,"Represents a record of resulting field values."),(0,a.kt)("h3",{id:"fields"},(0,a.kt)("inlineCode",{parentName:"h3"},"fields()")),(0,a.kt)("h2",{id:"class-mgpverticesgraph"},(0,a.kt)("inlineCode",{parentName:"h2"},"class mgp.Vertices(graph)")),(0,a.kt)("p",null,"Bases: ",(0,a.kt)("inlineCode",{parentName:"p"},"object")),(0,a.kt)("p",null,"Iterable over vertices in a graph."),(0,a.kt)("h3",{id:"is_valid-3"},(0,a.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,a.kt)("p",null,"Return True if self is in valid context and may be used."),(0,a.kt)("h2",{id:"class-mgpgraphgraph"},(0,a.kt)("inlineCode",{parentName:"h2"},"class mgp.Graph(graph)")),(0,a.kt)("p",null,"Bases: ",(0,a.kt)("inlineCode",{parentName:"p"},"object")),(0,a.kt)("p",null,"State of the graph database in current ProcCtx."),(0,a.kt)("h3",{id:"get_vertex_by_idvertex_id"},(0,a.kt)("inlineCode",{parentName:"h3"},"get_vertex_by_id(vertex_id)")),(0,a.kt)("p",null,"Return the Vertex corresponding to given vertex_id from the graph."),(0,a.kt)("p",null,"Access to a Vertex is only valid during a single execution of a\nprocedure in a query. You should not globally store the returned\nVertex."),(0,a.kt)("p",null,"Raise IndexError if unable to find the given vertex_id.\nRaise InvalidContextError if context is invalid."),(0,a.kt)("h3",{id:"is_valid-4"},(0,a.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,a.kt)("p",null,"Return True if self is in valid context and may be used."),(0,a.kt)("h3",{id:"vertices-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"vertices()")),(0,a.kt)("p",null,"All vertices in the graph."),(0,a.kt)("p",null,"Access to a Vertex is only valid during a single execution of a\nprocedure in a query. You should not globally store the returned Vertex\ninstances."),(0,a.kt)("p",null,"Raise InvalidContextError if context is invalid."),(0,a.kt)("h2",{id:"class-mgpprocctxgraph"},(0,a.kt)("inlineCode",{parentName:"h2"},"class mgp.ProcCtx(graph)")),(0,a.kt)("p",null,"Bases: ",(0,a.kt)("inlineCode",{parentName:"p"},"object")),(0,a.kt)("p",null,"Context of a procedure being executed."),(0,a.kt)("p",null,"Access to a ProcCtx is only valid during a single execution of a procedure\nin a query. You should not globally store a ProcCtx instance."),(0,a.kt)("h3",{id:"check_must_abort"},(0,a.kt)("inlineCode",{parentName:"h3"},"check_must_abort()")),(0,a.kt)("h3",{id:"graph"},(0,a.kt)("inlineCode",{parentName:"h3"},"graph()")),(0,a.kt)("p",null,"Raise InvalidContextError if context is invalid."),(0,a.kt)("h3",{id:"is_valid-5"},(0,a.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,a.kt)("h3",{id:"must_abort"},(0,a.kt)("inlineCode",{parentName:"h3"},"must_abort()")),(0,a.kt)("h2",{id:"class-mgpdeprecatedtype_"},(0,a.kt)("inlineCode",{parentName:"h2"},"class mgp.Deprecated(type_)")),(0,a.kt)("p",null,"Bases: ",(0,a.kt)("inlineCode",{parentName:"p"},"object")),(0,a.kt)("p",null,"Annotate a resulting Record\u2019s field as deprecated."),(0,a.kt)("h3",{id:"field_type"},(0,a.kt)("inlineCode",{parentName:"h3"},"field_type()")),(0,a.kt)("h2",{id:"class-mgpunsupportedtypingerrortype_"},(0,a.kt)("inlineCode",{parentName:"h2"},"class mgp.UnsupportedTypingError(type_)")),(0,a.kt)("p",null,"Bases: ",(0,a.kt)("inlineCode",{parentName:"p"},"Exception")),(0,a.kt)("p",null,"Signals a typing annotation is not supported as a _mgp.CypherType."),(0,a.kt)("h2",{id:"class-mgpaborterror"},(0,a.kt)("inlineCode",{parentName:"h2"},"class mgp.AbortError()")),(0,a.kt)("p",null,"Bases: ",(0,a.kt)("inlineCode",{parentName:"p"},"Exception")),(0,a.kt)("p",null,"Signals that the procedure was asked to abort its execution."),(0,a.kt)("h2",{id:"class-mgpinvalidcontexterror"},(0,a.kt)("inlineCode",{parentName:"h2"},"class mgp.InvalidContextError()")),(0,a.kt)("p",null,"Bases: ",(0,a.kt)("inlineCode",{parentName:"p"},"Exception")),(0,a.kt)("p",null,"Signals using a graph element instance outside of the registered procedure."))}u.isMDXComponent=!0}}]);