"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59982],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,g=c["".concat(i,".").concat(d)]||c[d]||p[d]||o;return r?n.createElement(g,s(s({ref:t},m),{},{components:r})):n.createElement(g,s({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(87462),a=r(67294),o=r(72389),s=r(79443);var l=function(){var e=(0,a.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(83039),u=r(86010),m="tabItem_1uMI";function p(e){var t,r,n,o=e.lazy,s=e.block,p=e.defaultValue,c=e.values,d=e.groupId,g=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=c?c:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(n=h[0])?void 0:n.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),y=k.tabGroupChoices,w=k.setTabGroupChoices,T=(0,a.useState)(b),N=T[0],O=T[1],E=[],P=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var _=y[d];null!=_&&_!==N&&f.some((function(e){return e.value===_}))&&O(_)}var x=function(e){var t=e.currentTarget,r=E.indexOf(t),n=f[r].value;n!==N&&(P(t),O(n),null!=d&&w(d,n))},M=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;r=E[n]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;r=E[a]||E[E.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},g)},f.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,u.Z)("tabs__item",m,{"tabs__item--active":N===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:M,onFocus:x,onClick:x},null!=r?r:t)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function c(e){var t=(0,o.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},79443:function(e,t,r){var n=(0,r(67294).createContext)(void 0);t.Z=n},46308:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=r(55064),l=r(58215),i=["components"],u={id:"postgresql",title:"Migrate PostgreSQL database to Memgraph",sidebar_label:"PostgreSQL"},m=void 0,p={unversionedId:"import-data/migrate/postgresql",id:"version-2.0.0/import-data/migrate/postgresql",isDocsHomePage:!1,title:"Migrate PostgreSQL database to Memgraph",description:"Prerequisites",source:"@site/memgraph_versioned_docs/version-2.0.0/import-data/migrate/postgresql.md",sourceDirName:"import-data/migrate",slug:"/import-data/migrate/postgresql",permalink:"/docs/memgraph/2.0.0/import-data/migrate/postgresql",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.0.0/import-data/migrate/postgresql.md",tags:[],version:"2.0.0",frontMatter:{id:"postgresql",title:"Migrate PostgreSQL database to Memgraph",sidebar_label:"PostgreSQL"},sidebar:"version-2.0.0/memgraph",previous:{title:"MySQL",permalink:"/docs/memgraph/2.0.0/import-data/migrate/mysql"},next:{title:"Cypher queries (.cypherl format)",permalink:"/docs/memgraph/2.0.0/import-data/cypherl"}},c=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"How to migrate data from PostgreSQL to Memgraph?",id:"how-to-migrate-data-from-postgresql-to-memgraph",children:[{value:"Dataset",id:"dataset",children:[],level:3},{value:"Migrating",id:"migrating",children:[],level:3}],level:2}],d={toc:c};function g(e){var t=e.components,u=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A running ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.postgresql.org/"},"PostgreSQL"))," instance with the database you wish to migrate."),(0,o.kt)("li",{parentName:"ul"},"A running ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://memgraph.com/product"},"Memgraph"))," instance where you want to migrate the data."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/memgraph/mgmigrate"},"mgmigrate"))," tool installed.\nInstallation instructions can be found\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mgmigrate"},"here"),".")),(0,o.kt)("h2",{id:"how-to-migrate-data-from-postgresql-to-memgraph"},"How to migrate data from PostgreSQL to Memgraph?"),(0,o.kt)("h3",{id:"dataset"},"Dataset"),(0,o.kt)("p",null,"For this tutorial, we will be working with a PostgreSQL database named ",(0,o.kt)("inlineCode",{parentName:"p"},"users_db"),"\nthat contains two tables, ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"user_relationships"),":"),(0,o.kt)(s.Z,{groupId:"platform",defaultValue:"users",values:[{label:"Table 'users'",value:"users"},{label:"Table 'user_relationships'",value:"user_relationships"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"users",mdxType:"TabItem"},(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," table contains four users with their ids and names:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'users_db=# SELECT * FROM "users";\n id | name\n----+------\n  0 | Anna\n  1 | Josh\n  2 | Lisa\n  3 | Troy\n'))),(0,o.kt)(l.Z,{value:"user_relationships",mdxType:"TabItem"},(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"user_relationships")," table contains the relationships between users:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"users_db=# SELECT * FROM user_relationships;\n user_one | user_two\n----------+----------\n        0 |        1\n        2 |        3\n")))),(0,o.kt)("h3",{id:"migrating"},"Migrating"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," You can migrate this database into Memgraph by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"build/src/mgmigrate --source-kind=postgresql /\n  --source-host 127.0.0.1 /\n  --source-port 5432 /\n  --source-username postgres /\n  --source-password postgres /\n  --source-database=users_db /\n  --destination-host 127.0.0.1 /\n  --destination-port 7687 /\n  --destination-use-ssl=false\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Run the following query in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://memgraph.com/product/lab"},"Memgraph Lab"))," or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.0.0/connect-to-memgraph/methods/mgconsole"},"mgconsole"))," to see the results:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)-[r]-(m) RETURN n,r,m;\n")),(0,o.kt)("p",null,"The query results should be:"),(0,o.kt)(s.Z,{groupId:"platform",defaultValue:"mgconsole",values:[{label:"mgconsole",value:"mgconsole"},{label:"Memgraph Lab",value:"memgraphlab"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"mgconsole",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'memgraph> MATCH (n)-[r]-(m) RETURN n,r,m;\n+--------------------------------+--------------------------------+--------------------------------+\n| n                              | r                              | m                              |\n+--------------------------------+--------------------------------+--------------------------------+\n| (:users {id: 1, name: "Josh"}) | [:user_relationships]          | (:users {id: 0, name: "Anna"}) |\n| (:users {id: 0, name: "Anna"}) | [:user_relationships]          | (:users {id: 1, name: "Josh"}) |\n| (:users {id: 3, name: "Troy"}) | [:user_relationships]          | (:users {id: 2, name: "Lisa"}) |\n| (:users {id: 2, name: "Lisa"}) | [:user_relationships]          | (:users {id: 3, name: "Troy"}) |\n+--------------------------------+--------------------------------+--------------------------------+\n'))),(0,o.kt)(l.Z,{value:"memgraphlab",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"memgraph-docs-mgmigrate-results",src:r(4810).Z})))))}g.isMDXComponent=!0},4810:function(e,t,r){t.Z=r.p+"assets/images/memgraph-docs-mgmigrate-results-38a751a5742422f11d5f413044f4fe25.png"}}]);