(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3347],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(t),f=o,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||a;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},35460:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=t(22122),o=t(19756),a=(t(67294),t(3905)),i={id:"networkx",title:"NetworkX",sidebar_label:"NetworkX overview",slug:"/reference-guide/networkx"},u={unversionedId:"reference-guide/networkx/networkx",id:"version-1.5.0/reference-guide/networkx/networkx",isDocsHomePage:!1,title:"NetworkX",description:"NetworkX is a Python package for the creation, manipulation, and study of the structure,",source:"@site/memgraph_versioned_docs/version-1.5.0/reference-guide/networkx/networkx.md",sourceDirName:"reference-guide/networkx",slug:"/reference-guide/networkx",permalink:"/memgraph/reference-guide/networkx",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.5.0/reference-guide/networkx/networkx.md",version:"1.5.0",sidebar_label:"NetworkX overview",frontMatter:{id:"networkx",title:"NetworkX",sidebar_label:"NetworkX overview",slug:"/reference-guide/networkx"},sidebar:"version-1.5.0/memgraph",previous:{title:"Query modules Python API",permalink:"/memgraph/reference-guide/query-modules/python-api"},next:{title:"Graph Analyzer query module",permalink:"/memgraph/reference-guide/networkx/graph-analyzer"}},c=[],l={toc:c};function p(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"NetworkX is a Python package for the creation, manipulation, and study of the structure,\ndynamics, and functions of complex networks. Memgraph currently provides three query modules\nthat utilize the NetworkX library:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/memgraph/reference-guide/networkx/nxalg"},"NetworkX Algorithms")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/memgraph/reference-guide/networkx/graph-analyzer"},"Graph Analyzer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/memgraph/reference-guide/networkx/wcc"},"Weakly Connected Components"))),(0,a.kt)("p",null,"You can also take a look at our ",(0,a.kt)("a",{parentName:"p",href:"/memgraph/database-functionalities/query-modules/built-in-query-modules"},"Built-in query modules")," guide to find out more about how to use them."))}p.isMDXComponent=!0}}]);