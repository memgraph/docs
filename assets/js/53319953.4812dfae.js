"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23073],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return c}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(r),c=n,g=h["".concat(l,".").concat(c)]||h[c]||m[c]||o;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},30126:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"overview",title:"Exploring datasets with graph analytics",slug:"/tutorials/exploring-datasets"},l=void 0,p={unversionedId:"tutorials/exploring-datasets/overview",id:"version-2.3.0/tutorials/exploring-datasets/overview",title:"Exploring datasets with graph analytics",description:"The tutorials that focus on exploring datasets want to showcase how to use",source:"@site/memgraph_versioned_docs/version-2.3.0/tutorials/exploring-datasets/overview.md",sourceDirName:"tutorials/exploring-datasets",slug:"/tutorials/exploring-datasets",permalink:"/docs/memgraph/tutorials/exploring-datasets",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.0/tutorials/exploring-datasets/overview.md",tags:[],version:"2.3.0",frontMatter:{id:"overview",title:"Exploring datasets with graph analytics",slug:"/tutorials/exploring-datasets"},sidebar:"memgraph",previous:{title:"First steps with Memgraph",permalink:"/docs/memgraph/tutorials/first-steps-with-memgraph"},next:{title:"Analyzing TED Talks",permalink:"/docs/memgraph/tutorials/analyzing-ted-talks"}},u={},m=[],h={toc:m};function c(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The tutorials that focus on exploring datasets want to showcase how to use\nMemgraph on that particular dataset using Cypher queries. We encourage all\nMemgraph users to go through at least one of the tutorials to get familiar with\nMemgraph."),(0,o.kt)("p",null,"You can explore the datasets in two ways. If you just want to take a better look\nat the data and the data model, and try out a few queries, open ",(0,o.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/sandboxes/"},"Memgraph\nPlayground")," and continue with the\ntutorials there. Note that you will not be able to execute ",(0,o.kt)("inlineCode",{parentName:"p"},"write")," operations."),(0,o.kt)("p",null,"On the other hand, if you would like to add changes to the dataset, download the\n",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/download#memgraph-platform"},"Memgraph Platform"),". Once you\nhave it up and running, open Memgraph Lab web application within the browser on\n",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},(0,o.kt)("inlineCode",{parentName:"a"},"localhost:3000"))," and navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Datasets")," in the\nsidebar. From there, choose the dataset that seems interesting to you and\ncontinue with the tutorial."),(0,o.kt)("p",null,"So far we have covered the following topics with basic tutorials:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/tutorials/analyzing-ted-talks"},"Analyzing TED Talks"))," - ",(0,o.kt)("a",{parentName:"li",href:"https://playground.memgraph.com/sandbox/ted-talks"},"Try it on\nPlayground!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/tutorials/backpacking-through-europe"},"Backpacking Through Europe"))," - ",(0,o.kt)("a",{parentName:"li",href:"https://playground.memgraph.com/sandbox/europe-backpacking"},"Try it on\nPlayground!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/tutorials/exploring-the-european-road-network"},"Exploring the European Road\nNetwork"))," - ",(0,o.kt)("a",{parentName:"li",href:"https://playground.memgraph.com/sandbox/europe-roads"},"Try it on\nPlayground!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/tutorials/football-transfers"},"Football Transfers"))," - ",(0,o.kt)("a",{parentName:"li",href:"https://playground.memgraph.com/sandbox/football-transfers"},"Try it on\nPlayground!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/tutorials/got-deaths"},"Game of Thrones deaths"))," - ",(0,o.kt)("a",{parentName:"li",href:"https://playground.memgraph.com/sandbox/game-of-thrones-deaths"},"Try it on\nPlayground!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/tutorials/graphing-the-premier-league"},"Graphing the Premier League"))," - ",(0,o.kt)("a",{parentName:"li",href:"https://playground.memgraph.com/sandbox/football-premier-league"},"Try it on\nPlayground!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/tutorials/marvel-universe"},"Marvel Comic Universe Social Network"))," - ",(0,o.kt)("a",{parentName:"li",href:"https://playground.memgraph.com/sandbox/marvel-comics"},"Try it on\nPlayground!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/tutorials/movie-recommendation"},"Movie Recommendation System")))))}c.isMDXComponent=!0}}]);