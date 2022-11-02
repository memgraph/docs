"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93767],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>g});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=r.createContext({}),p=function(e){var a=r.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=p(e.components);return r.createElement(m.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(t),g=n,u=c["".concat(m,".").concat(g)]||c[g]||h[g]||o;return t?r.createElement(u,l(l({ref:a},s),{},{components:t})):r.createElement(u,l({ref:a},s))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},30520:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(87462),n=(t(67294),t(3905));const o={id:"memgraph-lab-faq",title:"Memgraph Lab - Frequently asked questions",sidebar_label:"Memgraph Lab",slug:"/faq/memgraph-lab"},l=void 0,i={unversionedId:"faq/memgraph-lab-faq",id:"faq/memgraph-lab-faq",title:"Memgraph Lab - Frequently asked questions",description:"What is Memgraph Lab?",source:"@site/help-center/faq/memgraph-lab-faq.md",sourceDirName:"faq",slug:"/faq/memgraph-lab",permalink:"/docs/help-center/faq/memgraph-lab",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/help-center/faq/memgraph-lab-faq.md",tags:[],version:"current",frontMatter:{id:"memgraph-lab-faq",title:"Memgraph Lab - Frequently asked questions",sidebar_label:"Memgraph Lab",slug:"/faq/memgraph-lab"},sidebar:"hel_center",previous:{title:"Memgraph Cloud",permalink:"/docs/help-center/faq/cloud"},next:{title:"MAGE",permalink:"/docs/help-center/faq/mage"}},m={},p=[{value:"What is Memgraph Lab?",id:"what-is-memgraph-lab",level:3},{value:"Can I only use Memgraph Lab?",id:"can-i-only-use-memgraph-lab",level:3},{value:"How to install Memgraph Lab on Windows?",id:"how-to-install-memgraph-lab-on-windows",level:3},{value:"How to install Memgraph Lab on macOS?",id:"how-to-install-memgraph-lab-on-macos",level:3},{value:"What is  Graph Style Script language?",id:"what-is--graph-style-script-language",level:3}],s={toc:p};function h(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"what-is-memgraph-lab"},"What is Memgraph Lab?"),(0,n.kt)("p",null,"Memgraph Lab is a visual interface for exploring and interacting with data\nstored in Memgraph."),(0,n.kt)("p",null,"If you prefer to query Memgraph using a command-line tool, use\n",(0,n.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph/connect-to-memgraph/mgconsole"},"mgconsole"),". "),(0,n.kt)("h3",{id:"can-i-only-use-memgraph-lab"},"Can I only use Memgraph Lab?"),(0,n.kt)("p",null,"No. Memgraph Lab needs a running Memgraph instance in the background to be able to\nconnect to it. After you have ",(0,n.kt)("a",{parentName:"p",href:"/memgraph/installation"},"installed Memgraph\nplatform")," and started it, you can head over to Memgraph\nLab and start querying your graph."),(0,n.kt)("h3",{id:"how-to-install-memgraph-lab-on-windows"},"How to install Memgraph Lab on Windows?"),(0,n.kt)("p",null,"You can either ",(0,n.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph/install-memgraph-on-windows-docker"},"install Memgraph\nPlatform"),",\nwhich includes both Memgraph Lab and Memgraph DB (as well as a command-line tool\nmgconsole and MAGE library) or ",(0,n.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph-lab/installation/windows"},"Memgraph\nLab")," by itself, but\nplease remember you need a running Memgraph DB instance to connect to. "),(0,n.kt)("p",null,"Memgraph Platform is installed using ",(0,n.kt)("strong",{parentName:"p"},"Docker")," that enables us to\nrun Memgraph virtually on any system without having to worry about compatibility\nissues. You don't have to be familiar with Docker to try out Memgraph Platform, so\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"install Docker")," without fear."),(0,n.kt)("h3",{id:"how-to-install-memgraph-lab-on-macos"},"How to install Memgraph Lab on macOS?"),(0,n.kt)("p",null,"You can either ",(0,n.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph/install-memgraph-on-macos-docker"},"install Memgraph\nPlatform"),",\nwhich includes both Memgraph Lab and Memgraph DB (as well as a command-line tool\nmgconsole and MAGE library) or ",(0,n.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph-lab/installation/macos"},"Memgraph\nLab")," by itself, but\nplease remember you need a running Memgraph DB instance to connect to. "),(0,n.kt)("p",null,"Memgraph Platform is installed using ",(0,n.kt)("strong",{parentName:"p"},"Docker")," that enables us to\nrun Memgraph virtually on any system without having to worry about compatibility\nissues. You don't have to be familiar with Docker to try out Memgraph Platform, so\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"install Docker")," without fear."),(0,n.kt)("h3",{id:"what-is--graph-style-script-language"},"What is  Graph Style Script language?"),(0,n.kt)("p",null,"Graph Style Script is a language for customizing the visual display of graphs. It\nallows you to stylize labels and colors of nodes and relationships. Check out\nthe ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-lab/graph-style-script-language"},"Graph Style Script\nguide")," for more\ninformation."))}h.isMDXComponent=!0}}]);