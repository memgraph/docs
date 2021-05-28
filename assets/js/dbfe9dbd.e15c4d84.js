(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4847],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,h=c["".concat(l,".").concat(u)]||c[u]||d[u]||r;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},54601:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),o={id:"wsl-installation",title:"Install Memgraph on Windows with WSL",sidebar_label:"Windows Subsystem for Linux",slug:"/install-memgraph-on-windows-wsl"},s={unversionedId:"installation/windows/wsl-installation",id:"version-1.4.0/installation/windows/wsl-installation",isDocsHomePage:!1,title:"Install Memgraph on Windows with WSL",description:"This article briefly outlines the basic steps necessary to install and run",source:"@site/memgraph_versioned_docs/version-1.4.0/installation/windows/wsl-installation.md",sourceDirName:"installation/windows",slug:"/install-memgraph-on-windows-wsl",permalink:"/memgraph/1.4.0/install-memgraph-on-windows-wsl",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.4.0/installation/windows/wsl-installation.md",version:"1.4.0",sidebar_label:"Windows Subsystem for Linux",frontMatter:{id:"wsl-installation",title:"Install Memgraph on Windows with WSL",sidebar_label:"Windows Subsystem for Linux",slug:"/install-memgraph-on-windows-wsl"},sidebar:"version-1.4.0/memgraph",previous:{title:"Install Memgraph on Windows with Docker",permalink:"/memgraph/1.4.0/install-memgraph-on-windows-docker"},next:{title:"Troubleshooting installation on Windows",permalink:"/memgraph/1.4.0/windows-installation-troubleshooting"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Installation guide",id:"installation-guide",children:[{value:"Configuration",id:"configuration",children:[]}]},{value:"Where to next?",id:"where-to-next",children:[]},{value:"Getting help",id:"getting-help",children:[]}],p={toc:l};function m(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article briefly outlines the basic steps necessary to install and run\nMemgraph on Windows with the Windows Subsystem for Linux."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you proceed with the installation guide make sure that you have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Downloaded the latest ",(0,r.kt)("strong",{parentName:"li"},"Memgraph Debian Package")," which can be ",(0,r.kt)("a",{parentName:"li",href:"https://memgraph.com/download/"},"found\nhere"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Windows Subsystem for Linux")," installed. You can find instructions on how to\ninstall it ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Debian app")," from the ",(0,r.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/p/debian/9msvkqc78pk6?activetab=pivot:overviewtab"},"Microsoft\nStore"),".")),(0,r.kt)("h2",{id:"installation-guide"},"Installation guide"),(0,r.kt)("p",null,"After downloading Memgraph as a Debian package and starting your Debian app,\ninstall Memgraph by running the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo dpkg -i /path/to/memgraph_<version>.deb\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Where is the download directory? ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Usually, you can find the download directory in this location\n",(0,r.kt)("inlineCode",{parentName:"p"},"/mnt/<drive>/Users/<username>"),"."))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Why use sudo? ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In order to perform some actions on your operating system like installing new\nsoftware, you may need ",(0,r.kt)("strong",{parentName:"p"},"superuser")," privileges (commonly called ",(0,r.kt)("strong",{parentName:"p"},"root"),").\xa0"))),(0,r.kt)("p",null,"Normally, you would start Memgraph using ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd"),", but unfortunately, this is\nnot an option in WSL. We can bypass this inconvenience by using the command\n",(0,r.kt)("inlineCode",{parentName:"p"},"runuser")," which allows us to run commands with a substitute user and group ID."),(0,r.kt)("p",null,"Start the Memgraph server by issuing the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo runuser -l memgraph -c '/usr/lib/memgraph/memgraph'\n")),(0,r.kt)("p",null,"If Memgraph has been installed correctly, you will see something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"You are running Memgraph v1.4.0-community\n")),(0,r.kt)("p",null,"At this point, Memgraph is ready for you to ",(0,r.kt)("a",{parentName:"p",href:"/memgraph/1.4.0/getting-started/querying"},"submit\nqueries"),"."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Potential installation error You could get errors while installing the package\nwith the above commands if you don't have all of Memgraph's dependencies\ninstalled. The issues mostly look like the following:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"dpkg: error processing package memgraph (--install):\n dependency problems - leaving unconfigured\nErrors were encountered while processing:\n memgraph\n")),(0,r.kt)("p",{parentName:"div"},"To install missing dependencies and finish the installation of the Memgraph\npackage, just issue the following command:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"sudo apt-get install -f\n")),(0,r.kt)("p",{parentName:"div"},"The above command will install all missing dependencies and will finish\nconfiguring the Memgraph package."))),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The Memgraph configuration is available in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),". If the\nMemgraph configuration is altered, Memgraph needs to be restarted."),(0,r.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,r.kt)("p",null,"To learn how to query the database, take a look at the\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/memgraph/1.4.0/getting-started/querying"},"Querying"))," guide or ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph\nPlayground"))," for interactive tutorials.",(0,r.kt)("br",null),"\nVisit the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/memgraph/1.4.0/getting-started/connecting-applications"},"Building\napplications")),"\npage if you need to connect to the database programmatically."),(0,r.kt)("h2",{id:"getting-help"},"Getting help"),(0,r.kt)("p",null,"If you run into problems during the installation process, check out our\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/memgraph/1.4.0/windows-installation-troubleshooting"},"installation troubleshooting\nguide"))," to see if\nhave already covered the topic. For more information on the installation process\nand for additional questions, visit the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/memgraph/1.4.0/getting-help/getting-help"},"Getting\nhelp"))," page."))}m.isMDXComponent=!0}}]);