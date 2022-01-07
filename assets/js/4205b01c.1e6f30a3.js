"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41029],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,h=m["".concat(s,".").concat(g)]||m[g]||u[g]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28518:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"graph-clustering-algorithm",title:"Graph Clustering",sidebar_label:"Graph Clustering"},s=void 0,c={unversionedId:"algorithms/machine-learning-graph-analytics/graph-clustering-algorithm",id:"algorithms/machine-learning-graph-analytics/graph-clustering-algorithm",title:"Graph Clustering",description:"Description",source:"@site/mage/algorithms/machine-learning-graph-analytics/graph-clustering-algorithm.md",sourceDirName:"algorithms/machine-learning-graph-analytics",slug:"/algorithms/machine-learning-graph-analytics/graph-clustering-algorithm",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/graph-clustering-algorithm",editUrl:"https://github.com/memgraph/docs/tree/master/mage/algorithms/machine-learning-graph-analytics/graph-clustering-algorithm.md",tags:[],version:"current",frontMatter:{id:"graph-clustering-algorithm",title:"Graph Clustering",sidebar_label:"Graph Clustering"},sidebar:"mage",previous:{title:"Node2Vec",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/node2vec-algorithm"},next:{title:"Bioinformatics",permalink:"/docs/mage/use-cases/bioinformatics"}},p=[{value:"Description",id:"description",children:[],level:2},{value:"Materials",id:"materials",children:[{value:"Implementation",id:"implementation",children:[],level:3}],level:2},{value:"Use cases",id:"use-cases",children:[],level:2}],u={toc:p};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Graph_theory"},"graph theory"),", ",(0,i.kt)("strong",{parentName:"p"},"graph\nclustering")," is used to find subsets of similar nodes and group them together.\nIt is part of ",(0,i.kt)("strong",{parentName:"p"},"graph analysis")," which has been attracting increasing attention\nin the recent years due the ubiquity of networks in the real world."),(0,i.kt)("p",null,"Graph clustering also known as network partitioning can be of two types: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"structure based")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"attribute based clustering"))),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"structure based")," can be further divided into two categories, namely\n",(0,i.kt)("strong",{parentName:"p"},"community based"),", and ",(0,i.kt)("strong",{parentName:"p"},"structurally equivalent clustering"),". "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Community-based")," methods aim to find dense subgraphs with high number of\nintra-cluster edges, and low number of inter-cluster edges. Examples are\nfollowing algorithms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ieeexplore.ieee.org/document/989507"},"A min-max cut algorithm for graph partitioning and data\nclustering")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/cond-mat/0308217"},"Finding and evaluating community structure in\nnetworks"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"community-clustering",src:n(74989).Z})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Structure based community clustering")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Structural equivalence")," clustering on the contrary, is designed to identify\nnodes with similar roles (like bridges and hubs). Example is ",(0,i.kt)("a",{parentName:"p",href:"http://web.cs.ucla.edu/~yzsun/classes/2014Spring_CS7280/Papers/Clustering/SCAN.pdf"},"SCAN: A Structural\nClustering Algorithm for\nNetworks")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"community-clustering",src:n(91345).Z})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Structure based structural equivalence clustering")),(0,i.kt)("p",null,"One example that can vary between ",(0,i.kt)("strong",{parentName:"p"},"community based")," and ",(0,i.kt)("strong",{parentName:"p"},"structurally\nequivalent clustering")," is ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1607.00653"},"Node2Vec"),". "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Attribute based")," methods utilize node labels, in addition to observed links,\nto cluster nodes like following algorithm: ",(0,i.kt)("a",{parentName:"p",href:"https://dl.acm.org/doi/10.14778/1687627.1687709"},"Graph clustering based on\nstructural/attribute\nsimilarities")),(0,i.kt)("h2",{id:"materials"},"Materials"),(0,i.kt)("h3",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/node2vec.py"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Node2Vec-Implementation-FB6E00?logo=github&style=for-the-badge",alt:"Node2Vec"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/mage/query-modules/python/node2vec"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Node2Vec-Documentation-FCC624?style=for-the-badge&logo=python&logoColor=white",alt:"Node2Vec"}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Node2Vec")," is implemented within project\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,i.kt)("strong",{parentName:"a"},"MAGE")),". Be sure to check it out in the\nlink above."),(0,i.kt)("p",null,"Also, finding communities in dynamic graphs is possible with ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/mage/query-modules/python/node2vec-online"},"Dynamic\nNode2Vec")),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/node2vec_online.py"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Node2Vec_Online-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white",alt:"Node2Vec\nOnline"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/mage/query-modules/python/node2vec-online"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Node2Vec_Online-Documentation-FCC624?style=for-the-badge&logo=python&logoColor=white",alt:"Node2Vec\nOnline"}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dynamic Node2Vec")," is implemented within the project\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,i.kt)("strong",{parentName:"a"},"MAGE")),". Be sure to check it out in the\nlink above."),(0,i.kt)("h2",{id:"use-cases"},"Use cases"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/mage/applications/social-media-application"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Social_networks-Application-8A477F?style=for-the-badge",alt:"Social\nnetworks"}))),(0,i.kt)("p",null,"Biggest use case for graph clustering is in social networks. There communities\ncan be explored, hubs found and many more."))}m.isMDXComponent=!0},74989:function(e,t,n){t.Z=n.p+"assets/images/node2vec-community-based-a37e787ad92a97cd941a3284c8269c1c.png"},91345:function(e,t,n){t.Z=n.p+"assets/images/node2vec-structural-equivalence-04e82ea60fb9c9bcb28215125c3122a7.png"}}]);