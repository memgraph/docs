"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16832],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,g=c["".concat(i,".").concat(d)]||c[d]||p[d]||s;return r?a.createElement(g,o(o({ref:t},m),{},{components:r})):a.createElement(g,o({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<s;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,o),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>T});var a=r(87462),n=r(67294),s=r(86010),o=r(12466),l=r(16550),i=r(91980),u=r(67392),m=r(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function c(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=c(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,u]=g({queryString:r,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,m.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),b=(()=>{const e=i??p;return d({value:e,tabValues:s})?e:null})();(0,n.useEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,s]),tabValues:s}}var b=r(72389);const f="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:r,selectedValue:l,selectValue:i,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),c=e=>{const t=e.currentTarget,r=m.indexOf(t),a=u[r].value;a!==l&&(p(t),i(a))},d=e=>{var t;let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=m.indexOf(e.currentTarget)+1;r=m[t]??m[0];break}case"ArrowLeft":{const t=m.indexOf(e.currentTarget)-1;r=m[t]??m[m.length-1];break}}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:c},o,{className:(0,s.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":l===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;if(t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return n.createElement("div",{className:(0,s.Z)("tabs-container",f)},n.createElement(k,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function T(e){const t=(0,b.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},55002:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),s=r(74866),o=r(85162);const l={id:"postgresql",title:"Migrate PostgreSQL database to Memgraph",sidebar_label:"PostgreSQL",pagination_prev:"import-data/overview"},i=void 0,u={unversionedId:"import-data/migrate/postgresql",id:"version-2.3.1/import-data/migrate/postgresql",title:"Migrate PostgreSQL database to Memgraph",description:"Related - Tutorial",source:"@site/memgraph_versioned_docs/version-2.3.1/import-data/migrate/postgresql.md",sourceDirName:"import-data/migrate",slug:"/import-data/migrate/postgresql",permalink:"/docs/memgraph/2.3.1/import-data/migrate/postgresql",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.1/import-data/migrate/postgresql.md",tags:[],version:"2.3.1",frontMatter:{id:"postgresql",title:"Migrate PostgreSQL database to Memgraph",sidebar_label:"PostgreSQL",pagination_prev:"import-data/overview"},sidebar:"memgraph",previous:{title:"Import data overview",permalink:"/docs/memgraph/2.3.1/import-data"},next:{title:"Tutorials overview",permalink:"/docs/memgraph/2.3.1/tutorials"}},m={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"How to migrate data from PostgreSQL to Memgraph?",id:"how-to-migrate-data-from-postgresql-to-memgraph",level:2},{value:"Dataset",id:"dataset",level:3},{value:"Migrating",id:"migrating",level:3}],c={toc:p};function d(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/2.3.1/tutorials/migrate-relational-database"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge",alt:"Related - Tutorial"}))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A running ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://www.postgresql.org/"},"PostgreSQL"))," instance with the database you wish to migrate."),(0,n.kt)("li",{parentName:"ul"},"A running ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://memgraph.com/product"},"Memgraph"))," instance where you want to migrate the data."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/memgraph/mgmigrate"},"mgmigrate"))," tool installed.\nInstallation instructions can be found\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mgmigrate"},"here"),".")),(0,n.kt)("h2",{id:"how-to-migrate-data-from-postgresql-to-memgraph"},"How to migrate data from PostgreSQL to Memgraph?"),(0,n.kt)("h3",{id:"dataset"},"Dataset"),(0,n.kt)("p",null,"For this tutorial, we will be working with a PostgreSQL database named ",(0,n.kt)("inlineCode",{parentName:"p"},"users_db"),"\nthat contains two tables, ",(0,n.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"user_relationships"),":"),(0,n.kt)(s.Z,{groupId:"platform",defaultValue:"users",values:[{label:"Table 'users'",value:"users"},{label:"Table 'user_relationships'",value:"user_relationships"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"users",mdxType:"TabItem"},(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"users")," table contains four users with their ids and names:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},'users_db=# SELECT * FROM "users";\n id | name\n----+------\n  0 | Anna\n  1 | Josh\n  2 | Lisa\n  3 | Troy\n'))),(0,n.kt)(o.Z,{value:"user_relationships",mdxType:"TabItem"},(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"user_relationships")," table contains the relationships between users:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"users_db=# SELECT * FROM user_relationships;\n user_one | user_two\n----------+----------\n        0 |        1\n        2 |        3\n")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"migrating"},"Migrating"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1.")," You can migrate this database into Memgraph by running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"build/src/mgmigrate --source-kind=postgresql /\n  --source-host 127.0.0.1 /\n  --source-port 5432 /\n  --source-username postgres /\n  --source-password postgres /\n  --source-database=users_db /\n  --destination-host 127.0.0.1 /\n  --destination-port 7687 /\n  --destination-use-ssl=false\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2.")," Run the following query in ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://memgraph.com/product/lab"},"Memgraph Lab"))," or ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.3.1/connect-to-memgraph/mgconsole"},"mgconsole"))," to see the results:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)-[r]-(m) RETURN n,r,m;\n")),(0,n.kt)("p",null,"The query results should be:"),(0,n.kt)(s.Z,{groupId:"platform",defaultValue:"mgconsole",values:[{label:"mgconsole",value:"mgconsole"},{label:"Memgraph Lab",value:"memgraphlab"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"mgconsole",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},'memgraph> MATCH (n)-[r]-(m) RETURN n,r,m;\n+--------------------------------+--------------------------------+--------------------------------+\n| n                              | r                              | m                              |\n+--------------------------------+--------------------------------+--------------------------------+\n| (:users {id: 1, name: "Josh"}) | [:user_relationships]          | (:users {id: 0, name: "Anna"}) |\n| (:users {id: 0, name: "Anna"}) | [:user_relationships]          | (:users {id: 1, name: "Josh"}) |\n| (:users {id: 3, name: "Troy"}) | [:user_relationships]          | (:users {id: 2, name: "Lisa"}) |\n| (:users {id: 2, name: "Lisa"}) | [:user_relationships]          | (:users {id: 3, name: "Troy"}) |\n+--------------------------------+--------------------------------+--------------------------------+\n'))),(0,n.kt)(o.Z,{value:"memgraphlab",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"memgraph-docs-mgmigrate-results",src:r(30547).Z,width:"615",height:"494"})))))}d.isMDXComponent=!0},30547:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/memgraph-docs-mgmigrate-results-38a751a5742422f11d5f413044f4fe25.png"}}]);