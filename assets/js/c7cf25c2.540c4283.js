"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30329],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),g=i,u=m["".concat(l,".").concat(g)]||m[g]||h[g]||n;return a?r.createElement(u,o(o({ref:t},p),{},{components:a})):r.createElement(u,o({ref:t},p))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},69400:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(87462),i=(a(67294),a(3905));const n={id:"graph-classification-algorithm",title:"Graph Classification",sidebar_label:"Graph Classification"},o=void 0,s={unversionedId:"algorithms/machine-learning-graph-analytics/graph-classification-algorithm",id:"algorithms/machine-learning-graph-analytics/graph-classification-algorithm",title:"Graph Classification",description:"Description",source:"@site/mage/algorithms/machine-learning-graph-analytics/graph-classification-algorithm.md",sourceDirName:"algorithms/machine-learning-graph-analytics",slug:"/algorithms/machine-learning-graph-analytics/graph-classification-algorithm",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/graph-classification-algorithm",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/algorithms/machine-learning-graph-analytics/graph-classification-algorithm.md",tags:[],version:"current",frontMatter:{id:"graph-classification-algorithm",title:"Graph Classification",sidebar_label:"Graph Classification"},sidebar:"mage",previous:{title:"K-means Clustering",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/k-means-clustering-algorithm"},next:{title:"Link Prediction",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/link-prediction-algorithm"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Materials",id:"materials",level:2},{value:"Implementation",id:"implementation",level:3},{value:"Use cases",id:"use-cases",level:2}],p={toc:c};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Let\u2019s look at one useful tool that allows you to analyze a graph as a whole. ",(0,i.kt)("a",{parentName:"p",href:"https://paperswithcode.com/task/graph-classification"},"Graph classification")," enables this. The structure and arrangement of nodes can reveal some hidden features in a graph."),(0,i.kt)("p",null,"So, for example, fraudsters who have a common pattern of behavior can be detected by searching that pattern in the graph of their connections."),(0,i.kt)("p",null,"To make this possible, the main technique is to design features over the structure of the graph itself and then apply a classification algorithm. This can be achieved in several ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Graphlets"},"Graphlet features")," - the number of a particular graphlet indicates a single element of the feature vector"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.jmlr.org/papers/volume12/shervashidze11a/shervashidze11a.pdf"},"Weisfeiler-Lehman kernel")," - color refinement, teaching colors to the neighborhood until convergence is achieved"),(0,i.kt)("li",{parentName:"ol"},"Graph Deep Learning - designing a network that can extract a deeper feature depending on the structure of the graph")),(0,i.kt)("img",{src:"https://i.imgur.com/u85VSOM.png",alt:"drawing"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Probability of different labels on graph classification for molecular structures")),(0,i.kt)("h2",{id:"materials"},"Materials"),(0,i.kt)("h3",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Not_implemented-EB3434?style=for-the-badge&logo=github&logoColor=white",alt:"Graph Classification"})),(0,i.kt)("p",null,"Unfortunately, ",(0,i.kt)("strong",{parentName:"p"},"Graph Classification")," is yet not implemented within the project ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,i.kt)("strong",{parentName:"a"},"MAGE")),". Be sure to raise the issue on the GitHub repo and ping us to speed up the development. \u261d\ufe0f"),(0,i.kt)("h2",{id:"use-cases"},"Use cases"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/bioinformatics"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Bioinformatics-Application-8A477F?style=for-the-badge",alt:"Bioinformatics"}))),(0,i.kt)("p",null,"Having only a structure model of one element in research can prevent researchers to spent many hours investigating and observing the properties of these structures. Based on a graph structure, properties such as whether is something is toxic or not can be determined just from the model."))}h.isMDXComponent=!0}}]);