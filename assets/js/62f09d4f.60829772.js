(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{176:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return c}));var r=t(3),a=t(8),o=(t(0),t(345)),i={id:"query-modules",title:"Query modules",sidebar_label:"Query modules",slug:"/reference-guide/query-modules"},l={unversionedId:"reference-guide/query-modules/query-modules",id:"version-1.3.0/reference-guide/query-modules/query-modules",isDocsHomePage:!1,title:"Query modules",description:"Memgraph supports extending the query language with user-written procedures.",source:"@site/memgraph_versioned_docs/version-1.3.0/reference-guide/query-modules/query-modules.md",slug:"/reference-guide/query-modules",permalink:"/memgraph/1.3.0/reference-guide/query-modules",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/reference-guide/query-modules/query-modules.md",version:"1.3.0",sidebar_label:"Query modules",sidebar:"version-1.3.0/memgraph",previous:{title:"Making a backup",permalink:"/memgraph/1.3.0/reference-guide/backup"},next:{title:"Query modules C API",permalink:"/memgraph/1.3.0/reference-guide/query-modules/c-api"}},u=[{value:"Loading query modules",id:"loading-query-modules",children:[]},{value:"Syntax for calling procedures",id:"syntax-for-calling-procedures",children:[]},{value:"Controlling procedure memory usage",id:"controlling-procedure-memory-usage",children:[]},{value:"Implementing custom query modules",id:"implementing-custom-query-modules",children:[]},{value:"Query modules provided by Memgraph",id:"query-modules-provided-by-memgraph",children:[]}],d={toc:u};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded on startup."),Object(o.b)("h2",{id:"loading-query-modules"},"Loading query modules"),Object(o.b)("p",null,"Upon startup, Memgraph will attempt to load the query modules form all ",Object(o.b)("inlineCode",{parentName:"p"},"*.so"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"*.py")," files it finds in the default (",Object(o.b)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules"),")\ndirectory."),Object(o.b)("p",null,"If you want to change the directory in which Memgraph searches for query\nmodules, just change the ",Object(o.b)("inlineCode",{parentName:"p"},"--query-modules-directory")," flag in the main\nconfiguration file (",Object(o.b)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),") or supply it as\na command-line parameter (e.g. when using Docker)."),Object(o.b)("h2",{id:"syntax-for-calling-procedures"},"Syntax for calling procedures"),Object(o.b)("p",null,"OpenCypher has a special syntax for calling procedures in loaded query\nmodules:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"CALL module.procedure(arg1, arg2, ...) YIELD res1, res2, ...;\n")),Object(o.b)("p",null,"Each procedure returns zero or more records, where each record contains named\nfields. The ",Object(o.b)("inlineCode",{parentName:"p"},"YIELD")," part is used to select fields we are interested in. If we\nare not interested in any fields, the ",Object(o.b)("inlineCode",{parentName:"p"},"YIELD")," part can be omitted."),Object(o.b)("p",null,"Procedures may be called standalone as the above, or as a part of a\nlarger query. This is useful if we want the procedure to work on data the\nquery is producing. For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) CALL module.procedure(node) YIELD result RETURN *;\n")),Object(o.b)("p",null,"When we use ",Object(o.b)("inlineCode",{parentName:"p"},"CALL")," in a larger query, we have to explicitly\n",Object(o.b)("inlineCode",{parentName:"p"},"RETURN")," from the query to get the results. Naturally, the ",Object(o.b)("inlineCode",{parentName:"p"},"RETURN")," is not\nneeded if we perform updates after ",Object(o.b)("inlineCode",{parentName:"p"},"CALL"),". This follows the openCypher\nconvention that read-only queries need to end with a ",Object(o.b)("inlineCode",{parentName:"p"},"RETURN"),", while queries\nwhich update something don't need to ",Object(o.b)("inlineCode",{parentName:"p"},"RETURN")," anything."),Object(o.b)("p",null,"If a procedure returns a record with a field name that may clash with some\nvariable we already have in a query, that field name can be aliased into some\nother name. For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) CALL module.procedure(42) YIELD node AS result RETURN *;\n")),Object(o.b)("h2",{id:"controlling-procedure-memory-usage"},"Controlling procedure memory usage"),Object(o.b)("p",null,"When running a procedure, Memgraph controls the maximum memory usage that the\nprocedure may consume during its execution.  By default, the upper memory limit\nwhen running a procedure is ",Object(o.b)("inlineCode",{parentName:"p"},"100 MB"),".  If your query procedure requires more\nmemory to be able to yield its results, you can increase the memory limit using\nthe following syntax:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"CALL module.procedure(arg1, arg2, ...) MEMORY LIMIT 100 KB YIELD res1, res2, ...;\nCALL module.procedure(arg1, arg2, ...) MEMORY LIMIT 100 MB YIELD res1, res2, ...;\nCALL module.procedure(arg1, arg2, ...) MEMORY UNLIMITED YIELD res1, res2, ...;\n")),Object(o.b)("p",null,"The limit can either be specified to a specific value (either in ",Object(o.b)("inlineCode",{parentName:"p"},"KB")," or in\n",Object(o.b)("inlineCode",{parentName:"p"},"MB"),"), or it can be set to unlimited."),Object(o.b)("h2",{id:"implementing-custom-query-modules"},"Implementing custom query modules"),Object(o.b)("p",null,"Query modules can be implemented by either using the C API or Python API\nprovided by Memgraph."),Object(o.b)("p",null,"Modules implemented using the C API need to be compiled to a shared library\n(",Object(o.b)("inlineCode",{parentName:"p"},".so")," file), so they can be loaded when Memgraph starts.  The C API is well\ndocumented in the ",Object(o.b)("inlineCode",{parentName:"p"},"/usr/include/memgraph/mg_procedure.h")," header and in the\n",Object(o.b)("a",{parentName:"p",href:"/memgraph/1.3.0/reference-guide/query-modules/c-api"},"reference guide"),"."),Object(o.b)("p",null,"Modules implemented using the Python API need to be written in Python version\n",Object(o.b)("inlineCode",{parentName:"p"},"3.5.0")," and above. The Python API is well documented in the\n",Object(o.b)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/python_support/mgp.py")," file and in the\n",Object(o.b)("a",{parentName:"p",href:"/memgraph/1.3.0/reference-guide/query-modules/python-api"},"reference guide"),"."),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"WARNING:")," If your programming language of choice throws exceptions, these\nexceptions must never leave the scope of your module! You should have a top\nlevel exception handler which returns with an error value and potentially logs\nthe error message. Exceptions which cross the module boundary will cause all\nsorts of unexpected issues."))),Object(o.b)("p",null,"For a more detailed example on how to implement your own query modules, we\nsuggest you take a look at the ",Object(o.b)("a",{parentName:"p",href:"/memgraph/1.3.0/database-functionalities/query-modules/implement-query-modules"},"Implement custom query modules")," guide."),Object(o.b)("h2",{id:"query-modules-provided-by-memgraph"},"Query modules provided by Memgraph"),Object(o.b)("p",null,"The following query modules have been implemented by the Memgraph\nteam. Note that some of them are only available in Memgraph's Enterprise\noffering."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mg"),": Utility module that offers more insight into custom query modules."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"louvain")," ","[Enterprise]",": Louvain algorithm for community detection."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"connectivity")," ","[Enterprise]",": Algorithms that analyse graph connectivity."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"nxalg")," : Wrapper functions providing the most common algorithms found in the\nNetworkX package. The users can extend the module with their own custom\nfunctions based on NetworkX algorithms."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"graph_analyzer"),": Module that offers more insights about the stored graph. To\nget a detailed list of provided functionalities within this module run\n",Object(o.b)("inlineCode",{parentName:"li"},"CALL graph_analyzer.help() YIELD *;"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"wcc"),": Module that offers analysis of weakly connected components.")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"NOTE:")," If you intend to implement your custom algorithms based on the NetworkX\npackage, please note that we provide the extra library ",Object(o.b)("inlineCode",{parentName:"p"},"mgp_networkx.py")," module\ncontaining data structures that adapt the native graph for use with NetworkX\nalgorithms. It can be used to implement custom algorithms with the added\nbenefit of better memory usage."))),Object(o.b)("p",null,"The utility module offers the following functionality:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mg.procedures() :: (name :: STRING, signature :: STRING)"),": Lists loaded\nprocedures and their signatures."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mg.load(module_name :: STRING) :: ()"),": Loads or reloads the given module."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mg.load_all() :: ()"),": Loads or reloads all modules.")),Object(o.b)("p",null,"To get a detailed list of all procedures from all modules, run the following\nquery:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"CALL mg.procedures() YIELD *;\n")))}c.isMDXComponent=!0},345:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),c=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=c(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),m=c(t),s=r,b=m["".concat(i,".").concat(s)]||m[s]||p[s]||o;return t?a.a.createElement(b,l(l({ref:n},d),{},{components:t})):a.a.createElement(b,l({ref:n},d))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=s;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);