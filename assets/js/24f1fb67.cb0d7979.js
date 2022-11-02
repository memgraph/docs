"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84683],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,g=c["".concat(i,".").concat(m)]||c[m]||p[m]||l;return a?r.createElement(g,u(u({ref:t},s),{},{components:a})):r.createElement(g,u({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,u=new Array(l);u[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,u[1]=o;for(var d=2;d<l;d++)u[d]=a[d];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},73332:(e,t,a)=>{a.r(t),a.d(t,{Highlight:()=>c,assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),l=a(65488),u=a(85162);const o={id:"uuid-generator",title:"uuid_generator",sidebar_label:"uuid_generator"},i=void 0,d={unversionedId:"query-modules/cpp/uuid-generator",id:"query-modules/cpp/uuid-generator",title:"uuid_generator",description:"docs-source",source:"@site/mage/query-modules/cpp/uuid_generator.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/uuid-generator",permalink:"/docs/mage/query-modules/cpp/uuid-generator",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/uuid_generator.md",tags:[],version:"current",frontMatter:{id:"uuid-generator",title:"uuid_generator",sidebar_label:"uuid_generator"},sidebar:"mage",previous:{title:"union_find",permalink:"/docs/mage/query-modules/python/union-find"},next:{title:"vrp",permalink:"/docs/mage/query-modules/python/vrp"}},s={},p=[{value:"Abstract",id:"abstract",level:2},{value:"Procedures",id:"procedures",level:2},{value:"<code>get()</code>",id:"get",level:3},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"Example",id:"example",level:2}],c=e=>{let{children:t,color:a}=e;return(0,n.kt)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},m={toc:p,Highlight:c};function g(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/uuid_module/uuid_module.cpp"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-uuid-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,n.kt)("h2",{id:"abstract"},"Abstract"),(0,n.kt)("p",null,"This module is used to generate string UUIDs which can be stored as properties\non nodes or edges. The underlying implementation makes use of the ",(0,n.kt)("inlineCode",{parentName:"p"},"uuid-dev"),"\nlibrary. When using the ",(0,n.kt)("inlineCode",{parentName:"p"},"uuid")," module on Linux systems, the library can be\ninstalled by running ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo apt-get install uuid-dev"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Trait"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Module type")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,n.kt)("strong",{parentName:"td"},"util")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Implementation")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,n.kt)("strong",{parentName:"td"},"C++")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Parallelism")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,n.kt)("strong",{parentName:"td"},"sequential")))))),(0,n.kt)("h2",{id:"procedures"},"Procedures"),(0,n.kt)("h3",{id:"get"},(0,n.kt)("inlineCode",{parentName:"h3"},"get()")),(0,n.kt)("h4",{id:"output"},"Output:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"uuid")," \u27a1 Returns a UUID string.")),(0,n.kt)("h4",{id:"usage"},"Usage:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)\nCALL uuid_generator.get() YIELD uuid\nSET n.uuid = uuid\nRETURN n.uuid AS node_uuid;\n")),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)(l.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"visualization",mdxType:"TabItem"},(0,n.kt)("img",{src:a(55390).Z,height:"300px"})),(0,n.kt)(u.Z,{value:"cypher",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\n"))),(0,n.kt)(u.Z,{value:"run",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)\nCALL uuid_generator.get() YIELD uuid\nSET n.uuid = uuid\nRETURN n.uuid AS node_uuid;\n"))),(0,n.kt)(u.Z,{value:"result",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plaintext"},'+----------------------------------------+\n| node_uuid                              |\n+----------------------------------------+\n| "ef4722b2-628b-4f93-8667-fc91134ed980" |\n| "601faade-8c61-4dc3-a68a-693fed4ad40c" |\n| "dc4283b8-90d6-402e-8fc0-f37f9959b593" |\n+----------------------------------------+\n')))))}g.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function u(e){let{children:t,hidden:a,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,u),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(87462),n=a(67294),l=a(86010),u=a(72389),o=a(67392),i=a(7094),d=a(12466);const s="tabList__CuJ",p="tabItem_LNqP";function c(e){var t;const{lazy:a,block:u,defaultValue:c,values:m,groupId:g,className:b}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??f.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),v=(0,o.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:N}=(0,i.U)(),[E,T]=(0,n.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,d.o5)();if(null!=g){const e=k[g];null!=e&&e!==E&&h.some((t=>t.value===e))&&T(e)}const w=e=>{const t=e.currentTarget,a=O.indexOf(t),r=h[a].value;r!==E&&(x(t),T(r),null!=g&&N(g,String(r)))},C=e=>{var t;let a=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]??O[O.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},b)},h.map((e=>{let{value:t,label:a,attributes:u}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>O.push(e),onKeyDown:C,onClick:w},u,{className:(0,l.Z)("tabs__item",p,null==u?void 0:u.className,{"tabs__item--active":E===t})}),a??t)}))),a?(0,n.cloneElement)(f.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,u.Z)();return n.createElement(c,(0,r.Z)({key:String(t)},e))}},55390:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/uuid-generator-1-a2112054c5efaefe8ff3cf2b2a7d136e.png"}}]);