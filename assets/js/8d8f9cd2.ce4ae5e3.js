"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18867],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,g=s["".concat(c,".").concat(m)]||s[m]||p[m]||o;return n?r.createElement(g,l(l({ref:t},d),{},{components:n})):r.createElement(g,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},45233:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},Highlight:function(){return m},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=n(55064),i=n(58215),c=["components"],u={id:"weakly-connected-components",title:"weakly_connected_components",sidebar_label:"weakly_connected_components"},d=void 0,p={unversionedId:"query-modules/cpp/weakly-connected-components",id:"query-modules/cpp/weakly-connected-components",isDocsHomePage:!1,title:"weakly_connected_components",description:"<span",source:"@site/mage/query-modules/cpp/weakly_connected_components.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/weakly-connected-components",permalink:"/docs/mage/query-modules/cpp/weakly-connected-components",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/weakly_connected_components.md",tags:[],version:"current",frontMatter:{id:"weakly-connected-components",title:"weakly_connected_components",sidebar_label:"weakly_connected_components"},sidebar:"mage",previous:{title:"vrp",permalink:"/docs/mage/query-modules/python/vrp"},next:{title:"Contributing",permalink:"/docs/mage/contributing"}},s=[{value:"Abstract",id:"abstract",children:[]},{value:"Procedures",id:"procedures",children:[{value:"<code>get()</code>",id:"get",children:[]}]},{value:"Example",id:"example",children:[]}],m=function(e){var t=e.children,n=e.color;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},g={toc:s,Highlight:m};function f(e){var t=e.components,u=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/connectivity_module/connectivity_module.cpp"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-weakly_connected_components-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"The first analysis that is most often run on a graph is usually a search for disconnected components.\nThe algorithm implemented within this module does exactly that, it searches for different components of\nthe graph. Within components, nodes have connections toward each other, while between components there\nis no edge that connects nodes from separate components."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Trait"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Module type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"algorithm")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Implementation")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"C++")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Graph direction")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"undirected")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Edge weights")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"unweighted")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Parallelism")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"sequential")))))),(0,o.kt)("h2",{id:"procedures"},"Procedures"),(0,o.kt)("h3",{id:"get"},(0,o.kt)("inlineCode",{parentName:"h3"},"get()")),(0,o.kt)("h4",{id:"output"},"Output:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node")," \u27a1 Vertex object with all properties which is going to be related to the component ID it belongs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"component_id")," \u27a1 Component ID for each node in the graph. Components are zero-indexed and there is no rule of how they will be appointed to node. The only guarantee is that divided components will have distinct component IDs.")),(0,o.kt)("h4",{id:"usage"},"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL weakly_connected_components.get()\nYIELD node, component_id;\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(l.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"visualization",mdxType:"TabItem"},(0,o.kt)("img",{src:n(53855).Z})),(0,o.kt)(i.Z,{value:"cypher",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\n"))),(0,o.kt)(i.Z,{value:"run",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL weakly_connected_components.get()\nYIELD node, component_id;\n"))),(0,o.kt)(i.Z,{value:"result",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"+-----------------+-----------------+\n| node            | component_id    |\n+-----------------+-----------------+\n| (:Node {id: 5}) | 1               |\n| (:Node {id: 4}) | 1               |\n| (:Node {id: 3}) | 1               |\n| (:Node {id: 2}) | 0               |\n| (:Node {id: 0}) | 0               |\n| (:Node {id: 1}) | 0               |\n+-----------------+-----------------+\n")))))}f.isMDXComponent=!0},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),a=n(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(86010),i="tabItem_1uMI",c="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,a=e.block,u=e.defaultValue,d=e.values,p=e.groupId,s=e.className,m=r.Children.toArray(e.children),g=null!=d?d:m.map((function(e){return{value:e.props.value,label:e.props.label}})),f=null!=u?u:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,h=o(),b=h.tabGroupChoices,y=h.setTabGroupChoices,k=(0,r.useState)(f),v=k[0],N=k[1],E=[];if(null!=p){var w=b[p];null!=w&&w!==v&&g.some((function(e){return e.value===w}))&&N(w)}var T=function(e){var t=e.currentTarget,n=E.indexOf(t),r=g[n].value;N(r),null!=p&&(y(p,r),setTimeout((function(){var e,n,r,a,o,l,i,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,l=window,i=l.innerHeight,u=l.innerWidth,n>=0&&o<=u&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.target)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.target)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},s)},g.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":v===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:x,onFocus:T,onClick:T},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},53855:function(e,t,n){t.Z=n.p+"assets/images/weakly-connected-components-1-179c7651963fee64816cc1689a12dff4.png"}}]);