"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31525],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,g=m["".concat(d,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80365:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>m,assets:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const i={id:"node2vec-online",title:"node2vec_online",sidebar_label:"node2vec_online"},d=void 0,s={unversionedId:"query-modules/python/node2vec-online",id:"query-modules/python/node2vec-online",title:"node2vec_online",description:"docs-source",source:"@site/mage/query-modules/python/node2vec-online.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/node2vec-online",permalink:"/docs/mage/query-modules/python/node2vec-online",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/node2vec-online.md",tags:[],version:"current",frontMatter:{id:"node2vec-online",title:"node2vec_online",sidebar_label:"node2vec_online"},sidebar:"mage",previous:{title:"node2vec",permalink:"/docs/mage/query-modules/python/node2vec"},next:{title:"node_similarity",permalink:"/docs/mage/query-modules/python/node-similarity"}},p={},u=[{value:"Abstract",id:"abstract",level:2},{value:"Procedures",id:"procedures",level:2},{value:"<code>set_streamwalk_updater(half_life, max_length, beta, cutoff, sampled_walks, full_walks)</code>",id:"set_streamwalk_updaterhalf_life-max_length-beta-cutoff-sampled_walks-full_walks",level:3},{value:"Input:",id:"input",level:4},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"<code>set_word2vec_learner(embedding_dimension, learning_rate, skip_gram )</code>",id:"set_word2vec_learnerembedding_dimension-learning_rate-skip_gram-",level:3},{value:"Input:",id:"input-1",level:4},{value:"Output:",id:"output-1",level:4},{value:"Usage:",id:"usage-1",level:4},{value:"<code>get()</code>",id:"get",level:3},{value:"Output:",id:"output-2",level:4},{value:"Usage:",id:"usage-2",level:4},{value:"<code>update(edges)</code>",id:"updateedges",level:3},{value:"Input:",id:"input-2",level:3},{value:"Usage:",id:"usage-3",level:4},{value:"<code>reset()</code>",id:"reset",level:3},{value:"Output:",id:"output-3",level:4},{value:"Usage:",id:"usage-4",level:4},{value:"<code>help()</code>",id:"help",level:3},{value:"Output:",id:"output-4",level:4},{value:"Usage:",id:"usage-5",level:4},{value:"Example",id:"example",level:2}],m=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},c={toc:u,Highlight:m};function g(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/node2vec_online.py"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-node2vec_online-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"node2vec_online")," algorithm learns and updates temporal node embeddings on\nthe fly for tracking and measuring node similarity over time in graph streams.\nThe algorithm creates similar embeddings for two nodes (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"u"),") if there\nis an option to reach one node from the other across edges that appeared\nrecently. In other words, the embedding of a node ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," should be more similar to\nthe embedding of node ",(0,r.kt)("inlineCode",{parentName:"p"},"u")," if we can reach ",(0,r.kt)("inlineCode",{parentName:"p"},"u")," by taking steps backward to node\n",(0,r.kt)("inlineCode",{parentName:"p"},"v")," across edges that appeared before the previous one. These steps backward\nfrom one node to the other form a temporal walk. It is temporal since it depends\non when the edge appeared in the graph."),(0,r.kt)("p",null,"To make two nodes more similar and to create these temporal walks, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node2Vec\nOnline")," algorithm uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"StreamWalk updater")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Word2Vec learner"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"StreamWalk updater")," is a machine for sampling temporal walks. A sampling of the\nwalk is done in a backward fashion because we look only at the incoming edges of\nthe node. Since one node can have multiple incoming edges, when sampling a walk,\n",(0,r.kt)("inlineCode",{parentName:"p"},"StreamWalk updater")," uses probabilities to determine which incoming edge of the\nnode it will take next, and that way leading to a new node. These probabilities\nare computed after the edge arrives and before temporal walk sampling.\nProbability represents a sum over all temporal walks ",(0,r.kt)("inlineCode",{parentName:"p"},"z")," ending in node ",(0,r.kt)("inlineCode",{parentName:"p"},"v"),"\nusing edges arriving no later than the latest one of already sampled ones in the\ntemporal walk. When the algorithm decides which edge to take next for temporal\nwalk creation, it uses these computed weights (probabilities). Every time a new\nedge appears in the graph, these probabilities are updated just for two nodes of\na new edge."),(0,r.kt)("p",null,"After walks sampling, ",(0,r.kt)("inlineCode",{parentName:"p"},"Word2Vec learner")," uses these prepared temporal walks to\nmake node embeddings more similar using the ",(0,r.kt)("inlineCode",{parentName:"p"},"gensim Word2Vec")," module. These\nsampled walks are given as sentences to the ",(0,r.kt)("inlineCode",{parentName:"p"},"gensim Word2Vec")," module, which then\noptimizes for the similarity of the node embeddings in the walk with stochastic\ngradient descent using a skip-gram model or continuous-bag-of-words (CBOW)."),(0,r.kt)("p",null,"Embeddings capture the graph topology, relationships between nodes, and further\nrelevant information. How the embeddings capture this inherent information of\nthe graph is not fixed."),(0,r.kt)("p",null,"Capturing information in networks often shuttles between two kinds of\nsimilarities: ",(0,r.kt)("strong",{parentName:"p"},"homophily")," and ",(0,r.kt)("strong",{parentName:"p"},"structural equivalence"),". Under the\n",(0,r.kt)("strong",{parentName:"p"},"homophily")," hypothesis, nodes that are highly interconnected and belong to\nsimilar network clusters or communities should be embedded closely together. In\ncontrast, under the ",(0,r.kt)("strong",{parentName:"p"},"structural equivalence")," hypothesis, nodes that have\nsimilar structural roles in networks should be embedded closely together (e.g.,\nnodes that act as hubs of their corresponding communities)."),(0,r.kt)("p",null,"Currently, our implementation captures for ",(0,r.kt)("strong",{parentName:"p"},"homophily")," - nodes that are highly\ninterconnected and belong to similar network clusters or communities."),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,r.kt)("a",{parentName:"p",href:"https://appliednetsci.springeropen.com/track/pdf/10.1007/s41109-019-0169-5.pdf"},"Node embeddings in dynamic\ngraphs"),",\nFerenc B\xe9res, R\xf3bert P\xe1lovics, Domokos Mikl\xf3s Kelen and Andr\xe1s A. Bencz\xfar"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trait"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Module type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"module")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implementation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"Python")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Graph direction")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"directed")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Edge weights")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"unweighted")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Parallelism")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"sequential")))))),(0,r.kt)("h2",{id:"procedures"},"Procedures"),(0,r.kt)("h3",{id:"set_streamwalk_updaterhalf_life-max_length-beta-cutoff-sampled_walks-full_walks"},(0,r.kt)("inlineCode",{parentName:"h3"},"set_streamwalk_updater(half_life, max_length, beta, cutoff, sampled_walks, full_walks)")),(0,r.kt)("h4",{id:"input"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"half_life: integer")," \u27a1 half-life ","[seconds]",", used in the temporal walk probability\ncalculation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_length: integer")," \u27a1 Maximum length of the sampled temporal random walks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"beta: float")," \u27a1 Damping factor for long paths"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cutoff: integer")," \u27a1 Temporal cutoff in seconds to exclude very distant past"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sampled_walks: integer")," \u27a1 Number of sampled walks for each edge update"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"full_walks: boolean")," \u27a1  Return every node of the sampled walk for representation\nlearning (full_walks=True) or only the endpoints of the walk\n(full_walks=False)")),(0,r.kt)("h4",{id:"output"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message: string")," \u27a1 Whether parameters are set or they need to be reset")),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL node2vec_online.set_streamwalk_updater(7200, 3, 0.9, 604800, 4, False);\n")),(0,r.kt)("h3",{id:"set_word2vec_learnerembedding_dimension-learning_rate-skip_gram-"},(0,r.kt)("inlineCode",{parentName:"h3"},"set_word2vec_learner(embedding_dimension, learning_rate, skip_gram )")),(0,r.kt)("h4",{id:"input-1"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"embedding_dimension: integer")," \u27a1 Number of dimensions in the representation of the\nembedding vector"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"learning_rate: float")," \u27a1 Learning rate"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"skip_gram: boolean")," \u27a1 Whether to use skip-gram model (True) or\ncontinuous-bag-of-words (CBOW)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"negative_rate: integer")," \u27a1 Negative rate for Gensim Word2Vec model"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"threads: integer")," \u27a1 Maximum number of threads for parallelization")),(0,r.kt)("h4",{id:"output-1"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message: string")," \u27a1 Whether parameters are set or they need to be reset")),(0,r.kt)("h4",{id:"usage-1"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL node2vec_online.set_word2vec_learner(128, 0.01, True, 10, 1);\n")),(0,r.kt)("h3",{id:"get"},(0,r.kt)("inlineCode",{parentName:"h3"},"get()")),(0,r.kt)("h4",{id:"output-2"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node: mgp.Vertex")," \u27a1 Node in the graph for which embedding exists"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"embedding: mgp.List[mgp.Number]")," \u27a1 Embedding for the given node")),(0,r.kt)("h4",{id:"usage-2"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL node2vec_online.get();\n")),(0,r.kt)("h3",{id:"updateedges"},(0,r.kt)("inlineCode",{parentName:"h3"},"update(edges)")),(0,r.kt)("h3",{id:"input-2"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"edges: mgp.List[mgp.Edge]")," \u27a1  List of edges added to the graph. For those\nnodes only ",(0,r.kt)("inlineCode",{parentName:"li"},"node2vec_online")," calculates embeddings.")),(0,r.kt)("h4",{id:"usage-3"},"Usage:"),(0,r.kt)("p",null,"There are a few options here. The first one is to create a trigger, so every\ntime an edge is added to graph, the trigger calls a procedure and makes an\nupdate."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE TRIGGER trigger ON --\x3e CREATE BEFORE COMMIT\nEXECUTE CALL node2vec_online.update(createdEdges) YIELD *;\n")),(0,r.kt)("p",null,"The second option is to add all the edges and then call the algorithm with those\nedges:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)-[e]->(m)\nWITH COLLECT(e) as edges\nCALL node2vec_online.update(edges) YIELD *\nWITH 1 as x\nRETURN x;\n")),(0,r.kt)("h3",{id:"reset"},(0,r.kt)("inlineCode",{parentName:"h3"},"reset()")),(0,r.kt)("h4",{id:"output-3"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message: string")," \u27a1 Message that parameters are ready to be set again")),(0,r.kt)("h4",{id:"usage-4"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL node2vec_online.reset();\n")),(0,r.kt)("h3",{id:"help"},(0,r.kt)("inlineCode",{parentName:"h3"},"help()")),(0,r.kt)("h4",{id:"output-4"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name: string")," \u27a1 Name of available functions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value: string")," \u27a1 Documentation for every function")),(0,r.kt)("h4",{id:"usage-5"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL node2vec_online.help();\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(l.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Set parameters and trigger",value:"cypher-preset"},{label:"Step 3: Load commands",value:"cypher-load"},{label:"Step 4: Running command",value:"run"},{label:"Step 5: Results",value:"result"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"visualization",mdxType:"TabItem"},(0,r.kt)("img",{src:n(3224).Z})),(0,r.kt)(o.Z,{value:"cypher-preset",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL node2vec_online.set_streamwalk_updater(7200, 2, 0.9, 604800, 2, True) YIELD *;\nCALL node2vec_online.set_word2vec_learner(2, 0.01, True, 1, 1) YIELD *;\n\nCREATE TRIGGER trigger ON --\x3e CREATE BEFORE COMMIT\nEXECUTE CALL node2vec_online.update(createdEdges) YIELD *;\n"))),(0,r.kt)(o.Z,{value:"cypher-load",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (n:Node {id: 1}) MERGE (m:Node {id: 6}) CREATE (n)-[:RELATION]->(m);\nMERGE (n:Node {id: 2}) MERGE (m:Node {id: 6}) CREATE (n)-[:RELATION]->(m);\nMERGE (n:Node {id: 10}) MERGE (m:Node {id: 5}) CREATE (n)-[:RELATION]->(m);\nMERGE (n:Node {id: 5}) MERGE (m:Node {id: 2}) CREATE (n)-[:RELATION]->(m);\n\nMERGE (n:Node {id: 9}) MERGE (m:Node {id: 7}) CREATE (n)-[:RELATION]->(m);\nMERGE (n:Node {id: 7}) MERGE (m:Node {id: 3}) CREATE (n)-[:RELATION]->(m);\nMERGE (n:Node {id: 3}) MERGE (m:Node {id: 6}) CREATE (n)-[:RELATION]->(m);\n\nMERGE (n:Node {id: 9}) MERGE (m:Node {id: 8}) CREATE (n)-[:RELATION]->(m);\nMERGE (n:Node {id: 8}) MERGE (m:Node {id: 4}) CREATE (n)-[:RELATION]->(m);\nMERGE (n:Node {id: 4}) MERGE (m:Node {id: 6}) CREATE (n)-[:RELATION]->(m);\n"))),(0,r.kt)(o.Z,{value:"run",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL node2vec_online.get() YIELD node, embedding\nRETURN node, embedding\nORDER BY node.id;\n"))),(0,r.kt)(o.Z,{value:"result",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"+-------------------------+-------------------------+\n| node                    | embedding               |\n+-------------------------+-------------------------+\n| (:Node {id: 1})         | [0.255167, 0.450464]    |\n| (:Node {id: 2})         | [-0.465147, -0.35584]   |\n| (:Node {id: 3})         | [-0.243008, -0.0908009] |\n| (:Node {id: 4})         | [-0.414261, -0.472441]  |\n| (:Node {id: 5})         | [-0.250771, -0.188169]  |\n| (:Node {id: 6})         | [-0.0268114, 0.0118215] |\n| (:Node {id: 7})         | [-0.226831, 0.327703]   |\n| (:Node {id: 8})         | [0.143829, 0.0495937]   |\n| (:Node {id: 9})         | [0.369025, -0.0766736]  |\n| (:Node {id: 10})        | [0.322944, 0.448649]    |\n+-------------------------+-------------------------+\n\n")))))}g.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),i=n(67392),d=n(7094),s=n(12466);const p="tabList__CuJ",u="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:c,groupId:g,className:h}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=c??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(N,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==f&&!N.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:E}=(0,d.U)(),[y,w]=(0,r.useState)(f),_=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=g){const e=b[g];null!=e&&e!==y&&N.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=_.indexOf(t),a=N[n].value;a!==y&&(C(t),w(a),null!=g&&E(g,String(a)))},R=e=>{var t;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;n=_[t]??_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;n=_[t]??_[_.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},h)},N.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>_.push(e),onKeyDown:R,onClick:T},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":y===t})}),n??t)}))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function c(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},3224:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/node2vec-online-2638f0e20136a1f858affb1be4013687.png"}}]);