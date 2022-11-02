"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={id:"inspecting-queries",title:"Inspecting queries",sidebar_label:"Inspecting queries",slug:"/reference-guide/inspecting-queries"},i=void 0,o={unversionedId:"reference-guide/optimizing-queries/inspecting-queries",id:"version-2.3.0/reference-guide/optimizing-queries/inspecting-queries",title:"Inspecting queries",description:"Before a Cypher query is executed, it is converted into an internal form",source:"@site/memgraph_versioned_docs/version-2.3.0/reference-guide/optimizing-queries/inspecting-queries.md",sourceDirName:"reference-guide/optimizing-queries",slug:"/reference-guide/inspecting-queries",permalink:"/docs/memgraph/2.3.0/reference-guide/inspecting-queries",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.0/reference-guide/optimizing-queries/inspecting-queries.md",tags:[],version:"2.3.0",frontMatter:{id:"inspecting-queries",title:"Inspecting queries",sidebar_label:"Inspecting queries",slug:"/reference-guide/inspecting-queries"},sidebar:"memgraph",previous:{title:"Indexing",permalink:"/docs/memgraph/2.3.0/reference-guide/indexing"},next:{title:"Profiling queries",permalink:"/docs/memgraph/2.3.0/reference-guide/profiling-queries"}},p={},d=[{value:"Operators",id:"operators",level:2},{value:"Example plans",id:"example-plans",level:2},{value:"Where to next?",id:"where-to-next",level:2}],s={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before a Cypher query is executed, it is converted into an internal form\nsuitable for execution, known as a ",(0,r.kt)("em",{parentName:"p"},"plan"),". A plan is a tree-like data structure\ndescribing a pipeline of operations which will be performed on the database in\norder to yield the results for a given query. Every node within a plan is known\nas a ",(0,r.kt)("em",{parentName:"p"},"logical operator")," and describes a particular operation."),(0,r.kt)("p",null,"Because a plan represents a pipeline, the logical operators are iteratively\nexecuted as data passes from one logical operator to the other. Every logical\noperator ",(0,r.kt)("em",{parentName:"p"},"pulls")," data from the logical operator(s) preceding it, processes it\nand passes it onto the logical operator next in the pipeline for further\nprocessing."),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"EXPLAIN")," operator, it is possible for the user to inspect the\nproduced plan and gain insight into the execution of a query."),(0,r.kt)("h2",{id:"operators"},"Operators"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Accumulate")),(0,r.kt)("td",{parentName:"tr",align:null},"Accumulates the input it received.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Aggregate")),(0,r.kt)("td",{parentName:"tr",align:null},"Aggregates the input it received.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CallProcedure")),(0,r.kt)("td",{parentName:"tr",align:null},"Calls a procedure.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Cartesian")),(0,r.kt)("td",{parentName:"tr",align:null},"Applies the Cartesian product (the set of all possible ordered combinations consisting of one member from each of those sets) on the input it received.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ConstructNamedPath")),(0,r.kt)("td",{parentName:"tr",align:null},"Creates a path.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CreateNode")),(0,r.kt)("td",{parentName:"tr",align:null},"Creates a node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CreateExpand")),(0,r.kt)("td",{parentName:"tr",align:null},"Creates edges and  new nodes to connect with existing nodes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Delete")),(0,r.kt)("td",{parentName:"tr",align:null},"Deletes nodes and edges.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EdgeUniquenessFilter")),(0,r.kt)("td",{parentName:"tr",align:null},"Filters unique edges.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Expand")),(0,r.kt)("td",{parentName:"tr",align:null},"Expands the node by finding the node's relationships.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ExpandVariable")),(0,r.kt)("td",{parentName:"tr",align:null},"Performs a node expansion of a variable number of relationships")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Filter")),(0,r.kt)("td",{parentName:"tr",align:null},"Filters the input it received.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Foreach")),(0,r.kt)("td",{parentName:"tr",align:null},"Iterates over a list and applies one or more update clauses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Limit")),(0,r.kt)("td",{parentName:"tr",align:null},"Limits certain rows from the pull chain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LoadCsv")),(0,r.kt)("td",{parentName:"tr",align:null},"Loads CSV file in order to import files into the database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Merge")),(0,r.kt)("td",{parentName:"tr",align:null},"Applies merge on the input it received.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Once")),(0,r.kt)("td",{parentName:"tr",align:null},'Forms the beginning of an operator chain with "only once" semantics. The operator will return false on subsequent pulls.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Optional")),(0,r.kt)("td",{parentName:"tr",align:null},"Performs optional matching.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OrderBy")),(0,r.kt)("td",{parentName:"tr",align:null},"Orders the input it received.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Produce")),(0,r.kt)("td",{parentName:"tr",align:null},"Produces results.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RemoveLabels")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes a variable number of node labels.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RemoveProperty")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes a node or relationship property.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ScanAll")),(0,r.kt)("td",{parentName:"tr",align:null},"Produces all nodes in the database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ScanAllById")),(0,r.kt)("td",{parentName:"tr",align:null},"Produces nodes with a certain index.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ScanAllByLabel")),(0,r.kt)("td",{parentName:"tr",align:null},"Produces nodes with a certain label.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ScanAllByLabelProperty")),(0,r.kt)("td",{parentName:"tr",align:null},"Produces nodes with a certain label and property.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ScanAllByLabelPropertyRange")),(0,r.kt)("td",{parentName:"tr",align:null},"Produces nodes with a certain label and property value within the given range (both inclusive and exclusive).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ScanAllByLabelPropertyValue")),(0,r.kt)("td",{parentName:"tr",align:null},"Produces nodes with a certain label and property value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SetLabels")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets node labels of variable length.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SetProperty")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets a node or relationship property.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SetProperties")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets a list of node or relationship properties.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Skip")),(0,r.kt)("td",{parentName:"tr",align:null},"Skips certain rows from the pull chain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Unwind")),(0,r.kt)("td",{parentName:"tr",align:null},"Unwinds an expression to multiple records.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Distinct")),(0,r.kt)("td",{parentName:"tr",align:null},"Applies a distinct filter on the input it received.")))),(0,r.kt)("h2",{id:"example-plans"},"Example plans"),(0,r.kt)("p",null,"As an example, let's inspect the plan produced for a simple query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"EXPLAIN MATCH (n) RETURN n;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+----------------+\n| QUERY PLAN     |\n+----------------+\n|  * Produce {n} |\n|  * ScanAll (n) |\n|  * Once        |\n+----------------+\n")),(0,r.kt)("p",null,"The output of the ",(0,r.kt)("inlineCode",{parentName:"p"},"EXPLAIN")," query is a representation of the produced plan. Every\nlogical operator within the plan starts with an asterisk character (",(0,r.kt)("inlineCode",{parentName:"p"},"*"),") and is\nfollowed by its name (and sometimes additional information). The execution of\nthe query proceeds iteratively (generating one entry of the result set at a\ntime), with data flowing from the bottom-most logical operator(s) (the start of\nthe pipeline) to the top-most logical operator(s) (the end of the pipeline)."),(0,r.kt)("p",null,"In the example above, the resulting plan is a pipeline of 3 logical operators.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Once")," is the identity logical operator which does nothing and is always found\nat the start of the pipeline; ",(0,r.kt)("inlineCode",{parentName:"p"},"ScanAll")," is a logical operator which iteratively\nproduces all of the nodes in the graph; and ",(0,r.kt)("inlineCode",{parentName:"p"},"Produce")," is a logical operator\nwhich takes data produced by another logical operator and produces data for the\nquery's result set."),(0,r.kt)("p",null,"A slightly more complicated example would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"EXPLAIN MATCH (n :Node)-[:Edge]-(m :Node) WHERE n.prop = 42 RETURN *;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+--------------------------------+\n| QUERY PLAN                     |\n+--------------------------------+\n|  * Produce {m, n}              |\n|  * Filter                      |\n|  * Expand (m)-[anon1:Edge]-(n) |\n|  * ScanAllByLabel (n :Node)    |\n|  * ScanAllByLabel (m :Node)    |\n|  * Once                        |\n+--------------------------------+\n")),(0,r.kt)("p",null,"In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Filter")," logical operator is used to filter the matched\nnodes because of the ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE n.prop = 42")," construct. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Expand")," logical\noperator is used to find an edge between two nodes, in this case ",(0,r.kt)("inlineCode",{parentName:"p"},"m")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),"\nwhich were matched previously using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ScanAllByLabel")," logical operator (a\nvariant of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ScanAll")," logical operator mentioned previously)."),(0,r.kt)("p",null,"The execution of the query proceeds iteratively as follows. First, two vertices\nof type ",(0,r.kt)("inlineCode",{parentName:"p"},":Node")," are found as the result of the two scans. Then, we try to find a\npath that consists of the two vertices and an edge between them. If a path is\nfound, it is further filtered based on a property of one of the vertices.\nFinally, if the path satisfied the filter, its two vertices are added to the\nquery's result set."),(0,r.kt)("p",null,"A simple example showcasing the fully general tree structure of the plan could\nbe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"EXPLAIN MERGE (n) RETURN n;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+------------------+\n| QUERY PLAN       |\n+------------------+\n|  * Produce {n}   |\n|  * Accumulate    |\n|  * Merge         |\n|  |\\ On Match     |\n|  | * ScanAll (n) |\n|  | * Once        |\n|  |\\ On Create    |\n|  | * CreateNode  |\n|  | * Once        |\n|  * Once          |\n+------------------+\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Merge")," logical operator (constructed as a result of the ",(0,r.kt)("inlineCode",{parentName:"p"},"MERGE")," construct)\ncan take input from up to 3 places. The ",(0,r.kt)("inlineCode",{parentName:"p"},"On Match")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"On Create"),' branches are\n"pulled from" only if a match was found or if a new vertex has to be created,\nrespectively.'),(0,r.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,r.kt)("p",null,"To learn more about Memgraph's functionalities, visit the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.3.0/reference-guide"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.3.0/tutorials"},"Tutorials")),"."))}m.isMDXComponent=!0}}]);