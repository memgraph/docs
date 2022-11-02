"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return n?r.createElement(h,p(p({ref:t},s),{},{components:n})):r.createElement(h,p({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var u=2;u<o;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={id:"custom-query-module-example",title:"Example of a custom query",sidebar_label:"Example of a custom query"},p=void 0,i={unversionedId:"reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example",id:"version-2.2.1/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example",title:"Example of a custom query",description:"We will examine how the query module example is implemented using the",source:"@site/memgraph_versioned_docs/version-2.2.1/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example.md",sourceDirName:"reference-guide/query-modules/implement-custom-query-modules",slug:"/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example",permalink:"/docs/memgraph/2.2.1/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.2.1/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example.md",tags:[],version:"2.2.1",frontMatter:{id:"custom-query-module-example",title:"Example of a custom query",sidebar_label:"Example of a custom query"},sidebar:"memgraph",previous:{title:"C API",permalink:"/docs/memgraph/2.2.1/reference-guide/query-modules/api/c-api"},next:{title:"Load and call query modules",permalink:"/docs/memgraph/2.2.1/reference-guide/query-modules/load-call-query-modules"}},l={},u=[{value:"Python API",id:"python-api",level:2},{value:"Readable procedure",id:"readable-procedure",level:3},{value:"Writeable procedures",id:"writeable-procedures",level:3},{value:"C API",id:"c-api",level:2}],s={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We will examine how the query module ",(0,a.kt)("inlineCode",{parentName:"p"},"example")," is implemented using the\nC API and the Python API. Both query modules can be found in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory."),(0,a.kt)("p",null,"If you require more information about what query modules are, please\nread ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.1/reference-guide/query-modules"},"the query modules overview page")),(0,a.kt)("h2",{id:"python-api"},"Python API"),(0,a.kt)("p",null,"Query modules can be implemented using ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.1/reference-guide/query-modules/api/python-api"},"the Python API"),"\nprovided by Memgraph. If you wish to write your own query modules using the\nPython API, you need to have Python version ",(0,a.kt)("inlineCode",{parentName:"p"},"3.5.0")," or above installed."),(0,a.kt)("p",null,"Every single Memgraph installation comes with the ",(0,a.kt)("inlineCode",{parentName:"p"},"py_example.py")," query module\nlocated in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory. It was provided\nas an example of a ",(0,a.kt)("inlineCode",{parentName:"p"},".py")," query module for you to examine and learn from."),(0,a.kt)("p",null,"If you are working with Docker and would like to open the file on your computer,\ncopy it from the Docker container."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Transferring files from a Docker container"),"If you are using Docker to run Memgraph, you can copy the files from the Docker container to your local directory.",(0,a.kt)("p",null," "),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"1.")," Start your Memgraph instance using Docker."),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"2.")," Open a new terminal and find the ",(0,a.kt)("inlineCode",{parentName:"p"},"CONTAINER ID")," of the Memgraph Docker\ncontainer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker ps\n")),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"3.")," Position yourself in the directory where you want to transfer the file."),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"4.")," Copy a file from the container to the current directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker cp CONTAINER ID:/usr/lib/memgraph/query_modules/py_example.py py_example.py\n")),(0,a.kt)("p",null,"  Don't forget to replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"CONTAINER ID"),". ")),(0,a.kt)("h3",{id:"readable-procedure"},"Readable procedure"),(0,a.kt)("p",null,"Let's take a look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"py_example.py")," file and its first line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\n")),(0,a.kt)("p",null,"On the first line, we import the ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp")," module, which contains definitions of the\npublic Python API provided by Memgraph. In essence, this is a wrapper around the\nC API described in the next section. This file (",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.py"),") can be found in the\nMemgraph installation directory ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/python_support"),"."),(0,a.kt)("p",null,"Because our procedure will only read from the database, we pass it to a\n",(0,a.kt)("inlineCode",{parentName:"p"},"read_proc")," decorator, which handles read-only procedures. You can also inspect\nthe definition of said decorator in the ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.py")," file or take a look at the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.1/reference-guide/query-modules/api/python-api"},"Python API reference\nguide"),"."),(0,a.kt)("p",null,"Next, we define the ",(0,a.kt)("inlineCode",{parentName:"p"},"procedure")," that will be used as the callback for our\n",(0,a.kt)("inlineCode",{parentName:"p"},"py_example.procedure")," invocation through Cypher."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@mgp.read_proc\ndef procedure(context: mgp.ProcCtx,\n              required_arg: mgp.Nullable[mgp.Any],\n              optional_arg: mgp.Nullable[mgp.Any] = None\n              ) -> mgp.Record(args=list,\n                              vertex_count=int,\n                              avg_degree=mgp.Number,\n                              props=mgp.Nullable[mgp.Map]):\n\n  ...\n")),(0,a.kt)("p",null,"Because we need to access the graph to get results, the first argument takes the\n",(0,a.kt)("inlineCode",{parentName:"p"},"ProcCtx")," type, which is actually the graph. Then we defined two arguments, a\nrequired and an optional argument that will be bound to the values passed in\nthe Cypher query. They can be either null or of any type. "),(0,a.kt)("p",null,"The return type must be ",(0,a.kt)("inlineCode",{parentName:"p"},"Record(field_name=type, ...)"),", and the procedure must\nproduce either a complete ",(0,a.kt)("inlineCode",{parentName:"p"},"Record")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"None"),". "),(0,a.kt)("p",null,"In our case, the example procedure returns four fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"args"),": a copy of arguments passed to the procedure."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"vertex_count"),": number of vertices in the database."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"avg_degree"),": average degree of vertices."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"props"),": properties map of the Vertex or Edge object passed as the ",(0,a.kt)("inlineCode",{parentName:"li"},"required_arg"),".\nIn case a Path object is passed, the procedure returns the properties map\nof the starting vertex.")),(0,a.kt)("p",null,"We defined that this procedure can be invoked in Cypher as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) WITH n LIMIT 1 CALL py_example.procedure(n, 1) YIELD * RETURN *;\n")),(0,a.kt)("p",null,"To get the ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," result, first we need to check if the passed argument is an\nEdge, Vertex or Path and create the properties map:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"if isinstance(required_arg, (mgp.Edge, mgp.Vertex)):\n    props = dict(required_arg.properties.items())\nelif isinstance(required_arg, mgp.Path):\n    start_vertex, = required_arg.vertices\n    props = dict(start_vertex.properties.items())\n")),(0,a.kt)("p",null,"In the case of ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Edge")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Vertex"),", we obtain an instance of\n",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Properties")," class and invoke the ",(0,a.kt)("inlineCode",{parentName:"p"},"items()")," method which returns an\n",(0,a.kt)("inlineCode",{parentName:"p"},"Iterable")," containing ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Property")," objects of our ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Edge")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Vertex"),". Since the type of ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Property")," is a simple\n",(0,a.kt)("inlineCode",{parentName:"p"},"collections.namedtuple")," containing ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),", we can easily pass it to\na ",(0,a.kt)("inlineCode",{parentName:"p"},"dict")," constructor thus creating a map."),(0,a.kt)("p",null,"To get the ",(0,a.kt)("inlineCode",{parentName:"p"},"vertex_count")," result we need to count the number of vertices and\nedges in our graph:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"vertex_count = 0\nedge_count = 0\nfor v in context.graph.vertices:\n    vertex_count += 1\n    edge_count += sum(1 for e in v.in_edges)\n    edge_count += sum(1 for e in v.out_edges)\n")),(0,a.kt)("p",null,"First, we set our variables and then access the ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Graph")," instance via\n",(0,a.kt)("inlineCode",{parentName:"p"},"context.graph"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Graph")," instance contains the state of the database at\nthe time execution of the Cypher query that is calling our procedure. The\n",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Graph")," instance also has the property ",(0,a.kt)("inlineCode",{parentName:"p"},"vertices")," that allows us to access\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Vertices")," object, which can be iterated upon, thus\nincreasing the variable on each traversed vertex."),(0,a.kt)("p",null,"Similarly, each ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Vertex")," object has ",(0,a.kt)("inlineCode",{parentName:"p"},"in_edges")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"out_edges")," properties,\nallowing us to iterate over the corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Edge")," objects, thus\nincreasing the variable on each traversed edge."),(0,a.kt)("p",null,"Lastly, we calculate the ",(0,a.kt)("inlineCode",{parentName:"p"},"avg_degree")," value and obtain a copy of the passed\narguments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"avg_degree = 0 if vertex_count == 0 else edge_count / vertex_count\nargs_copy = [copy.deepcopy(required_arg), copy.deepcopy(optional_arg)]\n")),(0,a.kt)("p",null,"At the end, we return a ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Record")," with all the calculated values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"return mgp.Record(args=args_copy, vertex_count=vertex_count,\n                  avg_degree=avg_degree, props=props)\n")),(0,a.kt)("h3",{id:"writeable-procedures"},"Writeable procedures"),(0,a.kt)("p",null,"Writeable procedures are implemented similarly as read-only procedures.\nThe only difference is that writeable procedures receive mutable objects.\nTherefore they can create and delete vertices or edges, modify the properties of\nvertices and edges, and add or remove labels of vertices."),(0,a.kt)("p",null,"We can implement a very simple writeable query module similarly to read-only\nprocedures. The following procedure creates a new vertex with a certain property\nname and its value passed as arguments and connects it to all existing vertices\nthat have a property with the same name and value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'@mgp.write_proc\ndef write_procedure(context: mgp.ProcCtx,\n                    property_name: str,\n                    property_value: mgp.Nullable[mgp.Any]\n                    ) -> mgp.Record(created_vertex=mgp.Vertex):\n    # Collect all the vertices that have a property with\n    # the same name and value as the passed arguments\n    vertices_to_connect = []\n    for v in context.graph.vertices:\n        if v.properties[property_name] == property_value:\n            vertices_to_connect.append(v)\n    # Create the new vertex and set its property\n    vertex = context.graph.create_vertex()\n    vertex.properties.set(property_name, property_value)\n    # Connect the new vertex to the other vertices\n    for v in vertices_to_connect:\n        context.graph.create_edge(vertex, v, mgp.EdgeType("HAS_SAME_VALUE"))\n    # Return a field containing the newly created vertex\n    return mgp.Record(created_vertex=vertex)\n\n')),(0,a.kt)("p",null,"Python API provided by Memgraph can be a very powerful tool for implementing\nquery modules. We strongly suggest you thoroughly inspect the ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.py")," source\nfile located in the Memgraph installation directory\n",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/python_support"),"."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Do not store any graph elements globally when writing custom query modules with\nthe intent to use them in a different procedure invocation.")),(0,a.kt)("h2",{id:"c-api"},"C API"),(0,a.kt)("p",null,"Query modules can be implemented using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.1/reference-guide/query-modules/api/c-api"},"C\nAPI"),"\nprovided by Memgraph. Such modules need to be compiled to a shared library so\nthat they can be loaded when Memgraph starts. This means that you can write the\nprocedures in any programming language that can work with C and be compiled to\nthe ELF shared library format (",(0,a.kt)("inlineCode",{parentName:"p"},".so"),")."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"If the programming language of your choice throws exceptions, these exceptions\nshould never leave the scope of your module! You should have a top-level\nexception handler that returns an error value and potentially logs the error\nmessage. Exceptions that cross the module boundary will cause unexpected issues.")),(0,a.kt)("p",null,"Every single Memgraph installation comes with the ",(0,a.kt)("inlineCode",{parentName:"p"},"example.so")," query module\nlocated in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory. It was provided as\nan example of a query module written with C API for you to examine and learn\nfrom. The ",(0,a.kt)("inlineCode",{parentName:"p"},"query_module")," directory also contains ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," directory, with\n",(0,a.kt)("inlineCode",{parentName:"p"},"example.c")," file. "),(0,a.kt)("p",null,"Let's take a look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"example.c")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include "mg_procedure.h"\n')),(0,a.kt)("p",null,"In the first line, we include ",(0,a.kt)("inlineCode",{parentName:"p"},"mg_procedure.h"),", which contains declarations of\nall functions that can be used to implement a query module procedure. This file\nis located in the Memgraph installation directory, under\n",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/include/memgraph"),". To compile the module, you will have to pass the\nappropriate flags to the compiler, for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"clang"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"clang -Wall -shared -fPIC -I /usr/include/memgraph example.c -o example.so\n")),(0,a.kt)("p",null,"Next, we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"procedure")," function. This function will serve as the callback\nfor our ",(0,a.kt)("inlineCode",{parentName:"p"},"example.procedure")," invocation through Cypher."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"static void procedure(const struct mgp_list *args, const struct mgp_graph *graph,\n                      struct mgp_result *result, struct mgp_memory *memory) {\n  ...\n}\n")),(0,a.kt)("p",null,"If this was C++ you'd probably write the function like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace {\nvoid procedure(const mgp_list *args, const mgp_graph *graph,\n               mgp_result *result, mgp_memory *memory) {\n  try {\n    ...\n  } catch (const std::exception &e) {\n    // We must not let any exceptions out of our module.\n    mgp_result_set_error_msg(result, e.what());\n    return;\n  }\n}\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"procedure")," function receives the list of arguments (",(0,a.kt)("inlineCode",{parentName:"p"},"args"),") passed in the\nquery. The parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," is used to fill in the resulting records of the\nprocedure. Parameters ",(0,a.kt)("inlineCode",{parentName:"p"},"graph")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"memory")," are context parameters of the\nprocedure, and they are used in some parts of the provided C API. "),(0,a.kt)("p",null,"For more information on what exactly is possible with C API, take a look at the\n",(0,a.kt)("inlineCode",{parentName:"p"},"mg_procedure.h")," file or the ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.1/reference-guide/query-modules/api/c-api"},"C API reference\nguide"),"."),(0,a.kt)("p",null,"The following line contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp_init_module")," function that registers procedures\nthat can be invoked through Cypher. Even though the example has only one\n",(0,a.kt)("inlineCode",{parentName:"p"},"procedure"),", you can register multiple different procedures in a single module."),(0,a.kt)("p",null,"Procedures are invoked using the ",(0,a.kt)("inlineCode",{parentName:"p"},"CALL <module>.<procedure> ...")," syntax. The\n",(0,a.kt)("inlineCode",{parentName:"p"},"<module-name>")," will correspond to the name of the shared library. Since we\ncompile our example into ",(0,a.kt)("inlineCode",{parentName:"p"},"example.so"),", then the module is called ",(0,a.kt)("inlineCode",{parentName:"p"},"example"),".\nProcedure names can be different than their corresponding implementation\ncallbacks because the procedure name is defined when registering a procedure."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'int mgp_init_module(struct mgp_module *module, struct mgp_memory *memory) {\n  // Register our `procedure` as a read procedure with the name "procedure".\n  struct mgp_proc *proc =\n      mgp_module_add_read_procedure(module, "procedure", procedure);\n  // Return non-zero on error.\n  if (!proc) return 1;\n  // Additional code for better specifying the procedure (omitted here).\n  ...\n  // Return 0 to indicate success.\n  return 0;\n}\n')),(0,a.kt)("p",null,"The omitted part specifies the signature of the registered procedure. The\nsignature specification states what kind of arguments a procedure accepts and\nwhat will be the resulting set of the procedure. For information on signature\nspecification API, take a look at ",(0,a.kt)("inlineCode",{parentName:"p"},"mg_procedure.h")," file and read the\ndocumentation on functions prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp_proc_"),"."),(0,a.kt)("p",null,"The passed in ",(0,a.kt)("inlineCode",{parentName:"p"},"memory")," argument is only alive throughout the execution of\n",(0,a.kt)("inlineCode",{parentName:"p"},"mgp_init_module"),", so you must not allocate any global resources with it. If you\nreally need to set up a certain global state, you may do so in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"mgp_init_module")," using the standard global allocators."),(0,a.kt)("p",null,"Consequently, you may want to reset any global state or release global resources\nin the following function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int mgp_shutdown_module() {\n  // Return 0 to indicate success.\n  return 0;\n}\n")),(0,a.kt)("p",null,"As mentioned before, no exceptions should leave your module. If you are writing\nthe module in a language that throws them, use exception handlers\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp_init_module")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp_shutdown_module")," as well."))}m.isMDXComponent=!0}}]);