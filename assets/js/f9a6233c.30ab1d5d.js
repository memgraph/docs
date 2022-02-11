"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[501],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return r?a.createElement(g,s(s({ref:t},p),{},{components:r})):a.createElement(g,s({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},58215:function(e,t,r){var a=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return p}});var a=r(87462),n=r(67294),o=r(72389),s=r(29548),l=r(86010),i="tabItem_LplD";function u(e){var t,r,o,u=e.lazy,p=e.block,m=e.defaultValue,c=e.values,d=e.groupId,g=e.className,h=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=c?c:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.UB)(),y=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,n.useState)(v),T=N[0],O=N[1],E=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var P=y[d];null!=P&&P!==T&&f.some((function(e){return e.value===P}))&&O(P)}var _=function(e){var t=e.currentTarget,r=E.indexOf(t),a=f[r].value;a!==T&&(x(t),O(a),null!=d&&w(d,a))},M=function(e){var t,r=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;r=E[a]||E[0];break;case"ArrowLeft":var n=E.indexOf(e.currentTarget)-1;r=E[n]||E[E.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},g)},f.map((function(e){var t=e.value,r=e.label,o=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:M,onFocus:_,onClick:_},o,{className:(0,l.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),u?(0,n.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,o.Z)();return n.createElement(u,(0,a.Z)({key:String(t)},e))}},66973:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return c},default:function(){return g}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=r(9877),l=r(58215),i=["components"],u={id:"postgresql",title:"Migrate PostgreSQL database to Memgraph",sidebar_label:"PostgreSQL",pagination_prev:"import-data/overview"},p=void 0,m={unversionedId:"import-data/migrate/postgresql",id:"import-data/migrate/postgresql",title:"Migrate PostgreSQL database to Memgraph",description:"Prerequisites",source:"@site/docs/import-data/migrate/postgresql.md",sourceDirName:"import-data/migrate",slug:"/import-data/migrate/postgresql",permalink:"/docs/memgraph/next/import-data/migrate/postgresql",editUrl:"https://github.com/memgraph/docs/tree/master/docs/import-data/migrate/postgresql.md",tags:[],version:"current",frontMatter:{id:"postgresql",title:"Migrate PostgreSQL database to Memgraph",sidebar_label:"PostgreSQL",pagination_prev:"import-data/overview"},sidebar:"memgraph",previous:{title:"Import data overview",permalink:"/docs/memgraph/next/import-data"},next:{title:"Cypher queries (.cypherl format)",permalink:"/docs/memgraph/next/import-data/cypherl"}},c=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"How to migrate data from PostgreSQL to Memgraph?",id:"how-to-migrate-data-from-postgresql-to-memgraph",children:[{value:"Dataset",id:"dataset",children:[],level:3},{value:"Migrating",id:"migrating",children:[],level:3}],level:2}],d={toc:c};function g(e){var t=e.components,u=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A running ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.postgresql.org/"},"PostgreSQL"))," instance with the database you wish to migrate."),(0,o.kt)("li",{parentName:"ul"},"A running ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://memgraph.com/product"},"Memgraph"))," instance where you want to migrate the data."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/memgraph/mgmigrate"},"mgmigrate"))," tool installed.\nInstallation instructions can be found\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mgmigrate"},"here"),".")),(0,o.kt)("h2",{id:"how-to-migrate-data-from-postgresql-to-memgraph"},"How to migrate data from PostgreSQL to Memgraph?"),(0,o.kt)("h3",{id:"dataset"},"Dataset"),(0,o.kt)("p",null,"For this tutorial, we will be working with a PostgreSQL database named ",(0,o.kt)("inlineCode",{parentName:"p"},"users_db"),"\nthat contains two tables, ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"user_relationships"),":"),(0,o.kt)(s.Z,{groupId:"platform",defaultValue:"users",values:[{label:"Table 'users'",value:"users"},{label:"Table 'user_relationships'",value:"user_relationships"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"users",mdxType:"TabItem"},(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," table contains four users with their ids and names:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'users_db=# SELECT * FROM "users";\n id | name\n----+------\n  0 | Anna\n  1 | Josh\n  2 | Lisa\n  3 | Troy\n'))),(0,o.kt)(l.Z,{value:"user_relationships",mdxType:"TabItem"},(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"user_relationships")," table contains the relationships between users:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"users_db=# SELECT * FROM user_relationships;\n user_one | user_two\n----------+----------\n        0 |        1\n        2 |        3\n")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"migrating"},"Migrating"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," You can migrate this database into Memgraph by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"build/src/mgmigrate --source-kind=postgresql /\n  --source-host 127.0.0.1 /\n  --source-port 5432 /\n  --source-username postgres /\n  --source-password postgres /\n  --source-database=users_db /\n  --destination-host 127.0.0.1 /\n  --destination-port 7687 /\n  --destination-use-ssl=false\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Run the following query in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://memgraph.com/product/lab"},"Memgraph Lab"))," or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/connect-to-memgraph/mgconsole"},"mgconsole"))," to see the results:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)-[r]-(m) RETURN n,r,m;\n")),(0,o.kt)("p",null,"The query results should be:"),(0,o.kt)(s.Z,{groupId:"platform",defaultValue:"mgconsole",values:[{label:"mgconsole",value:"mgconsole"},{label:"Memgraph Lab",value:"memgraphlab"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"mgconsole",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'memgraph> MATCH (n)-[r]-(m) RETURN n,r,m;\n+--------------------------------+--------------------------------+--------------------------------+\n| n                              | r                              | m                              |\n+--------------------------------+--------------------------------+--------------------------------+\n| (:users {id: 1, name: "Josh"}) | [:user_relationships]          | (:users {id: 0, name: "Anna"}) |\n| (:users {id: 0, name: "Anna"}) | [:user_relationships]          | (:users {id: 1, name: "Josh"}) |\n| (:users {id: 3, name: "Troy"}) | [:user_relationships]          | (:users {id: 2, name: "Lisa"}) |\n| (:users {id: 2, name: "Lisa"}) | [:user_relationships]          | (:users {id: 3, name: "Troy"}) |\n+--------------------------------+--------------------------------+--------------------------------+\n'))),(0,o.kt)(l.Z,{value:"memgraphlab",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"memgraph-docs-mgmigrate-results",src:r(30803).Z,width:"615",height:"494"})))))}g.isMDXComponent=!0},30803:function(e,t,r){t.Z=r.p+"assets/images/memgraph-docs-mgmigrate-results-38a751a5742422f11d5f413044f4fe25.png"}}]);