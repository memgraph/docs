"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77942],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56522:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"overview",title:"Cypher manual",sidebar_label:"Cypher manual overview",slug:"/"},l=void 0,p={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Cypher manual",description:"Cypher is the most widely adopted, fully-specified, and open query language for property graph databases.",source:"@site/cypher-manual/overview.md",sourceDirName:".",slug:"/",permalink:"/docs/cypher-manual/",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Cypher manual",sidebar_label:"Cypher manual overview",slug:"/"},sidebar:"cypher_manual",next:{title:"Reading existing data",permalink:"/docs/cypher-manual/reading-existing-data"}},u=[{value:"Getting started",id:"getting-started",children:[]},{value:"Clauses",id:"clauses",children:[]},{value:"Functions",id:"functions",children:[]},{value:"Other features",id:"other-features",children:[]},{value:"Differences",id:"differences",children:[]}],c={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cypher")," is the most widely adopted, fully-specified, and open query language for property graph databases.\nIt provides an intuitive way to work with property graphs."),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"Take a look at the following guides if you are new to the ",(0,o.kt)("strong",{parentName:"p"},"Cypher")," query language:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/cypher-manual/reading-existing-data"},"Reading existing data"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/cypher-manual/writing-new-data"},"Writing new data"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/cypher-manual/reading-and-writing"},"Reading and writing")))),(0,o.kt)("h2",{id:"clauses"},"Clauses"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Cypher")," language enables users to perform standard database operations by using the following clauses:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/cypher-manual/clauses/match"},"MATCH")),", which searches for patterns;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/cypher-manual/clauses/where"},"WHERE")),", for filtering the matched data;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/cypher-manual/clauses/return"},"RETURN")),", for defining what will be presented to the user in the result set;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/cypher-manual/clauses/union"},"UNION"))," and ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/cypher-manual/clauses/union"},"UNION ALL"))," for combining results from multiple queries;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/cypher-manual/clauses/create"},"CREATE")),", for creating new nodes and edges;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/cypher-manual/clauses/set"},"SET")),", for adding new or updating existing labels and properties;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/cypher-manual/clauses/delete"},"DELETE")),", for deleting nodes and edges;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/cypher-manual/clauses/remove"},"REMOVE")),", for removing labels and properties;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/cypher-manual/clauses/merge"},"MERGE")),", for creating patterns if they do not exist;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/cypher-manual/clauses/with"},"WITH")),", for combining multiple reads and writes.")),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cypher")," supports a large number of functions. The list can be found here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/cypher-manual/functions"},"Cypher functions")))),(0,o.kt)("h2",{id:"other-features"},"Other features"),(0,o.kt)("p",null,"The following sections describe some of the other supported features in Memgraph:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/cypher-manual/other-features#string-operators"},"String operators"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/cypher-manual/other-features#parameters"},"Parameters"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/cypher-manual/other-features#case"},"CASE expression"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/cypher-manual/other-features#inspecting-and-profiling-queries"},"Inspecting and profiling queries")))),(0,o.kt)("h2",{id:"differences"},"Differences"),(0,o.kt)("p",null,"Although we try to implement openCypher query language as closely to the\nlanguage reference as possible, we had to make some changes to enhance the\nuser experience. You can find the differences in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/cypher-manual/differences"},"this article")),"."))}m.isMDXComponent=!0}}]);