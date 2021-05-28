(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5350],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(n),m=a,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},95292:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={id:"c-sharp",title:"C# quick start",sidebar_label:"C#"},s={unversionedId:"getting-started/connecting-applications/c-sharp",id:"version-1.3.0/getting-started/connecting-applications/c-sharp",isDocsHomePage:!1,title:"C# quick start",description:"At the end of this guide, you will have created a simple .NET console Hello, World! program that connects to the Memgraph database and executes simple queries.",source:"@site/memgraph_versioned_docs/version-1.3.0/getting-started/connecting-applications/c-sharp.md",sourceDirName:"getting-started/connecting-applications",slug:"/getting-started/connecting-applications/c-sharp",permalink:"/memgraph/1.3.0/getting-started/connecting-applications/c-sharp",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/getting-started/connecting-applications/c-sharp.md",version:"1.3.0",sidebar_label:"C#",frontMatter:{id:"c-sharp",title:"C# quick start",sidebar_label:"C#"},sidebar:"version-1.3.0/memgraph",previous:{title:"Rust quick start",permalink:"/memgraph/1.3.0/getting-started/connecting-applications/rust"},next:{title:"Java quick start",permalink:"/memgraph/1.3.0/getting-started/connecting-applications/java"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Driver",id:"driver",children:[]},{value:"Basic Setup",id:"basic-setup",children:[]},{value:"Alternative Setup",id:"alternative-setup",children:[]},{value:"Where to next?",id:"where-to-next",children:[]},{value:"Getting help",id:"getting-help",children:[]}],p={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"At the end of this guide, you will have created a simple .NET console ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Hello, World!"))," program that connects to the Memgraph database and executes simple queries."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"For this guide you will need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to setup Memgraph, take a look at the ",(0,i.kt)("a",{parentName:"li",href:"/memgraph/1.3.0/getting-started/installation"},"Installation guide"),"."),(0,i.kt)("li",{parentName:"ul"},"A basic understanding of graph databases and the property graph model.")),(0,i.kt)("h2",{id:"driver"},"Driver"),(0,i.kt)("p",null,"Please note that the code samples in this guide utilize the ",(0,i.kt)("inlineCode",{parentName:"p"},"Neo4j.Driver.Simple")," package which implements a blocking interface around the 'main' driver. It should be used as a tool for getting started quickly. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Neo4j.Driver")," package contains the official and complete driver for real-world projects.\nThe driver documentation can be found here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/neo4j/neo4j-dotnet-driver"},"Neo4j .NET Driver"),"."),(0,i.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,i.kt)("p",null,"We'll be using Visual Studio 2019 on Windows 10 to connect a simple .NET console application to a running Memgraph instance.\nIf you're using a different IDE, the steps might be slightly different, but the code is probably the same or very similar.",(0,i.kt)("br",null),"  "),(0,i.kt)("p",null,"Let's jump in and connect a simple program to Memgraph."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1.")," Open ",(0,i.kt)("strong",{parentName:"p"},"Visual Studio")," and create a new project.",(0,i.kt)("br",null),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"2.")," Find and select the ",(0,i.kt)("strong",{parentName:"p"},"Console App (.NET Core)")," template by using the search box.",(0,i.kt)("br",null),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"3.")," Name your project ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"MemgraphApp")),", choose an appropriate location for it, and click ",(0,i.kt)("strong",{parentName:"p"},"Create"),".",(0,i.kt)("br",null),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"4.")," Select the ",(0,i.kt)("strong",{parentName:"p"},"Tools > NuGet Package Manager > Package Manager Console")," menu command.",(0,i.kt)("br",null),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"5.")," Once the console opens, check that the ",(0,i.kt)("strong",{parentName:"p"},"Default project")," drop-down list shows the project into which you want to install the package.\nIf you have a single project in the solution, it is already selected.",(0,i.kt)("br",null),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"6.")," Enter the command ",(0,i.kt)("strong",{parentName:"p"},"Install-Package Neo4j.Driver.Simple"),"."),(0,i.kt)("p",null,"Now, you should have the newest version of the driver installed and can proceed to copy the following code into the ",(0,i.kt)("strong",{parentName:"p"},"Program.cs")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},'using System;\nusing System.Linq;\nusing Neo4j.Driver;\n\nnamespace MemgraphApp\n{\n    public class Program\n    {\n        public static void Main()\n        {\n            string message = "Hello, World!";\n\n            using var _driver = GraphDatabase.Driver("bolt://localhost:7687", AuthTokens.None);\n            using var session = _driver.Session();\n\n            var greeting = session.WriteTransaction(tx =>\n            {\n                var result = tx.Run("CREATE (n:FirstNode) " +\n                                    "SET n.message = $message " +\n                                    "RETURN \'Node \'  + id(n) + \': \' + n.message",\n                    new { message });\n                return result.Single()[0].As<string>();\n            });\n            Console.WriteLine(greeting);\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Once you run the program, you should see an output similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Node 1: Hello, World!\n")),(0,i.kt)("h2",{id:"alternative-setup"},"Alternative Setup"),(0,i.kt)("p",null,"If you want to try out more complex operations, feel free to use the refactored code below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},'using System;\nusing System.Linq;\nusing Neo4j.Driver;\n\nnamespace MemgraphApp\n{\n    public class Program : IDisposable\n    {\n        private readonly IDriver _driver;\n\n        public Program(string uri, string user, string password)\n        {\n            _driver = GraphDatabase.Driver(uri, AuthTokens.Basic(user, password));\n        }\n\n        public void PrintGreeting(string message)\n        {\n            using (var session = _driver.Session())\n            {\n                var greeting = session.WriteTransaction(tx =>\n                {\n                    var result = tx.Run("CREATE (n:FirstNode) " +\n                                        "SET n.message = $message " +\n                                        "RETURN \'Node \'  + id(n) + \': \' + n.message",\n                        new { message });\n                    return result.Single()[0].As<string>();\n                });\n                Console.WriteLine(greeting);\n            }\n        }\n\n        public void Dispose()\n        {\n            _driver?.Dispose();\n        }\n\n        public static void Main()\n        {\n            using (var greeter = new Program("bolt://localhost:7687", "", ""))\n            {\n                greeter.PrintGreeting("Hello, World!");\n            }\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,i.kt)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/tutorials/tutorials"},"Tutorials"))," page.\nYou can also browse through the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/database-functionalities"},"Database functionalities"))," section to get an overview of all the functionalities Memgraph offers."),(0,i.kt)("h2",{id:"getting-help"},"Getting help"),(0,i.kt)("p",null,"Visit the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/memgraph/1.3.0/getting-help/getting-help"},"Getting help"))," page in case you run into any kind of problem or you have additional questions."))}c.isMDXComponent=!0}}]);