(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2364],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,h=u["".concat(s,".").concat(c)]||u[c]||g[c]||i;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86311:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={id:"querying",title:"Querying the database",sidebar_label:"Querying the database",slug:"/getting-started/querying"},l={unversionedId:"getting-started/querying/querying",id:"version-1.3.0/getting-started/querying/querying",isDocsHomePage:!1,title:"Querying the database",description:"Querying using console",source:"@site/memgraph_versioned_docs/version-1.3.0/getting-started/querying/querying.md",sourceDirName:"getting-started/querying",slug:"/getting-started/querying",permalink:"/memgraph/1.3.0/getting-started/querying",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/getting-started/querying/querying.md",version:"1.3.0",sidebar_label:"Querying the database",frontMatter:{id:"querying",title:"Querying the database",sidebar_label:"Querying the database",slug:"/getting-started/querying"},sidebar:"version-1.3.0/memgraph",previous:{title:"Install Memgraph RPM package",permalink:"/memgraph/1.3.0/getting-started/installation/rpm-installation"},next:{title:"Building applications",permalink:"/memgraph/1.3.0/getting-started/connecting-applications"}},s=[{value:"Querying using console",id:"querying-using-console",children:[{value:"Telemetry",id:"telemetry",children:[]},{value:"Where to next?",id:"where-to-next",children:[]},{value:"Getting help",id:"getting-help",children:[]}]}],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"querying-using-console"},"Querying using console"),(0,i.kt)("p",null,"Memgraph supports the ",(0,i.kt)("a",{parentName:"p",href:"https://www.opencypher.org"},"openCypher")," query language\nwhich has been developed by ",(0,i.kt)("a",{parentName:"p",href:"http://neo4j.com"},"Neo4j"),".\nIt is a declarative language developed specifically\nfor interaction with graph databases, which is currently going through a\nvendor-independent standardization process."),(0,i.kt)("p",null,"The easiest way to execute openCypher queries against Memgraph is by using\nMemgraph's command-line tool, ",(0,i.kt)("inlineCode",{parentName:"p"},"mg_client"),", which is installed\ntogether with Memgraph."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"NOTE:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"mg_client")," is a deprecated tool still coming within the Memgraph package.\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mgconsole"},"mgconsole")," will replace ",(0,i.kt)("inlineCode",{parentName:"p"},"mg_client")," in\nthe future. If possible, please use ",(0,i.kt)("inlineCode",{parentName:"p"},"mgconsole")," instead."))),(0,i.kt)("p",null,"If you installed Memgraph using Docker, you will need to run the client\nusing the following command (remember to replace ",(0,i.kt)("inlineCode",{parentName:"p"},"HOST")," with valid IP of\nthe container - see ",(0,i.kt)("a",{parentName:"p",href:"/memgraph/1.3.0/getting-started/installation/docker-installation#note-for-docker-users"},"Docker Note"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -it --entrypoint=mg_client memgraph --host HOST --use-ssl=False\n")),(0,i.kt)("p",null,"Otherwise, you can connect to the running Memgraph instance by\nissuing the following shell command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mg_client --use-ssl=False\n")),(0,i.kt)("p",null,"After the client has started it should present a command prompt similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Type :help for shell usage\nQuit the shell by typing Ctrl-D(eof) or :quit\nConnected to 'memgraph://127.0.0.1:7687'\nmemgraph>\n")),(0,i.kt)("p",null,"At this point, it is possible to execute openCypher queries on Memgraph. Each\nquery needs to end with the ",(0,i.kt)("inlineCode",{parentName:"p"},";")," (",(0,i.kt)("em",{parentName:"p"},"semicolon"),") character. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (u:User {name: "Alice"})-[:Likes]->(m:Software {name: "Memgraph"});\n')),(0,i.kt)("p",null,'The above will create 2 nodes in the database, one labeled "User" with name\n"Alice" and the other labeled "Software" with name "Memgraph". It will also\ncreate a relationship that "Alice" ',(0,i.kt)("em",{parentName:"p"},"likes"),' "Memgraph".'),(0,i.kt)("p",null,"To find created nodes and relationships, execute the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u:User)-[r]->(x) RETURN u, r, x;\n")),(0,i.kt)("h3",{id:"telemetry"},"Telemetry"),(0,i.kt)("p",null,"Telemetry is an automated process by which data is collected at a remote point.\nAt Memgraph, we use telemetry for the sole purpose of improving our product,\nthereby collecting data about the machine that executes the database (CPU,\nmemory, OS, and kernel information) as well as data about the database runtime\n(CPU usage, memory usage, vertices, and edges count)."),(0,i.kt)("p",null,"Here at Memgraph, we care deeply about the privacy of our users and do not\ncollect any sensitive information. If you wish to disable Memgraph's telemetry\nfeatures, you can do so easily, either by altering the line in\n",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf")," that enables telemetry (set\n",(0,i.kt)("inlineCode",{parentName:"p"},"--telemetry-enabled=true")," to the following ",(0,i.kt)("inlineCode",{parentName:"p"},"--telemetry-enabled=false"),"), or by\nincluding ",(0,i.kt)("inlineCode",{parentName:"p"},"--telemetry-enabled=false")," as a command-line argument when running\nthe executable."),(0,i.kt)("h3",{id:"where-to-next"},"Where to next?"),(0,i.kt)("p",null,"To learn more about the ",(0,i.kt)("strong",{parentName:"p"},"Cypher")," language, visit the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/cypher-manual"},"Cypher manual"))," or ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph Playground"))," for interactive guides.\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/tutorials/tutorials"},"Tutorials")),".\nDetails on what can be stored in Memgraph can be found in the article about ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/concepts/storage"},"Data storage")),"."),(0,i.kt)("h3",{id:"getting-help"},"Getting help"),(0,i.kt)("p",null,"Visit the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/getting-help/getting-help"},"Getting help"))," page in case you run into any kind of problem or you have additional questions."))}m.isMDXComponent=!0}}]);