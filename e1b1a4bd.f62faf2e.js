(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{165:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),l=(a(0),a(179)),i={id:"configuration",title:"Memgraph configuration",sidebar_label:"Memgraph configuration"},o={unversionedId:"reference-guide/configuration",id:"reference-guide/configuration",isDocsHomePage:!1,title:"Memgraph configuration",description:"The main Memgraph configuration file is available in /etc/memgraph/memgraph.conf.",source:"@site/docs/reference-guide/configuration.md",slug:"/reference-guide/configuration",permalink:"/memgraph/reference-guide/configuration",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/configuration.md",version:"current",sidebar_label:"Memgraph configuration",sidebar:"memgraph",previous:{title:"Reference guide overview",permalink:"/memgraph/reference-guide"},next:{title:"Indexing",permalink:"/memgraph/reference-guide/indexing"}},c=[{value:"Bolt",id:"bolt",children:[]},{value:"Query",id:"query",children:[]},{value:"Storage",id:"storage",children:[]},{value:"Other",id:"other",children:[]},{value:"Additional configuration inclusion",id:"additional-configuration-inclusion",children:[]}],d={toc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("p",null,"The main Memgraph configuration file is available in ",Object(l.a)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),".\nYou can modify that file to suit your specific needs. Additional configuration can be specified by\nincluding another configuration file, in a file pointed to by the\n",Object(l.a)("inlineCode",{parentName:"p"},"MEMGRAPH_CONFIG")," environment variable or by passing arguments on the command\nline."),Object(l.a)("p",null,"Each configuration setting is in the form: ",Object(l.a)("inlineCode",{parentName:"p"},"--setting-name=value"),"."),Object(l.a)("h2",{id:"bolt"},"Bolt"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",{parentName:"tr",align:null},"Flag"),Object(l.a)("th",{parentName:"tr",align:null},"Description"),Object(l.a)("th",{parentName:"tr",align:null},"Type"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--bolt-address=0.0.0.0"),Object(l.a)("td",{parentName:"tr",align:null},"IP address on which the Bolt server should listen."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[string]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--bolt-cert-file="),Object(l.a)("td",{parentName:"tr",align:null},"Certificate file which should be used for the Bolt server."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[string]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--bolt-key-file="),Object(l.a)("td",{parentName:"tr",align:null},"Key file which should be used for the Bolt server."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[string]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--bolt-num-workers="),Object(l.a)("td",{parentName:"tr",align:null},"Number of workers used by the Bolt server. ",Object(l.a)("br",null),"By default, this will be the number of processing units available on the machine."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[int32]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--bolt-port=7687"),Object(l.a)("td",{parentName:"tr",align:null},"Port on which the Bolt server should listen."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[int32]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--bolt-server-name-for-init="),Object(l.a)("td",{parentName:"tr",align:null},"Server name which the database should send to the client in the Bolt INIT message."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[string]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--bolt-session-inactivity-timeout=1800"),Object(l.a)("td",{parentName:"tr",align:null},"Time in seconds after which inactive Bolt sessions will be closed."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[int32]"))))),Object(l.a)("h2",{id:"query"},"Query"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",{parentName:"tr",align:null},"Flag"),Object(l.a)("th",{parentName:"tr",align:null},"Description"),Object(l.a)("th",{parentName:"tr",align:null},"Type"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--query-cost-planner=true"),Object(l.a)("td",{parentName:"tr",align:null},"Use the cost-estimating query planner."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[bool]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--query-execution-timeout-sec=180"),Object(l.a)("td",{parentName:"tr",align:null},"Maximum allowed query execution time. ",Object(l.a)("br",null),"Queries exceeding this limit will be aborted. Value of 0 means no limit."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[uint64]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--query-max-plans=1000"),Object(l.a)("td",{parentName:"tr",align:null},"Maximum number of generated plans for a query."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[uint64]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--query-modules-directory=/usr/lib/memgraph/query-modules"),Object(l.a)("td",{parentName:"tr",align:null},"Directory where modules with custom query procedures are stored."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[string]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--query-plan-cache-ttl=60"),Object(l.a)("td",{parentName:"tr",align:null},"Time to live for cached query plans, in seconds."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[int32]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--query-vertex-count-to-expand-existing=10"),Object(l.a)("td",{parentName:"tr",align:null},"Maximum count of indexed vertices which provoke indexed lookup and then expand to existing, ",Object(l.a)("br",null),"instead of a regular expand. Default is 10, to turn off use -1."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[int64]"))))),Object(l.a)("h2",{id:"storage"},"Storage"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",{parentName:"tr",align:null},"Flag"),Object(l.a)("th",{parentName:"tr",align:null},"Description"),Object(l.a)("th",{parentName:"tr",align:null},"Type"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--storage-gc-cycle-sec=30"),Object(l.a)("td",{parentName:"tr",align:null},"Storage garbage collector interval (in seconds)."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[uint64]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--storage-properties-on-edges=true"),Object(l.a)("td",{parentName:"tr",align:null},"Controls whether edges have properties."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[bool]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--storage-recover-on-startup=true"),Object(l.a)("td",{parentName:"tr",align:null},"Controls whether the storage recovers persisted data on startup."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[bool]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--storage-snapshot-interval-sec=300"),Object(l.a)("td",{parentName:"tr",align:null},"Storage snapshot creation interval (in seconds). Set to 0 to disable periodic snapshot creation."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[uint64]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--storage-snapshot-on-exit=true"),Object(l.a)("td",{parentName:"tr",align:null},"Controls whether the storage creates another snapshot on exit."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[bool]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--storage-snapshot-retention-count=3"),Object(l.a)("td",{parentName:"tr",align:null},"The number of snapshots that should always be kept."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[uint64]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--storage-wal-enabled=true"),Object(l.a)("td",{parentName:"tr",align:null},"Controls whether the storage uses write-ahead-logging. To enable WAL periodic snapshots must be enabled."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[bool]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--storage-wal-file-flush-every-n-tx=100000"),Object(l.a)("td",{parentName:"tr",align:null},"Issue a 'fsync' call after this amount of transactions are written to the WAL file. Set to 1 for fully synchronous operation."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[uint64]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--storage-wal-file-size-kib=20480"),Object(l.a)("td",{parentName:"tr",align:null},"Minimum file size of each WAL file."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[uint64]"))))),Object(l.a)("h2",{id:"other"},"Other"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",{parentName:"tr",align:null},"Flag"),Object(l.a)("th",{parentName:"tr",align:null},"Description"),Object(l.a)("th",{parentName:"tr",align:null},"Type"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--also-log-to-stderr=false"),Object(l.a)("td",{parentName:"tr",align:null},"log messages go to stderr in addition to logfiles"),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[bool]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--data-directory=/var/lib/memgraph"),Object(l.a)("td",{parentName:"tr",align:null},"Path to directory in which to save all permanent data."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[string]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--log-file=/var/log/memgraph/memgraph.log"),Object(l.a)("td",{parentName:"tr",align:null},"Path to where the log should be stored."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[string]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--log-level"),Object(l.a)("td",{parentName:"tr",align:null},"Minimum log level. Allowed values: TRACE, DEBUG, INFO, WARNING, ERROR, CRITICAL"),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[string]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--memory-warning-threshold=1024"),Object(l.a)("td",{parentName:"tr",align:null},"Memory warning threshold, in MB. If Memgraph detects there is less available RAM it will log a warning. ",Object(l.a)("br",null),"Set to 0 to disable."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[uint64]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},"--telemetry-enabled=true"),Object(l.a)("td",{parentName:"tr",align:null},"Set to true to enable telemetry. We collect information about the running system (CPU and memory information) ",Object(l.a)("br",null),"and information about the database runtime (vertex and edge counts and resource usage) to allow for easier improvement of the product."),Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"[bool]"))))),Object(l.a)("h2",{id:"additional-configuration-inclusion"},"Additional configuration inclusion"),Object(l.a)("p",null,"You can include additional configuration files from this file. Additional\nfiles are processed after this file. Settings that are set in the additional\nfiles will override previously set values. Additional configuration files are\nspecified with the ",Object(l.a)("inlineCode",{parentName:"p"},"--flag-file")," flag."),Object(l.a)("p",null,"Example:"),Object(l.a)("p",null,Object(l.a)("inlineCode",{parentName:"p"},"--flag-file=another.conf")))}b.isMDXComponent=!0},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),b=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=b(a),m=n,s=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return a?r.a.createElement(s,o(o({ref:t},d),{},{components:a})):r.a.createElement(s,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);