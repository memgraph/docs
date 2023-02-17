"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34815],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,g=p["".concat(u,".").concat(m)]||p[m]||c[m]||o;return r?a.createElement(g,l(l({ref:t},d),{},{components:r})):a.createElement(g,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},15275:(e,t,r)=>{r.r(t),r.d(t,{Highlight:()=>m,assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>u,metadata:()=>d,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(74866),l=r(85162),i=r(83523);const u={id:"bridges",title:"bridges",sidebar_label:"bridges"},s=void 0,d={unversionedId:"query-modules/cpp/bridges",id:"query-modules/cpp/bridges",title:"bridges",description:"docs-source",source:"@site/mage/query-modules/cpp/bridges.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/bridges",permalink:"/docs/mage/query-modules/cpp/bridges",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/bridges.md",tags:[],version:"current",frontMatter:{id:"bridges",title:"bridges",sidebar_label:"bridges"},sidebar:"mage",previous:{title:"bipartite_matching",permalink:"/docs/mage/query-modules/cpp/bipartite-matching"},next:{title:"community_detection",permalink:"/docs/mage/query-modules/cpp/community-detection"}},c={},p=[{value:"Abstract",id:"abstract",level:2},{value:"Procedures",id:"procedures",level:2},{value:"<code>get()</code>",id:"get",level:3},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"Example",id:"example",level:2}],m=e=>{let{children:t,color:r}=e;return(0,n.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},g={toc:p,Highlight:m};function b(e){let{components:t,...u}=e;return(0,n.kt)("wrapper",(0,a.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/bridges_module/bridges_module.cpp"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-bridges-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,n.kt)("h2",{id:"abstract"},"Abstract"),(0,n.kt)("p",null,"A bridge in the graph can be described as an edge which if deleted, creates two disjoint graph components. This algorithm finds bridges within the graph. This algorithm has various practical usages such can be road or internet network design planning. A bridge can represent a bottleneck for many scenarios and it is valuable to have such an algorithm to detect it."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Trait"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Module type")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,n.kt)("strong",{parentName:"td"},"algorithm")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Implementation")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,n.kt)("strong",{parentName:"td"},"C++")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Graph direction")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,n.kt)("strong",{parentName:"td"},"undirected")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Edge weights")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,n.kt)("strong",{parentName:"td"},"unweighted")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Parallelism")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,n.kt)("strong",{parentName:"td"},"sequential")))))),(0,n.kt)("h2",{id:"procedures"},"Procedures"),(0,n.kt)(i.ZP,{mdxType:"RunOnSubgraph"}),(0,n.kt)("h3",{id:"get"},(0,n.kt)("inlineCode",{parentName:"h3"},"get()")),(0,n.kt)("h4",{id:"output"},"Output:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"node_from")," \u27a1 Represents the first node in bridge edge"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"node_to")," \u27a1 Represents the second node in bridge edge")),(0,n.kt)("h4",{id:"usage"},"Usage:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL bridges.get()\nYIELD node_from, node_to;\n")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)(o.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"visualization",mdxType:"TabItem"},(0,n.kt)("img",{src:r(60144).Z})),(0,n.kt)(l.Z,{value:"cypher",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 1}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 0}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\n"))),(0,n.kt)(l.Z,{value:"run",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL bridges.get() YIELD node_from, node_to\nWITH node_from, node_to\nMATCH (node_from)-[bridge]-(node_to)\nRETURN bridge, node_from, node_to;\n"))),(0,n.kt)(l.Z,{value:"result",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plaintext"},"+-----------------+-----------------+-----------------+\n| bridge          | node_from       | node_to         |\n+-----------------+-----------------+-----------------+\n| [:RELATION]     | (:Node {id: 3}) | (:Node {id: 4}) |\n| [:RELATION]     | (:Node {id: 0}) | (:Node {id: 3}) |\n+-----------------+-----------------+-----------------+\n")))))}b.isMDXComponent=!0},83523:(e,t,r)=>{r.d(t,{ZP:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={toc:[]};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,n.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}l.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>E});var a=r(87462),n=r(67294),o=r(86010),l=r(12466),i=r(16550),u=r(91980),s=r(67392),d=r(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,s]=g({queryString:r,groupId:a}),[c,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),h=(()=>{const e=u??c;return m({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),b(e)}),[s,b,o]),tabValues:o}}var h=r(72389);const f="tabList__CuJ",k="tabItem_LNqP";function y(e){let{className:t,block:r,selectedValue:i,selectValue:u,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,r=d.indexOf(t),a=s[r].value;a!==i&&(c(t),u(a))},m=e=>{var t;let r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;r=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;r=d[t]??d[d.length-1];break}}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":i===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;if(t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",f)},n.createElement(y,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function E(e){const t=(0,h.Z)();return n.createElement(N,(0,a.Z)({key:String(t)},e))}},60144:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/bridges-1-d0d9b65f03a21ccc743030ad81da46ed.png"}}]);