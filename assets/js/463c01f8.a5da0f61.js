"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12201],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,g=c["".concat(u,".").concat(m)]||c[m]||s[m]||l;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},74147:(e,t,a)=>{a.r(t),a.d(t,{Highlight:()=>s,assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=(a(74866),a(85162),a(83523));const i={id:"cugraph",title:"cugraph",sidebar_label:"cugraph"},o=void 0,u={unversionedId:"query-modules/cuda/cugraph",id:"query-modules/cuda/cugraph",title:"cugraph",description:"NVIDIA cuGraph is a graph analytics library that is part of NVIDIA\u2019s",source:"@site/mage/query-modules/cuda/cugraph.md",sourceDirName:"query-modules/cuda",slug:"/query-modules/cuda/cugraph",permalink:"/docs/mage/query-modules/cuda/cugraph",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cuda/cugraph.md",tags:[],version:"current",frontMatter:{id:"cugraph",title:"cugraph",sidebar_label:"cugraph"},sidebar:"mage",previous:{title:"cycles",permalink:"/docs/mage/query-modules/cpp/cycles"},next:{title:"date",permalink:"/docs/mage/query-modules/python/date"}},p={},d=[{value:"Modules",id:"modules",level:2},{value:"<code>cugraph.balanced_cut_clustering</code>",id:"cugraphbalanced_cut_clustering",level:2},{value:"Procedures",id:"procedures",level:3},{value:"<code>get(num_clusters, num_eigenvectors, ev_tolerance, ev_max_iter, kmean_tolerance, kmean_max_iter, weight_property)</code>",id:"getnum_clusters-num_eigenvectors-ev_tolerance-ev_max_iter-kmean_tolerance-kmean_max_iter-weight_property",level:3},{value:"Input:",id:"input",level:4},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"<code>cugraph.betweenness_centrality</code>",id:"cugraphbetweenness_centrality",level:2},{value:"Procedures",id:"procedures-1",level:3},{value:"<code>get(normalized, directed, weight_property)</code>",id:"getnormalized-directed-weight_property",level:3},{value:"Input:",id:"input-1",level:4},{value:"Output:",id:"output-1",level:4},{value:"Usage:",id:"usage-1",level:4},{value:"<code>cugraph.generator</code>",id:"cugraphgenerator",level:2},{value:"Procedures",id:"procedures-2",level:3},{value:"<code>rmat(scale, num_edges, node_labels, edge_type, a, b, c, seed, clip_and_flip)</code>",id:"rmatscale-num_edges-node_labels-edge_type-a-b-c-seed-clip_and_flip",level:3},{value:"Input:",id:"input-2",level:4},{value:"Output:",id:"output-2",level:4},{value:"Usage:",id:"usage-2",level:4},{value:"<code>cugraph.hits</code>",id:"cugraphhits",level:2},{value:"Procedures",id:"procedures-3",level:3},{value:"<code>get(tolerance, max_iterations, normalized, directed)</code>",id:"gettolerance-max_iterations-normalized-directed",level:3},{value:"Input:",id:"input-3",level:4},{value:"Output:",id:"output-3",level:4},{value:"Usage:",id:"usage-3",level:4},{value:"<code>cugraph.katz_centrality</code>",id:"cugraphkatz_centrality",level:2},{value:"Procedures",id:"procedures-4",level:3},{value:"<code>get(alpha, beta, epsilon, max_iterations, normalized, directed)</code>",id:"getalpha-beta-epsilon-max_iterations-normalized-directed",level:3},{value:"Input:",id:"input-4",level:4},{value:"Output:",id:"output-4",level:4},{value:"Usage:",id:"usage-4",level:4},{value:"<code>cugraph.leiden</code>",id:"cugraphleiden",level:2},{value:"Procedures",id:"procedures-5",level:3},{value:"<code>get(max_iterations, resolution)</code>",id:"getmax_iterations-resolution",level:3},{value:"Input:",id:"input-5",level:4},{value:"Output:",id:"output-5",level:4},{value:"Usage:",id:"usage-5",level:4},{value:"<code>cugraph.louvain</code>",id:"cugraphlouvain",level:2},{value:"Procedures",id:"procedures-6",level:3},{value:"<code>get(max_iterations, resolution, directed)</code>",id:"getmax_iterations-resolution-directed",level:3},{value:"Input:",id:"input-6",level:4},{value:"Output:",id:"output-6",level:4},{value:"Usage:",id:"usage-6",level:4},{value:"<code>cugraph.pagerank</code>",id:"cugraphpagerank",level:2},{value:"Procedures",id:"procedures-7",level:3},{value:"<code>get(max_iterations, damping_factor, stop_epsilon, weight_property)</code>",id:"getmax_iterations-damping_factor-stop_epsilon-weight_property",level:3},{value:"Input:",id:"input-7",level:4},{value:"Output:",id:"output-7",level:4},{value:"Usage:",id:"usage-7",level:4},{value:"<code>cugraph.personalized_pagerank</code>",id:"cugraphpersonalized_pagerank",level:2},{value:"Procedures",id:"procedures-8",level:3},{value:"<code>get(personalization_vertices, personalization_values, max_iterations, damping_factor, stop_epsilon, weight_property)</code>",id:"getpersonalization_vertices-personalization_values-max_iterations-damping_factor-stop_epsilon-weight_property",level:3},{value:"Input:",id:"input-8",level:4},{value:"Output:",id:"output-8",level:4},{value:"Usage:",id:"usage-8",level:4},{value:"<code>cugraph.spectral_clustering</code>",id:"cugraphspectral_clustering",level:2},{value:"Procedures",id:"procedures-9",level:3},{value:"<code>get(num_clusters, num_eigenvectors, ev_tolerance, ev_max_iter, kmean_tolerance, kmean_max_iter, weight_property)</code>",id:"getnum_clusters-num_eigenvectors-ev_tolerance-ev_max_iter-kmean_tolerance-kmean_max_iter-weight_property-1",level:3},{value:"Input:",id:"input-9",level:4},{value:"Output:",id:"output-9",level:4},{value:"Usage:",id:"usage-9",level:4}],s=e=>{let{children:t,color:a}=e;return(0,r.kt)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},c={toc:d,Highlight:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NVIDIA cuGraph")," is a graph analytics library that is part of NVIDIA\u2019s\n",(0,r.kt)("a",{parentName:"p",href:"https://rapids.ai/"},(0,r.kt)("strong",{parentName:"a"},"RAPIDS"))," open-source data science suite containing\nmachine learning tools and libraries for various applications in data science;\nit can be used from Memgraph on machines that meet the ",(0,r.kt)("a",{parentName:"p",href:"https://rapids.ai/start.html#requirements"},(0,r.kt)("strong",{parentName:"a"},"system\nrequirements")),"."),(0,r.kt)("p",null,"This set of modules is built on top of NVIDIA cuGraph and provides a set of\nwrappers for most of the algorithms present in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rapidsai/cugraph"},(0,r.kt)("strong",{parentName:"a"},"cuGraph"))," repository."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/cpp/cugraph_module"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-cugraph-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trait"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Module type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(s,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"module")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implementation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(s,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"CUDA")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Graph direction")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(s,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"undirected")),"/",(0,r.kt)(s,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"directed")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Edge weights")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(s,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"unweighted")),"/",(0,r.kt)(s,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"weighted")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Parallelism")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(s,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"parallelized")))))),(0,r.kt)("h2",{id:"modules"},"Modules"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("strong",{parentName:"p"},"cugraph")," module is a collection of distinct GPU-powered modules with\ntheir own procedures.")),(0,r.kt)("h2",{id:"cugraphbalanced_cut_clustering"},(0,r.kt)("inlineCode",{parentName:"h2"},"cugraph.balanced_cut_clustering")),(0,r.kt)("h3",{id:"procedures"},"Procedures"),(0,r.kt)(l.ZP,{mdxType:"RunOnSubgraph"}),(0,r.kt)("h3",{id:"getnum_clusters-num_eigenvectors-ev_tolerance-ev_max_iter-kmean_tolerance-kmean_max_iter-weight_property"},(0,r.kt)("inlineCode",{parentName:"h3"},"get(num_clusters, num_eigenvectors, ev_tolerance, ev_max_iter, kmean_tolerance, kmean_max_iter, weight_property)")),(0,r.kt)("p",null,"Find the balanced cut clustering of the graph\u2019s nodes."),(0,r.kt)("h4",{id:"input"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"num_clusters: integer")," \u27a1 Number of clusters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"num_eigenvectors: integer (default=2)")," \u27a1 Number of eigenvectors to be used (must be less\nthan or equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"num_clusters"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ev_tolerance: float (default=0.00001)")," \u27a1 Tolerance used by the eigensolver."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ev_max_iter: integer (default=100)")," \u27a1 Maximum number of iterations for the eigensolver."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kmean_tolerance: float (default=0.00001)")," \u27a1 Tolerance used by the k-means solver."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kmean_max_iter: integer (default=100)")," \u27a1 Maximum number of iterations for the k-means\nsolver."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'weight_property: string (default="weight")')," \u27a1 The values of the given relationship.\nproperty are used as weights by the algorithm. If this property is not set for\na relationship, the fallback value is ",(0,r.kt)("inlineCode",{parentName:"li"},"1.0"),".")),(0,r.kt)("h4",{id:"output"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cluster: integer")," \u27a1 Cluster of a node.")),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL cugraph.balanced_cut_clustering.get(3)\nYIELD node, cluster\nRETURN node, cluster;\n")),(0,r.kt)("h2",{id:"cugraphbetweenness_centrality"},(0,r.kt)("inlineCode",{parentName:"h2"},"cugraph.betweenness_centrality")),(0,r.kt)("h3",{id:"procedures-1"},"Procedures"),(0,r.kt)("h3",{id:"getnormalized-directed-weight_property"},(0,r.kt)("inlineCode",{parentName:"h3"},"get(normalized, directed, weight_property)")),(0,r.kt)("p",null,"Find betweenness centrality scores for all nodes in the graph."),(0,r.kt)("h4",{id:"input-1"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"normalized: boolean (default=True)")," \u27a1 Normalize the output."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"directed: boolean (default=True)")," \u27a1 Graph directedness. (default ",(0,r.kt)("inlineCode",{parentName:"li"},"True"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'weight_property: string (default="weight")')," \u27a1 The values of the given relationship\nproperty are used as weights by the algorithm. If this property is not set for\na relationship, the fallback value is ",(0,r.kt)("inlineCode",{parentName:"li"},"1.0"),".")),(0,r.kt)("h4",{id:"output-1"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"betweenness_centrality: float")," \u27a1 Betweenness centrality score of a node.")),(0,r.kt)("h4",{id:"usage-1"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL cugraph.betweenness_centrality.get()\nYIELD node, betweenness_centrality\nRETURN node, betweenness_centrality;\n")),(0,r.kt)("h2",{id:"cugraphgenerator"},(0,r.kt)("inlineCode",{parentName:"h2"},"cugraph.generator")),(0,r.kt)("h3",{id:"procedures-2"},"Procedures"),(0,r.kt)("h3",{id:"rmatscale-num_edges-node_labels-edge_type-a-b-c-seed-clip_and_flip"},(0,r.kt)("inlineCode",{parentName:"h3"},"rmat(scale, num_edges, node_labels, edge_type, a, b, c, seed, clip_and_flip)")),(0,r.kt)("p",null,"Generate a graph using a Recursive MATrix (R-MAT) graph generation algorithm and\nload it in Memgraph."),(0,r.kt)("h4",{id:"input-2"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scale: integer (default=4)")," \u27a1 Scale factor to set the number of vertices in the graph."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"num_edges: integer (default=100)")," \u27a1 Number of edges in the generated graph."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node_labels: mgp.List[string] ([])")," \u27a1 Labels on created vertices. Defaults to\nempty list."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'edge_type: string (default="RELATIONSHIP")')," \u27a1 Edge type, defines the name of the\nrelationship."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"a: double (default=0.57)")," \u27a1 First partition probability."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"b: double (default=0.19)")," \u27a1 Second partition probability."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"c: double (default=0.19)")," \u27a1 Third partition probability."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"seed: integer (default=0)")," \u27a1 RNG (random number generator) seed value"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clip_and_flip: boolean (default=False)")," \u27a1 Controls whether to generate edges only in the\nlower triangular part (including the diagonal) of the graph adjacency matrix\n(if set to ",(0,r.kt)("inlineCode",{parentName:"li"},"True"),") or not (if set to ",(0,r.kt)("inlineCode",{parentName:"li"},"False"),").")),(0,r.kt)("h4",{id:"output-2"},"Output:"),(0,r.kt)("p",null,"The generated graph is loaded into Memgraph."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message: string")," \u27a1 Success message if the graph is loaded.")),(0,r.kt)("h4",{id:"usage-2"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL cugraph.generator.rmat() YIELD *;\n")),(0,r.kt)("h2",{id:"cugraphhits"},(0,r.kt)("inlineCode",{parentName:"h2"},"cugraph.hits")),(0,r.kt)("h3",{id:"procedures-3"},"Procedures"),(0,r.kt)("h3",{id:"gettolerance-max_iterations-normalized-directed"},(0,r.kt)("inlineCode",{parentName:"h3"},"get(tolerance, max_iterations, normalized, directed)")),(0,r.kt)("p",null,"Find HITS authority and hub values for all nodes in the graph. The HITS\nalgorithm computes two numbers for each node: its ",(0,r.kt)("em",{parentName:"p"},"authority"),", which estimates\nthe value of its content, and its ",(0,r.kt)("em",{parentName:"p"},"hub value"),", which estimates the value of its\nlinks to other nodes."),(0,r.kt)("p",null,"Whereas the HITS algorithm was designed for directed graphs, this implementation\ndoes not check if the input graph is directed and will execute on undirected\ngraphs."),(0,r.kt)("h4",{id:"input-3"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tolerance: float (default=1e-5)")," \u27a1 HITS approximation tolerance (custom values not\nsupported by NVIDIA cuGraph)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_iterations: integer (default=100)")," \u27a1 Maximum number of iterations before returning an\nanswer (custom values not supported by NVIDIA cuGraph)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"normalized: boolean (default=True)")," \u27a1 Normalize the output (",(0,r.kt)("inlineCode",{parentName:"li"},"False")," not supported by\nNVIDIA cuGraph)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"directed: boolean (default=True)")," \u27a1 Graph directedness. (default ",(0,r.kt)("inlineCode",{parentName:"li"},"True"),")")),(0,r.kt)("h4",{id:"output-3"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hubs: float")," \u27a1 Hub value of a node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"authorities: float")," \u27a1 Authority value of a node.")),(0,r.kt)("h4",{id:"usage-3"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL cugraph.hits.get()\nYIELD node, hubs, authorities\nRETURN node, hubs, authorities;\n")),(0,r.kt)("h2",{id:"cugraphkatz_centrality"},(0,r.kt)("inlineCode",{parentName:"h2"},"cugraph.katz_centrality")),(0,r.kt)("h3",{id:"procedures-4"},"Procedures"),(0,r.kt)("h3",{id:"getalpha-beta-epsilon-max_iterations-normalized-directed"},(0,r.kt)("inlineCode",{parentName:"h3"},"get(alpha, beta, epsilon, max_iterations, normalized, directed)")),(0,r.kt)("p",null,"Find Katz centrality scores for all nodes in the graph."),(0,r.kt)("h4",{id:"input-4"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alpha: float (default=None)")," \u27a1 Attenuation factor defining the walk length importance.\nIf not specified, calculated as ",(0,r.kt)("inlineCode",{parentName:"li"},"1 / max(out_degree)"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beta: float (default=1.0)")," \u27a1 Weight scalar (currently not supported by NVIDIA\ncuGraph)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"epsilon: float (default=1e-6)")," \u27a1 Set the tolerance for the approximation, this\nparameter should be a small magnitude value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_iterations: integer (default=100)")," \u27a1 Maximum number of iterations before returning an\nanswer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"normalized: boolean (default=True)")," \u27a1 Normalize the output."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"directed: boolean (default=True)")," \u27a1 Graph directedness. (default ",(0,r.kt)("inlineCode",{parentName:"li"},"True"),")")),(0,r.kt)("h4",{id:"output-4"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"katz_centrality: float")," \u27a1 Katz centrality score of a node.")),(0,r.kt)("h4",{id:"usage-4"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL cugraph.katz_centrality.get()\nYIELD node, katz_centrality\nRETURN node, katz_centrality;\n")),(0,r.kt)("h2",{id:"cugraphleiden"},(0,r.kt)("inlineCode",{parentName:"h2"},"cugraph.leiden")),(0,r.kt)("h3",{id:"procedures-5"},"Procedures"),(0,r.kt)("h3",{id:"getmax_iterations-resolution"},(0,r.kt)("inlineCode",{parentName:"h3"},"get(max_iterations, resolution)")),(0,r.kt)("p",null,"Find the partition of the graph into communities using the Leiden method."),(0,r.kt)("h4",{id:"input-5"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_iterations: integer (default=100)")," \u27a1 Maximum number of iterations (levels) of the\nalgorithm. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resolution: float (default=1.0)")," \u27a1 Controls community size (lower values lead to\nfewer, larger communities and vice versa). ")),(0,r.kt)("h4",{id:"output-5"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"partition: integer")," \u27a1 Partition of a node.")),(0,r.kt)("h4",{id:"usage-5"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL cugraph.leiden.get()\nYIELD node, partition\nRETURN node, partition;\n")),(0,r.kt)("h2",{id:"cugraphlouvain"},(0,r.kt)("inlineCode",{parentName:"h2"},"cugraph.louvain")),(0,r.kt)("h3",{id:"procedures-6"},"Procedures"),(0,r.kt)("h3",{id:"getmax_iterations-resolution-directed"},(0,r.kt)("inlineCode",{parentName:"h3"},"get(max_iterations, resolution, directed)")),(0,r.kt)("p",null,"Find the partition of the graph into communities using the Louvain method."),(0,r.kt)("h4",{id:"input-6"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_iterations: integer (default=100)")," \u27a1 Maximum number of iterations (levels) of the\nalgorithm."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resolution: float (default=1.0)")," \u27a1 Controls community size (lower values lead to\nfewer, larger communities and vice versa)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"directed: boolean (default=True)")," \u27a1 Graph directedness. (default ",(0,r.kt)("inlineCode",{parentName:"li"},"True"),")")),(0,r.kt)("h4",{id:"output-6"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"partition: integer")," \u27a1 Partition of a node.")),(0,r.kt)("h4",{id:"usage-6"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL cugraph.louvain.get()\nYIELD node, partition\nRETURN node, partition;\n")),(0,r.kt)("h2",{id:"cugraphpagerank"},(0,r.kt)("inlineCode",{parentName:"h2"},"cugraph.pagerank")),(0,r.kt)("h3",{id:"procedures-7"},"Procedures"),(0,r.kt)("h3",{id:"getmax_iterations-damping_factor-stop_epsilon-weight_property"},(0,r.kt)("inlineCode",{parentName:"h3"},"get(max_iterations, damping_factor, stop_epsilon, weight_property)")),(0,r.kt)("p",null,"Find PageRank scores for all nodes in the graph."),(0,r.kt)("h4",{id:"input-7"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_iterations: integer (default=100)")," \u27a1 The maximum number of iterations before returning\nan answer (default ",(0,r.kt)("inlineCode",{parentName:"li"},"100"),"). Use it to limit the execution time or do an early\nexit before the solver reaches the convergence tolerance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"damping_factor: float (default=0.85)")," \u27a1 The damping factor represents the probability\nto follow an outgoing edge."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stop_epsilon: float (default=1e-5)")," \u27a1 The convergence tolerance for PageRank\napproximation. Lowering tolerance improves the approximation, but setting this\nparameter too low can ensue in non-convergence due to numerical round-off.\nValues between ",(0,r.kt)("inlineCode",{parentName:"li"},"0.01")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"0.00001")," are usually acceptable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'weight_property: string (default="weight")')," \u27a1 The values of the given relationship\nproperty are used as weights by the algorithm. If this property is not set for\na relationship, the fallback value is ",(0,r.kt)("inlineCode",{parentName:"li"},"1.0"),".")),(0,r.kt)("h4",{id:"output-7"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pagerank: float")," \u27a1 PageRank score of a node.")),(0,r.kt)("h4",{id:"usage-7"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL cugraph.pagerank.get()\nYIELD node, pagerank\nRETURN node, pagerank;\n")),(0,r.kt)("h2",{id:"cugraphpersonalized_pagerank"},(0,r.kt)("inlineCode",{parentName:"h2"},"cugraph.personalized_pagerank")),(0,r.kt)("h3",{id:"procedures-8"},"Procedures"),(0,r.kt)("h3",{id:"getpersonalization_vertices-personalization_values-max_iterations-damping_factor-stop_epsilon-weight_property"},(0,r.kt)("inlineCode",{parentName:"h3"},"get(personalization_vertices, personalization_values, max_iterations, damping_factor, stop_epsilon, weight_property)")),(0,r.kt)("p",null,"Find personalized PageRank scores for all nodes in the graph."),(0,r.kt)("h4",{id:"input-8"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"personalization_vertices: mgp.List[mgp.Vertex]")," \u27a1 Graph nodes with\npersonalization values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"personalization_values: mgp.List[float]")," \u27a1 Above nodes\u2019 personalization\nvalues."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'weight_property: string (default="weight")')," \u27a1 The values of the given relationship.\nproperty are used as weights by the algorithm. If this property is not set for\na relationship, the fallback value is ",(0,r.kt)("inlineCode",{parentName:"li"},"1.0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"damping_factor: float (default=0.85)")," \u27a1 The damping factor represents the probability\nto follow an outgoing edge."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stop_epsilon: float (default=1e-5)")," \u27a1 The convergence tolerance for PageRank\napproximation. Lowering tolerance improves the approximation, but setting this\nparameter too low can ensue in non-convergence due to numerical round-off.\nValues between ",(0,r.kt)("inlineCode",{parentName:"li"},"0.01")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"0.00001")," are usually acceptable."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_iterations: integer (default=100)")," \u27a1 The maximum number of iterations before returning\nan answer (default ",(0,r.kt)("inlineCode",{parentName:"li"},"100"),"). Use it to limit the execution time or do an early\nexit before the solver reaches the convergence tolerance.")),(0,r.kt)("h4",{id:"output-8"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pagerank: float")," \u27a1 PageRank score of a node.")),(0,r.kt)("h4",{id:"usage-8"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n: Node {id: 1}), (m: Node {id: 2})\nCALL cugraph.pagerank.get([n, m], [0.2, 0.5])\nYIELD node, pagerank\nRETURN node, pagerank;\n")),(0,r.kt)("h2",{id:"cugraphspectral_clustering"},(0,r.kt)("inlineCode",{parentName:"h2"},"cugraph.spectral_clustering")),(0,r.kt)("h3",{id:"procedures-9"},"Procedures"),(0,r.kt)("h3",{id:"getnum_clusters-num_eigenvectors-ev_tolerance-ev_max_iter-kmean_tolerance-kmean_max_iter-weight_property-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"get(num_clusters, num_eigenvectors, ev_tolerance, ev_max_iter, kmean_tolerance, kmean_max_iter, weight_property)")),(0,r.kt)("p",null,"Find the spectral clustering of the graph\u2019s nodes."),(0,r.kt)("h4",{id:"input-9"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"num_clusters: integer")," \u27a1 Number of clusters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"num_eigenvectors: integer (default=2)")," \u27a1 Number of eigenvectors to be used (must be less\nthan or equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"num_clusters"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ev_tolerance: float (default=0.00001)")," \u27a1 Tolerance used by the eigensolver."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ev_max_iter: integer (default=100)")," \u27a1 Maximum number of iterations for the eigensolver."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kmean_tolerance: float (default=0.00001)")," \u27a1 Tolerance used by the k-means solver."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kmean_max_iter: integer (default=100)")," \u27a1 Maximum number of iterations for the k-means\nsolver."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'weight_property: string (default="weight")')," \u27a1 The values of the given relationship\nproperty are used as weights by the algorithm. If this property is not set for\na relationship, the fallback value is ",(0,r.kt)("inlineCode",{parentName:"li"},"1.0"),".")),(0,r.kt)("h4",{id:"output-9"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node: Vertex")," \u27a1 Graph node."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cluster: integer")," \u27a1 Cluster of a node.")),(0,r.kt)("h4",{id:"usage-9"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL cugraph.spectral_clustering.get(3)\nYIELD node, cluster\nRETURN node, cluster;\n")))}m.isMDXComponent=!0},83523:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={toc:[]};function i(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,r.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}i.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),o=a(16550),u=a(91980),p=a(67392),d=a(50012);function s(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??s(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=c(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,p]=g({queryString:a,groupId:n}),[s,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=u??s;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),h(e)}),[p,h,l]),tabValues:l}}var k=a(72389);const f="tabList__CuJ",v="tabItem_LNqP";function N(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:s}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=d.indexOf(t),n=p[a].value;n!==o&&(s(t),u(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},i,{className:(0,l.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":o===t})}),a??t)})))}function _(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(_,(0,n.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return r.createElement(b,(0,n.Z)({key:String(t)},e))}}}]);