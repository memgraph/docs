"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97736],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},12195:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={id:"getting-started",title:"Getting started with Memgraph Cloud",sidebar_label:"Getting started",slug:"/"},i=void 0,l={unversionedId:"getting-started",id:"getting-started",title:"Getting started with Memgraph Cloud",description:"Memgraph Cloud is a cloud service fully managed",source:"@site/cloud/getting-started.md",sourceDirName:".",slug:"/",permalink:"/docs/memgraph-cloud/",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/cloud/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting started with Memgraph Cloud",sidebar_label:"Getting started",slug:"/"},sidebar:"cloud",next:{title:"Cloud account",permalink:"/docs/memgraph-cloud/cloud-account"}},c={},s=[],p={toc:s};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/cloud"},"Memgraph Cloud")," is a cloud service fully managed\non AWS and available in 6 geographic regions around the world. Memgraph Cloud\nallows you to create projects with Enterprise instances of MemgraphDB from your\nbrowser. The instances can use up to 32 GB of RAM and you can connect to them\nusing ",(0,r.kt)("a",{parentName:"p",href:"cloud-connect#connect-with-memgraph-lab"},"Memgraph Lab"),",\n",(0,r.kt)("a",{parentName:"p",href:"cloud-connect#connect-with-mgconsole"},"mgconsole")," or various\n",(0,r.kt)("a",{parentName:"p",href:"cloud-connect#connect-with-drivers"},"drivers"),". All connections use SSL\nencryption with a self-signed certificate. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Cloud-Img",src:a(73085).Z,width:"1200",height:"500"})),(0,r.kt)("p",null,"Use Memgraph Cloud to stream data into Memgraph in real-time and run complex\ngraph algorithms and modules developed within the ",(0,r.kt)("a",{parentName:"p",href:"/docs/mage"},"MAGE")," repository,\nsuch as\n",(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/traditional-graph-analytics/pagerank-algorithm"},"PageRank"),",\n",(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/traditional-graph-analytics/community-detection-algorithm"},"Community\ndetection"),"\nor ",(0,r.kt)("a",{parentName:"p",href:"/docs/mage/algorithms/traditional-graph-analytics/betweenness-centrality-algorithm"},"Betweenness\ncentrality"),".\nYou can also extend the Cypher query language by developing your own procedures\nwithin query modules in Memgraph Lab."),(0,r.kt)("p",null,"Instances can be easily paused to save resources, backed up and cloned by\ncreating snapshots, and they all use the Enterprise edition of Memgraph which\nincludes the ",(0,r.kt)("a",{parentName:"p",href:"cloud-projects/#role-base-access-control"},"role-base access control"),"."),(0,r.kt)("p",null,"As a new user, try out Memgraph Cloud in a 14-days free trial and provide us\nwith feedback on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/memgraph"},"Discord"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.memgraph.com"},"Memgraph Cloud"),"."),(0,r.kt)("li",{parentName:"ol"},"Log in with a Google account or create a Memgraph Cloud account."),(0,r.kt)("li",{parentName:"ol"},"Give your project a name and provide a password. "),(0,r.kt)("li",{parentName:"ol"},"Your project is up and running - connect to the instance, import data and\nstart querying!")),(0,r.kt)("p",null,"If you are looking for a quick start, take a look at our short tutorial."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Hfs2lGTwyuo",title:"Getting started with Memgraph Cloud and Memgraph Lab"},(0,r.kt)("img",{alt:"Getting started with Memgraph Cloud and Memgraph Lab",src:a(99482).Z,width:"569",height:"320"}))),(0,r.kt)("p",null,"For a more detailed explanation of Memgraph Cloud, take a look at the demo video made for the launch that will take you through it's features:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/Tt5KPKylU8k?t=683",title:"Get started with Memgraph Cloud"},(0,r.kt)("img",{alt:"memgraph_cloud",src:a(73191).Z,style:{width:"30%"}}))),(0,r.kt)("p",null,"On the documentation pages, you can find everything you want to know about:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"cloud-account"},"Managing your Cloud account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"cloud-projects"},"Managing your projects within the Memgraph Cloud")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"cloud-connect"},"Connecting to the Memgraph instance running in the Cloud")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"payment"},"Payment rates and methods"))))}u.isMDXComponent=!0},73191:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloud-login-d7a5780443f5ef7f1c0bf5640b982bc6.png"},73085:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloud-img-601f088b2cc156981cb7b37ba23bb46d.svg"},99482:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/yt-cloud-getting-started-preview-a2e896c221d0a322f5496c1fae20c49b.png"}}]);