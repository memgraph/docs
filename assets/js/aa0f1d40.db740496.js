"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16235],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},67731:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"security",title:"Security (Enterprise)",sidebar_label:"Security (Enterprise)"},s=void 0,p={unversionedId:"reference-guide/security",id:"version-1.6.0/reference-guide/security",isDocsHomePage:!1,title:"Security (Enterprise)",description:"Before reading this article we highly recommend going through a how-to guide",source:"@site/memgraph_versioned_docs/version-1.6.0/reference-guide/security.md",sourceDirName:"reference-guide",slug:"/reference-guide/security",permalink:"/docs/memgraph/1.6.0/reference-guide/security",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.6.0/reference-guide/security.md",tags:[],version:"1.6.0",frontMatter:{id:"security",title:"Security (Enterprise)",sidebar_label:"Security (Enterprise)"},sidebar:"version-1.6.0/memgraph",previous:{title:"LDAP Security (Enterprise)",permalink:"/docs/memgraph/1.6.0/reference-guide/ldap-security"},next:{title:"Concepts overview",permalink:"/docs/memgraph/1.6.0/concepts"}},u=[{value:"Users",id:"users",children:[]},{value:"User Roles",id:"user-roles",children:[]},{value:"Privileges",id:"privileges",children:[]}],c={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Before reading this article we highly recommend going through a how-to guide\non ",(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/1.6.0/database-functionalities/manage-user-privileges"},"managing user privileges"),"\nwhich contains more thorough explanations of the concepts behind ",(0,i.kt)("inlineCode",{parentName:"p"},"openCypher"),"\ncommands listed in this article."),(0,i.kt)("h2",{id:"users"},"Users"),(0,i.kt)("p",null,"Creating a user can be done by executing the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"  CREATE USER user_name [IDENTIFIED BY 'password'];\n")),(0,i.kt)("p",null,"If the user should authenticate themself on each session, i.e. provide their\npassword on each session, the part within the brackets is mandatory. Otherwise,\nthe password is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," and the user will be allowed to log-in using\nany password provided that they provide the correct username."),(0,i.kt)("p",null,"You can also set or alter a user's password anytime by issuing the following\ncommand:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"  SET PASSWORD FOR user_name TO 'new_password';\n")),(0,i.kt)("p",null,"Removing a user's password, i.e. allowing the user to log-in using any\npassword can be done by setting it to ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"  SET PASSWORD FOR user_name TO null;\n")),(0,i.kt)("h2",{id:"user-roles"},"User Roles"),(0,i.kt)("p",null,"Each user can be assigned at most one user role. One can think of user roles\nas abstractions which capture the privilege levels of a set of users. For\nexample, suppose that ",(0,i.kt)("inlineCode",{parentName:"p"},"Dominik")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Marko")," belong to upper management of\na certain company. It makes sense to grant them a set of privileges that other\nusers are not entitled to so, instead of granting those privileges to each\nof them, we can create a role with those privileges called ",(0,i.kt)("inlineCode",{parentName:"p"},"manager"),"\nwhich we assign to ",(0,i.kt)("inlineCode",{parentName:"p"},"Dominik")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Marko"),"."),(0,i.kt)("p",null,"In other words, Each privilege that is granted to a user role is automatically\ngranted to a user (unless it has been explicitly denied to that user).\nSimilarly, each privilege that is denied to a user role is automatically denied\nto a user (even if it has been explicitly granted to that user)."),(0,i.kt)("p",null,"Creating a user role can be done by executing the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"  CREATE ROLE role_name;\n")),(0,i.kt)("p",null,"Assigning a user role to a certain user can be done by the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"  SET ROLE FOR user_name TO role_name;\n")),(0,i.kt)("p",null,"Removing the role from the user can be done by:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"  CLEAR ROLE FOR user_name;\n")),(0,i.kt)("p",null,"Finally, showing all users that have a certain role can be done as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"  SHOW USERS FOR role_name;\n")),(0,i.kt)("p",null,"Similarly, querying which role a certain user has can be done as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"  SHOW ROLE FOR user_name;\n")),(0,i.kt)("h2",{id:"privileges"},"Privileges"),(0,i.kt)("p",null,"At the moment, privileges are confined to users' abilities to perform certain\n",(0,i.kt)("inlineCode",{parentName:"p"},"OpenCypher")," queries. Namely users can be given permission to execute a subset\nof the following commands: ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MATCH"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MERGE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SET"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"REMOVE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"INDEX"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AUTH"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"REPLICATION"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"READ_FILE"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"FREE_MEMORY"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DURABILITY"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"TRIGGER"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"STREAM"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"CONFIG"),"."),(0,i.kt)("p",null,"Granting a certain set of privileges to a specific user or user role can be\ndone by issuing the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"  GRANT privilege_list TO user_or_role;\n")),(0,i.kt)("p",null,"For example, granting ",(0,i.kt)("inlineCode",{parentName:"p"},"AUTH")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"INDEX")," privileges to users with the role\n",(0,i.kt)("inlineCode",{parentName:"p"},"moderator")," would be written as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"  GRANT AUTH, INDEX TO moderator:\n")),(0,i.kt)("p",null,"Similarly, denying privileges is done using the ",(0,i.kt)("inlineCode",{parentName:"p"},"DENY")," keyword instead of\n",(0,i.kt)("inlineCode",{parentName:"p"},"GRANT"),"."),(0,i.kt)("p",null,"Both denied and granted privileges can be revoked, meaning that their status is\nnot defined for that user or role. Revoking is done using the ",(0,i.kt)("inlineCode",{parentName:"p"},"REVOKE")," keyword.\nThe users should note that, although semantically unintuitive, the level of a\ncertain privilege can be raised by using ",(0,i.kt)("inlineCode",{parentName:"p"},"REVOKE"),". For instance, suppose a user\nhas been denied a ",(0,i.kt)("inlineCode",{parentName:"p"},"INDEX")," privilege, but the role it belongs to is granted\nthat privilege. Currently, the user is unable to use indexing features,\nbut, after revoking the user's ",(0,i.kt)("inlineCode",{parentName:"p"},"INDEX")," privilege, they will be able to do so."),(0,i.kt)("p",null,"Finally, if you wish to grant, deny or revoke all privileges and find it tedious\nto explicitly list them, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ALL PRIVILEGES")," construct instead.\nFor example, revoking all privileges from user ",(0,i.kt)("inlineCode",{parentName:"p"},"jdoe")," can be done with the\nfollowing command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"  REVOKE ALL PRIVILEGES FROM jdoe;\n")),(0,i.kt)("p",null,"Finally, obtaining the status of each privilege for a certain user or role can be\ndone by issuing the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"  SHOW PRIVILEGES FOR user_or_role;\n")))}d.isMDXComponent=!0}}]);