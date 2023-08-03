"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=o,h=c["".concat(p,".").concat(d)]||c[d]||s[d]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=n(87462),o=(n(67294),n(3905));const a={id:"mock-python-api",title:"Mock Python query module API",sidebar_label:"Mock Python API",slug:"/reference-guide/query-modules/api/mock-python-api"},i=void 0,l={unversionedId:"reference-guide/query-modules/implement-custom-query-modules/api/mock-python-api",id:"version-2.9.0/reference-guide/query-modules/implement-custom-query-modules/api/mock-python-api",title:"Mock Python query module API",description:"The mock Python query module API enables you to develop and test query modules",source:"@site/memgraph_versioned_docs/version-2.9.0/reference-guide/query-modules/implement-custom-query-modules/api/mock-python-api.md",sourceDirName:"reference-guide/query-modules/implement-custom-query-modules/api",slug:"/reference-guide/query-modules/api/mock-python-api",permalink:"/docs/memgraph/2.9.0/reference-guide/query-modules/api/mock-python-api",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.9.0/reference-guide/query-modules/implement-custom-query-modules/api/mock-python-api.md",tags:[],version:"2.9.0",frontMatter:{id:"mock-python-api",title:"Mock Python query module API",sidebar_label:"Mock Python API",slug:"/reference-guide/query-modules/api/mock-python-api"},sidebar:"memgraph",previous:{title:"Python API",permalink:"/docs/memgraph/2.9.0/reference-guide/query-modules/api/python-api"},next:{title:"C API",permalink:"/docs/memgraph/2.9.0/reference-guide/query-modules/api/c-api"}},p={},m=[{value:"API reference",id:"api-reference",level:2},{value:"Graph representation",id:"graph-representation",level:3},{value:"Using the mock API",id:"using-the-mock-api",level:2},{value:"Importing",id:"importing",level:3},{value:"Running",id:"running",level:3},{value:"Running the module with Memgraph",id:"running-the-module-with-memgraph",level:3}],u={toc:m};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The mock Python query module API enables you to develop and test query modules\nfor Memgraph without having to run a Memgraph instance by simulating its\nbehavior. As the mock API is compatible with the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.9.0/reference-guide/query-modules/api/python-api"},"Python API"),",\nyou can add modules developed with it to Memgraph as-is, without modifying the\ncode."),(0,o.kt)("p",null,"It is implemented in ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp_mock.py"),", which contains definitions of all\nclasses and functions provided for developing query module procedures and\nfunctions. The source file is located in the Memgraph installation directory,\ninside ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/include/memgraph"),"."),(0,o.kt)("h2",{id:"api-reference"},"API reference"),(0,o.kt)("p",null,"Because the mock API\u2019s classes and functions are compatible with the corresponding\nPython API classes and functions, the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.9.0/reference-guide/query-modules/api/python-api"},"Python API reference"),"\napplies, with the following exceptions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Query procedure returns (",(0,o.kt)("inlineCode",{parentName:"li"},"Record")," class) are printable."),(0,o.kt)("li",{parentName:"ul"},"The mock API doesn\u2019t throw errors having to do with Memgraph-internal\nbehavior (",(0,o.kt)("inlineCode",{parentName:"li"},"UnableToAllocateError"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"InsufficientBufferError"),",\n",(0,o.kt)("inlineCode",{parentName:"li"},"OutOfRangeError"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"KeyAlreadyExistsError"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"SerializationError")," and\n",(0,o.kt)("inlineCode",{parentName:"li"},"AuthorizationError"),")."),(0,o.kt)("li",{parentName:"ul"},"The mock API doesn\u2019t contain two Python API methods dealing with\nMemgraph-internal behavior (",(0,o.kt)("inlineCode",{parentName:"li"},"must_abort")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"check_must_abort"),").\nThese methods are used to check whether Memgraph has notified the query\nmodule to abort its execution."),(0,o.kt)("li",{parentName:"ul"},"The constructors of the ",(0,o.kt)("inlineCode",{parentName:"li"},"ProcCtx")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"FuncCtx")," classes take a NetworkX\n",(0,o.kt)("a",{parentName:"li",href:"https://networkx.org/documentation/stable/reference/classes/multidigraph.html"},"MultiDiGraph"),"\nbecause that\u2019s the data structure the mock API uses for internal graph\nrepresentations."),(0,o.kt)("li",{parentName:"ul"},"Transformation modules are currently not implemented.")),(0,o.kt)("h3",{id:"graph-representation"},"Graph representation"),(0,o.kt)("p",null,"The mock Python API uses a graph representation based on the NetworkX\n",(0,o.kt)("a",{parentName:"p",href:"https://networkx.org/documentation/stable/reference/classes/multidigraph.html"},"MultiDiGraph"),",\nwhich is a directed graph that supports parallel edges (relationships) and\ncustom node/relationship attributes."),(0,o.kt)("p",null,"All elements of a Memgraph graph are supported by the mock API, with the\nfollowing rules about representing node labels and relationship types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node labels are stored in the node attribute named ",(0,o.kt)("inlineCode",{parentName:"li"},'"labels"')," as a\n",(0,o.kt)("inlineCode",{parentName:"li"},'":"'),"-separated string, e.g. the node ",(0,o.kt)("inlineCode",{parentName:"li"},"(n:Actor:Director)")," has\n",(0,o.kt)("inlineCode",{parentName:"li"},'{"labels": "Actor:Director"}'),"."),(0,o.kt)("li",{parentName:"ul"},"Edge types are strings stored in ",(0,o.kt)("inlineCode",{parentName:"li"},'"type"'),".")),(0,o.kt)("h2",{id:"using-the-mock-api"},"Using the mock API"),(0,o.kt)("h3",{id:"importing"},"Importing"),(0,o.kt)("p",null,"Before importing the mock API, you need to make it visible to the query module,\ne.g. by adding the path of ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp_mock.py")," to PYTHONPATH or copying ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp_mock.py"),"\nto the directory containing the module."),(0,o.kt)("h3",{id:"running"},"Running"),(0,o.kt)("p",null,"The following code block contains an example query procedure and a runner for\nquery procedures:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import mgp_mock as mgp\nimport networkx as nx\n\n@mgp.read_proc\ndef example_procedure(context: mgp.ProcCtx) -> mgp.Record(status=str):\n    return mgp.Record(status="Hello, world!")\n\ngraph = nx.MultiDiGraph() # Empty graph\ncontext = mgp.ProcCtx(graph) # Create a context instance\n\nresult = example_procedure(context) # Run the procedure\nprint(result) # Hello, world!\n')),(0,o.kt)("h3",{id:"running-the-module-with-memgraph"},"Running the module with Memgraph"),(0,o.kt)("p",null,"As the mock Python API is compatible with the Python query module API, adding a\nmodule developed with the mock API to Memgraph is a simple task."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Replace the ",(0,o.kt)("inlineCode",{parentName:"li"},"mgp_mock")," import with ",(0,o.kt)("inlineCode",{parentName:"li"},"import mgp"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This includes refactoring the usages of ",(0,o.kt)("inlineCode",{parentName:"li"},"mgp_mock")," (or alias) to ",(0,o.kt)("inlineCode",{parentName:"li"},"mgp"),"."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.9.0/reference-guide/query-modules/load-call-query-modules"},"Load the query module."))))}s.isMDXComponent=!0}}]);