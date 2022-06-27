"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1057],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return c}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=n.createContext({}),u=function(e){var r=n.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(m.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(t),c=a,g=d["".concat(m,".").concat(c)]||d[c]||p[c]||o;return t?n.createElement(g,l(l({ref:r},s),{},{components:t})):n.createElement(g,l({ref:r},s))}));function c(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var m in r)hasOwnProperty.call(r,m)&&(i[m]=r[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},30593:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],i={id:"overview",title:"Query modules overview",sidebar_label:"Query modules overview",slug:"/reference-guide/query-modules"},m=void 0,u={unversionedId:"reference-guide/query-modules/overview",id:"version-2.3.1/reference-guide/query-modules/overview",title:"Query modules overview",description:"Related - How-to",source:"@site/memgraph_versioned_docs/version-2.3.1/reference-guide/query-modules/overview.md",sourceDirName:"reference-guide/query-modules",slug:"/reference-guide/query-modules",permalink:"/docs/memgraph/reference-guide/query-modules",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.1/reference-guide/query-modules/overview.md",tags:[],version:"2.3.1",frontMatter:{id:"overview",title:"Query modules overview",sidebar_label:"Query modules overview",slug:"/reference-guide/query-modules"},sidebar:"memgraph",previous:{title:"Monitoring server",permalink:"/docs/memgraph/reference-guide/monitoring-server"},next:{title:"Available modules",permalink:"/docs/memgraph/reference-guide/query-modules/available-query-modules"}},s={},p=[],d={toc:p};function c(e){var r=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/query-modules"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge",alt:"Related - How-to"}))),(0,o.kt)("p",null,"Memgraph supports extending the query language with user-written procedures in\n",(0,o.kt)("strong",{parentName:"p"},"C"),", ",(0,o.kt)("strong",{parentName:"p"},"C++"),", ",(0,o.kt)("strong",{parentName:"p"},"Python"),", and ",(0,o.kt)("strong",{parentName:"p"},"Rust"),". These procedures are grouped into\nmodules - ",(0,o.kt)("strong",{parentName:"p"},"query modules")," files (either ",(0,o.kt)("inlineCode",{parentName:"p"},"*.so")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"*.py")," files)."),(0,o.kt)("p",null,"Some query modules are built-in, and others, like those that can help you solve\ncomplex graph issues, are available as part of the MAGE library you can add to\nyour Memgraph installation. The library is already included if you are using\nMemgraph Platform or Memgraph MAGE Docker images to run Memgraph."),(0,o.kt)("p",null,"You can also implement custom query modules. Every single Memgraph installation\ncomes with the ",(0,o.kt)("inlineCode",{parentName:"p"},"example.so")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"py_example.py")," query modules located in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory. They were provided as examples of\nquery modules for you to examine and learn from."),(0,o.kt)("p",null,"Each query module file corresponds to one query module, and file names are\nmapped as query module names. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"example.so")," will be mapped as\n",(0,o.kt)("inlineCode",{parentName:"p"},"example")," module, and ",(0,o.kt)("inlineCode",{parentName:"p"},"py_example.py")," will be mapped as ",(0,o.kt)("inlineCode",{parentName:"p"},"py_example")," module. If\neach module file has a procedure called ",(0,o.kt)("inlineCode",{parentName:"p"},"procedure")," defined, those procedures\nwould be mapped in the Cypher query language as ",(0,o.kt)("inlineCode",{parentName:"p"},"example.procedure()")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"py_example.procedure()")," respectively."),(0,o.kt)("p",null,"Regardless of where they come from and who wrote them, all modules need to be\nloaded into Memgraph so that they can be called while querying the database.\nThey are either loaded automatically when Memgraph starts or manually if they\nwere added while Memgraph was already running. "),(0,o.kt)("p",null,"You can also inspect and develop query modules in Memgraph Lab (v2.0 and newer).\nJust navigate to ",(0,o.kt)("strong",{parentName:"p"},"Query Modules"),"."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Screenshot of Query Modules from Memgraph Lab"),(0,o.kt)("img",{src:t(51233).Z,className:"imgBorder"})),(0,o.kt)("p",null,"Once you start Memgraph, it will attempt to load query modules from all ",(0,o.kt)("em",{parentName:"p"},".so and\n"),".py files from the default directories. MAGE modules are located at\n",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," and custom modules developed via Memgraph Lab at\n",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph/internal_modules"),"."),(0,o.kt)("p",null,"To learn more about query modules, take a look at the following guides:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/reference-guide/query-modules/available-query-modules"},"Available query modules -\nMAGE"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/reference-guide/query-modules/implement-custom-query-modules/overview"},"Implement custom query\nmodules")),"\nusing:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/reference-guide/query-modules/api/python-api"},"Python\nAPI"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/reference-guide/query-modules/api/c-api"},"C\nAPI"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/reference-guide/query-modules/load-call-query-modules"},"Load and call query\nmodules"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/reference-guide/query-modules/module-file-utilities"},"Manage module files from\nMemgraph")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Available Query Modules")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The open-source repository ",(0,o.kt)("strong",{parentName:"p"},"MAGE (Memgraph Advanced Graph Extensions)"),"\ncontains all currently implemented query modules. For more information on all\nthe available graph algorithms and installation instructions, check out the\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/mage"},"MAGE documentation"))," page."))))}c.isMDXComponent=!0},51233:function(e,r,t){r.Z=t.p+"assets/images/memgraph_lab_query_modules-e5619e8b4b458425c680c0ce3cefb22c.png"}}]);