"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27364],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),g=r,d=c["".concat(l,".").concat(g)]||c[g]||h[g]||i;return a?n.createElement(d,o(o({ref:t},m),{},{components:a})):n.createElement(d,o({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},96331:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={id:"gnn-algorithm",title:"Graph Neural Networks (GNN)",sidebar_label:"Graph Neural Networks (GNN)"},o=void 0,s={unversionedId:"algorithms/machine-learning-graph-analytics/gnn-algorithm",id:"algorithms/machine-learning-graph-analytics/gnn-algorithm",title:"Graph Neural Networks (GNN)",description:"Description",source:"@site/mage/algorithms/machine-learning-graph-analytics/gnn-algorithm.md",sourceDirName:"algorithms/machine-learning-graph-analytics",slug:"/algorithms/machine-learning-graph-analytics/gnn-algorithm",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/gnn-algorithm",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/algorithms/machine-learning-graph-analytics/gnn-algorithm.md",tags:[],version:"current",frontMatter:{id:"gnn-algorithm",title:"Graph Neural Networks (GNN)",sidebar_label:"Graph Neural Networks (GNN)"},sidebar:"mage",previous:{title:"Dynamic PageRank",permalink:"/docs/mage/algorithms/dynamic-graph-analytics/pagerank-online-algorithm"},next:{title:"K-means Clustering",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/k-means-clustering-algorithm"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Materials",id:"materials",level:2},{value:"Implementation",id:"implementation",level:3},{value:"Use cases",id:"use-cases",level:2}],m={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Machine_learning"},"Machine learning")," methods are based on data. Because of everyday encounters with data that are audio, visual, or textual such as images, video, text, and speech - the machine learning methods that study such structures are making tremendous progress today."),(0,r.kt)("p",null,"Connection-based data can be displayed as graphs. Such structures are much ",(0,r.kt)("a",{parentName:"p",href:"https://towardsdatascience.com/machine-learning-on-graphs-part-1-9ec3b0bd6abc"},"more complex than images")," and text due to multiple levels of connectivity in the structure itself which is completely irregular and unpredictable. With the development of neural networks organized in the structure of graphs, the field of ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2005.03675"},"graph machine learning")," is improving."),(0,r.kt)("p",null,"Applying the same principle used, for example, in images (convolutions) to graphs would be a mistake. Such principles are based on grid structures, while on graphs of arbitrary sizes, complex topologies, and random connections applying the same strategy would result in a disaster."),(0,r.kt)("p",null,"All convolutional network graph methods are based on ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Belief_propagation"},"message propagation"),". Such messages carry information through a network composed of nodes and edges of the graph, while each node entity carries its computational unit. The task of each node is to process the information and pass it on to the neighbors."),(0,r.kt)("p",null,"Various possibilities have been developed that enable machine learning with graph neural networks. Starting with the graph of convolutional networks published in \u201c",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1312.6203"},"Spectral Networks and Deep Locally Connected Networks on Graphs"),"\u201d (Bruna et al, 2014)."),(0,r.kt)("p",null,"Today's most popular models are ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1706.02216"},"GraphSAGE"),", ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1609.02907"},"Graph Convolutional Networks (GCN)"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1710.10903"},"Graph Attention Networks (GAT)")," and ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2006.10637"},"Temporal Graph Networks (TGN)")," - important for dynamic networks."),(0,r.kt)("img",{src:"https://i.imgur.com/nUI6x82.png",alt:"drawing"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The above network shows the computation graph of message propagation in GNNs.")),(0,r.kt)("h2",{id:"materials"},"Materials"),(0,r.kt)("h3",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GNNs")," are implemented within the project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,r.kt)("strong",{parentName:"a"},"MAGE")),". There are multiple options you can choose from."),(0,r.kt)("p",null,"If you are dealing with ",(0,r.kt)("strong",{parentName:"p"},"dynamic")," graphs, check out ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/mage/query-modules/python/temporal-graph-networks"},"Temporal graph newtorks")),". You can use Temporal graph networks for ",(0,r.kt)("a",{parentName:"p",href:"/mage/algorithms/machine-learning-graph-analytics/link-prediction-algorithm"},"link prediction")," or ",(0,r.kt)("a",{parentName:"p",href:"/mage/algorithms/machine-learning-graph-analytics/node-classification-algorithm"},"node classification")," task.\nCheck our implementation and documentation \ud83d\udc47 "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/tgn.py"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Temporal_Graph_Networks-Implementation-FB6E00?logo=github&style=for-the-badge",alt:"Temporal graph networks"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mage/query-modules/python/temporal-graph-networks"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Temporal_Graph_Networks-Documentation-FCC624?style=for-the-badge&logo=python&logoColor=white",alt:"Temporal graph networks"}))),(0,r.kt)("p",null,"If you are dealing with ",(0,r.kt)("strong",{parentName:"p"},"static")," graphs you can choose between ",(0,r.kt)("strong",{parentName:"p"},"two")," different modules, depending on the task."),(0,r.kt)("p",null,"Check implementation and documentation for ",(0,r.kt)("a",{parentName:"p",href:"/mage/algorithms/machine-learning-graph-analytics/link-prediction-algorithm"},"link prediction")," \ud83d\udc47 "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/link_prediction.py"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Link_Prediction-Implementation-FB6E00?logo=github&style=for-the-badge",alt:"Link prediction"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mage/query-modules/python/link-prediction-with-gnn"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Link_Prediction-Documentation-FCC624?style=for-the-badge&logo=python&logoColor=white",alt:"Link prediction"}))),(0,r.kt)("p",null,"Check implementation and documentation for ",(0,r.kt)("a",{parentName:"p",href:"/mage/algorithms/machine-learning-graph-analytics/node-classification-algorithm"},"node classification")," \ud83d\udc47 "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/node_classification.py"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Node_Classification-Implementation-FB6E00?logo=github&style=for-the-badge",alt:"Node classification"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mage/query-modules/python/node-classification-with-gnn"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Node_Classification-Documentation-FCC624?style=for-the-badge&logo=python&logoColor=white",alt:"Node classification"}))),(0,r.kt)("h2",{id:"use-cases"},"Use cases"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/bioinformatics"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Bioinformatics-Application-8A477F?style=for-the-badge",alt:"Bioinformatics"}))),(0,r.kt)("p",null,"Having only a structure model of one element in research can prevent researchers to spent many hours investigating and observing the properties of these structures. Based on a graph structure, properties such as whether is something is toxic or not can be determined just from the model."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/social-media"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Social_Networks-Application-8A477F?style=for-the-badge",alt:"Social Networks"}))),(0,r.kt)("p",null,"One of the most obvious tasks of ",(0,r.kt)("strong",{parentName:"p"},"Graph Neural Networks")," is predicting new friendships/followers on social networks, finding communities and hubs. This concept is based on sharing the same entities on the graph, whether they are friends, interests, or things you follow."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/knowledge-graph"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Knowledge_graphs-Application-8A477F?style=for-the-badge",alt:"Knowledge graph"}))),(0,r.kt)("p",null,"Knowledge graphs can be both complex and extremely large. Exploring and splitting the graph into logical units is a difficult task. Therefore, using ",(0,r.kt)("strong",{parentName:"p"},"Graph neural networks")," and mapping the vectors, this way it would enable easier domain exploration since each knowledge node would be mapped to the same place in vector-space."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/finance"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Finance-Application-8A477F?style=for-the-badge",alt:"Finance"}))),(0,r.kt)("p",null,"Classifying nodes based on previously labeled data can help investigators to find out fraudsters in finance systems. Since fraudsters can often act very quickly with their tricks, applying a streaming-based node classification can help up building a real-time fraud detection system."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/computer-security"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Computer_Security-Application-8A477F?style=for-the-badge",alt:"Computer Security"}))),(0,r.kt)("p",null,"Fraudsters usually behave differently than common users. This way a system can be observed and once an unusual behavior is spotted it can immediately be revealed. This can help build a bulletproof computer security system."))}h.isMDXComponent=!0}}]);