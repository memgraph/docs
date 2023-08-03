"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60292],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>c});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(t),c=a,y=p["".concat(u,".").concat(c)]||p[c]||d[c]||o;return t?n.createElement(y,i(i({ref:r},m),{},{components:t})):n.createElement(y,i({ref:r},m))}));function c(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},65806:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={id:"available-query-modules",title:"Available query modules",sidebar_label:"Available modules"},i=void 0,l={unversionedId:"reference-guide/query-modules/available-query-modules",id:"version-2.10.0/reference-guide/query-modules/available-query-modules",title:"Available query modules",description:"MAGE, also known as Memgraph Advanced Graph Extensions, is an",source:"@site/memgraph_versioned_docs/version-2.10.0/reference-guide/query-modules/available-query-modules.md",sourceDirName:"reference-guide/query-modules",slug:"/reference-guide/query-modules/available-query-modules",permalink:"/docs/memgraph/reference-guide/query-modules/available-query-modules",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.10.0/reference-guide/query-modules/available-query-modules.md",tags:[],version:"2.10.0",frontMatter:{id:"available-query-modules",title:"Available query modules",sidebar_label:"Available modules"},sidebar:"memgraph",previous:{title:"Query modules overview",permalink:"/docs/memgraph/reference-guide/query-modules"},next:{title:"Implement custom query modules",permalink:"/docs/memgraph/reference-guide/query-modules/implement-custom-query-modules/overview"}},u={},s=[],m={toc:s};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"MAGE"),", also known as ",(0,a.kt)("strong",{parentName:"p"},"Memgraph Advanced Graph Extensions"),", is an\nopen-source repository that contains graph algorithms in the form of ",(0,a.kt)("strong",{parentName:"p"},"query\nmodules")," written by the team behind Memgraph and its users. You can find and\ncontribute implementations of various algorithms in multiple programming\nlanguages, all runnable inside Memgraph."),(0,a.kt)("p",null,"MAGE modules are located at ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules"),"."),(0,a.kt)("p",null,"If you are using Docker and either ",(0,a.kt)("inlineCode",{parentName:"p"},"memgraph-platform")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"memgraph-mage"),"\nimages, the MAGE library is already loaded and ready to be used so you can skip to\nthe guide on ",(0,a.kt)("a",{parentName:"p",href:"load-call-query-modules#calling-query-modules"},"calling procedures within query\nmodules"),"."),(0,a.kt)("admonition",{title:"MAGE Documentation",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Check out the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/mage"},"MAGE documentation"))," for a detailed overview of all the\navailable modules and installation instructions.")),(0,a.kt)("admonition",{title:"MAGE Source code",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Check out the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/memgraph/mage"},"MAGE source code"))," on GitHub\nif you are interested in the underlying implementation.")))}d.isMDXComponent=!0}}]);