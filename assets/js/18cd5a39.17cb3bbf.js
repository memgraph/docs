(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7950],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(n),m=a,h=g["".concat(p,".").concat(m)]||g[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},49209:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return g}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],l={id:"querying",title:"Querying the database",sidebar_label:"Querying the database",slug:"/getting-started/querying"},p=void 0,s={unversionedId:"getting-started/querying/querying",id:"version-1.5.0/getting-started/querying/querying",isDocsHomePage:!1,title:"Querying the database",description:"Querying using console",source:"@site/memgraph_versioned_docs/version-1.5.0/getting-started/querying/querying.md",sourceDirName:"getting-started/querying",slug:"/getting-started/querying",permalink:"/memgraph/1.5.0/getting-started/querying",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.5.0/getting-started/querying/querying.md",version:"1.5.0",frontMatter:{id:"querying",title:"Querying the database",sidebar_label:"Querying the database",slug:"/getting-started/querying"},sidebar:"version-1.5.0/memgraph",previous:{title:"Installation",permalink:"/memgraph/1.5.0/getting-started/installation"},next:{title:"Building applications",permalink:"/memgraph/1.5.0/getting-started/connecting-applications"}},u=[{value:"Querying using console",id:"querying-using-console",children:[{value:"Telemetry",id:"telemetry",children:[]},{value:"Where to next?",id:"where-to-next",children:[]},{value:"Getting help",id:"getting-help",children:[]}]}],c={toc:u};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"querying-using-console"},"Querying using console"),(0,o.kt)("p",null,"Memgraph supports the ",(0,o.kt)("a",{parentName:"p",href:"https://www.opencypher.org"},"openCypher")," query language\nwhich has been developed by ",(0,o.kt)("a",{parentName:"p",href:"http://neo4j.com"},"Neo4j"),".\nIt is a declarative language developed specifically\nfor interaction with graph databases, which is currently going through a\nvendor-independent standardization process."),(0,o.kt)("p",null,"The easiest way to execute openCypher queries against Memgraph is by using\nMemgraph's command-line tool, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mgconsole"},"mgconsole"),", which is installed\ntogether with Memgraph."),(0,o.kt)("p",null,"If you installed Memgraph using Docker, you will need to run the client\nusing the following command (remember to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"HOST")," with valid IP of\nthe container - see ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/1.5.0/how-to-work-with-docker#docker-container-ip-address"},"Docker Note"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -it --entrypoint=mgconsole memgraph --host HOST --use-ssl=False\n")),(0,o.kt)("p",null,"Otherwise, you can connect to the running Memgraph instance by\nissuing the following shell command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mgconsole --use-ssl=False\n")),(0,o.kt)("p",null,"After the client has started it should present a command prompt similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Type :help for shell usage\nQuit the shell by typing Ctrl-D(eof) or :quit\nConnected to 'memgraph://127.0.0.1:7687'\nmemgraph>\n")),(0,o.kt)("p",null,"At this point, it is possible to execute openCypher queries on Memgraph. Each\nquery needs to end with the ",(0,o.kt)("inlineCode",{parentName:"p"},";")," (",(0,o.kt)("em",{parentName:"p"},"semicolon"),") character. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (u:User {name: "Alice"})-[:Likes]->(m:Software {name: "Memgraph"});\n')),(0,o.kt)("p",null,'The above will create 2 nodes in the database, one labeled "User" with name\n"Alice" and the other labeled "Software" with name "Memgraph". It will also\ncreate a relationship that "Alice" ',(0,o.kt)("em",{parentName:"p"},"likes"),' "Memgraph".'),(0,o.kt)("p",null,"To find created nodes and relationships, execute the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u:User)-[r]->(x) RETURN u, r, x;\n")),(0,o.kt)("h3",{id:"telemetry"},"Telemetry"),(0,o.kt)("p",null,"Telemetry is an automated process by which data is collected at a remote point.\nAt Memgraph, we use telemetry for the sole purpose of improving our product,\nthereby collecting data about the machine that executes the database (CPU,\nmemory, OS, and kernel information) as well as data about the database runtime\n(CPU usage, memory usage, vertices, and edges count)."),(0,o.kt)("p",null,"Here at Memgraph, we care deeply about the privacy of our users and do not\ncollect any sensitive information. If you wish to disable Memgraph's telemetry\nfeatures, you can do so easily, either by altering the line in\n",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf")," that enables telemetry (set\n",(0,o.kt)("inlineCode",{parentName:"p"},"--telemetry-enabled=true")," to the following ",(0,o.kt)("inlineCode",{parentName:"p"},"--telemetry-enabled=false"),"), or by\nincluding ",(0,o.kt)("inlineCode",{parentName:"p"},"--telemetry-enabled=false")," as a command-line argument when running\nthe executable."),(0,o.kt)("p",null,"To learn more about telemetry in Memgraph, visit the ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/1.5.0/concepts/telemetry"},"concept page"),"."),(0,o.kt)("h3",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"To learn more about the ",(0,o.kt)("strong",{parentName:"p"},"Cypher")," language, visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/cypher-manual"},"Cypher manual"))," or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph Playground"))," for interactive guides.\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/1.5.0/tutorials/tutorials"},"Tutorials")),".\nDetails on what can be stored in Memgraph can be found in the article about ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/1.5.0/concepts/storage"},"Data storage")),"."),(0,o.kt)("h3",{id:"getting-help"},"Getting help"),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/1.5.0/getting-help/getting-help"},"Getting help"))," page in case you run into any kind of problem or you have additional questions."))}g.isMDXComponent=!0}}]);