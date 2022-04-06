"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83796],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),p=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=p(a),c=r,g=s["".concat(m,".").concat(c)]||s[c]||u[c]||l;return a?n.createElement(g,o(o({ref:e},d),{},{components:a})):n.createElement(g,o({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},26073:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return s}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=a(85030),i=["components"],m={id:"query-modules",title:"Query modules",sidebar_label:"Query modules"},p=void 0,d={unversionedId:"query-modules",id:"query-modules",title:"Query modules",description:"The Cypher query language can be extended with custom procedures written in",source:"@site/cypher-manual/query-modules.md",sourceDirName:".",slug:"/query-modules",permalink:"/docs/cypher-manual/query-modules",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/query-modules.md",tags:[],version:"current",frontMatter:{id:"query-modules",title:"Query modules",sidebar_label:"Query modules"},sidebar:"cypher_manual",previous:{title:"Functions",permalink:"/docs/cypher-manual/functions"},next:{title:"Other features",permalink:"/docs/cypher-manual/other-features"}},u={},s=[{value:"Available query modules",id:"available-query-modules",level:2}],c={toc:s};function g(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Cypher query language can be extended with custom procedures written in\n",(0,l.kt)("strong",{parentName:"p"},"Python"),", ",(0,l.kt)("strong",{parentName:"p"},"C"),", ",(0,l.kt)("strong",{parentName:"p"},"C++")," and ",(0,l.kt)("strong",{parentName:"p"},"Rust"),". These procedures are grouped into so\ncalled query modules. Memgraph offers an open-source collection of implemented\nquery modules in the form of ",(0,l.kt)("a",{parentName:"p",href:"/mage"},(0,l.kt)("strong",{parentName:"a"},"MAGE")," - ",(0,l.kt)("strong",{parentName:"a"},"Memgraph Advanced Graph\nExtensions")),"."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"MAGE Documentation")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Check out the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"/mage"},"MAGE documentation"))," for a detailed overview of all the\navailable modules and installation instructions."))),(0,l.kt)("h2",{id:"available-query-modules"},"Available query modules"),(0,l.kt)(o.ZP,{mdxType:"MageSpells"}))}g.isMDXComponent=!0},85030:function(t,e,a){a.d(e,{ZP:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={toc:[]};function m(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Algorithms"),(0,l.kt)("th",{parentName:"tr",align:null},"Lang"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/betweenness-centrality"},"betweenness_centrality")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"The betweenness centrality of a node is defined as the sum of the of all-pairs shortest paths that pass through the node divided by the number of all-pairs shortest paths in the graph. The algorithm has O(nm) time complexity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/biconnected-components"},"biconnected_components")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"Algorithm for calculating maximal biconnected subgraph. A biconnected subgraph is a subgraph with a property that if any vertex were to be removed, the graph will remain connected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/bipartite-matching"},"bipartite_matching")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"Algorithm for calculating maximum bipartite matching, where matching is a set of nodes chosen in such a way that no two edges share an endpoint.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/bridges"},"bridges")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"A bridge is an edge, which when deleted, increases the number of connected components. The goal of this algorithm is to detect edges that are bridges in a graph.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/community-detection-online"},"community_detection_online")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"A dynamic community detection algorithm suitable for large-scale graphs based upon label propagation. Runs in O(m) time and has O(mn) space complexity.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/cycles"},"cycles")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"Algorithm for detecting cycles on graphs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/distance-calculator"},"distance_calculator")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"Module for finding the geographical distance between two points defined with 'lng' and 'lat' coordinates.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/export-util"},"export_util")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"A module for exporting the graph database in different formats (JSON).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/graph-analyzer"},"graph_analyzer")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"This Graph Analyzer query module offers insights about the stored graph or a subgraph.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/graph-coloring"},"graph_coloring")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"Algorithm for assigning labels to the graph elements subject to certain constraints. In this form, it is a way of coloring the graph vertices such that no two adjacent vertices are of the same color.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/import-util"},"import_util")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"A module for importing data from different formats (JSON).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/json-util"},"json_util")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"A module for loading JSON from a local file or remote address.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/max-flow"},"max_flow")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"An algorithm for finding a flow through a graph such that it is the maximum possible flow.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/node2vec"},"node2vec")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"An algorithm for calculating node embeddings on static graph.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/node2vec-online"},"node2vec_online")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"An algorithm for calculating node embeddings as new edges arrive")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/node-similarity"},"node_similarity")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"A module that contains similarity measures for calculating the similarity between two nodes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/nxalg"},"nxalg")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"A module that provides NetworkX integration with Memgraph and implements many NetworkX algorithms")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/pagerank"},"pagerank")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"Algorithm that yields the influence measurement based on the recursive information about the connected nodes influence")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/pagerank-online"},"pagerank_online")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"A dynamic algorithm made for calculating PageRank in a graph streaming scenario.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rust_example"),(0,l.kt)("td",{parentName:"tr",align:null},"Rust"),(0,l.kt)("td",{parentName:"tr",align:null},"Example of a basic module with input parameters forwarding, made in Rust.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/set-cover"},"set_cover")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"The algorithm for finding minimum cost subcollection of sets that covers all elements of a universe.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/tsp"},"tsp")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"An algorithm for finding the shortest possible route that visits each vertex exactly once.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/union-find"},"union_find")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"A module with an algorithm that enables the user to check whether the given nodes belong to the same connected component.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/uuid-generator"},"uuid_generator")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"A module that generates a new universally unique identifier (UUID).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/python/vrp"},"vrp")),(0,l.kt)("td",{parentName:"tr",align:null},"Python"),(0,l.kt)("td",{parentName:"tr",align:null},"Algorithm for finding the shortest route possible between the central depot and places to be visited. The algorithm can be solved with multiple vehicles that represent a visiting fleet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/weakly-connected-components"},"weakly_connected_components")),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"A module that finds weakly connected components in a graph.")))))}m.isMDXComponent=!0}}]);