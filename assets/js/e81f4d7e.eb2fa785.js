"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34401],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var g=r.createContext({}),m=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(g.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,g=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=m(n),p=i,d=u["".concat(g,".").concat(p)]||u[p]||s[p]||c;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,a=new Array(c);a[0]=u;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var m=2;m<c;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},44996:function(e,t,n){n.d(t,{C:function(){return c},Z:function(){return a}});var r=n(52263),i=n(13919);function c(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var c=void 0===r?{}:r,a=c.forcePrependBaseUrl,o=void 0!==a&&a,g=c.absolute,m=void 0!==g&&g;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(o)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return m?e+l:l}(c,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},82924:function(e,t,n){var r=n(67294).createContext(void 0);t.Z=r},85350:function(e,t,n){var r=n(67294),i=n(82924);t.Z=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},53272:function(e,t,n){var r=n(67294),i=n(85350);t.Z=function(e){var t=e.className,n=e.alt,c=e.lightImageSrc,a=e.darkImageSrc,o=(0,i.Z)().isDarkTheme;return r.createElement("img",{className:t,alt:n,src:o?a:c})}},19575:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294),i={connectButton:"connectButton_2SLc",connectButton__imgActive:"connectButton__imgActive_3K6i",connectButton__img:"connectButton__img_1287"},c=n(53272);function a(e){var t=e.title,n=e.url,a=e.img,o=e.imgActive,g=e.imgDark,m=e.imgDarkActive;return r.createElement("a",{href:n,className:i.connectButton,style:i},r.createElement(c.Z,{className:i.connectButton__img,lightImageSrc:a,darkImageSrc:g}),r.createElement(c.Z,{lightImageSrc:o,darkImageSrc:m,alt:t,className:i.connectButton__imgActive}))}},18475:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294),i="mgContainer_K0l8",c="mgContainer__small_11YL";function a(e){var t=e.size,n=void 0===t?"default":t,a=e.children,o=null;return"small"===n&&(o=c),r.createElement("div",{className:i+" "+o},a)}},48804:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(87462),i=n(63366),c=(n(67294),n(3905)),a=n(18475),o=n(45255),g=n(44996),m=n(19575),l=["components"],s={id:"connect-to-memgraph",title:"Connect to Memgraph",sidebar_label:"Connection methods",slug:"/connection-methods"},u=void 0,p={unversionedId:"connect-to-memgraph/connect-to-memgraph",id:"connect-to-memgraph/connect-to-memgraph",isDocsHomePage:!1,title:"Connect to Memgraph",description:"export default function ConnectToMemgraph() {",source:"@site/docs/connect-to-memgraph/connect-to-memgraph.mdx",sourceDirName:"connect-to-memgraph",slug:"/connection-methods",permalink:"/memgraph/next/connection-methods",editUrl:"https://github.com/memgraph/docs/tree/master/docs/connect-to-memgraph/connect-to-memgraph.mdx",version:"current",frontMatter:{id:"connect-to-memgraph",title:"Connect to Memgraph",sidebar_label:"Connection methods",slug:"/connection-methods"},sidebar:"memgraph",previous:{title:"Overview",permalink:"/memgraph/next/connect-to-memgraph"},next:{title:"mgconsole",permalink:"/memgraph/next/connect-to-memgraph/methods/mgconsole"}},d=[],v={toc:d},h=function(){var e="img/connect-page/",t=[{title:"Python",img:(0,g.Z)(e+"python-unselected.png"),imgActive:(0,g.Z)(e+"python-selected.png"),imgDark:(0,g.Z)(e+"python-unselected.png"),imgDarkActive:(0,g.Z)(e+"python-selected.png"),url:(0,g.Z)("memgraph/getting-started/connecting-applications/python")},{title:"C#",img:(0,g.Z)(e+"csharp-unselected.png"),imgActive:(0,g.Z)(e+"csharp-selected.png"),imgDark:(0,g.Z)(e+"csharp-unselected.png"),imgDarkActive:(0,g.Z)(e+"csharp-selected.png"),url:(0,g.Z)("memgraph/getting-started/connecting-applications/c-sharp")},{title:"Rust",img:(0,g.Z)(e+"rust-unselected.png"),imgActive:(0,g.Z)(e+"rust-selected.png"),imgDark:(0,g.Z)(e+"dark/rust-unselected-dm.svg"),imgDarkActive:(0,g.Z)(e+"dark/rust-selected-dm.png"),url:(0,g.Z)("memgraph/getting-started/connecting-applications/rust")},{title:"Java",img:(0,g.Z)(e+"java-unselected.png"),imgActive:(0,g.Z)(e+"java-selected.png"),imgDark:(0,g.Z)(e+"dark/java-unselected-dm.svg"),imgDarkActive:(0,g.Z)(e+"dark/java-selected-dm.svg"),url:(0,g.Z)("memgraph/getting-started/connecting-applications/java")},{title:"GoLang",img:(0,g.Z)(e+"golang-unselected.png"),imgActive:(0,g.Z)(e+"golang-selected.png"),imgDark:(0,g.Z)(e+"dark/golang-unselected-dm.png"),imgDarkActive:(0,g.Z)(e+"dark/golang-selected-dm.png"),url:(0,g.Z)("memgraph/getting-started/connecting-applications/go")},{title:"PHP",img:(0,g.Z)(e+"php-unselected.png"),imgActive:(0,g.Z)(e+"php-selected.png"),imgDark:(0,g.Z)(e+"dark/php-unselected-dm.png"),imgDarkActive:(0,g.Z)(e+"dark/php-selected-dm.png"),url:(0,g.Z)("memgraph/getting-started/connecting-applications/php")},{title:"Ruby",img:(0,g.Z)(e+"ruby-unselected.png"),imgActive:(0,g.Z)(e+"ruby-selected.png"),imgDark:(0,g.Z)(e+"dark/ruby-unselected-dm.png"),imgDarkActive:(0,g.Z)(e+"dark/ruby-selected-dm.svg"),url:"https://github.com/neo4jrb/neo4j"},{title:"JavaScript",img:(0,g.Z)(e+"JS-unselected.png"),imgActive:(0,g.Z)(e+"JS-selected.svg"),imgDark:(0,g.Z)(e+"JS-unselected.png"),imgDarkActive:(0,g.Z)(e+"dark/JS-selected-dm.svg"),url:(0,g.Z)("memgraph/getting-started/connecting-applications/javascript")},{title:"Haskell",img:(0,g.Z)(e+"haskell-unselected.svg"),imgActive:(0,g.Z)(e+"haskell-selected.svg"),imgDark:(0,g.Z)(e+"dark/haskell-unselected-dm.svg"),imgDarkActive:(0,g.Z)(e+"haskell-selected.svg"),url:"https://github.com/zmactep/hasbolt"}],n={title:"MemgraphLab",img:(0,g.Z)(e+"lab-unselected.svg"),imgActive:(0,g.Z)(e+"lab-selected.svg"),imgDark:(0,g.Z)(e+"dark/lab-unselected-dm.svg"),imgDarkActive:(0,g.Z)(e+"dark/lab-selected-dm.svg"),url:(0,g.Z)("memgraph-lab/")},r={title:"mgconsole",img:(0,g.Z)(e+"mgconsole-unselected.svg"),imgActive:(0,g.Z)(e+"mgconsole-selected.svg"),imgDark:(0,g.Z)(e+"dark/mgconsole-unselected-dm.svg"),imgDarkActive:(0,g.Z)(e+"dark/mgconsole-selected-dm.svg"),url:(0,g.Z)("memgraph/getting-started/querying#querying-using-console")};return(0,c.kt)(a.Z,{size:"small"},(0,c.kt)("div",{className:o.Z.connectToMemgraph},(0,c.kt)("section",null,(0,c.kt)("h2",null,"Connect via Driver"),(0,c.kt)("p",null,"Connect to Memgraph from your favorite programming language. We support a wide range of drivers."),(0,c.kt)("div",{className:o.Z.connectToMemgraph__grid},t.map((function(e,t){return(0,c.kt)(m.Z,{key:t,url:e.url,title:e.title,img:e.img,imgActive:e.imgActive,imgDark:e.imgDark,imgDarkActive:e.imgDarkActive})})))),(0,c.kt)("section",null,(0,c.kt)("h2",null,"Connect via Memgraph Lab"),(0,c.kt)("p",null,"Memgraph Lab is an interactive application for querying and visualizing your graphs."),(0,c.kt)(m.Z,{title:n.title,url:n.url,img:n.img,imgActive:n.imgActive,imgDark:n.imgDark,imgDarkActive:n.imgDarkActive})),(0,c.kt)("section",null,(0,c.kt)("h2",null,"Connect via mgconsole"),(0,c.kt)("p",null,"A command-line interface for querying Memgraph."),(0,c.kt)(m.Z,{title:r.title,url:r.url,img:r.img,imgActive:r.imgActive,imgDark:r.imgDark,imgDarkActive:r.imgDarkActive}))))};function f(e){var t=e.components,n=(0,i.Z)(e,l);return(0,c.kt)(h,(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}))}f.isMDXComponent=!0},45255:function(e,t){t.Z={connectToMemgraph:"connectToMemgraph_y18K",connectToMemgraph__grid:"connectToMemgraph__grid_2WPe"}}}]);