(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74336],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),c=a,h=s["".concat(p,".").concat(c)]||s[c]||m[c]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},96917:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return s}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],l={id:"create-a-new-module",title:"Developing a query module in Python",sidebar_label:"Create a Python module"},p=void 0,d={unversionedId:"usage/create-a-new-module",id:"usage/create-a-new-module",isDocsHomePage:!1,title:"Developing a query module in Python",description:"Prerequisites",source:"@site/mage/usage/create-a-new-module.md",sourceDirName:"usage",slug:"/usage/create-a-new-module",permalink:"/mage/usage/create-a-new-module",editUrl:"https://github.com/memgraph/docs/tree/master/mage/usage/create-a-new-module.md",version:"current",frontMatter:{id:"create-a-new-module",title:"Developing a query module in Python",sidebar_label:"Create a Python module"},sidebar:"mage",previous:{title:"Calling procedures",permalink:"/mage/usage/calling-procedures"},next:{title:"Loading query modules",permalink:"/mage/usage/loading-modules"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Developing a module",id:"developing-a-module",children:[]},{value:"Running",id:"running",children:[]},{value:"Testing",id:"testing",children:[{value:"input.cyp",id:"inputcyp",children:[]},{value:"test.yml",id:"testyml",children:[]}]}],m={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download and install ",(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/download"},"Memgraph"),"."),(0,o.kt)("li",{parentName:"ul"},"Clone the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage"},"MAGE")," repository.")),(0,o.kt)("h2",{id:"developing-a-module"},"Developing a module"),(0,o.kt)("p",null,"In this guide, we'll create a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Random_walk#On_graphs"},"random walk")," algorithm.\nPosition yourself in the MAGE repository you cloned earlier. Specifically, go in the ",(0,o.kt)("inlineCode",{parentName:"p"},"python")," sub-directory and create a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"random_walk.py"),".\nNext, import ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp"),", Memgraph's internal data structure module. Among others, it contains definitions for Vertex and Node data structures."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are using code completion, you might be interested in having ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp")," in your python path. This will allow your code editor to access ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.py")," and make use of code declarations and documentation. ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.py")," is a script that comes with Memgraph. Usually, it will be installed in ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/python_support/mgp.py"),". Now, all you have to do is add it to your ",(0,o.kt)("inlineCode",{parentName:"p"},"PYTHONPATH")," environment variable: ",(0,o.kt)("inlineCode",{parentName:"p"},"export PYTHONPATH=/usr/lib/memgraph/python_support"),"."))),(0,o.kt)("p",null,"Here's the code for the random walk algorithm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import mgp\nimport random\n\n\n@mgp.read_proc\ndef get(\n    start: mgp.Vertex,\n    length: int = 10,\n) -> mgp.Record(path=mgp.Path):\n    """Generates a random path of length `length` or less starting\n    from the `start` vertex.\n\n    :param mgp.Vertex start: The starting node of the walk.\n    :param int length: The number of edges to traverse.\n    :return: Random path.\n    :rtype: mgp.Record(mgp.Path)\n    """\n    path = mgp.Path(start)\n    vertex = start\n    for _ in range(length):\n        try:\n            edge = random.choice(list(vertex.out_edges))\n            path.expand(edge)\n            vertex = edge.to_vertex\n        except IndexError:\n            break\n\n    return mgp.Record(path=path)\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"get_path")," is decorated with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@mgp.read_proc")," decorator, which tells Memgraph it's a ",(0,o.kt)("inlineCode",{parentName:"p"},"read")," procedure, meaning it won't change the graph. The path is created from the ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," node, and edges are appended to it iteratively."),(0,o.kt)("h2",{id:"running"},"Running"),(0,o.kt)("p",null,"Start Memgraph and MAGE, and copy the module you developed into the ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules"),"."),(0,o.kt)("p",null,"Instructions for a local Memgraph installation (Debian/Ubuntu):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo systemctl start memgraph\ncp python/random_walk.py /usr/lib/memgraph/query_modules/\n")),(0,o.kt)("p",null,"Instructions for a docker Memgraph instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run --rm -d --name memgraph -p 7687:7687 memgraph/mage\ndocker cp python/random_walk.py memgraph:/usr/lib/memgraph/query_modules/\n")),(0,o.kt)("p",null,"A more advanced approach is to use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"docker volumes"),". That will allow you to have query modules synchronized between your mage repository and your docker container."),(0,o.kt)("p",null,"Then, use a Memgraph client like MemgraphLab or mgconsole to load the newly added function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CALL mg.load('random_walk')\n")),(0,o.kt)("p",null,"Lastly, run a query and test your module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MERGE (start:Node {id: 0})-[:RELATION]->(mid:Node {id: 1})-[:RELATION]->(end:Node {id: 2})\nCALL random_walk.get(start, 2) YIELD path\nRETURN path\n")),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"Test decoupled parts of your code that don't depend on Memgraph like you would in any other setting.\nE2e (end to end) tests, on the other hand, depend on internal Memgraph data structures, like nodes and edges.\nAfter running Memgraph, we need to prepare the testing environment on the host machine.\nPosition yourself in the mage directory you cloned from GitHub.\nThe expected folder structure for each module is the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mage\n\u2514\u2500\u2500 e2e\n    \u2514\u2500\u2500 random_walk_test\n        \u2514\u2500\u2500 test_base\n            \u251c\u2500\u2500 input.cyp\n            \u2514\u2500\u2500 test.yml\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"input.cyp")," represents a Cypher script for entering the data into the database.\nTo simplify this tutorial, we'll leave the database empty. ",(0,o.kt)("inlineCode",{parentName:"p"},"test.yml")," specifies which test query should be run by the database, and what should be the result or exception. Create the files following the aforementioned directory structure."),(0,o.kt)("h3",{id:"inputcyp"},"input.cyp"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) DETACH DELETE n;\n")),(0,o.kt)("h3",{id:"testyml"},"test.yml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"query: >\n  MATCH (start:Node {id: 0})\n    CALL random_walk.get(start, 2) YIELD path\n    RETURN path\n\noutput: []\n")),(0,o.kt)("p",null,"Lastly, run the e2e tests with python:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python test_e2e\n")))}s.isMDXComponent=!0}}]);