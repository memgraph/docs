"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88574],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44151:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={id:"bioinformatics",title:"Bioinformatics",sidebar_label:"Bioinformatics"},l=void 0,c={unversionedId:"use-cases/bioinformatics",id:"use-cases/bioinformatics",title:"Bioinformatics",description:"Introduction",source:"@site/mage/use-cases/bioinformatics.md",sourceDirName:"use-cases",slug:"/use-cases/bioinformatics",permalink:"/docs/mage/use-cases/bioinformatics",editUrl:"https://github.com/memgraph/docs/tree/master/mage/use-cases/bioinformatics.md",tags:[],version:"current",frontMatter:{id:"bioinformatics",title:"Bioinformatics",sidebar_label:"Bioinformatics"},sidebar:"mage",previous:{title:"Temporal Graph Networks",permalink:"/docs/mage/algorithms/machine-learning-graph-analytics/temporal-graph-networks"},next:{title:"Computer Security",permalink:"/docs/mage/use-cases/computer-security"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Applying graphs",id:"applying-graphs",level:2},{value:"Protein-protein interaction networks",id:"protein-protein-interaction-networks",level:3},{value:"Sequence similarity networks",id:"sequence-similarity-networks",level:3},{value:"Disease networks",id:"disease-networks",level:3},{value:"Where to next?",id:"where-to-next",level:2}],d={toc:u};function m(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bioinformatics")," is a subdiscipline of biology and computer science that\nfocuses on discovering, storing, analyzing, and disseminating biological data\nsuch as DNA and amino acid sequences. This kind of data often comes in the form\nof highly complex and interconnected networks. While most of the data is\ncurrently stored in relational databases, the problem of complicated domain\nmodels and evergrowing data diversity presents a challenge to data scientists. "),(0,o.kt)("p",null,"Memgraph as a graph database can efficiently map the relationships in such\nhighly interconnected networks in the field of biology. From molecule to protein\ninteractions, almost everything can be modeled using graphs and explored with\ngraph algorithms."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"memgraph-graph-algorithm-applications-bioinformatics",src:n(35325).Z,width:"1000",height:"300"})),(0,o.kt)("h2",{id:"applying-graphs"},"Applying graphs"),(0,o.kt)("h3",{id:"protein-protein-interaction-networks"},"Protein-protein interaction networks"),(0,o.kt)("p",null,"Proteins rarely act individually, they are often in interaction with other\nproteins to perform some function. Protein-protein interaction networks (PPIN)\nare used to simplify and model these complex interactions. In PPIN, proteins are\nrepresented as nodes. Interactions between proteins are described by edges\nconnecting the corresponding nodes."),(0,o.kt)("p",null,"Researches have discovered an important property of PPINs and consequentially\nenabled us to develop methods for identifying essential proteins. Most proteins\nin PPINs interact with only several other proteins, meaning that they do not\nhave many connections. However, there is a small number of proteins that\ninteract with almost every other protein. These proteins, included in many\ninteractions, ",(0,o.kt)("a",{parentName:"p",href:"https://www.ebi.ac.uk/training/online/courses/network-analysis-of-protein-interaction-data-an-introduction/building-and-analysing-ppins/topological-ppin-analysis/centrality-analysis/"},"can be\ndetected"),"\nin the network as highly connected nodes, called hubs and they are very likely\nessential proteins."),(0,o.kt)("h3",{id:"sequence-similarity-networks"},"Sequence similarity networks"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"http://sfld.rbvi.ucsf.edu/archive/django/web/networks/index.html"},"sequence similarity\nnetwork")," (SNN)\nenables the visualization of relationships among protein sequences. The proteins\nwhich are related in some way are most often grouped in clusters. The graph is\nmade up of nodes that represent proteins, while the edges indicate similarity in\namino acid sequence."),(0,o.kt)("p",null,"SNNs are used to explore relationships in large and diverse sets of sequences\nbecause the computational resources needed for traditional methods of analysis\n(for example, phylogenetic trees) would be unfeasible, due to the difficulty in\ngenerating accurate multiple alignments."),(0,o.kt)("h3",{id:"disease-networks"},"Disease networks"),(0,o.kt)("p",null,"Systems biology experiments create an enormous amount of data of multiple\nmodalities. Because of its complexity and rich semantics, this kind of data\npresents a hurdle for standard storage and analysis solutions."),(0,o.kt)("p",null,"Graph databases provide a flexible solution for the integration of multiple\ntypes of biological data and facilitate exploratory data mining to support\nhypothesis generation."),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"This text is a ",(0,o.kt)("strong",{parentName:"p"},"summary")," of one area that fits perfectly with the application\nof graphs. Therefore, we would like to have you with us when ",(0,o.kt)("strong",{parentName:"p"},"implementing"),"\nsome of these solutions. Share ",(0,o.kt)("strong",{parentName:"p"},"opinions"),", ",(0,o.kt)("strong",{parentName:"p"},"experiences")," and ",(0,o.kt)("strong",{parentName:"p"},"problems"),"\nyou encounter when working with ",(0,o.kt)("strong",{parentName:"p"},"Memgraph")," on our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/memgraph"},"Discord\nserver"),". We are here for you and we will help you\nalong the way."))}m.isMDXComponent=!0},35325:function(e,t,n){t.Z=n.p+"assets/images/memgraph-graph-algorithm-applications-bioinformatics-6d34a3e6a05e36cc0c6dd99e6d88bb18.png"}}]);