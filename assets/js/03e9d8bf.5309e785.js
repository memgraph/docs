"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37631],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={id:"transactions",title:"Transactions",sidebar_label:"Transactions"},o=void 0,s={unversionedId:"reference-guide/transactions",id:"reference-guide/transactions",title:"Transactions",description:"All Cypher queries are run within transactions, which means that all modification",source:"@site/docs/reference-guide/transactions.md",sourceDirName:"reference-guide",slug:"/reference-guide/transactions",permalink:"/docs/memgraph/next/reference-guide/transactions",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/transactions.md",tags:[],version:"current",frontMatter:{id:"transactions",title:"Transactions",sidebar_label:"Transactions"},sidebar:"memgraph",previous:{title:"Python API",permalink:"/docs/memgraph/next/reference-guide/streams/transformation-modules/api/python-api"},next:{title:"SSL encryption",permalink:"/docs/memgraph/next/reference-guide/encryption"}},l={},c=[{value:"Explicit transactions",id:"explicit-transactions",level:2},{value:"Managing transactions",id:"managing-transactions",level:2},{value:"Show transactions",id:"show-transactions",level:3},{value:"Terminate transactions",id:"terminate-transactions",level:3},{value:"Terminating custom procedures",id:"terminating-custom-procedures",level:4},{value:"New session with Docker",id:"new-session-with-docker",level:4},{value:"Example",id:"example",level:3},{value:"Privileges needed to manage all transactions",id:"privileges-needed-to-manage-all-transactions",level:3},{value:"Isolation levels",id:"isolation-levels",level:2},{value:"Setting the isolation level",id:"setting-the-isolation-level",level:3},{value:"Storage modes",id:"storage-modes",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All Cypher queries are run within transactions, which means that all modification\nmade by a single query are held in memory by the transaction until the query\nis successfully executed. The changes are then committed and visible to all\nother transactions, users and systems. In the case of an error, the transaction\nis rolled back and no changes are committed."),(0,r.kt)("p",null,"These automatic transactions are also called implicit transactions."),(0,r.kt)("p",null,"Users can also create explicit transactions to execute multiple Cypher queries\nin sequence, then commit them or roll them back."),(0,r.kt)("p",null,"During transaction execution, an important property of a database is the\nisolation level that defines how or when the changes made by one operation\nbecome visible to others."),(0,r.kt)("h2",{id:"explicit-transactions"},"Explicit transactions"),(0,r.kt)("p",null,"To start a transaction, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"BEGIN;")," query."),(0,r.kt)("p",null,"All the following queries will be executed as a part of a single transaction."),(0,r.kt)("p",null,"If any of the queries fails, further queries will no longer be successfully\nexecuted and it won't be possible to commit the transaction."),(0,r.kt)("p",null,"Commit successful transactions by executing the ",(0,r.kt)("inlineCode",{parentName:"p"},"COMMIT;")," query.\nRoll back unsuccessful transactions by executing the ",(0,r.kt)("inlineCode",{parentName:"p"},"ROLLBACK;")," query."),(0,r.kt)("h2",{id:"managing-transactions"},"Managing transactions"),(0,r.kt)("p",null,"Starting with Memgraph v2.7.0 you can check running transactions and terminate them."),(0,r.kt)("h3",{id:"show-transactions"},"Show transactions"),(0,r.kt)("p",null,"To see what transactions are running at the moment use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW TRANSACTIONS;\n")),(0,r.kt)("p",null,"The command will show only the transactions you started or transactions for which you have the necessary ",(0,r.kt)("a",{parentName:"p",href:"#privileges-needed-to-manage-all-transactions"},"privilege"),"."),(0,r.kt)("img",{src:n(49341).Z}),(0,r.kt)("h3",{id:"terminate-transactions"},"Terminate transactions"),(0,r.kt)("p",null,"To terminate one or more transactions, you need to open a new session and use the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'TERMINATE TRANSACTIONS "tid", "<tid2>", "<tid3>", ... ;\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"tid")," is the transactional ID that can be seen using the ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW TRANSACTIONS;")," query."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"TERMINATE TRANSACTIONS")," query signalizes to the thread executing the transaction that it should stop the execution. No violent interruption will happen, and the whole system will stay in a consistent state.\nTo terminate the transaction you haven't started, you need to have the necessary ",(0,r.kt)("a",{parentName:"p",href:"#privileges-needed-to-manage-all-transactions"},"privilege"),"."),(0,r.kt)("h4",{id:"terminating-custom-procedures"},"Terminating custom procedures"),(0,r.kt)("p",null,"If you want to be able to ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example"},"terminate custom\nprocedures"),",\ncrucial parts of the code, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"until")," loops, or similar points\nwhere the procedure might become costly, need to be preceded with\nCheckMustAbort() function."),(0,r.kt)("h4",{id:"new-session-with-docker"},"New session with Docker"),(0,r.kt)("p",null,"If you are using ",(0,r.kt)("strong",{parentName:"p"},"Memgraph Lab"),", you can vertically split screens and open another\nQuery Execution section."),(0,r.kt)("p",null,"If you are using ",(0,r.kt)("strong",{parentName:"p"},"mgconsole")," on an instance running in a Docker container:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a new terminal and find the CONTAINER ID of the Memgraph Docker container:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker ps\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the container with the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker exec -it CONTAINER ID bash\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execute ",(0,r.kt)("inlineCode",{parentName:"p"},"mgconsole")," command to run the client")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW TRANSACTIONS;")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TERMINATE TRANSACTIONS tid;")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"The output of the ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW TRANSACTIONS"),' command shows that an infinite query is currently being run as part of the transaction ID "9223372036854775809".'),(0,r.kt)("p",null,"To terminate the transaction, run the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'TERMINATE TRANSACTIONS "9223372036854775809";\n')),(0,r.kt)("p",null,"Upon the transaction termination, the following confirmation will appear:"),(0,r.kt)("img",{src:n(20674).Z}),(0,r.kt)("p",null,"The following message will appear in the session in which the infinite query was being run:"),(0,r.kt)("img",{src:n(16383).Z}),(0,r.kt)("h3",{id:"privileges-needed-to-manage-all-transactions"},"Privileges needed to manage all transactions"),(0,r.kt)("p",null,"By default, the users can see and terminate only the transactions they started. For all other transactions, the user must have the ",(0,r.kt)("strong",{parentName:"p"},"TRANSACTION_MANAGEMENT")," privilege which the admin assigns with the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"GRANT TRANSACTION_MANAGEMENT TO user;\n")),(0,r.kt)("p",null,"The privilege to see all the transactions running in Memgraph is revoked using the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"REVOKE TRANSACTION_MANAGEMENT FROM user;\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When Memgraph is first started there is only one explicit super-admin user that has all privileges, including the ",(0,r.kt)("strong",{parentName:"p"},"TRANSACTION_MANAGEMENT"),". The super-admin user is able to see all transactions.")),(0,r.kt)("h2",{id:"isolation-levels"},"Isolation levels"),(0,r.kt)("p",null,"In database systems, isolation determines how transaction integrity is visible\nto other users and systems."),(0,r.kt)("p",null,"A lower isolation level allows many users to access the same data at the same\ntime but increases the number of concurrency effects (such as dirty reads or\nlost updates). A higher isolation level secures data consistency but requires\nmore system resources and increases the chances that one transaction will block\nanother."),(0,r.kt)("p",null,"Memgraph currently supports three isolation levels, from the highest to the\nlowest:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SNAPSHOT_ISOLATION (default) - guarantees that all reads made in a\ntransaction will see a consistent snapshot of the database, and the\ntransaction itself will successfully commit only if no updates it has made\nconflict with any concurrent updates made since that snapshot."),(0,r.kt)("li",{parentName:"ul"},"READ_COMMITTED - guarantees that any data read was committed at the moment it\nis read."),(0,r.kt)("li",{parentName:"ul"},"READ_UNCOMMITTED - one transaction may read not yet committed changes made by\nother transactions.")),(0,r.kt)("p",null,"To check the current isolation level run the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW STORAGE INFO;\n")),(0,r.kt)("h3",{id:"setting-the-isolation-level"},"Setting the isolation level"),(0,r.kt)("p",null,"To change the isolation level, change the ",(0,r.kt)("inlineCode",{parentName:"p"},"--isolation-level")," configuration flag\nto any of the supported values. If you need help changing the configuration,\ncheck out ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/next/how-to-guides/config-logs"},"the how-to guide"),"."),(0,r.kt)("p",null,"You can change the initially set isolation level when Memgraph is running in the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/storage-modes"},(0,r.kt)("inlineCode",{parentName:"a"},"IN_MEMORY_TRANSACTIONAL")," mode")," using the\nfollowing query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"SET <scope> TRANSACTION ISOLATION LEVEL <isolation_level>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<scope>")," defines the scope to which the isolation level change should apply:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GLOBAL - apply the new isolation level globally"),(0,r.kt)("li",{parentName:"ul"},"SESSION - apply the new isolation level only for the current session"),(0,r.kt)("li",{parentName:"ul"},"NEXT - apply the new isolation level only for the next transaction in the current session")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<isolation_level>")," defines the isolation level:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SNAPSHOT ISOLATION"),(0,r.kt)("li",{parentName:"ul"},"READ COMMITTED"),(0,r.kt)("li",{parentName:"ul"},"READ UNCOMMITTED")),(0,r.kt)("h2",{id:"storage-modes"},"Storage modes"),(0,r.kt)("p",null,"Memgraph can work in ",(0,r.kt)("inlineCode",{parentName:"p"},"IN_MEMORY_ANALYTICAL")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"IN_MEMORY_TRANSACTIONAL"),"\n",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/storage-modes"},"storage mode"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"IN_MEMORY_TRANSACTIONAL")," is\nthe default mode in which Memgraph runs on startup."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IN_MEMORY_TRANSACTIONAL")," mode offers all mentioned isolation levels and all\nACID guarantees. ",(0,r.kt)("inlineCode",{parentName:"p"},"IN_MEMORY_ANALYTICAL")," offers no isolation levels and no ACID\nguarantees. Multiple transactions can write data to Memgraph simultaneously. One\ntransaction can therefore see all the changes from other transactions."),(0,r.kt)("p",null,"There can't be any active transactions if you want to switch from one mode to\nanother. Memgraph will log a warning message if it finds any active\ntransactions, so set the log level to ",(0,r.kt)("inlineCode",{parentName:"p"},"WARNING")," to see them. No other\ntransactions will take place during the switch between modes."))}u.isMDXComponent=!0},49341:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/show_transactions-57545906058f7840c4e55dcf8a473af4.png"},20674:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/terminate_transactions-f19bd1f23627c023bd317f0e2e9b0f1b.png"},16383:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transaction_aborted_message-352f1e288751bb5e5c4fb85e7e0d2e3d.png"}}]);