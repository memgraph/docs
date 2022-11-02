"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16642],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?o.createElement(h,i(i({ref:n},u),{},{components:t})):o.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(67294),a=t(86010);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var o=t(87462),a=t(67294),r=t(86010),i=t(72389),l=t(67392),s=t(7094),p=t(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var n;const{lazy:t,block:i,defaultValue:d,values:m,groupId:h,className:g}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??k.map((e=>{let{props:{value:n,label:t,attributes:o}}=e;return{value:n,label:t,attributes:o}})),w=(0,l.l)(f,((e,n)=>e.value===n.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)??k[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,s.U)(),[N,T]=(0,a.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=h){const e=y[h];null!=e&&e!==N&&f.some((n=>n.value===e))&&T(e)}const I=e=>{const n=e.currentTarget,t=C.indexOf(n),o=f[t].value;o!==N&&(x(n),T(o),null!=h&&v(h,String(o)))},E=e=>{var n;let t=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},g)},f.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>C.push(e),onKeyDown:E,onClick:I},i,{className:(0,r.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":N===n})}),t??n)}))),t?(0,a.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function m(e){const n=(0,i.Z)();return a.createElement(d,(0,o.Z)({key:String(n)},e))}},80695:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=t(87462),a=(t(67294),t(3905)),r=t(65488),i=t(85162);const l={id:"windows-installation-troubleshooting",title:"Troubleshooting installation on Windows",sidebar_label:"Installation troubleshooting",slug:"/windows-installation-troubleshooting",pagination_prev:"installation/overview",pagination_next:"connect-to-memgraph/overview"},s=void 0,p={unversionedId:"installation/windows/windows-installation-troubleshooting",id:"version-2.2.0/installation/windows/windows-installation-troubleshooting",title:"Troubleshooting installation on Windows",description:"<Tabs",source:"@site/memgraph_versioned_docs/version-2.2.0/installation/windows/windows-installation-troubleshooting.md",sourceDirName:"installation/windows",slug:"/windows-installation-troubleshooting",permalink:"/docs/memgraph/2.2.0/windows-installation-troubleshooting",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.2.0/installation/windows/windows-installation-troubleshooting.md",tags:[],version:"2.2.0",frontMatter:{id:"windows-installation-troubleshooting",title:"Troubleshooting installation on Windows",sidebar_label:"Installation troubleshooting",slug:"/windows-installation-troubleshooting",pagination_prev:"installation/overview",pagination_next:"connect-to-memgraph/overview"},sidebar:"memgraph",previous:{title:"Install Memgraph overview",permalink:"/docs/memgraph/2.2.0/installation"},next:{title:"Connection methods overview",permalink:"/docs/memgraph/2.2.0/connect-to-memgraph"}},u={},c=[{value:"Issues with loading Memgraph",id:"issues-with-loading-memgraph",level:2},{value:"Error during connect:<br/> <code>This error may indicate that the docker daemon is not running.</code>",id:"error-during-connect-this-error-may-indicate-that-the-docker-daemon-is-not-running",level:3},{value:"Error response from daemon:<br/> <code>open \\.pipedocker_engine_linux: The system cannot find the file specified.</code>",id:"error-response-from-daemon-open-pipedocker_engine_linux-the-system-cannot-find-the-file-specified",level:3},{value:"Unsupported os linux",id:"unsupported-os-linux",level:3},{value:"Issues when connecting to Memgraph",id:"issues-when-connecting-to-memgraph",level:2},{value:"Issues with connecting <strong>mgconsole</strong> to the database",id:"issues-with-connecting-mgconsole-to-the-database",level:2},{value:"Find the IP address of a Docker Container",id:"find-the-ip-address-of-a-docker-container",level:2},{value:"Accessing files from your Windows system",id:"accessing-files-from-your-windows-system",level:2},{value:"Unable to install the Memgraph package with <code>dpkg</code>",id:"unable-to-install-the-memgraph-package-with-dpkg",level:2},{value:"Multiple notes when starting Memgraph",id:"multiple-notes-when-starting-memgraph",level:2}],d={toc:c};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,{groupId:"operating-systems",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Windows Subsystem for Linux (WSL)",value:"wsl"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("h2",{id:"issues-with-loading-memgraph"},"Issues with loading Memgraph"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker load -i memgraph.tar.gz\n")),(0,a.kt)("h3",{id:"error-during-connect-this-error-may-indicate-that-the-docker-daemon-is-not-running"},"Error during connect:",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"h3"},"This error may indicate that the docker daemon is not running.")),(0,a.kt)("p",null,"Run the Docker Desktop application and wait for it to load fully."),(0,a.kt)("h3",{id:"error-response-from-daemon-open-pipedocker_engine_linux-the-system-cannot-find-the-file-specified"},"Error response from daemon:",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"h3"},"open \\\\.\\pipe\\docker_engine_linux: The system cannot find the file specified.")),(0,a.kt)("p",null,"Reload the Docker Desktop application and wait for it to load fully."),(0,a.kt)("h3",{id:"unsupported-os-linux"},"Unsupported os linux"),(0,a.kt)("p",null,"You need to download the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-gb/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package"},"Windows Subsystem for\nLinux"),",\nand enable experimental features in Docker Desktop, under ",(0,a.kt)("em",{parentName:"p"},"Settings")," -> ",(0,a.kt)("em",{parentName:"p"},"Docker\nEngine"),", change ",(0,a.kt)("em",{parentName:"p"},"experimental")," to ",(0,a.kt)("em",{parentName:"p"},"true"),"."),(0,a.kt)("h2",{id:"issues-when-connecting-to-memgraph"},"Issues when connecting to Memgraph"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it memgraph/memgraph-platform\n")),(0,a.kt)("p",null,"While this command will start a Memgraph instance, not publishing the port will\ncause problems when trying to connect to the database via ",(0,a.kt)("strong",{parentName:"p"},"Memgraph Lab")," or\n",(0,a.kt)("strong",{parentName:"p"},"mgconsole"),". To avoid this, you should publish the\ncontainer's port to the host using the ",(0,a.kt)("inlineCode",{parentName:"p"},"-p")," flag and by specifying the port:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it -p 7687:7687 -p 3000:3000 memgraph/memgraph-platform\n")),(0,a.kt)("h2",{id:"issues-with-connecting-mgconsole-to-the-database"},"Issues with connecting ",(0,a.kt)("strong",{parentName:"h2"},"mgconsole")," to the database"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it --entrypoint=mgconsole memgraph/memgraph-platform --host HOST\n")),(0,a.kt)("p",null,"Although unlikely, sometimes there are issues with connecting ",(0,a.kt)("strong",{parentName:"p"},"mgconsole")," to\nthe Docker Container\u2019s IP address because it is running on a custom IP rather\nthan ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),". This problem is most often accompanied with the following\nerror:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"Connection failure: Couldn't connect to 127.0.0.1:7687!\n")),(0,a.kt)("p",null,"To fix this issue, just replace ",(0,a.kt)("inlineCode",{parentName:"p"},"HOST")," from the first command with\n",(0,a.kt)("inlineCode",{parentName:"p"},"host.docker.internal"),". To find out more about networking in Docker, take a\nlook at ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-windows/networking/"},"Networking features in Docker Desktop for Windows")," guide."),(0,a.kt)("h2",{id:"find-the-ip-address-of-a-docker-container"},"Find the IP address of a Docker Container"),(0,a.kt)("p",null,"Although unlikely, some users might experience minor difficulties after the\nDocker installation. Instead of running on ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),", a Docker container for\nMemgraph may be running on a custom IP address. Fortunately, that IP address can\nbe found as follows:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," Determine the ID of the Memgraph Container by issuing the\ncommand ",(0,a.kt)("inlineCode",{parentName:"p"},"docker ps"),". The user should get an output similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'CONTAINER ID    IMAGE       COMMAND                  CREATED\n9397623cd87e    memgraph    "/usr/lib/memgraph/m\u2026"   2 seconds ago\n')),(0,a.kt)("p",null,"At this point, it is important to remember the container ID of the Memgraph\nImage. In our case, that is ",(0,a.kt)("inlineCode",{parentName:"p"},"9397623cd87e"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.")," Use the this ID to retrieve the IP address of the Container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 9397623cd87e\n")),(0,a.kt)("p",null,"The command above will yield the IP address that should be used when connecting\nto Memgraph via ",(0,a.kt)("strong",{parentName:"p"},"Memgraph Lab")," or ",(0,a.kt)("strong",{parentName:"p"},"mgconsole")," as described in\nthe ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.0/connect-to-memgraph"},"querying")," section. Just replace\n",(0,a.kt)("inlineCode",{parentName:"p"},"HOST")," from the following command with the appropriate IP address:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it --entrypoint=mgconsole memgraph/memgraph-platform --host HOST\n"))),(0,a.kt)(i.Z,{value:"wsl",mdxType:"TabItem"},(0,a.kt)("h2",{id:"accessing-files-from-your-windows-system"},"Accessing files from your Windows system"),(0,a.kt)("p",null,"Usually, you can find the Windows users directories in this location:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"/mnt/<drive>/Users/<username>\n")),(0,a.kt)("h2",{id:"unable-to-install-the-memgraph-package-with-dpkg"},"Unable to install the Memgraph package with ",(0,a.kt)("inlineCode",{parentName:"h2"},"dpkg")),(0,a.kt)("p",null,"While running the following ",(0,a.kt)("inlineCode",{parentName:"p"},"dpkg")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dpkg -i /mnt/<drive>/Users/<windows username>/Downloads/memgraph_<version>.deb\n")),(0,a.kt)("p",null,"you may encounter errors that resemble the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"dpkg: error processing package memgraph (--install): dependency problems -\nleaving unconfigured Errors were encountered while processing: memgraph\n")),(0,a.kt)("p",null,"These errors indicate that you don\u2019t have all of the necessary dependencies\ninstalled. To install the missing dependencies and finish the installation,\nissue the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"sudo apt-get install -f\n")),(0,a.kt)("h2",{id:"multiple-notes-when-starting-memgraph"},"Multiple notes when starting Memgraph"),(0,a.kt)("p",null,"When you start a Memgraph instance, you may see the following list of notes in\nyour terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"You are running Memgraph v1.4.0-community\n\nNOTE: Please install networkx to be able to use graph_analyzer module. Using Python:\n3.8.2 (default, Jul 16 2020, 14:00:26)\n[GCC 9.3.0]\n\nNOTE: Please install networkx to be able to use Memgraph NetworkX wrappers. Using Python:\n3.8.2 (default, Jul 16 2020, 14:00:26)\n[GCC 9.3.0]\n\nNOTE: Please install networkx, numpy, scipy to be able to use proxied NetworkX algorithms. E.g., CALL nxalg.pagerank(...).\nUsing Python:\n3.8.2 (default, Jul 16 2020, 14:00:26)\n[GCC 9.3.0]\n\nNOTE: Please install networkx to be able to use wcc module.\nUsing Python:\n3.8.2 (default, Jul 16 2020, 14:00:26)\n[GCC 9.3.0]\n")),(0,a.kt)("p",null,"If you wish to work with built-in NetworkX modules in Memgraph, you need to\ninstall the following Python libraries:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://numpy.org/"},"NumPy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.scipy.org/"},"SciPy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://networkx.org/"},"NetworkX"))),(0,a.kt)("p",null,"For more information on how to install Python libraries in WSL, follow the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/python/web-frameworks#install-python-pip-and-venv"},"Python\ninstallation\nguide"),".\nIf you are not interested in working with query modules that depend on these\nlibraries, you can ignore the warnings."))))}m.isMDXComponent=!0}}]);