"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54862],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52664:function(e,t,n){n.r(t),n.d(t,{Highlight:function(){return h},assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=n(9877),i=n(58215),u=["components"],p={id:"export-util",title:"export_util",sidebar_label:"export_util"},s=void 0,d={unversionedId:"query-modules/python/export-util",id:"query-modules/python/export-util",title:"export_util",description:"docs-source",source:"@site/mage/query-modules/python/export-util.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/export-util",permalink:"/docs/mage/query-modules/python/export-util",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/export-util.md",tags:[],version:"current",frontMatter:{id:"export-util",title:"export_util",sidebar_label:"export_util"},sidebar:"mage",previous:{title:"distance_calculator",permalink:"/docs/mage/query-modules/python/distance-calculator"},next:{title:"graph_analyzer",permalink:"/docs/mage/query-modules/python/graph-analyzer"}},c={},m=[{value:"Abstract",id:"abstract",level:2},{value:"Procedures",id:"procedures",level:2},{value:"<code>json(path)</code>",id:"jsonpath",level:3},{value:"Input:",id:"input",level:4},{value:"Usage:",id:"usage",level:4},{value:"Example - Exporting database to a JSON file",id:"example---exporting-database-to-a-json-file",level:2}],h=function(e){var t=e.children,n=e.color;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},f={toc:m,Highlight:h};function g(e){var t=e.components,p=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/export_util.py"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-export_util-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"Module for exporting a graph database in different formats. Currently, this\nmodule supports only the export to JSON file format."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Trait"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Module type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(h,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"util")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Implementation")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(h,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"Python")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Parallelism")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(h,{color:"#FB6E00",mdxType:"Highlight"},(0,o.kt)("strong",{parentName:"td"},"sequential")))))),(0,o.kt)("h2",{id:"procedures"},"Procedures"),(0,o.kt)("h3",{id:"jsonpath"},(0,o.kt)("inlineCode",{parentName:"h3"},"json(path)")),(0,o.kt)("h4",{id:"input"},"Input:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path: string")," \u27a1 Path to the JSON file containing the exported graph database.")),(0,o.kt)("h4",{id:"usage"},"Usage:"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," you have to provide as procedure argument depends on how you started\nMemgraph."),(0,o.kt)(l.Z,{groupId:"export_to_json_usage",defaultValue:"docker",values:[{label:"Docker",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,o.kt)("p",null,"If you ran Memgraph with Docker, database will be exported to a JSON file inside\nthe Docker container. We recommend exporting the database to the JSON file\ninside the ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory."),(0,o.kt)("p",null,"You can call the procedure by running the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL export_util.json(path);\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," is the path to the JSON file inside the\n",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory in the running Docker container (e.g.,\n",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules/export.json"),")."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can copy the exported JSON file to your local file system using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/cp/"},(0,o.kt)("inlineCode",{parentName:"a"},"docker cp"))," command: "),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"docker cp <container_id>:/usr/lib/memgraph/query_modules/export.json /path_to_local_folder/export.json\n"))))),(0,o.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("p",null,"To export database to a local JSON file create a new directory (for example,\n",(0,o.kt)("inlineCode",{parentName:"p"},"export_folder"),") and run the following command to give the user ",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph")," the\nnecessary permissions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo chown memgraph export_folder\n")),(0,o.kt)("p",null,"Then, call the procedure by running the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL export_util.json(path);\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," is the path to a local JSON file that will be created inside the\n",(0,o.kt)("inlineCode",{parentName:"p"},"export_folder")," (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"/users/my_user/export_folder/export.json"),")."))),(0,o.kt)("h2",{id:"example---exporting-database-to-a-json-file"},"Example - Exporting database to a JSON file"),(0,o.kt)(l.Z,{groupId:"export_to_json_example",defaultValue:"input",values:[{label:"Step 1: Cypher load commands",value:"load"},{label:"Step 2: Input graph",value:"input"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"load",mdxType:"TabItem"},(0,o.kt)("p",null,"You can create a simple graph database by running the following queries:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (n:Person {name:"Anna"}), (m:Person {name:"John"}), (k:Person {name:"Kim"})\nCREATE (n)-[:IS_FRIENDS_WITH]->(m), (n)-[:IS_FRIENDS_WITH]->(k), (m)-[:IS_MARRIED_TO]->(k);\n'))),(0,o.kt)(i.Z,{value:"input",mdxType:"TabItem"},(0,o.kt)("p",null,"Below you can see how the data looks like after you created the nodes and relationships:"),(0,o.kt)("img",{src:n(94395).Z})),(0,o.kt)(i.Z,{value:"run",mdxType:"TabItem"},(0,o.kt)("p",null,"If you're using ",(0,o.kt)("strong",{parentName:"p"},"Memgraph with Docker"),", then the following Cypher query will\nexport the database to the ",(0,o.kt)("inlineCode",{parentName:"p"},"export.json")," file in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory inside the running Docker container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL export_util.json("/usr/lib/memgraph/query_modules/export.json");\n')),(0,o.kt)("p",null,"If you're using ",(0,o.kt)("strong",{parentName:"p"},"Memgraph on Ubuntu, Debian, RPM package or WSL"),", then the\nfollowing Cypher query will export the database to the ",(0,o.kt)("inlineCode",{parentName:"p"},"export.json")," file in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"/users/my_user/export_folder"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL export_util.json("/users/my_user/export_folder/export.json");\n'))),(0,o.kt)(i.Z,{value:"result",mdxType:"TabItem"},(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"export.json")," file should be similar to the one below, except for the\n",(0,o.kt)("inlineCode",{parentName:"p"},"id")," values that depend on the internal database ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": 6114,\n        "labels": [\n            "Person"\n        ],\n        "properties": {\n            "name": "Anna"\n        },\n        "type": "node"\n    },\n    {\n        "id": 6115,\n        "labels": [\n            "Person"\n        ],\n        "properties": {\n            "name": "John"\n        },\n        "type": "node"\n    },\n    {\n        "id": 6116,\n        "labels": [\n            "Person"\n        ],\n        "properties": {\n            "name": "Kim"\n        },\n        "type": "node"\n    },\n    {\n        "end": 6115,\n        "id": 21120,\n        "label": "IS_FRIENDS_WITH",\n        "properties": {},\n        "start": 6114,\n        "type": "relationship"\n    },\n    {\n        "end": 6116,\n        "id": 21121,\n        "label": "IS_FRIENDS_WITH",\n        "properties": {},\n        "start": 6114,\n        "type": "relationship"\n    },\n    {\n        "end": 6116,\n        "id": 21122,\n        "label": "IS_MARRIED_TO",\n        "properties": {},\n        "start": 6115,\n        "type": "relationship"\n    }\n]\n')))))}g.isMDXComponent=!0},58215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(87462),a=n(67294),o=n(72389),l=n(5979),i=n(86010),u="tabItem_LplD";function p(e){var t,n,o,p=e.lazy,s=e.block,d=e.defaultValue,c=e.values,m=e.groupId,h=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.lx)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.UB)(),v=b.tabGroupChoices,N=b.setTabGroupChoices,x=(0,a.useState)(y),_=x[0],w=x[1],T=[],C=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=v[m];null!=E&&E!==_&&g.some((function(e){return e.value===E}))&&w(E)}var O=function(e){var t=e.currentTarget,n=T.indexOf(t),r=g[n].value;r!==_&&(C(t),w(r),null!=m&&N(m,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},h)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:O,onClick:O},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),p?(0,a.cloneElement)(f.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function s(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},94395:function(e,t,n){t.Z=n.p+"assets/images/export-util-1-6f272764c2ffb63fae58905c1dded702.png"}}]);