"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56254],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>c});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=n.createContext({}),i=function(e){var r=n.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=i(e.components);return n.createElement(m.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=i(t),c=o,y=d["".concat(m,".").concat(c)]||d[c]||s[c]||a;return t?n.createElement(y,l(l({ref:r},p),{},{components:t})):n.createElement(y,l({ref:r},p))}));function c(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var u={};for(var m in r)hasOwnProperty.call(r,m)&&(u[m]=r[m]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var i=2;i<a;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},18827:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var n=t(87462),o=(t(67294),t(3905));const a={id:"overview",title:"Implement custom query modules",sidebar_label:"Implement custom query modules"},l=void 0,u={unversionedId:"reference-guide/query-modules/implement-custom-query-modules/overview",id:"reference-guide/query-modules/implement-custom-query-modules/overview",title:"Implement custom query modules",description:"If you need to expand the Cypher language, Memgraph provides public APIs for",source:"@site/docs/reference-guide/query-modules/implement-custom-query-modules/overview.md",sourceDirName:"reference-guide/query-modules/implement-custom-query-modules",slug:"/reference-guide/query-modules/implement-custom-query-modules/overview",permalink:"/docs/memgraph/next/reference-guide/query-modules/implement-custom-query-modules/overview",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/query-modules/implement-custom-query-modules/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Implement custom query modules",sidebar_label:"Implement custom query modules"},sidebar:"memgraph",previous:{title:"Available modules",permalink:"/docs/memgraph/next/reference-guide/query-modules/available-query-modules"},next:{title:"Python API",permalink:"/docs/memgraph/next/reference-guide/query-modules/api/python-api"}},m={},i=[{value:"Python API",id:"python-api",level:2},{value:"C API",id:"c-api",level:2},{value:"C++ API",id:"c-api-1",level:2}],p={toc:i};function s(e){let{components:r,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you need to expand the Cypher language, Memgraph provides public APIs for\nwriting custom query modules in Python and C."),(0,o.kt)("h2",{id:"python-api"},"Python API"),(0,o.kt)("p",null,"Python API is defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp")," module that can be found in the Memgraph\ninstallation directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/python_support"),". In essence, it is a\nwrapper around the C API. If you wish to write your own query modules using the\nPython API, you need to have Python version ",(0,o.kt)("inlineCode",{parentName:"p"},"3.5.0")," or above installed."),(0,o.kt)("p",null,"For more information, check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/query-modules/api/python-api"},"Python API reference\nguide"),".",(0,o.kt)("br",null),"\nWe also made ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example#python-api"},"an example\nmodule"),"\nto help you start developing your own modules."),(0,o.kt)("p",null,"You can develop query modules in Python from Memgraph Lab (v2.0 and newer). Just\nnavigate to ",(0,o.kt)("strong",{parentName:"p"},"Query Modules")," and click on ",(0,o.kt)("strong",{parentName:"p"},"New Module")," to start."),(0,o.kt)("img",{src:t(65274).Z,className:"imgBorder"}),(0,o.kt)("p",null,"Custom modules developed via Memgraph Lab are located at\n",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph/internal_modules"),"."),(0,o.kt)("h2",{id:"c-api"},"C API"),(0,o.kt)("p",null,"C API modules need to be compiled to a shared library so that they can be loaded\nwhen Memgraph starts. This means that you can write the procedures in any\nprogramming language that can work with C and be compiled to the ELF shared\nlibrary format (",(0,o.kt)("inlineCode",{parentName:"p"},".so"),"). ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_procedure.h")," that can be found in Memgraph\ninstallation directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/include/memgraph")," contains declarations of all\nfunctions that can be used to implement a query module procedure. To compile the\nmodule, you will have to pass the appropriate flags to the compiler, for\nexample, ",(0,o.kt)("inlineCode",{parentName:"p"},"clang"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"clang -Wall -shared -fPIC -I /usr/include/memgraph example.c -o example.so\n")),(0,o.kt)("p",null,"For more information, check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/query-modules/api/c-api"},"C API reference\nguide"),".",(0,o.kt)("br",null),"\nWe also made ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example#c-api"},"an example\nmodule"),"\nto help you start developing your own modules."),(0,o.kt)("h2",{id:"c-api-1"},"C++ API"),(0,o.kt)("p",null,"C++ API modules, just like C API modules, need to be compiled to a shared\nlibrary so that they can be loaded when Memgraph starts. This is done much in\nthe same way as with C API modules."),(0,o.kt)("p",null,"For more information, check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/query-modules/api/cpp-api"},"C++ API reference\nguide"),".",(0,o.kt)("br",null),"\nWe also made ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example#cpp-api"},"an example\nmodule"),"\nto help you start developing your own modules."))}s.isMDXComponent=!0},65274:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/memgraph_lab_query_modules-e5619e8b4b458425c680c0ce3cefb22c.png"}}]);