"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26258],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),h=a,d=m["".concat(u,".").concat(h)]||m[h]||l[h]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78055:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"faq",title:"Frequently asked questions",sidebar_label:"FAQ",slug:"/faq"},u=void 0,p={unversionedId:"getting-help/faq",id:"getting-help/faq",isDocsHomePage:!1,title:"Frequently asked questions",description:"What is Memgraph?",source:"@site/mage/getting-help/faq.md",sourceDirName:"getting-help",slug:"/faq",permalink:"/docs/mage/faq",editUrl:"https://github.com/memgraph/docs/tree/master/mage/getting-help/faq.md",tags:[],version:"current",frontMatter:{id:"faq",title:"Frequently asked questions",sidebar_label:"FAQ",slug:"/faq"},sidebar:"mage",previous:{title:"Getting help",permalink:"/docs/mage/getting-help"}},c=[{value:"What is Memgraph?",id:"what-is-memgraph",children:[]},{value:"What is MAGE?",id:"what-is-mage",children:[]},{value:"What are query modules?",id:"what-are-query-modules",children:[]},{value:"What is Cypher?",id:"what-is-cypher",children:[]}],l={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"what-is-memgraph"},"What is Memgraph?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Memgraph")," is a native in-memory graph database built to handle real-time\nuse-cases at enterprise scale. Memgraph supports strongly-consistent ACID\ntransactions and uses the standardized ",(0,o.kt)("strong",{parentName:"p"},"Cypher")," query language for\nstructuring, manipulating, and exploring data."),(0,o.kt)("h3",{id:"what-is-mage"},"What is MAGE?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"MAGE")," stands for ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Advanced Graph Extensions"),". It\u2019s an open-source\nproject started by Memgraph that encourages developers to share innovative and\nuseful ",(0,o.kt)("strong",{parentName:"p"},"query modules")," (custom Cypher procedures) so the whole community can\nbenefit from them."),(0,o.kt)("h3",{id:"what-are-query-modules"},"What are query modules?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Query modules")," are essentially collections of custom Cypher procedures that\nextend the basic functionalities of the Cypher query language. Each query module\nconsists of procedures that are connected by a common theme (community detection\nfor example). You can implement them using a Python or a C API. "),(0,o.kt)("h3",{id:"what-is-cypher"},"What is Cypher?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cypher")," is a ",(0,o.kt)("strong",{parentName:"p"},"graph query language")," that allows users to store and retrieve\ndata from a graph database."))}m.isMDXComponent=!0}}]);