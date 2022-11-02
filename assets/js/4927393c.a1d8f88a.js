"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34177],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,g=u["".concat(s,".").concat(m)]||u[m]||h[m]||o;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93451:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={id:"graph-algorithms",title:"Graph algorithms",sidebar_label:"Graph algorithms"},i=void 0,l={unversionedId:"graph-algorithms",id:"graph-algorithms",title:"Graph algorithms",description:"The real power of graph databases comes from graph algorithms. In Memgraph,",source:"@site/cypher-manual/graph-algorithms.md",sourceDirName:".",slug:"/graph-algorithms",permalink:"/docs/cypher-manual/graph-algorithms",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/graph-algorithms.md",tags:[],version:"current",frontMatter:{id:"graph-algorithms",title:"Graph algorithms",sidebar_label:"Graph algorithms"},sidebar:"cypher_manual",previous:{title:"Functions",permalink:"/docs/cypher-manual/functions"},next:{title:"Query modules",permalink:"/docs/cypher-manual/query-modules"}},s={},p=[],c={toc:p};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The real power of graph databases comes from graph algorithms. In Memgraph,\nseveral algorithms are part of the query engine. This means that you can use\nthem directly in your Cypher queries. You can use them within\n",(0,n.kt)("a",{parentName:"p",href:"/docs/cypher-manual/clauses/match"},(0,n.kt)("inlineCode",{parentName:"a"},"MATCH"))," clause to obtain data from the database."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/built-in-graph-algorithms"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference\nGuide"}))),(0,n.kt)("p",null,"The built-in algorithms are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Filtering Variable Length Paths")," - you can filter the data through lambda\nfunctions"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Breadth First Search")," - you can use it for searching the shortest path\nbetween nodes"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Weighted Shortest Path")," - you can use it for searching the weighted\nshortest path between nodes")),(0,n.kt)("p",null,"Take a look at ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/built-in-graph-algorithms"},"Graph algorithms in our reference\nmanual")," for code examples. "),(0,n.kt)("p",null,"If Memgraph's built-in algorithms are not enough for you, don't worry, we've got\nyou covered. We have developed ",(0,n.kt)("a",{parentName:"p",href:"/mage"},"MAGE")," - a graph library that extends\nMemgraph with additional algorithms and utility modules. Be sure to check it\nout!"))}h.isMDXComponent=!0}}]);