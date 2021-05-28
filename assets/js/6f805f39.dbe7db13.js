(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6758],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14846:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o={id:"graph-analyzer",title:"Graph Analyzer query module",sidebar_label:"Graph Analyzer"},p={unversionedId:"reference-guide/networkx/graph-analyzer",id:"version-1.4.0/reference-guide/networkx/graph-analyzer",isDocsHomePage:!1,title:"Graph Analyzer query module",description:"This module offers insights about the stored graph or a subgraph.",source:"@site/memgraph_versioned_docs/version-1.4.0/reference-guide/networkx/graph-analyzer.md",sourceDirName:"reference-guide/networkx",slug:"/reference-guide/networkx/graph-analyzer",permalink:"/memgraph/1.4.0/reference-guide/networkx/graph-analyzer",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.4.0/reference-guide/networkx/graph-analyzer.md",version:"1.4.0",sidebar_label:"Graph Analyzer",frontMatter:{id:"graph-analyzer",title:"Graph Analyzer query module",sidebar_label:"Graph Analyzer"},sidebar:"version-1.4.0/memgraph",previous:{title:"NetworkX",permalink:"/memgraph/1.4.0/reference-guide/networkx"},next:{title:"NetworkX Algorithms",permalink:"/memgraph/1.4.0/reference-guide/networkx/nxalg"}},s=[{value:"<code>analyze(context, analyses)</code>",id:"analyzecontext-analyses",children:[{value:"Examples",id:"examples",children:[]}]},{value:"<code>analyze_subgraph(context, vertices, edges, analyses)</code>",id:"analyze_subgraphcontext-vertices-edges-analyses",children:[{value:"Examples",id:"examples-1",children:[]}]},{value:"<code>help()</code>",id:"help",children:[]}],i={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This module offers insights about the stored graph or a subgraph."),(0,l.kt)("h2",{id:"analyzecontext-analyses"},(0,l.kt)("inlineCode",{parentName:"h2"},"analyze(context, analyses)")),(0,l.kt)("p",null,"Shows graph information."),(0,l.kt)("p",null,"In case of multiple results, only the first 10 will be shown."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ctx")," (",(0,l.kt)("em",{parentName:"li"},"mgp.ProcCtx"),") \u2013 The context of the procedure being executed.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"analyses")," (",(0,l.kt)("em",{parentName:"li"},"mgp.Nullable[List","[str]","]"),") \u2013 (default=None)\nA list of graph analyses to run.\nIf NULL, all available analyses are run.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,"Information about the graph."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return type")),(0,l.kt)("p",null,"mgp.Record(name=str, value=str)"),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Return all information:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CALL graph_analyzer.analyze() YIELD * ;\n")),(0,l.kt)("p",null,"Call with parameter:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CALL graph_analyzer.analyze([\u2018nodes\u2019, \u2018edges\u2019]) YIELD * ;\n")),(0,l.kt)("h2",{id:"analyze_subgraphcontext-vertices-edges-analyses"},(0,l.kt)("inlineCode",{parentName:"h2"},"analyze_subgraph(context, vertices, edges, analyses)")),(0,l.kt)("p",null,"Shows subgraph information."),(0,l.kt)("p",null,"In case of multiple results, only the first 10 will be shown."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ctx")," (",(0,l.kt)("em",{parentName:"li"},"mgp.ProcCtx"),") \u2013 The context of the procedure being executed.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"vertices")," (",(0,l.kt)("em",{parentName:"li"},"mgp.List","[mgp.Vertex]"),") \u2013 List of vertices in the subgraph.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"edges")," (",(0,l.kt)("em",{parentName:"li"},"mgp.List","[mgp.Edge]"),") \u2013 List of edges in the subgraph.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"analyses")," (",(0,l.kt)("em",{parentName:"li"},"mgp.Nullable[List","[str]","]"),") \u2013 (default=None)\nA list of graph analyses to run.\nIf NULL, all available analyses are run.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",null,"Information about the subgraph."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Return type")),(0,l.kt)("p",null,"mgp.Record(name=str, value=str)"),(0,l.kt)("h3",{id:"examples-1"},"Examples"),(0,l.kt)("p",null,"Return all information:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"MATCH (n)-[e]->(m) WITH\ncollect(n) AS nodes,\ncollect(e) AS edges\nCALL graph_analyzer.analyze_subgraph(nodes, edges) YIELD *\nRETURN name, value;\n")),(0,l.kt)("p",null,"Call with parameter:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"MATCH (n)-[e]->(m) WITH\ncollect(n) AS nodes,\ncollect(e) AS edges\nCALL graph_analyzer.analyze_subgraph(nodes, edges, [\u2018nodes\u2019, \u2018edges\u2019])\nYIELD *\nRETURN name, value;\n")),(0,l.kt)("h2",{id:"help"},(0,l.kt)("inlineCode",{parentName:"h2"},"help()")),(0,l.kt)("p",null,"Shows manual page for graph_analyzer."))}u.isMDXComponent=!0}}]);