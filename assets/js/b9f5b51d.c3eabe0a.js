"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62061:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>m,assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),l=n(74866),o=n(85162),i=n(83523);const s={title:"meta_util",sidebar_label:"meta_util"},u=void 0,p={unversionedId:"query-modules/python/meta-util",id:"query-modules/python/meta-util",title:"meta_util",description:"A module that contains procedures describing graphs on a meta-level.",source:"@site/mage/query-modules/python/meta-util.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/meta-util",permalink:"/docs/mage/query-modules/python/meta-util",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/meta-util.md",tags:[],version:"current",frontMatter:{title:"meta_util",sidebar_label:"meta_util"},sidebar:"mage",previous:{title:"max_flow",permalink:"/docs/mage/query-modules/python/max-flow"},next:{title:"node_classification_with_gnn",permalink:"/docs/mage/query-modules/python/node-classification-with-gnn"}},c={},d=[{value:"Procedures",id:"procedures",level:2},{value:"<code>schema(include_properties)</code>",id:"schemainclude_properties",level:3},{value:"Input:",id:"input",level:4},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage",level:4},{value:"Example - Get graph schema without properties count",id:"example---get-graph-schema-without-properties-count",level:2},{value:"Example - Get graph schema with properties count",id:"example---get-graph-schema-with-properties-count",level:2}],m=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},h={toc:d,Highlight:m};function g(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A module that contains procedures describing graphs on a meta-level."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/meta_util.py"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-meta_util-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trait"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Module type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"util")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implementation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"Python")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Parallelism")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"sequential")))))),(0,r.kt)("h2",{id:"procedures"},"Procedures"),(0,r.kt)(i.ZP,{mdxType:"RunOnSubgraph"}),(0,r.kt)("h3",{id:"schemainclude_properties"},(0,r.kt)("inlineCode",{parentName:"h3"},"schema(include_properties)")),(0,r.kt)("p",null,"Knowing what kind of data, that is, what kind of nodes and relationships, are stored inside the database and how they're connected can be helpful. Besides that, each node or relationship can have a set of properties, and while loading the data in the database, you should be sure that a certain amount of graph objects has a particular property. That's where the number of graph objects with a particular property (property count) might come in handy. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"schema()")," procedure returns a list of distinct relationships connecting distinct nodes, that is, a graph schema. If ",(0,r.kt)("inlineCode",{parentName:"p"},"include_properties")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the graph schema will contain additional information about properties. "),(0,r.kt)("h4",{id:"input"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"include_properties: bool (default=false)")," \u27a1 If set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", the graph schema will include properties count information. ")),(0,r.kt)("h4",{id:"output"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nodes: List[Map]")," \u27a1 List of distinct node objects with their count. If ",(0,r.kt)("inlineCode",{parentName:"li"},"include_properties")," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", the node object contains properties count too."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"relationships: List[Map]")," \u27a1 List of distinct relationship objects with their count. If ",(0,r.kt)("inlineCode",{parentName:"li"},"include_properties")," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", the relationship object contains properties count too.")),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("p",null,"Get graph schema without properties count:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL meta_util.schema() \nYIELD nodes, relationships \nRETURN nodes, relationships;\n")),(0,r.kt)("p",null,"Get graph schema with properties count:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL meta_util.schema(true) \nYIELD nodes, relationships \nRETURN nodes, relationships;\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The queries above will return results in the graph view only in Memgraph Lab version >= 2.4.0. For earlier versions of the Memgraph Lab, call ",(0,r.kt)("inlineCode",{parentName:"p"},"UNWIND")," on returned object properties nodes and edges.")),(0,r.kt)("h2",{id:"example---get-graph-schema-without-properties-count"},"Example - Get graph schema without properties count"),(0,r.kt)(l.Z,{groupId:"get_schema_without_props",defaultValue:"graph1",values:[{label:"Create a graph",value:"graph1"},{label:"Run the command",value:"run1"},{label:"Graph result",value:"graph-result1"},{label:"Data result - nodes",value:"data-result-nodes1"},{label:"Data result - relationships",value:"data-result-relationships1"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"graph1",mdxType:"TabItem"},(0,r.kt)("p",null,"  Create a graph by running the following Cypher query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (n:Person {name: "Kate", age: 27})-[:IS_FRIENDS_WITH]->(m:Person:Student {name: "James", age: 30, year: "second"})-[:STUDIES_AT]->(:University {name: "University of Vienna"})\nWITH n, m\nCREATE (n)-[:LIVES_IN]->(:City {name: "Zagreb"})<-[:LIVES_IN]-(m);\n'))),(0,r.kt)(o.Z,{value:"run1",mdxType:"TabItem"},(0,r.kt)("p",null,"Once the graph is created, run the following code to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," procedure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL meta_util.schema() \nYIELD nodes, relationships \nRETURN nodes, relationships;\n"))),(0,r.kt)(o.Z,{value:"graph-result1",mdxType:"TabItem"},(0,r.kt)("p",null,"The graph result of the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," procedure can be seen in Memgraph Lab, and it looks like this:"),(0,r.kt)("div",{className:"imgRow"},(0,r.kt)("div",{className:"imgColumn"},(0,r.kt)("img",{src:n(52507).Z})),(0,r.kt)("div",{className:"imgColumn"},(0,r.kt)("img",{src:n(35737).Z})))),(0,r.kt)(o.Z,{value:"data-result-nodes1",mdxType:"TabItem"},(0,r.kt)("p",null,"Memgraph Lab can also return data results - a list of nodes and a list of relationships. Here is the obtained list of nodes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n   {\n      "id": 0,\n      "labels": [\n         "Person"\n      ],\n      "properties": {\n         "count": 1\n      },\n      "type": "node"\n   },\n   {\n      "id": 1,\n      "labels": [\n         "Person",\n         "Student"\n      ],\n      "properties": {\n         "count": 1\n      },\n      "type": "node"\n   },\n   {\n      "id": 2,\n      "labels": [\n         "University"\n      ],\n      "properties": {\n         "count": 1\n      },\n      "type": "node"\n   },\n   {\n      "id": 3,\n      "labels": [\n         "City"\n      ],\n      "properties": {\n         "count": 1\n      },\n      "type": "node"\n   }\n]\n'))),(0,r.kt)(o.Z,{value:"data-result-relationships1",mdxType:"TabItem"},(0,r.kt)("p",null,"Here is the obtained list of relationships:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n   {\n      "end": 1,\n      "id": 0,\n      "label": "IS_FRIENDS_WITH",\n      "properties": {\n         "count": 1\n      },\n      "start": 0,\n      "type": "relationship"\n   },\n   {\n      "end": 3,\n      "id": 1,\n      "label": "LIVES_IN",\n      "properties": {\n         "count": 1\n      },\n      "start": 0,\n      "type": "relationship"\n   },\n   {\n      "end": 2,\n      "id": 2,\n      "label": "STUDIES_AT",\n      "properties": {\n         "count": 1\n      },\n      "start": 1,\n      "type": "relationship"\n   },\n   {\n      "end": 3,\n      "id": 3,\n      "label": "LIVES_IN",\n      "properties": {\n         "count": 1\n      },\n      "start": 1,\n      "type": "relationship"\n   }\n]\n')))),(0,r.kt)("h2",{id:"example---get-graph-schema-with-properties-count"},"Example - Get graph schema with properties count"),(0,r.kt)(l.Z,{groupId:"get_schema",defaultValue:"graph",values:[{label:"Create a graph",value:"graph"},{label:"Run the command",value:"run"},{label:"Graph result",value:"graph-result"},{label:"Data result - nodes",value:"data-result-nodes"},{label:"Data result - relationships",value:"data-result-relationships"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"graph",mdxType:"TabItem"},(0,r.kt)("p",null,"  Create a graph by running the following Cypher query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (n:Person {name: "Kate", age: 27})-[:IS_FRIENDS_WITH]->(m:Person:Student {name: "James", age: 30, year: "second"})-[:STUDIES_AT]->(:University {name: "University of Vienna"})\nWITH n, m\nCREATE (n)-[:LIVES_IN]->(:City {name: "Zagreb"})<-[:LIVES_IN]-(m);\n'))),(0,r.kt)(o.Z,{value:"run",mdxType:"TabItem"},(0,r.kt)("p",null,"Once the graph is created, run the following code to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," procedure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL meta_util.schema(true) \nYIELD nodes, relationships \nRETURN nodes, relationships;\n"))),(0,r.kt)(o.Z,{value:"graph-result",mdxType:"TabItem"},(0,r.kt)("p",null,"The graph result of the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," procedure can be seen in Memgraph Lab, and it looks like this:"),(0,r.kt)("div",{className:"imgRow"},(0,r.kt)("div",{className:"imgColumn"},(0,r.kt)("img",{src:n(52507).Z})),(0,r.kt)("div",{className:"imgColumn"},(0,r.kt)("img",{src:n(17753).Z})))),(0,r.kt)(o.Z,{value:"data-result-nodes",mdxType:"TabItem"},(0,r.kt)("p",null,"Memgraph Lab can also return data results - a list of nodes and a list of relationships. Here is the obtained list of nodes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n   {\n      "id": 0,\n      "labels": [\n         "Person"\n      ],\n      "properties": {\n         "count": 1,\n         "properties_count": {\n            "age": 1,\n            "name": 1\n         }\n      },\n      "type": "node"\n   },\n   {\n      "id": 1,\n      "labels": [\n         "Person",\n         "Student"\n      ],\n      "properties": {\n         "count": 1,\n         "properties_count": {\n            "age": 1,\n            "name": 1,\n            "year": 1\n         }\n      },\n      "type": "node"\n   },\n   {\n      "id": 2,\n      "labels": [\n         "University"\n      ],\n      "properties": {\n         "count": 1,\n         "properties_count": {\n            "name": 1\n         }\n      },\n      "type": "node"\n   },\n   {\n      "id": 3,\n      "labels": [\n         "City"\n      ],\n      "properties": {\n         "count": 1,\n         "properties_count": {\n            "name": 1\n         }\n      },\n      "type": "node"\n   }\n]\n'))),(0,r.kt)(o.Z,{value:"data-result-relationships",mdxType:"TabItem"},(0,r.kt)("p",null,"Here is the obtained list of relationships:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n   {\n      "end": 1,\n      "id": 0,\n      "label": "IS_FRIENDS_WITH",\n      "properties": {\n         "count": 1,\n         "properties_count": {}\n      },\n      "start": 0,\n      "type": "relationship"\n   },\n   {\n      "end": 3,\n      "id": 1,\n      "label": "LIVES_IN",\n      "properties": {\n         "count": 1,\n         "properties_count": {}\n      },\n      "start": 0,\n      "type": "relationship"\n   },\n   {\n      "end": 2,\n      "id": 2,\n      "label": "STUDIES_AT",\n      "properties": {\n         "count": 1,\n         "properties_count": {}\n      },\n      "start": 1,\n      "type": "relationship"\n   },\n   {\n      "end": 3,\n      "id": 3,\n      "label": "LIVES_IN",\n      "properties": {\n         "count": 1,\n         "properties_count": {}\n      },\n      "start": 1,\n      "type": "relationship"\n   }\n]\n')))))}g.isMDXComponent=!0},83523:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,r.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}o.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(87462),r=n(67294),l=n(86010),o=n(12466),i=n(16550),s=n(91980),u=n(67392),p=n(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=h({queryString:n,groupId:a}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=s??c;return m({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var b=n(72389);const f="tabList__CuJ",k="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==i&&(c(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",k,null==o?void 0:o.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function T(e){const t=(0,b.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},52507:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/meta_result-7846bf471bd5a034b0ee6f06cf54cc82.png"},17753:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/meta_result_count-b9a3182161e2ece0657f113c2646efed.png"},35737:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/meta_result_count_without_props-ca9683f397bbdc7f425b1c038189b567.png"}}]);