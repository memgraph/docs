"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78796],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91982:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>d,assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),l=n(74866),o=n(85162),s=n(83523);const i={id:"set-cover",title:"set_cover",sidebar_label:"set_cover"},u=void 0,p={unversionedId:"query-modules/python/set-cover",id:"query-modules/python/set-cover",title:"set_cover",description:"The Set Cover problem is one of the problems in graph theory that tries to solve the least possible set of sets that covers all elements inside those sets. Given a set of n elements, and a collection of m sets containing them, the algorithm tries to identify the smallest sub-collection of sets whose union equal to all the elements.",source:"@site/mage/query-modules/python/set-cover.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/set-cover",permalink:"/docs/mage/query-modules/python/set-cover",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/set-cover.md",tags:[],version:"current",frontMatter:{id:"set-cover",title:"set_cover",sidebar_label:"set_cover"},sidebar:"mage",previous:{title:"periodic",permalink:"/docs/mage/query-modules/cpp/periodic"},next:{title:"temporal",permalink:"/docs/mage/query-modules/python/temporal"}},c={},m=[{value:"Procedures",id:"procedures",level:2},{value:"<code>cp_solve(element_vertexes, set_vertexes)</code>",id:"cp_solveelement_vertexes-set_vertexes",level:3},{value:"Input",id:"input",level:4},{value:"Output",id:"output",level:4},{value:"Usage",id:"usage",level:4},{value:"Example",id:"example",level:2},{value:"<code>greedy(context, element_vertexes, set_vertexes)</code>",id:"greedycontext-element_vertexes-set_vertexes",level:2},{value:"Input",id:"input-1",level:4},{value:"Output",id:"output-1",level:4},{value:"Usage",id:"usage-1",level:4}],d=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},h={toc:m,Highlight:d};function g(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The Set Cover")," problem is one of the problems in graph theory that tries to solve the least possible set of sets that covers all elements inside those sets. Given a set of ",(0,r.kt)("em",{parentName:"p"},"n")," elements, and a collection of ",(0,r.kt)("em",{parentName:"p"},"m")," sets containing them, the algorithm tries to identify the ",(0,r.kt)("strong",{parentName:"p"},"smallest sub-collection")," of sets whose union equal to all the elements.\nIt is ",(0,r.kt)("em",{parentName:"p"},"NP-complete"),", however solvable with techniques such as constraint programming. The current algorithm uses ",(0,r.kt)("em",{parentName:"p"},"GEKKO")," optimizer as a constraint programming solver."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/set_cover.py"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-set_cover-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trait"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Module type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"module")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implementation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"Python")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Graph direction")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"undirected")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Edge weights")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"unweighted")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Parallelism")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(d,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"sequential")))))),(0,r.kt)("admonition",{title:"Too slow?",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If this algorithm implementation is too slow for your use case, ",(0,r.kt)("a",{parentName:"p",href:"mailto:tech@memgraph.com"},"contact us")," and request a rewrite to C++ !")),(0,r.kt)("h2",{id:"procedures"},"Procedures"),(0,r.kt)(s.ZP,{mdxType:"RunOnSubgraph"}),(0,r.kt)("h3",{id:"cp_solveelement_vertexes-set_vertexes"},(0,r.kt)("inlineCode",{parentName:"h3"},"cp_solve(element_vertexes, set_vertexes)")),(0,r.kt)("h4",{id:"input"},"Input"),(0,r.kt)("p",null,"The input itself represents an ",(0,r.kt)("em",{parentName:"p"},"element-set")," pair with each row of the lists."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"element_vertexes: List[Vertex]")," \u27a1 List of element nodes in pairs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set_vertexes: List[Vertex]")," \u27a1 List of set nodes in pairs")),(0,r.kt)("h4",{id:"output"},"Output"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"containing_set")," \u27a1 minimal set of sets in which all the elements are contained")),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL set_cover.cp_solve([(:Point), (:Point)], [(:Set), (:Set)])\nYIELD containing_set;\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(l.Z,{groupId:"example",defaultValue:"visualization",values:[{label:"Step 1: Input graph",value:"visualization"},{label:"Step 2: Cypher load commands",value:"cypher"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"visualization",mdxType:"TabItem"},(0,r.kt)("img",{src:n(65961).Z})),(0,r.kt)(o.Z,{value:"cypher",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (e:AnimalSpecies {name: 'Snake'});\nCREATE (e:AnimalSpecies {name: 'Bear'});\nCREATE (e:AnimalSpecies {name: 'Falcon'});\nCREATE (e:AnimalSpecies {name: 'Beaver'});\nCREATE (e:AnimalSpecies {name: 'Fox'});\n\nCREATE (s:NationalPark {name: 'Yosemite'});\nCREATE (s:NationalPark {name: 'Grand Canyon'});\nCREATE (s:NationalPark {name: 'Yellowstone'});\nCREATE (s:NationalPark {name: 'Glacier'});\nCREATE (s:NationalPark {name: 'Everglades'});\n\nMATCH (e: AnimalSpecies {name: 'Snake'}), (s:NationalPark {name: 'Yosemite'})\nCREATE (e)-[:LIVES_IN]->(s);\nMATCH (e: AnimalSpecies {name: 'Bear'}), (s:NationalPark {name: 'Yosemite'})\nCREATE (e)-[:LIVES_IN]->(s);\nMATCH (e: AnimalSpecies {name: 'Falcon'}), (s:NationalPark {name: 'Yosemite'})\nCREATE (e)-[:LIVES_IN]->(s);\nMATCH (e: AnimalSpecies {name: 'Beaver'}), (s:NationalPark {name: 'Yosemite'})\nCREATE (e)-[:LIVES_IN]->(s);\n\nMATCH (e: AnimalSpecies {name: 'Fox'}), (s:NationalPark {name: 'Yellowstone'})\nCREATE (e)-[:LIVES_IN]->(s);\nMATCH (e: AnimalSpecies {name: 'Beaver'}), (s:NationalPark {name: 'Yellowstone'})\nCREATE (e)-[:LIVES_IN]->(s);\n\nMATCH (e: AnimalSpecies {name: 'Snake'}), (s:NationalPark {name: 'Glacier'})\nCREATE (e)-[:LIVES_IN]->(s);\nMATCH (e: AnimalSpecies {name: 'Bear'}), (s:NationalPark {name: 'Glacier'})\nCREATE (e)-[:LIVES_IN]->(s);\n\nMATCH (e: AnimalSpecies {name: 'Falcon'}), (s:NationalPark {name: 'Everglades'})\nCREATE (e)-[:LIVES_IN]->(s);\n\n"))),(0,r.kt)(o.Z,{value:"run",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (e:AnimalSpecies)-[l:LIVES_IN]-(s:NationalPark)\nWITH collect(e) AS animal_list, collect(s) AS park_list\nCALL set_cover.cp_solve(animal_list, park_list)\nYIELD containing_set\nWITH containing_set AS national_park\nMATCH (animal:AnimalSpecies)-[l:LIVES_IN]->(national_park)\nRETURN animal, l, national_park;\n"))),(0,r.kt)(o.Z,{value:"result",mdxType:"TabItem"},(0,r.kt)("img",{src:n(83324).Z}))),(0,r.kt)("h2",{id:"greedycontext-element_vertexes-set_vertexes"},(0,r.kt)("inlineCode",{parentName:"h2"},"greedy(context, element_vertexes, set_vertexes)")),(0,r.kt)("p",null,"Not bad, not terrible."),(0,r.kt)("h4",{id:"input-1"},"Input"),(0,r.kt)("p",null,"The input itself represents an ",(0,r.kt)("em",{parentName:"p"},"element-set")," pair with each row of the lists."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"element_vertexes: List[Vertex]")," \u27a1 List of element nodes in pairs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set_vertexes: List[Vertex]")," \u27a1 List of set nodes in pairs")),(0,r.kt)("h4",{id:"output-1"},"Output"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"containing_set")," \u27a1 minimal set of sets in which all the elements are contained")),(0,r.kt)("h4",{id:"usage-1"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL set_cover.greedy([(:Point), (:Point)], [(:Set), (:Set)])\nYIELD containing_set;\n")))}g.isMDXComponent=!0},83523:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,r.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}o.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(87462),r=n(67294),l=n(86010),o=n(12466),s=n(16550),i=n(91980),u=n(67392),p=n(50012);function c(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,u]=h({queryString:n,groupId:a}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),v=(()=>{const e=i??c;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var v=n(72389);const k="tabList__CuJ",f="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==s&&(c(t),i(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",f,null==o?void 0:o.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function E(e){const t=(0,v.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},65961:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/set-cover-1-28a31b4a1d04e75504177518fadeaa45.png"},83324:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/set-cover-2-5c72e2dbe4826678e306bb115560e1e4.png"}}]);