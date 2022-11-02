"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81505],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,y=m["".concat(u,".").concat(d)]||m[d]||s[d]||l;return t?n.createElement(y,i(i({ref:r},c),{},{components:t})):n.createElement(y,i({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},64869:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const l={sidebar_label:"memgraph_query_builder",title:"gqlalchemy.query_builders.memgraph_query_builder"},i=void 0,o={unversionedId:"reference/query_builders/memgraph_query_builder",id:"reference/query_builders/memgraph_query_builder",title:"gqlalchemy.query_builders.memgraph_query_builder",description:"QueryBuilder Objects",source:"@site/gqlalchemy/reference/query_builders/memgraph_query_builder.md",sourceDirName:"reference/query_builders",slug:"/reference/query_builders/memgraph_query_builder",permalink:"/docs/gqlalchemy/reference/query_builders/memgraph_query_builder",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/gqlalchemy/reference/query_builders/memgraph_query_builder.md",tags:[],version:"current",frontMatter:{sidebar_label:"memgraph_query_builder",title:"gqlalchemy.query_builders.memgraph_query_builder"},sidebar:"gqlalchemy",previous:{title:"declarative_base",permalink:"/docs/gqlalchemy/reference/query_builders/declarative_base"},next:{title:"database_client",permalink:"/docs/gqlalchemy/reference/vendors/database_client"}},u={},p=[{value:"QueryBuilder Objects",id:"querybuilder-objects",level:2},{value:"load_csv",id:"load_csv",level:4}],c={toc:p};function s(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"querybuilder-objects"},"QueryBuilder Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class QueryBuilder(DeclarativeBase)\n")),(0,a.kt)("h4",{id:"load_csv"},"load","_","csv"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def load_csv(path: str, header: bool, row: str) -> "DeclarativeBase"\n')),(0,a.kt)("p",null,"Load data from a CSV file by executing a Cypher query for each row."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path")," - A string representing the path to the CSV file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"header")," - A bool indicating if the CSV file starts with a header row."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"row")," - A string representing the name of the variable for iterating\nover each row.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("p",null,"  A ",(0,a.kt)("inlineCode",{parentName:"p"},"DeclarativeBase")," instance for constructing queries."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Examples"),":"),(0,a.kt)("p",null,"  Load CSV with header:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Python")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"load_csv(path=&quot;path/to/my/file.csv&quot;, header=True, row=&quot;row&quot;).return_().execute()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Cypher")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"LOAD CSV FROM &#x27;path/to/my/file.csv&#x27; WITH HEADER AS row RETURN *;")),(0,a.kt)("p",{parentName:"li"},"Load CSV without header:")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Python")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"load_csv(path=&#x27;path/to/my/file.csv&#x27;, header=False, row=&#x27;row&#x27;).return_().execute()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Cypher")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"LOAD CSV FROM &#x27;path/to/my/file.csv&#x27; NO HEADER AS row RETURN *;")))))}s.isMDXComponent=!0}}]);