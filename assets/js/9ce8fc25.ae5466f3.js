(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{244:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(345)),i={id:"overview",title:"MAGE - Memgraph Advanced Graph Extensions \ud83d\udd2e",sidebar_label:"Overview",slug:"/"},l={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"MAGE - Memgraph Advanced Graph Extensions \ud83d\udd2e",description:"MAGE, also known as Memgraph Advanced Graph Extensions, is an",source:"@site/mage/overview.md",slug:"/",permalink:"/mage/",editUrl:"https://github.com/memgraph/docs/tree/master/mage/overview.md",version:"current",sidebar_label:"Overview",sidebar:"mage",next:{title:"How to install MAGE?",permalink:"/mage/installation"}},c=[{value:"MAGE query modules",id:"mage-query-modules",children:[]},{value:"Spellbook \ud83d\udcd6 - Currently available modules",id:"spellbook----currently-available-modules",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"MAGE"),", also known as ",Object(o.b)("strong",{parentName:"p"},"Memgraph Advanced Graph Extensions"),", is an\nopen-source repository that contains all available query modules written by the\nteam behind Memgraph and its users. You can find and contribute implementations\nof various algorithms in multiple programming languages, all runnable inside\nMemgraph. This project aims to give everyone the tools they need to tackle the\nmost interesting and challenging graph analytics problems. "),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"GitHub repository ")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You can find the official GitHub repository here: ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/memgraph/mage"},"MAGE on GitHub\n")),"."))),Object(o.b)("h2",{id:"mage-query-modules"},"MAGE query modules"),Object(o.b)("p",null,"Memgraph introduces the concept of ",Object(o.b)("strong",{parentName:"p"},"query modules"),", user-defined procedures\nthat extend the ",Object(o.b)("strong",{parentName:"p"},"Cypher query language"),". These procedures are grouped into\nmodules that can be loaded into Memgraph. You can find more information on query\nmodules in the official ",Object(o.b)("a",{parentName:"p",href:"https://docs.memgraph.com/memgraph/database-functionalities/query-modules/built-in-query-modules"},"Memgraph\ndocumentation"),"."),Object(o.b)("h2",{id:"spellbook----currently-available-modules"},"Spellbook \ud83d\udcd6 - Currently available modules"),Object(o.b)("p",null,"Query modules implemented in ",Object(o.b)("strong",{parentName:"p"},"Python"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"/mage/query-modules/python/nxalg"},"nxalg")),": A module that provides NetworkX\nintegration with Memgraph and implements many NetworkX algorithms.  "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"/mage/query-modules/python/graph-analyzer"},"graph_analyzer")),": This Graph\nAnalyzer query module offers insights about the stored graph or a subgraph."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"/mage/query-modules/python/graph-analyzer"},"graph_coloring")),": Algorithm for\nassigning labels to the graph elements subject to certain constraints. In this\nform, it is a way of coloring the graph vertices such that no two adjacent\nvertices are of the same color."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"/mage/query-modules/python/distance-calculator"},"distance_calculator")),":\nModule for finding the geographical distance between two points defined with\n'lng' and 'lat' coordinates."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"/mage/query-modules/python/tsp"},"tsp")),": An algorithm for finding the shortest\npossible route that visits each vertex exactly once."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"/mage/query-modules/python/set-cover"},"set_cover")),": The algorithm for finding\nminimum cost subcollection of sets that covers all elements of a universe."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"/mage/query-modules/python/collapse"},"collapse")),": Module for collapsing\nspecifically connected graph nodes into different subgraphs.")),Object(o.b)("p",null,"Query modules implemented in ",Object(o.b)("strong",{parentName:"p"},"C/C++"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/memgraph/mage/tree/main/cpp/connectivity_module"},"connectivity_module")),":\nA module that finds weakly connected components in a graph."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("a",{parentName:"strong",href:"https://github.com/memgraph/mage/tree/main/cpp/biconnected_components_module"},"biconnected_components_module")),":\nModule for finding biconnected components of the graph.")))}p.isMDXComponent=!0},345:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),b=r,d=m["".concat(i,".").concat(b)]||m[b]||u[b]||o;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);