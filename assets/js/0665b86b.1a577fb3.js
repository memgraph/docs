"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57602],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),u=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=n,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||p;return t?a.createElement(f,i(i({ref:r},c),{},{components:t})):a.createElement(f,i({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,i=new Array(p);i[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<p;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85797:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var a=t(87462),n=t(63366),p=(t(67294),t(3905)),i=["components"],o={id:"mgp_property",title:"mgp_property",sidebar_label:"mgp_property"},l=void 0,u={unversionedId:"reference-guide/query-modules/api/c-api/classes/mgp_property",id:"version-2.0.0/reference-guide/query-modules/api/c-api/classes/mgp_property",isDocsHomePage:!1,title:"mgp_property",description:"Reference to a named property value.",source:"@site/memgraph_versioned_docs/version-2.0.0/reference-guide/query-modules/api/c-api/classes/mgp_property.md",sourceDirName:"reference-guide/query-modules/api/c-api/classes",slug:"/reference-guide/query-modules/api/c-api/classes/mgp_property",permalink:"/docs/memgraph/reference-guide/query-modules/api/c-api/classes/mgp_property",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.0.0/reference-guide/query-modules/api/c-api/classes/mgp_property.md",tags:[],version:"2.0.0",frontMatter:{id:"mgp_property",title:"mgp_property",sidebar_label:"mgp_property"},sidebar:"version-2.0.0/memgraph",previous:{title:"mgp_local_time_parameters",permalink:"/docs/memgraph/reference-guide/query-modules/api/c-api/classes/mgp_local_time_parameters"},next:{title:"mgp_vertex_id",permalink:"/docs/memgraph/reference-guide/query-modules/api/c-api/classes/mgp_vertex_id"}},c=[{value:"Public Attributes",id:"public-attributes",children:[]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable name",id:"variable-name",children:[]},{value:"variable value",id:"variable-value",children:[]}]}],s={toc:c};function m(e){var r=e.components,t=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Reference to a named property value."),(0,p.kt)("h2",{id:"public-attributes"},"Public Attributes"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null}),(0,p.kt)("th",{parentName:"tr",align:null},"Name"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"const char *"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},(0,p.kt)("a",{parentName:"strong",href:"#variable-name"},"name"))," ",(0,p.kt)("br",null),"Name (key) of a property as a NULL terminated string.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"struct mgp_value *"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("strong",{parentName:"td"},(0,p.kt)("a",{parentName:"strong",href:"#variable-value"},"value"))," ",(0,p.kt)("br",null),"Value of the referenced property.")))),(0,p.kt)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),(0,p.kt)("h3",{id:"variable-name"},"variable name"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"const char * name;\n")),(0,p.kt)("p",null,"Name (key) of a property as a NULL terminated string."),(0,p.kt)("h3",{id:"variable-value"},"variable value"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"struct mgp_value * value;\n")),(0,p.kt)("p",null,"Value of the referenced property."))}m.isMDXComponent=!0}}]);