"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},89247:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>d,assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),l=n(85162),i=n(83523);const s={id:"tsp",title:"tsp",sidebar_label:"tsp"},u=void 0,p={unversionedId:"query-modules/python/tsp",id:"query-modules/python/tsp",title:"tsp",description:'TSP or "Travelling salesman problem" is one of the well-known problems in graph theory. The goal of the problem is to find the shortest route that visits each node once, starting and finishing from the same node, given the distance between each one of them. It is an NP-hard problem in optimization and therefore there exists no exact solution. Here implemented are trivial, greedy and k-approx methods that find the solution within a k-bound of the optimal one. That means that solution is not going to be more than k times worse than the best possible. The algorithm uses the distance calculator to determine the distance between points, and works only with geographical locations, meaning each node needs to have its lat and lng property.',source:"@site/mage/query-modules/python/tsp.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/tsp",permalink:"/docs/mage/query-modules/python/tsp",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/tsp.md",tags:[],version:"current",frontMatter:{id:"tsp",title:"tsp",sidebar_label:"tsp"},sidebar:"mage",previous:{title:"text",permalink:"/docs/mage/query-modules/cpp/text"},next:{title:"union_find",permalink:"/docs/mage/query-modules/python/union-find"}},m={},c=[{value:"Procedures",id:"procedures",level:2},{value:"<code>solve(points, method)</code>",id:"solvepoints-method",level:3},{value:"Input:",id:"input",level:4},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"Example",id:"example",level:2}],d=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},h={toc:c,Highlight:d};function g(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'TSP or "Travelling salesman problem" is one of the well-known problems in graph theory. The goal of the problem is to find the shortest route that visits each node once, starting and finishing from the same node, given the distance between each one of them. It is an NP-hard problem in optimization and therefore there exists no exact solution. Here implemented are trivial, ',(0,r.kt)("em",{parentName:"p"},"greedy")," and ",(0,r.kt)("em",{parentName:"p"},"k-approx")," methods that find the solution within a ",(0,r.kt)("em",{parentName:"p"},"k-bound")," of the optimal one. That means that solution is not going to be more than ",(0,r.kt)("em",{parentName:"p"},"k")," times worse than the best possible. The algorithm uses the distance calculator to determine the distance between points, and works only with geographical locations, meaning each node needs to have its ",(0,r.kt)("em",{parentName:"p"},"lat")," and ",(0,r.kt)("em",{parentName:"p"},"lng")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"(location:Location {lat: 44.1194, lng: 15.2314})\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/tsp.py"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-tsp-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trait"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Module type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"module")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implementation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"Python")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Graph direction")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"undirected")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Edge weights")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"unweighted")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Parallelism")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"sequential")))))),(0,r.kt)("admonition",{title:"Too slow?",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If this algorithm implementation is too slow for your use case, ",(0,r.kt)("a",{parentName:"p",href:"mailto:tech@memgraph.com"},"contact us")," and request a rewrite to C++ !")),(0,r.kt)("h2",{id:"procedures"},"Procedures"),(0,r.kt)(i.ZP,{mdxType:"RunOnSubgraph"}),(0,r.kt)("h3",{id:"solvepoints-method"},(0,r.kt)("inlineCode",{parentName:"h3"},"solve(points, method)")),(0,r.kt)("h4",{id:"input"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"points: List[Vertex]")," \u27a1 List of points to calculate TSP on. Required to have ",(0,r.kt)("em",{parentName:"li"},"lng")," and ",(0,r.kt)("em",{parentName:"li"},"lat")," properties."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"method: string (default=1.5_approx)")," \u27a1 Method used for optimization. Can be either ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"1.5_approx")),", ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"2_approx"))," or ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"greedy")))),(0,r.kt)("h4",{id:"output"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sources: List[Vertex]")," \u27a1 List of elements from 1st to (n-1)-th element"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"destinations: List[Vertex]")," \u27a1 List of elements from 2nd to n-th element\nThe pairs of them represent individual edges between 2 nodes in the graph.")),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Location)\nWITH COLLECT(n) as locations\nCALL tsp_module.solve(points) YIELD sources, destinations;\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(o.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"visualization",mdxType:"TabItem"},(0,r.kt)("img",{src:n(53923).Z})),(0,r.kt)(l.Z,{value:"cypher",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (location:Location {name: 'Zagreb', lat: 45.8150, lng: 15.9819});\nCREATE (location:Location {name: 'Split', lat: 43.5081, lng: 16.4402});\nCREATE (location:Location {name: 'Rijeka', lat: 45.3271, lng:  14.4422});\nCREATE (location:Location {name: 'Osijek', lat: 45.5550, lng: 18.6955});\nCREATE (location:Location {name: 'Zadar', lat: 44.1194, lng: 15.2314});\n"))),(0,r.kt)(l.Z,{value:"run",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Location)\nWITH COLLECT(n) AS locations\nCALL tsp.solve(locations, "1.5_approx") YIELD sources, destinations\nWITH EXTRACT(i IN RANGE(0, SIZE(sources) - 1) | [sources[i], destinations[i]]) AS path\nUNWIND path as edge\nWITH edge[0] AS from, edge[1] AS to\nCREATE (from)-[path:PATH]->(to)\nRETURN from, to, path;\n'))),(0,r.kt)(l.Z,{value:"result",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'+----------------------------------------------------------+----------------------------------------------------------+----------------------------------------------------------+\n| from                                                     | to                                                       | path                                                     |\n+----------------------------------------------------------+----------------------------------------------------------+----------------------------------------------------------+\n| (:Location {lat: 45.815, lng: 15.9819, name: "Zagreb"})  | (:Location {lat: 45.555, lng: 18.6955, name: "Osijek"})  | [:PATH]                                                  |\n| (:Location {lat: 45.555, lng: 18.6955, name: "Osijek"})  | (:Location {lat: 43.5081, lng: 16.4402, name: "Split"})  | [:PATH]                                                  |\n| (:Location {lat: 43.5081, lng: 16.4402, name: "Split"})  | (:Location {lat: 44.1194, lng: 15.2314, name: "Zadar"})  | [:PATH]                                                  |\n| (:Location {lat: 44.1194, lng: 15.2314, name: "Zadar"})  | (:Location {lat: 45.3271, lng: 14.4422, name: "Rijeka"}) | [:PATH]                                                  |\n| (:Location {lat: 45.3271, lng: 14.4422, name: "Rijeka"}) | (:Location {lat: 45.815, lng: 15.9819, name: "Zagreb"})  | [:PATH]                                                  |\n+----------------------------------------------------------+----------------------------------------------------------+----------------------------------------------------------+\n')))))}g.isMDXComponent=!0},83523:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,r.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}l.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(16550),s=n(91980),u=n(67392),p=n(50012);function m(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=c(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??m;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var f=n(72389);const b="tabList__CuJ",k="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==i&&(m(t),s(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:c},l,{className:(0,o.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function T(e){const t=(0,f.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},53923:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tsp-1-ebf762d83942e6c3b661dca1dbfe3fc4.png"}}]);