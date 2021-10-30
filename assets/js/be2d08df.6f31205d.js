"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34241],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16429:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"go",title:"Go quick start",sidebar_label:"Go"},l=void 0,p={unversionedId:"connect-to-memgraph/methods/building-applications/go",id:"connect-to-memgraph/methods/building-applications/go",isDocsHomePage:!1,title:"Go quick start",description:"At the end of this guide, you will have created a simple Go Hello, World! program that connects to the Memgraph database and executes simple queries.",source:"@site/docs/connect-to-memgraph/methods/building-applications/go.md",sourceDirName:"connect-to-memgraph/methods/building-applications",slug:"/connect-to-memgraph/methods/building-applications/go",permalink:"/docs/memgraph/next/connect-to-memgraph/methods/building-applications/go",editUrl:"https://github.com/memgraph/docs/tree/master/docs/connect-to-memgraph/methods/building-applications/go.md",tags:[],version:"current",frontMatter:{id:"go",title:"Go quick start",sidebar_label:"Go"},sidebar:"memgraph",previous:{title:"Java",permalink:"/docs/memgraph/next/connect-to-memgraph/methods/building-applications/java"},next:{title:"Node.js",permalink:"/docs/memgraph/next/connect-to-memgraph/methods/building-applications/nodejs"}},c=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Basic Setup",id:"basic-setup",children:[],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At the end of this guide, you will have created a simple Go ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Hello, World!"))," program that connects to the Memgraph database and executes simple queries."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Go driver")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You can find the official Go driver on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neo4j/neo4j-go-driver"},"GitHub"),"."))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To follow this guide, you will need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to set up Memgraph, take a look at the ",(0,a.kt)("a",{parentName:"li",href:"/docs/memgraph/next/installation"},"Installation guide"),"."),(0,a.kt)("li",{parentName:"ul"},"A basic understanding of graph databases and the property graph model."),(0,a.kt)("li",{parentName:"ul"},"The newest version of ",(0,a.kt)("strong",{parentName:"li"},"Go")," ",(0,a.kt)("a",{parentName:"li",href:"https://golang.org/doc/install"},"installed"),".")),(0,a.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,a.kt)("p",null,"We'll be using a simple Go application to demonstrate how to connect to a running Memgraph instance."),(0,a.kt)("p",null,"Let's jump in and create our application."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," Create a new directory for your app, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"/MyApp")," and position yourself in it.",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"2.")," Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"program.go")," file and add the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    "github.com/neo4j/neo4j-go-driver/v4/neo4j"\n)\n\nfunc main() {\n    dbUri := "bolt://localhost:7687"\n    driver, err := neo4j.NewDriver(dbUri, neo4j.BasicAuth("username", "password", ""))\n    if err != nil {\n        panic(err)\n    }\n    // Handle driver lifetime based on your application lifetime requirements  driver\'s lifetime is usually\n    // bound by the application lifetime, which usually implies one driver instance per application\n    defer driver.Close()\n    item, err := insertItem(driver)\n    if err != nil {\n        panic(err)\n    }\n    fmt.Printf("%v\\n", item.Message)\n}\n\nfunc insertItem(driver neo4j.Driver) (*Item, error) {\n    // Sessions are short-lived, cheap to create and NOT thread safe. Typically create one or more sessions\n    // per request in your web application. Make sure to call Close on the session when done.\n    // For multi-database support, set sessionConfig.DatabaseName to requested database\n    // Session config will default to write mode, if only reads are to be used configure session for\n    // read mode.\n    session := driver.NewSession(neo4j.SessionConfig{})\n    defer session.Close()\n    result, err := session.WriteTransaction(createItemFn)\n    if err != nil {\n        return nil, err\n    }\n    return result.(*Item), nil\n}\n\nfunc createItemFn(tx neo4j.Transaction) (interface{}, error) {\n    records, err := tx.Run(\n        "CREATE (a:Greeting) SET a.message = $message RETURN \'Node \' + id(a) + \': \' + a.message",\n        map[string]interface{}{"message": "Hello, World!"})\n    // In face of driver native errors, make sure to return them directly.\n    // Depending on the error, the driver may try to execute the function again.\n    if err != nil {\n        return nil, err\n    }\n    record, err := records.Single()\n    if err != nil {\n        return nil, err\n    }\n    // You can also retrieve values by name, with e.g. `id, found := record.Get("n.id")`\n    return &Item{\n        Message: record.Values[0].(string),\n    }, nil\n}\n\ntype Item struct {\n    Message string\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3.")," Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"go.mod")," file by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go mod init example.com/hello\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4.")," Add the ",(0,a.kt)("strong",{parentName:"p"},"Bolt driver")," with the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go get github.com/neo4j/neo4j-go-driver/v4@v4.3.1\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5.")," Run the app with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go run .\\program.go\n")),(0,a.kt)("p",null,"You should see an output similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Node 1: Hello, World!\n")),(0,a.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,a.kt)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/tutorials"},"Tutorials"))," page.\nYou can also browse through the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/database-functionalities"},"Database functionalities"))," section to get an overview of all the functionalities Memgraph offers."))}u.isMDXComponent=!0}}]);