"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37631],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),m=r,d=h["".concat(s,".").concat(m)]||h[m]||p[m]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},71484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={id:"transactions",title:"Transactions",sidebar_label:"Transactions"},o=void 0,l={unversionedId:"reference-guide/transactions",id:"reference-guide/transactions",title:"Transactions",description:"All Cypher queries are run within transactions, which means that all modification",source:"@site/docs/reference-guide/transactions.md",sourceDirName:"reference-guide",slug:"/reference-guide/transactions",permalink:"/docs/memgraph/next/reference-guide/transactions",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/transactions.md",tags:[],version:"current",frontMatter:{id:"transactions",title:"Transactions",sidebar_label:"Transactions"},sidebar:"memgraph",previous:{title:"Python API",permalink:"/docs/memgraph/next/reference-guide/streams/transformation-modules/api/python-api"},next:{title:"SSL encryption",permalink:"/docs/memgraph/next/reference-guide/encryption"}},s={},c=[{value:"Explicit transactions",id:"explicit-transactions",level:2},{value:"Isolation levels",id:"isolation-levels",level:2},{value:"Setting the isolation level",id:"setting-the-isolation-level",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All Cypher queries are run within transactions, which means that all modification\nmade by a single query are held in memory by the transaction until the query\nis successfully executed. The changes are then committed and visible to all\nother transactions, users and systems. In the case of an error, the transaction\nis rolled back and no changes are committed."),(0,r.kt)("p",null,"These automatic transactions are also called implicit transactions."),(0,r.kt)("p",null,"Users can also create explicit transactions to execute multiple Cypher queries\nin sequence, then commit them or roll them back. "),(0,r.kt)("p",null,"During transaction execution, an important property of a database is the\nisolation level that defines how or when the changes made by one operation\nbecome visible to others. "),(0,r.kt)("h2",{id:"explicit-transactions"},"Explicit transactions"),(0,r.kt)("p",null,"To start a transaction, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"BEGIN;")," query. "),(0,r.kt)("p",null,"All the following queries will be executed as a part of a single transaction."),(0,r.kt)("p",null,"If any of the queries fails, further queries will no longer be successfully\nexecuted and it won't be possible to commit the transaction."),(0,r.kt)("p",null,"Commit successful transactions by executing the ",(0,r.kt)("inlineCode",{parentName:"p"},"COMMIT;")," query.\nRoll back unsuccessful transactions by executing the ",(0,r.kt)("inlineCode",{parentName:"p"},"ROLLBACK;")," query. "),(0,r.kt)("h2",{id:"isolation-levels"},"Isolation levels"),(0,r.kt)("p",null,"In database systems, isolation determines how transaction integrity is visible\nto other users and systems."),(0,r.kt)("p",null,"A lower isolation level allows many users to access the same data at the same\ntime but increases the number of concurrency effects (such as dirty reads or\nlost updates). A higher isolation level secures data consistency but requires\nmore system resources and increases the chances that one transaction will block\nanother."),(0,r.kt)("p",null,"Memgraph currently supports three isolation levels, from the highest to the\nlowest:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SNAPSHOT_ISOLATION (default) - guarantees that all reads made in a\ntransaction will see a consistent snapshot of the database, and the\ntransaction itself will successfully commit only if no updates it has made\nconflict with any concurrent updates made since that snapshot."),(0,r.kt)("li",{parentName:"ul"},"READ_COMMITTED - guarantees that any data read was committed at the moment it\nis read."),(0,r.kt)("li",{parentName:"ul"},"READ_UNCOMMITTED - one transaction may read not yet committed changes made by\nother transactions.")),(0,r.kt)("h3",{id:"setting-the-isolation-level"},"Setting the isolation level"),(0,r.kt)("p",null,"To change the isolation level, change the ",(0,r.kt)("inlineCode",{parentName:"p"},"--isolation-level")," configuration flag\nto any of the supported values. If you need help changing the configuration,\ncheck out ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/next/how-to-guides/config-logs"},"the how-to guide"),". "),(0,r.kt)("p",null,"The initially set isolation level can be changed during runtime using the\nfollowing query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"SET <scope> TRANSACTION ISOLATION LEVEL <isolation_level>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<scope>")," defines the scope to which the isolation level change should apply:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GLOBAL - apply the new isolation level globally"),(0,r.kt)("li",{parentName:"ul"},"SESSION - apply the new isolation level only for the current session"),(0,r.kt)("li",{parentName:"ul"},"NEXT - apply the new isolation level only for the next transaction in the current session")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<isolation_level")," defines the isolation level:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SNAPSHOT_ISOLATION"),(0,r.kt)("li",{parentName:"ul"},"READ_COMMITTED"),(0,r.kt)("li",{parentName:"ul"},"READ_UNCOMMITTED")))}p.isMDXComponent=!0}}]);