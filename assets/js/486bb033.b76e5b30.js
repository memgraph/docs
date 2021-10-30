"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8875],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81450:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"javascript",title:"JavaScript quick start",sidebar_label:"JavaScript"},p=void 0,l={unversionedId:"getting-started/connecting-applications/javascript",id:"version-1.4.0/getting-started/connecting-applications/javascript",isDocsHomePage:!1,title:"JavaScript quick start",description:"At the end of this guide, you will have created a simple JavaScript Hello, World! program that connects to the Memgraph database and executes simple queries.",source:"@site/memgraph_versioned_docs/version-1.4.0/getting-started/connecting-applications/javascript.md",sourceDirName:"getting-started/connecting-applications",slug:"/getting-started/connecting-applications/javascript",permalink:"/docs/memgraph/1.4.0/getting-started/connecting-applications/javascript",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.4.0/getting-started/connecting-applications/javascript.md",tags:[],version:"1.4.0",frontMatter:{id:"javascript",title:"JavaScript quick start",sidebar_label:"JavaScript"},sidebar:"version-1.4.0/memgraph",previous:{title:"Go",permalink:"/docs/memgraph/1.4.0/getting-started/connecting-applications/go"},next:{title:"PHP",permalink:"/docs/memgraph/1.4.0/getting-started/connecting-applications/php"}},c=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Basic Setup",id:"basic-setup",children:[],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2},{value:"Getting help",id:"getting-help",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At the end of this guide, you will have created a simple JavaScript ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Hello, World!"))," program that connects to the Memgraph database and executes simple queries."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To follow this guide, you will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to set up Memgraph, take a look at the ",(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/1.4.0/getting-started/installation"},"Installation guide"),"."),(0,o.kt)("li",{parentName:"ul"},"A basic understanding of graph databases and the property graph model."),(0,o.kt)("li",{parentName:"ul"},"The newest version of ",(0,o.kt)("strong",{parentName:"li"},"Node.JS")," installed. Instructions on how to setup Node.JS can be found on the ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"official website"),".")),(0,o.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,o.kt)("p",null,"We'll be using ",(0,o.kt)("strong",{parentName:"p"},"Express.js")," to demonstrate how to connect to a running Memgraph instance.\nExpress.js is a web application framework that enables us to create complete Node.js applications.\nIf you don't wish to use it, the steps might be slightly different, but the code is most likely the same or very similar."),(0,o.kt)("p",null,"Let's jump in and connect a simple program to Memgraph."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Create a new directory for your application, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"/MyApp")," and position yourself in it.",(0,o.kt)("br",null),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"2.")," Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file with the command: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm init\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Install ",(0,o.kt)("strong",{parentName:"p"},"Express.js")," and the ",(0,o.kt)("strong",{parentName:"p"},"Bolt driver")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/MyApp")," directory while adding them to the dependencies list. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install express --save\nnpm install neo4j-driver --save\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," To make the actual program, create a ",(0,o.kt)("inlineCode",{parentName:"p"},"program.js")," file and add the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JavaScript"},"const express = require('express')\nconst app = express()\nconst port = 3000\nvar neo4j = require('neo4j-driver')\n\napp.get('/', async (req, res) => {\n  const driver = neo4j.driver(\"bolt://localhost:7687\")\n  const session = driver.session()\n\n  try {\n    const result = await session.writeTransaction(tx =>\n      tx.run(\n        'CREATE (a:Greeting) SET a.message = $message RETURN \"Node \" + id(a) + \": \" + a.message',\n        { message: 'Hello, World!' }\n      )\n    )\n\n    const singleRecord = result.records[0]\n    const greeting = singleRecord.get(0)\n\n    console.log(greeting)\n  } finally {\n    await session.close()\n  }\n\n  // on application exit:\n  await driver.close()\n})\n\napp.listen(port, () => {\n  console.log(`Example app listening at http://localhost:${port}`)\n})\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5.")," Run the application with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"node .\\program.js\n")),(0,o.kt)("p",null,"You should see an output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Node 1: Hello, World!\n")),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/1.4.0/tutorials/tutorials"},"Tutorials"))," page.\nYou can also browse through the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/1.4.0/database-functionalities"},"Database functionalities"))," section to get an overview of all the functionalities Memgraph offers."),(0,o.kt)("h2",{id:"getting-help"},"Getting help"),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/1.4.0/getting-help/getting-help"},"Getting help"))," page in case you run into any kind of problem or you have additional questions."))}d.isMDXComponent=!0}}]);