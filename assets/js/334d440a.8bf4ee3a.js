"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19464],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},12848:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return c},Highlight:function(){return d},default:function(){return h}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(55064),i=n(58215),s=["components"],p={id:"tsp",title:"tsp",sidebar_label:"tsp"},u=void 0,m={unversionedId:"query-modules/python/tsp",id:"query-modules/python/tsp",isDocsHomePage:!1,title:"tsp",description:"<span",source:"@site/mage/query-modules/python/tsp.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/tsp",permalink:"/mage/query-modules/python/tsp",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/tsp.md",version:"current",frontMatter:{id:"tsp",title:"tsp",sidebar_label:"tsp"},sidebar:"mage",previous:{title:"set_cover",permalink:"/mage/query-modules/python/set-cover"},next:{title:"union_find",permalink:"/mage/query-modules/python/union-find"}},c=[{value:"Abstract",id:"abstract",children:[]},{value:"Procedures",id:"procedures",children:[{value:"<code>solve(points, method)</code>",id:"solvepoints-method",children:[]}]},{value:"Example",id:"example",children:[]}],d=function(e){var t=e.children,n=e.color;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},g={toc:c,Highlight:d};function h(e){var t=e.components,p=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/tsp.py"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-tsp-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,'TSP or "Travelling salesman problem" is one of the well-known problems in graph theory. The goal of the problem is to find the shortest route that visits each node once, starting and finishing from the same node, given the distance between each one of them. It is an NP-hard problem in optimization and therefore there exists no exact solution. Here implemented are trivial, ',(0,o.kt)("em",{parentName:"p"},"greedy")," and ",(0,o.kt)("em",{parentName:"p"},"k-approx")," methods that find the solution within a ",(0,o.kt)("em",{parentName:"p"},"k-bound")," of the optimal one. That means that solution is not going to be more than ",(0,o.kt)("em",{parentName:"p"},"k")," times worse than the best possible. The algorithm uses the distance calculator to determine the distance between points, and works only with geographical locations, meaning each node needs to have its ",(0,o.kt)("em",{parentName:"p"},"lat")," and ",(0,o.kt)("em",{parentName:"p"},"lng")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"(location:Location {lat: 44.1194, lng: 15.2314})\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Trait"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Module type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"module")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Implementation")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"Python")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Graph direction")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"undirected")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Edge weights")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"unweighted")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Parallelism")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"sequential")))))),(0,o.kt)("h2",{id:"procedures"},"Procedures"),(0,o.kt)("h3",{id:"solvepoints-method"},(0,o.kt)("inlineCode",{parentName:"h3"},"solve(points, method)")),(0,o.kt)("h4",{id:"input"},"Input:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"points: List[Vertex]")," \u27a1 List of points to calculate TSP on. Required to have ",(0,o.kt)("em",{parentName:"li"},"lng")," and ",(0,o.kt)("em",{parentName:"li"},"lat")," properties."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"method: str(1.5_approx)")," \u27a1 Method used for optimization. Can be either ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"1.5_approx")),", ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"2_approx"))," or ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"greedy")))),(0,o.kt)("h4",{id:"output"},"Output:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sources: List[Vertex]")," \u27a1 List of elements from 1st to (n-1)-th element"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"destinations: List[Vertex]")," \u27a1 List of elements from 2nd to n-th element\nThe pairs of them represent individual edges between 2 nodes in the graph.")),(0,o.kt)("h4",{id:"usage"},"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Location)\nWITH COLLECT(n) as locations\nCALL tsp_module.solve(points) YIELD sources, destinations;\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(l.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"visualization",mdxType:"TabItem"},(0,o.kt)("img",{src:n(53923).Z})),(0,o.kt)(i.Z,{value:"cypher",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (location:Location {name: 'Zagreb', lat: 45.8150, lng: 15.9819});\nCREATE (location:Location {name: 'Split', lat: 43.5081, lng: 16.4402});\nCREATE (location:Location {name: 'Rijeka', lat: 45.3271, lng:  14.4422});\nCREATE (location:Location {name: 'Osijek', lat: 45.5550, lng: 18.6955});\nCREATE (location:Location {name: 'Zadar', lat: 44.1194, lng: 15.2314});\n"))),(0,o.kt)(i.Z,{value:"run",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Location)\nWITH COLLECT(n) AS locations\nCALL tsp.solve(locations, "1.5_approx") YIELD sources, destinations\nWITH EXTRACT(i IN RANGE(0, SIZE(sources) - 1) | [sources[i], destinations[i]]) AS path\nUNWIND path as edge\nWITH edge[0] AS from, edge[1] AS to\nCREATE (from)-[path:PATH]->(to)\nRETURN from, to, path;\n'))),(0,o.kt)(i.Z,{value:"result",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},'+----------------------------------------------------------+----------------------------------------------------------+----------------------------------------------------------+\n| from                                                     | to                                                       | path                                                     |\n+----------------------------------------------------------+----------------------------------------------------------+----------------------------------------------------------+\n| (:Location {lat: 45.815, lng: 15.9819, name: "Zagreb"})  | (:Location {lat: 45.555, lng: 18.6955, name: "Osijek"})  | [:PATH]                                                  |\n| (:Location {lat: 45.555, lng: 18.6955, name: "Osijek"})  | (:Location {lat: 43.5081, lng: 16.4402, name: "Split"})  | [:PATH]                                                  |\n| (:Location {lat: 43.5081, lng: 16.4402, name: "Split"})  | (:Location {lat: 44.1194, lng: 15.2314, name: "Zadar"})  | [:PATH]                                                  |\n| (:Location {lat: 44.1194, lng: 15.2314, name: "Zadar"})  | (:Location {lat: 45.3271, lng: 14.4422, name: "Rijeka"}) | [:PATH]                                                  |\n| (:Location {lat: 45.3271, lng: 14.4422, name: "Rijeka"}) | (:Location {lat: 45.815, lng: 15.9819, name: "Zagreb"})  | [:PATH]                                                  |\n+----------------------------------------------------------+----------------------------------------------------------+----------------------------------------------------------+\n')))))}h.isMDXComponent=!0},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(67294),r=n(79443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(86010),i="tabItem_1uMI",s="tabItemActive_2DSg";var p=37,u=39;var m=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,m=e.values,c=e.groupId,d=e.className,g=o(),h=g.tabGroupChoices,f=g.setTabGroupChoices,k=(0,a.useState)(r),b=k[0],y=k[1],v=a.Children.toArray(e.children),N=[];if(null!=c){var T=h[c];null!=T&&T!==b&&m.some((function(e){return e.value===T}))&&y(T)}var E=function(e){var t=e.currentTarget,n=N.indexOf(t),a=m[n].value;y(a),null!=c&&(f(c,a),setTimeout((function(){var e,n,a,r,o,l,i,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,l=window,i=l.innerHeight,p=l.innerWidth,n>=0&&o<=p&&r<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case p:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},d)},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:E,onClick:E},n)}))),t?(0,a.cloneElement)(v.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},53923:function(e,t,n){t.Z=n.p+"assets/images/tsp-1-ebf762d83942e6c3b661dca1dbfe3fc4.png"}}]);