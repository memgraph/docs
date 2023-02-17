"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),c=r,g=p["".concat(d,".").concat(c)]||p[c]||m[c]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},23884:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>c,assets:()=>m,contentTitle:()=>s,default:()=>k,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),l=n(74866),i=n(85162),o=n(83523);const d={id:"kmeans",title:"kmeans",sidebar_label:"kmeans"},s=void 0,u={unversionedId:"query-modules/python/kmeans",id:"query-modules/python/kmeans",title:"kmeans",description:"docs-source",source:"@site/mage/query-modules/python/kmeans-clustering.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/kmeans",permalink:"/docs/mage/query-modules/python/kmeans",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/kmeans-clustering.md",tags:[],version:"current",frontMatter:{id:"kmeans",title:"kmeans",sidebar_label:"kmeans"},sidebar:"mage",previous:{title:"katz_centrality_online",permalink:"/docs/mage/query-modules/cpp/katz-centrality-online"},next:{title:"link_prediction_with_gnn",permalink:"/docs/mage/query-modules/python/link-prediction-with-gnn"}},m={},p=[{value:"Abstract",id:"abstract",level:2},{value:"Procedures",id:"procedures",level:2},{value:"<code>get_clusters(n_clusters, embedding_property, init, n_init, max_iter, tol, algorithm, random_state)</code>",id:"get_clustersn_clusters-embedding_property-init-n_init-max_iter-tol-algorithm-random_state",level:3},{value:"Input:",id:"input",level:4},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"<code>set_clusters( n_clusters, embedding_property, cluster_property, init, n_init, max_iter, tol, algorithm, random_state)</code>",id:"set_clusters-n_clusters-embedding_property-cluster_property-init-n_init-max_iter-tol-algorithm-random_state",level:3},{value:"Input:",id:"input-1",level:4},{value:"Output:",id:"output-1",level:4},{value:"Usage:",id:"usage-1",level:4},{value:"Example",id:"example",level:2}],c=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},g={toc:p,Highlight:c};function k(e){let{components:t,...d}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/kmeans.py"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-kmeans-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"The k-means algorithm clusters given data by trying to separate samples in ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," groups of equal variance by minimizing the criterion known as\nwithin-the-cluster sum-of-squares. To learn more about it, jump to the ",(0,r.kt)("a",{parentName:"p",href:"../../algorithms/machine-learning-graph-analytics/k-means-clustering-algorithm"},"algorithm")," page."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trait"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Module type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"module")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implementation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"Python")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Graph direction")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"directed/undirected")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Edge weights")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"weighted/unweighted")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Parallelism")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"sequential")))))),(0,r.kt)("h2",{id:"procedures"},"Procedures"),(0,r.kt)(o.ZP,{mdxType:"RunOnSubgraph"}),(0,r.kt)("h3",{id:"get_clustersn_clusters-embedding_property-init-n_init-max_iter-tol-algorithm-random_state"},(0,r.kt)("inlineCode",{parentName:"h3"},"get_clusters(n_clusters, embedding_property, init, n_init, max_iter, tol, algorithm, random_state)")),(0,r.kt)("p",null,"For each node, this procedure returns what cluster it belongs to."),(0,r.kt)("h4",{id:"input"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n_clusters : int")," \u27a1 Number of clusters to be formed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'embedding_property : str (default: "embedding")')," \u27a1 Node property where embeddings are stored."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'init : str (default: "k-means")')," \u27a1 Initialization method. If ",(0,r.kt)("inlineCode",{parentName:"li"},"k-means++")," is selected, initial cluster centroids are sampled per an empirical probability distribution of the points\u2019 contribution to the overall inertia. This technique speeds up convergence and is theoretically proven to be ",(0,r.kt)("inlineCode",{parentName:"li"},"O(logk)"),"-optimal.\nIf ",(0,r.kt)("inlineCode",{parentName:"li"},"random"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"n_clusters")," observations (rows) are randomly chosen for the initial centroids."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n_init : int (default: 10)")," \u27a1 Number of times the k-means algorithm will be run with different centroid seeds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_iter : int (default: 10)")," \u27a1 Length of sampling walks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tol : float (default: 1e-4)")," \u27a1 Relative tolerance of the Frobenius norm of the difference of cluster centers across consecutive iterations. Used in determining convergence."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'algorithm : str (default: "auto")')," \u27a1 Options are ",(0,r.kt)("inlineCode",{parentName:"li"},"lloyd"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"elkan"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"auto"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"full"),". Description ",(0,r.kt)("a",{parentName:"li",href:"https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html#:~:text=algorithm%7B%E2%80%9Clloyd%E2%80%9D%2C%20%E2%80%9Celkan%E2%80%9D%2C%20%E2%80%9Cauto%E2%80%9D%2C%20%E2%80%9Cfull%E2%80%9D%7D%2C%20default%3D%E2%80%9Dlloyd%E2%80%9D"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"random_state : int (default: 1998)")," \u27a1 Random seed for the algorithm.")),(0,r.kt)("h4",{id:"output"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node: mgp.Vertex")," \u27a1 Graph node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cluster_id: mgp.Number")," \u27a1 Cluster ID of the above node.")),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},' CALL kmeans.get_clusters(2, "embedding", "k-means++", 10, 10, 0.0001, "auto", 1) YIELD node, cluster_id\n RETURN node.id as node_id, cluster_id\n   ORDER BY node_id ASC;\n')),(0,r.kt)("h3",{id:"set_clusters-n_clusters-embedding_property-cluster_property-init-n_init-max_iter-tol-algorithm-random_state"},(0,r.kt)("inlineCode",{parentName:"h3"},"set_clusters( n_clusters, embedding_property, cluster_property, init, n_init, max_iter, tol, algorithm, random_state)")),(0,r.kt)("p",null,"Procedure sets for each node to which cluster it belongs to by writing cluster id  to ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster_property"),"."),(0,r.kt)("h4",{id:"input-1"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n_clusters : int")," \u27a1 Number of clusters to be formed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'embedding_property : str (default: "embedding")')," \u27a1 Node property where embeddings are stored."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'cluster_property: str (default: "cluster_id")')," \u27a1 Node property where ",(0,r.kt)("inlineCode",{parentName:"li"},"cluster_id")," will be stored."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'init : str (default: "k-means")')," \u27a1 Initialization method. If ",(0,r.kt)("inlineCode",{parentName:"li"},"k-means++")," is selected, initial cluster centroids are sampled per an empirical probability distribution of the points\u2019 contribution to the overall inertia. This technique speeds up convergence and is theoretically proven to be ",(0,r.kt)("inlineCode",{parentName:"li"},"O(logk)"),"-optimal.\nIf ",(0,r.kt)("inlineCode",{parentName:"li"},"random"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"n_clusters")," observations (nodes) are randomly chosen for the initial centroids."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n_init : int (default: 10)")," \u27a1 Number of times the k-means algorithm will be run with different centroid seeds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_iter : int (default: 10)")," \u27a1 Length of sampling walks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tol : float (default: 1e-4)")," \u27a1 Relative tolerance of the Frobenius norm of the difference of cluster centers across consecutive iterations. Used in determining convergence."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'algorithm : str (default: "auto")')," \u27a1 Options are ",(0,r.kt)("inlineCode",{parentName:"li"},"lloyd"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"elkan"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"auto"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"full"),". Description ",(0,r.kt)("a",{parentName:"li",href:"https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html#:~:text=algorithm%7B%E2%80%9Clloyd%E2%80%9D%2C%20%E2%80%9Celkan%E2%80%9D%2C%20%E2%80%9Cauto%E2%80%9D%2C%20%E2%80%9Cfull%E2%80%9D%7D%2C%20default%3D%E2%80%9Dlloyd%E2%80%9D"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"random_state : int (default: 1998)")," \u27a1 Random seed for the algorithm.")),(0,r.kt)("h4",{id:"output-1"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node: mgp.Vertex")," \u27a1 Graph node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cluster_id: mgp.Number")," \u27a1 Cluster ID of the above node.")),(0,r.kt)("h4",{id:"usage-1"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},' CALL kmeans.set_clusters(2, "embedding", "cluster_id", "k-means++", 10, 10, 0.0001, "auto", 1) YIELD node, cluster_id\n RETURN node.id as node_id, cluster_id\n   ORDER BY node_id ASC;\n')),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(l.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Load commands",value:"cypher-load"},{label:"Step 3: Get clusters",value:"get-clusters"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"visualization",mdxType:"TabItem"},(0,r.kt)("img",{src:n(16072).Z})),(0,r.kt)(i.Z,{value:"cypher-load",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (:Node {id:0, embedding: [0.90678340196609497, 0.74690568447113037, -0.65984714031219482]});\nCREATE (:Node {id:1, embedding: [1.2019195556640625, 0.42643040418624878, -0.4709840714931488]});\nCREATE (:Node {id:2, embedding: [1.1005796194076538, 0.67131000757217407, -0.5418705940246582]});\nCREATE (:Node {id:4, embedding: [1.1840434074401855, 0.39269298315048218, -0.5063326358795166]});\nCREATE (:Node {id:5, embedding: [0.83302301168441772, 0.5545622706413269, -0.31265774369239807]});\nCREATE (:Node {id:6, embedding: [0.78877884149551392, 0.5189281702041626, -0.097793936729431152]});\nCREATE (:Node {id:7, embedding: [0.61398810148239136, 0.5255049467086792, -0.3551192581653595]});\nCREATE (:Node {id:8, embedding: [0.83923488855361938, -0.0041203685104846954, -0.51874136924743652]});\nCREATE (:Node {id:9, embedding: [0.60883384943008423, 0.60958302021026611, -0.40317356586456299]});\nMATCH (a:Node {id: 0}) MATCH (b:Node {id: 1}) MERGE (a)-[:RELATION]->(b);\nMATCH (a:Node {id: 1}) MATCH (b:Node {id: 2}) MERGE (a)-[:RELATION]->(b);\nMATCH (a:Node {id: 2}) MATCH (b:Node {id: 0}) MERGE (a)-[:RELATION]->(b);\nMATCH (a:Node {id: 0}) MATCH (b:Node {id: 4}) MERGE (a)-[:RELATION]->(b);\nMATCH (a:Node {id: 4}) MATCH (b:Node {id: 1}) MERGE (a)-[:RELATION]->(b);\nMATCH (a:Node {id: 4}) MATCH (b:Node {id: 2}) MERGE (a)-[:RELATION]->(b);\nMATCH (a:Node {id: 0}) MATCH (b:Node {id: 5}) MERGE (a)-[:RELATION]->(b);\nMATCH (a:Node {id: 5}) MATCH (b:Node {id: 6}) MERGE (a)-[:RELATION]->(b);\nMATCH (a:Node {id: 6}) MATCH (b:Node {id: 7}) MERGE (a)-[:RELATION]->(b);\nMATCH (a:Node {id: 7}) MATCH (b:Node {id: 8}) MERGE (a)-[:RELATION]->(b);\nMATCH (a:Node {id: 8}) MATCH (b:Node {id: 6}) MERGE (a)-[:RELATION]->(b);\nMATCH (a:Node {id: 6}) MATCH (b:Node {id: 9}) MERGE (a)-[:RELATION]->(b);\nMATCH (a:Node {id: 9}) MATCH (b:Node {id: 7}) MERGE (a)-[:RELATION]->(b);\nMATCH (a:Node {id: 9}) MATCH (b:Node {id: 8}) MERGE (a)-[:RELATION]->(b);\n"))),(0,r.kt)(i.Z,{value:"get-clusters",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL kmeans.get_clusters(2, "embedding", "k-means++", 10, 10, 0.0001, "auto", 1) YIELD node, cluster_id\n  RETURN node.id as node_id, cluster_id\n  ORDER BY node_id ASC;\n'))),(0,r.kt)(i.Z,{value:"result",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"+-------------------------+-------------------------+\n| node_id                 | cluster_id              |\n+-------------------------+-------------------------+\n| 0                       | 1                       |\n| 1                       | 1                       |\n| 2                       | 1                       |\n| 4                       | 1                       |\n| 5                       | 0                       |\n| 6                       | 0                       |\n| 7                       | 0                       |\n| 8                       | 0                       |\n| 9                       | 0                       |\n+-------------------------+-------------------------+\n")))))}k.isMDXComponent=!0},83523:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,r.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}i.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(87462),r=n(67294),l=n(86010),i=n(12466),o=n(16550),d=n(91980),s=n(67392),u=n(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[d,s]=g({queryString:n,groupId:a}),[m,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),h=(()=>{const e=d??m;return c({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),k(e)}),[s,k,l]),tabValues:l}}var h=n(72389);const b="tabList__CuJ",N="tabItem_LNqP";function f(e){let{className:t,block:n,selectedValue:o,selectValue:d,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==o&&(m(t),d(a))},c=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:c,onClick:p},i,{className:(0,l.Z)("tabs__item",N,null==i?void 0:i.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function E(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function v(e){const t=(0,h.Z)();return r.createElement(E,(0,a.Z)({key:String(t)},e))}},16072:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/img-2c7133062a4bd552e0056d1b4eec16fe.png"}}]);