(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2042],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,g=m["".concat(l,".").concat(d)]||m[d]||s[d]||a;return t?n.createElement(g,i(i({ref:r},u),{},{components:t})):n.createElement(g,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},23191:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var n=t(22122),o=t(19756),a=(t(67294),t(3905)),i={id:"cypherl",title:"Importing Cypher queries",sidebar_label:"Importing Cypher queries"},p={unversionedId:"import-data/cypherl",id:"import-data/cypherl",isDocsHomePage:!1,title:"Importing Cypher queries",description:"When Memgraph is running, cypher queries are imported by running mgconsole in",source:"@site/docs/import-data/cypherl.md",sourceDirName:"import-data",slug:"/import-data/cypherl",permalink:"/memgraph/next/import-data/cypherl",editUrl:"https://github.com/memgraph/docs/tree/master/docs/import-data/cypherl.md",version:"current",sidebar_label:"Importing Cypher queries",frontMatter:{id:"cypherl",title:"Importing Cypher queries",sidebar_label:"Importing Cypher queries"},sidebar:"memgraph",previous:{title:"LOAD CSV Cypher clause",permalink:"/memgraph/next/import-data/load-csv-clause"},next:{title:"Tutorials",permalink:"/memgraph/next/tutorials"}},l=[],c={toc:l};function u(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When Memgraph is running, cypher queries are imported by running ",(0,a.kt)("a",{parentName:"p",href:"/memgraph/next/connect-to-memgraph/methods/mgconsole"},"mgconsole")," in\nnon-interactive mode. The user can import queries saved in e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"queries.txt"),"\nby issuing the following shell command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"mgconsole --use-ssl=False < queries.txt\n")),(0,a.kt)("p",null,"If you installed Memgraph using Docker, you will need to run the client using\nthe following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker run -i --entrypoint=mgconsole memgraph --host HOST --use-ssl=False < queries.txt\n")),(0,a.kt)("p",null,"Remember to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"HOST")," with valid IP of the container (see\n",(0,a.kt)("a",{parentName:"p",href:"/memgraph/next/how-to-work-with-docker#docker-container-ip-address"},"Note for Docker users"),")."),(0,a.kt)("p",null,"For more information about ",(0,a.kt)("inlineCode",{parentName:"p"},"mgconsole")," options run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"mgconsole --help\n")))}u.isMDXComponent=!0}}]);