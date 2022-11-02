"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2363],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,g=u["".concat(c,".").concat(d)]||u[d]||s[d]||a;return t?n.createElement(g,i(i({ref:r},m),{},{components:t})):n.createElement(g,i({ref:r},m))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},20997:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const a={id:"cypherl",title:"Importing Cypher queries (.cypherl format)",sidebar_label:"Cypher queries (.cypherl format)"},i=void 0,p={unversionedId:"reference-guide/import-data/cypherl",id:"version-2.1.1/reference-guide/import-data/cypherl",title:"Importing Cypher queries (.cypherl format)",description:"When Memgraph is running, cypher queries are imported by running",source:"@site/memgraph_versioned_docs/version-2.1.1/reference-guide/import-data/cypherl.md",sourceDirName:"reference-guide/import-data",slug:"/reference-guide/import-data/cypherl",permalink:"/docs/memgraph/2.1.1/reference-guide/import-data/cypherl",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/reference-guide/import-data/cypherl.md",tags:[],version:"2.1.1",frontMatter:{id:"cypherl",title:"Importing Cypher queries (.cypherl format)",sidebar_label:"Cypher queries (.cypherl format)"},sidebar:"memgraph",previous:{title:"LOAD CSV Cypher clause",permalink:"/docs/memgraph/2.1.1/reference-guide/import-data/load-csv-clause"},next:{title:"Indexing",permalink:"/docs/memgraph/2.1.1/reference-guide/indexing"}},c={},l=[],m={toc:l};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When Memgraph is running, cypher queries are imported by running\n",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.1.1/connect-to-memgraph/mgconsole"},"mgconsole")," in non-interactive mode.\nThe user can import queries saved in e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"queries.cypherl")," by issuing the\nfollowing shell command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"mgconsole < queries.cypherl\n")),(0,o.kt)("p",null,"If you installed the Memgraph image using Docker, you will need to run the\nclient using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker run -i --entrypoint=mgconsole memgraph/memgraph-platform --host HOST < queries.cypherl\n")),(0,o.kt)("p",null,"Remember to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"HOST")," with valid IP of the container (see ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.1.1/how-to-work-with-docker#docker-container-ip-address"},"Note for Docker\nusers"),")."),(0,o.kt)("p",null,"For more information about ",(0,o.kt)("inlineCode",{parentName:"p"},"mgconsole")," options run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"mgconsole --help\n")))}s.isMDXComponent=!0}}]);