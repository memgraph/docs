"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39584],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),g=p(a),h=r,d=g["".concat(l,".").concat(h)]||g[h]||c[h]||o;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},81310:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"pagerank-online-algorithm",title:"Dynamic PageRank",sidebar_label:"Dynamic PageRank"},i=void 0,s={unversionedId:"algorithms/dynamic-graph-analytics/pagerank-online-algorithm",id:"algorithms/dynamic-graph-analytics/pagerank-online-algorithm",title:"Dynamic PageRank",description:"Description",source:"@site/mage/algorithms/dynamic-graph-analytics/pagerank-online-algorithm.md",sourceDirName:"algorithms/dynamic-graph-analytics",slug:"/algorithms/dynamic-graph-analytics/pagerank-online-algorithm",permalink:"/docs/mage/algorithms/dynamic-graph-analytics/pagerank-online-algorithm",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/algorithms/dynamic-graph-analytics/pagerank-online-algorithm.md",tags:[],version:"current",frontMatter:{id:"pagerank-online-algorithm",title:"Dynamic PageRank",sidebar_label:"Dynamic PageRank"},sidebar:"mage",previous:{title:"Dynamic Katz Centrality",permalink:"/docs/mage/algorithms/dynamic-graph-analytics/katz-centrality-online-algorithm"},next:{title:"Graph Neural Networks (GNN)",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/gnn-algorithm"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Materials",id:"materials",level:2},{value:"Implementation",id:"implementation",level:3},{value:"Blog posts",id:"blog-posts",level:3},{value:"Use cases",id:"use-cases",level:2}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"In the domain of estimating the importance of graph nodes,\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/PageRank"},(0,r.kt)("strong",{parentName:"a"},"PageRank"))," is arguably the most\npopular tool. Today, the most popular search engine in the world,\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Google#Early_years"},(0,r.kt)("strong",{parentName:"a"},"Google")),", owes its\npopularity solely to this algorithm, developed in the early days by its\nfounders."),(0,r.kt)("p",null,"If we present nodes as pages and directed edges between them as links the\n",(0,r.kt)("strong",{parentName:"p"},"PageRank")," algorithm outputs a probability distribution used to represent the\nlikelihood that a person randomly clicking on links will arrive at any\nparticular page."),(0,r.kt)("p",null,"The need for its ",(0,r.kt)("strong",{parentName:"p"},"dynamic implementation")," arose at the moment when nodes and\nedges arrive in a short period of time. A large number of changes would result\nin either inconsistent information upon arrival or restarting the algorithm over\nthe entire graph each time the graph changes. Since such changes occur\nfrequently, the dynamic implementation allows the previously processed state to\nbe preserved, and new changes are updated in such a way that only the\nneighborhood of the arriving entity is processed at a constant time. This saves\ntime and allows us to have updated and accurate information about the new values\nof the ",(0,r.kt)("strong",{parentName:"p"},"PageRank"),"."),(0,r.kt)("img",{src:"https://i.imgur.com/mTBJCul.png",alt:"drawing"}),(0,r.kt)("p",null,"There are also some disadvantages of this approach, and that is that such an\napproach does not guarantee an explicitly correct solution but its\n",(0,r.kt)("strong",{parentName:"p"},"approximation"),". Such a trade-off is common in computer science but allows\nfast execution and guarantees that at a ",(0,r.kt)("strong",{parentName:"p"},"large scale")," such an approximation\napproaches the correct result."),(0,r.kt)("p",null,"Valuable work explaining how to quickly calculate these values was developed by\n",(0,r.kt)("a",{parentName:"p",href:"https://scholar.google.com/citations?user=v-hyE4MAAAAJ&hl=en"},(0,r.kt)("strong",{parentName:"a"},"Bahmani et.\nal.")),", engineers\nfrom ",(0,r.kt)("a",{parentName:"p",href:"http://snap.stanford.edu/"},"Stanford")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/home?lang=en"},"Twitter"),". The paper is worth reading at ",(0,r.kt)("a",{parentName:"p",href:"http://snap.stanford.edu/class/cs224w-readings/bahmani10pagerank.pdf"},"Fast\nIncremental and Personalized\nPageRank"),"\n\ud83d\udcd6."),(0,r.kt)("h2",{id:"materials"},"Materials"),(0,r.kt)("h3",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/pagerank_module/pagerank_online_module.cpp"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Dynamic_Pagerank-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white",alt:"Dynamic\nPagerank"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mage/query-modules/cpp/pagerank-online"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Dynamic_Pagerank-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white",alt:"Dynamic\nPagerank"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dynamic PageRank")," is implemented as part of the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,r.kt)("strong",{parentName:"a"},"MAGE"))," project. Be sure to check it out in\nthe link above. \u261d\ufe0f"),(0,r.kt)("h3",{id:"blog-posts"},"Blog posts"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/dynamic-page-rank-on-streaming-data"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Dynamic_Pagerank_on_Streaming_Data-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white",alt:"Dynamic\nPageRank"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"An obvious and trivial solution to the previous problem would be: whenever a\nnew data point or connection comes into our platform, simply recalculate the\ninfluence measurement with the PageRank algorithm. This is very simple, and it\nworks. However, the story changes over time when your business becomes more\npopular. You begin to have more work and therefore datapoints keep coming at a\nfaster pace, accumulated data keeps rising in size and your algorithm fails to\ndeliver valuable information efficiently."))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/twitter-analysis-with-dynamic-pagerank"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Dynamic_PageRank_and_a_Twitter_Network-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white",alt:"It's the most wonderful time of the year - Dynamic PageRank and a Twitter\nNetwork"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PageRank is the perfect tool with which we can find the most Christmassy\nperson. The person that is going to win is the one that got retweeted by other\nChristmassy people. As data comes at high speed, fortunately, MAGE has\nupgraded the good old PageRank in its garage and prepared a dynamic version -\nDynamic Pagerank.")),(0,r.kt)("h2",{id:"use-cases"},"Use cases"),(0,r.kt)("p",null,"Although PageRank can be used in a variety of ways, the need for its dynamic\nimplementation lies in systems that use ",(0,r.kt)("strong",{parentName:"p"},"temporal graphs"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/social-media"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Social_networks-Application-8A477F?style=for-the-badge",alt:"Social\nnetworks"}))),(0,r.kt)("p",null,"One of the most dynamic environments is definitely social networks. Every\nmoment, events arrive that contain the creation of new users, posts, messages,\nand the graph itself grows at an enormous rate. Therefore, the need for an\nincremental measure of influence is high in companies such as:\n",(0,r.kt)("a",{parentName:"p",href:"https://about.facebook.com/meta/"},"Meta"),", ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/home"},"Twitter")," or\n",(0,r.kt)("a",{parentName:"p",href:"https://www.pinterest.com/"},"Pinterest"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/mage/use-cases/telecommunication"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Internet_Network-Application-8A477F?style=for-the-badge",alt:"Internet\nNetwork"}))),(0,r.kt)("p",null,"Importance analysis can be highlighted as crucial at the moment when internet\ntraffic is analyzed. If we have some kind of internal, supervised system,\nPageRank can find out in which nodes the most information flows, and where to\nplace the most important elements of the system resistant to large amounts of\ntraffic."))}c.isMDXComponent=!0}}]);