"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=c,y=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:c,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),c=(n(67294),n(3905));const a={sidebar_label:"connection",title:"gqlalchemy.connection"},o=void 0,l={unversionedId:"reference/connection",id:"reference/connection",title:"gqlalchemy.connection",description:"Connection Objects",source:"@site/gqlalchemy/reference/connection.md",sourceDirName:"reference",slug:"/reference/connection",permalink:"/docs/gqlalchemy/reference/connection",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/gqlalchemy/reference/connection.md",tags:[],version:"current",frontMatter:{sidebar_label:"connection",title:"gqlalchemy.connection"},sidebar:"gqlalchemy",previous:{title:"neo4j",permalink:"/docs/gqlalchemy/reference/vendors/neo4j"},next:{title:"disk_storage",permalink:"/docs/gqlalchemy/reference/disk_storage"}},i={},s=[{value:"Connection Objects",id:"connection-objects",level:2},{value:"execute",id:"execute",level:4},{value:"execute_and_fetch",id:"execute_and_fetch",level:4},{value:"is_active",id:"is_active",level:4},{value:"MemgraphConnection Objects",id:"memgraphconnection-objects",level:2},{value:"execute",id:"execute-1",level:4},{value:"execute_and_fetch",id:"execute_and_fetch-1",level:4},{value:"is_active",id:"is_active-1",level:4},{value:"Neo4jConnection Objects",id:"neo4jconnection-objects",level:2},{value:"execute",id:"execute-2",level:4},{value:"execute_and_fetch",id:"execute_and_fetch-2",level:4},{value:"is_active",id:"is_active-2",level:4}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"connection-objects"},"Connection Objects"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"class Connection(ABC)\n")),(0,c.kt)("h4",{id:"execute"},"execute"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"@abstractmethod\ndef execute(query: str, parameters: Dict[str, Any] = {}) -> None\n")),(0,c.kt)("p",null,"Executes Cypher query without returning any results."),(0,c.kt)("h4",{id:"execute_and_fetch"},"execute","_","and","_","fetch"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"@abstractmethod\ndef execute_and_fetch(\n        query: str,\n        parameters: Dict[str, Any] = {}) -> Iterator[Dict[str, Any]]\n")),(0,c.kt)("p",null,"Executes Cypher query and returns iterator of results."),(0,c.kt)("h4",{id:"is_active"},"is","_","active"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"@abstractmethod\ndef is_active() -> bool\n")),(0,c.kt)("p",null,"Returns True if connection is active and can be used."),(0,c.kt)("h2",{id:"memgraphconnection-objects"},"MemgraphConnection Objects"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"class MemgraphConnection(Connection)\n")),(0,c.kt)("h4",{id:"execute-1"},"execute"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"@database_error_handler\ndef execute(query: str, parameters: Dict[str, Any] = {}) -> None\n")),(0,c.kt)("p",null,"Executes Cypher query without returning any results."),(0,c.kt)("h4",{id:"execute_and_fetch-1"},"execute","_","and","_","fetch"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"@database_error_handler\ndef execute_and_fetch(\n        query: str,\n        parameters: Dict[str, Any] = {}) -> Iterator[Dict[str, Any]]\n")),(0,c.kt)("p",null,"Executes Cypher query and returns iterator of results."),(0,c.kt)("h4",{id:"is_active-1"},"is","_","active"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"def is_active() -> bool\n")),(0,c.kt)("p",null,"Returns True if connection is active and can be used."),(0,c.kt)("h2",{id:"neo4jconnection-objects"},"Neo4jConnection Objects"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"class Neo4jConnection(Connection)\n")),(0,c.kt)("h4",{id:"execute-2"},"execute"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"def execute(query: str, parameters: Dict[str, Any] = {}) -> None\n")),(0,c.kt)("p",null,"Executes Cypher query without returning any results."),(0,c.kt)("h4",{id:"execute_and_fetch-2"},"execute","_","and","_","fetch"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"def execute_and_fetch(\n        query: str,\n        parameters: Dict[str, Any] = {}) -> Iterator[Dict[str, Any]]\n")),(0,c.kt)("p",null,"Executes Cypher query and returns iterator of results."),(0,c.kt)("h4",{id:"is_active-2"},"is","_","active"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"def is_active() -> bool\n")),(0,c.kt)("p",null,"Returns True if connection is active and can be used."))}p.isMDXComponent=!0}}]);