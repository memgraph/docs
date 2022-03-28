"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34751],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return c}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),m=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=m(a),c=n,g=h["".concat(p,".").concat(c)]||h[c]||u[c]||o;return a?r.createElement(g,i(i({ref:t},s),{},{components:a})):r.createElement(g,i({ref:t},s))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},39856:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"getting-started",title:"Getting started with Memgraph Lab",sidebar_label:"Getting started",slug:"/"},p=void 0,m={unversionedId:"getting-started",id:"getting-started",title:"Getting started with Memgraph Lab",description:"Memgraph Lab is a lightweight and intuitive visual user interface that",source:"@site/lab/getting-started.md",sourceDirName:".",slug:"/",permalink:"/docs/memgraph-lab/",editUrl:"https://github.com/memgraph/docs/tree/master/lab/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting started with Memgraph Lab",sidebar_label:"Getting started",slug:"/"},sidebar:"lab",next:{title:"Installation overview",permalink:"/docs/memgraph-lab/installation"}},s={},u=[{value:"Quick start",id:"quick-start",level:2},{value:"1. Install Memgraph Platform or Memgraph Lab",id:"1-install-memgraph-platform-or-memgraph-lab",level:3},{value:"2. Connect to Memgraph",id:"2-connect-to-memgraph",level:3},{value:"3. Check out Graph Style Script",id:"3-check-out-graph-style-script",level:3},{value:"4. Browse through the Changelog",id:"4-browse-through-the-changelog",level:3},{value:"What to do next?",id:"what-to-do-next",level:2}],h={toc:u};function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab")," is a lightweight and intuitive ",(0,o.kt)("strong",{parentName:"p"},"visual user interface")," that\nenables you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"visualize graph data"),(0,o.kt)("li",{parentName:"ul"},"write and execute Cypher queries"),(0,o.kt)("li",{parentName:"ul"},"import and export data"),(0,o.kt)("li",{parentName:"ul"},"view and optimize query performance")),(0,o.kt)("p",null,"It was designed to help you with every stage of your learning process and graph\ndevelopment."),(0,o.kt)("h2",{id:"quick-start"},"Quick start"),(0,o.kt)("p",null,"If you would like to query a running Memgraph database instance using ",(0,o.kt)("strong",{parentName:"p"},"Memgraph\nLab"),", be sure to:"),(0,o.kt)("h3",{id:"1-install-memgraph-platform-or-memgraph-lab"},"1. Install Memgraph Platform or Memgraph Lab"),(0,o.kt)("p",null,"We recommend you ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/installation"},"install ",(0,o.kt)("strong",{parentName:"a"},"Memgraph Platform"))," and get\nthe complete streaming graph application platform that includes ",(0,o.kt)("strong",{parentName:"p"},"Memgraph DB"),",\ncommand-line tool ",(0,o.kt)("strong",{parentName:"p"},"mgconsole"),", visual user interface ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab")," running\nwithin the browser and ",(0,o.kt)("strong",{parentName:"p"},"MAGE")," - graph algorithms and modules library."),(0,o.kt)("p",null,"If you already have a running Memgraph database instance, you can install\nMemgraph Lab as a desktop application on ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/installation/windows"},"Windows"),",\n",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/installation/macos"},"macOS")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/installation/linux"},"Linux"),"."),(0,o.kt)("h3",{id:"2-connect-to-memgraph"},"2. Connect to Memgraph"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/connect-to-memgraph"},"Connect Memgraph Lab to Memgraph")," and start\nexperimenting with data and Cypher."),(0,o.kt)("h3",{id:"3-check-out-graph-style-script"},"3. Check out Graph Style Script"),(0,o.kt)("p",null,"To give your graphs a bit more pizzazz, dive into the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/graph-style-script-language"},"Graph Style Script\nlanguage")," and learn how to customize the visual\nappearance of your graphs to make them truly remarkable."),(0,o.kt)("h3",{id:"4-browse-through-the-changelog"},"4. Browse through the Changelog"),(0,o.kt)("p",null,"Want to know what's new in Memgraph Lab? Take a look at\n",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/changelog"},"Changelog")," to see a list of new features."),(0,o.kt)("h2",{id:"what-to-do-next"},"What to do next?"),(0,o.kt)("p",null,"You can also execute queries using Memgraph's command-line tool\n",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph/connect-to-memgraph/mgconsole"},"mgconsole"),"."),(0,o.kt)("p",null,"Those who are new to querying can head out to our\n",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph/tutorials"},"Tutorials")," or play around on\n",(0,o.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Playground")," to get a feeling of what is\npossible to find out from data using graphs. The ",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/cypher-manual/"},"Cypher\nmanual")," will give you an overview of\nclauses and functions to help you write awesome queries."),(0,o.kt)("p",null,"If you need more magic to enhance your graph power, look into ",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/mage"},"MAGE - Memgraph\nAdvanced Graph Extensions")," that will provide you\nwith various graph algorithms and modules in the form of query modules."))}c.isMDXComponent=!0}}]);