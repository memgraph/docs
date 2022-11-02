"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,g=d["".concat(s,".").concat(h)]||d[h]||m[h]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={id:"biconnected-components-algorithm",title:"Biconnected Components",sidebar_label:"Biconnected Components"},i=void 0,c={unversionedId:"algorithms/traditional-graph-analytics/biconnected-components-algorithm",id:"algorithms/traditional-graph-analytics/biconnected-components-algorithm",title:"Biconnected Components",description:"Description",source:"@site/mage/algorithms/traditional-graph-analytics/biconnected-components.md",sourceDirName:"algorithms/traditional-graph-analytics",slug:"/algorithms/traditional-graph-analytics/biconnected-components-algorithm",permalink:"/docs/mage/algorithms/traditional-graph-analytics/biconnected-components-algorithm",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/algorithms/traditional-graph-analytics/biconnected-components.md",tags:[],version:"current",frontMatter:{id:"biconnected-components-algorithm",title:"Biconnected Components",sidebar_label:"Biconnected Components"},sidebar:"mage",previous:{title:"Betweenness Centrality",permalink:"/docs/mage/algorithms/traditional-graph-analytics/betweenness-centrality-algorithm"},next:{title:"Bipartite Matching",permalink:"/docs/mage/algorithms/traditional-graph-analytics/bipartite-matching-algorithm"}},s={},l=[{value:"Description",id:"description",level:2},{value:"Materials",id:"materials",level:2},{value:"Implementation",id:"implementation",level:3},{value:"Use cases",id:"use-cases",level:2}],p={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Biconnected_component"},"Biconnected components"),"\nare parts of the graph important in the initial analysis. Finding biconnected\ncomponents means finding a maximal biconnected subgraph. Subgraph is biconnected\nif:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It is possible to go from each node to another within a biconnected subgraph"),(0,o.kt)("li",{parentName:"ul"},"The first scenario remains true even after removing any vertex in the subgraph")),(0,o.kt)("p",null,"The problem was solved by ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/John_Hopcroft"},"John\nHopcroft")," and ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Robert_Tarjan"},"Robert\nTarjan")," with linear time\ncomplexity. Depending on the use case, biconnected components may help to\ndiscover hidden structures within the graph."),(0,o.kt)("img",{src:"https://i.imgur.com/61QH06Y.png",alt:"drawing",width:"600"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Different colors are different components. Multi-colored vertices are\narticulation points.")),(0,o.kt)("h2",{id:"materials"},"Materials"),(0,o.kt)("h3",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/biconnected_components_module/biconnected_components_module.cpp"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Biconnected_components-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white",alt:"Biconnected\nComponents"}))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/mage/query-modules/cpp/biconnected-components"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Biconnected_components-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white",alt:"Biconnected\nComponents"}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Biconnected Components")," is implemented as part of the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,o.kt)("strong",{parentName:"a"},"MAGE"))," project. Be sure to check it out in\nthe link above. \u261d\ufe0f"),(0,o.kt)("h2",{id:"use-cases"},"Use cases"),(0,o.kt)("p",null,"Biconnected components detection is a base for many graph analytics algorithms.\nTherefore, it is rarely used alone. However, there are particular niche use\ncases where finding biconnected components might come in handy mostly because of\nthe articulation points revealing."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/transportation"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Transportation-Application-8A477F?style=for-the-badge",alt:"Transportation"}))),(0,o.kt)("p",null,"Organizing the road infrastructure can be a painful task for any engineer.\nFinding biconnected components in the transportation network can help to reveal\ndifferent zones in an urban area. Furthermore, the goal would be enlarging such\nzones and having as few articulation points as possible, since these are the\nplaces where there is the highest possibility of traffic congestion."))}m.isMDXComponent=!0}}]);