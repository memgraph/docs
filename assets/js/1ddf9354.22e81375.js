"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61158],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},24183:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},Highlight:function(){return m},default:function(){return h}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(55064),o=n(58215),c=["components"],s={id:"distance-calculator",title:"distance_calculator",sidebar_label:"distance_calculator"},u=void 0,d={unversionedId:"query-modules/python/distance-calculator",id:"query-modules/python/distance-calculator",isDocsHomePage:!1,title:"distance_calculator",description:"<span",source:"@site/mage/query-modules/python/distance-calculator.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/distance-calculator",permalink:"/mage/query-modules/python/distance-calculator",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/distance-calculator.md",version:"current",frontMatter:{id:"distance-calculator",title:"distance_calculator",sidebar_label:"distance_calculator"},sidebar:"mage",previous:{title:"cycles",permalink:"/mage/query-modules/cpp/cycles"},next:{title:"graph_analyzer",permalink:"/mage/query-modules/python/graph-analyzer"}},p=[{value:"Abstract",id:"abstract",children:[]},{value:"Procedures",id:"procedures",children:[{value:"<code>single(start, end, metrics)</code>",id:"singlestart-end-metrics",children:[]},{value:"<code>multiple(start_points, end_points, metrics)</code>",id:"multiplestart_points-end_points-metrics",children:[]}]},{value:"Example",id:"example",children:[]}],m=function(e){var t=e.children,n=e.color;return(0,l.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},g={toc:p,Highlight:m};function h(e){var t=e.components,s=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/distance_calculator.py"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-distance_calculator-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,l.kt)("h2",{id:"abstract"},"Abstract"),(0,l.kt)("p",null,"The distance calculator is a module for calculating distance between two geographic locations. It measures the distance along the surface of the earth. Formulae takes into consideration the radius of the earth. For this algorithm, it is necessary to define an object that has longitude and latitude properties like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"(location:Location {lat: 44.1194, lng: 15.2314})\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Trait"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Module type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"module")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Implementation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"Python")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Graph direction")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"undirected")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Edge weights")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"unweighted")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Parallelism")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"sequential")))))),(0,l.kt)("h2",{id:"procedures"},"Procedures"),(0,l.kt)("h3",{id:"singlestart-end-metrics"},(0,l.kt)("inlineCode",{parentName:"h3"},"single(start, end, metrics)")),(0,l.kt)("h4",{id:"input"},"Input:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"start: Vertex")," \u27a1 Starting point to measure distance. Required to have ",(0,l.kt)("em",{parentName:"li"},"lng")," and ",(0,l.kt)("em",{parentName:"li"},"lat")," properties."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"end: Vertex")," \u27a1 Ending point to measure distance. Required to have ",(0,l.kt)("em",{parentName:"li"},"lng")," and ",(0,l.kt)("em",{parentName:"li"},"lat")," properties."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"metrics: str"),' \u27a1 Can be either "m" or "km". These stand for meters and kilometers respectively.')),(0,l.kt)("h4",{id:"output"},"Output:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"distance: double")," \u27a1 The final result obtained by calculating distance (in 'm' or 'km') between the 2 points that each have its latitude and longitude properties.")),(0,l.kt)("h4",{id:"usage"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Location), (m:Location)\nCALL distance_calculator.single(m, n, 'km')\nYIELD distance\nRETURN distance;\n")),(0,l.kt)("h3",{id:"multiplestart_points-end_points-metrics"},(0,l.kt)("inlineCode",{parentName:"h3"},"multiple(start_points, end_points, metrics)")),(0,l.kt)("h4",{id:"input-1"},"Input:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"start_points: List[Vertex]")," \u27a1 Starting points to measure distance collected in a list. Required to have ",(0,l.kt)("em",{parentName:"li"},"lng")," and ",(0,l.kt)("em",{parentName:"li"},"lat")," properties. Must be of the same size as ",(0,l.kt)("em",{parentName:"li"},"end_points"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"end_points: List[Vertex]")," \u27a1 Ending points to measure distance collected in a list. Required to have ",(0,l.kt)("em",{parentName:"li"},"lng")," and ",(0,l.kt)("em",{parentName:"li"},"lat")," properties. Must be of the same size as ",(0,l.kt)("em",{parentName:"li"},"start_points"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"metrics: str"),' \u27a1 Can be either "m" or "km". These stand for metres and kilometres respectively.')),(0,l.kt)("h4",{id:"output-1"},"Output:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"distance: List[double]")," \u27a1 The final result obtained by calculating distance (in meters) between the 2 points who each have its latitude and longitude.")),(0,l.kt)("h4",{id:"usage-1"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n), (m)\nWITH COLLECT(n) AS location_set1, COLLECT(m) AS location_set2\nCALL distance_calculator.multiple(location_set1, location_set2, 'km') YIELD distances\nRETURN distances;\n")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(i.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"visualization",mdxType:"TabItem"},(0,l.kt)("img",{src:n(91369).Z})),(0,l.kt)(o.Z,{value:"cypher",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (location:Location {name: 'Zagreb', lat: 45.8150, lng: 15.9819});\nCREATE (location:Location {name: 'Zadar', lat: 44.1194, lng: 15.2314});\n"))),(0,l.kt)(o.Z,{value:"run",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n {name: 'Zagreb'}), (m {name: 'Zadar'})\nCALL distance_calculator.single(n, m, 'km') YIELD distance\nRETURN distance;\n"))),(0,l.kt)(o.Z,{value:"result",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"+----------+\n| distance |\n+----------+\n| 197.568  |\n+----------+\n")))))}h.isMDXComponent=!0},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(67294),r=n(79443);var l=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),o="tabItem_1uMI",c="tabItemActive_2DSg";var s=37,u=39;var d=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,d=e.values,p=e.groupId,m=e.className,g=l(),h=g.tabGroupChoices,k=g.setTabGroupChoices,f=(0,a.useState)(r),y=f[0],b=f[1],v=a.Children.toArray(e.children),N=[];if(null!=p){var T=h[p];null!=T&&T!==y&&d.some((function(e){return e.value===T}))&&b(T)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),a=d[n].value;b(a),null!=p&&(k(p,a),setTimeout((function(){var e,n,a,r,l,i,o,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,l=e.right,i=window,o=i.innerHeight,s=i.innerWidth,n>=0&&l<=s&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},E=function(e){var t,n;switch(e.keyCode){case u:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case s:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:E,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},91369:function(e,t,n){t.Z=n.p+"assets/images/distance-calculator-1-fb031216949e92c44ed88927ae1b9f6d.png"}}]);