"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50854],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,g=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return t?n.createElement(g,s(s({ref:r},p),{},{components:t})):n.createElement(g,s({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21880:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const i={id:"enterprise-features",title:"Enterprise features",sidebar_label:"Enterprise features"},s=void 0,o={unversionedId:"reference-guide/enterprise-features",id:"version-2.10.0/reference-guide/enterprise-features",title:"Enterprise features",description:"Memgraph Enterprise Edition has features that are available only to those that",source:"@site/memgraph_versioned_docs/version-2.10.0/reference-guide/enterprise-features.md",sourceDirName:"reference-guide",slug:"/reference-guide/enterprise-features",permalink:"/docs/memgraph/2.10.0/reference-guide/enterprise-features",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.10.0/reference-guide/enterprise-features.md",tags:[],version:"2.10.0",frontMatter:{id:"enterprise-features",title:"Enterprise features",sidebar_label:"Enterprise features"},sidebar:"memgraph",previous:{title:"User management",permalink:"/docs/memgraph/2.10.0/reference-guide/users"},next:{title:"Enabling Memgraph Enterprise",permalink:"/docs/memgraph/2.10.0/reference-guide/enabling-enterprise"}},u={},l=[{value:"Enabling Memgraph Enterprise",id:"enabling-memgraph-enterprise",level:2},{value:"Audit log",id:"audit-log",level:2},{value:"Auth module",id:"auth-module",level:2},{value:"Exposing system metrics",id:"exposing-system-metrics",level:2},{value:"LDAP Security",id:"ldap-security",level:2},{value:"Security",id:"security",level:2}],p={toc:l};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Memgraph Enterprise Edition has features that are available only to those that\nhave active license key. These features are related to logging features, user\nmanagement and security."),(0,a.kt)("h2",{id:"enabling-memgraph-enterprise"},"Enabling Memgraph Enterprise"),(0,a.kt)("p",null,"Some of Memgraph's features are only available in Enterprise Edition. They are\npresent in the same binary but ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.10.0/reference-guide/enabling-enterprise"},"protected by a license\nkey"),"."),(0,a.kt)("h2",{id:"audit-log"},"Audit log"),(0,a.kt)("p",null,"Memgraph supports all ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.10.0/reference-guide/audit-log"},"query audit logging"),". When\nenabled, the audit log contains records of all queries executed on the database.\nEach executed query is one entry (one line) in the audit log. The audit log\nitself is a CSV file."),(0,a.kt)("h2",{id:"auth-module"},"Auth module"),(0,a.kt)("p",null,"Memgraph supports ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.10.0/reference-guide/auth-module"},"authentication and (optional)\nauthorization")," using a custom built external\nauth module. The two supported operation modes are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"authentication only (username/password verification)"),(0,a.kt)("li",{parentName:"ul"},"authentication and authorization (username/password verification and user to\nrole mapping)")),(0,a.kt)("h2",{id:"exposing-system-metrics"},"Exposing system metrics"),(0,a.kt)("p",null,"HTTP endpoint allows you to fetch ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.10.0/reference-guide/exposing-system-metrics"},"system metrics")," using a GET request.\nThe response contains information about bolt messages, sessions, transactions, streams, triggers, indexes, snapshots,\nquery latency, and many more."),(0,a.kt)("h2",{id:"ldap-security"},"LDAP Security"),(0,a.kt)("p",null,"For the purpose of supporting ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.10.0/reference-guide/ldap-security"},"LDAP authentication and (optional)\nauthorization"),", we have built an auth module\nthat is packaged with Memgraph Enterprise. "),(0,a.kt)("h2",{id:"security"},"Security"),(0,a.kt)("p",null,"Read more about ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.10.0/reference-guide/security"},"security features")," that are\nincorporated into Memgraph Enterprise, including how to create and manage users,\nuser roles, and privileges. This includes assigning passwords and choosing\npassword encryption algorithms, creating user roles and assigning them\nprivileges, and limiting user access to nodes and relationships based on their\nlabels and types with label-based access control."))}c.isMDXComponent=!0}}]);