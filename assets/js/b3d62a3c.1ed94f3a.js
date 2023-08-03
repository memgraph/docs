"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40155],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=m(r),c=a,g=d["".concat(s,".").concat(c)]||d[c]||p[c]||l;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66059:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const l={id:"server-stats",title:"Server stats",sidebar_label:"Server stats"},o=void 0,i={unversionedId:"reference-guide/server-stats",id:"version-2.10.0/reference-guide/server-stats",title:"Server stats",description:"Memgraph supports multiple queries to get information about the instance that is",source:"@site/memgraph_versioned_docs/version-2.10.0/reference-guide/server-stats.md",sourceDirName:"reference-guide",slug:"/reference-guide/server-stats",permalink:"/docs/memgraph/reference-guide/server-stats",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.10.0/reference-guide/server-stats.md",tags:[],version:"2.10.0",frontMatter:{id:"server-stats",title:"Server stats",sidebar_label:"Server stats"},sidebar:"memgraph",previous:{title:"Runtime settings",permalink:"/docs/memgraph/reference-guide/runtime-settings"},next:{title:"Storage modes",permalink:"/docs/memgraph/reference-guide/storage-modes"}},s={},m=[{value:"Instance version",id:"instance-version",level:2},{value:"Storage information",id:"storage-information",level:2},{value:"Build information",id:"build-information",level:2}],u={toc:m};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Memgraph supports multiple queries to get information about the instance that is\nbeing queried."),(0,a.kt)("h2",{id:"instance-version"},"Instance version"),(0,a.kt)("p",null,"To get the version of the instance being queried, run the following query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW VERSION;\n")),(0,a.kt)("h2",{id:"storage-information"},"Storage information"),(0,a.kt)("p",null,"Running the following query will return certain information about the storage of\nthe current instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW STORAGE INFO;\n")),(0,a.kt)("p",null,"The result will contain the following fields:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"vertex_count"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of vertices stored")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"edge_count"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of edges stored")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"average_degree"),(0,a.kt)("td",{parentName:"tr",align:null},"Average number of relationships of a single node")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"memory_usage"),(0,a.kt)("td",{parentName:"tr",align:null},"Amount of RAM used reported by the OS (in bytes)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"disk_usage"),(0,a.kt)("td",{parentName:"tr",align:null},"Amount of disk space used by the data directory (in bytes)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"memory_allocated"),(0,a.kt)("td",{parentName:"tr",align:null},"Amount of bytes allocated by the instance.",(0,a.kt)("br",null),"For more info, check out the ",(0,a.kt)("a",{parentName:"td",href:"/docs/memgraph/reference-guide/memory-control"},"memory control"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"allocation_limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Current allocation limit in bytes set for this instance.",(0,a.kt)("br",null),"For more info, check out the ",(0,a.kt)("a",{parentName:"td",href:"/docs/memgraph/reference-guide/memory-control"},"memory control"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"global_isolation_level"),(0,a.kt)("td",{parentName:"tr",align:null},"Current ",(0,a.kt)("inlineCode",{parentName:"td"},"global")," isolation level.",(0,a.kt)("br",null),"For more info, check out the ",(0,a.kt)("a",{parentName:"td",href:"/docs/memgraph/reference-guide/transactions"},"isolation levels"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"session_isolation_level"),(0,a.kt)("td",{parentName:"tr",align:null},"Current ",(0,a.kt)("inlineCode",{parentName:"td"},"session")," isolation level.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"next_session_isolation_level"),(0,a.kt)("td",{parentName:"tr",align:null},"Current ",(0,a.kt)("inlineCode",{parentName:"td"},"next")," isolation level.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storage_mode"),(0,a.kt)("td",{parentName:"tr",align:null},"Current storage mode.",(0,a.kt)("br",null),"For more info, check out the ",(0,a.kt)("a",{parentName:"td",href:"/docs/memgraph/reference-guide/storage-modes"},"storage modes"),".")))),(0,a.kt)("h2",{id:"build-information"},"Build information"),(0,a.kt)("p",null,"Running the following query will return certain information about the build type of\nthe current instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW BUILD INFO;\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"build_type"),(0,a.kt)("td",{parentName:"tr",align:null},"The optimization level the instance was built with.")))))}p.isMDXComponent=!0}}]);