"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85879],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,d=u["".concat(l,".").concat(h)]||u[h]||p[h]||a;return n?o.createElement(d,i(i({ref:t},m),{},{components:n})):o.createElement(d,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83857:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"macos-installation-troubleshooting",title:"Troubleshooting installation on macOS",sidebar_label:"Installation troubleshooting",slug:"/macos-installation-troubleshooting"},l=void 0,c={unversionedId:"installation/macos/macos-installation-troubleshooting",id:"version-2.0.1/installation/macos/macos-installation-troubleshooting",isDocsHomePage:!1,title:"Troubleshooting installation on macOS",description:"Issues when connecting to Memgraph",source:"@site/memgraph_versioned_docs/version-2.0.1/installation/macos/macos-installation-troubleshooting.md",sourceDirName:"installation/macos",slug:"/macos-installation-troubleshooting",permalink:"/docs/memgraph/macos-installation-troubleshooting",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.0.1/installation/macos/macos-installation-troubleshooting.md",tags:[],version:"2.0.1",frontMatter:{id:"macos-installation-troubleshooting",title:"Troubleshooting installation on macOS",sidebar_label:"Installation troubleshooting",slug:"/macos-installation-troubleshooting"},sidebar:"version-2.0.1/memgraph",previous:{title:"Docker \ud83d\udc33",permalink:"/docs/memgraph/install-memgraph-on-macos-docker"},next:{title:"Docker \ud83d\udc33",permalink:"/docs/memgraph/install-memgraph-on-linux-docker"}},m=[{value:"Issues when connecting to Memgraph",id:"issues-when-connecting-to-memgraph",children:[],level:2},{value:"Issues with connecting <strong>mgconsole</strong> to the database",id:"issues-with-connecting-mgconsole-to-the-database",children:[],level:2},{value:"Find the IP address of a Docker Container",id:"find-the-ip-address-of-a-docker-container",children:[],level:2}],p={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"issues-when-connecting-to-memgraph"},"Issues when connecting to Memgraph"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it memgraph\n")),(0,a.kt)("p",null,"While this command will start a Memgraph instance, not publishing the port will\ncause problems when trying to connect to the database via ",(0,a.kt)("strong",{parentName:"p"},"Memgraph Lab")," or\n",(0,a.kt)("strong",{parentName:"p"},"mgconsole"),". To avoid this, you should publish the\ncontainer's port to the host using the ",(0,a.kt)("inlineCode",{parentName:"p"},"-p")," flag and by specifying the port:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it -p 7687:7687 -p 3000:3000 memgraph\n")),(0,a.kt)("h2",{id:"issues-with-connecting-mgconsole-to-the-database"},"Issues with connecting ",(0,a.kt)("strong",{parentName:"h2"},"mgconsole")," to the database"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it --entrypoint=mgconsole memgraph --host HOST\n")),(0,a.kt)("p",null,"Although unlikely, sometimes there are issues with connecting ",(0,a.kt)("strong",{parentName:"p"},"mgconsole")," to\nthe Docker Container\u2019s IP address because it is running on a custom IP rather\nthan ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),". This problem is most often accompanied with the following\nerror:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"Connection failure: Couldn't connect to 127.0.0.1:7687!\n")),(0,a.kt)("p",null,"To fix this issue, just replace ",(0,a.kt)("inlineCode",{parentName:"p"},"HOST")," from the first command with\n",(0,a.kt)("inlineCode",{parentName:"p"},"host.docker.internal"),". To find out more about networking in Docker, take a\nlook at ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-mac/networking/"},"this guide"),"."),(0,a.kt)("h2",{id:"find-the-ip-address-of-a-docker-container"},"Find the IP address of a Docker Container"),(0,a.kt)("p",null,"Although unlikely, some users might experience minor difficulties after the\nDocker installation. Instead of running on ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),", a Docker container for\nMemgraph may be running on a custom IP address. Fortunately, that IP address can\nbe found as follows:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," Determine the ID of the Memgraph Container by issuing the\ncommand ",(0,a.kt)("inlineCode",{parentName:"p"},"docker ps"),". The user should get an output similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'CONTAINER ID    IMAGE       COMMAND                  CREATED\n9397623cd87e    memgraph    "/usr/lib/memgraph/m\u2026"   2 seconds ago\n')),(0,a.kt)("p",null,"At this point, it is important to remember the container ID of the Memgraph\nImage. In our case, that is ",(0,a.kt)("inlineCode",{parentName:"p"},"9397623cd87e"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.")," Use the this ID to retrieve the IP address of the Container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 9397623cd87e\n")),(0,a.kt)("p",null,"The command above will yield the IP address that should be used when connecting\nto Memgraph via ",(0,a.kt)("strong",{parentName:"p"},"Memgraph Lab")," or ",(0,a.kt)("strong",{parentName:"p"},"mgconsole")," as described in\nthe ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/connect-to-memgraph"},"querying")," section. Just replace\n",(0,a.kt)("inlineCode",{parentName:"p"},"HOST")," from the following command with the appropriate IP address:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it --entrypoint=mgconsole memgraph --host HOST\n")))}u.isMDXComponent=!0}}]);