"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61141],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},i=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return t?n.createElement(d,s(s({ref:r},i),{},{components:t})):n.createElement(d,s({ref:r},i))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},88658:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={sidebar_label:"transporter",title:"gqlalchemy.transformations.export.transporter"},s=void 0,p={unversionedId:"reference/transformations/export/transporter",id:"reference/transformations/export/transporter",title:"gqlalchemy.transformations.export.transporter",description:"Transporter Objects",source:"@site/gqlalchemy/reference/transformations/export/transporter.md",sourceDirName:"reference/transformations/export",slug:"/reference/transformations/export/transporter",permalink:"/docs/gqlalchemy/reference/transformations/export/transporter",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/gqlalchemy/reference/transformations/export/transporter.md",tags:[],version:"current",frontMatter:{sidebar_label:"transporter",title:"gqlalchemy.transformations.export.transporter"},sidebar:"gqlalchemy",previous:{title:"graph_transporter",permalink:"/docs/gqlalchemy/reference/transformations/export/graph_transporter"},next:{title:"graph_importer",permalink:"/docs/gqlalchemy/reference/transformations/importing/graph_importer"}},l={},c=[{value:"Transporter Objects",id:"transporter-objects",level:2},{value:"export",id:"export",level:4}],i={toc:c};function m(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"transporter-objects"},"Transporter Objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Transporter(ABC)\n")),(0,o.kt)("h4",{id:"export"},"export"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@abstractmethod\ndef export(query_results)\n")),(0,o.kt)("p",null,"Abstract method that will be overriden by subclasses that will know which correct graph type to create."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Raises"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NotImplementedError")," - The method must be override by a specific translator.")))}m.isMDXComponent=!0}}]);