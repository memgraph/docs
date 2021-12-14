"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93773],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,g=c["".concat(d,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},38737:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},Highlight:function(){return m},default:function(){return k}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(26396),o=a(58215),d=["components"],p={id:"pagerank-online",title:"pagerank_online",sidebar_label:"pagerank_online"},s=void 0,u={unversionedId:"query-modules/cpp/pagerank-online",id:"query-modules/cpp/pagerank-online",isDocsHomePage:!1,title:"pagerank_online",description:"<span",source:"@site/mage/query-modules/cpp/pagerank_online.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/pagerank-online",permalink:"/docs/mage/query-modules/cpp/pagerank-online",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/pagerank_online.md",tags:[],version:"current",frontMatter:{id:"pagerank-online",title:"pagerank_online",sidebar_label:"pagerank_online"},sidebar:"mage",previous:{title:"pagerank",permalink:"/docs/mage/query-modules/cpp/pagerank"},next:{title:"set_cover",permalink:"/docs/mage/query-modules/python/set-cover"}},c=[{value:"Abstract",id:"abstract",children:[{value:"Usage",id:"usage",children:[],level:3}],level:2},{value:"Procedures",id:"procedures",children:[{value:"<code>set(walks_per_node, walk_stop_epsilon)</code>",id:"setwalks_per_node-walk_stop_epsilon",children:[{value:"Input:",id:"input",children:[],level:4},{value:"Output:",id:"output",children:[],level:4},{value:"Usage:",id:"usage-1",children:[],level:4}],level:3},{value:"<code>get(max_iterations, damping_factor, stop_epsilon)</code>",id:"getmax_iterations-damping_factor-stop_epsilon",children:[{value:"Output:",id:"output-1",children:[],level:4},{value:"Usage:",id:"usage-2",children:[],level:4}],level:3},{value:"<code>update(created_vertices, created_edges, deleted_vertices, deleted_edges)</code>",id:"updatecreated_vertices-created_edges-deleted_vertices-deleted_edges",children:[{value:"Input:",id:"input-1",children:[],level:4},{value:"Output:",id:"output-2",children:[],level:4},{value:"Usage:",id:"usage-3",children:[],level:4}],level:3}],level:2},{value:"Example",id:"example",children:[],level:2}],m=function(e){var t=e.children,a=e.color;return(0,l.kt)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},g={toc:c,Highlight:m};function k(e){var t=e.components,p=(0,r.Z)(e,d);return(0,l.kt)("wrapper",(0,n.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/pagerank_module/pagerank_online_module.cpp"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-pagerank_online-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,l.kt)("h2",{id:"abstract"},"Abstract"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Online PageRank")," is a streaming algorithm made for calculating\n",(0,l.kt)("a",{parentName:"p",href:"/docs/mage/query-modules/cpp/pagerank"},"PageRank")," in a graph streaming scenario. Incremental- local\nchanges are introduced in the algorithm to prevent users from recalculating\nPageRank values each time a change occurs in the graph (something is added or\ndeleted)."),(0,l.kt)("p",null,'To make it as fast as possible, the online algorithm is only the approximation\nof PageRank but carrying the same information - the likelihood of random walk\nending in a particular vertex. The work is based on "',(0,l.kt)("a",{parentName:"p",href:"http://snap.stanford.edu/class/cs224w-readings/bahmani10pagerank.pdf"},"Fast Incremental and\nPersonalized\nPageRank"),'"\n',(0,l.kt)("sup",{parentName:"p",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", where authors are deeply focused on providing the streaming experience of\na highly popular graph algorithm."),(0,l.kt)("p",null,"Approximating PageRank is done simply by exploring random walks and calculating\nthe frequency of a node within all walks. ",(0,l.kt)("inlineCode",{parentName:"p"},"R")," walks are sampled by using a\nrandom walk with a stopping probability of ",(0,l.kt)("inlineCode",{parentName:"p"},"eps"),".Therefore, on average, walks\nwould have a length of ",(0,l.kt)("inlineCode",{parentName:"p"},"1/eps"),". Approximative PageRank is based on the formula\nbelow:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"RankApprox(v) = X_v / (n * R / eps)\n")),(0,l.kt)("p",null,"Where ",(0,l.kt)("inlineCode",{parentName:"p"},"X_v")," is the number of walks where the node ",(0,l.kt)("inlineCode",{parentName:"p"},"v")," appears. The theorem\nwritten in the paper explains that RankApprox(v) is sharply concentrated around\nits expectation, which is Rank(v)."),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Online PageRank should be used in a specific way. To set the parameters, the\nuser should call a ",(0,l.kt)("inlineCode",{parentName:"p"},"set()")," procedure. This function also sets the context of a\nstreaming algorithm. ",(0,l.kt)("inlineCode",{parentName:"p"},"get()")," function only returns the resulting values stored\nin a cache. Therefore, if you try to get values before first calling ",(0,l.kt)("inlineCode",{parentName:"p"},"set()"),",\nthe run will fail with a proper message."),(0,l.kt)("p",null,"To make the incremental flow, you should set the proper trigger. For that, we'll\nuse the ",(0,l.kt)("inlineCode",{parentName:"p"},"update()")," function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE TRIGGER pagerank_trigger\n(BEFORE | AFTER) COMMIT\nEXECUTE CALL pagerank_online.update(createdVertices, createdEdges, deletedVertices, deletedEdges) YIELD *\nSET node.rank = rank;\n")),(0,l.kt)("p",null,"Finally, the ",(0,l.kt)("inlineCode",{parentName:"p"},"reset()")," function resets the context and enables the user to start\nnew runs."),(0,l.kt)("p",null,(0,l.kt)("sup",{parentName:"p",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,l.kt)("a",{parentName:"p",href:"http://snap.stanford.edu/class/cs224w-readings/bahmani10pagerank.pdf"},"Fast Incremental and Personalized\nPageRank"),",\nBahman Bahmani et al."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Trait"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Module type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"algorithm")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Implementation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"C++")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Graph direction")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"directed")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Edge weights")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"unweighted")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Parallelism")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,l.kt)("strong",{parentName:"td"},"sequential")))))),(0,l.kt)("h2",{id:"procedures"},"Procedures"),(0,l.kt)("h3",{id:"setwalks_per_node-walk_stop_epsilon"},(0,l.kt)("inlineCode",{parentName:"h3"},"set(walks_per_node, walk_stop_epsilon)")),(0,l.kt)("h4",{id:"input"},"Input:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"walks_per_node: int(10)")," \u27a1 Number of sampled walks per node."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"walk_stop_epsilon: double(0.1)")," \u27a1 The probability of stopping when deriving\nthe random walk. On average, it will create walks of length ",(0,l.kt)("inlineCode",{parentName:"li"},"1 /\nwalk_stop_epsilon"),".")),(0,l.kt)("h4",{id:"output"},"Output:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"node")," \u27a1 Node in the graph, for which PageRank is calculated."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rank")," \u27a1 Normalized ranking of a node. Expresses the probability that a random\nsurfer will finish in a certain node by a random walk.")),(0,l.kt)("h4",{id:"usage-1"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL pagerank.set(100, 0.2)\nYIELD node, rank;\n")),(0,l.kt)("h3",{id:"getmax_iterations-damping_factor-stop_epsilon"},(0,l.kt)("inlineCode",{parentName:"h3"},"get(max_iterations, damping_factor, stop_epsilon)")),(0,l.kt)("p",null,"*"," This should be used if the trigger has been set or a ",(0,l.kt)("inlineCode",{parentName:"p"},"set")," function has\nbeen called before adding changes to the graph."),(0,l.kt)("h4",{id:"output-1"},"Output:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"node")," \u27a1 Node in the graph, for which PageRank is calculated."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rank")," \u27a1 Normalized ranking of a node. Expresses the probability that a random\nsurfer will finish in a certain node by a random walk.")),(0,l.kt)("h4",{id:"usage-2"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL pagerank.get()\nYIELD node, rank;\n")),(0,l.kt)("h3",{id:"updatecreated_vertices-created_edges-deleted_vertices-deleted_edges"},(0,l.kt)("inlineCode",{parentName:"h3"},"update(created_vertices, created_edges, deleted_vertices, deleted_edges)")),(0,l.kt)("h4",{id:"input-1"},"Input:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"created_vertices")," \u27a1 Vertices that were created in the last transaction."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"created_edges")," \u27a1 Edges created in a period from the last transaction."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"deleted_vertices")," \u27a1 Vertices deleted from the last transaction."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"deleted_edges")," \u27a1 Edges deleted from the last transaction.")),(0,l.kt)("h4",{id:"output-2"},"Output:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"node")," \u27a1 Node in the graph, for which PageRank is calculated."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rank")," \u27a1 Normalized ranking of a node. Expresses the probability that a random\nsurfer will finish in a certain node by a random walk.")),(0,l.kt)("h4",{id:"usage-3"},"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE TRIGGER pagerank_trigger\n(BEFORE | AFTER) COMMIT\nEXECUTE CALL pagerank_online.update(createdVertices, createdEdges, deletedVertices, deletedEdges) YIELD *\nSET node.rank = rank;\n")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(i.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Set parameters and trigger",value:"cypher-preset"},{label:"Step 3: Load commands",value:"cypher-load"},{label:"Step 4: Running command",value:"run"},{label:"Step 5: Results",value:"result"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"visualization",mdxType:"TabItem"},(0,l.kt)("img",{src:a(17491).Z})),(0,l.kt)(o.Z,{value:"cypher-preset",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL pagerank_online.set(100, 0.2) YIELD *;\n\nCREATE TRIGGER pagerank_trigger\nBEFORE COMMIT\nEXECUTE CALL pagerank_online.update(createdVertices, createdEdges, deletedVertices, deletedEdges) YIELD *\nSET node.rank = rank;\n"))),(0,l.kt)(o.Z,{value:"cypher-load",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 4}) MERGE (b:Node {id: 6}) CREATE (a)-[:RELATION]->(b);\n"))),(0,l.kt)(o.Z,{value:"run",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node)\nRETURN node.id AS node_id, node.rank AS rank;\n"))),(0,l.kt)(o.Z,{value:"result",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"+-----------+-----------+\n| node_id   | rank      |\n+-----------+-----------+\n| 0         | 0.225225  |\n| 1         | 0.225225  |\n| 2         | 0.225225  |\n| 3         | 0.0675676 |\n| 4         | 0.0765766 |\n| 5         | 0.0585586 |\n| 6         | 0.121622  |\n+-----------+-----------+\n")))))}k.isMDXComponent=!0},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},26396:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(87462),r=a(67294),l=a(72389),i=a(79443);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},d=a(89521),p=a(86010),s="tabItem_1uMI";function u(e){var t,a,n,l=e.lazy,i=e.block,u=e.defaultValue,c=e.values,m=e.groupId,g=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=c?c:k.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,d.lx)(h,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===u?u:null!=(t=null!=u?u:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=k[0])?void 0:n.props.value;if(null!==v&&!h.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=o(),N=b.tabGroupChoices,E=b.setTabGroupChoices,y=(0,r.useState)(v),_=y[0],w=y[1],T=[],R=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=N[m];null!=C&&C!==_&&h.some((function(e){return e.value===C}))&&w(C)}var x=function(e){var t=e.currentTarget,a=T.indexOf(t),n=h[a].value;n!==_&&(R(t),w(n),null!=m&&E(m,n))},O=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;a=T[n]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;a=T[r]||T[T.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":i},g)},h.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,className:(0,p.Z)("tabs__item",s,{"tabs__item--active":_===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:x,onClick:x},null!=a?a:t)}))),l?(0,r.cloneElement)(k.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function c(e){var t=(0,l.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},17491:function(e,t,a){t.Z=a.p+"assets/images/memgraph-pagerank-online-760fe81a51c06c230b7b2954dcfd6e90.png"}}]);