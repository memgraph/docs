"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77535],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,h=u["".concat(m,".").concat(c)]||u[c]||d[c]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},38645:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"overview",title:"Transformation modules",sidebar_label:"Transformation modules overview",slug:"/reference-guide/streams/transformation-modules"},m=void 0,s={unversionedId:"reference-guide/streams/transformation-modules/overview",id:"version-2.4.0/reference-guide/streams/transformation-modules/overview",title:"Transformation modules",description:"In order to connect Memgraph to a data stream, it needs to know how to transform",source:"@site/memgraph_versioned_docs/version-2.4.0/reference-guide/streams/transformation-modules/overview.md",sourceDirName:"reference-guide/streams/transformation-modules",slug:"/reference-guide/streams/transformation-modules",permalink:"/docs/memgraph/2.4.0/reference-guide/streams/transformation-modules",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.4.0/reference-guide/streams/transformation-modules/overview.md",tags:[],version:"2.4.0",frontMatter:{id:"overview",title:"Transformation modules",sidebar_label:"Transformation modules overview",slug:"/reference-guide/streams/transformation-modules"},sidebar:"memgraph",previous:{title:"Streams overview",permalink:"/docs/memgraph/2.4.0/reference-guide/streams"},next:{title:"C API",permalink:"/docs/memgraph/2.4.0/reference-guide/streams/transformation-modules/api/c-api"}},p={},d=[{value:"Creating a transformation module",id:"creating-a-transformation-module",level:2},{value:"Loading modules",id:"loading-modules",level:2},{value:"Loading on startup",id:"loading-on-startup",level:3},{value:"Loading while the instance is already running",id:"loading-while-the-instance-is-already-running",level:3},{value:"Creating transformation modules within Memgraph Lab",id:"creating-transformation-modules-within-memgraph-lab",level:2},{value:"Utility procedures for transformations",id:"utility-procedures-for-transformations",level:2}],u={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In order to connect Memgraph to a data stream, it needs to know how to transform\nthe incoming messages in order to consume them correctly. This is done with a\ntransformation module."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.0/tutorials/graph-stream-processing-with-kafka#create-a-transformation-module"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge",alt:"Related -\nTutorial"}))),(0,o.kt)("p",null,"To create a transformation module, you need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a ",(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.4.0/reference-guide/streams/transformation-modules/api/python-api"},"Python")," or a ",(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.4.0/reference-guide/streams/transformation-modules/api/c-api"},"shared library"),"\nfile (module)."),(0,o.kt)("li",{parentName:"ol"},"Save the file into the Memgraph's ",(0,o.kt)("inlineCode",{parentName:"li"},"query_modules")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"internal_modules")," directory (default:\n",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/lib/memgraph/query_modules")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"/var/lib/memgraph/internal_modules/"),")."),(0,o.kt)("li",{parentName:"ol"},"Load the file into Memgraph either on startup (automatically) or by running a\n",(0,o.kt)("inlineCode",{parentName:"li"},"CALL mg.load_all();")," query.")),(0,o.kt)("p",null,"If you are using Memgraph Lab you can ",(0,o.kt)("a",{parentName:"p",href:"#creating-transformation-modules-within-memgraph-lab"},"create transformation module within the\napplication"),". "),(0,o.kt)("h2",{id:"creating-a-transformation-module"},"Creating a transformation module"),(0,o.kt)("p",null,"Memgraph supports user-defined transformations procedures written in ",(0,o.kt)("strong",{parentName:"p"},"Python"),"\nand ",(0,o.kt)("strong",{parentName:"p"},"C"),"  that act on data received from a streaming engine. These\ntransformation procedures are grouped into a module called ",(0,o.kt)("strong",{parentName:"p"},"Transformation\nmodule"),", which is then loaded into Memgraph on startup or later on. A\ntransformation module consists of a transformation, a query procedure, or both."),(0,o.kt)("p",null,"Currently, we support transformations for Kafka, Pulsar and Redpanda\nstreams."),(0,o.kt)("p",null,"The available API references are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.4.0/reference-guide/streams/transformation-modules/api/c-api"},"C API"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.4.0/reference-guide/streams/transformation-modules/api/python-api"},"Python API")))),(0,o.kt)("p",null,"For examples of transformation modules check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.0/tutorials/graph-stream-processing-with-kafka#2-create-a-transformation-module"},"the tutorial on implementing a\nPython transformation\nmodule"),",\n",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.0/reference-guide/streams/transformation-modules/api/python-api#transformation-examples-of-different-format-messages"},"Python transformation\nexamples"),"\nof different format messages or ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.0/reference-guide/streams/transformation-modules/api/c-api#transformation-module-example"},"an example of a transformation module written\nin C"),". "),(0,o.kt)("h2",{id:"loading-modules"},"Loading modules"),(0,o.kt)("p",null,"Modules can be loaded on startup or when the instance is already running."),(0,o.kt)("h3",{id:"loading-on-startup"},"Loading on startup"),(0,o.kt)("p",null,"Memgraph attempts to load the modules from all ",(0,o.kt)("inlineCode",{parentName:"p"},"*.so")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"*.py")," files it finds\nin the default (",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph/internal_modules/"),") directories. The ",(0,o.kt)("inlineCode",{parentName:"p"},"*.so")," modules\nare written using the C API and the ",(0,o.kt)("inlineCode",{parentName:"p"},"*.py")," modules are written using the Python\nAPI. Each file corresponds to one module. The names of these files will be mapped to\nmodule names. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"hello.so")," will be mapped to the ",(0,o.kt)("inlineCode",{parentName:"p"},"hello")," module and a\n",(0,o.kt)("inlineCode",{parentName:"p"},"py_hello.py")," script will be mapped to the ",(0,o.kt)("inlineCode",{parentName:"p"},"py_hello")," module."),(0,o.kt)("p",null,"If you want to change the directory in which Memgraph searches for\ntransformation modules, change or extend the ",(0,o.kt)("inlineCode",{parentName:"p"},"--query-modules-directory"),"\nflag in the main configuration file (",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),") or supply it\nas a command-line parameter (e.g., when using Docker)."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please remember that if you are using Memgraph Platform image, you should pass\nconfiguration flags within MEMGRAPH environment variable (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'docker run -p\n7687:7687 -p 7444:7444 -p 3000:3000 -e MEMGRAPH="--log-level=TRACE\n--query-modules-directory=path/path" memgraph/memgraph-platform'),") and if you\nare using any other image you should pass them as arguments after the image name\n(e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"... memgraph/memgraph-mage --log-level=TRACE\n--query-modules-directory=path/path"),")."))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Transfer transformation module into a Docker container"),"If you are using Docker to run Memgraph, you will need to copy the transformation module file from your local directory into the Docker container where Memgraph can access it.",(0,o.kt)("p",null," "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Open a new terminal and find the ",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER ID")," of the Memgraph Docker\ncontainer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker ps\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Copy a file from your current directory to the container with the\ncommand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker cp ./file_name.py <CONTAINER ID>:/usr/lib/memgraph/query_modules/file_name.py\n")),(0,o.kt)("p",null,"The file is now inside your Docker container.")),(0,o.kt)("h3",{id:"loading-while-the-instance-is-already-running"},"Loading while the instance is already running"),(0,o.kt)("p",null,"To load a specific transformation module from a ",(0,o.kt)("inlineCode",{parentName:"p"},"*.so")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"*.py")," files that\nwere added to the default directories (",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph/internal_modules/"),") while the instance was already running, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CALL mg.load(module_name);\n")),(0,o.kt)("p",null,"To load all transformation modules, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CALL mg.load_all();\n")),(0,o.kt)("h2",{id:"creating-transformation-modules-within-memgraph-lab"},"Creating transformation modules within Memgraph Lab"),(0,o.kt)("p",null,"If you are using Memgraph Lab to connect to the database instance, you can\ncreate the transformation module within the application:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"Query Modules")," and click on ",(0,o.kt)("strong",{parentName:"li"},"+ New Module"),"."),(0,o.kt)("li",{parentName:"ol"},"Give the transformation module a name and ",(0,o.kt)("strong",{parentName:"li"},"Create")," it."),(0,o.kt)("li",{parentName:"ol"},"Write the transformation procedures and click ",(0,o.kt)("strong",{parentName:"li"},"Save & Close"),".")),(0,o.kt)("p",null,"You will see the signature and overview of the transformation procedure that you\ncan now use while ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.0/import-data/data-streams/manage-streams-lab"},"creating a new\nstream"),". "),(0,o.kt)("h2",{id:"utility-procedures-for-transformations"},"Utility procedures for transformations"),(0,o.kt)("p",null,"Query procedures that allow you to gain more insight into modules and\ntransformations are written under our utility ",(0,o.kt)("inlineCode",{parentName:"p"},"mg")," query module. For\ntransformations, this module offers:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Procedure"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mg.transformations() :: (name :: STRING)")),(0,o.kt)("td",{parentName:"tr",align:null},"Lists all transformation procedures.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mg.load(module_name :: STRING) :: ()")),(0,o.kt)("td",{parentName:"tr",align:null},"Loads or reloads the given module.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mg.load_all() :: ()")),(0,o.kt)("td",{parentName:"tr",align:null},"Loads or reloads all modules.")))),(0,o.kt)("p",null,"For example, you can invoke ",(0,o.kt)("inlineCode",{parentName:"p"},"mg.transformations()")," from mgconsole or Memgraph\nLab with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.transformations() YIELD *;\n")),(0,o.kt)("p",null,"This will yield the following result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nocopy"},'+-------------------------------------------+-------------------------------------------------------+-------------+\n| name                                      | path                                                  | is_editable |\n+-------------------------------------------+-------------------------------------------------------+-------------+\n| "batch.transform"                         | "/usr/lib/memgraph/query_modules/batch.py"            | true        |\n+-------------------------------------------+-------------------------------------------------------+-------------+\n')),(0,o.kt)("p",null,"To load a module (named e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"hello"),") that wasn't loaded on startup (probably\nbecause it was added to Memgraph's directory once Memgraph was already running),\nyou can invoke:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.load("hello");\n')),(0,o.kt)("p",null,"If you wish to reload an existing module, say the ",(0,o.kt)("inlineCode",{parentName:"p"},"hello")," module above, use the\nsame procedure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.load("hello");\n')),(0,o.kt)("p",null,"To reload all existing modules and load any newly added ones, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")))}c.isMDXComponent=!0}}]);