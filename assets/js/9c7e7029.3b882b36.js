"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66987],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),d=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,g=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return a?r.createElement(g,o(o({ref:t},s),{},{components:a})):r.createElement(g,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},35005:(e,t,a)=>{a.r(t),a.d(t,{Highlight:()=>m,assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),l=a(74866),o=a(85162),i=a(83523);const u={id:"degree-centrality",title:"degree_centrality",sidebar_label:"degree_centrality"},d=void 0,s={unversionedId:"query-modules/cpp/degree-centrality",id:"query-modules/cpp/degree-centrality",title:"degree_centrality",description:"Degree Centrality is the basic measurement of centrality that refers to the",source:"@site/mage/query-modules/cpp/degree_centrality.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/degree-centrality",permalink:"/docs/mage/query-modules/cpp/degree-centrality",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/degree_centrality.md",tags:[],version:"current",frontMatter:{id:"degree-centrality",title:"degree_centrality",sidebar_label:"degree_centrality"},sidebar:"mage",previous:{title:"date",permalink:"/docs/mage/query-modules/python/date"},next:{title:"distance_calculator",permalink:"/docs/mage/query-modules/cpp/distance-calculator"}},c={},p=[{value:"Procedures",id:"procedures",level:2},{value:"<code>get(type)</code>",id:"gettype",level:3},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"<code>get_subgraph(nodes, relationships, type)</code>",id:"get_subgraphnodes-relationships-type",level:3},{value:"Input:",id:"input",level:4},{value:"Output:",id:"output-1",level:4},{value:"Usage:",id:"usage-1",level:4},{value:"Example",id:"example",level:2}],m=e=>{let{children:t,color:a}=e;return(0,n.kt)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},g={toc:p,Highlight:m};function h(e){let{components:t,...u}=e;return(0,n.kt)("wrapper",(0,r.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Degree Centrality")," is the basic measurement of centrality that refers to the\nnumber of edges adjacent to a node. For directed graphs, we define an in-degree\nmeasure, which is defined as the number of in-coming edges, and an out-degree\nmeasure, defined as the number of out-going edges."),(0,n.kt)("p",null,"Let $A = (a",(0,n.kt)("em",{parentName:"p"},"{i,j})$ be the adjacency matrix of a directed graph. The in-degree centrality $x"),"{i}$ of node $i$ is given by: $$x",(0,n.kt)("em",{parentName:"p"},"{i} = \\sum_k a"),"{k,i}$$ or in matrix form (1 is a vector with all components equal to unity): $$x = 1 A$$ The out-degree centrality $y",(0,n.kt)("em",{parentName:"p"},"{i}$ of node $i$ is given by: $$y"),"{i} = \\sum",(0,n.kt)("em",{parentName:"p"},"k a"),"{i,k}$$ or in matrix form: $$y = A 1$$"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/degree_centrality_module/algorithm/degree_centrality_module.cpp"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-degree_centrality-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Trait"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Module type")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,n.kt)("strong",{parentName:"td"},"algorithm")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Implementation")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,n.kt)("strong",{parentName:"td"},"C++")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Graph direction")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,n.kt)("strong",{parentName:"td"},"directed/undirected")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Edge weights")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,n.kt)("strong",{parentName:"td"},"unweighted")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Parallelism")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,n.kt)("strong",{parentName:"td"},"sequential")))))),(0,n.kt)("h2",{id:"procedures"},"Procedures"),(0,n.kt)(i.ZP,{mdxType:"RunOnSubgraph"}),(0,n.kt)("h3",{id:"gettype"},(0,n.kt)("inlineCode",{parentName:"h3"},"get(type)")),(0,n.kt)("h4",{id:"output"},"Output:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"node")," \u27a1 Node in the graph, for which Degree Centrality is calculated."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"degree")," \u27a1 Calculated degree of a node.")),(0,n.kt)("h4",{id:"usage"},"Usage:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL degree_centrality.get()\nYIELD node, degree;\n")),(0,n.kt)("h3",{id:"get_subgraphnodes-relationships-type"},(0,n.kt)("inlineCode",{parentName:"h3"},"get_subgraph(nodes, relationships, type)")),(0,n.kt)("h4",{id:"input"},"Input:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"nodes: list[node]")," \u27a1 nodes to be used in the algorithm."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"relationships: list[relationship]")," \u27a1 relationships to be considered for\ndegree calculation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'type: string (default="undirected")'),' \u27a1 whether we are using "in", "out", or\n"undirected" edges.')),(0,n.kt)("h4",{id:"output-1"},"Output:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"node")," \u27a1 Node in the graph, for which Degree Centrality is calculated."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"degree")," \u27a1 Calculated degree of a node.")),(0,n.kt)("h4",{id:"usage-1"},"Usage:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL degree_centrality.get()\nYIELD node, degree;\n")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)(l.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"visualization",mdxType:"TabItem"},(0,n.kt)("img",{src:a(68191).Z})),(0,n.kt)(o.Z,{value:"cypher",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 1}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 8}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 4}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 4}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 6}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 7}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 8}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 8}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 9}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 10}) MERGE (b:Node {id: 9}) CREATE (a)-[:RELATION]->(b);\n"))),(0,n.kt)(o.Z,{value:"run",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL degree_centrality.get("in")\nYIELD node, degree\nRETURN node, degree;\n'))),(0,n.kt)(o.Z,{value:"result",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plaintext"},"+------------------+------------------+\n| node             | degree           |\n+------------------+------------------+\n| (:Node {id: 9})  | 1                |\n| (:Node {id: 7})  | 0                |\n| (:Node {id: 6})  | 0                |\n| (:Node {id: 5})  | 0                |\n| (:Node {id: 4})  | 0                |\n| (:Node {id: 3})  | 0                |\n| (:Node {id: 8})  | 1                |\n| (:Node {id: 2})  | 5                |\n| (:Node {id: 10}) | 7                |\n| (:Node {id: 0})  | 1                |\n| (:Node {id: 1})  | 1                |\n+------------------+------------------+\n\n")))))}h.isMDXComponent=!0},83523:(e,t,a)=>{a.d(t,{ZP:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={toc:[]};function o(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,n.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}o.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(87462),n=a(67294),l=a(86010),o=a(12466),i=a(16550),u=a(91980),d=a(67392),s=a(50012);function c(e){return function(e){var t;return(null==(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=p(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,d]=g({queryString:a,groupId:r}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,s.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=u??c;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),h(e)}),[d,h,l]),tabValues:l}}var b=a(72389);const E="tabList__CuJ",y="tabItem_LNqP";function N(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:d}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=s.indexOf(t),r=d[a].value;r!==i&&(c(t),u(r))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;a=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;a=s[t]??s[s.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",y,null==o?void 0:o.className,{"tabs__item--active":i===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=h(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",E)},n.createElement(N,(0,r.Z)({},e,t)),n.createElement(f,(0,r.Z)({},e,t)))}function v(e){const t=(0,b.Z)();return n.createElement(k,(0,r.Z)({key:String(t)},e))}},68191:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/memgraph-degree-centrality-48335fadf6774a2c8f79c9dcc86c8a01.png"}}]);