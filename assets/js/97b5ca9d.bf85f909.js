(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{235:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return l})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return c})),n.d(r,"default",(function(){return p}));var t=n(3),a=n(8),o=(n(0),n(345)),l={id:"calling-procedures",title:"How to call MAGE procedures?",sidebar_label:"Calling procedures"},i={unversionedId:"usage/calling-procedures",id:"usage/calling-procedures",isDocsHomePage:!1,title:"How to call MAGE procedures?",description:"Syntax for calling procedures",source:"@site/mage/usage/calling-procedures.md",slug:"/usage/calling-procedures",permalink:"/mage/usage/calling-procedures",editUrl:"https://github.com/memgraph/docs/tree/master/mage/usage/calling-procedures.md",version:"current",sidebar_label:"Calling procedures",sidebar:"mage",previous:{title:"How to load MAGE query modules?",permalink:"/mage/usage/loading-modules"},next:{title:"The collapse module",permalink:"/mage/query-modules/python/collapse"}},c=[{value:"Syntax for calling procedures",id:"syntax-for-calling-procedures",children:[]},{value:"Controlling procedure memory usage",id:"controlling-procedure-memory-usage",children:[]}],u={toc:c};function p(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"syntax-for-calling-procedures"},"Syntax for calling procedures"),Object(o.b)("p",null,"Cypher has a special syntax for calling procedures in loaded query\nmodules. For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},'CALL example.procedure("string-argument") YIELD args, result;\n')),Object(o.b)("p",null,"Each procedure returns zero or more records, where each record contains named\nfields. The ",Object(o.b)("inlineCode",{parentName:"p"},"YIELD")," part is used to select fields we are interested in. If we\nare not interested in any fields, the ",Object(o.b)("inlineCode",{parentName:"p"},"YIELD")," part can be omitted. The\nprocedure will still run in such a case, but the record fields will not be\nstored in variables. In the above example, we assume that ",Object(o.b)("inlineCode",{parentName:"p"},"example.procedure"),"\nwill produce a record with 2 fields, ",Object(o.b)("inlineCode",{parentName:"p"},"args")," and ",Object(o.b)("inlineCode",{parentName:"p"},"result"),". Trying to ",Object(o.b)("inlineCode",{parentName:"p"},"YIELD"),"\nfields that are not part of the produced record will result in an error."),Object(o.b)("p",null,"Procedures may be called standalone as in the above example, or as a part of a\nlarger query. This is useful if we want the procedure to work on data the\nquery is producing. For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) CALL example.procedure(node) YIELD result RETURN *;\n")),Object(o.b)("p",null,"Unfortunately, when we use ",Object(o.b)("inlineCode",{parentName:"p"},"CALL")," in a larger query, we have to explicitly\n",Object(o.b)("inlineCode",{parentName:"p"},"RETURN")," from the query to get the results. Naturally, the ",Object(o.b)("inlineCode",{parentName:"p"},"RETURN")," is not\nneeded if we perform updates after ",Object(o.b)("inlineCode",{parentName:"p"},"CALL"),". This follows the openCypher\nconvention that read-only queries need to end with a ",Object(o.b)("inlineCode",{parentName:"p"},"RETURN"),", while queries\nwhich update something don't need to ",Object(o.b)("inlineCode",{parentName:"p"},"RETURN")," anything."),Object(o.b)("p",null,"If a procedure returns a record with a field name that may clash with some\nvariable we already have in a query, that field name can be aliased into some\nother name. For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (result) CALL example.procedure(42) YIELD result AS procedure_result RETURN *;\n")),Object(o.b)("h2",{id:"controlling-procedure-memory-usage"},"Controlling procedure memory usage"),Object(o.b)("p",null,"When running a procedure, Memgraph controls the maximum memory usage that the\nprocedure may consume during its execution.  By default, the upper memory limit\nwhen running a procedure is ",Object(o.b)("inlineCode",{parentName:"p"},"100 MB"),".  If your query procedure requires more\nmemory to be able to yield its results, you can increase the memory limit using\nthe following syntax:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"CALL example.procedure(arg1, arg2, ...) MEMORY LIMIT 100 KB YIELD result;\nCALL example.procedure(arg1, arg2, ...) MEMORY LIMIT 100 MB YIELD result;\nCALL example.procedure(arg1, arg2, ...) MEMORY UNLIMITED YIELD result;\n")),Object(o.b)("p",null,"The limit can either be specified to a specific value (either in ",Object(o.b)("inlineCode",{parentName:"p"},"KB")," or in\n",Object(o.b)("inlineCode",{parentName:"p"},"MB"),"), or it can be set to unlimited."))}p.isMDXComponent=!0},345:function(e,r,n){"use strict";n.d(r,"a",(function(){return s})),n.d(r,"b",(function(){return b}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var r=a.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=p(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=t,b=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return n?a.a.createElement(b,i(i({ref:r},u),{},{components:n})):a.a.createElement(b,i({ref:r},u))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);