"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76163],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),d=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=d(e.components);return n.createElement(o.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,g=p["".concat(o,".").concat(m)]||p[m]||c[m]||r;return t?n.createElement(g,s(s({ref:a},u),{},{components:t})):n.createElement(g,s({ref:a},u))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=p;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var d=2;d<r;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},48451:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=t(87462),i=(t(67294),t(3905));const r={id:"multi-tenancy",title:"Multi-Tenant Support (Enterprise)",sidebar_label:"Multi-tenancy"},s=void 0,l={unversionedId:"reference-guide/multi-tenancy",id:"version-2.10.0/reference-guide/multi-tenancy",title:"Multi-Tenant Support (Enterprise)",description:"Multi-tenant support in Memgraph enables users to manage multiple isolated",source:"@site/memgraph_versioned_docs/version-2.10.0/reference-guide/multi-tenancy.md",sourceDirName:"reference-guide",slug:"/reference-guide/multi-tenancy",permalink:"/docs/memgraph/reference-guide/multi-tenancy",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.10.0/reference-guide/multi-tenancy.md",tags:[],version:"2.10.0",frontMatter:{id:"multi-tenancy",title:"Multi-Tenant Support (Enterprise)",sidebar_label:"Multi-tenancy"},sidebar:"memgraph",previous:{title:"LDAP Security",permalink:"/docs/memgraph/reference-guide/ldap-security"},next:{title:"Security",permalink:"/docs/memgraph/reference-guide/security"}},o={},d=[{value:"Default database",id:"default-database",level:2},{value:"Isolated databases",id:"isolated-databases",level:2},{value:"Database configuration and data directory",id:"database-configuration-and-data-directory",level:2},{value:"User interface",id:"user-interface",level:2},{value:"Cypher queries for multi-tenancy",id:"cypher-queries-for-multi-tenancy",level:3},{value:"User&#39;s main database",id:"users-main-database",level:3},{value:"User Privileges and Database Access",id:"user-privileges-and-database-access",level:3},{value:"Additional multi-tenant privileges",id:"additional-multi-tenant-privileges",level:3},{value:"Configuration flags",id:"configuration-flags",level:3},{value:"Using Neo4j Drivers",id:"using-neo4j-drivers",level:3},{value:"Audit Logs",id:"audit-logs",level:3},{value:"Backwards compatibility",id:"backwards-compatibility",level:2}],u={toc:d};function c(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Multi-tenant support in Memgraph enables users to manage multiple isolated\ndatabases within a single instance. The primary objective is to facilitate\nefficient resource isolation, maintain data integrity, and manage access for\ndifferent clients."),(0,i.kt)("p",null,"In the current version, all isolated databases share the underlying resources so\nthere is no provision to restrict CPU or RAM usage for a specific database.\nInstead, global limitations are imposed on Memgraph as a whole."),(0,i.kt)("h2",{id:"default-database"},"Default database"),(0,i.kt)("p",null,"A default database named 'memgraph' is automatically created during startup. New\nusers are granted access only to this default database. The default\ndatabase name cannot be altered."),(0,i.kt)("h2",{id:"isolated-databases"},"Isolated databases"),(0,i.kt)("p",null,"Isolated databases within Memgraph function as distinct single-database Memgraph\ninstances. Queries executed on a specific database should operate as if it were\nthe sole database in the system, preventing cross-database contamination. Users\ninteract with individual databases, and cross-database queries are prohibited."),(0,i.kt)("h2",{id:"database-configuration-and-data-directory"},"Database configuration and data directory"),(0,i.kt)("p",null,"At present, all isolated databases share identical configurations. There is no\nprovision to specify a per-database configuration."),(0,i.kt)("p",null,"The sole distinction lies in the location of the data directory. The designated\ndata directory serves as the root and retains data associated with the default\ndatabase. Other databases are housed in new directories within\n",(0,i.kt)("inlineCode",{parentName:"p"},"data_directory/databases/*db_name*"),"."),(0,i.kt)("p",null,"The default ",(0,i.kt)("inlineCode",{parentName:"p"},"memgraph")," database also includes a directory\n",(0,i.kt)("inlineCode",{parentName:"p"},"data_directory/databases/memgraph"),", which contains symbolic links leading back\nto the root. Some links are proactively generated and their status may vary\nbased on configuration."),(0,i.kt)("h2",{id:"user-interface"},"User interface"),(0,i.kt)("h3",{id:"cypher-queries-for-multi-tenancy"},"Cypher queries for multi-tenancy"),(0,i.kt)("p",null,"Users interact with multi-tenant features through specialized Cypher queries:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"CREATE DATABASE name"),": Creates a new database."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"DROP DATABASE name"),": Deletes a specified database."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SHOW DATABASES"),": Lists all active databases, indicating the currently\nselected one."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"USE DATABASE name"),": Switches focus to a specific database (disabled during\ntransactions)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"GRANT DATABASE name TO user"),": Grants a user access to a specified database."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"REVOKE DATABASE name FROM user"),": Revokes a user's access to a specified\ndatabase."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SET MAIN DATABASE name FOR user"),": Sets a user's default (landing) database."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SHOW DATABASE PRIVILEGES FOR user"),": Lists a user's database access rights.")),(0,i.kt)("h3",{id:"users-main-database"},"User's main database"),(0,i.kt)("p",null,"Administrators assign default databases to users, ensuring a seamless and secure\nconnection experience. Users cannot connect to Memgraph if they lack access\nrights to their default database. This situation may arise from database\ndeletion or revoked access rights."),(0,i.kt)("h3",{id:"user-privileges-and-database-access"},"User Privileges and Database Access"),(0,i.kt)("p",null,"Authentication and authorization data are shared across databases, providing a\nunified source of truth. A single user can access multiple databases with a\nglobal set of privileges, but currently, per-database privileges cannot be\ngranted."),(0,i.kt)("p",null,"Access to all databases can be granted or revoked using wildcards:\n",(0,i.kt)("inlineCode",{parentName:"p"},"GRANT DATABASE * TO user;")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"REVOKE DATABASE * FROM user;"),"."),(0,i.kt)("h3",{id:"additional-multi-tenant-privileges"},"Additional multi-tenant privileges"),(0,i.kt)("p",null,"Administrators manage multi-tenant privileges with:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MULTI_DATABASE_USE"),": Enables database switching and listing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MULTI_DATABASE_EDIT"),": Permits database creation and deletion.")),(0,i.kt)("h3",{id:"configuration-flags"},"Configuration flags"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"data_recovery_on_startup")," flag replaces ",(0,i.kt)("inlineCode",{parentName:"p"},"storage_recover_on_startup"),",\nfacilitating recovery of individual databases and their contents during startup.\n",(0,i.kt)("inlineCode",{parentName:"p"},"storage_recover_on_startup")," is still functional but deprecated."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"storage_delete_on_drop")," is set to true, the underlying directories\nassociated with the dropped database will be deleted."),(0,i.kt)("h3",{id:"using-neo4j-drivers"},"Using Neo4j Drivers"),(0,i.kt)("p",null,"Neo4j drivers interact with multi-tenant databases in two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Through Cypher queries."),(0,i.kt)("li",{parentName:"ol"},"By defining the ",(0,i.kt)("inlineCode",{parentName:"li"},"database")," field. The ",(0,i.kt)("inlineCode",{parentName:"li"},"USE DATABASE")," query is disabled when\nthe database field is defined. The query consistently runs against the\nspecified database.")),(0,i.kt)("p",null,"Example using Neo4j Python driver:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import neo4j\n\ndriver = neo4j.GraphDatabase.driver("bolt://localhost:7687", auth=("user", "pass"))\n\nwith driver.session() as session:\n    session.run(...)  # Executes on the default database\n    session.run("USE DATABASE db1")\n    session.run(...)  # Executes on db1\n\nwith driver.session(database="db2") as session:\n    session.run(...)  # Executes on db2\n    session.run("USE DATABASE db1")  # Error: database switching disabled\n')),(0,i.kt)("h3",{id:"audit-logs"},"Audit Logs"),(0,i.kt)("p",null,"Audit logs now encompass the active database name, positioned immediately after\nthe username field."),(0,i.kt)("h2",{id:"backwards-compatibility"},"Backwards compatibility"),(0,i.kt)("p",null,"The multi-tenant feature ensures backwards compatibility, facilitating smooth\nversion upgrades and downgrades without disrupting user experience. During an\nupgrade, previous data is migrated to the default database, while downgrading\nretains data solely in the default database."))}c.isMDXComponent=!0}}]);