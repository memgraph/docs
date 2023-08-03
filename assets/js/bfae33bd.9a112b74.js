"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4016],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>g});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=t.createContext({}),s=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),g=i,d=m["".concat(p,".").concat(g)]||m[g]||u[g]||a;return n?t.createElement(d,o(o({ref:r},c),{},{components:n})):t.createElement(d,o({ref:r},c))}));function g(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59688:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var t=n(87462),i=(n(67294),n(3905));const a={id:"enabling-enterprise",title:"Enabling Memgraph Enterprise",sidebar_label:"Enabling Memgraph Enterprise"},o=void 0,l={unversionedId:"reference-guide/enabling-enterprise",id:"version-2.10.0/reference-guide/enabling-enterprise",title:"Enabling Memgraph Enterprise",description:"Some of Memgraph's features are only available in Enterprise Edition. They are",source:"@site/memgraph_versioned_docs/version-2.10.0/reference-guide/enabling-enterprise.md",sourceDirName:"reference-guide",slug:"/reference-guide/enabling-enterprise",permalink:"/docs/memgraph/reference-guide/enabling-enterprise",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.10.0/reference-guide/enabling-enterprise.md",tags:[],version:"2.10.0",frontMatter:{id:"enabling-enterprise",title:"Enabling Memgraph Enterprise",sidebar_label:"Enabling Memgraph Enterprise"},sidebar:"memgraph",previous:{title:"Enterprise features",permalink:"/docs/memgraph/reference-guide/enterprise-features"},next:{title:"Audit log",permalink:"/docs/memgraph/reference-guide/audit-log"}},p={},s=[],c={toc:s};function u(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Some of Memgraph's features are only available in Enterprise Edition. They are\npresent in the same binary but protected by a license key."),(0,i.kt)("p",null,"If you're interested in Memgraph Enterprise, you need to fill out the following\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLSddH_XV000h58MhwJwwrUu2L3uTkejEDPqvstl6eMou_AW-yw/viewform"},"form")," where one of the fields is the organization name."),(0,i.kt)("p",null,"After getting your license key, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"organization.name")," to the same\norganization name you used for the license key, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"enterprise.license")," to\nthe license key you received by running the following queries: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SET DATABASE SETTING 'organization.name' TO 'Organzation';\nSET DATABASE SETTING 'enterprise.license' TO 'License';\n")),(0,i.kt)("p",null,"To check the set values run: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-opencypher"},"SHOW DATABASE SETTING 'organization.name';\nSHOW DATABASE SETTING 'enterprise.license';\n")),(0,i.kt)("p",null,"or:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-opencypher"},"SHOW DATABASE SETTINGS;\n")))}u.isMDXComponent=!0}}]);