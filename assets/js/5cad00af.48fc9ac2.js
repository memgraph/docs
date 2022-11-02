"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64389],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(a),c=l,h=m["".concat(i,".").concat(c)]||m[c]||d[c]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},72308:(e,t,a)=>{a.r(t),a.d(t,{Highlight:()=>m,assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>u,metadata:()=>s,toc:()=>d});var n=a(87462),l=(a(67294),a(3905)),r=a(65488),o=a(85162);const u={id:"json-util",title:"json_util",sidebar_label:"json_util"},i=void 0,s={unversionedId:"query-modules/python/json-util",id:"query-modules/python/json-util",title:"json_util",description:"docs-source",source:"@site/mage/query-modules/python/json-util.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/json-util",permalink:"/docs/mage/query-modules/python/json-util",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/json-util.md",tags:[],version:"current",frontMatter:{id:"json-util",title:"json_util",sidebar_label:"json_util"},sidebar:"mage",previous:{title:"import_util",permalink:"/docs/mage/query-modules/python/import-util"},next:{title:"katz_centrality",permalink:"/docs/mage/query-modules/cpp/katz-centrality"}},p={},d=[{value:"Abstract",id:"abstract",level:2},{value:"Procedures",id:"procedures",level:2},{value:"<code>load_from_path(path)</code>",id:"load_from_pathpath",level:3},{value:"Input:",id:"input",level:4},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"<code>load_from_url(url)</code>",id:"load_from_urlurl",level:3},{value:"Input:",id:"input-1",level:4},{value:"Output:",id:"output-1",level:4},{value:"Usage:",id:"usage-1",level:4},{value:"Example - Loading JSON from path",id:"example---loading-json-from-path",level:2},{value:"Example - Loading JSON from URL",id:"example---loading-json-from-url",level:2}],m=e=>{let{children:t,color:a}=e;return(0,l.kt)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},c={toc:d,Highlight:m};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/json_util.py"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-json_util-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,l.kt)("h2",{id:"abstract"},"Abstract"),(0,l.kt)("p",null,"A module for loading JSON from a local file or remote address. If the JSON that is being loaded is an array, then this module loads it as a stream of values, and if it is a map, the module loads it as a single value."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Trait"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Module type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"util")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Implementation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"Python")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Parallelism")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"sequential")))))),(0,l.kt)("h2",{id:"procedures"},"Procedures"),(0,l.kt)("h3",{id:"load_from_pathpath"},(0,l.kt)("inlineCode",{parentName:"h3"},"load_from_path(path)")),(0,l.kt)("h4",{id:"input"},"Input:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path: string")," \u27a1 Path to the JSON that is being loaded.")),(0,l.kt)("h4",{id:"output"},"Output:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"objects: List[object]")," \u27a1 list of JSON objects from the file that is being loaded.")),(0,l.kt)("h4",{id:"usage"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL json_util.load_from_path(path) \nYIELD objects\nRETURN objects;\n")),(0,l.kt)("h3",{id:"load_from_urlurl"},(0,l.kt)("inlineCode",{parentName:"h3"},"load_from_url(url)")),(0,l.kt)("h4",{id:"input-1"},"Input:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"url: string")," \u27a1 URL to the JSON that is being loaded.")),(0,l.kt)("h4",{id:"output-1"},"Output:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"objects: List[object]")," \u27a1 list of JSON objects from the file that is being loaded.")),(0,l.kt)("h4",{id:"usage-1"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL json_util.load_from_url(url) \nYIELD objects\nRETURN objects;\n")),(0,l.kt)("h2",{id:"example---loading-json-from-path"},"Example - Loading JSON from path"),(0,l.kt)(r.Z,{groupId:"load_from_path_example",defaultValue:"file",values:[{label:"Step 1: Input file",value:"file"},{label:"Step 2: Running command",value:"run"},{label:"Step 3: Results",value:"result"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"file",mdxType:"TabItem"},(0,l.kt)("p",null,"  For example, let the input path be ",(0,l.kt)("inlineCode",{parentName:"p"},'"load-data/data.json"'),". There we can find ",(0,l.kt)("inlineCode",{parentName:"p"},"data.json"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "first_name": "Jessica",\n    "last_name": "Rabbit",\n    "pets": [\n        "dog",\n        "cat",\n        "bird"\n    ]\n}\n'))),(0,l.kt)(o.Z,{value:"run",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL json_util.load_from_path("load-data/data.json") \nYIELD objects\nUNWIND objects AS o\nRETURN o.first_name AS name, o.last_name AS surname;\n'))),(0,l.kt)(o.Z,{value:"result",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"+------------------+-------------------+\n| name             | surname           |\n+------------------+-------------------+\n| Jessica          | Rabbit            |\n+------------------+-------------------+\n\n")))),(0,l.kt)("h2",{id:"example---loading-json-from-url"},"Example - Loading JSON from URL"),(0,l.kt)(r.Z,{groupId:"load_from_url_example",defaultValue:"file",values:[{label:"Step 1: Input file",value:"file"},{label:"Step 2: Running command",value:"run"},{label:"Step 3: Results",value:"result"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"file",mdxType:"TabItem"},(0,l.kt)("p",null,"  For example, let the input URL be ",(0,l.kt)("inlineCode",{parentName:"p"},'"https://download.memgraph.com/asset/mage/data.json"'),". There we can find ",(0,l.kt)("inlineCode",{parentName:"p"},"data.json"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "first_name": "James",\n    "last_name": "Bond",\n    "pets": [\n        "dog",\n        "cat",\n        "fish"\n    ]\n}\n'))),(0,l.kt)(o.Z,{value:"run",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL json_util.load_from_url("https://download.memgraph.com/asset/mage/data.json") \nYIELD objects\nUNWIND objects AS o\nRETURN o.first_name AS name, o.last_name AS surname;\n'))),(0,l.kt)(o.Z,{value:"result",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"+------------------+-------------------+\n| name             | surname           |\n+------------------+-------------------+\n| James            | Bond              |\n+------------------+-------------------+\n\n")))))}h.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(87462),l=a(67294),r=a(86010),o=a(72389),u=a(67392),i=a(7094),s=a(12466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:a,block:o,defaultValue:m,values:c,groupId:h,className:b}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,u.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,i.U)(),[j,_]=(0,l.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=h){const e=y[h];null!=e&&e!==j&&g.some((t=>t.value===e))&&_(e)}const x=e=>{const t=e.currentTarget,a=T.indexOf(t),n=g[a].value;n!==j&&(O(t),_(n),null!=h&&N(h,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},b)},g.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>T.push(e),onKeyDown:E,onClick:x},o,{className:(0,r.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":j===t})}),a??t)}))),a?(0,l.cloneElement)(f.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function c(e){const t=(0,o.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}}}]);