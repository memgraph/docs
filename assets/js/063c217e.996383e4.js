"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27561],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return u}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var m=n.createContext({}),l=function(e){var t=n.useContext(m),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(o),u=r,f=d["".concat(m,".").concat(u)]||d[u]||c[u]||a;return o?n.createElement(f,i(i({ref:t},p),{},{components:o})):n.createElement(f,i({ref:t},p))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},55905:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),i=["components"],s={id:"font-awesome-for-node-images",title:"Use Font Awesome icons for node images",sidebar_label:"Use Font Awesome for node images"},m=void 0,l={unversionedId:"how-to-guides/font-awesome-for-node-images",id:"version-2.3.0/how-to-guides/font-awesome-for-node-images",title:"Use Font Awesome icons for node images",description:"Related - Tutorial [![Related - Blog",source:"@site/memgraph_versioned_docs/version-2.3.0/how-to-guides/font-awesome-for-node-images.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/font-awesome-for-node-images",permalink:"/docs/memgraph/how-to-guides/font-awesome-for-node-images",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.0/how-to-guides/font-awesome-for-node-images.md",tags:[],version:"2.3.0",frontMatter:{id:"font-awesome-for-node-images",title:"Use Font Awesome icons for node images",sidebar_label:"Use Font Awesome for node images"},sidebar:"memgraph",previous:{title:"Triggers",permalink:"/docs/memgraph/reference-guide/triggers"},next:{title:"Work with Docker",permalink:"/docs/memgraph/how-to-work-with-docker"}},p={},c=[],d={toc:c};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/tutorials/style-your-graphs-in-memgraph-lab"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge",alt:"Related - Tutorial"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/how-to-style-your-graphs-in-memgraph-lab"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Blog%20post&color=9C59DB&style=for-the-badge",alt:"Related - Blog\nPost"}))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://fontawesome.com/"},"Font Awesome")," is a popular icon library. If you ever\ntried to use a font awesome icon as a background image for a node, you might\nhave noticed you were not able to do that by using the icon directly. Memgraph\nLab doesn't support ",(0,a.kt)("inlineCode",{parentName:"p"},"SVG")," format at this time, but it supports ",(0,a.kt)("inlineCode",{parentName:"p"},"PNG"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"JPEG"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"GIF")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"WEBP")," formats. Here is a workaround for this problem."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Find the Font Awesome icon that you want to convert to PNG. Go to ",(0,a.kt)("a",{parentName:"li",href:"https://fontawesome.com/icons/"},"Font\nAwesome")," website and locate the icon that you\nwant to use as a node background and download it as SVG file.")),(0,a.kt)("img",{src:o(51585).Z,className:"imgBorder"}),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Convert SVG file to PNG with your favorite image editing program, or you can\nuse one of the dozen online services for file conversion. ")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You can use programs such as ",(0,a.kt)("a",{parentName:"p",href:"https://www.gimp.org/"},"Gimp")," or\n",(0,a.kt)("a",{parentName:"p",href:"https://inkscape.org/"},"Inkscape")," to convert SVG to PNG. "))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Upload PNG file to a web server so that you can set it for node background.\nIf you are using an image hosting service, make a note of the URL. Some of those\nservices use URLs unrelated to the image name and are hard to come by at a\nlater time.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Edit the code of the Graph Style Editor in Memgraph Lab by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"image-url")," property to the ",(0,a.kt)("inlineCode",{parentName:"p"},"@NodeStyle")," class. Here is an example:  "))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'image-url: "https://i.imgur.com/bLF8qWQ.png"\n')),(0,a.kt)("p",null,"Your ",(0,a.kt)("inlineCode",{parentName:"p"},"@NodeStyle")," block of code should look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'@NodeStyle {\n  size: 6\n  color: #DD2222\n  border-width: 0.6\n  border-color: #1d1d1d\n  font-size: 3\n  image-url: "https://i.imgur.com/bLF8qWQ.png"\n}\n')),(0,a.kt)("p",null,"You can look at ",(0,a.kt)("a",{parentName:"p",href:"/memgraph-lab/style-script/gss-nodestyle-directive#image-url-string"},"Graph Style Script @NodeStyle directive\nproperties"),"\nfor additional info on the syntax. "),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Apply the style and review changes.")),(0,a.kt)("img",{src:o(96713).Z,className:"imgBorder"}))}u.isMDXComponent=!0},51585:function(e,t,o){t.Z=o.p+"assets/images/font-awesome-locate-icon-442ffab31aeb6947abcbb224a144d7f8.png"},96713:function(e,t,o){t.Z=o.p+"assets/images/font-awesome-node-style-c64d6fdff1db0392288d6c3e41420819.png"}}]);