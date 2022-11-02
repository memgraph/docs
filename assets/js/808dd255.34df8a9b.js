"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52925],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(a),g=n,d=c["".concat(s,".").concat(g)]||c[g]||h[g]||o;return a?r.createElement(d,i(i({ref:t},m),{},{components:a})):r.createElement(d,i({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},10592:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={id:"temporal-graph-networks",title:"Temporal Graph Networks",sidebar_label:"Temporal Graph Networks"},i=void 0,p={unversionedId:"algorithms/machine-learning-graph-analytics/temporal-graph-networks",id:"algorithms/machine-learning-graph-analytics/temporal-graph-networks",title:"Temporal Graph Networks",description:"Description",source:"@site/mage/algorithms/machine-learning-graph-analytics/temporal-graph-networks.md",sourceDirName:"algorithms/machine-learning-graph-analytics",slug:"/algorithms/machine-learning-graph-analytics/temporal-graph-networks",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/temporal-graph-networks",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/algorithms/machine-learning-graph-analytics/temporal-graph-networks.md",tags:[],version:"current",frontMatter:{id:"temporal-graph-networks",title:"Temporal Graph Networks",sidebar_label:"Temporal Graph Networks"},sidebar:"mage",previous:{title:"Graph Clustering",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/graph-clustering-algorithm"},next:{title:"Bioinformatics",permalink:"/docs/mage/use-cases/bioinformatics"}},s={},l=[{value:"Description",id:"description",level:2},{value:"Materials",id:"materials",level:2},{value:"Implementation",id:"implementation",level:3},{value:"Use cases",id:"use-cases",level:2}],m={toc:l};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"temporal_graph_networks (TGNs)")," are a type of ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://distill.pub/2021/gnn-intro/"},"graph neural network\n(GNN)"))," for dynamic graphs. In recent\nyears, ",(0,n.kt)("strong",{parentName:"p"},"GNNs")," have become very popular due to their ability to perform a wide\nvariety of machine learning tasks on graphs, such as link prediction, node\nclassification, and so on. This rise started with ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://arxiv.org/pdf/1609.02907.pdf"},"Graph convolutional\nnetworks (GCN)"))," introduced by ",(0,n.kt)("em",{parentName:"p"},"Kipf et\nal."),", followed by ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://arxiv.org/pdf/1706.02216.pdf"},"GraphSAGE")),"\nintroduced by ",(0,n.kt)("em",{parentName:"p"},"Hamilton et al."),", and recently a new method was presented which\nintroduces ",(0,n.kt)("strong",{parentName:"p"},"attention mechanism")," to graphs, known as ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://arxiv.org/pdf/1710.10903.pdf?ref=https://githubhelp.com"},"Graph attention\nnetworks\n(GAT)")),", by\n",(0,n.kt)("em",{parentName:"p"},"Veli\u010dkovi\u0107 et al"),". The last two methods offer a great possibility for inductive\nlearning. But they haven't been specifically developed to handle different\nevents occurring on graphs, such as ",(0,n.kt)("strong",{parentName:"p"},"node features updates"),", ",(0,n.kt)("strong",{parentName:"p"},"node\ndeletion"),", ",(0,n.kt)("strong",{parentName:"p"},"edge deletion")," and so on. These events happen regularly in\n",(0,n.kt)("strong",{parentName:"p"},"real-world")," examples such as the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://twitter.com/memgraphmage"},"Twitter\nnetwork")),", where users update their profile,\ndelete their profile or just unfollow another user."),(0,n.kt)("p",null,"In their work, Rossi et al. introduce ",(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2006.10637"},(0,n.kt)("strong",{parentName:"a"},"Temporal graph\nnetworks")),", an architecture for machine\nlearning on streamed graphs, a rapidly-growing ML use case."),(0,n.kt)("p",null,"There exist two main modalities of ",(0,n.kt)("strong",{parentName:"p"},"dynamic")," graphs. Discrete-time dynamic\ngraphs (DTDG) represent snapshots of static graphs taken at intervals in time.\nOn the other hand, continuous-time dynamic graphs (CTDG) are more general and\ncan be represented as timestamped lists of events which may include edge\naddition or deletion, node addition or deletion, and node or edge feature\ntransformations."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Temporal graph networks")," is a modality of ",(0,n.kt)("strong",{parentName:"p"},"CTDG")," that consists of temporal\n(timestamped) events. An ",(0,n.kt)("strong",{parentName:"p"},"interaction")," event represents a temporal edge\ncreation, and a ",(0,n.kt)("strong",{parentName:"p"},"nodewise")," event represents node creation or feature update."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"temporal-computation-graph",src:a(4431).Z,width:"1743",height:"1175"})),(0,n.kt)("h2",{id:"materials"},"Materials"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Firstly, read the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://arxiv.org/pdf/2006.10637.pdf"},"original paper")),"."),(0,n.kt)("li",{parentName:"ul"},"Afterward, you can also watch an explanation of ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://www.youtube.com/watch?v=0tw66aTfWaI&t=1759s&ab_channel=TheAIEpiphany"},"temporal graph\nnetworks")),"."),(0,n.kt)("li",{parentName:"ul"},"Be sure to check our explanation of ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://memgraph.com/blog/introduction-to-node-embedding"},"node\nembeddings"))," if you\nstill have a problem with understanding what node embeddings are.")),(0,n.kt)("p",null,"And finally, we prepared an example of ",(0,n.kt)("a",{parentName:"p",href:"https://hackmd.io/yy1mb9CVTYadmZz78iN5Jg"},(0,n.kt)("strong",{parentName:"a"},"link prediction")," on the Amazon\ndataset"),"."),(0,n.kt)("h3",{id:"implementation"},"Implementation"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/tgn.py"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Temporal_Graph_Networks-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white",alt:"Temporal Graph\nNetworks"}))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/mage/query-modules/python/temporal-graph-networks"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Temporal_Graph_Networks-Documentation-FCC624?style=for-the-badge&logo=python&logoColor=white",alt:"Temporal Graph\nNetworks"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Temporal graph networks")," are implemented as part of the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,n.kt)("strong",{parentName:"a"},"MAGE"))," project. Make sure to check it out\nin the link above. \u261d\ufe0f"),(0,n.kt)("h2",{id:"use-cases"},"Use cases"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/social-media"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Social_networks-Application-8A477F?style=for-the-badge",alt:"Social\nnetworks"}))),(0,n.kt)("p",null,"Temporal graph networks can be used to find communities in social networks like\n",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com"},"Twitter"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.facebook.com/"},"Facebook"),", and so\non. To find communities, we can use ",(0,n.kt)("strong",{parentName:"p"},"semi-supervised")," learning, and from\n",(0,n.kt)("strong",{parentName:"p"},"graph structure")," and ",(0,n.kt)("strong",{parentName:"p"},"available")," labels, ",(0,n.kt)("strong",{parentName:"p"},"TGN")," will try to predict new\n",(0,n.kt)("strong",{parentName:"p"},"labels")," and find communities that way."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/mage/algorithms/machine-learning-graph-analytics/link-prediction-algorithm"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Link_prediction-Application-8A477F?style=for-the-badge",alt:"Link\nprediction"}))),(0,n.kt)("p",null,"We can use temporal graph networks in the case of link prediction. In the link\nprediction task, ",(0,n.kt)("strong",{parentName:"p"},"TGN")," needs to correctly predict which edges won't appear -\n",(0,n.kt)("em",{parentName:"p"},"positive samples")," and which edges will not appear - ",(0,n.kt)("em",{parentName:"p"},"negative samples"),". We use\nthe edges that arrive in batches of a stream as a ",(0,n.kt)("em",{parentName:"p"},"positive sample"),", and we\nartificially create ",(0,n.kt)("em",{parentName:"p"},"negative samples"),". The ",(0,n.kt)("em",{parentName:"p"},"Negative samples")," consist of nodes\nthat are not linked. Now, all that is left is to fire up ",(0,n.kt)("strong",{parentName:"p"},"TGN")," in\n",(0,n.kt)("strong",{parentName:"p"},"self_supervised")," mode and it will do the work for you."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/mage/algorithms/machine-learning-graph-analytics/node-classification-algorithm"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Node_classification-Application-8A477F?style=for-the-badge",alt:"Node\nclassification"}))),(0,n.kt)("p",null,"Furthermore, we can use temporal graph networks for the task of node\nclassification. Again, with ",(0,n.kt)("strong",{parentName:"p"},"edge features"),", ",(0,n.kt)("strong",{parentName:"p"},"node features"),", and ",(0,n.kt)("strong",{parentName:"p"},"graph\nstructure"),", we will try to predict labels. In social networks, labels may\nindicate interests, beliefs, or demographics."))}h.isMDXComponent=!0},4431:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/temporal-computation-graph-d1862b386d2a0a9db60e66dc8eb43dbd.png"}}]);