(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8569],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},99696:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c},Highlight:function(){return u},default:function(){return m}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=n(41395),l=n(58215),s={id:"betweenness-centrality",title:"betweenness_centrality",sidebar_label:"betweenness_centrality"},d={unversionedId:"query-modules/cpp/betweenness-centrality",id:"query-modules/cpp/betweenness-centrality",isDocsHomePage:!1,title:"betweenness_centrality",description:"<span",source:"@site/mage/query-modules/cpp/betweenness_centrality.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/betweenness-centrality",permalink:"/mage/query-modules/cpp/betweenness-centrality",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/betweenness_centrality.md",version:"current",sidebar_label:"betweenness_centrality",frontMatter:{id:"betweenness-centrality",title:"betweenness_centrality",sidebar_label:"betweenness_centrality"},sidebar:"mage",previous:{title:"How to call MAGE procedures?",permalink:"/mage/usage/calling-procedures"},next:{title:"biconnected_components",permalink:"/mage/query-modules/cpp/biconnected-components"}},c=[{value:"Abstract",id:"abstract",children:[]},{value:"Procedures",id:"procedures",children:[{value:"<code>get(directed, normalized, threads)</code>",id:"getdirected-normalized-threads",children:[]}]},{value:"Example",id:"example",children:[]}],u=function(e){var t=e.children,n=e.color;return(0,i.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:c,Highlight:u};function m(e){var t=e.components,s=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/betweenness_centrality_module/betweenness_centrality_module.cpp"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-betweenness_centrality-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,'Centrality analysis provides information about the node\u2019s importance for an information flow or connectivity of the network. Betweenness centrality is one of the most used centrality metrics. Betweenness centrality measures the extent to which a node lies on paths between other nodes in the graph. Thus, nodes with high betweenness may have considerable influence within a network under their control over information passing between others. The calculation of betweenness centrality is not standardized, and there are many ways to solve it. It is defined as the number of shortest paths in the graph that passes through the node divided by the total number of shortest paths. The implemented algorithm is described in the paper "',(0,i.kt)("a",{parentName:"p",href:"http://www.uvm.edu/pdodds/research/papers/others/2001/brandes2001a.pdf"},"A Faster Algorithm for Betweenness Centrality"),'" ',(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,i.kt)("a",{parentName:"p",href:"http://www.uvm.edu/pdodds/research/papers/others/2001/brandes2001a.pdf"},"A Faster Algorithm for Betweenness Centrality"),", Ulrik Brandes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Trait"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Module type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(u,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"algorithm")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Implementation")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(u,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"C++")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Graph direction")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(u,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"directed")),"/",(0,i.kt)(u,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"undirected")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Edge weights")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(u,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"unweighted")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Parallelism")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(u,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"parallel")))))),(0,i.kt)("h2",{id:"procedures"},"Procedures"),(0,i.kt)("h3",{id:"getdirected-normalized-threads"},(0,i.kt)("inlineCode",{parentName:"h3"},"get(directed, normalized, threads)")),(0,i.kt)("h4",{id:"input"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"directed: bool(True)")," \u27a1 If ",(0,i.kt)("inlineCode",{parentName:"li"},"False")," the direction of the edges is ignored"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"normalized: bool(True)")," \u27a1  If ",(0,i.kt)("inlineCode",{parentName:"li"},"True")," the betweenness values are normalized by ",(0,i.kt)("inlineCode",{parentName:"li"},"2/((n-1)(n-2))")," for graphs, and ",(0,i.kt)("inlineCode",{parentName:"li"},"1/((n-1)(n-2))")," for directed graphs where ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," is the number of nodes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"threads: Integer(number of concurrent threads supported by the implementation)")," \u27a1  The number of threads used to calculate betweenness centrality.")),(0,i.kt)("h4",{id:"output"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"betweeenness_centrality: float")," \u27a1 Value of betweenness for a given node")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"node: Vertex")," \u27a1 Graph vertex for betweenness calculation"))),(0,i.kt)("h4",{id:"usage"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL betweenness_centrality.get()\nYIELD node, betweeenness_centrality;\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)(o.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"visualization",mdxType:"TabItem"},(0,i.kt)("img",{src:n(37890).Z})),(0,i.kt)(l.Z,{value:"cypher",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 4}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 6}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 7}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 8}) MERGE (b:Node {id: 9}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 9}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 11}) MERGE (b:Node {id: 9}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 9}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 6}) MERGE (b:Node {id: 11}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 8}) CREATE (a)-[:RELATION]->(b);\n"))),(0,i.kt)(l.Z,{value:"run",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL betweenness_centrality.get(TRUE,TRUE)\nYIELD node, betweeenness_centrality;\n"))),(0,i.kt)(l.Z,{value:"result",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"+-------------------------+-------------------------+\n| node                    | betweeenness_centrality |\n+-------------------------+-------------------------+\n| (:Node {id: 0})         | 0                       |\n| (:Node {id: 1})         | 0.109091                |\n| (:Node {id: 2})         | 0.0272727               |\n| (:Node {id: 3})         | 0                       |\n| (:Node {id: 4})         | 0.0454545               |\n| (:Node {id: 5})         | 0.2                     |\n| (:Node {id: 6})         | 0.0636364               |\n| (:Node {id: 7})         | 0                       |\n| (:Node {id: 8})         | 0.0181818               |\n| (:Node {id: 9})         | 0.0909091               |\n| (:Node {id: 10})        | 0                       |\n| (:Node {id: 11})        | 0.0181818               |\n+-------------------------+-------------------------+\n")))))}m.isMDXComponent=!0},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(67294),a=n(80944),i=n(86010),o="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,d=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,u=e.values,p=e.groupId,m=e.className,b=(0,a.Z)(),h=b.tabGroupChoices,f=b.setTabGroupChoices,g=(0,r.useState)(c),N=g[0],E=g[1],y=r.Children.toArray(e.children),k=[];if(null!=p){var v=h[p];null!=v&&v!==N&&u.some((function(e){return e.value===v}))&&E(v)}var w=function(e){var t=e.currentTarget,n=k.indexOf(t),r=u[n].value;E(r),null!=p&&(f(p,r),setTimeout((function(){var e,n,r,a,i,o,s,d;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,s=o.innerHeight,d=o.innerWidth,n>=0&&i<=d&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case d:var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case s:var a=k.indexOf(e.target)-1;n=k[a]||k[k.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":N===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:T,onFocus:w,onClick:w},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){"use strict";var r=n(67294),a=n(79443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},86010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},37890:function(e,t,n){"use strict";t.Z=n.p+"assets/images/betweenness-centrality-1-27adfc838e8eb3942662e11400c665fb.png"}}]);