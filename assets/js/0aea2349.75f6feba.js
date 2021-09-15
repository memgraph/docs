"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57314],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),k=r,h=d["".concat(o,".").concat(k)]||d[k]||m[k]||l;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93990:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={id:"tensorflow",title:"TensorFlow Op",sidebar_label:"TensorFlow Op"},o=void 0,u={unversionedId:"reference-guide/tensorflow",id:"version-1.6.0/reference-guide/tensorflow",isDocsHomePage:!1,title:"TensorFlow Op",description:"Memgraph non-parallel Tensorflow Op",source:"@site/memgraph_versioned_docs/version-1.6.0/reference-guide/tensorflow.md",sourceDirName:"reference-guide",slug:"/reference-guide/tensorflow",permalink:"/docs/memgraph/1.6.0/reference-guide/tensorflow",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.6.0/reference-guide/tensorflow.md",tags:[],version:"1.6.0",frontMatter:{id:"tensorflow",title:"TensorFlow Op",sidebar_label:"TensorFlow Op"},sidebar:"version-1.6.0/memgraph",previous:{title:"Python API",permalink:"/docs/memgraph/1.6.0/reference-guide/streams/transformation-modules/api/python-api"},next:{title:"Audit log (Enterprise)",permalink:"/docs/memgraph/1.6.0/reference-guide/audit-log"}},s=[{value:"Memgraph non-parallel Tensorflow Op",id:"memgraph-non-parallel-tensorflow-op",children:[{value:"API",id:"api",children:[]},{value:"Limitations",id:"limitations",children:[]},{value:"Error Handling",id:"error-handling",children:[]}]},{value:"Memgraph Parallel Tensorflow Op",id:"memgraph-parallel-tensorflow-op",children:[{value:"API",id:"api-1",children:[]},{value:"Important Considerations and Semantic Differences",id:"important-considerations-and-semantic-differences",children:[]}]}],m={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"memgraph-non-parallel-tensorflow-op"},"Memgraph non-parallel Tensorflow Op"),(0,l.kt)("p",null,"Memgraph enables easier development and production serving of your\nmachine learning models based on graph data by allowing you to query Memgraph\ndirectly from TensorFlow using the Memgraph TensorFlow op."),(0,l.kt)("p",null,"A TensorFlow op (operation) is a fundamental building block of all TensorFlow\nmodels.\nMemgraph TensorFlow op wraps the high-performance Memgraph client for\nuse with TensorFlow, allowing natural data transfer between Memgraph and\nTensorFlow at any point in the model."),(0,l.kt)("p",null,"See TensorFlow\n",(0,l.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/guide/graphs"},"Graphs and Session guide"),"\nfor more information."),(0,l.kt)("h3",{id:"api"},"API"),(0,l.kt)("p",null,"Memgraph TensorFlow op API consists of inputs, attributes, and outputs."),(0,l.kt)("h4",{id:"input"},"Input"),(0,l.kt)("p",null,"There are two inputs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"query"),(0,l.kt)("li",{parentName:"ul"},"input list")),(0,l.kt)("p",null,"The input ",(0,l.kt)("inlineCode",{parentName:"p"},"query")," is a string and represents an ",(0,l.kt)("inlineCode",{parentName:"p"},"openCypher")," query.\nMemgraph TensorFlow op has some ",(0,l.kt)("a",{parentName:"p",href:"#limitations"},"limitations")," on the query."),(0,l.kt)("p",null,"The input ",(0,l.kt)("inlineCode",{parentName:"p"},"list")," is a query parameter. The name of this parameter is ",(0,l.kt)("inlineCode",{parentName:"p"},"$input_list"),"."),(0,l.kt)("p",null,"Let's see one simple example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (p :User) WHERE p.id IN $input_list RETURN p.id;\n")),(0,l.kt)("p",null,"The query execution replaces ",(0,l.kt)("inlineCode",{parentName:"p"},"$input_list")," with the provided op input\n(",(0,l.kt)("a",{parentName:"p",href:"/docs/memgraph/1.6.0/database-functionalities/tensorflow-setup#example"},"see python example for more"),").\n",(0,l.kt)("inlineCode",{parentName:"p"},"$input_list")," is the only query parameter used by Memgraph TensorFlow op."),(0,l.kt)("h4",{id:"attributes"},"Attributes"),(0,l.kt)("p",null,"Memgraph TensorFlow op attributes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"host"),", default: ",(0,l.kt)("inlineCode",{parentName:"li"},"127.0.0.1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"port"),", default: ",(0,l.kt)("inlineCode",{parentName:"li"},"7687")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"user"),", default: ",(0,l.kt)("inlineCode",{parentName:"li"},'""')," (empty string)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"password"),", default: ",(0,l.kt)("inlineCode",{parentName:"li"},'""')," (empty string)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"use_ssl"),", default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"output_dtype"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Host"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"port"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"user"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"password")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"use_ssl")," are attributes used for\nconnecting to Memgraph. The only different attribute is ",(0,l.kt)("inlineCode",{parentName:"p"},"output_dtype"),".\n",(0,l.kt)("inlineCode",{parentName:"p"},"output_dtype")," has no default value and it is used to determine the type of\noutput tensor.  Notice that all data in the output tensor must be of the same\ntype.  ",(0,l.kt)("inlineCode",{parentName:"p"},"output_dtype")," can be ",(0,l.kt)("inlineCode",{parentName:"p"},"int64"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"double"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bool")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),".  Memgraph\nTensorFlow op does not support other output types."),(0,l.kt)("h4",{id:"outputs"},"Outputs"),(0,l.kt)("p",null,"Memgraph TensorFlow op has two outputs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"header"),(0,l.kt)("li",{parentName:"ul"},"rows")),(0,l.kt)("p",null,"The header is a string list.\nThe list contains headers provided by query execution:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) RETURN n.name AS Name, n.address AS Address;\n")),(0,l.kt)("p",null,"Header is ",(0,l.kt)("inlineCode",{parentName:"p"},'["Name", "Address"]'),"."),(0,l.kt)("p",null,"Rows data represents the query result.\nRows data is the matrix ",(0,l.kt)("inlineCode",{parentName:"p"},"(|rows| x |headers|)"),".\nIf there are no results from the query (empty set),\nthe matrix has a dimension ",(0,l.kt)("inlineCode",{parentName:"p"},"(0 x 0)"),"."),(0,l.kt)("h5",{id:"using-lists-as-part-of-the-output"},"Using Lists as Part of the Output"),(0,l.kt)("p",null,"Let's see the following example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)--\x3e(m) RETURN n.id AS id, COLLECT(m.value) AS value_list;\n")),(0,l.kt)("p",null,"This query returns ",(0,l.kt)("inlineCode",{parentName:"p"},"n.id")," and list of ",(0,l.kt)("inlineCode",{parentName:"p"},"m.values"),".\nMemgraph TensorFlow op returns a matrix.\nTherefore all elements in the matrix must be\nof the same type. Memgraph TensorFlow op expands lists into the row.\nMatrix dimension is ",(0,l.kt)("inlineCode",{parentName:"p"},"|rows| x |(standard headers + sum of list sizes)|"),"."),(0,l.kt)("p",null,"Query output:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"value_list"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,2,3,4,5]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"[5,4,8,1,2]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"[8,8,8,1,2]")))),(0,l.kt)("p",null,"Headers:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"value_list_0"),(0,l.kt)("th",{parentName:"tr",align:null},"value_list_1"),(0,l.kt)("th",{parentName:"tr",align:null},"value_list_2"),(0,l.kt)("th",{parentName:"tr",align:null},"..."))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"value_list","[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"value_list","[1]"),(0,l.kt)("td",{parentName:"tr",align:null},"value_list","[2]"),(0,l.kt)("td",{parentName:"tr",align:null},"...")))),(0,l.kt)("p",null,"Matrix output:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2")))),(0,l.kt)("p",null,"Memgraph TensorFlow op also supports more than one list in the output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)--\x3e(m)\nRETURN n.id AS id, COLLECT(m.value) AS value_list, COLLECT(m.id) AS neigh;\n")),(0,l.kt)("p",null,"Query output:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"value_list"),(0,l.kt)("th",{parentName:"tr",align:null},"neigh"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,2,3,4,5]"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,2]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"[5,4,8,1,2]"),(0,l.kt)("td",{parentName:"tr",align:null},"[3,4]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"[8,8,8,1,2]"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,3]")))),(0,l.kt)("p",null,"Headers:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"value_list_0"),(0,l.kt)("th",{parentName:"tr",align:null},"value_list_1"),(0,l.kt)("th",{parentName:"tr",align:null},"value_list_2"),(0,l.kt)("th",{parentName:"tr",align:null},"..."),(0,l.kt)("th",{parentName:"tr",align:null},"neigh_0"),(0,l.kt)("th",{parentName:"tr",align:null},"neigh_1"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"value_list","[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"value_list","[1]"),(0,l.kt)("td",{parentName:"tr",align:null},"value_list","[2]"),(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},"neigh","[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"neigh","[1]")))),(0,l.kt)("p",null,"Matrix output:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"3")))),(0,l.kt)("h3",{id:"limitations"},"Limitations"),(0,l.kt)("h4",{id:"input-list"},"Input List"),(0,l.kt)("p",null,"Input list (",(0,l.kt)("inlineCode",{parentName:"p"},"$input_list"),") can contain only elements of ",(0,l.kt)("inlineCode",{parentName:"p"},"int64")," type."),(0,l.kt)("h4",{id:"output-types"},"Output types:"),(0,l.kt)("p",null,"The output matrix contains only elements with the same data type.\nThe data type can be ",(0,l.kt)("inlineCode",{parentName:"p"},"int64"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"double"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bool")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),".\n",(0,l.kt)("inlineCode",{parentName:"p"},"Null")," is not allowed in matrix output."),(0,l.kt)("p",null,"An exceptional case is a ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," data type. In this case, the query result\ncan contain different types. All data will be converted into ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),".\nA user must be careful here because converting data type to string\nand vice versa can have unwanted performance issues."),(0,l.kt)("h4",{id:"output-lists"},"Output Lists"),(0,l.kt)("p",null,"If the query contains a list as output, the list expands into the row.\nAll corresponding lists must have the same size."),(0,l.kt)("h3",{id:"error-handling"},"Error Handling"),(0,l.kt)("p",null,"Memgraph TensorFlow op reports internal errors:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cannot create a client instance",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Memgraph TensorFlow op missing some system resources to\ncreate a connection to Memgraph"))),(0,l.kt)("li",{parentName:"ul"},"Cannot connect to Memgraph: \\<message",">",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Connection issue (wrong host name, wrong port, ssl problem, ...)"))),(0,l.kt)("li",{parentName:"ul"},"Query error: \\<message",">",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Query is not valid"))),(0,l.kt)("li",{parentName:"ul"},"Internal error: \\<message",">",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Some non-specific error appears during the communication\nbetween Op and Memgraph."))),(0,l.kt)("li",{parentName:"ul"},"List has wrong size, row: \\<row",">",", header: \\<header",">",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Some output list has the wrong size. Size must be the same\nfor all corresponding lists."))),(0,l.kt)("li",{parentName:"ul"},"Wrong type: \\<header",">"," = \\<type",">"," (\\<value",">",")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Matrix output contains an element with a wrong data type.")))),(0,l.kt)("h2",{id:"memgraph-parallel-tensorflow-op"},"Memgraph Parallel Tensorflow Op"),(0,l.kt)("p",null,"Memgraph Parallel Tensorflop Op is a way to speed up the performance of queries in\na data-parallel way. The parallelization is done by splitting the input list\ninto chunks, running the query on each chunk of the input list independently\nand simply concatenating the results into a single tensor."),(0,l.kt)("h3",{id:"api-1"},"API"),(0,l.kt)("p",null,"The inputs, outputs, and errors are all equivalent to the regular\nMemgraph TensorFlow Op, with the exception of the parallel op having one\nadditional attribute"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"num_workers"),", default: ",(0,l.kt)("inlineCode",{parentName:"li"},"2"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"num_workers")," determines how many parallel connections to Memgraph the parallel\nTensorFlow Op will maintain and into how many chunks the input list is broken."),(0,l.kt)("h3",{id:"important-considerations-and-semantic-differences"},"Important Considerations and Semantic Differences"),(0,l.kt)("p",null,"Under the hood, the Parallel TensorFlow Op runs each of your queries as several\nindependent queries. The exact number matches the ",(0,l.kt)("inlineCode",{parentName:"p"},"num_workers")," attribute."),(0,l.kt)("p",null,"Your input list is split into chunks, such that every worker gets a chunk of\napproximately equal size.\nThe only way to utilize parallelism is to use input lists."),(0,l.kt)("p",null,"Since the queries are independent, the queries' semantics can change depending\non the number of workers.\nRunning with a single worker is semantically equivalent to using the regular\nMemgraph TensorFlow Op.\nRunning with multiple workers, any query which assumes it's seeing all the\nresults is likely to produce unexpected results."),(0,l.kt)("p",null,"For example, a query that sorts results will only sort results within its\nchunk."),(0,l.kt)("p",null,"If this is the result of an imaginary query with ",(0,l.kt)("inlineCode",{parentName:"p"},"num_workers = 1"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"result"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5")))),(0,l.kt)("p",null,"This might be the result with ",(0,l.kt)("inlineCode",{parentName:"p"},"num_workers = 2"),":\nThe first worker is assigned a chunk of size three and the second worker a\nchunk of size two.\nHence the first three elements are sorted amongst each other and the last\ntwo elements are sorted amongst each other, but the entire result is not\nsorted."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"result"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5")))),(0,l.kt)("p",null,"A query with a limit clause will only limit the results within that\nchunk, meaning the total result might have ",(0,l.kt)("inlineCode",{parentName:"p"},"(num_workers * limit)")," rows."),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE something in $input_list")," will cause unexpected results."),(0,l.kt)("p",null,'The parallel Memgraph TensorFlow op is best used when the input list is full\nof "ids" of nodes to be found and something independent has to be done for\neach found node, such as return its features, or its neighbors.'))}d.isMDXComponent=!0}}]);