"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,b=p["".concat(d,".").concat(m)]||p[m]||s[m]||o;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},72250:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>m,assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),i=n(85162),l=n(83523);const d={id:"biconnected-components",title:"biconnected_components",sidebar_label:"biconnected_components"},c=void 0,u={unversionedId:"query-modules/cpp/biconnected-components",id:"query-modules/cpp/biconnected-components",title:"biconnected_components",description:"Finding biconnected components means finding a maximal biconnected subgraph. Subgraph is biconnected if:",source:"@site/mage/query-modules/cpp/biconnected_components.md",sourceDirName:"query-modules/cpp",slug:"/query-modules/cpp/biconnected-components",permalink:"/docs/mage/query-modules/cpp/biconnected-components",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/cpp/biconnected_components.md",tags:[],version:"current",frontMatter:{id:"biconnected-components",title:"biconnected_components",sidebar_label:"biconnected_components"},sidebar:"mage",previous:{title:"betweenness_centrality_online",permalink:"/docs/mage/query-modules/cpp/betweenness-centrality-online"},next:{title:"bipartite_matching",permalink:"/docs/mage/query-modules/cpp/bipartite-matching"}},s={},p=[{value:"Procedures",id:"procedures",level:2},{value:"<code>get()</code>",id:"get",level:3},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"Example",id:"example",level:2}],m=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},b={toc:p,Highlight:m};function g(e){let{components:t,...d}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Finding biconnected components means finding a maximal biconnected subgraph. Subgraph is biconnected if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is possible to go from each node to another within a biconnected subgraph"),(0,r.kt)("li",{parentName:"ul"},"First scenario remains true even after removing any vertex in the subgraph")),(0,r.kt)("p",null,"The algorithm works by finding articulation points, and then traversing from these articulation points toward other nodes, which all together form one biconnected component."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/cpp/biconnected_components_module/biconnected_components_module.cpp"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-biconnected_components-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trait"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Module type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"algorithm")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implementation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"C++")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Graph direction")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"undirected")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Edge weights")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"unweighted")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Parallelism")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"sequential")))))),(0,r.kt)("h2",{id:"procedures"},"Procedures"),(0,r.kt)(l.ZP,{mdxType:"RunOnSubgraph"}),(0,r.kt)("h3",{id:"get"},(0,r.kt)("inlineCode",{parentName:"h3"},"get()")),(0,r.kt)("h4",{id:"output"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bcc_id")," \u27a1 Biconnected component identifier. There is no order of nodes within one biconnected component."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node_from")," \u27a1 First node of an edge contained in biconnected component."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node_to")," \u27a1 Second node of an edge contained in biconnected component")),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL biconnected_components.get()\nYIELD bcc_id, node_from, node_to;\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(o.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"visualization",mdxType:"TabItem"},(0,r.kt)("img",{src:n(6786).Z})),(0,r.kt)(i.Z,{value:"cypher",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 2}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 1}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 0}) MERGE (b:Node {id: 6}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 6}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 7}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 5}) MERGE (b:Node {id: 8}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 7}) MERGE (b:Node {id: 8}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 8}) MERGE (b:Node {id: 9}) CREATE (a)-[:RELATION]->(b);\nMERGE (a:Node {id: 10}) MERGE (b:Node {id: 11}) CREATE (a)-[:RELATION]->(b);\n"))),(0,r.kt)(i.Z,{value:"run",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL biconnected_components.get()\nYIELD bcc_id, node_from, node_to\nWITH bcc_id, node_from, node_to\nMATCH (node_from)-[edge]-(node_to)\nRETURN bcc_id, edge, node_from, node_to;\n"))),(0,r.kt)(i.Z,{value:"result",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"+------------------+------------------+------------------+------------------+\n| bcc_id           | edge             | node_from        | node_to          |\n+------------------+------------------+------------------+------------------+\n| 0                | [:RELATION]      | (:Node {id: 2})  | (:Node {id: 4})  |\n| 0                | [:RELATION]      | (:Node {id: 3})  | (:Node {id: 4})  |\n| 0                | [:RELATION]      | (:Node {id: 1})  | (:Node {id: 3})  |\n| 0                | [:RELATION]      | (:Node {id: 2})  | (:Node {id: 3})  |\n| 0                | [:RELATION]      | (:Node {id: 1})  | (:Node {id: 2})  |\n| 1                | [:RELATION]      | (:Node {id: 8})  | (:Node {id: 9})  |\n| 2                | [:RELATION]      | (:Node {id: 5})  | (:Node {id: 8})  |\n| 2                | [:RELATION]      | (:Node {id: 7})  | (:Node {id: 8})  |\n| 2                | [:RELATION]      | (:Node {id: 5})  | (:Node {id: 7})  |\n| 3                | [:RELATION]      | (:Node {id: 0})  | (:Node {id: 6})  |\n| 3                | [:RELATION]      | (:Node {id: 5})  | (:Node {id: 6})  |\n| 3                | [:RELATION]      | (:Node {id: 1})  | (:Node {id: 5})  |\n| 3                | [:RELATION]      | (:Node {id: 0})  | (:Node {id: 1})  |\n| 4                | [:RELATION]      | (:Node {id: 10}) | (:Node {id: 11}) |\n+------------------+------------------+------------------+------------------+\n")))))}g.isMDXComponent=!0},83523:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,r.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}i.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),d=n(91980),c=n(67392),u=n(50012);function s(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[d,c]=b({queryString:n,groupId:a}),[s,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),E=(()=>{const e=d??s;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{E&&l(E)}),[E]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var E=n(72389);const N="tabList__CuJ",h="tabItem_LNqP";function f(e){let{className:t,block:n,selectedValue:l,selectValue:d,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:s}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(s(t),d(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",h,null==i?void 0:i.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",N)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function v(e){const t=(0,E.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},6786:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/biconnected-components-1-4a8b42aeb2149f9f31d1392e55ef1871.png"}}]);