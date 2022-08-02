"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40283],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=l(n),c=r,d=g["".concat(i,".").concat(c)]||g[c]||u[c]||s;return n?a.createElement(d,m(m({ref:t},p),{},{components:n})):a.createElement(d,m({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,m=new Array(s);m[0]=g;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,m[1]=o;for(var l=2;l<s;l++)m[l]=n[l];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},54052:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),m=["components"],o={id:"c-api",title:"Transformation modules C API",sidebar_label:"C API"},i=void 0,l={unversionedId:"reference-guide/streams/transformation-modules/api/c-api",id:"version-2.3.1/reference-guide/streams/transformation-modules/api/c-api",title:"Transformation modules C API",description:"This is the C API documentation for mg_procedure.h that contains declarations",source:"@site/memgraph_versioned_docs/version-2.3.1/reference-guide/streams/transformation-modules/api/c-api.md",sourceDirName:"reference-guide/streams/transformation-modules/api",slug:"/reference-guide/streams/transformation-modules/api/c-api",permalink:"/docs/memgraph/reference-guide/streams/transformation-modules/api/c-api",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.1/reference-guide/streams/transformation-modules/api/c-api.md",tags:[],version:"2.3.1",frontMatter:{id:"c-api",title:"Transformation modules C API",sidebar_label:"C API"},sidebar:"memgraph",previous:{title:"Transformation modules overview",permalink:"/docs/memgraph/reference-guide/streams/transformation-modules"},next:{title:"Python API",permalink:"/docs/memgraph/reference-guide/streams/transformation-modules/api/python-api"}},p={},u=[{value:"Types",id:"types",level:2},{value:"Functions",id:"functions",level:2},{value:"Types Documentation",id:"types-documentation",level:2},{value:"typedef mgp_trans_cb",id:"typedef-mgp_trans_cb",level:3},{value:"Functions Documentation",id:"functions-documentation",level:2},{value:"function mgp_messages_size",id:"function-mgp_messages_size",level:3},{value:"function mgp_messages_at",id:"function-mgp_messages_at",level:3},{value:"function mgp_message_payload_size",id:"function-mgp_message_payload_size",level:3},{value:"function mgp_message_payload",id:"function-mgp_message_payload",level:3},{value:"function mgp_message_topic_name",id:"function-mgp_message_topic_name",level:3},{value:"function mgp_message_key_size",id:"function-mgp_message_key_size",level:3},{value:"function mgp_message_key",id:"function-mgp_message_key",level:3},{value:"function mgp_message_timestamp",id:"function-mgp_message_timestamp",level:3},{value:"function mgp_module_add_transformation",id:"function-mgp_module_add_transformation",level:3},{value:"Transformation module example",id:"transformation-module-example",level:2}],g={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,m);return(0,s.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This is the C API documentation for ",(0,s.kt)("inlineCode",{parentName:"p"},"mg_procedure.h")," that contains declarations\nof all functions that can be used to implement a transformation. This source\nfile can be found in the Memgraph installation directory, under\n",(0,s.kt)("inlineCode",{parentName:"p"},"include/memgraph"),". On the standard Debian installation, this will be under\n",(0,s.kt)("inlineCode",{parentName:"p"},"/usr/include/memgraph"),"."),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"NOTE:")," This part of the documentation is still under development. An updated\nversion will soon be available."))),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"For an example of how to implement\xa0transformation modules in C, check out the\n",(0,s.kt)("a",{parentName:"p",href:"#transformation-module-example"},"transformation module example"),"."))),(0,s.kt)("h2",{id:"types"},"Types"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null}),(0,s.kt)("th",{parentName:"tr",align:null},"Name"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"typedef void (","*",")(const struct mgp_messages ","*",", const struct mgp_graph ","*",", struct mgp_result ","*",", struct mgp_memory ","*",");"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"#typedef-mgp_trans_cb"},"mgp_trans_cb"))," ",(0,s.kt)("br",null),"Entry-point for a transformation with a fixed result type")))),(0,s.kt)("p",null,"Each record of the result must contain the following fields:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"the ",(0,s.kt)("inlineCode",{parentName:"li"},"query")," field with a Cypher query as a string that will be executed against the database"),(0,s.kt)("li",{parentName:"ul"},"the ",(0,s.kt)("inlineCode",{parentName:"li"},"parameters")," field with the optional query parameters as a nullable map")),(0,s.kt)("h2",{id:"functions"},"Functions"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null}),(0,s.kt)("th",{parentName:"tr",align:null},"Name"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"size_t"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"#function-mgp_messages_size"},"mgp_messages_size")),"(const struct mgp_messages ","*","messages) ",(0,s.kt)("br",null),"Get the number of messages contained in the messages list.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"const struct mgp_message ","*"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"#function-mgp_messages_at"},"mgp_messages_at")),"(const struct mgp_messages ","*","messages, size_t idx) ",(0,s.kt)("br",null)," Get the mgp_message at index idx.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"size_t"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"#function-mgp_message_payload_size"},"mgp_message_payload_size")),"(const struct mgp_message ","*","message) ",(0,s.kt)("br",null)," Get the payload size of message.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"const char ","*"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"#function-mgp_message_payload"},"mgp_message_payload")),"(const struct mgp_message ","*","message) ",(0,s.kt)("br",null)," Get the payload of messages as a byte array.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"const char ","*"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"#function-mgp_message_topic_name"},"mgp_message_topic_name")),"(const struct mgp_message ","*","message) ",(0,s.kt)("br",null)," Get the topic name of message.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"size_t"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"#function-mgp_message_key_size"},"mgp_message_key_size")),"(const struct mgp_message ","*","message) ",(0,s.kt)("br",null)," Get key size of message.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"const char ","*"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"#function-mgp_message_key"},"mgp_message_key")),"(const struct mgp_message ","*","message) ",(0,s.kt)("br",null)," Get key of message as a byte array.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"int64_t"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"#function-mgp_message_timestamp"},"mgp_message")),"(const struct mgp_message ","*","message) ",(0,s.kt)("br",null)," Get the timestamp of message.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"int"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("a",{parentName:"strong",href:"#function-mgp_module_add_transformation"},"mgp_module_add_transformation")),"(struct mgp_module ","*","module, const char ","*","name, mgp_trans_cb cb) ",(0,s.kt)("br",null)," Registers a transformation to a module")))),(0,s.kt)("h2",{id:"types-documentation"},"Types Documentation"),(0,s.kt)("h3",{id:"typedef-mgp_trans_cb"},"typedef mgp_trans_cb"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"typedef void(* mgp_trans_cb) (const struct mgp_messages *, const struct mgp_graph *, struct mgp_result *, struct mgp_memory *);\n")),(0,s.kt)("p",null,"Entry-point for a transformation invoked through a stream.\nPassed in arguments will not live longer than the callback's execution. Therefore,\nyou must not store them globally or use the passed in ",(0,s.kt)("inlineCode",{parentName:"p"},"mgp_memory")," to allocate global resources.\nThe result type of transformation is fixed."),(0,s.kt)("h2",{id:"functions-documentation"},"Functions Documentation"),(0,s.kt)("h3",{id:"function-mgp_messages_size"},"function mgp_messages_size"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"size_t mgp_messages_size(\n  const struct mgp_messages* messages\n)\n")),(0,s.kt)("p",null,"Returns the total number of messages contained in the argument ",(0,s.kt)("inlineCode",{parentName:"p"},"messages"),"."),(0,s.kt)("h3",{id:"function-mgp_messages_at"},"function mgp_messages_at"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"mgp_message* mgp_messages_at(\n  const struct mgp_messages* messages,\n  size_t idx\n)\n")),(0,s.kt)("p",null,"Accessor function that returns the underlying ",(0,s.kt)("inlineCode",{parentName:"p"},"message")," stored at index ",(0,s.kt)("inlineCode",{parentName:"p"},"idx")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"messages"),".\nThe index supplied must reside in the half-open interval [0, ",(0,s.kt)("inlineCode",{parentName:"p"},"mgp_messages_size(messages)"),")."),(0,s.kt)("h3",{id:"function-mgp_message_payload_size"},"function mgp_message_payload_size"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"size_t mgp_message_payload_size\n  const struct mgp_message* message\n)\n")),(0,s.kt)("p",null,"Returns the payload size of the argument ",(0,s.kt)("inlineCode",{parentName:"p"},"message"),"."),(0,s.kt)("h3",{id:"function-mgp_message_payload"},"function mgp_message_payload"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"const char * mgp_message_payload(\n  const struct mgp_message* message\n)\n")),(0,s.kt)("p",null,"Returns the payload of the argument ",(0,s.kt)("inlineCode",{parentName:"p"},"message")," as a byte array with size ",(0,s.kt)("inlineCode",{parentName:"p"},"mgp_message_payload_size(message)"),"."),(0,s.kt)("h3",{id:"function-mgp_message_topic_name"},"function mgp_message_topic_name"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"const char * mgp_message_topic_name(\n  const struct mgp_message* message\n)\n")),(0,s.kt)("p",null,"Returns topic name of the argument ",(0,s.kt)("inlineCode",{parentName:"p"},"message"),". Topic name is ",(0,s.kt)("inlineCode",{parentName:"p"},"NULL")," terminated."),(0,s.kt)("h3",{id:"function-mgp_message_key_size"},"function mgp_message_key_size"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"size_t mgp_message_key_size(\n  const struct mgp_message* message\n)\n")),(0,s.kt)("p",null,"Returns the key size of argument ",(0,s.kt)("inlineCode",{parentName:"p"},"message"),"."),(0,s.kt)("h3",{id:"function-mgp_message_key"},"function mgp_message_key"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"const char * mgp_message_key(\n  const struct mgp_message* message\n)\n")),(0,s.kt)("p",null,"Returns the key of the argument ",(0,s.kt)("inlineCode",{parentName:"p"},"message")," as a byte array with size ",(0,s.kt)("inlineCode",{parentName:"p"},"mgp_message_key_size(message)"),"."),(0,s.kt)("h3",{id:"function-mgp_message_timestamp"},"function mgp_message_timestamp"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"int64_t mgp_timestamp(\n  const struct mgp_message* message\n)\n")),(0,s.kt)("p",null,"Returns the timestamp of the argument ",(0,s.kt)("inlineCode",{parentName:"p"},"message"),"."),(0,s.kt)("h3",{id:"function-mgp_module_add_transformation"},"function mgp_module_add_transformation"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"int mgp_module_add_transformation(\n  struct mgp_module *module,\n  const char *name,\n  mgp_trans_cb cb\n)\n")),(0,s.kt)("p",null,"Register a transformation to a module. The ",(0,s.kt)("inlineCode",{parentName:"p"},"name")," must be a sequence of digits, underscores,\nlowercase, and uppercase Latin letters. The ",(0,s.kt)("inlineCode",{parentName:"p"},"name")," must begin with a non-digit character.\nNote that Unicode characters are not allowed. Additionally, the ",(0,s.kt)("inlineCode",{parentName:"p"},"name")," is case-sensitive."),(0,s.kt)("p",null,"Return non-zero if the transformation is added successfully. Registering might\nfail if unable to allocate memory for the transformation; if ",(0,s.kt)("inlineCode",{parentName:"p"},"name")," is not\nvalid, or a transformation with the same name was already registered or if any\nother unexpected failure happens."),(0,s.kt)("h2",{id:"transformation-module-example"},"Transformation module example"),(0,s.kt)("p",null,"Transformations can be implemented in C/C++ using the C API provided by\nMemgraph. Such modules need to be compiled to a shared library so that they can\nbe loaded when Memgraph starts. This means that you can write the\ntransformations in any programming language which can work with C and can be\ncompiled to the ELF shared library format."),(0,s.kt)("p",null,"In this chapter, we assume that Memgraph is installed on a standard Debian or\nUbuntu machine where the necessary header file can be found under\n",(0,s.kt)("inlineCode",{parentName:"p"},"/usr/include/memgraph"),". For other installations, the header file can be found\nunder the ",(0,s.kt)("inlineCode",{parentName:"p"},"include/memgraph")," folder in the Memgraph installation directory."),(0,s.kt)("p",null,"As we already discussed how transformations work in the Python example, we\nwon't go over the transformation itself in detail. Also, to keep the\ncomplexity of this example low, this transformation doesn't use the query\nparameters. "),(0,s.kt)("p",null,"So let's create ",(0,s.kt)("inlineCode",{parentName:"p"},"c_transformation.cpp")," and start to populate it!"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <exception>\n#include <string>\n\n#include "mg_procedure.h"\n\nconst std::string query_part_1{"CREATE (n:MESSAGE {timestamp: \'"};\nconst std::string query_part_2{"\', payload: \'"};\nconst std::string query_part_3{"\', topic: \'"};\nconst std::string query_part_4{"\'})"};\n\nstd::string create_query(mgp_message &message, struct mgp_result *result) {\n  int64_t timestamp{0};\n  if (mgp_error::MGP_ERROR_NO_ERROR !=\n      mgp_message_timestamp(&message, &timestamp)) {\n    throw "Internal error!";\n  }\n\n  const char *payload{nullptr};\n  if (mgp_error::MGP_ERROR_NO_ERROR !=\n      mgp_message_payload(&message, &payload)) {\n    throw "Internal error!";\n  }\n\n  size_t payload_size{0};\n  if (mgp_error::MGP_ERROR_NO_ERROR !=\n      mgp_message_payload_size(&message, &payload_size)) {\n    throw "Internal error!";\n  }\n\n  const char *topic_name{nullptr};\n  if (mgp_error::MGP_ERROR_NO_ERROR !=\n      mgp_message_topic_name(&message, &topic_name)) {\n    throw "Internal error!";\n  }\n\n  return query_part_1 + std::to_string(timestamp) + query_part_2 +\n         std::string{payload, payload_size} + query_part_3 + topic_name +\n         query_part_4;\n}\n\nvoid my_c_transformation(struct mgp_messages *messages, mgp_graph *,\n                         mgp_result *result, mgp_memory *memory) {\n\n  mgp_value *null_value{nullptr};\n\n  try {\n    size_t messages_size{0};\n    if (mgp_error::MGP_ERROR_NO_ERROR !=\n        mgp_messages_size(messages, &messages_size)) {\n      return;\n    }\n\n    if (mgp_error::MGP_ERROR_NO_ERROR !=\n        mgp_value_make_null(memory, &null_value)) {\n      return;\n    }\n\n    for (auto i = 0; i < messages_size; ++i) {\n\n      mgp_message *message{nullptr};\n      if (mgp_error::MGP_ERROR_NO_ERROR !=\n          mgp_messages_at(messages, i, &message)) {\n        break;\n      }\n\n      const auto query = create_query(*message, result);\n\n      mgp_result_record *record{nullptr};\n      if (mgp_error::MGP_ERROR_NO_ERROR !=\n          mgp_result_new_record(result, &record)) {\n        break;\n      }\n\n      mgp_value *query_value{nullptr};\n      if (mgp_error::MGP_ERROR_NO_ERROR !=\n          mgp_value_make_string(query.c_str(), memory, &query_value)) {\n        break;\n      }\n\n      auto mgp_result = mgp_result_record_insert(record, "query", query_value);\n      mgp_value_destroy(query_value);\n\n      if (mgp_error::MGP_ERROR_NO_ERROR != mgp_result) {\n        static_cast<void>(\n            mgp_result_set_error_msg(result, "Couldn\'t insert field"));\n        break;\n      }\n\n      mgp_result = mgp_result_record_insert(record, "parameters", null_value);\n      if (mgp_error::MGP_ERROR_NO_ERROR != mgp_result) {\n        static_cast<void>(\n            mgp_result_set_error_msg(result, "Couldn\'t insert field"));\n        break;\n      }\n    }\n    mgp_value_destroy(null_value);\n  } catch (const std::exception &e) {\n    mgp_value_destroy(null_value);\n    static_cast<void>(mgp_result_set_error_msg(result, e.what()));\n    return;\n  }\n}\n')),(0,s.kt)("p",null,"Now we have to register the transformation in the ",(0,s.kt)("inlineCode",{parentName:"p"},"mgp_init_module")," function:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},'extern "C" int mgp_init_module(mgp_module *module, mgp_memory *memory) {\n\n  return mgp_error::MGP_ERROR_NO_ERROR !=\n         mgp_module_add_transformation(module, "my_c_transformation",\n                                       my_c_transformation);\n}\n')),(0,s.kt)("p",null,"Now let's compile it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"clang++ --std=c++17 -Wall -shared -fPIC -I /usr/include/memgraph c_transformation.cpp -o c_transformation.so\n")),(0,s.kt)("p",null,"After copying the resulting ",(0,s.kt)("inlineCode",{parentName:"p"},"c_transformation.so")," to the\n",(0,s.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"/memgraph/internal_modules")," directory, we can reload the modules and check\nif Memgraph found our newly created transformation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),(0,s.kt)("p",null,"Then the transformation should show up in the list of transformations:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.transformations() YIELD *;\n")),(0,s.kt)("p",null,"You should see something like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},'+-------------------------------------------+-------------------------------------------------------+-------------+\n| name                                      | path                                                  | is_editable |\n+-------------------------------------------+-------------------------------------------------------+-------------+\n| "c_transformation.my_c_transformation"    | "/usr/lib/memgraph/query_modules/c_transformation.so" | false       |\n| "transformation.my_transformation"        | "/usr/lib/memgraph/query_modules/transformation.py"   | true        |\n+-------------------------------------------+-------------------------------------------------------+-------------+\n')))}c.isMDXComponent=!0}}]);