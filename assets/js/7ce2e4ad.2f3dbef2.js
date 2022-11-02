"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=r,c=h["".concat(p,".").concat(u)]||h[u]||m[u]||o;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},52220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(59918);const i={id:"map-nodes-and-relationships",title:"How to map nodes and relationships",sidebar_label:"Map nodes and relationships"},s=void 0,p={unversionedId:"how-to-guides/ogm/map-nodes-and-relationships",id:"how-to-guides/ogm/map-nodes-and-relationships",title:"How to map nodes and relationships",description:"Through this guide, you will learn how to map Python classes to nodes and",source:"@site/gqlalchemy/how-to-guides/ogm/map-nodes-and-relationships.md",sourceDirName:"how-to-guides/ogm",slug:"/how-to-guides/ogm/map-nodes-and-relationships",permalink:"/docs/gqlalchemy/how-to-guides/ogm/map-nodes-and-relationships",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/gqlalchemy/how-to-guides/ogm/map-nodes-and-relationships.md",tags:[],version:"current",frontMatter:{id:"map-nodes-and-relationships",title:"How to map nodes and relationships",sidebar_label:"Map nodes and relationships"},sidebar:"gqlalchemy",previous:{title:"How-to guides overview",permalink:"/docs/gqlalchemy/how-to-guides"},next:{title:"Save nodes and relationships",permalink:"/docs/gqlalchemy/how-to-guides/ogm/save-nodes-and-relationships"}},l={},d=[],m={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Through this guide, you will learn how to map Python classes to nodes and\nrelationships in a graph database. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Make sure you have a running Memgraph instance. If you're not sure how to run\nMemgraph, check out the Memgraph ",(0,r.kt)("a",{parentName:"p",href:"/memgraph/#quick-start"},"Quick start"),".")),(0,r.kt)("p",null,"First, do all necessary imports and create an instance of the database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from gqlalchemy import Memgraph, Node, Relationship, Field\nfrom typing import Optional\n")),(0,r.kt)("p",null,"After that, you instantiate Memgraph and create classes representing the nodes\nand relationships. You are creating ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Streamer")," nodes, where every\n",(0,r.kt)("inlineCode",{parentName:"p"},"Streamer")," is also a ",(0,r.kt)("inlineCode",{parentName:"p"},"User"),", but not every ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Streamer"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"db = Memgraph()\n\nclass User(Node, index=True, db=db):\n    id: str = Field(index=True, exist=True, unique=True, db=db)\n\nclass Streamer(User):\n    id: str = Field(index=True, exist=True, unique=True, db=db)\n    username: Optional[str] = Field(index=True, exist=True, unique=True, db=db)\n    url: Optional[str] = Field()\n    followers: Optional[int] = Field()\n    createdAt: Optional[str] = Field()\n    totalViewCount: Optional[int] = Field()\n    description: Optional[str] = Field()\n")),(0,r.kt)(o.ZP,{mdxType:"Neo4jOption"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Node")," is a Python class which maps to a graph object in Memgraph. ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"Streamer")," are classes which inherit from ",(0,r.kt)("inlineCode",{parentName:"p"},"Node")," and they map to a label in the\ngraph database. Class ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," maps to a single ",(0,r.kt)("inlineCode",{parentName:"p"},":User")," label, while class\n",(0,r.kt)("inlineCode",{parentName:"p"},"Streamer")," maps to multiple labels ",(0,r.kt)("inlineCode",{parentName:"p"},":Streamer:User"),", since it inherits from the\n",(0,r.kt)("inlineCode",{parentName:"p"},"User")," class. Notice that the ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," argument in class definition is set to\n",(0,r.kt)("inlineCode",{parentName:"p"},"True"),". That means that you have created a label index on the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," label. If\nyou create a node with the label ",(0,r.kt)("inlineCode",{parentName:"p"},"User"),", that node has a property ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", which is\nalso indexed (label-property index) and a unique string. With the help of\n",(0,r.kt)("inlineCode",{parentName:"p"},"Field()"),", you can define those constraints on the properties and define to\nwhich database that property will be saved. Argument ",(0,r.kt)("inlineCode",{parentName:"p"},"index=True")," is added to\nthe property ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", which is both in the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Streamer")," class. Because\n",(0,r.kt)("inlineCode",{parentName:"p"},"Streamer")," inherits from ",(0,r.kt)("inlineCode",{parentName:"p"},"User"),", the property ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," will be indexed on nodes\nlabeled with ",(0,r.kt)("inlineCode",{parentName:"p"},"User"),". In the Cypher query language, that means the query ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE\nINDEX ON :User(id);")," will be executed."),(0,r.kt)("p",null,"In a similar way, you can create a relationship:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class ChatsWith(Relationship, type="CHATS_WITH"):\n    lastChatted: Optional[str] = Field()\n')),(0,r.kt)("p",null,"Now you have created a relationship of type ",(0,r.kt)("inlineCode",{parentName:"p"},"CHATS_WITH"),". This relationship has\nthe property ",(0,r.kt)("inlineCode",{parentName:"p"},"lastChatted"),", which is optional. If you want to create a\nrelationship without any properties, you can do that with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class ChatsWith(Relationship, type="CHATS_WITH"):\n    pass\n')),(0,r.kt)("p",null,"Hopefully this guide has taught you how to map nodes and relationships. If you\nhave any more questions, join our community and ping us on\n",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/memgraph"},"Discord"),"."))}h.isMDXComponent=!0},59918:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"You can also use this feature with Neo4j:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'db = Neo4j(host="localhost", port="7687", username="neo4j", password="test")\n'))))}i.isMDXComponent=!0}}]);