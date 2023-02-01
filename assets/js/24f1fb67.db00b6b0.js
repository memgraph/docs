"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84683],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,g=p["".concat(i,".").concat(m)]||p[m]||c[m]||u;return r?n.createElement(g,l(l({ref:t},d),{},{components:r})):n.createElement(g,l({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,l=new Array(u);l[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<u;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},73332:(e,t,r)=>{r.r(t),r.d(t,{Highlight:()=>m,assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),u=r(74866),l=r(85162),o=r(83523);const i={id:"uuid-generator",title:"uuid_generator",sidebar_label:"uuid_generator"},s=void 0,d={unversionedId:"query-modules/cpp/uuid-generator",id:"query-modules/cpp/uuid-generator",title:"uuid_generator",description:"docs-source",source:"@site/mage/query-modules/cpp/uuid_generator.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/uuid-generator",permalink:"/docs/mage/query-modules/cpp/uuid-generator",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/uuid_generator.md",tags:[],version:"current",frontMatter:{id:"uuid-generator",title:"uuid_generator",sidebar_label:"uuid_generator"},sidebar:"mage",previous:{title:"union_find",permalink:"/docs/mage/query-modules/python/union-find"},next:{title:"vrp",permalink:"/docs/mage/query-modules/python/vrp"}},c={},p=[{value:"Abstract",id:"abstract",level:2},{value:"Procedures",id:"procedures",level:2},{value:"<code>get()</code>",id:"get",level:3},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"Example",id:"example",level:2}],m=e=>{let{children:t,color:r}=e;return(0,a.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},g={toc:p,Highlight:m};function b(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/uuid_module/uuid_module.cpp"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-uuid-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("p",null,"This module is used to generate string UUIDs which can be stored as properties\non nodes or edges. The underlying implementation makes use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"uuid-dev"),"\nlibrary. When using the ",(0,a.kt)("inlineCode",{parentName:"p"},"uuid")," module on Linux systems, the library can be\ninstalled by running ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo apt-get install uuid-dev"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Trait"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Module type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,a.kt)("strong",{parentName:"td"},"util")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Implementation")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,a.kt)("strong",{parentName:"td"},"C++")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Parallelism")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,a.kt)("strong",{parentName:"td"},"sequential")))))),(0,a.kt)("h2",{id:"procedures"},"Procedures"),(0,a.kt)(o.ZP,{mdxType:"RunOnSubgraph"}),(0,a.kt)("h3",{id:"get"},(0,a.kt)("inlineCode",{parentName:"h3"},"get()")),(0,a.kt)("h4",{id:"output"},"Output:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uuid")," \u27a1 Returns a UUID string.")),(0,a.kt)("h4",{id:"usage"},"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)\nCALL uuid_generator.get() YIELD uuid\nSET n.uuid = uuid\nRETURN n.uuid AS node_uuid;\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(u.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"visualization",mdxType:"TabItem"},(0,a.kt)("img",{src:r(55390).Z,height:"300px"})),(0,a.kt)(l.Z,{value:"cypher",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\n"))),(0,a.kt)(l.Z,{value:"run",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)\nCALL uuid_generator.get() YIELD uuid\nSET n.uuid = uuid\nRETURN n.uuid AS node_uuid;\n"))),(0,a.kt)(l.Z,{value:"result",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},'+----------------------------------------+\n| node_uuid                              |\n+----------------------------------------+\n| "ef4722b2-628b-4f93-8667-fc91134ed980" |\n| "601faade-8c61-4dc3-a68a-693fed4ad40c" |\n| "dc4283b8-90d6-402e-8fc0-f37f9959b593" |\n+----------------------------------------+\n')))))}b.isMDXComponent=!0},83523:(e,t,r)=>{r.d(t,{ZP:()=>l});var n=r(87462),a=(r(67294),r(3905));const u={toc:[]};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,a.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}l.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const u="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(u,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(87462),a=r(67294),u=r(86010),l=r(12466),o=r(16550),i=r(91980),s=r(67392),d=r(50012);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.k6)(),u=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(u),(0,a.useCallback)((e=>{if(!u)return;const t=new URLSearchParams(n.location.search);t.set(u,e),n.replace({...n.location,search:t.toString()})}),[u,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,u=p(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:u}))),[i,s]=g({queryString:r,groupId:n}),[c,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,u]=(0,d.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&u.set(e)}),[r,u])]}({groupId:n}),f=(()=>{const e=i??c;return m({value:e,tabValues:u})?e:null})();(0,a.useEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),b(e)}),[s,b,u]),tabValues:u}}var f=r(72389);const h="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:r,selectedValue:o,selectValue:i,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,r=d.indexOf(t),n=s[r].value;n!==o&&(c(t),i(n))},m=e=>{var t;let r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;r=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;r=d[t]??d[d.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,u.Z)("tabs__item",y,null==l?void 0:l.className,{"tabs__item--active":o===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function E(e){const t=b(e);return a.createElement("div",{className:(0,u.Z)("tabs-container",h)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return a.createElement(E,(0,n.Z)({key:String(t)},e))}},55390:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/uuid-generator-1-a2112054c5efaefe8ff3cf2b2a7d136e.png"}}]);