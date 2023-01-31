"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55602],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),u=a,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12966:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={id:"java",title:"Java quick start",sidebar_label:"Java"},i=void 0,s={unversionedId:"connect-to-memgraph/drivers/java",id:"version-2.5.1/connect-to-memgraph/drivers/java",title:"Java quick start",description:"At the end of this guide, you will have created a simple Java console `Hello,",source:"@site/memgraph_versioned_docs/version-2.5.1/connect-to-memgraph/drivers/java.md",sourceDirName:"connect-to-memgraph/drivers",slug:"/connect-to-memgraph/drivers/java",permalink:"/docs/memgraph/2.5.1/connect-to-memgraph/drivers/java",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.1/connect-to-memgraph/drivers/java.md",tags:[],version:"2.5.1",frontMatter:{id:"java",title:"Java quick start",sidebar_label:"Java"},sidebar:"memgraph",previous:{title:"C#",permalink:"/docs/memgraph/2.5.1/connect-to-memgraph/drivers/c-sharp"},next:{title:"Go",permalink:"/docs/memgraph/2.5.1/connect-to-memgraph/drivers/go"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Basic Setup",id:"basic-setup",level:2},{value:"Where to next?",id:"where-to-next",level:2}],c={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At the end of this guide, you will have created a simple Java console ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Hello,\nWorld!"))," program that connects to the Memgraph database and executes simple\nqueries."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"For this guide you will need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to set up Memgraph, take a look\nat the ",(0,a.kt)("a",{parentName:"li",href:"/docs/memgraph/2.5.1/installation"},"Installation guide"),".",(0,a.kt)("admonition",{parentName:"li",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"  In order for this driver to work, you need ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/config-logs"},"modify configuration\nsetting"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"--bolt-server-name-for-init"),". When running Memgraph, set\n",(0,a.kt)("inlineCode",{parentName:"p"},"--bolt-server-name-for-init=Neo4j"),"."))),(0,a.kt)("li",{parentName:"ul"},"A basic understanding of graph databases and the property graph model."),(0,a.kt)("li",{parentName:"ul"},"Java 8, 11, 17 or 19 installed.")),(0,a.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,a.kt)("p",null,"We'll be using Eclipse IDE 2020-09 on Windows 10 to connect a simple Java\nconsole application to a running Memgraph instance using ",(0,a.kt)("strong",{parentName:"p"},"Maven"),". If you're\nusing a different IDE, the steps might be slightly different, but the code is\nprobably the same or very similar.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Let's jump in and connect a simple program to Memgraph."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," Open ",(0,a.kt)("strong",{parentName:"p"},"Eclipse")," and create a new ",(0,a.kt)("strong",{parentName:"p"},"Maven project"),".",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"p"},"2.")," Select\nthe ",(0,a.kt)("strong",{parentName:"p"},"Create a simple project")," option.",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"p"},"3.")," For the ",(0,a.kt)("strong",{parentName:"p"},"Group Id")," field\nput ",(0,a.kt)("inlineCode",{parentName:"p"},"com.memgraph.app")," and for ",(0,a.kt)("strong",{parentName:"p"},"Artifact Id")," put ",(0,a.kt)("inlineCode",{parentName:"p"},"my-app")," . Afterwards, click\nthe ",(0,a.kt)("strong",{parentName:"p"},"Finish")," button.",(0,a.kt)("br",null)," ",(0,a.kt)("strong",{parentName:"p"},"4.")," Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," file and add the\ndependencies inside your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"<dependencies>\n    <dependency>\n      <groupId>org.memgraph</groupId>\n      <artifactId>bolt-java-driver</artifactId>\n      <version>0.4.7</version>\n    </dependency>\n  </dependencies>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5.")," Create the ",(0,a.kt)("inlineCode",{parentName:"p"},"HelloWorld.java")," program and copy the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import org.neo4j.driver.AuthTokens;\nimport org.neo4j.driver.Driver;\nimport org.neo4j.driver.GraphDatabase;\nimport org.neo4j.driver.Session;\nimport org.neo4j.driver.Result;\nimport org.neo4j.driver.Transaction;\nimport org.neo4j.driver.TransactionWork;\n\nimport static org.neo4j.driver.Values.parameters;\n\npublic class HelloWorld implements AutoCloseable\n{\n    private final Driver driver;\n\n    public HelloWorld( String uri, String user, String password )\n    {\n        driver = GraphDatabase.driver( uri, AuthTokens.basic( user, password ) );\n    }\n\n    public void close() throws Exception\n    {\n        driver.close();\n    }\n\n    public void printGreeting( final String message )\n    {\n        try ( Session session = driver.session() )\n        {\n            String greeting = session.writeTransaction( new TransactionWork<String>()\n            {\n                @Override\n                public String execute( Transaction tx )\n                {\n                    Result result = tx.run( "CREATE (a:Greeting) " +\n                                                     "SET a.message = $message " +\n                                                     "RETURN \'Node \' + id(a) + \': \' + a.message",\n                            parameters( "message", message ) );\n                    return result.single().get( 0 ).asString();\n                }\n            } );\n            System.out.println( greeting );\n        }\n    }\n\n    public static void main( String... args ) throws Exception\n    {\n        try ( HelloWorld greeter = new HelloWorld( "bolt://localhost:7687", "", "" ) )\n        {\n            greeter.printGreeting( "Hello, World!" );\n        }\n    }\n}\n')),(0,a.kt)("p",null,"Once you run the program, you should see an output similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Node 1: Hello, World!\n")),(0,a.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,a.kt)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at\nthe ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.5.1/tutorials"},"Tutorials"))," page. You can also browse through\nthe ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.5.1/how-to-guides"},"How-to guides"))," section to get an overview\nof all the functionalities Memgraph offers."))}m.isMDXComponent=!0}}]);