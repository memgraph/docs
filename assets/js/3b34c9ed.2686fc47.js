"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17657],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var m=r.createContext({}),s=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),g=o,d=u["".concat(m,".").concat(g)]||u[g]||c[g]||n;return a?r.createElement(d,i(i({ref:t},p),{},{components:a})):r.createElement(d,i({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<n;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},32249:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=a(87462),o=(a(67294),a(3905));const n={id:"maximum-flow-algorithm",title:"Maximum Flow",sidebar_label:"Maximum Flow"},i=void 0,l={unversionedId:"algorithms/traditional-graph-analytics/maximum-flow-algorithm",id:"algorithms/traditional-graph-analytics/maximum-flow-algorithm",title:"Maximum Flow",description:"Description",source:"@site/mage/algorithms/traditional-graph-analytics/max-flow.md",sourceDirName:"algorithms/traditional-graph-analytics",slug:"/algorithms/traditional-graph-analytics/maximum-flow-algorithm",permalink:"/docs/mage/algorithms/traditional-graph-analytics/maximum-flow-algorithm",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/algorithms/traditional-graph-analytics/max-flow.md",tags:[],version:"current",frontMatter:{id:"maximum-flow-algorithm",title:"Maximum Flow",sidebar_label:"Maximum Flow"},sidebar:"mage",previous:{title:"Katz Centrality",permalink:"/docs/mage/algorithms/traditional-graph-analytics/katz-centrality-algorithm"},next:{title:"Node Similarity",permalink:"/docs/mage/algorithms/traditional-graph-analytics/node-similarity-algorithm"}},m={},s=[{value:"Description",id:"description",level:2},{value:"Materials",id:"materials",level:2},{value:"Implementation",id:"implementation",level:3},{value:"Use cases",id:"use-cases",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Maximum Flow problem in optimization theory regards finding the ",(0,o.kt)("strong",{parentName:"p"},"maximum\npossible flow")," going through a flow network from source to sink nodes. A ",(0,o.kt)("strong",{parentName:"p"},"flow\nnetwork"),", or a transportation network, is a directed graph with edge weights\nrepresenting flow capacity. The incoming flow must equal outgoing flow for every\nnode, except the source and sink nodes. Such networks can be used to model\ncomputer networks, fluids in pipes, currents in an electrical circuit, road and\nrailway networks."),(0,o.kt)("p",null,"Having a variety of applications, max flow can be used for maximum matching,\nedge-disjoint paths and node-disjoint paths, to name a few. The max-flow min-cut\ntheorem states that having found a maximum flow of a graph, we can also find its\nminimum cut."),(0,o.kt)("p",null,"Multiple algorithms exist for solving the Maximum Flow problem, such as the\nFord-Fulkerson method, Edmonds-Karp and push-relabel algorithm."),(0,o.kt)("img",{src:a(49349).Z,alt:"maximum-flow-algorithm",width:"600"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Example of augmenting paths in max flow with edge property -> {flow /\ncapacity}, max flow is 19, the sum of inflows to sink (or outflows from\nsource)")),(0,o.kt)("h2",{id:"materials"},"Materials"),(0,o.kt)("h3",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/max_flow.py"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Maximum_Flow-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white",alt:"Maximum\nFlow"}))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/mage/query-modules/python/max-flow"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Maximum_Flow-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white",alt:"Maximum\nFlow"}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Maximum Flow")," is implemented as part of the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,o.kt)("strong",{parentName:"a"},"MAGE"))," project. Be sure to check it out in\nthe link above. \u261d\ufe0f"),(0,o.kt)("h2",{id:"use-cases"},"Use cases"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/transportation"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Transportation-Application-8A477F?style=for-the-badge",alt:"Transportation"}))),(0,o.kt)("p",null,"In transportation networks, max flow can be used for finding the throughput of a\nnetwork or a part of it, finding the road or railway with the largest load or\nanalysing which roads need to be expanded."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/telecommunication"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Telecommunication-Application-8A477F?style=for-the-badge",alt:"Telecommunication"}))),(0,o.kt)("p",null,"Finding max flow means calculating the maximum throughput of a network, as well\nas identifying which connections are heavily relied upon."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/power-grids"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Power_Grids-Application-8A477F?style=for-the-badge",alt:"Power Grids"}))),(0,o.kt)("p",null,"Relevant for calculating the capacity of a power network."))}c.isMDXComponent=!0},49349:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/maximum-flow-algorithm-db286eebbefbd098e9c91f152a09644d.png"}}]);