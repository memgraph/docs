(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1675],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,c=p["".concat(u,".").concat(m)]||p[m]||h[m]||i;return n?a.createElement(c,o(o({ref:t},d),{},{components:n})):a.createElement(c,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47556:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={id:"auth-module",title:"Auth module (Enterprise)",sidebar_label:"Auth module (Enterprise)"},l={unversionedId:"reference-guide/auth-module",id:"version-1.4.0/reference-guide/auth-module",isDocsHomePage:!1,title:"Auth module (Enterprise)",description:"Memgraph supports authentication and (optional) authorization using a custom",source:"@site/memgraph_versioned_docs/version-1.4.0/reference-guide/auth-module.md",sourceDirName:"reference-guide",slug:"/reference-guide/auth-module",permalink:"/memgraph/1.4.0/reference-guide/auth-module",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.4.0/reference-guide/auth-module.md",version:"1.4.0",sidebar_label:"Auth module (Enterprise)",frontMatter:{id:"auth-module",title:"Auth module (Enterprise)",sidebar_label:"Auth module (Enterprise)"},sidebar:"version-1.4.0/memgraph",previous:{title:"Security (Enterprise)",permalink:"/memgraph/1.4.0/reference-guide/security"},next:{title:"LDAP Security (Enterprise)",permalink:"/memgraph/1.4.0/reference-guide/ldap-security"}},u=[{value:"Authentication",id:"authentication",children:[]},{value:"Authorization",id:"authorization",children:[]},{value:"Flags",id:"flags",children:[]},{value:"Communication",id:"communication",children:[]},{value:"Example",id:"example",children:[]},{value:"LDAP",id:"ldap",children:[]}],s={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Memgraph supports authentication and (optional) authorization using a custom\nbuilt external auth module.  The two supported operation modes are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"authentication only (username/password verification)"),(0,i.kt)("li",{parentName:"ul"},"authentication and authorization (username/password verification and user to\nrole mapping)")),(0,i.kt)("p",null,"When a user connects to Memgraph the database will forward the user's supplied\nusername and password to the external auth module and wait for it to deliver\nthe authentication and/or authorization verdict back to the database. Based on\nthe returned verdict, Memgraph will either close the connection to the\nconnected user or it will allow the connection and set-up the user and/or role\naccordingly."),(0,i.kt)("p",null,"When Memgraph is switched to use the external auth module for authentication\nits internal users are automatically disabled. All users are authenticated only\nusing the module, existing local users are ignored (unless they can be\nauthenticated using the module)."),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"In this mode Memgraph will only perform authentication (verification of\nusername and password) using the external auth module.  All user to role\nmappings and user and role permissions are managed through Memgraph."),(0,i.kt)("p",null,"When a user that has never logged in to the database passes authentication\nusing the external auth module, a user object is created for that user. The\nuser can then be seen using the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW USERS;\n")),(0,i.kt)("p",null,"This behavior can be changed to disable login to users that don't have an\nexplicitly created user account."),(0,i.kt)("h2",{id:"authorization"},"Authorization"),(0,i.kt)("p",null,"In this mode Memgraph will perform authentication and authorization using the\nexternal auth module. The authorization supported is in the form of determining\nthe user to role mapping using the module.  User and role permissions are still\nmanaged through Memgraph."),(0,i.kt)("p",null,"When a user that has a role that doesn't yet exist in the database logs in to\nthe database, a role object is created for that user and assigned to that user.\nThe role can then be seen using the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW ROLES;\n")),(0,i.kt)("p",null,"This behavior can be changed to disable login to users that don't have an\nexplicitly created role."),(0,i.kt)("h2",{id:"flags"},"Flags"),(0,i.kt)("p",null,"This section contains the list of flags that are used to configure the external\nauth module authentication and authorization mechanisms used by Memgraph."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Flag"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--auth-module-executable")),(0,i.kt)("td",{parentName:"tr",align:null},"Path to the executable that should be used for user authentication/authorization.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--auth-module-create-user")),(0,i.kt)("td",{parentName:"tr",align:null},"Controls whether users should be implicitly created on first login or they should be explicitly created manually.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--auth-module-create-role")),(0,i.kt)("td",{parentName:"tr",align:null},"Controls whether roles should be implicitly created on first appearance or they should be explicitly created manually.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--auth-module-manage-roles")),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies whether the module is used only for authentication (value is ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),"), or it should be used for both authentication and authorization.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--auth-module-timeout")),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the maximum time that Memgraph will wait for a response from the external auth module.")))),(0,i.kt)("h2",{id:"communication"},"Communication"),(0,i.kt)("p",null,"The external auth module can be written in any programming language. Because of\nthat, the communication protocol between Memgraph and the module is simple to\nimplement."),(0,i.kt)("p",null,"Memgraph uses inter-process pipes to communicate with the module. The module\nwill receive auth requests on file descriptor ",(0,i.kt)("inlineCode",{parentName:"p"},"1000")," and has to return auth\nresponses to file descriptor ",(0,i.kt)("inlineCode",{parentName:"p"},"1001"),". You may be wondering why we didn't just\nuse ",(0,i.kt)("inlineCode",{parentName:"p"},"stdin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout")," for communication. The standard streams aren't used\nbecause external libraries often tend to write something to ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout")," which is\ndifficult to turn off. By using separate file descriptors, ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout")," is left\nintact and can be used freely for debugging purposes (along with ",(0,i.kt)("inlineCode",{parentName:"p"},"stderr"),")."),(0,i.kt)("p",null,"The protocol that is used between Memgraph and the module is as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each auth request is sent as a JSON encoded object in a single line that is\nterminated by a ",(0,i.kt)("inlineCode",{parentName:"li"},"\\n"),"."),(0,i.kt)("li",{parentName:"ul"},"Each auth response must be sent as a JSON encoded object in a single line\nthat is terminated by a ",(0,i.kt)("inlineCode",{parentName:"li"},"\\n"),"."),(0,i.kt)("li",{parentName:"ul"},"Auth requests are objects that contain the following keys:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"username")," - the user's username"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password")," - the user's password"))),(0,i.kt)("li",{parentName:"ul"},"Auth responses must be objects that contain the following keys:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authenticated")," - a ",(0,i.kt)("inlineCode",{parentName:"li"},"bool")," indicating whether the user is allowed to log\nin to the database"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"role")," - a ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," indicating which role the user should have (must be\nsupplied even when the module is used for authentication only)")))),(0,i.kt)("p",null,"If the external auth module crashes during the processing of an auth request,\nMemgraph won't allow the user to log in to the database and will automatically\nrestart the auth module for the next auth request. All crash logs will be seen\nin Memgraph's output (typically in ",(0,i.kt)("inlineCode",{parentName:"p"},"systemd")," logs using ",(0,i.kt)("inlineCode",{parentName:"p"},"journalctl"),")."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"This very simple example auth module is written in Python, but any programming language can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/python3\nimport json\nimport io\n\n\ndef authenticate(username, password):\n    return {"authenticated": True, "role": ""}\n\n\nif __name__ == "__main__":\n    input_stream = io.FileIO(1000, mode="r")\n    output_stream = io.FileIO(1001, mode="w")\n    while True:\n        params = json.loads(input_stream.readline().decode("ascii"))\n        ret = authenticate(**params)\n        output_stream.write((json.dumps(ret) + "\\n").encode("ascii"))\n')),(0,i.kt)("p",null,"In the example you can see exactly how the communication protocol works and you\ncan see the function that is used for authentication (and authorization).  When\nwriting your own modules you just have to reimplement the ",(0,i.kt)("inlineCode",{parentName:"p"},"authenticate"),"\nfunction according to your needs."),(0,i.kt)("p",null,"Because the authentication (and authorization) function has a simple signature,\nit is easy (and recommended) to write unit (or integration) tests in separate\nfiles. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/python3\nimport module\n\nassert module.authenticate("sponge", "bob") == {"authenticated": True, "role": ""}\nassert module.authenticate("CHUCK", "NORRIS") == {"authenticated": True, "role": ""}\n')),(0,i.kt)("h2",{id:"ldap"},"LDAP"),(0,i.kt)("p",null,"With every Memgraph Enterprise installation we provide our own module that\nsupports authentication and authorization using LDAP. For more information\nabout how the module should be set-up see the\n",(0,i.kt)("a",{parentName:"p",href:"/memgraph/1.4.0/reference-guide/ldap-security"},"reference guide"),"."))}d.isMDXComponent=!0}}]);