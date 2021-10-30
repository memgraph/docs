"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[956],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),u=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=u(n),g=r,k=s["".concat(d,".").concat(g)]||s[g]||p[g]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},53353:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return m},default:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"configuration",title:"Configuration",sidebar_label:"Configuration"},d=void 0,u={unversionedId:"reference-guide/configuration",id:"version-2.0.0/reference-guide/configuration",isDocsHomePage:!1,title:"Configuration",description:"The main Memgraph configuration file is available in /etc/memgraph/memgraph.conf.",source:"@site/memgraph_versioned_docs/version-2.0.0/reference-guide/configuration.md",sourceDirName:"reference-guide",slug:"/reference-guide/configuration",permalink:"/docs/memgraph/2.0.0/reference-guide/configuration",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.0.0/reference-guide/configuration.md",tags:[],version:"2.0.0",frontMatter:{id:"configuration",title:"Configuration",sidebar_label:"Configuration"},sidebar:"version-2.0.0/memgraph",previous:{title:"Backup",permalink:"/docs/memgraph/2.0.0/reference-guide/backup"},next:{title:"Runtime settings",permalink:"/docs/memgraph/2.0.0/reference-guide/runtime-settings"}},m=[{value:"Bolt",id:"bolt",children:[],level:2},{value:"Query",id:"query",children:[],level:2},{value:"Storage",id:"storage",children:[],level:2},{value:"Other",id:"other",children:[],level:2},{value:"Additional configuration inclusion",id:"additional-configuration-inclusion",children:[],level:2}],p={toc:m};function s(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The main Memgraph configuration file is available in ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),".\nYou can modify that file to suit your specific needs. Additional configuration can be specified by\nincluding another configuration file, in a file pointed to by the\n",(0,l.kt)("inlineCode",{parentName:"p"},"MEMGRAPH_CONFIG")," environment variable or by passing arguments on the command\nline."),(0,l.kt)("p",null,"Each configuration setting is in the form: ",(0,l.kt)("inlineCode",{parentName:"p"},"--setting-name=value"),"."),(0,l.kt)("h2",{id:"bolt"},"Bolt"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--bolt-address=0.0.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"IP address on which the Bolt server should listen."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[string]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--bolt-cert-file="),(0,l.kt)("td",{parentName:"tr",align:null},"Certificate file which should be used for the Bolt server."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[string]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--bolt-key-file="),(0,l.kt)("td",{parentName:"tr",align:null},"Key file which should be used for the Bolt server."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[string]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--bolt-num-workers="),(0,l.kt)("td",{parentName:"tr",align:null},"Number of workers used by the Bolt server. ",(0,l.kt)("br",null),"By default, this will be the number of processing units available on the machine."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[int32]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--bolt-port=7687"),(0,l.kt)("td",{parentName:"tr",align:null},"Port on which the Bolt server should listen."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[int32]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--bolt-server-name-for-init="),(0,l.kt)("td",{parentName:"tr",align:null},"Server name which the database should send to the client in the Bolt INIT message."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[string]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--bolt-session-inactivity-timeout=1800"),(0,l.kt)("td",{parentName:"tr",align:null},"Time in seconds after which inactive Bolt sessions will be closed."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[int32]"))))),(0,l.kt)("h2",{id:"query"},"Query"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--query-cost-planner=true"),(0,l.kt)("td",{parentName:"tr",align:null},"Use the cost-estimating query planner."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[bool]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--query-execution-timeout-sec=180"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum allowed query execution time. ",(0,l.kt)("br",null),"Queries exceeding this limit will be aborted. Value of 0 means no limit."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[uint64]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--query-max-plans=1000"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of generated plans for a query."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[uint64]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--query-modules-directory=/usr/lib/memgraph/query-modules"),(0,l.kt)("td",{parentName:"tr",align:null},"Directory where modules with custom query procedures are stored. NOTE: Multiple comma-separated directories can be defined."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[string]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--query-plan-cache-ttl=60"),(0,l.kt)("td",{parentName:"tr",align:null},"Time to live for cached query plans, in seconds."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[int32]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--query-vertex-count-to-expand-existing=10"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum count of indexed vertices which provoke indexed lookup and then expand to existing, ",(0,l.kt)("br",null),"instead of a regular expand. Default is 10, to turn off use -1."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[int64]"))))),(0,l.kt)("h2",{id:"storage"},"Storage"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--storage-gc-cycle-sec=30"),(0,l.kt)("td",{parentName:"tr",align:null},"Storage garbage collector interval (in seconds)."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[uint64]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--storage-properties-on-edges=true"),(0,l.kt)("td",{parentName:"tr",align:null},"Controls whether edges have properties."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[bool]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--storage-recover-on-startup=true"),(0,l.kt)("td",{parentName:"tr",align:null},"Controls whether the storage recovers persisted data on startup."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[bool]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--storage-snapshot-interval-sec=300"),(0,l.kt)("td",{parentName:"tr",align:null},"Storage snapshot creation interval (in seconds). Set to 0 to disable periodic snapshot creation."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[uint64]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--storage-snapshot-on-exit=true"),(0,l.kt)("td",{parentName:"tr",align:null},"Controls whether the storage creates another snapshot on exit."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[bool]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--storage-snapshot-retention-count=3"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of snapshots that should always be kept."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[uint64]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--storage-wal-enabled=true"),(0,l.kt)("td",{parentName:"tr",align:null},"Controls whether the storage uses write-ahead-logging. To enable WAL periodic snapshots must be enabled."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[bool]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--storage-wal-file-flush-every-n-tx=100000"),(0,l.kt)("td",{parentName:"tr",align:null},"Issue a 'fsync' call after this amount of transactions are written to the WAL file. Set to 1 for fully synchronous operation."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[uint64]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--storage-wal-file-size-kib=20480"),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum file size of each WAL file."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[uint64]"))))),(0,l.kt)("h2",{id:"other"},"Other"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flag"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--allow-load-csv"),(0,l.kt)("td",{parentName:"tr",align:null},"Controls whether LOAD CSV clause is allowed in queries"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[bool]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--also-log-to-stderr=false"),(0,l.kt)("td",{parentName:"tr",align:null},"log messages go to stderr in addition to logfiles"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[bool]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--data-directory=/var/lib/memgraph"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to directory in which to save all permanent data."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[string]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--isolation-level"),(0,l.kt)("td",{parentName:"tr",align:null},"Default isolation level used for the transactions. Allowed values: SNAPSHOT_ISOLATION, READ_COMMITTED, READ_UNCOMMITTED"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[string]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--kafka-bootstrap-servers="),(0,l.kt)("td",{parentName:"tr",align:null},"List of Kafka brokers as a comma separated list of broker ",(0,l.kt)("inlineCode",{parentName:"td"},"host")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"host:port"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[string]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--log-file=/var/log/memgraph/memgraph.log"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to where the log should be stored."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[string]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--log-level"),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum log level. Allowed values: TRACE, DEBUG, INFO, WARNING, ERROR, CRITICAL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[string]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--memory-limit=0"),(0,l.kt)("td",{parentName:"tr",align:null},"Total memory limit in MiB. Set to 0 to use the default values which are 100% of the physical memory if the swap is enabled and 90% of the physical memory otherwise."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[uint64]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--memory-warning-threshold=1024"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory warning threshold, in MB. If Memgraph detects there is less available RAM it will log a warning. ",(0,l.kt)("br",null),"Set to 0 to disable."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[uint64]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--telemetry-enabled=true"),(0,l.kt)("td",{parentName:"tr",align:null},"Set to true to enable telemetry. We collect information about the running system (CPU and memory information), information about the database runtime (vertex and edge counts and resource usage), and aggregated statistics about some features of the database (e.g. how many times a feature is used) to allow for an easier improvement of the product."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[bool]"))))),(0,l.kt)("h2",{id:"additional-configuration-inclusion"},"Additional configuration inclusion"),(0,l.kt)("p",null,"You can include additional configuration files from this file. Additional\nfiles are processed after this file. Settings that are set in the additional\nfiles will override previously set values. Additional configuration files are\nspecified with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--flag-file")," flag."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"--flag-file=another.conf")))}s.isMDXComponent=!0}}]);