(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(357)),i={id:"querying",title:"Querying the database",sidebar_label:"Querying the database"},l={unversionedId:"getting-started/querying/querying",id:"getting-started/querying/querying",isDocsHomePage:!1,title:"Querying the database",description:"Querying using console",source:"@site/docs/getting-started/querying/querying.md",slug:"/getting-started/querying/querying",permalink:"/memgraph/next/getting-started/querying/querying",editUrl:"https://github.com/memgraph/docs/tree/master/docs/getting-started/querying/querying.md",version:"current",sidebar_label:"Querying the database",sidebar:"memgraph",previous:{title:"Install Memgraph",permalink:"/memgraph/next/getting-started/installation"},next:{title:"Building applications",permalink:"/memgraph/next/getting-started/connecting-applications"}},c=[{value:"Querying using console",id:"querying-using-console",children:[{value:"Telemetry",id:"telemetry",children:[]},{value:"Where to next?",id:"where-to-next",children:[]},{value:"Getting help",id:"getting-help",children:[]}]}],p={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"querying-using-console"},"Querying using console"),Object(o.b)("p",null,"Memgraph supports the ",Object(o.b)("a",{parentName:"p",href:"https://www.opencypher.org"},"openCypher")," query language\nwhich has been developed by ",Object(o.b)("a",{parentName:"p",href:"http://neo4j.com"},"Neo4j"),".\nIt is a declarative language developed specifically\nfor interaction with graph databases, which is currently going through a\nvendor-independent standardization process."),Object(o.b)("p",null,"The easiest way to execute openCypher queries against Memgraph is by using\nMemgraph's command-line tool, ",Object(o.b)("inlineCode",{parentName:"p"},"mg_client"),", which is installed\ntogether with Memgraph."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"NOTE:")," ",Object(o.b)("inlineCode",{parentName:"p"},"mg_client")," is a deprecated tool still coming within the Memgraph package.\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/memgraph/mgconsole"},"mgconsole")," will replace ",Object(o.b)("inlineCode",{parentName:"p"},"mg_client")," in\nthe future. If possible, please use ",Object(o.b)("inlineCode",{parentName:"p"},"mgconsole")," instead."))),Object(o.b)("p",null,"If you installed Memgraph using Docker, you will need to run the client\nusing the following command (remember to replace ",Object(o.b)("inlineCode",{parentName:"p"},"HOST")," with valid IP of\nthe container - see ",Object(o.b)("a",{parentName:"p",href:"/memgraph/next/how-to-work-with-docker#docker-container-ip-address"},"Docker Note"),"):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"docker run -it --entrypoint=mg_client memgraph --host HOST --use-ssl=False\n")),Object(o.b)("p",null,"Otherwise, you can connect to the running Memgraph instance by\nissuing the following shell command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"mg_client --use-ssl=False\n")),Object(o.b)("p",null,"After the client has started it should present a command prompt similar to:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Type :help for shell usage\nQuit the shell by typing Ctrl-D(eof) or :quit\nConnected to 'memgraph://127.0.0.1:7687'\nmemgraph>\n")),Object(o.b)("p",null,"At this point, it is possible to execute openCypher queries on Memgraph. Each\nquery needs to end with the ",Object(o.b)("inlineCode",{parentName:"p"},";")," (",Object(o.b)("em",{parentName:"p"},"semicolon"),") character. For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},'CREATE (u:User {name: "Alice"})-[:Likes]->(m:Software {name: "Memgraph"});\n')),Object(o.b)("p",null,'The above will create 2 nodes in the database, one labeled "User" with name\n"Alice" and the other labeled "Software" with name "Memgraph". It will also\ncreate a relationship that "Alice" ',Object(o.b)("em",{parentName:"p"},"likes"),' "Memgraph".'),Object(o.b)("p",null,"To find created nodes and relationships, execute the following query:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u:User)-[r]->(x) RETURN u, r, x;\n")),Object(o.b)("h3",{id:"telemetry"},"Telemetry"),Object(o.b)("p",null,"Telemetry is an automated process by which data is collected at a remote point.\nAt Memgraph, we use telemetry for the sole purpose of improving our product,\nthereby collecting data about the machine that executes the database (CPU,\nmemory, OS, and kernel information) as well as data about the database runtime\n(CPU usage, memory usage, vertices, and edges count)."),Object(o.b)("p",null,"Here at Memgraph, we care deeply about the privacy of our users and do not\ncollect any sensitive information. If you wish to disable Memgraph's telemetry\nfeatures, you can do so easily, either by altering the line in\n",Object(o.b)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf")," that enables telemetry (set\n",Object(o.b)("inlineCode",{parentName:"p"},"--telemetry-enabled=true")," to the following ",Object(o.b)("inlineCode",{parentName:"p"},"--telemetry-enabled=false"),"), or by\nincluding ",Object(o.b)("inlineCode",{parentName:"p"},"--telemetry-enabled=false")," as a command-line argument when running\nthe executable."),Object(o.b)("p",null,"To learn more about telemetry in Memgraph, visit the ",Object(o.b)("a",{parentName:"p",href:"/memgraph/next/concepts/telemetry"},"concept page"),"."),Object(o.b)("h3",{id:"where-to-next"},"Where to next?"),Object(o.b)("p",null,"To learn more about the ",Object(o.b)("strong",{parentName:"p"},"Cypher")," language, visit the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/cypher-manual"},"Cypher manual"))," or ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph Playground"))," for interactive guides.\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/next/tutorials/tutorials"},"Tutorials")),".\nDetails on what can be stored in Memgraph can be found in the article about ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/next/concepts/storage"},"Data storage")),"."),Object(o.b)("h3",{id:"getting-help"},"Getting help"),Object(o.b)("p",null,"Visit the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/next/getting-help/getting-help"},"Getting help"))," page in case you run into any kind of problem or you have additional questions."))}s.isMDXComponent=!0},357:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,g=m["".concat(i,".").concat(u)]||m[u]||b[u]||o;return n?a.a.createElement(g,l(l({ref:t},p),{},{components:n})):a.a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);