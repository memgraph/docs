"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47097],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62053:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},Highlight:function(){return d},default:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=n(55064),i=n(58215),p=["components"],u={id:"vrp",title:"vrp",sidebar_label:"vrp"},c=void 0,s={unversionedId:"query-modules/python/vrp",id:"query-modules/python/vrp",isDocsHomePage:!1,title:"vrp",description:"<span",source:"@site/mage/query-modules/python/vrp.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/vrp",permalink:"/mage/query-modules/python/vrp",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/vrp.md",version:"current",frontMatter:{id:"vrp",title:"vrp",sidebar_label:"vrp"},sidebar:"mage",previous:{title:"union_find",permalink:"/mage/query-modules/python/union-find"},next:{title:"weakly_connected_components",permalink:"/mage/query-modules/cpp/weakly-connected-components"}},m=[{value:"Abstract",id:"abstract",children:[]},{value:"Procedures",id:"procedures",children:[{value:"<code>route(depot_node, number_of_vehicles)</code>",id:"routedepot_node-number_of_vehicles",children:[]}]},{value:"Example",id:"example",children:[]}],d=function(e){var t=e.children,n=e.color;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},g={toc:m,Highlight:d};function h(e){var t=e.components,u=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/vrp.py"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-vrp-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"VRP or ",(0,o.kt)("strong",{parentName:"p"},"Vehicle Routing problem")," is a generalization of the ",(0,o.kt)("em",{parentName:"p"},"Travelling Salesman Problem"),". The goal of the problem is to find the shortest route that visits each node once, starting and finishing from the same node, called a depot, while using a fleet of vehicles. Each vehicle does not need to be at every location, it is enough that every node is visited by at least one vehicle. The problem is ",(0,o.kt)("em",{parentName:"p"},"NP-hard")," in optimization, and therefore methods such as constraint programming, approximations or heuristics are a good approach for solving. The current implementation of VRP includes constraint programming with ",(0,o.kt)("em",{parentName:"p"},"GEKKO")," solver which works with 1 depot and an arbitrary number of vehicles. The algorithm uses the distance calculator to determine the distance between driving points, and works only with geographical locations, meaning each node needs to have its ",(0,o.kt)("em",{parentName:"p"},"lat")," and ",(0,o.kt)("em",{parentName:"p"},"lng")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"(location:Location {lat: 44.1194, lng: 15.2314})\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Trait"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Module type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"module")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Implementation")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"Python")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Graph direction")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"undirected")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Edge weights")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"unweighted")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Parallelism")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"sequential")))))),(0,o.kt)("h2",{id:"procedures"},"Procedures"),(0,o.kt)("h3",{id:"routedepot_node-number_of_vehicles"},(0,o.kt)("inlineCode",{parentName:"h3"},"route(depot_node, number_of_vehicles)")),(0,o.kt)("h4",{id:"input"},"Input:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"depot_node: Vertex")," \u27a1 Depot node with its corresponding ",(0,o.kt)("em",{parentName:"li"},"lat")," and ",(0,o.kt)("em",{parentName:"li"},"lng")," coordinate properties."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"number_of_vehicles: int = 1")," \u27a1 Designates how many vehicles are used. Set to 1 by default")),(0,o.kt)("h4",{id:"output"},"Output:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"from_vertex: Vertex")," \u27a1 Beginning point of one part of the route"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"to_vertex: Vertex")," \u27a1 Ending point of one part of the route"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"vehicle_id: int")," \u27a1 Vehicle ID that will drive the corresponding path (",(0,o.kt)("em",{parentName:"li"},"from_vertex"),")->(",(0,o.kt)("em",{parentName:"li"},"to_vertex"),")\nAll pairs of the route represent the full route with all vehicles used.")),(0,o.kt)("h4",{id:"usage"},"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (d:Depot)\nCALL vrp.route(d) YIELD from_vertex, to_vertex, vehicle_id;\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(l.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Graph results",value:"result-graph"},{label:"Step 5: Running command for 2 vehicles",value:"run_2_vehicles"},{label:"Step 6: Results",value:"result_2_vehicles"},{label:"Step 7: Cypher results",value:"result-cypher"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"visualization",mdxType:"TabItem"},(0,o.kt)("img",{src:n(88613).Z})),(0,o.kt)(i.Z,{value:"cypher",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (:Location {lat:45.81397494712325, lng:15.977107314009686});\nCREATE (:Location {lat:45.809786288641924, lng:15.969953021143715});\nCREATE (:Location {lat:45.801513169575195, lng:15.979868413090431});\nCREATE (:Location {lat:45.80062044456095, lng:15.971453134506456});\nCREATE (:Location {lat:45.80443233736649, lng:15.993114737391515});\nCREATE (:Location {lat:45.77165828306254, lng:15.943635971437576});\nCREATE (:Location {lat:45.785275159565806, lng:15.947448603375522});\nCREATE (:Location {lat:45.780581597098646, lng:15.935278141510148});\nCREATE (:Location {lat:45.82208303601525, lng:16.019498047049822});\nCREATE (:Depot {lat:45.7872369074369, lng:15.984469921454693});\n")),(0,o.kt)("p",null,"Note: all vertices in graph need to be either Location or Depot.")),(0,o.kt)(i.Z,{value:"run",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (d:Depot)\nCALL vrp.route(d) YIELD from_vertex, to_vertex, vehicle_id\nCREATE (from_vertex)-[r:Route]->(to_vertex);\n\nMATCH (n)-[r:Route]->(m)\nRETURN n, r, m;\n"))),(0,o.kt)(i.Z,{value:"result-graph",mdxType:"TabItem"},(0,o.kt)("img",{src:n(89954).Z})),(0,o.kt)(i.Z,{value:"run_2_vehicles",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (d:Depot, 2)\nCALL vrp.route(d) YIELD from_vertex, to_vertex, vehicle_id\nCREATE (from_vertex)-[r:Route]->(to_vertex);\n\nMATCH (n)-[r:Route]->(m)\nRETURN n, r, m;\n"))),(0,o.kt)(i.Z,{value:"result_2_vehicles",mdxType:"TabItem"},(0,o.kt)("img",{src:n(96597).Z})),(0,o.kt)(i.Z,{value:"result-cypher",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"+------------------------------------------+------------------------------------------+------------------------------------------+\n| from_vertex                              | to_vertex                                | vehicle_id                               |\n+------------------------------------------+------------------------------------------+------------------------------------------+\n| (:Depot {lat: 45.7872, lng: 15.9845})    | (:Location {lat: 45.7853, lng: 15.9474}) | 1                                        |\n| (:Location {lat: 45.7853, lng: 15.9474}) | (:Location {lat: 45.7806, lng: 15.9353}) | 1                                        |\n| (:Location {lat: 45.7806, lng: 15.9353}) | (:Location {lat: 45.7717, lng: 15.9436}) | 1                                        |\n| (:Location {lat: 45.7717, lng: 15.9436}) | (:Location {lat: 45.814, lng: 15.9771})  | 1                                        |\n| (:Location {lat: 45.814, lng: 15.9771})  | (:Location {lat: 45.8044, lng: 15.9931}) | 1                                        |\n| (:Location {lat: 45.8044, lng: 15.9931}) | (:Location {lat: 45.8015, lng: 15.9799}) | 1                                        |\n| (:Location {lat: 45.8015, lng: 15.9799}) | (:Location {lat: 45.8006, lng: 15.9715}) | 1                                        |\n| (:Location {lat: 45.8006, lng: 15.9715}) | (:Location {lat: 45.8098, lng: 15.97})   | 1                                        |\n| (:Location {lat: 45.8098, lng: 15.97})   | (:Depot {lat: 45.7872, lng: 15.9845})    | 1                                        |\n| (:Depot {lat: 45.7872, lng: 15.9845})    | (:Location {lat: 45.8221, lng: 16.0195}) | 2                                        |\n| (:Location {lat: 45.8221, lng: 16.0195}) | (:Depot {lat: 45.7872, lng: 15.9845})    | 2                                        |\n+------------------------------------------+------------------------------------------+------------------------------------------+\n")))))}h.isMDXComponent=!0},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(86010),i="tabItem_1uMI",p="tabItemActive_2DSg";var u=37,c=39;var s=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,s=e.values,m=e.groupId,d=e.className,g=o(),h=g.tabGroupChoices,v=g.setTabGroupChoices,f=(0,r.useState)(a),k=f[0],b=f[1],y=r.Children.toArray(e.children),N=[];if(null!=m){var E=h[m];null!=E&&E!==k&&s.some((function(e){return e.value===E}))&&b(E)}var T=function(e){var t=e.currentTarget,n=N.indexOf(t),r=s[n].value;b(r),null!=m&&(v(m,r),setTimeout((function(){var e,n,r,a,o,l,i,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,l=window,i=l.innerHeight,u=l.innerWidth,n>=0&&o<=u&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case c:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case u:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},d)},s.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:T,onClick:T},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},88613:function(e,t,n){t.Z=n.p+"assets/images/vrp-1-3f98d96850b93a413b42f534a7e706b7.png"},89954:function(e,t,n){t.Z=n.p+"assets/images/vrp-2-72a91886dacc643a0e448b6f8a7d288e.png"},96597:function(e,t,n){t.Z=n.p+"assets/images/vrp-3-7701afea0b2df19ace12d78f429d7ef9.png"}}]);