"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56445:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>d,assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),l=n(65488),o=n(85162),i=n(83523);const p={id:"vrp",title:"vrp",sidebar_label:"vrp"},u=void 0,s={unversionedId:"query-modules/python/vrp",id:"query-modules/python/vrp",title:"vrp",description:"docs-source",source:"@site/mage/query-modules/python/vrp.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/vrp",permalink:"/docs/mage/query-modules/python/vrp",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/vrp.md",tags:[],version:"current",frontMatter:{id:"vrp",title:"vrp",sidebar_label:"vrp"},sidebar:"mage",previous:{title:"uuid_generator",permalink:"/docs/mage/query-modules/cpp/uuid-generator"},next:{title:"weakly_connected_components",permalink:"/docs/mage/query-modules/cpp/weakly-connected-components"}},c={},m=[{value:"Abstract",id:"abstract",level:2},{value:"Procedures",id:"procedures",level:2},{value:"<code>route(depot_node, number_of_vehicles)</code>",id:"routedepot_node-number_of_vehicles",level:3},{value:"Input:",id:"input",level:4},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"Example",id:"example",level:2}],d=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},g={toc:m,Highlight:d};function h(e){let{components:t,...p}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/vrp.py"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-vrp-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"VRP or ",(0,r.kt)("strong",{parentName:"p"},"Vehicle Routing problem")," is a generalization of the ",(0,r.kt)("em",{parentName:"p"},"Travelling Salesman Problem"),". The goal of the problem is to find the shortest route that visits each node once, starting and finishing from the same node, called a depot, while using a fleet of vehicles. Each vehicle does not need to be at every location, it is enough that every node is visited by at least one vehicle. The problem is ",(0,r.kt)("em",{parentName:"p"},"NP-hard")," in optimization, and therefore methods such as constraint programming, approximations or heuristics are a good approach for solving. The current implementation of VRP includes constraint programming with ",(0,r.kt)("em",{parentName:"p"},"GEKKO")," solver which works with 1 depot and an arbitrary number of vehicles. The algorithm uses the distance calculator to determine the distance between driving points, and works only with geographical locations, meaning each node needs to have its ",(0,r.kt)("em",{parentName:"p"},"lat")," and ",(0,r.kt)("em",{parentName:"p"},"lng")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"(location:Location {lat: 44.1194, lng: 15.2314})\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trait"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Module type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"module")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implementation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"Python")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Graph direction")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"undirected")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Edge weights")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"unweighted")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Parallelism")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"sequential")))))),(0,r.kt)("h2",{id:"procedures"},"Procedures"),(0,r.kt)(i.ZP,{mdxType:"RunOnSubgraph"}),(0,r.kt)("h3",{id:"routedepot_node-number_of_vehicles"},(0,r.kt)("inlineCode",{parentName:"h3"},"route(depot_node, number_of_vehicles)")),(0,r.kt)("h4",{id:"input"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"depot_node: Vertex")," \u27a1 Depot node with its corresponding ",(0,r.kt)("em",{parentName:"li"},"lat")," and ",(0,r.kt)("em",{parentName:"li"},"lng")," coordinate properties."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"number_of_vehicles: integer = 1")," \u27a1 Designates how many vehicles are used. Set to 1 by default")),(0,r.kt)("h4",{id:"output"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"from_vertex: Vertex")," \u27a1 Beginning point of one part of the route"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to_vertex: Vertex")," \u27a1 Ending point of one part of the route"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vehicle_id: integer")," \u27a1 Vehicle ID that will drive the corresponding path (",(0,r.kt)("em",{parentName:"li"},"from_vertex"),")->(",(0,r.kt)("em",{parentName:"li"},"to_vertex"),")\nAll pairs of the route represent the full route with all vehicles used.")),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (d:Depot)\nCALL vrp.route(d) YIELD from_vertex, to_vertex, vehicle_id;\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(l.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Graph results",value:"result-graph"},{label:"Step 5: Running command for 2 vehicles",value:"run_2_vehicles"},{label:"Step 6: Results",value:"result_2_vehicles"},{label:"Step 7: Cypher results",value:"result-cypher"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"visualization",mdxType:"TabItem"},(0,r.kt)("img",{src:n(88613).Z})),(0,r.kt)(o.Z,{value:"cypher",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (:Location {lat:45.81397494712325, lng:15.977107314009686});\nCREATE (:Location {lat:45.809786288641924, lng:15.969953021143715});\nCREATE (:Location {lat:45.801513169575195, lng:15.979868413090431});\nCREATE (:Location {lat:45.80062044456095, lng:15.971453134506456});\nCREATE (:Location {lat:45.80443233736649, lng:15.993114737391515});\nCREATE (:Location {lat:45.77165828306254, lng:15.943635971437576});\nCREATE (:Location {lat:45.785275159565806, lng:15.947448603375522});\nCREATE (:Location {lat:45.780581597098646, lng:15.935278141510148});\nCREATE (:Location {lat:45.82208303601525, lng:16.019498047049822});\nCREATE (:Depot {lat:45.7872369074369, lng:15.984469921454693});\n")),(0,r.kt)("p",null,"Note: all vertices in graph need to be either Location or Depot.")),(0,r.kt)(o.Z,{value:"run",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (d:Depot)\nCALL vrp.route(d) YIELD from_vertex, to_vertex, vehicle_id\nCREATE (from_vertex)-[r:Route]->(to_vertex);\n\nMATCH (n)-[r:Route]->(m)\nRETURN n, r, m;\n"))),(0,r.kt)(o.Z,{value:"result-graph",mdxType:"TabItem"},(0,r.kt)("img",{src:n(89954).Z})),(0,r.kt)(o.Z,{value:"run_2_vehicles",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (d:Depot, 2)\nCALL vrp.route(d) YIELD from_vertex, to_vertex, vehicle_id\nCREATE (from_vertex)-[r:Route]->(to_vertex);\n\nMATCH (n)-[r:Route]->(m)\nRETURN n, r, m;\n"))),(0,r.kt)(o.Z,{value:"result_2_vehicles",mdxType:"TabItem"},(0,r.kt)("img",{src:n(96597).Z})),(0,r.kt)(o.Z,{value:"result-cypher",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"+------------------------------------------+------------------------------------------+------------------------------------------+\n| from_vertex                              | to_vertex                                | vehicle_id                               |\n+------------------------------------------+------------------------------------------+------------------------------------------+\n| (:Depot {lat: 45.7872, lng: 15.9845})    | (:Location {lat: 45.7853, lng: 15.9474}) | 1                                        |\n| (:Location {lat: 45.7853, lng: 15.9474}) | (:Location {lat: 45.7806, lng: 15.9353}) | 1                                        |\n| (:Location {lat: 45.7806, lng: 15.9353}) | (:Location {lat: 45.7717, lng: 15.9436}) | 1                                        |\n| (:Location {lat: 45.7717, lng: 15.9436}) | (:Location {lat: 45.814, lng: 15.9771})  | 1                                        |\n| (:Location {lat: 45.814, lng: 15.9771})  | (:Location {lat: 45.8044, lng: 15.9931}) | 1                                        |\n| (:Location {lat: 45.8044, lng: 15.9931}) | (:Location {lat: 45.8015, lng: 15.9799}) | 1                                        |\n| (:Location {lat: 45.8015, lng: 15.9799}) | (:Location {lat: 45.8006, lng: 15.9715}) | 1                                        |\n| (:Location {lat: 45.8006, lng: 15.9715}) | (:Location {lat: 45.8098, lng: 15.97})   | 1                                        |\n| (:Location {lat: 45.8098, lng: 15.97})   | (:Depot {lat: 45.7872, lng: 15.9845})    | 1                                        |\n| (:Depot {lat: 45.7872, lng: 15.9845})    | (:Location {lat: 45.8221, lng: 16.0195}) | 2                                        |\n| (:Location {lat: 45.8221, lng: 16.0195}) | (:Depot {lat: 45.7872, lng: 15.9845})    | 2                                        |\n+------------------------------------------+------------------------------------------+------------------------------------------+\n")))))}h.isMDXComponent=!0},83523:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,r.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}o.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),i=n(67392),p=n(7094),u=n(12466);const s="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:d,groupId:g,className:h}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,i.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,p.U)(),[T,E]=(0,r.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:_}=(0,u.o5)();if(null!=g){const e=y[g];null!=e&&e!==T&&b.some((t=>t.value===e))&&E(e)}const w=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==T&&(_(t),E(a),null!=g&&N(g,String(a)))},L=e=>{var t;let n=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},h)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:L,onClick:w},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},88613:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vrp-1-3f98d96850b93a413b42f534a7e706b7.png"},89954:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vrp-2-72a91886dacc643a0e448b6f8a7d288e.png"},96597:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vrp-3-7701afea0b2df19ace12d78f429d7ef9.png"}}]);