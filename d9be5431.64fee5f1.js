(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(179)),o={id:"ldap-security",title:"LDAP Security (Enterprise)",sidebar_label:"LDAP Security (Enterprise)"},u={unversionedId:"reference-guide/ldap-security",id:"reference-guide/ldap-security",isDocsHomePage:!1,title:"LDAP Security (Enterprise)",description:"For the purpose of supporting LDAP authentication and (optional)",source:"@site/docs/reference-guide/ldap-security.md",slug:"/reference-guide/ldap-security",permalink:"/memgraph/reference-guide/ldap-security",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/ldap-security.md",version:"current",sidebar_label:"LDAP Security (Enterprise)",sidebar:"memgraph",previous:{title:"Auth module (Enterprise)",permalink:"/memgraph/reference-guide/auth-module"},next:{title:"Audit log (Enterprise)",permalink:"/memgraph/reference-guide/audit-log"}},l=[{value:"Authentication",id:"authentication",children:[]},{value:"Authorization",id:"authorization",children:[]},{value:"Module requirements",id:"module-requirements",children:[]},{value:"Module configuration",id:"module-configuration",children:[]},{value:"Database configuration",id:"database-configuration",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"For the purpose of supporting LDAP authentication and (optional)\nauthorization, we have built an auth module that is packaged with Memgraph\nEnterprise. For more information about auth modules see the\n",Object(i.a)("a",{parentName:"p",href:"/memgraph/reference-guide/auth-module"},"reference guide"),"."),Object(i.a)("p",null,"The module supports two operation modes:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"authentication only (LDAP bind request)"),Object(i.a)("li",{parentName:"ul"},"authentication and authorization (LDAP bind and search requests)")),Object(i.a)("h2",{id:"authentication"},"Authentication"),Object(i.a)("p",null,"When using LDAP authentication the module builds the DN used for authentication\nusing the user specified username and the following formula:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-plaintext"},"DN = prefix + username + suffix\n")),Object(i.a)("p",null,"In most common situations the ",Object(i.a)("inlineCode",{parentName:"p"},"prefix")," will be ",Object(i.a)("inlineCode",{parentName:"p"},"cn=")," and the ",Object(i.a)("inlineCode",{parentName:"p"},"suffix")," will be\n",Object(i.a)("inlineCode",{parentName:"p"},",dc=example,dc=com"),". With an example username ",Object(i.a)("inlineCode",{parentName:"p"},"alice")," that would yield a DN\nequal to ",Object(i.a)("inlineCode",{parentName:"p"},"cn=alice,dc=example,dc=com")," which will then be used for the LDAP bind\noperation with the user specified password."),Object(i.a)("h2",{id:"authorization"},"Authorization"),Object(i.a)("p",null,"Authentication is performed in the same way as above. After the user is\nauthenticated, the module searches through the role mapping root DN object that\ncontains role mappings. A role mapping object that has the current bound user\nas its ",Object(i.a)("inlineCode",{parentName:"p"},"member")," attribute is used as the user's role. The role that is mapped\nto the user is the ",Object(i.a)("inlineCode",{parentName:"p"},"CN")," attribute of the role mapping object.  The attribute\nthat contains the user DN in the mapping object, as well as the attribute that\ncontains the role name, can be changed in the module configuration file to\naccommodate your LDAP schema."),Object(i.a)("p",null,"Note: When searching for a role in directories that have thousands of roles,\nthe search process could take a long time. That could cause long login times."),Object(i.a)("h2",{id:"module-requirements"},"Module requirements"),Object(i.a)("p",null,"The module is written in Python 3 and it must be installed on the server for\nyou to be able to use it. The Python version should be at least ",Object(i.a)("inlineCode",{parentName:"p"},"3.5"),".  Also,\nyou must have the following Python 3 libraries installed:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"ldap3")," - used to communicate with the LDAP server"),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"PyYAML")," - used to parse the configuration file")),Object(i.a)("h2",{id:"module-configuration"},"Module configuration"),Object(i.a)("p",null,"The module configuration file is ",Object(i.a)("inlineCode",{parentName:"p"},"/etc/memgraph/auth_module/ldap.yaml"),".  An\ninitial example configuration file that has all settings documented and\nexplained is ",Object(i.a)("inlineCode",{parentName:"p"},"/etc/memgraph/auth_module/ldap.example.yaml"),". You can copy the\nexample configuration file into the module configuration file to get you up and\nrunning quickly."),Object(i.a)("h2",{id:"database-configuration"},"Database configuration"),Object(i.a)("p",null,"In order to enable use of the LDAP authentication and authorization module you\nhave to specify to Memgraph to use it. You should specify the flag\n",Object(i.a)("inlineCode",{parentName:"p"},"--auth-module-executable /usr/lib/memgraph/auth_module/ldap.py"),"."),Object(i.a)("p",null,"Other flags that change the behavior of the database to module integration\ncan be specified according to your needs."))}p.isMDXComponent=!0},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(o,".").concat(h)]||d[h]||s[h]||i;return n?r.a.createElement(m,u(u({ref:t},c),{},{components:n})):r.a.createElement(m,u({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);