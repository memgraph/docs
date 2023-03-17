"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29485],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(67294),o=t(86010);const r="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>N});var a=t(87462),o=t(67294),r=t(86010),l=t(12466),i=t(16550),s=t(91980),u=t(67392),c=t(50012);function p(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}function d(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=d(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[s,u]=h({queryString:t,groupId:a}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Nk)(t);return[a,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),f=(()=>{const e=s??p;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var f=t(72389);const k="tabList__CuJ",w="tabItem_LNqP";function b(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==i&&(p(n),s(a))},m=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}null==(n=t)||n.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,r.Z)("tabs__item",w,null==l?void 0:l.className,{"tabs__item--active":i===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function v(e){const n=g(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",k)},o.createElement(b,(0,a.Z)({},e,n)),o.createElement(y,(0,a.Z)({},e,n)))}function N(e){const n=(0,f.Z)();return o.createElement(v,(0,a.Z)({key:String(n)},e))}},62592:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=t(87462),o=(t(67294),t(3905)),r=t(74866),l=t(85162);const i={id:"windows-installation-troubleshooting",title:"Troubleshooting installation on Windows",sidebar_label:"Installation troubleshooting",slug:"/windows-installation-troubleshooting",pagination_prev:"installation/overview",pagination_next:"connect-to-memgraph/overview"},s=void 0,u={unversionedId:"installation/windows/windows-installation-troubleshooting",id:"installation/windows/windows-installation-troubleshooting",title:"Troubleshooting installation on Windows",description:"<Tabs",source:"@site/docs/installation/windows/windows-installation-troubleshooting.md",sourceDirName:"installation/windows",slug:"/windows-installation-troubleshooting",permalink:"/docs/memgraph/next/windows-installation-troubleshooting",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/docs/installation/windows/windows-installation-troubleshooting.md",tags:[],version:"current",frontMatter:{id:"windows-installation-troubleshooting",title:"Troubleshooting installation on Windows",sidebar_label:"Installation troubleshooting",slug:"/windows-installation-troubleshooting",pagination_prev:"installation/overview",pagination_next:"connect-to-memgraph/overview"},sidebar:"memgraph",previous:{title:"Install Memgraph overview",permalink:"/docs/memgraph/next/installation"},next:{title:"Connection methods overview",permalink:"/docs/memgraph/next/connect-to-memgraph"}},c={},p=[{value:"Issues with loading Memgraph",id:"issues-with-loading-memgraph",level:2},{value:"Error during connect:<br/> <code>This error may indicate that the docker daemon is not running.</code>",id:"error-during-connect-this-error-may-indicate-that-the-docker-daemon-is-not-running",level:3},{value:"Error response from daemon:<br/> <code>open \\.pipedocker_engine_linux: The system cannot find the file specified.</code>",id:"error-response-from-daemon-open-pipedocker_engine_linux-the-system-cannot-find-the-file-specified",level:3},{value:"Unsupported os linux",id:"unsupported-os-linux",level:3},{value:"Issues when connecting to Memgraph",id:"issues-when-connecting-to-memgraph",level:2},{value:"Issues with connecting <strong>mgconsole</strong> to the database",id:"issues-with-connecting-mgconsole-to-the-database",level:2},{value:"Find the IP address of a Docker Container",id:"find-the-ip-address-of-a-docker-container",level:2},{value:"Accessing files from your Windows system",id:"accessing-files-from-your-windows-system",level:2},{value:"Unable to install the Memgraph package with <code>dpkg</code>",id:"unable-to-install-the-memgraph-package-with-dpkg",level:2},{value:"Multiple notes when starting Memgraph",id:"multiple-notes-when-starting-memgraph",level:2}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{groupId:"operating-systems",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Windows Subsystem for Linux (WSL)",value:"wsl"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,o.kt)("h2",{id:"issues-with-loading-memgraph"},"Issues with loading Memgraph"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker load -i memgraph.tar.gz\n")),(0,o.kt)("h3",{id:"error-during-connect-this-error-may-indicate-that-the-docker-daemon-is-not-running"},"Error during connect:",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"h3"},"This error may indicate that the docker daemon is not running.")),(0,o.kt)("p",null,"Run the Docker Desktop application and wait for it to load fully."),(0,o.kt)("h3",{id:"error-response-from-daemon-open-pipedocker_engine_linux-the-system-cannot-find-the-file-specified"},"Error response from daemon:",(0,o.kt)("br",null)," ",(0,o.kt)("inlineCode",{parentName:"h3"},"open \\\\.\\pipe\\docker_engine_linux: The system cannot find the file specified.")),(0,o.kt)("p",null,"Reload the Docker Desktop application and wait for it to load fully."),(0,o.kt)("h3",{id:"unsupported-os-linux"},"Unsupported os linux"),(0,o.kt)("p",null,"You need to download the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-gb/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package"},"Windows Subsystem for\nLinux"),",\nand enable experimental features in Docker Desktop, under ",(0,o.kt)("em",{parentName:"p"},"Settings")," -> ",(0,o.kt)("em",{parentName:"p"},"Docker\nEngine"),", change ",(0,o.kt)("em",{parentName:"p"},"experimental")," to ",(0,o.kt)("em",{parentName:"p"},"true"),"."),(0,o.kt)("h2",{id:"issues-when-connecting-to-memgraph"},"Issues when connecting to Memgraph"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it memgraph/memgraph-platform\n")),(0,o.kt)("p",null,"While this command will start a Memgraph instance, not publishing the port will\ncause problems when trying to connect to the database via ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab")," or\n",(0,o.kt)("strong",{parentName:"p"},"mgconsole"),". To avoid this, you should publish the\ncontainer's port to the host using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-p")," flag and by specifying the port:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 memgraph/memgraph-platform\n")),(0,o.kt)("h2",{id:"issues-with-connecting-mgconsole-to-the-database"},"Issues with connecting ",(0,o.kt)("strong",{parentName:"h2"},"mgconsole")," to the database"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it --entrypoint=mgconsole memgraph/memgraph-platform --host HOST\n")),(0,o.kt)("p",null,"Although unlikely, sometimes there are issues with connecting ",(0,o.kt)("strong",{parentName:"p"},"mgconsole")," to\nthe Docker Container\u2019s IP address because it is running on a custom IP rather\nthan ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),". This problem is most often accompanied with the following\nerror:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"Connection failure: Couldn't connect to 127.0.0.1:7687!\n")),(0,o.kt)("p",null,"To fix this issue, just replace ",(0,o.kt)("inlineCode",{parentName:"p"},"HOST")," from the first command with\n",(0,o.kt)("inlineCode",{parentName:"p"},"host.docker.internal"),". To find out more about networking in Docker, take a\nlook at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-windows/networking/"},"Networking features in Docker Desktop for Windows")," guide."),(0,o.kt)("h2",{id:"find-the-ip-address-of-a-docker-container"},"Find the IP address of a Docker Container"),(0,o.kt)("p",null,"Although unlikely, some users might experience minor difficulties after the\nDocker installation. Instead of running on ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),", a Docker container for\nMemgraph may be running on a custom IP address. Fortunately, that IP address can\nbe found as follows:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Determine the ID of the Memgraph Container by issuing the\ncommand ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps"),". The user should get an output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'CONTAINER ID    IMAGE       COMMAND                  CREATED\n9397623cd87e    memgraph    "/usr/lib/memgraph/m\u2026"   2 seconds ago\n')),(0,o.kt)("p",null,"At this point, it is important to remember the container ID of the Memgraph\nImage. In our case, that is ",(0,o.kt)("inlineCode",{parentName:"p"},"9397623cd87e"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Use the this ID to retrieve the IP address of the Container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 9397623cd87e\n")),(0,o.kt)("p",null,"The command above will yield the IP address that should be used when connecting\nto Memgraph via ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab")," or ",(0,o.kt)("strong",{parentName:"p"},"mgconsole")," as described in\nthe ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/next/connect-to-memgraph"},"querying")," section. Just replace\n",(0,o.kt)("inlineCode",{parentName:"p"},"HOST")," from the following command with the appropriate IP address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it --entrypoint=mgconsole memgraph/memgraph-platform --host HOST\n"))),(0,o.kt)(l.Z,{value:"wsl",mdxType:"TabItem"},(0,o.kt)("h2",{id:"accessing-files-from-your-windows-system"},"Accessing files from your Windows system"),(0,o.kt)("p",null,"Usually, you can find the Windows users directories in this location:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"/mnt/<drive>/Users/<username>\n")),(0,o.kt)("h2",{id:"unable-to-install-the-memgraph-package-with-dpkg"},"Unable to install the Memgraph package with ",(0,o.kt)("inlineCode",{parentName:"h2"},"dpkg")),(0,o.kt)("p",null,"While running the following ",(0,o.kt)("inlineCode",{parentName:"p"},"dpkg")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dpkg -i /mnt/<drive>/Users/<windows username>/Downloads/memgraph_<version>.deb\n")),(0,o.kt)("p",null,"you may encounter errors that resemble the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"dpkg: error processing package memgraph (--install): dependency problems -\nleaving unconfigured Errors were encountered while processing: memgraph\n")),(0,o.kt)("p",null,"These errors indicate that you don\u2019t have all of the necessary dependencies\ninstalled. To install the missing dependencies and finish the installation,\nissue the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"sudo apt-get install -f\n")),(0,o.kt)("h2",{id:"multiple-notes-when-starting-memgraph"},"Multiple notes when starting Memgraph"),(0,o.kt)("p",null,"When you start a Memgraph instance, you may see the following list of notes in\nyour terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"You are running Memgraph v1.4.0-community\n\nNOTE: Please install networkx to be able to use graph_analyzer module. Using Python:\n3.8.2 (default, Jul 16 2020, 14:00:26)\n[GCC 9.3.0]\n\nNOTE: Please install networkx to be able to use Memgraph NetworkX wrappers. Using Python:\n3.8.2 (default, Jul 16 2020, 14:00:26)\n[GCC 9.3.0]\n\nNOTE: Please install networkx, numpy, scipy to be able to use proxied NetworkX algorithms. E.g., CALL nxalg.pagerank(...).\nUsing Python:\n3.8.2 (default, Jul 16 2020, 14:00:26)\n[GCC 9.3.0]\n\nNOTE: Please install networkx to be able to use wcc module.\nUsing Python:\n3.8.2 (default, Jul 16 2020, 14:00:26)\n[GCC 9.3.0]\n")),(0,o.kt)("p",null,"If you wish to work with built-in NetworkX modules in Memgraph, you need to\ninstall the following Python libraries:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://numpy.org/"},"NumPy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.scipy.org/"},"SciPy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://networkx.org/"},"NetworkX"))),(0,o.kt)("p",null,"For more information on how to install Python libraries in WSL, follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/python/web-frameworks#install-python-pip-and-venv"},"Python\ninstallation\nguide"),".\nIf you are not interested in working with query modules that depend on these\nlibraries, you can ignore the warnings."))))}m.isMDXComponent=!0}}]);