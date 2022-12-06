"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34815],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,g=c["".concat(d,".").concat(m)]||c[m]||p[m]||o;return r?a.createElement(g,l(l({ref:t},u),{},{components:r})):a.createElement(g,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},15275:(e,t,r)=>{r.r(t),r.d(t,{Highlight:()=>m,assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>c});var a=r(87462),n=(r(67294),r(3905)),o=r(65488),l=r(85162),i=r(83523);const d={id:"bridges",title:"bridges",sidebar_label:"bridges"},s=void 0,u={unversionedId:"query-modules/cpp/bridges",id:"query-modules/cpp/bridges",title:"bridges",description:"docs-source",source:"@site/mage/query-modules/cpp/bridges.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/bridges",permalink:"/docs/mage/query-modules/cpp/bridges",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/bridges.md",tags:[],version:"current",frontMatter:{id:"bridges",title:"bridges",sidebar_label:"bridges"},sidebar:"mage",previous:{title:"bipartite_matching",permalink:"/docs/mage/query-modules/cpp/bipartite-matching"},next:{title:"community_detection",permalink:"/docs/mage/query-modules/cpp/community-detection"}},p={},c=[{value:"Abstract",id:"abstract",level:2},{value:"Procedures",id:"procedures",level:2},{value:"<code>get()</code>",id:"get",level:3},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"Example",id:"example",level:2}],m=e=>{let{children:t,color:r}=e;return(0,n.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},g={toc:c,Highlight:m};function b(e){let{components:t,...d}=e;return(0,n.kt)("wrapper",(0,a.Z)({},g,d,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/bridges_module/bridges_module.cpp"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-bridges-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,n.kt)("h2",{id:"abstract"},"Abstract"),(0,n.kt)("p",null,"A bridge in the graph can be described as an edge which if deleted, creates two disjoint graph components. This algorithm finds bridges within the graph. This algorithm has various practical usages such can be road or internet network design planning. A bridge can represent a bottleneck for many scenarios and it is valuable to have such an algorithm to detect it."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Trait"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Module type")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,n.kt)("strong",{parentName:"td"},"algorithm")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Implementation")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,n.kt)("strong",{parentName:"td"},"C++")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Graph direction")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,n.kt)("strong",{parentName:"td"},"undirected")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Edge weights")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,n.kt)("strong",{parentName:"td"},"unweighted")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Parallelism")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,n.kt)("strong",{parentName:"td"},"sequential")))))),(0,n.kt)("h2",{id:"procedures"},"Procedures"),(0,n.kt)(i.ZP,{mdxType:"RunOnSubgraph"}),(0,n.kt)("h3",{id:"get"},(0,n.kt)("inlineCode",{parentName:"h3"},"get()")),(0,n.kt)("h4",{id:"output"},"Output:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"node_from")," \u27a1 Represents the first node in bridge edge"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"node_to")," \u27a1 Represents the second node in bridge edge")),(0,n.kt)("h4",{id:"usage"},"Usage:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL bridges.get()\nYIELD node_from, node_to;\n")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)(o.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"visualization",mdxType:"TabItem"},(0,n.kt)("img",{src:r(9132).Z})),(0,n.kt)(l.Z,{value:"cypher",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 1}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 0}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\n"))),(0,n.kt)(l.Z,{value:"run",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL bridges.get() YIELD node_from, node_to\nWITH node_from, node_to\nMATCH (node_from)-[bridge]-(node_to)\nRETURN bridge, node_from, node_to;\n"))),(0,n.kt)(l.Z,{value:"result",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plaintext"},"+-----------------+-----------------+-----------------+\n| bridge          | node_from       | node_to         |\n+-----------------+-----------------+-----------------+\n| [:RELATION]     | (:Node {id: 3}) | (:Node {id: 4}) |\n| [:RELATION]     | (:Node {id: 0}) | (:Node {id: 3}) |\n+-----------------+-----------------+-----------------+\n")))))}b.isMDXComponent=!0},83523:(e,t,r)=>{r.d(t,{ZP:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={toc:[]};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,n.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}l.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(87462),n=r(67294),o=r(86010),l=r(72389),i=r(67392),d=r(7094),s=r(12466);const u="tabList__CuJ",p="tabItem_LNqP";function c(e){var t;const{lazy:r,block:l,defaultValue:c,values:m,groupId:g,className:b}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??h.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),f=(0,i.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,d.U)(),[E,T]=(0,n.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.o5)();if(null!=g){const e=v[g];null!=e&&e!==E&&k.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,r=O.indexOf(t),a=k[r].value;a!==E&&(w(t),T(a),null!=g&&N(g,String(a)))},R=e=>{var t;let r=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;r=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;r=O[t]??O[O.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},b)},k.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>O.push(e),onKeyDown:R,onClick:x},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":E===t})}),r??t)}))),r?(0,n.cloneElement)(h.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,l.Z)();return n.createElement(c,(0,a.Z)({key:String(t)},e))}},9132:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/bridges-1-d0d9b65f03a21ccc743030ad81da46ed.png"}}]);