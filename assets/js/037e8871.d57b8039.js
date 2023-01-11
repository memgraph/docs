"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={id:"replication",title:"How to set up replication on a small cluster?",sidebar_label:"Set up replication"},r=void 0,l={unversionedId:"how-to-guides/replication",id:"how-to-guides/replication",title:"How to set up replication on a small cluster?",description:"In the replication process, the data is replicated from one storage (MAIN",source:"@site/docs/how-to-guides/replication.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/replication",permalink:"/docs/memgraph/next/how-to-guides/replication",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/docs/how-to-guides/replication.md",tags:[],version:"current",frontMatter:{id:"replication",title:"How to set up replication on a small cluster?",sidebar_label:"Set up replication"},sidebar:"memgraph",previous:{title:"Utilize the NetworkX library",permalink:"/docs/memgraph/next/how-to-guides/networkx"},next:{title:"Use Font Awesome for node images",permalink:"/docs/memgraph/next/how-to-guides/font-awesome-for-node-images"}},s={},p=[{value:"Cluster topology",id:"cluster-topology",level:2},{value:"How to run multiple instances?",id:"how-to-run-multiple-instances",level:2},{value:"How to demote an instance to a REPLICA role?",id:"how-to-demote-an-instance-to-a-replica-role",level:2},{value:"How to register REPLICA instances?",id:"how-to-register-replica-instances",level:2},{value:"How to check info about registered REPLICA instances?",id:"how-to-check-info-about-registered-replica-instances",level:2},{value:"How to drop a REPLICA instance?",id:"how-to-drop-a-replica-instance",level:2},{value:"How to promote a REPLICA instance to MAIN?",id:"how-to-promote-a-replica-instance-to-main",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the replication process, the data is replicated from one storage (MAIN\ninstance) to another (REPLICA instances), thus providing a combination of\nconsistency, availability and partition tolerance when distributing data over\nseveral instances."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/replication"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference\nGuide"})),"\n",(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/next/under-the-hood/replication"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Under%20the%20hood&color=orange&style=for-the-badge",alt:"Related - Under the\nHood"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/implementing-data-replication"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Blog%20post&color=9C59DB&style=for-the-badge",alt:"Related - Blog\nPost"}))),(0,i.kt)("p",null,"This example demonstrates how to create a simple cluster of nodes running\nMemgraph instances, and set up replication using various replication modes."),(0,i.kt)("h2",{id:"cluster-topology"},"Cluster topology"),(0,i.kt)("p",null,"The cluster will consist of three nodes, one MAIN instance and two REPLICA\ninstances. In order to showcase the creation of REPLICA instances with different\nreplication modes, we will create:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The MAIN instance - contains the original data that will be replicated to\nREPLICA instances"),(0,i.kt)("li",{parentName:"ul"},"REPLICA instance 1 - replication in the SYNC mode"),(0,i.kt)("li",{parentName:"ul"},"REPLICA instance 2 - replication in the ASYNC mode")),(0,i.kt)("h2",{id:"how-to-run-multiple-instances"},"How to run multiple instances?"),(0,i.kt)("p",null,"If you are running multiple instances, each on its own machine, run Memgraph as\nyou usually would."),(0,i.kt)("p",null,"If you are exploring replication and running multiple instances on one machine,\nplease install Memgraph with Docker, and run the following ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run"),"\ncommands:"),(0,i.kt)("p",null,"The MAIN instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -it -p 7687:7687 -p 3000:3000 -p 7444:7444 -v mg_lib:/var/lib/memgraph memgraph/memgraph-platform\n")),(0,i.kt)("p",null,"REPLICA instance 1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -it -p 7688:7687 -p 3001:3000 -p 7445:7444 -v mg_lib2:/var/lib/memgraph memgraph/memgraph-platform\n")),(0,i.kt)("p",null,"REPLICA instance 2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -it -p 7689:7687 -p 3002:3000 -p 7446:7444 -v mg_lib3:/var/lib/memgraph memgraph/memgraph-platform\n")),(0,i.kt)("p",null,"You can connect to each instance with the ",(0,i.kt)("a",{parentName:"p",href:"/memgraph-lab"},"Memgraph Lab"),"\nin-browser application at:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the MAIN instance - ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost:3000")),(0,i.kt)("li",{parentName:"ul"},"REPLICA instance 1 - ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost:3001")),(0,i.kt)("li",{parentName:"ul"},"REPLICA instance 2 - ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost:3002"))),(0,i.kt)("h2",{id:"how-to-demote-an-instance-to-a-replica-role"},"How to demote an instance to a REPLICA role?"),(0,i.kt)("p",null,"Run the following query in both REPLICA instances to demote them to the\nREPLICA role:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SET REPLICATION ROLE TO REPLICA WITH PORT 10000;\n")),(0,i.kt)("p",null,"If you set the port of each REPLICA instance to ",(0,i.kt)("inlineCode",{parentName:"p"},"10000"),", it will be easier to\nregister replicas later on because the query for registering replicas uses port\n",(0,i.kt)("inlineCode",{parentName:"p"},"10000")," as the default one."),(0,i.kt)("p",null,"Otherwise, you can use any unassigned port between 1000 and 10000."),(0,i.kt)("h2",{id:"how-to-register-replica-instances"},"How to register REPLICA instances?"),(0,i.kt)("p",null,"To register a REPLICA instance, you need to find out the IP address of each\ninstance."),(0,i.kt)("p",null,"The IP addresses will probably be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the MAIN instance - ",(0,i.kt)("inlineCode",{parentName:"li"},"172.17.0.2")),(0,i.kt)("li",{parentName:"ul"},"REPLICA instance 1 - ",(0,i.kt)("inlineCode",{parentName:"li"},"172.17.0.3")),(0,i.kt)("li",{parentName:"ul"},"REPLICA instance 2 - ",(0,i.kt)("inlineCode",{parentName:"li"},"172.17.0.4"))),(0,i.kt)("p",null,"If they are not, please change the IP addresses in the following queries to\nmatch the IP addresses on your cluster."),(0,i.kt)("p",null,"Then, run the following queries from the MAIN instance to register REPLICA\ninstances:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"REPLICA instance 1 at ",(0,i.kt)("inlineCode",{parentName:"p"},"172.17.0.3")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'REGISTER REPLICA REP1 SYNC TO "172.17.0.3";\n')),(0,i.kt)("p",{parentName:"li"},"REPLICA instance 1 is called REP1, its replication mode is SYNC, and it is\nlocated at IP address ",(0,i.kt)("inlineCode",{parentName:"p"},"172.17.0.3.")," with port ",(0,i.kt)("inlineCode",{parentName:"p"},"10000"),"."),(0,i.kt)("p",{parentName:"li"},"Once the MAIN instance commits a transaction, it will\ncommunicate the changes to all REPLICA instances running\nin SYNC mode and wait until it receives a response that the changes have been applied to the REPLICAs or that a timeout has been reached. ",(0,i.kt)("br",null),"\nIn the case of a timeout, the MAIN instance will return an error to the user proposing a check of the\nREPLICAs' statuses as there might be network or hardware issues."),(0,i.kt)("p",{parentName:"li"},"If you used any port other than ",(0,i.kt)("inlineCode",{parentName:"p"},"10000"),' while demoting a REPLICA instance,\nyou will need to specify it like this: "172.17.0.3:5000"')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"REPLICA instance 2 at ",(0,i.kt)("inlineCode",{parentName:"p"},"172.17.0.4")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'REGISTER REPLICA REP2 ASYNC TO "172.17.0.4";\n')),(0,i.kt)("p",{parentName:"li"},"REPLICA instance 2 is called REP2, its replication mode is ASYNC, and it is\nlocated at IP address ",(0,i.kt)("inlineCode",{parentName:"p"},"172.17.0.4.")," with port ",(0,i.kt)("inlineCode",{parentName:"p"},"10000"),"."),(0,i.kt)("p",{parentName:"li"},"When the REPLICA instance is running in ASYNC mode the MAIN instance will\ncommit a transaction without receiving confirmation from REPLICA instances\nthat they have received the same transaction. ASYNC mode ensures system\navailability and partition tolerance."),(0,i.kt)("p",{parentName:"li"},"If you used any port other than ",(0,i.kt)("inlineCode",{parentName:"p"},"10000"),' while demoting a REPLICA instance,\nyou will need to specify it like this: "172.17.0.4:5000"'))),(0,i.kt)("h2",{id:"how-to-check-info-about-registered-replica-instances"},"How to check info about registered REPLICA instances?"),(0,i.kt)("p",null,"Check REPLICA instances by running the following query from the MAIN\ninstance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SHOW REPLICAS;\n")),(0,i.kt)("h2",{id:"how-to-drop-a-replica-instance"},"How to drop a REPLICA instance?"),(0,i.kt)("p",null,"To drop a replica, run the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"DROP REPLICA <name>;\n")),(0,i.kt)("h2",{id:"how-to-promote-a-replica-instance-to-main"},"How to promote a REPLICA instance to MAIN?"),(0,i.kt)("p",null,"To promote a REPLICA instance to MAIN, run the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-plaintext"},"SET REPLICATION ROLE TO MAIN;\n")))}m.isMDXComponent=!0}}]);