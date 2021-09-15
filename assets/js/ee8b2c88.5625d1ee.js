"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63415],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(t),c=a,h=p["".concat(s,".").concat(c)]||p[c]||m[c]||o;return t?r.createElement(h,i(i({ref:n},d),{},{components:t})):r.createElement(h,i({ref:n},d))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},40354:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={id:"overview",title:"Query modules",sidebar_label:"Query modules overview",slug:"/database-functionalities/query-modules"},s=void 0,u={unversionedId:"database-functionalities/query-modules/overview",id:"version-1.6.1/database-functionalities/query-modules/overview",isDocsHomePage:!1,title:"Query modules",description:"Memgraph supports extending the query language with user-written procedures.",source:"@site/memgraph_versioned_docs/version-1.6.1/database-functionalities/query-modules/overview.md",sourceDirName:"database-functionalities/query-modules",slug:"/database-functionalities/query-modules",permalink:"/docs/memgraph/database-functionalities/query-modules",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.6.1/database-functionalities/query-modules/overview.md",tags:[],version:"1.6.1",frontMatter:{id:"overview",title:"Query modules",sidebar_label:"Query modules overview",slug:"/database-functionalities/query-modules"},sidebar:"version-1.6.1/memgraph",previous:{title:"Profiling queries",permalink:"/docs/memgraph/database-functionalities/profiling-queries"},next:{title:"Implement custom query modules",permalink:"/docs/memgraph/database-functionalities/query-modules/implement-query-modules"}},d=[{value:"Loading query modules",id:"loading-query-modules",children:[]},{value:"Avilable query modules",id:"avilable-query-modules",children:[]},{value:"Syntax for calling procedures",id:"syntax-for-calling-procedures",children:[]},{value:"Controlling procedure memory usage",id:"controlling-procedure-memory-usage",children:[]},{value:"Implementing custom query modules",id:"implementing-custom-query-modules",children:[]}],m={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded on startup."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For detailed technical information on query modules, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/query-modules"},"reference guide"),"."))),(0,o.kt)("h2",{id:"loading-query-modules"},"Loading query modules"),(0,o.kt)("p",null,"Upon startup, Memgraph will attempt to load the query modules form all ",(0,o.kt)("inlineCode",{parentName:"p"},"*.so"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"*.py")," files it finds in the default (",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules"),")\ndirectory."),(0,o.kt)("p",null,"If you want to change the directory in which Memgraph searches for query\nmodules, just change the ",(0,o.kt)("inlineCode",{parentName:"p"},"--query-modules-directory")," flag in the main\nconfiguration file (",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),") or supply it as\na command-line parameter (e.g. when using Docker)."),(0,o.kt)("h2",{id:"avilable-query-modules"},"Avilable query modules"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"MAGE"),", also known as ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Advanced Graph Extensions"),", is an open-source repository that contains graph algorithms in the form of ",(0,o.kt)("strong",{parentName:"p"},"query modules")," written by the team behind Memgraph and its users. You can find and contribute implementations of various algorithms in multiple programming languages, all runnable inside Memgraph."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"MAGE Documentation")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Check out the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/mage"},"MAGE documentation"))," for a detailed overview of all the available modules and installation instructions."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"MAGE Source code")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Check out the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/memgraph/mage"},"MAGE source code"))," on GitHub if you are interested in the underlying implementation."))),(0,o.kt)("h2",{id:"syntax-for-calling-procedures"},"Syntax for calling procedures"),(0,o.kt)("p",null,"OpenCypher has a special syntax for calling procedures in loaded query\nmodules:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL module.procedure(arg1, arg2, ...) YIELD res1, res2, ...;\n")),(0,o.kt)("p",null,"Each procedure returns zero or more records, where each record contains named\nfields. The ",(0,o.kt)("inlineCode",{parentName:"p"},"YIELD")," part is used to select fields we are interested in. If we\nare not interested in any fields, the ",(0,o.kt)("inlineCode",{parentName:"p"},"YIELD")," part can be omitted."),(0,o.kt)("p",null,"Procedures may be called standalone as the above, or as a part of a\nlarger query. This is useful if we want the procedure to work on data the\nquery is producing. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) CALL module.procedure(node) YIELD result RETURN *;\n")),(0,o.kt)("p",null,"When we use ",(0,o.kt)("inlineCode",{parentName:"p"},"CALL")," in a larger query, we have to explicitly\n",(0,o.kt)("inlineCode",{parentName:"p"},"RETURN")," from the query to get the results. Naturally, the ",(0,o.kt)("inlineCode",{parentName:"p"},"RETURN")," is not\nneeded if we perform updates after ",(0,o.kt)("inlineCode",{parentName:"p"},"CALL"),". This follows the openCypher\nconvention that read-only queries need to end with a ",(0,o.kt)("inlineCode",{parentName:"p"},"RETURN"),", while queries\nwhich update something don't need to ",(0,o.kt)("inlineCode",{parentName:"p"},"RETURN")," anything."),(0,o.kt)("p",null,"If a procedure returns a record with a field name that may clash with some\nvariable we already have in a query, that field name can be aliased into some\nother name. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) CALL module.procedure(42) YIELD node AS result RETURN *;\n")),(0,o.kt)("h2",{id:"controlling-procedure-memory-usage"},"Controlling procedure memory usage"),(0,o.kt)("p",null,"When running a procedure, Memgraph controls the maximum memory usage that the\nprocedure may consume during its execution.  By default, the upper memory limit\nwhen running a procedure is ",(0,o.kt)("inlineCode",{parentName:"p"},"100 MB"),".  If your query procedure requires more\nmemory to be able to yield its results, you can increase the memory limit using\nthe following syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL module.procedure(arg1, arg2, ...) MEMORY LIMIT 100 KB YIELD res1, res2, ...;\nCALL module.procedure(arg1, arg2, ...) MEMORY LIMIT 100 MB YIELD res1, res2, ...;\nCALL module.procedure(arg1, arg2, ...) MEMORY UNLIMITED YIELD res1, res2, ...;\n")),(0,o.kt)("p",null,"The limit can either be specified to a specific value (either in ",(0,o.kt)("inlineCode",{parentName:"p"},"KB")," or in\n",(0,o.kt)("inlineCode",{parentName:"p"},"MB"),"), or it can be set to unlimited."),(0,o.kt)("h2",{id:"implementing-custom-query-modules"},"Implementing custom query modules"),(0,o.kt)("p",null,"Query modules can be implemented by either using the C API or Python API\nprovided by Memgraph."),(0,o.kt)("p",null,"Modules implemented using the C API need to be compiled to a shared library\n(",(0,o.kt)("inlineCode",{parentName:"p"},".so")," file), so they can be loaded when Memgraph starts.  The C API is well\ndocumented in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/include/memgraph/mg_procedure.h")," header and in the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/query-modules/api/c-api"},"reference guide"),"."),(0,o.kt)("p",null,"Modules implemented using the Python API need to be written in Python version\n",(0,o.kt)("inlineCode",{parentName:"p"},"3.5.0")," and above. The Python API is well documented in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/python_support/mgp.py")," file and in the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/query-modules/api/python-api"},"reference guide"),"."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"WARNING:")," If your programming language of choice throws exceptions, these\nexceptions must never leave the scope of your module! You should have a top\nlevel exception handler which returns with an error value and potentially logs\nthe error message. Exceptions which cross the module boundary will cause all\nsorts of unexpected issues."))),(0,o.kt)("p",null,"For a more detailed example on how to implement your own query modules, we\nsuggest you take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/database-functionalities/query-modules/implement-query-modules"},"Implement custom query modules")," guide."))}p.isMDXComponent=!0}}]);