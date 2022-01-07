"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40119],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),h=r,d=m["".concat(c,".").concat(h)]||m[h]||p[h]||o;return t?a.createElement(d,i(i({ref:n},u),{},{components:t})):a.createElement(d,i({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93314:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],s={id:"telecommunication",title:"Telecommunication",sidebar_label:"Telecommunication"},c=void 0,l={unversionedId:"use-cases/telecommunication",id:"use-cases/telecommunication",title:"Telecommunication",description:"The graph model is a natural way to represent a telecommunication network, a",source:"@site/mage/use-cases/telecommunication.md",sourceDirName:"use-cases",slug:"/use-cases/telecommunication",permalink:"/docs/mage/use-cases/telecommunication",editUrl:"https://github.com/memgraph/docs/tree/master/mage/use-cases/telecommunication.md",tags:[],version:"current",frontMatter:{id:"telecommunication",title:"Telecommunication",sidebar_label:"Telecommunication"},sidebar:"mage",previous:{title:"Social Media",permalink:"/docs/mage/use-cases/social-media"},next:{title:"Transportation",permalink:"/docs/mage/use-cases/transportation"}},u=[{value:"Network design using graph analytics",id:"network-design-using-graph-analytics",children:[],level:2},{value:"Organizing antennas",id:"organizing-antennas",children:[],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2}],p={toc:u};function m(e){var n=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The graph model is a natural way to represent a telecommunication network, a\ngroup of communication devices and structure that supports the routing and\ntransmission of information. Base stations and cell phones are part of that\nnetwork. Naturally, nodes represent base stations, and edges connect those whose\nsignals could interfere. These connections can contain additional information, a\nweight of an interference."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"memgraph-graph-algorithm-applications-telecommunications",src:t(50946).Z})),(0,o.kt)("h2",{id:"network-design-using-graph-analytics"},"Network design using graph analytics"),(0,o.kt)("p",null,"Modern communication networks are large, dynamic, complex, and increasingly use\nvirtualized network infrastructure. To deploy, maintain, and troubleshoot such\nnetworks, it is essential to understand how network elements such as servers,\nswitches, virtual machines, and virtual network functions are connected to one\nanother. This understanding can allow us to discover the most appropriate and\nefficient communication paths between them. "),(0,o.kt)("p",null,"By modeling telecommunications networks as graphs, we are able to use standard\ngraph theory algorithms to analyze the interaction between specific network\nelements. Complex simulations can be reduced to simple algorithms which can aid\nin risk management and designing failsafes."),(0,o.kt)("h2",{id:"organizing-antennas"},"Organizing antennas"),(0,o.kt)("p",null,"When making a call, the phone must have an established connection with the base\nstation. The antenna on the base station has a particular signal strength that\ndecreases with distance, so the phone should be connected to the base station\nnearby to provide the required quality. The major challenge is to ensure the\nquality of calls on the move. If the phone moves away from the base station, the\nsignal diminishes, and the phone disconnects. To avoid call interruptions, the\nphone should find a new base station, the closest one at that moment, and\nconnect to it."),(0,o.kt)("p",null,"Code planning aims to assign codes and ensure that connected base stations are\ngiven different codes. In graph theory terminology, codes are equivalent to\ncolors, and therefore code planning can be reformulated as a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Graph_coloring"},"graph\ncoloring")," problem."),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"This text is a ",(0,o.kt)("strong",{parentName:"p"},"summary")," of one area that fits perfectly with the application\nof graphs. Therefore, we would like to have you with us when ",(0,o.kt)("strong",{parentName:"p"},"implementing"),"\nsome of these solutions. Share ",(0,o.kt)("strong",{parentName:"p"},"opinions"),", ",(0,o.kt)("strong",{parentName:"p"},"experiences")," and ",(0,o.kt)("strong",{parentName:"p"},"problems"),"\nyou encounter when working with ",(0,o.kt)("strong",{parentName:"p"},"Memgraph")," on our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/memgraph"},"Discord\nserver"),". We are here for you and we will help you\nalong the way."))}m.isMDXComponent=!0},50946:function(e,n,t){n.Z=t.p+"assets/images/memgraph-graph-algorithm-applications-telecommunications-007c932b3eb27a0734ae807dca1bf4ef.png"}}]);