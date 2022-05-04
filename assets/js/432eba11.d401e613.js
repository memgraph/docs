"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5245],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(t),h=r,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||o;return t?a.createElement(d,l(l({ref:n},p),{},{components:t})):a.createElement(d,l({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(87462),r=t(67294),o=t(72389),l=t(5979),i=t(86010),s="tabItem_LplD";function u(e){var n,t,o,u=e.lazy,p=e.block,c=e.defaultValue,m=e.values,h=e.groupId,d=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,l.lx)(f,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(n=null!=c?c:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=g[0])?void 0:o.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,l.UB)(),y=v.tabGroupChoices,w=v.setTabGroupChoices,N=(0,r.useState)(k),x=N[0],T=N[1],O=[],I=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var C=y[h];null!=C&&C!==x&&f.some((function(e){return e.value===C}))&&T(C)}var P=function(e){var n=e.currentTarget,t=O.indexOf(n),a=f[t].value;a!==x&&(I(n),T(a),null!=h&&w(h,a))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;t=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;t=O[r]||O[O.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},d)},f.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return O.push(e)},onKeyDown:E,onFocus:P,onClick:P},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),u?(0,r.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function p(e){var n=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},23050:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return h}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),l=t(9877),i=t(58215),s=["components"],u={id:"linux-installation-troubleshooting",title:"Troubleshooting installation on Linux",sidebar_label:"Installation troubleshooting",slug:"/linux-installation-troubleshooting",pagination_prev:"installation/overview",pagination_next:"connect-to-memgraph/overview"},p=void 0,c={unversionedId:"installation/linux/linux-installation-troubleshooting",id:"version-2.3.0/installation/linux/linux-installation-troubleshooting",title:"Troubleshooting installation on Linux",description:"<Tabs",source:"@site/memgraph_versioned_docs/version-2.3.0/installation/linux/linux-installation-troubleshooting.md",sourceDirName:"installation/linux",slug:"/linux-installation-troubleshooting",permalink:"/docs/memgraph/linux-installation-troubleshooting",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.0/installation/linux/linux-installation-troubleshooting.md",tags:[],version:"2.3.0",frontMatter:{id:"linux-installation-troubleshooting",title:"Troubleshooting installation on Linux",sidebar_label:"Installation troubleshooting",slug:"/linux-installation-troubleshooting",pagination_prev:"installation/overview",pagination_next:"connect-to-memgraph/overview"},sidebar:"memgraph",previous:{title:"Install Memgraph overview",permalink:"/docs/memgraph/installation"},next:{title:"Connection methods overview",permalink:"/docs/memgraph/connect-to-memgraph"}},m={},h=[{value:"Issues when connecting to Memgraph",id:"issues-when-connecting-to-memgraph",level:2},{value:"Find the IP address of a Docker Container",id:"find-the-ip-address-of-a-docker-container",level:2},{value:"Unable to install the Memgraph package with <code>dpkg</code>",id:"unable-to-install-the-memgraph-package-with-dpkg",level:2},{value:"Multiple notes when starting Memgraph",id:"multiple-notes-when-starting-memgraph",level:2}],d={toc:h};function g(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{groupId:"operating-systems",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Ubuntu/Debian",value:"debian"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,o.kt)("h2",{id:"issues-when-connecting-to-memgraph"},"Issues when connecting to Memgraph"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it memgraph/memgraph-platform\n")),(0,o.kt)("p",null,"While this command will start a Memgraph instance, not publishing the port will\ncause problems when trying to connect to the database via ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab")," or\n",(0,o.kt)("strong",{parentName:"p"},"mgconsole"),". To avoid this, you should publish the\ncontainer's port to the host using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-p")," flag and by specifying the port:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 memgraph/memgraph-platform\n")),(0,o.kt)("h2",{id:"find-the-ip-address-of-a-docker-container"},"Find the IP address of a Docker Container"),(0,o.kt)("p",null,"Although unlikely, some users might experience minor difficulties after the\nDocker installation. Instead of running on ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),", a Docker container for\nMemgraph may be running on a custom IP address. Fortunately, that IP address can\nbe found as follows:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Determine the ID of the Memgraph Container by issuing the\ncommand ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps"),". The user should get an output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'CONTAINER ID    IMAGE       COMMAND                  CREATED\n9397623cd87e    memgraph    "/usr/lib/memgraph/m\u2026"   2 seconds ago\n')),(0,o.kt)("p",null,"At this point, it is important to remember the container ID of the Memgraph\nImage. In our case, that is ",(0,o.kt)("inlineCode",{parentName:"p"},"9397623cd87e"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Use the this ID to retrieve the IP address of the Container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' 9397623cd87e\n")),(0,o.kt)("p",null,"The command above will yield the IP address that should be used when connecting\nto Memgraph via ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab")," or ",(0,o.kt)("strong",{parentName:"p"},"mgconsole")," as described in\nthe ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/connect-to-memgraph"},"querying")," section. Just replace\n",(0,o.kt)("inlineCode",{parentName:"p"},"HOST")," from the following command with the appropriate IP address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it --entrypoint=mgconsole memgraph/memgraph-platform --host HOST\n"))),(0,o.kt)(i.Z,{value:"debian",mdxType:"TabItem"},(0,o.kt)("h2",{id:"unable-to-install-the-memgraph-package-with-dpkg"},"Unable to install the Memgraph package with ",(0,o.kt)("inlineCode",{parentName:"h2"},"dpkg")),(0,o.kt)("p",null,"While running the following ",(0,o.kt)("inlineCode",{parentName:"p"},"dpkg")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dpkg -i /path-to/memgraph_<version>.deb\n")),(0,o.kt)("p",null,"you may encounter errors that resemble the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"dpkg: error processing package memgraph (--install): dependency problems -\nleaving unconfigured Errors were encountered while processing: memgraph\n")),(0,o.kt)("p",null,"These errors indicate that you don\u2019t have all of the necessary dependencies\ninstalled. To install the missing dependencies and finish the installation,\nissue the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"sudo apt-get install -f\n")),(0,o.kt)("h2",{id:"multiple-notes-when-starting-memgraph"},"Multiple notes when starting Memgraph"),(0,o.kt)("p",null,"When you start a Memgraph instance, you may see the following list of notes in\nyour terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"You are running Memgraph v1.4.0-community\n\nNOTE: Please install networkx to be able to use graph_analyzer module. Using Python:\n3.8.2 (default, Jul 16 2020, 14:00:26)\n[GCC 9.3.0]\n\nNOTE: Please install networkx to be able to use Memgraph NetworkX wrappers. Using Python:\n3.8.2 (default, Jul 16 2020, 14:00:26)\n[GCC 9.3.0]\n\nNOTE: Please install networkx, numpy, scipy to be able to use proxied NetworkX algorithms. E.g., CALL nxalg.pagerank(...).\nUsing Python:\n3.8.2 (default, Jul 16 2020, 14:00:26)\n[GCC 9.3.0]\n\nNOTE: Please install networkx to be able to use wcc module.\nUsing Python:\n3.8.2 (default, Jul 16 2020, 14:00:26)\n[GCC 9.3.0]\n")),(0,o.kt)("p",null,"If you wish to work with built-in NetworkX modules in Memgraph, you need to\ninstall the following Python libraries:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://numpy.org/"},"NumPy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.scipy.org/"},"SciPy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://networkx.org/"},"NetworkX"))),(0,o.kt)("p",null,"For more information on how to install Python libraries in Linux, follow the\n",(0,o.kt)("a",{parentName:"p",href:"https://packaging.python.org/tutorials/installing-packages/"},"Installing Packages\nguide"),". If you are\nnot interested in working with query modules that depend on these libraries, you\ncan ignore the warnings."))))}g.isMDXComponent=!0}}]);