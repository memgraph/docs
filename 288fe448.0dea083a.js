(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{179:function(e,r,t){"use strict";t.d(r,"a",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},s=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(t),f=n,d=s["".concat(i,".").concat(f)]||s[f]||m[f]||o;return t?a.a.createElement(d,c(c({ref:r},l),{},{components:t})):a.a.createElement(d,c({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},95:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),o=(t(0),t(179)),i={id:"networkx",title:"NetworkX",sidebar_label:"NetworkX overview",slug:"/reference-guide/networkx"},c={unversionedId:"reference-guide/networkx/networkx",id:"reference-guide/networkx/networkx",isDocsHomePage:!1,title:"NetworkX",description:"NetworkX is a Python package for the creation, manipulation, and study of the structure,",source:"@site/docs/reference-guide/networkx/networkx.md",slug:"/reference-guide/networkx",permalink:"/memgraph/reference-guide/networkx",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/networkx/networkx.md",version:"current",sidebar_label:"NetworkX overview",sidebar:"memgraph",previous:{title:"Query modules Python API",permalink:"/memgraph/reference-guide/query-modules/python-api"},next:{title:"Graph Analyzer query module",permalink:"/memgraph/reference-guide/networkx/graph-analyzer"}},u=[],l={toc:u};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.a)("p",null,"NetworkX is a Python package for the creation, manipulation, and study of the structure,\ndynamics, and functions of complex networks. Memgraph currently provides three query modules\nthat utilize the NetworkX library:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",{parentName:"li",href:"/memgraph/reference-guide/networkx/nxalg"},"NetworkX Algorithms")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",{parentName:"li",href:"/memgraph/reference-guide/networkx/graph-analyzer"},"Graph Analyzer")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",{parentName:"li",href:"/memgraph/reference-guide/networkx/wcc"},"Weakly Connected Components"))),Object(o.a)("p",null,"You can also take a look at our ",Object(o.a)("a",{parentName:"p",href:"/memgraph/database-functionalities/query-modules/built-in-query-modules"},"Built-in query modules")," guide to find out more about how to use them."))}p.isMDXComponent=!0}}]);