"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85217],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(t),c=r,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return t?a.createElement(h,l(l({ref:n},p),{},{components:t})):a.createElement(h,l({ref:n},p))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},38440:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},Highlight:function(){return c},default:function(){return g}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),l=t(9877),o=t(58215),s=["components"],d={id:"node2vec",title:"node2vec",sidebar_label:"node2vec"},p=void 0,u={unversionedId:"query-modules/python/node2vec",id:"query-modules/python/node2vec",title:"node2vec",description:"<span",source:"@site/mage/query-modules/python/node2vec.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/node2vec",permalink:"/docs/mage/query-modules/python/node2vec",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/node2vec.md",tags:[],version:"current",frontMatter:{id:"node2vec",title:"node2vec",sidebar_label:"node2vec"},sidebar:"mage",previous:{title:"json_util",permalink:"/docs/mage/query-modules/python/json-util"},next:{title:"node2vec_online",permalink:"/docs/mage/query-modules/python/node2vec-online"}},m=[{value:"Abstract",id:"abstract",children:[],level:2},{value:"Procedures",id:"procedures",children:[{value:"<code>get_embeddings( is_directed, p, q, num_walks, walk_length, vector_size, alpha, window, min_count, seed, workers, min_alpha, sg, hs, negative, epochs,)</code>",id:"get_embeddings-is_directed-p-q-num_walks-walk_length-vector_size-alpha-window-min_count-seed-workers-min_alpha-sg-hs-negative-epochs",children:[{value:"Input:",id:"input",children:[],level:4},{value:"Output:",id:"output",children:[],level:4},{value:"Usage:",id:"usage",children:[],level:4}],level:3},{value:"<code>set_embeddings( is_directed, p, q, num_walks, walk_length, vector_size, alpha, window, min_count, seed, workers, min_alpha, sg, hs, negative, epochs,)</code>",id:"set_embeddings-is_directed-p-q-num_walks-walk_length-vector_size-alpha-window-min_count-seed-workers-min_alpha-sg-hs-negative-epochs",children:[{value:"Input:",id:"input-1",children:[],level:4},{value:"Output:",id:"output-1",children:[],level:4},{value:"Usage:",id:"usage-1",children:[],level:4}],level:3},{value:"<code>help()</code>",id:"help",children:[{value:"Output:",id:"output-2",children:[],level:4},{value:"Usage:",id:"usage-2",children:[],level:4}],level:3}],level:2},{value:"Example",id:"example",children:[],level:2}],c=function(e){var n=e.children,t=e.color;return(0,i.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},n)},h={toc:m,Highlight:c};function g(e){var n=e.components,d=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,d,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/node2vec.py"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-node2vec-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"node2vec")," is a semi-supervised algorithmic framework for learning\ncontinuous feature representations for nodes in networks. The algorithm\ngenerates a mapping of nodes to a low-dimensional space of features that\nmaximizes the likelihood of preserving network neighborhoods of nodes. By using\na biased random walk procedure, it enables exploring diverse neighborhoods. In\ntasks such as multi-label classification and link prediction, node2vec shows\ngreat results."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"node2vec")," algorithm was inspired by a similar ",(0,i.kt)("strong",{parentName:"p"},"NLP")," technique. The same\nway as a document is an ordered sequence of words, by sampling sequences of\nnodes from the underlying network and turning a network into an ordered sequence\nof nodes. Although the idea of sampling is easy, choosing the actual strategy\ncan be challenging and dependant on the techniques that will be applied\nafterward."),(0,i.kt)("p",null,"Capturing information in networks often shuttles between two kinds of\nsimilarities: ",(0,i.kt)("strong",{parentName:"p"},"homophily")," and ",(0,i.kt)("strong",{parentName:"p"},"structural equivalence"),". Under the\n",(0,i.kt)("strong",{parentName:"p"},"homophily")," hypothesis, nodes that are highly interconnected and belong to\nsimilar network clusters or communities should be embedded closely together. In\ncontrast, under the ",(0,i.kt)("strong",{parentName:"p"},"structural equivalence")," hypothesis, nodes that have\nsimilar structural roles in networks should be embedded closely together (e.g.,\nnodes that act as hubs of their corresponding communities)."),(0,i.kt)("p",null,"The current implementation easily captures ",(0,i.kt)("strong",{parentName:"p"},"homophily")," or ",(0,i.kt)("strong",{parentName:"p"},"structural\nequivalence")," by changing hyperparameters."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BFS")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DFS")," strategies play a key role in producing representations that\nreflect either of the above equivalences. The neighborhoods sampled by ",(0,i.kt)("inlineCode",{parentName:"p"},"BFS"),"\nlead to embeddings that correspond closely to structural equivalence. The\nopposite is true for ",(0,i.kt)("inlineCode",{parentName:"p"},"DFS"),". It can explore larger parts of the network as it\ncan move further away from the source node. Therefore, ",(0,i.kt)("inlineCode",{parentName:"p"},"DFS")," sampled walks\naccurately reflect a macro-view of the neighborhood, which is essential in\ninferring communities based on homophily."),(0,i.kt)("p",null,"By having different parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"return parameter ",(0,i.kt)("inlineCode",{parentName:"strong"},"p"))),(0,i.kt)("li",{parentName:"ul"},"and ",(0,i.kt)("strong",{parentName:"li"},"in-out parameter",(0,i.kt)("inlineCode",{parentName:"strong"},"q")))),(0,i.kt)("p",null,"one decides whether to prioritize the ",(0,i.kt)("inlineCode",{parentName:"p"},"BFS")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"DFS")," strategy when sampling. If\n",(0,i.kt)("inlineCode",{parentName:"p"},"p")," is smaller than 1, then we create more ",(0,i.kt)("inlineCode",{parentName:"p"},"BFS")," like walks and we capture more\n",(0,i.kt)("strong",{parentName:"p"},"structural equivalence"),". The opposite is true if ",(0,i.kt)("inlineCode",{parentName:"p"},"q")," is smaller than 1. Then we\ncapture ",(0,i.kt)("inlineCode",{parentName:"p"},"DFS")," like walks and ",(0,i.kt)("strong",{parentName:"p"},"homophily"),"."),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1607.00653"},"Scalable Feature Learning for Networks"),",\nA. Grover, J. Leskovec"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Trait"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Module type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"module")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Implementation")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"Python")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Graph direction")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"directed/undirected")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Edge weights")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"weighted/unweighted")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Parallelism")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,i.kt)("strong",{parentName:"td"},"sequential")))))),(0,i.kt)("h2",{id:"procedures"},"Procedures"),(0,i.kt)("h3",{id:"get_embeddings-is_directed-p-q-num_walks-walk_length-vector_size-alpha-window-min_count-seed-workers-min_alpha-sg-hs-negative-epochs"},(0,i.kt)("inlineCode",{parentName:"h3"},"get_embeddings( is_directed, p, q, num_walks, walk_length, vector_size, alpha, window, min_count, seed, workers, min_alpha, sg, hs, negative, epochs,)")),(0,i.kt)("h4",{id:"input"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_directed : bool")," \u27a1 If bool=True, graph is treated as directed, else not\ndirected"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"p : float")," \u27a1 Return hyperparameter for calculating transition probabilities."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"q : float")," \u27a1 In-out hyperparameter for calculating transition probabilities."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num_walks : int")," \u27a1 Number of walks per node in walk sampling."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"walk_length : int")," \u27a1 Length of one walk in walk sampling."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"vector_size : int")," \u27a1 Dimensionality of the word vectors."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"window : int")," \u27a1 Maximum distance between the current and predicted word\nwithin a sentence."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"min_count : int")," \u27a1 Ignores all words with total frequency lower than this."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"workers : int")," \u27a1 Use these many worker threads to train the model (=faster\ntraining with multicore machines)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sg : {0, 1}")," \u27a1 Training algorithm: 1 for skip-gram; otherwise CBOW."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hs : {0, 1}")," \u27a1 If 1, hierarchical softmax will be used for model training. If\n0, and ",(0,i.kt)("inlineCode",{parentName:"li"},"negative")," is non-zero, negative sampling will be used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"negative : int"),' \u27a1 If > 0, negative sampling will be used, the int for\nnegative specifies how many "noise words" should be drawn (usually\nbetween 5-20). If set to 0, no negative sampling is used.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cbow_mean : {0, 1}")," \u27a1 If 0, use the sum of the context word vectors. If 1,\nuse the mean, only applies when cbow is used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"alpha : float")," \u27a1 The initial learning rate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"min_alpha : float")," \u27a1 Learning rate will linearly drop to ",(0,i.kt)("inlineCode",{parentName:"li"},"min_alpha")," as\ntraining progresses."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"seed : int")," \u27a1 Seed for the random number generator. Initial vectors for each\nword are seeded with a hash of the concatenation of word + ",(0,i.kt)("inlineCode",{parentName:"li"},"str(seed)"),".")),(0,i.kt)("h4",{id:"output"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodes: mgp.List[mgp.Vertex]")," \u27a1 List of nodes for which embeddings were\ncalculated"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"embeddings: mgp.List[mgp.List[mgp.Number]])")," \u27a1 Corresponding list of\nembeddings")),(0,i.kt)("h4",{id:"usage"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL node2vec_online.get_embeddings(False, 2.0, 0.5, 4, 5, 100, 0.025, 5, 1, 1, 1, 0.0001, 1, 0, 5, 5);\n")),(0,i.kt)("h3",{id:"set_embeddings-is_directed-p-q-num_walks-walk_length-vector_size-alpha-window-min_count-seed-workers-min_alpha-sg-hs-negative-epochs"},(0,i.kt)("inlineCode",{parentName:"h3"},"set_embeddings( is_directed, p, q, num_walks, walk_length, vector_size, alpha, window, min_count, seed, workers, min_alpha, sg, hs, negative, epochs,)")),(0,i.kt)("h4",{id:"input-1"},"Input:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_directed : bool")," \u27a1 If bool=True, graph is treated as directed, else not\ndirected"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"p : float")," \u27a1 Return hyperparameter for calculating transition probabilities."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"q : float")," \u27a1 In-out hyperparameter for calculating transition probabilities."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"num_walks : int")," \u27a1 Number of walks per node in walk sampling."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"walk_length : int")," \u27a1 Length of one walk in walk sampling."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"vector_size : int")," \u27a1 Dimensionality of the word vectors."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"window : int")," \u27a1 Maximum distance between the current and predicted word\nwithin a sentence."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"min_count : int")," \u27a1 Ignores all words with total frequency lower than this."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"workers : int")," \u27a1 Use these many worker threads to train the model (=faster\ntraining with multicore machines)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sg : {0, 1}")," \u27a1 Training algorithm: 1 for skip-gram; otherwise CBOW."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hs : {0, 1}")," \u27a1 If 1, hierarchical softmax will be used for model training. If\n0, and ",(0,i.kt)("inlineCode",{parentName:"li"},"negative")," is non-zero, negative sampling will be used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"negative : int"),' \u27a1 If > 0, negative sampling will be used, the int for\nnegative specifies how many "noise words" should be drawn (usually\nbetween 5-20). If set to 0, no negative sampling is used.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cbow_mean : {0, 1}")," \u27a1 If 0, use the sum of the context word vectors. If 1,\nuse the mean, only applies when cbow is used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"alpha : float")," \u27a1 The initial learning rate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"min_alpha : float")," \u27a1 Learning rate will linearly drop to ",(0,i.kt)("inlineCode",{parentName:"li"},"min_alpha")," as\ntraining progresses."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"seed : int")," \u27a1 Seed for the random number generator. Initial vectors for each\nword are seeded with a hash of the concatenation of word + ",(0,i.kt)("inlineCode",{parentName:"li"},"str(seed)"),".")),(0,i.kt)("h4",{id:"output-1"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodes: mgp.List[mgp.Vertex]")," \u27a1 List of nodes for which embeddings were\ncalculated"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"embeddings: mgp.List[mgp.List[mgp.Number]])")," \u27a1 Corresponding list of\nembeddings")),(0,i.kt)("h4",{id:"usage-1"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL node2vec_online.get_embeddings(False, 2.0, 0.5, 4, 5, 100, 0.025, 5, 1, 1, 1, 0.0001, 1, 0, 5, 5);\n")),(0,i.kt)("h3",{id:"help"},(0,i.kt)("inlineCode",{parentName:"h3"},"help()")),(0,i.kt)("h4",{id:"output-2"},"Output:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name: str")," \u27a1 Name of available functions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value: str")," \u27a1 Documentation for every function")),(0,i.kt)("h4",{id:"usage-2"},"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL node2vec_online.help();\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)(l.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Load commands",value:"cypher-load"},{label:"Step 3: Set embeddings",value:"set-embeddings"},{label:"Step 4: Running command",value:"run"},{label:"Step 5: Results",value:"result"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"visualization",mdxType:"TabItem"},(0,i.kt)("img",{src:t(72700).Z})),(0,i.kt)(o.Z,{value:"cypher-load",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (n:Node {id: 1}) MERGE (m:Node {id: 6}) CREATE (n)-[:RELATION]->(m);\nMERGE (n:Node {id: 2}) MERGE (m:Node {id: 6}) CREATE (n)-[:RELATION]->(m);\nMERGE (n:Node {id: 10}) MERGE (m:Node {id: 5}) CREATE (n)-[:RELATION]->(m);\nMERGE (n:Node {id: 5}) MERGE (m:Node {id: 2}) CREATE (n)-[:RELATION]->(m);\n\nMERGE (n:Node {id: 9}) MERGE (m:Node {id: 7}) CREATE (n)-[:RELATION]->(m);\nMERGE (n:Node {id: 7}) MERGE (m:Node {id: 3}) CREATE (n)-[:RELATION]->(m);\nMERGE (n:Node {id: 3}) MERGE (m:Node {id: 6}) CREATE (n)-[:RELATION]->(m);\n\nMERGE (n:Node {id: 9}) MERGE (m:Node {id: 8}) CREATE (n)-[:RELATION]->(m);\nMERGE (n:Node {id: 8}) MERGE (m:Node {id: 4}) CREATE (n)-[:RELATION]->(m);\nMERGE (n:Node {id: 4}) MERGE (m:Node {id: 6}) CREATE (n)-[:RELATION]->(m);\n"))),(0,i.kt)(o.Z,{value:"set-embeddings",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL node2vec.set_embeddings(False, 2.0, 0.5, 4, 5, 2) YIELD *;\n"))),(0,i.kt)(o.Z,{value:"run",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)\nRETURN n.id as node, n.embedding as embedding\nORDER BY n.id;\n"))),(0,i.kt)(o.Z,{value:"result",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"+-------------------------+-------------------------+\n| node                    | embedding               |\n+-------------------------+-------------------------+\n| 1                       | [-0.243723, -0.0916009] |\n| 2                       | [0.25442, 0.449585]     |\n| 3                       | [0.322331, 0.448404]    |\n| 4                       | [0.143389, 0.0492275]   |\n| 5                       | [-0.465552, -0.35653]   |\n| 6                       | [-0.0272922, 0.0111898] |\n| 7                       | [0.368725, -0.0773199]  |\n| 8                       | [-0.414683, -0.472285]  |\n| 9                       | [-0.226683, 0.328159]   |\n| 10                      | [-0.251244, -0.189218]  |\n+-------------------------+-------------------------+\n")))))}g.isMDXComponent=!0},58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(87462),r=t(67294),i=t(72389),l=t(29548),o=t(86010),s="tabItem_LplD";function d(e){var n,t,i,d=e.lazy,p=e.block,u=e.defaultValue,m=e.values,c=e.groupId,h=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),f=(0,l.lx)(k,(function(e,n){return e.value===n.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===u?u:null!=(n=null!=u?u:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=g[0])?void 0:i.props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,l.UB)(),b=v.tabGroupChoices,w=v.setTabGroupChoices,y=(0,r.useState)(N),E=y[0],C=y[1],_=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var I=b[c];null!=I&&I!==E&&k.some((function(e){return e.value===I}))&&C(I)}var R=function(e){var n=e.currentTarget,t=_.indexOf(n),a=k[t].value;a!==E&&(T(n),C(a),null!=c&&w(c,a))},O=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=_.indexOf(e.currentTarget)+1;t=_[a]||_[0];break;case"ArrowLeft":var r=_.indexOf(e.currentTarget)-1;t=_[r]||_[_.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},h)},k.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return _.push(e)},onKeyDown:O,onFocus:R,onClick:R},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),d?(0,r.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function p(e){var n=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},72700:function(e,n,t){n.Z=t.p+"assets/images/node2vec-2638f0e20136a1f858affb1be4013687.png"}}]);