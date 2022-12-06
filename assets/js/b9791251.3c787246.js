"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,b=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(b,o(o({ref:t},u),{},{components:n})):a.createElement(b,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52663:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>m,assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),l=n(65488),o=n(85162),i=n(83523);const s={id:"betweenness-centrality",title:"betweenness_centrality",sidebar_label:"betweenness_centrality"},d=void 0,u={unversionedId:"query-modules/cpp/betweenness-centrality",id:"query-modules/cpp/betweenness-centrality",title:"betweenness_centrality",description:"docs-source",source:"@site/mage/query-modules/cpp/betweenness_centrality.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/betweenness-centrality",permalink:"/docs/mage/query-modules/cpp/betweenness-centrality",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/betweenness_centrality.md",tags:[],version:"current",frontMatter:{id:"betweenness-centrality",title:"betweenness_centrality",sidebar_label:"betweenness_centrality"},sidebar:"mage",previous:{title:"Available query modules",permalink:"/docs/mage/query-modules/available-queries"},next:{title:"betweenness_centrality_online",permalink:"/docs/mage/query-modules/cpp/betweenness-centrality-online"}},p={},c=[{value:"Abstract",id:"abstract",level:2},{value:"Procedures",id:"procedures",level:2},{value:"<code>get(directed, normalized, threads)</code>",id:"getdirected-normalized-threads",level:3},{value:"Input:",id:"input",level:4},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"Example",id:"example",level:2}],m=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},b={toc:c,Highlight:m};function h(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/betweenness_centrality_module/betweenness_centrality_module.cpp"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-betweenness_centrality-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,'Centrality analysis provides information about the node\u2019s importance for an\ninformation flow or connectivity of the network. Betweenness centrality is one\nof the most used centrality metrics. Betweenness centrality measures the extent\nto which a node lies on paths between other nodes in the graph. Thus, nodes with\nhigh betweenness may have considerable influence within a network under their\ncontrol over information passing between others. The calculation of betweenness\ncentrality is not standardized, and there are many ways to solve it. It is\ndefined as the number of shortest paths in the graph that passes through the\nnode divided by the total number of shortest paths. The implemented algorithm is\ndescribed in the paper "',(0,r.kt)("a",{parentName:"p",href:"http://www.uvm.edu/pdodds/research/papers/others/2001/brandes2001a.pdf"},"A Faster Algorithm for Betweenness\nCentrality"),'"\n',(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,r.kt)("a",{parentName:"p",href:"http://www.uvm.edu/pdodds/research/papers/others/2001/brandes2001a.pdf"},"A Faster Algorithm for Betweenness\nCentrality"),",\nUlrik Brandes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trait"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Module type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"algorithm")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implementation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"C++")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Graph direction")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"directed")),"/",(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"undirected")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Edge weights")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"unweighted")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Parallelism")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"parallel")))))),(0,r.kt)("h2",{id:"procedures"},"Procedures"),(0,r.kt)(i.ZP,{mdxType:"RunOnSubgraph"}),(0,r.kt)("h3",{id:"getdirected-normalized-threads"},(0,r.kt)("inlineCode",{parentName:"h3"},"get(directed, normalized, threads)")),(0,r.kt)("h4",{id:"input"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"directed: boolean (default=True)")," \u27a1 If ",(0,r.kt)("inlineCode",{parentName:"li"},"False")," the direction of the edges is ignored."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"normalized: boolean (default=True)")," \u27a1 If ",(0,r.kt)("inlineCode",{parentName:"li"},"True")," the betweenness values are normalized by\n",(0,r.kt)("inlineCode",{parentName:"li"},"2/((n-1)(n-2))")," for graphs, and ",(0,r.kt)("inlineCode",{parentName:"li"},"1/((n-1)(n-2))")," for directed graphs where\n",(0,r.kt)("inlineCode",{parentName:"li"},"n")," is the number of nodes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"threads: integer (default=number of concurrent threads supported by the\nimplementation)")," \u27a1 The number of threads used to calculate betweenness\ncentrality.")),(0,r.kt)("h4",{id:"output"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"betweenness_centrality: float")," \u27a1 Value of betweenness for a given node.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"node: Vertex")," \u27a1 Graph vertex for betweenness calculation."))),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL betweenness_centrality.get()\nYIELD node, betweenness_centrality;\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(l.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"visualization",mdxType:"TabItem"},(0,r.kt)("img",{src:n(37890).Z})),(0,r.kt)(o.Z,{value:"cypher",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 4}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 6}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 7}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 8}) MERGE (b:Node {id: 9}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 9}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 11}) MERGE (b:Node {id: 9}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 9}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 6}) MERGE (b:Node {id: 11}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 8}) CREATE (a)-[:RELATION]->(b);\n"))),(0,r.kt)(o.Z,{value:"run",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL betweenness_centrality.get(TRUE,TRUE)\nYIELD node, betweenness_centrality\nRETURN node, betweenness_centrality;\n"))),(0,r.kt)(o.Z,{value:"result",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"+-------------------------+-------------------------+\n| node                    | betweenness_centrality |\n+-------------------------+-------------------------+\n| (:Node {id: 0})         | 0                       |\n| (:Node {id: 1})         | 0.109091                |\n| (:Node {id: 2})         | 0.0272727               |\n| (:Node {id: 3})         | 0                       |\n| (:Node {id: 4})         | 0.0454545               |\n| (:Node {id: 5})         | 0.2                     |\n| (:Node {id: 6})         | 0.0636364               |\n| (:Node {id: 7})         | 0                       |\n| (:Node {id: 8})         | 0.0181818               |\n| (:Node {id: 9})         | 0.0909091               |\n| (:Node {id: 10})        | 0                       |\n| (:Node {id: 11})        | 0.0181818               |\n+-------------------------+-------------------------+\n")))))}h.isMDXComponent=!0},83523:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,r.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}o.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),i=n(67392),s=n(7094),d=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function c(e){var t;const{lazy:n,block:o,defaultValue:c,values:m,groupId:b,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),E=m??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,i.l)(E,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!E.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${E.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:k}=(0,s.U)(),[v,w]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:R}=(0,d.o5)();if(null!=b){const e=f[b];null!=e&&e!==v&&E.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,n=T.indexOf(t),a=E[n].value;a!==v&&(R(t),w(a),null!=b&&k(b,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},h)},E.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>T.push(e),onKeyDown:C,onClick:O},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":v===t})}),n??t)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function m(e){const t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},37890:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/betweenness-centrality-1-27adfc838e8eb3942662e11400c665fb.png"}}]);