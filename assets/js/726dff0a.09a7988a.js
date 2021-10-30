"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7649],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return u}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(r),u=o,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||a;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59275:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return m},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=r(46723),l=r(93537),p=["components"],m={id:"python-modules",title:"Python module errors",sidebar_label:"Python modules"},s=void 0,c={unversionedId:"memgraph/python-modules",id:"memgraph/python-modules",isDocsHomePage:!1,title:"Python module errors",description:"Errors",source:"@site/errors/memgraph/python-modules.md",sourceDirName:"memgraph",slug:"/memgraph/python-modules",permalink:"/docs/errors/memgraph/python-modules",editUrl:"https://github.com/memgraph/docs/tree/master/errors/memgraph/python-modules.md",tags:[],version:"current",frontMatter:{id:"python-modules",title:"Python module errors",sidebar_label:"Python modules"},sidebar:"errors",previous:{title:"Ports",permalink:"/docs/errors/memgraph/ports"},next:{title:"Replication",permalink:"/docs/errors/memgraph/replication"}},d=[{value:"Errors",id:"errors",children:[],level:2},{value:"How to install Python packages globally?",id:"error-1",children:[],level:2}],u={toc:d};function h(e){var t=e.components,r=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.ZP,{mdxType:"Help"}),(0,a.kt)("h2",{id:"errors"},"Errors"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#error-1"},"Unable to load support for embedded Python: {}. For more details, visit:\nmemgr.ph/python.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#error-1"},"Unable to load support for embedded Python: missing directory {}. For more\ndetails, visit: memgr.ph/python.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#error-1"},"Unable to load support for embedded Python: {}. For more details, visit:\nmemgr.ph/python."))),(0,a.kt)("h2",{id:"error-1"},"How to install Python packages globally?"),(0,a.kt)("p",null,"The Python packages need to be installed globally for Memgraph to access them.\nTo install a Python module globally, you will need to run it with the following\ncommand:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"sudo pip3 install <PACKAGE_NAME>\n")),(0,a.kt)("p",null,"If this approach doesn't work, try to install a pre-compiled package using\n",(0,a.kt)("inlineCode",{parentName:"p"},"apt-get")," if available."),(0,a.kt)(l.ZP,{mdxType:"SubmitError"}))}h.isMDXComponent=!0},46723:function(e,t,r){r.d(t,{ZP:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={toc:[]};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you are having trouble dealing with an error, please let us know on the ",(0,a.kt)("a",{href:"https://discourse.memgraph.com",target:"_blank"},"Community Forum"),"."))))}p.isMDXComponent=!0},93537:function(e,t,r){r.d(t,{ZP:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={toc:[]};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you weren't able to find the error, please submit it through a ",(0,a.kt)("a",{href:"https://support.memgraph.com",target:"_blank"},"Support Ticket")," so we can look into it and get back to you."))))}p.isMDXComponent=!0}}]);