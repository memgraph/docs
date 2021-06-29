(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4815],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,g=p["".concat(d,".").concat(m)]||p[m]||c[m]||i;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},82993:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return d},metadata:function(){return u},toc:function(){return s},Highlight:function(){return c},default:function(){return m}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o=r(41395),l=r(58215),d={id:"bridges",title:"bridges",sidebar_label:"bridges"},u={unversionedId:"query-modules/cpp/bridges",id:"query-modules/cpp/bridges",isDocsHomePage:!1,title:"bridges",description:"<span",source:"@site/mage/query-modules/cpp/bridges.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/bridges",permalink:"/mage/query-modules/cpp/bridges",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/bridges.md",version:"current",sidebar_label:"bridges",frontMatter:{id:"bridges",title:"bridges",sidebar_label:"bridges"},sidebar:"mage",previous:{title:"bipartite_matching",permalink:"/mage/query-modules/cpp/bipartite-matching"},next:{title:"cycles",permalink:"/mage/query-modules/cpp/cycles"}},s=[{value:"Abstract",id:"abstract",children:[]},{value:"Procedures",id:"procedures",children:[{value:"<code>get()</code>",id:"get",children:[]}]},{value:"Example",id:"example",children:[]}],c=function(e){var t=e.children,r=e.color;return(0,i.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:s,Highlight:c};function m(e){var t=e.components,d=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/bridges_module/bridges_module.cpp"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-bridges-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"A bridge in the graph can be described as an edge which if deleted, creates two disjoint graph components. This algorithm finds bridges within the graph. This algorithm has various practical usages such can be road or internet network design planning. A bridge can represent a bottleneck for many scenarios and it is valuable to have such an algorithm to detect it."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Trait"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Module type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"algorithm")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Implementation")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"C++")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Graph direction")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"undirected")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Edge weights")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"unweighted")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Parallelism")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"sequential")))))),(0,i.kt)("h2",{id:"procedures"},"Procedures"),(0,i.kt)("h3",{id:"get"},(0,i.kt)("inlineCode",{parentName:"h3"},"get()")),(0,i.kt)("h4",{id:"output"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node_from")," \u27a1 Represents the first node in bridge edge"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node_to")," \u27a1 Represents the second node in bridge edge")),(0,i.kt)("h4",{id:"usage"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL bridges.get()\nYIELD node_from, node_to;\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)(o.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"visualization",mdxType:"TabItem"},(0,i.kt)("img",{src:r(60144).Z})),(0,i.kt)(l.Z,{value:"cypher",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 1}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 0}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\n"))),(0,i.kt)(l.Z,{value:"run",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL bridges.get() YIELD node_from, node_to\nWITH node_from, node_to\nMATCH (node_from)-[bridge]-(node_to)\nRETURN bridge, node_from, node_to;\n"))),(0,i.kt)(l.Z,{value:"result",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"+-----------------+-----------------+-----------------+\n| bridge          | node_from       | node_to         |\n+-----------------+-----------------+-----------------+\n| [:RELATION]     | (:Node {id: 3}) | (:Node {id: 4}) |\n| [:RELATION]     | (:Node {id: 0}) | (:Node {id: 3}) |\n+-----------------+-----------------+-----------------+\n")))))}m.isMDXComponent=!0},58215:function(e,t,r){"use strict";var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},41395:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(67294),a=r(80944),i=r(86010),o="tabItem_1uMI",l="tabItemActive_2DSg";var d=37,u=39;var s=function(e){var t=e.lazy,r=e.block,s=e.defaultValue,c=e.values,p=e.groupId,m=e.className,g=(0,a.Z)(),b=g.tabGroupChoices,f=g.setTabGroupChoices,h=(0,n.useState)(s),k=h[0],y=h[1],v=n.Children.toArray(e.children),N=[];if(null!=p){var E=b[p];null!=E&&E!==k&&c.some((function(e){return e.value===E}))&&y(E)}var T=function(e){var t=e.currentTarget,r=N.indexOf(t),n=c[r].value;y(n),null!=p&&(f(p,n),setTimeout((function(){var e,r,n,a,i,o,d,u;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,i=e.right,o=window,d=o.innerHeight,u=o.innerWidth,r>=0&&i<=u&&a<=d&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},O=function(e){var t,r;switch(e.keyCode){case u:var n=N.indexOf(e.target)+1;r=N[n]||N[0];break;case d:var a=N.indexOf(e.target)-1;r=N[a]||N[N.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},m)},c.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:T,onClick:T},r)}))),t?(0,n.cloneElement)(v.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,r){"use strict";var n=(0,r(67294).createContext)(void 0);t.Z=n},80944:function(e,t,r){"use strict";var n=r(67294),a=r(79443);t.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},86010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})},60144:function(e,t,r){"use strict";t.Z=r.p+"assets/images/bridges-1-d0d9b65f03a21ccc743030ad81da46ed.png"}}]);