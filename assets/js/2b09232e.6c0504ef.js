"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45205],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,c=u["".concat(i,".").concat(g)]||u[g]||h[g]||r;return n?o.createElement(c,l(l({ref:t},d),{},{components:n})):o.createElement(c,l({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={id:"style-your-graphs-in-memgraph-lab",title:"Style your graphs in Memgraph Lab",sidebar_label:"Style your graphs in Memgraph Lab"},l=void 0,s={unversionedId:"tutorials/style-your-graphs-in-memgraph-lab",id:"version-2.1.1/tutorials/style-your-graphs-in-memgraph-lab",title:"Style your graphs in Memgraph Lab",description:"In this tutorial, you'll learn how to use Style script to add style to your",source:"@site/memgraph_versioned_docs/version-2.1.1/tutorials/style-your-graphs-in-memgraph-lab.md",sourceDirName:"tutorials",slug:"/tutorials/style-your-graphs-in-memgraph-lab",permalink:"/docs/memgraph/2.1.1/tutorials/style-your-graphs-in-memgraph-lab",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/tutorials/style-your-graphs-in-memgraph-lab.md",tags:[],version:"2.1.1",frontMatter:{id:"style-your-graphs-in-memgraph-lab",title:"Style your graphs in Memgraph Lab",sidebar_label:"Style your graphs in Memgraph Lab"},sidebar:"memgraph",previous:{title:"Social network analysis with NetworkX",permalink:"/docs/memgraph/2.1.1/tutorials/social-network-analysis"},next:{title:"Understanding music (with query modules)",permalink:"/docs/memgraph/2.1.1/tutorials/understanding-music-with-modules"}},i={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1 - Connecting to Memgraph sandbox",id:"step-1---connecting-to-memgraph-sandbox",level:2},{value:"Step 2 - Using colors and borders to style graph nodes",id:"step-2---using-colors-and-borders-to-style-graph-nodes",level:2},{value:"Step 3 - Add images to the nodes",id:"step-3---add-images-to-the-nodes",level:2},{value:"Step 4 - Using colors to style graph relationships",id:"step-4---using-colors-to-style-graph-relationships",level:2},{value:"Step 5 - Checking the final result",id:"step-5---checking-the-final-result",level:2},{value:"Where to next?",id:"where-to-next",level:2}],d={toc:p};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this tutorial, you'll learn how to use ",(0,a.kt)("strong",{parentName:"p"},"Style script")," to add style to your\ngraphs. You'll use the sandbox site ",(0,a.kt)("strong",{parentName:"p"},"Memgraph Playground")," that runs ",(0,a.kt)("strong",{parentName:"p"},"Memgraph Lab")," to\ntry out some styling."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"For this tutorial, there are no particular prerequisites. All you need is a web\nbrowser."),(0,a.kt)("h2",{id:"step-1---connecting-to-memgraph-sandbox"},"Step 1 - Connecting to Memgraph sandbox"),(0,a.kt)("p",null,"First, open the Memgraph Playground sandbox ",(0,a.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/sandbox/europe-backpacking"},"Europe\nbackpacking"),". When\nthe sandbox is loaded, do the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Expand ",(0,a.kt)("strong",{parentName:"li"},"Sample Query Examples"),"."),(0,a.kt)("li",{parentName:"ol"},"Run the first query to display the shortest path from Spain to Russia."),(0,a.kt)("li",{parentName:"ol"},"Click the gear icon to open the ",(0,a.kt)("strong",{parentName:"li"},"Style editor"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"style-graphs-open-style-editor",src:n(24702).Z,width:"1397",height:"693"})),(0,a.kt)("p",null,"Notice there is code already present in the ",(0,a.kt)("em",{parentName:"p"},"Style editor"),". In the next few\nsteps, you'll learn how to adjust that code to style your graph using colors and\nimages."),(0,a.kt)("h2",{id:"step-2---using-colors-and-borders-to-style-graph-nodes"},"Step 2 - Using colors and borders to style graph nodes"),(0,a.kt)("p",null,"With the ",(0,a.kt)("em",{parentName:"p"},"Style editor")," in front of you, you are ready to style your graph by\nmodifying the existing style and adding some new style rules. First, let's\nmodify the code that defines the node style. Look for this section of the code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nocopy"},"@NodeStyle {\n  size: 50\n  border-width: 5\n  border-color: #ffffff\n  shadow-color: #bab8bb\n  shadow-size: 6\n}\n")),(0,a.kt)("p",null,"This part of the code is called a\n",(0,a.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph-lab/style-script/reference-guide#directives"},"directive"),",\nand it is used to define how the node looks and feels."),(0,a.kt)("p",null,"To start, make the node smaller but with a larger and darker shadow. Update the\nvalues for properties ",(0,a.kt)("inlineCode",{parentName:"p"},"size"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"shadow-color"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"shadow-size"),". Set the value\nof ",(0,a.kt)("inlineCode",{parentName:"p"},"size")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"35"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"shadow-color")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"#333333"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"shadow-size")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"20"),". Your\ncode should now look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@NodeStyle {\n  size: 35\n  border-width: 5\n  border-color: #ffffff\n  shadow-color: #333333\n  shadow-size: 20\n}\n")),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Apply")," to see what your graph looks like now."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"style-graphs-node-size",src:n(33133).Z,width:"881",height:"762"})),(0,a.kt)("p",null,"Now change the color of the nodes from red to gold and make them orange on\nhover. Find the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nocopy"},'@NodeStyle HasLabel?(node, "Country") {\n  color: #dd2222\n  color-hover: Darker(#dd2222)\n  color-selected: #dd2222\n}\n')),(0,a.kt)("p",null,"Update value of the property ",(0,a.kt)("inlineCode",{parentName:"p"},"color")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"#ffd700")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"color-hover")," to\n",(0,a.kt)("inlineCode",{parentName:"p"},"#ffa500"),". The updated code should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'@NodeStyle HasLabel?(node, "Country") {\n  color: #ffd700\n  color-hover: #ffa500\n  color-selected: #dd2222\n}\n')),(0,a.kt)("p",null,"Don't forget to click ",(0,a.kt)("strong",{parentName:"p"},"Apply")," to see your updated graph."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"style-graphs-node-colors",src:n(66772).Z,width:"878",height:"762"})),(0,a.kt)("h2",{id:"step-3---add-images-to-the-nodes"},"Step 3 - Add images to the nodes"),(0,a.kt)("p",null,"Now that all the colors and borders are just right, it's time to add images to\nthe nodes. Let's add them to the first and last node using two different images\nfrom Wikipedia. You'll use a predicate to assign a value to a node with a\nspecific node value."),(0,a.kt)("p",null,"To display the two images, add the following code at the end of the style\nscript:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'@NodeStyle Equals?(Property(node, "name"), "Russia") {\n   image-url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/320px-Flag_of_Russia.svg.png"\n}\n\n@NodeStyle Equals?(Property(node, "name"), "Spain") {\n  image-url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/320px-Flag_of_Spain.svg.png"\n }\n')),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Apply")," to update the style of your graph. Your graph is looking better\nwith each step, isn't it?"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"style-graphs-node-with-images",src:n(50452).Z,width:"879",height:"754"})),(0,a.kt)("h2",{id:"step-4---using-colors-to-style-graph-relationships"},"Step 4 - Using colors to style graph relationships"),(0,a.kt)("p",null,"With all of the nodes looking just like you wanted them to, it's time to style\nthe relationships between them. You'll represent your relationships as straight,\nthin lines with no arrows. To do that, locate the ",(0,a.kt)("inlineCode",{parentName:"p"},"@EdgeStyle")," directive and the\nfollowing code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nocopy"},"@EdgeStyle {\n  width: 3\n  label: Type(edge)\n}\n")),(0,a.kt)("p",null,"Now replace that code with this one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'@EdgeStyle {\n  width: 1\n  label: Type(edge)\n  arrow-size: 0\n  type: "straight"\n  color: #6AA84F\n}\n')),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Apply")," and your relationships will have a new style!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"style-graphs-relationships-colors",src:n(56321).Z,width:"881",height:"754"})),(0,a.kt)("h2",{id:"step-5---checking-the-final-result"},"Step 5 - Checking the final result"),(0,a.kt)("p",null,"We are at the end of this tutorial. Move the nodes around to get the final look.\nYour result could look similar to the image below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"style-graphs-graph-with-new-style",src:n(51780).Z,width:"802",height:"602"})),(0,a.kt)("p",null,"The complete styling code for this graph is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'@NodeStyle {\n  size: 35\n  border-width: 5\n  border-color: #ffffff\n  shadow-color: #333333\n  shadow-size: 20\n}\n\n@NodeStyle Greater?(Size(Labels(node)), 0) {\n  label: Format(":{}", Join(Labels(node), " :"))\n}\n\n@NodeStyle HasLabel?(node, "Country") {\n  color: #ffd700\n  color-hover: #ffa500\n  color-selected: #dd2222\n}\n\n@NodeStyle HasProperty?(node, "name") {\n  label: AsText(Property(node, "name"))\n}\n\n@EdgeStyle {\n  width: 1\n  label: Type(edge)\n  arrow-size: 0\n  type: "straight"\n  color: #6AA84F\n}\n\n@NodeStyle Equals?(Property(node, "name"), "Russia") {\n   image-url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/320px-Flag_of_Russia.svg.png"\n}\n\n@NodeStyle Equals?(Property(node, "name"), "Spain") {\n  image-url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/320px-Flag_of_Spain.svg.png"\n }\n')),(0,a.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,a.kt)("p",null,"In this tutorial, you've learned how to style graphs, nodes and relationships in\nparticular, using Memgraph Lab. We hope that you had fun going through this\ntutorial. You can continue playing in Playground, or even better ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/installation"},"download and\ninstall ",(0,a.kt)("strong",{parentName:"a"},"Memgraph Platform"))," on your computer."),(0,a.kt)("p",null,"To get a taste of some more advanced styling features, head to our blog post\n",(0,a.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/how-to-style-your-graphs-in-memgraph-lab"},"How to style your graphs in Memgraph\nLab"),". Also,\nbe sure to check out ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/style-script/quick-start"},"Quick start guide to Style\nscript")," or take a deep dive into\nthe ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/memgraph-lab/style-script/reference-guide"},"Style script reference\nguide")," to\nlearn more about the language."))}h.isMDXComponent=!0},51780:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/style-graphs-graph-with-new-style-180931bc7e0448ab14d7b86b3cce31cd.png"},66772:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/style-graphs-node-colors-0cd9fedbb38a4f17793a01dd9f760e2d.png"},33133:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/style-graphs-node-size-53030f60dba0fe423fc6b2ecfaa03072.png"},50452:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/style-graphs-node-with-images-8fe35fee45c17c81998f96b1e0dd84fb.png"},24702:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/style-graphs-open-style-editor-9c50913785dc876d832a5bc075629a58.png"},56321:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/style-graphs-relationships-colors-c8d22436d5b6e9635ddf7034428b613d.png"}}]);