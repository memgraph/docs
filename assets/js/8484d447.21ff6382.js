"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74829],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>c});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(t),c=a,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return t?r.createElement(h,i(i({ref:n},s),{},{components:t})):r.createElement(h,i({ref:n},s))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},84235:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const o={id:"custom-query-module-example",title:"Example of a custom query module",sidebar_label:"Example of a custom query module"},i=void 0,p={unversionedId:"reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example",id:"version-2.6.0/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example",title:"Example of a custom query module",description:"We will examine how the query module example is implemented using the",source:"@site/memgraph_versioned_docs/version-2.6.0/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example.md",sourceDirName:"reference-guide/query-modules/implement-custom-query-modules",slug:"/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example",permalink:"/docs/memgraph/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.6.0/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example.md",tags:[],version:"2.6.0",frontMatter:{id:"custom-query-module-example",title:"Example of a custom query module",sidebar_label:"Example of a custom query module"},sidebar:"memgraph",previous:{title:"C++ API",permalink:"/docs/memgraph/reference-guide/query-modules/api/cpp-api"},next:{title:"Load and call query modules",permalink:"/docs/memgraph/reference-guide/query-modules/load-call-query-modules"}},l={},u=[{value:"Python API",id:"python-api",level:2},{value:"Readable procedure",id:"readable-procedure",level:3},{value:"Writeable procedures",id:"writeable-procedures",level:3},{value:"Magic functions",id:"magic-functions",level:3},{value:"C API",id:"c-api",level:2},{value:"Query procedures",id:"query-procedures",level:3},{value:"Magic functions",id:"magic-functions-1",level:3},{value:"C++ API",id:"c-api-1",level:2},{value:"Readable procedures",id:"readable-procedures",level:3},{value:"Writeable procedures",id:"writeable-procedures-1",level:3},{value:"Magic functions",id:"magic-functions-2",level:3}],s={toc:u};function m(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We will examine how the query module ",(0,a.kt)("inlineCode",{parentName:"p"},"example")," is implemented using the\nC API and the Python API. Both query modules can be found in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory."),(0,a.kt)("p",null,"If you require more information about what query modules are, please\nread ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/query-modules"},"the query modules overview page")),(0,a.kt)("h2",{id:"python-api"},"Python API"),(0,a.kt)("p",null,"Query modules can be implemented using ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/query-modules/api/python-api"},"the Python API"),"\nprovided by Memgraph. If you wish to write your own query modules using the\nPython API, you need to have Python version ",(0,a.kt)("inlineCode",{parentName:"p"},"3.5.0")," or above installed."),(0,a.kt)("p",null,"Every single Memgraph installation comes with the ",(0,a.kt)("inlineCode",{parentName:"p"},"py_example.py")," query module\nlocated in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory. It was provided\nas an example of a ",(0,a.kt)("inlineCode",{parentName:"p"},".py")," query module for you to examine and learn from."),(0,a.kt)("p",null,"If you are working with Docker and would like to open the file on your computer,\ncopy it from the Docker container."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Transferring files from a Docker container"),(0,a.kt)("p",null,"  If you are using Docker to run Memgraph, you can copy the files from the\nDocker container to your local directory."),(0,a.kt)("p",null," "),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"1.")," Start your Memgraph instance using Docker."),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"2.")," Open a new terminal and find the ",(0,a.kt)("inlineCode",{parentName:"p"},"CONTAINER ID")," of the Memgraph Docker\ncontainer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker ps\n")),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"3.")," Position yourself in the directory where you want to transfer the file."),(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"4.")," Copy a file from the container to the current directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker cp CONTAINER ID:/usr/lib/memgraph/query_modules/py_example.py py_example.py\n")),(0,a.kt)("p",null,"  Don't forget to replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"CONTAINER ID"),".")),(0,a.kt)("p",null,"You can develop query modules in Python from Memgraph Lab (v2.0 and newer). Just\nnavigate to ",(0,a.kt)("strong",{parentName:"p"},"Query Modules")," and click on ",(0,a.kt)("strong",{parentName:"p"},"New Module")," to start."),(0,a.kt)("img",{src:t(3742).Z,className:"imgBorder"}),(0,a.kt)("h3",{id:"readable-procedure"},"Readable procedure"),(0,a.kt)("p",null,"Let's take a look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"py_example.py")," file and its first line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\n")),(0,a.kt)("p",null,"On the first line, we import the ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp")," module, which contains definitions of the\npublic Python API provided by Memgraph. In essence, this is a wrapper around the\nC API described in the next section. This file (",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.py"),") can be found in the\nMemgraph installation directory ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/python_support"),"."),(0,a.kt)("p",null,"Because our procedure will only read from the database, we pass it to a\n",(0,a.kt)("inlineCode",{parentName:"p"},"read_proc")," decorator, which handles read-only procedures. You can also inspect\nthe definition of said decorator in the ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.py")," file or take a look at the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/query-modules/api/python-api"},"Python API reference\nguide"),"."),(0,a.kt)("p",null,"Next, we define the ",(0,a.kt)("inlineCode",{parentName:"p"},"procedure")," that will be used as the callback for our\n",(0,a.kt)("inlineCode",{parentName:"p"},"py_example.procedure")," invocation through Cypher."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@mgp.read_proc\ndef procedure(context: mgp.ProcCtx,\n              required_arg: mgp.Nullable[mgp.Any],\n              optional_arg: mgp.Nullable[mgp.Any] = None\n              ) -> mgp.Record(args=list,\n                              vertex_count=int,\n                              avg_degree=mgp.Number,\n                              props=mgp.Nullable[mgp.Map]):\n\n  ...\n")),(0,a.kt)("p",null,"Because we need to access the graph to get results, the first argument takes the\n",(0,a.kt)("inlineCode",{parentName:"p"},"ProcCtx")," type, which is actually the graph. Then we defined two arguments, a\nrequired and an optional argument that will be bound to the values passed in\nthe Cypher query. They can be either null or of any type."),(0,a.kt)("p",null,"The return type must be ",(0,a.kt)("inlineCode",{parentName:"p"},"Record(field_name=type, ...)"),", and the procedure must\nproduce either a complete ",(0,a.kt)("inlineCode",{parentName:"p"},"Record")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,a.kt)("p",null,"In our case, the example procedure returns four fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"args"),": a copy of arguments passed to the procedure."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"vertex_count"),": number of vertices in the database."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"avg_degree"),": average degree of vertices."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"props"),": properties map of the Vertex or Edge object passed as the ",(0,a.kt)("inlineCode",{parentName:"li"},"required_arg"),".\nIn case a Path object is passed, the procedure returns the properties map\nof the starting vertex.")),(0,a.kt)("p",null,"We defined that this procedure can be invoked in Cypher as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) WITH n LIMIT 1 CALL py_example.procedure(n, 1) YIELD * RETURN *;\n")),(0,a.kt)("p",null,"To get the ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," result, first we need to check if the passed argument is an\nEdge, Vertex or Path and create the properties map:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"if isinstance(required_arg, (mgp.Edge, mgp.Vertex)):\n    props = dict(required_arg.properties.items())\nelif isinstance(required_arg, mgp.Path):\n    start_vertex, = required_arg.vertices\n    props = dict(start_vertex.properties.items())\n")),(0,a.kt)("p",null,"In the case of ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Edge")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Vertex"),", we obtain an instance of\n",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Properties")," class and invoke the ",(0,a.kt)("inlineCode",{parentName:"p"},"items()")," method which returns an\n",(0,a.kt)("inlineCode",{parentName:"p"},"Iterable")," containing ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Property")," objects of our ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Edge")," or\n",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Vertex"),". Since the type of ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Property")," is a simple\n",(0,a.kt)("inlineCode",{parentName:"p"},"collections.namedtuple")," containing ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),", we can easily pass it to\na ",(0,a.kt)("inlineCode",{parentName:"p"},"dict")," constructor thus creating a map."),(0,a.kt)("p",null,"To get the ",(0,a.kt)("inlineCode",{parentName:"p"},"vertex_count")," result we need to count the number of vertices and\nedges in our graph:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"vertex_count = 0\nedge_count = 0\nfor v in context.graph.vertices:\n    vertex_count += 1\n    edge_count += sum(1 for e in v.in_edges)\n    edge_count += sum(1 for e in v.out_edges)\n")),(0,a.kt)("p",null,"First, we set our variables and then access the ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Graph")," instance via\n",(0,a.kt)("inlineCode",{parentName:"p"},"context.graph"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Graph")," instance contains the state of the database at\nthe time execution of the Cypher query that is calling our procedure. The\n",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Graph")," instance also has the property ",(0,a.kt)("inlineCode",{parentName:"p"},"vertices")," that allows us to access\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Vertices")," object, which can be iterated upon, thus\nincreasing the variable on each traversed vertex."),(0,a.kt)("p",null,"Similarly, each ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Vertex")," object has ",(0,a.kt)("inlineCode",{parentName:"p"},"in_edges")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"out_edges")," properties,\nallowing us to iterate over the corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Edge")," objects, thus\nincreasing the variable on each traversed edge."),(0,a.kt)("p",null,"Lastly, we calculate the ",(0,a.kt)("inlineCode",{parentName:"p"},"avg_degree")," value and obtain a copy of the passed\narguments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"avg_degree = 0 if vertex_count == 0 else edge_count / vertex_count\nargs_copy = [copy.deepcopy(required_arg), copy.deepcopy(optional_arg)]\n")),(0,a.kt)("p",null,"At the end, we return a ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Record")," with all the calculated values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"return mgp.Record(args=args_copy, vertex_count=vertex_count,\n                  avg_degree=avg_degree, props=props)\n")),(0,a.kt)("h3",{id:"writeable-procedures"},"Writeable procedures"),(0,a.kt)("p",null,"Writeable procedures are implemented similarly as read-only procedures.\nThe only difference is that writeable procedures receive mutable objects.\nTherefore they can create and delete vertices or edges, modify the properties of\nvertices and edges, and add or remove labels of vertices."),(0,a.kt)("p",null,"We can implement a very simple writeable query module similarly to read-only\nprocedures. The following procedure creates a new vertex with a certain property\nname and its value passed as arguments and connects it to all existing vertices\nthat have a property with the same name and value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'@mgp.write_proc\ndef write_procedure(context: mgp.ProcCtx,\n                    property_name: str,\n                    property_value: mgp.Nullable[mgp.Any]\n                    ) -> mgp.Record(created_vertex=mgp.Vertex):\n    # Collect all the vertices that have a property with\n    # the same name and value as the passed arguments\n    vertices_to_connect = []\n    for v in context.graph.vertices:\n        if v.properties[property_name] == property_value:\n            vertices_to_connect.append(v)\n    # Create the new vertex and set its property\n    vertex = context.graph.create_vertex()\n    vertex.properties.set(property_name, property_value)\n    # Connect the new vertex to the other vertices\n    for v in vertices_to_connect:\n        context.graph.create_edge(vertex, v, mgp.EdgeType("HAS_SAME_VALUE"))\n    # Return a field containing the newly created vertex\n    return mgp.Record(created_vertex=vertex)\n\n')),(0,a.kt)("h3",{id:"magic-functions"},"Magic functions"),(0,a.kt)("p",null,'User-defined, or so-called "Memgraph Magic functions" are implemented similarly\nto read and write procedures. The difference between these is the end use-case\nand graph mutability. Users should not modify (create, delete, or update) any\ngraph objects through functions.'),(0,a.kt)("p",null,"Semantically, functions should be small fragments of functionality that do not\nrequire long computations and large memory consumption."),(0,a.kt)("p",null,"The example of how to create and run a function is written below. This example\nshows one trivial use-case of fetching the arguments as a list of returning\nvalues."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@mgp.function\ndef func_example(context: mgp.FuncCtx,\n            argument: mgp.Any,\n            opt_argument: mgp.Nullable[mgp.Any] = None):\n    return_arguments = [argument]\n\n    if opt_argument is not None:\n      return_arguments.append(opt_argument)\n\n    # Note that we do not need to specify the result Record as long as it is a\n    # Memgraph defined value type.\n    return return_arguments\n")),(0,a.kt)("p",null,"At first glance, there is a huge similarity between defining a function and a\nprocedure. Let's talk about differences. The first difference is the context\ntype. ",(0,a.kt)("inlineCode",{parentName:"p"},"FuncCtx")," prevents you to modify the graph and does not offer the API to\ncommunicate with the graph entities not related to the entry arguments."),(0,a.kt)("p",null,"The second difference is the resulting signature. Functions do not require the\nuser to provide a resulting signature because of the return value. A function\ncall can be nested in Cypher and therefore the only requirement for the\nreturning value is to be of a supported ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.Type"),"."),(0,a.kt)("p",null,"The Cypher call for the written custom function can be executed like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},'RETURN py_example.func_example("First argument", "Second argument");\n')),(0,a.kt)("p",null,"This call can also be nested and used as a preprocessing for some other function\nor procedure. The example of how to combine a built-in function with the\ncurrently developed one looks like\nthis:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},'RETURN head(py_example.func_example("First argument", "Second argument"));\n')),(0,a.kt)("p",null,"Python API provided by Memgraph can be a very powerful tool for implementing\nquery modules. We strongly suggest you thoroughly inspect the ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp.py")," source\nfile located in the Memgraph installation directory\n",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/python_support"),"."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Do not store any graph elements globally when writing custom query modules with\nthe intent to use them in a different procedure invocation.")),(0,a.kt)("h2",{id:"c-api"},"C API"),(0,a.kt)("p",null,"Query modules can be implemented using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/query-modules/api/c-api"},"C\nAPI"),"\nprovided by Memgraph. Such modules need to be compiled to a shared library so\nthat they can be loaded when Memgraph starts. This means that you can write the\nprocedures in any programming language that can work with C and be compiled to\nthe ELF shared library format (",(0,a.kt)("inlineCode",{parentName:"p"},".so"),")."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"If the programming language of your choice throws exceptions, these exceptions\nshould never leave the scope of your module! You should have a top-level\nexception handler that returns an error value and potentially logs the error\nmessage. Exceptions that cross the module boundary will cause unexpected issues.")),(0,a.kt)("p",null,"Every single Memgraph installation comes with the ",(0,a.kt)("inlineCode",{parentName:"p"},"example.so")," query module\nlocated in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory. It was provided as\nan example of a query module written with C API for you to examine and learn\nfrom. The ",(0,a.kt)("inlineCode",{parentName:"p"},"query_module")," directory also contains ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," directory, with\n",(0,a.kt)("inlineCode",{parentName:"p"},"example.c")," file."),(0,a.kt)("p",null,"Let's take a look at the ",(0,a.kt)("inlineCode",{parentName:"p"},"example.c")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include "mg_procedure.h"\n')),(0,a.kt)("p",null,"In the first line, we include ",(0,a.kt)("inlineCode",{parentName:"p"},"mg_procedure.h"),", which contains declarations of\nall functions that can be used to implement a query module procedure. This file\nis located in the Memgraph installation directory, under\n",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/include/memgraph"),". To compile the module, you will have to pass the\nappropriate flags to the compiler, for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"clang"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"clang -Wall -shared -fPIC -I /usr/include/memgraph example.c -o example.so\n")),(0,a.kt)("h3",{id:"query-procedures"},"Query procedures"),(0,a.kt)("p",null,"Next, we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"procedure")," function. This function will serve as the callback\nfor our ",(0,a.kt)("inlineCode",{parentName:"p"},"example.procedure")," invocation through Cypher."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"static void procedure(const struct mgp_list *args, const struct mgp_graph *graph,\n                      struct mgp_result *result, struct mgp_memory *memory) {\n  ...\n}\n")),(0,a.kt)("p",null,"If this was C++ you'd probably write the function like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace {\nvoid procedure(const mgp_list *args, const mgp_graph *graph,\n               mgp_result *result, mgp_memory *memory) {\n  try {\n    ...\n  } catch (const std::exception &e) {\n    // We must not let any exceptions out of our module.\n    mgp_result_set_error_msg(result, e.what());\n    return;\n  }\n}\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"procedure")," function receives the list of arguments (",(0,a.kt)("inlineCode",{parentName:"p"},"args"),") passed in the\nquery. The parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," is used to fill in the resulting records of the\nprocedure. Parameters ",(0,a.kt)("inlineCode",{parentName:"p"},"graph")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"memory")," are context parameters of the\nprocedure, and they are used in some parts of the provided C API."),(0,a.kt)("p",null,"For more information on what exactly is possible with C API, take a look at the\n",(0,a.kt)("inlineCode",{parentName:"p"},"mg_procedure.h")," file or the ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/query-modules/api/c-api"},"C API reference\nguide"),"."),(0,a.kt)("p",null,"The following line contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp_init_module")," function that registers procedures\nthat can be invoked through Cypher. Even though the example has only one\n",(0,a.kt)("inlineCode",{parentName:"p"},"procedure"),", you can register multiple different procedures in a single module."),(0,a.kt)("p",null,"Procedures are invoked using the ",(0,a.kt)("inlineCode",{parentName:"p"},"CALL <module>.<procedure> ...")," syntax. The\n",(0,a.kt)("inlineCode",{parentName:"p"},"<module-name>")," will correspond to the name of the shared library. Since we\ncompile our example into ",(0,a.kt)("inlineCode",{parentName:"p"},"example.so"),", then the module is called ",(0,a.kt)("inlineCode",{parentName:"p"},"example"),".\nProcedure names can be different than their corresponding implementation\ncallbacks because the procedure name is defined when registering a procedure."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'int mgp_init_module(struct mgp_module *module, struct mgp_memory *memory) {\n  // Register our `procedure` as a read procedure with the name "procedure".\n  struct mgp_proc *proc =\n      mgp_module_add_read_procedure(module, "procedure", procedure);\n  // Return non-zero on error.\n  if (!proc) return 1;\n  // Additional code for better specifying the procedure (omitted here).\n  ...\n  // Return 0 to indicate success.\n  return 0;\n}\n')),(0,a.kt)("p",null,"The omitted part specifies the signature of the registered procedure. The\nsignature specification states what kind of arguments a procedure accepts and\nwhat will be the resulting set of the procedure. For information on signature\nspecification API, take a look at ",(0,a.kt)("inlineCode",{parentName:"p"},"mg_procedure.h")," file and read the\ndocumentation on functions prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp_proc_"),"."),(0,a.kt)("p",null,"The passed in ",(0,a.kt)("inlineCode",{parentName:"p"},"memory")," argument is only alive throughout the execution of\n",(0,a.kt)("inlineCode",{parentName:"p"},"mgp_init_module"),", so you must not allocate any global resources with it. If you\nreally need to set up a certain global state, you may do so in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"mgp_init_module")," using the standard global allocators."),(0,a.kt)("p",null,"Consequently, you may want to reset any global state or release global resources\nin the following function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int mgp_shutdown_module() {\n  // Return 0 to indicate success.\n  return 0;\n}\n")),(0,a.kt)("p",null,"As mentioned before, no exceptions should leave your module. If you are writing\nthe module in a language that throws them, use exception handlers\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp_init_module")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp_shutdown_module")," as well."),(0,a.kt)("h3",{id:"magic-functions-1"},"Magic functions"),(0,a.kt)("p",null,'A major part of defining the "Magic function" is similar to query procedures.\nThe steps of defining a callback and registering arguments are repeated in the\nmagic functions, only with a different syntax.'),(0,a.kt)("p",null,"To define a function, the first step is to define a callback. The example only\nshows C++ code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace {\nvoid function(const mgp_list *args, mgp_func_context *func_ctx,\n               mgp_func_result *result, mgp_memory *memory) {\n  try {\n    ...\n  } catch (const std::exception &e) {\n    // We must not let any exceptions out of our module.\n    mgp_func_result_set_error_msg(result, e.what(), memory);\n    return;\n  }\n}\n}\n")),(0,a.kt)("p",null,"The parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"args")," is used to fetch the required and optional arguments from\nthe Cypher call. The parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," defines the resulting value. It can\ncarry either an error or a return value, depending on the runtime execution.\nThere is no ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp_graph")," argument because the graph is immutable in functions."),(0,a.kt)("p",null,"To initialize and register the written function as a magic function, one should\nwrite the initialization in the ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp_init_module"),". The registered function can\nthen be called in similar fashion as the built-in functions, just with the\nsyntax defining the module it is stored in: ",(0,a.kt)("inlineCode",{parentName:"p"},"<module>.<function_name>(...)"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'int mgp_init_module(struct mgp_module *module, struct mgp_memory *memory) {\n  // Register our `function` as a Magic function with the name "function".\n  struct mgp_func *func =\n      mgp_module_add_function(module, "function", function); // Above defined function pointer\n  // Return non-zero on error.\n  if (!func) return 1;\n  // Additional code for better specifying the function with arguments (omitted here).\n  ...\n  // Return 0 to indicate success.\n  return 0;\n}\n')),(0,a.kt)("h2",{id:"c-api-1"},"C++ API"),(0,a.kt)("p",null,"Query modules can be implemented using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/query-modules/api/cpp-api"},"C++ API\n"),"\nprovided by Memgraph. As with the C API, these modules need to be compiled to a\nshared library so that they can be loaded when Memgraph starts.\nCompilation of query modules that use the C++ API works much in the same way as\nwith modules using the C API."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Any exceptions thrown should never leave the scope of your module. You may have\na top-level exception handler that returns the error value and potentially logs\nany error messages.\nExceptions that cross the module boundary may cause unexpected issues!")),(0,a.kt)("p",null,"Let\u2019s now take a look at the architecture of a query module itself.\nThe basic parts of every query module are as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <mgp.hpp>\n\n// (Query procedure & magic function callbacks)\n\nextern "C" int mgp_init_module(struct mgp_module *module, struct mgp_memory *memory) {\n  // Register your procedures & functions here\n}\n\nextern "C" int mgp_shutdown_module() {\n  // If you need to release any resources at shutdown, do it here\n  return 0;\n}\n\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"mgp.hpp")," file contains all declarations of the C++ API for implementing\nquery module procedures and functions."),(0,a.kt)("li",{parentName:"ul"},"To make your query procedures and functions available, they need to be\nregistered in ",(0,a.kt)("inlineCode",{parentName:"li"},"mgp_init_module"),"."),(0,a.kt)("li",{parentName:"ul"},"Finally, you may use ",(0,a.kt)("inlineCode",{parentName:"li"},"mgp_shutdown_module")," to reset any global states or release\nglobal resources at shutdown.")),(0,a.kt)("h3",{id:"readable-procedures"},"Readable procedures"),(0,a.kt)("p",null,"We can now examine how query procedures are implemented on the example of the\n",(0,a.kt)("strong",{parentName:"p"},"random walk algorithm"),"."),(0,a.kt)("p",null,"As mentioned above, procedures are registered in ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp_init_module"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'extern "C" int mgp_init_module(struct mgp_module *module, struct mgp_memory *memory) {\n  try {\n    mgp::memory = memory;\n\n    AddProcedure(RandomWalk, "get", mgp::ProcedureType::Read,\n                 {mgp::Parameter("start", mgp::Type::Node), mgp::Parameter("length", mgp::Type::Int)},\n                 {mgp::Return("random_walk", mgp::Type::Path)}, module, memory);\n  } catch (const std::exception &e) {\n    return 1;\n  }\n  return 0;\n}\n')),(0,a.kt)("p",null,"Here, we defined our procedure\u2019s signature and added it as a readable\n(",(0,a.kt)("inlineCode",{parentName:"p"},"ProcedureType::Read"),") procedure, named ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),", to our random walk module.\nThe function takes two named parameters: the start node and random walk length,\nand it yields the computed random walk as a ",(0,a.kt)("inlineCode",{parentName:"p"},"Path")," (sequence of nodes connected\nby relationships) in the ",(0,a.kt)("inlineCode",{parentName:"p"},"random_walk")," result field."),(0,a.kt)("p",null,"When the procedure is called, its arguments (& the graph) will be passed to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"RandomWalk")," callback function."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The API needs memory access for registration; you may grant it with\n",(0,a.kt)("inlineCode",{parentName:"p"},"mgp::memory = memory"),"."),(0,a.kt)("p",{parentName:"admonition"},"As any exceptions should never leave the scope of the module, the procedure was\nregistered inside a try-catch block.")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"As ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp::memory")," is a global object, that means all of the procedures and\nfunctions in a single shared library will refer to the same ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp::memory"),"\nobject. As a result, calling such callables simultaneously from multiple threads\nwill lead to incorrect memory usage. This also includes the case when the same\ncallable is called from different user sessions. This is a constraint of the\ncurrent C++ API that we are planning to improve in the future.")),(0,a.kt)("p",null,"Callbacks for query procedures all share the same signature, as laid out below.\nParameter by parameter, the callback receives the procedure arguments (",(0,a.kt)("inlineCode",{parentName:"p"},"args"),"),\ngraph context (",(0,a.kt)("inlineCode",{parentName:"p"},"memgraph_graph"),"), result stream (",(0,a.kt)("inlineCode",{parentName:"p"},"result"),"), and memory access."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In place of working with the raw ",(0,a.kt)("inlineCode",{parentName:"p"},"mgp_")," type arguments, use the C++ API classes\nthat provide familiar standard library-like interfaces and do away with needing\nmanual memory management.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'void RandomWalk(mgp_list *args, mgp_graph *memgraph_graph, mgp_result *result, mgp_memory *memory) {\n  try {\n    mgp::memory = memory;\n    const auto arguments = mgp::List(args);\n    const auto record_factory = mgp::RecordFactory(result);\n\n    const auto start_node = args[0].ValueNode();\n    const auto length = args[1].ValueInt();\n\n    auto random_walk = mgp::Path(start_node);\n\n    // (Random walk algorithm logic)\n\n    auto record = record_factory.NewRecord();\n    record.Insert("random_walk", random_walk);\n\n  } catch (const std::exception &e) {\n    mgp::result_set_error_msg(result, e.what());\n    return;\n  }\n}\n')),(0,a.kt)("h3",{id:"writeable-procedures-1"},"Writeable procedures"),(0,a.kt)("p",null,"Writeable procedures differ from readable procedures in their graph context\nbeing ",(0,a.kt)("strong",{parentName:"p"},"mutable"),". With them, you may create or delete nodes and relationships,\nmodify their properties, and add or remove node labels."),(0,a.kt)("p",null,"They use the same interface as readable procedures; the only difference is that\nthe appropriate procedure type parameter is passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"AddProcedure"),". The below\ncode registers and implements a writeable procedure ",(0,a.kt)("inlineCode",{parentName:"p"},"add_x_nodes"),", which adds a\nuser-specified number of nodes (given by int parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),") to the graph."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'extern "C" int mgp_init_module(struct mgp_module *module, struct mgp_memory *memory) {\n  try {\n    mgp::memory = memory;\n\n    mgp::AddProcedure(AddXNodes, "add_x_nodes", mgp::ProcedureType::Write, {mgp::Parameter("number", mgp::Type::Int)},\n                      {}, module, memory);\n  } catch (const std::exception &e) {\n    return 1;\n  }\n  return 0;\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void AddXNodes(mgp_list *args, mgp_graph *memgraph_graph, mgp_result *result, mgp_memory *memory) {\n  mgp::memory = memory;\n  const auto arguments = mgp::List(args);\n  auto graph = mgp::Graph(memgraph_graph);\n\n  for (int i = 0; i < arguments[0].ValueInt(); i++) {\n    graph.CreateNode();\n  }\n}\n")),(0,a.kt)("h3",{id:"magic-functions-2"},"Magic functions"),(0,a.kt)("p",null,"Magic functions are a Memgraph feature that lets the user write and call custom\nCypher functions. Unlike procedures, functions are simple operations that can\u2019t\nmodify the graph; they return a single value and can be used in any expression\nor predicate."),(0,a.kt)("p",null,"Let\u2019s examine an example function that multiplies the numbers passed to it. The\nregistration is done by ",(0,a.kt)("inlineCode",{parentName:"p"},"AddFunction"),' in the same way as with query procedures,\nthe difference being the absence of a "function type" argument (functions don\u2019t\nmodify the graph).'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'extern "C" int mgp_init_module(struct mgp_module *module, struct mgp_memory *memory) {\n  try {\n    mgp::memory = memory;\n\n    mgp::AddFunction(Multiply, "multiply",\n                     {mgp::Parameter("int", mgp::Type::Int), mgp::Parameter("int", mgp::Type::Int)}, module, memory);\n  } catch (const std::exception &e) {\n    return 1;\n  }\n  return 0;\n}\n')),(0,a.kt)("p",null,"There are two key differences in the function signature:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the lack of a ",(0,a.kt)("inlineCode",{parentName:"li"},"mgp_graph *")," parameter (the graph is immutable in functions)"),(0,a.kt)("li",{parentName:"ul"},"different result type (functions return single values, while procedures write\nresult records to the result stream)")),(0,a.kt)("p",null,"The difference in result type means that, to work with function results, we use\na different C++ API class: ",(0,a.kt)("inlineCode",{parentName:"p"},"Result"),". Our function is implemented as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void Multiply(mgp_list *args, mgp_func_context *ctx, mgp_func_result *res, mgp_memory *memory) {\n  mgp::memory = memory;\n  const auto arguments = mgp::List(args);\n  auto result = mgp::Result(res);\n\n  auto first = arguments[0].ValueInt();\n  auto second = arguments[1].ValueInt();\n\n  result.SetValue(first * second);\n}\n")))}m.isMDXComponent=!0},3742:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/memgraph_lab_query_modules-e5619e8b4b458425c680c0ce3cefb22c.png"}}]);