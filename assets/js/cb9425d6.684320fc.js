"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30741],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92569:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return h},default:function(){return v}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=r(46723),l=r(55064),u=r(58215),s=r(93537),c=["components"],p={id:"ports",title:"Port errors",sidebar_label:"Ports"},m=void 0,d={unversionedId:"memgraph/ports",id:"memgraph/ports",isDocsHomePage:!1,title:"Port errors",description:"Errors",source:"@site/errors/memgraph/ports.md",sourceDirName:"memgraph",slug:"/memgraph/ports",permalink:"/docs/errors/memgraph/ports",editUrl:"https://github.com/memgraph/docs/tree/master/errors/memgraph/ports.md",tags:[],version:"current",frontMatter:{id:"ports",title:"Port errors",sidebar_label:"Ports"},sidebar:"errors",previous:{title:"Modules",permalink:"/docs/errors/memgraph/modules"},next:{title:"Python modules",permalink:"/docs/errors/memgraph/python-modules"}},h=[{value:"Errors",id:"errors",children:[],level:2},{value:"What port is Memgraph running on?",id:"error-1",children:[],level:2},{value:"How to change the port?",id:"how-to-change-the-port",children:[],level:2},{value:"What is the valid range for choosing a port?",id:"error-2",children:[],level:2}],f={toc:h};function v(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.ZP,{mdxType:"Help"}),(0,a.kt)("h2",{id:"errors"},"Errors"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#error-1"},"Invalid port number {}. For more details, visit: memgr.ph/ports.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#error-2"},"Invalid port number {}. The port number must be a positive integer. For more\ndetails, visit: memgr.ph/ports.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#error-2"},"Invalid port number {}. The port number exceedes the maximum possible size.\nFor more details, visit: memgr.ph/ports."))),(0,a.kt)("h2",{id:"error-1"},"What port is Memgraph running on?"),(0,a.kt)("p",null,"The default port Memgraph uses is ",(0,a.kt)("inlineCode",{parentName:"p"},"7687")," is not otherwise specified."),(0,a.kt)("h2",{id:"how-to-change-the-port"},"How to change the port?"),(0,a.kt)("p",null,"You can change the default port using the configuration settings."),(0,a.kt)(l.Z,{groupId:"operating-systems",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"docker",mdxType:"TabItem"},(0,a.kt)("p",null,"The Memgraph configuration is available in Docker's named volume ",(0,a.kt)("inlineCode",{parentName:"p"},"mg_etc"),". On\nLinux systems, it should be in\n",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/volumes/mg_etc/_data/memgraph.conf"),". Keep in mind that this way\nof specifying configuration options is only valid if Memgraph was started ",(0,a.kt)("a",{parentName:"p",href:"#installation-guide"},"using\nvolumes"),". volumes](#named-volumes)."),(0,a.kt)("p",null,"When using Docker, you can also specify the configuration options in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker\nrun")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -p 7687:7687 memgraph --bolt-port=7687\n"))),(0,a.kt)(u.Z,{value:"linux",mdxType:"TabItem"},(0,a.kt)("p",null,"The Memgraph configuration is available in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),". If the\nconfiguration file is altered, Memgraph needs to be restarted."))),(0,a.kt)("p",null,"To learn about all the configuration options, check out the [Reference To learn\nabout all the configuration options, check out the ",(0,a.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/configuration"},"Reference\nguide"),"."),(0,a.kt)("h2",{id:"error-2"},"What is the valid range for choosing a port?"),(0,a.kt)("p",null,"A port number is a 16-bit unsigned integer, thus ranging from 0 to 65535. Ports\n0 through 1023 are defined as well-known ports. Registered ports are from 1024\nto 49151. The remainder of the ports from 49152 to 65535 can be used dynamically\nby applications."),(0,a.kt)(s.ZP,{mdxType:"SubmitError"}))}v.isMDXComponent=!0},46723:function(e,t,r){r.d(t,{ZP:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={toc:[]};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you are having trouble dealing with an error, please let us know on the ",(0,a.kt)("a",{href:"https://discourse.memgraph.com",target:"_blank"},"Community Forum"),"."))))}u.isMDXComponent=!0},93537:function(e,t,r){r.d(t,{ZP:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={toc:[]};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you weren't able to find the error, please submit it through a ",(0,a.kt)("a",{href:"https://support.memgraph.com",target:"_blank"},"Support Ticket")," so we can look into it and get back to you."))))}u.isMDXComponent=!0},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(87462),o=r(67294),a=r(72389),i=r(79443);var l=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=r(83039),s=r(86010),c="tabItem_1uMI";function p(e){var t,r,n,a=e.lazy,i=e.block,p=e.defaultValue,m=e.values,d=e.groupId,h=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,u.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(n=f[0])?void 0:n.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),y=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,o.useState)(b),T=N[0],x=N[1],O=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var P=y[d];null!=P&&P!==T&&v.some((function(e){return e.value===P}))&&x(P)}var M=function(e){var t=e.currentTarget,r=O.indexOf(t),n=v[r].value;n!==T&&(E(t),x(n),null!=d&&w(d,n))},C=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;r=O[n]||O[0];break;case"ArrowLeft":var o=O.indexOf(e.currentTarget)-1;r=O[o]||O[O.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},h)},v.map((function(e){var t=e.value,r=e.label;return o.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":T===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:M,onClick:M},null!=r?r:t)}))),a?(0,o.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,a.Z)();return o.createElement(p,(0,n.Z)({key:String(t)},e))}},79443:function(e,t,r){var n=(0,r(67294).createContext)(void 0);t.Z=n}}]);