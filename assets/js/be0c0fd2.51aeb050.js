"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89114],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35530:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"retail",title:"Retail",sidebar_label:"Retail"},c=void 0,l={unversionedId:"use-cases/retail",id:"use-cases/retail",title:"Retail",description:"Introduction",source:"@site/mage/use-cases/retail.md",sourceDirName:"use-cases",slug:"/use-cases/retail",permalink:"/docs/mage/use-cases/retail",editUrl:"https://github.com/memgraph/docs/tree/master/mage/use-cases/retail.md",tags:[],version:"current",frontMatter:{id:"retail",title:"Retail",sidebar_label:"Retail"},sidebar:"mage",previous:{title:"Process Engineering",permalink:"/docs/mage/use-cases/process-engineering"},next:{title:"Social Media",permalink:"/docs/mage/use-cases/social-media"}},p=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Applying graphs",id:"applying-graphs",children:[{value:"Suply chain optimization",id:"suply-chain-optimization",children:[],level:3},{value:"Product recommendation",id:"product-recommendation",children:[],level:3},{value:"Discovering communities",id:"discovering-communities",children:[],level:3}],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2}],u={toc:p};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The amount of data generated each day in retail is enormous. That data has to be\nharnessed and analyzed to gain value. Edges between nodes in the graph database\nperfectly correspond with the relationships between buyers and products. Key\nconnections can be discovered from all that data and used to build a product\nrecommendation system, detect communities of buyers or optimize the supply\nchain. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"memgraph-graph-algorithm-applications-retail",src:n(50410).Z})),(0,i.kt)("h2",{id:"applying-graphs"},"Applying graphs"),(0,i.kt)("h3",{id:"suply-chain-optimization"},"Suply chain optimization"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Supply chain optimization")," ensures the optimal operation of a manufacturing and\ndistribution supply chain. That includes the optimal inventory placement within\nthe supply chain, minimizing operating costs, including manufacturing,\ntransportation, and distribution costs. The goal is to maximize the profitable\noperation of the manufacturing and distribution supply chain. "),(0,i.kt)("p",null,"If we observe a ",(0,i.kt)("strong",{parentName:"p"},"product's life cycle"),", it starts from the raw materials from\nwhich it was made and ends as a complete product at the retailer. Naturally, that\nlife cycle can be represented using nodes and relationships in a graph database.\nNext, using graph algorithms, the supply chain can be optimized."),(0,i.kt)("h3",{id:"product-recommendation"},"Product recommendation"),(0,i.kt)("p",null,"Systems that are recommending which book to buy, movie to watch, music to listen\nto, etc., are becoming more popular each year. Organizations using product\nrecommendation systems increase their revenue and create stronger relationships\nwith their buyers. Sellers want to recommend each buyer something according to\ntheir taste. That can be done by finding similar buyers, recommending some\ntrendy products from the same category that the user has bought, or finding\nsimilar products to the one the buyer has purchased. All that data is connected\nand is best shown in a graph database. Using ",(0,i.kt)("strong",{parentName:"p"},"graph algorithms")," and ",(0,i.kt)("strong",{parentName:"p"},"machine\nlearning"),", you can quickly implement a ",(0,i.kt)("strong",{parentName:"p"},"recommendation system")," that suits\nyour needs."),(0,i.kt)("h3",{id:"discovering-communities"},"Discovering communities"),(0,i.kt)("p",null,"By choosing the right audience, some brands can offer genuine value to the buyer\nand increase their revenue. The buyer sees that brand as a perfect fit for its\nneeds and frequently buys its products. Therefore, ",(0,i.kt)("strong",{parentName:"p"},"communities discovery"),"\nplays a vital role in purchase decisions. With graph databases and graph\nalgorithms, the discovery of different communities of buyers has proven to be\nvaluable and straightforward."),(0,i.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,i.kt)("p",null,"This text is a ",(0,i.kt)("strong",{parentName:"p"},"summary")," of one area that fits perfectly with the application\nof graphs. Therefore, we would like to have you with us when ",(0,i.kt)("strong",{parentName:"p"},"implementing"),"\nsome of these solutions. Share ",(0,i.kt)("strong",{parentName:"p"},"opinions"),", ",(0,i.kt)("strong",{parentName:"p"},"experiences")," and ",(0,i.kt)("strong",{parentName:"p"},"problems"),"\nyou encounter when working with ",(0,i.kt)("strong",{parentName:"p"},"Memgraph")," on our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/memgraph"},"Discord\nserver"),". We are here for you and we will help you\nalong the way."))}m.isMDXComponent=!0},50410:function(e,t,n){t.Z=n.p+"assets/images/memgraph-graph-algorithm-applications-retail-e9238f0e570fb5bc71338b630949b5a4.png"}}]);