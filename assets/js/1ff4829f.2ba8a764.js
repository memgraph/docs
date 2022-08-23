"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21197],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=n,g=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return a?r.createElement(g,i(i({ref:t},m),{},{components:a})):r.createElement(g,i({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},46966:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"overview",title:"Exploring datasets with graph analytics",slug:"/tutorials/exploring-datasets"},s=void 0,p={unversionedId:"tutorials/exploring-datasets/overview",id:"tutorials/exploring-datasets/overview",title:"Exploring datasets with graph analytics",description:"The tutorials that focus on exploring datasets want to showcase how to use",source:"@site/docs/tutorials/exploring-datasets/overview.md",sourceDirName:"tutorials/exploring-datasets",slug:"/tutorials/exploring-datasets",permalink:"/docs/memgraph/next/tutorials/exploring-datasets",editUrl:"https://github.com/memgraph/docs/tree/master/docs/tutorials/exploring-datasets/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Exploring datasets with graph analytics",slug:"/tutorials/exploring-datasets"},sidebar:"memgraph",previous:{title:"Migrate from RDBMS to Memgraph",permalink:"/docs/memgraph/next/tutorials/migrate-relational-database"},next:{title:"Analyzing TED Talks",permalink:"/docs/memgraph/next/tutorials/analyzing-ted-talks"}},m={},u=[],c={toc:u};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The tutorials that focus on exploring datasets want to showcase how to use\nMemgraph on that particular dataset using Cypher queries. We encourage all\nMemgraph users to go through at least one of the tutorials to get familiar with\nMemgraph."),(0,o.kt)("p",null,"You can explore the datasets in two ways. If you just want to take a better look\nat the data and the data model, and try out a few queries, open ",(0,o.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/sandboxes/"},"Memgraph\nPlayground")," and continue with the\ntutorials there. Note that you will not be able to execute ",(0,o.kt)("inlineCode",{parentName:"p"},"write")," operations."),(0,o.kt)("p",null,"On the other hand, if you would like to add changes to the dataset, download the\n",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/download#memgraph-platform"},"Memgraph Platform"),". Once you\nhave it up and running, open Memgraph Lab web application within the browser on\n",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},(0,o.kt)("inlineCode",{parentName:"a"},"localhost:3000"))," and navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Datasets")," in the\nsidebar. From there, choose the dataset that seems interesting to you and\ncontinue with the tutorial. "),(0,o.kt)("p",null,"You can also run an instance in ",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph-cloud/"},"Memgraph\nCloud"),". Once you ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.memgraph.com/"},"sing\nup"),", create a new project. From the project you can\nconnect to Memgraph Lab web application and navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Datasets")," in the\nsidebar to choose the preferred dataset."),(0,o.kt)("p",null,"So far we have covered the following topics with basic tutorials:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/tutorials/analyzing-ted-talks"},"Analyzing TED Talks"))," - ",(0,o.kt)("a",{parentName:"li",href:"https://playground.memgraph.com/sandbox/ted-talks"},"Try it on\nPlayground!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/tutorials/backpacking-through-europe"},"Backpacking Through Europe"))," - ",(0,o.kt)("a",{parentName:"li",href:"https://playground.memgraph.com/sandbox/europe-backpacking"},"Try it on\nPlayground!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/tutorials/exploring-the-european-road-network"},"Exploring the European Road\nNetwork"))," - ",(0,o.kt)("a",{parentName:"li",href:"https://playground.memgraph.com/sandbox/europe-roads"},"Try it on\nPlayground!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/tutorials/football-transfers"},"Football Transfers"))," - ",(0,o.kt)("a",{parentName:"li",href:"https://playground.memgraph.com/sandbox/football-transfers"},"Try it on\nPlayground!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/tutorials/got-deaths"},"Game of Thrones deaths"))," - ",(0,o.kt)("a",{parentName:"li",href:"https://playground.memgraph.com/sandbox/game-of-thrones-deaths"},"Try it on\nPlayground!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/tutorials/graphing-the-premier-league"},"Graphing the Premier League"))," - ",(0,o.kt)("a",{parentName:"li",href:"https://playground.memgraph.com/sandbox/football-premier-league"},"Try it on\nPlayground!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/tutorials/marvel-universe"},"Marvel Comic Universe Social Network"))," - ",(0,o.kt)("a",{parentName:"li",href:"https://playground.memgraph.com/sandbox/marvel-comics"},"Try it on\nPlayground!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/tutorials/movie-recommendation"},"Movie Recommendation System"))," - ",(0,o.kt)("a",{parentName:"li",href:"https://playground.memgraph.com/sandbox/movielens"},"Try it on\nPlayground!"))))}h.isMDXComponent=!0}}]);