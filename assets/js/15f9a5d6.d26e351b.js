"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,p(p({ref:t},c),{},{components:n})):r.createElement(h,p({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={id:"php",title:"PHP quick start",sidebar_label:"PHP"},p=void 0,i={unversionedId:"connect-to-memgraph/drivers/php",id:"version-2.1.1/connect-to-memgraph/drivers/php",title:"PHP quick start",description:"At the end of this guide, you will have created a simple PHP Hello, World!",source:"@site/memgraph_versioned_docs/version-2.1.1/connect-to-memgraph/drivers/php.md",sourceDirName:"connect-to-memgraph/drivers",slug:"/connect-to-memgraph/drivers/php",permalink:"/docs/memgraph/2.1.1/connect-to-memgraph/drivers/php",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/connect-to-memgraph/drivers/php.md",tags:[],version:"2.1.1",frontMatter:{id:"php",title:"PHP quick start",sidebar_label:"PHP"},sidebar:"memgraph",previous:{title:"JavaScript",permalink:"/docs/memgraph/2.1.1/connect-to-memgraph/drivers/javascript"},next:{title:"Import data overview",permalink:"/docs/memgraph/2.1.1/import-data"}},l={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Basic Setup",id:"basic-setup",level:2},{value:"Where to next?",id:"where-to-next",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At the end of this guide, you will have created a simple PHP ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Hello, World!")),"\nprogram that connects to the Memgraph database and executes simple queries."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To follow this guide, you will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to set up Memgraph, take a look\nat the ",(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.1.1/installation"},"Installation guide"),"."),(0,o.kt)("li",{parentName:"ul"},"A basic understanding of graph databases and the property graph model."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Composer"),", a tool for dependency management in PHP. Instructions on how to\ninstall Composer can be found ",(0,o.kt)("a",{parentName:"li",href:"https://getcomposer.org/doc/00-intro.md"},"here"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We recommend using the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/neo4j-php/Bolt"},"Bolt driver"))," for\nPHP.")),(0,o.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,o.kt)("p",null,"We'll be using a very simple ",(0,o.kt)("strong",{parentName:"p"},"PHP script")," in combination with ",(0,o.kt)("strong",{parentName:"p"},"Composer")," to\ndemonstrate how to connect to a running Memgraph instance."),(0,o.kt)("p",null,"Let's jump in and connect a simple program to Memgraph."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Create a new directory for your application, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"/MyApp")," and\nposition yourself in it.",(0,o.kt)("br",null)," ",(0,o.kt)("strong",{parentName:"p"},"2.")," Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"index.php")," file and add the\nfollowing code to it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nrequire_once __DIR__ . '/../vendor/autoload.php';\n\n// Create new Bolt instance\n$bolt = new \\Bolt\\Bolt(new \\Bolt\\connection\\StreamSocket());\n// Set Bolt protocol version if needed\n$bolt->setProtocolVersions(4.0);\n// Connect to database\n$bolt->init('MyClient/1.0', '', '');\n\n// Execute query\n$res = $bolt->run(\n    'CREATE (a:Greeting) SET a.message = $message RETURN id(a) AS nodeId, a.message AS message',\n    ['message' => 'Hello, World!']\n);\n// Pull records from last query\n$rows = $bolt->pull();\n\necho 'Node ' . $rows[0][0] . ' says: ' . $rows[0][1];\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"composer.json")," file with the following contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "memgraph/myapp",\n    "description": "This is a simple Hello World app.",\n    "require": {\n        "php": ">=7.1",\n        "stefanak-michal/bolt": "^2.1"\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," Execute the next command to install the needed dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"composer install\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5.")," Start the application with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"php -S localhost:4000\n")),(0,o.kt)("p",null,"You should see an output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Node 1: Hello, World!\n")),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at\nthe ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/tutorials"},"Tutorials"))," page. You can also browse through\nthe ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/how-to-guides"},"How-to guides")),"\nsection to get an overview of all the functionalities Memgraph offers."))}m.isMDXComponent=!0}}]);