"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79771],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),o=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=o(a),g=n,d=s["".concat(p,".").concat(g)]||s[g]||h[g]||l;return a?r.createElement(d,m(m({ref:t},u),{},{components:a})):r.createElement(d,m({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,m=new Array(l);m[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,m[1]=i;for(var o=2;o<l;o++)m[o]=a[o];return r.createElement.apply(null,m)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},51665:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={id:"changelog",title:"Changelog",sidebar_label:"Changelog"},m=void 0,i={unversionedId:"changelog",id:"changelog",title:"Changelog",description:"v1.6 - Jan 30, 2023",source:"@site/mage/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/docs/mage/changelog",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/changelog.md",tags:[],version:"current",frontMatter:{id:"changelog",title:"Changelog",sidebar_label:"Changelog"},sidebar:"mage",previous:{title:"Contributing",permalink:"/docs/mage/contributing"}},p={},o=[{value:"v1.6 - Jan 30, 2023",id:"v16---jan-30-2023",level:2},{value:"Major Features and Improvements",id:"major-features-and-improvements",level:3},{value:"v1.5.1 - Jan 20, 2023",id:"v151---jan-20-2023",level:2},{value:"Major Features and Improvements",id:"major-features-and-improvements-1",level:3},{value:"v1.5 - Dec 20, 2022",id:"v15---dec-20-2022",level:2},{value:"Major Features and Improvements",id:"major-features-and-improvements-2",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"v1.4 - Nov 15, 2022",id:"v14---nov-15-2022",level:2},{value:"Major Features and Improvements",id:"major-features-and-improvements-3",level:3},{value:"Bug Fixes",id:"bug-fixes-1",level:3},{value:"v1.3.2 - Oct 10, 2022",id:"v132---oct-10-2022",level:2},{value:"Major Features and Improvements",id:"major-features-and-improvements-4",level:3},{value:"Bug Fixes",id:"bug-fixes-2",level:3},{value:"v1.3.1 - Jul 14, 2022",id:"v131---jul-14-2022",level:2},{value:"Major Features and Improvements",id:"major-features-and-improvements-5",level:3},{value:"v1.3 - May 23, 2022",id:"v13---may-23-2022",level:2},{value:"Major Features and Improvements",id:"major-features-and-improvements-6",level:3},{value:"Bug Fixes",id:"bug-fixes-3",level:3},{value:"v1.2 - Apr 20, 2022",id:"v12---apr-20-2022",level:2},{value:"Major Features and Improvements",id:"major-features-and-improvements-7",level:3},{value:"Bug Fixes",id:"bug-fixes-4",level:3},{value:"v1.1 - Dec 13, 2021",id:"v11---dec-13-2021",level:2},{value:"Major Features and Improvements",id:"major-features-and-improvements-8",level:3},{value:"Bug Fixes",id:"bug-fixes-5",level:3}],u={toc:o};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"v16---jan-30-2023"},"v1.6 - Jan 30, 2023"),(0,n.kt)("h3",{id:"major-features-and-improvements"},"Major Features and Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"setup")," script now halts if the build fails on C++ or Rust side ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/194"},"#194")),(0,n.kt)("li",{parentName:"ul"},"With the ",(0,n.kt)("inlineCode",{parentName:"li"},"meta_util.schema()")," procedure, you can generate a graph schema as a graph result ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/187"},"#187")),(0,n.kt)("li",{parentName:"ul"},"The execution of the ",(0,n.kt)("inlineCode",{parentName:"li"},"single")," method multiple times has been improved by rewriting the distance calculator from Python to C++ ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/191"},"#191")),(0,n.kt)("li",{parentName:"ul"},"Dynamic graph analytics have been ported to C++ to improve performance  ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/182"},"#182")),(0,n.kt)("li",{parentName:"ul"},"New module ",(0,n.kt)("inlineCode",{parentName:"li"},"elastic_search_serialization")," enables developers to serialize Memgraph into Elasticsearch instance using basic authentication ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/170"},"#170"))),(0,n.kt)("h2",{id:"v151---jan-20-2023"},"v1.5.1 - Jan 20, 2023"),(0,n.kt)("h3",{id:"major-features-and-improvements-1"},"Major Features and Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The version of MemgraphDB that will be used in the Docker image has been updated to 2.5.1.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/193"},"#193"))),(0,n.kt)("h2",{id:"v15---dec-20-2022"},"v1.5 - Dec 20, 2022"),(0,n.kt)("h3",{id:"major-features-and-improvements-2"},"Major Features and Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Now you can find ancestors (all the nodes from which a path exists ) and descendants (all nodes to which a path exists) starting from a certain node, sort directed acyclic graph in a way that a node which appears before others is first, return a subgraph from nodes using ",(0,n.kt)("inlineCode",{parentName:"li"},"connect_nodes")," method, and create relationships between nodes in a list using the ",(0,n.kt)("inlineCode",{parentName:"li"},"chain_nodes")," method.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/180"},"#180")),(0,n.kt)("li",{parentName:"ul"},"C++ API is now aligned with Memgraph 2.5\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/184"},"#184")),(0,n.kt)("li",{parentName:"ul"},"Graph Coloring no longer outputs strings but vertices and integers. This allows you to use the result of graph coloring directly in Memgraph Lab.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/177"},"#177"))),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"By enabling module reset, you can now train and evaluate the model without shutting down the database.\nClass labels can now start from 0 or negative numbers.\nThe low limit of the early stopping flag no longer prematurely stops the training of the model while running the Node classification module.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/173"},"#173"))),(0,n.kt)("h2",{id:"v14---nov-15-2022"},"v1.4 - Nov 15, 2022"),(0,n.kt)("h3",{id:"major-features-and-improvements-3"},"Major Features and Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Implemented Link prediction with ",(0,n.kt)("a",{parentName:"li",href:"https://www.dgl.ai/"},"DGL"),".\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/160"},"#160")),(0,n.kt)("li",{parentName:"ul"},"Implemented Node classification with PyTorch.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/161"},"#161")),(0,n.kt)("li",{parentName:"ul"},"Added igraph support.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/150"},"#150")),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"k"),"-means embedding clustering algorithm.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/105"},"#105")),(0,n.kt)("li",{parentName:"ul"},"Added better support for C++ API.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/174"},"#174"))),(0,n.kt)("h3",{id:"bug-fixes-1"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enable module reset to be able to train and evaluate without shutting down database, enable working with class labels which don't start from 0, and fix potential early stopping due to low limit in the Node classification module.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/173"},"#173"))),(0,n.kt)("h2",{id:"v132---oct-10-2022"},"v1.3.2 - Oct 10, 2022"),(0,n.kt)("h3",{id:"major-features-and-improvements-4"},"Major Features and Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Allowed restricting community detection to subgraphs.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/152"},"#152")),(0,n.kt)("li",{parentName:"ul"},"Implemented the degree centrality algorithm.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/162"},"#162")),(0,n.kt)("li",{parentName:"ul"},"Updated Memgraph version.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/171"},"#171"))),(0,n.kt)("h3",{id:"bug-fixes-2"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dynamic betweenness centrality bugfix.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/147"},"#147"))),(0,n.kt)("h2",{id:"v131---jul-14-2022"},"v1.3.1 - Jul 14, 2022"),(0,n.kt)("h3",{id:"major-features-and-improvements-5"},"Major Features and Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated Memgraph version.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/154"},"#154")),(0,n.kt)("li",{parentName:"ul"},"Introduced E2E group testing.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/145"},"#145"))),(0,n.kt)("h2",{id:"v13---may-23-2022"},"v1.3 - May 23, 2022"),(0,n.kt)("h3",{id:"major-features-and-improvements-6"},"Major Features and Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added integration between cuGraph and Memgraph integration.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/99"},"#99"))),(0,n.kt)("h3",{id:"bug-fixes-3"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed node deletion.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/141"},"#141"))),(0,n.kt)("h2",{id:"v12---apr-20-2022"},"v1.2 - Apr 20, 2022"),(0,n.kt)("h3",{id:"major-features-and-improvements-7"},"Major Features and Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Implemented Temporal graph networks.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/121"},"#121")),(0,n.kt)("li",{parentName:"ul"},"Implemented Dynamic Betweenness Centrality.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/127"},"#127")),(0,n.kt)("li",{parentName:"ul"},"Implemented Dynamic Katz Centrality.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/117"},"#117")),(0,n.kt)("li",{parentName:"ul"},"Implemented Louvain Community Detection.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/48"},"#48")),(0,n.kt)("li",{parentName:"ul"},"Implemented Maximum Flow.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/125"},"#125")),(0,n.kt)("li",{parentName:"ul"},"Implemented Static Katz Centrality.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/117"},"#117")),(0,n.kt)("li",{parentName:"ul"},"Added utility Import/Export module (JSON).\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/100"},"#100")),(0,n.kt)("li",{parentName:"ul"},"Bumped the version of Black formatter.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/132"},"#132"))),(0,n.kt)("h3",{id:"bug-fixes-4"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed IsSubset checking for unordered set.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/135"},"#135")),(0,n.kt)("li",{parentName:"ul"},"Fixed Continuous integration.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/133"},"#133")),(0,n.kt)("li",{parentName:"ul"},"Fixed E2E testing.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/128"},"#128")),(0,n.kt)("li",{parentName:"ul"},"Fixed ID validity check.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/129"},"#129"))),(0,n.kt)("h2",{id:"v11---dec-13-2021"},"v1.1 - Dec 13, 2021"),(0,n.kt)("h3",{id:"major-features-and-improvements-8"},"Major Features and Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated rsmgp-sys to the new MGP API.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/78"},"#78")),(0,n.kt)("li",{parentName:"ul"},"Add temporal type to rsmgp-sys.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/82"},"#82")),(0,n.kt)("li",{parentName:"ul"},"Implemented node2vec. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/81"},"#81")),(0,n.kt)("li",{parentName:"ul"},"Updated GraphView abstraction. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/85"},"#85")),(0,n.kt)("li",{parentName:"ul"},"Implemented approximative streaming PageRank.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/69"},"#69")),(0,n.kt)("li",{parentName:"ul"},"Implemented weighted graph methods built for dynamic community detection.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/89"},"#89")),(0,n.kt)("li",{parentName:"ul"},"Implemented LabelRankT dynamic community detection algorithm.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/66"},"#66"))),(0,n.kt)("h3",{id:"bug-fixes-5"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed memory leakage. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/77"},"#77")),(0,n.kt)("li",{parentName:"ul"},"Solved dependency vulnerability.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/83"},"#83")),(0,n.kt)("li",{parentName:"ul"},"Fixed ",(0,n.kt)("inlineCode",{parentName:"li"},"set_cover.greedy")," result type bug.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/76"},"#76")),(0,n.kt)("li",{parentName:"ul"},"Fixed MAGE installation on Linux based distro.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mage/pull/92"},"#92"))))}h.isMDXComponent=!0}}]);