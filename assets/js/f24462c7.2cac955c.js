"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12044],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),u=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,v=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?l.createElement(v,i(i({ref:t},c),{},{components:n})):l.createElement(v,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<o;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14362:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var l=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],a={id:"isolation-levels",title:"Isolation levels",sidebar_label:"Isolation levels"},s=void 0,u={unversionedId:"reference-guide/isolation-levels",id:"version-1.6.1/reference-guide/isolation-levels",isDocsHomePage:!1,title:"Isolation levels",description:"Supported isolation levels",source:"@site/memgraph_versioned_docs/version-1.6.1/reference-guide/isolation-levels.md",sourceDirName:"reference-guide",slug:"/reference-guide/isolation-levels",permalink:"/docs/memgraph/1.6.1/reference-guide/isolation-levels",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.6.1/reference-guide/isolation-levels.md",tags:[],version:"1.6.1",frontMatter:{id:"isolation-levels",title:"Isolation levels",sidebar_label:"Isolation levels"},sidebar:"version-1.6.1/memgraph",previous:{title:"Indexing",permalink:"/docs/memgraph/1.6.1/reference-guide/indexing"},next:{title:"Query modules overview",permalink:"/docs/memgraph/1.6.1/reference-guide/query-modules"}},c=[{value:"Supported isolation levels",id:"supported-isolation-levels",children:[],level:2},{value:"Setting the isolation level",id:"setting-the-isolation-level",children:[{value:"Configuration",id:"configuration",children:[],level:3},{value:"Query",id:"query",children:[],level:3}],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"supported-isolation-levels"},"Supported isolation levels"),(0,o.kt)("p",null,"Memgraph currently supports three isolation levels:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SNAPSHOT ISOLATION (default)"),(0,o.kt)("li",{parentName:"ul"},"READ COMMITTED"),(0,o.kt)("li",{parentName:"ul"},"READ UNCOMMITTED")),(0,o.kt)("h2",{id:"setting-the-isolation-level"},"Setting the isolation level"),(0,o.kt)("p",null,"The default isolation level, ",(0,o.kt)("inlineCode",{parentName:"p"},"SNAPSHOT ISOLATION"),", can be changed using the config\nor running a query."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--isolation-level")," configuration flag to any of the supported values will change the\ninitial global isolation level for every query being run on that instance."),(0,o.kt)("h3",{id:"query"},"Query"),(0,o.kt)("p",null,"The initially set isolation level can be changed during runtime using a query\nof the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"SET <scope> TRANSACTION ISOLATION LEVEL <isolation_level>\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<scope>")," defines the scope to which the isolation level change should apply.\nIt can take any of the following values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GLOBAL - apply the new isolation level globally"),(0,o.kt)("li",{parentName:"ul"},"SESSION - apply the new isolation level only for the current session"),(0,o.kt)("li",{parentName:"ul"},"NEXT - apply the new isolation level only for the next transaction in the current session")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<isolation_level")," defines the isolation level which we want to use.\nIt can take any of the following values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SNAPSHOT ISOLATION"),(0,o.kt)("li",{parentName:"ul"},"READ COMMITTED"),(0,o.kt)("li",{parentName:"ul"},"READ UNCOMMITTED")))}d.isMDXComponent=!0}}]);