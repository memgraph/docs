"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82467],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77861:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={id:"implement-query-modules",title:"Implement custom query modules",sidebar_label:"Implement custom query modules"},l=void 0,s={unversionedId:"database-functionalities/query-modules/implement-query-modules",id:"version-2.0.1/database-functionalities/query-modules/implement-query-modules",isDocsHomePage:!1,title:"Implement custom query modules",description:"We are going to examine how the query module example is implemented using the",source:"@site/memgraph_versioned_docs/version-2.0.1/database-functionalities/query-modules/implement-query-modules.md",sourceDirName:"database-functionalities/query-modules",slug:"/database-functionalities/query-modules/implement-query-modules",permalink:"/docs/memgraph/database-functionalities/query-modules/implement-query-modules",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.0.1/database-functionalities/query-modules/implement-query-modules.md",tags:[],version:"2.0.1",frontMatter:{id:"implement-query-modules",title:"Implement custom query modules",sidebar_label:"Implement custom query modules"},sidebar:"version-2.0.1/memgraph",previous:{title:"Query modules overview",permalink:"/docs/memgraph/database-functionalities/query-modules"},next:{title:"Replication",permalink:"/docs/memgraph/database-functionalities/replication"}},d=[{value:"Using Docker with query modules",id:"using-docker-with-query-modules",children:[],level:2},{value:"Python API",id:"python-api",children:[{value:"Writeable procedures",id:"writeable-procedures",children:[],level:3}],level:2},{value:"C API",id:"c-api",children:[],level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are going to examine how the query module ",(0,o.kt)("inlineCode",{parentName:"p"},"example")," is implemented using the\nC API and the Python API. Both query modules can be found in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For detailed technical information on query modules, check out the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/query-modules"},"reference guide"),"."))),(0,o.kt)("h2",{id:"using-docker-with-query-modules"},"Using Docker with query modules"),(0,o.kt)("p",null,"If you are using Docker to run Memgraph, you will have to create a volume and\nmount it to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"query_modules")," directory. This can be done by creating\nan empty directory ",(0,o.kt)("inlineCode",{parentName:"p"},"~modules")," and executing the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker volume create --driver local --opt type=none --opt device=/path/to/local/dir --opt o=bind module\n")),(0,o.kt)("p",null,"Don't forget to change the path ",(0,o.kt)("inlineCode",{parentName:"p"},"/path/to/local/dir")," to the directory where you\nwant to mount the volume. Now, you can start Memgraph and mount the created\nvolume:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it --rm -p 7687:7687 -p 3000:3000 -v module:/usr/lib/memgraph/query_modules memgraph\n")),(0,o.kt)("p",null,"Everything from the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," will be\nvisible/editable in your mounted ",(0,o.kt)("inlineCode",{parentName:"p"},"modules")," volume and vice versa."),(0,o.kt)("h2",{id:"python-api"},"Python API"),(0,o.kt)("p",null,"Query modules can be implemented using the Python API provided by Memgraph. If\nyou wish to write your own query modules using the Python API, you need to have\nPython version ",(0,o.kt)("inlineCode",{parentName:"p"},"3.5.0")," or above installed."),(0,o.kt)("p",null,"Let's take a look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"py_example.py")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\n")),(0,o.kt)("p",null,"On the first line, we import the ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp")," module, which contains definitions of the\npublic Python API provided by Memgraph. In essence, this is a wrapper around the\nC API described in the next section. This file (",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.py"),") can be found in the\nMemgraph installation directory, under ",(0,o.kt)("inlineCode",{parentName:"p"},"python_support"),". On the standard Debian\ninstallation, this will be under ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/python_support"),"."),(0,o.kt)("p",null,"Next, we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"procedure")," function. This function will serve as the callback\nfor our ",(0,o.kt)("inlineCode",{parentName:"p"},"py_example.procedure")," invocation through Cypher."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@mgp.read_proc\ndef procedure(context: mgp.ProcCtx,\n              required_arg: mgp.Nullable[mgp.Any],\n              optional_arg: mgp.Nullable[mgp.Any] = None\n              ) -> mgp.Record(args=list,\n                              vertex_count=int,\n                              avg_degree=mgp.Number,\n                              props=mgp.Nullable[mgp.Map]):\n\n  ...\n")),(0,o.kt)("p",null,"This procedure needs to be callable which optionally takes ",(0,o.kt)("inlineCode",{parentName:"p"},"ProcCtx")," as the\nfirst argument. Other arguments will be bound to values passed in the Cypher\nquery. The full signature of this procedure needs to be annotated with types.\nThe return type must be ",(0,o.kt)("inlineCode",{parentName:"p"},"Record(field_name=type, ...)")," and the procedure must\nproduce either a complete ",(0,o.kt)("inlineCode",{parentName:"p"},"Record")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),". As you can see, the procedure is\npassed to a ",(0,o.kt)("inlineCode",{parentName:"p"},"read_proc")," decorator which handles read-only procedures. You can\nalso inspect the definition of said decorator in the ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.py")," file or take a\nlook at the Python API ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/query-modules/api/python-api"},"reference\nguide"),"."),(0,o.kt)("p",null,"In our case, the example procedure returns four fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"args"),": a copy of arguments passed to the procedure."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"vertex_count"),": number of vertices in the database."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"avg_degree"),": average degree of vertices."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"props"),": properties map of the Vertex or Edge object passed in ",(0,o.kt)("inlineCode",{parentName:"li"},"required_arg"),".\nIn case a Path instance is passed, the procedure returns the properties map\nof the starting vertex.")),(0,o.kt)("p",null,"This procedure can be invoked in Cypher as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) WITH n LIMIT 1 CALL py_example.procedure(n, 1) YIELD * RETURN *;\n")),(0,o.kt)("p",null,"The following lines create the properties map for a received Edge, Vertex or\nPath instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"if isinstance(required_arg, (mgp.Edge, mgp.Vertex)):\n    props = dict(required_arg.properties.items())\nelif isinstance(required_arg, mgp.Path):\n    start_vertex, = required_arg.vertices\n    props = dict(start_vertex.properties.items())\n")),(0,o.kt)("p",null,"As you can see, in the case of ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Edge")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Vertex"),", we obtain an\ninstance of ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Properties")," class which holds the respective properties by\naccessing the ",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," property of our ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Edge")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Vertex")," instance.\nOnce we have access to ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Properties")," instance, we can simply invoke the\n",(0,o.kt)("inlineCode",{parentName:"p"},"items()")," method which returns an ",(0,o.kt)("inlineCode",{parentName:"p"},"Iterable")," that contains ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Property"),"\nobjects. Since the type of ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Property")," is a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"collections.namedtuple"),"\ncontaining ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),", we can easily pass it to a ",(0,o.kt)("inlineCode",{parentName:"p"},"dict")," constructor."),(0,o.kt)("p",null,"We go on to counting the number of vertices and edges in our graph:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"vertex_count = 0\nedge_count = 0\nfor v in context.graph.vertices:\n    vertex_count += 1\n    edge_count += sum(1 for e in v.in_edges)\n    edge_count += sum(1 for e in v.out_edges)\n")),(0,o.kt)("p",null,"As you can see, we can access the ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Graph")," instance through ",(0,o.kt)("inlineCode",{parentName:"p"},"context.graph"),".\nThis instance contains the state of our database when executing the Cypher query\nthat called our procedure. A ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Graph")," instance has a property ",(0,o.kt)("inlineCode",{parentName:"p"},"vertices"),"\nwhich allows us to access a ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Vertices")," object which can be iterated upon."),(0,o.kt)("p",null,"Similarly, each ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Vertex")," object has ",(0,o.kt)("inlineCode",{parentName:"p"},"in_edges")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"out_edges")," properties\nwhich allow us to iterate over the corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Edge")," objects. The rest of\nthe code logic from the previous snippet is self-explanatory, we simply increase\nthe adequate variables on each traversed vertex or edge."),(0,o.kt)("p",null,"After that we calculate the average degree and obtain a copy of the passed\narguments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"avg_degree = 0 if vertex_count == 0 else edge_count / vertex_count\nargs_copy = [copy.deepcopy(required_arg), copy.deepcopy(optional_arg)]\n")),(0,o.kt)("p",null,"Finally, we return a ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Record")," with all the calculated values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"return mgp.Record(args=args_copy, vertex_count=vertex_count,\n                  avg_degree=avg_degree, props=props)\n")),(0,o.kt)("h3",{id:"writeable-procedures"},"Writeable procedures"),(0,o.kt)("p",null,"Writeable procedures can be implemented in a very similar way as read-only\nprocedures. The only difference is writeable procedures receive mutable objects,\ntherefore they can create and delete vertices or edges, modify the properties of\nvertices and edges and they can add or remove labels of vertices."),(0,o.kt)("p",null,"We can implement a very simple writeable query module similarly to read-only\nprocedures:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@mgp.write_proc\ndef write_procedure(context: mgp.ProcCtx,\n                    property_name: str,\n                    property_value: mgp.Nullable[mgp.Any]\n                    ) -> mgp.Record(created_vertex=mgp.Vertex):\n    # Collect all the vertices that has the required property with the same\n    # value\n    vertices_to_connect = []\n    for v in context.graph.vertices:\n        if v.properties[property_name] == property_value:\n            vertices_to_connect.append(v)\n    # Create the new vertex and set its property\n    vertex = context.graph.create_vertex()\n    vertex.properties.set(property_name, property_value)\n    # Connect the new vertex to the other vertices\n    for v in vertices_to_connect:\n        context.graph.create_edge(vertex, v, mgp.EdgeType("HAS_SAME_VALUE"))\n\n    return mgp.Record(created_vertex=vertex)\n\n')),(0,o.kt)("p",null,"This example procedure creates a new vertex with the specified property and\nconnects it to all existing vertices which have the same property with the same\nname. It returns one field called ",(0,o.kt)("inlineCode",{parentName:"p"},"created_vertex")," which contains the newly\ncreated vertex."),(0,o.kt)("p",null,"In conclusion, Python API provided by Memgraph can be a very powerful, yet\nsimple tool when implementing query modules. Therefore, we strongly suggest that\nall users thoroughly inspect the ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.py")," source file."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You should not store any graph elements globally when writing your\nown query modules with the intent to use them in a different procedure\ninvocation."))),(0,o.kt)("h2",{id:"c-api"},"C API"),(0,o.kt)("p",null,"Query modules can be implemented using the C API provided by Memgraph. Such\nmodules need to be compiled to a shared library so that they can be loaded when\nMemgraph starts. This means that you can write the procedures in any programming\nlanguage which can work with C and can be compiled to the ELF shared library\nformat."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If your programming language of choice throws exceptions, these\nexceptions must never leave the scope of your module! You should have a\ntop-level exception handler which returns with an error value and potentially\nlogs the error message. Exceptions which cross the module boundary will cause\nall sorts of unexpected issues."))),(0,o.kt)("p",null,"Let's take a look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"example.c")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'#include "mg_procedure.h"\n')),(0,o.kt)("p",null,"On the first line, we include ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_procedure.h"),", which contains declarations of\nall functions that can be used to implement a query module procedure. This file\nis found in the Memgraph installation directory, under ",(0,o.kt)("inlineCode",{parentName:"p"},"include/memgraph"),". On\nthe standard Debian installation, this will be under ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/include/memgraph"),". To\ncompile the module, you will have to pass the appropriate flags to the compiler.\nFor example, using ",(0,o.kt)("inlineCode",{parentName:"p"},"clang"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"clang -Wall -shared -fPIC -I /usr/include/memgraph example.c -o example.so\n")),(0,o.kt)("p",null,"Next, we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"procedure")," function. This function will serve as the callback\nfor our ",(0,o.kt)("inlineCode",{parentName:"p"},"example.procedure")," invocation through Cypher."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"static void procedure(const struct mgp_list *args, const struct mgp_graph *graph,\n                      struct mgp_result *result, struct mgp_memory *memory) {\n  ...\n}\n")),(0,o.kt)("p",null,"If this were C++ you'd probably write the function as such:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace {\nvoid procedure(const mgp_list *args, const mgp_graph *graph,\n               mgp_result *result, mgp_memory *memory) {\n  try {\n    ...\n  } catch (const std::exception &e) {\n    // We must not let any exceptions out of our module.\n    mgp_result_set_error_msg(result, e.what());\n    return;\n  }\n}\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"procedure")," function will receive the list of arguments (",(0,o.kt)("inlineCode",{parentName:"p"},"args"),") which are\npassed in the query. The parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"result")," is used to fill in the resulting\nrecords of the procedure. Parameters ",(0,o.kt)("inlineCode",{parentName:"p"},"graph")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"memory")," are context parameters\nof the procedure, and they are used in some parts of the provided C API. For\nmore information on what exactly is possible via C API, take a look at the\n",(0,o.kt)("inlineCode",{parentName:"p"},"mg_procedure.h")," file  or at the C API ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/query-modules/api/c-api"},"reference\nguide"),", as well as the\n",(0,o.kt)("inlineCode",{parentName:"p"},"example.c")," found in ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules/src")," which contains an\nexample writeable procedure also."),(0,o.kt)("p",null,"Then comes the required ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp_init_module")," function. Its primary purpose is to\nregister procedures which can then be invoked through Cypher. Although the\nexample registers a single ",(0,o.kt)("inlineCode",{parentName:"p"},"procedure"),", you can register multiple different\nprocedures in a single module. Each of these can be invoked using\n",(0,o.kt)("inlineCode",{parentName:"p"},"CALL <module>.<procedure> ...")," syntax. The ",(0,o.kt)("inlineCode",{parentName:"p"},"<module-name>")," will correspond to\nthe name of the shared library. Since we compile our example into ",(0,o.kt)("inlineCode",{parentName:"p"},"example.so"),",\nthen the module is called ",(0,o.kt)("inlineCode",{parentName:"p"},"example"),". Procedure names can be different than their\ncorresponding implementation callbacks because the procedure name is defined\nwhen registering a procedure."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'int mgp_init_module(struct mgp_module *module, struct mgp_memory *memory) {\n  // Register our `procedure` as a read procedure with the name "procedure".\n  struct mgp_proc *proc =\n      mgp_module_add_read_procedure(module, "procedure", procedure);\n  // Return non-zero on error.\n  if (!proc) return 1;\n  // Additional code for better specifying the procedure (omitted here).\n  ...\n  // Return 0 to indicate success.\n  return 0;\n}\n')),(0,o.kt)("p",null,"The omitted part specifies the signature of the registered procedure. The\nsignature specification states what kind of arguments a procedure accepts and\nwhat will be the resulting set of the procedure. For information on signature\nspecification API, take a look at ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_procedure.h")," file and read the\ndocumentation on functions prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp_proc_"),"."),(0,o.kt)("p",null,"The passed in ",(0,o.kt)("inlineCode",{parentName:"p"},"memory")," argument is only alive throughout the execution of\n",(0,o.kt)("inlineCode",{parentName:"p"},"mgp_init_module"),", so you must not allocate any global resources with it. If you\nreally need to set up some global state, you may do so in the ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp_init_module"),"\nbut using the standard global allocators."),(0,o.kt)("p",null,"Consequently, you may want to reset any global state or release global resources\nin the following function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int mgp_shutdown_module() {\n  // Return 0 to indicate success.\n  return 0;\n}\n")),(0,o.kt)("p",null,"As previously mentioned, no exceptions should leave your module. If you are\nwriting the module in a language that throws them, you probably want exception\nhandlers in ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp_init_module")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp_shutdown_module")," as well."))}m.isMDXComponent=!0}}]);