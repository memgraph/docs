"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34796],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=i(a),d=n,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(h,o(o({ref:t},s),{},{components:a})):r.createElement(h,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3034:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>u,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),l=a(74866),o=a(85162);const u={id:"set-or-update-objects",title:"How to set or update objects",sidebar_label:"Set or update objects"},p=void 0,i={unversionedId:"how-to-guides/query-builder/set-or-update-objects",id:"how-to-guides/query-builder/set-or-update-objects",title:"How to set or update objects",description:"The set_() method is used to set or update labels on nodes, and properties on",source:"@site/gqlalchemy/how-to-guides/query-builder/set-or-update-objects.md",sourceDirName:"how-to-guides/query-builder",slug:"/how-to-guides/query-builder/set-or-update-objects",permalink:"/docs/gqlalchemy/how-to-guides/query-builder/set-or-update-objects",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/gqlalchemy/how-to-guides/query-builder/set-or-update-objects.md",tags:[],version:"current",frontMatter:{id:"set-or-update-objects",title:"How to set or update objects",sidebar_label:"Set or update objects"},sidebar:"gqlalchemy",previous:{title:"Delete and remove objects",permalink:"/docs/gqlalchemy/how-to-guides/query-builder/delete-remove-objects"},next:{title:"Kafka streams",permalink:"/docs/gqlalchemy/how-to-guides/streams/manage-kafka-streams"}},s={},c=[{value:"Set or update a property",id:"set-or-update-a-property",level:2},{value:"Set or update multiple properties",id:"set-or-update-multiple-properties",level:2},{value:"Set a label",id:"set-a-label",level:2},{value:"Replace all properties using map",id:"replace-all-properties-using-map",level:2},{value:"Update all properties using map",id:"update-all-properties-using-map",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"set_()")," method is used to set or update labels on nodes, and properties on\nnodes and relationships."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set_(self, item: str, operator: Operator, **kwargs)")," - sets or updates the\nvalue of item to ",(0,n.kt)("inlineCode",{parentName:"li"},"literal")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"expression")," value, depending on the ",(0,n.kt)("inlineCode",{parentName:"li"},"operator"),".")),(0,n.kt)("h2",{id:"set-or-update-a-property"},"Set or update a property"),(0,n.kt)("p",null,"You can assign a value to a node property with the query builder's ",(0,n.kt)("inlineCode",{parentName:"p"},"set_()"),"\nmethod. The used assignment operator is imported from the query builder. You can\nalso use a simple equals sign as a string - ",(0,n.kt)("inlineCode",{parentName:"p"},'"="'),"."),(0,n.kt)(l.Z,{defaultValue:"gqlalchemy",values:[{label:"GQLAlchemy",value:"gqlalchemy"},{label:"Cypher",value:"cypher"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"gqlalchemy",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from gqlalchemy import Match\nfrom gqlalchemy.query_builders.memgraph_query_builder import Operator\n\nquery = Match()\n        .node(labels="Country", variable="c", name="Germany")\n        .set_(item="c.population", operator=Operator.ASSIGNMENT, literal=83000001)\n        .return_()\n        .execute()\n'))),(0,n.kt)(o.Z,{value:"cypher",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country {name: 'Germany'}) SET c.population = 83000001 RETURN *;\n")))),(0,n.kt)("p",null,"If the node already had the ",(0,n.kt)("inlineCode",{parentName:"p"},"population")," property, it will be updated by setting\nit to a new value."),(0,n.kt)("h2",{id:"set-or-update-multiple-properties"},"Set or update multiple properties"),(0,n.kt)(l.Z,{defaultValue:"gqlalchemy",values:[{label:"GQLAlchemy",value:"gqlalchemy"},{label:"Cypher",value:"cypher"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"gqlalchemy",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from gqlalchemy import Match\nfrom gqlalchemy.query_builders.memgraph_query_builder import Operator\n\nquery = Match()\n        .node(variable='n')\n        .where(item='n.name', operator='=', literal='Germany')\n        .set_(item='n.population', operator=Operator.ASSIGNMENT, literal=83000001)\n        .set_(item='n.capital', operator=Operator.ASSIGNMENT, literal='Berlin')\n        .return_()\n        .execute()\n"))),(0,n.kt)(o.Z,{value:"cypher",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) WHERE n.name = 'Germany' SET n.population = 83000001 SET n.capital = 'Berlin' RETURN *;\n")))),(0,n.kt)("p",null,"If the node already had the ",(0,n.kt)("inlineCode",{parentName:"p"},"population")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"capital")," properties, they will be\nupdated to a new value."),(0,n.kt)("h2",{id:"set-a-label"},"Set a label"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"set()")," method can be used to set a label of a node. If a node already\nhas a label, then it will have both old and new label."),(0,n.kt)(l.Z,{"defaultValu\xdfe":"gqlalchemy",values:[{label:"GQLAlchemy",value:"gqlalchemy"},{label:"Cypher",value:"cypher"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"gqlalchemy",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from gqlalchemy import Match\nfrom gqlalchemy.query_builders.memgraph_query_builder import Operator\n\nquery = Match()\n        .node(variable="c", name="Germany")\n        .set_(item="c", operator=Operator.LABEL_FILTER, expression="Land")\n        .return_()\n        .execute()\n'))),(0,n.kt)(o.Z,{value:"cypher",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c {name: 'Germany'}) SET c:Land RETURN *;\n")))),(0,n.kt)("h2",{id:"replace-all-properties-using-map"},"Replace all properties using map"),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"set()")," is used with the ",(0,n.kt)("inlineCode",{parentName:"p"},"Operator.ASSIGNMENT")," (",(0,n.kt)("inlineCode",{parentName:"p"},"="),"), all the properties\nin the map (value of the ",(0,n.kt)("inlineCode",{parentName:"p"},"literal")," argument) that are on the node or\nrelationship will be updated. The properties that are not on the node or\nrelationship but are in the map will be added. The properties that are not in\nthe map will be removed."),(0,n.kt)(l.Z,{defaultValue:"gqlalchemy",values:[{label:"GQLAlchemy",value:"gqlalchemy"},{label:"Cypher",value:"cypher"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"gqlalchemy",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from gqlalchemy import Match\nfrom gqlalchemy.query_builders.memgraph_query_builder import Operator\n\nquery = Match()\n        .node(variable='c', labels='Country')\n        .where(item='c.name', operator='=', literal='Germany')\n        .set_(item='c', operator=Operator.ASSIGNMENT, literal={'name': 'Germany', 'population': '85000000'})\n        .return_()\n        .execute()\n"))),(0,n.kt)(o.Z,{value:"cypher",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country) WHERE c.name = 'Germany' SET c = {name: 'Germany', population: '85000000'} RETURN *;\n")))),(0,n.kt)("h2",{id:"update-all-properties-using-map"},"Update all properties using map"),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"set()")," is used with the ",(0,n.kt)("inlineCode",{parentName:"p"},"Operator.INCREMENT")," (",(0,n.kt)("inlineCode",{parentName:"p"},"+="),"), all the properties\nin the map (value of the ",(0,n.kt)("inlineCode",{parentName:"p"},"literal")," argument) that are on the node or\nrelationship will be updated. The properties that are not on the node or\nrelationship but are in the map will be added. Properties that are not present\nin the map will be left as is."),(0,n.kt)(l.Z,{defaultValue:"gqlalchemy",values:[{label:"GQLAlchemy",value:"gqlalchemy"},{label:"Cypher",value:"cypher"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"gqlalchemy",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from gqlalchemy import Match\nfrom gqlalchemy.query_builders.memgraph_query_builder import Operator\n\nquery = Match()\n        .node(variable='c', labels='Country')\n        .where(item='c.name', operator='=', literal='Germany')\n        .set_(item='c', operator=Operator.INCREMENT, literal={'name': 'Germany', 'population': '85000000'})\n        .return_()\n        .execute()\n"))),(0,n.kt)(o.Z,{value:"cypher",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country) WHERE c.name = 'Germany' SET c += {name: 'Germany', population: '85000000'} RETURN *;\n")))),(0,n.kt)("p",null,"Hopefully, this guide has taught you how to set or update node label or node and\nrelationship properties. For more information on what you can do with ",(0,n.kt)("inlineCode",{parentName:"p"},"SET"),"\nclause, check out the ",(0,n.kt)("a",{parentName:"p",href:"/cypher-manual/clauses/set"},"Cypher manual"),". If you\nhave any more questions, join our community and ping us on\n",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/memgraph"},"Discord"),"."))}d.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),n=a(67294),l=a(86010),o=a(12466),u=a(16550),p=a(91980),i=a(67392),s=a(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[p,i]=h({queryString:a,groupId:r}),[c,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,s.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=p??c;return d({value:e,tabValues:l})?e:null})();(0,n.useEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),y(e)}),[i,y,l]),tabValues:l}}var b=a(72389);const g="tabList__CuJ",f="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:u,selectValue:p,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=s.indexOf(t),r=i[a].value;r!==u&&(c(t),p(r))},d=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;a=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;a=s[t]??s[s.length-1];break}}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>s.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",f,null==o?void 0:o.className,{"tabs__item--active":u===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function T(e){const t=y(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",g)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return n.createElement(T,(0,r.Z)({key:String(t)},e))}}}]);