"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12869],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,g=c["".concat(l,".").concat(u)]||c[u]||d[u]||r;return n?a.createElement(g,s(s({ref:t},m),{},{components:n})):a.createElement(g,s({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},87112:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),s=["components"],o={id:"python-api",title:"Transformations Python API",sidebar_label:"Python API"},l=void 0,p={unversionedId:"reference-guide/streams/transformation-modules/api/python-api",id:"version-2.2.1/reference-guide/streams/transformation-modules/api/python-api",title:"Transformations Python API",description:"This is the additional API documentation for mgp.py  which contains",source:"@site/memgraph_versioned_docs/version-2.2.1/reference-guide/streams/transformation-modules/api/python-api.md",sourceDirName:"reference-guide/streams/transformation-modules/api",slug:"/reference-guide/streams/transformation-modules/api/python-api",permalink:"/docs/memgraph/2.2.1/reference-guide/streams/transformation-modules/api/python-api",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.2.1/reference-guide/streams/transformation-modules/api/python-api.md",tags:[],version:"2.2.1",frontMatter:{id:"python-api",title:"Transformations Python API",sidebar_label:"Python API"},sidebar:"memgraph",previous:{title:"C API",permalink:"/docs/memgraph/2.2.1/reference-guide/streams/transformation-modules/api/c-api"},next:{title:"Triggers",permalink:"/docs/memgraph/2.2.1/reference-guide/triggers"}},m={},d=[{value:"<code>mgp.transformation(func)</code>",id:"mgptransformationfunc",level:2},{value:"Examples",id:"examples",level:3},{value:"<code>class mgp.Message(message)</code>",id:"class-mgpmessagemessage",level:2},{value:"<code>is_valid()</code>",id:"is_valid",level:3},{value:"<code>payload()</code>",id:"payload",level:3},{value:"<code>topic_name()</code>",id:"topic_name",level:3},{value:"<code>key()</code>",id:"key",level:3},{value:"<code>timestamp()</code>",id:"timestamp",level:3},{value:"<code>class mgp.Messages(messages)</code>",id:"class-mgpmessagesmessages",level:2},{value:"<code>is_valid()</code>",id:"is_valid-1",level:3},{value:"<code>total_messages()</code>",id:"total_messages",level:3},{value:"<code>message_at(id)</code>",id:"message_atid",level:3},{value:"<code>class mgp.TransCtx(graph)</code>",id:"class-mgptransctxgraph",level:2},{value:"<code>graph()</code>",id:"graph",level:3},{value:"<code>is_valid()</code>",id:"is_valid-2",level:3}],c={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is the additional API documentation for ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp.py"),"  which contains\ndefinitions of the public Transformation Python API provided by Memgraph. At the\ncore, this is a wrapper around the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.2.1/reference-guide/streams/transformation-modules/api/c-api"},"C API")),". This source file can\nbe found in the Memgraph installation directory, under ",(0,r.kt)("inlineCode",{parentName:"p"},"python_support"),". On the\nstandard Debian installation, this will be under\n",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/python_support"),"."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"NOTE:")," This part of the documentation is still under development. An updated\nversion will soon be available."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For an example of how to implement\xa0transformation modules in Python, check out\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.1/how-to-guides/streams/pulsar/implement-transformation-module#python-api"},"Python API\nguide"),"."))),(0,r.kt)("h2",{id:"mgptransformationfunc"},(0,r.kt)("inlineCode",{parentName:"h2"},"mgp.transformation(func)")),(0,r.kt)("p",null,"Transformation modules in Python have to follow certain rules in order to work:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The transformation module is a Python function"),(0,r.kt)("li",{parentName:"ol"},"The function has to be ",(0,r.kt)("em",{parentName:"li"},"decorated")," with a ",(0,r.kt)("strong",{parentName:"li"},"@mgp.transformation")," decorator"),(0,r.kt)("li",{parentName:"ol"},"The function can have 1 or 2 arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"one of type ",(0,r.kt)("inlineCode",{parentName:"li"},"mgp.Messages")," (required)"),(0,r.kt)("li",{parentName:"ul"},"one of type ",(0,r.kt)("inlineCode",{parentName:"li"},"mgp.TransCtx")," (optional)")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"The function has to return an ",(0,r.kt)("inlineCode",{parentName:"li"},"mgp.Record")," in the following form:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map])")),(0,r.kt)("li",{parentName:"ul"},"the return type can also be an ",(0,r.kt)("strong",{parentName:"li"},"iterable")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"mgp.Record"),"s, but not a\ngenerator")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\n\n@mgp.transformation\ndef transformation(context: mgp.TransCtx,\n                   messages: mgp.Messages\n                   ) -> mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n\n    for i in range(messages.total_messages()):\n        message = messages.message_at(i)\n        payload_as_str = message.payload().decode(\"utf-8\")\n        result_queries.append(mgp.Record(\n            query=f\"CREATE (n:MESSAGE {{timestamp: '{message.timestamp()}', payload: '{payload_as_str}', topic: '{message.topic_name()}'}})\",\n            parameters=None))\n\n    return result_queries\n")),(0,r.kt)("p",null,"This transformation extracts the interesting members of each ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp.Message")," and\nstores them in query ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),", which wraps a ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE")," clause with all the\ninteresting members (timestamp, payload, etc.) and an empty parameter list."),(0,r.kt)("p",null,"Any errors can be reported by raising an Exception."),(0,r.kt)("h2",{id:"class-mgpmessagemessage"},(0,r.kt)("inlineCode",{parentName:"h2"},"class mgp.Message(message)")),(0,r.kt)("p",null,"Bases: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"Represents a single message. You shouldn't store a ",(0,r.kt)("inlineCode",{parentName:"p"},"Message")," globally."),(0,r.kt)("h3",{id:"is_valid"},(0,r.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,r.kt)("p",null,"Returns true if the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp.message")," object is valid and can be\naccessed."),(0,r.kt)("h3",{id:"payload"},(0,r.kt)("inlineCode",{parentName:"h3"},"payload()")),(0,r.kt)("p",null,"Returns the payload of the message. Raises an ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidMessageError")," if\n",(0,r.kt)("inlineCode",{parentName:"p"},"is_valid()")," is false."),(0,r.kt)("h3",{id:"topic_name"},(0,r.kt)("inlineCode",{parentName:"h3"},"topic_name()")),(0,r.kt)("p",null,"Returns the topic name of the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp.message"),". Raises an\n",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidMessageError")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"is_valid()")," is false."),(0,r.kt)("h3",{id:"key"},(0,r.kt)("inlineCode",{parentName:"h3"},"key()")),(0,r.kt)("p",null,"Returns the key of the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp.message")," as bytes. Raises an\n",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidMessageError")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"is_valid()")," is false."),(0,r.kt)("h3",{id:"timestamp"},(0,r.kt)("inlineCode",{parentName:"h3"},"timestamp()")),(0,r.kt)("p",null,"Returns the timestamp of the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp.message"),". Raises an\n",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidMessageError")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"is_valid()")," is false."),(0,r.kt)("h2",{id:"class-mgpmessagesmessages"},(0,r.kt)("inlineCode",{parentName:"h2"},"class mgp.Messages(messages)")),(0,r.kt)("p",null,"Bases: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"Represents a list of messages passed to a transformation. You shouldn't store\n",(0,r.kt)("inlineCode",{parentName:"p"},"messages")," globally ."),(0,r.kt)("h3",{id:"is_valid-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,r.kt)("p",null,"Returns true if the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp.messages")," object is valid and can be\naccessed."),(0,r.kt)("h3",{id:"total_messages"},(0,r.kt)("inlineCode",{parentName:"h3"},"total_messages()")),(0,r.kt)("p",null,"Returns the number of ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp.messages")," contained. Raises ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidMessagesError")," if\n",(0,r.kt)("inlineCode",{parentName:"p"},"is_valid()")," is false."),(0,r.kt)("h3",{id:"message_atid"},(0,r.kt)("inlineCode",{parentName:"h3"},"message_at(id)")),(0,r.kt)("p",null,"Returns the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp.message")," at index ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),". Raises\n",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidMessagesError")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"is_valid()")," is false."),(0,r.kt)("h2",{id:"class-mgptransctxgraph"},(0,r.kt)("inlineCode",{parentName:"h2"},"class mgp.TransCtx(graph)")),(0,r.kt)("p",null,"Bases: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"Context of a transformation being executed."),(0,r.kt)("p",null,"Access to a ",(0,r.kt)("inlineCode",{parentName:"p"},"TransCtx")," is only valid during a single execution of a\ntransformation. You shouldn't store a ",(0,r.kt)("inlineCode",{parentName:"p"},"TransCtx")," globally."),(0,r.kt)("h3",{id:"graph"},(0,r.kt)("inlineCode",{parentName:"h3"},"graph()")),(0,r.kt)("p",null,"Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError")," if context is invalid."),(0,r.kt)("h3",{id:"is_valid-2"},(0,r.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,r.kt)("p",null,"Returns true if the context is valid and can be accessed."))}u.isMDXComponent=!0}}]);