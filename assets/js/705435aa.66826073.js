"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96398],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,h=m["".concat(u,".").concat(c)]||m[c]||d[c]||o;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2405:(e,t,a)=>{a.r(t),a.d(t,{Highlight:()=>c,assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162),i=a(83523);const u={id:"max-flow",title:"max_flow",sidebar_label:"max_flow"},s=void 0,p={unversionedId:"query-modules/python/max-flow",id:"query-modules/python/max-flow",title:"max_flow",description:"The maximum flow problem consists of finding a flow through a graph such that it",source:"@site/mage/query-modules/python/max-flow.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/max-flow",permalink:"/docs/mage/query-modules/python/max-flow",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/max-flow.md",tags:[],version:"current",frontMatter:{id:"max-flow",title:"max_flow",sidebar_label:"max_flow"},sidebar:"mage",previous:{title:"llm_util",permalink:"/docs/mage/query-modules/python/llm-util"},next:{title:"meta_util",permalink:"/docs/mage/query-modules/python/meta-util"}},d={},m=[{value:"Procedures",id:"procedures",level:2},{value:"<code>get_flow(parameters, edge_property)</code>",id:"get_flowparameters-edge_property",level:3},{value:"Input:",id:"input",level:4},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"<code>get_paths(parameters, edge_property)</code>",id:"get_pathsparameters-edge_property",level:3},{value:"Input:",id:"input-1",level:4},{value:"Output:",id:"output-1",level:4},{value:"Usage:",id:"usage-1",level:4},{value:"Example",id:"example",level:2}],c=e=>{let{children:t,color:a}=e;return(0,r.kt)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},h={toc:m,Highlight:c};function g(e){let{components:t,...u}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The maximum flow problem consists of finding a flow through a graph such that it\nis the maximum possible flow."),(0,r.kt)("p",null,"The algorithm implementation is based on the Ford-Fulkerson method with capacity\nscaling. Ford-Fulkerson method is not itself an algorithm as it does not specify\nthe procedure of finding augmenting paths in a residual graph. It is a greedy\nmethod, using augmenting paths as it comes across them. Input is a weighted\ngraph with a defined source and sink, representing the beginning and end of the\nflow network. The algorithm begins with an empty flow and, at each step, finds a\npath, called an augmenting path, from the source to the sink that generates more\nflow. When flow cannot be increased anymore, the algorithm stops, and the maximum\nflow has been found."),(0,r.kt)("p",null,"The capacity scaling is a heuristic for finding augmenting paths in such a way\nthat prioritizes taking edges with larger capacities, maintaining a threshold\nvalue that is only lowered once no larger path can be found. It speeds up the\nalgorithm noticeably compared to a standard DFS search."),(0,r.kt)("p",null,"The algorithm is adapted to work with heterogeneous graphs, meaning not all\nedges need to have the defined edge property used for edge flow. When an edge\ndoesn't have a flow, it is skipped, and when no edges have this property, the\nreturning max flow value is 0."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/max_flow.py"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-max_flow-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trait"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Module type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"algorithm")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implementation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"Python")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Graph direction")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"directed")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Edge weights")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"weighted")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Parallelism")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"sequential")))))),(0,r.kt)("admonition",{title:"Too slow?",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If this algorithm implementation is too slow for your use case, ",(0,r.kt)("a",{parentName:"p",href:"mailto:tech@memgraph.com"},"contact us")," and request a rewrite to C++ !")),(0,r.kt)("h2",{id:"procedures"},"Procedures"),(0,r.kt)(i.ZP,{mdxType:"RunOnSubgraph"}),(0,r.kt)("h3",{id:"get_flowparameters-edge_property"},(0,r.kt)("inlineCode",{parentName:"h3"},"get_flow(parameters, edge_property)")),(0,r.kt)("h4",{id:"input"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"start_v: Vertex")," \u27a1 Source node from which the maximum flow is calculated"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"end_v: Vertex")," \u27a1 Sink node to which the max flow is calculated"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'edge_property: string (default="weight")')," \u27a1 Edge property which is used as the flow\ncapacity of the edge")),(0,r.kt)("h4",{id:"output"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_flow: Number")," \u27a1 Maximum flow of the network, from source to sink")),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (source {id: 0}), (sink {id: 5})\nCALL max_flow.get_flow(source, sink, "weight")\nYIELD max_flow\nRETURN max_flow;\n')),(0,r.kt)("h3",{id:"get_pathsparameters-edge_property"},(0,r.kt)("inlineCode",{parentName:"h3"},"get_paths(parameters, edge_property)")),(0,r.kt)("h4",{id:"input-1"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"start_v: Vertex")," \u27a1 Source node from which the maximum flow is calculated"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"end_v: Vertex")," \u27a1 Sink node to which the max flow is calculated"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'edge_property: string (default="weight")')," \u27a1 Edge property which is used as the flow\ncapacity of the edge")),(0,r.kt)("h4",{id:"output-1"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path: Path")," \u27a1 path with a flow in a maximum flow"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flow: Number")," \u27a1 flow amount corresponding to that path")),(0,r.kt)("h4",{id:"usage-1"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (source {id: 0}), (sink {id: 5})\nCALL max_flow.get_paths(source, sink, "weight")\nYIELD path, flow\nRETURN path, flow;\n')),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(o.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"visualization",mdxType:"TabItem"},(0,r.kt)("img",{src:a(28083).Z})),(0,r.kt)(l.Z,{value:"cypher",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MERGE (a:Node {id: "A"}) MERGE (b:Node {id: "B"}) CREATE (a)-[:RELATION {weight: 9}]->(b);\nMERGE (a:Node {id: "A"}) MERGE (b:Node {id: "C"}) CREATE (a)-[:RELATION {weight: 10}]->(b);\nMERGE (a:Node {id: "B"}) MERGE (b:Node {id: "E"}) CREATE (a)-[:RELATION {weight: 8}]->(b);\nMERGE (a:Node {id: "C"}) MERGE (b:Node {id: "F"}) CREATE (a)-[:RELATION {weight: 7}]->(b);\nMERGE (a:Node {id: "C"}) MERGE (b:Node {id: "D"}) CREATE (a)-[:RELATION {weight: 1}]->(b);\nMERGE (a:Node {id: "A"}) MERGE (b:Node {id: "D"}) CREATE (a)-[:RELATION {weight: 8}]->(b);\nMERGE (a:Node {id: "E"}) MERGE (b:Node {id: "D"}) CREATE (a)-[:RELATION {weight: 2}]->(b);\nMERGE (a:Node {id: "D"}) MERGE (b:Node {id: "F"}) CREATE (a)-[:RELATION {weight: 11}]->(b);\nMERGE (a:Node {id: "E"}) MERGE (b:Node {id: "G"}) CREATE (a)-[:RELATION {weight: 5}]->(b);\nMERGE (a:Node {id: "F"}) MERGE (b:Node {id: "G"}) CREATE (a)-[:RELATION {weight: 14}]->(b);\n'))),(0,r.kt)(l.Z,{value:"run",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (source {id: "A"}), (sink {id: "G"})\nCALL max_flow.get_flow(source, sink)\nYIELD max_flow\nRETURN max_flow;\n'))),(0,r.kt)(l.Z,{value:"result",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"+----------+\n| max_flow |\n+----------+\n| 19       |\n+----------+\n")))))}g.isMDXComponent=!0},83523:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={toc:[]};function l(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,r.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}l.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),u=a(91980),s=a(67392),p=a(50012);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,s]=h({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=u??d;return c({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var f=a(72389);const b="tabList__CuJ",k="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=s[a].value;n!==i&&(d(t),u(n))},c=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;a=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;a=p[t]??p[p.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:c,onClick:m},l,{className:(0,o.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":i===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function E(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(E,(0,n.Z)({key:String(t)},e))}},28083:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/max-flow-1-58a35ba30d9727f52b5dabce8b7cc8d9.png"}}]);