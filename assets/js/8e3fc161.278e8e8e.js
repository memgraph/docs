"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1402],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11151:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"profiling-queries",title:"Profiling queries",sidebar_label:"Profiling queries"},s=void 0,p={unversionedId:"database-functionalities/profiling-queries",id:"version-1.6.1/database-functionalities/profiling-queries",isDocsHomePage:!1,title:"Profiling queries",description:"Along with inspecting a query's plan as described in the Inspecting queries,",source:"@site/memgraph_versioned_docs/version-1.6.1/database-functionalities/profiling-queries.md",sourceDirName:"database-functionalities",slug:"/database-functionalities/profiling-queries",permalink:"/docs/memgraph/database-functionalities/profiling-queries",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.6.1/database-functionalities/profiling-queries.md",tags:[],version:"1.6.1",frontMatter:{id:"profiling-queries",title:"Profiling queries",sidebar_label:"Profiling queries"},sidebar:"version-1.6.1/memgraph",previous:{title:"NetworkX",permalink:"/docs/memgraph/database-functionalities/networkx"},next:{title:"Query modules overview",permalink:"/docs/memgraph/database-functionalities/query-modules"}},u=[{value:"Where to next?",id:"where-to-next",children:[]}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Along with inspecting a query's plan as described in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/database-functionalities/inspecting-queries"},"Inspecting queries"),",\nit is also possible to profile the execution of a query and get a detailed report\non how the query's plan behaved. For every logical operator the following info is provided:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"OPERATOR")," ","\u2014"," the name of the operator, just like in the output of an\n",(0,i.kt)("inlineCode",{parentName:"p"},"EXPLAIN")," query.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ACTUAL HITS")," ","\u2014"," the number of times a particular logical operator was\npulled from.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"RELATIVE TIME")," ","\u2014"," the amount of time that was spent processing a\nparticular logical operator, relative to the execution of the whole plan.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ABSOLUTE TIME")," ","\u2014"," the amount of time that was spent processing a\nparticular logical operator."))),(0,i.kt)("p",null,"A simple example to illustrate the output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"PROFILE MATCH (n :Node)-[:Edge]-(m :Node) WHERE n.prop = 42 RETURN *;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"+---------------+---------------+---------------+---------------+\n| OPERATOR      | ACTUAL HITS   | RELATIVE TIME | ABSOLUTE TIME |\n+---------------+---------------+---------------+---------------+\n| * Produce     | 1             |   7.134628 %  |   0.003949 ms |\n| * Filter      | 1             |  12.734765 %  |   0.007049 ms |\n| * Expand      | 1             |   5.181460 %  |   0.002868 ms |\n| * ScanAll     | 1             |   3.325061 %  |   0.001840 ms |\n| * ScanAll     | 1             |  71.061241 %  |   0.039334 ms |\n| * Once        | 2             |   0.562844 %  |   0.000312 ms |\n+---------------+---------------+---------------+---------------+\n")),(0,i.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,i.kt)("p",null,"To learn more about Memgraph's functionalities, visit the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/memgraph/reference-guide"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/memgraph/tutorials"},"Tutorials")),"."))}m.isMDXComponent=!0}}]);