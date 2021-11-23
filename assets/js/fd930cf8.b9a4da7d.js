"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70300],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58950:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={id:"networkx",title:"NetworkX",sidebar_label:"NetworkX"},l=void 0,u={unversionedId:"database-functionalities/networkx",id:"version-2.1.0/database-functionalities/networkx",isDocsHomePage:!1,title:"NetworkX",description:"NetworkX is a Python package for the creation, manipulation, and study of the structure,",source:"@site/memgraph_versioned_docs/version-2.1.0/database-functionalities/networkx.md",sourceDirName:"database-functionalities",slug:"/database-functionalities/networkx",permalink:"/docs/memgraph/database-functionalities/networkx",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.0/database-functionalities/networkx.md",tags:[],version:"2.1.0",frontMatter:{id:"networkx",title:"NetworkX",sidebar_label:"NetworkX"},sidebar:"version-2.1.0/memgraph",previous:{title:"Memory control",permalink:"/docs/memgraph/database-functionalities/memory-control"},next:{title:"Profiling queries",permalink:"/docs/memgraph/database-functionalities/profiling-queries"}},s=[],p={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"NetworkX is a Python package for the creation, manipulation, and study of the structure,\ndynamics, and functions of complex networks. Memgraph currently provides three query modules\nthat utilize the NetworkX library:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/mage/query-modules/python/nxalg"},"NetworkX Algorithms"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/mage/query-modules/python/graph-analyzer"},"Graph Analyzer"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/mage/query-modules/cpp/weakly-connected-components"},"Weakly Connected Components")))),(0,a.kt)("p",null,"You can also take a look at our open-source project ",(0,a.kt)("a",{parentName:"p",href:"/mage"},"MAGE")," which you can utilize to implement even more NetworkX functionalities inside Memgraph."))}m.isMDXComponent=!0}}]);