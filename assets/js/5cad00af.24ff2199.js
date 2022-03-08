"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64389],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),c=l,f=m["".concat(i,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72308:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},Highlight:function(){return c},default:function(){return h}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),o=n(9877),u=n(58215),i=["components"],s={id:"json-util",title:"json_util",sidebar_label:"json_util"},p=void 0,d={unversionedId:"query-modules/python/json-util",id:"query-modules/python/json-util",title:"json_util",description:"<span",source:"@site/mage/query-modules/python/json-util.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/json-util",permalink:"/docs/mage/query-modules/python/json-util",editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/json-util.md",tags:[],version:"current",frontMatter:{id:"json-util",title:"json_util",sidebar_label:"json_util"},sidebar:"mage",previous:{title:"graph_coloring",permalink:"/docs/mage/query-modules/python/graph-coloring"},next:{title:"max_flow",permalink:"/docs/mage/query-modules/python/max-flow"}},m=[{value:"Abstract",id:"abstract",children:[],level:2},{value:"Procedures",id:"procedures",children:[{value:"<code>load_from_path(path)</code>",id:"load_from_pathpath",children:[{value:"Input:",id:"input",children:[],level:4},{value:"Output:",id:"output",children:[],level:4},{value:"Usage:",id:"usage",children:[],level:4}],level:3},{value:"<code>load_from_url(url)</code>",id:"load_from_urlurl",children:[{value:"Input:",id:"input-1",children:[],level:4},{value:"Output:",id:"output-1",children:[],level:4},{value:"Usage:",id:"usage-1",children:[],level:4}],level:3}],level:2},{value:"Example - Loading JSON from path",id:"example---loading-json-from-path",children:[],level:2},{value:"Example - Loading JSON from URL",id:"example---loading-json-from-url",children:[],level:2}],c=function(e){var t=e.children,n=e.color;return(0,r.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},f={toc:m,Highlight:c};function h(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/json_util.py"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-json_util-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"A module for loading JSON from a local file or remote address. If the JSON that is being loaded is an array, then this module loads it as a stream of values, and if it is a map, the module loads it as a single value."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trait"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Module type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"util")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implementation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"Python")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Parallelism")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(c,{color:"#FB6E00",mdxType:"Highlight"},(0,r.kt)("strong",{parentName:"td"},"sequential")))))),(0,r.kt)("h2",{id:"procedures"},"Procedures"),(0,r.kt)("h3",{id:"load_from_pathpath"},(0,r.kt)("inlineCode",{parentName:"h3"},"load_from_path(path)")),(0,r.kt)("h4",{id:"input"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path: str")," \u27a1 Path to the JSON that is being loaded.")),(0,r.kt)("h4",{id:"output"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"objects: List[object]")," \u27a1 list of JSON objects from the file that is being loaded.")),(0,r.kt)("h4",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL json_util.load_from_path(path) \nYIELD objects\nRETURN objects;\n")),(0,r.kt)("h3",{id:"load_from_urlurl"},(0,r.kt)("inlineCode",{parentName:"h3"},"load_from_url(url)")),(0,r.kt)("h4",{id:"input-1"},"Input:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url: str")," \u27a1 URL to the JSON that is being loaded.")),(0,r.kt)("h4",{id:"output-1"},"Output:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"objects: List[object]")," \u27a1 list of JSON objects from the file that is being loaded.")),(0,r.kt)("h4",{id:"usage-1"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL json_util.load_from_url(url) \nYIELD objects\nRETURN objects;\n")),(0,r.kt)("h2",{id:"example---loading-json-from-path"},"Example - Loading JSON from path"),(0,r.kt)(o.Z,{groupId:"load_from_path_example",defaultValue:"file",values:[{label:"Step 1: Input file",value:"file"},{label:"Step 2: Running command",value:"run"},{label:"Step 3: Results",value:"result"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"file",mdxType:"TabItem"},(0,r.kt)("p",null,"  For example, let the input path be ",(0,r.kt)("inlineCode",{parentName:"p"},'"load-data/data.json"'),". There we can find ",(0,r.kt)("inlineCode",{parentName:"p"},"data.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "first_name": "Jessica",\n    "last_name": "Rabbit",\n    "pets": [\n        "dog",\n        "cat",\n        "bird"\n    ]\n}\n'))),(0,r.kt)(u.Z,{value:"run",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL json_util.load_from_path("load-data/data.json") \nYIELD objects\nUNWIND objects AS o\nRETURN o.first_name AS name, o.last_name AS surname;\n'))),(0,r.kt)(u.Z,{value:"result",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"+------------------+-------------------+\n| name             | surname           |\n+------------------+-------------------+\n| Jessica          | Rabbit            |\n+------------------+-------------------+\n\n")))),(0,r.kt)("h2",{id:"example---loading-json-from-url"},"Example - Loading JSON from URL"),(0,r.kt)(o.Z,{groupId:"load_from_url_example",defaultValue:"file",values:[{label:"Step 1: Input file",value:"file"},{label:"Step 2: Running command",value:"run"},{label:"Step 3: Results",value:"result"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"file",mdxType:"TabItem"},(0,r.kt)("p",null,"  For example, let the input URL be ",(0,r.kt)("inlineCode",{parentName:"p"},'"https://download.memgraph.com/asset/mage/data.json"'),". There we can find ",(0,r.kt)("inlineCode",{parentName:"p"},"data.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "first_name": "James",\n    "last_name": "Bond",\n    "pets": [\n        "dog",\n        "cat",\n        "fish"\n    ]\n}\n'))),(0,r.kt)(u.Z,{value:"run",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL json_util.load_from_url("https://download.memgraph.com/asset/mage/data.json") \nYIELD objects\nUNWIND objects AS o\nRETURN o.first_name AS name, o.last_name AS surname;\n'))),(0,r.kt)(u.Z,{value:"result",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"+------------------+-------------------+\n| name             | surname           |\n+------------------+-------------------+\n| James            | Bond              |\n+------------------+-------------------+\n\n")))))}h.isMDXComponent=!0},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(87462),l=n(67294),r=n(72389),o=n(29548),u=n(86010),i="tabItem_LplD";function s(e){var t,n,r,s=e.lazy,p=e.block,d=e.defaultValue,m=e.values,c=e.groupId,f=e.className,h=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),y=k.tabGroupChoices,N=k.setTabGroupChoices,j=(0,l.useState)(v),_=j[0],T=j[1],x=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var E=y[c];null!=E&&E!==_&&g.some((function(e){return e.value===E}))&&T(E)}var w=function(e){var t=e.currentTarget,n=x.indexOf(t),a=g[n].value;a!==_&&(O(t),T(a),null!=c&&N(c,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var l=x.indexOf(e.currentTarget)-1;n=x[l]||x[x.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},f)},g.map((function(e){var t=e.value,n=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return x.push(e)},onKeyDown:I,onFocus:w,onClick:w},r,{className:(0,u.Z)("tabs__item",i,null==r?void 0:r.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),s?(0,l.cloneElement)(h.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function p(e){var t=(0,r.Z)();return l.createElement(s,(0,a.Z)({key:String(t)},e))}}}]);