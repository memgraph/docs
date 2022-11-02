"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94866],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,g=m["".concat(o,".").concat(d)]||m[d]||s[d]||p;return r?a.createElement(g,l(l({ref:t},c),{},{components:r})):a.createElement(g,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,l=new Array(p);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<p;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58728:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const p={id:"mgp_property",title:"mgp_property",sidebar_label:"mgp_property"},l=void 0,i={unversionedId:"reference-guide/query-modules/api/c-api/classes/mgp_property",id:"version-2.1.1/reference-guide/query-modules/api/c-api/classes/mgp_property",title:"mgp_property",description:"Reference to a named property value.",source:"@site/memgraph_versioned_docs/version-2.1.1/reference-guide/query-modules/api/c-api/classes/mgp_property.md",sourceDirName:"reference-guide/query-modules/api/c-api/classes",slug:"/reference-guide/query-modules/api/c-api/classes/mgp_property",permalink:"/docs/memgraph/2.1.1/reference-guide/query-modules/api/c-api/classes/mgp_property",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/reference-guide/query-modules/api/c-api/classes/mgp_property.md",tags:[],version:"2.1.1",frontMatter:{id:"mgp_property",title:"mgp_property",sidebar_label:"mgp_property"},sidebar:"memgraph",previous:{title:"mgp_local_time_parameters",permalink:"/docs/memgraph/2.1.1/reference-guide/query-modules/api/c-api/classes/mgp_local_time_parameters"},next:{title:"mgp_vertex_id",permalink:"/docs/memgraph/2.1.1/reference-guide/query-modules/api/c-api/classes/mgp_vertex_id"}},o={},u=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"variable name",id:"variable-name",level:3},{value:"variable value",id:"variable-value",level:3}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Reference to a named property value."),(0,n.kt)("h2",{id:"public-attributes"},"Public Attributes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"const char *"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("a",{parentName:"strong",href:"#variable-name"},"name"))," ",(0,n.kt)("br",null),"Name (key) of a property as a NULL terminated string.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"struct mgp_value *"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("a",{parentName:"strong",href:"#variable-value"},"value"))," ",(0,n.kt)("br",null),"Value of the referenced property.")))),(0,n.kt)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),(0,n.kt)("h3",{id:"variable-name"},"variable name"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"const char * name;\n")),(0,n.kt)("p",null,"Name (key) of a property as a NULL terminated string."),(0,n.kt)("h3",{id:"variable-value"},"variable value"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"struct mgp_value * value;\n")),(0,n.kt)("p",null,"Value of the referenced property."))}s.isMDXComponent=!0}}]);