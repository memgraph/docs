"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[501],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(r),g=a,d=c["".concat(l,".").concat(g)]||c[g]||p[g]||o;return r?n.createElement(d,s(s({ref:t},m),{},{components:r})):n.createElement(d,s({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(67294),a=r(79443);var o=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=r(86010),i="tabItem_1uMI",l="tabItemActive_2DSg";var u=function(e){var t,r=e.lazy,a=e.block,u=e.defaultValue,m=e.values,p=e.groupId,c=e.className,g=n.Children.toArray(e.children),d=null!=m?m:g.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=u?u:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value,f=o(),b=f.tabGroupChoices,v=f.setTabGroupChoices,k=(0,n.useState)(h),y=k[0],w=k[1],N=[];if(null!=p){var T=b[p];null!=T&&T!==y&&d.some((function(e){return e.value===T}))&&w(T)}var O=function(e){var t=e.currentTarget,r=N.indexOf(t),n=d[r].value;w(n),null!=p&&(v(p,n),setTimeout((function(){var e,r,n,a,o,s,i,u;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,s=window,i=s.innerHeight,u=s.innerWidth,r>=0&&o<=u&&a<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=N.indexOf(e.target)+1;r=N[n]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.target)-1;r=N[a]||N[N.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},c)},d.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:O,onClick:O},null!=r?r:t)}))),r?(0,n.cloneElement)(g.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,r){var n=(0,r(67294).createContext)(void 0);t.Z=n},66973:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=r(55064),i=r(58215),l=["components"],u={id:"postgresql",title:"Migrate PostgreSQL database to Memgraph",sidebar_label:"PostgreSQL"},m=void 0,p={unversionedId:"import-data/migrate/postgresql",id:"import-data/migrate/postgresql",isDocsHomePage:!1,title:"Migrate PostgreSQL database to Memgraph",description:"Prerequisites",source:"@site/docs/import-data/migrate/postgresql.md",sourceDirName:"import-data/migrate",slug:"/import-data/migrate/postgresql",permalink:"/docs/memgraph/next/import-data/migrate/postgresql",editUrl:"https://github.com/memgraph/docs/tree/master/docs/import-data/migrate/postgresql.md",tags:[],version:"current",frontMatter:{id:"postgresql",title:"Migrate PostgreSQL database to Memgraph",sidebar_label:"PostgreSQL"},sidebar:"memgraph",previous:{title:"MySQL",permalink:"/docs/memgraph/next/import-data/migrate/mysql"},next:{title:"Cypher queries (.cypherl format)",permalink:"/docs/memgraph/next/import-data/cypherl"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"How to migrate data from PostgreSQL to Memgraph?",id:"how-to-migrate-data-from-postgresql-to-memgraph",children:[{value:"Dataset",id:"dataset",children:[]},{value:"Migrating",id:"migrating",children:[]}]}],g={toc:c};function d(e){var t=e.components,u=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A running ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.postgresql.org/"},"PostgreSQL"))," instance with the database you wish to migrate."),(0,o.kt)("li",{parentName:"ul"},"A running ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://memgraph.com/product"},"Memgraph"))," instance where you want to migrate the data."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/memgraph/mgmigrate"},"mgmigrate"))," tool installed.\nInstallation instructions can be found\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mgmigrate"},"here"),".")),(0,o.kt)("h2",{id:"how-to-migrate-data-from-postgresql-to-memgraph"},"How to migrate data from PostgreSQL to Memgraph?"),(0,o.kt)("h3",{id:"dataset"},"Dataset"),(0,o.kt)("p",null,"For this tutorial, we will be working with a PostgreSQL database named ",(0,o.kt)("inlineCode",{parentName:"p"},"users_db"),"\nthat contains two tables, ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"user_relationships"),":"),(0,o.kt)(s.Z,{groupId:"platform",defaultValue:"users",values:[{label:"Table 'users'",value:"users"},{label:"Table 'user_relationships'",value:"user_relationships"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"users",mdxType:"TabItem"},(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," table contains four users with their ids and names:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'users_db=# SELECT * FROM "users";\n id | name\n----+------\n  0 | Anna\n  1 | Josh\n  2 | Lisa\n  3 | Troy\n'))),(0,o.kt)(i.Z,{value:"user_relationships",mdxType:"TabItem"},(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"user_relationships")," table contains the relationships between users:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"users_db=# SELECT * FROM user_relationships;\n user_one | user_two\n----------+----------\n        0 |        1\n        2 |        3\n")))),(0,o.kt)("h3",{id:"migrating"},"Migrating"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," You can migrate this database into Memgraph by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"build/src/mgmigrate --source-kind=postgresql /\n  --source-host 127.0.0.1 /\n  --source-port 5432 /\n  --source-username postgres /\n  --source-password postgres /\n  --source-database=users_db /\n  --destination-host 127.0.0.1 /\n  --destination-port 7687 /\n  --destination-use-ssl=false\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Run the following query in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://memgraph.com/product/lab"},"Memgraph Lab"))," or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/connect-to-memgraph/methods/mgconsole"},"mgconsole"))," to see the results:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)-[r]-(m) RETURN n,r,m;\n")),(0,o.kt)("p",null,"The query results should be:"),(0,o.kt)(s.Z,{groupId:"platform",defaultValue:"mgconsole",values:[{label:"mgconsole",value:"mgconsole"},{label:"Memgraph Lab",value:"memgraphlab"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"mgconsole",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'memgraph> MATCH (n)-[r]-(m) RETURN n,r,m;\n+--------------------------------+--------------------------------+--------------------------------+\n| n                              | r                              | m                              |\n+--------------------------------+--------------------------------+--------------------------------+\n| (:users {id: 1, name: "Josh"}) | [:user_relationships]          | (:users {id: 0, name: "Anna"}) |\n| (:users {id: 0, name: "Anna"}) | [:user_relationships]          | (:users {id: 1, name: "Josh"}) |\n| (:users {id: 3, name: "Troy"}) | [:user_relationships]          | (:users {id: 2, name: "Lisa"}) |\n| (:users {id: 2, name: "Lisa"}) | [:user_relationships]          | (:users {id: 3, name: "Troy"}) |\n+--------------------------------+--------------------------------+--------------------------------+\n'))),(0,o.kt)(i.Z,{value:"memgraphlab",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"memgraph-docs-mgmigrate-results",src:r(14405).Z})))))}d.isMDXComponent=!0},86010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})},14405:function(e,t,r){t.Z=r.p+"assets/images/memgraph-docs-mgmigrate-results-38a751a5742422f11d5f413044f4fe25.png"}}]);