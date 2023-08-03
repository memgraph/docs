"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17585],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,g=m["".concat(d,".").concat(c)]||m[c]||p[c]||l;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={id:"audit-log",title:"Audit log (Enterprise)",sidebar_label:"Audit log"},i=void 0,o={unversionedId:"reference-guide/audit-log",id:"version-2.10.0/reference-guide/audit-log",title:"Audit log (Enterprise)",description:"Memgraph supports all query audit logging. When enabled, the audit log contains",source:"@site/memgraph_versioned_docs/version-2.10.0/reference-guide/audit-log.md",sourceDirName:"reference-guide",slug:"/reference-guide/audit-log",permalink:"/docs/memgraph/reference-guide/audit-log",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.10.0/reference-guide/audit-log.md",tags:[],version:"2.10.0",frontMatter:{id:"audit-log",title:"Audit log (Enterprise)",sidebar_label:"Audit log"},sidebar:"memgraph",previous:{title:"Enabling Memgraph Enterprise",permalink:"/docs/memgraph/reference-guide/enabling-enterprise"},next:{title:"Auth module",permalink:"/docs/memgraph/reference-guide/auth-module"}},d={},u=[{value:"Format",id:"format",level:2},{value:"Example",id:"example",level:2},{value:"Parsing the log",id:"parsing-the-log",level:2},{value:"Flags",id:"flags",level:2}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Memgraph supports all query audit logging. When enabled, the audit log contains\nrecords of all queries executed on the database.  Each executed query is one\nentry (one line) in the audit log. The audit log itself is a CSV file."),(0,r.kt)("p",null,"All audit logs are written to\n",(0,r.kt)("inlineCode",{parentName:"p"},"<MEMGRAPH_DURABILITY_DIRECTORY>/audit/audit.log"),".  The log is rotated using\n",(0,r.kt)("inlineCode",{parentName:"p"},"logrotate"),", so entries in the ",(0,r.kt)("inlineCode",{parentName:"p"},"audit.log")," file are always the newest entries.\nEntries in ",(0,r.kt)("inlineCode",{parentName:"p"},"audit.log.1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"audit.log.2.gz"),", etc.  are older entries. The\ndefault log rotation configuration can be found in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/logrotate.d/memgraph"),".\nBy default, the log is rotated every day and a full year of entries is\npreserved. You can modify the values to your own needs and preferences."),(0,r.kt)("h2",{id:"format"},"Format"),(0,r.kt)("p",null,"The audit log contains the following information formatted into a CSV file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"<timestamp>,<address>,<username>,<query>,<params>\n")),(0,r.kt)("p",null,"For each query, the supplied query parameters are also logged. The query is\nescaped and quoted so that commas in queries don't affect the correctness of\nthe CSV. The parameters are encoded as JSON objects and are then escaped and\nquoted."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"This is an example of the audit log:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'1551376833.225395,127.0.0.1,admin,"MATCH (n) DETACH DELETE n","{}"\n1551376833.257825,127.0.0.1,admin,"CREATE (n {name: $name})","{\\"name\\":\\"alice\\"}"\n1551376833.273546,127.0.0.1,admin,"MATCH (n), (m) CREATE (n)-[:e {when: $when}]->(m)","{\\"when\\":42}"\n1551376833.300955,127.0.0.1,admin,"MATCH (n), (m) SET n.value = m.value","{}"\n')),(0,r.kt)("p",null,"We can see that all of the queries were executed from the loopback address and\nwere executed by the user ",(0,r.kt)("inlineCode",{parentName:"p"},"admin"),".  The executed queries are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Query"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MATCH (n) DETACH DELETE n"),(0,r.kt)("td",{parentName:"tr",align:null},"{}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CREATE (n {name: $name})"),(0,r.kt)("td",{parentName:"tr",align:null},'{"name": "alice"}')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MATCH (n), (m) CREATE (n)-","[:e {when: $when}]","->(m)"),(0,r.kt)("td",{parentName:"tr",align:null},'{"when": 42}')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MATCH (n), (m) SET n.value = m.value"),(0,r.kt)("td",{parentName:"tr",align:null},"{}")))),(0,r.kt)("h2",{id:"parsing-the-log"},"Parsing the log"),(0,r.kt)("p",null,"If you wish to parse the log, the following Python snippet shows how to extract\ndata from the audit log:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import csv\nimport json\n\nwith open(\"audit.log\") as f:\n    reader = csv.reader(f, delimiter=',', doublequote=False,\n                        escapechar='\\\\', lineterminator='\\n',\n                        quotechar='\"', quoting=csv.QUOTE_MINIMAL,\n                        skipinitialspace=False, strict=True)\n    for line in reader:\n        timestamp, address, username, query, params = line\n        params = json.loads(params)\n        # Rest of your code that processes the logs.\n")),(0,r.kt)("h2",{id:"flags"},"Flags"),(0,r.kt)("p",null,"This section contains the list of flags that are used to configure audit\nlogging in Memgraph."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Flag"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--audit-enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Enables audit logging.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--audit-buffer-size")),(0,r.kt)("td",{parentName:"tr",align:null},"Controls the in-memory buffer size used for audit logs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--audit-buffer-flush-interval-ms")),(0,r.kt)("td",{parentName:"tr",align:null},"Controls the time interval (in milliseconds) used for flushing the in-memory buffer to disk.")))))}p.isMDXComponent=!0}}]);