"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69665],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(a),d=n,g=s["".concat(p,".").concat(d)]||s[d]||c[d]||o;return a?r.createElement(g,i(i({ref:t},m),{},{components:a})):r.createElement(g,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},40178:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return s}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"getting-started",title:"Getting started",sidebar_label:"Getting started",slug:"/getting-started"},p=void 0,u={unversionedId:"getting-started",id:"version-1.6.1/getting-started",isDocsHomePage:!1,title:"Getting started",description:"* Download and install",source:"@site/memgraph_versioned_docs/version-1.6.1/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/memgraph/1.6.1/getting-started",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.6.1/getting-started.md",tags:[],version:"1.6.1",frontMatter:{id:"getting-started",title:"Getting started",sidebar_label:"Getting started",slug:"/getting-started"},sidebar:"version-1.6.1/memgraph",next:{title:"Install Memgraph overview",permalink:"/docs/memgraph/1.6.1/installation"}},m=[{value:"Online playground (sandbox)",id:"online-playground-sandbox",children:[],level:3},{value:"Step by step guide",id:"step-by-step-guide",children:[],level:3},{value:"Practical tutorial",id:"practical-tutorial",children:[],level:3},{value:"Connect to Memgraph Cloud",id:"connect-to-memgraph-cloud",children:[],level:3},{value:"Run an example streaming application",id:"run-an-example-streaming-application",children:[],level:3},{value:"Video courses",id:"video-courses",children:[],level:3},{value:"Tutorial for your programming language",id:"tutorial-for-your-programming-language",children:[],level:3}],c={toc:m};function s(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/memgraph/installation"},"Download and install")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/memgraph/import-data"},"Import data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/memgraph/database-functionalities"},"Learn concepts step by step")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/memgraph/tutorials"},"Practical tutorial")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/memgraph/changelog"},"Stay updated"))),(0,o.kt)("h3",{id:"online-playground-sandbox"},"Online playground (sandbox)"),(0,o.kt)("p",null,"If you're interested in trying out Memgraph from the comfort of your browser, you can do so on ",(0,o.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Memgraph Playground")," or by visiting the ",(0,o.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher manual"),"."),(0,o.kt)("h3",{id:"step-by-step-guide"},"Step by step guide"),(0,o.kt)("p",null,"If you enjoy learning concepts in small chunks before applying them in practice, our ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/tutorials"},"step by step guide")," is the best place to start."),(0,o.kt)("h3",{id:"practical-tutorial"},"Practical tutorial"),(0,o.kt)("p",null,"Learning by doing is our mantra. In this ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/tutorials/analyzing-ted-talks"},"tutorial"),", you'll explore a simple TED-talks dataset from scratch. The tips you'll learn in the tutorial will help you build any graph application."),(0,o.kt)("h3",{id:"connect-to-memgraph-cloud"},"Connect to Memgraph Cloud"),(0,o.kt)("p",null,"Learn how to ",(0,o.kt)("a",{parentName:"p",href:"/connect-to-memgraph"},"connect your application")," to the Memgraph Cloud. Let us manage the configuration and guarantee it's set up correctly."),(0,o.kt)("h3",{id:"run-an-example-streaming-application"},"Run an example streaming application"),(0,o.kt)("p",null,"We've built an example streaming application to get you started quickly. Pull the code from our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/example-streaming-app"},"GitHub repository")," and get started."),(0,o.kt)("h3",{id:"video-courses"},"Video courses"),(0,o.kt)("p",null,"Some people enjoy learning by watching audio-visual content. You can find the best materials related to graphs and graphs analytics in our ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCZ3HOJvHGxtQ_JHxOselBYg/playlists"},"list of recommended content"),", most of which is free."),(0,o.kt)("h3",{id:"tutorial-for-your-programming-language"},"Tutorial for your programming language"),(0,o.kt)("p",null,"Build an application with Memgraph from our list of supported languages and frameworks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/1.6.1/connect-to-memgraph/methods/building-applications/python"},"Python")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/1.6.1/connect-to-memgraph/methods/building-applications/rust"},"Rust")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/1.6.1/connect-to-memgraph/methods/building-applications/c-sharp"},"C#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/1.6.1/connect-to-memgraph/methods/building-applications/java"},"Java")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/1.6.1/connect-to-memgraph/methods/building-applications/go"},"Go")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/1.6.1/connect-to-memgraph/methods/building-applications/javascript"},"JavaScript")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/1.6.1/connect-to-memgraph/methods/building-applications/php"},"PHP"))))}s.isMDXComponent=!0}}]);