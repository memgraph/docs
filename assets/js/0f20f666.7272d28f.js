"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||a;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={id:"python",title:"Python quick start",sidebar_label:"Python"},i=void 0,p={unversionedId:"connect-to-memgraph/drivers/python",id:"version-2.6.0/connect-to-memgraph/drivers/python",title:"Python quick start",description:"At the end of this guide, you will have created a simple Python `Hello,",source:"@site/memgraph_versioned_docs/version-2.6.0/connect-to-memgraph/drivers/python.md",sourceDirName:"connect-to-memgraph/drivers",slug:"/connect-to-memgraph/drivers/python",permalink:"/docs/memgraph/connect-to-memgraph/drivers/python",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.6.0/connect-to-memgraph/drivers/python.md",tags:[],version:"2.6.0",frontMatter:{id:"python",title:"Python quick start",sidebar_label:"Python"},sidebar:"memgraph",previous:{title:"PHP",permalink:"/docs/memgraph/connect-to-memgraph/drivers/php"},next:{title:"Rust",permalink:"/docs/memgraph/connect-to-memgraph/drivers/rust"}},l={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Basic setup",id:"basic-setup",level:2},{value:"Where to next?",id:"where-to-next",level:2}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At the end of this guide, you will have created a simple Python ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Hello,\nWorld!"))," program that connects to the Memgraph database and executes simple\nqueries."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To follow this guide, you will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to set up Memgraph, take a look\nat the ",(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/installation"},"Installation guide"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy"},(0,o.kt)("strong",{parentName:"a"},"GQLAlchemy client")),". A\nMemgraph OGM (Object Graph Mapper) for the Python programming language."),(0,o.kt)("li",{parentName:"ul"},"A basic understanding of graph databases and the property graph model.")),(0,o.kt)("h2",{id:"basic-setup"},"Basic setup"),(0,o.kt)("p",null,"We'll be using a ",(0,o.kt)("strong",{parentName:"p"},"Python program")," to demonstrate how to connect to a running\nMemgraph database instance.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"Let's jump in and connect a simple program to Memgraph."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Create a new directory for your program, for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"/memgraph_python"),"\nand position yourself in it.",(0,o.kt)("br",null)," "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Create a new Python script and name it ",(0,o.kt)("inlineCode",{parentName:"p"},"program.py")," . Add the following\ncode to it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from gqlalchemy import Memgraph\n\n# Make a connection to the database\nmemgraph = Memgraph(host=\'127.0.0.1\', port=7687)\n\n# Delete all nodes and relationships\nquery = "MATCH (n) DETACH DELETE n"\n\n# Execute the query\nmemgraph.execute(query)\n\n# Create a node with the label FirstNode and message property with the value "Hello, World!"\nquery = """CREATE (n:FirstNode)\n           SET n.message = \'{message}\'\n           RETURN \'Node \'  + id(n) + \': \' + n.message AS result""".format(message="Hello, World!")\n\n# Execute the query\nresults = memgraph.execute_and_fetch(query)\n\n# Print the first member\nprint(list(results)[0][\'result\'])\n')),(0,o.kt)("admonition",{title:"Note for Docker users",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If the program fails to connect to a Memgraph instance that was started with\nDocker, you may need to use a different IP address (not the default ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),"\n/ ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," ) to connect to the instance."),(0,o.kt)("p",{parentName:"admonition"},"You can find the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"CONTAINER_ID"))," with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps")," and use it in the following\ncommand to retrieve the address:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' CONTAINER_ID\n"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Now, you can run the application with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python ./program.py\n")),(0,o.kt)("p",null,"You should see an output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Node 1: Hello, World!\n")),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at\nthe ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/tutorials"},"Tutorials"))," page. You can also browse through\nthe ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/how-to-guides"},"How-to guides"))," section to get an overview\nof all the functionalities Memgraph offers."))}c.isMDXComponent=!0}}]);