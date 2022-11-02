"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26069],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>c});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=a.createContext({}),u=function(e){var r=a.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return a.createElement(m.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),c=n,g=d["".concat(m,".").concat(c)]||d[c]||s[c]||o;return t?a.createElement(g,l(l({ref:r},p),{},{components:t})):a.createElement(g,l({ref:r},p))}));function c(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var m in r)hasOwnProperty.call(r,m)&&(i[m]=r[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},37437:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=t(87462),n=(t(67294),t(3905));const o={id:"overview",title:"Query modules overview",sidebar_label:"Query modules overview",slug:"/reference-guide/query-modules"},l=void 0,i={unversionedId:"reference-guide/query-modules/overview",id:"version-2.4.0/reference-guide/query-modules/overview",title:"Query modules overview",description:"Related - How-to",source:"@site/memgraph_versioned_docs/version-2.4.0/reference-guide/query-modules/overview.md",sourceDirName:"reference-guide/query-modules",slug:"/reference-guide/query-modules",permalink:"/docs/memgraph/2.4.0/reference-guide/query-modules",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.4.0/reference-guide/query-modules/overview.md",tags:[],version:"2.4.0",frontMatter:{id:"overview",title:"Query modules overview",sidebar_label:"Query modules overview",slug:"/reference-guide/query-modules"},sidebar:"memgraph",previous:{title:"Monitoring server",permalink:"/docs/memgraph/2.4.0/reference-guide/monitoring-server"},next:{title:"Available modules",permalink:"/docs/memgraph/2.4.0/reference-guide/query-modules/available-query-modules"}},m={},u=[],p={toc:u};function s(e){let{components:r,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.0/how-to-guides/query-modules"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge",alt:"Related - How-to"}))),(0,n.kt)("p",null,"Memgraph supports extending the query language with user-written procedures in\n",(0,n.kt)("strong",{parentName:"p"},"C"),", ",(0,n.kt)("strong",{parentName:"p"},"C++"),", ",(0,n.kt)("strong",{parentName:"p"},"Python"),", and ",(0,n.kt)("strong",{parentName:"p"},"Rust"),". These procedures are grouped into\nmodules - ",(0,n.kt)("strong",{parentName:"p"},"query modules")," files (either ",(0,n.kt)("inlineCode",{parentName:"p"},"*.so")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"*.py")," files)."),(0,n.kt)("p",null,"Some query modules are built-in, and others, like those that can help you solve\ncomplex graph issues, are available as part of the MAGE library you can add to\nyour Memgraph installation. The library is already included if you are using\nMemgraph Platform or Memgraph MAGE Docker images to run Memgraph."),(0,n.kt)("p",null,"You can also implement custom query modules. Every single Memgraph installation\ncomes with the ",(0,n.kt)("inlineCode",{parentName:"p"},"example.so")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"py_example.py")," query modules located in the\n",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory. They were provided as examples of\nquery modules for you to examine and learn from."),(0,n.kt)("p",null,"Each query module file corresponds to one query module, and file names are\nmapped as query module names. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"example.so")," will be mapped as\n",(0,n.kt)("inlineCode",{parentName:"p"},"example")," module, and ",(0,n.kt)("inlineCode",{parentName:"p"},"py_example.py")," will be mapped as ",(0,n.kt)("inlineCode",{parentName:"p"},"py_example")," module. If\neach module file has a procedure called ",(0,n.kt)("inlineCode",{parentName:"p"},"procedure")," defined, those procedures\nwould be mapped in the Cypher query language as ",(0,n.kt)("inlineCode",{parentName:"p"},"example.procedure()")," and\n",(0,n.kt)("inlineCode",{parentName:"p"},"py_example.procedure()")," respectively."),(0,n.kt)("p",null,"Regardless of where they come from and who wrote them, all modules need to be\nloaded into Memgraph so that they can be called while querying the database.\nThey are either loaded automatically when Memgraph starts or manually if they\nwere added while Memgraph was already running. "),(0,n.kt)("p",null,"You can also inspect and develop query modules in Memgraph Lab (v2.0 and newer).\nJust navigate to ",(0,n.kt)("strong",{parentName:"p"},"Query Modules"),"."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Screenshot of Query Modules from Memgraph Lab"),(0,n.kt)("img",{src:t(19102).Z,className:"imgBorder"})),(0,n.kt)("p",null,"Once you start Memgraph, it will attempt to load query modules from all ",(0,n.kt)("em",{parentName:"p"},".so and\n"),".py files from the default directories. MAGE modules are located at\n",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," and custom modules developed via Memgraph Lab at\n",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph/internal_modules"),"."),(0,n.kt)("p",null,"To learn more about query modules, take a look at the following guides:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.4.0/reference-guide/query-modules/available-query-modules"},"Available query modules -\nMAGE"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.4.0/reference-guide/query-modules/implement-custom-query-modules/overview"},"Implement custom query\nmodules")),"\nusing:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.4.0/reference-guide/query-modules/api/python-api"},"Python\nAPI"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.4.0/reference-guide/query-modules/api/c-api"},"C\nAPI"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.4.0/reference-guide/query-modules/api/cpp-api"},"C++\nAPI"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.4.0/reference-guide/query-modules/load-call-query-modules"},"Load and call query\nmodules"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.4.0/reference-guide/query-modules/module-file-utilities"},"Manage module files from\nMemgraph")))),(0,n.kt)("admonition",{title:"Available Query Modules",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The open-source repository ",(0,n.kt)("strong",{parentName:"p"},"MAGE (Memgraph Advanced Graph Extensions)"),"\ncontains all currently implemented query modules. For more information on all\nthe available graph algorithms and installation instructions, check out the\n",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/mage"},"MAGE documentation"))," page.")))}s.isMDXComponent=!0},19102:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/memgraph_lab_query_modules-e5619e8b4b458425c680c0ce3cefb22c.png"}}]);