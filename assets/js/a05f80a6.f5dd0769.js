"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,d=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"debian-installation",title:"Install Memgraph on Debian",sidebar_label:"Debian",slug:"/install-memgraph-on-debian",pagination_prev:"installation/overview",pagination_next:"connect-to-memgraph/overview"},i=void 0,l={unversionedId:"installation/linux/debian-installation",id:"version-2.2.0/installation/linux/debian-installation",title:"Install Memgraph on Debian",description:"This article briefly outlines the basic steps necessary to install and run",source:"@site/memgraph_versioned_docs/version-2.2.0/installation/linux/debian-installation.md",sourceDirName:"installation/linux",slug:"/install-memgraph-on-debian",permalink:"/docs/memgraph/2.2.0/install-memgraph-on-debian",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.2.0/installation/linux/debian-installation.md",tags:[],version:"2.2.0",frontMatter:{id:"debian-installation",title:"Install Memgraph on Debian",sidebar_label:"Debian",slug:"/install-memgraph-on-debian",pagination_prev:"installation/overview",pagination_next:"connect-to-memgraph/overview"},sidebar:"memgraph",previous:{title:"Install Memgraph overview",permalink:"/docs/memgraph/2.2.0/installation"},next:{title:"Connection methods overview",permalink:"/docs/memgraph/2.2.0/connect-to-memgraph"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation guide",id:"installation-guide",level:2},{value:"Stopping Memgraph",id:"stopping-memgraph",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Where to next?",id:"where-to-next",level:2},{value:"Getting help",id:"getting-help",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article briefly outlines the basic steps necessary to install and run\nMemgraph on Debian."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Newer versions of Memgraph are currently ",(0,r.kt)("strong",{parentName:"p"},"not backward compatible")," with older\nversions. That is why you won't be able to load storage snapshots between\ndifferent versions.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you proceed with the installation guide make sure that you have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The latest ",(0,r.kt)("strong",{parentName:"li"},"Memgraph Debian Package")," which can be downloaded from the\n",(0,r.kt)("a",{parentName:"li",href:"https://memgraph.com/download/"},"Memgraph download hub"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Memgraph packages are available for:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Debian 10")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Debian 11")))),(0,r.kt)("h2",{id:"installation-guide"},"Installation guide"),(0,r.kt)("p",null,"After downloading Memgraph as a Debian package, install it by running the\nfollowing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"sudo dpkg -i /path-to/memgraph_<version>.deb\n")),(0,r.kt)("admonition",{title:"Why use sudo?",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In order to perform some actions on your operating system\nlike installing new software, you may need ",(0,r.kt)("strong",{parentName:"p"},"superuser")," privileges (commonly\ncalled ",(0,r.kt)("strong",{parentName:"p"},"root"),").\xa0")),(0,r.kt)("admonition",{title:"Potential installation error",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You could get errors while installing\nthe package with the above command if you don't have all of Memgraph's\ndependencies installed. The issues mostly look like the following:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"dpkg: error processing package memgraph (--install):\n dependency problems - leaving unconfigured\nErrors were encountered while processing:\n memgraph\n")),(0,r.kt)("p",{parentName:"admonition"},"To install missing dependencies and finish the installation of the Memgraph\npackage, just issue the following command:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"sudo apt-get install -f\n")),(0,r.kt)("p",{parentName:"admonition"},"The above command will install all missing dependencies and will finish\nconfiguring the Memgraph package.")),(0,r.kt)("p",null,"To verify that Memgraph is running, run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"sudo journalctl --unit memgraph\n")),(0,r.kt)("p",null,"If successful, you should receive an output similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"You are running Memgraph vX.X.X\n")),(0,r.kt)("p",null,"If the Memgraph database instance is not running, you can start it explicitly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"sudo systemctl start memgraph\n")),(0,r.kt)("p",null,"If you want to start Memgraph with different configuration settings, check out\nthe ",(0,r.kt)("a",{parentName:"p",href:"#configuration"},"Configuration section"),". At this point, Memgraph is ready for you\nto ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.0/connect-to-memgraph"},"submit queries"),"."),(0,r.kt)("h2",{id:"stopping-memgraph"},"Stopping Memgraph"),(0,r.kt)("p",null,"To shut down the Memgraph server, issue the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"sudo systemctl stop memgraph\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The Memgraph configuration is available in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),". If the\nconfiguration file is altered, Memgraph needs to be restarted. To learn about\nall the configuration options, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.0/reference-guide/configuration"},"Reference\nguide"),"."),(0,r.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,r.kt)("p",null,"To learn how to query the database, take a look at the\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.2.0/connect-to-memgraph"},"querying"))," guide or ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph\nPlayground"))," for interactive tutorials.",(0,r.kt)("br",null),"\nVisit the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.2.0/connect-to-memgraph/drivers"},"Building applications")),"\npage if you need to connect to the database programmatically."),(0,r.kt)("h2",{id:"getting-help"},"Getting help"),(0,r.kt)("p",null,"If you run into problems during the installation process, check out our\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.2.0/linux-installation-troubleshooting"},"installation troubleshooting\nguide"))," to see if we\nhave already covered the topic. For more information on the installation process\nand for additional questions, visit the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/help-center"},"Help Center"))," page."))}c.isMDXComponent=!0}}]);