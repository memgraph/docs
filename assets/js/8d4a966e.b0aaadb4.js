"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54488],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=o.createContext({}),i=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=i(e.components);return o.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=i(a),m=n,u=g["".concat(p,".").concat(m)]||g[m]||h[m]||r;return a?o.createElement(u,l(l({ref:t},d),{},{components:a})):o.createElement(u,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<r;i++)l[i]=a[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},52390:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var o=a(87462),n=(a(67294),a(3905));const r={id:"style-your-graphs-in-memgraph-lab",title:"Style your graphs in Memgraph Lab",sidebar_label:"Style your graphs in Memgraph Lab"},l=void 0,s={unversionedId:"tutorials/style-your-graphs-in-memgraph-lab",id:"version-2.10.1/tutorials/style-your-graphs-in-memgraph-lab",title:"Style your graphs in Memgraph Lab",description:"[![Related - Blog",source:"@site/memgraph_versioned_docs/version-2.10.1/tutorials/style-your-graphs-in-memgraph-lab.md",sourceDirName:"tutorials",slug:"/tutorials/style-your-graphs-in-memgraph-lab",permalink:"/docs/memgraph/tutorials/style-your-graphs-in-memgraph-lab",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.10.1/tutorials/style-your-graphs-in-memgraph-lab.md",tags:[],version:"2.10.1",frontMatter:{id:"style-your-graphs-in-memgraph-lab",title:"Style your graphs in Memgraph Lab",sidebar_label:"Style your graphs in Memgraph Lab"},sidebar:"memgraph",previous:{title:"Movie recommendation system",permalink:"/docs/memgraph/tutorials/movie-recommendation"},next:{title:"Implement a custom query module in Python",permalink:"/docs/memgraph/tutorials/implement-custom-query-module-in-python"}},p={},i=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1 - Connecting to Memgraph Cloud or Memgraph Playground",id:"step-1---connecting-to-memgraph-cloud-or-memgraph-playground",level:2},{value:"Memgraph Cloud",id:"memgraph-cloud",level:3},{value:"Memgraph Playground",id:"memgraph-playground",level:3},{value:"Step 2 - Using colors and borders to style graph nodes",id:"step-2---using-colors-and-borders-to-style-graph-nodes",level:2},{value:"Step 3 - Add images to the nodes",id:"step-3---add-images-to-the-nodes",level:2},{value:"Step 4 - Using colors to style graph relationships",id:"step-4---using-colors-to-style-graph-relationships",level:2},{value:"Step 5 - Checking the final result",id:"step-5---checking-the-final-result",level:2},{value:"Where to next?",id:"where-to-next",level:2}],d={toc:i};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/how-to-style-your-graphs-in-memgraph-lab"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Blog%20post&color=9C59DB&style=for-the-badge",alt:"Related - Blog\nPost"}))),(0,n.kt)("p",null,"In this tutorial, you'll learn how to use ",(0,n.kt)("strong",{parentName:"p"},"Style script")," to add style to your\ngraphs. You'll use ",(0,n.kt)("a",{parentName:"p",href:"https://memgraph.com/cloud"},(0,n.kt)("strong",{parentName:"a"},"Memgraph Cloud"))," or the sandbox\nsite ",(0,n.kt)("strong",{parentName:"p"},"Memgraph Playground")," that runs ",(0,n.kt)("strong",{parentName:"p"},"Memgraph Lab")," to try out styling\ngraphs."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"For this tutorial, there are no particular prerequisites. All you need is a web\nbrowser."),(0,n.kt)("h2",{id:"step-1---connecting-to-memgraph-cloud-or-memgraph-playground"},"Step 1 - Connecting to Memgraph Cloud or Memgraph Playground"),(0,n.kt)("p",null,"Memgraph Cloud enables you to read and make changes to the data. It comes with a\n14-day free trial upon registration. You can also use Memgraph Playground, but\nthere you can only read the data, but don't worry, you will be able to complete\nthe tutorial."),(0,n.kt)("h3",{id:"memgraph-cloud"},"Memgraph Cloud"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://cloud.memgraph.com/"},"Sign up")," to Memgraph Cloud.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once you finish the registration, log in and ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-cloud/cloud-projects#create-a-new-memgraph-cloud-project"},"create a new\nproject"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the project and ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-cloud/cloud-connect#connect-with-memgraph-lab"},"connect to it via Memgraph\nLab"),"."),(0,n.kt)("img",{src:a(82322).Z,className:"imgBorder"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In Memgraph Lab, navigate to ",(0,n.kt)("strong",{parentName:"p"},"Datasets")," section and upload the Europe\nbackpacking dataset.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the sample query provided by the Lab. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the ",(0,n.kt)("strong",{parentName:"p"},"Graph Style Editor")," tab. "),(0,n.kt)("img",{src:a(79324).Z,className:"imgBorder"}))),(0,n.kt)("p",null,"Notice there is code already present in the ",(0,n.kt)("em",{parentName:"p"},"Graph Style Editor"),". In the next few\nsteps, you'll learn how to adjust that code to style your graph using colors and\nimages."),(0,n.kt)("h3",{id:"memgraph-playground"},"Memgraph Playground"),(0,n.kt)("p",null,"Open the Memgraph Playground sandbox ",(0,n.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/sandbox/europe-backpacking"},"Europe\nbackpacking"),". When\nthe sandbox is loaded, do the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Expand ",(0,n.kt)("strong",{parentName:"li"},"Sample Query Examples"),"."),(0,n.kt)("li",{parentName:"ol"},"Run the first query to display the shortest path from Spain to Russia."),(0,n.kt)("li",{parentName:"ol"},"Click the gear icon to open the ",(0,n.kt)("strong",{parentName:"li"},"Style editor"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"style-graphs-open-style-editor",src:a(93476).Z,width:"1397",height:"693"})),(0,n.kt)("p",null,"Notice there is code already present in the ",(0,n.kt)("em",{parentName:"p"},"Style editor"),". In the next few\nsteps, you'll learn how to adjust that code to style your graph using colors and\nimages."),(0,n.kt)("h2",{id:"step-2---using-colors-and-borders-to-style-graph-nodes"},"Step 2 - Using colors and borders to style graph nodes"),(0,n.kt)("p",null,"With the ",(0,n.kt)("em",{parentName:"p"},"Style editor")," in front of you, you are ready to style your graph by\nmodifying the existing style and adding some new style rules. First, let's\nmodify the code that defines the node style. Look for this section of the code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-nocopy"},"@NodeStyle {\n  size: 50\n  border-width: 5\n  border-color: #ffffff\n  shadow-color: #bab8bb\n  shadow-size: 6\n}\n")),(0,n.kt)("p",null,"This part of the code is called a\n",(0,n.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph-lab/style-script/reference-guide#directives"},"directive"),",\nand it is used to define how the node looks and feels."),(0,n.kt)("p",null,"To start, make the node smaller but with a larger and darker shadow. Update the\nvalues for properties ",(0,n.kt)("inlineCode",{parentName:"p"},"size"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"shadow-color"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"shadow-size"),". Set the value\nof ",(0,n.kt)("inlineCode",{parentName:"p"},"size")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"35"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"shadow-color")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"#333333"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"shadow-size")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"20"),". Your\ncode should now look like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"@NodeStyle {\n  size: 35\n  border-width: 5\n  border-color: #ffffff\n  shadow-color: #333333\n  shadow-size: 20\n}\n")),(0,n.kt)("p",null,"Click ",(0,n.kt)("strong",{parentName:"p"},"Apply")," to see what your graph looks like now."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"style-graphs-node-size",src:a(57004).Z,width:"881",height:"762"})),(0,n.kt)("p",null,"Now change the color of the nodes from red to gold and make them orange on\nhover. Find the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-nocopy"},'@NodeStyle HasLabel?(node, "Country") {\n  color: #dd2222\n  color-hover: Darker(#dd2222)\n  color-selected: #dd2222\n}\n')),(0,n.kt)("p",null,"Update value of the property ",(0,n.kt)("inlineCode",{parentName:"p"},"color")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"#ffd700")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"color-hover")," to\n",(0,n.kt)("inlineCode",{parentName:"p"},"#ffa500"),". The updated code should look like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'@NodeStyle HasLabel(node, "Country") {\n  color: #ffd700\n  color-hover: #ffa500\n  color-selected: #dd2222\n}\n')),(0,n.kt)("p",null,"Don't forget to click ",(0,n.kt)("strong",{parentName:"p"},"Apply")," to see your updated graph."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"style-graphs-node-colors",src:a(4272).Z,width:"878",height:"762"})),(0,n.kt)("h2",{id:"step-3---add-images-to-the-nodes"},"Step 3 - Add images to the nodes"),(0,n.kt)("p",null,"Now that all the colors and borders are just right, it's time to add images to\nthe nodes. Let's add them to the first and last node using two different images\nfrom Wikipedia. You'll use a predicate to assign a value to a node with a\nspecific node value."),(0,n.kt)("p",null,"To display the two images, add the following code at the end of the style\nscript:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'@NodeStyle Equals(Property(node, "name"), "Russia") {\n   image-url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/320px-Flag_of_Russia.svg.png"\n}\n\n@NodeStyle Equals(Property(node, "name"), "Spain") {\n  image-url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/320px-Flag_of_Spain.svg.png"\n }\n')),(0,n.kt)("p",null,"Click ",(0,n.kt)("strong",{parentName:"p"},"Apply")," to update the style of your graph. Your graph is looking better\nwith each step, isn't it?"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"style-graphs-node-with-images",src:a(70702).Z,width:"879",height:"754"})),(0,n.kt)("h2",{id:"step-4---using-colors-to-style-graph-relationships"},"Step 4 - Using colors to style graph relationships"),(0,n.kt)("p",null,"With all of the nodes looking just like you wanted them to, it's time to style\nthe relationships between them. You'll represent your relationships as straight,\nthin lines with no arrows. To do that, locate the ",(0,n.kt)("inlineCode",{parentName:"p"},"@EdgeStyle")," directive and the\nfollowing code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-nocopy"},"@EdgeStyle {\n  width: 3\n  label: Type(edge)\n}\n")),(0,n.kt)("p",null,"Now replace that code with this one:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"@EdgeStyle {\n  width: 1\n  label: Type(edge)\n  arrow-size: 0\n  color: #6AA84F\n}\n")),(0,n.kt)("p",null,"Click ",(0,n.kt)("strong",{parentName:"p"},"Apply")," and your relationships will have a new style!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"style-graphs-relationships-colors",src:a(32266).Z,width:"881",height:"754"})),(0,n.kt)("h2",{id:"step-5---checking-the-final-result"},"Step 5 - Checking the final result"),(0,n.kt)("p",null,"We are at the end of this tutorial. Move the nodes around to get the final look.\nYour result could look similar to the image below."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"style-graphs-graph-with-new-style",src:a(84518).Z,width:"802",height:"602"})),(0,n.kt)("p",null,"The complete styling code for this graph is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'@NodeStyle {\n  size: 35\n  border-width: 5\n  border-color: #ffffff\n  shadow-color: #333333\n  shadow-size: 20\n}\n\n@NodeStyle Greater(Size(Labels(node)), 0) {\n  label: Format(":{}", Join(Labels(node), " :"))\n}\n\n@NodeStyle HasLabel(node, "Country") {\n  color: #ffd700\n  color-hover: #ffa500\n  color-selected: #dd2222\n}\n\n@NodeStyle HasProperty(node, "name") {\n  label: AsText(Property(node, "name"))\n}\n\n@EdgeStyle {\n  width: 1\n  label: Type(edge)\n  arrow-size: 0\n  color: #6AA84F\n}\n\n@NodeStyle Equals(Property(node, "name"), "Russia") {\n   image-url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/320px-Flag_of_Russia.svg.png"\n}\n\n@NodeStyle Equals(Property(node, "name"), "Spain") {\n  image-url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/320px-Flag_of_Spain.svg.png"\n }\n')),(0,n.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,n.kt)("p",null,"In this tutorial, you've learned how to style graphs, nodes and relationships in\nparticular, using Memgraph Lab. We hope that you had fun going through this\ntutorial. You can continue playing in Playground, or even better ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/installation"},"download and\ninstall ",(0,n.kt)("strong",{parentName:"a"},"Memgraph Platform"))," on your computer."),(0,n.kt)("p",null,"To get a taste of some more advanced styling features, head to our blog post\n",(0,n.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/how-to-style-your-graphs-in-memgraph-lab"},"How to style your graphs in Memgraph\nLab"),". Also,\nbe sure to check out ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/graph-style-script-language"},"guide to Style Script\nscript")," or take a deep dive into\nthe ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/style-script/reference-guide"},"Graph Style Script reference\nguide")," to learn more about the\nlanguage."))}h.isMDXComponent=!0},82322:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/style-graphs-open-lab-4080804bcef1893ac31d475afb995804.gif"},79324:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/style-graphs-upload-dataset-cc7a80d1acf346f067632e3112edb010.gif"},84518:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/style-graphs-graph-with-new-style-180931bc7e0448ab14d7b86b3cce31cd.png"},4272:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/style-graphs-node-colors-0cd9fedbb38a4f17793a01dd9f760e2d.png"},57004:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/style-graphs-node-size-53030f60dba0fe423fc6b2ecfaa03072.png"},70702:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/style-graphs-node-with-images-8fe35fee45c17c81998f96b1e0dd84fb.png"},93476:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/style-graphs-open-style-editor-9c50913785dc876d832a5bc075629a58.png"},32266:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/style-graphs-relationships-colors-c8d22436d5b6e9635ddf7034428b613d.png"}}]);