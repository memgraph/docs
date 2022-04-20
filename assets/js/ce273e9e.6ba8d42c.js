"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15501],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),h=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=h(a),m=i,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var h=2;h<r;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},83763:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return h},toc:function(){return p}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],l={id:"algorithms",title:"Graph algorithms",sidebar_label:"Graph algorithms"},s=void 0,h={unversionedId:"algorithms/algorithms",id:"algorithms/algorithms",title:"Graph algorithms",description:"Traditional Graph Analytics",source:"@site/mage/algorithms/overview.md",sourceDirName:"algorithms",slug:"/algorithms/algorithms",permalink:"/docs/mage/algorithms/algorithms",editUrl:"https://github.com/memgraph/docs/tree/master/mage/algorithms/overview.md",tags:[],version:"current",frontMatter:{id:"algorithms",title:"Graph algorithms",sidebar_label:"Graph algorithms"},sidebar:"mage",previous:{title:"Run a query module",permalink:"/docs/mage/how-to-guides/run-a-query-module"},next:{title:"Betweenness Centrality",permalink:"/docs/mage/algorithms/traditional-graph-analytics/betweenness-centrality-algorithm"}},c={},p=[{value:"Traditional Graph Analytics",id:"traditional-graph-analytics",level:2},{value:"Betweenness Centrality",id:"betweenness-centrality",level:3},{value:"Biconnected Components",id:"biconnected-components",level:3},{value:"Bipartite Matching",id:"bipartite-matching",level:3},{value:"Bridge Detection",id:"bridge-detection",level:3},{value:"Community Detection",id:"community-detection",level:3},{value:"Cycle Detection",id:"cycle-detection",level:3},{value:"Graph Coloring",id:"graph-coloring",level:3},{value:"Katz Centrality",id:"katz-centrality",level:3},{value:"Maximum Flow",id:"maximum-flow",level:3},{value:"Node Similarity",id:"node-similarity",level:3},{value:"PageRank",id:"pagerank",level:3},{value:"Union Find",id:"union-find",level:3},{value:"Streaming Graph Analytics",id:"streaming-graph-analytics",level:2},{value:"Dynamic Betweenness Centrality",id:"dynamic-betweenness-centrality",level:3},{value:"Dynamic Katz Centrality",id:"dynamic-katz-centrality",level:3},{value:"Dynamic Community Detection",id:"dynamic-community-detection",level:3},{value:"Dynamic Node2Vec",id:"dynamic-node2vec",level:3},{value:"Dynamic PageRank",id:"dynamic-pagerank",level:3},{value:"Machine Learning Graph Algorithms",id:"machine-learning-graph-algorithms",level:2},{value:"Graph Neural Networks (GNN)",id:"graph-neural-networks-gnn",level:3},{value:"Graph Classification",id:"graph-classification",level:3},{value:"Graph Clustering",id:"graph-clustering",level:3},{value:"Link Prediction",id:"link-prediction",level:3},{value:"Node Classification",id:"node-classification",level:3},{value:"Node2Vec",id:"node2vec",level:3},{value:"Temporal Graph Networks (TGNs)",id:"temporal-graph-networks-tgns",level:3}],d={toc:p};function m(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"traditional-graph-analytics"},"Traditional Graph Analytics"),(0,r.kt)("h3",{id:"betweenness-centrality"},"Betweenness Centrality"),(0,r.kt)("p",null,"Centrality analysis provides information about the node\u2019s importance for an\ninformation flow or connectivity of the network. ",(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/traditional-graph-analytics/betweenness-centrality-algorithm"},"Betweenness\ncentrality"),"\nmeasures the extent to which a node lies on paths between other nodes in the\ngraph."),(0,r.kt)("h3",{id:"biconnected-components"},"Biconnected Components"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/traditional-graph-analytics/biconnected-components-algorithm"},"Biconnected\ncomponents"),"\nare parts of the graph important in the initial analysis. Finding biconnected\ncomponents means finding a maximal biconnected subgraph."),(0,r.kt)("h3",{id:"bipartite-matching"},"Bipartite Matching"),(0,r.kt)("p",null,"A bipartite graph is a graph in which we can divide vertices into two\nindependent sets, such that every edge connects vertices between these sets. No\nconnection can be established within the set. ",(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/traditional-graph-analytics/bipartite-matching-algorithm"},"Matching in bipartite\ngraphs"),"\n(bipartite matching) is described as a set of edges that are picked in a way to\nnot share an endpoint."),(0,r.kt)("h3",{id:"bridge-detection"},"Bridge Detection"),(0,r.kt)("p",null,"As in the real world, the definition of a bridge in graph theory denotes\nsomething that divides an entity into multiple components. Thus, more precisely,\nthe bridge in graph theory denotes an edge that, when removed, divides the graph\ninto two separate components. As the name suggests ",(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/traditional-graph-analytics/bridges-algorithm"},"Bridge\ndetection"),"\nalgorithm can be used to find bridges in graphs."),(0,r.kt)("h3",{id:"community-detection"},"Community Detection"),(0,r.kt)("p",null,"The notion of community in a graph represents similarly to what it represents in\nthe real world. In graphs, community represents a partition of a graph, i.e., a\nset of nodes. There are several different ways to approach ",(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/traditional-graph-analytics/community-detection-algorithm"},"Community\ndetection"),"."),(0,r.kt)("h3",{id:"cycle-detection"},"Cycle Detection"),(0,r.kt)("p",null,"In graph theory, a cycle represents a path within the graph where only starting\nand ending nodes are similar. There are many implementations of ",(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/traditional-graph-analytics/cycle-detection-algorithm"},"Cycle\ndetection"),".\nCycles are not only popular in graph structures but also play an important role\nin number theory and cryptography."),(0,r.kt)("h3",{id:"graph-coloring"},"Graph Coloring"),(0,r.kt)("p",null,"Certain applications require the special labeling of a graph called ",(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/traditional-graph-analytics/graph-coloring-algorithm"},"graph\ncoloring"),". This\n\u201cspecial\u201d labeling refers to the assignment of labels (which we call colors) in\nsuch a way that connected neighbors must not be given the same color."),(0,r.kt)("h3",{id:"katz-centrality"},"Katz Centrality"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/traditional-graph-analytics/katz-centrality-algorithm"},"Katz Centrality")," is\nthe measurement of centrality that incorporates the inbound path length starting\nfrom the wanted node. More central nodes will have closer connections rather\nthan having many long-distance nodes connected to them."),(0,r.kt)("h3",{id:"maximum-flow"},"Maximum Flow"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/traditional-graph-analytics/maximum-flow-algorithm"},"Maximum Flow")," problem\nin optimization theory regards finding the maximum possible flow going through a\nflow network from source to sink nodes. A flow network, or a transportation\nnetwork, is a directed graph with edge weights representing flow capacity."),(0,r.kt)("h3",{id:"node-similarity"},"Node Similarity"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/traditional-graph-analytics/node-similarity-algorithm"},"similarity of graph\nnodes")," is\nbased on a comparison of adjacent nodes or the neighborhood structure. The\nresult of this type of algorithm is always a pair of nodes and an assigned value\nindicating the match measure between them."),(0,r.kt)("h3",{id:"pagerank"},"PageRank"),(0,r.kt)("p",null,"In the domain of centrality measurements,\n",(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/traditional-graph-analytics/pagerank-algorithm"},"PageRank")," is arguably the\nmost popular tool. Today, the most popular search engine in the world, Google,\nowes its popularity solely to this algorithm, developed in the early days by its\nfounders."),(0,r.kt)("h3",{id:"union-find"},"Union Find"),(0,r.kt)("p",null,"By using a disjoint-set - a data structure that keeps track of non-overlapping\nsets, the algorithm enables the user to quickly check whether a pair of given\nnodes are in the same or different connected components. The implementation of\nthe disjoint-set data structure and its operations ",(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/traditional-graph-analytics/union-find-algorithm"},"uses the\nunion")," by rank and path\nsplitting optimizations."),(0,r.kt)("h2",{id:"streaming-graph-analytics"},"Streaming Graph Analytics"),(0,r.kt)("h3",{id:"dynamic-betweenness-centrality"},"Dynamic Betweenness Centrality"),(0,r.kt)("p",null,"MAGE includes a ",(0,r.kt)("em",{parentName:"p"},"fully dynamic")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/dynamic-graph-analytics/betweenness-centrality-online-algorithm"},"betweenness\ncentrality"),"\ncomputation tool that implements the\n",(0,r.kt)("a",{parentName:"p",href:"https://repository.kaust.edu.sa/bitstream/handle/10754/625935/08070346.pdf"},"iCentral"),"\n",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," algorithm. iCentral saves up on computation in two ways: it singles out the\nnodes whose centrality scores could have changed and then incrementally updates\nthe scores, making use of previously calculated data structures where\napplicable."),(0,r.kt)("h3",{id:"dynamic-katz-centrality"},"Dynamic Katz Centrality"),(0,r.kt)("p",null,"The online ",(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/dynamic-graph-analytics/katz-centrality-online-algorithm"},"Katz\ncentrality"),"\nimplementation results in a reduction of computations needed to update already\ncalculated results. The algorithm offers substantially large speedups compared\nto static algorithm runs."),(0,r.kt)("h3",{id:"dynamic-community-detection"},"Dynamic Community Detection"),(0,r.kt)("p",null,"To address the hidden relations among the nodes in the graph, especially those\nnot connected directly, ",(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/dynamic-graph-analytics/community-detection-online-algorithm"},"community\ndetection"),"\ncan provide help. This familiar graph analytics method is being solved in\nvarious different ways."),(0,r.kt)("h3",{id:"dynamic-node2vec"},"Dynamic Node2Vec"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/dynamic-graph-analytics/node2vec-online-algorithm"},"Dynamic\nNode2Vec")," is a\nrandom walk-based method that creates embeddings for every new node added to the\ngraph. For every new edge, there is a recalculation of probabilities (weights)\nthat are used in walk sampling."),(0,r.kt)("h3",{id:"dynamic-pagerank"},"Dynamic PageRank"),(0,r.kt)("p",null,"In the domain of estimating the importance of graph nodes,\n",(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/dynamic-graph-analytics/pagerank-online-algorithm"},"PageRank")," is\narguably the most popular tool. Today, the most popular search engine in the\nworld, Google, owes its popularity solely to this algorithm, developed in the\nearly days by its founders. The need for its dynamic implementation arose at the\nmoment when nodes and edges arrive in a short period of time."),(0,r.kt)("h2",{id:"machine-learning-graph-algorithms"},"Machine Learning Graph Algorithms"),(0,r.kt)("h3",{id:"graph-neural-networks-gnn"},"Graph Neural Networks (GNN)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/machine-learning-graph-analytics/gnn-algorithm"},"Graph Neural Networks\n(GNN)")," are deep\nlearning methods that can perform inference on data that is located in graphs."),(0,r.kt)("h3",{id:"graph-classification"},"Graph Classification"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/machine-learning-graph-analytics/graph-classification-algorithm"},"Graph\nclassification"),"\nallows you to analyze a graph as a whole. The structure and arrangement of nodes\ncan reveal some hidden features in a graph. The main technique is to design\nfeatures over the structure of the graph itself and then apply a classification\nalgorithm."),(0,r.kt)("h3",{id:"graph-clustering"},"Graph Clustering"),(0,r.kt)("p",null,"In graph theory, ",(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/machine-learning-graph-analytics/graph-clustering-algorithm"},"Graph\nclustering"),"\nis used to find subsets of similar nodes and group them together."),(0,r.kt)("h3",{id:"link-prediction"},"Link Prediction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/machine-learning-graph-analytics/link-prediction-algorithm"},"Link\nprediction"),"\nis the process of predicting the probability of connecting the two nodes that\nwere not previously connected in a graph. A wide range of different solutions\ncan be applied to such a problem."),(0,r.kt)("h3",{id:"node-classification"},"Node Classification"),(0,r.kt)("p",null,"Prediction can be done at the node level. The basis of such prediction systems\nare features extracted from graph entities. ",(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/machine-learning-graph-analytics/node-classification-algorithm"},"Node\nclassification"),"\nuses node properties that exist on some nodes and then predicts them for nodes\nthat don't have them."),(0,r.kt)("h3",{id:"node2vec"},"Node2Vec"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/machine-learning-graph-analytics/node2vec-algorithm"},"Node2Vec")," is based on\nrandom walks. The point of this method is to map nodes that are most likely to\nbe within a common random walk to the same place in n-dimensional space."),(0,r.kt)("h3",{id:"temporal-graph-networks-tgns"},"Temporal Graph Networks (TGNs)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/machine-learning-graph-analytics/temporal-graph-networks"},"Temporal Graph\nNetworks"),"\nare a type of graph neural network (GNN) for dynamic graphs. In recent years,\nGNNs have become very popular due to their ability to perform a wide variety of\nmachine learning tasks on graphs, such as link prediction, node classification,\nand so on."))}m.isMDXComponent=!0}}]);