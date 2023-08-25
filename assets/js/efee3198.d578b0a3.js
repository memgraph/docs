"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79982],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},47946:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={id:"enterprise-features",title:"Enterprise features",sidebar_label:"Enterprise features"},o=void 0,s={unversionedId:"how-to-guides/enterprise-features",id:"version-2.10.0/how-to-guides/enterprise-features",title:"Enterprise features",description:"Some of Memgraph's features are only available in Enterprise Edition. Take a",source:"@site/memgraph_versioned_docs/version-2.10.0/how-to-guides/enterprise-features.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/enterprise-features",permalink:"/docs/memgraph/2.10.0/how-to-guides/enterprise-features",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.10.0/how-to-guides/enterprise-features.md",tags:[],version:"2.10.0",frontMatter:{id:"enterprise-features",title:"Enterprise features",sidebar_label:"Enterprise features"},sidebar:"memgraph",previous:{title:"Use init flags with Docker",permalink:"/docs/memgraph/2.10.0/how-to-guides/use-init-flags"},next:{title:"Manage authentication and authorization",permalink:"/docs/memgraph/2.10.0/how-to-guides/manage-users-using-ldap"}},l={},u=[{value:"Manage authentication and authorization",id:"manage-authentication-and-authorization",level:2},{value:"Manage user privileges",id:"manage-user-privileges",level:2},{value:"Manage label-based access control",id:"manage-label-based-access-control",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Some of Memgraph's features are only available in Enterprise Edition. Take a\nlook how to use features related to authentication, authorization and user\nprivileges."),(0,r.kt)("h2",{id:"manage-authentication-and-authorization"},"Manage authentication and authorization"),(0,r.kt)("p",null,"In large organizations it is often difficult to ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.10.0/how-to-guides/manage-users-using-ldap"},"manage permissions that staff\nmembers have in the organization"),".\nOrganizations typically use an LDAP server to hold and manage the permissions.\nBecause LDAP servers are already set-up in most large organizations, it is\nconvenient for the organization to allow all staff members to have access to the\ndatabase using the already available centralized user management system."),(0,r.kt)("h2",{id:"manage-user-privileges"},"Manage user privileges"),(0,r.kt)("p",null,"Most databases have multiple users accessing and modifying data within the\ndatabase. This might pose a serious security concern for the system\nadministrators that wish to ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.10.0/how-to-guides/manage-user-privileges"},"grant only certain privileges to certain\nusers"),". A typical example would be an\ninternal database of some company which tracks data about their employees.\nNaturally, only certain users of the database should be able to perform queries\nwhich modify that data."),(0,r.kt)("p",null,"At Memgraph, we provide the administrators with the option of granting, denying\nor revoking a certain set of privileges to some users or groups of users (i.e.\nusers that are assigned a specific user role), thereby eliminating such security\nconcerns."),(0,r.kt)("h2",{id:"manage-label-based-access-control"},"Manage label-based access control"),(0,r.kt)("p",null,"Sometimes, authorizing the database by granting and denying clause privileges is\nnot enough to make the database fully secure. Certain nodes and relationships\ncan be confidential and must be restricted from viewing and manipulating by\nmultiple users."),(0,r.kt)("p",null,"In response to the need for such authorization, Memgraph has advanced its\nauthorization features to ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.10.0/how-to-guides/manage-label-based-access-control"},"enable authorization on node labels and relationship\nedge types"),". By applying\nauthorization to graph's first class citizens, a database administrator can now\nkeep all the data in one database while keeping any private data secure from\nthose who don't have adequate permission."))}p.isMDXComponent=!0}}]);