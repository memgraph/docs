"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3056],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,u=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return a?r.createElement(u,l(l({ref:t},h),{},{components:a})):r.createElement(u,l({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},26293:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294);const n=e=>{let{videoId:t,width:a="560"}=e;const n={position:"relative",width:a,paddingBottom:"56.25%",height:0};return r.createElement("div",{style:n},r.createElement("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"1px solid #cccccc"},src:`https://www.youtube.com/embed/${t}`,frameBorder:"0",allow:"encrypted-media; picture-in-picture",allowFullScreen:!0}))}},20139:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>h});var r=a(87462),n=(a(67294),a(3905)),o=a(26293);const l={id:"first-steps-with-memgraph",title:"First steps with Memgraph",sidebar_label:"First steps with Memgraph"},s=void 0,i={unversionedId:"tutorials/first-steps-with-memgraph",id:"version-2.10.1/tutorials/first-steps-with-memgraph",title:"First steps with Memgraph",description:"In this tutorial, you will learn how to install Memgraph Platform, connect to it",source:"@site/memgraph_versioned_docs/version-2.10.1/tutorials/first-steps-with-memgraph.md",sourceDirName:"tutorials",slug:"/tutorials/first-steps-with-memgraph",permalink:"/docs/memgraph/tutorials/first-steps-with-memgraph",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.10.1/tutorials/first-steps-with-memgraph.md",tags:[],version:"2.10.1",frontMatter:{id:"first-steps-with-memgraph",title:"First steps with Memgraph",sidebar_label:"First steps with Memgraph"},sidebar:"memgraph",previous:{title:"Tutorials overview",permalink:"/docs/memgraph/tutorials"},next:{title:"Install Memgraph on Windows 10",permalink:"/docs/memgraph/tutorials/install-memgraph-windows-10"}},p={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Install Memgraph Platform",id:"1-install-memgraph-platform",level:2},{value:"2. Connect to Memgraph Lab",id:"2-connect-to-memgraph-lab",level:2},{value:"3. Import dataset",id:"3-import-dataset",level:2},{value:"4. Run query",id:"4-run-query",level:2},{value:"5. Style your graph",id:"5-style-your-graph",level:2},{value:"Where to next?",id:"where-to-next",level:2}],d={toc:h};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this tutorial, you will learn how to install Memgraph Platform, connect to it\nusing Memgraph Lab, run your first query and style your graph. You will see that\nusing Memgraph is not hard at all! "),(0,n.kt)("p",null,"This tutorial is also available as a video on Memgraph's YouTube channel:"),(0,n.kt)(o.Z,{videoId:"6qYsAMisqQg",width:"100%",mdxType:"EmbedYTVideo"}),(0,n.kt)("br",null),(0,n.kt)("p",null,"Let's get started!"),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Memgraph Platform can be installed only with ",(0,n.kt)("strong",{parentName:"p"},"Docker"),". Instructions on how to\ninstall Docker can be found on the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"official Docker\nwebsite"),"."),(0,n.kt)("h2",{id:"1-install-memgraph-platform"},"1. Install Memgraph Platform"),(0,n.kt)("p",null,"First, you need to download and install Memgraph Platform. All you need to do is\nto open a terminal on your computer and run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -v mg_lib:/var/lib/memgraph memgraph/memgraph-platform\n")),(0,n.kt)("p",null,"Once the installation is done, you will see a message similar to this one:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-nocopy"},"\nStatus: Downloaded newer image for memgraph/memgraph-platform:latest\nMemgraph Lab is running at localhost:3000\n\nmgconsole 1.1\nConnected to 'memgraph://127.0.0.1:7687'\nType :help for shell usage\nQuit the shell by typing Ctrl-D(eof) or :quit\nmemgraph>\n\n")),(0,n.kt)("p",null,"That means that you have installed Memgraph Platform and that you have Memgraph\nup and running. Kudos!"),(0,n.kt)("h2",{id:"2-connect-to-memgraph-lab"},"2. Connect to Memgraph Lab"),(0,n.kt)("p",null,"Since you installed and started the Memgraph Platform, then the Memgraph Lab is\nalready running, so open your web browser and go to\n",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000"},(0,n.kt)("inlineCode",{parentName:"a"},"localhost:3000")),". When the Memgraph Lab loads, click\n",(0,n.kt)("strong",{parentName:"p"},"Connect now"),"."),(0,n.kt)("img",{src:a(84630).Z,className:"imgBorder"}),(0,n.kt)("p",null,"That's it! You can see the Memgraph Lab Dashboard, so you are ready to head over\nto the next step."),(0,n.kt)("img",{src:a(32383).Z,className:"imgBorder"}),(0,n.kt)("h2",{id:"3-import-dataset"},"3. Import dataset"),(0,n.kt)("p",null,"Since this is a fresh install, there are no nodes and relationships in your\ndatabase. We have prepared more than 20 datasets that you can use for testing\nand learning. You will now import one of those datasets. In the sidebar click\n",(0,n.kt)("strong",{parentName:"p"},"Datasets"),". Next, go to ",(0,n.kt)("strong",{parentName:"p"},"Capital cities and borders")," and click ",(0,n.kt)("strong",{parentName:"p"},"Load Dataset"),"."),(0,n.kt)("img",{src:a(18917).Z,className:"imgBorder"}),(0,n.kt)("p",null,"You will see the warning that a new dataset will overwrite current data in the\ndatabase. That is not a problem for you since you don't have any data in your\ndatabase, but in the future be careful when importing data. Go ahead and click\n",(0,n.kt)("strong",{parentName:"p"},"Confirm"),". Once the import is done, click the ",(0,n.kt)("strong",{parentName:"p"},"X")," to close the dialog. "),(0,n.kt)("img",{src:a(46844).Z,className:"imgBorder"}),(0,n.kt)("h2",{id:"4-run-query"},"4. Run query"),(0,n.kt)("p",null,"Now that the data is imported it is time to run your first Cypher query. You\nwill write a query that that displays all of the cities and all of the\nconnections. "),(0,n.kt)("p",null,"Click the ",(0,n.kt)("strong",{parentName:"p"},"Query Execution")," in the sidebar, and then copy-and-paste the\nfollowing code into the ",(0,n.kt)("strong",{parentName:"p"},"Cypher Editor"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"\nMATCH (n)-[r]-(m)\nRETURN n, r, m;\n\n")),(0,n.kt)("p",null,"Click ",(0,n.kt)("strong",{parentName:"p"},"Run query")," to run the above query and see the result in the ",(0,n.kt)("strong",{parentName:"p"},"Graph\nresults")," tab."),(0,n.kt)("img",{src:a(12357).Z,className:"imgBorder"}),(0,n.kt)("p",null,"Here is another query for you. Imagine that you are in Madrid and you want to\nvisit other capital cities that are one or two hops away from Madrid. How can\nyou figure out which cities are your possible destinations? You will use Cypher\nquery language to find that out."),(0,n.kt)("p",null,"Click the ",(0,n.kt)("strong",{parentName:"p"},"Query Execution")," in the sidebar, and then copy-and-paste the\nfollowing code into the ",(0,n.kt)("strong",{parentName:"p"},"Cypher Editor"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},'\nMATCH p = (madrid:City { name: "Madrid" })-[e *BFS ..2]-(:City)\nRETURN p;\n\n')),(0,n.kt)("p",null,"This query will show all of the capital cities on the map that are up to two\nhops away from Madrid. You don't have to worry about exact semantics of this\nquery for now, but if you want to find out more, check out the ",(0,n.kt)("a",{parentName:"p",href:"/cypher-manual/"},"learning\nmaterials")," for Cypher. Click ",(0,n.kt)("strong",{parentName:"p"},"Run query")," to run the above\nquery and see the result in the ",(0,n.kt)("strong",{parentName:"p"},"Graph results")," tab."),(0,n.kt)("img",{src:a(53523).Z,className:"imgBorder"}),(0,n.kt)("p",null,"The result that you can see shows all of the capital cities that are two hops\naway from Madrid."),(0,n.kt)("img",{src:a(87972).Z,className:"imgBorder"}),(0,n.kt)("h2",{id:"5-style-your-graph"},"5. Style your graph"),(0,n.kt)("p",null,"When your results are shown on the map, you can move around. Go ahead and\nzoom in and change the map style to ",(0,n.kt)("strong",{parentName:"p"},"Detailed"),". "),(0,n.kt)("img",{src:a(51487).Z,className:"imgBorder"}),(0,n.kt)("p",null,"You will now use ",(0,n.kt)("strong",{parentName:"p"},"Graph Style Editor")," to change how nodes and relationships\nare shown on the map. We have included a flag for each capital city as a node\nproperty for the country it belongs to. You will now add one line of code to\nchange the style of the graph."),(0,n.kt)("p",null,"Find the part of the code that looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-nocopy"},'@NodeStyle HasLabel(node, "City") {\n  color: #DD2222\n  color-hover: Lighter(#DD2222)\n  color-selected: Lighter(#DD2222)\n}\n')),(0,n.kt)("p",null,"and add the line"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'  image-url: Property(node, "flag")\n')),(0,n.kt)("p",null,"so that the above block looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-nocopy"},'@NodeStyle HasLabel(node, "City") {\n  image-url: Property(node, "flag")\n  color: #DD2222\n  color-hover: Lighter(#DD2222)\n  color-selected: Lighter(#DD2222)\n}\n')),(0,n.kt)("p",null,"Click ",(0,n.kt)("strong",{parentName:"p"},"Apply"),", and your result should look like this:"),(0,n.kt)("img",{src:a(63841).Z,className:"imgBorder"}),(0,n.kt)("p",null,"That looks great, but let's make the names of the cities and nodes a little bit\nbigger."),(0,n.kt)("p",null,"In the Graph Style Editor, locate the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-nocopy"},"@NodeStyle {\n  size: 6\n  color: #DD2222\n  color-hover: Lighter(#DD2222)\n  color-selected: Lighter(#DD2222)\n  border-width: 1.8\n  border-color: #1d1d1d\n  font-size: 7\n}\n")),(0,n.kt)("p",null,"and replace it with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"@NodeStyle {\n  size: 10\n  color: #DD2222\n  color-hover: Lighter(#DD2222)\n  color-selected: Lighter(#DD2222)\n  border-width: 1.8\n  border-color: #1d1d1d\n  font-size: 12\n}\n")),(0,n.kt)("p",null,"You have increased the node size to 10, and the font size to 12. Now you will update the styling for the relationships. To make them thicker and change their color to red on hover, replace the following code in the Graph Style Editor:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-nocopy"},"@EdgeStyle {\n  color: #999999\n  color-hover: #1d1d1d\n  color-selected: #1d1d1d\n  width: 0.9\n  width-hover: 2.7\n  width-selected: 2.7\n  font-size: 7\n  label: Type(edge)\n}\n")),(0,n.kt)("p",null,"with"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"@EdgeStyle {\n  color: #999999\n  color-hover: #ff0000\n  color-selected: #1d1d1d\n  width: 2\n  width-hover: 2.7\n  width-selected: 2.7\n  font-size: 7\n  label: Type(edge)\n}\n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"In case you need it, here is the complete Graph Style Code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'@NodeStyle {\n  size: 10\n  color: #DD2222\n  color-hover: Lighter(#DD2222)\n  color-selected: Lighter(#DD2222)\n  border-width: 1.8\n  border-color: #1d1d1d\n  font-size: 12\n}\n\n@NodeStyle HasLabel(node, "City") {\n  image-url: Property(node, "flag")\n  color: #DD2222\n  color-hover: Lighter(#DD2222)\n  color-selected: Lighter(#DD2222)\n}\n\n@NodeStyle Greater(Size(Labels(node)), 0) {\n  label: Format(":{}", Join(Labels(node), " :"))\n}\n\n@NodeStyle HasProperty(node, "name") {\n  label: AsText(Property(node, "name"))\n}\n\n@EdgeStyle {\n  color: #999999\n  color-hover: #ff0000\n  color-selected: #1d1d1d\n  width: 2\n  width-hover: 2.7\n  width-selected: 2.7\n  font-size: 7\n  label: Type(edge)\n}\n'))),(0,n.kt)("p",null,"Below you can see how the graph looks like in the end. We hope that you have\nenjoyed this short tutorial. Now that you have seen Memgraph in action, we\nencourage you to keep exploring Memgraph features. A wonderful world of graphs\nawaits you!"),(0,n.kt)("img",{src:a(89035).Z,className:"imgBorder"}),(0,n.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,n.kt)("p",null,"In this tutorial, you've learned how to install Memgraph Platform, use Memgraph Lab to\nimport a dataset, run queries and style your graph. Not bad for a start, right?"),(0,n.kt)("p",null,"You don't want to bother with installation? Done! ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-cloud"},"Memgraph\nCloud")," at your service - register and run an instance in few\neasy steps."),(0,n.kt)("p",null,"We have promised along the way some more resources, so here they are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cypher-manual/"},"Cypher manual")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph-lab/graph-style-script-language"},"Guide to Style Script script")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/how-to-guides/work-with-docker"},"How to work with Docker"))),(0,n.kt)("p",null,"We hope that you had fun going through this tutorial! You can check out\n",(0,n.kt)("a",{parentName:"p",href:"/memgraph/tutorials/"},"some of the tutorials")," that we have prepared for you, or you can\ngo to ",(0,n.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Memgraph Playground")," and go through\nthe guided lessons."))}c.isMDXComponent=!0},84630:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/connect-to-memgraph-lab-02c6a40c0df420da9d87b62c5f96c9ab.png"},53523:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/memgraph-lab-cypher-editor-75bcb094c3e00a8727ff239757474142.png"},32383:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/memgraph-lab-dashboard-6252ffe47fe4734784e31dfef492963d.png"},46844:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/memgraph-lab-dataset-import-9e3b0724cf9d57e7c22a391bf8b6d22a.png"},18917:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/memgraph-lab-datasets-7702bf2627923500c5250c6f75ba1c64.png"},12357:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/memgraph-lab-first-cypher-query-b7333d57915ac116e73de3771c75de5b.png"},87972:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/memgraph-lab-graph-results-a6ce766a7e33edba1bbe687906dc299b.png"},89035:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/memgraph-lab-map-style-final-ecc0395fe5328933808d498d74cd2f77.png"},51487:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/memgraph-lab-map-style-842ca346d7b55e909d1ef2742726f90e.png"},63841:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/memgraph-lab-style-editor-3f2684c2f892b94ae9cc5bb0924a0916.png"}}]);