"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88828],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9879:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const a={id:"differences",title:"Differences in Cypher implementations",sidebar_label:"Differences in Cypher implementations",slug:"/differences"},o=void 0,s={unversionedId:"differences",id:"differences",title:"Differences in Cypher implementations",description:"Although we try to implement the openCypher query",source:"@site/cypher-manual/differences-in-cypher-implementations.md",sourceDirName:".",slug:"/differences",permalink:"/docs/cypher-manual/differences",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/differences-in-cypher-implementations.md",tags:[],version:"current",frontMatter:{id:"differences",title:"Differences in Cypher implementations",sidebar_label:"Differences in Cypher implementations",slug:"/differences"},sidebar:"cypher_manual",previous:{title:"Cypher query language",permalink:"/docs/cypher-manual/cypher-query-language"},next:{title:"Working with Memgraph",permalink:"/docs/cypher-manual/working-with-memgraph"}},l={},p=[{value:"Unicode codepoints in string literals",id:"unicode-codepoints-in-string-literals",level:2},{value:"Difference from Neo4j&#39;s Cypher implementation",id:"difference-from-neo4js-cypher-implementation",level:2},{value:"Unsupported constructs",id:"unsupported-constructs",level:3},{value:"Unsupported functions",id:"unsupported-functions",level:3},{value:"Patterns in expressions",id:"patterns-in-expressions",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Although we try to implement the ",(0,i.kt)("a",{parentName:"p",href:"https://www.opencypher.org/"},"openCypher")," query\nlanguage as close to the language reference as possible, we had to make some\nchanges to enhance the user experience."),(0,i.kt)("h2",{id:"unicode-codepoints-in-string-literals"},"Unicode codepoints in string literals"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"\\u")," followed by 4 hex digits in string literals for UTF-16 codepoint and\n",(0,i.kt)("inlineCode",{parentName:"p"},"\\U")," with 8 hex digits for UTF-32 codepoint in Memgraph."),(0,i.kt)("h2",{id:"difference-from-neo4js-cypher-implementation"},"Difference from Neo4j's Cypher implementation"),(0,i.kt)("p",null,"The openCypher initiative stems from Neo4j's Cypher query language. Following is\na list of the most important differences between Neo's Cypher and Memgraph's\nopenCypher implementation for users already familiar with Neo4j. Other\ndifferences might not be documented here (especially subtle semantic ones)."),(0,i.kt)("h3",{id:"unsupported-constructs"},"Unsupported constructs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Stored procedures."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shortestPath")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"allShortestPaths")," functions. They can be expressed using\nMemgraph's depth-first search and all shortest paths expansion syntax. Among\nMemgraph's ",(0,i.kt)("a",{parentName:"li",href:"/memgraph/reference-guide/built-in-graph-algorithms"},"built in\nalgorithms")," are also\nbreadth-first search and weighted shortest path.  "),(0,i.kt)("li",{parentName:"ul"},"Patterns in expressions. For example, Memgraph doesn't support\n",(0,i.kt)("inlineCode",{parentName:"li"},"size((n)--\x3e())"),". Most of the time, the same functionalities can be expressed\ndifferently in Memgraph using ",(0,i.kt)("inlineCode",{parentName:"li"},"OPTIONAL")," expansions, function calls etc. You\ncan check out ",(0,i.kt)("a",{parentName:"li",href:"#patterns-in-expressions"},"this example"),"."),(0,i.kt)("li",{parentName:"ul"},"Map projections such as ",(0,i.kt)("inlineCode",{parentName:"li"},"MATCH (n) RETURN n {.property1, .property2}"),".")),(0,i.kt)("h3",{id:"unsupported-functions"},"Unsupported functions"),(0,i.kt)("p",null,"General purpose functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exists(n.property)")," - This can be expressed using ",(0,i.kt)("inlineCode",{parentName:"li"},"n.property IS NOT NULL"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"length()")," is named ",(0,i.kt)("inlineCode",{parentName:"li"},"size()")," in Memgraph.")),(0,i.kt)("p",null,"Mathematical functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"percentileDisc()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stDev()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"point()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"distance()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"degrees()"))),(0,i.kt)("p",null,"List functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"none()"))),(0,i.kt)("h2",{id:"patterns-in-expressions"},"Patterns in expressions"),(0,i.kt)("p",null,"Patterns in expressions are supported in Memgraph in particular functions, like ",(0,i.kt)("inlineCode",{parentName:"p"},"exists(pattern)"),".\nIn other cases, Memgraph does not yet support patterns in functions, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"size((n)--\x3e())"),".\nMost of the time, the same functionalities can be expressed differently in Memgraph\nusing ",(0,i.kt)("inlineCode",{parentName:"p"},"OPTIONAL")," expansions, function calls, etc."))}u.isMDXComponent=!0}}]);