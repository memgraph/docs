"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21419],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>s});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),g=d(a),s=r,h=g["".concat(m,".").concat(s)]||g[s]||u[s]||l;return a?n.createElement(h,i(i({ref:e},p),{},{components:a})):n.createElement(h,i({ref:e},p))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},52003:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(85030);const i={id:"available-queries",title:"Spellbook \ud83d\udcd6 - Currently available modules",sidebar_label:"Available query modules",slug:"/query-modules/available-queries"},o=void 0,m={unversionedId:"query-modules/available-queries",id:"query-modules/available-queries",title:"Spellbook \ud83d\udcd6 - Currently available modules",description:"",source:"@site/mage/query-modules/available-queries.md",sourceDirName:"query-modules",slug:"/query-modules/available-queries",permalink:"/docs/mage/query-modules/available-queries",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/available-queries.md",tags:[],version:"current",frontMatter:{id:"available-queries",title:"Spellbook \ud83d\udcd6 - Currently available modules",sidebar_label:"Available query modules",slug:"/query-modules/available-queries"},sidebar:"mage",previous:{title:"Calling procedures",permalink:"/docs/mage/usage/calling-procedures"},next:{title:"betweenness_centrality",permalink:"/docs/mage/query-modules/cpp/betweenness-centrality"}},d={},p=[],u={toc:p};function g(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.ZP,{mdxType:"MageSpells"}))}g.isMDXComponent=!0},85030:(t,e,a)=>{a.d(e,{ZP:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={toc:[{value:"Traditional graph algorithms",id:"traditional-graph-algorithms",level:3},{value:"Streaming graph algorithms",id:"streaming-graph-algorithms",level:3},{value:"Graph ML algorithms",id:"graph-ml-algorithms",level:3},{value:"Utility algorithms",id:"utility-algorithms",level:3},{value:"Integrations",id:"integrations",level:3}]};function i(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"traditional-graph-algorithms"},"Traditional graph algorithms"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Algorithms"),(0,r.kt)("th",{parentName:"tr",align:null},"Lang"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/betweenness-centrality"},"betweenness_centrality")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"The betweenness centrality of a node is defined as the sum of the of all-pairs shortest paths that run through the node, divided by the number of all-pairs shortest paths in the graph. The algorithm has O(nm) time complexity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/biconnected-components"},"biconnected_components")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"Algorithm for calculating maximal biconnected subgraph. A biconnected subgraph is a subgraph with a property that if any vertex were to be removed, the graph will remain connected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/bipartite-matching"},"bipartite_matching")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"Algorithm for calculating maximum bipartite matching, where matching is a set of nodes chosen in such a way that no two edges share an endpoint.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/bridges"},"bridges")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"A bridge is an edge, which when deleted, increases the number of connected components. The goal of this algorithm is to detect edges that are bridges in a graph.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/community-detection"},"community_detection")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"The Louvain method for community detection is a greedy method for finding communities with maximum modularity in a graph. Runs in ",(0,r.kt)("em",{parentName:"td"},"O"),"(",(0,r.kt)("em",{parentName:"td"},"n"),"log",(0,r.kt)("em",{parentName:"td"},"n"),") time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/cycles"},"cycles")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"Algorithm for detecting cycles on graphs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/distance-calculator"},"distance_calculator")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"Module for finding the geographical distance between two points defined with 'lng' and 'lat' coordinates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/degree-centrality"},"degree_centrality")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"The basic measurement of centrality that refers to the number of edges adjacent to a node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/graph-coloring"},"graph_coloring")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"Algorithm for assigning labels to the graph elements subject to certain constraints. In this form, it is a way of coloring the graph vertices such that no two adjacent vertices are of the same color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/katz-centrality"},"katz_centrality")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"Katz centrality is a centrality measurement that outputs a node's influence based on the number of shortest paths and their weighted length.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/kmeans"},"kmeans")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"An algorithm for clustering given data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/max-flow"},"max_flow")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"An algorithm for finding a flow through a graph such that it is the maximum possible flow.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/node-similarity"},"node_similarity")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"A module that contains similarity measures for calculating the similarity between two nodes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/pagerank"},"pagerank")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"Algorithm that yields the influence measurement based on the recursive information about the connected nodes influence.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/set-cover"},"set_cover")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"An algorithm for finding the minimum cost subcollection of sets that covers all elements of a universe.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/tsp"},"tsp")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"An algorithm for finding the shortest possible route that visits each vertex exactly once.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/union-find"},"union_find")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"A module with an algorithm that enables the user to check whether the given nodes belong to the same connected component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/vrp"},"vrp")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"Algorithm for finding the shortest route possible between the central depot and places to be visited. The algorithm can be solved with multiple vehicles that represent a visiting fleet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/weakly-connected-components"},"weakly_connected_components")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"A module that finds weakly connected components in a graph.")))),(0,r.kt)("h3",{id:"streaming-graph-algorithms"},"Streaming graph algorithms"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Algorithms"),(0,r.kt)("th",{parentName:"tr",align:null},"Lang"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/betweenness-centrality-online"},"betweenness_centrality_online")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"A dynamic algorithm that updates exact betweenness centrality scores of nodes in evolving graphs. Suitable for graph streaming applications.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/community-detection-online"},"community_detection_online")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"A dynamic community detection algorithm suitable for large-scale graphs based upon label propagation. Runs in O(m) time and has O(mn) space complexity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/katz-centrality-online"},"katz_centrality_online")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"Online implementation of the Katz centrality. Outputs the approximate result for Katz centrality while maintaining the order of rankings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/node2vec-online"},"node2vec_online")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"An algorithm for calculating node embeddings as new edges arrive.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/pagerank-online"},"pagerank_online")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"A dynamic algorithm made for calculating PageRank in a graph streaming scenario.")))),(0,r.kt)("h3",{id:"graph-ml-algorithms"},"Graph ML algorithms"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Algorithms"),(0,r.kt)("th",{parentName:"tr",align:null},"Lang"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/link-prediction-with-gnn"},"link_prediction_with_gnn")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"Module for predicting links in the graph by using graph neural networks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/node-classification-with-gnn"},"node-classification_with_gnn")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"Graph neural network-based node classification module")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/node2vec"},"node2vec")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"An algorithm for calculating node embeddings on static graph.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/temporal-graph-networks"},"temporal_graph_networks")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"A graph neural network (GNN) algorithm that can learn to predict new edges and node labels from the graph structure and available node and edge features.")))),(0,r.kt)("h3",{id:"utility-algorithms"},"Utility algorithms"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Algorithms"),(0,r.kt)("th",{parentName:"tr",align:null},"Lang"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/collections"},"collections")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"The collections module is a collection manipulation module that offers functions to work with lists in Cypher queries, allowing operations like filtering, sorting, and modification for efficient data handling.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/conditional-execution"},"conditional_execution")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"Define conditions not expressible in Cypher and and use them to control query execution.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/date"},"date")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"A module that provides various utilities to handle date and time operations within the Cypher Query Language.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/export-util"},"export_util")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"A module for exporting the graph database in different formats (JSON).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/graph-analyzer"},"graph_analyzer")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"This Graph Analyzer query module offers insights about the stored graph or a subgraph.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/graph-util"},"graph_util")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"A module with common graph algorithms and graph manipulation utilities")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/import-util"},"import_util")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"A module for importing data from different formats (JSON).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/json-util"},"json_util")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"A module for loading JSON from a local file or remote address.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/label"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"The label module provides an array of utilities for working with labels in a Memgraph database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/llm-util"},"llm_util")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"A module that contains procedures describing graphs in a format best suited for large language models (LLMs).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/map"},"map")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"The map module offers a versatile toolkit for manipulating collections of key-value pairs, enabling advanced data operations within a graph database context")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/meta-util"},"meta_util")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"A module that contains procedures describing graphs on a meta-level.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/neighbors"},"neighbors")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"The neighbors module allows users to interact with and query nodes that have direct relationships to a specified node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/migrate"},"migrate")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"A module that can access data from a MySQL, SQL Server or Oracle database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/periodic"},"periodic")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"A module containing procedures for periodically running difficult and/or memory/time consuming queries.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rust_example"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust"),(0,r.kt)("td",{parentName:"tr",align:null},"Example of a basic module with input parameters forwarding, made in Rust.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/temporal"},"temporal")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"A module that provides functions to handle temporal (time-related) operations and offers extended capabilities compared to the date module.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/text"},"text")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"A module for manipulating strings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cpp/uuid-generator"},"uuid_generator")),(0,r.kt)("td",{parentName:"tr",align:null},"C++"),(0,r.kt)("td",{parentName:"tr",align:null},"A module that generates a new universally unique identifier (UUID).")))),(0,r.kt)("h3",{id:"integrations"},"Integrations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Algorithms"),(0,r.kt)("th",{parentName:"tr",align:null},"Lang"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/cuda/cugraph"},"cugraph")),(0,r.kt)("td",{parentName:"tr",align:null},"CUDA"),(0,r.kt)("td",{parentName:"tr",align:null},"Collection of NVIDIA GPU-powered algorithms integrated in Memgraph. Includes centrality measures, link analysis and graph clusterings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/elasticsearch-synchronization"},"elasticsearch")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"A module used for synchronizing Memgraph and Elasticsearch.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/igraphalg"},"igraph")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"A module that provides igraph integration with Memgraph and implements many igraph algorithms.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/mage/query-modules/python/nxalg"},"nxalg")),(0,r.kt)("td",{parentName:"tr",align:null},"Python"),(0,r.kt)("td",{parentName:"tr",align:null},"A module that provides NetworkX integration with Memgraph and implements many NetworkX algorithms.")))))}i.isMDXComponent=!0}}]);