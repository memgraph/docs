"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25473],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||r;return n?i.createElement(h,o(o({ref:t},m),{},{components:n})):i.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58233:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],l={id:"community-detection-algorithm",title:"Community Detection",sidebar_label:"Community Detection"},s=void 0,c={unversionedId:"algorithms/traditional-graph-analytics/community-detection-algorithm",id:"algorithms/traditional-graph-analytics/community-detection-algorithm",isDocsHomePage:!1,title:"Community Detection",description:"Description",source:"@site/mage/algorithms/traditional-graph-analytics/community-detection.md",sourceDirName:"algorithms/traditional-graph-analytics",slug:"/algorithms/traditional-graph-analytics/community-detection-algorithm",permalink:"/docs/mage/algorithms/traditional-graph-analytics/community-detection-algorithm",editUrl:"https://github.com/memgraph/docs/tree/master/mage/algorithms/traditional-graph-analytics/community-detection.md",tags:[],version:"current",frontMatter:{id:"community-detection-algorithm",title:"Community Detection",sidebar_label:"Community Detection"},sidebar:"mage",previous:{title:"Bridge Detection",permalink:"/docs/mage/algorithms/traditional-graph-analytics/bridges-algorithm"},next:{title:"Cycle Detection",permalink:"/docs/mage/algorithms/traditional-graph-analytics/cycle-detection-algorithm"}},m=[{value:"Description",id:"description",children:[],level:2},{value:"Materials",id:"materials",children:[{value:"Implementation",id:"implementation",children:[],level:3}],level:2},{value:"Use cases",id:"use-cases",children:[],level:2}],p={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The notion of community in a graph represents similarly to what it represents in\nthe real world. Different social circles are examples of such communities.\nAnalogously, in graphs, ",(0,r.kt)("strong",{parentName:"p"},"community")," represents a partition of a graph, ie a\nset of nodes. ",(0,r.kt)("a",{parentName:"p",href:"https://scholar.google.com/citations?user=npKBI-oAAAAJ&hl=en"},"M.\nGirvan")," and ",(0,r.kt)("a",{parentName:"p",href:"http://www-personal.umich.edu/~mejn/"},"M. E.\nJ. Newman")," argue that nodes are more\nstrongly connected within a community, i.e. there are more edges, while on the\nother hand, nodes are sparsely connected between communities themselves."),(0,r.kt)("img",{src:"https://i.imgur.com/1kNLj8B.png",alt:"drawing"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Community detection labels each node with a community label. Here, labels are\ncolored in different colors.")),(0,r.kt)("p",null,"There are more potential candidates to address community detection. Among the\nmore popular algorithms are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Louvain_method"},"Louvain community detection")," -\nbased on modularity optimization - measures network connectivity within a\ncommunity"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.nature.com/articles/s41598-019-41695-z"},"Leiden community\ndetection")," - adjustment\nof Louvain's algorithm that introduces one level of refinement and brings\ntogether strongly connected communities"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Label_propagation_algorithm"},"Label\npropagation")," - a\nmachine learning technique that assigns labels to unmarked nodes and modifies\nthem with respect to neighbors")),(0,r.kt)("h2",{id:"materials"},"Materials"),(0,r.kt)("h3",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Not_implemented-EB3434?style=for-the-badge&logo=github&logoColor=white",alt:"Community\nDetection"})),(0,r.kt)("p",null,"Unfortunately, ",(0,r.kt)("strong",{parentName:"p"},"Community Detection")," is not yet implemented within the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,r.kt)("strong",{parentName:"a"},"MAGE"))," project. Be sure to raise the issue\non the GitHub repo and ping us to speed up the development. \u261d\ufe0f"),(0,r.kt)("h2",{id:"use-cases"},"Use cases"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mage/applications/finance-application"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Finance-Application-8A477F?style=for-the-badge",alt:"Finance"}))),(0,r.kt)("p",null,"One obvious usage of community detection is within the finance industry.\nFraudsters often think alike and act in criminal rings. That enables them to be\nmore efficient. However, such rings can easily be discovered with community\nmethods from their interactions/shared resources."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mage/applications/social-media-application"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Social_networks-Application-8A477F?style=for-the-badge",alt:"Social\nnetworks"}))),(0,r.kt)("p",null,"One major threat to freedom are terrorist groups. Such groups can organize their\nactivities through social media  channels. Once one of the users is exposed as a\npotential threat, others can be revealed by analyzing their community on social\nnetworks."),(0,r.kt)("p",null,"Interests are usually shared within the community. To target a specific\naudience, community detection can be used to recommend certain products among\nusers that are sharing interests."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/mage/applications/social-media-application"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Retail-Application-8A477F?style=for-the-badge",alt:"Retail"}))),(0,r.kt)("p",null,"As stated above in the social networks application. Similar can be applied to\nthe retail industry. Targetting like-minded people to access the same products\nis the crucial thing in marketing."))}u.isMDXComponent=!0}}]);