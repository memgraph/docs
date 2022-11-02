"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30939],{3905:(t,e,l)=>{l.d(e,{Zo:()=>c,kt:()=>p});var n=l(67294);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function o(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function i(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)l=r[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var s=n.createContext({}),m=function(t){var e=n.useContext(s),l=e;return t&&(l="function"==typeof t?t(e):o(o({},e),t)),l},c=function(t){var e=m(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),g=m(l),p=a,k=g["".concat(s,".").concat(p)]||g[p]||u[p]||r;return l?n.createElement(k,o(o({ref:e},c),{},{components:l})):n.createElement(k,o({ref:e},c))}));function p(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=l.length,o=new Array(r);o[0]=g;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var m=2;m<r;m++)o[m]=l[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}g.displayName="MDXCreateElement"},19461:(t,e,l)=>{l.d(e,{Z:()=>i});var n=l(67294);const a={connectButton:"connectButton_zPJx",connectButton__imgActive:"connectButton__imgActive_OIgu",connectButton__img:"connectButton__img_HQEE"};var r=l(50941),o=l(44996);function i(t){const{title:e,url:l,img:i,imgActive:s,imgDark:m,imgDarkActive:c}=t;return n.createElement("a",{href:l,className:a.connectButton,style:a},n.createElement(r.Z,{alt:e,className:a.connectButton__img,sources:{light:(0,o.Z)(i),dark:(0,o.Z)(m)}}),n.createElement(r.Z,{alt:e,className:a.connectButton__imgActive,sources:{light:(0,o.Z)(s),dark:(0,o.Z)(c)}}))}},72819:(t,e,l)=>{l.d(e,{Z:()=>o});var n=l(67294);const a="mgContainer_LAj7",r="mgContainer__small_Mz9H";function o(t){const{size:e="default",children:l}=t;let o=null;return"small"===e&&(o=r),n.createElement("div",{className:`${a} ${o}`},l)}},73885:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>m,metadata:()=>u,toc:()=>p});var n=l(87462),a=(l(67294),l(3905)),r=l(72819),o=l(78350),i=l(44996),s=(l(19461),l(50941));const m={id:"overview",title:"Install Memgraph",sidebar_label:"Install Memgraph overview",slug:"/installation"},c=void 0,u={unversionedId:"installation/overview",id:"version-2.4.0/installation/overview",title:"Install Memgraph",description:"",source:"@site/memgraph_versioned_docs/version-2.4.0/installation/overview.mdx",sourceDirName:"installation",slug:"/installation",permalink:"/docs/memgraph/2.4.0/installation",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.4.0/installation/overview.mdx",tags:[],version:"2.4.0",frontMatter:{id:"overview",title:"Install Memgraph",sidebar_label:"Install Memgraph overview",slug:"/installation"},sidebar:"memgraph",previous:{title:"Getting started",permalink:"/docs/memgraph/2.4.0/"},next:{title:"Install Memgraph Platform (recommended)",permalink:"/docs/memgraph/2.4.0/install-memgraph-on-windows-docker"}},g={},p=[],k={toc:p},d=function(){const t="img/installation/",e={title:"Linux#",img:(0,i.Z)(t+"linux-logo.svg"),imgDark:(0,i.Z)(t+"dark/linux-logo-dark.svg")},l={title:"MacOS#",img:(0,i.Z)(t+"macos-logo.svg"),imgDark:(0,i.Z)(t+"dark/macos-logo-dark.svg")},n={title:"Windows#",img:(0,i.Z)(t+"windows-logo.svg"),imgDark:(0,i.Z)(t+"dark/windows-logo-dark.svg")};return(0,a.kt)(r.Z,{size:"small"},(0,a.kt)("div",{className:o.Z.connectToMemgraph},(0,a.kt)("section",null,(0,a.kt)("p",null,"Install ",(0,a.kt)("b",null,"Memgraph Platform")," and get the complete streaming graph application platform that includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("b",null,"MemgraphDB")," - the database that holds your data"),(0,a.kt)("li",null,(0,a.kt)("b",null,"Memgraph Lab")," - visual user interface for running queries and visualizing graph data"),(0,a.kt)("li",null,(0,a.kt)("b",null,"mgconsole")," - command-line interface for running queries"),(0,a.kt)("li",null,(0,a.kt)("b",null,"MAGE")," - graph algorithms and modules library")),(0,a.kt)("p",null,"Scroll down to the operating system of your choosing and install ",(0,a.kt)("b",null,"Memgraph Platform")," with Docker. If you only need to install a database instance, install MemgraphDB with Docker or some other available installation option."),(0,a.kt)("p",null,"You don't want to bother with installation? Done! ",(0,a.kt)("a",{href:"/memgraph-cloud"},(0,a.kt)("b",null,"Memgraph Cloud"))," at your service - register and run an instance in few easy steps.")),(0,a.kt)("section",null,(0,a.kt)("h2",null,"Windows"),(0,a.kt)("div",{class:"row"},(0,a.kt)("div",{class:"column"},(0,a.kt)("a",{style:{paddingRight:"60px",paddingLeft:"20px"}},(0,a.kt)(s.Z,{alt:n.title,sources:{light:(0,i.Z)(n.img),dark:(0,i.Z)(n.imgDark)}}))),(0,a.kt)("div",{class:"column",style:{paddingRight:"60px"}},(0,a.kt)("p",null,(0,a.kt)("b",null,"Install Memgraph Platform (recommended)")),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{href:"install-memgraph-on-windows-docker"},(0,a.kt)("b",null,"Docker"))))),(0,a.kt)("div",{class:"column"},(0,a.kt)("p",null,(0,a.kt)("b",null,"Install MemgraphDB")),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{href:"install-memgraph-db-on-windows-docker"},(0,a.kt)("b",null,"Docker"))),(0,a.kt)("li",null,(0,a.kt)("a",{href:"install-memgraph-on-windows-wsl"},(0,a.kt)("b",null,"Windows Subsystem for Linux (WSL)"))))))),(0,a.kt)("section",null,(0,a.kt)("h2",null,"macOS"),(0,a.kt)("div",{class:"row"},(0,a.kt)("div",{class:"column"},(0,a.kt)("a",{style:{paddingRight:"60px",paddingLeft:"20px"}},(0,a.kt)(s.Z,{alt:l.title,sources:{light:(0,i.Z)(l.img),dark:(0,i.Z)(l.imgDark)}}))),(0,a.kt)("div",{class:"column",style:{paddingRight:"60px"}},(0,a.kt)("p",null,(0,a.kt)("b",null,"Install Memgraph Platform (recommended)")),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{href:"install-memgraph-on-macos-docker"},(0,a.kt)("b",null,"Docker"))))),(0,a.kt)("div",{class:"column"},(0,a.kt)("p",null,(0,a.kt)("b",null,"Install MemgraphDB")),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{href:"install-memgraph-db-on-macos-docker"},(0,a.kt)("b",null,"Docker"))))))),(0,a.kt)("section",null,(0,a.kt)("h2",null,"Linux"),(0,a.kt)("div",{class:"row"},(0,a.kt)("div",{class:"column"},(0,a.kt)("a",{style:{paddingRight:"60px",paddingLeft:"20px"}},(0,a.kt)(s.Z,{alt:e.title,sources:{light:(0,i.Z)(e.img),dark:(0,i.Z)(e.imgDark)}}))),(0,a.kt)("div",{class:"column"},(0,a.kt)("p",null,(0,a.kt)("b",null,"Install Memgraph Platform (recommended)")),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{href:"install-memgraph-on-linux-docker"},(0,a.kt)("b",null,"Docker"))))),(0,a.kt)("div",{class:"column",style:{paddingLeft:"60px"}},(0,a.kt)("p",null,(0,a.kt)("b",null,"Install MemgraphDB")),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{href:"install-memgraph-db-on-linux-docker"},(0,a.kt)("b",null,"Docker"))),(0,a.kt)("li",null,(0,a.kt)("a",{href:"install-memgraph-on-ubuntu"},(0,a.kt)("b",null,"Ubuntu"))),(0,a.kt)("li",null,(0,a.kt)("a",{href:"install-memgraph-on-debian"},(0,a.kt)("b",null,"Debian"))),(0,a.kt)("li",null,(0,a.kt)("a",{href:"install-memgraph-from-rpm"},(0,a.kt)("b",null,"RPM package"))))))),(0,a.kt)("p",null,"Newer versions of Memgraph are currently ",(0,a.kt)("b",null,"not backward compatible")," with older versions. That is why you won't be able to load storage snapshots between different versions."),(0,a.kt)("section",null,(0,a.kt)("h2",null,"Available Memgraph Docker images"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://hub.docker.com/r/memgraph/memgraph/tags"},(0,a.kt)("b",null,"memgraph/memgraph"))," includes MemgraphDB"),(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://hub.docker.com/r/memgraph/memgraph-mage/tags"},(0,a.kt)("b",null,"memgraph/memgraph-mage"))," includes MemgraphDB and MAGE (check the ",(0,a.kt)("a",{href:"/mage/installation"},"docs"),")",(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://hub.docker.com/r/memgraph/memgraph-mage/tags?page=1&name=cugraph"},(0,a.kt)("b",null,"memgraph/memgraph-mage + cuGraph"))," - includes MemgraphDB, MAGE and NVIDIA cuGraph GPU-powered graph algorithms"))),(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://hub.docker.com/r/memgraph/memgraph-platform/tags"},(0,a.kt)("b",null,"memgraph/memgraph-platform"))," includes MemgraphDB, MAGE, mgconsole and Memgraph Lab")))))};function h(t){let{components:e,...l}=t;return(0,a.kt)(d,(0,n.Z)({},k,l,{components:e,mdxType:"MDXLayout"}))}h.isMDXComponent=!0},78350:(t,e,l)=>{l.d(e,{Z:()=>n});const n={connectToMemgraph:"connectToMemgraph__SkV",connectToMemgraph__grid:"connectToMemgraph__grid_HW66"}}}]);