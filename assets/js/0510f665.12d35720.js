"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47239],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),g=r,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||o;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},32753:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={id:"graph-style-script-language",title:"Graph Style Script language",sidebar_label:"Graph Style Script language",slug:"/graph-style-script-language"},i=void 0,l={unversionedId:"style-script/graph-style-script-language",id:"style-script/graph-style-script-language",title:"Graph Style Script language",description:"Related - Tutorial",source:"@site/lab/style-script/overview.md",sourceDirName:"style-script",slug:"/graph-style-script-language",permalink:"/docs/memgraph-lab/graph-style-script-language",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/lab/style-script/overview.md",tags:[],version:"current",frontMatter:{id:"graph-style-script-language",title:"Graph Style Script language",sidebar_label:"Graph Style Script language",slug:"/graph-style-script-language"},sidebar:"lab",previous:{title:"User manual",permalink:"/docs/memgraph-lab/user-manual"},next:{title:"GSS reference guide",permalink:"/docs/memgraph-lab/style-script/reference-guide"}},s={},p=[{value:"Graph example",id:"graph-example",level:2},{value:"Setting graph labels",id:"setting-graph-labels",level:2},{value:"Setting node images",id:"setting-node-images",level:2},{value:"Highlighting interesting nodes",id:"highlighting-interesting-nodes",level:2},{value:"Caching results for faster performance",id:"caching-results-for-faster-performance",level:2}],u={toc:p};function d(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/memgraph/tutorials/style-your-graphs-in-memgraph-lab"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge",alt:"Related - Tutorial"}))),(0,r.kt)("p",null,"This guide will show you how to easily get started with the Graph Style Script\nlanguage. GSS is a language for customizing the visual display of graphs. For a\ncomplete list of available features consult the ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/style-script/reference-guide"},"Style script\nreference guide"),"."),(0,r.kt)("h2",{id:"graph-example"},"Graph example"),(0,r.kt)("p",null,"In this guide, we will use an example graph with European countries and cities.\nThe data can be found\n",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph/tutorials-overview/backpacking-through-europe"},"here"),".\nCountries have the label ",(0,r.kt)("inlineCode",{parentName:"p"},"Country"),", while cities have the label ",(0,r.kt)("inlineCode",{parentName:"p"},"City"),". All\nnodes have the property ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),". Cities have many additional properties,\nincluding ",(0,r.kt)("inlineCode",{parentName:"p"},"country")," (containing country) and ",(0,r.kt)("inlineCode",{parentName:"p"},"drinks_USD")," (average drink price)."),(0,r.kt)("h2",{id:"setting-graph-labels"},"Setting graph labels"),(0,r.kt)("p",null,"We want to label country nodes with country names, and city nodes with city\nnames and containing country names. To achieve that we can use two directives.\nThe first one selects countries and the second one selects cities."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'@NodeStyle HasLabel(node, "Country") {\n  label: Property(node, "name")\n}\n\n@NodeStyle HasLabel(node, "City") {\n    label: Format("{cityName}, {countryName}",\n                  Property(node, "name"),\n                  Property(node, "country"))\n}\n')),(0,r.kt)("p",null,"In the case of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/style-script/gss-functions#formatformatstring-val1-val2"},(0,r.kt)("inlineCode",{parentName:"a"},"Format")),"\nfunction, content inside the curly braces is ignored but can be helpful for\nclarity."),(0,r.kt)("h2",{id:"setting-node-images"},"Setting node images"),(0,r.kt)("p",null,"It would be nice to display flags in the country nodes. This can be achieved\nusing URLs of flag images. There is a website that hosts many world flags so we\ncan use images from ",(0,r.kt)("a",{parentName:"p",href:"https://cdn.countryflags.com"},"there"),". Their API expects a\ncountry name as a part of the URL path so we will make the following directive."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'@NodeStyle HasLabel(node, "Country") {\n  image-url: Format("https://cdn.countryflags.com/thumbs/{}/flag-800.png",\n                    LowerCase(Property(node, "name")))\n}\n')),(0,r.kt)("p",null,"Unfortunately, this won't work for all countries. Flags for England and Scotland\ncannot be found on the website because they aren't real countries. So we can get\naround that by providing custom directives below the general one above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'@NodeStyle Equals(Property(node, "name"), "England") {\n   image-url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png"\n}\n\n@NodeStyle Equals(Property(node, "name"), "Scotland") {\n  image-url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1200px-Flag_of_Scotland.svg.png"\n }\n')),(0,r.kt)("p",null,"Also, URLs for a country name with whitespace inside them don't so we also have\nto provide custom URLs for the Czech Republic and Bosnia and Herzegovina."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'@NodeStyle Equals(Property(node, "name"), "Bosnia and Herzegovina") {\n   image-url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1200px-Flag_of_Bosnia_and_Herzegovina.svg.png"\n }\n\n @NodeStyle Equals(Property(node, "name"), "Czech Republic") {\n   image-url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/2560px-Flag_of_the_Czech_Republic.svg.png"\n }\n')),(0,r.kt)("p",null,"Now all the country nodes have their flags displayed."),(0,r.kt)("h2",{id:"highlighting-interesting-nodes"},"Highlighting interesting nodes"),(0,r.kt)("p",null,"We can highlight nodes with low drink prices in the following way. We want to\nuse a beer image and a bigger size along with a red shadow."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'@NodeStyle And(\n     HasLabel(node, "City"),\n     Less(Property(node, "drinks_USD"), 5)) {\n  size: 50\n  image-url: "https://www.sciencenews.org/wp-content/uploads/2020/05/050620_mt_beer_feat-1028x579.jpg"\n  shadow-color: red\n }\n')),(0,r.kt)("h2",{id:"caching-results-for-faster-performance"},"Caching results for faster performance"),(0,r.kt)("p",null,'To normalize some value, for example, the size or width of all the\nnodes or relationships in the graph, find the minimum and maximum values\nof all nodes.\nFor example, a node labled "Person"',(0,r.kt)("inlineCode",{parentName:"p"},"has the property"),"age",(0,r.kt)("inlineCode",{parentName:"p"},"that holds the age information\nof a particular person. We want the node property"),"size` to be 5 for the youngest person\nand 20 for the oldest one in the presented graph. All other node sizes should be normalized\nwithin that range."),(0,r.kt)("p",null,"One of the solutions could look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Size range min/max variables\nDefine(MIN_SIZE, 5)\nDefine(MAX_SIZE, 20)\nDefine(PROP_NAME, "age")\nDefine(SIZE_RANGE, Sub(MAX_SIZE, MIN_SIZE))\n\n// A set of utility functions\n// Create a new array of property values from an array of nodes\nDefine(GetProperties, Function(nodes, propName,\n  Map(nodes, Function(singleNode, Property(singleNode, propName)))\n))\n// Keep only the numeric values from an array of values\nDefine(KeepNumericValues, Function(values,\n  Filter(values, Function(value, IsNumber(value)))\n))\n\n// Functions to find min and max value in the input nodes\nDefine(GetMaxValue, Function(nodes,\n  Max(KeepNumericValues(GetProperties(nodes, PROP_NAME)))\n))\nDefine(GetMinValue, Function(nodes,\n  Min(KeepNumericValues(GetProperties(nodes, PROP_NAME)))\n))\n\n// Normalize function that receives two inputs: node (n) and\n// graph (g) and returns normalized value into a range\n// [MIN_SIZE, MAX_SIZE]\nDefine(Normalize, Function(n, g,\n  Add(\n    MIN_SIZE,\n    Mul(\n      SIZE_RANGE,\n      Div(\n        Sub(Property(n, PROP_NAME), GetMinValue(Nodes(g))),\n        Sub(GetMaxValue(Nodes(g)), GetMinValue(Nodes(g)))\n      )\n    )\n  )\n))\n\n// For all nodes with the label "Person" and numeric property "age"\n@NodeStyle And(HasLabel(node, "Person"), IsNumber(Property(node, PROP_NAME))) {\n  color: white\n  size: Normalize(node, graph)\n  width: Div(Normalize(node, graph), 5)\n  label: Format("Age: {}", AsText(Property(node, PROP_NAME)))\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Using Graph Style Script to style different nodes by its size",src:t(4994).Z,width:"1054",height:"866"})),(0,r.kt)("p",null,"The problem with the solution above is slow performance. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Normalize")," function is called twice\nfor each node in the graph view. Each ",(0,r.kt)("inlineCode",{parentName:"p"},"Normalize")," call iterates through all nodes three times: two\ntimes for ",(0,r.kt)("inlineCode",{parentName:"p"},"GetMinValue")," and once for ",(0,r.kt)("inlineCode",{parentName:"p"},"GetMaxValue"),". For small graphs, you won't see a difference\nin performance but as the number of nodes rises the performance issues will follow. "),(0,r.kt)("p",null,"To solve this issue, cache the results by calculating outside of ",(0,r.kt)("inlineCode",{parentName:"p"},"@NodeStyle")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"@EdgeStyle")," directives where the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"graph")," is also available.\nInside the ",(0,r.kt)("inlineCode",{parentName:"p"},"@NodeStyle")," directive, a local variable can be used to store the normalized\nvalue and use it with ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," properties thus calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"Normalize")," function only once."),(0,r.kt)("p",null,"Check the improved GSS code below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Size range min/max variables\nDefine(MIN_SIZE, 5)\nDefine(MAX_SIZE, 20)\nDefine(PROP_NAME, "age")\nDefine(SIZE_RANGE, Sub(MAX_SIZE, MIN_SIZE))\n\n// A set of utility functions\n// Create a new array of property values from an array of nodes\nDefine(GetProperties, Function(nodes, propName,\n  Map(nodes, Function(singleNode, Property(singleNode, propName)))\n))\n// Keep only the numeric values from an array of values\nDefine(KeepNumericValues, Function(values,\n  Filter(values, Function(value, IsNumber(value)))\n))\n\n// Variables MAX_VALUE and MIN_VALUE will hold the max and min\n// values of all node properties.\n// The If statement is used to handle errors when there are no values to calculate\n// min and max from.\nDefine(MAX_VALUE, If(\n  Greater(NodeCount(graph), 0),\n  Max(KeepNumericValues(GetProperties(Nodes(graph), PROP_NAME))),\n  0\n))\nDefine(MIN_VALUE, If(\n  Greater(NodeCount(graph), 0),\n  Min(KeepNumericValues(GetProperties(Nodes(graph), PROP_NAME))),\n  0\n))\n\n// Normalize function that receives one inputs: node and\n// returns normalized value into a range [MIN_SIZE, MAX_SIZE]\nDefine(Normalize, Function(n,\n  Add(\n    MIN_SIZE,\n    Mul(\n      SIZE_RANGE,\n      Div(\n        Sub(Property(n, PROP_NAME), MIN_VALUE),\n        Sub(MAX_VALUE, MIN_VALUE)\n      )\n    )\n  )\n))\n\n// For all the nodes with label "Person" and numeric property "age"\n@NodeStyle And(HasLabel(node, "Person"), IsNumber(Property(node, PROP_NAME))) {\n  // Local variable used to cache a result from function Normalize\n  Define(NORM, Normalize(node))\n\n  color: white\n  size: NORM\n  width: Div(NORM, 5)\n  label: Format("Age: {}", AsText(Property(node, PROP_NAME)))\n}\n')))}d.isMDXComponent=!0},4994:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/caching-results-gss-d50736859adb36e132ec355bd443e883.png"}}]);