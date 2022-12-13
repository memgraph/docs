"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78144],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),m=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(a),d=n,g=c["".concat(i,".").concat(d)]||c[d]||p[d]||s;return a?r.createElement(g,o(o({ref:t},u),{},{components:a})):r.createElement(g,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var m=2;m<s;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(87462),n=a(67294),s=a(86010),o=a(72389),l=a(67392),i=a(7094),m=a(12466);const u="tabList__CuJ",p="tabItem_LNqP";function c(e){var t;const{lazy:a,block:o,defaultValue:c,values:d,groupId:g,className:h}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??b.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),v=(0,l.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,i.U)(),[T,N]=(0,n.useState)(y),M=[],{blockElementScrollPositionUntilNextRender:O}=(0,m.o5)();if(null!=g){const e=k[g];null!=e&&e!==T&&f.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,a=M.indexOf(t),r=f[a].value;r!==T&&(O(t),N(r),null!=g&&w(g,String(r)))},_=e=>{var t;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=M.indexOf(e.currentTarget)+1;a=M[t]??M[0];break}case"ArrowLeft":{const t=M.indexOf(e.currentTarget)-1;a=M[t]??M[M.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},h)},f.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>M.push(e),onKeyDown:_,onClick:E},o,{className:(0,s.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===t})}),a??t)}))),a?(0,n.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,o.Z)();return n.createElement(c,(0,r.Z)({key:String(t)},e))}},31687:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),s=a(65488),o=a(85162);const l={id:"mysql",title:"Migrate MySQL database to Memgraph",sidebar_label:"MySQL",pagination_prev:"import-data/overview"},i=void 0,m={unversionedId:"import-data/migrate/mysql",id:"version-2.5.0/import-data/migrate/mysql",title:"Migrate MySQL database to Memgraph",description:"Related - Tutorial",source:"@site/memgraph_versioned_docs/version-2.5.0/import-data/migrate/mysql.md",sourceDirName:"import-data/migrate",slug:"/import-data/migrate/mysql",permalink:"/docs/memgraph/import-data/migrate/mysql",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.0/import-data/migrate/mysql.md",tags:[],version:"2.5.0",frontMatter:{id:"mysql",title:"Migrate MySQL database to Memgraph",sidebar_label:"MySQL",pagination_prev:"import-data/overview"},sidebar:"memgraph",previous:{title:"Import data overview",permalink:"/docs/memgraph/import-data"},next:{title:"PostgreSQL",permalink:"/docs/memgraph/import-data/migrate/postgresql"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"How to migrate data from MySQL to Memgraph?",id:"how-to-migrate-data-from-mysql-to-memgraph",level:2},{value:"Dataset",id:"dataset",level:3},{value:"Migrating",id:"migrating",level:3}],c={toc:p};function d(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/tutorials/migrate-relational-database"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge",alt:"Related - Tutorial"}))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A running ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://www.mysql.com/"},"MySQL"))," instance with the database you wish to migrate."),(0,n.kt)("li",{parentName:"ul"},"A running ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://memgraph.com/product"},"Memgraph"))," instance where you want to migrate the data."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/memgraph/mgmigrate"},"mgmigrate"))," tool installed.\nInstallation instructions can be found\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/mgmigrate"},"here"),".")),(0,n.kt)("h2",{id:"how-to-migrate-data-from-mysql-to-memgraph"},"How to migrate data from MySQL to Memgraph?"),(0,n.kt)("h3",{id:"dataset"},"Dataset"),(0,n.kt)("p",null,"To show you how to migrate data from MySQL to Memgraph we will be working with a\nMySQL database named ",(0,n.kt)("inlineCode",{parentName:"p"},"users_db")," that contains two tables, ",(0,n.kt)("inlineCode",{parentName:"p"},"users")," and\n",(0,n.kt)("inlineCode",{parentName:"p"},"user_relationships"),":"),(0,n.kt)(s.Z,{groupId:"platform",defaultValue:"users",values:[{label:"Table 'users'",value:"users"},{label:"Table 'user_relationships'",value:"user_relationships"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"users",mdxType:"TabItem"},(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"users")," table contains four users with their ids and names:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"mysql> SELECT * FROM users;\n+----+------+\n| id | name |\n+----+------+\n|  0 | Anna |\n|  1 | Josh |\n|  2 | Lisa |\n|  3 | Troy |\n+----+------+\n"))),(0,n.kt)(o.Z,{value:"user_relationships",mdxType:"TabItem"},(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"user_relationships")," table contains the relationships between users:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"mysql> SELECT * FROM user_relationships;\n+----------+----------+\n| user_one | user_two |\n+----------+----------+\n|        0 |        1 |\n|        2 |        3 |\n+----------+----------+\n")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"migrating"},"Migrating"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1.")," You can migrate this database into Memgraph by running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"build/src/mgmigrate --source-kind=mysql /\n  --source-host 127.0.0.1 /\n  --source-port 33060 /\n  --source-username root /\n  --source-password mysql /\n  --source-database=users_db /\n  --destination-host 127.0.0.1 /\n  --destination-port 7687 /\n  --destination-use-ssl=false\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2.")," Run the following query in ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://memgraph.com/product/lab"},"Memgraph Lab"))," or ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/memgraph/connect-to-memgraph/mgconsole"},"mgconsole"))," to see the results:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)-[r]-(m) RETURN n,r,m;\n")),(0,n.kt)("p",null,"The query results should be:"),(0,n.kt)(s.Z,{groupId:"platform",defaultValue:"mgconsole",values:[{label:"mgconsole",value:"mgconsole"},{label:"Memgraph Lab",value:"memgraphlab"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"mgconsole",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},'memgraph> MATCH (n)-[r]-(m) RETURN n,r,m;\n+--------------------------------+--------------------------------+--------------------------------+\n| n                              | r                              | m                              |\n+--------------------------------+--------------------------------+--------------------------------+\n| (:users {id: 1, name: "Josh"}) | [:user_relationships]          | (:users {id: 0, name: "Anna"}) |\n| (:users {id: 0, name: "Anna"}) | [:user_relationships]          | (:users {id: 1, name: "Josh"}) |\n| (:users {id: 3, name: "Troy"}) | [:user_relationships]          | (:users {id: 2, name: "Lisa"}) |\n| (:users {id: 2, name: "Lisa"}) | [:user_relationships]          | (:users {id: 3, name: "Troy"}) |\n+--------------------------------+--------------------------------+--------------------------------+\n'))),(0,n.kt)(o.Z,{value:"memgraphlab",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"memgraph-docs-mgmigrate-results",src:a(81443).Z,width:"615",height:"494"})))))}d.isMDXComponent=!0},81443:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/memgraph-docs-mgmigrate-results-38a751a5742422f11d5f413044f4fe25.png"}}]);