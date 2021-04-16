(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),o=(n(0),n(345)),i={id:"java",title:"Java quick start",sidebar_label:"Java"},p={unversionedId:"getting-started/connecting-applications/java",id:"version-1.4.0/getting-started/connecting-applications/java",isDocsHomePage:!1,title:"Java quick start",description:"At the end of this guide, you will have created a simple Java console Hello, World! program that connects to the Memgraph database and executes simple queries.",source:"@site/memgraph_versioned_docs/version-1.4.0/getting-started/connecting-applications/java.md",slug:"/getting-started/connecting-applications/java",permalink:"/memgraph/getting-started/connecting-applications/java",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.4.0/getting-started/connecting-applications/java.md",version:"1.4.0",sidebar_label:"Java",sidebar:"version-1.4.0/memgraph",previous:{title:"C# quick start",permalink:"/memgraph/getting-started/connecting-applications/c-sharp"},next:{title:"Go quick start",permalink:"/memgraph/getting-started/connecting-applications/go"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Basic Setup",id:"basic-setup",children:[]},{value:"Where to next?",id:"where-to-next",children:[]},{value:"Getting help",id:"getting-help",children:[]}],c={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"At the end of this guide, you will have created a simple Java console ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"Hello, World!"))," program that connects to the Memgraph database and executes simple queries."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"For this guide you will need:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to set up Memgraph, take a look at the ",Object(o.b)("a",{parentName:"li",href:"/memgraph/getting-started/installation"},"Installation guide"),"."),Object(o.b)("li",{parentName:"ul"},"A basic understanding of graph databases and the property graph model."),Object(o.b)("li",{parentName:"ul"},"Java 8 or 11 installed.")),Object(o.b)("h2",{id:"basic-setup"},"Basic Setup"),Object(o.b)("p",null,"We'll be using Eclipse IDE 2020-09 on Windows 10 to connect a simple Java console application to a running Memgraph instance using ",Object(o.b)("strong",{parentName:"p"},"Maven"),".\nIf you're using a different IDE, the steps might be slightly different, but the code is probably the same or very similar.",Object(o.b)("br",null),"  "),Object(o.b)("p",null,"Let's jump in and connect a simple program to Memgraph."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1.")," Open ",Object(o.b)("strong",{parentName:"p"},"Eclipse")," and create a new ",Object(o.b)("strong",{parentName:"p"},"Maven project"),".",Object(o.b)("br",null),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"2.")," Select the ",Object(o.b)("strong",{parentName:"p"},"Create a simple project")," option.",Object(o.b)("br",null),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"3.")," For the ",Object(o.b)("strong",{parentName:"p"},"Group Id")," field put ",Object(o.b)("inlineCode",{parentName:"p"},"com.memgraph.app")," and for ",Object(o.b)("strong",{parentName:"p"},"Artifact Id")," put ",Object(o.b)("inlineCode",{parentName:"p"},"my-app"),". Afterwards, click the ",Object(o.b)("strong",{parentName:"p"},"Finish")," button.",Object(o.b)("br",null),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"4.")," Open the ",Object(o.b)("inlineCode",{parentName:"p"},"pom.xml")," file and add the following dependency:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"<dependencies>\n    <dependency>\n      <groupId>org.neo4j.driver</groupId>\n      <artifactId>neo4j-java-driver</artifactId>\n      <version>4.1.1</version>\n    </dependency>\n  </dependencies>\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"5.")," Create the ",Object(o.b)("inlineCode",{parentName:"p"},"HelloWorld.java")," program and copy the following code:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-Java"},'import org.neo4j.driver.AuthTokens;\nimport org.neo4j.driver.Driver;\nimport org.neo4j.driver.GraphDatabase;\nimport org.neo4j.driver.Session;\nimport org.neo4j.driver.Result;\nimport org.neo4j.driver.Transaction;\nimport org.neo4j.driver.TransactionWork;\n\nimport static org.neo4j.driver.Values.parameters;\n\npublic class HelloWorld implements AutoCloseable\n{\n    private final Driver driver;\n\n    public HelloWorld( String uri, String user, String password )\n    {\n        driver = GraphDatabase.driver( uri, AuthTokens.basic( user, password ) );\n    }\n\n    public void close() throws Exception\n    {\n        driver.close();\n    }\n\n    public void printGreeting( final String message )\n    {\n        try ( Session session = driver.session() )\n        {\n            String greeting = session.writeTransaction( new TransactionWork<String>()\n            {\n                @Override\n                public String execute( Transaction tx )\n                {\n                    Result result = tx.run( "CREATE (a:Greeting) " +\n                                                     "SET a.message = $message " +\n                                                     "RETURN \'Node \' + id(a) + \': \' + a.message",\n                            parameters( "message", message ) );\n                    return result.single().get( 0 ).asString();\n                }\n            } );\n            System.out.println( greeting );\n        }\n    }\n\n    public static void main( String... args ) throws Exception\n    {\n        try ( HelloWorld greeter = new HelloWorld( "bolt://localhost:7687", "", "" ) )\n        {\n            greeter.printGreeting( "Hello, World!" );\n        }\n    }\n}\n')),Object(o.b)("p",null,"Once you run the program, you should see an output similar to the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Node 1: Hello, World!\n")),Object(o.b)("h2",{id:"where-to-next"},"Where to next?"),Object(o.b)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/tutorials/tutorials"},"Tutorials"))," page.\nYou can also browse through the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/database-functionalities"},"Database functionalities"))," section to get an overview of all the functionalities Memgraph offers."),Object(o.b)("h2",{id:"getting-help"},"Getting help"),Object(o.b)("p",null,"Visit the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"/memgraph/getting-help/getting-help"},"Getting help"))," page in case you run into any kind of problem or you have additional questions."))}l.isMDXComponent=!0},345:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=l(n),g=r,d=b["".concat(i,".").concat(g)]||b[g]||u[g]||o;return n?a.a.createElement(d,p(p({ref:t},c),{},{components:n})):a.a.createElement(d,p({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);