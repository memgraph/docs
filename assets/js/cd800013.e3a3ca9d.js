"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13559],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},22966:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={id:"java",title:"Java quick start",sidebar_label:"Java"},i=void 0,p={unversionedId:"connect-to-memgraph/drivers/java",id:"version-2.10.0/connect-to-memgraph/drivers/java",title:"Java quick start",description:"At the end of this guide, you will have created a simple Java console `Hello,",source:"@site/memgraph_versioned_docs/version-2.10.0/connect-to-memgraph/drivers/java.md",sourceDirName:"connect-to-memgraph/drivers",slug:"/connect-to-memgraph/drivers/java",permalink:"/docs/memgraph/connect-to-memgraph/drivers/java",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.10.0/connect-to-memgraph/drivers/java.md",tags:[],version:"2.10.0",frontMatter:{id:"java",title:"Java quick start",sidebar_label:"Java"},sidebar:"memgraph",previous:{title:"Go",permalink:"/docs/memgraph/connect-to-memgraph/drivers/go"},next:{title:"JavaScript",permalink:"/docs/memgraph/connect-to-memgraph/drivers/javascript"}},s={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Basic Setup",id:"basic-setup",level:2},{value:"Where to next?",id:"where-to-next",level:2}],c={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At the end of this guide, you will have created a simple Java console ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Hello,\nWorld!"))," program that connects to the Memgraph database and executes simple\nqueries."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"For this guide you will need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to set up Memgraph, take a look\nat the ",(0,a.kt)("a",{parentName:"li",href:"/docs/memgraph/installation"},"Installation guide"),".",(0,a.kt)("admonition",{parentName:"li",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"  In order for this driver to work, you need ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/config-logs"},"modify configuration\nsetting"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"--bolt-server-name-for-init"),". When running Memgraph, set\n",(0,a.kt)("inlineCode",{parentName:"p"},"--bolt-server-name-for-init=Neo4j/"),"."))),(0,a.kt)("li",{parentName:"ul"},"Java 8, 11, 17 or 19 installed.")),(0,a.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,a.kt)("p",null,"We'll be using Eclipse IDE 2022-12 on MacOS to connect a simple Java\nconsole application to a running Memgraph instance using ",(0,a.kt)("strong",{parentName:"p"},"Maven"),". If you're\nusing a different IDE, the steps might be slightly different, but the code is\nprobably the same or very similar.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Let's jump in and connect a simple program to Memgraph."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," Open ",(0,a.kt)("strong",{parentName:"p"},"Eclipse")," and create a new ",(0,a.kt)("strong",{parentName:"p"},"Maven project"),".",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"p"},"2.")," Select\nthe ",(0,a.kt)("strong",{parentName:"p"},"Create a simple project")," option.",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"p"},"3.")," For the ",(0,a.kt)("strong",{parentName:"p"},"Group Id")," field\nput ",(0,a.kt)("inlineCode",{parentName:"p"},"com.memgraph.app")," and for ",(0,a.kt)("strong",{parentName:"p"},"Artifact Id")," put ",(0,a.kt)("inlineCode",{parentName:"p"},"my-app")," . Afterwards, click\nthe ",(0,a.kt)("strong",{parentName:"p"},"Finish")," button.",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"p"},"4.")," Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," file and add the\ndependencies inside your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"<dependencies>\n    <dependency>\n      <groupId>org.neo4j.driver</groupId>\n      <artifactId>neo4j-java-driver</artifactId>\n      <version>5.4.0</version>\n    </dependency>\n  </dependencies>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5.")," Create the ",(0,a.kt)("inlineCode",{parentName:"p"},"HelloWorld.java")," program and copy the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.neo4j.driver.AuthTokens;\nimport org.neo4j.driver.Driver;\nimport org.neo4j.driver.GraphDatabase;\nimport org.neo4j.driver.Query;\n\nimport static org.neo4j.driver.Values.parameters;\n\npublic class HelloWorld implements AutoCloseable\n{\n    private final Driver driver;\n\n    public HelloWorld( String uri, String user, String password )\n    {\n        driver = GraphDatabase.driver( uri, AuthTokens.basic( user, password ) );\n    }\n\n    public void close() throws Exception\n    {\n        driver.close();\n    }\n\n    public void printGreeting( final String message )\n    {\n        \n        try (var session = driver.session()) {\n            var hello = session.executeWrite( transaction -> {\n            var query = new Query("CREATE (a:Greeting) SET a.message = $message RETURN \'Node \' + id(a) + \': \' + a.message", parameters("message", message));\n            var result = transaction.run(query);\n            return result.single().get(0).asString();\n            });\n            System.out.println(hello);\n        }\n    }\n    \n    public static void main( String... args ) throws Exception\n    {\n        try ( HelloWorld greeter = new HelloWorld( "bolt://localhost:7687", "", "" ) )\n        {\n            greeter.printGreeting( "Hello, World!" );\n        }\n    }\n}\n')),(0,a.kt)("p",null,"Once you run the program, you should see an output similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Node 1: Hello, World!\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Memgraph created ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/memgraph/bolt-java-driver"},"Bolt Java Driver")," which can be used to connect to a running Memgraph instance. We still recommend you use the above mentioned driver.")),(0,a.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,a.kt)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at\nthe ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/tutorials"},"Tutorials"))," page. You can also browse through\nthe ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/how-to-guides"},"How-to guides"))," section to get an overview\nof all the functionalities Memgraph offers."))}m.isMDXComponent=!0}}]);