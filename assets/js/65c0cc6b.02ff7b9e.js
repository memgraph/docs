"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25402],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>c});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=s,d=u["".concat(i,".").concat(c)]||u[c]||g[c]||r;return a?n.createElement(d,m(m({ref:t},l),{},{components:a})):n.createElement(d,m({ref:t},l))}));function c(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,m=new Array(r);m[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,m[1]=o;for(var p=2;p<r;p++)m[p]=a[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},47978:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>m,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),s=(a(67294),a(3905));const r={id:"c-api",title:"Transformation modules C API",sidebar_label:"C API"},m=void 0,o={unversionedId:"reference-guide/streams/transformation-modules/api/c-api",id:"version-2.1.0/reference-guide/streams/transformation-modules/api/c-api",title:"Transformation modules C API",description:"This is the additional API documentation for mg_procedure.h that contains declarations of all functions that can be used to implement a transformation. The source file can be found in the Memgraph installation directory, under include/memgraph. On the standard Debian installation, this will be under /usr/include/memgraph.",source:"@site/memgraph_versioned_docs/version-2.1.0/reference-guide/streams/transformation-modules/api/c-api.md",sourceDirName:"reference-guide/streams/transformation-modules/api",slug:"/reference-guide/streams/transformation-modules/api/c-api",permalink:"/docs/memgraph/2.1.0/reference-guide/streams/transformation-modules/api/c-api",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.0/reference-guide/streams/transformation-modules/api/c-api.md",tags:[],version:"2.1.0",frontMatter:{id:"c-api",title:"Transformation modules C API",sidebar_label:"C API"},sidebar:"version-2.1.0/memgraph",previous:{title:"Transformation modules overview",permalink:"/docs/memgraph/2.1.0/reference-guide/streams/transformation-modules"},next:{title:"Python API",permalink:"/docs/memgraph/2.1.0/reference-guide/streams/transformation-modules/api/python-api"}},i={},p=[{value:"Types",id:"types",level:2},{value:"Functions",id:"functions",level:2},{value:"Types Documentation",id:"types-documentation",level:2},{value:"typedef mgp_trans_cb",id:"typedef-mgp_trans_cb",level:3},{value:"Functions Documentation",id:"functions-documentation",level:2},{value:"function mgp_messages_size",id:"function-mgp_messages_size",level:3},{value:"function mgp_messages_at",id:"function-mgp_messages_at",level:3},{value:"function mgp_message_payload_size",id:"function-mgp_message_payload_size",level:3},{value:"function mgp_message_payload",id:"function-mgp_message_payload",level:3},{value:"function mgp_message_topic_name",id:"function-mgp_message_topic_name",level:3},{value:"function mgp_message_key_size",id:"function-mgp_message_key_size",level:3},{value:"function mgp_message_key",id:"function-mgp_message_key",level:3},{value:"function mgp_message_timestamp",id:"function-mgp_message_timestamp",level:3},{value:"function mgp_module_add_transformation",id:"function-mgp_module_add_transformation",level:3}],l={toc:p};function g(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This is the additional API documentation for ",(0,s.kt)("inlineCode",{parentName:"p"},"mg_procedure.h")," that contains declarations of all functions that can be used to implement a transformation. The source file can be found in the Memgraph installation directory, under ",(0,s.kt)("inlineCode",{parentName:"p"},"include/memgraph"),". On the standard Debian installation, this will be under ",(0,s.kt)("inlineCode",{parentName:"p"},"/usr/include/memgraph"),"."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},"NOTE:")," This part of the documentation is still under development. An updated version will soon be available.")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"For an example of how to implement\xa0transformation modules in C, check out ",(0,s.kt)("a",{parentName:"p",href:"/docs/memgraph/2.1.0/database-functionalities/streams/kafka/implement-transformation-module#c-api"},"this guide"),".")),(0,s.kt)("h2",{id:"types"},"Types"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null}),(0,s.kt)("th",{parentName:"tr",align:null},"Name"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"typedef void (","*",")(const struct mgp_messages ","*",", const struct mgp_graph ","*",", struct mgp_result ","*",", struct mgp_memory ","*",");"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"#typedef-mgp_trans_cb"},"mgp_trans_cb"))," ",(0,s.kt)("br",null),"Entry-point for a transformation with a fixed result type")))),(0,s.kt)("p",null,"Each record of the result must contain the following fields:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"the ",(0,s.kt)("inlineCode",{parentName:"li"},"query")," field with a Cypher query as a string that will be executed against the database"),(0,s.kt)("li",{parentName:"ul"},"the ",(0,s.kt)("inlineCode",{parentName:"li"},"parameters")," field with the optional query parameters as a nullable map")),(0,s.kt)("h2",{id:"functions"},"Functions"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null}),(0,s.kt)("th",{parentName:"tr",align:null},"Name"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"size_t"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"#function-mgp_messages_size"},"mgp_messages_size")),"(const struct mgp_messages ","*","messages) ",(0,s.kt)("br",null),"Get the number of messages contained in the messages list.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"const struct mgp_message ","*"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"#function-mgp_messages_at"},"mgp_messages_at")),"(const struct mgp_messages ","*","messages, size_t idx) ",(0,s.kt)("br",null)," Get the mgp_message at index idx.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"size_t"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"#function-mgp_message_payload_size"},"mgp_message_payload_size")),"(const struct mgp_message ","*","message) ",(0,s.kt)("br",null)," Get the payload size of message.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"const char ","*"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"#function-mgp_message_payload"},"mgp_message_payload")),"(const struct mgp_message ","*","message) ",(0,s.kt)("br",null)," Get the payload of messages as a byte array.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"const char ","*"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"#function-mgp_message_topic_name"},"mgp_message_topic_name")),"(const struct mgp_message ","*","message) ",(0,s.kt)("br",null)," Get the topic name of message.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"size_t"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"#function-mgp_message_key_size"},"mgp_message_key_size")),"(const struct mgp_message ","*","message) ",(0,s.kt)("br",null)," Get key size of message.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"const char ","*"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"#function-mgp_message_key"},"mgp_message_key")),"(const struct mgp_message ","*","message) ",(0,s.kt)("br",null)," Get key of message as a byte array.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"int64_t"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"#function-mgp_message_timestamp"},"mgp_message")),"(const struct mgp_message ","*","message) ",(0,s.kt)("br",null)," Get the timestamp of message.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"int"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"#function-mgp_module_add_transformation"},"mgp_module_add_transformation")),"(struct mgp_module ","*","module, const char ","*","name, mgp_trans_cb cb) ",(0,s.kt)("br",null)," Registers a transformation to a module")))),(0,s.kt)("h2",{id:"types-documentation"},"Types Documentation"),(0,s.kt)("h3",{id:"typedef-mgp_trans_cb"},"typedef mgp_trans_cb"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"typedef void(* mgp_trans_cb) (const struct mgp_messages *, const struct mgp_graph *, struct mgp_result *, struct mgp_memory *);\n")),(0,s.kt)("p",null,"Entry-point for a transformation invoked through a stream.\nPassed in arguments will not live longer than the callback's execution. Therefore,\nyou must not store them globally or use the passed in ",(0,s.kt)("inlineCode",{parentName:"p"},"mgp_memory")," to allocate global resources.\nThe result type of transformation is fixed."),(0,s.kt)("h2",{id:"functions-documentation"},"Functions Documentation"),(0,s.kt)("h3",{id:"function-mgp_messages_size"},"function mgp_messages_size"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"size_t mgp_messages_size(\n  const struct mgp_messages* messages\n)\n")),(0,s.kt)("p",null,"Returns the total number of messages contained in the argument ",(0,s.kt)("inlineCode",{parentName:"p"},"messages"),"."),(0,s.kt)("h3",{id:"function-mgp_messages_at"},"function mgp_messages_at"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"mgp_message* mgp_messages_at(\n  const struct mgp_messages* messages,\n  size_t idx\n)\n")),(0,s.kt)("p",null,"Accessor function that returns the underlying ",(0,s.kt)("inlineCode",{parentName:"p"},"message")," stored at index ",(0,s.kt)("inlineCode",{parentName:"p"},"idx")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"messages"),".\nThe index supplied must reside in the half-open interval [0, ",(0,s.kt)("inlineCode",{parentName:"p"},"mgp_messages_size(messages)"),")."),(0,s.kt)("h3",{id:"function-mgp_message_payload_size"},"function mgp_message_payload_size"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"size_t mgp_message_payload_size\n  const struct mgp_message* message\n)\n")),(0,s.kt)("p",null,"Returns the payload size of the argument ",(0,s.kt)("inlineCode",{parentName:"p"},"message"),"."),(0,s.kt)("h3",{id:"function-mgp_message_payload"},"function mgp_message_payload"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"const char * mgp_message_payload(\n  const struct mgp_message* message\n)\n")),(0,s.kt)("p",null,"Returns the payload of the argument ",(0,s.kt)("inlineCode",{parentName:"p"},"message")," as a byte array with size ",(0,s.kt)("inlineCode",{parentName:"p"},"mgp_message_payload_size(message)"),"."),(0,s.kt)("h3",{id:"function-mgp_message_topic_name"},"function mgp_message_topic_name"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"const char * mgp_message_topic_name(\n  const struct mgp_message* message\n)\n")),(0,s.kt)("p",null,"Returns topic name of the argument ",(0,s.kt)("inlineCode",{parentName:"p"},"message"),". Topic name is ",(0,s.kt)("inlineCode",{parentName:"p"},"NULL")," terminated."),(0,s.kt)("h3",{id:"function-mgp_message_key_size"},"function mgp_message_key_size"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"size_t mgp_message_key_size(\n  const struct mgp_message* message\n)\n")),(0,s.kt)("p",null,"Returns the key size of argument ",(0,s.kt)("inlineCode",{parentName:"p"},"message"),"."),(0,s.kt)("h3",{id:"function-mgp_message_key"},"function mgp_message_key"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"const char * mgp_message_key(\n  const struct mgp_message* message\n)\n")),(0,s.kt)("p",null,"Returns the key of the argument ",(0,s.kt)("inlineCode",{parentName:"p"},"message")," as a byte array with size ",(0,s.kt)("inlineCode",{parentName:"p"},"mgp_message_key_size(message)"),"."),(0,s.kt)("h3",{id:"function-mgp_message_timestamp"},"function mgp_message_timestamp"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"int64_t mgp_timestamp(\n  const struct mgp_message* message\n)\n")),(0,s.kt)("p",null,"Returns the timestamp of the argument ",(0,s.kt)("inlineCode",{parentName:"p"},"message"),"."),(0,s.kt)("h3",{id:"function-mgp_module_add_transformation"},"function mgp_module_add_transformation"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"int mgp_module_add_transformation(\n  struct mgp_module *module,\n  const char *name,\n  mgp_trans_cb cb\n)\n")),(0,s.kt)("p",null,"Register a transformation to a module. The ",(0,s.kt)("inlineCode",{parentName:"p"},"name")," must be a sequence of digits, underscores,\nlowercase, and uppercase Latin letters. The ",(0,s.kt)("inlineCode",{parentName:"p"},"name")," must begin with a non-digit character.\nNote that Unicode characters are not allowed. Additionally, the ",(0,s.kt)("inlineCode",{parentName:"p"},"name")," is case-sensitive."),(0,s.kt)("p",null,"Return non-zero if the transformation is added successfully. Registering might\nfail if unable to allocate memory for the transformation; if ",(0,s.kt)("inlineCode",{parentName:"p"},"name")," is not\nvalid, or a transformation with the same name was already registered or if any\nother unexpected failure happens."))}g.isMDXComponent=!0}}]);