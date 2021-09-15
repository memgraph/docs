"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38185],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85391:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={id:"python",title:"Python quick start",sidebar_label:"Python"},l=void 0,s={unversionedId:"getting-started/connecting-applications/python",id:"version-1.4.0/getting-started/connecting-applications/python",isDocsHomePage:!1,title:"Python quick start",description:"At the end of this guide, you will have created a simple Python Hello, World! program that connects to the Memgraph database and executes simple queries.",source:"@site/memgraph_versioned_docs/version-1.4.0/getting-started/connecting-applications/python.md",sourceDirName:"getting-started/connecting-applications",slug:"/getting-started/connecting-applications/python",permalink:"/docs/memgraph/1.4.0/getting-started/connecting-applications/python",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.4.0/getting-started/connecting-applications/python.md",tags:[],version:"1.4.0",frontMatter:{id:"python",title:"Python quick start",sidebar_label:"Python"},sidebar:"version-1.4.0/memgraph",previous:{title:"Building applications",permalink:"/docs/memgraph/1.4.0/getting-started/connecting-applications"},next:{title:"Rust",permalink:"/docs/memgraph/1.4.0/getting-started/connecting-applications/rust"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Basic setup",id:"basic-setup",children:[]},{value:"Where to next?",id:"where-to-next",children:[]},{value:"Getting help",id:"getting-help",children:[]}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At the end of this guide, you will have created a simple Python ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Hello, World!"))," program that connects to the Memgraph database and executes simple queries."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To follow this guide, you will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"running Memgraph instance"),". If you need to set up Memgraph, take a look at the ",(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/1.4.0/getting-started/installation"},"Installation guide"),"."),(0,o.kt)("li",{parentName:"ul"},"A basic understanding of graph databases and the property graph model."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Docker")," installed and running. Instructions on how to setup Docker can be found on the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"official Docker website"),"."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/memgraph/pymgclient"},(0,o.kt)("strong",{parentName:"a"},"pymgclient driver")),". A Memgraph database adapter for the Python programming language. ",(0,o.kt)("strong",{parentName:"li"},"(if you are not using Docker)"))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"NOTE:")," We recommend using Docker because it simplifies installing the driver dependencies. If you don't wish to use Docker, you will need to install the ",(0,o.kt)("strong",{parentName:"p"},"pymgclient driver")," locally."))),(0,o.kt)("h2",{id:"basic-setup"},"Basic setup"),(0,o.kt)("p",null,"We'll be using a ",(0,o.kt)("strong",{parentName:"p"},"Dockerized Python program")," to demonstrate how to connect to a running Memgraph database instance.\nIf you don't wish to use Docker, the steps might be slightly different, but the code is most likely the same or very similar.",(0,o.kt)("br",null),"  "),(0,o.kt)("p",null,"Let's jump in and connect a simple program to Memgraph."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Create a new directory for your program, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"/memgraph_python")," and position yourself in it.",(0,o.kt)("br",null),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"2.")," Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file which will contain a list of items to be installed using ",(0,o.kt)("strong",{parentName:"p"},"pip"),". Leave it empty for the purposes of this guide.",(0,o.kt)("br",null),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"3.")," Create a new file in the project root directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/memgraph_python")," and name it  ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),". Add the following code to it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# Set base image (host OS)\nFROM python:3.8\n\n# Install CMake\nRUN apt-get update && \\\n  apt-get --yes install cmake\n\n# Install mgclient\nRUN apt-get install -y git cmake make gcc g++ libssl-dev && \\\n  git clone https://github.com/memgraph/mgclient.git /mgclient && \\\n  cd mgclient && \\\n  git checkout dd5dcaaed5d7c8b275fbfd5d2ecbfc5006fa5826 && \\\n  mkdir build && \\\n  cd build && \\\n  cmake .. && \\\n  make && \\\n  make install\n\n# Install pymgclient\nRUN git clone https://github.com/memgraph/pymgclient /pymgclient && \\\n  cd pymgclient && \\\n  python3 setup.py build && \\\n  python3 setup.py install\n\n# Set the working directory in the container\nWORKDIR /code\n\n# Copy the dependencies file to the working directory\nCOPY requirements.txt .\n\n# Install dependencies\nRUN pip install -r requirements.txt\n\n# Copy the content of the local src directory to the working directory\nCOPY src/ .\n\n# Command to run on container start\nCMD [ "python", "./program.py" ]\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," Create a directory for your source code, for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"/src")," and position yourself in it.",(0,o.kt)("br",null),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"5.")," To make the actual program, create a new Python script. Name it ",(0,o.kt)("inlineCode",{parentName:"p"},"program.py")," and add the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Python"},'import mgclient\n\n# Make a connection to the database\nconnection = mgclient.connect(host=\'172.17.0.2\', port=7687)\n\n# Create a cursor for query execution\ncursor = connection.cursor()\n\n# Delete all nodes and relationships\nquery = "MATCH (n) DETACH DELETE n"\n\n# Execute the query\ncursor.execute(query)\n\n# Create a node with the label FirstNode and message property with the value "Hello, World!"\nquery = """CREATE (n:FirstNode)\n           SET n.message = \'{message}\'\n           RETURN \'Node \'  + id(n) + \': \' + n.message""".format(message="Hello, World!")\n\n# Execute the query\ncursor.execute(query)\n\n# Fetch one row of query results\nrow = cursor.fetchone()\n\n# Print the first member in row\nprint(row[0])\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6.")," Don't forget to change the host address in your code.\nFind the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"CONTAINER ID"))," with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps")," and use it in the following command to retrieve the address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' CONTAINER ID\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"7.")," To run the application, first, you need to create a Docker image with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker build -t memgraph_python .\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"8.")," Now, you can run the application with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run memgraph_python\n")),(0,o.kt)("p",null,"You should see an output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Node 1: Hello, World!\n")),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"For real-world examples of how to use Memgraph, we suggest you take a look at the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/1.4.0/tutorials/tutorials"},"Tutorials"))," page.\nYou can also browse through the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/1.4.0/database-functionalities"},"Database functionalities"))," section to get an overview of all the functionalities Memgraph offers."),(0,o.kt)("h2",{id:"getting-help"},"Getting help"),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/1.4.0/getting-help/getting-help"},"Getting help"))," page in case you run into any kind of problem or you have additional questions."))}d.isMDXComponent=!0}}]);