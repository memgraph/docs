"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66670],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):m(m({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),c=o,h=s["".concat(l,".").concat(c)]||s[c]||d[c]||a;return r?n.createElement(h,m(m({ref:t},p),{},{components:r})):n.createElement(h,m({ref:t},p))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,m=new Array(a);m[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,m[1]=i;for(var u=2;u<a;u++)m[u]=r[u];return n.createElement.apply(null,m)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},17220:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>m,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={id:"overview",title:"Implement custom query modules",sidebar_label:"Implement custom query modules"},m=void 0,i={unversionedId:"reference-guide/query-modules/implement-custom-query-modules/overview",id:"version-2.10.1/reference-guide/query-modules/implement-custom-query-modules/overview",title:"Implement custom query modules",description:"If you need to expand the Cypher language, Memgraph provides public APIs for",source:"@site/memgraph_versioned_docs/version-2.10.1/reference-guide/query-modules/implement-custom-query-modules/overview.md",sourceDirName:"reference-guide/query-modules/implement-custom-query-modules",slug:"/reference-guide/query-modules/implement-custom-query-modules/overview",permalink:"/docs/memgraph/reference-guide/query-modules/implement-custom-query-modules/overview",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.10.1/reference-guide/query-modules/implement-custom-query-modules/overview.md",tags:[],version:"2.10.1",frontMatter:{id:"overview",title:"Implement custom query modules",sidebar_label:"Implement custom query modules"},sidebar:"memgraph",previous:{title:"Available modules",permalink:"/docs/memgraph/reference-guide/query-modules/available-query-modules"},next:{title:"Python API",permalink:"/docs/memgraph/reference-guide/query-modules/api/python-api"}},l={},u=[{value:"Python API",id:"python-api",level:2},{value:"Mock Python API",id:"mock-python-api",level:3},{value:"C API",id:"c-api",level:2},{value:"C++ API",id:"c-api-1",level:2}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you need to expand the Cypher language, Memgraph provides public APIs for\nwriting custom query modules in Python, C and C++."),(0,o.kt)("h2",{id:"python-api"},"Python API"),(0,o.kt)("p",null,"Python API is defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp")," module that can be found in the Memgraph\ninstallation directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/python_support"),". In essence, it is a\nwrapper around the C API. If you wish to write your own query modules using the\nPython API, you need to have Python version ",(0,o.kt)("inlineCode",{parentName:"p"},"3.5.0")," or above installed."),(0,o.kt)("p",null,"For more information, check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/query-modules/api/python-api"},"Python API reference\nguide"),".",(0,o.kt)("br",null),"\nWe also made ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example#python-api"},"an example\nmodule"),"\nto help you start developing your own modules."),(0,o.kt)("p",null,"You can develop query modules in Python from Memgraph Lab (v2.0 and newer). Just\nnavigate to ",(0,o.kt)("strong",{parentName:"p"},"Query Modules")," and click on ",(0,o.kt)("strong",{parentName:"p"},"New Module")," to start."),(0,o.kt)("img",{src:r(56911).Z,className:"imgBorder"}),(0,o.kt)("p",null,"Custom modules developed via Memgraph Lab are located at\n",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph/internal_modules"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you need an additional Python library not included with Memgraph, check out\n",(0,o.kt)("a",{parentName:"p",href:"/memgraph/how-to-guides/query-modules#how-to-install-external-python-libraries"},"the guide on how to install\nit"),".")),(0,o.kt)("h3",{id:"mock-python-api"},"Mock Python API"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/query-modules/api/mock-python-api"},"mock Python query module API")," enables you to\ndevelop and test query modules for Memgraph without having to run a Memgraph\ninstance by simulating its behavior. As the mock API is compatible with the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/query-modules/api/python-api"},"Python API"),",\nyou can add modules developed with it to Memgraph as-is, without modifying the\ncode."),(0,o.kt)("p",null,"For more information and examples, check the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/query-modules/api/mock-python-api"},"mock Python API reference guide"),"."),(0,o.kt)("h2",{id:"c-api"},"C API"),(0,o.kt)("p",null,"C API modules need to be compiled to a shared library so that they can be loaded\nwhen Memgraph starts. This means that you can write the procedures in any\nprogramming language that can work with C and be compiled to the ELF shared\nlibrary format (",(0,o.kt)("inlineCode",{parentName:"p"},".so"),"). ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_procedure.h")," that can be found in Memgraph\ninstallation directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/include/memgraph")," contains declarations of all\nfunctions that can be used to implement a query module procedure. To compile the\nmodule, you will have to pass the appropriate flags to the compiler, for\nexample, ",(0,o.kt)("inlineCode",{parentName:"p"},"clang"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"clang -Wall -shared -fPIC -I /usr/include/memgraph example.c -o example.so\n")),(0,o.kt)("p",null,"For more information, check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/query-modules/api/c-api"},"C API reference\nguide"),".",(0,o.kt)("br",null),"\nWe also made ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example#c-api"},"an example\nmodule"),"\nto help you start developing your own modules."),(0,o.kt)("h2",{id:"c-api-1"},"C++ API"),(0,o.kt)("p",null,"C++ API modules, just like C API modules, need to be compiled to a shared\nlibrary so that they can be loaded when Memgraph starts. This is done much in\nthe same way as with C API modules."),(0,o.kt)("p",null,"For more information, check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/query-modules/api/cpp-api"},"C++ API reference\nguide"),".",(0,o.kt)("br",null),"\nWe also made ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example#cpp-api"},"an example\nmodule"),"\nto help you start developing your own modules."))}d.isMDXComponent=!0},56911:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/memgraph_lab_query_modules-e5619e8b4b458425c680c0ce3cefb22c.png"}}]);