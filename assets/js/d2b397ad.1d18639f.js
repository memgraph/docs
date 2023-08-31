"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},95497:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>c,assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),l=n(85162);n(83523);const i={id:"neighbors",title:"neighbors",sidebar_label:"neighbors"},s=void 0,p={unversionedId:"query-modules/cpp/neighbors",id:"query-modules/cpp/neighbors",title:"neighbors",description:"The neighbors module provides tools for users to interact with and query nodes that have direct relationships to a specified node, enabling an examination of the immediate connections within the graph and thereby gaining insights into the network structure and connectivity.",source:"@site/mage/query-modules/cpp/neighbors.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/neighbors",permalink:"/docs/mage/query-modules/cpp/neighbors",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/neighbors.md",tags:[],version:"current",frontMatter:{id:"neighbors",title:"neighbors",sidebar_label:"neighbors"},sidebar:"mage",previous:{title:"migrate",permalink:"/docs/mage/query-modules/python/migrate"},next:{title:"node_classification_with_gnn",permalink:"/docs/mage/query-modules/python/node-classification-with-gnn"}},u={},d=[{value:"Procedures",id:"procedures",level:3},{value:"<code>at_hop(node, rel_type, distance)</code>",id:"at_hopnode-rel_type-distance",level:3},{value:"Input:",id:"input",level:4},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"<code>by_hop(node, rel_type, distance)</code>",id:"by_hopnode-rel_type-distance",level:3},{value:"Input:",id:"input-1",level:4},{value:"Output:",id:"output-1",level:4},{value:"Usage:",id:"usage-1",level:4},{value:"Example - neighbors.at_hop",id:"example---neighborsat_hop",level:2},{value:"Example - neighbors.by_hop",id:"example---neighborsby_hop",level:2}],c=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},h={toc:d,Highlight:c};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"neighbors")," module provides tools for users to interact with and query nodes that have direct relationships to a specified node, enabling an examination of the immediate connections within the graph and thereby gaining insights into the network structure and connectivity."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/tree/main/cpp/neighbors_module"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-neighbors-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trait"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Module type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"algorithm")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implementation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"C++")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Graph direction")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"directed")),"/",(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"undirected")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Edge weights")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"weighted")),"/",(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"unweighted")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Parallelism")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"sequential")))))),(0,r.kt)("h3",{id:"procedures"},"Procedures"),(0,r.kt)("h3",{id:"at_hopnode-rel_type-distance"},(0,r.kt)("inlineCode",{parentName:"h3"},"at_hop(node, rel_type, distance)")),(0,r.kt)("p",null,"Returns nodes that are at a specific distance from a given node, considering only the relationships of a specified type."),(0,r.kt)("h4",{id:"input"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node: Node")," \u27a1 node for which neighborhood is being analyzed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rel_type: List[string]")," \u27a1 list of relationship types to travel through; if empty, it is possible to travel through all types of relationships."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"distance: int")," \u27a1 number of hops between nodes.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'If \'<\' is added in front of the relationship type, only relationships coming into the node will be checked (e.g., "<KNOWS"), while if \'>\' is added at the end of the relationship type, only relationships coming from the node will be checked (e.g., "KNOWS>"). Furthermore, if the relationship type is not relevant, it is possible to enter only "<" or ">" to check ingoing or outgoing relationships.')),(0,r.kt)("h4",{id:"output"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nodes: Node")," \u27a1 nodes at a specific distance from a given node.")),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (p:Person)\nCALL neighbors.at_hop(p, ["KNOWS"], 3) YIELD nodes RETURN nodes;\n')),(0,r.kt)("h3",{id:"by_hopnode-rel_type-distance"},(0,r.kt)("inlineCode",{parentName:"h3"},"by_hop(node, rel_type, distance)")),(0,r.kt)("p",null,"Returns nodes that are at any or up to a specific distance from a given node, considering only the relationships of a specified type."),(0,r.kt)("h4",{id:"input-1"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node: Node")," \u27a1 node for which neighborhood is being analyzed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rel_type: List[string]")," \u27a1 list of relationship types to travel through; if empty, it is possible to travel through all types of relationships."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"distance: int")," \u27a1 maximum number of hops between nodes.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'If \'<\' is added in front of the relationship type, only relationships coming into the node will be checked (e.g., "<KNOWS"), while if \'>\' is added at the end of the relationship type, only relationships coming from the node will be checked (e.g., "KNOWS>"). Furthermore, if the relationship type is not relevant, it is possible to enter only "<" or ">" to check ingoing or outgoing relationships.')),(0,r.kt)("h4",{id:"output-1"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nodes: List[Node]")," \u27a1 list of nodes at a specific distance from a given node, starting from distance 1 up to a provided distance.")),(0,r.kt)("h4",{id:"usage-1"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (p:Person)\nCALL neighbors.by_hop(p, ["KNOWS"], 3) YIELD nodes RETURN nodes;\n')),(0,r.kt)("h2",{id:"example---neighborsat_hop"},"Example - neighbors.at_hop"),(0,r.kt)(o.Z,{groupId:"at_hop_example",defaultValue:"input",values:[{label:"Step 1: Cypher load commands",value:"load"},{label:"Step 2: Input graph",value:"input"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"load",mdxType:"TabItem"},(0,r.kt)("p",null,"You can create a simple graph database by running the following queries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Rachel) MERGE (b:Monica) CREATE (a)-[f:FRIENDS]->(b);\nMERGE (a:Monica) MERGE (b:Ross) CREATE (a)-[f:FRIENDS]->(b);\nMERGE (a:Monica) MERGE (b:Chandler) CREATE (a)-[f:LOVERS]->(b);\nMERGE (a:Chandler) MERGE (b:Joey) CREATE (a)-[f:FRIENDS]->(b);\nMERGE (a:Monica) MERGE (b:Phoebe) CREATE (a)-[f:FRIENDS]->(b);\nMERGE (a:Rachel) MERGE (b:Ross) CREATE (a)-[f:LOVERS]->(b);\n"))),(0,r.kt)(l.Z,{value:"input",mdxType:"TabItem"},(0,r.kt)("p",null,"The image below shows the above data as a graph:"),(0,r.kt)("img",{src:n(96686).Z})),(0,r.kt)(l.Z,{value:"run",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (p:Phoebe)\nCALL neighbors.at_hop(p, [""], 3) YIELD nodes\nRETURN nodes\n'))),(0,r.kt)(l.Z,{value:"result",mdxType:"TabItem"},(0,r.kt)("p",null,"The results should be identical to the ones below, except for the\n",(0,r.kt)("inlineCode",{parentName:"p"},"id")," values that depend on the internal database ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'+----------------------------+\n| nodes                      |\n+----------------------------+\n| {                          |    -> node at hop 3 with no relationship\n|     "id": 1,               |       types specified\n|     "labels": [            |\n|        "Joey"              |\n|     ],                     |\n|     "properties": {},      |\n|     "type": "node"         |\n| }                          |\n+----------------------------+\n\n')))),(0,r.kt)("h2",{id:"example---neighborsby_hop"},"Example - neighbors.by_hop"),(0,r.kt)(o.Z,{groupId:"by_hop_example",defaultValue:"input2",values:[{label:"Step 1: Cypher load commands",value:"load2"},{label:"Step 2: Input graph",value:"input2"},{label:"Step 3: Running command",value:"run2"},{label:"Step 4: Results",value:"result2"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"load2",mdxType:"TabItem"},(0,r.kt)("p",null,"You can create a simple graph database by running the following queries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Rachel) MERGE (b:Monica) CREATE (a)-[f:FRIENDS]->(b);\nMERGE (a:Monica) MERGE (b:Ross) CREATE (a)-[f:FRIENDS]->(b);\nMERGE (a:Monica) MERGE (b:Chandler) CREATE (a)-[f:LOVERS]->(b);\nMERGE (a:Chandler) MERGE (b:Joey) CREATE (a)-[f:FRIENDS]->(b);\nMERGE (a:Monica) MERGE (b:Phoebe) CREATE (a)-[f:FRIENDS]->(b);\nMERGE (a:Rachel) MERGE (b:Ross) CREATE (a)-[f:LOVERS]->(b);\n"))),(0,r.kt)(l.Z,{value:"input2",mdxType:"TabItem"},(0,r.kt)("p",null,"The image below shows the above data as a graph:"),(0,r.kt)("img",{src:n(96686).Z})),(0,r.kt)(l.Z,{value:"run2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (p:Phoebe)\nCALL neighbors.by_hop(p, ["FRIENDS"], 3) YIELD nodes\nRETURN nodes\n'))),(0,r.kt)(l.Z,{value:"result2",mdxType:"TabItem"},(0,r.kt)("p",null,"The results should be identical to the ones below, except for the\n",(0,r.kt)("inlineCode",{parentName:"p"},"id")," values that depend on the internal database ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'+----------------------------+\n| nodes                      |\n+----------------------------+\n| [{                         |    -> list of nodes at hop 1\n|     "id": 1,               |\n|     "labels": [            |\n|        "Monica"            |\n|     ],                     |\n|     "properties": {},      |\n|     "type": "node"         |\n| }]                         |\n+----------------------------+\n| [{                         |    -> list of nodes at hop 2\n|     "id": 2,               |\n|     "labels": [            |\n|        "Ross"              |\n|     ],                     |\n|     "properties": {},      |\n|     "type": "node"         |\n| }, {                       |\n|     "id": 3,               |\n|     "labels": [            |\n|        "Rachel"            |\n|     ],                     |\n|     "properties": {},      |\n|     "type": "node"         |\n| }]                         |\n+----------------------------+\n| []                         |    -> list of nodes at hop 3\n+----------------------------+\n')))))}m.isMDXComponent=!0},83523:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,r.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}l.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(16550),s=n(91980),p=n(67392),u=n(50012);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=c(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,p]=m({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??d;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),g(e)}),[p,g,o]),tabValues:o}}var b=n(72389);const f="tabList__CuJ",y="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==i&&(d(t),s(a))},h=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:c},l,{className:(0,o.Z)("tabs__item",y,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function E(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(E,(0,a.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},96686:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/neighbors-69af44455a0a0d437669de48cdbec8f1.png"}}]);