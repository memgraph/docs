"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55580],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={id:"server-stats",title:"Server stats",sidebar_label:"Server stats"},i=void 0,l={unversionedId:"reference-guide/server-stats",id:"reference-guide/server-stats",title:"Server stats",description:"Memgraph supports multiple queries to get information about the instance that is",source:"@site/docs/reference-guide/server-stats.md",sourceDirName:"reference-guide",slug:"/reference-guide/server-stats",permalink:"/docs/memgraph/next/reference-guide/server-stats",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/server-stats.md",tags:[],version:"current",frontMatter:{id:"server-stats",title:"Server stats",sidebar_label:"Server stats"},sidebar:"memgraph",previous:{title:"Runtime settings",permalink:"/docs/memgraph/next/reference-guide/runtime-settings"},next:{title:"Streams overview",permalink:"/docs/memgraph/next/reference-guide/streams"}},s={},u=[{value:"Instance version",id:"instance-version",level:2},{value:"Storage information",id:"storage-information",level:2}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Memgraph supports multiple queries to get information about the instance that is\nbeing queried."),(0,a.kt)("h2",{id:"instance-version"},"Instance version"),(0,a.kt)("p",null,"To get the version of the instance being queried, run the following query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW VERSION;\n")),(0,a.kt)("h2",{id:"storage-information"},"Storage information"),(0,a.kt)("p",null,"Running the following query will return certain information about the storage of\nthe current instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW STORAGE INFO;\n")),(0,a.kt)("p",null,"The result will contain the following fields:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"vertex_count"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of vertices stored")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"edge_count"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of edges stored")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"average_degree"),(0,a.kt)("td",{parentName:"tr",align:null},"Average number of relationships of a single node")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"memory_usage"),(0,a.kt)("td",{parentName:"tr",align:null},"Amount of RAM used reported by the OS (in bytes)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"disk_usage"),(0,a.kt)("td",{parentName:"tr",align:null},"Amount of disk space used by the data directory (in bytes)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"memory_allocated"),(0,a.kt)("td",{parentName:"tr",align:null},"Amount of bytes allocated by the instance.",(0,a.kt)("br",null),"For more info, check out the ",(0,a.kt)("a",{parentName:"td",href:"/docs/memgraph/next/reference-guide/memory-control"},"memory control"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"allocation_limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Current allocation limit in bytes set for this instance.",(0,a.kt)("br",null),"For more info, check out the ",(0,a.kt)("a",{parentName:"td",href:"/docs/memgraph/next/reference-guide/memory-control"},"memory control"),".")))))}m.isMDXComponent=!0}}]);