"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10955],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),o=n(79443);var r=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var p=function(e){var t,n=e.lazy,o=e.block,p=e.defaultValue,m=e.values,d=e.groupId,u=e.className,c=a.Children.toArray(e.children),h=null!=m?m:c.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=p?p:null==(t=c.find((function(e){return e.props.default})))?void 0:t.props.value,g=r(),k=g.tabGroupChoices,f=g.setTabGroupChoices,_=(0,a.useState)(v),N=_[0],b=_[1],y=[];if(null!=d){var I=k[d];null!=I&&I!==N&&h.some((function(e){return e.value===I}))&&b(I)}var T=function(e){var t=e.currentTarget,n=y.indexOf(t),a=h[n].value;b(a),null!=d&&(f(d,a),setTimeout((function(){var e,n,a,o,r,i,l,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,r=e.right,i=window,l=i.innerHeight,p=i.innerWidth,n>=0&&r<=p&&o<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},w=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case"ArrowLeft":var o=y.indexOf(e.target)-1;n=y[o]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},u)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":N===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:w,onFocus:T,onClick:T},null!=n?n:t)}))),n?(0,a.cloneElement)(c.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},57535:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return u},default:function(){return h}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=n(55064),l=n(58215),s=["components"],p={id:"csv-import-tool",title:"CSV Import Tool",sidebar_label:"CSV Import Tool"},m=void 0,d={unversionedId:"import-data/csv-import-tool",id:"version-1.6.1/import-data/csv-import-tool",isDocsHomePage:!1,title:"CSV Import Tool",description:"CSV is a universal and very versatile data format used to store large quantities",source:"@site/memgraph_versioned_docs/version-1.6.1/import-data/csv-import-tool.md",sourceDirName:"import-data",slug:"/import-data/csv-import-tool",permalink:"/docs/memgraph/import-data/csv-import-tool",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.6.1/import-data/csv-import-tool.md",tags:[],version:"1.6.1",frontMatter:{id:"csv-import-tool",title:"CSV Import Tool",sidebar_label:"CSV Import Tool"},sidebar:"version-1.6.1/memgraph",previous:{title:"Import data overview",permalink:"/docs/memgraph/import-data"},next:{title:"LOAD CSV Cypher clause",permalink:"/docs/memgraph/import-data/load-csv-clause"}},u=[{value:"How to use the CSV Import Tool?",id:"how-to-use-the-csv-import-tool",children:[]},{value:"Examples",id:"examples",children:[{value:"One type of nodes and relationships",id:"one-type-of-nodes-and-relationships",children:[]},{value:"Multiple types of nodes and relationships",id:"multiple-types-of-nodes-and-relationships",children:[]}]}],c={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"CSV is a universal and very versatile data format used to store large quantities\nof data.  Each Memgraph database instance has a CSV import tool installed called\n",(0,r.kt)("inlineCode",{parentName:"p"},"mg_import_csv"),".  The CSV import tool should be used for initial bulk ingestion\nof data into the database.  Upon ingestion, the CSV importer creates a snapshot\nthat will be used by the database to recover its state on its next startup."),(0,r.kt)("p",null,"If you are already familiar with the Neo4j bulk import tool, then using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"mg_import_csv")," tool should be easy.  The CSV import tool is fully compatible\nwith the ",(0,r.kt)("a",{parentName:"p",href:"https://neo4j.com/docs/operations-manual/current/tools/import/"},"Neo4j CSV\nformat"),".  If you\nalready have a pipeline set-up for Neo4j, you should only replace ",(0,r.kt)("inlineCode",{parentName:"p"},"neo4j-admin\nimport")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_import_csv"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For more detailed information about the CSV Import Tool, check our ",(0,r.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/import-data/csv-import-tool"},"Reference\nguide"),"."))),(0,r.kt)("h3",{id:"how-to-use-the-csv-import-tool"},"How to use the CSV Import Tool?"),(0,r.kt)(i.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you installed Memgraph through Docker Hub, the name of the Docker image\n",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph")," should be replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph/memgraph"),"."))),(0,r.kt)("p",null,"If you installed Memgraph using Docker, you will need to run the importer using\nthe following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker run -v mg_lib:/var/lib/memgraph -v mg_import:/import-data --entrypoint=mg_import_csv memgraph\n")),(0,r.kt)("p",null,"For information on other options, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --entrypoint=mg_import_csv memgraph --help\n"))),(0,r.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("p",null,"The import tool is run from the console, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_import_csv")," command.\nThe tool should be run as user ",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph"),", using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo -u memgraph mg_import_csv\n")),(0,r.kt)("p",null,"For information on other options, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u memgraph mg_import_csv --help\n")))),(0,r.kt)("p",null,"Below, you can find two examples of how to use the CSV Import Tool depending on\nthe complexity of your data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#one-type-of-nodes-and-relationships"},"One type of nodes and relationships")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#multiple-types-of-nodes-and-relationships"},"Multiple types of nodes and\nrelationships"))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It is also important to note that importing CSV data using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"mg_import_csv")," command should be a one-time operation before running Memgraph.\nIn other words, this tool should not be used to import data into an already\nrunning Memgraph instance."))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"one-type-of-nodes-and-relationships"},"One type of nodes and relationships"),(0,r.kt)("p",null,"Let's import a simple dataset."),(0,r.kt)(i.Z,{groupId:"files",defaultValue:"pn",values:[{label:"1. people_nodes.csv",value:"pn"},{label:"2. people_relationships.csv",value:"pr"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"pn",mdxType:"TabItem"},(0,r.kt)("p",null,"Store the following in ",(0,r.kt)("inlineCode",{parentName:"p"},"people_nodes.csv"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"id:ID(PERSON_ID),name:string,:LABEL\n100,Daniel,Person\n101,Alex,Person\n102,Sarah,Person\n103,Mia,Person\n104,Lucy,Person\n"))),(0,r.kt)(l.Z,{value:"pr",mdxType:"TabItem"},(0,r.kt)("p",null,"Let's add relationships between people in ",(0,r.kt)("inlineCode",{parentName:"p"},"people_relationships.csv"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},":START_ID(PERSON_ID),:END_ID(PERSON_ID),:TYPE\n100,102,IS_FRIENDS_WITH\n103,101,IS_FRIENDS_WITH\n102,103,IS_FRIENDS_WITH\n101,104,IS_FRIENDS_WITH\n104,100,IS_FRIENDS_WITH\n101,102,IS_FRIENDS_WITH\n100,103,IS_FRIENDS_WITH\n")))),(0,r.kt)("p",null,"Now, you can import the dataset using the CSV Import Tool."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Your existing snapshot and WAL data will be considered\nobsolete, and Memgraph will load the new dataset."))),(0,r.kt)("p",null,"Use the following command:"),(0,r.kt)(i.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,r.kt)("p",null,"If using Docker, things are a bit more complicated. First you need to copy the\nCSV files where the Docker image can see them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker container create --name mg_import_helper -v mg_import:/import-data busybox\ndocker cp people_nodes.csv mg_import_helper:/import-data\ndocker cp people_relationships.csv mg_import_helper:/import-data\ndocker rm mg_import_helper\n")),(0,r.kt)("p",null,"Then, run the importer with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v mg_lib:/var/lib/memgraph -v mg_import:/import-data \\\n  --entrypoint=mg_import_csv memgraph \\\n  --nodes /import-data/people_nodes.csv \\\n  --relationships /import-data/people_relationships.csv\n"))),(0,r.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u memgraph mg_import_csv --nodes people_nodes.csv --relationships people_relationships.csv\n")))),(0,r.kt)("p",null,"Next time you run Memgraph, the dataset will be loaded."),(0,r.kt)("h3",{id:"multiple-types-of-nodes-and-relationships"},"Multiple types of nodes and relationships"),(0,r.kt)("p",null,"The previous example is showcasing a simple graph with one node type and one\nrelationship type. If we have more complex graphs, the procedure is similar.\nLet's define the following dataset:"),(0,r.kt)(i.Z,{groupId:"files",defaultValue:"pn",values:[{label:"1. people_nodes.csv",value:"pn"},{label:"2. people_relationships.csv",value:"pr"},{label:"3. restaurants_nodes.csv",value:"rn"},{label:"4. restaurants_relationships.csv",value:"rr"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"pn",mdxType:"TabItem"},(0,r.kt)("p",null,"Add the following to ",(0,r.kt)("inlineCode",{parentName:"p"},"people_nodes.csv"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"id:ID(PERSON_ID),name:string,age:int,city:string,:LABEL\n100,Daniel,30,London,Person\n101,Alex,15,Paris,Person\n102,Sarah,17,London,Person\n103,Mia,25,Zagreb,Person\n104,Lucy,21,Paris,Person\n105,Adam,23,New York,Person\n"))),(0,r.kt)(l.Z,{value:"pr",mdxType:"TabItem"},(0,r.kt)("p",null,"Let's define the relationships between people in ",(0,r.kt)("inlineCode",{parentName:"p"},"people_relationships.csv")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},":START_ID(PERSON_ID),:END_ID(PERSON_ID),:TYPE, met_in:int\n100,102,IS_FRIENDS_WITH,2014\n103,105,IS_FRIENDS_WITH,2021\n102,103,IS_FRIENDS_WITH,2005\n101,104,IS_FRIENDS_WITH,2005\n104,100,IS_FRIENDS_WITH,2018\n105,102,IS_FRIENDS_WITH,2017\n100,103,IS_FRIENDS_WITH,2001\n"))),(0,r.kt)(l.Z,{value:"rn",mdxType:"TabItem"},(0,r.kt)("p",null,"Let's introduce another node type, restaurants, in ",(0,r.kt)("inlineCode",{parentName:"p"},"restaurants_nodes.csv")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"id:ID(REST_ID),name:string,menu:string[],:LABEL\n200,Mc Donalds,Fries;BigMac;McChicken;Apple Pie,Restaurant\n201,KFC,Fried Chicken;Fries;Chicken Bucket,Restaurant\n202,Subway,Ham Sandwich;Turkey Sandwich;Foot-long,Restaurant\n203,Dominos,Pepperoni Pizza;Double Dish Pizza;Cheese filled Crust,Restaurant\n"))),(0,r.kt)(l.Z,{value:"rr",mdxType:"TabItem"},(0,r.kt)("p",null,"Let's define the relationships between people and restaurants in\n",(0,r.kt)("inlineCode",{parentName:"p"},"restaurants_relationships.csv"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},":START_ID(PERSON_ID),:END_ID(REST_ID),:TYPE, liked:boolean\n100,200,ATE_AT,true\n103,201,ATE_AT,false\n104,200,ATE_AT,true\n101,202,ATE_AT,false\n101,203,ATE_AT,false\n101,200,ATE_AT,true\n102,201,ATE_AT,true\n")))),(0,r.kt)("p",null,"After preparing the files above, you can import the dataset using the CSV Import\ntool."),(0,r.kt)(i.Z,{groupId:"platform",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,r.kt)("p",null,"If using Docker, things are a bit more complicated. First, you need to copy the\nCSV files where the Docker container can see them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker container create --name mg_import_helper -v mg_import:/import-data busybox\ndocker cp people_nodes.csv mg_import_helper:/import-data\ndocker cp people_relationships.csv mg_import_helper:/import-data\ndocker cp restaurants_nodes.csv mg_import_helper:/import-data\ndocker cp restaurants_relationships.csv mg_import_helper:/import-data\ndocker rm mg_import_helper\n")),(0,r.kt)("p",null,"Then, run the importer with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -v mg_import:/import-data \\\n  --entrypoint=mg_import_csv memgraph \\\n  --nodes /import-data/people_nodes.csv \\\n  --nodes /import-data/restaurants_nodes.csv \\\n  --relationships /import-data/people_relationships.csv \\\n  --relationships /import-data/restaurants_relationships.csv\n")),(0,r.kt)("p",null,"The next time you run Memgraph, the dataset will be loaded.")),(0,r.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -u memgraph mg_import_csv --nodes people_nodes.csv --nodes restaurants_nodes.csv --relationships people_relationships.csv --relationships restaurants_relationships.csv\n")),(0,r.kt)("p",null,"The next time you run Memgraph, the dataset will be loaded."))))}h.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);