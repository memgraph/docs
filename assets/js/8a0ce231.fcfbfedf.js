"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),c=r,h=p["".concat(u,".").concat(c)]||p[c]||d[c]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6356:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>c,assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),i=n(85162),l=n(83523);const u={id:"community-detection",title:"community_detection",sidebar_label:"community_detection"},s=void 0,m={unversionedId:"query-modules/cpp/community-detection",id:"query-modules/cpp/community-detection",title:"community_detection",description:"docs-source",source:"@site/mage/query-modules/cpp/community_detection.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/community-detection",permalink:"/docs/mage/query-modules/cpp/community-detection",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/community_detection.md",tags:[],version:"current",frontMatter:{id:"community-detection",title:"community_detection",sidebar_label:"community_detection"},sidebar:"mage",previous:{title:"bridges",permalink:"/docs/mage/query-modules/cpp/bridges"},next:{title:"community_detection_online",permalink:"/docs/mage/query-modules/cpp/community-detection-online"}},d={},p=[{value:"Abstract",id:"abstract",level:2},{value:"Procedures",id:"procedures",level:2},{value:"<code>get(weight, coloring, min_graph_shrink, community_alg_threshold, coloring_alg_threshold)</code>",id:"getweight-coloring-min_graph_shrink-community_alg_threshold-coloring_alg_threshold",level:3},{value:"Input",id:"input",level:4},{value:"Output",id:"output",level:4},{value:"Usage",id:"usage",level:4},{value:"<code>get_subgraph(subgraph_nodes, subgraph_relationships, weight, coloring, min_graph_shrink, community_alg_threshold, coloring_alg_threshold)</code>",id:"get_subgraphsubgraph_nodes-subgraph_relationships-weight-coloring-min_graph_shrink-community_alg_threshold-coloring_alg_threshold",level:3},{value:"Input",id:"input-1",level:4},{value:"Output",id:"output-1",level:4},{value:"Usage",id:"usage-1",level:4},{value:"Example",id:"example",level:2}],c=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},h={toc:p,Highlight:c};function g(e){let{components:t,...u}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/community_detection_module/community_detection_module.cpp"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-community_detection-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"This query module enables using the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Louvain_method"},"Louvain method"),(0,r.kt)("sup",null,"[1]")," for community\ndetection, using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Exa-Graph/grappolo"},"Grappolo")," parallel implementation."),(0,r.kt)("p",null,"The Louvain algorithm belongs to the ",(0,r.kt)("em",{parentName:"p"},"modularity maximization")," family of community\ndetection algorithms. Each node is initially assigned to its own community, and the\nalgorithm uses a ",(0,r.kt)("em",{parentName:"p"},"greedy heuristic")," to search for the community partition with\nthe highest modularity score by merging previously obtained communities."),(0,r.kt)("p",null,"The algorithm is suitable for large-scale graphs as it runs in ",(0,r.kt)("em",{parentName:"p"},"O"),"(",(0,r.kt)("em",{parentName:"p"},"n"),"log",(0,r.kt)("em",{parentName:"p"},"n"),") time\non a graph with ",(0,r.kt)("em",{parentName:"p"},"n")," nodes. Further performance gains are obtained by parallelization using\na distance-1 graph coloring heuristic, and a graph coarsening algorithm that aims to preserve communities."),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/0803.0476"},"Fast unfolding of communities in large networks"),",\nBlondel et al."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trait"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Module type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"algorithm")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implementation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"C++")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Graph direction")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"undirected")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Relationship weights")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"weighted"))," / ",(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"unweighted")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Parallelism")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"parallel")))))),(0,r.kt)("h2",{id:"procedures"},"Procedures"),(0,r.kt)(l.ZP,{mdxType:"RunOnSubgraph"}),(0,r.kt)("h3",{id:"getweight-coloring-min_graph_shrink-community_alg_threshold-coloring_alg_threshold"},(0,r.kt)("inlineCode",{parentName:"h3"},"get(weight, coloring, min_graph_shrink, community_alg_threshold, coloring_alg_threshold)")),(0,r.kt)("p",null,"Computes graph communities using the Louvain method."),(0,r.kt)("h4",{id:"input"},"Input"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weight: string (default=null)")," \u27a1 Specifies the default edge weight. If not set,\nthe algorithm uses the ",(0,r.kt)("inlineCode",{parentName:"li"},"weight")," edge attribute when present and otherwise\ntreats the graph as unweighted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"coloring: boolean (default=False)")," \u27a1 If set, use the graph coloring heuristic for effective parallelization."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min_graph_shrink: integer (default=100000)")," \u27a1 The graph coarsening optimization stops upon shrinking the graph to this many nodes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"community_alg_threshold: double (default=0.000001)")," \u27a1 Controls how long the algorithm iterates. When the gain in modularity\ngoes below the threshold, iteration is over.\nValid values are between 0 and 1 (exclusive)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"coloring_alg_threshold: double (default=0.01)")," \u27a1 If coloring is enabled, controls how long the algorithm iterates. When the\ngain in modularity goes below this threshold, a final iteration is performed using the\n",(0,r.kt)("inlineCode",{parentName:"li"},"community_alg_threshold")," value.\nValid values are between 0 and 1 (exclusive); this parameter's value should be higher than ",(0,r.kt)("inlineCode",{parentName:"li"},"community_alg_threshold"),".")),(0,r.kt)("h4",{id:"output"},"Output"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"community_id: integer")," \u27a1 Community ID. Defaults to ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"-1"))," if the node does not belong to any community.")),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL community_detection.get()\nYIELD node, community_id;\n")),(0,r.kt)("h3",{id:"get_subgraphsubgraph_nodes-subgraph_relationships-weight-coloring-min_graph_shrink-community_alg_threshold-coloring_alg_threshold"},(0,r.kt)("inlineCode",{parentName:"h3"},"get_subgraph(subgraph_nodes, subgraph_relationships, weight, coloring, min_graph_shrink, community_alg_threshold, coloring_alg_threshold)")),(0,r.kt)("p",null,"Computes graph communities over a subgraph using the Louvain method."),(0,r.kt)("h4",{id:"input-1"},"Input"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"subgraph_nodes: List[Node]")," \u27a1 List of nodes in the subgraph."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"subgraph_relationships: List[Relationship]")," \u27a1 List of relationships in the subgraph."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weight: str(null)")," \u27a1 Specifies the default relationship weight. If not set,\nthe algorithm uses the ",(0,r.kt)("inlineCode",{parentName:"li"},"weight")," relationship attribute when present and otherwise\ntreats the graph as unweighted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"coloring: bool(False)")," \u27a1 If set, use the graph coloring heuristic for effective parallelization."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min_graph_shrink: int(100000)")," \u27a1 The graph coarsening optimization stops upon shrinking the graph to this many nodes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"community_alg_threshold: double(0.000001)")," \u27a1 Controls how long the algorithm iterates. When the gain in modularity\ngoes below the threshold, iteration is over.\nValid values are between 0 and 1 (exclusive)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"coloring_alg_threshold: double(0.01)")," \u27a1 If coloring is enabled, controls how long the algorithm iterates. When the\ngain in modularity goes below this threshold, a final iteration is performed using the\n",(0,r.kt)("inlineCode",{parentName:"li"},"community_alg_threshold")," value.\nValid values are between 0 and 1 (exclusive); this parameter's value should be higher than ",(0,r.kt)("inlineCode",{parentName:"li"},"community_alg_threshold"),".")),(0,r.kt)("h4",{id:"output-1"},"Output"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"community_id: int")," \u27a1 Community ID. Defaults to ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"-1"))," if the node does not belong to any community.")),(0,r.kt)("h4",{id:"usage-1"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (a)-[e]-(b)\nWITH COLLECT(a) AS nodes, COLLECT (e) AS relationships\nCALL community_detection.get_subgraph(nodes, relationships)\nYIELD node, community_id;\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(o.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 3: Load commands",value:"cypher-load"},{label:"Step 4: Running command",value:"run"},{label:"Step 5: Results",value:"result"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"visualization",mdxType:"TabItem"},(0,r.kt)("img",{src:n(6917).Z})),(0,r.kt)(i.Z,{value:"cypher-load",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a: Node {id: 0}) MERGE (b: Node {id: 1}) CREATE (a)-[r: Relation]->(b);\nMERGE (a: Node {id: 0}) MERGE (b: Node {id: 2}) CREATE (a)-[r: Relation]->(b);\nMERGE (a: Node {id: 1}) MERGE (b: Node {id: 2}) CREATE (a)-[r: Relation]->(b);\nMERGE (a: Node {id: 2}) MERGE (b: Node {id: 3}) CREATE (a)-[r: Relation]->(b);\nMERGE (a: Node {id: 3}) MERGE (b: Node {id: 4}) CREATE (a)-[r: Relation]->(b);\nMERGE (a: Node {id: 3}) MERGE (b: Node {id: 5}) CREATE (a)-[r: Relation]->(b);\nMERGE (a: Node {id: 4}) MERGE (b: Node {id: 5}) CREATE (a)-[r: Relation]->(b);\n"))),(0,r.kt)(i.Z,{value:"run",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL community_detection.get()\nYIELD node, community_id\nRETURN node.id AS node_id, community_id\nORDER BY node_id;\n"))),(0,r.kt)(i.Z,{value:"result",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 node_id                 \u2502 community_id            \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 0                       \u2502 1                       \u2502\n\u2502 1                       \u2502 1                       \u2502\n\u2502 2                       \u2502 1                       \u2502\n\u2502 3                       \u2502 2                       \u2502\n\u2502 4                       \u2502 2                       \u2502\n\u2502 5                       \u2502 2                       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))))}g.isMDXComponent=!0},83523:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,r.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}i.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),u=n(91980),s=n(67392),m=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,s]=h({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,m.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=u??d;return c({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var b=n(72389);const k="tabList__CuJ",y="tabItem_LNqP";function f(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:s}=e;const m=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=m.indexOf(t),a=s[n].value;a!==l&&(d(t),u(a))},c=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=m.indexOf(e.currentTarget)+1;n=m[t]??m[0];break}case"ArrowLeft":{const t=m.indexOf(e.currentTarget)-1;n=m[t]??m[m.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>m.push(e),onKeyDown:c,onClick:p},i,{className:(0,o.Z)("tabs__item",y,null==i?void 0:i.className,{"tabs__item--active":l===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function _(e){const t=(0,b.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},6917:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/community-detection-1-8bc46fdca771aa123098386c57150e41.png"}}]);