"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56922],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},25705:(e,t,a)=>{a.r(t),a.d(t,{Highlight:()=>c,assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),o=a(85162),i=a(83523);const s={id:"graph-analyzer",title:"graph_analyzer",sidebar_label:"graph_analyzer"},u=void 0,p={unversionedId:"query-modules/python/graph-analyzer",id:"query-modules/python/graph-analyzer",title:"graph_analyzer",description:"docs-source",source:"@site/mage/query-modules/python/graph-analyzer.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/graph-analyzer",permalink:"/docs/mage/query-modules/python/graph-analyzer",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/graph-analyzer.md",tags:[],version:"current",frontMatter:{id:"graph-analyzer",title:"graph_analyzer",sidebar_label:"graph_analyzer"},sidebar:"mage",previous:{title:"export_util",permalink:"/docs/mage/query-modules/python/export-util"},next:{title:"graph_coloring",permalink:"/docs/mage/query-modules/python/graph-coloring"}},d={},m=[{value:"Abstract",id:"abstract",level:2},{value:"Procedures",id:"procedures",level:2},{value:"<code>analyze(analyses)</code>",id:"analyzeanalyses",level:3},{value:"Input:",id:"input",level:4},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"<code>analyze_subgraph(vertices, edges, analyses)</code>",id:"analyze_subgraphvertices-edges-analyses",level:3},{value:"Input:",id:"input-1",level:4},{value:"Output:",id:"output-1",level:4},{value:"Usage:",id:"usage-1",level:4},{value:"Example",id:"example",level:2}],c=e=>{let{children:t,color:a}=e;return(0,r.kt)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},g={toc:m,Highlight:c};function h(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/graph_analyzer.py"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-graph_analyzer-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"The first thing someone should focus on when working with graphs is getting deep analytics of the current state. That is what this module is doing. By using the power of NetworkX, various different graph properties are extracted. This module has the ability to run on a subgraph if a subgraph of nodes is provided as input. Here is a list of analytics that it uses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nodes"),": Number of nodes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"edges"),": Number of edges"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bridges"),": Number of bridges"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"articulation_points"),": Number of articulation points"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"avg_degree"),": Average degree"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sorted_nodes_degree"),": Sorted nodes degree"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"self_loops"),": Self loops"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"is_bipartite"),": Is bipartite"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"is_plannar"),": Is planar"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"is_biconnected"),": Is biconnected"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"is_weakly_connected"),": Is weakly connected"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"number_of_weakly_components"),": Number of weakly connected components"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"is_strongly_connected"),": Is strongly connected"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"strongly_components"),": Number of strongly connected components"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"is_dag"),": Is directed acyclic graph (DAG)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"is_eulerian"),": Is eulerian"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"is_forest"),": Is forest"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"is_tree"),": Is tree")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trait"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Module type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"module")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implementation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"Python")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Graph direction")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"undirected")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Edge weights")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"unweighted")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Parallelism")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"sequential")))))),(0,r.kt)("h2",{id:"procedures"},"Procedures"),(0,r.kt)(i.ZP,{mdxType:"RunOnSubgraph"}),(0,r.kt)("h3",{id:"analyzeanalyses"},(0,r.kt)("inlineCode",{parentName:"h3"},"analyze(analyses)")),(0,r.kt)("h4",{id:"input"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"analyses: List[string] (default=NULL)")," \u27a1 List of analytics names to be fetched. If provided with NULL, the whole set of analytics will be included.")),(0,r.kt)("h4",{id:"output"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name: string")," \u27a1 The name of the analytics"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value: string")," \u27a1 Analytics value, stored as a string")),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL graph_analyzer.analyze() YIELD *;\n")),(0,r.kt)("h3",{id:"analyze_subgraphvertices-edges-analyses"},(0,r.kt)("inlineCode",{parentName:"h3"},"analyze_subgraph(vertices, edges, analyses)")),(0,r.kt)("h4",{id:"input-1"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vertices: List[Vertex]")," \u27a1 Subset of vertices within a graph."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"edges: List[Edge]")," \u27a1 Subset of edges in a graph for which analytics will take place."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"analyses: List[string] (default=NULL)")," \u27a1 List of analytics names to be fetched. If provided with NULL, the\xa0whole set of analytics will be included.")),(0,r.kt)("h4",{id:"output-1"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name: string")," \u27a1 The name of the analytics"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value: string")," \u27a1 Analytics value, stored as a string")),(0,r.kt)("h4",{id:"usage-1"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)-[e]-(m)\nWITH COLLECT(n) AS nodes_subset, COLLECT(e) AS edges_subset\nCALL graph_analyzer.analyze(nodes_subset, edges_subset) YIELD name, value\nRETURN name, value;\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(l.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"visualization",mdxType:"TabItem"},(0,r.kt)("img",{src:a(43586).Z})),(0,r.kt)(o.Z,{value:"cypher",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 0}) MERGE (b:Node {id: 6}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 6}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 7}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 8}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 7}) MERGE (b:Node {id: 8}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 8}) MERGE (b:Node {id: 9}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 10}) MERGE (b:Node {id: 11}) CREATE (a)-[:RELATION]->(b);\n"))),(0,r.kt)(o.Z,{value:"run",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL graph_analyzer.analyze([\n    "nodes", "edges", "bridges", "articulation_points",\n    "avg_degree", "is_dag", "is_tree", "strongly_components"\n    ])\nYIELD *\nRETURN *;\n'))),(0,r.kt)(o.Z,{value:"result",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'+-------------------------------------------+-------------------------------------------+\n| name                                      | value                                     |\n+-------------------------------------------+-------------------------------------------+\n| "Number of nodes"                         | "12"                                      |\n| "Number of edges"                         | "14"                                      |\n| "Number of bridges"                       | "2"                                       |\n| "Number of articulation points"           | "3"                                       |\n| "Average degree"                          | "1.1666666666666667"                      |\n| "Is DAG"                                  | "True"                                    |\n| "Is tree"                                 | "False"                                   |\n| "Number of strongly connected components" | "12"                                      |\n+-------------------------------------------+-------------------------------------------+\n')))))}h.isMDXComponent=!0},83523:(e,t,a)=>{a.d(t,{ZP:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={toc:[]};function o(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,r.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}o.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),i=a(67392),s=a(7094),u=a(12466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:a,block:o,defaultValue:m,values:c,groupId:g,className:h}=e,N=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??N.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,i.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:m??(null==(t=N.find((e=>e.props.default)))?void 0:t.props.value)??N[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:f}=(0,s.U)(),[v,T]=(0,r.useState)(k),R=[],{blockElementScrollPositionUntilNextRender:_}=(0,u.o5)();if(null!=g){const e=E[g];null!=e&&e!==v&&b.some((t=>t.value===e))&&T(e)}const w=e=>{const t=e.currentTarget,a=R.indexOf(t),n=b[a].value;n!==v&&(_(t),T(n),null!=g&&f(g,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const t=R.indexOf(e.currentTarget)+1;a=R[t]??R[0];break}case"ArrowLeft":{const t=R.indexOf(e.currentTarget)-1;a=R[t]??R[R.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},h)},b.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>R.push(e),onKeyDown:I,onClick:w},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":v===t})}),a??t)}))),a?(0,r.cloneElement)(N.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function c(e){const t=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},43586:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graph-analyzer-1-4a8b42aeb2149f9f31d1392e55ef1871.png"}}]);