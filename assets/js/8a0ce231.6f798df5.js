"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79082],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),m=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=m(n),s=r,g=c["".concat(u,".").concat(s)]||c[s]||p[s]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6356:function(e,t,n){n.r(t),n.d(t,{Highlight:function(){return g},assets:function(){return c},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return s}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(9877),l=n(58215),u=["components"],m={id:"community-detection",title:"community_detection",sidebar_label:"community_detection"},d=void 0,p={unversionedId:"query-modules/cpp/community-detection",id:"query-modules/cpp/community-detection",title:"community_detection",description:"docs-source",source:"@site/mage/query-modules/cpp/community_detection.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/community-detection",permalink:"/docs/mage/query-modules/cpp/community-detection",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/community_detection.md",tags:[],version:"current",frontMatter:{id:"community-detection",title:"community_detection",sidebar_label:"community_detection"},sidebar:"mage",previous:{title:"bridges",permalink:"/docs/mage/query-modules/cpp/bridges"},next:{title:"community_detection_online",permalink:"/docs/mage/query-modules/cpp/community-detection-online"}},c={},s=[{value:"Abstract",id:"abstract",level:2},{value:"Procedures",id:"procedures",level:2},{value:"<code>get()</code>",id:"get",level:3},{value:"Input",id:"input",level:4},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"Example",id:"example",level:2}],g=function(e){var t=e.children,n=e.color;return(0,i.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},h={toc:s,Highlight:g};function f(e){var t=e.components,m=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},h,m,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/community_detection_module/community_detection_module.cpp"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-community_detection-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"This query module makes available the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Louvain_method"},"Louvain method")," ",(0,i.kt)("sup",null,"[1]")," for community\ndetection, using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Exa-Graph/grappolo"},"Grappolo")," parallel implementation."),(0,i.kt)("p",null,"The Louvain algorithm belongs to the ",(0,i.kt)("em",{parentName:"p"},"modularity maximization")," family of community\ndetection algorithms. Each node is initially assigned to its own community, and the\nalgorithm uses a ",(0,i.kt)("em",{parentName:"p"},"greedy heuristic")," to search for the community partition with\nthe highest modularity score by merging previously obtained communities."),(0,i.kt)("p",null,"The algorithm is suitable for large-scale graphs as it runs in ",(0,i.kt)("em",{parentName:"p"},"O"),"(",(0,i.kt)("em",{parentName:"p"},"n"),"log",(0,i.kt)("em",{parentName:"p"},"n"),") time\non a graph with ",(0,i.kt)("em",{parentName:"p"},"n")," nodes. Further performance gains are obtained by parallelization using\na distance-1 graph coloring heuristic, and a graph coarsening algorithm that aims to preserve communities."),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/0803.0476"},"Fast unfolding of communities in large networks"),",\nBlondel et al."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Trait"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Module type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"algorithm")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Implementation")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"C++")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Graph direction")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"undirected")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Edge weights")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"weighted"))," / ",(0,i.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"unweighted")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Parallelism")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(g,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"parallel")))))),(0,i.kt)("h2",{id:"procedures"},"Procedures"),(0,i.kt)("h3",{id:"get"},(0,i.kt)("inlineCode",{parentName:"h3"},"get()")),(0,i.kt)("p",null,"Computes graph communities using the Louvain method."),(0,i.kt)("h4",{id:"input"},"Input"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"weight: string (default=null)")," \u27a1 Specifies the default edge weight. If not set,\nthe algorithm uses the ",(0,i.kt)("inlineCode",{parentName:"li"},"weight")," edge attribute when present and otherwise\ntreats the graph as unweighted."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"coloring: boolean (default=False)")," \u27a1 If set, use the graph coloring heuristic for effective parallelization."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"min_graph_shrink: integer (default=100000)")," \u27a1 The graph coarsening optimization stops upon shrinking the graph to this many nodes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"community_alg_threshold: double (default=0.000001)")," \u27a1 Controls how long the algorithm iterates. When the gain in modularity\ngoes below the threshold, iteration is over.\nValid values are between 0 and 1 (exclusive)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"coloring_alg_threshold: double (default=0.01)")," \u27a1 If coloring is enabled, controls how long the algorithm iterates. When the\ngain in modularity goes below this threshold, a final iteration is performed using the\n",(0,i.kt)("inlineCode",{parentName:"li"},"community_alg_threshold")," value.\nValid values are between 0 and 1 (exclusive); this parameter's value should be higher than ",(0,i.kt)("inlineCode",{parentName:"li"},"community_alg_threshold"),".")),(0,i.kt)("h4",{id:"output"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"community_id: integer")," \u27a1 Community ID. Defaults to ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"-1"))," if the node does not belong to any community.")),(0,i.kt)("h4",{id:"usage"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL community_detection_online.get()\nYIELD node, community_id;\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)(o.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 3: Load commands",value:"cypher-load"},{label:"Step 4: Running command",value:"run"},{label:"Step 5: Results",value:"result"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"visualization",mdxType:"TabItem"},(0,i.kt)("img",{src:n(6917).Z})),(0,i.kt)(l.Z,{value:"cypher-load",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a: Node {id: 0}) MERGE (b: Node {id: 1}) CREATE (a)-[r: Relation]->(b);\nMERGE (a: Node {id: 0}) MERGE (b: Node {id: 2}) CREATE (a)-[r: Relation]->(b);\nMERGE (a: Node {id: 1}) MERGE (b: Node {id: 2}) CREATE (a)-[r: Relation]->(b);\nMERGE (a: Node {id: 2}) MERGE (b: Node {id: 3}) CREATE (a)-[r: Relation]->(b);\nMERGE (a: Node {id: 3}) MERGE (b: Node {id: 4}) CREATE (a)-[r: Relation]->(b);\nMERGE (a: Node {id: 3}) MERGE (b: Node {id: 5}) CREATE (a)-[r: Relation]->(b);\nMERGE (a: Node {id: 4}) MERGE (b: Node {id: 5}) CREATE (a)-[r: Relation]->(b);\n"))),(0,i.kt)(l.Z,{value:"run",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL community_detection.get()\nYIELD node, community_id\nRETURN node.id AS node_id, community_id\nORDER BY node_id;\n"))),(0,i.kt)(l.Z,{value:"result",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 node_id                 \u2502 community_id            \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 0                       \u2502 1                       \u2502\n\u2502 1                       \u2502 1                       \u2502\n\u2502 2                       \u2502 1                       \u2502\n\u2502 3                       \u2502 2                       \u2502\n\u2502 4                       \u2502 2                       \u2502\n\u2502 5                       \u2502 2                       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))))}f.isMDXComponent=!0},58215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),i=n(72389),o=n(5979),l=n(86010),u="tabItem_LplD";function m(e){var t,n,i,m=e.lazy,d=e.block,p=e.defaultValue,c=e.values,s=e.groupId,g=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=c?c:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=h[0])?void 0:i.props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),v=k.tabGroupChoices,N=k.setTabGroupChoices,E=(0,r.useState)(y),T=E[0],w=E[1],_=[],x=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=s){var R=v[s];null!=R&&R!==T&&f.some((function(e){return e.value===R}))&&w(R)}var C=function(e){var t=e.currentTarget,n=_.indexOf(t),a=f[n].value;a!==T&&(x(t),w(a),null!=s&&N(s,a))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=_.indexOf(e.currentTarget)+1;n=_[a]||_[0];break;case"ArrowLeft":var r=_.indexOf(e.currentTarget)-1;n=_[r]||_[_.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},g)},f.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return _.push(e)},onKeyDown:O,onFocus:C,onClick:C},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),m?(0,r.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},6917:function(e,t,n){t.Z=n.p+"assets/images/community-detection-1-8bc46fdca771aa123098386c57150e41.png"}}]);