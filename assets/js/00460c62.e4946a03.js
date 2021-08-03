"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98912],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),h=o,f=m["".concat(l,".").concat(h)]||m[h]||u[h]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80254:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],p={id:"upcoming-features",title:"Upcoming features",sidebar_label:"Upcoming features"},l=void 0,s={unversionedId:"upcoming-features",id:"version-1.3.0/upcoming-features",isDocsHomePage:!1,title:"Upcoming features",description:"This chapter describes some of the planned features, that we at Memgraph are",source:"@site/memgraph_versioned_docs/version-1.3.0/upcoming-features.md",sourceDirName:".",slug:"/upcoming-features",permalink:"/memgraph/1.3.0/upcoming-features",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/upcoming-features.md",version:"1.3.0",frontMatter:{id:"upcoming-features",title:"Upcoming features",sidebar_label:"Upcoming features"},sidebar:"version-1.3.0/memgraph",previous:{title:"Replication",permalink:"/memgraph/1.3.0/concepts/replication"},next:{title:"Changelog",permalink:"/memgraph/1.3.0/changelog"}},c=[{value:"Performance Improvements",id:"performance-improvements",children:[]},{value:"Improving openCypher Support",id:"improving-opencypher-support",children:[{value:"Functions",id:"functions",children:[]},{value:"List Comprehensions",id:"list-comprehensions",children:[]}]}],u={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This chapter describes some of the planned features, that we at Memgraph are\nworking on."),(0,a.kt)("h2",{id:"performance-improvements"},"Performance Improvements"),(0,a.kt)("p",null,"Excellent database performance is one of Memgraph's long-standing goals. We\nwill be continually working on improving the performance. This includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"query compilation;"),(0,a.kt)("li",{parentName:"ul"},"query execution;"),(0,a.kt)("li",{parentName:"ul"},"core engine performance;"),(0,a.kt)("li",{parentName:"ul"},"algorithmic improvements (i.e. bidirectional breadth-first search);"),(0,a.kt)("li",{parentName:"ul"},"memory usage and"),(0,a.kt)("li",{parentName:"ul"},"other improvements.")),(0,a.kt)("h2",{id:"improving-opencypher-support"},"Improving openCypher Support"),(0,a.kt)("p",null,"Although we have implemented the most common features of the openCypher query\nlanguage, there are other useful features we are still working on."),(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("p",null,"Memgraph's openCypher implementation supports the most useful functions, but\nthere are more which openCypher provides. Some are related to not yet\nimplemented features like paths, while some may use the features Memgraph\nalready supports. Out of the remaining functions, some are more useful than\nothers and as such they will be supported sooner."),(0,a.kt)("h3",{id:"list-comprehensions"},"List Comprehensions"),(0,a.kt)("p",null,"List comprehensions are similar to the supported ",(0,a.kt)("inlineCode",{parentName:"p"},"collect")," function, which\ngenerates a list out of multiple values. But unlike ",(0,a.kt)("inlineCode",{parentName:"p"},"collect"),", list\ncomprehensions offer a powerful mechanism for filtering or otherwise\nmanipulating values which are collected into a list."),(0,a.kt)("p",null,"For example, getting numbers between 0 and 10 and squaring them:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"RETURN [x IN range(0, 10) | x^2] AS squares\n")),(0,a.kt)("p",null,"Another example, to collect ",(0,a.kt)("inlineCode",{parentName:"p"},":Person")," nodes with ",(0,a.kt)("inlineCode",{parentName:"p"},"age")," less than 42, without\nlist comprehensions can be achieved with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person) WHERE n.age < 42 RETURN collect(n)\n")),(0,a.kt)("p",null,"Using list comprehensions, the same can be done with the query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person) RETURN [n IN collect(n) WHERE n.age < 42]\n")))}m.isMDXComponent=!0}}]);