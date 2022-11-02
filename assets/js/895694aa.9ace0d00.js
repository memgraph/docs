"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"javascript",title:"JavaScript quick start",sidebar_label:"JavaScript"},i=void 0,s={unversionedId:"connect-to-memgraph/drivers/javascript",id:"version-2.3.0/connect-to-memgraph/drivers/javascript",title:"JavaScript quick start",description:"At the end of this guide, you will have created a simple JavaScript `Hello,",source:"@site/memgraph_versioned_docs/version-2.3.0/connect-to-memgraph/drivers/javascript.md",sourceDirName:"connect-to-memgraph/drivers",slug:"/connect-to-memgraph/drivers/javascript",permalink:"/docs/memgraph/2.3.0/connect-to-memgraph/drivers/javascript",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.0/connect-to-memgraph/drivers/javascript.md",tags:[],version:"2.3.0",frontMatter:{id:"javascript",title:"JavaScript quick start",sidebar_label:"JavaScript"},sidebar:"memgraph",previous:{title:"Node.js",permalink:"/docs/memgraph/2.3.0/connect-to-memgraph/drivers/nodejs"},next:{title:"PHP",permalink:"/docs/memgraph/2.3.0/connect-to-memgraph/drivers/php"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Basic Setup",id:"basic-setup",level:2},{value:"Where to next?",id:"where-to-next",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At the end of this guide, you will have created a simple JavaScript ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Hello,\nWorld!"))," program that connects to the Memgraph database and executes simple\nqueries."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Running queries directly from a web browser is ",(0,a.kt)("strong",{parentName:"p"},"not recommended"),"\nbecause of additional requirements and possible performance issues. In other\nwords, we encourage you to use server-side libraries and clients for top\nperformance whenever possible.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To follow this guide, you will need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to set up Memgraph, take a look\nat the ",(0,a.kt)("a",{parentName:"li",href:"/docs/memgraph/2.3.0/installation"},"Installation guide"),"."),(0,a.kt)("li",{parentName:"ul"},"A basic understanding of graph databases and the property graph model.")),(0,a.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,a.kt)("p",null,"Let's jump in and connect a simple program to Memgraph."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," Create a new directory for your application, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"/MyApp")," and\nposition yourself in it."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.")," To make the actual program, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"program.html")," file and add the\nfollowing code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <title>Javascript Browser Example | Memgraph</title>\n    <script src="https://cdn.jsdelivr.net/npm/neo4j-driver"><\/script>\n  </head>\n  <body>\n    <p>Check console for Cypher query outputs...</p>\n    <script>\n      const driver = neo4j.driver(\n        "bolt://localhost:7687",\n        neo4j.auth.basic("", "")\n      );\n\n      (async function main() {\n        const session = driver.session();\n\n        try {\n          await session.run("MATCH (n) DETACH DELETE n;");\n          console.log("Database cleared.");\n\n          await session.run("CREATE (alice:Person {name: \'Alice\', age: 22});");\n          console.log("Record created.");\n\n          const result = await session.run("MATCH (n) RETURN n;");\n\n          console.log("Record matched.");\n          const alice = result.records[0].get("n");\n          const label = alice.labels[0];\n          const name = alice.properties["name"];\n          const age = alice.properties["age"];\n\n          if (label != "Person" || name != "Alice" || age != 22) {\n            console.error("Data doesn\'t match.");\n          }\n\n          console.log("Label: " + label);\n          console.log("Name: " + name);\n          console.log("Age: " + age);\n        } catch (error) {\n          console.error(error);\n        } finally {\n          session.close();\n        }\n\n        driver.close();\n      })();\n    <\/script>\n  </body>\n</html>\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3.")," Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"program.html")," file in your browser and look for the output in\nthe console."),(0,a.kt)("p",null,"You should see an output similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Database cleared.\nRecord created.\nRecord matched.\nLabel: Person\nName: Alice\nAge: 22\n")),(0,a.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,a.kt)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at\nthe ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.3.0/tutorials"},"Tutorials"))," page. You can also browse through\nthe ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.3.0/how-to-guides"},"How-to guides")),"\nsection to get an overview of all the functionalities Memgraph offers."))}m.isMDXComponent=!0}}]);