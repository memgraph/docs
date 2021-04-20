(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(357)),i={id:"replication",title:"How to set up replication on a small cluster",sidebar_label:"Replication"},l={unversionedId:"database-functionalities/replication",id:"version-1.4.0/database-functionalities/replication",isDocsHomePage:!1,title:"How to set up replication on a small cluster",description:"This article is a part of a series intended to showcase Memgraph's features",source:"@site/memgraph_versioned_docs/version-1.4.0/database-functionalities/replication.md",slug:"/database-functionalities/replication",permalink:"/memgraph/database-functionalities/replication",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.4.0/database-functionalities/replication.md",version:"1.4.0",sidebar_label:"Replication",sidebar:"version-1.4.0/memgraph",previous:{title:"How to setup Memgraph TensorFlow Op?",permalink:"/memgraph/database-functionalities/tensorflow-setup"},next:{title:"Making a backup",permalink:"/memgraph/reference-guide/backup"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Cluster topology",id:"cluster-topology",children:[]},{value:"Configuring the cluster",id:"configuring-the-cluster",children:[]},{value:"Where to next?",id:"where-to-next",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This article is a part of a series intended to showcase Memgraph's features\nand bring the user up to speed on developing with Memgraph."),Object(o.b)("p",null,"We highly recommend checking out the other articles from this series which\nare listed in our ",Object(o.b)("a",{parentName:"p",href:"/memgraph/database-functionalities"},"database functionalities section"),"."),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"This example demonstrates how to create a simple cluster of nodes running\nMemgraph instances, and set up replication. We'll demonstrate the use and\nbehavior of the available synchronization modes."),Object(o.b)("h2",{id:"cluster-topology"},"Cluster topology"),Object(o.b)("p",null,"The cluster consists of four nodes, a single main and three replicas:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"the main node, containing the original data to be replicated to other nodes,"),Object(o.b)("li",{parentName:"ul"},"a node that will be replicated to using the sync mode,"),Object(o.b)("li",{parentName:"ul"},"a node that will be replicated to using the async mode,"),Object(o.b)("li",{parentName:"ul"},"a node that will be replicated to using the semi-sync mode.")),Object(o.b)("h2",{id:"configuring-the-cluster"},"Configuring the cluster"),Object(o.b)("p",null,"We'll use Docker to set up and run the cluster on your local machine, so make\nsure you have it installed and ready, and grab your Memgraph docker image.\nLook ",Object(o.b)("a",{parentName:"p",href:"/memgraph/getting-started/installation"},"here")," for instructions.\nWe assume you have already set up a client for running queries like ",Object(o.b)("a",{parentName:"p",href:"https://github.com/memgraph/mgconsole"},"mgconsole")," installed.\nYou can also use any of the supported drivers like ",Object(o.b)("a",{parentName:"p",href:"https://github.com/memgraph/mgclient"},"mgclient")," or any of the Neo4j drivers."),Object(o.b)("p",null,"We fire up the terminal, and for each Memgraph instance (node)  we have to start, we'll\nrun:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"docker run --rm memgraph\n")),Object(o.b)("p",null,"The above commands will start a Memgraph node, and assign it its own IP address. "),Object(o.b)("p",null,"Now, to set up the cluster, we'll have to start an mg_client or mgconsole\ninstance for every running Memgraph node, and connect to it. To do this, we\nhave to figure out their IP addresses. Running"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"docker ps\n")),Object(o.b)("p",null,'will list all the running docker processes, along with their "CONTAINER ID" and\n"NAME". Running'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container_name_or_id\n")),Object(o.b)("p",null,'where "container_name_or_id" is either the "CONTAINER ID" or "NAME" listed by\n',Object(o.b)("inlineCode",{parentName:"p"},"docker ps"),", we can get the IP addresses of all the nodes. Once we have them, we\ncan start setting up the replication. Let's say the ip addresses are as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"main:                      172.17.0.2"),Object(o.b)("li",{parentName:"ul"},"sync replica:              172.17.0.3"),Object(o.b)("li",{parentName:"ul"},"async replica:             172.17.0.4"),Object(o.b)("li",{parentName:"ul"},"semi-sync replica:         172.17.0.5 .")),Object(o.b)("p",null,"Let's assume we're using mgconsole to connect to and query the nodes. Firstly,\nwe have to set up the replicas. We connect to a replica by running"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"mgconsole --host REPLICA_IP_ADDRESS --use-ssl=false\n")),Object(o.b)("p",null,'where REPLICA_IP_ADDRESS is the address we found in the previous step. Once\nwe\'re connected to a replica, we set its replication role to "REPLICA" by\nissuing'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"SET REPLICATION ROLE TO REPLICA WITH PORT 10000;\n")),Object(o.b)("p",null,"Note that the port 10000 is arbitrary, and any available port number may be used\ninstead. We repeat the process for all replicas."),Object(o.b)("p",null,"Now, it's time to set up the main. Again, we connect to the main using\nmgconsole:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"mgconsole --host 172.17.0.2 --use-ssl=false\n")),Object(o.b)("p",null,"Then, for every replica, we issue the query that registers it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},'REGISTER REPLICA r1 SYNC TO "172.17.0.3:10000";\nREGISTER REPLICA r2 ASYNC TO "172.17.0.4:10000";\nREGISTER REPLICA r3 SYNC WITH TIMEOUT 1 TO "172.17.0.5:10000";\n')),Object(o.b)("p",null,"Now we can create some nodes and edges on the main, and observe them replicate\nto the replicas. Firstly, we switch to the mgconsole instance connected to the\nmain, and then issue:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},'CREATE (n:N {p: "This is going to be replicated!"});\n')),Object(o.b)("p",null,"After that, we can switch to any replica and try to match this node:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:N) RETURN n;\n")),Object(o.b)("p",null,"Lo and behold, we get:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-plaintext"},'+---------------------------------------------+\n| n                                           |\n+---------------------------------------------+\n| (:N {p: "This is going to be replicated!"}) |\n+---------------------------------------------+\n')),Object(o.b)("p",null,"Now, go on and have fun with more complex graphs! Happy hacking!"),Object(o.b)("h2",{id:"where-to-next"},"Where to next?"),Object(o.b)("p",null,"To learn more about replication in Memgraph, visit the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/reference-guide/replication"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/tutorials/tutorials"},"Tutorials")),"."))}p.isMDXComponent=!0},357:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);