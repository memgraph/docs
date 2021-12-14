"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30329],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,g=m["".concat(s,".").concat(u)]||m[u]||h[u]||i;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},69400:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:"graph-classification-algorithm",title:"Graph Classification",sidebar_label:"Graph Classification"},s=void 0,c={unversionedId:"algorithms/machine-learning-graph-analytics/graph-classification-algorithm",id:"algorithms/machine-learning-graph-analytics/graph-classification-algorithm",isDocsHomePage:!1,title:"Graph Classification",description:"Description",source:"@site/mage/algorithms/machine-learning-graph-analytics/graph-classification-algorithm.md",sourceDirName:"algorithms/machine-learning-graph-analytics",slug:"/algorithms/machine-learning-graph-analytics/graph-classification-algorithm",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/graph-classification-algorithm",editUrl:"https://github.com/memgraph/docs/tree/master/mage/algorithms/machine-learning-graph-analytics/graph-classification-algorithm.md",tags:[],version:"current",frontMatter:{id:"graph-classification-algorithm",title:"Graph Classification",sidebar_label:"Graph Classification"},sidebar:"mage",previous:{title:"Graph Neural Networks (GNN)",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/gnn-algorithm"},next:{title:"Link Prediction",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/link-prediction-algorithm"}},p=[{value:"Description",id:"description",children:[],level:2},{value:"Materials",id:"materials",children:[{value:"Implementation",id:"implementation",children:[],level:3}],level:2},{value:"Use cases",id:"use-cases",children:[],level:2}],h={toc:p};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Let\u2019s look at one useful tool that allows you to analyze a graph as a whole. ",(0,i.kt)("a",{parentName:"p",href:"https://paperswithcode.com/task/graph-classification"},"Graph classification")," enables this. The structure and arrangement of nodes can reveal some hidden features in a graph."),(0,i.kt)("p",null,"So, for example, fraudsters who have a common pattern of behavior can be detected by searching that pattern in the graph of their connections."),(0,i.kt)("p",null,"To make this possible, the main technique is to design features over the structure of the graph itself and then apply a classification algorithm. This can be achieved in several ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Graphlets"},"Graphlet features")," - the number of a particular graphlet indicates a single element of the feature vector"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.jmlr.org/papers/volume12/shervashidze11a/shervashidze11a.pdf"},"Weisfeiler-Lehman kernel")," - color refinement, teaching colors to the neighborhood until convergence is achieved"),(0,i.kt)("li",{parentName:"ol"},"Graph Deep Learning - designing a network that can extract a deeper feature depending on the structure of the graph")),(0,i.kt)("img",{src:"https://i.imgur.com/u85VSOM.png",alt:"drawing"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Probability of different labels on graph classification for molecular structures")),(0,i.kt)("h2",{id:"materials"},"Materials"),(0,i.kt)("h3",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Not_implemented-EB3434?style=for-the-badge&logo=github&logoColor=white",alt:"Graph Classification"})),(0,i.kt)("p",null,"Unfortunately, ",(0,i.kt)("strong",{parentName:"p"},"Graph Classification")," is yet not implemented within the project ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,i.kt)("strong",{parentName:"a"},"MAGE")),". Be sure to raise the issue on the GitHub repo and ping us to speed up the development. \u261d\ufe0f"),(0,i.kt)("h2",{id:"use-cases"},"Use cases"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/mage/applications/bioinformatics-application"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Bioinformatics-Application-8A477F?style=for-the-badge",alt:"Bioinformatics"}))),(0,i.kt)("p",null,"Having only a structure model of one element in research can prevent researchers to spent many hours investigating and observing the properties of these structures. Based on a graph structure, properties such as whether is something is toxic or not can be determined just from the model."))}m.isMDXComponent=!0}}]);