"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||g[d]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={id:"graph-style-script-language",title:"Graph Style Script language",sidebar_label:"Graph Style Script language",slug:"/graph-style-script-language"},l=void 0,o={unversionedId:"style-script/graph-style-script-language",id:"style-script/graph-style-script-language",title:"Graph Style Script language",description:"Related - Tutorial",source:"@site/lab/style-script/overview.md",sourceDirName:"style-script",slug:"/graph-style-script-language",permalink:"/docs/memgraph-lab/graph-style-script-language",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/lab/style-script/overview.md",tags:[],version:"current",frontMatter:{id:"graph-style-script-language",title:"Graph Style Script language",sidebar_label:"Graph Style Script language",slug:"/graph-style-script-language"},sidebar:"lab",previous:{title:"User manual",permalink:"/docs/memgraph-lab/user-manual"},next:{title:"GSS reference guide",permalink:"/docs/memgraph-lab/style-script/reference-guide"}},s={},p=[{value:"Graph example",id:"graph-example",level:2},{value:"Setting graph labels",id:"setting-graph-labels",level:2},{value:"Setting node images",id:"setting-node-images",level:2},{value:"Highlighting interesting nodes",id:"highlighting-interesting-nodes",level:2}],c={toc:p};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/memgraph/tutorials/style-your-graphs-in-memgraph-lab"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge",alt:"Related - Tutorial"}))),(0,r.kt)("p",null,"This guide will show you how to easily get started with the Graph Style Script\nlanguage. GSS is a language for customizing the visual display of graphs. For a\ncomplete list of available features consult the ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/style-script/reference-guide"},"Style script\nreference guide"),"."),(0,r.kt)("h2",{id:"graph-example"},"Graph example"),(0,r.kt)("p",null,"In this guide, we will use an example graph with European countries and cities.\nThe data can be found\n",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph/tutorials-overview/backpacking-through-europe"},"here"),".\nCountries have the label ",(0,r.kt)("inlineCode",{parentName:"p"},"Country"),", while cities have the label ",(0,r.kt)("inlineCode",{parentName:"p"},"City"),". All\nnodes have the property ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),". Cities have many additional properties,\nincluding ",(0,r.kt)("inlineCode",{parentName:"p"},"country")," (containing country) and ",(0,r.kt)("inlineCode",{parentName:"p"},"drinks_USD")," (average drink price)."),(0,r.kt)("h2",{id:"setting-graph-labels"},"Setting graph labels"),(0,r.kt)("p",null,"We want to label country nodes with country names, and city nodes with city\nnames and containing country names. To achieve that we can use two directives.\nThe first one selects countries and the second one selects cities."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'@NodeStyle HasLabel(node, "Country") {\n  label: Property(node, "name")\n}\n\n@NodeStyle HasLabel(node, "City") {\n    label: Format("{cityName}, {countryName}",\n                  Property(node, "name"),\n                  Property(node, "country"))\n}\n')),(0,r.kt)("p",null,"In the case of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/style-script/gss-functions#formatformatstring-val1-val2"},(0,r.kt)("inlineCode",{parentName:"a"},"Format")),"\nfunction, content inside the curly braces is ignored but can be helpful for\nclarity."),(0,r.kt)("h2",{id:"setting-node-images"},"Setting node images"),(0,r.kt)("p",null,"It would be nice to display flags in the country nodes. This can be achieved\nusing URLs of flag images. There is a website that hosts many world flags so we\ncan use images from ",(0,r.kt)("a",{parentName:"p",href:"https://cdn.countryflags.com"},"there"),". Their API expects a\ncountry name as a part of the URL path so we will make the following directive."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'@NodeStyle HasLabel(node, "Country") {\n  image-url: Format("https://cdn.countryflags.com/thumbs/{}/flag-800.png",\n                    LowerCase(Property(node, "name")))\n}\n')),(0,r.kt)("p",null,"Unfortunately, this won't work for all countries. Flags for England and Scotland\ncannot be found on the website because they aren't real countries. So we can get\naround that by providing custom directives below the general one above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'@NodeStyle Equals(Property(node, "name"), "England") {\n   image-url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png"\n}\n\n@NodeStyle Equals(Property(node, "name"), "Scotland") {\n  image-url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1200px-Flag_of_Scotland.svg.png"\n }\n')),(0,r.kt)("p",null,"Also, URLs for a country name with whitespace inside them don't so we also have\nto provide custom URLs for the Czech Republic and Bosnia and Herzegovina."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'@NodeStyle Equals(Property(node, "name"), "Bosnia and Herzegovina") {\n   image-url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1200px-Flag_of_Bosnia_and_Herzegovina.svg.png"\n }\n\n @NodeStyle Equals(Property(node, "name"), "Czech Republic") {\n   image-url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/2560px-Flag_of_the_Czech_Republic.svg.png"\n }\n')),(0,r.kt)("p",null,"Now all the country nodes have their flags displayed."),(0,r.kt)("h2",{id:"highlighting-interesting-nodes"},"Highlighting interesting nodes"),(0,r.kt)("p",null,"We can highlight nodes with low drink prices in the following way. We want to\nuse a beer image and a bigger size along with a red shadow."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'@NodeStyle And()\n     HasLabel(node, "City"),\n     Less(Property(node, "drinks_USD"), 5)) {\n  size: 50\n  image-url: "https://www.sciencenews.org/wp-content/uploads/2020/05/050620_mt_beer_feat-1028x579.jpg"\n  shadow-color: red\n }\n')))}g.isMDXComponent=!0}}]);