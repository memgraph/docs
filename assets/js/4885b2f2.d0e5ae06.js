"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82198],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,c=u["".concat(o,".").concat(h)]||u[h]||m[h]||l;return a?n.createElement(c,i(i({ref:t},d),{},{components:a})):n.createElement(c,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},65416:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],s={id:"manage-label-based-access-control",title:"How to manage label-based access control (Enterprise)",sidebar_label:"Manage label-based access control"},o=void 0,p={unversionedId:"how-to-guides/manage-label-based-access-control",id:"version-2.4.1/how-to-guides/manage-label-based-access-control",title:"How to manage label-based access control (Enterprise)",description:"Related - Reference Guide",source:"@site/memgraph_versioned_docs/version-2.4.1/how-to-guides/manage-label-based-access-control.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/manage-label-based-access-control",permalink:"/docs/memgraph/how-to-guides/manage-label-based-access-control",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.4.1/how-to-guides/manage-label-based-access-control.md",tags:[],version:"2.4.1",frontMatter:{id:"manage-label-based-access-control",title:"How to manage label-based access control (Enterprise)",sidebar_label:"Manage label-based access control"},sidebar:"memgraph",previous:{title:"Manage user privileges",permalink:"/docs/memgraph/how-to-guides/manage-user-privileges"},next:{title:"Reference guide overview",permalink:"/docs/memgraph/reference-guide"}},d={},m=[{value:"Granting read permissions",id:"granting-read-permissions",level:2},{value:"Granting update permissions",id:"granting-update-permissions",level:2},{value:"Granting full access permissions",id:"granting-full-access-permissions",level:2},{value:"Denying visibility",id:"denying-visibility",level:2},{value:"Where to next?",id:"where-to-next",level:2}],u={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/security"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference Guide"}))),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This is an Enterprise feature.\nIf the Memgraph Enterprise is not activated, all the created users will be granted\nall of the privileges."))),(0,l.kt)("p",null,"Sometimes, authorizing the database by granting and denying clause privileges is not enough to make the\ndatabase fully secure. Certain nodes and relationships can be confidential and must be restricted from viewing\nand manipulating by multiple users."),(0,l.kt)("p",null,"In response to the need for such authorization, Memgraph has advanced its authorization features to enable\nauthorization on node labels and relationship edge types. By applying authorization to graph's first class\ncitizens, a database administrator can now keep all the data in one database while keeping any private data\nsecure from those who don't have adequate permission."),(0,l.kt)("p",null,"This how-to-guide will walk you through label-based access control in the use case of a fictional company\ndoing data analytics and machine learning. "),(0,l.kt)("p",null,"The fictional company's day-to-day business is ingesting new data for training machine learning models.\nAlice is the database administrator in the company, and she would like to set up label-based access control\ninside Memgraph to make data manipulation more secure."),(0,l.kt)("p",null,"When she tries out Memgraph the first time, she is connected to a session with all privileges and is\nable to create users and roles and grant them privileges. As a first task, she creates the admin role,\nwhich is automatically granted permission to write any clause and access any node or relationship."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE USER admin IDENTIFIED BY 'PaSsWoRd';\n")),(0,l.kt)("p",null,"The user ",(0,l.kt)("inlineCode",{parentName:"p"},"admin")," is also able to verify that she has all the privileges by writing:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW PRIVILEGES FOR admin;\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"privilege"),(0,l.kt)("th",{parentName:"tr",align:null},"effective"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CREATE"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANTED TO USER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANTED TO USER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MATCH"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANTED TO USER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MERGE"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANTED TO USER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SET"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANTED TO USER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REMOVE"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANTED TO USER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INDEX"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANTED TO USER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STATS"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANTED TO USER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AUTH"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANTED TO USER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONSTRAINT"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANTED TO USER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DUMP"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANTED TO USER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REPLICATION"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANTED TO USER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"READ_FILE"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANTED TO USER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DURABILITY"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANTED TO USER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FREE_MEMORY"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANTED TO USER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TRIGGER"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANTED TO USER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONFIG"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANTED TO USER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STREAM"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANTED TO USER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MODULE_READ"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANTED TO USER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MODULE_WRITE"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANTED TO USER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WEBSOCKET"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANT"),(0,l.kt)("td",{parentName:"tr",align:null},"GRANTED TO USER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ALL LABELS"),(0,l.kt)("td",{parentName:"tr",align:null},"CREATE_DELETE"),(0,l.kt)("td",{parentName:"tr",align:null},"GLOBAL LABEL PERMISSION GRANTED TO USER")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ALL EDGE_TYPES"),(0,l.kt)("td",{parentName:"tr",align:null},"CREATE_DELETE"),(0,l.kt)("td",{parentName:"tr",align:null},"GLOBAL EDGE_TYPE PERMISSION GRANTED TO USER")))),(0,l.kt)("p",null,"If you want to find more about user privileges, hover over to\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"/docs/memgraph/how-to-guides/manage-user-privileges"},"Managing user privileges"))),(0,l.kt)("p",null,"Alice can now log in as an administrator in Memgraph with her own account. From that point on,\nshe can also create new users and roles in the database. The subsequently created users and roles\nwon't have any privileges or label-based permissions and need additional commands to be granted\npermissions to the clauses and the graph."),(0,l.kt)("h2",{id:"granting-read-permissions"},"Granting read permissions"),(0,l.kt)("p",null,"Bob is a data analyst for the company. He is making sure he can extract any useful insights\nfrom the data imported into the database. For now, all the data is labeled with the ",(0,l.kt)("inlineCode",{parentName:"p"},"DataPoint"),"\nlabel. Alice has already created a data analyst role as well as Bob's account in Memgraph with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE ROLE analyst;\nCREATE USER Bob IDENTIFIED BY 'test';\nSET ROLE FOR Bob TO analyst;\n")),(0,l.kt)("p",null,"Unfortunately, when he writes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:DataPoint) RETURN n;\n")),(0,l.kt)("p",null,"he gets an error that he can not execute the query. Why is that?\nThe first problem that we encounter is that Bob can not perform ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," queries,\nwhich we must explicitly grant."),(0,l.kt)("p",null,"The database administrator grants him and all the data analysts the ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," query\nto traverse the graph with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"GRANT MATCH TO analyst;\n")),(0,l.kt)("p",null,"Now Bob is able to perform a match. However, by executing the same query again, he\nis not able to get any results. Now that's unfortunate. Did we do anything wrong?"),(0,l.kt)("p",null,"Enter label-based access control. Since Bob is not an administrator, he was not able\nto see any data points in the graph. In other words, he does not have ",(0,l.kt)("inlineCode",{parentName:"p"},"READ")," permission\non the ",(0,l.kt)("inlineCode",{parentName:"p"},"DataPoint")," label."),(0,l.kt)("p",null,"Memgraph's label-based access control is hierarchically constructed, and the first\npermission one can be given on node labels or relationship edge types is ",(0,l.kt)("inlineCode",{parentName:"p"},"READ"),"."),(0,l.kt)("p",null,"Alice now updates Bob's permissions by executing:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"GRANT READ ON LABELS :DataPoint TO analyst;\n")),(0,l.kt)("p",null,"Bob is now executing his queries normally and is able to get insights from the database\nwith respect to all the data points in the graph!"),(0,l.kt)("p",null,"Additionally, in the company, it was decided that all the data points would be connected\nin a time series fashion, depending on when they were ingested into the database. One\n",(0,l.kt)("inlineCode",{parentName:"p"},"DataPoint")," should therefore be connected to the previously inserted one.\nThe relationship type is called ",(0,l.kt)("inlineCode",{parentName:"p"},":NEXT"),"."),(0,l.kt)("p",null,"Bob now again has problems, because when he executes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:DataPoint)-[e:NEXT]->(m:DataPoint);\n")),(0,l.kt)("p",null,"he is not able to see the patterns. Although Bob can see all the data points, he doesn't\nhave permission to view the relationships. The database administrator executes the following\ncommand to solve the problem:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"GRANT READ ON EDGE_TYPES :NEXT TO analyst;\n")),(0,l.kt)("p",null,"Since the users are initially constructed without any permission, they would need an explicit\ngrant for every new label that appears in the database. This approach is called whitelisting,\nand is more secure for adding new entities in the database since confidential nodes and\nrelationships are not leaked into the database before securing them."),(0,l.kt)("p",null,"We have now gone through the ",(0,l.kt)("inlineCode",{parentName:"p"},"READ")," permissions for the first class graph citizens.\nLet's move on to a different role in the company."),(0,l.kt)("h2",{id:"granting-update-permissions"},"Granting update permissions"),(0,l.kt)("p",null,"Charlie is a tester and customer care specialist. He is in charge of reporting bugs and fixing\nissues in the database. A common problem that he is facing is updating the classes of the data\npoints if they are labeled incorrectly. For example, the class of one ",(0,l.kt)("inlineCode",{parentName:"p"},"DataPoint")," might be\n'dog', while in fact it is an 'elephant', but it was wrongly selected in the rush of labeling\nmany data points. Charlie needs to update the wrongly labeled data points, and he already has\nthe IDs of all the nodes he must update. "),(0,l.kt)("p",null,"Alice has already set up his account with the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE ROLE tester;\nCREATE USER Charlie IDENTIFIED BY 'test';\nSET ROLE FOR Charlie TO tester;\n\nGRANT MATCH, SET TO tester;\n\nGRANT READ ON LABELS :DataPoint TO tester;\nGRANT READ ON EDGE_TYPES :NEXT TO tester;\n")),(0,l.kt)("p",null,"He now has read privileges just like all the data analysts, but when he gets an authorization\nerror while executing:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:DataPoint {id:505}) SET n.labelY = 'elephant';\n")),(0,l.kt)("p",null,"The error occurs because Charlie does not have permission to update the existing nodes in the\ngraph. The database administrator needs to update Charlie's permissions and grant him access\nto update the node properties with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"GRANT UPDATE ON LABELS :DataPoint TO tester;\n")),(0,l.kt)("p",null,"Charlie is now able to update the labeled categories of any data point in the graph! The same\npermission applies if he needs to update a relationship property in the graph."),(0,l.kt)("h2",{id:"granting-full-access-permissions"},"Granting full access permissions"),(0,l.kt)("p",null,"David is the data engineer for the company. He is very skilled in database systems, and he has\nbeen assigned the task of deleting every data point in the system that's older than one year.\nAlice has his account set up with the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE ROLE dataEngineer;\nCREATE USER David IDENTIFIED BY 'test';\nSET ROLE FOR David TO dataEngineer;\n\nGRANT MATCH, DELETE TO dataEngineer;\n\nGRANT UPDATE ON LABELS :DataPoint TO dataEngineer;\nGRANT UPDATE ON EDGE_TYPES :NEXT TO dataEngineer;\n")),(0,l.kt)("p",null,"However, ",(0,l.kt)("inlineCode",{parentName:"p"},"UPDATE")," privilege capabilities only grant manipulation of properties, not the nodes\nand relationships themselves. Therefore, the query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:DataPoint) WHERE localDateTime() - n.date > Duration({day:365}) DETACH DELETE n;\n")),(0,l.kt)("p",null,"results in an error. The permission that grants read, update, create, and delete rights over\nthe nodes and relationships in the graph is ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE_DELETE"),". By executing the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"GRANT CREATE_DELETE ON LABELS :DataPoint TO dataEngineer;\nGRANT CREATE_DELETE ON EDGE_TYPES :NEXT TO dataEngineer;\n")),(0,l.kt)("p",null,"The permission is executed on relationships as well, since David needs to detach the nodes\nprior to deleting them. David is now able to successfully delete the deprecated nodes."),(0,l.kt)("h2",{id:"denying-visibility"},"Denying visibility"),(0,l.kt)("p",null,"Eve is the new senior engineer in town, and she is making excellent progress in the company.\nThe management therefore decided to grant her visibility and manipulation over all the nodes.\nHowever, there are certain confidential nodes that are only for the management people to see."),(0,l.kt)("p",null,"Since there could be a lot of different node labels or relationship types in the database,\na shortcut can be made by granting ",(0,l.kt)("inlineCode",{parentName:"p"},"NOTHING")," to the entity. The database administrator therefore\nsets Eve's role as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE ROLE seniorEngineer;\nCREATE USER Eve IDENTIFIED BY 'test';\nSET ROLE FOR Eve TO seniorEngineer;\n\nGRANT MATCH, DELETE TO seniorEngineer;\n\nGRANT CREATE_DELETE ON LABELS * TO seniorEngineer;\nGRANT NOTHING ON LABELS :SecretLabel TO seniorEngineer;\n")),(0,l.kt)("p",null,"When granting ",(0,l.kt)("inlineCode",{parentName:"p"},"NOTHING"),", the user is denied both visibility and manipulation of the entity.\nEve is now able to see all the domain data while the management is happy since they have not\nleaked any confidential data."),(0,l.kt)("p",null,"And that's it! You successfully finished Memgraph's label-based access control how-to-guide!"),(0,l.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,l.kt)("p",null,"To learn more about Memgraph's functionalities, visit the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"/docs/memgraph/reference-guide"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"/docs/memgraph/tutorials"},"Tutorials")),"."))}h.isMDXComponent=!0}}]);